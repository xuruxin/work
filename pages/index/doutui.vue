<template>
	<view>
		<!-- 未开通-------------------------------- -->
		<view class="topbox">
			<image src="../../static/doutui/topbox.png"></image>
			<view class="top_content">
				<view class="today">
					今日平台发放佣金
				</view>
				<view class="money">
					<text>{{money}}</text>
					<text>元</text>
				</view>
				<button class="money_btn">开通权限</button>
				<view class="tuijianren">
					<text>推荐人：</text>
					<image src="../../static/doutui/team.png"></image>
					<text class="tuijian_text3">{{name}}</text>
					<button type="primary" class="call">
						联系他
					</button>
				</view>
			</view>
		</view>
		<!-- ----------已开通 ----------------------
		<view class="topbox_open">
			<image src="../../static/doutui/topbox.png"></image>

			<view class="topbox_openCon">
				<view class="con">
					<view class="num1">
						<text class="num1_yongjin">{{yongjin}}</text>
						<text class="yongjin">团队拍抖音佣金</text>
					</view>
					<view class="num2">
						<text class="num2_fencheng">{{fencheng}}</text>
						<text class="fencheng">团队招募分成</text>
					</view>
					<view class="num3">
						<text class="num3_renshu">{{renshu}}</text>
						<text class="renshu">团队总人数</text>
					</view>
				</view>

				<view class="tuijianren">
					<text>推荐人：</text>
					<image src="../../static/doutui/team.png"></image>
					<text class="tuijian_text3">{{name}}</text>
					<button type="primary" class="call">
						联系他
					</button>
				</view>

				<view class="invite">
					点击邀请招募代理
				</view>
			</view>
		</view>
		<!--  ------------------------------------------------------>
		<view class="nav">
			<view class="nav_content">
				<image src="../../static/doutui/paihang.png"></image>
				<text>排行榜</text>
			</view>
			<view class="nav_content">
				<image src="../../static/doutui/douyin.png"></image>
				<text>我的抖音号</text>
			</view>
			<view class="nav_content">
				<image src="../../static/doutui/team.png"></image>
				<text>团队管理</text>
			</view>
			<view class="nav_content">
				<image src="../../static/doutui/zhao.png"></image>
				<text>招商素材</text>
			</view>
		</view>
		<!-- 抖推学院 -->
		<view class="dtschool">
			<image src="../../static/doutui/001.png"></image>
			<image src="../../static/doutui/002.png"></image>
		</view>
		<!-- 玩法介绍 -->
		<view class="play">
			<view class="play_title">玩法介绍</view>
			<image src="../../static/doutui/xinshou.png" class="xinshou"></image>
			<image src="../../static/doutui/pyqtui.png" class="pyqtui"></image>
			<image src="../../static/doutui/dytui.png" class="dytui"></image>
		</view>
		<!-- 产品列表-->
		<view class="product">
			<view class="product_title">产品列表</view>
			<!-- 列表 -->
			<view v-for="(item,index) in list" :key="index" class="list">
				<image :src="item.product_head" class="product_head"></image>
				<view class="list_box">
					<view class="list_title">{{item.list_title}}</view>
					<view class="huo">
						<image v-for="(item2,index2) in item.huo" :key="index2" class="star" src="../../static/doutui/huo.png"></image>
					</view>
					<view class="list_logo">
						<image v-for="(item3,index3) in item.Src" :key="index3" :src="item3"></image>
					</view>
				</view>
				<view class="down">
					<image src="../../static/doutui/down.png"></image>
					下载推广码
				</view>
				<!-- 文字框 -->
				<view class="list_text ">
					{{item.list_text}}
					<!-- clos文本区内的可见宽度。
					 rows文本区内的可见行数。-->
					<!-- <textarea name="" id="" cols="30" rows="10">
						
					</textarea> -->

				</view>
				<button class="shuoming">产品说明</button>
				<button class="shouyi">查看收益</button>
			</view>
			<!-- 以上一大内容 -->

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money: '65231.26',
				name: '这是个昵称…',
				yongjin: '451.52',
				fencheng: '435.36',
				renshu: '39',
				list: [{
					product_head: '../../static/doutui/head.png',
					list_title: '人脸识别运势',
					huo: 5,
					Src: [
						"../../static/doutui/xiico.png",
						"../../static/doutui/douico.png",
						"../../static/doutui/touico.png",
					],
					list_text: '您的上停平整柔和，会在30岁前受自身性格或父母'
				}, {
					product_head: '../../static/doutui/head.png',
					list_title: '人脸识别运势',
					huo: 5,
					Src: [
						"../../static/doutui/xiico.png",
						"../../static/doutui/douico.png",
						"../../static/doutui/touico.png",
						"../../static/doutui/huoico.png",
					],
					list_text: '您的上停平整柔和，会在30岁前受自身性格或父母状态影响而心神不定，对未来迷茫，容易变得辛苦效您的上停平整柔和，会在30岁前受自身性格或父母状态影响而心神不定，对未来迷茫，容易变得辛苦效您的上停平整柔和，会在30岁前受自身性格或父母状态影响而心神不定，对未来迷茫，容易变得辛苦效'
				}]
			}
		},
		methods: {}

	}
