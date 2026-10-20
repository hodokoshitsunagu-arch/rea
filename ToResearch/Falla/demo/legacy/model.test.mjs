import{test}from'node:test';import assert from'node:assert/strict';import{initial,roll,move,captureScenario}from'./model.mjs';
test('无吃子不能进入快速终点轨道',()=>{let s=move(roll(initial(),4));assert.equal(s.pieces[0],48);assert.equal(s.turn,1)});
test('吃子回基地并保留回合',()=>{let s=move(roll(captureScenario(),1));assert.equal(s.pieces[1],-1);assert.equal(s.captures[0],1);assert.equal(s.turn,0)});
test('连续三次6结束回合',()=>{let s=initial();s.pieces=[0,30];s=move(roll(s,6));s=move(roll(s,6));s=roll(s,6);assert.equal(s.turn,1);assert.equal(s.rolled,null)});
test('精确终点而不是超过',()=>{let s=initial();s.pieces[0]=56;s.captures[0]=1;assert.equal(move(roll(s,2)).pieces[0],56);assert.equal(move(roll(s,1)).phase,'won')});
