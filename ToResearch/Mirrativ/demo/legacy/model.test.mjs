import assert from 'node:assert/strict';
import {initial,reduce} from './model.mjs';
let s=initial();s=reduce(s,'accept');assert.equal(s.phase,'solo');for(const a of ['invite','accept','disconnect','player'])s=reduce(s,a);assert.equal(s.mission.player,0);s=reduce(s,'reconnect');for(const a of ['player','player','player','viewer','viewer'])s=reduce(s,a);s=reduce(s,'claim');assert.equal(s.mission.claimed,false);s=reduce(s,'viewer');s=reduce(s,'claim');assert.equal(s.mission.claimed,true);assert.deepEqual(reduce(s,'claim'),s);
console.log('Mirrativ: state invariants / repeat settlement / deterministic reset PASS');

{const before=initial();assert.deepEqual(reduce(before,'unknown'),before);assert.deepEqual(reduce(before,'gift9'),before);assert.deepEqual(reduce(before,'box99'),before);}
