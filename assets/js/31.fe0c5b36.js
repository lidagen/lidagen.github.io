(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"8c2f02a4-vue-loader-template\"}!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader/index.js?!./docs/build/dockerAliyun.md?vue&type=template&id=7a2863ba":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"8c2f02a4-vue-loader-template"}!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/build/dockerAliyun.md?vue&type=template&id=7a2863ba ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('h3',{attrs:{"id":"配置docker"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#配置docker"}},[_vm._v("#")]),_vm._v(" 配置Docker")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("登录阿里云找到容器镜像服务")]),_vm._v(" "),_c('li',[_vm._v("创建命名空间")]),_vm._v(" "),_c('li',[_vm._v("创建镜像仓库")])]),_vm._v(" "),_c('h3',{attrs:{"id":"配置阿里云镜像加速器"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#配置阿里云镜像加速器"}},[_vm._v("#")]),_vm._v(" 配置阿里云镜像加速器")]),_vm._v(" "),_c('div',{staticClass:"language-sh extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-sh"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("# 宿主机docker修改镜像源")]),_vm._v("\n$ "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("sudo")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("mkdir")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token parameter variable"}},[_vm._v("-p")]),_vm._v(" /etc/docker\n$ "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("sudo")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("tee")]),_vm._v(" /etc/docker/daemon.json "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("<<-")]),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("'EOF'\n{\n  \"registry-mirrors\": [\"https://a8qh6yqv.mirror.aliyuncs.com\"]\n}\nEOF")]),_vm._v("\n$ "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("sudo")]),_vm._v(" systemctl daemon-reload\n$ "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("sudo")]),_vm._v(" systemctl restart "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("docker")]),_vm._v("\n")])])]),_c('h3',{attrs:{"id":"登录仓库"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#登录仓库"}},[_vm._v("#")]),_vm._v(" 登录仓库")]),_vm._v(" "),_c('div',{staticClass:"language-sh extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-sh"}},[_c('code',[_vm._v("$ "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("sudo")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("docker")]),_vm._v(" login "),_c('span',{pre:true,attrs:{"class":"token parameter variable"}},[_vm._v("--username")]),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v("你的阿里云登录帐号 registry.cn-hangzhou.aliyuncs.com\nPassword: "),_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("# aliyun访问凭证中设置密码，不是aliyun登录密码")]),_vm._v("\nLogin Succeeded\n")])])]),_c('h3',{attrs:{"id":"镜像使用"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#镜像使用"}},[_vm._v("#")]),_vm._v(" 镜像使用")]),_vm._v(" "),_c('div',{staticClass:"language-sh extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-sh"}},[_c('code',[_vm._v("$ "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("sudo")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("docker")]),_vm._v(" pull registry.cn-hangzhou.aliyuncs.com/空间名/仓库\n")])])]),_c('h3',{attrs:{"id":"提交镜像"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#提交镜像"}},[_vm._v("#")]),_vm._v(" 提交镜像")]),_vm._v(" "),_c('div',{staticClass:"language-sh extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-sh"}},[_c('code',[_vm._v("$ "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("sudo")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("docker")]),_vm._v(" tag "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("<")]),_vm._v("已存在镜像ID或名称"),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v(">")]),_vm._v(" registry.cn-hangzhou.aliyuncs.com/空间名/仓库\n$ "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("sudo")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("docker")]),_vm._v(" push registry.cn-hangzhou.aliyuncs.com/空间名/仓库\n")])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./docs/build/dockerAliyun.md":
/*!************************************!*\
  !*** ./docs/build/dockerAliyun.md ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dockerAliyun_md_vue_type_template_id_7a2863ba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dockerAliyun.md?vue&type=template&id=7a2863ba */ "./docs/build/dockerAliyun.md?vue&type=template&id=7a2863ba");
/* harmony import */ var _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _dockerAliyun_md_vue_type_template_id_7a2863ba__WEBPACK_IMPORTED_MODULE_0__["render"],
  _dockerAliyun_md_vue_type_template_id_7a2863ba__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./docs/build/dockerAliyun.md?vue&type=template&id=7a2863ba":
/*!******************************************************************!*\
  !*** ./docs/build/dockerAliyun.md?vue&type=template&id=7a2863ba ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_cacheDirectory_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_markdown_loader_index_js_ref_1_2_dockerAliyun_md_vue_type_template_id_7a2863ba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"8c2f02a4-vue-loader-template"}!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader??ref--1-2!./dockerAliyun.md?vue&type=template&id=7a2863ba */ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"8c2f02a4-vue-loader-template\"}!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader/index.js?!./docs/build/dockerAliyun.md?vue&type=template&id=7a2863ba");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_cacheDirectory_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_markdown_loader_index_js_ref_1_2_dockerAliyun_md_vue_type_template_id_7a2863ba__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_cacheDirectory_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_markdown_loader_index_js_ref_1_2_dockerAliyun_md_vue_type_template_id_7a2863ba__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=31.fe0c5b36.js.map