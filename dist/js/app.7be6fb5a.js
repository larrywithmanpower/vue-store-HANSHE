(function(n){function e(e){for(var c,r,o=e[0],f=e[1],h=e[2],i=0,d=[];i<o.length;i++)r=o[i],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&d.push(u[r][0]),u[r]=0;for(c in f)Object.prototype.hasOwnProperty.call(f,c)&&(n[c]=f[c]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,h||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],c=!0,r=1;r<t.length;r++){var o=t[r];0!==u[o]&&(c=!1)}c&&(a.splice(e--,1),n=f(f.s=t[0]))}return n}var c={},r={app:0},u={app:0},a=[];function o(n){return f.p+"js/"+({}[n]||n)+"."+{"chunk-06400239":"d066f64b","chunk-0f2e1165":"9393bae2","chunk-1361fde1":"4ea084d3","chunk-14fa176e":"259c6d5e","chunk-225f12bb":"df3b19c2","chunk-33389ff1":"829af834","chunk-3529c430":"04771f1b","chunk-3615fa94":"40badc84","chunk-498f345b":"3ebc2a84","chunk-4f51cd34":"b667bdd0","chunk-5ac0dbff":"d64e40ad","chunk-7ae90ee5":"0f3da0cb","chunk-814a61ae":"8daa8a58","chunk-94802ce4":"3618a1a7","chunk-96569a80":"d17b0ed3","chunk-9bb67c44":"e259ee3c","chunk-bf781b80":"c196756e","chunk-d4f27c78":"f8e7dac6"}[n]+".js"}function f(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(n){var e=[],t={"chunk-0f2e1165":1,"chunk-1361fde1":1,"chunk-14fa176e":1,"chunk-3529c430":1,"chunk-3615fa94":1,"chunk-4f51cd34":1,"chunk-5ac0dbff":1,"chunk-7ae90ee5":1,"chunk-814a61ae":1,"chunk-94802ce4":1,"chunk-96569a80":1,"chunk-bf781b80":1,"chunk-d4f27c78":1};r[n]?e.push(r[n]):0!==r[n]&&t[n]&&e.push(r[n]=new Promise((function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-06400239":"31d6cfe0","chunk-0f2e1165":"be59355d","chunk-1361fde1":"1ca02252","chunk-14fa176e":"08b0ad81","chunk-225f12bb":"31d6cfe0","chunk-33389ff1":"31d6cfe0","chunk-3529c430":"115970ce","chunk-3615fa94":"f57e80a4","chunk-498f345b":"31d6cfe0","chunk-4f51cd34":"08b0ad81","chunk-5ac0dbff":"0a1c5914","chunk-7ae90ee5":"7aab63fa","chunk-814a61ae":"6be88675","chunk-94802ce4":"b8e7cf1e","chunk-96569a80":"e961b12a","chunk-9bb67c44":"31d6cfe0","chunk-bf781b80":"e15a3bee","chunk-d4f27c78":"d396cb19"}[n]+".css",u=f.p+c,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var h=a[o],i=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(i===c||i===u))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){h=d[o],i=h.getAttribute("data-href");if(i===c||i===u)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var c=e&&e.target&&e.target.src||u,a=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete r[n],l.parentNode.removeChild(l),t(a)},l.href=u;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){r[n]=0})));var c=u[n];if(0!==c)if(c)e.push(c[2]);else{var a=new Promise((function(e,t){c=u[n]=[e,t]}));e.push(c[2]=a);var h,i=document.createElement("script");i.charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.src=o(n);var d=new Error;h=function(e){i.onerror=i.onload=null,clearTimeout(l);var t=u[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+n+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,t[1](d)}u[n]=void 0}};var l=setTimeout((function(){h({type:"timeout",target:i})}),12e4);i.onerror=i.onload=h,document.head.appendChild(i)}return Promise.all(e)},f.m=n,f.c=c,f.d=function(n,e,t){f.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},f.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},f.t=function(n,e){if(1&e&&(n=f(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)f.d(t,c,function(e){return n[e]}.bind(null,c));return t},f.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return f.d(e,"a",e),e},f.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},f.p="",f.oe=function(n){throw console.error(n),n};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],i=h.push.bind(h);h.push=e,h=h.slice();for(var d=0;d<h.length;d++)e(h[d]);var l=i;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var c=t("7a23"),r=(t("7b17"),t("bc3a")),u=t.n(r),a=t("2106"),o=t.n(a),f=t("9062"),h=t.n(f),i=(t("e40d"),t("5f67"),t("3730")),d=t.n(i),l=t("825ae"),b=t("f9d5"),p=t.n(b),s=(t("4413"),t("7bb1")),m=t("3aa8"),k=t("cbdf"),v=t("9457");function g(n,e){var t=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])(t)}t("804c");const y={};y.render=g;var O=y,j=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),w=[{path:"/",name:"Layout",component:function(){return t.e("chunk-5ac0dbff").then(t.bind(null,"88e9"))},redirect:{name:"Home"},children:[{path:"home",name:"Home",component:function(){return t.e("chunk-96569a80").then(t.bind(null,"c2f9"))}},{path:"about",name:"關於寒舍",component:function(){return t.e("chunk-7ae90ee5").then(t.bind(null,"c7d9"))}},{path:"products",name:"Products",component:function(){return t.e("chunk-1361fde1").then(t.bind(null,"bd5a"))},children:[{path:"productList",name:"寒舍商品",component:function(){return t.e("chunk-814a61ae").then(t.bind(null,"70b6"))}},{path:"product/:id",name:"商品細節",component:function(){return t.e("chunk-498f345b").then(t.bind(null,"c506"))}}]},{path:"cart",name:"購物車",component:function(){return t.e("chunk-d4f27c78").then(t.bind(null,"eb78"))},children:[{path:"cartList",name:"已選購商品",component:function(){return t.e("chunk-0f2e1165").then(t.bind(null,"655a"))}},{path:"cartOrder",name:"訂單資訊",component:function(){return t.e("chunk-06400239").then(t.bind(null,"9986"))}},{path:"cartPayment/:id",name:"付款確認",component:function(){return t.e("chunk-9bb67c44").then(t.bind(null,"bd45"))}}]},{path:"finished",name:"付款完成",component:function(){return t.e("chunk-94802ce4").then(t.bind(null,"d0be"))}},{path:"blog/:id",name:"Blog",component:function(){return t.e("chunk-bf781b80").then(t.bind(null,"f4ac"))}}]},{path:"/admin",name:"後台",component:function(){return t.e("chunk-3615fa94").then(t.bind(null,"7277"))},children:[{path:"adminProducts",name:"AdminProducts",component:function(){return t.e("chunk-14fa176e").then(t.bind(null,"d416"))}},{path:"order",name:"Order",component:function(){return t.e("chunk-4f51cd34").then(t.bind(null,"da25"))}},{path:"coupon",name:"Coupon",component:function(){return t.e("chunk-33389ff1").then(t.bind(null,"b4bf"))}},{path:"article",name:"Article",component:function(){return t.e("chunk-225f12bb").then(t.bind(null,"f957"))}}]},{path:"/:pathMatch(.*)*",component:function(){return t.e("chunk-3529c430").then(t.bind(null,"9703"))}}],P=Object(j["a"])({history:Object(j["b"])(),routes:w,linkActiveClass:"active",scrollBehavior:function(){return{top:0}}}),C=P;t("ac1f"),t("1276"),t("25f0"),t("5319"),t("a15b");function E(n){var e=n.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")}var _={showConfirmButton:!1,timer:1500,position:"top",toast:!0,width:"240px"};Object.keys(m["a"]).forEach((function(n){Object(s["e"])(n,m["a"][n])})),Object(s["d"])({generateMessage:Object(k["a"])({zh_TW:v}),validateOnInput:!0}),Object(k["b"])("zh_TW");var A=Object(c["createApp"])(O);A.use(C),A.use(o.a,u.a),A.use(d.a),A.use(p.a,_),A.use(l["a"]),A.component("Loading",h.a),A.component("Form",s["c"]),A.component("Field",s["b"]),A.component("ErrorMessage",s["a"]),A.config.globalProperties.$toCurrency=E,A.mount("#app")},6413:function(n,e,t){},"804c":function(n,e,t){"use strict";t("6413")}});
//# sourceMappingURL=app.7be6fb5a.js.map