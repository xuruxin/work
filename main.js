// import '@/common/ald/ald-stat'

import Vue from 'vue'
import App from './App'

import {
	fly,
	newfly
} from '@/common/flyio/http.js' // 全局挂载引入，配置相关在该index.js文件里修改

Vue.prototype.$http = fly
Vue.prototype.$newfly = newfly

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)
 
Vue.prototype.now = Date.now || function() {
	return new Date().getTime();
};
//更新用户头像及其它信息
Vue.prototype.upUserInfo = function(ress, jumpData) {
	var that = this
	that.$http.post('user/profile', '', {
			'showLoading': false,
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
				'iv': ress.iv,
				'encryptedData': ress.encryptedData,
			}
		})
		.then(function(response) {
			if (jumpData) {
				if (typeof(jumpData) == 'number') {
					wx.navigateBack({
						delta: jumpData
					})
				} else {
					wx.switchTab({
						url: jumpData,
					})
				}
			}
		})
		.catch(function(error) {}); 
}

//添加formID
Vue.prototype.addFormID = function(formid) {
	var that = this
	console.log(formid)
	if (formid) {
		if (formid == 'the formId is a mock one') {
			return false;
		}
		if (formid.length <= 0) {
			return false;
		}
		that.$http.post('addformId', {
				formid: formid
			}, {
				'showLoading': false
			})
			.then(function(response) {
				//console.log('添加FormId成功返回数据=', response); 
			})
			.catch(function(error) {});
	}

}
/**
 * 格式化时间
 */
Vue.prototype.getFormat = function(msec) {
	
	let ss = parseInt(msec / 1000);
	let ms = parseInt(msec % 1000);
	let mm = 0;
	let hh = 0;
	if (ss > 60) {
		mm = parseInt(ss / 60);
		ss = parseInt(ss % 60);
		if (mm > 60) {
			hh = parseInt(mm / 60);
			mm = parseInt(mm % 60);
		}
	}
	ss = ss > 9 ? ss : `0${ss}`;
	mm = mm > 9 ? mm : `0${mm}`;
	hh = hh > 9 ? hh : `0${hh}`;
	return { ms, ss, mm, hh };
	    
};
/**
 * [沉敛丶  跳转方法]
 * [时间：2019年09月26日11:47:49]
 * @param {int} 	[jumpType] 	[跳转类型：1本地]  
 * @param {string} 	[url]		[跳转地址]
 * @param {int}		[closePage]	[本地页面跳转类型:1、直接跳转，2、关闭当前页面，3、关闭所有页面，4、跳转导航页面]    
 * */ 
Vue.prototype.jumpFunction = function(jumpType=1,url,closePage=1){
				
	if (jumpType == 1)
	{
		if (closePage == 1){
			uni.navigateTo({
				url: url
			})
		}
		else if(closePage == 2){
			uni.redirectTo({
				url: url
			})
		}
		else if(closePage == 3){
			uni.reLaunch({
				url: url
			})
		}
		else if(closePage == 4){
			uni.switchTab({
				url: url
			})
		}
		
		
	}
}


//静默登录
Vue.prototype.login = function(tid, scene) {
	var that = this
	var client = ''
	// #ifdef MP-TOUTIAO
	var client = 'toutiao'
	// #endif 

	// #ifdef MP-WEIXIN
	var client = 'weixin'
	// #endif 

	return new Promise(function(resolve, reject) {
		uni.login({
			provider: 'oauth',
			success: function(loginRes) {
				console.log('loginRes=', loginRes);
				// #ifdef MP-TOUTIAO
				var isLogin = loginRes.isLogin
				// #endif 

				// #ifdef MP-WEIXIN
				var isLogin = loginRes.code ? true : false
				// #endif  

				if (isLogin) {

					if (scene == '401') {
						datas['scene'] = that.$options.globalData.scene
						if (that.$options.globalData.tid) {
							datas['tid'] = that.$options.globalData.tid
						}
						that.$newfly.post('user/login', datas, {
								'isNeedLogin': false
							})
							.then(function(response) {
								//console.log('重复登录成功返回数据=', response);
								if (response.data.code == 1) {
									uni.setStorageSync('token', response.data.data.token)
								}
								resolve(response);
							})
							.catch(function(error) {
								console.log('1111【登录失败】返回数据=', error);
								reject(error);
							});
					} else {
						that.$http.post('user/login', {
								'scene': scene,
								'code': loginRes.code,
								'client': client,
								'tid': tid
							}, {
								'isNeedLogin': false
							})
							.then(function(response) {
								//console.log('首次登录成功返回数据=', response);
								if (response.code == 1) {
									uni.setStorageSync('token', response.data.token)
								}
								resolve(response);
							})
							.catch(function(error) {
								console.log('2222【登录失败】返回数据=', error);
								reject(error);
							});
					}
				} else {
					uni.showModal({
						title: '系统出错',
						content: '系统异常，请退出重新打开',
						showCancel: false,
						success() {
							uni.clearStorageSync()
						}
					})
				}
			}
		});
	});
};


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
