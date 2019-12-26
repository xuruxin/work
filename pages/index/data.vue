<template>
	<view class="content">
		<view style="height: 10upx;"></view>
		<!-- <view class=""> -->
		<view v-if="a==1" class="searchs">
			<input class="uni-input" focus style="text-align: center;" @blur="showHide()" />
		</view>
		<view v-else class="search-bg" v-on:click="showbg()">
			<view class="" style="float: left;height: 36upx;line-height: 36upx;margin-left: 199upx;margin-top: 22upx;">
				<image src="../../static/data/search.png" mode="" class="search-bg-image"></image>
			</view>
			<view style="float: left;height: 38upx;line-height: 38upx;margin-left: 2upx;margin-top: 18upx;">
				<text class="search-bg-title">输入姓名/业务/需求</text>
			</view>
		</view>
		<!-- </view> -->

		<view class="members">
			<view class="members-list" :class="{ select: true, active: item.id === sel }" v-for="(item, index) in tabs" :key="index"
			 @click="select(item)">
				<view class="">
					<text>{{ item.label }}</text>
				</view>
				<view class="selectitem">
				</view>
			</view>
			<!-- <text class="members-list" :class="{ select: true, active: item.id === sel }" v-for="(item,index) in tabs" :key="index"
3 @click="select(item)">{{ item.label }}</text> -->
		</view>

		<view class="users">
			<view class="userss">
				<view class="users-list">
					<view class="users-lists-image">
						<image src="../../static/index/stara.png" class="users-list-img"></image>
					</view>
					<view class="users-list-title">
						刘亦菲
					</view>
					<view class="starbox">
						<image v-for="(item,index) in 3" :key="index" class="star" src="../../static/index/stara.png" mode="widthFix"></image>
						<image v-for="(item,index) in 2" :key="index" class="star" src="../../static/index/starb.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="users-list">
					<view class="users-list-right">
						<view style="margin-top: 37upx;">
							<view class="pricesname">
								成员(人):
							</view>
							<view class="prices">
								48
							</view>
						</view>
						<view style="clear: both;"></view>
						<view style="margin-top: 14upx;">
							<view class="pricesname">
								收益(元):
							</view>
							<view class="prices">
								4280.20
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="userinfo">
				<view class="userinfo-list">
					<view class="userinfo-list-left">
						微信号:13965478956
					</view>
					<view class="userinfo-list-copy">
						复制
					</view>
					<view class="lines"></view>
				</view>
				<view class="userinfo-list">
					<view class="userinfo-list-left1">
						抖音:15698256789
					</view>
					<view class="userinfo-list-copy2">
						复制
					</view>
				</view>
			</view>
		</view>

		<view class="users">
			<view class="userss">
				<view class="users-list">
					<view class="users-lists-image">
						<image src="../../static/index/stara.png" class="users-list-img"></image>
					</view>
					<view class="users-list-title">
						开始看看顶
					</view>
					<view class="starbox">
						<image v-for="(item,index) in 3" :key="index" class="star" src="../../static/index/stara.png" mode="widthFix"></image>
						<image v-for="(item,index) in 2" :key="index" class="star" src="../../static/index/starb.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="users-list">
					<view class="users-list-right">
						<view style="margin-top: 37upx;">
							<view class="pricesname">
								成员(人):
							</view>
							<view class="prices">
								48
							</view>
						</view>
						<view style="clear: both;"></view>
						<view style="margin-top: 14upx;">
							<view class="pricesname">
								收益(元):
							</view>
							<view class="prices">
								4280.20
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="userinfo">
				<view class="userinfo-list">
					<view class="userinfo-list-left">
						微信号:13965478956
					</view>
					<view class="userinfo-list-copy">
						复制
					</view>
					<view class="lines"></view>
				</view>
				<view class="userinfo-list">
					<view class="userinfo-list-left1">
						抖音:15698256789
					</view>
					<view class="userinfo-list-copy2">
						复制
					</view>
				</view>
			</view>
		</view>

		<view class="bottom">
			<view class="bottom-title">
				<image src="../../static/index/createman.png" style="width: 252upx;height: 39upx;"></image>
			</view>
			<view class="bottom-content">
				<text class="bottom-content-text">合作共创辉煌 · 财富生产乐趣</text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				a: 2,
				sel: 1,
				tabs: [{
						label: '全体成员',
						id: 1
					},
					{
						label: '一级成员',
						id: 2
					},
					{
						label: '二级成员',
						id: 3
					},
				]
			}
		},
		methods: {
			'showbg': function() {
				if (this.a == 1) {
					this.a = 2;
				} else {
					this.a = 1;
				}
			},
			'showHide': function() {
				if (this.a == 1) {
					this.a = 2;
				} else {
					this.a = 1;
				}
			},
			'select': function(item) {
				this.sel = item.id;
			}
		}
	}
</script>

