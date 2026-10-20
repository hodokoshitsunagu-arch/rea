export const names=['Akari','Ren','Yui','Sora'];
export function create(){return {phase:'choose',step:0,chain:[],likes:[],word:'',strokes:[],notice:''};}
export function reduce(s,a){const n=structuredClone(s);n.notice='';
 if(a.type==='reset')return create();
 if(a.type==='choose'&&s.phase==='choose'){if(!a.word.trim())return {...s,notice:'选择一个实验词'};n.word=a.word.trim();n.chain=[{kind:'word',owner:0,value:n.word}];n.phase='draw';}
 else if(a.type==='stroke'&&s.phase==='draw'){n.strokes.push(a.points);}
 else if(a.type==='submit'&&s.phase==='draw'){if(!s.strokes.length)return {...s,notice:'先画出你理解的词'};n.chain.push({kind:'image',owner:s.step,value:s.strokes});n.strokes=[];n.step++;n.phase='guess';}
 else if(a.type==='guess'&&s.phase==='guess'){if(!a.word.trim())return {...s,notice:'写下你对上一张画的猜测'};n.chain.push({kind:'word',owner:s.step,value:a.word.trim()});if(s.step===3)n.phase='reveal';else{n.step++;n.phase='draw';}}
 else if(a.type==='like'&&s.phase==='reveal'&&!s.likes.includes(a.player))n.likes.push(a.player);
 else if(a.type==='room')n.notice=s.phase==='choose'?'实验局尚未开始':'包体文案：游戏中不能换房';
 else return {...s,notice:'当前阶段不接受这个操作'};
 return n;}
export function view(s){if(s.phase==='reveal')return {phase:s.phase,step:s.step,chain:s.chain,likes:s.likes,notice:s.notice};const previous=s.chain.at(-1);return {phase:s.phase,step:s.step,previous:previous??null,strokes:s.strokes,notice:s.notice};}
