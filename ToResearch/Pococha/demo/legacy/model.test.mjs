import assert from 'node:assert/strict';
import {initial,reduce} from './model.mjs';
let s=initial();s=reduce(s,'freeze');s=reduce(s,'rest');assert.equal(s.rest,false);s=reduce(s,'day');assert.equal(s.rank,0);assert.equal(s.members.length,1);s=initial();s=reduce(s,'watch');s=reduce(s,'day');assert.equal(s.members.length,2);s=initial();for(const a of ['support','support','support','day'])s=reduce(s,a);assert.equal(s.rank,1);s=initial();s=reduce(s,'rest');assert.deepEqual(reduce(s,'support'),s);assert.equal(reduce(s,'freeze').freeze,false);
console.log('Pococha: state invariants / repeat settlement / deterministic reset PASS');

{const before=initial();assert.deepEqual(reduce(before,'unknown'),before);assert.deepEqual(reduce(before,'gift9'),before);assert.deepEqual(reduce(before,'box99'),before);}
