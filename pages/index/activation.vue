<template>
	<view>
		<view class="logo">
			<image src="../../static/lovehua.png" alt="恋爱话术"></image>
		</view>
		<view class="import">
			<text>
				{{imports}}
			</text>
		</view>
		<view class="input_box">
			<input type="text" placeholder="请输入激活码" placeholder-style="color:white"  class="Input">
		</view>
		<view class="button">
			<text>{{btn}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imports: "请输入激活码激活后使用",
				btn:'立即激活'
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
	}


	.logo {
		width: 100%;
		height: 56upx;
		margin-top: 275upx;
		text-align: center;
	}

	.logo image {
		width: 352upx;
		height: 86upx;
	}

	.import {
		width: 100%;
		height: 33upx;
		font-size: 24upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(249, 249, 249, 1);
		line-height: 33upx;
		letter-spacing: 8upx;
		margin-top: 44upx;
		text-align: center;
	}

	.input_box {
		width: 600upx;
		height: 70upx;
		margin: 160upx auto 0upx;
	}
	.Input {
		width: 600upx;
		height: 70upx;
		color: white;
		border-bottom: 1px solid white;
		font-size:30upx;
		font-family:PingFangSC-Semibold,PingFang SC;
		font-weight:600;
		
	}
	.button{
		width:600upx;
		height:98upx;
		background:rgba(249,249,249,1);
		border-radius:49upx;
		margin: 120upx auto 0;
		text-align: center;
		line-height: 98upx;
		font-size:32upx;
		font-family:PingFangSC-Semibold,PingFang SC;
		font-weight:600;
		color:rgba(255,75,102,1);
	}
</style>