<style>
	page {
		background: #15172E;
	}

	.content {
		background: #15172E;
	}

	.searchs {
		height: 80upx;
		margin-left: 30upx;
		margin-right: 30upx;
		margin-top: 40upx;
	}

	.uni-input {
		height: 80upx;
		background: rgba(31, 38, 53, 1);
		border-radius: 4px;
		color: #fff;
	}

	.search-bg {
		height: 80upx;
		margin-left: 30upx;
		margin-right: 30upx;
		margin-top: 41upx;
		background: rgba(31, 38, 53, 1);
	}

	.search-bg-image {
		width: 28upx;
		height: 28upx;
	}

	.search-bg-title {
		color: #5B6B90;
		font-size: 28upx;
	}

	.members {
		height: 104upx;
		margin-top: 10upx;
		line-height: 104upx;
		display: flex;
		border-bottom: 1upx solid #181C30;
	}

	.members-list {
		flex: 1;
		text-align: center;
		color: #99999D;
		font-size: 30upx;
	}

	.select.active {
		color: #FFFFFF;
	}

	.select.active .selectitem {
		width: 32upx;
		border-top: 6upx solid #FFFFFF;
		margin-top: -28upx;
		margin-left: 109upx;
		border-radius: 1upx;
	}

	.users {
		height: 236upx;
		border-bottom: 1upx solid #181C30;
	}

	.userss {
		height: 148upx;
		display: flex;
	}

	.users-list {
		flex: 1;
	}

	.users-list-img {
		width: 80upx;
		height: 80upx;
		border-radius: 40upx;
	}

	.users-lists-image {
		float: left;
		height: 80upx;
		line-height: 80upx;
		margin-left: 30upx;
		margin-top: 45upx;
	}

	.users-list-title {
		float: left;
		line-height: 80upx;
		margin-left: 20upx;
		margin-top: 45upx;
		margin-top: 25upx;
		width: 230upx;
		color: #FFFFFF;
		font-size: 38upx;
		white-space: nowrap;
		/*设置不换行*/
		overflow: hidden;
		/*设置隐藏*/
		text-overflow: ellipsis;
		/*设置隐藏部分为省略号*/
	}
	.starbox {
		margin-left: 125upx;
	}

	.star {
		width: 30upx;
		height: 30upx;
	}

	.users-list-right {
		height: 74upx;
		margin-left: 50upx;
	}

	.userinfo {
		height: 88upx;
		display: flex;
	}

	.userinfo-list {
		flex: 1;
	}

	.userinfo-list-left {
		height: 88upx;
		width: 235upx;
		line-height: 88upx;
		float: left;
		color: #607096;
		font-size: 24upx;
		margin-left: 30upx;
		white-space: nowrap;
		/*设置不换行*/
		overflow: hidden;
		/*设置隐藏*/
		text-overflow: ellipsis;
		/*设置隐藏部分为省略号*/
	}

	.userinfo-list-left1 {
		height: 88upx;
		width: 240upx;
		line-height: 88upx;
		float: left;
		color: #607096;
		font-size: 24upx;
		margin-left: 23upx;
		white-space: nowrap;
		/*设置不换行*/
		overflow: hidden;
		/*设置隐藏*/
		text-overflow: ellipsis;
		/*设置隐藏部分为省略号*/
	}

	.userinfo-list-title {
		color: #607096;
		font-size: 24upx;
		margin-left: 30upx;
	}

	.userinfo-list-copy {
		width: 86upx;
		height: 44upx;
		line-height: 44upx;
		float: left;
		font-size: 22upx;
		text-align: center;
		background: linear-gradient(270deg, rgba(255, 229, 171, 1) 0%, rgba(240, 202, 140, 1) 100%);
		border-radius: 4upx;
		margin-top: 20upx;
		margin-left: 10upx;
		color: #7E5314;
	}

	.userinfo-list-copy2 {
		width: 86upx;
		height: 44upx;
		line-height: 44upx;
		float: left;
		font-size: 22upx;
		text-align: center;
		border: 2upx solid #FFFFFF;
		color: #FFFFFF;
		border-radius: 4upx;
		margin-top: 20upx;
	}

	.lines {
		height: 60upx;
		border-right: 1px solid #232837;
		margin-left: 35upx;
		margin-top: 10upx;
	}

	.bottom {
		margin-top: 250upx;
		min-height: 300upx;
	}

	.bottom-button {
		width: 260upx;
		height: 80upx;
		line-height: 80upx;
		margin-left: 245upx;
		margin-right: 245upx;
		background: rgba(31, 38, 53, 1);
		border-radius: 40upx;
	}

	.bottom-button-image {
		width: 38upx;
		height: 38upx;

	}

	.bottom-button-title {
		color: #F9F9F9;
		font-size: 28upx;
	}

	.bottom-title {
		margin-top: 50upx;
		text-align: center;
	}

	.bottom-content {
		margin-top: 20upx;
		text-align: center;
	}

	.bottom-content-text {
		font-size: 30upx;
		color: #5C636D;
	}

	.bottom-title-text {
		font-size: 24upx;
		color: #6B737A;
	}

	.prices {
		color: #FFFFFF;
		font-size: 34upx;
		margin-left: 20upx;
		text-align: right;
		float: left;
		text-align: right;
		width: 160upx;
		height: 41upx;
		line-height: 41upx;
	}

	.pricesname {
		color: #607096;
		font-size: 24upx;
		margin-left: 30upx;
		float: left;
		height: 41upx;
		line-height: 41upx;
	}
</style>
