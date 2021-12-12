require('../Object/Define')

function safeAdd(n,r){var a=(65535&n)+(65535&r);return(n>>16)+(r>>16)+(a>>16)<<16|65535&a}
function bitRotateLeft(r,d){return r<<d|r>>>32-d}
function md5(M,r,D){return r?D?rawHMACMD5(r,M):hexHMACMD5(r,M):D?rawMD5(M):hexMD5(M)}
function md5cmn(r,d,n,t,m,f){return safeAdd(bitRotateLeft(safeAdd(safeAdd(d,r),safeAdd(t,f)),m),n)}
function md5ff(r,d,n,t,m,f,i){return md5cmn(d&n|~d&t,r,d,m,f,i)}
function md5gg(r,d,n,t,m,f,i){return md5cmn(d&t|n&~t,r,d,m,f,i)}
function md5hh(r,d,n,t,m,f,i){return md5cmn(d^n^t,r,d,m,f,i)}
function md5ii(r,d,n,t,m,f,i){return md5cmn(n^(d|~t),r,d,m,f,i)}
function binlMD5(r,d){var n,t,m,f,i;r[d>>5]|=128<<d % 32,r[14+(d+64>>>9<<4)]=d;var e=1732584193,h=-271733879,g=-1732584194,o=271733878;for(n=0;n<r.length;n+=16)t=e,m=h,f=g,i=o,h=md5ii(h=md5ii(h=md5ii(h=md5ii(h=md5hh(h=md5hh(h=md5hh(h=md5hh(h=md5gg(h=md5gg(h=md5gg(h=md5gg(h=md5ff(h=md5ff(h=md5ff(h=md5ff(h,g=md5ff(g,o=md5ff(o,e=md5ff(e,h,g,o,r[n],7,-680876936),h,g,r[n+1],12,-389564586),e,h,r[n+2],17,606105819),o,e,r[n+3],22,-1044525330),g=md5ff(g,o=md5ff(o,e=md5ff(e,h,g,o,r[n+4],7,-176418897),h,g,r[n+5],12,1200080426),e,h,r[n+6],17,-1473231341),o,e,r[n+7],22,-45705983),g=md5ff(g,o=md5ff(o,e=md5ff(e,h,g,o,r[n+8],7,1770035416),h,g,r[n+9],12,-1958414417),e,h,r[n+10],17,-42063),o,e,r[n+11],22,-1990404162),g=md5ff(g,o=md5ff(o,e=md5ff(e,h,g,o,r[n+12],7,1804603682),h,g,r[n+13],12,-40341101),e,h,r[n+14],17,-1502002290),o,e,r[n+15],22,1236535329),g=md5gg(g,o=md5gg(o,e=md5gg(e,h,g,o,r[n+1],5,-165796510),h,g,r[n+6],9,-1069501632),e,h,r[n+11],14,643717713),o,e,r[n],20,-373897302),g=md5gg(g,o=md5gg(o,e=md5gg(e,h,g,o,r[n+5],5,-701558691),h,g,r[n+10],9,38016083),e,h,r[n+15],14,-660478335),o,e,r[n+4],20,-405537848),g=md5gg(g,o=md5gg(o,e=md5gg(e,h,g,o,r[n+9],5,568446438),h,g,r[n+14],9,-1019803690),e,h,r[n+3],14,-187363961),o,e,r[n+8],20,1163531501),g=md5gg(g,o=md5gg(o,e=md5gg(e,h,g,o,r[n+13],5,-1444681467),h,g,r[n+2],9,-51403784),e,h,r[n+7],14,1735328473),o,e,r[n+12],20,-1926607734),g=md5hh(g,o=md5hh(o,e=md5hh(e,h,g,o,r[n+5],4,-378558),h,g,r[n+8],11,-2022574463),e,h,r[n+11],16,1839030562),o,e,r[n+14],23,-35309556),g=md5hh(g,o=md5hh(o,e=md5hh(e,h,g,o,r[n+1],4,-1530992060),h,g,r[n+4],11,1272893353),e,h,r[n+7],16,-155497632),o,e,r[n+10],23,-1094730640),g=md5hh(g,o=md5hh(o,e=md5hh(e,h,g,o,r[n+13],4,681279174),h,g,r[n],11,-358537222),e,h,r[n+3],16,-722521979),o,e,r[n+6],23,76029189),g=md5hh(g,o=md5hh(o,e=md5hh(e,h,g,o,r[n+9],4,-640364487),h,g,r[n+12],11,-421815835),e,h,r[n+15],16,530742520),o,e,r[n+2],23,-995338651),g=md5ii(g,o=md5ii(o,e=md5ii(e,h,g,o,r[n],6,-198630844),h,g,r[n+7],10,1126891415),e,h,r[n+14],15,-1416354905),o,e,r[n+5],21,-57434055),g=md5ii(g,o=md5ii(o,e=md5ii(e,h,g,o,r[n+12],6,1700485571),h,g,r[n+3],10,-1894986606),e,h,r[n+10],15,-1051523),o,e,r[n+1],21,-2054922799),g=md5ii(g,o=md5ii(o,e=md5ii(e,h,g,o,r[n+8],6,1873313359),h,g,r[n+15],10,-30611744),e,h,r[n+6],15,-1560198380),o,e,r[n+13],21,1309151649),g=md5ii(g,o=md5ii(o,e=md5ii(e,h,g,o,r[n+4],6,-145523070),h,g,r[n+11],10,-1120210379),e,h,r[n+2],15,718787259),o,e,r[n+9],21,-343485551),e=safeAdd(e,t),h=safeAdd(h,m),g=safeAdd(g,f),o=safeAdd(o,i);return[e,h,g,o]}
function binl2rstr(r){var d,n="",t=32*r.length;for(d=0;d<t;d+=8)n+=String.fromCharCode(r[d>>5]>>>d%32&255);return n}
function rstr2binl(r){var d,n=[];for(n[(r.length>>2)-1]=void 0,d=0;d<n.length;d+=1)n[d]=0;var t=8*r.length;for(d=0;d<t;d+=8)n[d>>5]|=(255&r.charCodeAt(d/8))<<d%32;return n}
function rstrMD5(r){return binl2rstr(binlMD5(rstr2binl(r),8*r.length))}
function rstrHMACMD5(r,d){var n,t,m=rstr2binl(r),f=[],i=[];for(f[15]=i[15]=void 0,m.length>16&&(m=binlMD5(m,8*r.length)),n=0;n<16;n+=1)f[n]=909522486^m[n],i[n]=1549556828^m[n];return t=binlMD5(f.concat(rstr2binl(d)),512+8*d.length),binl2rstr(binlMD5(i.concat(t),640))}
function rstr2hex(r){var d,n,t="0123456789abcdef",m="";for(n=0;n<r.length;n+=1)d=r.charCodeAt(n),m+=t.charAt(d>>>4&15)+t.charAt(15&d);return m}
function str2rstrUTF8(r){return unescape(encodeURIComponent(r))}
function rawMD5(r){return rstrMD5(str2rstrUTF8(r))}
function hexMD5(r){return rstr2hex(rawMD5(r))}
function rawHMACMD5(r,d){return rstrHMACMD5(str2rstrUTF8(r),str2rstrUTF8(d))}
function hexHMACMD5(r,d){return rstr2hex(rawHMACMD5(r,d))}

