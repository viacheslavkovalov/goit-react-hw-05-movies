"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[878],{5834:function(n,t,e){e.d(t,{i:function(){return f},Z:function(){return p}});var r,c,i=e(1766),o=e(5751),a=o.ZP.div(r||(r=(0,i.Z)(["\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-bottom: 20px;\n"]))),u=(0,o.ZP)(a)(c||(c=(0,i.Z)(["\n  padding-top: 30px;\n"]))),s=e(184);function f(n){var t=n.children;return(0,s.jsx)(u,{children:t})}function p(n){var t=n.children;return(0,s.jsx)(a,{children:t})}},1878:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,c=e(885),i=e(1766),o=e(2791),a=e(5751),u=e(8183),s=e(5834),f=e(184),p=(0,o.lazy)((function(){return e.e(545).then(e.bind(e,5545))})),d=(0,o.lazy)((function(){return Promise.resolve().then(e.bind(e,1454))})),h=a.ZP.h1(r||(r=(0,i.Z)(["\n  font-weight: 700;\n  font-size: 36px;\n  color: #406882;\n  text-align: center;\n  line-height: 1.167;\n  margin-top: 30px;\n  margin-bottom: 50px;\n  text-transform: uppercase;\n"])));function l(){var n=(0,o.useState)(null),t=(0,c.Z)(n,2),e=t[0],r=t[1];return(0,o.useEffect)((function(){u.wr().then((function(n){return n.results})).then(r)}),[]),(0,f.jsx)(s.Z,{children:(0,f.jsxs)(o.Suspense,{fallback:(0,f.jsx)(d,{}),children:[(0,f.jsxs)(h,{children:["Trending today ",(new Date).toLocaleDateString()," "]}),e&&(0,f.jsx)(p,{movies:e})]})})}},8183:function(n,t,e){e.d(t,{wr:function(){return f},z1:function(){return p},Y5:function(){return d},xc:function(){return h},Hx:function(){return l}});var r=e(5861),c=e(7757),i=e.n(c),o="2404946c0f95b1815b7a98e7cf38f39e",a="https://api.themoviedb.org/3";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(i().mark((function n(){var t,e,r,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Movie not Found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return u("".concat(a,"/trending/movie/day?api_key=").concat(o))}function p(n){return u("".concat(a,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"))}function d(n){return u("".concat(a,"/movie/").concat(n,"?api_key=").concat(o))}function h(n){return u("".concat(a,"/movie/").concat(n,"/credits?api_key=").concat(o))}function l(n){return u("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(o))}}}]);
//# sourceMappingURL=878.13faf2fe.chunk.js.map