import pathlib,zipfile,struct,json,re,hashlib
root=pathlib.Path('/Users/mark/Projects/REA/ToResearch')
paths={'SUGO':'SUGO-2.52.0.1.apk','Yalla-Parchis':'apks/com.yalla.yallaparchisi.apk','Falla':'apks/com.juhaoliao.vochat.apk','HeeSay':'HeeSay-5.14.5.apk'}
patterns=re.compile(r'vip|svip|premium|noble|privilege|benefit|subscription|member|guardian|king|queen|level|family|couple|charm|medal|badge|ticket|lucky|party|parchis|ludo|dice|game|room|voice|match|nearby|pk|battle|wheel|couple|family|seat|mic|live|blind|truth|sing|karaoke|gift|marry|cp_|dating|speed|roulette|greedy',re.I)
def uleb(b,p):
 n=0;s=0
 while True:
  x=b[p];p+=1;n|=(x&127)<<s
  if x<128:return n,p
  s+=7
paths={k:v for k,v in paths.items() if k=='SUGO'}
for app,rel in paths.items():
 p=root/app/rel;out=root/app/'analysis';rows=[];classes=[];members=[]
 with zipfile.ZipFile(p) as z:
  for n in z.namelist():
   members.append({'name':n,'bytes':z.getinfo(n).file_size})
   if re.fullmatch(r'classes\d*\.dex',n):
    b=z.read(n);cnt,off=struct.unpack_from('<II',b,56)
    for i in range(cnt):
     pos=struct.unpack_from('<I',b,off+4*i)[0];_,s=uleb(b,pos);e=b.index(0,s);v=b[s:e].decode('utf8','replace')
     if v.startswith('L') and v.endswith(';') and '/' in v:classes.append({'member':n,'index':i,'offset':pos,'value':v})
     if patterns.search(v) and len(v)<1200:rows.append({'member':n,'index':i,'offset':pos,'value':v})
   if n=='resources.arsc':
    b=z.read(n);start=12
    # The first child is the global resource value string pool.
    typ,head,size=struct.unpack_from('<HHI',b,start)
    if typ==1:
     cnt=struct.unpack_from('<I',b,start+8)[0];flags=struct.unpack_from('<I',b,start+16)[0];base=start+struct.unpack_from('<I',b,start+20)[0]
     def l8(pos):
      x=b[pos];return (((x&127)<<8)|b[pos+1],pos+2) if x&128 else (x,pos+1)
     def l16(pos):
      x=struct.unpack_from('<H',b,pos)[0];return (((x&32767)<<16)|struct.unpack_from('<H',b,pos+2)[0],pos+4) if x&32768 else (x,pos+2)
     for i in range(cnt):
      pos=base+struct.unpack_from('<I',b,start+head+4*i)[0]
      if flags&256:_,q=l8(pos);ln,q=l8(q);v=b[q:q+ln].decode('utf8','replace')
      else:ln,q=l16(pos);v=b[q:q+2*ln].decode('utf16le','replace')
      if patterns.search(v) and len(v)<1200:rows.append({'member':n,'index':i,'offset':pos,'value':v})
 (out/'feature-expansion-resources.json').write_text(json.dumps({'apk':str(p),'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'scope':'DEX string tables and resources.arsc global value pool; matches are candidates, not runtime proof','matches':rows},ensure_ascii=False,indent=2))
 print(app,len(rows))
