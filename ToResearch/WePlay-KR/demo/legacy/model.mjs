export const names=['Min','Jin','Hana'];
export function create(){return {round:1,stage:'listen',players:[0],ranked:false,pendingRanked:false,claim:null,points:[0,0,0],results:[],notice:''};}
export function reduce(s,a){const n=structuredClone(s);n.notice='';
 if(a.type==='reset')return create();
 if(a.type==='join'){if(!Number.isInteger(a.player)||a.player<0||a.player>=names.length)return {...s,notice:'无效座位'};if(!n.players.includes(a.player))n.players.push(a.player);n.pendingRanked=n.players.length>=2;n.notice=n.ranked?'已加入排位场':'本题仍是练习；从下一题转为正式对战';}
 else if(a.type==='open'&&s.stage==='listen')n.stage='grab';
 else if(a.type==='grab'&&s.stage==='grab'&&s.players.includes(a.player)){n.claim=a.player;n.stage='sing';}
 else if(a.type==='judge'&&s.stage==='sing'){const delta=s.ranked&&a.correct?10:0;n.points[s.claim]+=delta;n.results.push({round:s.round,player:s.claim,correct:a.correct,ranked:s.ranked,delta});n.stage='settled';}
 else if(a.type==='next'&&s.stage==='settled'){n.round++;n.stage='listen';n.claim=null;n.ranked=n.pendingRanked;}
 else if(a.type==='leave'){if(s.players.length===1&&s.players.includes(a.player))return {...s,notice:'至少保留一位实验参与者'};if(s.stage==='sing')return {...s,notice:'演示规则：演唱中不能离席'};n.players=n.players.filter(x=>x!==a.player);n.pendingRanked=n.players.length>=2;}
 else return {...s,notice:'此操作不适用于当前阶段'};
 return n;}
