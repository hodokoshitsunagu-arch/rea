export const initial=()=>({phase:'solo',guest:null,mission:{player:0,viewer:0,target:3,claimed:false},history:[]});
export function reduce(s,a){s=structuredClone(s);const log=t=>s.history.push(t);
if(a==='invite'&&s.phase==='solo'){s.phase='invited';s.guest='Emomo Nao';log('主播邀请 Emomo Nao；等待对方接受');}
if(a==='accept'&&s.phase==='invited'){s.phase='connected';log('双方连接：虚拟形象加入舞台（仅状态模拟）');}
if(a==='reject'&&s.phase==='invited'){s.phase='solo';s.guest=null;log('取消邀请');}
if(a==='disconnect'&&s.phase==='connected'){s.phase='reconnecting';log('连接中断：暂停双人任务');}
if(a==='reconnect'&&s.phase==='reconnecting'){s.phase='connected';log('恢复同一搭档身份');}
if(['player','viewer'].includes(a)&&s.phase==='connected'&&!s.mission.claimed){s.mission[a]=Math.min(s.mission.target,s.mission[a]+1);log(a+' 任务进度 +1');}
if(a==='claim'&&s.phase==='connected'&&s.mission.player===3&&s.mission.viewer===3&&!s.mission.claimed){s.mission.claimed=true;log('本地任务已完成：双方分别达标，领取一次演示奖励');}
if(a==='end'){s.phase='solo';s.guest=null;log('联动结束；任务状态保留为本地回放记录');}
return s;}
export const actions=[['invite','邀请联动'],['accept','搭档接受'],['reject','取消邀请'],['player','主播 · 游戏任务 +1'],['viewer','观众 · 助力任务 +1'],['claim','结算双侧任务'],['disconnect','模拟断线'],['reconnect','重新连接'],['end','结束联动']];
export const describe=s=>`${s.phase} · Emomo ${s.guest??'尚未加入'} · 主播任务 ${s.mission.player}/3 · 观众任务 ${s.mission.viewer}/3 · ${s.mission.claimed?'已结算':'未结算'}`;
