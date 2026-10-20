import{test}from'node:test';import assert from'node:assert/strict';import{initial,reduce}from'./model.mjs';
test('换麦保留阵营累计但显示新用户积分',()=>{let s=reduce(initial(),{type:'gift',side:'red',points:100});s=reduce(s,{type:'swap',side:'red'});assert.equal(s.total.red,100);assert.equal(s.personal[s.seat.red],0);assert.equal(initial().total.red,0)});
test('五分钟冷却禁止计分再进入新轮',()=>{let s=reduce(initial(),{type:'tick',seconds:300});assert.equal(s.phase,'cooldown');assert.throws(()=>reduce(s,{type:'gift',side:'red',points:10}));s=reduce(s,{type:'tick',seconds:300});assert.equal(s.phase,'PK');assert.equal(s.seconds,300)});

test('停止循环后不会被时间推进重新启动',()=>{let s=reduce(initial(),{type:'stop'});s=reduce(s,{type:'tick',seconds:300});assert.equal(s.phase,'stopped')});
