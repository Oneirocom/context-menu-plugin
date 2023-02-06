/*!
* rete-context-menu-plugin v0.6.0 
* (c) 2023 Vitaliy Stoliarov 
* Released under the MIT license.
*/
function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}

import { debounce, isFunction } from 'lodash-es';
import Vue from 'vue';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function createNode(_x, _x2) {
  return _createNode.apply(this, arguments);
}

function _createNode() {
  _createNode = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(component, _ref) {
    var _ref$data, data, _ref$meta, meta, _ref$x, x, _ref$y, y, node;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$data = _ref.data, data = _ref$data === void 0 ? {} : _ref$data, _ref$meta = _ref.meta, meta = _ref$meta === void 0 ? {} : _ref$meta, _ref$x = _ref.x, x = _ref$x === void 0 ? 0 : _ref$x, _ref$y = _ref.y, y = _ref$y === void 0 ? 0 : _ref$y;
            _context.next = 3;
            return component.createNode(deepCopy(data));

          case 3:
            node = _context.sent;
            node.meta = Object.assign(deepCopy(meta), node.meta);
            node.position[0] = x;
            node.position[1] = y;
            return _context.abrupt("return", node);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createNode.apply(this, arguments);
}

function traverse(items, callback) {
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (_typeof(items) !== 'object') return;
  Object.keys(items).map(function (key) {
    if (typeof items[key] === 'function') callback(key, items[key], path);else traverse(items[key], callback, [].concat(_toConsumableArray(path), [key]));
  });
}
function fitViewport(_ref2, element) {
  var _ref3 = _slicedToArray(_ref2, 2),
      x = _ref3[0],
      y = _ref3[1];

  return [Math.min(x, window.innerWidth - element.clientWidth), Math.min(y, window.innerHeight - element.clientHeight)];
}

var hideMixin = (function (hideMethod) {
  return {
    props: {
      delay: {
        type: Number,
        required: true
      }
    },
    data: function data() {
      return {
        timeoutHide: function timeoutHide() {}
      };
    },
    methods: {
      cancelHide: function cancelHide() {
        var hide = this.timeoutHide;
        if (hide && hide.cancel) this.timeoutHide.cancel();
      }
    },
    mounted: function mounted() {
      this.timeoutHide = debounce(this[hideMethod], this.delay);
    }
  };
});

//
var script = {
  name: 'Item',
  mixins: [hideMixin('hideSubitems')],
  props: {
    item: Object,
    args: Object
  },
  data: function data() {
    return {
      visibleSubitems: false
    };
  },
  computed: {
    hasSubitems: function hasSubitems() {
      return this.item.subitems;
    }
  },
  methods: {
    showSubitems: function showSubitems() {
      this.visibleSubitems = true;
      this.cancelHide();
    },
    hideSubitems: function hideSubitems() {
      this.visibleSubitems = false;
    },
    onClick: function onClick(e) {
      e.stopPropagation();
      if (this.item.onClick) this.item.onClick(this.args);
      this.$root.$emit('hide');
    }
  }
};

/* script */
            const __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "item",
      class: { hasSubitems: _vm.hasSubitems },
      on: {
        click: function($event) {
          _vm.onClick($event);
        },
        mouseover: function($event) {
          _vm.showSubitems();
        },
        mouseleave: function($event) {
          _vm.timeoutHide();
        }
      }
    },
    [
      _vm._v(_vm._s(_vm.item.title)),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.hasSubitems && this.visibleSubitems,
              expression: "hasSubitems && this.visibleSubitems"
            }
          ],
          staticClass: "subitems"
        },
        _vm._l(_vm.item.subitems, function(subitem) {
          return _c("Item", {
            key: subitem.title,
            attrs: { item: subitem, args: _vm.args, delay: _vm.delay }
          })
        })
      )
    ]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-284dba9a_0", { source: "@charset \"UTF-8\";\n.item[data-v-284dba9a], .item .subitems .subitem[data-v-284dba9a] {\n  color: #fff;\n  padding: 4px;\n  border-bottom: 1px solid rgba(69, 103, 255, 0.8);\n  background-color: rgba(110, 136, 255, 0.8);\n  cursor: pointer;\n  width: 100%;\n  position: relative;\n}\n.item[data-v-284dba9a]:first-child, .item .subitems .subitem[data-v-284dba9a]:first-child {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n.item[data-v-284dba9a]:last-child, .item .subitems .subitem[data-v-284dba9a]:last-child {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n.item[data-v-284dba9a]:hover, .item .subitems .subitem[data-v-284dba9a]:hover {\n    background-color: rgba(130, 153, 255, 0.8);\n}\n.hasSubitems.item[data-v-284dba9a]:after, .item .subitems .hasSubitems.subitem[data-v-284dba9a]:after {\n  content: '►';\n  position: absolute;\n  opacity: 0.6;\n  right: 5px;\n  top: 5px;\n}\n.item .subitems[data-v-284dba9a], .item .subitems .subitem .subitems[data-v-284dba9a] {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  width: 120px;\n}\n\n/*# sourceMappingURL=Item.vue.map */", map: {"version":3,"sources":["Item.vue","/Users/parzival/workspace/oneirocom/context-menu-plugin/src/menu/Item.vue"],"names":[],"mappings":"AAAA,gBAAgB;ACyDhB;EDvDE,WAAW;EACX,YAAY;EACZ,gDAAgD;EAChD,0CAA0C;EAC1C,eAAe;EACf,WAAW;EACX,kBAAkB;AAAE;ACiDtB;ID/CI,2BAA2B;IAC3B,4BAA4B;AAAE;AC8ClC;ID5CI,8BAA8B;IAC9B,+BAA+B;AAAE;AC2CrC;IDzCI,0CAA0C;AAAE;AC2ChD;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;AAAA;AAPA;EASA,kBAAA;EACA,MAAA;EACA,UAAA;EACA,YAAA;AAAA;;ADtCA,mCAAmC","file":"Item.vue","sourcesContent":["@charset \"UTF-8\";\n.item, .item .subitems .subitem {\n  color: #fff;\n  padding: 4px;\n  border-bottom: 1px solid rgba(69, 103, 255, 0.8);\n  background-color: rgba(110, 136, 255, 0.8);\n  cursor: pointer;\n  width: 100%;\n  position: relative; }\n  .item:first-child, .item .subitems .subitem:first-child {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n  .item:last-child, .item .subitems .subitem:last-child {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n  .item:hover, .item .subitems .subitem:hover {\n    background-color: rgba(130, 153, 255, 0.8); }\n\n.hasSubitems.item:after, .item .subitems .hasSubitems.subitem:after {\n  content: '►';\n  position: absolute;\n  opacity: 0.6;\n  right: 5px;\n  top: 5px; }\n\n.item .subitems, .item .subitems .subitem .subitems {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  width: 120px; }\n\n/*# sourceMappingURL=Item.vue.map */","<template lang=\"pug\">\n.item(\n  @click=\"onClick($event)\"\n  @mouseover=\"showSubitems()\"\n  @mouseleave=\"timeoutHide()\"\n  :class=\"{ hasSubitems }\"\n) {{item.title}}\n  .subitems(v-show=\"hasSubitems && this.visibleSubitems\")\n    Item(v-for=\"subitem in item.subitems\"\n      :key=\"subitem.title\"\n      :item=\"subitem\"\n      :args=\"args\"\n      :delay=\"delay\"\n      )\n</template>\n\n<script>\nimport hideMixin from './debounceHide'\n\nexport default {\n  name: 'Item',\n  mixins: [hideMixin('hideSubitems')],\n  props: { item: Object, args: Object },\n  data() {\n    return {\n      visibleSubitems: false, \n    }\n  },\n  computed: {\n    hasSubitems() {\n      return this.item.subitems\n    }\n  },\n  methods: {\n    showSubitems() {\n      this.visibleSubitems = true;\n      this.cancelHide();\n    },\n    hideSubitems() {\n      this.visibleSubitems = false;\n    },\n    onClick(e) {\n      e.stopPropagation();\n      \n      if(this.item.onClick)\n        this.item.onClick(this.args);\n      this.$root.$emit('hide');\n    }\n  }\n}\n</script>\n\n\n<style lang=\"sass\" scoped>\n@import '../vars.sass'\n@import '../common.sass'\n\n.item\n  @extend .item\n  &.hasSubitems:after\n    content: '►'\n    position: absolute\n    opacity: 0.6\n    right: 5px\n    top: 5px\n  .subitems\n    position: absolute\n    top: 0\n    left: 100%\n    width: $width\n    .subitem\n      @extend .item\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-284dba9a";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/parzival/workspace/oneirocom/context-menu-plugin/src/menu/Item.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Item = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

//
//
//
//
//
var script$1 = {
  props: ['value', 'search'],
  watch: {
    value: function value() {
      this.$emit('search', this.value);
    }
  }
};

/* script */
            const __vue_script__$1 = script$1;
            
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "search" }, [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.value,
          expression: "value"
        }
      ],
      domProps: { value: _vm.value },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.value = $event.target.value;
        }
      }
    })
  ])
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-3d14cac2_0", { source: ".search input[data-v-3d14cac2] {\n  color: white;\n  padding: 1px 8px;\n  border: 1px solid white;\n  border-radius: 10px;\n  font-size: 16px;\n  font-family: serif;\n  width: 100%;\n  box-sizing: border-box;\n  background: transparent;\n}\n\n/*# sourceMappingURL=Search.vue.map */", map: {"version":3,"sources":["/Users/parzival/workspace/oneirocom/context-menu-plugin/src/menu/Search.vue","Search.vue"],"names":[],"mappings":"AAkBA;EAEA,YAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,WAAA;EACA,sBAAA;EACA,uBAAA;AAAA;;ACjBA,qCAAqC","file":"Search.vue","sourcesContent":["<template lang=\"pug\">\n.search\n  input(v-model=\"value\")\n</template>\n\n<script>\nexport default {\n  props: ['value', 'search'],\n  watch: {\n    value() {\n      this.$emit('search', this.value);\n    }\n  }\n}\n</script>\n\n\n<style lang=\"sass\" scoped>\n.search\n  input    \n    color: white\n    padding: 1px 8px\n    border: 1px solid white\n    border-radius: 10px\n    font-size: 16px\n    font-family: serif\n    width: 100%\n    box-sizing: border-box\n    background: transparent\n</style>\n",".search input {\n  color: white;\n  padding: 1px 8px;\n  border: 1px solid white;\n  border-radius: 10px;\n  font-size: 16px;\n  font-family: serif;\n  width: 100%;\n  box-sizing: border-box;\n  background: transparent; }\n\n/*# sourceMappingURL=Search.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-3d14cac2";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/parzival/workspace/oneirocom/context-menu-plugin/src/menu/Search.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$1() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Search = __vue_normalize__$1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    __vue_create_injector__$1,
    undefined
  );

