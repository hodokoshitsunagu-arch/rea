export const initial=()=>({day:0,rank:0,meter:40,freeze:false,rest:false,members:[{name:'Aoi',away:0},{name:'Ren',away:9}],history:[]});
export function reduce(s,a){s=structuredClone(s);const log=t=>s.history.push(t);
if(a==='support'&&!s.rest){s.meter+=25;log('本地选择：粉丝助力 +25，应援公式未恢复');}
if(a==='freeze'&&!s.rest){s.freeze=!s.freeze;log('Freeze Pass '+(s.freeze?'启用':'关闭'));}
if(a==='rest'&&!s.freeze){s.rest=!s.rest;log('Rest Day '+(s.rest?'启用：禁止开播、等级不变':'关闭'));}
if(a==='watch'){const m=s.members.find(x=>x.name==='Ren');if(m){m.away=0;log('Ren 观看直播，连续缺席清零');}}
if(a==='day'){s.day++;if(!s.freeze&&!s.rest){s.rank+=s.meter>=100?1:s.meter>=50?0:-1;s.meter=0;log('本地示例阈值结算：100升级 / 50保级；非原始排行公式');}else log('休息保护：Rank不变');s.members=s.members.map(m=>({...m,away:m.away+1})).filter(m=>{if(m.away>=10){log(m.name+' 连续10天未观看，移出 Family（包体文案规则）');return false;}return true;});s.freeze=false;s.rest=false;}
return s;}
export const actions=[['support','应援贡献'],['freeze','切换 Freeze Pass'],['rest','切换 Rest Day'],['watch','Ren · 观看直播'],['day','推进一天并结算']];
export const describe=s=>`第 ${s.day} 天 · 示例等级 ${s.rank} · Meter ${s.meter} · Freeze ${s.freeze} · Rest ${s.rest} · Family ${s.members.map(m=>m.name+' 缺席'+m.away+'天').join(' / ')}`;
