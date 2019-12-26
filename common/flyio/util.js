import { base64_encode, base64_decode } from './base64';
import md5 from './md5';
import siteinfo from '@/common/siteinfo';    
var util = {};

util.base64Encode = function (str) {
  return base64_encode(str)
};

util.base64Decode = function (str) {
  return base64_decode(str)
};

util.md5 = function (str) {
  return md5(str)
};

util.getSign = function (data) {
  return getSign(data);
};

util.secretdate = function () {
  return secretdate()
};

util.login = function (a,b) {
  return login(a,b)
};

util.random_char = function (n) {
  return random_char(n)
};
util.mergeObject = function (a,b) {
  return mergeObject(a,b)
};

//合并两个对象
function mergeObject(con, mcon) {
  for (var key in mcon) {
    if (typeof mcon[key] == 'object' && con[key]) {
      merge(con[key], mcon[key])
    } else {
      con[key] = mcon[key]
    }
  }
  return con
}

/**
 * 登录失效，重新登录 
 * @time 2019年9月24日 19:34:57
 * @param {Object} tid
 * @param {Object} scene
 */
function login(tid, scene) { 
    var that = this  
    return new Promise(function (resolve, reject) {
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
					var tid = getApp().globalData.tid
					if (tid > 1) {
					  var datas = { scene: getApp().globalData.scene, code: loginRes.code, tid: tid}
					} else {
					  var datas = { scene: getApp().globalData.scene, code: loginRes.code}
					}   	

					var baseUrl = siteinfo.websiteUrl

					uni.request({
					    url: baseUrl + 'user/login',
					    data:datas,
						method:'POST',
					    header: {
					        'Content-Type': 'application/x-www-form-urlencoded'
					    },
					    success: (res) => {
							console.log('登录成功啦=',res)
					        if (res.data.code == 1) {
								uni.setStorageSync('token', res.data.data.token)
							} 
							resolve(res); 
					    },
						fail: (error) => {
						    console.log('登录失败啦=',error);
							reject(error);
						}
					}); 
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
		})
    });   
}

function secretdate() {
  var timestamp = new Date().getTime(); 
  var nonce = random_char(32);
  var data_for_sign = { 'timestamp': timestamp,'nonce' : nonce}  
  return data_for_sign;
}

function random_char(n) {
  var random_charset = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    , 'a', 'b', 'c', 'd', 'e', 'f', 'g'
    , 'h', 'i', 'j', 'k', 'l', 'm', 'n'
    , 'o', 'p', 'q', 'r', 's', 't'
    , 'u', 'v', 'w', 'x', 'y', 'z'];
  var res = "";
  for (var i = 0; i < n; i++) {
    var id = Math.ceil(Math.random() * 35);
    res += random_charset[id];
  }
  return res;
}


/**
 * 获取签名 将链接地址的所有参数按字母排序后拼接加上token进行md5
 * date 参数{参数名1 : 值1, 参数名2 : 值2} *
 */
function getSign(data) {
  var underscore = require('./underscore.js');
  var md5 = require('./md5.js');
  var querystring = [];
  var sign = ''
  if (data) {
    var theRequest = [];
    for (let param in data) {
      if (param && data[param]) {
        theRequest = theRequest.concat({
          'name': param,
          'value': data[param]
        })
      }
    } 
    querystring = querystring.concat(theRequest);
  } 
  //排序
  querystring = underscore.sortBy(querystring, 'name');
  //去重
  querystring = underscore.uniq(querystring, true, 'name');
  var urlData = '';
  for (let i = 0; i < querystring.length; i++) {
    if (querystring[i] && querystring[i].name && querystring[i].value) {
      if (querystring[i].name != 'sign'){
        urlData += querystring[i].name + '=' + querystring[i].value;
        if (i < (querystring.length - 1)) {
          urlData += '&';
        }
      } 
    }
  }
  //console.log('签名加密参数=', urlData) 
  sign = md5(urlData + getApp().globalData.sign_str);
  return sign;
}  
module.exports = util; 