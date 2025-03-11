(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"8c2f02a4-vue-loader-template\"}!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader/index.js?!./docs/collection/classloader.md?vue&type=template&id=5fe893d4":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"8c2f02a4-vue-loader-template"}!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!/home/wangs/.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader??ref--1-2!./docs/collection/classloader.md?vue&type=template&id=5fe893d4 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('h2',{attrs:{"id":"java-类加载"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#java-类加载"}},[_vm._v("#")]),_vm._v(" Java 类加载")]),_vm._v(" "),_c('h3',{attrs:{"id":"概述"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#概述"}},[_vm._v("#")]),_vm._v(" 概述")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("每个编写的"),_c('code',[_vm._v(".java")]),_vm._v("文件都存储着需要执行的程序逻辑。这些"),_c('code',[_vm._v(".java")]),_vm._v("文件经过编译后变成拓展名为"),_c('code',[_vm._v(".class")]),_vm._v("的虚拟机能执行的指令文件。当需要执行某个类时，虚拟机会加载"),_c('code',[_vm._v(".calss")]),_vm._v("文件，并创建对应的class对象，将class文件加载进内存中，这个过程称为类加载过程。")])]),_vm._v(" "),_c('h3',{attrs:{"id":"类加载过程"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#类加载过程"}},[_vm._v("#")]),_vm._v(" 类加载过程")]),_vm._v(" "),_c('h4',{attrs:{"id":"jvm将类加载的过程分为三个步骤-装载-load-链接-link-初始化-initialize"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#jvm将类加载的过程分为三个步骤-装载-load-链接-link-初始化-initialize"}},[_vm._v("#")]),_vm._v(" JVM将类加载的过程分为三个步骤："),_c('code',[_vm._v("装载 Load")]),_vm._v(" "),_c('code',[_vm._v("链接 Link")]),_vm._v(" "),_c('code',[_vm._v("初始化 Initialize")])]),_vm._v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_vm._v("装载")]),_vm._v(" :通过一个类的完全限定查找此类字节码文件，并利用字节码文件创建一个Class对象")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("链接")]),_vm._v(" :")]),_vm._v(" "),_c('ul',[_c('li',[_c('p',[_c('code',[_vm._v("验证")]),_vm._v(" : 目的在于确保Class文件的字节流中包含信息符合当前虚拟机要求，不会危害虚拟机自身安全。主要包括四种验证，文件格式验证，元数据验证，字节码验证，符号引用验证。")])]),_vm._v(" "),_c('li',[_c('p',[_c('code',[_vm._v("准备")]),_vm._v(" : 为类变量(即static修饰的字段变量)分配内存并且设置该类变量的初始值即0(如static int i=5;这里只将i初始化为0，至于5的值将在初始化时赋值)，这里不包含用final修饰的static，因为final在编译的时候就会分配了，注意这里不会为实例变量分配初始化，类变量会分配在方法区中，而实例变量是会随着对象一起分配到Java堆中。")])]),_vm._v(" "),_c('li',[_c('p',[_c('code',[_vm._v("解析")]),_vm._v(" : 主要将常量池中的符号引用替换为直接引用的过程。符号引用就是一组符号来描述目标，可以是任何字面量，而直接引用就是直接指向目标的指针、相对偏移量或一个间接定位到目标的句柄。有类或接口的解析，字段解析，类方法解析，接口方法解析(这里涉及到字节码变量的引用，如需更详细了解，可参考《深入Java虚拟机》)。")])])])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("初始化")]),_vm._v(" :类加载最后阶段，若该类具有超(父)类，则对其进行初始化，执行静态初始化器和静态初始化成员变量(如前面只初始化了默认值的static变量将会在这个阶段赋值，成员变量也将被初始化)。")])])]),_vm._v(" "),_c('h3',{attrs:{"id":"类的初始化"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#类的初始化"}},[_vm._v("#")]),_vm._v(" 类的初始化")]),_vm._v(" "),_c('h4',{attrs:{"id":"_6种情况下类会被初始化"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#_6种情况下类会被初始化"}},[_vm._v("#")]),_vm._v(" 6种情况下类会被初始化")]),_vm._v(" "),_c('ul',[_c('li',[_c('p',[_vm._v("创建类的实例时。（new 对象）")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("访问某个类或者接口的静态变量，或对静态变量赋值")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("调用类的静态方法")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("反射（Class.forName(com.test.+.ReflectDemo)）")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("初始化一个类的子类")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("JVM启动时标明的启动类，即文件名和类名相同的那个类")])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./docs/collection/classloader.md":
/*!****************************************!*\
  !*** ./docs/collection/classloader.md ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classloader_md_vue_type_template_id_5fe893d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classloader.md?vue&type=template&id=5fe893d4 */ "./docs/collection/classloader.md?vue&type=template&id=5fe893d4");
/* harmony import */ var _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _classloader_md_vue_type_template_id_5fe893d4__WEBPACK_IMPORTED_MODULE_0__["render"],
  _classloader_md_vue_type_template_id_5fe893d4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./docs/collection/classloader.md?vue&type=template&id=5fe893d4":
/*!**********************************************************************!*\
  !*** ./docs/collection/classloader.md?vue&type=template&id=5fe893d4 ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_cacheDirectory_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_markdown_loader_index_js_ref_1_2_classloader_md_vue_type_template_id_5fe893d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"8c2f02a4-vue-loader-template"}!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!../../../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader??ref--1-2!./classloader.md?vue&type=template&id=5fe893d4 */ "../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"8c2f02a4-vue-loader-template\"}!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!../../../.nvm/versions/node/v20.11.1/lib/node_modules/vuepress/node_modules/@vuepress/markdown-loader/index.js?!./docs/collection/classloader.md?vue&type=template&id=5fe893d4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_cacheDirectory_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_markdown_loader_index_js_ref_1_2_classloader_md_vue_type_template_id_5fe893d4__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_cacheDirectory_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_nvm_versions_node_v20_11_1_lib_node_modules_vuepress_node_modules_vuepress_markdown_loader_index_js_ref_1_2_classloader_md_vue_type_template_id_5fe893d4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=46.d1bb6264.js.map