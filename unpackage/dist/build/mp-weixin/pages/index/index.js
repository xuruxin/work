(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1064:function(t,a,o){"use strict";o.r(a);var e=o("e3e5"),n=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(a,t,function(){return e[t]})}(i);a["default"]=n.a},"2b29":function(t,a,o){"use strict";o.r(a);var e=o("f8da"),n=o("1064");for(var i in n)"default"!==i&&function(t){o.d(a,t,function(){return n[t]})}(i);o("76eb");var s=o("2877"),d=Object(s["a"])(n["default"],e["a"],e["b"],!1,null,null,null);a["default"]=d.exports},"2bdd":function(t,a,o){"use strict";(function(t){o("d81e"),o("921b");e(o("66fd"));var a=e(o("2b29"));function e(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,o("543d")["createPage"])},"76eb":function(t,a,o){"use strict";var e=o("aa39"),n=o.n(e);n.a},aa39:function(t,a,o){},e3e5:function(t,a,o){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o={data:function(){return{noData:2,showLoading:2,noRecord:2,catId:0,test:1,catIndex:0,videoPath:"",videoStatus:2,iStatusBarHeight:0,shuomingStatus:2,category_list:[],goodsLists:[],pages:0,keyword:""}},onLoad:function(a){var o=this;this.iStatusBarHeight=t.getSystemInfoSync().statusBarHeight,a.jump&&(console.log("跳转页面"),t.navigateTo({url:"/"+a.jump+"?"+a.jumpData1+"="+a.jumpData2+"&"+a.jumpData3+"="+a.jumpData4+"&"+a.jumpData5+"="+a.jumpData6,success:function(t){}})),o.getCategory()},onShow:function(){},onReady:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){this.goodsLists=[],this.pages=0,this.getCategory()},onReachBottom:function(){this.getGoodslist()},onShareAppMessage:function(){var t=this,a=t.shareData.title,o="/pages/index/index?tid="+t.shareData.id,e=t.shareData.image;return{title:a,path:o,imageUrl:e}},methods:{getCategory:function(){var t=this;this.$http.post("goods/category",{showLoading:!1}).then(function(a){t.rule_video=a.data.rule_video,t.shareData=a.data.share;var o={id:null,name:"全部"};a.data.list.unshift(o),t.category_list=a.data.list,t.catId=a.data.list[0].id,t.getGoodslist()}).catch(function(t){console.log("info,错误请求返回=",t)})},getGoodslist:function(){var t=this;t.showLoading=1,this.$http.post("goods/index",{pages:t.pages,cid:t.catId},{showLoading:!1}).then(function(a){if(0!=t.pages||""!=a.data&&null!=a.data){if(""==a.data||null==a.data)return t.noData=1,void(t.showLoading=2);t.goodsLists=t.goodsLists.concat(a.data),t.pages+=1,t.showLoading=2,a.data.length<10&&(t.noData=1)}else t.noRecord=1}).catch(function(t){console.log("info,错误请求返回=",t)})},getShuomingVideo:function(){var t=this;console.log("获取视频说明地址"),""==t.videoPath?(this.$http.post("getVideoPath",{id:t.rule_video}).then(function(a){console.log("视频地址",a),t.videoPath=a.data}),t.videoStatus=1):t.videoStatus=1},getinputval:function(t){console.log("搜索关键字=",t.detail.value),this.keyword=t.detail.value},searchGoods:function(){var t=this;""!=t.keyword?(t.goodsLists=[],t.pages=0,t.showLoading=1,this.$http.post("search","",{showLoading:!1,headers:{"content-type":"application/x-www-form-urlencoded",keyword:encodeURI(t.keyword)}}).then(function(a){console.log("打印搜索结果",a),t.showLoading=2,""!=a.data&&null!=a.data?(t.goodsLists=a.data,t.noData=1):t.noRecord=1})):console.log("无需搜索")},changegoodstype:function(t){var a=this,o=t.currentTarget.dataset.index,e=t.currentTarget.dataset.id;if(a.catIndex==o&&0!=a.pages)return!1;""!=a.keyword&&(a.keyword=""),a.goodsLists=[],a.pages=0,a.catIndex=o,a.catId=e,a.noData=2,a.noRecord=2,a.showLoading=2,a.getGoodslist()},jumpTo:function(t){var a=t.currentTarget.dataset.jumptype,o=t.currentTarget.dataset.url,e=t.currentTarget.dataset.closepage;this.jumpFunction(a,o,e)},closeVideo:function(){var t=this;1==t.videoStatus?t.videoStatus=2:t.videoStatus=1},cshuomingStatus:function(){console.log("切换说明显示状态");var t=this;1==t.shuomingStatus?t.shuomingStatus=2:t.shuomingStatus=1}}};a.default=o}).call(this,o("543d")["default"])},f8da:function(t,a,o){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c},n=[];o.d(a,"a",function(){return e}),o.d(a,"b",function(){return n})}},[["2bdd","common/runtime","common/vendor"]]]);