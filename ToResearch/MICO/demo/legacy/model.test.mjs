import assert from 'node:assert/strict';import {initial,step} from './model.mjs';
const original=initial();step(original,{type:'gift',player:0});assert.deepEqual(original,initial());
let s=initial();for(let i=0;i<4;i++)s=step(s,{type:'upgrade',team:0});s=step(s,{type:'gift',player:0});assert.equal(s.points[0],20);s=step(step(s,{type:'tick'}),{type:'tick'});const before=s.points[0];s=step(s,{type:'gift',player:1});assert.equal(s.points[0],before);s=step(s,{type:'revive',player:1});s=step(s,{type:'gift',player:1});assert.equal(s.points[0],40);
console.log('semantic tests passed');
