"use strict";var h=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var j=h(function(N,R){
var C=require('@stdlib/ndarray-base-assert-is-row-major/dist'),G=require('@stdlib/math-base-special-fast-max/dist'),H=require('@stdlib/math-base-special-fast-min/dist');function I(i,r,t,q,s,u,x,a,c,f,b){var l,m,o,v,e,n,g,w;if(l=q.data,m=a.data,o=q.accessors[0],v=a.accessors[1],e=x,n=b,C([s,u])){for(w=0;w<i;w++){for(g=G(0,w+t);g<r;g++)v(m,n+g*c,o(l,e+g*u));e+=s,n+=f}return a}for(w=0;w<r;w++){for(g=0;g<=H(w-t,i-1);g++)v(m,n+g*f,o(l,e+g*s));e+=u,n+=c}return a}R.exports=I
});var p=h(function(D,V){
var J=require('@stdlib/ndarray-base-assert-is-row-major/dist'),E=require('@stdlib/array-base-arraylike2object/dist'),K=require('@stdlib/math-base-special-fast-max/dist'),Q=require('@stdlib/math-base-special-fast-min/dist'),U=j();function W(i,r,t,q,s,u,x,a,c,f,b){var l,m,o,v,e,n;if(l=E(q),m=E(a),l.accessorProtocol||m.accessorProtocol)return U(i,r,t,l,s,u,x,m,c,f,b),a;if(o=x,v=b,J([s,u])){for(n=0;n<i;n++){for(e=K(0,n+t);e<r;e++)a[v+e*c]=q[o+e*u];o+=s,v+=f}return a}for(n=0;n<r;n++){for(e=0;e<=Q(n-t,i-1);e++)a[v+e*f]=q[o+e*s];o+=u,v+=c}return a}V.exports=W
});var O=h(function(A,F){
var X=require('@stdlib/blas-base-assert-is-layout/dist'),Y=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),P=require('@stdlib/math-base-special-fast-max/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist'),Z=p();function _(i,r,t,q,s,u,x,a){var c,f,b,l,m,o,v;if(!X(i))throw new TypeError(y('nullFx',i));if(c=Y(i),c?(o=t,v=r):(o=r,v=t),u<P(1,o))throw new RangeError(y('nullJL',o,u));if(a<P(1,v))throw new RangeError(y('nullGM',v,a));return c?(f=u,b=1,l=a,m=1):(f=1,b=u,l=1,m=a),Z(r,t,q,s,f,b,0,x,l,m,0)}F.exports=_
});var T=h(function(B,S){
var $=p();function k(i,r,t,q,s,u,x,a,c,f,b){return $(i,r,t,q,s,u,x,a,c,f,b)}S.exports=k
});var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=O(),d=T();M(z,"ndarray",d);module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
