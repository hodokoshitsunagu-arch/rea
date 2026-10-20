import {spawnSync} from 'node:child_process';
import {existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const apps=["Yalla","YoHo","MICO","TopTop","WePlay-AR","Spoon","WePlay-JP","WePlay-KR","Mirrativ","Pococha","17LIVE","SUGO","Yalla-Parchis","Falla","HeeSay"];
let failed=false;
for(const app of apps){
 const folder=path.join(root,app,'demo');
 const name=existsSync(path.join(folder,'features.test.mjs'))?'features.test.mjs':app.startsWith('WePlay-')?'test.mjs':'model.test.mjs';
 const result=spawnSync(process.execPath,['--test',path.join(folder,name)],{encoding:'utf8'});
 console.log(app+': '+(result.status===0?'PASS':'FAIL'));
 process.stdout.write(result.stdout);
 if(result.status!==0){failed=true;process.stderr.write(result.stderr);}
}
process.exitCode=failed?1:0;