</script>

<style>
	page {
		padding: 30upx;
		background: rgba(40, 41, 56, 1);
	}

	.topbox {
		width: 690upx;
		height: 353upx;
		position: relative;
	}

	.topbox image {
		width: 100%;
		height: 100%;
	}

	.top_content {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		padding: 91upx 30upx 40upx;
	}

	.today {
		font-size: 28upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(40, 41, 56, 1);
		line-height: 28upx;
	}

	.money {
		width: 330upx;
		height: 87upx;
	}

	.money text:first-child {
		font-size: 72upx;
		font-family: DIN-Medium, DIN;
		font-weight: 500;
		color: rgba(40, 41, 56, 1);
		line-height: 87upx;
		width: 289upx;
		height: 87upx;
		display: block;
		white-space: nowrap;
		overflow: hidden;
	}

	.money text:last-child {
		font-size: 38upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(40, 41, 56, 1);
		line-height: 53upx;
		margin-top: -59upx;
		display: block;
		margin-left: 289upx;
	}

	.money_btn {
		width: 244upx;
		height: 88upx;
		background: linear-gradient(180deg, rgba(255, 252, 225, 1) 0%, rgba(255, 247, 149, 1) 100%);
		box-shadow: 0upx 12upx 20upx 0upx rgba(255, 174, 0, 1);
		border-radius: 4upx;
		position: absolute;
		right: 30upx;
		top: 105upx;
		font-size: 36upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(255, 133, 0, 1);
		line-height: 88upx;
	}
	.tuijianren {
		width: 630upx;
		height: 80upx;
		border-radius: 4upx;
		border: 2upx solid rgba(255, 170, 0, 1);
		margin: 27upx auto;
		position: relative;
	}

	.tuijianren text:first-child {
		font-size: 24upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(40, 41, 56, 1);
		line-height: 80upx;
		margin-left: 21upx;
	}

	.tuijianren image {
		width: 56upx;
		height: 56upx;
		border-radius: 50%;
		line-height: 100upx;
		position: absolute;
		top: 12upx;
		left: 117upx;
	}

	.tuijian_text3 {
		width: 168px;
		height: 34px;
		font-size: 28upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(40, 41, 56, 1);
		line-height: 80upx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-left: 66upx;
	}

	.call {
		height: 44upx;
		background: rgba(255, 134, 0, 1);
		border-radius: 4upx;
		float: right;
		margin-right: 20upx;
		margin-top: 18upx;
		position: relative;
		font-size: 22upx;
		text-align: center;
		line-height: 44upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
	}

	/* ----------------已开通-------------------------- */
	.topbox_open {
		width: 690upx;
		height: 438upx;
		position: relative;
	}

	.topbox_open>image {
		width: 100%;
		height: 100%;
	}

	.topbox_openCon {
		width: 690upx;
		height: 438upx;
		position: absolute;
		left: 0;
		top: 0;
	}

	.con {
		width: 586upx;
		height: 89upx;
		margin: 89upx auto 30upx;
		display: flex;
		justify-content: space-between;
	}

	.con view {
		width: 168upx;
		height: 89upx;
	}

	.num1_yongjin {
		font-size: 42upx;
		font-family: DIN-Medium, DIN;
		font-weight: 500;
		color: rgba(40, 41, 56, 1);
		line-height: 51upx;
		display: block;
		text-align: center;
	}

	.yongjin {
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(42, 48, 60, 1);
		line-height: 33upx;
		display: block;
		text-align: center;
	}

	.num2_fencheng {
		font-size: 42upx;
		font-family: DIN-Medium, DIN;
		font-weight: 500;
		color: rgba(40, 41, 56, 1);
		line-height: 51upx;
		display: block;
		text-align: center;
	}

	.fencheng {
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(42, 48, 60, 1);
		line-height: 33upx;
		display: block;
		text-align: center;
	}

	.num3_renshu {
		font-size: 42upx;
		font-family: DIN-Medium, DIN;
		font-weight: 500;
		color: rgba(40, 41, 56, 1);
		line-height: 51upx;
		display: block;
		text-align: center;
	}

	.renshu {
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(42, 48, 60, 1);
		line-height: 33upx;
		display: block;
		text-align: center;
	}

	.invite {
		width: 630upx;
		height: 80upx;
		background: linear-gradient(180deg, rgba(255, 252, 225, 1) 0%, rgba(255, 247, 149, 1) 100%);
		box-shadow: 0px 12px 20px 0px rgba(255, 174, 0, 1);
		border-radius: 4px;
		margin-left: 30upx;
		font-size: 32upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(255, 133, 0, 1);
		line-height: 80upx;
		text-align: center;
	}

	/* ----------------------------------------------------- */
	.nav {
		width: 735upx;
		height: 156upx;
		margin-top: 10upx;
		margin-left: -22upx;
		display: flex;
		justify-content: space-between;
	}

	.nav_content {
		width: 173upx;
		height: 156upx;
	}

	.nav_content image {
		width: 54upx;
		height: 54upx;
		display: block;
		margin: 30upx auto 18upx;
	}

	.nav_content text {
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		line-height: 24upx;
		text-align: center;
		display: block;
	}

	.dtschool {
		width: 100%;
		height: 190upx;
		margin-top: 20upx;
	}

	.dtschool image {
		width: 335upx;
		height: 190upx;
	}

	.dtschool image:last-child {
		margin-left: 20upx;
	}

	.play {
		margin-top: 80upx;
	}

	.play_title {
		font-size: 48upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 48upx;
	}

	.xinshou {
		width: 180upx;
		height: 215upx;
		margin-top: 40upx;
		float: left;
	}

	.pyqtui {
		width: 495upx;
		height: 100upx;
		margin-left: 15upx;
		float: left;
		margin-top: 40upx;
	}

	.dytui {
		width: 495upx;
		height: 100upx;
		margin-top: 15upx;
		margin-left: 15upx;
	}

	.product {
		margin-top: 80upx;
		position: relative;
	}

	.product_title {
		font-size: 48upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 48upx;
		margin-bottom: 40upx;
	}

	.product_head {
		width: 140upx;
		height: 140upx;
		display: block;
	}

	.list {
		margin-bottom: 80upx;
		position: relative;
		float: left;
	}

	.list_box {
		width: 280upx;
		height: 140upx;
		float: left;
		margin-left: 160upx;
		margin-top: -140upx;
	}

	.list_title {
		font-size: 38upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(249, 249, 249, 1);
		line-height: 38upx;
	}

	.huo {
		margin-top: 19upx;
		height: 30upx;
	}

	.star {
		width: 26upx;
		height: 30upx;
		float: left;
		margin-right: 10upx;
	}

	.list_logo {
		margin-top: 15upx;
		height: 36upx;
	}

	.list_logo image {
		width: 36upx;
		height: 36upx;
		float: left;
		margin-right: 10upx;
	}

	.down {
		width:180upx;
		height: 60upx;
		background: rgba(254, 44, 85, 1);
		border-radius: 4upx;
		position: absolute;
		top: 40upx;
		right: 0;
		font-size: 24upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(249, 249, 249, 1);
		line-height: 30upx;
		text-align: left;
		line-height: 60upx;
	}

	.down image {
		width: 24upx;
		height: 24upx;
		float: left;
		margin: 18upx 6upx 18upx 15upx;
	}

	.list_text {
		width: 690upx;
		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(112, 116, 128, 1);
		line-height: 40upx;
		margin-top: 20upx;
		overflow: auto;
		max-height: 140upx;
	}

	.list_open {
		background: rgba(0, 0, 0, 0);
		color: #FFCE15;
		font-size: 28upx;
		line-height: 40upx;
		float: left;
		margin-top: -300upx;
		margin-left: 570upx;
	}

	.shuoming {
		width: 335upx;
		height: 60upx;
		border-radius: 4upx;
		border: 3upx solid rgba(254, 44, 85, 1);
		font-size: 24upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(254, 44, 85, 1);
		line-height: 60upx;
		margin-top: 30upx;
		margin-right: 20upx;
		float: left;
		background: #282938;
	}

	.shouyi {
		width: 335upx;
		height: 60upx;
		border-radius: 4upx;
		border: 3upx solid rgba(254, 44, 85, 1);
		font-size: 24upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(254, 44, 85, 1);
		line-height: 60upx;
		margin-top: 30upx;
		float: left;
		background: #282938;
	}
</style>
