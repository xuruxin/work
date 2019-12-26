<template>
	<view>
		<view class="title">
			<view class="buy">{{buy}}</view>
			<view class="buyText">{{buyText}} </view>
			<view class="Tel">{{Tel}}</view>
			<view class="Num">
				{{Num}}
				<!-- 复制激活码 -->
				<view class="copy" @click="copyText">{{copy}}</view>
			</view>
		</view>
		<!-- 激活步骤 -->
		<view class="move">{{move}}</view>
		<view class="one">{{one}}</view>
		<view class="oneText">{{oneText}}</view>
		<view class="down">
			<image src="../../static/down.png"></image>
		</view>
		<view class="two">{{two}}</view>
		<view class="twotext">{{twotext}}</view>
		<view class="twoImg">
			<image src="../../static/two.png"></image>
		</view>
		<view class="three"> {{three}}</view>
		<view class="twotext">{{threetext}}</view>
		<view class="threeImg">
			<image src="../../static/three.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				buy: '购买成功',
				buyText: '以下是您的卡号以及激活码，请不要泄露给别人',
				Tel: '激活码',
				Num: '156454884',
				copy: '复制激活码',
				move: '激活步骤',
				one: '第 1 步',
				oneText: '下载或截图后用微信扫一扫',
				two: '第 2 步',
				twotext: '扫码后跳转至恋爱话术激活页面 ',
				three: '第 3 步',
				threetext: '复制上方的激活码粘贴并激活,'
			}
		},
		methods: {
			copyText: function(e) {
				uni.showToast({
					title: '复制成功',
				})
				uni.setClipboardData({
					data:this.Num,
					success: function(res) {
						uni.getClipboardData({
							// 这个api是把拿到的数据放到电脑系统中的
							success: function(res) {
								console.log(res.data) // data
							},
							
						})
					}
				})
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	page {
		background: rgba(255, 75, 102, 1);
		padding: 0 0 181upx 0;
	}

	.title {
		width: 100%;
	}

	.buy {
		text-align: center;
		font-size: 60upx;
		font-family: AlibabaPuHuiTiB;
		color: rgba(254, 238, 210, 1);
		line-height: 82upx;
		margin-top: 59upx;
	}

	.buyText {
		text-align: center;
		font-size: 24upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(249, 249, 249, 1);
		line-height: 33upx;
	}

	.Tel {
		text-align: left;
		font-size: 38upx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: rgba(254, 238, 210, 1);
		line-height: 53upx;
		margin-left: 40upx;
		margin-top: 30upx;
	}

	.Num {
		font-size: 58upx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: rgba(254, 238, 210, 1);
		line-height: 81upx;
		text-align: left;
		margin-left: 40upx;
	}

	.copy {
		width: 200upx;
		height: 68upx;
		background: rgba(249, 249, 249, 1);
		border-radius: 44upx;
		float: right;
		font-size: 28upx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: rgba(255, 75, 102, 1);
		line-height: 68upx;
		text-align: center;
		margin-right: 40upx;
		margin-bottom: 100upx;
	}

	.move {
		text-align: center;
		font-size: 60upx;
		font-family: AlibabaPuHuiTiB;
		color: rgba(254, 238, 210, 1);
		line-height: 82upx;
		margin-top: 100upx;
	}

	.one {
		margin-top: 40upx;
		font-size: 42upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(255, 206, 21, 1);
		line-height: 59upx;
		text-align: center;
	}

	.oneText {
		font-size: 42upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 59upx;
		text-align: center;

	}

	image {
		width: 100%;
		height: 100%;
	}

	.down {
		width: 90%;
		height: 306upx;
		margin-left: 5%;
		margin-top: 30upx;
	}

	.two {
		text-align: center;
		line-height: 59upx;
		color: #FFCE15;
		font-size: 42upx;
		margin-top: 60upx;
	}

	.twotext {
		font-size: 42upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 59upx;
		text-align: center;
	}

	.twoImg {
		width: 670upx;
		height: 622upx;
		text-align: center;
		margin: 30upx auto 0upx;
	}

	.three {
		text-align: center;
		line-height: 59upx;
		color: #FFCE15;
		font-size: 42upx;
		margin-top: 60upx;
	}

	.threeImg {
		width: 670upx;
		height: 1112upx;
		text-align: center;
		margin: 30upx auto 0upx;
	}
</style>
