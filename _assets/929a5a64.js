import {f as _extends, e as propTypes, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, R as React, i as _objectWithoutProperties, p as polyfill, j as Children, C as Component} from "./index.8f10cf2d.js";
import {o as obj, l as log} from "./5269ede4.js";
var zhCN = {
  momentLocale: "zh-cn",
  Timeline: {
    expand: "展开",
    fold: "收起"
  },
  Balloon: {
    close: "关闭"
  },
  Card: {
    expand: "展开",
    fold: "收起"
  },
  Calendar: {
    today: "今天",
    now: "此刻",
    ok: "确定",
    clear: "清除",
    month: "月",
    year: "年",
    prevYear: "上一年",
    nextYear: "下一年",
    prevMonth: "上个月",
    nextMonth: "下个月",
    prevDecade: "上十年",
    nextDecade: "后十年",
    yearSelectAriaLabel: "选择年份",
    monthSelectAriaLabel: "选择月份"
  },
  DatePicker: {
    placeholder: "请选择日期",
    datetimePlaceholder: "请选择日期和时间",
    monthPlaceholder: "请选择月",
    yearPlaceholder: "请选择年",
    weekPlaceholder: "请选择周",
    now: "此刻",
    selectTime: "选择时间",
    selectDate: "选择日期",
    ok: "确定",
    clear: "清除",
    startPlaceholder: "起始日期",
    endPlaceholder: "结束日期",
    hour: "时",
    minute: "分",
    second: "秒"
  },
  Dialog: {
    close: "关闭",
    ok: "确认",
    cancel: "取消"
  },
  Drawer: {
    close: "关闭"
  },
  Message: {
    closeAriaLabel: "关闭"
  },
  Pagination: {
    prev: "上一页",
    next: "下一页",
    goTo: "到第",
    page: "页",
    go: "确定",
    total: "第{current}页，共{total}页",
    labelPrev: "上一页，当前第{current}页",
    labelNext: "下一页，当前第{current}页",
    inputAriaLabel: "请输入跳转到第几页",
    selectAriaLabel: "请选择每页显示几条",
    pageSize: "每页显示："
  },
  Input: {
    clear: "清除"
  },
  List: {
    empty: "没有数据"
  },
  Select: {
    selectPlaceholder: "请选择",
    autoCompletePlaceholder: "请输入",
    notFoundContent: "无选项",
    maxTagPlaceholder: "已选择 {selected}/{total} 项",
    selectAll: "全选"
  },
  Table: {
    empty: "没有数据",
    ok: "确认",
    reset: "重置",
    asc: "升序",
    desc: "降序",
    expanded: "已展开",
    folded: "已折叠",
    filter: "筛选",
    selectAll: "全选"
  },
  TimePicker: {
    placeholder: "请选择时间",
    clear: "清除",
    hour: "时",
    minute: "分",
    second: "秒"
  },
  Transfer: {
    items: "项",
    item: "项",
    moveAll: "移动全部",
    searchPlaceholder: "请输入",
    moveToLeft: "撤销选中元素",
    moveToRight: "提交选中元素"
  },
  Upload: {
    card: {
      cancel: "取消",
      addPhoto: "上传图片",
      download: "下载",
      delete: "删除"
    },
    drag: {
      text: "点击或者拖动文件到虚线框内上传",
      hint: "支持 docx, xls, PDF, rar, zip, PNG, JPG 等类型的文件"
    },
    upload: {
      delete: "删除"
    }
  },
  Search: {
    buttonText: "搜索"
  },
  Tag: {
    delete: "删除"
  },
  Rating: {
    description: "评分选项"
  },
  Switch: {
    on: "已打开",
    off: "已关闭"
  },
  Tab: {
    closeAriaLabel: "关闭"
  }
};
var parseBoundary = function parseBoundary2(input) {
  var obj2 = void 0;
  if (input === void 0 || input === null) {
    return {};
  } else if (typeof input === "boolean") {
    obj2 = {open: input};
  } else {
    obj2 = _extends({open: true}, input);
  }
  return obj2;
};
function getContextProps(props, context, displayName) {
  var prefix = props.prefix, locale = props.locale, pure = props.pure, rtl = props.rtl, device = props.device, popupContainer = props.popupContainer, errorBoundary = props.errorBoundary;
  var nextPrefix = context.nextPrefix, nextLocale = context.nextLocale, nextPure = context.nextPure, nextWarning = context.nextWarning, nextRtl = context.nextRtl, nextDevice = context.nextDevice, nextPopupContainer = context.nextPopupContainer, nextErrorBoundary = context.nextErrorBoundary;
  var newPrefix = prefix || nextPrefix;
  var localeFromContext = void 0;
  if (nextLocale) {
    localeFromContext = nextLocale[displayName];
    if (localeFromContext) {
      localeFromContext.momentLocale = nextLocale.momentLocale;
    }
  }
  var newLocale = void 0;
  if (locale) {
    newLocale = obj.deepMerge({}, zhCN[displayName], localeFromContext, locale);
  } else if (localeFromContext) {
    newLocale = obj.deepMerge({}, zhCN[displayName], localeFromContext);
  }
  var newPure = typeof pure === "boolean" ? pure : nextPure;
  var newRtl = typeof rtl === "boolean" ? rtl : nextRtl;
  var newErrorBoundary = _extends({}, parseBoundary(nextErrorBoundary), parseBoundary(errorBoundary));
  if (!("open" in newErrorBoundary)) {
    newErrorBoundary.open = false;
  }
  return {
    prefix: newPrefix,
    locale: newLocale,
    pure: newPure,
    rtl: newRtl,
    warning: nextWarning,
    device: device || nextDevice || void 0,
    popupContainer: popupContainer || nextPopupContainer,
    errorBoundary: newErrorBoundary
  };
}
var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {
        }
      }
    }
    return targetComponent;
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;
var _class, _temp;
DefaultUI.propTypes = {
  error: propTypes.object,
  errorInfo: propTypes.object
};
function DefaultUI() {
  return "";
}
var ErrorBoundary = (_temp = _class = function(_React$Component) {
  _inherits(ErrorBoundary2, _React$Component);
  function ErrorBoundary2(props) {
    _classCallCheck(this, ErrorBoundary2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
    _this.state = {error: null, errorInfo: null};
    return _this;
  }
  ErrorBoundary2.prototype.componentDidCatch = function componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
    var afterCatch = this.props.afterCatch;
    if ("afterCatch" in this.props && typeof afterCatch === "function") {
      this.props.afterCatch(error, errorInfo);
    }
  };
  ErrorBoundary2.prototype.render = function render() {
    var _props$fallbackUI = this.props.fallbackUI, FallbackUI = _props$fallbackUI === void 0 ? DefaultUI : _props$fallbackUI;
    if (this.state.errorInfo) {
      return React.createElement(FallbackUI, {
        error: this.state.error,
        errorInfo: this.state.errorInfo
      });
    }
    return this.props.children;
  };
  return ErrorBoundary2;
}(React.Component), _class.propTypes = {
  children: propTypes.element,
  afterCatch: propTypes.func,
  fallbackUI: propTypes.func
}, _temp);
ErrorBoundary.displayName = "ErrorBoundary";
var shallowEqual = obj.shallowEqual;
function getDisplayName(Component2) {
  return Component2.displayName || Component2.name || "Component";
}
var globalLocales = void 0;
var currentGlobalLanguage = "zh-cn";
var currentGlobalLocale = {};
var currentGlobalRtl = void 0;
function initLocales(locales) {
  globalLocales = locales;
  if (locales) {
    currentGlobalLocale = locales[currentGlobalLanguage];
    if (typeof currentGlobalRtl !== "boolean") {
      currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
    }
  }
}
function setLanguage(language) {
  if (globalLocales) {
    currentGlobalLanguage = language;
    currentGlobalLocale = globalLocales[language];
    if (typeof currentGlobalRtl !== "boolean") {
      currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
    }
  }
}
function setLocale(locale) {
  currentGlobalLocale = _extends({}, globalLocales ? globalLocales[currentGlobalLanguage] : {}, locale);
  if (typeof currentGlobalRtl !== "boolean") {
    currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
  }
}
function setDirection(dir) {
  currentGlobalRtl = dir === "rtl";
}
function getLocale() {
  return currentGlobalLocale;
}
function getLanguage() {
  return currentGlobalLanguage;
}
function getDirection() {
  return currentGlobalRtl;
}
function config(Component2) {
  var _class2, _temp2;
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (obj.isClassComponent(Component2) && Component2.prototype.shouldComponentUpdate === void 0) {
    Component2.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.pure) {
        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
      }
      return true;
    };
  }
  var ConfigedComponent = (_temp2 = _class2 = function(_React$Component) {
    _inherits(ConfigedComponent2, _React$Component);
    function ConfigedComponent2(props, context) {
      _classCallCheck(this, ConfigedComponent2);
      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
      _this._getInstance = _this._getInstance.bind(_this);
      _this._deprecated = _this._deprecated.bind(_this);
      return _this;
    }
    ConfigedComponent2.prototype._getInstance = function _getInstance(ref) {
      var _this2 = this;
      this._instance = ref;
      if (this._instance && options.exportNames) {
        options.exportNames.forEach(function(name) {
          var field = _this2._instance[name];
          if (typeof field === "function") {
            _this2[name] = field.bind(_this2._instance);
          } else {
            _this2[name] = field;
          }
        });
      }
    };
    ConfigedComponent2.prototype._deprecated = function _deprecated() {
      if (this.context.nextWarning !== false) {
        log.deprecated.apply(log, arguments);
      }
    };
    ConfigedComponent2.prototype.getInstance = function getInstance() {
      return this._instance;
    };
    ConfigedComponent2.prototype.render = function render() {
      var _props = this.props, prefix = _props.prefix, locale = _props.locale, pure = _props.pure, rtl = _props.rtl, device = _props.device, popupContainer = _props.popupContainer, errorBoundary = _props.errorBoundary, others = _objectWithoutProperties(_props, ["prefix", "locale", "pure", "rtl", "device", "popupContainer", "errorBoundary"]);
      var _context = this.context, nextPrefix = _context.nextPrefix, _context$nextLocale = _context.nextLocale, nextLocale = _context$nextLocale === void 0 ? {} : _context$nextLocale, nextPure = _context.nextPure, nextRtl = _context.nextRtl, nextDevice = _context.nextDevice, nextPopupContainer = _context.nextPopupContainer, nextErrorBoundary = _context.nextErrorBoundary;
      var displayName = options.componentName || getDisplayName(Component2);
      var contextProps = getContextProps({
        prefix,
        locale,
        pure,
        device,
        popupContainer,
        rtl,
        errorBoundary
      }, {
        nextPrefix,
        nextLocale: _extends({}, currentGlobalLocale, nextLocale),
        nextPure,
        nextDevice,
        nextPopupContainer,
        nextRtl: typeof nextRtl === "boolean" ? nextRtl : currentGlobalRtl === true ? true : void 0,
        nextErrorBoundary
      }, displayName);
      var newContextProps = ["prefix", "locale", "pure", "rtl", "device", "popupContainer"].reduce(function(ret, name) {
        if (typeof contextProps[name] !== "undefined") {
          ret[name] = contextProps[name];
        }
        return ret;
      }, {});
      if ("pure" in newContextProps && newContextProps.pure) {
        log.warning("pure of ConfigProvider is deprecated, use Function Component or React.PureComponent");
      }
      var newOthers = options.transform ? options.transform(others, this._deprecated) : others;
      var content = React.createElement(Component2, _extends({}, newOthers, newContextProps, {
        ref: obj.isClassComponent(Component2) ? this._getInstance : null
      }));
      var _contextProps$errorBo = contextProps.errorBoundary, open = _contextProps$errorBo.open, othersBoundary = _objectWithoutProperties(_contextProps$errorBo, ["open"]);
      return open ? React.createElement(ErrorBoundary, othersBoundary, content) : content;
    };
    return ConfigedComponent2;
  }(React.Component), _class2.propTypes = _extends({}, Component2.propTypes || {}, {
    prefix: propTypes.string,
    locale: propTypes.object,
    pure: propTypes.bool,
    rtl: propTypes.bool,
    device: propTypes.oneOf(["tablet", "desktop", "phone"]),
    popupContainer: propTypes.any,
    errorBoundary: propTypes.oneOfType([propTypes.bool, propTypes.object])
  }), _class2.contextTypes = _extends({}, Component2.contextTypes || {}, {
    nextPrefix: propTypes.string,
    nextLocale: propTypes.object,
    nextPure: propTypes.bool,
    nextRtl: propTypes.bool,
    nextWarning: propTypes.bool,
    nextDevice: propTypes.oneOf(["tablet", "desktop", "phone"]),
    nextPopupContainer: propTypes.any,
    nextErrorBoundary: propTypes.oneOfType([propTypes.bool, propTypes.object])
  }), _temp2);
  ConfigedComponent.displayName = "ConfigedComponent";
  ConfigedComponent.displayName = "Config(" + getDisplayName(Component2) + ")";
  hoistNonReactStatics_cjs(ConfigedComponent, Component2);
  return ConfigedComponent;
}
var mapKeys = function mapKeys2(obj2, fn) {
  var result = {};
  for (var key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      var value = obj2[key];
      var newKey = fn(key, value);
      result[newKey] = value;
    }
  }
  return result;
};
var replaceKey = function replaceKey2(key) {
  return key.replace(/^(next)([A-Z])/, function(match, p1, p2) {
    return p2.toLowerCase();
  });
};
var transformContext = function transformContext2(source) {
  return mapKeys(source, replaceKey);
};
var Consumer = function Consumer2(_ref, context) {
  var children = _ref.children;
  return typeof children === "function" ? children(transformContext(context)) : null;
};
Consumer.propTypes = {
  children: propTypes.func
};
Consumer.contextTypes = {
  nextPrefix: propTypes.string,
  nextLocale: propTypes.object,
  nextPure: propTypes.bool,
  newRtl: propTypes.bool,
  nextWarning: propTypes.bool,
  nextDevice: propTypes.oneOf(["tablet", "desktop", "phone"]),
  nextPopupContainer: propTypes.any
};
var Cache = function() {
  function Cache2() {
    _classCallCheck(this, Cache2);
    this._root = null;
    this._store = new Map();
  }
  Cache2.prototype.empty = function empty() {
    return this._store.size === 0;
  };
  Cache2.prototype.has = function has(key) {
    return this._store.has(key);
  };
  Cache2.prototype.get = function get(key, defaultValue) {
    var res = this.has(key) ? this._store.get(key) : this.root();
    return typeof res === "undefined" || res === null ? defaultValue : res;
  };
  Cache2.prototype.add = function add(key, value) {
    if (this.empty()) {
      this._root = key;
    }
    this._store.set(key, value);
  };
  Cache2.prototype.update = function update(key, value) {
    if (this.has(key)) {
      this._store.set(key, value);
    }
  };
  Cache2.prototype.remove = function remove(key) {
    this._store.delete(key);
    if (key === this._root) {
      var maps = this._store.keys();
      var nextkey = maps.next().value;
      this._root = nextkey;
    }
  };
  Cache2.prototype.root = function root() {
    return this._store.get(this._root);
  };
  return Cache2;
}();
var _class$1, _temp$1;
var childContextCache = new Cache();
var setMomentLocale = function setMomentLocale2(locale) {
  var moment = void 0;
  try {
    moment = require("moment");
  } catch (e) {
  }
  if (moment && locale) {
    moment.locale(locale.momentLocale);
  }
};
var ConfigProvider = (_temp$1 = _class$1 = function(_Component) {
  _inherits(ConfigProvider2, _Component);
  function ConfigProvider2() {
    _classCallCheck(this, ConfigProvider2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var _this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));
    childContextCache.add(_this, _extends({}, childContextCache.get(_this, {}), _this.getChildContext()));
    setMomentLocale(_this.props.locale);
    _this.state = {
      locale: _this.props.locale
    };
    return _this;
  }
  ConfigProvider2.prototype.getChildContext = function getChildContext() {
    var _props = this.props, prefix = _props.prefix, locale = _props.locale, pure = _props.pure, warning = _props.warning, rtl = _props.rtl, device = _props.device, popupContainer = _props.popupContainer, errorBoundary = _props.errorBoundary;
    var _context = this.context, nextPrefix = _context.nextPrefix, nextLocale = _context.nextLocale, nextPure = _context.nextPure, nextRtl = _context.nextRtl, nextWarning = _context.nextWarning, nextDevice = _context.nextDevice, nextPopupContainer = _context.nextPopupContainer, nextErrorBoundary = _context.nextErrorBoundary;
    return {
      nextPrefix: prefix || nextPrefix,
      nextLocale: locale || nextLocale,
      nextPure: typeof pure === "boolean" ? pure : nextPure,
      nextRtl: typeof rtl === "boolean" ? rtl : nextRtl,
      nextWarning: typeof warning === "boolean" ? warning : nextWarning,
      nextDevice: device || nextDevice,
      nextPopupContainer: popupContainer || nextPopupContainer,
      nextErrorBoundary: errorBoundary || nextErrorBoundary
    };
  };
  ConfigProvider2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.locale !== prevState.locale) {
      setMomentLocale(nextProps.locale);
      return {
        locale: nextProps.locale
      };
    }
    return null;
  };
  ConfigProvider2.prototype.componentDidUpdate = function componentDidUpdate() {
    childContextCache.add(this, _extends({}, childContextCache.get(this, {}), this.getChildContext()));
  };
  ConfigProvider2.prototype.componentWillUnmount = function componentWillUnmount() {
    childContextCache.remove(this);
  };
  ConfigProvider2.prototype.render = function render() {
    return Children.only(this.props.children);
  };
  return ConfigProvider2;
}(Component), _class$1.propTypes = {
  prefix: propTypes.string,
  locale: propTypes.object,
  errorBoundary: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  pure: propTypes.bool,
  warning: propTypes.bool,
  rtl: propTypes.bool,
  device: propTypes.oneOf(["tablet", "desktop", "phone"]),
  children: propTypes.any,
  popupContainer: propTypes.any
}, _class$1.defaultProps = {
  warning: true,
  errorBoundary: false
}, _class$1.contextTypes = {
  nextPrefix: propTypes.string,
  nextLocale: propTypes.object,
  nextPure: propTypes.bool,
  nextRtl: propTypes.bool,
  nextWarning: propTypes.bool,
  nextDevice: propTypes.oneOf(["tablet", "desktop", "phone"]),
  nextPopupContainer: propTypes.any,
  nextErrorBoundary: propTypes.oneOfType([propTypes.bool, propTypes.object])
}, _class$1.childContextTypes = {
  nextPrefix: propTypes.string,
  nextLocale: propTypes.object,
  nextPure: propTypes.bool,
  nextRtl: propTypes.bool,
  nextWarning: propTypes.bool,
  nextDevice: propTypes.oneOf(["tablet", "desktop", "phone"]),
  nextPopupContainer: propTypes.any,
  nextErrorBoundary: propTypes.oneOfType([propTypes.bool, propTypes.object])
}, _class$1.config = function(Component2, options) {
  return config(Component2, options);
}, _class$1.getContextProps = function(props, displayName) {
  return getContextProps(props, childContextCache.root() || {}, displayName);
}, _class$1.initLocales = initLocales, _class$1.setLanguage = setLanguage, _class$1.setLocale = setLocale, _class$1.setDirection = setDirection, _class$1.getLanguage = getLanguage, _class$1.getLocale = getLocale, _class$1.getDirection = getDirection, _class$1.Consumer = Consumer, _class$1.ErrorBoundary = ErrorBoundary, _class$1.getContext = function() {
  var _ref = childContextCache.root() || {}, nextPrefix = _ref.nextPrefix, nextLocale = _ref.nextLocale, nextPure = _ref.nextPure, nextRtl = _ref.nextRtl, nextWarning = _ref.nextWarning, nextDevice = _ref.nextDevice, nextPopupContainer = _ref.nextPopupContainer, nextErrorBoundary = _ref.nextErrorBoundary;
  return {
    prefix: nextPrefix,
    locale: nextLocale,
    pure: nextPure,
    rtl: nextRtl,
    warning: nextWarning,
    device: nextDevice,
    popupContainer: nextPopupContainer,
    errorBoundary: nextErrorBoundary
  };
}, _temp$1);
ConfigProvider.displayName = "ConfigProvider";
var NextConfigProvider = polyfill(ConfigProvider);
export {NextConfigProvider as N, zhCN as z};
