import assert from 'node:assert/strict';import {initial,step} from './model.mjs';
const original=initial();step(original,{type:'gift',player:0});assert.deepEqual(original,initial());
let s=step(initial(),{type:'start'});s=step(s,{type:'gift',player:0});for(let i=0;i<3;i++)s=step(s,{type:'tick'});assert.match(s.result,/流拍/);s=step(initial(),{type:'new'});s=step(s,{type:'start'});for(let i=0;i<3;i++)s=step(s,{type:'gift',player:0});for(let i=0;i<3;i++)s=step(s,{type:'tick'});assert.equal(s.intimacy,50);assert.match(s.relation,/新关系/);
console.log('semantic tests passed');
