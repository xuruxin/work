<template>
	<view>
		<view class="kong"></view>
		<!-- <view class="userbox">
			<image src="../../static/index/lhcsr.png" mode="widthFix" class="lhcsr_icon"></image>
			<view class="boxbox">
				<view class="box">
				
				<view class="nickname">
					沉敛丶
				</view>
				<view class="number">
					手机:12345678900
				</view>
				<view class="starbox">
					<image v-for="(item,index) in 3" :key="index" class="star" src="../../static/index/stara.png" mode="widthFix"></image>
					<image v-for="(item,index) in 2" :key="index" class="star" src="../../static/index/starb.png" mode="widthFix"></image>
				</view>
			</view>
			<!-- 头像 -->
			<!-- <image src="/static/index/stara.png" class="avatar" mode=""></image></view>
			
		</view> --> -->
<!-- -------------------------------------------------------------------------------- -->
		<view class="boxtop">
			<view class="boxleft">
				<image src="../../static/index/starb.png" class="nameImg"></image>
				<view class="box_con">
					<view class="name">
					南歌哦！
				</view>
				<view class="phone">
					<text class="ph_text1">手机:</text>
					<text class="ph_text2">18333015185</text>
				</view>
				<view class="star"></view>
				</view>
				
			</view>
			<image src="../../static/index/lhcsr.png" class="lianhe"></image>
		</view>
<!-- -------------------------------------------------------------------------------- -->
		<view class="tab_title">
			今日总收益
		</view>
		<view class="moneybox">
			<text>￥</text>680,880,30
		</view>

		<view class="tab_title2">
			我的总收益
		</view>
		<view class="little_quxian">
			<view class="box">
				<view class="txt1">
					<view class="dian blue"></view>
					<view class="txt">
						收益增长率
					</view>
				</view>
				<image class="quxian" src="../../static/index/quxian.png" mode="widthFix"></image>
				<view class="number">
					12.8%<image v-if="1==2" src="../../static/index/down.png" mode="widthFix"></image>
					<image src="../../static/index/up.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="box">
				<view class="txt1">
					<view class="dian yellow"></view>
					<view class="txt">
						收益增长率
					</view>
				</view>
				<image class="quxian" src="../../static/index/quxian.png" mode="widthFix"></image>
				<view class="number">
					12.8%<image v-if="1==2" src="../../static/index/down.png" mode="widthFix"></image>
					<image src="../../static/index/up.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="box">
				<view class="txt1">
					<view class="dian purple"></view>
					<view class="txt">
						收益增长率
					</view>
				</view>
				<image class="quxian" src="/static/index/quxian.png" mode="widthFix"></image>
				<view class="number">
					12.8%<image v-if="1==2" src="/static/index/down.png" mode="widthFix"></image>
					<image src="/static/index/up.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="box">
				<view class="txt1">
					<view class="dian red"></view>
					<view class="txt">
						收益增长率
					</view>
				</view>
				<image class="quxian" src="/static/index/quxian.png" mode="widthFix"></image>
				<view class="number">
					12.8%<image v-if="1==2" src="/static/index/down.png" mode="widthFix"></image>
					<image src="/static/index/up.png" mode="widthFix"></image>
				</view>
			</view>
		</view>


		<view class="tab_title">
			收益数据
		</view>
		<view class="shujubox">
			<view class="tab">
				<view class="number">
					123456789
				</view>
				<view class="txt">
					总收益(元)
				</view>
			</view>
			<view class="tab">
				<view class="number">
					123456789
				</view>
				<view class="txt">
					昨日收益(元)
				</view>
			</view>
		</view>

		<view class="shujubox2">
			<view class="tab">
				<view class="number">
					123456789
				</view>
				<view class="txt">
					总收益(元)
				</view>
			</view>
			<view class="tab">
				<view class="number">
					123456789
				</view>
				<view class="txt">
					昨日收益(元)
				</view>
			</view>
		</view>


		<view class="tab_title">
			团队概况
		</view>
		<button class="xiangxi">
			详细数据
		</button>
		<view class="xiangxiImg">
			<image src="../../static/index/down.png"></image>
		</view>

		<view class="teambox">
			<view class="tab">
				<view class="number">
					123456
				</view>
				<view class="txt">
					团队人数(人)
				</view>
			</view>
			<view class="tab">
				<view class="number">
					12345
				</view>
				<view class="txt">
					一级人数(人)
				</view>
			</view>
			<view class="tab">
				<view class="number">
					123456
				</view>
				<view class="txt">
					二级人数(人)
				</view>
			</view>
		</view>


		<view class="kefubtn">
			<image src="../../static/index/kefu.png" mode="widthFix"></image>
			<button>
				咨询客服
			</button>
		</view>

		<image src="../../static/index/doutui.png" mode="widthFix" class="lianhechuangshiren"></image>
		<view class="tips">
			合作共创辉煌 · 财富生产乐趣
		</view>

		<view class="" style="height: 100upx;"></view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				star_num: 3,
			}
		},
		//监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参）
		onLoad(options) {
			var that = this;

		},
		//监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面
		onShow() {

		},
		//监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
		onReady() {},
		//监听页面隐藏
		onHide() {

		},
		//监听页面卸载
		onUnload() {

		},
		//监听用户下拉动作，一般用于下拉刷新
		onPullDownRefresh() {

		},
		//页面滚动到底部的事件 常用于上拉加载下一页数据
		onReachBottom() {

		},
		onShareAppMessage() {
			var that = this;

		},
		methods: {


		}
	}
