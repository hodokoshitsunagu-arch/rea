export const initial=()=>({phase:'draft',amount:100,boxCount:5,winner:2,selected:null,reward:null,guest:'DJ Hana',history:[]});
export function reduce(s,a){s=structuredClone(s);const log=t=>s.history.push(t);
if(a==='create'&&s.phase==='draft'){s.phase='offered';log('听众创建 Lucky Box，100 spoons / 5 boxes');}
if(a==='accept'&&s.phase==='offered'){s.phase='choosing';log(s.guest+' 接受挑战');}
if(/^box[0-4]$/.test(a)&&s.phase==='choosing'){s.selected=Number(a.slice(3));s.phase='selected';log('锁定盒子 '+(s.selected+1));}
if(a==='reveal'&&s.phase==='selected'){s.reward=s.selected===s.winner?s.amount:Math.floor(s.amount*0.1);s.phase='result';log('结果：'+s.reward+' spoons；本地固定答案3，非随机概率恢复');}
if(a==='cancel'&&['offered','choosing'].includes(s.phase)){s.phase='cancelled';log('本地选择：尚未揭晓可取消，不模拟资金退回');}
return s;}
export const actions=[['create','听众 · 发送挑战'],['accept','主播 · 接受'],...Array.from({length:5},(_,i)=>['box'+i,'选盒 '+(i+1)]),['reveal','揭晓'],['cancel','取消挑战']];
export const describe=s=>`${s.phase} · 收礼者 ${s.guest} · 盒子 ${s.selected===null?'尚未选择':s.selected+1} · 获得 ${s.reward??'待揭晓'} spoons`;
