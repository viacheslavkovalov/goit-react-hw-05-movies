"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[808],{8808:function(e,n,t){function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}t.r(n),t.d(n,{default:function(){return v}});var u=t(885),i=t(2791),a=t(501),s=t(6871),f=t(8183),l=t(1454),p=t(184),b=(0,i.lazy)((function(){return Promise.all([t.e(692),t.e(943)]).then(t.bind(t,3943))})),h=(0,i.lazy)((function(){return t.e(552).then(t.bind(t,5552))})),y=(0,i.lazy)((function(){return t.e(545).then(t.bind(t,5545))})),d=(0,i.lazy)((function(){return Promise.all([t.e(355),t.e(22)]).then(t.bind(t,2022))}));function v(){var e=(0,i.useState)(""),n=(0,u.Z)(e,2),t=n[0],r=n[1],c=(0,i.useState)([]),v=(0,u.Z)(c,2),j=v[0],g=v[1],m=(0,s.TH)(),O=(0,s.s0)(),w=(0,a.lr)(),k=(0,u.Z)(w,1)[0].get("query");(0,i.useEffect)((function(){""!==t&&f.z1(t).then((function(e){return e.results})).then(g)}),[t]),(0,i.useEffect)((function(){null!==k&&f.z1(k).then((function(e){return e.results})).then(g)}),[k]);return(0,p.jsxs)(i.Suspense,{fallback:(0,p.jsx)(l.Z,{}),children:[(0,p.jsx)(b,{onSubmit:function(e){r(j),O(o(o({},m),{},{search:"query=".concat(e)}))},children:(0,p.jsx)(d,{style:{zIndex:"100"},location:m})}),(0,p.jsx)(h,{children:j&&(0,p.jsx)(y,{movies:j})})]})}},8183:function(e,n,t){t.d(n,{wr:function(){return f},z1:function(){return l},Y5:function(){return p},xc:function(){return b},Hx:function(){return h}});var r=t(5861),c=t(7757),o=t.n(c),u="2404946c0f95b1815b7a98e7cf38f39e",i="https://api.themoviedb.org/3";function a(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(o().mark((function e(){var n,t,r,c=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(n,t);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Movie not Found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function f(){return a("".concat(i,"/trending/movie/day?api_key=").concat(u))}function l(e){return a("".concat(i,"/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))}function p(e){return a("".concat(i,"/movie/").concat(e,"?api_key=").concat(u))}function b(e){return a("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(u))}function h(e){return a("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(u))}}}]);
//# sourceMappingURL=808.a8068b10.chunk.js.map