(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!*****************************************************!*\
  !*** C:/Users/86156/Desktop/工作/uni-app Sub/main.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, uni, createApp) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 9));

var _http = __webpack_require__(/*! @/common/flyio/http.js */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}


// 全局挂载引入，配置相关在该index.js文件里修改

_vue.default.prototype.$http = _http.fly;
_vue.default.prototype.$newfly = _http.newfly;var cuCustom = function cuCustom() {return __webpack_require__.e(/*! import() | colorui/components/cu-custom */ "colorui/components/cu-custom").then(__webpack_require__.bind(null, /*! ./colorui/components/cu-custom.vue */ 78));};


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
/* 9 */
/*!*****************************************************!*\
  !*** C:/Users/86156/Desktop/工作/uni-app Sub/App.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 10);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 12);
/* harmony import */ var _E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);
var render, staticRenderFns





/* normalize component */

var component = Object(_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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
component.options.__file = "C:/Users/86156/Desktop/工作/uni-app Sub/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 10 */
/*!******************************************************************************!*\
  !*** C:/Users/86156/Desktop/工作/uni-app Sub/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_hX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 11);
/* harmony import */ var _E_hX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_hX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_hX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/86156/Desktop/工作/uni-app Sub/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* 12 */
/*!**************************************************************************************!*\
  !*** C:/Users/86156/Desktop/工作/uni-app Sub/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_hX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 13);
/* harmony import */ var _E_hX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_hX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_hX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_hX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 13 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/86156/Desktop/工作/uni-app Sub/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTYvRGVza3RvcC/lt6XkvZwvdW5pLWFwcCBTdWIvbWFpbi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTYvRGVza3RvcC/lt6XkvZwvdW5pLWFwcCBTdWIvQXBwLnZ1ZT85MDBlIiwid2VicGFjazovLy9DOi9Vc2Vycy84NjE1Ni9EZXNrdG9wL+W3peS9nC91bmktYXBwIFN1Yi9BcHAudnVlPzQ2NDYiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU2L0Rlc2t0b3Av5bel5L2cL3VuaS1hcHAgU3ViL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTU2L0Rlc2t0b3Av5bel5L2cL3VuaS1hcHAgU3ViL0FwcC52dWU/MWEyNyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvODYxNTYvRGVza3RvcC/lt6XkvZwvdW5pLWFwcCBTdWIvQXBwLnZ1ZT9kNDE1Il0sIm5hbWVzIjpbIlZ1ZSIsInByb3RvdHlwZSIsIiRodHRwIiwiZmx5IiwiJG5ld2ZseSIsIm5ld2ZseSIsImNvbXBvbmVudCIsImN1Q3VzdG9tIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJ1cFVzZXJJbmZvIiwicmVzcyIsImp1bXBEYXRhIiwidGhhdCIsInBvc3QiLCJoZWFkZXJzIiwiaXYiLCJlbmNyeXB0ZWREYXRhIiwidGhlbiIsInJlc3BvbnNlIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInN3aXRjaFRhYiIsInVybCIsImNhdGNoIiwiZXJyb3IiLCJhZGRGb3JtSUQiLCJmb3JtaWQiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZ2V0Rm9ybWF0IiwibXNlYyIsInNzIiwicGFyc2VJbnQiLCJtcyIsIm1tIiwiaGgiLCJqdW1wRnVuY3Rpb24iLCJqdW1wVHlwZSIsImNsb3NlUGFnZSIsInVuaSIsIm5hdmlnYXRlVG8iLCJyZWRpcmVjdFRvIiwicmVMYXVuY2giLCJsb2dpbiIsInRpZCIsInNjZW5lIiwiY2xpZW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwcm92aWRlciIsInN1Y2Nlc3MiLCJsb2dpblJlcyIsImlzTG9naW4iLCJkYXRhcyIsIiRvcHRpb25zIiwiZ2xvYmFsRGF0YSIsImRhdGEiLCJjb2RlIiwic2V0U3RvcmFnZVN5bmMiLCJ0b2tlbiIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjbGVhclN0b3JhZ2VTeW5jIiwiY29uZmlnIiwicHJvZHVjdGlvblRpcCIsIkFwcCIsIm1wVHlwZSIsImFwcCIsIiRtb3VudCIsInNpZ25fc3RyIiwiY2RuVXJsIiwib25MYXVuY2giLCJvcHRpb25zIiwiZ2V0U3lzdGVtSW5mbyIsImUiLCJxdWVyeSIsInN0ciIsInNwbGl0Iiwic2NlbmVfdWlkIiwib25TaG93Iiwib25IaWRlIiwibWV0aG9kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OzBEQUFBLHdDQUFtQjs7O0FBR25CO0FBQ0E7O0FBRUEsa0U7OztBQUdnQzs7QUFFaENBLGFBQUlDLFNBQUosQ0FBY0MsS0FBZCxHQUFzQkMsU0FBdEI7QUFDQUgsYUFBSUMsU0FBSixDQUFjRyxPQUFkLEdBQXdCQyxZQUF4QixDOzs7QUFHQUwsYUFBSU0sU0FBSixDQUFjLFdBQWQsRUFBMkJDLFFBQTNCOztBQUVBUCxhQUFJQyxTQUFKLENBQWNPLEdBQWQsR0FBb0JDLElBQUksQ0FBQ0QsR0FBTCxJQUFZLFlBQVc7QUFDMUMsU0FBTyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBUDtBQUNBLENBRkQ7QUFHQTtBQUNBVixhQUFJQyxTQUFKLENBQWNVLFVBQWQsR0FBMkIsVUFBU0MsSUFBVCxFQUFlQyxRQUFmLEVBQXlCO0FBQ25ELE1BQUlDLElBQUksR0FBRyxJQUFYO0FBQ0FBLE1BQUksQ0FBQ1osS0FBTCxDQUFXYSxJQUFYLENBQWdCLGNBQWhCLEVBQWdDLEVBQWhDLEVBQW9DO0FBQ2xDLG1CQUFlLEtBRG1CO0FBRWxDQyxXQUFPLEVBQUU7QUFDUixzQkFBZ0IsbUNBRFI7QUFFUixZQUFNSixJ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eUJaLEdBQXpCLEdBQStCWixRQUFRLENBQUNpRCxTQUFELENBQXZDO0FBQ0E7QUFDQSxLQVBNLE1BT0E7QUFDTjtBQUNBO0FBQ0QsR0FoRGE7QUFpRGRDLFFBQU0sRUFBRSxrQkFBVztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQXZFYTtBQXdFZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCekQsV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBLEdBMUVhO0FBMkVkeUQsU0FBTyxFQUFFLEVBM0VLLEU7Ozs7Ozs7Ozs7OztBQ0pmO0FBQUE7QUFBQTtBQUFBO0FBQW84QixDQUFnQix5N0JBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQXg5Qix1QyIsImZpbGUiOiJjb21tb24vbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7XG4vLyBpbXBvcnQgJ0AvY29tbW9uL2FsZC9hbGQtc3RhdCdcblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xuXG5pbXBvcnQge1xuXHRmbHksXG5cdG5ld2ZseVxufSBmcm9tICdAL2NvbW1vbi9mbHlpby9odHRwLmpzJyAvLyDlhajlsYDmjILovb3lvJXlhaXvvIzphY3nva7nm7jlhbPlnKjor6VpbmRleC5qc+aWh+S7tumHjOS/ruaUuVxuXG5WdWUucHJvdG90eXBlLiRodHRwID0gZmx5XG5WdWUucHJvdG90eXBlLiRuZXdmbHkgPSBuZXdmbHlcblxuaW1wb3J0IGN1Q3VzdG9tIGZyb20gJy4vY29sb3J1aS9jb21wb25lbnRzL2N1LWN1c3RvbS52dWUnXG5WdWUuY29tcG9uZW50KCdjdS1jdXN0b20nLCBjdUN1c3RvbSlcbiBcblZ1ZS5wcm90b3R5cGUubm93ID0gRGF0ZS5ub3cgfHwgZnVuY3Rpb24oKSB7XG5cdHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG4vL+abtOaWsOeUqOaIt+WktOWDj+WPiuWFtuWug+S/oeaBr1xuVnVlLnByb3RvdHlwZS51cFVzZXJJbmZvID0gZnVuY3Rpb24ocmVzcywganVtcERhdGEpIHtcblx0dmFyIHRoYXQgPSB0aGlzXG5cdHRoYXQuJGh0dHAucG9zdCgndXNlci9wcm9maWxlJywgJycsIHtcblx0XHRcdCdzaG93TG9hZGluZyc6IGZhbHNlLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG5cdFx0XHRcdCdpdic6IHJlc3MuaXYsXG5cdFx0XHRcdCdlbmNyeXB0ZWREYXRhJzogcmVzcy5lbmNyeXB0ZWREYXRhLFxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdGlmIChqdW1wRGF0YSkge1xuXHRcdFx0XHRpZiAodHlwZW9mKGp1bXBEYXRhKSA9PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdHd4Lm5hdmlnYXRlQmFjayh7XG5cdFx0XHRcdFx0XHRkZWx0YToganVtcERhdGFcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHd4LnN3aXRjaFRhYih7XG5cdFx0XHRcdFx0XHR1cmw6IGp1bXBEYXRhLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXHRcdC5jYXRjaChmdW5jdGlvbihlcnJvcikge30pOyBcbn1cblxuLy/mt7vliqBmb3JtSURcblZ1ZS5wcm90b3R5cGUuYWRkRm9ybUlEID0gZnVuY3Rpb24oZm9ybWlkKSB7XG5cdHZhciB0aGF0ID0gdGhpc1xuXHRjb25zb2xlLmxvZyhmb3JtaWQpXG5cdGlmIChmb3JtaWQpIHtcblx0XHRpZiAoZm9ybWlkID09ICd0aGUgZm9ybUlkIGlzIGEgbW9jayBvbmUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChmb3JtaWQubGVuZ3RoIDw9IDApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhhdC4kaHR0cC5wb3N0KCdhZGRmb3JtSWQnLCB7XG5cdFx0XHRcdGZvcm1pZDogZm9ybWlkXG5cdFx0XHR9LCB7XG5cdFx0XHRcdCdzaG93TG9hZGluZyc6IGZhbHNlXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZygn5re75YqgRm9ybUlk5oiQ5Yqf6L+U5Zue5pWw5o2uPScsIHJlc3BvbnNlKTsgXG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7fSk7XG5cdH1cblxufVxuLyoqXG4gKiDmoLzlvI/ljJbml7bpl7RcbiAqL1xuVnVlLnByb3RvdHlwZS5nZXRGb3JtYXQgPSBmdW5jdGlvbihtc2VjKSB7XG5cdFxuXHRsZXQgc3MgPSBwYXJzZUludChtc2VjIC8gMTAwMCk7XG5cdGxldCBtcyA9IHBhcnNlSW50KG1zZWMgJSAxMDAwKTtcblx0bGV0IG1tID0gMDtcblx0bGV0IGhoID0gMDtcblx0aWYgKHNzID4gNjApIHtcblx0XHRtbSA9IHBhcnNlSW50KHNzIC8gNjApO1xuXHRcdHNzID0gcGFyc2VJbnQoc3MgJSA2MCk7XG5cdFx0aWYgKG1tID4gNjApIHtcblx0XHRcdGhoID0gcGFyc2VJbnQobW0gLyA2MCk7XG5cdFx0XHRtbSA9IHBhcnNlSW50KG1tICUgNjApO1xuXHRcdH1cblx0fVxuXHRzcyA9IHNzID4gOSA/IHNzIDogYDAke3NzfWA7XG5cdG1tID0gbW0gPiA5ID8gbW0gOiBgMCR7bW19YDtcblx0aGggPSBoaCA+IDkgPyBoaCA6IGAwJHtoaH1gO1xuXHRyZXR1cm4geyBtcywgc3MsIG1tLCBoaCB9O1xuXHQgICAgXG59O1xuLyoqXG4gKiBb5rKJ5pWb5Li2ICDot7Povazmlrnms5VdXG4gKiBb5pe26Ze077yaMjAxOeW5tDA55pyIMjbml6UxMTo0Nzo0OV1cbiAqIEBwYXJhbSB7aW50fSBcdFtqdW1wVHlwZV0gXHRb6Lez6L2s57G75Z6L77yaMeacrOWcsF0gIFxuICogQHBhcmFtIHtzdHJpbmd9IFx0W3VybF1cdFx0W+i3s+i9rOWcsOWdgF1cbiAqIEBwYXJhbSB7aW50fVx0XHRbY2xvc2VQYWdlXVx0W+acrOWcsOmhtemdoui3s+i9rOexu+Weizox44CB55u05o6l6Lez6L2s77yMMuOAgeWFs+mXreW9k+WJjemhtemdou+8jDPjgIHlhbPpl63miYDmnInpobXpnaLvvIw044CB6Lez6L2s5a+86Iiq6aG16Z2iXSAgICBcbiAqICovIFxuVnVlLnByb3RvdHlwZS5qdW1wRnVuY3Rpb24gPSBmdW5jdGlvbihqdW1wVHlwZT0xLHVybCxjbG9zZVBhZ2U9MSl7XG5cdFx0XHRcdFxuXHRpZiAoanVtcFR5cGUgPT0gMSlcblx0e1xuXHRcdGlmIChjbG9zZVBhZ2UgPT0gMSl7XG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdHVybDogdXJsXG5cdFx0XHR9KVxuXHRcdH1cblx0XHRlbHNlIGlmKGNsb3NlUGFnZSA9PSAyKXtcblx0XHRcdHVuaS5yZWRpcmVjdFRvKHtcblx0XHRcdFx0dXJsOiB1cmxcblx0XHRcdH0pXG5cdFx0fVxuXHRcdGVsc2UgaWYoY2xvc2VQYWdlID09IDMpe1xuXHRcdFx0dW5pLnJlTGF1bmNoKHtcblx0XHRcdFx0dXJsOiB1cmxcblx0XHRcdH0pXG5cdFx0fVxuXHRcdGVsc2UgaWYoY2xvc2VQYWdlID09IDQpe1xuXHRcdFx0dW5pLnN3aXRjaFRhYih7XG5cdFx0XHRcdHVybDogdXJsXG5cdFx0XHR9KVxuXHRcdH1cblx0XHRcblx0XHRcblx0fVxufVxuXG5cbi8v6Z2Z6buY55m75b2VXG5WdWUucHJvdG90eXBlLmxvZ2luID0gZnVuY3Rpb24odGlkLCBzY2VuZSkge1xuXHR2YXIgdGhhdCA9IHRoaXNcblx0dmFyIGNsaWVudCA9ICcnXG5cblx0dmFyIGNsaWVudCA9ICd0b3V0aWFvJ1xuXG5cblxuXG5cblxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dW5pLmxvZ2luKHtcblx0XHRcdHByb3ZpZGVyOiAnb2F1dGgnLFxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24obG9naW5SZXMpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2xvZ2luUmVzPScsIGxvZ2luUmVzKTtcblxuXHRcdFx0XHR2YXIgaXNMb2dpbiA9IGxvZ2luUmVzLmlzTG9naW5cblxuXG5cblxuXG5cblx0XHRcdFx0aWYgKGlzTG9naW4pIHtcblxuXHRcdFx0XHRcdGlmIChzY2VuZSA9PSAnNDAxJykge1xuXHRcdFx0XHRcdFx0ZGF0YXNbJ3NjZW5lJ10gPSB0aGF0LiRvcHRpb25zLmdsb2JhbERhdGEuc2NlbmVcblx0XHRcdFx0XHRcdGlmICh0aGF0LiRvcHRpb25zLmdsb2JhbERhdGEudGlkKSB7XG5cdFx0XHRcdFx0XHRcdGRhdGFzWyd0aWQnXSA9IHRoYXQuJG9wdGlvbnMuZ2xvYmFsRGF0YS50aWRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoYXQuJG5ld2ZseS5wb3N0KCd1c2VyL2xvZ2luJywgZGF0YXMsIHtcblx0XHRcdFx0XHRcdFx0XHQnaXNOZWVkTG9naW4nOiBmYWxzZVxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coJ+mHjeWkjeeZu+W9leaIkOWKn+i/lOWbnuaVsOaNrj0nLCByZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3BvbnNlLmRhdGEuY29kZSA9PSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3Rva2VuJywgcmVzcG9uc2UuZGF0YS5kYXRhLnRva2VuKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJzExMTHjgJDnmbvlvZXlpLHotKXjgJHov5Tlm57mlbDmja49JywgZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGF0LiRodHRwLnBvc3QoJ3VzZXIvbG9naW4nLCB7XG5cdFx0XHRcdFx0XHRcdFx0J3NjZW5lJzogc2NlbmUsXG5cdFx0XHRcdFx0XHRcdFx0J2NvZGUnOiBsb2dpblJlcy5jb2RlLFxuXHRcdFx0XHRcdFx0XHRcdCdjbGllbnQnOiBjbGllbnQsXG5cdFx0XHRcdFx0XHRcdFx0J3RpZCc6IHRpZFxuXHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0J2lzTmVlZExvZ2luJzogZmFsc2Vcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKCfpppbmrKHnmbvlvZXmiJDlip/ov5Tlm57mlbDmja49JywgcmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChyZXNwb25zZS5jb2RlID09IDEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygndG9rZW4nLCByZXNwb25zZS5kYXRhLnRva2VuKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJzIyMjLjgJDnmbvlvZXlpLHotKXjgJHov5Tlm57mlbDmja49JywgZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdFx0XHRcdHRpdGxlOiAn57O757uf5Ye66ZSZJyxcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfns7vnu5/lvILluLjvvIzor7fpgIDlh7rph43mlrDmiZPlvIAnLFxuXHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXG5cdFx0XHRcdFx0XHRzdWNjZXNzKCkge1xuXHRcdFx0XHRcdFx0XHR1bmkuY2xlYXJTdG9yYWdlU3luYygpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cblxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcblxuQXBwLm1wVHlwZSA9ICdhcHAnXG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuXHQuLi5BcHBcbn0pXG5hcHAuJG1vdW50KCkiLCJ2YXIgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUU6XFxcXGhYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcaFhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2Y1ODMzMmQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2Y1ODMzMmQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzovVXNlcnMvODYxNTYvRGVza3RvcC/lt6XkvZwvdW5pLWFwcCBTdWIvQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcaFhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxoWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTItMSFFOlxcXFxoWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRTpcXFxcaFhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFFOlxcXFxoWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0wLTEhRTpcXFxcaFhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUU6XFxcXGhYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRTpcXFxcaFhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhRTpcXFxcaFhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUU6XFxcXGhYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRTpcXFxcaFhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLWN1c3RvbS1ibG9jay1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMC0xIUU6XFxcXGhYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIlxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbi8vIGNvbnN0IHVwZGF0ZU1hbmFnZXIgPSB1bmkuZ2V0VXBkYXRlTWFuYWdlcigpXG5leHBvcnQgZGVmYXVsdCB7XG5cdGdsb2JhbERhdGE6IHtcblx0XHRzaWduX3N0cjogJ3NhbnJlbnBpbjE2ODY1NDYxNjEhQCQlJl4lJCcsIC8v562+5ZCN5a+G6ZKlXG5cdFx0c2NlbmU6IDEsXG5cdFx0dGlkOiAxLFxuXHRcdGNkblVybDogJ2h0dHBzOi8vdGFva2UxNjgub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tLycsXG5cdH0sXG5cdG9uTGF1bmNoOiBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0dW5pLmdldFN5c3RlbUluZm8oe1xuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZSkge1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHR2YXIgdGhhdCA9IHRoaXNcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaD0nLCBvcHRpb25zKVxuXHRcdHRoYXQuJG9wdGlvbnMuZ2xvYmFsRGF0YS5zY2VuZSA9IHBhcnNlSW50KG9wdGlvbnMuc2NlbmUpXG5cblx0XHRpZiAob3B0aW9ucy5xdWVyeS50aWQpIHtcblx0XHRcdHRoYXQuJG9wdGlvbnMuZ2xvYmFsRGF0YS50aWQgPSBwYXJzZUludChvcHRpb25zLnF1ZXJ5LnRpZClcblx0XHRcdC8vIHRoYXQubG9naW4ob3B0aW9ucy5xdWVyeS50aWQsIHBhcnNlSW50KG9wdGlvbnMuc2NlbmUpLCBnaWQpO1xuXHRcdH0gZWxzZSBpZiAob3B0aW9ucy5xdWVyeS5zY2VuZSkge1xuXHRcdFx0dmFyIHNjZW5lID0gb3B0aW9ucy5xdWVyeS5zY2VuZVxuXHRcdFx0dmFyIHN0ciA9IHNjZW5lLnNwbGl0KCctJylcblx0XHRcdHZhciBzY2VuZV91aWQgPSBzdHJbMF1cblx0XHRcdGNvbnNvbGUubG9nKCfkuoznu7TnoIHov5vlhaXvvIzkuIrnuqdJRO+8micsIHNjZW5lX3VpZCwgJ+i/m+WFpeWcuuaZr++8micsIG9wdGlvbnMuc2NlbmUpXG5cdFx0XHR0aGF0LiRvcHRpb25zLmdsb2JhbERhdGEudGlkID0gcGFyc2VJbnQoc2NlbmVfdWlkKVxuXHRcdFx0Ly8gdGhhdC5sb2dpbihzY2VuZV91aWQsIHBhcnNlSW50KG9wdGlvbnMuc2NlbmUpKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB0aGF0LmxvZ2luKHRoYXQuJG9wdGlvbnMuZ2xvYmFsRGF0YS50aWQsIHBhcnNlSW50KG9wdGlvbnMuc2NlbmUpKVxuXHRcdH1cblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHRcdC8vIHVwZGF0ZU1hbmFnZXIub25DaGVja0ZvclVwZGF0ZShmdW5jdGlvbihyZXMpIHtcblx0XHQvLyBcdC8vIOivt+axguWujOaWsOeJiOacrOS/oeaBr+eahOWbnuiwg1xuXHRcdC8vIFx0Y29uc29sZS5sb2coJ+ajgOa1i+acieaWsOeJiOacrOWQpicsIHJlcy5oYXNVcGRhdGUpO1xuXHRcdC8vIH0pO1xuXG5cdFx0Ly8gdXBkYXRlTWFuYWdlci5vblVwZGF0ZVJlYWR5KGZ1bmN0aW9uKHJlcykge1xuXHRcdC8vIFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0Ly8gXHRcdHRpdGxlOiAn5pu05paw5o+Q56S6Jyxcblx0XHQvLyBcdFx0Y29udGVudDogJ+aWsOeJiOacrOW3sue7j+WHhuWkh+Wlve+8jOaYr+WQpumHjeWQr+W6lOeUqO+8nycsXG5cdFx0Ly8gXHRcdHNob3dDYW5jZWw6IGZhbHNlLFxuXHRcdC8vIFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdC8vIFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xuXHRcdC8vIFx0XHRcdFx0Ly8g5paw55qE54mI5pys5bey57uP5LiL6L295aW977yM6LCD55SoIGFwcGx5VXBkYXRlIOW6lOeUqOaWsOeJiOacrOW5tumHjeWQr1xuXHRcdC8vIFx0XHRcdFx0dXBkYXRlTWFuYWdlci5hcHBseVVwZGF0ZSgpO1xuXHRcdC8vIFx0XHRcdH1cblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fSk7XG5cblx0XHQvLyB9KTtcblxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH0sXG5cdG1ldGhvZHM6IHtcblxuXHR9XG59XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUU6XFxcXGhYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIUU6XFxcXGhYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMSFFOlxcXFxoWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIUU6XFxcXGhYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcc3R5bGVQb3N0TG9hZGVyLmpzIUU6XFxcXGhYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyFFOlxcXFxoWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUU6XFxcXGhYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTAtMSFFOlxcXFxoWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFFOlxcXFxoWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxcXFxkaXN0XFxcXGxvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCFFOlxcXFxoWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTEhRTpcXFxcaFhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcY3NzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiFFOlxcXFxoWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFFOlxcXFxoWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhRTpcXFxcaFhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFFOlxcXFxoWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0wLTEhRTpcXFxcaFhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9