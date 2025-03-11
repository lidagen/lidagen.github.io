(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"8c2f02a4-vue-loader-template\"}!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader/index.js?!./docs/collection/Propagation.md?vue&type=template&id=b69194bc":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"8c2f02a4-vue-loader-template"}!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/collection/Propagation.md?vue&type=template&id=b69194bc ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('h2',{attrs:{"id":"事务的传播机制"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#事务的传播机制"}},[_vm._v("#")]),_vm._v(" 事务的传播机制")]),_vm._v(" "),_c('h3',{attrs:{"id":"什么是事务"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#什么是事务"}},[_vm._v("#")]),_vm._v(" 什么是事务")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("事务是程序中一系列严密的操作，所有操作执行必须成功完成，否则在每个操作所做的更改将会被撤销，这也是事务的原子性（要么成功，要么失败）。")]),_vm._v(" "),_c('li',[_vm._v("数据库向用户提供保存当前程序状态的方法，叫事务提交（commit）；当事务执行过程中，使数据库忽略当前的状态并回到前面保存的状态的方法叫事务回滚（rollback）")])]),_vm._v(" "),_c('h3',{attrs:{"id":"事务的传播机制-2"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#事务的传播机制-2"}},[_vm._v("#")]),_vm._v(" 事务的传播机制")]),_vm._v(" "),_c('ul',[_c('li',[_c('p',[_vm._v("事务属性通常由事务的传播行为，事务的隔离级别，事务的超时值和事务只读标志组成。我们在进行事务划分时，需要进行事务定义，也就是配置事务的属性。")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("spring在TransactionDefinition接口中定义了七个事务传播行为"),_c('code',[_vm._v("Propagation")]),_vm._v("：")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("REQUIRED  _如果当前没有事务，就新建一个事务，如果已存在一个事务中，加入到这个事务中，这是最常见的选择。")]),_vm._v(" "),_c('li',[_vm._v("SUPPORTS _支持当前事务，如果没有当前事务，就以非事务方法执行")]),_vm._v(" "),_c('li',[_vm._v("MANDATORY _使用当前事务，如果没有当前事务，就抛出异常。")]),_vm._v(" "),_c('li',[_vm._v("REQUIRES_NEW _新建事务，如果当前存在事务，把当前事务挂起")]),_vm._v(" "),_c('li',[_vm._v("NOT_SUPPORTED _以非事务方式执行操作，如果当前存在事务，就把当前事务挂起。")]),_vm._v(" "),_c('li',[_vm._v("NEVER _以非事务方式执行操作，如果当前事务存在则抛出异常。")]),_vm._v(" "),_c('li',[_vm._v("NESTED _如果当前存在事务，则在嵌套事务内执行。如果当前没有事务，则执行与propagation_required类似的操作")])]),_vm._v(" "),_c('div',{staticClass:"custom-block tip"},[_c('p',{staticClass:"custom-block-title"},[_vm._v("TIP")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("使用PROPAGATION_REQUIRES_NEW,需要使用JtaTransactionManager作为事务管理器。")]),_vm._v(" "),_c('li',[_vm._v("PROPAGATION_NOT_SUPPORTED,也需要使用JtaTransactionManager作为事务管理器")])])])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./docs/collection/Propagation.md":
/*!****************************************!*\
  !*** ./docs/collection/Propagation.md ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Propagation_md_vue_type_template_id_b69194bc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Propagation.md?vue&type=template&id=b69194bc */ "./docs/collection/Propagation.md?vue&type=template&id=b69194bc");
/* harmony import */ var _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Propagation_md_vue_type_template_id_b69194bc__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Propagation_md_vue_type_template_id_b69194bc__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./docs/collection/Propagation.md?vue&type=template&id=b69194bc":
/*!**********************************************************************!*\
  !*** ./docs/collection/Propagation.md?vue&type=template&id=b69194bc ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_cacheDirectory_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_markdown_loader_index_js_ref_1_2_Propagation_md_vue_type_template_id_b69194bc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"8c2f02a4-vue-loader-template"}!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader??ref--1-2!./Propagation.md?vue&type=template&id=b69194bc */ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"8c2f02a4-vue-loader-template\"}!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader/index.js?!./docs/collection/Propagation.md?vue&type=template&id=b69194bc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_cacheDirectory_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_markdown_loader_index_js_ref_1_2_Propagation_md_vue_type_template_id_b69194bc__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_cacheDirectory_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_markdown_loader_index_js_ref_1_2_Propagation_md_vue_type_template_id_b69194bc__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=40.22ca848c.js.map