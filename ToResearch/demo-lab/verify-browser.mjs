import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
async function hashes(folder){const out={};for(const entry of await fs.readdir(folder,{withFileTypes:true})){if(entry.isFile()&&/\.(mjs|js|html|css|json)$/.test(entry.name)&&entry.name!=='verification.json')out[entry.name]=createHash('sha256').update(await fs.readFile(path.join(folder,entry.name))).digest('hex');}return out;}
import {fileURLToPath, pathToFileURL} from 'node:url';
const modulePath=process.env.REA_DEMO_PLAYWRIGHT;
if(!modulePath)throw new Error('Set REA_DEMO_PLAYWRIGHT to an existing playwright-core/index.mjs; no automatic install.');
const {chromium}=await import(pathToFileURL(modulePath).href);
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const scope=JSON.parse(await fs.readFile(root+'/RECONSTRUCTION-SCOPE.json','utf8'));
const names=process.argv.slice(2);const chosen=scope.apps.filter(a=>!names.length||names.includes(a.app));
const browser=await chromium.launch({executablePath:process.env.REA_DEMO_CHROME||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
const results=[];
try{
 for(const app of chosen){
  const data=JSON.parse(await fs.readFile(`${root}/${app.app}/demo/modules.json`,'utf8'));const modules=data.modules||data;
  assert.deepEqual(new Set(modules.map(m=>m.id)),new Set(app.ids),app.app+' registry coverage');
  const input_hashes=await hashes(`${root}/${app.app}/demo`);const appResults=[];
  for(const viewport of [{width:1280,height:900},{width:390,height:844}]){
   const page=await browser.newPage({viewport});page.setDefaultTimeout(5000);
   for(const module of modules){
    const errors=[];const errorListener=e=>errors.push(e.message);page.on('pageerror',errorListener);
    const record={app:app.app,id:module.id,viewport,steps:[],errors};
    try{
     const r=await page.goto(`http://127.0.0.1:4193/${app.app}/?feature=${encodeURIComponent(module.id)}`);assert.equal(r.status(),200);
     await page.locator('[data-testid="feature-select"]').waitFor();
     if(await page.locator('[data-testid="feature-select"]').inputValue()!==module.id)await page.locator('[data-testid="feature-select"]').selectOption(module.id);
     const state=page.locator('[data-testid="state"]');await state.waitFor();const start=await state.innerText();
     assert.ok(module.smoke_actions?.length,module.id+' has no recorded core journey');
     for(const step of module.smoke_actions){
      const action=typeof step==='string'?{type:'click',selector:step}:step;
      if(action.type==='fill')await page.locator(action.selector).fill(String(action.value));
      else if(action.type==='select')await page.locator(action.selector).selectOption(String(action.value));
      else if(action.type==='check')await page.locator(action.selector).check();
      else if(action.type==='uncheck')await page.locator(action.selector).uncheck();
      else await page.locator(action.selector).click();
      if(action.expected_text)assert.ok((await page.locator('body').innerText()).includes(action.expected_text));
      record.steps.push(action);
     }
     const end=await state.innerText();assert.notEqual(end,start,module.id+' journey did not change core state');
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);assert.equal(overflow,false,module.id+' overflow');
     assert.deepEqual(errors,[]);
     await page.locator('[data-action="reset"]').click();const reset=await state.innerText();assert.equal(reset,start,module.id+' reset mismatch');
     if(module.guard_smoke_actions?.length){
      record.guard_steps=[];
      for(const action of module.guard_smoke_actions){
       if(action.type==='fill')await page.locator(action.selector).fill(String(action.value));
       else if(action.type==='select')await page.locator(action.selector).selectOption(String(action.value));
       else await page.locator(action.selector).click();
       record.guard_steps.push(action);
      }
      assert.ok((await page.locator('[role="alert"]').innerText()).trim(),module.id+' guard did not report rejection');
      record.guard_rejection=true;
      await page.locator('[data-action="reset"]').click();assert.equal(await state.innerText(),start);
     }
     record.pass=true;record.state_changed=true;record.reset=true;record.horizontal_overflow=false;
     if(viewport.width===390){const directory=`${root}/${app.app}/demo/verification`;await fs.mkdir(directory,{recursive:true});await page.screenshot({path:`${directory}/${module.id}-mobile.png`,fullPage:true});record.screenshot=`verification/${module.id}-mobile.png`;}
    }catch(e){record.pass=false;record.failure=String(e);}
    page.off('pageerror',errorListener);appResults.push(record);
    console.log(app.app,module.id,viewport.width,record.pass?'PASS':record.failure);
   }
   await page.close();
  }
  assert.deepEqual(await hashes(`${root}/${app.app}/demo`),input_hashes,app.app+' files changed during verification');
  const result={input_hashes,app:app.app,module_count:modules.length,checks:appResults,passed:appResults.every(r=>r.pass),scope:'Local core-loop UI verification; no original APK/RTC/backend/payment/human verification.'};
  await fs.writeFile(`${root}/${app.app}/demo/verification.json`,JSON.stringify(result,null,2)+'\n');results.push(result);
 }
 await fs.writeFile(root+'/demo-lab/module-browser-verification.json',JSON.stringify({apps:results,passed:results.every(r=>r.passed)},null,2)+'\n');
 if(results.some(r=>!r.passed))process.exitCode=1;
}finally{await browser.close();}
