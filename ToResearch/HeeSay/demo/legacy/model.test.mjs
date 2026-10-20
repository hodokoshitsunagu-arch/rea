import{test}from'node:test';import assert from'node:assert/strict';import{initial,gift,advance,standings}from'./model.mjs';
test('单日门槛不能跨日拼凑',()=>{let s=gift(initial(),'A',1500);s=gift(advance(s,1),'A',1000);assert.deepEqual(standings(s).guardians,[])});
test('七日按批次到期与Top1切换',()=>{let s=gift(initial(),'A',3000);s=gift(advance(s,1),'B',2500);assert.equal(standings(s).couple,'A');s=advance(s,6);assert.equal(standings(s).scores.A,undefined);assert.equal(standings(s).couple,'B')});
test('并列身份保持未知',()=>{let s=gift(gift(initial(),'A',2500),'B',2500);assert.equal(standings(s).tie,true);assert.match(standings(s).couple,/未知/)});

test('Top1只在已达标guardian中比较',()=>{let s=gift(initial(),'A',2500);s=gift(s,'B',2000);s=gift(advance(s,1),'B',2000);assert.equal(standings(s).couple,'A');assert.equal(standings(s).scores.B,4000)});
