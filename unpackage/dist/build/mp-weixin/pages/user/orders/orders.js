(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/orders/orders"],{"0a39":function(t,e,n){"use strict";(function(t){n("d81e"),n("921b");a(n("66fd"));var e=a(n("3086"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},3086:function(t,e,n){"use strict";n.r(e);var a=n("dd0d"),r=n("8d90");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("8ad2");var u=n("2877"),s=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},"509c":function(t,e,n){},"8ad2":function(t,e,n){"use strict";var a=n("509c"),r=n.n(a);r.a},"8d90":function(t,e,n){"use strict";n.r(e);var a=n("b177"),r=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=r.a},b177:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{currentTab2:"all",datas:[],pages:0}},onLoad:function(t){var e=this;t.types&&(e.currentTab2=t.types),e.getOrders()},methods:{shouhuo:function(e){var n=this;t.showModal({title:"温馨提示",content:"是否确认收货?",success:function(a){if(a.confirm){console.log("确认收货");var r=e.currentTarget.dataset.orderid;n.$http.post("orders/confirm_receipt",{oid:r}).then(function(e){console.log(e.data),1==e.code&&t.showToast({title:"收货完成",duration:2e3,success:function(t){setTimeout(function(){n.pages=0,n.datas=[],n.getOrders()},2e3)}})})}}})},getOrders:function(){console.log("请求订单");var t=this;if("all"==t.currentTab2)var e=null;else e=t.currentTab2;console.log("pages==",t.pages),this.$http.post("orders/index",{pages:t.pages,status:e}).then(function(e){console.log("打印订单",e.data),t.pages+=1,t.datas=t.datas.concat(e.data)})},clickTab2:function(t){var e=this;if(this.currentTab2===t.target.dataset.current)return!1;e.pages=0,e.datas=[],e.currentTab2=t.target.dataset.current,e.getOrders()},jumpTo:function(t){var e=t.currentTarget.dataset.jumptype,n=t.currentTarget.dataset.url,a=t.currentTarget.dataset.closepage;this.jumpFunction(e,n,a)}}};e.default=n}).call(this,n("543d")["default"])},dd0d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})}},[["0a39","common/runtime","common/vendor"]]]);