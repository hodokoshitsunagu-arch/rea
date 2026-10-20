import{test}from'node:test';import assert from'node:assert/strict';import{initial,roll,move,captureScenario}from'./model.mjs';
test('双数强制拆己方路障',()=>{let s=roll(initial(),2,2);assert.throws(()=>move(s,2));s=move(s,0);assert.equal(s.breakRequired,false)});
test('不能越过路障',()=>{let s=captureScenario();s.pieces[1]=[12,12,-1,-1];s=roll(s,3,1);assert.throws(()=>move(s,0))});
test('吃子获得20步且奖励不消费另一骰',()=>{let s=move(roll(captureScenario(),2,1),0);assert.equal(s.bonus,20);assert.equal(s.pieces[1][0],-1);s=move(s,0);assert.equal(s.pieces[0][0],32);assert.deepEqual(s.remaining,[1]);assert.equal(s.bonus,0)});
test('三次双数Spanish与Classic选择不同受罚棋子',()=>{for(let mode of['spanish','classic']){let s=initial(mode);s.pieces[0]=[30,10,-1,-1];s.doubles=2;s.lastMoved=1;s=roll(s,2,2);assert.equal(s.pieces[0][mode==='spanish'?1:0],-1);assert.equal(s.turn,1)}});
