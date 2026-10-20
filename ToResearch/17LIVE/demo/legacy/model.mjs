export const initial=()=>({phase:'waiting',points:[0,0],mission:[0,0],target:3,bonusGranted:false,winner:null,history:[]});
export function reduce(s,a){s=structuredClone(s);const log=t=>s.history.push(t);
if(a==='start'&&s.phase==='waiting'){s.phase='battle';log('PK开始：双方观众共同完成任务');}
if(/^gift[01]$/.test(a)&&s.phase==='battle'){const i=+a.slice(4);s.points[i]+=10;log('队'+(i+1)+' 礼物10点 → PK10点（包体文案1:1）');}
if(/^cheer[01]$/.test(a)&&s.phase==='battle'&&!s.bonusGranted){const i=+a.slice(5);s.mission[i]=Math.min(s.target,s.mission[i]+1);log('队'+(i+1)+' 共斗任务 +1');if(s.mission.every(n=>n===s.target)){s.bonusGranted=true;s.points=s.points.map(n=>n+30);log('本地示例：双方完成任务，各获得30额外点；奖励数额未恢复');}}
if(a==='surrender'&&s.phase==='battle'){s.phase='surrendered';s.winner=1;log('队1投降；共斗任务结束（包体文案）');}
if(a==='finish'&&s.phase==='battle'){s.phase='finished';s.winner=s.points[0]===s.points[1]?'tie':s.points[0]>s.points[1]?0:1;log('本地选择：按PK点结算，平分保留平局');}
return s;}
export const actions=[['start','等待室 · 开始PK'],['gift0','队1 · 礼物10点'],['gift1','队2 · 礼物10点'],['cheer0','队1 · 完成助力'],['cheer1','队2 · 完成助力'],['surrender','队1 · 投降'],['finish','时间结束']];
export const describe=s=>`${s.phase} · PK ${s.points.join(' : ')} · 共斗任务 ${s.mission.join('/3 vs ')}/3 · ${s.bonusGranted?'额外点已发放':'协作未达标'} · 结果 ${s.winner===null?'待定':s.winner==='tie'?'平局':'队'+(s.winner+1)}`;
