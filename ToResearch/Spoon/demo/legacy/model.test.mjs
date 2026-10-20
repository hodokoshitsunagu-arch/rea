import assert from 'node:assert/strict';
import {initial,reduce} from './model.mjs';
let s=initial();s=reduce(s,'reveal');assert.equal(s.phase,'draft');for(const a of ['create','accept','box0','reveal'])s=reduce(s,a);assert.equal(s.reward,10);assert.deepEqual(reduce(s,'reveal'),s);s=initial();for(const a of ['create','accept','box2','reveal'])s=reduce(s,a);assert.equal(s.reward,100);assert.equal(initial().history.length,0);
console.log('Spoon: state invariants / repeat settlement / deterministic reset PASS');

{const before=initial();assert.deepEqual(reduce(before,'unknown'),before);assert.deepEqual(reduce(before,'gift9'),before);assert.deepEqual(reduce(before,'box99'),before);}