var script$2 = {
  props: {
    searchBar: Boolean,
    searchKeep: Function
  },
  mixins: [hideMixin('hide')],
  data: function data() {
    return {
      x: 0,
      y: 0,
      visible: false,
      args: {},
      filter: '',
      items: []
    };
  },
  computed: {
    style: function style() {
      return {
        top: this.y + 'px',
        left: this.x + 'px'
      };
    },
    filtered: function filtered() {
      var _this = this;

      if (!this.filter) return this.items;
      var regex = new RegExp(this.filter, 'i');
      return this.extractLeafs(this.items).filter(function (_ref) {
        var title = _ref.title;
        return _this.searchKeep(title) || title.match(regex);
      });
    }
  },
  methods: {
    extractLeafs: function extractLeafs(items) {
      var _this2 = this;

      if (!items) return [];
      var leafs = [];
      items.map(function (item) {
        if (!item.subitems) leafs.push(item);
        leafs.push.apply(leafs, _toConsumableArray(_this2.extractLeafs(item.subitems)));
      });
      return leafs;
    },
    onSearch: function onSearch(e) {
      this.filter = e;
    },
    show: function show(x, y) {
      var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.visible = true;
      this.x = x;
      this.y = y;
      this.args = args;
      this.cancelHide();
    },
    hide: function hide() {
      this.visible = false;
    },
    additem: function additem(title, onClick) {
      var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var items = this.items;

      var _iterator = _createForOfIteratorHelper(path),
          _step;

      try {
        var _loop = function _loop() {
          var level = _step.value;
          var exist = items.find(function (i) {
            return i.title === level;
          });

          if (!exist) {
            exist = {
              title: level,
              subitems: []
            };
            items.push(exist);
          }

          items = exist.subitems || (exist.subitems = []);
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      items.push({
        title: title,
        onClick: onClick
      });
    }
  },
  updated: function updated() {
    if (this.$refs.menu) {
      var _fitViewport = fitViewport([this.x, this.y], this.$refs.menu);

      var _fitViewport2 = _slicedToArray(_fitViewport, 2);

      this.x = _fitViewport2[0];
      this.y = _fitViewport2[1];
    }
  },
  mounted: function mounted() {
    this.$root.$on('show', this.show);
    this.$root.$on('hide', this.hide);
    this.$root.$on('additem', this.additem);
  },
  components: {
    Item: Item,
    Search: Search
  }
};

/* script */
            const __vue_script__$2 = script$2;
            
/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.visible
    ? _c(
        "div",
        {
          ref: "menu",
          staticClass: "context-menu",
          style: _vm.style,
          on: {
            mouseleave: function($event) {
              _vm.timeoutHide();
            },
            mouseover: function($event) {
              _vm.cancelHide();
            },
            contextmenu: function($event) {
              $event.preventDefault();
            },
            wheel: function($event) {
              $event.stopPropagation();
            }
          }
        },
        [
          _vm.searchBar
            ? _c("Search", {
                on: { search: _vm.onSearch },
                model: {
                  value: _vm.filter,
                  callback: function($$v) {
                    _vm.filter = $$v;
                  },
                  expression: "filter"
                }
              })
            : _vm._e(),
          _vm._l(_vm.filtered, function(item) {
            return _c("Item", {
              key: item.title,
              attrs: { item: item, args: _vm.args, delay: _vm.delay / 2 }
            })
          })
        ],
        2
      )
    : _vm._e()
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-2ea9fd28_0", { source: ".item[data-v-2ea9fd28], .context-menu .search[data-v-2ea9fd28] {\n  color: #fff;\n  padding: 4px;\n  border-bottom: 1px solid rgba(69, 103, 255, 0.8);\n  background-color: rgba(110, 136, 255, 0.8);\n  cursor: pointer;\n  width: 100%;\n  position: relative;\n}\n.item[data-v-2ea9fd28]:first-child, .context-menu .search[data-v-2ea9fd28]:first-child {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n.item[data-v-2ea9fd28]:last-child, .context-menu .search[data-v-2ea9fd28]:last-child {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n.item[data-v-2ea9fd28]:hover, .context-menu .search[data-v-2ea9fd28]:hover {\n    background-color: rgba(130, 153, 255, 0.8);\n}\n.context-menu[data-v-2ea9fd28] {\n  left: 0;\n  top: 0;\n  position: fixed;\n  padding: 10px;\n  width: 120px;\n  margin-top: -20px;\n  margin-left: -60px;\n}\n\n/*# sourceMappingURL=Menu.vue.map */", map: {"version":3,"sources":["Menu.vue","/Users/parzival/workspace/oneirocom/context-menu-plugin/src/menu/Menu.vue"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,gDAAgD;EAChD,0CAA0C;EAC1C,eAAe;EACf,WAAW;EACX,kBAAkB;AAAE;AACpB;IACE,2BAA2B;IAC3B,4BAA4B;AAAE;AAChC;IACE,8BAA8B;IAC9B,+BAA+B;AAAE;AACnC;IACE,0CAA0C;AAAE;ACwGhD;EACA,OAAA;EACA,MAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;AAAA;;ADpGA,mCAAmC","file":"Menu.vue","sourcesContent":[".item, .context-menu .search {\n  color: #fff;\n  padding: 4px;\n  border-bottom: 1px solid rgba(69, 103, 255, 0.8);\n  background-color: rgba(110, 136, 255, 0.8);\n  cursor: pointer;\n  width: 100%;\n  position: relative; }\n  .item:first-child, .context-menu .search:first-child {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n  .item:last-child, .context-menu .search:last-child {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n  .item:hover, .context-menu .search:hover {\n    background-color: rgba(130, 153, 255, 0.8); }\n\n.context-menu {\n  left: 0;\n  top: 0;\n  position: fixed;\n  padding: 10px;\n  width: 120px;\n  margin-top: -20px;\n  margin-left: -60px; }\n\n/*# sourceMappingURL=Menu.vue.map */","<template lang=\"pug\">\n.context-menu(\n  ref=\"menu\"\n  v-if=\"visible\"\n  v-bind:style=\"style\",\n  @mouseleave='timeoutHide()',\n  @mouseover=\"cancelHide()\"\n  @contextmenu.prevent=\"\"\n  @wheel.stop=\"\"\n)\n  Search(v-if=\"searchBar\", v-model=\"filter\", @search=\"onSearch\")\n  Item(v-for='item in filtered'\n    :key=\"item.title\"\n    :item=\"item\"\n    :args=\"args\"\n    :delay=\"delay / 2\"\n  )\n</template>\n\n<script>\nimport hideMixin from './debounceHide'\nimport Item from './Item.vue';\nimport Search from './Search.vue';\nimport { fitViewport } from '../utils';\n\nexport default {\n  props: { searchBar: Boolean, searchKeep: Function },\n  mixins: [hideMixin('hide')],\n  data() {\n    return {\n      x: 0,\n      y: 0,\n      visible: false,\n      args: {},\n      filter: '',\n      items: [],\n    }\n  },\n  computed: {\n    style() {\n      return {\n        top: this.y+'px', \n        left: this.x+'px'\n      }\n    },\n    filtered() {\n      if(!this.filter) return this.items;\n      const regex = new RegExp(this.filter, 'i');\n      \n      return this.extractLeafs(this.items)\n        .filter(({ title }) => {\n          return this.searchKeep(title) || title.match(regex)\n        });\n    }\n  },\n  methods: {\n    extractLeafs(items) {\n      if(!items) return [];\n      let leafs = [];\n      items.map(item => {\n        if(!item.subitems) leafs.push(item)\n\n        leafs.push(...this.extractLeafs(item.subitems))\n      })\n\n      return leafs;\n    },\n    onSearch(e) {\n      this.filter = e;\n    },\n    show(x, y, args = {}) {\n      this.visible = true;\n      this.x = x;\n      this.y = y;\n      this.args = args;\n  \n      this.cancelHide();\n    },\n    hide() {\n      this.visible = false;\n    },\n    additem(title, onClick, path = []) {\n      let items = this.items;\n      for(let level of path) {\n        let exist = items.find(i => i.title === level);\n\n        if(!exist) {\n          exist = { title: level, subitems: [] };\n          items.push(exist)\n        }\n\n        items = exist.subitems || (exist.subitems = []);\n      }\n\n      items.push({ title, onClick });\n    },\n  },\n  updated() {\n    if(this.$refs.menu) {\n      [this.x, this.y] = fitViewport([this.x, this.y], this.$refs.menu)\n    } \n  },\n  mounted() {\n    this.$root.$on('show', this.show);\n    this.$root.$on('hide', this.hide);\n    this.$root.$on('additem', this.additem);\n  },\n  components: {\n    Item,\n    Search\n  }\n}\n</script>\n\n\n<style lang=\"sass\" scoped>\n@import '../vars.sass'\n@import '../common.sass'\n\n.context-menu\n  left: 0\n  top: 0\n  position: fixed\n  padding: 10px\n  width: $width\n  margin-top: -20px\n  margin-left: -$width/2\n  .search\n    @extend .item\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = "data-v-2ea9fd28";
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* component normalizer */
  function __vue_normalize__$2(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/parzival/workspace/oneirocom/context-menu-plugin/src/menu/Menu.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$2() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$2.styles || (__vue_create_injector__$2.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Menu = __vue_normalize__$2(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    __vue_create_injector__$2,
    undefined
  );

var _default = /*#__PURE__*/function () {
  function _default(editor, props, vueComponent) {
    _classCallCheck(this, _default);

    var el = document.createElement('div');
    editor.view.container.appendChild(el);
    this.menu = new Vue({
      render: function render(h) {
        return h(vueComponent || Menu, {
          props: props
        });
      }
    }).$mount(el);
  }

  _createClass(_default, [{
    key: "addItem",
    value: function addItem() {
      var _this$menu;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_this$menu = this.menu).$emit.apply(_this$menu, ['additem'].concat(args));
    }
  }, {
    key: "show",
    value: function show() {
      var _this$menu2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      (_this$menu2 = this.menu).$emit.apply(_this$menu2, ['show'].concat(args));
    }
  }, {
    key: "hide",
    value: function hide() {
      this.menu.$emit('hide');
    }
  }]);

  return _default;
}();

var MainMenu = /*#__PURE__*/function (_Menu) {
  _inherits(MainMenu, _Menu);

  var _super = _createSuper(MainMenu);

  function MainMenu(editor, props, vueComponent, _ref) {
    var _this;

    var items = _ref.items,
        allocate = _ref.allocate,
        rename = _ref.rename;

    _classCallCheck(this, MainMenu);

    _this = _super.call(this, editor, props, vueComponent);
    var initialPosition = {
      x: editor.view.area.mouse.x,
      y: editor.view.area.mouse.y
    };
    console.log("INITIAL POSITION", initialPosition);

    var _iterator = _createForOfIteratorHelper(editor.components.values()),
        _step;

    try {
      var _loop = function _loop() {
        var component = _step.value;
        var path = allocate(component);

        if (Array.isArray(path)) {
          // add to the menu if path is array
          _this.addItem(rename(component), /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.t0 = editor;
                    _context.next = 3;
                    return createNode(component, initialPosition);

                  case 3:
                    _context.t1 = _context.sent;

                    _context.t0.addNode.call(_context.t0, _context.t1);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          })), path);
        }
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    traverse(items, function (name, func, path) {
      return _this.addItem(name, func, path);
    });
    return _this;
  }

  return MainMenu;
}(_default);

var _excluded = ["name", "position"];

var NodeMenu = /*#__PURE__*/function (_Menu) {
  _inherits(NodeMenu, _Menu);

  var _super = _createSuper(NodeMenu);

  function NodeMenu(editor, props, vueComponent, nodeItems) {
    var _this;

    _classCallCheck(this, NodeMenu);

    _this = _super.call(this, editor, props, vueComponent);

    if (nodeItems['Delete'] !== false) {
      _this.addItem('Delete', function (_ref) {
        var node = _ref.node;

        if (editor.selected.list.indexOf(node) !== -1) {
          editor.selected.remove(node);
        }

        editor.removeNode(node);
      });
    }

    if (nodeItems['Clone'] !== false) {
      _this.addItem('Clone', /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args) {
          var _args$node, name, _args$node$position, x, y, params, component, node;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _args$node = args.node, name = _args$node.name, _args$node$position = _slicedToArray(_args$node.position, 2), x = _args$node$position[0], y = _args$node$position[1], params = _objectWithoutProperties(_args$node, _excluded);
                  component = editor.components.get(name);
                  _context.next = 4;
                  return createNode(component, _objectSpread2(_objectSpread2({}, params), {}, {
                    x: x + 10,
                    y: y + 10
                  }));

                case 4:
                  node = _context.sent;
                  editor.addNode(node);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    }

    traverse(nodeItems, function (name, func, path) {
      return _this.addItem(name, func, path);
    });
    return _this;
  }

  return NodeMenu;
}(_default);

console.log("LOADED CONTEXT MENU");

function install(editor, _ref) {
  var _ref$searchBar = _ref.searchBar,
      searchBar = _ref$searchBar === void 0 ? true : _ref$searchBar,
      _ref$searchKeep = _ref.searchKeep,
      searchKeep = _ref$searchKeep === void 0 ? function () {
    return false;
  } : _ref$searchKeep,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 1000 : _ref$delay,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? {} : _ref$items,
      _ref$nodeItems = _ref.nodeItems,
      nodeItems = _ref$nodeItems === void 0 ? {} : _ref$nodeItems,
      _ref$allocate = _ref.allocate,
      allocate = _ref$allocate === void 0 ? function () {
    return [];
  } : _ref$allocate,
      _ref$rename = _ref.rename,
      rename = _ref$rename === void 0 ? function (component) {
    return component.name;
  } : _ref$rename,
      _ref$vueComponent = _ref.vueComponent,
      vueComponent = _ref$vueComponent === void 0 ? null : _ref$vueComponent;
  editor.bind("hidecontextmenu");
  editor.bind("showcontextmenu");
  var menu = null;
  editor.on("hidecontextmenu", function () {
    if (menu) menu.hide();
  });
  editor.on("click contextmenu", function () {
    editor.trigger("hidecontextmenu");
  });
  editor.on("contextmenu", function (_ref2) {
    var e = _ref2.e,
        node = _ref2.node;
    e.preventDefault();
    e.stopPropagation();
    console.log("CONTEXT MENU", e, node);
    if (!editor.trigger("showcontextmenu", {
      e: e,
      node: node
    })) return;
    var _ref3 = [e.clientX, e.clientY],
        x = _ref3[0],
        y = _ref3[1];

    if (node) {
      menu = new NodeMenu(editor, {
        searchBar: false,
        delay: delay
      }, vueComponent, isFunction(nodeItems) ? nodeItems(node) : nodeItems);
      menu.show(x, y, {
        node: node
      });
    } else {
      menu = new MainMenu(editor, {
        searchBar: searchBar,
        searchKeep: searchKeep,
        delay: delay
      }, vueComponent, {
        items: items,
        allocate: allocate,
        rename: rename
      }, {
        x: x,
        y: y
      });
      menu.show(x, y);
    }
  });
}

var Menu$1 = Menu;
var Item$1 = Item;
var Search$1 = Search;
var index = {
  name: "context-menu",
  install: install
};

export default index;
export { Menu$1 as Menu, Item$1 as Item, Search$1 as Search };
//# sourceMappingURL=context-menu-plugin.esm.js.map
