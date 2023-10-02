// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;r=e?function(r){return n(t(r))}:function(){return[]};var i=r,o=/./,a="function"==typeof Object.defineProperty?Object.defineProperty:null,c=Object.defineProperty;function u(r){return"number"==typeof r}function l(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function f(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+l(i):l(i)+r,n&&(r="-"+r)),r}var s=String.prototype.toLowerCase,p=String.prototype.toUpperCase;function g(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!u(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=f(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=f(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===p.call(r.specifier)?p.call(t):s.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function b(r){return"string"==typeof r}var d=Math.abs,y=String.prototype.toLowerCase,h=String.prototype.toUpperCase,v=String.prototype.replace,w=/e\+(\d)$/,m=/e-(\d)$/,j=/^(\d+)$/,_=/^(\d+)e/,O=/\.0$/,S=/\.0*e/,E=/(\..*[^0])0*e/;function x(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!u(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":d(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=v.call(t,E,"$1e"),t=v.call(t,S,"e"),t=v.call(t,O,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=v.call(t,w,"e+0$1"),t=v.call(t,m,"e-0$1"),r.alternate&&(t=v.call(t,j,"$1."),t=v.call(t,_,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===h.call(r.specifier)?h.call(t):y.call(t)}function I(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function T(r,e,t){var n=e-r.length;return n<0?r:r=t?r+I(n):I(n)+r}var k=String.fromCharCode,P=isNaN,A=Array.isArray;function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,t,n,i,o,a,c,u,l;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(b(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=V(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,P(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,P(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=g(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!P(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=P(o)?String(n.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=x(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=f(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=T(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function C(r){var e,t,n,i;for(t=[],i=0,n=N.exec(r);n;)(e=r.slice(i,N.lastIndex-n[0].length)).length&&t.push(e),t.push($(n)),i=N.lastIndex,n=N.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function B(r){return"string"==typeof r}function R(r){var e,t,n;if(!B(r))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=C(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return F.apply(null,t)}var G,L=Object.prototype,Z=L.toString,M=L.__defineGetter__,W=L.__defineSetter__,U=L.__lookupGetter__,X=L.__lookupSetter__;G=function(){try{return a({},"x",{}),!0}catch(r){return!1}}()?c:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(r,e)||X.call(r,e)?(n=r.__proto__,r.__proto__=L,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&M&&M.call(r,e,t.get),a&&W&&W.call(r,e,t.set),r};var Y=G;function z(r,e,t){Y(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function q(r){return"boolean"==typeof r}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return D&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString,K=Object.prototype.hasOwnProperty;function Q(r,e){return null!=r&&K.call(r,e)}var rr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof rr?rr.toStringTag:"",tr=H()?function(r){var e,t,n;if(null==r)return J.call(r);t=r[er],e=Q(r,er);try{r[er]=void 0}catch(e){return J.call(r)}return n=J.call(r),e?r[er]=t:delete r[er],n}:function(r){return J.call(r)},nr=Boolean,ir=Boolean.prototype.toString,or=H();function ar(r){return"object"==typeof r&&(r instanceof nr||(or?function(r){try{return ir.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===tr(r)))}function cr(r){return q(r)||ar(r)}function ur(){return new Function("return this;")()}z(cr,"isPrimitive",q),z(cr,"isObject",ar);var lr="object"==typeof self?self:null,fr="object"==typeof window?window:null,sr="object"==typeof globalThis?globalThis:null,pr=function(r){if(arguments.length){if(!q(r))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ur()}if(sr)return sr;if(lr)return lr;if(fr)return fr;throw new Error("unexpected error. Unable to resolve global object.")}(),gr=pr.document&&pr.document.childNodes,br=Int8Array;function dr(){return/^\s*function\s*([^(]*)/i}var yr,hr=/^\s*function\s*([^(]*)/i;z(dr,"REGEXP",hr),yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===tr(r)};var vr=yr;function wr(r){return null!==r&&"object"==typeof r}var mr=function(r){if("function"!=typeof r)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!vr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(wr);function jr(r){var e,t,n,i;if(("Object"===(t=tr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=hr.exec(n.toString()))return e[1]}return wr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}z(wr,"isObjectLikeArray",mr);var _r,Or,Sr="function"==typeof o||"object"==typeof br||"function"==typeof gr?function(r){return jr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?jr(r).toLowerCase():e},Er=Object.getPrototypeOf;Or=Object.getPrototypeOf,_r="function"===Sr(Or)?Er:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===tr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var xr=_r;function Ir(r){return null==r?null:(r=t(r),xr(r))}function Tr(r){return"string"==typeof r}var kr=String.prototype.valueOf,Pr=H();function Ar(r){return"object"==typeof r&&(r instanceof String||(Pr?function(r){try{return kr.call(r),!0}catch(r){return!1}}(r):"[object String]"===tr(r)))}function Vr(r){return Tr(r)||Ar(r)}function Fr(r){return"number"==typeof r}z(Vr,"isPrimitive",Tr),z(Vr,"isObject",Ar);var Nr=Number,$r=Nr.prototype.toString,Cr=H();function Br(r){return"object"==typeof r&&(r instanceof Nr||(Cr?function(r){try{return $r.call(r),!0}catch(r){return!1}}(r):"[object Number]"===tr(r)))}function Rr(r){return Fr(r)||Br(r)}function Gr(r){return r!=r}function Lr(r){return Fr(r)&&Gr(r)}function Zr(r){return Br(r)&&Gr(r.valueOf())}function Mr(r){return Lr(r)||Zr(r)}z(Rr,"isPrimitive",Fr),z(Rr,"isObject",Br),z(Mr,"isPrimitive",Lr),z(Mr,"isObject",Zr);var Wr=Number.POSITIVE_INFINITY,Ur=Nr.NEGATIVE_INFINITY,Xr=Math.floor;function Yr(r){return r<Wr&&r>Ur&&Xr(e=r)===e;var e}function zr(r){return Fr(r)&&Yr(r)}function qr(r){return Br(r)&&Yr(r.valueOf())}function Dr(r){return zr(r)||qr(r)}z(Dr,"isPrimitive",zr),z(Dr,"isObject",qr);var Hr=Object.prototype.propertyIsEnumerable,Jr=!Hr.call("beep","0");function Kr(r,e){var t;return null!=r&&(!(t=Hr.call(r,e))&&Jr&&Vr(r)?!Lr(e=+e)&&zr(e)&&e>=0&&e<r.length:t)}return function(r){var e,n,o,a,c,u;if(null==r)return[];o=t(r),e=[],n={};do{for(a=i(o),u=0;u<a.length;u++)!1===Q(n,c=a[u])&&Kr(o,c)&&e.push(c),n[c]=!0;o=Ir(o)}while(o);return e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).enumerablePropertySymbolsIn=e();
//# sourceMappingURL=browser.js.map
