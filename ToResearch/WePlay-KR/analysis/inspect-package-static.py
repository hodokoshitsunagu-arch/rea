import json,pathlib,zipfile,struct,hashlib,re,sqlite3
root=pathlib.Path(__file__).resolve().parents[2]
pattern=re.compile(r'werewolf|wolf|spy|undercover|draw|relay|double.canvas|sing|karaoke|mic.grab|grab.mic|love.nest|cp.room|couple|baloot|jackaroo|liar|投票|人狼|歌|描|接力|抢麦|猜|双人|亲密|狼人|卧底|라이어|그림|노래|투표|늑대|연인',re.I)
def dex(b):
 u=lambda o:struct.unpack_from('<I',b,o)[0]
 def ul(o):
  n=0;s=0
  while True:
   c=b[o];o+=1;n|=(c&127)<<s;s+=7
   if not c&128:return n,o
 strings=[];hits=[]
 for i in range(u(56)):
  off=u(u(60)+4*i);length,p=ul(off);end=b.index(b'\0',p);s=b[p:end].decode('utf-8','replace');strings.append(s)
  if pattern.search(s):hits.append(dict(index=i,offset=off,utf16_length=length,text=s))
 types=[strings[u(u(68)+4*i)] for i in range(u(64))]
 classes=[types[u(u(100)+32*i)] for i in range(u(96))]
 return hits,classes,len(strings)
def pool(b,off):
 u16=lambda p:struct.unpack_from('<H',b,p)[0];u32=lambda p:struct.unpack_from('<I',b,p)[0]
 typ,head,size=struct.unpack_from('<HHI',b,off)
 if typ!=1:return []
 flags=u32(off+16);start=off+u32(off+20);hits=[]
 def l8(p):
  n=b[p];return (((n&127)<<8)|b[p+1],p+2) if n&128 else (n,p+1)
 def l16(p):
  n=u16(p);return (((n&32767)<<16)|u16(p+2),p+4) if n&32768 else (n,p+2)
 for i in range(u32(off+8)):
  p=start+u32(off+head+4*i);origin=p
  if flags&256:_,p=l8(p);n,p=l8(p);s=b[p:p+n].decode('utf-8','replace')
  else:n,p=l16(p);s=b[p:p+n*2].decode('utf-16le','replace')
  if pattern.search(s):hits.append(dict(pool_offset=off,index=i,offset=origin,text=s))
 return hits
def pools(b):
 hits=[]
 def walk(off,end):
  while off+8<=end:
   t,h,n=struct.unpack_from('<HHI',b,off)
   if n<8 or off+n>end:break
   if t==1:hits.extend(pool(b,off))
   elif t in [2,0x200]:walk(off+h,off+n)
   off+=n
 walk(0,len(b));return hits
for app in [pathlib.Path(__file__).resolve().parents[1].name]:
 folder=root/app;out=folder/'analysis';out.mkdir(exist_ok=True);info=json.loads((folder/'APK-INFO.json').read_text());inventory=[];hits=[];classes=[];sql=[]
 for f in info['files']:
  if not f['path'].endswith('.apk'):continue
  path=folder/f['path'];sha=f['sha256']
  with zipfile.ZipFile(path) as z:
   for zi in z.infolist():
    name=zi.filename;inventory.append(dict(apk=f['path'],apk_sha256=sha,member=name,bytes=zi.file_size,crc32=f'{zi.CRC:08x}'))
    if name.endswith('.dex'):
     b=z.read(name);hh,cc,n=dex(b);hits.extend(dict(apk=f['path'],member=name,kind='dex-string',**x) for x in hh);classes.extend(dict(apk=f['path'],member=name,class_name=c) for c in cc)
    elif name=='resources.arsc':
     hits.extend(dict(apk=f['path'],member=name,kind='resource-string-pool',**x) for x in pools(z.read(name)))
    elif name.endswith('.sqlite'):
     dest=out/pathlib.Path(name).name;dest.write_bytes(z.read(name));con=sqlite3.connect('file:'+str(dest)+'?mode=ro&immutable=1',uri=True);tables=con.execute("SELECT name,sql FROM sqlite_master WHERE type='table'").fetchall();rows={}
     for table,schema in tables:
      if table=='sqlite_sequence':continue
      quoted='"'+table.replace('"','""')+'"';rows[table]=con.execute('SELECT * FROM '+quoted).fetchall()
     sql.append(dict(apk=f['path'],member=name,tables=tables,rows=rows));con.close()
 (out/'archive-members.json').write_text(json.dumps(inventory,ensure_ascii=False,indent=2)+'\n');(out/'package-feature-strings.json').write_text(json.dumps(hits,ensure_ascii=False,indent=2)+'\n');(out/'dex-class-inventory.json').write_text(json.dumps(classes,ensure_ascii=False,indent=2)+'\n');(out/'packaged-database.json').write_text(json.dumps(sql,ensure_ascii=False,indent=2)+'\n');print(app,len(inventory),len(hits),len(classes),[(x['member'],len(x['tables'])) for x in sql],flush=True)
