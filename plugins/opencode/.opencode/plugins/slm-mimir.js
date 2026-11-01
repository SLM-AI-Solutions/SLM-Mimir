import _0xd9f3434114a7 from 'node:fs/promises';
import { fileURLToPath as _0x3a54215a8ed7 } from 'node:url';
const _0xdf482444a88f = _0x3a54215a8ed7(new URL('./slm-mimir/', import.meta.url));
const _0x250be15b6947 = new WeakSet();
export const SLMMimir = async () => ({
config: async _0x3c5d32f3e27f => {
if (_0x250be15b6947.has(_0x3c5d32f3e27f)) return;
const _0x21a8f9974c54 = JSON.parse(await _0xd9f3434114a7.readFile(new URL('./slm-mimir/agent-definitions.json', import.meta.url), 'utf8'));
const _0x93fc715e23d6 = _0x3c5d32f3e27f.agents !== undefined || _0x3c5d32f3e27f.agent === undefined;
const _0xf6c9e4abfd98 = (_0x93fc715e23d6 ? _0x3c5d32f3e27f.agents : _0x3c5d32f3e27f.agent) ?? {};
if (typeof _0xf6c9e4abfd98 !== 'object' || Array.isArray(_0xf6c9e4abfd98)) throw new Error('Unsupported OpenCode agent configuration');
for (const _0xa7a3e05315e2 of Object.keys(_0x21a8f9974c54)) {
if (_0xf6c9e4abfd98[_0xa7a3e05315e2] || _0x3c5d32f3e27f.agent?.[_0xa7a3e05315e2] || _0x3c5d32f3e27f.agents?.[_0xa7a3e05315e2]) throw new Error(`SLM Mimir profile name already exists: ${_0xa7a3e05315e2}; existing configuration was preserved`);
}
const _0x2a6c9d9c4583 = _0x3c5d32f3e27f.skills;
const _0xb014171a63e1 = _0xdf482444a88f + 'skills';
let _0xf2a3e973f1a0;
if (Array.isArray(_0x2a6c9d9c4583)) _0xf2a3e973f1a0 = [...new Set([..._0x2a6c9d9c4583, _0xb014171a63e1])];
else if (_0x2a6c9d9c4583 === undefined) _0xf2a3e973f1a0 = _0x93fc715e23d6 ? [_0xb014171a63e1] : { paths: [_0xb014171a63e1] };
else {
if (_0x2a6c9d9c4583 === null || typeof _0x2a6c9d9c4583 !== 'object' || (_0x2a6c9d9c4583.paths !== undefined && !Array.isArray(_0x2a6c9d9c4583.paths))) throw new Error('Unsupported OpenCode skills configuration; existing configuration was preserved');
_0xf2a3e973f1a0 = { ..._0x2a6c9d9c4583, paths: [...new Set([...(_0x2a6c9d9c4583.paths ?? []), _0xb014171a63e1])] };
}
const _0x8f41cfb3d6b5 = {};
for (const [_0xa7a3e05315e2, _0xa4a8f1f40648] of Object.entries(_0x21a8f9974c54)) {
const _0xb820cc8063ca = _0xa4a8f1f40648.prompt + '\nInstalled skill root: ' + _0xdf482444a88f + 'skills/slm-mimir';
_0x8f41cfb3d6b5[_0xa7a3e05315e2] = _0x93fc715e23d6
? { description: _0xa4a8f1f40648.description, mode: 'subagent', system: _0xb820cc8063ca, permissions: [{ action: 'task', resource: '*', effect: 'deny' }] }
: { ..._0xa4a8f1f40648, prompt: _0xb820cc8063ca };
}
if (_0x93fc715e23d6) _0x3c5d32f3e27f.agents = { ..._0xf6c9e4abfd98, ..._0x8f41cfb3d6b5 };
else _0x3c5d32f3e27f.agent = { ..._0xf6c9e4abfd98, ..._0x8f41cfb3d6b5 };
_0x3c5d32f3e27f.skills = _0xf2a3e973f1a0;
_0x250be15b6947.add(_0x3c5d32f3e27f);
}
});
