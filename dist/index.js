"use strict";var v=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var n=v(function(h,u){
var p=require('@stdlib/utils-property-symbols/dist'),l=require('@stdlib/utils-get-prototype-of/dist'),b=require('@stdlib/assert-is-enumerable-property/dist'),m=require('@stdlib/assert-has-own-property/dist'),y=require('@stdlib/object-ctor/dist');function c(t){var r,a,e,s,i,o;if(t==null)return[];e=y(t),r=[],a={};do{for(s=p(e),o=0;o<s.length;o++)i=s[o],m(a,i)===!1&&b(e,i)&&r.push(i),a[i]=!0;e=l(e)}while(e);return r}u.exports=c
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
