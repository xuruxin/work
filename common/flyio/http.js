import Fly from './fly'
import util from '@/common/flyio/util.js'
import siteinfo from '@/common/siteinfo';   


var fly = new Fly();
var newfly = new Fly();
fly.config.isNeedLogin = true;
fly.config.showLoading = true;
fly.config.showErrorMsg = true;
var that = this


//配置请求基地址 
fly.config.baseURL = siteinfo.websiteUrl
newfly.config.baseURL = siteinfo.websiteUrl


//添加拦截器
fly.interceptors.request.use((request) => {
	var app = getApp()
	console.log('添加拦截器=', request)
	if (request.showLoading) {
		uni.showLoading({
			title: '加载中...',
			mask: true
		})
	}
	request.timeout = 30000;
	request.headers["Content-Type"] = "application/x-www-form-urlencoded";
	if (request.body) {
		var mergeObject = util.mergeObject(request.body, util.secretdate());
		request.body = mergeObject
	} else {
		request.body = util.secretdate()
	}
	var sign = util.getSign(request.body);
	request.body['sign'] = sign;
	if (uni.getStorageSync('token')) { //检查本地缓存是否有token存在没有则重新获取
		request.headers["token"] = uni.getStorageSync('token')
		return request;
	} else {
		if (request.isNeedLogin) {
			fly.lock(); //锁住请求
			console.log('锁住请求,先登录账号1111111=')

			return util.login('', '401').then(function(response) { //重新获取token
				request.headers["token"] = uni.getStorageSync('token')
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
				fly.unlock(); //解锁请求
				return request; //继续之前的请求
			})
		} else {
			//console.log('无需token，请求接口')
		}
	}
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
	function(response) {
		//只将请求结果的data字段返回
		console.log('响应拦截器=success', response); 
		uni.hideLoading()
		uni.hideNavigationBarLoading() //完成停止加载
		uni.stopPullDownRefresh() //停止下拉刷新
		if (response.data.code == 0 &&  response.request.showErrorMsg ) {
			uni.showModal({
				title: '温馨提示',
				content: response.data.msg,
				showCancel: false,
				success(res) {
					if (parseInt(getCurrentPages().length) > 1) {
						uni.navigateBack({
							delta: 1
						})
					} else {
						uni.switchTab({
							url: '/pages/index/index',
						})
					}
				}
			})
		}
		return response.data;
	},
	function(err) {
		//发生网络错误后会走到这里
		//return Promise.resolve("ssss")
		console.log('网络错误=', err);
		if (err.status == 401) {
			fly.lock(); //锁住请求 
			console.log('请求的Token过期，锁住请求,重新登录')
			return util.login('', '401').then(function(response22) {
				//console.log('Token过期，登录成功获取的Token=', uni.getStorageSync('token'))
				err.request.headers["token"] = uni.getStorageSync('token')
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
				fly.unlock(); //解锁请求 
				return fly.request(err.request);
			})
		}
		return err;
	}
)

//添加拦截器
newfly.interceptors.request.use((request) => {
	var app = getApp()
	request.timeout = 30000;
	request.headers["Content-Type"] = "application/x-www-form-urlencoded";

	if (request.body) {
		var mergeObject = util.mergeObject(request.body, util.secretdate());
		request.body = mergeObject
	}
	var sign = util.getSign(request.body);
	request.body['sign'] = sign;
	return request;
})


//添加响应拦截器，响应拦截器会在then/catch处理之前执行 
newfly.interceptors.response.use(
	(response) => {
		//只将请求结果的data字段返回
		//console.log('重新登录响应success',response) 
		uni.hideLoading()
		return response
	},
	(err) => {
		//发生网络错误后会走到这里 
		//console.log('重新登录响应error',err)
		uni.hideLoading()
		return err;
	}
)

module.exports = {
	fly: fly,
	newfly: newfly
}
