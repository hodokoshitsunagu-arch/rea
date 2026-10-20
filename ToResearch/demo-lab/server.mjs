import http from 'node:http';
import {readFile,realpath,stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.dirname(fileURLToPath(import.meta.url));
const apps=['Yalla','YoHo','MICO','TopTop','WePlay-AR','Spoon','WePlay-JP','WePlay-KR','Mirrativ','Pococha','17LIVE','SUGO','Yalla-Parchis','Falla','HeeSay'];
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.svg':'image/svg+xml','.json':'application/json; charset=utf-8'};
const port=Number(process.env.RESEARCH_DEMO_PORT||4193);
if(!Number.isInteger(port)||port<1||port>65535)throw new Error('Invalid RESEARCH_DEMO_PORT');
http.createServer(async(req,res)=>{
 try{
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405).end();return;}
  const uri=decodeURIComponent(new URL(req.url,'http://127.0.0.1').pathname);
  let file;
  if(uri==='/'||uri==='/index.html')file=path.join(root,'index.html');
  else{
   const [,app,...parts]=uri.split('/');
   if(!apps.includes(app))throw new Error('Not found');
   if(!parts.length){res.writeHead(302,{Location:`/${app}/`}).end();return;}
   const directory=await realpath(path.resolve(root,'..',app,'demo'));
   const relative=parts.join('/');
   const candidate=path.resolve(directory,!relative||relative.endsWith('/')?relative+'index.html':relative);
   if(!candidate.startsWith(directory+path.sep)||!types[path.extname(candidate)])throw new Error('Not found');
   file=await realpath(candidate);
   if(!file.startsWith(directory+path.sep))throw new Error('Not found');
  }
  const metadata=await stat(file);if(!metadata.isFile())throw new Error('Not found');
  const body=await readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)],'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:body);
 }catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'}).end('Not found');}
}).listen(port,'127.0.0.1',()=>console.log(`Research demos: http://127.0.0.1:${port}/ (only allowlisted demo files; APK/evidence excluded)`));
