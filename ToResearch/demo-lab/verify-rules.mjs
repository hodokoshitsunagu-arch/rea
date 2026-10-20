import {spawnSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const scope=JSON.parse(fs.readFileSync(path.join(root,'RECONSTRUCTION-SCOPE.json')));
const results=[];
for(const a of scope.apps){
 const file=path.join(root,a.app,'demo','features.test.mjs');
 const result=spawnSync(process.execPath,['--test','--test-reporter=tap',file],{encoding:'utf8'});
 const output=(result.stdout||'')+(result.stderr||'');
 const read=name=>Number(output.match(new RegExp('^# '+name+' (\\d+)','m'))?.[1]||0);
 const record={app:a.app,exit_code:result.status,passed:result.status===0,tests:read('tests'),pass:read('pass'),fail:read('fail'),skipped:read('skipped'),test_sha256:fs.existsSync(file)?createHash('sha256').update(fs.readFileSync(file)).digest('hex'):null};
 fs.writeFileSync(path.join(root,a.app,'demo','test-results.txt'),output);
 results.push(record);console.log(a.app+': '+(record.passed?'PASS':'FAIL')+' '+record.pass+'/'+record.tests);
}
const report={node_version:process.version,scope:'Local reconstructed reducers; no original Android/server/RTC behavior validated',apps:results,passed:results.every(r=>r.passed),total_tests:results.reduce((n,r)=>n+r.tests,0)};
fs.writeFileSync(path.join(root,'demo-lab','rule-verification.json'),JSON.stringify(report,null,2)+'\n');
if(!report.passed)process.exitCode=1;
