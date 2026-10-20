import assert from 'node:assert/strict';
import {initial,reduce} from './model.mjs';
let s=initial();assert.deepEqual(reduce(s,'gift0'),s);s=reduce(s,'start');for(const a of ['gift0','cheer0','cheer0','cheer0','cheer1','cheer1','cheer1'])s=reduce(s,a);assert.deepEqual(s.points,[40,30]);assert.deepEqual(reduce(s,'cheer0'),s);s=reduce(s,'gift1');assert.deepEqual(s.points,[40,40]);s=reduce(s,'finish');assert.equal(s.winner,'tie');s=initial();s=reduce(s,'start');s=reduce(s,'surrender');assert.equal(s.phase,'surrendered');assert.deepEqual(reduce(s,'cheer1'),s);
console.log('17LIVE: state invariants / repeat settlement / deterministic reset PASS');

{const before=initial();assert.deepEqual(reduce(before,'unknown'),before);assert.deepEqual(reduce(before,'gift9'),before);assert.deepEqual(reduce(before,'box99'),before);}
