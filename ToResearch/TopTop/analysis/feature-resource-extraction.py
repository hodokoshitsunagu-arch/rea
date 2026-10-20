import json,struct,zipfile,pathlib,re,hashlib
R=pathlib.Path(__file__).resolve().parents[2]
paths={'TopTop': 'apks/com.game.friends.android.apk'}
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
pat=re.compile(r'(?i)(vehicle|noble|nobility|svip|\bvip\b|privilege|badge|medal|guardian|guardianship|family|auction|couple|relationship|intimacy|marriage|wedding|pk|battle|ludo|carrom|domino|chess|treasure|chest|dice|roulette|wheel|lottery|crush|mask|speed|party|game|club|weapon|reviv|eliminat|star.?sign|horoscope|zodiac|rank|charm|challenges|bestie|bff|pair|mystery|gift wall|reward)')
for app,p in paths.items():
 records=[]
 with zipfile.ZipFile(R/app/p) as z:
  b=z.read('resources.arsc')
  def walk(o,end):
   while o+8<=end:
    t,h,sz=struct.unpack_from('<HHI',b,o)
    if sz<8 or o+sz>end:break
    if t==1:
     for i,s in enumerate(pool(b,o)):
      if pat.search(s):records.append({'source':'resources.arsc','pool_offset':o,'string_index':i,'value':s})
    elif t in (2,3,0x200):walk(o+h,o+sz)
    o+=sz
  walk(0,len(b))
 json.dump({'method':'Android resource string-pool parser, index is not resource ID; candidate text not runtime proof','matches':records},open(R/app/'analysis/feature-expanded-resources.json','w'),ensure_ascii=False,indent=2)
 print(app,len(records))
