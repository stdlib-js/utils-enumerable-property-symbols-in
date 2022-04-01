// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var t=void 0!==Object.getOwnPropertySymbols,e=Object.getOwnPropertySymbols;var n=t?function(r){return e(Object(r))}:function(){return[]},o=/./,u="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=function(){try{return u({},"x",{}),!0}catch(r){return!1}},c=Object.defineProperty,a=Object.prototype,f=a.toString,l=a.__defineGetter__,v=a.__defineSetter__,p=a.__lookupGetter__,b=a.__lookupSetter__;var y=function(r,t,e){var n,o,u,i;if("object"!=typeof r||null===r||"[object Array]"===f.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===f.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(p.call(r,t)||b.call(r,t)?(n=r.__proto__,r.__proto__=a,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&l&&l.call(r,t,e.get),i&&v&&v.call(r,t,e.set),r},s=c,j=y,_=i()?s:j;var m=function(r,t,e){_(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},O=m;var g=function(r){return"boolean"==typeof r};var d=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return d&&"symbol"==typeof Symbol.toStringTag},P=Object.prototype.toString,h=P;var S=function(r){return h.call(r)},E=Object.prototype.hasOwnProperty;var I=function(r,t){return null!=r&&E.call(r,t)},A="function"==typeof Symbol?Symbol.toStringTag:"",T=I,N=A,B=P;var V=S,F=function(r){var t,e,n;if(null==r)return B.call(r);e=r[N],t=T(r,N);try{r[N]=void 0}catch(t){return B.call(r)}return n=B.call(r),t?r[N]=e:delete r[N],n},G=w()?F:V,M=Boolean.prototype.toString;var k=G,x=function(r){try{return M.call(r),!0}catch(r){return!1}},C=w();var L=function(r){return"object"==typeof r&&(r instanceof Boolean||(C?x(r):"[object Boolean]"===k(r)))},R=g,X=L;var Y=O,z=function(r){return R(r)||X(r)},D=L;Y(z,"isPrimitive",g),Y(z,"isObject",D);var U="object"==typeof self?self:null,q="object"==typeof window?window:null,H=z.isPrimitive,J=function(){return new Function("return this;")()},K=U,Q=q,W=r(Object.freeze({__proto__:null}));var Z=function(r){if(arguments.length){if(!H(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(W)return W;throw new Error("unexpected error. Unable to resolve global object.")},$=Z(),rr=$.document&&$.document.childNodes,tr=Int8Array,er=o,nr=rr,or=tr;var ur=function(){return"function"==typeof er||"object"==typeof or||"function"==typeof nr};var ir=function(){return/^\s*function\s*([^(]*)/i},cr=ir;O(cr,"REGEXP",ir());var ar=cr,fr=G;var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===fr(r)};var vr=function(r){return null!==r&&"object"==typeof r};O(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!lr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(vr));var pr=vr;var br=G,yr=ar.REGEXP,sr=function(r){return pr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var jr=function(r){var t,e,n;if(("Object"===(e=br(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=yr.exec(n.toString()))return t[1]}return sr(r)?"Buffer":e},_r=jr;var mr=jr;var Or=function(r){var t;return null===r?"null":"object"===(t=typeof r)?_r(r).toLowerCase():t},gr=function(r){return mr(r).toLowerCase()},dr=ur()?gr:Or;var wr=function(r){return"function"===dr(r)},Pr=Object.getPrototypeOf;var hr=function(r){return r.__proto__},Sr=G,Er=hr;var Ir=function(r){var t=Er(r);return t||null===t?t:"[object Function]"===Sr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Ar=Pr,Tr=Ir,Nr=wr(Object.getPrototypeOf)?Ar:Tr;var Br=function(r){return null==r?null:(r=Object(r),Nr(r))};var Vr=function(r){return"string"==typeof r},Fr=String.prototype.valueOf;var Gr=G,Mr=function(r){try{return Fr.call(r),!0}catch(r){return!1}},kr=w();var xr=function(r){return"object"==typeof r&&(r instanceof String||(kr?Mr(r):"[object String]"===Gr(r)))},Cr=Vr,Lr=xr;var Rr=O,Xr=function(r){return Cr(r)||Lr(r)},Yr=xr;Rr(Xr,"isPrimitive",Vr),Rr(Xr,"isObject",Yr);var zr=Xr;var Dr=function(r){return"number"==typeof r},Ur=Number,qr=Ur.prototype.toString;var Hr=G,Jr=Ur,Kr=function(r){try{return qr.call(r),!0}catch(r){return!1}},Qr=w();var Wr=function(r){return"object"==typeof r&&(r instanceof Jr||(Qr?Kr(r):"[object Number]"===Hr(r)))},Zr=Dr,$r=Wr;var rt=O,tt=function(r){return Zr(r)||$r(r)},et=Wr;rt(tt,"isPrimitive",Dr),rt(tt,"isObject",et);var nt=tt;var ot=function(r){return r!=r},ut=nt.isPrimitive,it=ot;var ct=function(r){return ut(r)&&it(r)},at=nt.isObject,ft=ot;var lt=function(r){return at(r)&&ft(r.valueOf())},vt=ct,pt=lt;var bt=O,yt=function(r){return vt(r)||pt(r)},st=lt;bt(yt,"isPrimitive",ct),bt(yt,"isObject",st);var jt=yt,_t=Number.POSITIVE_INFINITY,mt=Ur.NEGATIVE_INFINITY,Ot=Math.floor;var gt=_t,dt=mt,wt=function(r){return Ot(r)===r};var Pt=function(r){return r<gt&&r>dt&&wt(r)},ht=nt.isPrimitive,St=Pt;var Et=function(r){return ht(r)&&St(r)},It=nt.isObject,At=Pt;var Tt=function(r){return It(r)&&At(r.valueOf())},Nt=Et,Bt=Tt;var Vt=O,Ft=function(r){return Nt(r)||Bt(r)},Gt=Tt;Vt(Ft,"isPrimitive",Et),Vt(Ft,"isObject",Gt);var Mt,kt=Ft,xt=Object.prototype.propertyIsEnumerable;Mt=!xt.call("beep","0");var Ct=zr,Lt=jt.isPrimitive,Rt=kt.isPrimitive,Xt=xt,Yt=Mt;var zt=function(r,t){var e;return null!=r&&(!(e=Xt.call(r,t))&&Yt&&Ct(r)?!Lt(t=+t)&&Rt(t)&&t>=0&&t<r.length:e)},Dt=n,Ut=Br,qt=zt,Ht=I;var Jt=function(r){var t,e,n,o,u,i;if(null==r)return[];n=Object(r),t=[],e={};do{for(o=Dt(n),i=0;i<o.length;i++)u=o[i],!1===Ht(e,u)&&qt(n,u)&&t.push(u),e[u]=!0;n=Ut(n)}while(n);return t},Kt=Jt;export{Kt as default};
//# sourceMappingURL=mod.js.map
