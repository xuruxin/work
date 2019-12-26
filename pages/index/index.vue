<template>
	<view>
		<cu-custom bgColor="bg-gradual-redcolor" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">拼团夺宝</block>
		</cu-custom>

		<!-- 玩法说明 -->
		<scroll-view v-if="shuomingStatus==1" scroll-y class="shuomingpic">
			<view :style="{top:iStatusBarHeight*3.4+'px'}" @tap="cshuomingStatus" class="closeShuoming"></view>
			<image :style="{top:iStatusBarHeight*3.4+'px'}" src="/static/shuomingpic.png" mode="widthFix"></image>
		</scroll-view>


		<view class="topbox">
			<view class="shuomingBtn" @tap="cshuomingStatus"></view>
			<view class="videoBtn" @tap="getShuomingVideo"></view>
			<image class="shuomingtitle" src="https://taoke168.oss-cn-beijing.aliyuncs.com/sanrenpin_html/index/shuomingtitle.png?1"
			 mode="widthFix"></image>

			<view class="searchinput">
				<image class="searchicon" src="https://taoke168.oss-cn-beijing.aliyuncs.com/sanrenpin_html/searchicon.png" mode=""></image>
				<input class="" type="text" :value="keyword" @input="getinputval" @blur="searchGoods" placeholder="搜你想要的商品" />
			</view>
			<view class="tips">
				<view class="">① 京东旗下平台</view>
				<view class="">② 拼团失败得赏金</view>
				<view class="">③ 公开透明实时到账</view>
			</view>

		</view>

		<scroll-view scroll-x class="cat_goodstypes">
			<view v-for="(item, index) in category_list" :key="index" :data-id="item.id" :data-index="index" @tap='changegoodstype'
			 v-bind:class="index==catIndex?'cat_goodstype cat_active':'cat_goodstype'">{{item.name}}
				<view v-if="index == catIndex" class="cat_red"></view>
			</view>
		</scroll-view>

		<view v-for="(item, index) in goodsLists" :key="index" @tap="jumpTo" data-jumptype="1" data-closepage="1" :data-url="`/pages/goods/index?goods_id=${item.id}`"
		 class="goodsList">

			<view class="goodsMsg">
				<view class="goodsName">
					{{item.goods_name}}
				</view>
				<view class="goodsPrice">
					拼团价￥<text class="bigmoney">{{item.integer}}</text>.{{item.decimal_place}}　<text class="grayword">原价</text><text
					 class="yuanjia">￥{{item.min_normal_price}}</text>
				</view>
				<view class="butie">
					拼团失败返 {{item.min_group_price}}元 + 赏金 {{item.subsidy}} 元
				</view>
				<view class="">
					<view class="soldnum">
						已拼{{item.sales_tip}}件
					</view>
					<view class="pinnum">
						<image v-for="(item2, index) in item.pt_user_list" :key="index" class="avatarList" :src="item2" mode=""></image>
						<text>等{{item.pt_count}}人正在拼</text>
					</view>
				</view>
			</view>
			<image class="goodsPic" :src="item.goods_thumbnail_image" mode=""></image>

		</view>


		<!-- 没有记录 -->
		<view v-if="noRecord==1" class="norecord-none">
			<image class="none-icon" src="/static/icon-no-record.png"></image>
			<view class="none-tips">暂无记录~</view>
		</view>
		<!-- loading -->
		<view v-if="showLoading==1" class="moreLoading">
			<image src="/static/loading.png" mode=""></image>正在努力加载
		</view>
		<!-- 底线 -->
		<view v-if="noData==1" class="noDatastip">
			— 我是有底线的 —
		</view>


		<!-- 视频弹窗 -->
		<view v-if="videoStatus == 1" class="videoBox">
			<view @tap="closeVideo" class="closebg"></view>
			<video :src="videoPath" autoplay controls></video>
			<view @tap="closeVideo" class="group">
				<block>
					<icon type="cancel" color="#ffffff" size="40" />
				</block>
			</view>
		</view>
		
		<view class="" style="height:100upx;">
			
		</view>
		<button open-type="contact" class="bottombanner nullButton2" ><image src="/static/bottombanner.png" mode="widthFix"></image></button>

		<view class="showHhBox" v-if="showHhBox == 1">
			<view class="hbbody">
				<image class="hbimg" :src="hbimg" mode="widthFix"></image>		
				<button type="primary" :disabled="disabled" hover-class="none" open-type="getUserInfo" class="hbbutton" @getuserinfo="authLogin">
					<image :src="hbbutton"></image>
				</button>
				<icon type="cancel" @click="closeHbBox" color="#ffffff" size="40" />
			</view>				
		</view>		
		<view class="hb_daojishi" @click="showHB">
			<image src="/static/200yuan.png" mode="widthFix"></image>
			<view class="hb_daojishi_body">
				<view>{{datas_h}}</view>：<view>{{datas_m}}</view>：<view>{{datas_s}}</view>
			</view>
		</view>
	</view>




