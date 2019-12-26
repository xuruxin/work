<template>
	<view>
		<view class="header">
			<image src="../../static/header.png"></image>
		</view>

		<view class="wares">
			<image src="../../static/headNext.png"></image>
			<view class="explain">
				<text class="title">{{title}}</text>
				<rich-text :nodes="msg1" class="rich"></rich-text>
			</view>
		</view>
		<view class="pic2">
			<image src="../../static/003.png"></image>
		</view>
		<view class="pic3">
			<image src="../../static/004.png"></image>
		</view>
		<view class="pic4">
			<image src="../../static/005.png"></image>
		</view>
		<!-- 评论 -->
		<view class="discuss">
			<image src="../../static/006.png"></image>
		</view>
		<!-- 有内容加在上面 -->
		<view class="buy">
			<text>{{buytext}}</text>
		</view>
		<view class="last"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '商品说明',
				msg1: '本商品为虚拟物品，下单后发送链接以及激活码给您，您打开对应链接，填写激活码就可以使用各种话术功能来撩妹，本商品针对不同人群不保证一定能约到妹子，但是经大量用户使用后，好多人的身体都吃不消了都，意思您懂得。',
				buytext: '立即购买'
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
		background: rgba(255, 171, 184, 1);
	}

	.header {
		width: 100%;
		height: 1156upx;
	}

	image {
		width: 100%;
		height: 100%;
	}

	.wares {
		width: 100%;
		height: 440upx;
		position: relative;
	}

	.explain {
		width: 630upx;
		height: 360upx;
		background: rgba(255, 75, 102, 1);
		border-radius: 24upx;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 0upx 30upx;
		box-sizing: border-box;
	}

	.title {
		font-size: 38upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 53upx;
		text-align: center;
		display: block;
		margin-top: 34upx;
	}

	.rich {
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		line-height: 33upx;
		margin-top: 33upx;
		display: block;
	}

	.pic2,
	.pic3,
	.pic4 {
		width: 100%;
		height: 1300upx;
	}

	.discuss {
		width: 100%;
		height: 1650upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 60upx;
		overflow: hidden;
	}

	.leaveWord {
		width: 670upx;
		height: 88upx;
		background: rgba(247, 246, 246, 1);
		border-radius: 44upx;
		margin: 56upx auto 40upx;
	}

	.footer {
		width: 670upx;
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		line-height: 33upx;
		margin: 90upx auto 55upx;
	}

	.buy {
		width: 100%;
		height: 98upx;
		background: rgba(255, 75, 102, 1);
		position: fixed;
		bottom: 0;
		line-height: 98upx;
		text-align: center;
	}

	.buy text {
		font-size: 32upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 45upx;
	}

	.last {
		width: 100%;
		height: 98upx;
		background: rgba(255, 75, 102, 1);

	}
</style>
