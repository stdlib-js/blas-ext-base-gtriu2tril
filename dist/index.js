"use strict";var h=function(n,a){return function(){try{return a||n((a={exports:{}}).exports,a),a.exports}catch(i){throw (a=0, i)}};};var j=h(function(N,R){
var C=require('@stdlib/ndarray-base-assert-is-row-major/dist'),G=require('@stdlib/math-base-special-fast-max/dist'),H=require('@stdlib/math-base-special-fast-min/dist');function I(n,a,i,q,s,u,x,e,l,c,b){var f,m,o,t,r,v,g,w;if(f=q.data,m=e.data,o=q.accessors[0],t=e.accessors[1],r=x,v=b,C([s,u])){for(w=0;w<n;w++){for(g=G(0,w+i);g<a;g++)t(m,v+g*l,o(f,r+g*u));r+=s,v+=c}return e}for(w=0;w<a;w++){for(g=0;g<=H(w-i,n-1);g++)t(m,v+g*c,o(f,r+g*s));r+=u,v+=l}return e}R.exports=I
});var p=h(function(D,V){
var J=require('@stdlib/ndarray-base-assert-is-row-major/dist'),E=require('@stdlib/array-base-arraylike2object/dist'),K=require('@stdlib/math-base-special-fast-max/dist'),Q=require('@stdlib/math-base-special-fast-min/dist'),U=j();function W(n,a,i,q,s,u,x,e,l,c,b){var f,m,o,t,r,v;if(f=E(q),m=E(e),f.accessorProtocol||m.accessorProtocol)return U(n,a,i,f,s,u,x,m,l,c,b),e;if(o=x,t=b,J([s,u])){for(v=0;v<n;v++){for(r=K(0,v+i);r<a;r++)e[t+r*l]=q[o+r*u];o+=s,t+=c}return e}for(v=0;v<a;v++){for(r=0;r<=Q(v-i,n-1);r++)e[t+r*c]=q[o+r*s];o+=u,t+=l}return e}V.exports=W
});var O=h(function(A,F){
var X=require('@stdlib/blas-base-layout-resolve-str/dist'),Y=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),P=require('@stdlib/math-base-special-fast-max/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist'),Z=p();function _(n,a,i,q,s,u,x,e){var l,c,b,f,m,o,t,r;if(r=X(n),r===null)throw new TypeError(y('36lFx',n));if(l=Y(r),l?(o=i,t=a):(o=a,t=i),u<P(1,o))throw new RangeError(y('36lJL',o,u));if(e<P(1,t))throw new RangeError(y('36lGM',t,e));return l?(c=u,b=1,f=e,m=1):(c=1,b=u,f=1,m=e),Z(a,i,q,s,c,b,0,x,f,m,0)}F.exports=_
});var T=h(function(B,S){
var $=p();function k(n,a,i,q,s,u,x,e,l,c,b){return $(n,a,i,q,s,u,x,e,l,c,b)}S.exports=k
});var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=O(),d=T();M(z,"ndarray",d);module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
