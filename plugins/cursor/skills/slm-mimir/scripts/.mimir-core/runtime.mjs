import {readFile as _0x43c4c12b05b3} from 'node:fs/promises';
import {createDecipheriv as _0xa928a3fd7a50} from 'node:crypto';
import {gunzipSync as _0x643e76b4e350} from 'node:zlib';
export async function load(_0xbb60733885bb,_0xaf9c6463907f,_0x7ae583da3b17,_0x8384bd4c20b6){
const _0x692a4aac071b=Buffer.from(_0x7ae583da3b17,'base64'),_0xa3a5aeb15670=Buffer.from(_0x8384bd4c20b6,'base64');
const _0x98776afde95a=Buffer.from(_0x692a4aac071b.map((_0xfad961e2c1bf,_0xfd99b8a6f5b8)=>_0xfad961e2c1bf^_0xa3a5aeb15670[_0xfd99b8a6f5b8]));
const _0xe45c929e157f=await _0x43c4c12b05b3(new URL(_0xaf9c6463907f,_0xbb60733885bb));
if(_0xe45c929e157f.subarray(0,5).toString()!=='MMIR1')throw new Error('Invalid Mimir runtime payload');
const _0x9abda8174290=_0xa928a3fd7a50('aes-256-gcm',_0x98776afde95a,_0xe45c929e157f.subarray(5,17));
_0x9abda8174290.setAAD(Buffer.from('SLM-Mimir-protected-runtime-v1'));
_0x9abda8174290.setAuthTag(_0xe45c929e157f.subarray(17,33));
const _0x0bc527237245=Buffer.concat([_0x9abda8174290.update(_0xe45c929e157f.subarray(33)),_0x9abda8174290.final()]);
const _0xe59bba110e4f=JSON.parse(_0x643e76b4e350(_0x0bc527237245).toString('utf8'));
let _0xb5036a383a54=_0xe59bba110e4f.code;
for(const _0x13aca5206001 of _0xe59bba110e4f.patches.sort((_0x293a22c396db,_0xd00d9b4f3da1)=>_0xd00d9b4f3da1.start-_0x293a22c396db.start)){
const _0xc3b39d0d2f46=JSON.stringify(_0x13aca5206001.kind==='origin'?_0xbb60733885bb:new URL(_0x13aca5206001.value,_0xbb60733885bb).href);
_0xb5036a383a54=_0xb5036a383a54.slice(0,_0x13aca5206001.start)+_0xc3b39d0d2f46+_0xb5036a383a54.slice(_0x13aca5206001.end);
}
return import('data:text/javascript;base64,'+Buffer.from(_0xb5036a383a54).toString('base64'));
}
