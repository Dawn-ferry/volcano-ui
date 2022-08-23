(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["volcano-ui"] = factory(require("vue"));
	else
		root["volcano-ui"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "3c96":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6858":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "85ee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0d3536e6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6858");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0d3536e6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0d3536e6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "a161":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a9c1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "db95":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dc0d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_39457502_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a9c1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_39457502_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_39457502_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "reCard", function() { return /* reexport */ card; });
__webpack_require__.d(__webpack_exports__, "reButton", function() { return /* reexport */ packages_button; });
__webpack_require__.d(__webpack_exports__, "reInput", function() { return /* reexport */ input; });
__webpack_require__.d(__webpack_exports__, "install", function() { return /* reexport */ install; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2dff506d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/card/src/index.vue?vue&type=template&id=17e6a116&scoped=true&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"reCard",style:(_vm.width ? {width:_vm.width +'px'}:{})},[_c('div',{staticClass:"reCard-img",style:(_vm.imgHeight?{height:_vm.imgHeight +'px'}:{})},[_c('img',{attrs:{"src":_vm.imgSrc? _vm.imgSrc: '',"alt":"img"}})]),_c('div',{staticClass:"reCard-summary ellipsis-2"},[(_vm.summary)?[_vm._v(_vm._s(_vm.summary))]:[_vm._t("default")]],2),_vm._t("footer")],2)
}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/card/src/index.vue?vue&type=template&id=17e6a116&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/card/src/index.vue?vue&type=script&lang=js&
/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: "reCard",
  props: {
    width: {
      type: Number,
      default: 0
    },
    imgSrc: {
      type: String,
      default: ""
    },
    imgHeight: {
      type: Number,
      default: 0
    },
    summary: {
      type: String,
      default: ""
    },
    footer: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      imgSrc2: ""
    };
  }

});
// CONCATENATED MODULE: ./packages/card/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/card/src/index.vue?vue&type=style&index=0&id=17e6a116&prod&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_17e6a116_prod_lang_scss_scoped_true_ = __webpack_require__("fcd2");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/card/src/index.vue






/* normalize component */

var component = normalizeComponent(
  card_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "17e6a116",
  null
  
)

/* harmony default export */ var card_src = (component.exports);
// CONCATENATED MODULE: ./packages/card/index.js


card_src.install = function (Vue) {
  Vue.component(card_src.name, card_src);
};

/* harmony default export */ var card = (card_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2dff506d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/index.vue?vue&type=template&id=0d3536e6&scoped=true&
var srcvue_type_template_id_0d3536e6_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('button',{staticClass:"re-button",class:[`re-button--${_vm.type}`, {
  'is-plain': _vm.plain,
  'is-round': _vm.round,
  'is-circle': _vm.circle,
  'is-disabled': _vm.disabled
  }],attrs:{"disabled":_vm.disabled},on:{"click":_vm.handleClick}},[(_vm.icon)?_c('i',{class:_vm.icon}):_vm._e(),(_vm.$slots.default)?_c('span',[_vm._t("default")],2):_vm._e()])
}
var srcvue_type_template_id_0d3536e6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/button/src/index.vue?vue&type=template&id=0d3536e6&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/index.vue?vue&type=script&lang=js&
/* harmony default export */ var button_srcvue_type_script_lang_js_ = ({
  name: "reButton",
  // 封装一个通用的组件，会对props做一个约束，props进行校验
  props: {
    type: {
      // 数据类型： 字符串
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  mounted() {
    console.log("round", this.round);
    console.log("circle", this.circle);
    console.log("disabled", this.disabled);
  },

  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }

  }
});
// CONCATENATED MODULE: ./packages/button/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_button_srcvue_type_script_lang_js_ = (button_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/button/src/index.vue?vue&type=style&index=0&id=0d3536e6&prod&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_0d3536e6_prod_lang_scss_scoped_true_ = __webpack_require__("85ee");

// CONCATENATED MODULE: ./packages/button/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  packages_button_srcvue_type_script_lang_js_,
  srcvue_type_template_id_0d3536e6_scoped_true_render,
  srcvue_type_template_id_0d3536e6_scoped_true_staticRenderFns,
  false,
  null,
  "0d3536e6",
  null
  
)

/* harmony default export */ var button_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/button/index.js


button_src.install = function (Vue) {
  Vue.component(button_src.name, button_src);
};

/* harmony default export */ var packages_button = (button_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2dff506d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/index.vue?vue&type=template&id=39457502&scoped=true&
var srcvue_type_template_id_39457502_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"re-input",class:{'re-input--suffix': _vm.showSuffix}},[_c('input',{staticClass:"re-input__inner",class:{'is-disabled': _vm.disabled},attrs:{"placeholder":_vm.placeholder,"type":_vm.showPassword ? (_vm.passwordVisible ? 'text':'password') : _vm.type,"name":_vm.name,"disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"input":_vm.handleInput}}),(_vm.showSuffix)?_c('span',{staticClass:"re-input__suffix"},[(_vm.clearable && _vm.value)?_c('i',{staticClass:"re-input__icon re-icon-circle-close",on:{"click":_vm.clear}}):_vm._e(),(_vm.showPassword)?_c('i',{staticClass:"re-input__icon re-icon-view",class:{'re-icon-view-active':_vm.passwordVisible},on:{"click":_vm.handlePassword}}):_vm._e()]):_vm._e()])
}
var srcvue_type_template_id_39457502_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/input/src/index.vue?vue&type=template&id=39457502&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/index.vue?vue&type=script&lang=js&
/* harmony default export */ var input_srcvue_type_script_lang_js_ = ({
  name: "reInput",

  data() {
    return {
      // 用于控制是否显示密码框
      passwordVisible: false
    };
  },

  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    }

  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },

    clear() {
      // 把内容清空
      this.$emit("input", "");
    },

    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    }

  }
});
// CONCATENATED MODULE: ./packages/input/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_input_srcvue_type_script_lang_js_ = (input_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/input/src/index.vue?vue&type=style&index=0&id=39457502&prod&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_39457502_prod_lang_scss_scoped_true_ = __webpack_require__("dc0d");

// CONCATENATED MODULE: ./packages/input/src/index.vue






/* normalize component */

var input_src_component = normalizeComponent(
  packages_input_srcvue_type_script_lang_js_,
  srcvue_type_template_id_39457502_scoped_true_render,
  srcvue_type_template_id_39457502_scoped_true_staticRenderFns,
  false,
  null,
  "39457502",
  null
  
)

/* harmony default export */ var input_src = (input_src_component.exports);
// CONCATENATED MODULE: ./packages/input/index.js


input_src.install = function (Vue) {
  Vue.component(input_src.name, input_src);
};

/* harmony default export */ var input = (input_src);
// EXTERNAL MODULE: ./packages/style/common.scss
var common = __webpack_require__("3c96");

// EXTERNAL MODULE: ./packages/fonts/font.scss
var font = __webpack_require__("a161");

// CONCATENATED MODULE: ./packages/index.js






const coms = [card, packages_button, input];

const install = function () {
  coms.forEach(com => {
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component(com.name, com);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const VolcanoUI = {
  reCard: card,
  reButton: packages_button,
  reInput: input,
  install
};
/* harmony default export */ var packages_0 = (VolcanoUI); //按需加载


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "fcd2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_17e6a116_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("db95");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_17e6a116_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_17e6a116_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

/******/ });
});
//# sourceMappingURL=volcano-ui.umd.js.map