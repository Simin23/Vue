(function(t){function e(e){for(var n,r,l=e[0],c=e[1],o=e[2],d=0,p=[];d<l.length;d++)r=l[d],s[r]&&p.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var c=a[l];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0033":function(t,e,a){},"025a":function(t,e,a){"use strict";var n=a("0033"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],r={name:"app",components:{}},l=r,c=a("2877"),o=Object(c["a"])(l,s,i,!1,null,null,null),u=o.exports,d=a("2427"),p=a.n(d),m=a("3bc2"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view"),a("van-tabbar",{attrs:{route:!0},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabbarItem,function(e,n){return a("van-tabbar-item",{key:n,attrs:{icon:e.icon},domProps:{textContent:t._s(e.title)},on:{click:function(a){return t.navTo(e.url)}}})}),1)],1)},v=[],_={data:function(){return{active:0,tabbarItem:[{title:"首页",url:"/eleme/index",icon:"home-o"},{title:"订单",url:"/eleme/order",icon:"search"},{title:"我的",url:"/eleme/mine",icon:"home-o"}]}},methods:{navTo:function(t){this.$router.push(t)}}},h=_,g=Object(c["a"])(h,f,v,!1,null,null,null),x=g.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("详情页")])},C=[],y={},j=Object(c["a"])(y,b,C,!1,null,null,null),w=j.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-search",{style:{position:"fixed",top:"0",width:"100%",zIndex:"999"},attrs:{placeholder:"请输入搜索关键词",background:"#0af"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),a("van-grid",{style:{marginTop:"15%"},attrs:{"column-num":5}},t._l(t.elemeggComputed,function(t,e){return a("van-grid-item",{key:e,attrs:{to:"/detail/"+e,icon:t.image_hash,text:t.name}})}),1),t._m(0),a("van-divider",[t._v("推荐商家")]),a("van-dropdown-menu",[a("van-dropdown-item",{attrs:{options:t._f("handleMenu")(t.xiala)},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),a("span",{staticClass:"s1"},[t._v("距离最近")]),a("span",{staticClass:"s1"},[t._v("品质联盟")]),a("span",{staticClass:"s1"},[t._v("筛选")])],1),a("ul",{staticClass:"_2db1e1m154ODnjL1-ivQvq"},t._l(t.list,function(e,n){return a("li",{key:n,attrs:{"data-watch":"999732134318439"}},[a("a",{staticClass:"FcKg0z7ZA3tlZo-vSxopN",attrs:{role:"logo","aria-label":e.shopName}},[a("div",{staticClass:"_2q5HWkq__CHgEQLE76bhCF",attrs:{role:"logo","aria-label":e.shopName}},[a("div",[a("div",{staticClass:"_2igkDNMjpxxIgHzE1Ptqyk lazyimage-holder",staticStyle:{height:"57px"}},[a("img",{staticClass:"lazyimage-img",attrs:{src:e.picUrl,alt:"icon"}})])])]),a("div",{staticClass:"_2L_M6YlchG3yfnSSg7L6mL"},[a("div",{staticClass:"_3ce4X4pC6NTjqy4_fKHA8E"},[t._v(t._s(e.shopName))]),a("div",{staticClass:"_21yyPg0MxIEFMCg8RnTeUo"},[a("div",[t._m(1,!0),a("span",{staticClass:"_34MB4leIjAhG3LXl-DN8Ed _19QQt5prXpFQr9QhCVfwC5"},[t._v("5.0")]),a("span",{staticClass:"_1V9_Khfd3oEDl7_xSgGuGL _34MB4leIjAhG3LXl-DN8Ed mtsi-num"},[t._v(t._s(e.monthSalesTip))])]),a("div",{staticClass:"_20HnNmr2Skt7lyGyrsg5R7"},[a("span",{staticClass:"_34MB4leIjAhG3LXl-DN8Ed mtsi-num"},[t._v(t._s(e.deliveryTimeTip))]),a("span",{staticClass:"_34MB4leIjAhG3LXl-DN8Ed _3jD4JjJGIR519uivFOA_ud mtsi-num"},[t._v(t._s(e.distance))])])]),a("div",{staticClass:"_1wRyOmTit2wxvwxcfx4tf1"},[a("span",{staticClass:"_34MB4leIjAhG3LXl-DN8Ed mtsi-num"},[t._v(t._s(e.minPriceTip))]),a("span",{staticClass:"_34MB4leIjAhG3LXl-DN8Ed _3jD4JjJGIR519uivFOA_ud mtsi-num"},[t._v(t._s(e.shippingFeeTip))]),a("span",{staticClass:"_34MB4leIjAhG3LXl-DN8Ed _3jD4JjJGIR519uivFOA_ud mtsi-num"},[t._v(t._s(e.averagePriceTip))]),a("span",{staticClass:"_3WMYBNt0cX8jtjuQLqQ-0V"})]),t._m(2,!0)])])])}),0)],1)},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index-1ECZ3_0"},[a("section",{staticClass:"index-1y1Q5_0",attrs:{id:"activity-lego"}},[a("div",{staticClass:"index-3xB2N_0"},[a("div",{staticClass:"index-Q3GS5_0 index-1xT5J_0"},[a("h3",{staticClass:"index-1qvN6_0",attrs:{"scan-data":"{item.title}"}},[t._v("品质套餐")]),a("div",{staticClass:"index-2W67h_0"},[t._v("搭配齐全吃得好")]),a("div",{staticClass:"index-1DFa7_0"},[t._v("立即抢购 >")]),a("img",{attrs:{src:"https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"D11MX3M-SDa4TXs8lmgHq",staticStyle:{height:"10px"}},[a("i",{staticClass:"_1ukqM-8qHp61SdF68btTCh",staticStyle:{transform:"scale(0.833333)"}}),a("i",{staticClass:"_1ukqM-8qHp61SdF68btTCh",staticStyle:{transform:"scale(0.833333)"}}),a("i",{staticClass:"_1ukqM-8qHp61SdF68btTCh",staticStyle:{transform:"scale(0.833333)"}}),a("i",{staticClass:"_1ukqM-8qHp61SdF68btTCh",staticStyle:{transform:"scale(0.833333)"}}),a("i",{staticClass:"_1ukqM-8qHp61SdF68btTCh",staticStyle:{transform:"scale(0.833333)"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"_3ZkFiqxxif60zXGdUj4atX"},[a("img",{attrs:{src:"http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png",alt:"icon"}}),a("span",{staticClass:"_2W4nejgMhUSSXvLmQtEOL-"},[t._v("大众点评高分店铺")])])}],S=(a("7f7f"),a("ac6a"),a("96cf"),a("3b8d")),E={data:function(){return{value:"",elemegg:[],value1:0,xiala:[],list:[]}},computed:{elemeggComputed:function(){return this.elemegg.slice(0,10)}},created:function(){var t=Object(S["a"])(regeneratorRuntime.mark(function t(){var e,a,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios("https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/elemegg");case 2:return e=t.sent,this.elemegg=e.data[0].entries,t.next=6,this.$axios("https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/xiala");case 6:return a=t.sent,this.xiala=a.data.data.categories,t.next=10,this.$axios("https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/elemegl");case 10:n=t.sent,this.list=n.data.data.shopList;case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),filters:{handleMenu:function(t){var e=[];return t.forEach(function(t,a){t.text=t.name,t.value=a,e.push(t)}),e}}},O=E,T=(a("025a"),Object(c["a"])(O,k,M,!1,null,"504bc4bf",null)),q=T.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("订单页")])},N=[],D={},G=Object(c["a"])(D,L,N,!1,null,null,null),F=G.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("我的")])},X=[],$={},A=Object(c["a"])($,I,X,!1,null,null,null),H=A.exports,P=(a("f471"),a("a337")),Q=(a("37e9"),a("168b")),B=(a("f029"),a("536d")),J=(a("1050"),a("8618")),R=(a("5324"),a("43aa")),z=(a("e712"),a("962f")),U=(a("d6e1"),a("754b")),W=(a("9d3d"),a("e37f")),Z=function(){n["a"].use(W["a"]),n["a"].use(z["a"]).use(U["a"]),n["a"].use(R["a"]),n["a"].use(B["a"]).use(J["a"]),n["a"].use(P["a"]).use(Q["a"])};n["a"].prototype.$axios=p.a,n["a"].use(m["a"]);var K=[{path:"/eleme",component:x,children:[{path:"index",component:q},{path:"order",component:F},{path:"mine",component:H}]},{path:"/detail/:id",component:w},{path:"/",redirect:"/eleme/index"}],V=new m["a"]({routes:K});Z(),n["a"].config.productionTip=!1,new n["a"]({router:V,render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=app.75acfeaa.js.map