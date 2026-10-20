import json,struct,zipfile,pathlib,re,hashlib
R=pathlib.Path('/Users/mark/Projects/REA/ToResearch')
paths={'Yalla':'apks/com.weieyu.yalla.apk','YoHo':'YoHo-5.48.40.apk','MICO':'apks/com.mico.apk','TopTop':'apks/com.game.friends.android.apk'}
def pool(b,o):
 h=struct.unpack_from('<H',b,o+2)[0];n,_,flags,start=struct.unpack_from('<IIII',b,o+8);out=[]
 def l8(p):
  v=b[p];return (((v&127)<<8)|b[p+1],p+2) if v&128 else (v,p+1)
 def l16(p):
  v=struct.unpack_from('<H',b,p)[0];return (((v&32767)<<16)|struct.unpack_from('<H',b,p+2)[0],p+4) if v&32768 else (v,p+2)
 for i in range(n):
  p=o+start+struct.unpack_from('<I',b,o+h+4*i)[0]
  if flags&256:_,p=l8(p);z,p=l8(p);s=b[p:p+z].decode('utf8','replace')
  else:z,p=l16(p);s=b[p:p+z*2].decode('utf-16le','replace')
  out.append(s)
 return out
pattern=re.compile(r'(?i)(pk|karaoke|ludo|dice|truth|dare|wolf|mafia|parchis|chess|carrom|domino|blind.?date|matchmaker|couple|family|clan|guild|mic.?seat|auction|draw|guess|room.?game|sing|battle|lottery|wheel|marriage|wedding|crush|heart.?beat|treasure|gift.?wall|cupid|pair|charm|confession)')
for app,p in paths.items():
 out=R/app/'analysis';apk=R/app/p;records=[];members=[]
 with zipfile.ZipFile(apk) as z:
  for m in z.infolist():
   members.append({'path':m.filename,'bytes':m.file_size,'crc32':f'{m.CRC:08x}'})
   if m.filename.endswith('.dex'):
    b=z.read(m);n,o=struct.unpack_from('<II',b,56)
    for i in range(n):
     x=struct.unpack_from('<I',b,o+4*i)[0];p=x
     while b[p]&128:p+=1
     p+=1;e=b.find(b'\0',p);s=b[p:e].decode('utf8','replace')
     if pattern.search(s):records.append({'source':m.filename,'string_index':i,'offset':x,'value':s})
   elif m.filename in ('resources.arsc','AndroidManifest.xml'):
    b=z.read(m);pos=0
    # Pools are chunk-aligned; recursive resource packages start at package header.
    def walk(o,end):
     while o+8<=end:
      t,h,sz=struct.unpack_from('<HHI',b,o)
      if sz<8 or o+sz>end:break
      if t==1:
       for i,s in enumerate(pool(b,o)):
        if pattern.search(s):records.append({'source':m.filename,'pool_offset':o,'string_index':i,'value':s})
      elif t in (2,3,0x200):walk(o+h,o+sz)
      o+=sz
    walk(0,len(b))
 json.dump({'apk':str(apk),'sha256':hashlib.sha256(apk.read_bytes()).hexdigest(),'members':members},open(out/'archive-inventory.json','w'),ensure_ascii=False,indent=2)
 json.dump({'method':'Format-aware DEX string_ids and Android resource string pools; lexical candidates are not runtime or semantic proof','pattern':pattern.pattern,'matches':records},open(out/'feature-candidates.json','w'),ensure_ascii=False,indent=2)
 print(app,len(members),len(records))
