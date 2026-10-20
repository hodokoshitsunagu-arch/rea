export const names=['Noor','Omar','Lina','Ali','Maya','Rami'];
export function create(){return {phase:'setup',words:['雨伞','雨衣 / 胶靴'],limit:12,turn:0,hints:[],votes:[],eliminated:null,links:[],notice:''};}
export function reduce(s,a){const n=structuredClone(s);n.notice='';
 if(a.type==='reset')return create();
 if(a.type==='start'&&s.phase==='setup'){if(!a.normal.trim()||!a.spy.trim())return {...s,notice:'两个词卡内容都不能为空（演示校验）'};if(!Number.isInteger(a.limit)||a.limit<1||a.limit>40)return {...s,notice:'实验长度须为1—40'};if([...a.spy.trim()].length>a.limit)return {...s,notice:'卧底词超过实验长度上限'};n.words=[a.normal.trim(),a.spy.trim()];n.limit=a.limit;n.phase='describe';}
 else if(a.type==='hint'&&s.phase==='describe'){if(!a.text.trim())return {...s,notice:'写下模拟发言摘要'};n.hints.push({player:s.turn,text:a.text.trim()});n.turn++;if(n.turn===6)n.phase='vote';}
 else if(a.type==='vote'&&s.phase==='vote'){if(!Number.isInteger(a.target)||a.target<0||a.target>5)return {...s,notice:'选择一个有效座位'};n.votes.push({player:s.votes.length,target:a.target});if(n.votes.length===6){const counts=names.map((_,i)=>n.votes.filter(v=>v.target===i).length);const max=Math.max(...counts);const leaders=counts.map((v,i)=>v===max?i:null).filter(x=>x!==null);n.eliminated=leaders.length===1?leaders[0]:null;n.phase='result';}}
 else if(a.type==='link'&&s.phase==='result'&&!s.links.includes(a.target)&&a.target!==0)n.links.push(a.target);
 else return {...s,notice:'此操作不适用于当前阶段'};
 return n;}
export function project(s,viewer){const publicState={phase:s.phase,turn:s.turn,hints:s.hints,voteCount:s.votes.length,eliminated:s.eliminated,links:s.links,notice:s.notice};if(s.phase==='result')return {...publicState,words:s.words,spy:4};if(s.phase==='describe'&&viewer===s.turn)return {...publicState,privateWord:s.words[viewer===4?1:0]};return publicState;}
