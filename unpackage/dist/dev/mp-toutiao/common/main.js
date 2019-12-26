(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!**********************************************************************!*\
  !*** D:/360MoveData/Users/Administrator/Desktop/uni-app Sub/main.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, uni, createApp) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 11));

var _http = __webpack_require__(/*! @/common/flyio/http.js */ 17);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}


// 全局挂载引入，配置相关在该index.js文件里修改

_vue.default.prototype.$http = _http.fly;
_vue.default.prototype.$newfly = _http.newfly;var cuCustom = function cuCustom() {return __webpack_require__.e(/*! import() | colorui/components/cu-custom */ "colorui/components/cu-custom").then(__webpack_require__.bind(null, /*! ./colorui/components/cu-custom.vue */ 64));};


_vue.default.component('cu-custom', cuCustom);

_vue.default.prototype.now = Date.now || function () {
  return new Date().getTime();
};
//更新用户头像及其它信息
_vue.default.prototype.upUserInfo = function (ress, jumpData) {
  var that = this;
  that.$http.post('user/profile', '', {
    'showLoading': false,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'iv': ress.iv,
      'encryptedData': ress.encryptedData } }).


  then(function (response) {
    if (jumpData) {
      if (typeof jumpData == 'number') {
        wx.navigateBack({
          delta: jumpData });

      } else {
        wx.switchTab({
          url: jumpData });

      }
    }
  }).
  catch(function (error) {});
};

//添加formID
_vue.default.prototype.addFormID = function (formid) {
  var that = this;
  console.log(formid);
  if (formid) {
    if (formid == 'the formId is a mock one') {
      return false;
    }
    if (formid.length <= 0) {
      return false;
    }
    that.$http.post('addformId', {
      formid: formid },
    {
      'showLoading': false }).

    then(function (response) {
      //console.log('添加FormId成功返回数据=', response); 
    }).
    catch(function (error) {});
  }

};
/**
    * 格式化时间
    */
_vue.default.prototype.getFormat = function (msec) {

  var ss = parseInt(msec / 1000);
  var ms = parseInt(msec % 1000);
  var mm = 0;
  var hh = 0;
  if (ss > 60) {
    mm = parseInt(ss / 60);
    ss = parseInt(ss % 60);
    if (mm > 60) {
      hh = parseInt(mm / 60);
      mm = parseInt(mm % 60);
    }
  }
  ss = ss > 9 ? ss : "0".concat(ss);
  mm = mm > 9 ? mm : "0".concat(mm);
  hh = hh > 9 ? hh : "0".concat(hh);
  return { ms: ms, ss: ss, mm: mm, hh: hh };

};
/**
    * [沉敛丶  跳转方法]
    * [时间：2019年09月26日11:47:49]
    * @param {int} 	[jumpType] 	[跳转类型：1本地]  
    * @param {string} 	[url]		[跳转地址]
    * @param {int}		[closePage]	[本地页面跳转类型:1、直接跳转，2、关闭当前页面，3、关闭所有页面，4、跳转导航页面]    
    * */
_vue.default.prototype.jumpFunction = function () {var jumpType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;var url = arguments.length > 1 ? arguments[1] : undefined;var closePage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (jumpType == 1)
  {
    if (closePage == 1) {
      uni.navigateTo({
        url: url });

    } else
    if (closePage == 2) {
      uni.redirectTo({
        url: url });

    } else
    if (closePage == 3) {
      uni.reLaunch({
        url: url });

    } else
    if (closePage == 4) {
      uni.switchTab({
        url: url });

    }


  }
};


