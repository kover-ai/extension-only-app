(()=>{var _t=Object.create;var X=Object.defineProperty;var Rt=Object.getOwnPropertyDescriptor;var kt=Object.getOwnPropertyNames,Ee=Object.getOwnPropertySymbols,At=Object.getPrototypeOf,Se=Object.prototype.hasOwnProperty,wt=Object.prototype.propertyIsEnumerable;var Te=(e,t,r)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))Se.call(t,r)&&Te(e,r,t[r]);if(Ee)for(var r of Ee(t))wt.call(t,r)&&Te(e,r,t[r]);return e};var Pt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var jt=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of kt(t))!Se.call(e,n)&&n!==r&&X(e,n,{get:()=>t[n],enumerable:!(o=Rt(t,n))||o.enumerable});return e};var Dt=(e,t,r)=>(r=e!=null?_t(At(e)):{},jt(t||!e||!e.__esModule?X(r,"default",{value:e,enumerable:!0}):r,e));var x=(e,t,r)=>new Promise((o,n)=>{var i=u=>{try{c(r.next(u))}catch(a){n(a)}},f=u=>{try{c(r.throw(u))}catch(a){n(a)}},c=u=>u.done?o(u.value):Promise.resolve(u.value).then(i,f);c((r=r.apply(e,t)).next())});var dt=Pt((eo,ft)=>{var Jt=1/0,Xt="[object Symbol]",Vt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Qt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Z="\\ud800-\\udfff",Ye="\\u0300-\\u036f\\ufe20-\\ufe23",We="\\u20d0-\\u20f0",Je="\\u2700-\\u27bf",Xe="a-z\\xdf-\\xf6\\xf8-\\xff",er="\\xac\\xb1\\xd7\\xf7",tr="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",rr="\\u2000-\\u206f",nr=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ve="A-Z\\xc0-\\xd6\\xd8-\\xde",Qe="\\ufe0e\\ufe0f",et=er+tr+rr+nr,ye="['\u2019]",or="["+Z+"]",Fe="["+et+"]",K="["+Ye+We+"]",tt="\\d+",ir="["+Je+"]",rt="["+Xe+"]",nt="[^"+Z+et+tt+Je+Xe+Ve+"]",ge="\\ud83c[\\udffb-\\udfff]",cr="(?:"+K+"|"+ge+")",ot="[^"+Z+"]",be="(?:\\ud83c[\\udde6-\\uddff]){2}",Ce="[\\ud800-\\udbff][\\udc00-\\udfff]",w="["+Ve+"]",it="\\u200d",qe="(?:"+rt+"|"+nt+")",ur="(?:"+w+"|"+nt+")",$e="(?:"+ye+"(?:d|ll|m|re|s|t|ve))?",He="(?:"+ye+"(?:D|LL|M|RE|S|T|VE))?",ct=cr+"?",ut="["+Qe+"]?",ar="(?:"+it+"(?:"+[ot,be,Ce].join("|")+")"+ut+ct+")*",at=ut+ct+ar,sr="(?:"+[ir,be,Ce].join("|")+")"+at,fr="(?:"+[ot+K+"?",K,be,Ce,or].join("|")+")",dr=RegExp(ye,"g"),pr=RegExp(K,"g"),lr=RegExp(ge+"(?="+ge+")|"+fr+at,"g"),mr=RegExp([w+"?"+rt+"+"+$e+"(?="+[Fe,w,"$"].join("|")+")",ur+"+"+He+"(?="+[Fe,w+qe,"$"].join("|")+")",w+"?"+qe+"+"+$e,w+"+"+He,tt,sr].join("|"),"g"),xr=RegExp("["+it+Z+Ye+We+Qe+"]"),hr=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,gr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"ss"},yr=typeof global=="object"&&global&&global.Object===Object&&global,br=typeof self=="object"&&self&&self.Object===Object&&self,Cr=yr||br||Function("return this")();function Ir(e,t,r,o){var n=-1,i=e?e.length:0;for(o&&i&&(r=e[++n]);++n<i;)r=t(r,e[n],n,e);return r}function Or(e){return e.split("")}function Er(e){return e.match(Vt)||[]}function Tr(e){return function(t){return e==null?void 0:e[t]}}var Sr=Tr(gr);function st(e){return xr.test(e)}function _r(e){return hr.test(e)}function Rr(e){return st(e)?kr(e):Or(e)}function kr(e){return e.match(lr)||[]}function Ar(e){return e.match(mr)||[]}var wr=Object.prototype,Pr=wr.toString,Ge=Cr.Symbol,Ke=Ge?Ge.prototype:void 0,Ze=Ke?Ke.toString:void 0;function jr(e,t,r){var o=-1,n=e.length;t<0&&(t=-t>n?0:n+t),r=r>n?n:r,r<0&&(r+=n),n=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(n);++o<n;)i[o]=e[o+t];return i}function Dr(e){if(typeof e=="string")return e;if(zr(e))return Ze?Ze.call(e):"";var t=e+"";return t=="0"&&1/e==-Jt?"-0":t}function Nr(e,t,r){var o=e.length;return r=r===void 0?o:r,!t&&r>=o?e:jr(e,t,r)}function Lr(e){return function(t){t=Y(t);var r=st(t)?Rr(t):void 0,o=r?r[0]:t.charAt(0),n=r?Nr(r,1).join(""):t.slice(1);return o[e]()+n}}function vr(e){return function(t){return Ir($r(Fr(t).replace(dr,"")),e,"")}}function Ur(e){return!!e&&typeof e=="object"}function zr(e){return typeof e=="symbol"||Ur(e)&&Pr.call(e)==Xt}function Y(e){return e==null?"":Dr(e)}var Br=vr(function(e,t,r){return t=t.toLowerCase(),e+(r?Mr(t):t)});function Mr(e){return qr(Y(e).toLowerCase())}function Fr(e){return e=Y(e),e&&e.replace(Qt,Sr).replace(pr,"")}var qr=Lr("toUpperCase");function $r(e,t,r){return e=Y(e),t=r?void 0:t,t===void 0?_r(e)?Ar(e):Er(e):e.match(t)||[]}ft.exports=Br});function R(e){if(e==null||typeof e!="object")return!1;let t=Object.getPrototypeOf(e);return t==null||t===Object.prototype}function O(e){return e!=null&&e.kind===3}var P="__current",V={},vt=[];function re(e,{strict:t=!0,components:r}={}){let o=0,n={strict:t,mounted:!1,channel:e,children:vt,nodes:new WeakSet,parents:new WeakMap,tops:new WeakMap,components:new WeakMap,fragments:new WeakMap};t&&Object.freeze(r);let i={kind:0,options:t?Object.freeze({strict:t,components:r}):{strict:t,components:r},get children(){return n.children},createComponent(f,...c){if(r&&r.indexOf(f)<0)throw new Error(`Unsupported component: ${f}`);let[u,a,...s]=c,d=u!=null?u:{},p=[],m={};if(u)for(let l of Object.keys(u))l!=="children"&&(m[l]=T(je(u[l])));if(a)if(Array.isArray(a))for(let l of a)p.push(g(l,i));else{p.push(g(a,i));for(let l of s)p.push(g(l,i))}let C=`${o++}`,y={externalProps:t?Object.freeze(d):d,internalProps:m,children:t?Object.freeze(p):p},h=I({kind:1,get children(){return y.children},get props(){return y.externalProps},get remoteProps(){return y.internalProps},remove:()=>Re(h),updateProps:l=>Bt(h,l,y,n),append:(...l)=>L(h,l.map(S=>g(S,i)),y,n),appendChild:l=>v(h,g(l,i),y,n),removeChild:l=>U(h,l,y,n),replaceChildren:(...l)=>Q(h,l.map(S=>g(S,i)),y,n),insertBefore:(l,S)=>k(h,g(l,i),S,y,n),insertChildBefore:(l,S)=>k(h,g(l,i),S,y,n)},V);n.components.set(h,y),Object.defineProperty(h,"type",{value:f,configurable:!1,writable:!1,enumerable:!0}),ee(h,n),te(h,C,i);for(let l of y.children)D(h,l,n);return h},createText(f=""){let c=`${o++}`,u={text:f},a=d=>zt(s,d,u,n),s=I({kind:2,get text(){return u.text},update:a,updateText:a,remove:()=>Re(s)},V);return ee(s,n),te(s,c,i),s},createFragment(){let f=`${o++}`,c={children:t?Object.freeze([]):[]},u=I({kind:3,get children(){return c.children},append:(...a)=>L(u,a.map(s=>g(s,i)),c,n),appendChild:a=>v(u,g(a,i),c,n),removeChild:a=>U(u,a,c,n),replaceChildren:(...a)=>Q(u,a.map(s=>g(s,i)),c,n),insertBefore:(a,s)=>k(u,g(a,i),s,c,n),insertChildBefore:(a,s)=>k(u,g(a,i),s,c,n)},V);return n.fragments.set(u,c),ee(u,n),te(u,f,i),u},append:(...f)=>L(i,f.map(c=>g(c,i)),n,n),appendChild:f=>v(i,g(f,i),n,n),replaceChildren:(...f)=>Q(i,f.map(c=>g(c,i)),n,n),removeChild:f=>U(i,f,n,n),insertBefore:(f,c)=>k(i,g(f,i),c,n,n),insertChildBefore:(f,c)=>k(i,g(f,i),c,n,n),mount(){return n.mounted?Promise.resolve():(n.mounted=!0,Promise.resolve(e(0,n.children.map(N))))}};return i}function Ut(e,{tops:t}){var r;return((r=t.get(e))===null||r===void 0?void 0:r.kind)===0}function Pe(e,t){let r=o=>{if("children"in o)for(let n of o.children)t(n),r(n)};r(e)}function j(e,t,{remote:r,local:o}){let{mounted:n,channel:i}=t;n&&(e.kind===0||Ut(e,t))&&r(i),o()}function zt(e,t,r,o){return j(e,o,{remote:n=>n(3,e.id,t),local:()=>{r.text=t}})}var E=Symbol("ignore");function Bt(e,t,r,o){let{strict:n}=o,{internalProps:i,externalProps:f}=r,c={},u=[],a=!1;for(let s of Object.keys(t)){if(s==="children")continue;let d=f[s],p=t[s],m=i[s],C=je(p);if(m===C&&(C==null||typeof C!="object"))continue;let[y,h]=ne(m,C);h&&u.push(...h),y!==E&&(a=!0,c[s]=y,O(d)&&oe(d,o),O(p)&&D(e,p,o))}return j(e,o,{remote:s=>{a&&s(4,e.id,c)},local:()=>{let s=I(I({},f),t);r.externalProps=n?Object.freeze(s):s,r.internalProps=I(I({},r.internalProps),c);for(let[d,p]of u)d[P]=p}})}function ne(e,t,r=new Set){return r.has(e)?[E]:(r.add(e),typeof e=="function"&&P in e?[typeof t=="function"?E:T(t),[[e,t]]]:Array.isArray(e)?qt(e,t,r):R(e)&&!O(e)?Ft(e,t,r):[e===t?E:t])}function T(e,t=new Map){let r=t.get(e);if(r)return r;if(O(e))return t.set(e,e),e;if(Array.isArray(e)){let o=[];t.set(e,o);for(let n of e)o.push(T(n,t));return o}if(R(e)){let o={};t.set(e,o);for(let n of Object.keys(e))o[n]=T(e[n],t);return o}if(typeof e=="function"){let o=(...n)=>o[P](...n);return Object.defineProperty(o,P,{enumerable:!1,configurable:!1,writable:!0,value:e}),t.set(e,o),o}return t.set(e,e),e}function A(e,t=new Set){if(!t.has(e)){if(t.add(e),Array.isArray(e))return e.reduce((r,o)=>{let n=A(o,t);return n?[...r,...n]:r},[]);if(R(e))return Object.keys(e).reduce((r,o)=>{let n=A(e[o],t);return n?[...r,...n]:r},[]);if(typeof e=="function")return P in e?[e]:void 0}}function Re(e){var t;(t=e.parent)===null||t===void 0||t.removeChild(e)}function L(e,t,r,o){for(let n of t)v(e,n,r,o)}function v(e,t,r,o){var n;let{nodes:i,strict:f}=o;if(!i.has(t))throw new Error("Cannot append a node that was not created by this remote root");let c=t.parent,u=(n=c==null?void 0:c.children.indexOf(t))!==null&&n!==void 0?n:-1;return j(e,o,{remote:a=>{a(1,e.id,u<0?e.children.length:e.children.length-1,N(t),c?c.id:!1)},local:()=>{D(e,t,o);let a;if(c){let s=De(c,o),d=[...s.children];d.splice(u,1),c===e?a=d:(s.children=f?Object.freeze(d):d,a=[...r.children])}else a=[...r.children];a.push(t),r.children=f?Object.freeze(a):a}})}function Q(e,t,r,o){for(let n of e.children)U(e,n,r,o);L(e,t,r,o)}function U(e,t,r,o){let{strict:n}=o;return j(e,o,{remote:i=>i(2,e.id,e.children.indexOf(t)),local:()=>{oe(t,o);let i=[...r.children];i.splice(i.indexOf(t),1),r.children=n?Object.freeze(i):i}})}function k(e,t,r,o,n){var i;let{strict:f,nodes:c}=n;if(!c.has(t))throw new Error("Cannot insert a node that was not created by this remote root");let u=t.parent,a=(i=u==null?void 0:u.children.indexOf(t))!==null&&i!==void 0?i:-1;return j(e,n,{remote:s=>{let d=r==null?e.children.length-1:e.children.indexOf(r);s(1,e.id,d<a||a<0?d:d-1,N(t),u?u.id:!1)},local:()=>{D(e,t,n);let s;if(u){let d=De(u,n),p=[...d.children];p.splice(a,1),u===e?s=p:(d.children=f?Object.freeze(p):p,s=[...o.children])}else s=[...o.children];r==null?s.push(t):s.splice(s.indexOf(r),0,t),o.children=f?Object.freeze(s):s}})}function g(e,t){return typeof e=="string"?t.createText(e):e}function D(e,t,r){let{tops:o,parents:n}=r,i=e.kind===0?e:o.get(e);o.set(t,i),n.set(t,e),ke(t,r),Pe(t,f=>{o.set(f,i),ke(f,r)})}function ke(e,t){if(e.kind!==1)return;let r=e.props;r&&Object.values(r).forEach(o=>{O(o)&&D(e,o,t)})}function oe(e,t){let{tops:r,parents:o}=t;r.delete(e),o.delete(e),Pe(e,n=>{r.delete(n),Ae(n,t)}),Ae(e,t)}function Ae(e,t){if(e.kind!==1)return;let r=e.remoteProps;for(let o of Object.keys(r!=null?r:{})){let n=r[o];O(n)&&oe(n,t)}}function ee(e,{parents:t,tops:r,nodes:o}){o.add(e),Object.defineProperty(e,"parent",{get(){return t.get(e)},configurable:!0,enumerable:!0}),Object.defineProperty(e,"top",{get(){return r.get(e)},configurable:!0,enumerable:!0})}function N(e){return e.kind===2?{id:e.id,kind:e.kind,text:e.text}:{id:e.id,kind:e.kind,type:e.type,props:e.remoteProps,children:e.children.map(t=>N(t))}}function je(e){return O(e)?Mt(e):e}function Mt(e){return{id:e.id,kind:e.kind,get children(){return e.children.map(t=>N(t))}}}function De(e,t){return e.kind===0?t:e.kind===3?t.fragments.get(e):t.components.get(e)}function te(e,t,r){Object.defineProperty(e,"id",{value:t,configurable:!0,writable:!1,enumerable:!1}),Object.defineProperty(e,"root",{value:r,configurable:!0,writable:!1,enumerable:!1})}function Ft(e,t,r){if(!R(t)){var o;return[T(t),(o=A(e))===null||o===void 0?void 0:o.map(c=>[c,void 0])]}let n=!1,i=[],f={};for(let c in e){let u=e[c];if(!(c in t)){n=!0;let p=A(u);p&&i.push(...p.map(m=>[m,void 0]))}let a=t[c],[s,d]=ne(u,a,r);d&&i.push(...d),s!==E&&(n=!0,f[c]=s)}for(let c in t)c in f||(n=!0,f[c]=T(t[c]));return[n?f:E,i]}function qt(e,t,r){if(!Array.isArray(t)){var o;return[T(t),(o=A(e))===null||o===void 0?void 0:o.map(s=>[s,void 0])]}let n=!1,i=[],f=t.length,c=e.length,u=Math.max(c,f),a=[];for(let s=0;s<u;s++){let d=e[s],p=t[s];if(s<f){if(s>=c){n=!0,a[s]=T(p);continue}let[m,C]=ne(d,p,r);if(C&&i.push(...C),m===E){a[s]=d;continue}n=!0,a[s]=m}else{n=!0;let m=A(d);m&&i.push(...m.map(C=>[C,void 0]))}}return[n?a:E,i]}function Ne(){return(t,r)=>{var o;function n(...i){return x(this,null,function*(){if(i.length===1)return r(...i);let[{channel:f,components:c},u]=i,a=re(f,{components:c,strict:!0}),s=r(a,u);return typeof s=="object"&&s!=null&&"then"in s&&(s=yield s),a.mount(),s})}return(o=globalThis.shopify)===null||o===void 0||o.extend(t,n),n}}var ie=Ne();var B="NOT_FOUND";function $t(e){let t;return{get(r){return t&&e(t.key,r)?t.value:B},put(r,o){t={key:r,value:o}},getEntries(){return t?[t]:[]},clear(){t=void 0}}}function Ht(e,t){let r=[];function o(c){let u=r.findIndex(a=>t(c,a.key));if(u>-1){let a=r[u];return u>0&&(r.splice(u,1),r.unshift(a)),a.value}return B}function n(c,u){o(c)===B&&(r.unshift({key:c,value:u}),r.length>e&&r.pop())}function i(){return r}function f(){r=[]}return{get:o,put:n,getEntries:i,clear:f}}var Gt=(e,t)=>e===t;function Kt(e){return function(r,o){if(r===null||o===null||r.length!==o.length)return!1;let n=r.length;for(let i=0;i<n;i++)if(!e(r[i],o[i]))return!1;return!0}}function M(e,t){let r=typeof t=="object"?t:{equalityCheck:t},{equalityCheck:o=Gt,maxSize:n=1,resultEqualityCheck:i}=r,f=Kt(o),c=n===1?$t(f):Ht(n,f);function u(){let a=c.get(arguments);if(a===B){if(a=e.apply(null,arguments),i){let d=c.getEntries().find(p=>i(p.value,a));d&&(a=d.value)}c.put(arguments,a)}return a}return u.clearCache=()=>c.clear(),u}function F(e,t){if(Object.is(e,t))return!0;if(typeof e=="object"&&typeof t=="object")if(Array.isArray(e)&&Array.isArray(t)){if(e.length===t.length)return e.every((r,o)=>F(r,t[o]))}else{let r=Object.entries(e),o=Object.entries(t);if(r.length===o.length)return r.every(([n])=>F(e[n],t[n]))}return!1}var Zt=50,ce={equalityCheck:F,maxSize:Zt},Le=function(t,r){let o=Ue(this)?{default:this.default,conditionals:[...this.conditionals,{conditions:t,value:r}]}:{conditionals:[{conditions:t,value:r}]};return ve(o)},q={default:M(e=>ve({default:e,conditionals:[]}),ce),when:M(Le,ce)};function ve(e){let t={},r=Object.create(t);return Object.assign(r,e),t.when=M(Le.bind(r),ce),r}function Ue(e){return e!==null&&typeof e=="object"&&"conditionals"in e}var ue="BlockLayout";var ae="BlockSpacer";var se="Checkbox";var $="Image";var fe="InlineLayout";var de="InlineStack";var pe="InlineSpacer";var le="Link";var H="Text";var G="View";var me=(e,t)=>{var r;for(let o=0,n=(r=e==null?void 0:e.children)==null?void 0:r.length;o<n;o++){let i=e.children[o];if(i!=null&&i.props){let f=!0;if(Object.entries(t).forEach(([c,u])=>{i.props[c]!==u&&(f=!1)}),f)return i;if(i.children)return me(i,t)}else if(i.children)return me(i,t)}},Yt=(e,t)=>{let{currencyCode:r,price:o}=t,n=null,i=null;if(r.toLocaleUpperCase()==="EUR"){let a=new Intl.NumberFormat("de-DE",{style:"currency",currency:r}).formatToParts(o).map(s=>s.value);i=a.pop(),a.pop(),n=a.join("")}else{let a=new Intl.NumberFormat("en-US",{style:"currency",currency:r}).formatToParts(o).map(s=>s.value);i=a.shift(),n=a.join("")}let f=`Protect against shipping loss, damage, theft & offset emissions for ${i}${n} ${r}`;return e.createComponent(H,void 0,f)},Wt=(e,t,r)=>x(void 0,null,function*(){let{lines:o,applyCartLinesChange:n}=t;if(e){let i=yield n({type:"addCartLine",merchandiseId:`gid://shopify/ProductVariant/${r.variantId}`,quantity:1}).catch(console.log);return console.log("cart updated:","add seel variant due to user action",i),i}else{let i=o.current.find(f=>f.merchandise.id.includes(r.variantId));if(i!=null&&i.id){let f=yield n({type:"removeCartLine",id:i.id,quantity:i.quantity||1}).catch(console.log);return console.log("cart updated:","remove seel variant due to user action",f),f}}}),ze=(e,t,{initialCheckboxStatus:r,quotation:o})=>e.createComponent(ue,{rows:["auto","auto","auto"],border:"base",cornerRadius:"base",padding:"base"},[e.createComponent(de,{spacing:"base",padding:"none",blockAlignment:"center"},[e.createComponent(se,{id:"delivery-guarantee-checkbox",name:"delivery-guarantee-checkbox",value:!!r,onChange:n=>x(void 0,null,function*(){Wt(n,t,o);let i=me(e,{id:"delivery-guarantee-checkbox"});i&&i.updateProps({value:n})})},""),e.createComponent(H,{emphasis:"bold"},"Delivery Guarantee\u2122"),e.createComponent(G,{border:"none",padding:"none",maxInlineSize:q.default(14)},e.createComponent(le,{to:"https://www.seel.com/"},e.createComponent($,{loading:"lazy",source:"https://static.seel.com/image/widget-info-icon.svg"})))]),e.createComponent(ae,{spacing:"extraTight"}),e.createComponent(fe,{columns:["auto","auto","fill"],blockAlignment:"center"},[e.createComponent(G,{border:"none",padding:"none",maxInlineSize:q.default(20)},e.createComponent($,{loading:"lazy",source:"https://static.seel.com/image/spo-sp-widget-icon.png"})),e.createComponent(pe,{spacing:"base"}),Yt(e,o)])]);var xe="seel-user-id",he="seel-device-id",Be="sp_quote_id";var Me="purchase.checkout.delivery-address.render-after";var pt=Dt(dt());var W=e=>e.split("/").pop(),lt=({variant:e,cartLine:t})=>{let{compareAtPrice:r,price:o}=e,{quantity:n}=t;return{price:parseInt(o.amount*100),discounted_price:parseInt(o.amount*100),line_price:parseInt(o.amount*n*100),final_price:parseInt(o.amount*100),final_line_price:parseInt(o.amount*n*100)}},mt=e=>{let{status:t,quote_id:r,currencyCode:o,currencySymbol:n,bp_price:i,bp_variant_id:f,bp_product_id:c,bp_value:u,eligible_items:a}=e,s=a.map(d=>Object.entries(d).map(([p,m])=>({[(0,pt.default)(p)]:m})));return{status:t,quoteId:r,currencyCode:o,currencySymbol:n,price:i,variantId:f,productId:c,value:u,eligibleItems:s}},xt=({cart:e,quotation:t})=>{let{productId:r,variantId:o}=t,{items:n}=e,i=n.filter(u=>u.product_id==r);if(!(i!=null&&i.length))return[];let f=null,c=[];return i.forEach(u=>{u.variant_id==o?f=u:c.push(u)}),[f,c]},ht=(o,n)=>x(void 0,[o,n],function*(e,{seelVariantMatchedWithQuotation:t,seelVariantsNotMatchedWithQuotation:r}){if(!t&&!(r!=null&&r.length))return!0;let{lines:i,applyCartLinesChange:f}=e;for(let c=0,u=r.length;c<u;c++){let a=r[c],s=i.current.find(p=>p.merchandise.id.includes(a.id)),d=yield f({type:"removeCartLine",id:s.id,quantity:s.quantity}).catch(console.log);console.log("cart updated:","remove not matched seel variants",d)}if(t&&(t==null?void 0:t.quantity)!==1){let c=i.current.find(u=>u.merchandise.id.includes(t==null?void 0:t.id));if(c){let u=yield f({type:"updateCartLine",id:String(c.id),merchandiseId:c.merchandise.id,quantity:1}).catch(console.log);console.log("cart updated:","keep matched seel variant with quantity 1 only",u)}}}),gt=(o,n)=>x(void 0,[o,n],function*(e,{config:t,seelVariantMatchedWithQuotation:r}){return r?!!r:t.defaultOpt==="true"||t.defaultOpt===!0}),yt=(i,f)=>x(void 0,[i,f],function*(e,{initialCheckboxStatus:t,config:r,quotation:o,seelVariantMatchedWithQuotation:n}){let{applyCartLinesChange:c}=e;if(t&&!n){let u=yield c({type:"addCartLine",merchandiseId:`gid://shopify/ProductVariant/${o.variantId}`,quantity:1});return console.log("cart updated:","add seel variant due to default-on",u),u}});var J,Hr=new Uint8Array(16);function Ie(){if(!J&&(J=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!J))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return J(Hr)}var b=[];for(let e=0;e<256;++e)b.push((e+256).toString(16).slice(1));function bt(e,t=0){return b[e[t+0]]+b[e[t+1]]+b[e[t+2]]+b[e[t+3]]+"-"+b[e[t+4]]+b[e[t+5]]+"-"+b[e[t+6]]+b[e[t+7]]+"-"+b[e[t+8]]+b[e[t+9]]+"-"+b[e[t+10]]+b[e[t+11]]+b[e[t+12]]+b[e[t+13]]+b[e[t+14]]+b[e[t+15]]}var Gr=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Oe={randomUUID:Gr};function Kr(e,t,r){if(Oe.randomUUID&&!t&&!e)return Oe.randomUUID();e=e||{};let o=e.random||(e.rng||Ie)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){r=r||0;for(let n=0;n<16;++n)t[r+n]=o[n];return t}return bt(o)}var _=Kr;var Zr=(r,o)=>x(void 0,[r,o],function*({shop:e},t){let n={query:`query {
      product(id: "${btoa(t.productId)}") {
        ... on Product {
          id
          title
          handle
          description
          isGiftCard
          productType
          featuredImage {
            altText
            height
            width
            url
          }
        }
      }
      node(id: "${btoa(t.variantId)}") {
        ... on ProductVariant {
          id
          title
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          sku
          taxable
          image {
            altText
            height
            width
            url
          }
        }
      }
    }`},i=yield fetch(`${e.storefrontUrl}api/2024-01/graphql.json`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).catch(console.log);try{let{data:f}=yield i.json(),{node:c,product:u}=f;return{variant:c,product:u,cartLine:t.cartLine}}catch(f){return null}}),Ct=r=>x(void 0,[r],function*({lines:e,shop:t}){let o=e.current.map(c=>{let{merchandise:u,quantity:a,cost:s,attributes:d}=c,{id:p,product:m}=u;return{variantId:p,productId:m.id,cartLine:{quantity:a,cost:s,attributes:d,merchandise:u}}});return((yield Promise.all(o.map(c=>Zr({lines:e,shop:t},c))).catch(console.log)).filter(Boolean)||[]).map(({variant:c,product:u,cartLine:a})=>{let{quantity:s,merchandise:d}=a,{price:p,discounted_price:m,line_price:C,final_price:y,final_line_price:h}=lt({variant:c,product:u,cartLine:a});return{id:W(c.id),quantity:s,variant_id:W(c.id),title:`${u.title} - ${c.title}`,price:p,discounted_price:m,line_price:C,final_price:y,final_line_price:h,sku:c.sku,product_id:W(u.id),requires_shipping:d.requiresShipping,product_title:u.title,variant_title:c.title}})}),It=t=>x(void 0,[t],function*({storage:e}){let r=yield e.read(xe);return r||(r=_(),e.write(xe,r)),r}),Ot=t=>x(void 0,[t],function*({storage:e}){let r=yield e.read(he);return r||(r=_(),e.write(he,r)),r}),Et=(r,o)=>x(void 0,[r,o],function*({applyAttributeChange:e},t){return yield Promise.all(Object.entries(t).map(([i,f])=>e({type:"updateAttribute",key:i,value:f}))).catch(console.log)});var Tt=e=>x(void 0,null,function*(){let{shop:t}=e,{myshopifyDomain:r}=t,o=yield fetch(`https://api.seel.com/gateway/merchant-service/api/query-shopify-bp-config?shopDomain=${r}`,{headers:{"x-request-id":`${_()}__${Date.now()}`},method:"GET"}),{code:n,data:i}=yield o.json();return n===0&&i?i:null}),St=(i,f)=>x(void 0,[i,f],function*(e,{source:t,cartInfo:r,userId:o,deviceId:n}){var d;let c={source:t||"checkout",cart_info:r,customer_info:{timestamp_in_ms:Date.now(),device_id:n,user_id:o},shop_domain:((d=e==null?void 0:e.shop)==null?void 0:d.myshopifyDomain)||""},u=yield fetch("https://api.seel.com/gateway/quotes-service/api/bp-quotes",{headers:{"x-request-id":`${_()}__${Date.now()}`,"content-type":"application/json"},body:JSON.stringify(c),method:"POST"}).catch(console.log),{code:a,data:s}=yield u.json();return a===0&&s?mt(s):null});var ko=ie(Me,(e,t)=>x(void 0,null,function*(){let{cost:r,checkoutToken:o}=t,n=yield Tt(t).catch(console.log),i=yield It(t),f=yield Ot(t);if((n==null?void 0:n.status)!=="active")return null;let u={items:yield Ct(t).catch(console.log),token:o.current,currency:r.totalAmount.current.currencyCode},a=yield St(t,{source:"checkout",cartInfo:u,userId:i,deviceId:f}).catch(console.log);if(console.log(e,t,u,n,a),(a==null?void 0:a.status)!=="accepted")return null;let[s,d]=xt({cart:u,quotation:a});yield ht(t,{seelVariantMatchedWithQuotation:s,seelVariantsNotMatchedWithQuotation:d});let p=yield gt(t,{config:n,seelVariantMatchedWithQuotation:s});yield yt(t,{initialCheckboxStatus:p,config:n,quotation:a,seelVariantMatchedWithQuotation:s}),Et(t,{[Be]:a.quoteId}).catch(console.log);let m=ze(e,t,{initialCheckboxStatus:p,quotation:a});m&&e.appendChild(m)}));})();
