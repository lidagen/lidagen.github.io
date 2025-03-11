(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

/***/ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"8c2f02a4-vue-loader-template\"}!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader/index.js?!./docs/mysql/lock.md?vue&type=template&id=3d33ff24":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"8c2f02a4-vue-loader-template"}!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/mysql/lock.md?vue&type=template&id=3d33ff24 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('h2',{attrs:{"id":"基于mysql-的乐观锁与悲观锁"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#基于mysql-的乐观锁与悲观锁"}},[_vm._v("#")]),_vm._v(" 基于mySql 的乐观锁与悲观锁")]),_vm._v(" "),_c('h3',{attrs:{"id":"概述"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#概述"}},[_vm._v("#")]),_vm._v(" 概述")]),_vm._v(" "),_c('ul',[_c('li',[_c('p',[_vm._v("乐观锁：认为每次拿的数据别人都不会修改，所以不会上锁，只有在更新数据的时候判断一下数据是否修改过。可以使用版本号实现。乐观锁用于读多于写的场景。这个机制可以提高吞吐量。")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("悲观锁：认为每次拿数据的时候都认为别人会修改，所以每次拿数据的时候都会上锁。传统数据库用到很多这种锁机制，比如行锁、表锁、读锁、写锁等。悲观锁是对数据修改持保守态度。一般用于写比较多的情况。")])])]),_vm._v(" "),_c('h3',{attrs:{"id":"实现"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#实现"}},[_vm._v("#")]),_vm._v(" 实现")]),_vm._v(" "),_c('ul',[_c('li',[_c('p',[_vm._v("乐观锁：乐观锁的实现是依赖于建表语句中增加一个int类型的version字段。在每次修改的时候，这个version都会+1，并且where语句条件加上查询到的version版本号，例如："),_c('code',[_vm._v("uptate t_account set amount = #{userAmount,jdbcType=DECIMAL} ,version = version + 1 where id = #{id,jdbcType=INTEGER} and version =#{version,jdbcType=INTEGER}")])])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("悲观锁：悲观锁依赖mysql内部实现，在查询的时候，增加for update语句。获取锁（获取锁的前提：结果集中的数据没有使用排他锁或共享锁时，才能获取锁，否则将会阻塞。），例如："),_c('code',[_vm._v("select * from t_account where id=#{id,jdbcType=INTEGER} for update;")]),_vm._v("MySQL InnoDB 默认为行级锁。当查询语句指定了主键时，MySQL会执行「行级锁」，否则MySQL会执行「表锁」。")])])]),_vm._v(" "),_c('h3',{attrs:{"id":"总结"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#总结"}},[_vm._v("#")]),_vm._v(" 总结")]),_vm._v(" "),_c('ul',[_c('li',[_c('p',[_vm._v("不管悲观锁还是乐观锁，应对的都是update语句。在高并发的情况下，两个线程同时读到这条数据，但是在对数据更新上，A线程修改了数据，而B线程不知，B线程拿着旧的数据做更新，导致了数据不一致。")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("乐观锁的缺陷是只要是更新数据之前，都需要查询一遍该数据，增加数据库的访问次数。增加数据库的访问压力。")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("悲观锁采用的是「先获取锁再访问」的策略，来保障数据的安全。但是加锁策略，依赖数据库实现，会增加数据库的负担，且会增加死锁的发生几率。对于并发很高的场景并不会使用悲观锁，因为当一个事务锁住了数据，那么其他事务都会发生阻塞，会导致大量的事务发生积压拖垮整个系统。")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("mybatis-plus有乐观锁插件，需要运用乐观锁时了解。")])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./docs/mysql/lock.md":
/*!****************************!*\
  !*** ./docs/mysql/lock.md ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lock_md_vue_type_template_id_3d33ff24__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lock.md?vue&type=template&id=3d33ff24 */ "./docs/mysql/lock.md?vue&type=template&id=3d33ff24");
/* harmony import */ var _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _lock_md_vue_type_template_id_3d33ff24__WEBPACK_IMPORTED_MODULE_0__["render"],
  _lock_md_vue_type_template_id_3d33ff24__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./docs/mysql/lock.md?vue&type=template&id=3d33ff24":
/*!**********************************************************!*\
  !*** ./docs/mysql/lock.md?vue&type=template&id=3d33ff24 ***!
  \**********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_cacheDirectory_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_markdown_loader_index_js_ref_1_2_lock_md_vue_type_template_id_3d33ff24__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"8c2f02a4-vue-loader-template"}!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader??ref--1-2!./lock.md?vue&type=template&id=3d33ff24 */ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"8c2f02a4-vue-loader-template\"}!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader/index.js?!./docs/mysql/lock.md?vue&type=template&id=3d33ff24");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_cacheDirectory_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_markdown_loader_index_js_ref_1_2_lock_md_vue_type_template_id_3d33ff24__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_cacheDirectory_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_markdown_loader_index_js_ref_1_2_lock_md_vue_type_template_id_3d33ff24__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=128.7602cfe5.js.map