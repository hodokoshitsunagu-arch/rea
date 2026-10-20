import pathlib,zipfile,struct,json,re
root=pathlib.Path(__file__).resolve().parents[2]
pattern=re.compile(r'draw_relay|double_canvas|musichum|music_hum|snatch|spy.*(?:rule|bomb|word)|(?:marry|couple|cp_room).*(?:desc|tips|rule)|(?:mic|sing).*(?:solo|rank|score)',re.I)
def parse(b):
 u16=lambda p:struct.unpack_from('<H',b,p)[0];u32=lambda p:struct.unpack_from('<I',b,p)[0]
 def pool(off):
  head=u16(off+2);count=u32(off+8);flag=u32(off+16);base=off+u32(off+20);out=[]
  def l8(p):
   n=b[p];return (((n&127)<<8)|b[p+1],p+2) if n&128 else (n,p+1)
  def l16(p):
   n=u16(p);return (((n&32767)<<16)|u16(p+2),p+4) if n&32768 else (n,p+2)
  for i in range(count):
   p=base+u32(off+head+4*i);loc=p
   if flag&256:_,p=l8(p);n,p=l8(p);s=b[p:p+n].decode('utf-8','replace')
   else:n,p=l16(p);s=b[p:p+n*2].decode('utf-16le','replace')
   out.append((s,loc))
  return out
 off=u16(2);globalpool=None;rows=[];coverage={'simple_entries':0,'complex_entries_skipped':0,'type_chunks':0}
 while off<len(b):
  t,h,size=struct.unpack_from('<HHI',b,off)
  if t==1 and globalpool is None:globalpool=pool(off)
  if t==0x200:
   pkgid=u32(off+8);typepool=pool(off+u32(off+268));keys=pool(off+u32(off+276));typeoffset=u32(off+284) if h>=288 else 0;p=off+h
   while p<off+size:
    tt,hh,ss=struct.unpack_from('<HHI',b,p)
    if tt==0x201:
     coverage['type_chunks']+=1;typeid=b[p+8];flags=b[p+9];count=u32(p+12);start=u32(p+16);cfg=b[p+20:p+hh];locale=cfg[8:12].hex() if len(cfg)>=12 else None
     entries=[]
     if flags&1:
      for i in range(count):idx,o=struct.unpack_from('<HH',b,p+hh+4*i);entries.append((idx,o*4))
     elif flags&2:
      for i in range(count):o=u16(p+hh+2*i);entries.extend([] if o==0xffff else [(i,o*4)])
     else:
      for i in range(count):o=u32(p+hh+4*i);entries.extend([] if o==0xffffffff else [(i,o)])
     for idx,eoff in entries:
      ep=p+start+eoff;eh=u16(ep);ef=u16(ep+2);key=u32(ep+4)
      if ef&1:coverage['complex_entries_skipped']+=1;continue
      coverage['simple_entries']+=1;vp=ep+eh;typ=b[vp+3];data=u32(vp+4)
      if typ==3 and pattern.search(keys[key][0]):
       text,loc=globalpool[data];rows.append(dict(resource_id=f'0x{((pkgid<<24)|((typeid+typeoffset)<<16)|idx):08x}',resource_type=typepool[typeid-1][0],name=keys[key][0],configuration_hex=cfg.hex(),locale_bytes_hex=locale,entry_offset=ep,value_offset=vp,string_index=data,string_offset=loc,text=text))
    p+=ss
  off+=size
 return rows,coverage
for app in [pathlib.Path(__file__).resolve().parents[1].name]:
 folder=root/app;info=json.loads((folder/'APK-INFO.json').read_text());rows=[];coverage=[]
 for f in info['files']:
  if not f['path'].endswith('.apk'):continue
  with zipfile.ZipFile(folder/f['path']) as z:
   if 'resources.arsc' not in z.namelist():continue
   r,c=parse(z.read('resources.arsc'));rows.extend(dict(apk=f['path'],apk_sha256=f['sha256'],member='resources.arsc',**x) for x in r);coverage.append(dict(apk=f['path'],**c))
 (folder/'analysis/resource-rules.json').write_text(json.dumps({'parser':'Android ResTable simple string entries; resource IDs/key/global-pool mapping; complex bags skipped explicitly','coverage':coverage,'records':rows},ensure_ascii=False,indent=2)+'\n')
 print(app,len(rows));print([(r['name'],r['text'][:220]) for r in rows if re.search('rule|double_canvas|relay.*(?:desc|tips)|solo',r['name'],re.I)][:20],flush=True)
