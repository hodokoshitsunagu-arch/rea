import fs from 'node:fs/promises';import path from 'node:path';import assert from 'node:assert/strict';import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');const scope=JSON.parse(await fs.readFile(root+'/RECONSTRUCTION-SCOPE.json','utf8'));const selected=process.argv.slice(2);const results=[];
for(const app of scope.apps.filter(a=>!selected.length||selected.includes(a.app))){
 const folder=path.join(root,app.app,'demo');const modulesPath=path.join(folder,'modules.json');const record={app:app.app,expected:app.ids.length};
 try{
  const data=JSON.parse(await fs.readFile(modulesPath,'utf8'));const modules=data.modules||data;assert.ok(Array.isArray(modules));assert.deepEqual([...new Set(modules.map(m=>m.id))].sort(),[...app.ids].sort());assert.equal(modules.length,app.ids.length);
  for(const m of modules){assert.ok(m.title);assert.ok(m.implemented_scope);assert.ok(m.limitations);assert.ok(m.test_status);assert.ok(Array.isArray(m.smoke_actions)&&m.smoke_actions.length,m.id+' empty smoke_actions');}
  await fs.access(path.join(folder,'legacy/index.html'));await fs.access(path.join(folder,'features.test.mjs'));
  record.passed=true;record.module_count=modules.length;record.registry_sha256=createHash('sha256').update(await fs.readFile(modulesPath)).digest('hex');record.legacy_preserved=true;
 }catch(e){record.passed=false;record.error=String(e);}
 results.push(record);
}
console.log(JSON.stringify(results,null,2));if(results.some(x=>!x.passed))process.exitCode=1;
