(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/redbag/index"],{"383d":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=getApp(),o={data:function(){return{cdnUrl:a.globalData.cdnUrl,table_number:1,alertShow:2,options:"",hbDatas:"",recordList:[],recordRand:[],pages:0,morenavatar:"/static/redbag/avatar.png"}},onLoad:function(t){console.log(t);var n=this;n.options=t,n.showHb(),n.getHBRecord()},onPullDownRefresh:function(){this.countDown=1},onHide:function(){this.countDown=1},onUnload:function(){this.countDown=1},onShow:function(){var t=this;this.countDown=2,1==this.countDown&&t.showHb()},onShareAppMessage:function(){var t=this,n=t.shareData.share_title,a="/pages/index/index?tid="+t.shareData.id+"&jump=pages/jointeam/jointeam_redbag&jumpData1=action&jumpData2=other&jumpData3=pintuan_home_id&jumpData4="+t.hbDatas.row.pintuan_home_id+"&jumpData5=hid&jumpData6="+t.options.hid,o=t.shareData.share_img;return console.log(a),{title:n,path:a,imageUrl:o}},methods:{tixian:function(){var n=this;parseInt(n.hbDatas.row.totalMoney)>=200?this.$http.post("hbTixian",{hid:n.options.hid},{showErrorMsg:!1}).then(function(n){1==n.code?t.showModal({title:"温馨提示",showCancel:!1,content:"提现成功",success:function(n){t.switchTab({url:"/pages/index/index"})}}):t.showModal({title:"温馨提示",showCancel:!1,content:n.msg,success:function(t){}})}).catch(function(t){console.log("info,错误请求返回=",t)}):n.alertShow=1},getHBRecord:function(){var t=this;this.$http.post("getHBRecord",{hid:t.options.hid,pages:t.pages}).then(function(n){t.recordList=t.recordList.concat(n.data.recordList),t.recordRand=t.recordRand.concat(n.data.recordRand),t.pages+=1})},showHb:function(){var t=this;this.$http.post("showHB",{hid:t.options.hid}).then(function(n){t.hbDatas=n.data,t.shareData=n.data.share,setTimeout(function(){t.setCountDown()},500)})},alertstatus:function(){var t=this;1==t.alertShow?t.alertShow=2:t.alertShow=1},changetable:function(t){var n=this;n.table_number=t.currentTarget.dataset.index},setCountDown:function(){var t=this,n=1e3,a=this.hbDatas.row;a.times<=0&&(a.times=0),a.times=1e3*a.times;var o=this.getFormat(a.times);a.times-=n,a.h="".concat(o.hh),a.m="".concat(o.mm),a.s="".concat(o.ss),a.times=a.times/1e3,t.hbDatas.row=a,2==t.countDown&&1==a.status&&setTimeout(this.setCountDown,n)}}};n.default=o}).call(this,a("543d")["default"])},"3d5a":function(t,n,a){"use strict";a.r(n);var o=a("383d"),e=a.n(o);for(var i in o)"default"!==i&&function(t){a.d(n,t,function(){return o[t]})}(i);n["default"]=e.a},"6aca":function(t,n,a){},c637:function(t,n,a){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},e=[];a.d(n,"a",function(){return o}),a.d(n,"b",function(){return e})},df1c:function(t,n,a){"use strict";(function(t){a("d81e"),a("921b");o(a("66fd"));var n=o(a("fd78"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("543d")["createPage"])},f893:function(t,n,a){"use strict";var o=a("6aca"),e=a.n(o);e.a},fd78:function(t,n,a){"use strict";a.r(n);var o=a("c637"),e=a("3d5a");for(var i in e)"default"!==i&&function(t){a.d(n,t,function(){return e[t]})}(i);a("f893");var s=a("2877"),r=Object(s["a"])(e["default"],o["a"],o["b"],!1,null,null,null);n["default"]=r.exports}},[["df1c","common/runtime","common/vendor"]]]);