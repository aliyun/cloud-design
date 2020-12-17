import {c as createElement, t as NextIcon, F as createCommonjsModule, a6 as require$$0} from "./index.201274f6.js";
import {N as NextMessage} from "./de743447.js";
import {q as qe} from "./1be0f98b.js";
function DemoComponent() {
  const content = /* @__PURE__ */ createElement("div", null, "button: ", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextIcon, {
    type: "atm",
    role: "button",
    "aria-label": "icon atm",
    style: {margin: "5px"}
  }), /* @__PURE__ */ createElement(NextIcon, {
    type: "smile",
    role: "button",
    "aria-label": "icon smile",
    style: {margin: "5px"}
  }), /* @__PURE__ */ createElement("br", null), "decoration: ", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextIcon, {
    type: "success",
    "aria-hidden": true,
    style: {margin: "5px"}
  }));
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement(NextIcon, {
    type: "atm"
  });
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const sizes = ["xxs", "xs", "small", "medium", "large", "xl", "xxl", "xxxl"];
const CustomIcon = NextIcon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1464085_egnk4s8yv2f.js"
});
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
    className: "icon-list-2"
  }, /* @__PURE__ */ createElement(CustomIcon, {
    type: "icon-store"
  }), /* @__PURE__ */ createElement(CustomIcon, {
    type: "icon-pic"
  }), /* @__PURE__ */ createElement(CustomIcon, {
    type: "icon-gift"
  })), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("ul", {
    className: "icon-sizes"
  }, sizes.map((size, index) => /* @__PURE__ */ createElement("li", {
    key: index
  }, /* @__PURE__ */ createElement(CustomIcon, {
    type: "icon-pic",
    size
  }), /* @__PURE__ */ createElement("span", null, size)))));
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div`
  .icon-list-2 i {
    margin: 0 10px;
  }
  .icon-sizes {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .icon-sizes li {
    display: inline-block;
    width: 80px;
    height: 80px;
  }

  .icon-sizes i {
    display: block;
    margin: 12px auto 0 auto;
    text-align: center;
  }

  .icon-sizes span {
    display: block;
    margin-top: 10px;
    text-align: center;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const sizes$1 = ["xxs", "xs", "small", "medium", "large", "xl", "xxl", "xxxl"];
const inherit = "inherit";
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("ul", {
    className: "icon-sizes"
  }, sizes$1.map((size, index) => /* @__PURE__ */ createElement("li", {
    key: index
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "smile",
    size
  }), /* @__PURE__ */ createElement("span", null, size)))), /* @__PURE__ */ createElement("span", null, inherit), /* @__PURE__ */ createElement("h4", null, "Shall I compare thee to a summer's day?", " ", /* @__PURE__ */ createElement(NextIcon, {
    type: "smile",
    size: inherit
  }), " ", /* @__PURE__ */ createElement(NextIcon, {
    type: "set",
    size: inherit
  })), /* @__PURE__ */ createElement("h3", null, "Thou art more lovely and more temperate.", " ", /* @__PURE__ */ createElement(NextIcon, {
    type: "smile",
    size: inherit
  }), " ", /* @__PURE__ */ createElement(NextIcon, {
    type: "set",
    size: inherit
  })), /* @__PURE__ */ createElement("h2", null, "Rough winds do shake the darling buds of May,", " ", /* @__PURE__ */ createElement(NextIcon, {
    type: "smile",
    size: inherit
  }), " ", /* @__PURE__ */ createElement(NextIcon, {
    type: "set",
    size: inherit
  })), /* @__PURE__ */ createElement("h1", null, "And summer's lease hath all too short a date.", " ", /* @__PURE__ */ createElement(NextIcon, {
    type: "smile",
    size: inherit
  }), " ", /* @__PURE__ */ createElement(NextIcon, {
    type: "set",
    size: inherit
  })));
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = qe.div`
  .icon-sizes {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .icon-sizes li {
    display: inline-block;
    width: 80px;
    height: 80px;
  }

  .icon-sizes i {
    display: block;
    margin: 12px auto 0 auto;
    text-align: center;
  }

  .icon-sizes span {
    display: block;
    margin-top: 10px;
    text-align: center;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
    className: "icon-style-demo"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "success",
    style: {color: "#1DC11D", marginRight: "10px"}
  }), "This is a success message!"), /* @__PURE__ */ createElement("div", {
    className: "icon-style-demo"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "warning",
    style: {color: "#FFA003", marginRight: "10px"}
  }), "This is a warning message!"), /* @__PURE__ */ createElement("div", {
    className: "icon-style-demo"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "error",
    style: {color: "#FF3333", marginRight: "10px"}
  }), "This is a failure message!"));
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = qe.div`
  .icon-style-demo {
    height: 24px;
    line-height: 24px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
var toggleSelection = function() {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function() {
    };
  }
  var active = document.activeElement;
  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }
  switch (active.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      active.blur();
      break;
    default:
      active = null;
      break;
  }
  selection.removeAllRanges();
  return function() {
    selection.type === "Caret" && selection.removeAllRanges();
    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }
    active && active.focus();
  };
};
var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
};
var defaultMessage = "Copy to clipboard: #{key}, Enter";
function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}
function copy(text, options) {
  var debug, message, reselectPrevious, range, selection, mark, success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = toggleSelection();
    range = document.createRange();
    selection = document.getSelection();
    mark = document.createElement("span");
    mark.textContent = text;
    mark.style.all = "unset";
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    mark.style.whiteSpace = "pre";
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") {
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format2, text);
        } else {
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });
    document.body.appendChild(mark);
    range.selectNodeContents(mark);
    selection.addRange(range);
    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err2) {
      debug && console.error("unable to copy using clipboardData: ", err2);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }
    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }
  return success;
}
var copyToClipboard = copy;
var Component = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CopyToClipboard = void 0;
  var _react = _interopRequireDefault(require$$0);
  var _copyToClipboard = _interopRequireDefault(copyToClipboard);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(source, true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
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
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var CopyToClipboard2 = /* @__PURE__ */ function(_React$PureComponent) {
    _inherits(CopyToClipboard3, _React$PureComponent);
    function CopyToClipboard3() {
      var _getPrototypeOf2;
      var _this;
      _classCallCheck(this, CopyToClipboard3);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CopyToClipboard3)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _defineProperty(_assertThisInitialized(_this), "onClick", function(event) {
        var _this$props = _this.props, text = _this$props.text, onCopy = _this$props.onCopy, children = _this$props.children, options = _this$props.options;
        var elem = _react["default"].Children.only(children);
        var result = (0, _copyToClipboard["default"])(text, options);
        if (onCopy) {
          onCopy(text, result);
        }
        if (elem && elem.props && typeof elem.props.onClick === "function") {
          elem.props.onClick(event);
        }
      });
      return _this;
    }
    _createClass(CopyToClipboard3, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props, _text = _this$props2.text, _onCopy = _this$props2.onCopy, _options = _this$props2.options, children = _this$props2.children, props = _objectWithoutProperties(_this$props2, ["text", "onCopy", "options", "children"]);
        var elem = _react["default"].Children.only(children);
        return _react["default"].cloneElement(elem, _objectSpread({}, props, {
          onClick: this.onClick
        }));
      }
    }]);
    return CopyToClipboard3;
  }(_react["default"].PureComponent);
  exports.CopyToClipboard = CopyToClipboard2;
  _defineProperty(CopyToClipboard2, "defaultProps", {
    onCopy: void 0,
    options: void 0
  });
});
var CopyToClipboard = Component.CopyToClipboard;
CopyToClipboard.CopyToClipboard = CopyToClipboard;
var lib = CopyToClipboard;
const types = [
  "smile",
  "cry",
  "success",
  "warning",
  "prompt",
  "error",
  "help",
  "clock",
  "success-filling",
  "delete-filling",
  "favorites-filling",
  "add",
  "minus",
  "arrow-up",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "arrow-double-left",
  "arrow-double-right",
  "switch",
  "sorting",
  "descending",
  "ascending",
  "select",
  "semi-select",
  "loading",
  "search",
  "close",
  "ellipsis",
  "picture",
  "calendar",
  "ashbin",
  "upload",
  "download",
  "set",
  "edit",
  "refresh",
  "filter",
  "attachment",
  "account",
  "email",
  "atm",
  "copy",
  "exit",
  "eye",
  "eye-close",
  "toggle-left",
  "toggle-right",
  "lock",
  "unlock",
  "chart-pie",
  "chart-bar",
  "form",
  "detail",
  "list",
  "dashboard"
];
let customTypes = [];
if (window.customIcons) {
  customTypes = window.customIcons;
}
const handleCopy = () => NextMessage.success("Copied!");
function DemoComponent$5() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
    className: "icon-list-title"
  }, "Click on the icon to copy the code."), /* @__PURE__ */ createElement("ul", {
    className: "icon-list"
  }, types.map((type, index) => /* @__PURE__ */ createElement(lib, {
    key: index,
    text: `<Icon type="${type}" />`,
    onCopy: handleCopy
  }, /* @__PURE__ */ createElement("li", null, /* @__PURE__ */ createElement(NextIcon, {
    type,
    size: "xl"
  }), /* @__PURE__ */ createElement("span", null, type))))), customTypes.length ? /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
    className: "icon-list-custom-title"
  }, "Custom Icon"), /* @__PURE__ */ createElement("ul", {
    className: "icon-list"
  }, customTypes.map((type, index) => /* @__PURE__ */ createElement(lib, {
    key: index,
    text: `<Icon type="${type}" />`,
    onCopy: handleCopy
  }, /* @__PURE__ */ createElement("li", null, /* @__PURE__ */ createElement(NextIcon, {
    type,
    size: "xl"
  }), /* @__PURE__ */ createElement("span", null, type)))))) : null);
  return /* @__PURE__ */ createElement(Style$5, null, content);
}
const Style$5 = qe.div`
  .icon-list-title {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }

  .icon-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .icon-list li {
    display: inline-block;
    width: 140px;
    padding: 30px 0;
    color: #666;
    cursor: pointer;
  }

  .icon-list li:hover {
    color: #333;
    background-color: #f7f7f7;
  }

  .icon-list i {
    display: block;
    width: 32px;
    margin: 0 auto;
  }

  .icon-list span {
    display: block;
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
  }

  .icon-list-custom-title {
    margin: 20px 0 20px 10px;
    font-size: 20px;
    color: #333;
  }
`;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const modules = {};
modules["_accessibility"] = m0;
modules["_basic"] = m1;
modules["_iconfont"] = m2;
modules["_size"] = m3;
modules["_style"] = m4;
modules["_type"] = m5;
export default modules;
