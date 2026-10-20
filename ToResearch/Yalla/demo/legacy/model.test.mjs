import assert from 'node:assert/strict';import {initial,step} from './model.mjs';
const original=initial();step(original,{type:'gift',player:0});assert.deepEqual(original,initial());
let s=initial();s=step(s,{type:'gift',player:0});s=step(s,{type:'gift',player:1});for(let i=0;i<6;i++)s=step(s,{type:'tick'});assert.equal(s.phase,'ended');assert.equal(s.rewards.length,2);assert.equal(s.rewards[0].share,15);assert.deepEqual(step(s,{type:'gift',player:2}),s);
console.log('semantic tests passed');