//静默登录
_vue.default.prototype.login = function (tid, scene) {
  var that = this;
  var client = '';

  var client = 'toutiao';






  return new Promise(function (resolve, reject) {
    uni.login({
      provider: 'oauth',
      success: function success(loginRes) {
        console.log('loginRes=', loginRes);

        var isLogin = loginRes.isLogin;






        if (isLogin) {

          if (scene == '401') {
            datas['scene'] = that.$options.globalData.scene;
            if (that.$options.globalData.tid) {
              datas['tid'] = that.$options.globalData.tid;
            }
            that.$newfly.post('user/login', datas, {
              'isNeedLogin': false }).

            then(function (response) {
              //console.log('重复登录成功返回数据=', response);
              if (response.data.code == 1) {
                uni.setStorageSync('token', response.data.data.token);
              }
              resolve(response);
            }).
            catch(function (error) {
              console.log('1111【登录失败】返回数据=', error);
              reject(error);
            });
          } else {
            that.$http.post('user/login', {
              'scene': scene,
              'code': loginRes.code,
              'client': client,
              'tid': tid },
            {
              'isNeedLogin': false }).

            then(function (response) {
              //console.log('首次登录成功返回数据=', response);
              if (response.code == 1) {
                uni.setStorageSync('token', response.data.token);
              }
              resolve(response);
            }).
            catch(function (error) {
              console.log('2222【登录失败】返回数据=', error);
              reject(error);
            });
          }
        } else {
          uni.showModal({
            title: '系统出错',
            content: '系统异常，请退出重新打开',
            showCancel: false,
            success: function success() {
              uni.clearStorageSync();
            } });

        }
      } });

  });
};


_vue.default.config.productionTip = false;

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({},
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createApp"]))

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/*!**********************************************************************!*\
  !*** D:/360MoveData/Users/Administrator/Desktop/uni-app Sub/App.vue ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 12);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 14);
/* harmony import */ var _HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX.2.4.6.20191210/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 16);
var render, staticRenderFns





/* normalize component */

