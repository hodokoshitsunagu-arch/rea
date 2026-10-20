import assert from 'node:assert/strict';import {initial,step} from './model.mjs';
const original=initial();step(original,{type:'gift',player:0});assert.deepEqual(original,initial());
let s=initial();assert.deepEqual(step(s,{type:'tick'}),s);s=step(s,{type:'accept'});for(let i=0;i<3;i++)s=step(s,{type:'tick'});assert.equal(s.result.transfer,160);assert.deepEqual(s.points,[1160,640]);assert.equal(s.points.reduce((a,b)=>a+b),1800);
console.log('semantic tests passed');