function fillString(a){var d,b=(a.length+8>>6)+1,c=[];for(d=0;d<16*b;d++)c[d]=0;for(d=0;d<a.length;d++)c[d>>2]|=a.charCodeAt(d)<<24-8*(3&d);return c[d>>2]|=128<<24-8*(3&d),c[16*b-1]=8*a.length,c}
function binToHex(a){var d,b="0123456789abcdef",c="";for(d=0;d<4*a.length;d++)c+=b.charAt(15&a[d>>2]>>8*(3-d%4)+4)+b.charAt(15&a[d>>2]>>8*(3-d%4));return c}
function coreFunction(f){var o,p,q,r,s,u,v,x,g=[],h=1732584193,k=4023233417,l=2562383102,m=271733878,n=3285377520;for(v=0;v<f.length;v+=16){for(o=h,p=k,q=l,r=m,s=n,x=0;80>x;x++)g[x]=16>x?f[v+x]:cyclicShift(g[x-3]^g[x-8]^g[x-14]^g[x-16],1),u=modPlus(modPlus(cyclicShift(h,5),ft(x,k,l,m)),modPlus(modPlus(n,g[x]),kt(x))),n=m,m=l,l=cyclicShift(k,30),k=h,h=u;h=modPlus(h,o),k=modPlus(k,p),l=modPlus(l,q),m=modPlus(m,r),n=modPlus(n,s)}return[h,k,l,m,n]}
function ft(a,e,f,g){return 20>a?e&f|~e&g:40>a?e^f^g:60>a?e&f|e&g|f&g:e^f^g}
function kt(a){return 20>a?1518500249:40>a?1859775393:60>a?2400959708:3395469782}
function modPlus(a,b){var c=(65535&a)+(65535&b);return(a>>16)+(b>>16)+(c>>16)<<16|65535&c}
function cyclicShift(a,b){return a<<b|a>>>32-b}
function sha1(a){return binToHex(coreFunction(fillString(a)))}

Define(String.prototype, 'Hash', function (type) {
	return (typeof type !== 'undefined' && (type == 'sha-1' || type == 'sha1')) ? sha1(this) : md5(this)
})
