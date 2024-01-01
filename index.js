// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).enumerablePropertySymbolsIn=e()}(this,(function(){"use strict";var r,e=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;r=e?function(r){return n(t(r))}:function(){return[]};var i=r,o=/./,a="function"==typeof Object.defineProperty?Object.defineProperty:null;var c=Object.defineProperty;function u(r){return"number"==typeof r}function l(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function f(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+l(i):l(i)+r,n&&(r="-"+r)),r}var s=String.prototype.toLowerCase,p=String.prototype.toUpperCase;function g(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!u(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=f(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=f(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===p.call(r.specifier)?p.call(t):s.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function b(r){return"string"==typeof r}var d=Math.abs,y=String.prototype.toLowerCase,h=String.prototype.toUpperCase,v=String.prototype.replace,w=/e\+(\d)$/,m=/e-(\d)$/,j=/^(\d+)$/,_=/^(\d+)e/,O=/\.0$/,S=/\.0*e/,E=/(\..*[^0])0*e/;function x(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!u(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":d(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=v.call(t,E,"$1e"),t=v.call(t,S,"e"),t=v.call(t,O,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=v.call(t,w,"e+0$1"),t=v.call(t,m,"e-0$1"),r.alternate&&(t=v.call(t,j,"$1."),t=v.call(t,_,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===h.call(r.specifier)?h.call(t):y.call(t)}function I(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function T(r,e,t){var n=e-r.length;return n<0?r:r=t?r+I(n):I(n)+r}var k=String.fromCharCode,P=isNaN,A=Array.isArray;function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,t,n,i,o,a,c,u,l;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(b(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=V(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,P(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,P(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=g(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!P(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=P(o)?String(n.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=x(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=f(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=T(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function C(r){var e,t,n,i;for(t=[],i=0,n=N.exec(r);n;)(e=r.slice(i,N.lastIndex-n[0].length)).length&&t.push(e),t.push($(n)),i=N.lastIndex,n=N.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function B(r){return"string"==typeof r}function R(r){var e,t,n;if(!B(r))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=C(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return F.apply(null,t)}var G,L=Object.prototype,Z=L.toString,M=L.__defineGetter__,W=L.__defineSetter__,U=L.__lookupGetter__,X=L.__lookupSetter__;G=function(){try{return a({},"x",{}),!0}catch(r){return!1}}()?c:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(r,e)||X.call(r,e)?(n=r.__proto__,r.__proto__=L,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&M&&M.call(r,e,t.get),a&&W&&W.call(r,e,t.set),r};var Y=G;function z(r,e,t){Y(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function q(r){return"boolean"==typeof r}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return D&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString;var K=Object.prototype.hasOwnProperty;function Q(r,e){return null!=r&&K.call(r,e)}var rr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof rr?rr.toStringTag:"";var tr=H()?function(r){var e,t,n;if(null==r)return J.call(r);t=r[er],e=Q(r,er);try{r[er]=void 0}catch(e){return J.call(r)}return n=J.call(r),e?r[er]=t:delete r[er],n}:function(r){return J.call(r)},nr=Boolean,ir=Boolean.prototype.toString;var or=H();function ar(r){return"object"==typeof r&&(r instanceof nr||(or?function(r){try{return ir.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===tr(r)))}function cr(r){return q(r)||ar(r)}function ur(){return new Function("return this;")()}z(cr,"isPrimitive",q),z(cr,"isObject",ar);var lr="object"==typeof self?self:null,fr="object"==typeof window?window:null,sr="object"==typeof global?global:null,pr="object"==typeof globalThis?globalThis:null;var gr=function(r){if(arguments.length){if(!q(r))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ur()}if(pr)return pr;if(lr)return lr;if(fr)return fr;if(sr)return sr;throw new Error("unexpected error. Unable to resolve global object.")}(),br=gr.document&&gr.document.childNodes,dr=Int8Array;function yr(){return/^\s*function\s*([^(]*)/i}var hr,vr=/^\s*function\s*([^(]*)/i;z(yr,"REGEXP",vr),hr=Array.isArray?Array.isArray:function(r){return"[object Array]"===tr(r)};var wr=hr;function mr(r){return null!==r&&"object"==typeof r}var jr=function(r){if("function"!=typeof r)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!wr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(mr);function _r(r){var e,t,n,i;if(("Object"===(t=tr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=vr.exec(n.toString()))return e[1]}return mr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}z(mr,"isObjectLikeArray",jr);var Or="function"==typeof o||"object"==typeof dr||"function"==typeof br?function(r){return _r(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?_r(r).toLowerCase():e};var Sr,Er,xr=Object.getPrototypeOf;Er=Object.getPrototypeOf,Sr="function"===Or(Er)?xr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===tr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ir=Sr;function Tr(r){return null==r?null:(r=t(r),Ir(r))}function kr(r){return"string"==typeof r}var Pr=String.prototype.valueOf;var Ar=H();function Vr(r){return"object"==typeof r&&(r instanceof String||(Ar?function(r){try{return Pr.call(r),!0}catch(r){return!1}}(r):"[object String]"===tr(r)))}function Fr(r){return kr(r)||Vr(r)}function Nr(r){return"number"==typeof r}z(Fr,"isPrimitive",kr),z(Fr,"isObject",Vr);var $r=Number,Cr=$r.prototype.toString;var Br=H();function Rr(r){return"object"==typeof r&&(r instanceof $r||(Br?function(r){try{return Cr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===tr(r)))}function Gr(r){return Nr(r)||Rr(r)}function Lr(r){return r!=r}function Zr(r){return Nr(r)&&Lr(r)}function Mr(r){return Rr(r)&&Lr(r.valueOf())}function Wr(r){return Zr(r)||Mr(r)}z(Gr,"isPrimitive",Nr),z(Gr,"isObject",Rr),z(Wr,"isPrimitive",Zr),z(Wr,"isObject",Mr);var Ur=Number.POSITIVE_INFINITY,Xr=$r.NEGATIVE_INFINITY,Yr=Math.floor;function zr(r){return r<Ur&&r>Xr&&Yr(e=r)===e;var e}function qr(r){return Nr(r)&&zr(r)}function Dr(r){return Rr(r)&&zr(r.valueOf())}function Hr(r){return qr(r)||Dr(r)}z(Hr,"isPrimitive",qr),z(Hr,"isObject",Dr);var Jr=Object.prototype.propertyIsEnumerable;var Kr=!Jr.call("beep","0");function Qr(r,e){var t;return null!=r&&(!(t=Jr.call(r,e))&&Kr&&Fr(r)?!Zr(e=+e)&&qr(e)&&e>=0&&e<r.length:t)}return function(r){var e,n,o,a,c,u;if(null==r)return[];o=t(r),e=[],n={};do{for(a=i(o),u=0;u<a.length;u++)!1===Q(n,c=a[u])&&Qr(o,c)&&e.push(c),n[c]=!0;o=Tr(o)}while(o);return e}}));
//# sourceMappingURL=index.js.map