</template>

<script>
	var rule_video = '';
	var norequest = 1;
	var countDowns = 2;
	export default {
		data() {
			return {
				noData: 2, // 没有更多数据提示 1显示2隐藏
				showLoading: 2, // 加载更多提示 1显示 2隐藏
				noRecord: 2, // 没有记录提示 1显示 2隐藏
				catId: 0,
				'test': 1,
				'catIndex': 0,
				'videoPath': '',
				'videoStatus': 2,
				iStatusBarHeight: 0,
				shuomingStatus: 2,
				category_list: [],
				goodsLists: [],
				pages: 0,
				keyword: '',
				showHhBox:2,//新人红包 1=显示，2=隐藏
				hbimg:'',//新人红包 弹窗背景图
				hbbutton:'',//新人红包 动态按钮 
				userInfo:'',
				datas_h: '',
				datas_m: '',
				datas_s: '',
				hongbao_home:'',
				disabled:false,
				hongbao_times:'',//真实的200元红包倒计时
			}
		},
		//监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参）
		onLoad(options) {
			var that = this;
			this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight;

			if (options.jump) {
				console.log('跳转页面')
				// that.norequest = 1;

				uni.navigateTo({
					url: '/' + options.jump + '?' + options.jumpData1 + '=' + options.jumpData2 + "&" + options.jumpData3 + "=" +
						options.jumpData4 + "&" + options.jumpData5 + "=" + options.jumpData6,
					success: function(res) {

						// that.norequest = 2;

					}
				})
				// return;
			}

			that.getCategory();
		},
		//监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面
		onShow() { 
			var userInfo = uni.getStorageSync('userinfo')
			if(userInfo){
				this.userInfo = userInfo 
			}
			this.getisHB() 
			
			this.countDowns = 2;
			
		},
		//监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
		onReady() {},
		//监听页面隐藏
		onHide() {
			this.countDowns = 1;
		},
		//监听页面卸载
		onUnload() {
			this.countDowns = 1;
		},
		//监听用户下拉动作，一般用于下拉刷新
		onPullDownRefresh() {
			this.goodsLists = [];
			this.pages = 0; 
			this.getCategory();
		},
		//页面滚动到底部的事件 常用于上拉加载下一页数据
		onReachBottom() {
			this.getGoodslist();
		},
		onShareAppMessage() {
			var that = this;
			var title = that.shareData.title;
			var path = '/pages/index/index?tid='+that.shareData.id;
			var imageUrl = that.shareData.image;
			return {
				title: title,
				path: path,
				imageUrl: imageUrl,
			}
		},
		methods: {
			closeHbBox(){
				this.showHhBox = 2
			},
			showHB(){
				var hongbao_home = this.hongbao_home
				if(hongbao_home){
					uni.navigateTo({
						url:'/pages/redbag/index?hid=' + hongbao_home
					})
				}else{
					uni.showModal({
						title:'温馨提示',
						content:'请先参加拼团夺宝,才可以领取200元红包哦~',
						showCancel:false,
					})
				}
			},
			// 一个倒计时
			setCountDown() {
				var that = this;
				var time = 1000;
				var hongbao_times = that.hongbao_times
				 
				var index_times = uni.getStorageSync('index_times')
				if(index_times){
					var times = parseInt(index_times);
				}else{ 
					if(hongbao_times){ 
						var times = hongbao_times;
						uni.setStorageSync('index_times',times)
					}else{
						var index_times = 60 * 60 * 24
						var times = index_times;
						uni.setStorageSync('index_times',times)
					} 
				}  
				 
				
				if (times <= 0) {
					var index_times = 60 * 60 * 24
					times = index_times;
					uni.setStorageSync('index_times',index_times)
				}
				times = times * 1000;
				let formatTime = this.getFormat(times); 
				
				times -= 1000; 
				that.datas_h = `${formatTime.hh}`;
				that.datas_m = `${formatTime.mm}`;
				that.datas_s = `${formatTime.ss}`; 
				times = times / 1000; 
				uni.setStorageSync('index_times',times)   
				if (that.countDowns == 2 ||  typeof(that.countDowns) == "undefined") {
					setTimeout(this.setCountDown, time);
				} 
			},
			authLogin(res){ 
				var that = this 
				if (res.detail.userInfo) {
					that.disabled = true
					this.userInfo = res.detail.userInfo
					uni.setStorageSync('userinfo', res.detail.userInfo);
					this.upUserInfo(res.detail);
					that.giveHB();
				}
			},
			giveHB(){
				var that = this;
				this.$http.post("user/giveHB").then((res) => {
					//输出请求数据 
					if(res.code == 1){
						that.showHhBox = 2;
						uni.showToast({
							title:'红包领取成功'
						})
					} 
				}).catch(err => {
					console.log('info,错误请求返回=', err)
				})
			},
			getisHB() {
				var that = this;
				this.$http.post("user/isHB",'', {
					'showLoading': false,
				}).then((res) => {
					//输出请求数据 
					if(res.code == 1){
						if(res.data.is_hb == 'no'){
							that.showHhBox = 1;
							that.hbimg = res.data.hbimg;
							that.hbbutton = res.data.hbbutton;
						} 
						that.hongbao_home = res.data.hongbao_home
						that.hongbao_times = res.data.hongbao_times
						that.setCountDown()
					} 
				}).catch(err => {
					console.log('info,错误请求返回=', err);
				})
			},
			getCategory() {
				var that = this;
				this.$http.post("goods/category",'', {
					'showLoading': false,
				}).then((res) => {
					//输出请求数据 
					that.rule_video = res.data.rule_video;
					that.shareData = res.data.share;
					var all = {
						id: null,
						name: '全部'
					};
					res.data.list.unshift(all);
					that.category_list = res.data.list;
					that.catId = res.data.list[0].id;
					that.getGoodslist();
				}).catch(err => {
					console.log('info,错误请求返回=', err)
				})
			},
			//自定义方法
			// 获取商品列表
			getGoodslist() {
				var that = this;
				that.showLoading = 1;
				this.$http.post("goods/index", {
					pages: that.pages,
					cid: that.catId
				}, {
					'showLoading': false
				}).then((res) => {
					//输出请求数据 
					if (that.pages == 0 && (res.data == '' || res.data == null)) {
						that.noRecord = 1;
						return;
					}
					if (res.data == '' || res.data == null) {
						that.noData = 1;
						that.showLoading = 2;
						return;
					}
					that.goodsLists = that.goodsLists.concat(res.data);
					that.pages += 1;
					that.showLoading = 2;
					if (res.data.length < 10) {
						that.noData = 1;
					}

				}).catch(err => {
					console.log('info,错误请求返回=', err)
				})
			},
			// 获取视频说明地址
			getShuomingVideo() {
				var that = this;
				console.log('获取视频说明地址')
				if (that.videoPath != '') {
					that.videoStatus = 1;
					return;
				}
				this.$http.post('getVideoPath', {
					id: that.rule_video
				}).then((res) => {
					console.log('视频地址', res);
					that.videoPath = res.data;
				})
				that.videoStatus = 1;
			},
			// 获取搜索关键字
			getinputval(e) {
				console.log('搜索关键字=', e.detail.value)
				this.keyword = e.detail.value;
			},
			searchGoods() {
				var that = this;
				if (that.keyword == '') {
					console.log('无需搜索')
					return;
				}
				that.goodsLists = [];
				that.pages = 0;
				that.showLoading = 1;
				this.$http.post('search', '', {
					'showLoading': false,
					headers: {
						'content-type': 'application/x-www-form-urlencoded',
						'keyword': encodeURI(that.keyword),
					}
				}).then((res) => {

					console.log('打印搜索结果', res);
					that.showLoading = 2;
					if (res.data == '' || res.data == null) {
						that.noRecord = 1;
						return;
					}
					that.goodsLists = res.data;
					that.noData = 1;

				})
			},
			// 切换分类
			changegoodstype(e) {
				var that = this;
				var index = e.currentTarget.dataset.index;
				var catId = e.currentTarget.dataset.id;

				if ((that.catIndex == index) && that.pages != 0) {
					return false;
				}
				if (that.keyword != '') {
					that.keyword = '';
				}

				that.goodsLists = [];
				that.pages = 0;
				that.catIndex = index;
				that.catId = catId;
				that.noData = 2;
				that.noRecord = 2;
				that.showLoading = 2;

				that.getGoodslist();
			},
			jumpTo(e) {
				var jumptype = e.currentTarget.dataset.jumptype;
				var url = e.currentTarget.dataset.url;
				var closepage = e.currentTarget.dataset.closepage;
				this.jumpFunction(jumptype, url, closepage);
			},
			closeVideo() {
				var that = this;
				if (that.videoStatus == 1) {
					that.videoStatus = 2;
				} else {
					that.videoStatus = 1;
				}
			},
			cshuomingStatus() {
				console.log('切换说明显示状态')
				var that = this;
				if (that.shuomingStatus == 1) {
					that.shuomingStatus = 2;
				} else {
					that.shuomingStatus = 1;
				}
			},


		}
	}