</script>

<style>
	page {
		background: #15172E;
	}
	/* .boxbox{
		margin-top: 88upx;
	}
	.qiun-charts {
		width: 690upx;
		height: 596upx;
		margin-left: 30upx;
		background-color: #1F2635;
		margin-top: 40upx;
		margin-bottom: 10upx;
	}

	.charts {
		width: 690upx;
		height: 596upx;
		background-color: #1F2635;
	}
	.userbox .lhcsr_icon {
		width: 298upx;
		height: 295upx;
		position: absolute;
		top: 0upx;
		right: 0upx;
	}
	.userbox {
		width: 100%;
		overflow: hidden;
	}

	.userbox .star {
		width: 30upx;
		height: 30upx;
	}

	.userbox .avatar {
		width: 128upx;
		height: 128upx;
		border-radius: 50%;
		border: 3px solid #FFFFFF;
		margin-left: 30upx;
	}

	.userbox .box {
		position: absolute;
		margin-left: 180upx;
	}

	.userbox .nickname {
		font-family: PingFangSC-Semibold;
		font-size: 50upx;
		color: #FFFFFF;
		line-height: 52upx;
		margin-top: 4upx;
		width: 350upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.box .number {
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(250, 251, 251, 1);
		line-height: 33upx;
		margin-top: 8upx;
	}

	.userbox .starbox {
		margin-top: 6upx;
	}
 */
	/* .kong{
		width: 200upx;
		height: 200upx;
	} */
	.boxtop{
		height: 250upx;
		position: relative;
	}
	.boxleft{
		position: absolute;
		top: 92upx;
	}
	.nameImg{
		width: 128upx;
		height: 128upx;
		margin-left: 30upx;
		display: block;
		border-radius: 50%;
	}
	.lianhe{
		width: 295upx;
		height: 295upx;
		position: absolute;
		right: 0;
		top: 0;
	}
	.box_con{
		margin-left: 187upx;
		position: absolute;
		top: 0;
		left: 0upx;
	}
	.name{
		width:208upx;
		height:52upx;
		font-size:52upx;
		font-family:PingFangSC-Semibold,PingFang SC;
		font-weight:600;
		color:rgba(255,255,255,1);
		line-height:52upx;
		white-space: nowrap;
		overflow: hidden;
		/*设置隐藏*/
		text-overflow: ellipsis;
		/*设置隐藏部分为省略号*/
	}
	.phone{
		width: 400upx;
		margin-top: 8upx;
	}
	.ph_text1{
		font-size:24upx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(250,251,251,1);
		line-height:33upx;
	}
	.ph_text2{
		font-size:28upx;
		font-family:DIN-Medium,DIN;
		font-weight:500;
		color:rgba(250,251,251,1);
		line-height:28upx;
	}
	.star{
		width: 180upx;
		height: 32upx;
		margin-top: 2upx;
		background-color: #1CBBB4;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	.tab_title {
		font-size: 48upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 48upx;
		margin-top: 80upx;
		margin-left: 40upx;
	}

	.tab_title2 {
		font-size: 48upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 48upx;
		margin-top: 68upx;
		margin-left: 40upx;
	}

	.shujubox {
		width: 690upx;
		margin-left: 30upx;
		height: 222upx;
		background: #1F2635;
		margin-top: 40upx;
	}

	.shujubox2 {
		width: 690upx;
		margin-left: 30upx;
		height: 222upx;
		background: #1F2635;
		margin-top: 20upx;
	}

	.shujubox .tab {
		width: 50%;
		color: #FFFFFF;
		display: inline-block;
		text-align: center;
	}

	.shujubox .tab .number {
		height: 50upx;
		font-size: 48upx;
		font-family: DIN-Medium, DIN;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 50upx;
		margin-top: 60upx;
	}

	.shujubox .tab .txt {
		height: 28upx;
		font-size: 28upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(139, 139, 158, 1);
		line-height: 28upx;
		margin-top: 20upx;
	}

	.shujubox2 .tab {
		width: 50%;
		color: #FFFFFF;
		display: inline-block;
		text-align: center;
	}

	.shujubox2 .tab .number {
		height: 50upx;
		font-size: 48upx;
		font-family: DIN-Medium, DIN;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 50upx;
		margin-top: 60upx;
	}

	.shujubox2 .tab .txt {
		height: 28upx;
		font-size: 28upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(139, 139, 158, 1);
		line-height: 28upx;
		margin-top: 20upx;
	}


	.teambox {
		width: 690upx;
		margin-left: 30upx;
		height: 222upx;
		background: #1F2635;
		margin-top: 40upx;
	}

	.teambox .tab {
		width: 33.33%;
		color: #FFFFFF;
		display: inline-block;
		text-align: center;
	}

	.teambox .tab .number {
		height: 50upx;
		font-size: 48upx;
		font-family: DIN-Medium, DIN;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 50upx;
		margin-top: 60upx;
	}

	.teambox .tab .txt {
		height: 28upx;
		font-size: 28upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(139, 139, 158, 1);
		line-height: 28upx;
		margin-top: 20upx;
	}

	.otherbox {
		width: 690upx;
		margin-left: 30upx;
		background: #1F2635;
		margin-top: 40upx;
	}

	.otherbox .list {
		width: 630upx;
		border-bottom: 1px dashed #46494C;
		height: 108upx;
		line-height: 108upx;
		margin-left: 30upx;
	}

	.otherbox .list .txt {
		position: absolute;
		font-size: 30upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(177, 185, 193, 1);
		margin-left: 78upx;
	}

	.otherbox .rightShap {
		width: 16upx;
		height: 28upx;
		position: absolute;
		right: 60upx;
		margin-top: 40upx;
	}

	.otherbox .icons {
		width: 58upx;
		height: 58upx;
		margin-top: 25upx;
	}

	.nounderline {
		border-bottom: none !important;
	}

	.kefubtn {
		width: 260upx;
		height: 80upx;
		background: rgba(31, 38, 53, 1);
		border-radius: 40upx;
		line-height: 80upx;
		text-align: center;
		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(249, 249, 249, 1);
		display: flex;
		flex-direction: row;
		margin-top: 120upx;
		margin-left: 245upx;
	}

	.kefubtn button {
		background: rgba(0, 0, 0, 0);
		line-height: 80upx;
		text-align: left;
		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(249, 249, 249, 1);
		display: flex;
		flex-direction: row;
		margin-left: -25upx;
	}

	.kefubtn image {
		width: 38upx;
		height: 38upx;
		margin-right: 5upx;
		margin-top: 21upx;
		margin-left: 50upx;
	}

	.lianhechuangshiren {
		width: 252upx;
		height: 39upx;
		margin-left: 249upx;
		margin-top: 60upx;
	}

	.tips {
		width: 100%;
		height: 33upx;
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(107, 115, 122, 1);
		line-height: 33upx;
		text-align: center;
		margin-top: 10upx;
	}

	.little_quxian {
		width: 710upx;
		margin-left: 20upx;
		margin-top: 40upx;
	}

	.little_quxian .box {
		width: 335upx;
		height: 278upx;
		background: #1F2635;
		border-radius: 8upx;
		display: inline-block;
		margin: 10upx;
		text-align: center;
	}

	.little_quxian .box .txt1 {
		height: 40upx;
		font-size: 28upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(96, 112, 150, 1);
		line-height: 40upx;
		display: flex;
		flex-direction: row;
		margin-top: 40upx;
	}

	.little_quxian .box .txt1 .dian {
		width: 16upx;
		height: 16upx;
		background: rgba(0, 114, 255, 1);
		border-radius: 50%;
		margin-top: 11upx;
		margin-right: 10upx;
		margin-left: 85upx;
	}

	.little_quxian .box .number {
		width: 100%;
		height: 46upx;
		font-size: 38upx;
		font-family: DIN-Medium, DIN;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 46upx;
	}

	.little_quxian .box .number image {
		width: 15upx;
		height: 21upx;
		margin-left: 10upx;
	}

	.little_quxian .box .blue {
		background: #0072FF !important;
	}

	.little_quxian .box .yellow {
		background: #FFD100 !important;
	}

	.little_quxian .box .purple {
		background: #FF4ECD !important;
	}

	.little_quxian .box .red {
		background: #FF2171 !important;
	}

	.little_quxian .quxian {
		width: 280upx;
	}

	.moneybox {
		font-size: 88upx;
		font-family: DIN-Medium, DIN;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 107upx;
		margin-left: 12upx;
		margin-top: 16upx;
	}

	.moneybox text {
		font-size: 38upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 53upx;
		margin-left: 30upx;
		text-align: left;
	}

	.xiangxi {
		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(139, 139, 158, 1);
		line-height: 28upx;
		float: right;
		margin-right: 38upx;
		margin-top: -30upx;
		background: rgba(0, 0, 0, 0);
	}

	.xiangxiImg {
		width: 28upx;
		height: 28upx;
		float: right;
		margin-right: 30upx;
		margin-top: -30upx;
	}

	.xiangxiImg image {
		width: 100%;
		height: 100%;
	}
</style>
