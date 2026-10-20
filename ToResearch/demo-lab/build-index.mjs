import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const scope=read('RECONSTRUCTION-SCOPE.json');
const escape=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const rows=[];
for(const app of scope.apps){
 const items=read(app.catalog_json).items;
 const registry=read(`${app.app}/demo/modules.json`);const modules=registry.modules||registry;
 for(const id of app.ids){
  const item=items.find(x=>x.id===id);assert.ok(item?.name&&item.distinctive&&item.core_loop,id+' missing title/summary');
  assert.ok(modules.some(x=>x.id===id),id+' missing demo');
  const grade=String(item.evidence_strength).slice(0,1);
  const href=`/${encodeURIComponent(app.app)}/?feature=${encodeURIComponent(id)}`;
  rows.push(`<tr data-app="${escape(app.app)}"><td class="app">${escape(app.app)}</td><td class="id"><a href="${href}">${escape(id)}</a><small>${grade==='C'?'C · 局部契约实验':escape(grade)+' · 静态证据'}</small></td><th scope="row"><a href="${href}">${escape(item.name)}</a></th><td>${escape(item.distinctive)}</td><td class="loop">${escape(item.core_loop)}</td><td><a class="open" href="${href}" aria-label="${escape(id+' '+item.name+' 打开demo')}">体验 ↗</a></td></tr>`);
 }
}
assert.equal(rows.length,196);
const options=scope.apps.map(a=>`<option value="${escape(a.app)}">${escape(a.app)}（${a.count}）</option>`).join('');
const html=`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" href="data:,"><title>特色机制一览 · REA互动实验室</title><style>
*{box-sizing:border-box}body{margin:0;background:#ece9df;color:#232b25;font:15px/1.65 system-ui,sans-serif}main{max-width:1500px;margin:auto;padding:48px 4vw}.kicker{font:12px monospace;letter-spacing:.16em;color:#526354}h1{font-size:clamp(32px,4.5vw,58px);line-height:1.15;letter-spacing:-.04em;margin:18px 0}.intro{max-width:850px;color:#536054}.filters{display:flex;gap:18px;align-items:end;flex-wrap:wrap;padding:22px 0}label{display:flex;flex-direction:column;gap:6px;font-size:13px}label.search{flex:1;min-width:220px}input,select{font:inherit;background:#fbfaf5;color:inherit;border:1px solid #adb6a7;border-radius:4px;padding:10px 12px;min-height:44px}#count{font-size:13px;color:#526354;margin:0 0 12px}.table-wrap{overflow-x:auto;border-block:1px solid #a8b3a0;background:#f8f7f0}table{width:100%;border-collapse:collapse;min-width:1040px;text-align:left}caption{text-align:left;padding:14px 16px;font-weight:600;color:#526354}thead{background:#dde4d3}th,td{padding:16px 13px;border-bottom:1px solid #d1d6c7;vertical-align:top}thead th{font-size:12px;white-space:nowrap;letter-spacing:.03em}tbody th{font-weight:650;width:22%}td.app{font-weight:650;white-space:nowrap}.id{white-space:nowrap}.id small{display:block;font-size:10px;color:#697565;margin-top:4px}td.loop{width:29%}a{color:inherit;text-underline-offset:4px}tbody th a{text-decoration:none}tbody tr:hover{background:#e9eedf}a:focus-visible,input:focus-visible,select:focus-visible{outline:3px solid #477457;outline-offset:3px}.open{white-space:nowrap;font-size:13px;display:inline-block;padding:4px 0}footer{color:#5b655c;font-size:12px;max-width:1000px;margin:24px 0}#empty{padding:24px;margin:0} [hidden]{display:none!important}@media(max-width:680px){main{padding:30px 5vw}.filters{gap:12px}label{width:100%}label.search{min-width:0}h1{font-size:36px}.intro{font-size:14px}.table-hint{font-size:12px;color:#697565}th,td{padding:13px 11px}}@media(min-width:681px){.table-hint{display:none}}
</style></head><body><main><span class="kicker">REA / INTERACTIVE MECHANISM LAB</span><h1>特色机制，一表浏览。</h1><p class="intro">15 个 App、196 项机制。查看编号、标题、独特性和核心玩法，点击标题或「体验」直接操作对应 demo。独特性是产品机制解释，不表示市场独占；每个 demo 内另列源规则、本地补齐和未知项。</p><div class="filters"><label>选择 App<select id="app-filter" aria-label="按App筛选"><option value="">全部 App（15）</option>${options}</select></label><label class="search">查找机制<input id="search" type="search" placeholder="搜索编号、标题、独特性或核心玩法" autocomplete="off"></label></div><p id="count" role="status" aria-live="polite">显示 196 / 196 项机制</p><p class="table-hint">表格可左右滑动，查看独特性和完整玩法。</p><div class="table-wrap" role="region" aria-label="特色机制表格，可横向滚动" tabindex="0"><table><caption>机制标题 · 独特性 · 核心玩法</caption><thead><tr><th scope="col">App</th><th scope="col">机制编号</th><th scope="col">机制标题</th><th scope="col">独特性</th><th scope="col">核心玩法</th><th scope="col">Demo</th></tr></thead><tbody>${rows.join('\n')}</tbody></table><p id="empty" hidden>没有匹配的机制，请调整搜索词或 App。</p></div><footer>上述说明来自各 App 的 FEATURE-CATALOG.md / analysis/feature-catalog.json，并与实现模块 ID 对齐。A/B/C 为静态证据分级；C 级只展示有依据的局部契约。账号、资产、时钟和服务回应均为本地模拟，未复现原后台、RTC或真实支付。各 App 的旧 demo 保留在 /legacy/。</footer></main><script>
const rows=[...document.querySelectorAll('tbody tr')];const search=document.querySelector('#search');const app=document.querySelector('#app-filter');
function filter(){const query=search.value.trim().toLocaleLowerCase();let count=0;for(const row of rows){const match=(!app.value||row.dataset.app===app.value)&&(!query||row.textContent.toLocaleLowerCase().includes(query));row.hidden=!match;if(match)count++;}document.querySelector('#count').textContent='显示 '+count+' / '+rows.length+' 项机制';document.querySelector('#empty').hidden=count!==0;}
search.addEventListener('input',filter);app.addEventListener('change',filter);
</script></body></html>`;
fs.writeFileSync(path.join(here,'index.html'),html);console.log(`Built table: ${rows.length} mechanisms / ${scope.apps.length} apps`);
