// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;r=e?function(r){return n(t(r))}:function(){return[]};var i=r,o=/./,a="function"==typeof Object.defineProperty?Object.defineProperty:null,c=Object.defineProperty;function u(r){return"number"==typeof r}function l(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function s(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+l(i):l(i)+r,n&&(r="-"+r)),r}var f=String.prototype.toLowerCase,p=String.prototype.toUpperCase;function g(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!u(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=s(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=s(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===p.call(r.specifier)?p.call(t):f.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var b=Math.abs,d=String.prototype.toLowerCase,y=String.prototype.toUpperCase,h=String.prototype.replace,v=/e\+(\d)$/,w=/e-(\d)$/,m=/^(\d+)$/,j=/^(\d+)e/,_=/\.0$/,S=/\.0*e/,O=/(\..*[^0])0*e/;function E(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!u(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":b(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=h.call(t,O,"$1e"),t=h.call(t,S,"e"),t=h.call(t,_,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=h.call(t,v,"e+0$1"),t=h.call(t,w,"e-0$1"),r.alternate&&(t=h.call(t,m,"$1."),t=h.call(t,j,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===y.call(r.specifier)?y.call(t):d.call(t)}function x(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var I=String.fromCharCode,T=Array.isArray;function k(r){return r!=r}function P(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,n,i,o,a,c,u,l,f,p,b,d;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if("string"==typeof(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=P(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,k(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=g(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!k(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(o)?String(n.arg):I(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=s(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,p=n.width,b=n.padRight,d=void 0,(d=p-f.length)<0?f:f=b?f+x(d):x(d)+f)),a+=n.arg||"",c+=1}return a}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function C(r){var e,t;if("string"!=typeof r)throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[$(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return A.apply(null,e)}var N,B=Object.prototype,R=B.toString,G=B.__defineGetter__,L=B.__defineSetter__,Z=B.__lookupGetter__,M=B.__lookupSetter__;N=function(){try{return a({},"x",{}),!0}catch(r){return!1}}()?c:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(r,e)||M.call(r,e)?(n=r.__proto__,r.__proto__=B,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,e,t.get),a&&L&&L.call(r,e,t.set),r};var W=N;function U(r,e,t){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(r){return"boolean"==typeof r}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return Y&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,D=Object.prototype.hasOwnProperty;function H(r,e){return null!=r&&D.call(r,e)}var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"",Q=z()?function(r){var e,t,n;if(null==r)return q.call(r);t=r[K],e=H(r,K);try{r[K]=void 0}catch(e){return q.call(r)}return n=q.call(r),e?r[K]=t:delete r[K],n}:function(r){return q.call(r)},rr=Boolean,er=Boolean.prototype.toString,tr=z();function nr(r){return"object"==typeof r&&(r instanceof rr||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Q(r)))}function ir(r){return X(r)||nr(r)}U(ir,"isPrimitive",X),U(ir,"isObject",nr);var or="object"==typeof self?self:null,ar="object"==typeof window?window:null,cr="object"==typeof globalThis?globalThis:null,ur=function(r){if(arguments.length){if(!X(r))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(cr)return cr;if(or)return or;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=ur.document&&ur.document.childNodes,sr=Int8Array;function fr(){return/^\s*function\s*([^(]*)/i}var pr,gr=/^\s*function\s*([^(]*)/i;U(fr,"REGEXP",gr),pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Q(r)};var br=pr;function dr(r){return null!==r&&"object"==typeof r}var yr=function(r){if("function"!=typeof r)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!br(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr);function hr(r){var e,t,n,i;if(("Object"===(t=Q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=gr.exec(n.toString()))return e[1]}return dr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}U(dr,"isObjectLikeArray",yr);var vr,wr,mr="function"==typeof o||"object"==typeof sr||"function"==typeof lr?function(r){return hr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?hr(r).toLowerCase():e},jr=Object.getPrototypeOf;wr=Object.getPrototypeOf,vr="function"===mr(wr)?jr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=vr;function Sr(r){return null==r?null:(r=t(r),_r(r))}function Or(r){return"string"==typeof r}var Er=String.prototype.valueOf,xr=z();function Ir(r){return"object"==typeof r&&(r instanceof String||(xr?function(r){try{return Er.call(r),!0}catch(r){return!1}}(r):"[object String]"===Q(r)))}function Tr(r){return Or(r)||Ir(r)}function kr(r){return"number"==typeof r}U(Tr,"isPrimitive",Or),U(Tr,"isObject",Ir);var Pr=Number,Ar=Pr.prototype.toString,Vr=z();function Fr(r){return"object"==typeof r&&(r instanceof Pr||(Vr?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Q(r)))}function $r(r){return kr(r)||Fr(r)}function Cr(r){return r!=r}function Nr(r){return kr(r)&&Cr(r)}function Br(r){return Fr(r)&&Cr(r.valueOf())}function Rr(r){return Nr(r)||Br(r)}U($r,"isPrimitive",kr),U($r,"isObject",Fr),U(Rr,"isPrimitive",Nr),U(Rr,"isObject",Br);var Gr=Number.POSITIVE_INFINITY,Lr=Pr.NEGATIVE_INFINITY,Zr=Math.floor;function Mr(r){return r<Gr&&r>Lr&&Zr(e=r)===e;var e}function Wr(r){return kr(r)&&Mr(r)}function Ur(r){return Fr(r)&&Mr(r.valueOf())}function Xr(r){return Wr(r)||Ur(r)}U(Xr,"isPrimitive",Wr),U(Xr,"isObject",Ur);var Yr=Object.prototype.propertyIsEnumerable,zr=!Yr.call("beep","0");function qr(r,e){var t;return null!=r&&(!(t=Yr.call(r,e))&&zr&&Tr(r)?!Nr(e=+e)&&Wr(e)&&e>=0&&e<r.length:t)}return function(r){var e,n,o,a,c,u;if(null==r)return[];o=t(r),e=[],n={};do{for(a=i(o),u=0;u<a.length;u++)!1===H(n,c=a[u])&&qr(o,c)&&e.push(c),n[c]=!0;o=Sr(o)}while(o);return e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).enumerablePropertySymbolsIn=e();
//# sourceMappingURL=browser.js.map