var component = Object(_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "360MoveData/Users/Administrator/Desktop/uni-app Sub/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 12 */
/*!***********************************************************************************************!*\
  !*** D:/360MoveData/Users/Administrator/Desktop/uni-app Sub/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.2.4.6.20191210/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX.2.4.6.20191210/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX.2.4.6.20191210/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX.2.4.6.20191210/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.2.4.6.20191210/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../HBuilderX.2.4.6.20191210/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 13);
/* harmony import */ var _HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 13 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/360MoveData/Users/Administrator/Desktop/uni-app Sub/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// const updateManager = uni.getUpdateManager()
var _default = {
  globalData: {
    sign_str: 'sanrenpin1686546161!@$%&^%$', //签名密钥
    scene: 1,
    tid: 1,
    cdnUrl: 'https://taoke168.oss-cn-beijing.aliyuncs.com/' },

  onLaunch: function onLaunch(options) {
    uni.getSystemInfo({
      success: function success(e) {


















      } });


    var that = this;
    console.log('App Launch=', options);
    that.$options.globalData.scene = parseInt(options.scene);

    if (options.query.tid) {
      that.$options.globalData.tid = parseInt(options.query.tid);
      // that.login(options.query.tid, parseInt(options.scene), gid);
    } else if (options.query.scene) {
      var scene = options.query.scene;
      var str = scene.split('-');
      var scene_uid = str[0];
      console.log('二维码进入，上级ID：', scene_uid, '进入场景：', options.scene);
      that.$options.globalData.tid = parseInt(scene_uid);
      // that.login(scene_uid, parseInt(options.scene))
    } else {
        // that.login(that.$options.globalData.tid, parseInt(options.scene))
      }
  },
  onShow: function onShow() {
    // console.log('App Show')
    // updateManager.onCheckForUpdate(function(res) {
    // 	// 请求完新版本信息的回调
    // 	console.log('检测有新版本否', res.hasUpdate);
    // });

    // updateManager.onUpdateReady(function(res) {
    // 	uni.showModal({
    // 		title: '更新提示',
    // 		content: '新版本已经准备好，是否重启应用？',
    // 		showCancel: false,
    // 		success(res) {
    // 			if (res.confirm) {
    // 				// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
    // 				updateManager.applyUpdate();
    // 			}
    // 		}
    // 	});

    // });

  },
  onHide: function onHide() {
    console.log('App Hide');
  },
  methods: {} };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 14 */
/*!*******************************************************************************************************!*\
  !*** D:/360MoveData/Users/Administrator/Desktop/uni-app Sub/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.2.4.6.20191210/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuilderX.2.4.6.20191210/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../HBuilderX.2.4.6.20191210/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../HBuilderX.2.4.6.20191210/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX.2.4.6.20191210/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuilderX.2.4.6.20191210/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.2.4.6.20191210/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../HBuilderX.2.4.6.20191210/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 15);
/* harmony import */ var _HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_4_6_20191210_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/360MoveData/Users/Administrator/Desktop/uni-app Sub/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDovMzYwTW92ZURhdGEvVXNlcnMvQWRtaW5pc3RyYXRvci9EZXNrdG9wL3VuaS1hcHAgU3ViL21haW4uanMiLCJ3ZWJwYWNrOi8vL0Q6LzM2ME1vdmVEYXRhL1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC91bmktYXBwIFN1Yi9BcHAudnVlPzBkNGIiLCJ3ZWJwYWNrOi8vL0Q6LzM2ME1vdmVEYXRhL1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC91bmktYXBwIFN1Yi9BcHAudnVlPzljNzQiLCJ3ZWJwYWNrOi8vL0Q6LzM2ME1vdmVEYXRhL1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC91bmktYXBwIFN1Yi9BcHAudnVlIiwid2VicGFjazovLy9EOi8zNjBNb3ZlRGF0YS9Vc2Vycy9BZG1pbmlzdHJhdG9yL0Rlc2t0b3AvdW5pLWFwcCBTdWIvQXBwLnZ1ZT9jYjYyIiwid2VicGFjazovLy9EOi8zNjBNb3ZlRGF0YS9Vc2Vycy9BZG1pbmlzdHJhdG9yL0Rlc2t0b3AvdW5pLWFwcCBTdWIvQXBwLnZ1ZT9mNmVjIl0sIm5hbWVzIjpbIlZ1ZSIsInByb3RvdHlwZSIsIiRodHRwIiwiZmx5IiwiJG5ld2ZseSIsIm5ld2ZseSIsImNvbXBvbmVudCIsImN1Q3VzdG9tIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJ1cFVzZXJJbmZvIiwicmVzcyIsImp1bXBEYXRhIiwidGhhdCIsInBvc3QiLCJoZWFkZXJzIiwiaXYiLCJlbmNyeXB0ZWREYXRhIiwidGhlbiIsInJlc3BvbnNlIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInN3aXRjaFRhYiIsInVybCIsImNhdGNoIiwiZXJyb3IiLCJhZGRGb3JtSUQiLCJmb3JtaWQiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZ2V0Rm9ybWF0IiwibXNlYyIsInNzIiwicGFyc2VJbnQiLCJtcyIsIm1tIiwiaGgiLCJqdW1wRnVuY3Rpb24iLCJqdW1wVHlwZSIsImNsb3NlUGFnZSIsInVuaSIsIm5hdmlnYXRlVG8iLCJyZWRpcmVjdFRvIiwicmVMYXVuY2giLCJsb2dpbiIsInRpZCIsInNjZW5lIiwiY2xpZW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwcm92aWRlciIsInN1Y2Nlc3MiLCJsb2dpblJlcyIsImlzTG9naW4iLCJkYXRhcyIsIiRvcHRpb25zIiwiZ2xvYmFsRGF0YSIsImRhdGEiLCJjb2RlIiwic2V0U3RvcmFnZVN5bmMiLCJ0b2tlbiIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjbGVhclN0b3JhZ2VTeW5jIiwiY29uZmlnIiwicHJvZHVjdGlvblRpcCIsIkFwcCIsIm1wVHlwZSIsImFwcCIsIiRtb3VudCIsInNpZ25fc3RyIiwiY2RuVXJsIiwib25MYXVuY2giLCJvcHRpb25zIiwiZ2V0U3lzdGVtSW5mbyIsImUiLCJxdWVyeSIsInN0ciIsInNwbGl0Iiwic2NlbmVfdWlkIiwib25TaG93Iiwib25IaWRlIiwibWV0aG9kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OzBEQUFBLHdDQUFtQjs7O0FBR25CO0FBQ0E7O0FBRUEsa0U7OztBQUdnQzs7QUFFaENBLGFBQUlDLFNBQUosQ0FBY0MsS0FBZCxHQUFzQkMsU0FBdEI7QUFDQUgsYUFBSUMsU0FBSixDQUFjRyxPQUFkLEdBQXdCQyxZQUF4QixDOzs7QUFHQUwsYUFBSU0sU0FBSixDQUFjLFdBQWQsRUFBMkJDLFFBQTNCOztBQUVBUCxhQUFJQyxTQUFKLENBQWNPLEdBQWQsR0FBb0JDLElBQUksQ0FBQ0QsR0FBTCxJQUFZLFlBQVc7QUFDMUMsU0FBTyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBUDtBQUNBLENBRkQ7QUFHQTtBQUNBVixhQUFJQyxTQUFKLENBQWNVLFVBQWQsR0FBMkIsVUFBU0MsSUFBVCxFQUFlQyxRQUFmLEVBQXlCO0FBQ25ELE1BQUlDLElBQUksR0FBRyxJQUFYO0FBQ0FBLE1BQUksQ0FBQ1osS0FBTCxDQUFXYSxJQUFYLENBQWdCLGNBQWhCLEVBQWdD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QUEzQixFQUFzQyxPQUF0QyxFQUErQ04sT0FBTyxDQUFDOUIsS0FBdkQ7QUFDQW5DLFVBQUksQ0FBQzZDLFFBQUwsQ0FBY0MsVUFBZCxDQUF5QlosR0FBekIsR0FBK0JaLFFBQVEsQ0FBQ2lELFNBQUQsQ0FBdkM7QUFDQTtBQUNBLEtBUE0sTUFPQTtBQUNOO0FBQ0E7QUFDRCxHQWhEYTtBQWlEZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBdkVhO0FBd0VkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEJ6RCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsR0ExRWE7QUEyRWR5RCxTQUFPLEVBQUUsRUEzRUssRTs7Ozs7Ozs7Ozs7O0FDSmY7QUFBQTtBQUFBO0FBQUE7QUFBK29DLENBQWdCLHlsQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7QUNBbnFDLHVDIiwiZmlsZSI6ImNvbW1vbi9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0Jztcbi8vIGltcG9ydCAnQC9jb21tb24vYWxkL2FsZC1zdGF0J1xuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5cbmltcG9ydCB7XG5cdGZseSxcblx0bmV3Zmx5XG59IGZyb20gJ0AvY29tbW9uL2ZseWlvL2h0dHAuanMnIC8vIOWFqOWxgOaMgui9veW8leWFpe+8jOmFjee9ruebuOWFs+WcqOivpWluZGV4Lmpz5paH5Lu26YeM5L+u5pS5XG5cblZ1ZS5wcm90b3R5cGUuJGh0dHAgPSBmbHlcblZ1ZS5wcm90b3R5cGUuJG5ld2ZseSA9IG5ld2ZseVxuXG5pbXBvcnQgY3VDdXN0b20gZnJvbSAnLi9jb2xvcnVpL2NvbXBvbmVudHMvY3UtY3VzdG9tLnZ1ZSdcblZ1ZS5jb21wb25lbnQoJ2N1LWN1c3RvbScsIGN1Q3VzdG9tKVxuIFxuVnVlLnByb3RvdHlwZS5ub3cgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbigpIHtcblx0cmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcbi8v5pu05paw55So5oi35aS05YOP5Y+K5YW25a6D5L+h5oGvXG5WdWUucHJvdG90eXBlLnVwVXNlckluZm8gPSBmdW5jdGlvbihyZXNzLCBqdW1wRGF0YSkge1xuXHR2YXIgdGhhdCA9IHRoaXNcblx0dGhhdC4kaHR0cC5wb3N0KCd1c2VyL3Byb2ZpbGUnLCAnJywge1xuXHRcdFx0J3Nob3dMb2FkaW5nJzogZmFsc2UsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcblx0XHRcdFx0J2l2JzogcmVzcy5pdixcblx0XHRcdFx0J2VuY3J5cHRlZERhdGEnOiByZXNzLmVuY3J5cHRlZERhdGEsXG5cdFx0XHR9XG5cdFx0fSlcblx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0aWYgKGp1bXBEYXRhKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YoanVtcERhdGEpID09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0d3gubmF2aWdhdGVCYWNrKHtcblx0XHRcdFx0XHRcdGRlbHRhOiBqdW1wRGF0YVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0d3guc3dpdGNoVGFiKHtcblx0XHRcdFx0XHRcdHVybDoganVtcERhdGEsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7fSk7IFxufVxuXG4vL+a3u+WKoGZvcm1JRFxuVnVlLnByb3RvdHlwZS5hZGRGb3JtSUQgPSBmdW5jdGlvbihmb3JtaWQpIHtcblx0dmFyIHRoYXQgPSB0aGlzXG5cdGNvbnNvbGUubG9nKGZvcm1pZClcblx0aWYgKGZvcm1pZCkge1xuXHRcdGlmIChmb3JtaWQgPT0gJ3RoZSBmb3JtSWQgaXMgYSBtb2NrIG9uZScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKGZvcm1pZC5sZW5ndGggPD0gMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGF0LiRodHRwLnBvc3QoJ2FkZGZvcm1JZCcsIHtcblx0XHRcdFx0Zm9ybWlkOiBmb3JtaWRcblx0XHRcdH0sIHtcblx0XHRcdFx0J3Nob3dMb2FkaW5nJzogZmFsc2Vcblx0XHRcdH0pXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKCfmt7vliqBGb3JtSWTmiJDlip/ov5Tlm57mlbDmja49JywgcmVzcG9uc2UpOyBcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHt9KTtcblx0fVxuXG59XG4vKipcbiAqIOagvOW8j+WMluaXtumXtFxuICovXG5WdWUucHJvdG90eXBlLmdldEZvcm1hdCA9IGZ1bmN0aW9uKG1zZWMpIHtcblx0XG5cdGxldCBzcyA9IHBhcnNlSW50KG1zZWMgLyAxMDAwKTtcblx0bGV0IG1zID0gcGFyc2VJbnQobXNlYyAlIDEwMDApO1xuXHRsZXQgbW0gPSAwO1xuXHRsZXQgaGggPSAwO1xuXHRpZiAoc3MgPiA2MCkge1xuXHRcdG1tID0gcGFyc2VJbnQoc3MgLyA2MCk7XG5cdFx0c3MgPSBwYXJzZUludChzcyAlIDYwKTtcblx0XHRpZiAobW0gPiA2MCkge1xuXHRcdFx0aGggPSBwYXJzZUludChtbSAvIDYwKTtcblx0XHRcdG1tID0gcGFyc2VJbnQobW0gJSA2MCk7XG5cdFx0fVxuXHR9XG5cdHNzID0gc3MgPiA5ID8gc3MgOiBgMCR7c3N9YDtcblx0bW0gPSBtbSA+IDkgPyBtbSA6IGAwJHttbX1gO1xuXHRoaCA9IGhoID4gOSA/IGhoIDogYDAke2hofWA7XG5cdHJldHVybiB7IG1zLCBzcywgbW0sIGhoIH07XG5cdCAgICBcbn07XG4vKipcbiAqIFvmsonmlZvkuLYgIOi3s+i9rOaWueazlV1cbiAqIFvml7bpl7TvvJoyMDE55bm0MDnmnIgyNuaXpTExOjQ3OjQ5XVxuICogQHBhcmFtIHtpbnR9IFx0W2p1bXBUeXBlXSBcdFvot7PovaznsbvlnovvvJox5pys5ZywXSAgXG4gKiBAcGFyYW0ge3N0cmluZ30gXHRbdXJsXVx0XHRb6Lez6L2s5Zyw5Z2AXVxuICogQHBhcmFtIHtpbnR9XHRcdFtjbG9zZVBhZ2VdXHRb5pys5Zyw6aG16Z2i6Lez6L2s57G75Z6LOjHjgIHnm7TmjqXot7PovazvvIwy44CB5YWz6Zet5b2T5YmN6aG16Z2i77yMM+OAgeWFs+mXreaJgOaciemhtemdou+8jDTjgIHot7Povazlr7zoiKrpobXpnaJdICAgIFxuICogKi8gXG5WdWUucHJvdG90eXBlLmp1bXBGdW5jdGlvbiA9IGZ1bmN0aW9uKGp1bXBUeXBlPTEsdXJsLGNsb3NlUGFnZT0xKXtcblx0XHRcdFx0XG5cdGlmIChqdW1wVHlwZSA9PSAxKVxuXHR7XG5cdFx0aWYgKGNsb3NlUGFnZSA9PSAxKXtcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0dXJsOiB1cmxcblx0XHRcdH0pXG5cdFx0fVxuXHRcdGVsc2UgaWYoY2xvc2VQYWdlID09IDIpe1xuXHRcdFx0dW5pLnJlZGlyZWN0VG8oe1xuXHRcdFx0XHR1cmw6IHVybFxuXHRcdFx0fSlcblx0XHR9XG5cdFx0ZWxzZSBpZihjbG9zZVBhZ2UgPT0gMyl7XG5cdFx0XHR1bmkucmVMYXVuY2goe1xuXHRcdFx0XHR1cmw6IHVybFxuXHRcdFx0fSlcblx0XHR9XG5cdFx0ZWxzZSBpZihjbG9zZVBhZ2UgPT0gNCl7XG5cdFx0XHR1bmkuc3dpdGNoVGFiKHtcblx0XHRcdFx0dXJsOiB1cmxcblx0XHRcdH0pXG5cdFx0fVxuXHRcdFxuXHRcdFxuXHR9XG59XG5cblxuLy/pnZnpu5jnmbvlvZVcblZ1ZS5wcm90b3R5cGUubG9naW4gPSBmdW5jdGlvbih0aWQsIHNjZW5lKSB7XG5cdHZhciB0aGF0ID0gdGhpc1xuXHR2YXIgY2xpZW50ID0gJydcblxuXHR2YXIgY2xpZW50ID0gJ3RvdXRpYW8nXG5cblxuXG5cblxuXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR1bmkubG9naW4oe1xuXHRcdFx0cHJvdmlkZXI6ICdvYXV0aCcsXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihsb2dpblJlcykge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnbG9naW5SZXM9JywgbG9naW5SZXMpO1xuXG5cdFx0XHRcdHZhciBpc0xvZ2luID0gbG9naW5SZXMuaXNMb2dpblxuXG5cblxuXG5cblxuXHRcdFx0XHRpZiAoaXNMb2dpbikge1xuXG5cdFx0XHRcdFx0aWYgKHNjZW5lID09ICc0MDEnKSB7XG5cdFx0XHRcdFx0XHRkYXRhc1snc2NlbmUnXSA9IHRoYXQuJG9wdGlvbnMuZ2xvYmFsRGF0YS5zY2VuZVxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuJG9wdGlvbnMuZ2xvYmFsRGF0YS50aWQpIHtcblx0XHRcdFx0XHRcdFx0ZGF0YXNbJ3RpZCddID0gdGhhdC4kb3B0aW9ucy5nbG9iYWxEYXRhLnRpZFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhhdC4kbmV3Zmx5LnBvc3QoJ3VzZXIvbG9naW4nLCBkYXRhcywge1xuXHRcdFx0XHRcdFx0XHRcdCdpc05lZWRMb2dpbic6IGZhbHNlXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZygn6YeN5aSN55m75b2V5oiQ5Yqf6L+U5Zue5pWw5o2uPScsIHJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAocmVzcG9uc2UuZGF0YS5jb2RlID09IDEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygndG9rZW4nLCByZXNwb25zZS5kYXRhLmRhdGEudG9rZW4pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnMTExMeOAkOeZu+W9leWksei0peOAkei/lOWbnuaVsOaNrj0nLCBlcnJvcik7XG5cdFx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoYXQuJGh0dHAucG9zdCgndXNlci9sb2dpbicsIHtcblx0XHRcdFx0XHRcdFx0XHQnc2NlbmUnOiBzY2VuZSxcblx0XHRcdFx0XHRcdFx0XHQnY29kZSc6IGxvZ2luUmVzLmNvZGUsXG5cdFx0XHRcdFx0XHRcdFx0J2NsaWVudCc6IGNsaWVudCxcblx0XHRcdFx0XHRcdFx0XHQndGlkJzogdGlkXG5cdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHQnaXNOZWVkTG9naW4nOiBmYWxzZVxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coJ+mmluasoeeZu+W9leaIkOWKn+i/lOWbnuaVsOaNrj0nLCByZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3BvbnNlLmNvZGUgPT0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCd0b2tlbicsIHJlc3BvbnNlLmRhdGEudG9rZW4pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnMjIyMuOAkOeZu+W9leWksei0peOAkei/lOWbnuaVsOaNrj0nLCBlcnJvcik7XG5cdFx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xuXHRcdFx0XHRcdFx0dGl0bGU6ICfns7vnu5/lh7rplJknLFxuXHRcdFx0XHRcdFx0Y29udGVudDogJ+ezu+e7n+W8guW4uO+8jOivt+mAgOWHuumHjeaWsOaJk+W8gCcsXG5cdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZSxcblx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRcdHVuaS5jbGVhclN0b3JhZ2VTeW5jKClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxuXG5BcHAubXBUeXBlID0gJ2FwcCdcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG5cdC4uLkFwcFxufSlcbmFwcC4kbW91bnQoKSIsInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZuc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNC42LjIwMTkxMjEwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcSEJ1aWxkZXJYLjIuNC42LjIwMTkxMjEwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2EzNzU4ZGQ2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2EzNzU4ZGQ2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIFxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIjM2ME1vdmVEYXRhL1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC91bmktYXBwIFN1Yi9BcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi40LjYuMjAxOTEyMTAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi40LjYuMjAxOTEyMTAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNC42LjIwMTkxMjEwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi40LjYuMjAxOTEyMTAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi40LjYuMjAxOTEyMTAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLWN1c3RvbS1ibG9jay1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4yLjQuNi4yMDE5MTIxMC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNC42LjIwMTkxMjEwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNC42LjIwMTkxMjEwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4yLjQuNi4yMDE5MTIxMC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNC42LjIwMTkxMjEwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNC42LjIwMTkxMjEwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi40LjYuMjAxOTEyMTAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuLy8gY29uc3QgdXBkYXRlTWFuYWdlciA9IHVuaS5nZXRVcGRhdGVNYW5hZ2VyKClcbmV4cG9ydCBkZWZhdWx0IHtcblx0Z2xvYmFsRGF0YToge1xuXHRcdHNpZ25fc3RyOiAnc2FucmVucGluMTY4NjU0NjE2MSFAJCUmXiUkJywgLy/nrb7lkI3lr4bpkqVcblx0XHRzY2VuZTogMSxcblx0XHR0aWQ6IDEsXG5cdFx0Y2RuVXJsOiAnaHR0cHM6Ly90YW9rZTE2OC5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vJyxcblx0fSxcblx0b25MYXVuY2g6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihlKSB7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHZhciB0aGF0ID0gdGhpc1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoPScsIG9wdGlvbnMpXG5cdFx0dGhhdC4kb3B0aW9ucy5nbG9iYWxEYXRhLnNjZW5lID0gcGFyc2VJbnQob3B0aW9ucy5zY2VuZSlcblxuXHRcdGlmIChvcHRpb25zLnF1ZXJ5LnRpZCkge1xuXHRcdFx0dGhhdC4kb3B0aW9ucy5nbG9iYWxEYXRhLnRpZCA9IHBhcnNlSW50KG9wdGlvbnMucXVlcnkudGlkKVxuXHRcdFx0Ly8gdGhhdC5sb2dpbihvcHRpb25zLnF1ZXJ5LnRpZCwgcGFyc2VJbnQob3B0aW9ucy5zY2VuZSksIGdpZCk7XG5cdFx0fSBlbHNlIGlmIChvcHRpb25zLnF1ZXJ5LnNjZW5lKSB7XG5cdFx0XHR2YXIgc2NlbmUgPSBvcHRpb25zLnF1ZXJ5LnNjZW5lXG5cdFx0XHR2YXIgc3RyID0gc2NlbmUuc3BsaXQoJy0nKVxuXHRcdFx0dmFyIHNjZW5lX3VpZCA9IHN0clswXVxuXHRcdFx0Y29uc29sZS5sb2coJ+S6jOe7tOeggei/m+WFpe+8jOS4iue6p0lE77yaJywgc2NlbmVfdWlkLCAn6L+b5YWl5Zy65pmv77yaJywgb3B0aW9ucy5zY2VuZSlcblx0XHRcdHRoYXQuJG9wdGlvbnMuZ2xvYmFsRGF0YS50aWQgPSBwYXJzZUludChzY2VuZV91aWQpXG5cdFx0XHQvLyB0aGF0LmxvZ2luKHNjZW5lX3VpZCwgcGFyc2VJbnQob3B0aW9ucy5zY2VuZSkpXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHRoYXQubG9naW4odGhhdC4kb3B0aW9ucy5nbG9iYWxEYXRhLnRpZCwgcGFyc2VJbnQob3B0aW9ucy5zY2VuZSkpXG5cdFx0fVxuXHR9LFxuXHRvblNob3c6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdBcHAgU2hvdycpXG5cdFx0Ly8gdXBkYXRlTWFuYWdlci5vbkNoZWNrRm9yVXBkYXRlKGZ1bmN0aW9uKHJlcykge1xuXHRcdC8vIFx0Ly8g6K+35rGC5a6M5paw54mI5pys5L+h5oGv55qE5Zue6LCDXG5cdFx0Ly8gXHRjb25zb2xlLmxvZygn5qOA5rWL5pyJ5paw54mI5pys5ZCmJywgcmVzLmhhc1VwZGF0ZSk7XG5cdFx0Ly8gfSk7XG5cblx0XHQvLyB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlUmVhZHkoZnVuY3Rpb24ocmVzKSB7XG5cdFx0Ly8gXHR1bmkuc2hvd01vZGFsKHtcblx0XHQvLyBcdFx0dGl0bGU6ICfmm7TmlrDmj5DnpLonLFxuXHRcdC8vIFx0XHRjb250ZW50OiAn5paw54mI5pys5bey57uP5YeG5aSH5aW977yM5piv5ZCm6YeN5ZCv5bqU55So77yfJyxcblx0XHQvLyBcdFx0c2hvd0NhbmNlbDogZmFsc2UsXG5cdFx0Ly8gXHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0Ly8gXHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XG5cdFx0Ly8gXHRcdFx0XHQvLyDmlrDnmoTniYjmnKzlt7Lnu4/kuIvovb3lpb3vvIzosIPnlKggYXBwbHlVcGRhdGUg5bqU55So5paw54mI5pys5bm26YeN5ZCvXG5cdFx0Ly8gXHRcdFx0XHR1cGRhdGVNYW5hZ2VyLmFwcGx5VXBkYXRlKCk7XG5cdFx0Ly8gXHRcdFx0fVxuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9KTtcblxuXHRcdC8vIH0pO1xuXG5cdH0sXG5cdG9uSGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBIaWRlJylcblx0fSxcblx0bWV0aG9kczoge1xuXG5cdH1cbn1cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNC42LjIwMTkxMjEwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4yLjQuNi4yMDE5MTIxMC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNC42LjIwMTkxMjEwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNC42LjIwMTkxMjEwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4yLjQuNi4yMDE5MTIxMC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNC42LjIwMTkxMjEwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNC42LjIwMTkxMjEwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi40LjYuMjAxOTEyMTAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNC42LjIwMTkxMjEwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4yLjQuNi4yMDE5MTIxMC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNC42LjIwMTkxMjEwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNC42LjIwMTkxMjEwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4yLjQuNi4yMDE5MTIxMC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNC42LjIwMTkxMjEwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNC42LjIwMTkxMjEwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi40LjYuMjAxOTEyMTAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9