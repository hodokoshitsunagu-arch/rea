# Reproduce supplementary Unity/IL2CPP string evidence. Requires caller-supplied UnityPy.
import json,pathlib,struct,zipfile,UnityPy
root=pathlib.Path(__file__).resolve().parents[1];apk=root/'apks/com.yalla.yallaparchisi.apk';out=root/'analysis';texts=[]
with zipfile.ZipFile(apk) as z:
 member='assets/bin/Data/data.unity3d';env=UnityPy.load(z.read(member))
 for obj in env.objects:
  if obj.type.name=='TextAsset':
   d=obj.read();s=d.m_Script.decode('utf8','replace') if isinstance(d.m_Script,bytes) else d.m_Script
   texts.append({'member':member,'path_id':obj.path_id,'name':d.m_Name,'text':s})
 member='assets/bin/Data/Managed/Metadata/global-metadata.dat';b=z.read(member);magic,version,offset,size,data,_=struct.unpack_from('<6I',b,0)
 if magic!=0xfab11baf:raise ValueError('not IL2CPP metadata')
 literals=[]
 for pos in range(0,size,8):
  length,index=struct.unpack_from('<II',b,offset+pos)
  if data+index+length>len(b):raise ValueError('literal outside file')
  literals.append({'member':member,'index':pos//8,'offset':data+index,'text':b[data+index:data+index+length].decode('utf8','replace')})
(out/'unity-text-assets.json').write_text(json.dumps(texts,ensure_ascii=False,indent=2))
(out/'il2cpp-string-literals.json').write_text(json.dumps({'version':version,'strings':literals},ensure_ascii=False,indent=2))
