(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/babel-loader/lib/index.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!./docs/.vuepress/components/Valine.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--3-0!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/babel-loader/lib??ref--3-1!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--0-0!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib??vue-loader-options!./docs/.vuepress/components/Valine.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Valine',
  mounted: function () {
    // require window
    const Valine = __webpack_require__(/*! valine */ "./node_modules/valine/dist/Valine.min.js");
    if (typeof window !== 'undefined') {
      document.getElementsByClassName('leancloud-visitors')[0].id = window.location.pathname;
      this.window = window;
      window.AV = __webpack_require__(/*! leancloud-storage */ "./node_modules/leancloud-storage/dist/av-min.js");
    }
    new Valine({
      el: '#vcomments',
      appId: '7NH2PLO53TC3kyvSVOozT5Aa-gzGzoHsz',
      // your appId
      appKey: '1NI0txiFgQbHkvdsNFtxxH92',
      // your appKey
      notify: false,
      verify: false,
      path: window.location.pathname,
      visitor: true,
      avatar: 'mm',
      placeholder: 'write here'
    });
  }
});

/***/ }),

/***/ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"8c2f02a4-vue-loader-template\"}!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!./docs/.vuepress/components/Valine.vue?vue&type=template&id=3bb5cc02":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"8c2f02a4-vue-loader-template"}!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--0-0!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib??vue-loader-options!./docs/.vuepress/components/Valine.vue?vue&type=template&id=3bb5cc02 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticStyle:{"border-top":"2px solid #eaecef","padding-top":"1rem","margin-top":"2rem"}},[_c('div',[_c('span',{staticClass:"leancloud-visitors",attrs:{"data-flag-title":"Your Article Title"}},[_c('em',{staticClass:"post-meta-item-text"},[_vm._v("阅读量： ")]),_vm._v(" "),_c('i',{staticClass:"leancloud-visitors-count"})])]),_vm._v(" "),_c('h3',[_c('a',{attrs:{"href":"javascript:;"}}),_vm._v("\n    评 论：\n  ")]),_vm._v(" "),_c('div',{attrs:{"id":"vcomments"}})])}]



/***/ }),

/***/ "./docs/.vuepress/components/Valine.vue":
/*!**********************************************!*\
  !*** ./docs/.vuepress/components/Valine.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Valine_vue_vue_type_template_id_3bb5cc02__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Valine.vue?vue&type=template&id=3bb5cc02 */ "./docs/.vuepress/components/Valine.vue?vue&type=template&id=3bb5cc02");
/* harmony import */ var _Valine_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Valine.vue?vue&type=script&lang=js */ "./docs/.vuepress/components/Valine.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Valine_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Valine_vue_vue_type_template_id_3bb5cc02__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Valine_vue_vue_type_template_id_3bb5cc02__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./docs/.vuepress/components/Valine.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./docs/.vuepress/components/Valine.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_3_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_babel_loader_lib_index_js_ref_3_1_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_vue_loader_options_Valine_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/babel-loader/lib??ref--3-1!../../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib??vue-loader-options!./Valine.vue?vue&type=script&lang=js */ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/babel-loader/lib/index.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!./docs/.vuepress/components/Valine.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_3_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_babel_loader_lib_index_js_ref_3_1_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_vue_loader_options_Valine_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./docs/.vuepress/components/Valine.vue?vue&type=template&id=3bb5cc02":
/*!****************************************************************************!*\
  !*** ./docs/.vuepress/components/Valine.vue?vue&type=template&id=3bb5cc02 ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_cacheDirectory_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_vue_loader_options_Valine_vue_vue_type_template_id_3bb5cc02__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"8c2f02a4-vue-loader-template"}!../../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib??vue-loader-options!./Valine.vue?vue&type=template&id=3bb5cc02 */ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"8c2f02a4-vue-loader-template\"}!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!./docs/.vuepress/components/Valine.vue?vue&type=template&id=3bb5cc02");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_cacheDirectory_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_vue_loader_options_Valine_vue_vue_type_template_id_3bb5cc02__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_cacheDirectory_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_vue_loader_options_Valine_vue_vue_type_template_id_3bb5cc02__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=20.2bc21ea8.js.map