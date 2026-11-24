import {today,rank,stats} from './core.mjs';
import {dueQueue} from './learning.mjs';
export function searchAll(s,q,limit=50){const terms=String(q).trim().toLowerCase().split(/\s+/).filter(Boolean);if(!terms.length)return [];return s.records.filter(r=>{const text=[r.type,...Object.values(r.data)].join(' ').toLowerCase();return terms.every(t=>text.includes(t))}).slice(0,limit)}
export function briefing(s,date=today()){return {stats:stats(s,date),priorities:s.records.filter(r=>r.type==='tasks'&&!r.done&&(!r.data.notBefore||r.data.notBefore<=date)&&(!r.data.depends||s.records.some(x=>x.id===r.data.depends&&x.done))).sort((a,b)=>rank(b,date)-rank(a,date)).slice(0,3),recall:dueQueue(s.records,date).length}}
