(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[144],{

/***/ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"8c2f02a4-vue-loader-template\"}!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader/index.js?!./docs/rabbitmq/rb3.md?vue&type=template&id=2ff0cc7f":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"8c2f02a4-vue-loader-template"}!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/rabbitmq/rb3.md?vue&type=template&id=2ff0cc7f ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('h2',{attrs:{"id":"rabbitmq-集群"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#rabbitmq-集群"}},[_vm._v("#")]),_vm._v(" RabbitMQ 集群")]),_vm._v(" "),_c('h3',{attrs:{"id":"集群方案原理"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#集群方案原理"}},[_vm._v("#")]),_vm._v(" 集群方案原理")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("RabbitMQ消息中间件本身是基于Erlang编写，Erlang语言天生具备分布式特性（通过同步Erlang集群各节点magic cookie来实现）。因此，RabbitMQ天然支持Clustering,这使得RabbitMQ不需要想ActiveMQ\\Kafka那样通过ZooKeeper来实现HA方案和保存集群元数据。集群是保证可靠性的一种方式，同时可以通过水平扩展达到增加消息吞吐能力的目的。")])]),_vm._v(" "),_c('h3',{attrs:{"id":"镜像模式"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#镜像模式"}},[_vm._v("#")]),_vm._v(" 镜像模式")]),_vm._v(" "),_c('ul',[_c('li',[_c('p',[_vm._v("镜像模式：集群模式非常经典的就是Mirror镜像模式，保证100%数据不丢失，在实际工作中用的最多的。并且实现集群非常的简单，一般互联网大厂都会构建这种镜像集群模式。")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("Mirror镜像队列，目的是为了保证rabbitmq数据的高可靠性解决方案，主要就是实现数据的同步，一般来讲是2-3个实现数据同步（对于100%数据可靠性解决方案一般是3个节点）集群架构如下")])])]),_vm._v(" "),_c('img',{attrs:{"src":_vm.$withBase('/mq/7.png'),"alt":"dock"}}),_vm._v(" "),_c('h3',{attrs:{"id":"haproxy"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#haproxy"}},[_vm._v("#")]),_vm._v(" HAProxy")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("HA Proxy是一个提供高可用性，负载均衡以及基于TCP和HTTP应用代理，支持虚拟主机。HAProxy实现了事件驱动，单一进程模型，此模型支持非常大的连接数")])])])}
var staticRenderFns = []



/***/ }),

/***/ "./docs/rabbitmq/rb3.md":
/*!******************************!*\
  !*** ./docs/rabbitmq/rb3.md ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rb3_md_vue_type_template_id_2ff0cc7f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rb3.md?vue&type=template&id=2ff0cc7f */ "./docs/rabbitmq/rb3.md?vue&type=template&id=2ff0cc7f");
/* harmony import */ var _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _rb3_md_vue_type_template_id_2ff0cc7f__WEBPACK_IMPORTED_MODULE_0__["render"],
  _rb3_md_vue_type_template_id_2ff0cc7f__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./docs/rabbitmq/rb3.md?vue&type=template&id=2ff0cc7f":
/*!************************************************************!*\
  !*** ./docs/rabbitmq/rb3.md?vue&type=template&id=2ff0cc7f ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_cacheDirectory_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_markdown_loader_index_js_ref_1_2_rb3_md_vue_type_template_id_2ff0cc7f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"8c2f02a4-vue-loader-template"}!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader??ref--1-2!./rb3.md?vue&type=template&id=2ff0cc7f */ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"8c2f02a4-vue-loader-template\"}!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader/index.js?!./docs/rabbitmq/rb3.md?vue&type=template&id=2ff0cc7f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_cacheDirectory_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_markdown_loader_index_js_ref_1_2_rb3_md_vue_type_template_id_2ff0cc7f__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_cacheDirectory_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_markdown_loader_index_js_ref_1_2_rb3_md_vue_type_template_id_2ff0cc7f__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=144.faa6c1be.js.map