</script>

<style>
	page {
		background: #FFFFFF;
		font-family: DIN-Medium, DIN;
	}
	.hb_daojishi{
		width:268upx;
		height:98upx;
		background:rgba(253,84,80,1);
		box-shadow:0upx 4upx 18upx 0upx rgba(237,0,43,0.5);
		border-radius:0upx 100upx 100upx 0upx;
		position: fixed;
		bottom: 100upx;
	}
	.hb_daojishi image{
		width: 209upx;
		height: 40upx;
		position: absolute;
		left: 10%;
		top: 10upx;
	}
	.hb_daojishi_body{
		width: 180upx;
		height: 32upx; 
		position: absolute;
		left: 30upx;
		bottom: 15upx;
		color: #fff;
	}
	.hb_daojishi_body view{
		width:41upx;
		height:29upx;
		background:rgba(255,255,255,1);
		border-radius:4upx;
		display: inline-block;
		text-align: center;
		line-height: 29upx;
		color: #FD5450;
		font-family:DIN-Medium;
	}
	.showHhBox{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10;
		background: rgba(0,0,0,0.7);
	}
	.hbbody{
		width: 600upx;
		height: 750upx; 
		position: fixed;
		top: 25%;
		left: 75upx;
		z-index: 11;
	}
	.hbbody .hbimg{
		width: 100%;
	}
	.hbbody .hbbutton{
		width: 442upx;
		height: 88upx;
		position: absolute;
		bottom: 61upx;
		left: 79upx;
		background: none;
		padding: 0;
		margin: 0;
	}
	.hbbody icon{
		position: absolute;
		right: -40upx;
		top: -80upx;
	}
	.hbbutton::after {
		border: 0;
		border-radius: 0;
	}
	.hbbutton image{
		width: 100%;
		height: 100%;
	}
	
	.topbox {
		background: #FD5450;
		border-radius: 0upx 0upx 32upx 32upx;
		text-align: center;
		padding-bottom: 124upx;
	}

	.topbox .shuomingBtn {
		width: 690upx;
		height: 100upx;
		position: absolute;
		z-index: 8;
		margin-left: 30upx;
		margin-top: 186upx;
	}

	.topbox .videoBtn {
		width: 104upx;
		height: 102upx;
		position: absolute;
		right: 28upx;
		margin-top: 182upx;
		z-index: 9;
	}

	.topbox .shuomingtitle {
		width: 692upx;
		height: 276upx;
		margin-top: 10upx;
	}

	.topbox .searchicon {
		position: absolute;
		width: 27upx;
		height: 29upx;
		right: 80upx;
		margin-top: 30upx;
	}

	.topbox .searchinput {
		width: 690upx;
		height: 88upx;
		border-radius: 44px;
		opacity: 0.90;
		background: #FFFFFF;
		text-align: left;
		margin-left: 30upx;
		padding: 0 100upx 0 40upx;
		margin-top: 40upx;
	}

	.topbox .searchinput input {
		height: 88upx;
	}

	.topbox .tips {
		width: 680upx;
		margin-left: 35upx;
		height: 50upx;
		line-height: 50upx;
		position: absolute;
		margin-top: 40upx;
	}

	.topbox .tips view {
		display: inline-block;
		font-size: 24upx;
		font-family: PingFangSC-Medium, PingFangSC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		width: 100%;
		position: absolute;
		left: 0;
	}

	.topbox .tips>view:first-child {
		text-align: left;
		margin-left: 20upx;
	}

	.topbox .tips>view:nth-child(3) {
		text-align: right;
		right: 0;
	}


	/* 分类样式 */
	.cat_goodstypes {
		padding-top: 0upx;
		padding-bottom: 0upx;
		width: 750upx;
		white-space: nowrap;
		overflow: auto;
		height: 88upx;
		z-index: 990;
		box-sizing: border-box;
		line-height: 88upx;
		border-bottom: 1upx solid rgba(245, 245, 245, 1);
		margin-top: 10upx;
	}

	.cat_goodstypes .cat_active {
		font-size: 36upx;
		font-weight: 500;
		color: rgba(253, 84, 80, 1);
		text-align: center;
	}

	.cat_goodstype {
		padding: 0 21upx;
		display: inline-block;
		line-height: 45upx;
		text-align: center;
		font-size: 30upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(253, 84, 80, 1);
	}

	.cat_goodstype .cat_red {
		width: 24upx;
		height: 6upx;
		background: #FD5450;
		border-radius: 3px;
		margin: auto;
	}

	/* 分类样式 */

	/* 玩法说明引导 */
	.shuomingpic {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 10;
		bottom: 0;
		height: 100%;
		background: #FD5450;
	}

	.shuomingpic image {
		margin-top: ;
		position: absolute;
		width: 94%;
		margin-left: 3%;
	}

	.shuomingpic .closeShuoming {
		position: absolute;
		height: 100upx;
		width: 80%;
		margin-left: 10%;
		z-index: 11;
		margin-top: 1240upx;
	}

	/* 玩法说明引导 */
	
	/* 底部引导图 */
	.bottombanner{
		width: 100%;
		height: 76upx;
		position: fixed !important;
		bottom: 0upx;
	}
	.bottombanner image{
		width: 100%;
		height: 100%;
		display: block;
	}
	/* 底部引导图 */
</style>
