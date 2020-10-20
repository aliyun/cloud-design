import {e as _extends, i as _typeof, k as Children, j as _objectWithoutProperties, a as _classCallCheck, _ as _inherits, b as _possibleConstructorReturn, f as findDOMNode, d as classnames, R as React, g as propTypes, p as polyfill} from "./index.2dd166ed.js";
import {f as func, e as events, d as dom, a as env, K as KEYCODE, b as str, o as obj} from "./2c811738.js";
import {z as zhCN, N as NextConfigProvider} from "./399cb00c.js";
import {N as NextOverlay} from "./857177ad.js";
import {N as NextIcon} from "./f9e612ff.js";
import {C as ConfigTag} from "./e5558639.js";
import {N as NextInput} from "./cf19697e.js";
import {N as NextMenu} from "./dfa9fef1.js";
import {N as NextVirtualList} from "./b6c4c22f.js";
function isSingle(mode) {
  return !mode || mode === "single";
}
function isNull(n) {
  return n === null || n === void 0;
}
function escapeForReg(str2) {
  return str2.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function filter(key, item) {
  var _key = escapeForReg("" + key);
  var regExp = new RegExp("(" + _key + ")", "ig");
  return regExp.test("" + item.value) || regExp.test("" + item.label);
}
function loopMap(dataSource, callback) {
  var result = [];
  dataSource.forEach(function(option) {
    if (option.children) {
      var children = loopMap(option.children, callback);
      result.push(_extends({}, option, {
        children
      }));
    } else {
      var tmp = callback(option);
      tmp && result.push(tmp);
    }
  });
  return result;
}
function parseDataSourceFromChildren(children) {
  var deep = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var source = [];
  Children.forEach(children, function(child, index) {
    if (!child) {
      return;
    }
    var type = child.type, childProps = child.props;
    var item2 = {deep};
    var isOption = false;
    var isOptionGroup = false;
    if (typeof type === "function" && type._typeMark === "next_select_option" || type === "option") {
      isOption = true;
    }
    if (typeof type === "function" && type._typeMark === "next_select_option_group" || type === "optgroup") {
      isOptionGroup = true;
    }
    if (!isOption && !isOptionGroup) {
      return;
    }
    if (isOption) {
      var isStrChild = typeof childProps.children === "string";
      item2.value = "value" in childProps ? childProps.value : "key" in childProps ? childProps.key : isStrChild ? childProps.children : "" + index;
      item2.label = childProps.label || childProps.children || "" + item2.value;
      if ("title" in childProps) {
        item2.title = childProps.title;
      }
      childProps.disabled === true && (item2.disabled = true);
      _extends(item2, childProps["data-extra"] || {});
    } else if (isOptionGroup && deep < 1) {
      item2.label = childProps.label || "Group";
      item2.children = parseDataSourceFromChildren(childProps.children, deep + 1);
    }
    source.push(item2);
  });
  return source;
}
function normalizeDataSource(dataSource) {
  var deep = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var showDataSourceChildren = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var source = [];
  dataSource.forEach(function(item, index) {
    if (/string|boolean|number/.test(typeof item === "undefined" ? "undefined" : _typeof(item))) {
      item = {label: "" + item, value: item};
    }
    if (item.__isAddon) {
      return;
    }
    var item2 = {deep};
    if (Array.isArray(item.children) && deep < 1 && showDataSourceChildren) {
      item2.label = item.label || item.value || "Group " + index;
      item2.children = normalizeDataSource(item.children, deep + 1);
    } else {
      var _item = item, value = _item.value, label = _item.label, disabled = _item.disabled, title = _item.title, others = _objectWithoutProperties(_item, ["value", "label", "disabled", "title"]);
      item2.value = !isNull(value) ? value : "" + index;
      item2.label = label || "" + item2.value;
      if ("title" in item) {
        item2.title = title;
      }
      disabled === true && (item2.disabled = true);
      _extends(item2, others);
    }
    source.push(item2);
  });
  return source;
}
function flattingDataSource(dataSource) {
  var source = [];
  dataSource.forEach(function(item) {
    if (Array.isArray(item.children)) {
      source.push.apply(source, flattingDataSource(item.children));
    } else {
      source.push(item);
    }
  });
  return source;
}
function filterDataSource(dataSource, key, filter2, addonKey) {
  if (!Array.isArray(dataSource)) {
    return [];
  }
  if (typeof key === "undefined" || key === null) {
    return [].concat(dataSource);
  }
  var addKey = true;
  var menuDataSource = loopMap(dataSource, function(option) {
    if (key === "" + option.value) {
      addKey = false;
    }
    return filter2(key, option) && !option.__isAddon && option;
  });
  if (addonKey && key && addKey) {
    menuDataSource.unshift({
      value: key,
      label: key,
      __isAddon: true
    });
  }
  return menuDataSource;
}
function getKeyItemByValue(value, valueMap) {
  var item = void 0;
  if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
    if (value.hasOwnProperty("value")) {
      item = value;
    } else {
      item = _extends({
        value: ""
      }, value);
    }
  } else {
    item = valueMap["" + value] || {
      value,
      label: value
    };
  }
  return item;
}
function getValueDataSource(value, mapValueDS, mapMenuDS) {
  if (isNull(value)) {
    return {};
  }
  var newValue = [];
  var newValueDS = [];
  var newMapValueDS = {};
  var _newMapDS = _extends({}, mapValueDS, mapMenuDS);
  if (Array.isArray(value)) {
    value.forEach(function(v) {
      var item2 = getKeyItemByValue(v, _newMapDS);
      newValueDS.push(item2);
      newMapValueDS["" + item2.value] = item2;
      newValue.push(item2.value);
    });
    return {
      value: newValue,
      valueDS: newValueDS,
      mapValueDS: newMapValueDS
    };
  } else {
    var _mapValueDS;
    var item = getKeyItemByValue(value, _newMapDS);
    return {
      value: item.value,
      valueDS: item,
      mapValueDS: (_mapValueDS = {}, _mapValueDS["" + item.value] = item, _mapValueDS)
    };
  }
}
function valueToSelectKey(value) {
  var val = void 0;
  if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && value.hasOwnProperty("value")) {
    val = value.value;
  } else {
    val = value;
  }
  return "" + val;
}
var DataStore = function() {
  function DataStore2(options) {
    _classCallCheck(this, DataStore2);
    this.options = _extends({
      filter,
      key: void 0,
      addonKey: false,
      filterLocal: true,
      showDataSourceChildren: true
    }, options);
    this.dataSource = [];
    this.menuDataSource = [];
    this.mapDataSource = {};
    this.enabledDataSource = [];
    this.flattenDataSource = [];
  }
  DataStore2.prototype.setOptions = function setOptions(options) {
    _extends(this.options, options);
  };
  DataStore2.prototype.updateByDS = function updateByDS(dataSource) {
    var isChildren = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    this.dataSource = isChildren ? parseDataSourceFromChildren(dataSource) : normalizeDataSource(dataSource, 0, this.options.showDataSourceChildren);
    return this.updateAll();
  };
  DataStore2.prototype.updateByKey = function updateByKey(key) {
    if (key === this.options.key) {
      return this.getMenuDS();
    }
    this.options.key = key;
    return this.updateAll();
  };
  DataStore2.prototype.getOriginDS = function getOriginDS() {
    return this.dataSource;
  };
  DataStore2.prototype.getMenuDS = function getMenuDS() {
    return this.menuDataSource;
  };
  DataStore2.prototype.getFlattenDS = function getFlattenDS() {
    return this.flattenDataSource;
  };
  DataStore2.prototype.getEnableDS = function getEnableDS() {
    return this.enabledDataSource;
  };
  DataStore2.prototype.getMapDS = function getMapDS() {
    return this.mapDataSource;
  };
  DataStore2.prototype.updateAll = function updateAll() {
    var _this = this;
    var _options = this.options, key = _options.key, filter2 = _options.filter, filterLocal = _options.filterLocal, showDataSourceChildren = _options.showDataSourceChildren;
    this.menuDataSource = filterDataSource(this.dataSource, filterLocal ? key : "", filter2, this.options.addonKey);
    this.flattenDataSource = showDataSourceChildren ? flattingDataSource(this.menuDataSource) : this.menuDataSource;
    this.mapDataSource = {};
    this.flattenDataSource.forEach(function(item) {
      _this.mapDataSource["" + item.value] = item;
    });
    this.enabledDataSource = this.flattenDataSource.filter(function(item) {
      return !item.disabled;
    });
    return this.menuDataSource;
  };
  return DataStore2;
}();
var _class, _temp;
var Popup = NextOverlay.Popup;
var MenuItem = NextMenu.Item, MenuGroup = NextMenu.Group;
var noop = func.noop, bindCtx = func.bindCtx, makeChain = func.makeChain;
function preventDefault(e) {
  e.preventDefault();
}
var Base = (_temp = _class = function(_React$Component) {
  _inherits(Base2, _React$Component);
  function Base2(props) {
    _classCallCheck(this, Base2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
    _this.saveSelectRef = function(ref) {
      _this.selectDOM = findDOMNode(ref);
    };
    _this.saveInputRef = function(ref) {
      if (ref && ref.getInstance()) {
        _this.inputRef = ref.getInstance();
      }
    };
    _this.savePopupRef = function(ref) {
      _this.popupRef = ref;
      if (_this.props.popupProps && typeof _this.props.popupProps.ref === "function") {
        _this.props.popupProps.ref(ref);
      }
    };
    _this.dataStore = new DataStore({
      filter: props.filter,
      filterLocal: props.filterLocal,
      showDataSourceChildren: props.showDataSourceChildren
    });
    var mode = props.mode;
    var value = "value" in props ? props.value : props.defaultValue;
    if (props.mode !== "single" && value && !Array.isArray(value)) {
      value = [value];
    }
    _this.state = {
      dataStore: _this.dataStore,
      value,
      visible: "visible" in props ? props.visible : props.defaultVisible,
      dataSource: _this.setDataSource(_this.props),
      width: 100,
      highlightKey: "highlightKey" in props ? props.highlightKey : props.defaultHighlightKey,
      srReader: ""
    };
    bindCtx(_this, ["handleMenuBodyClick", "handleVisibleChange", "focusInput", "beforeOpen", "beforeClose", "afterClose", "handleResize"]);
    return _this;
  }
  Base2.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;
    setTimeout(function() {
      return _this2.syncWidth();
    }, 0);
    events.on(window, "resize", this.handleResize);
  };
  Base2.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.label !== this.props.label || prevState.value !== this.state.value) {
      this.syncWidth();
    }
  };
  Base2.prototype.componentWillUnmount = function componentWillUnmount() {
    events.off(window, "resize", this.handleResize);
    clearTimeout(this.resizeTimeout);
  };
  Base2.prototype.syncWidth = function syncWidth() {
    var _this3 = this;
    var _props2 = this.props, popupStyle = _props2.popupStyle, popupProps = _props2.popupProps;
    if (popupStyle && "width" in popupStyle || popupProps && popupProps.style && "width" in popupProps.style) {
      return;
    }
    var width = dom.getStyle(this.selectDOM, "width");
    if (width && this.width !== width) {
      this.width = width;
      if (this.popupRef && this.shouldAutoWidth()) {
        setTimeout(function() {
          if (_this3.popupRef && _this3.popupRef.getInstance().overlay) {
            dom.setStyle(_this3.popupRef.getInstance().overlay.getInstance().getContentNode(), "width", _this3.width);
          }
        }, 0);
      }
    }
  };
  Base2.prototype.handleResize = function handleResize() {
    var _this4 = this;
    clearTimeout(this.resizeTimeout);
    if (this.state.visible) {
      this.resizeTimeout = setTimeout(function() {
        _this4.syncWidth();
      }, 200);
    }
  };
  Base2.prototype.setDataSource = function setDataSource(props) {
    var dataSource = props.dataSource, children = props.children;
    if (Children.count(children)) {
      return this.dataStore.updateByDS(children, true);
    } else if (Array.isArray(dataSource)) {
      return this.dataStore.updateByDS(dataSource, false);
    }
    return [];
  };
  Base2.prototype.setVisible = function setVisible(visible, type) {
    if (this.props.disabled && visible || this.state.visible === visible) {
      return;
    }
    if (!("visible" in this.props)) {
      this.setState({
        visible
      });
    }
    this.props.onVisibleChange(visible, type);
  };
  Base2.prototype.setFirstHightLightKeyForMenu = function setFirstHightLightKeyForMenu() {
    if (!this.props.autoHighlightFirstItem) {
      return;
    }
    if (this.dataStore.getMenuDS().length && this.dataStore.getEnableDS().length) {
      var highlightKey = "" + this.dataStore.getEnableDS()[0].value;
      this.setState({
        highlightKey
      });
      this.props.onToggleHighlightItem(highlightKey, "autoFirstItem");
    }
  };
  Base2.prototype.handleChange = function handleChange(value) {
    var _props3;
    if (!("value" in this.props)) {
      this.setState({
        value
      });
    }
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    (_props3 = this.props).onChange.apply(_props3, [value].concat(args));
  };
  Base2.prototype.handleMenuBodyClick = function handleMenuBodyClick(e) {
    this.focusInput(e);
  };
  Base2.prototype.toggleHighlightItem = function toggleHighlightItem(dir) {
    if (!this.state.visible) {
      this.setVisible(true, "enter");
      return;
    }
    var maxCount = this.dataStore.getEnableDS().length;
    if (!maxCount) {
      return false;
    }
    var highlightKey = this.state.highlightKey;
    var highlightIndex = -1;
    highlightKey !== null && this.dataStore.getEnableDS().some(function(item, index) {
      if ("" + item.value === highlightKey) {
        highlightIndex = index;
      }
      return highlightIndex > -1;
    });
    highlightIndex += dir;
    if (highlightIndex < 0) {
      highlightIndex = maxCount - 1;
    }
    if (highlightIndex >= maxCount) {
      highlightIndex = 0;
    }
    var highlightItem = this.dataStore.getEnableDS()[highlightIndex];
    highlightKey = highlightItem ? "" + highlightItem.value : null;
    this.setState({highlightKey, srReader: highlightItem.label});
    this.scrollMenuIntoView();
    return highlightItem;
  };
  Base2.prototype.scrollMenuIntoView = function scrollMenuIntoView() {
    var _this5 = this;
    var prefix = this.props.prefix;
    clearTimeout(this.highlightTimer);
    this.highlightTimer = setTimeout(function() {
      try {
        var menuNode = findDOMNode(_this5.menuRef);
        var itemNode = menuNode.querySelector("." + prefix + "select-menu-item." + prefix + "focused");
        itemNode && itemNode.scrollIntoViewIfNeeded();
      } catch (ex) {
      }
    });
  };
  Base2.prototype.renderMenuHeader = function renderMenuHeader() {
    var menuProps = this.props.menuProps;
    if (menuProps && "header" in menuProps) {
      return menuProps.header;
    }
    return null;
  };
  Base2.prototype.handleSelect = function handleSelect() {
  };
  Base2.prototype.renderMenu = function renderMenu() {
    var _classNames, _this6 = this;
    var _props4 = this.props, prefix = _props4.prefix, mode = _props4.mode, locale = _props4.locale, notFoundContent = _props4.notFoundContent, useVirtual = _props4.useVirtual, menuProps = _props4.menuProps;
    var _state = this.state, dataSource = _state.dataSource, highlightKey = _state.highlightKey;
    var value = this.state.value;
    var selectedKeys = void 0;
    if (isNull(value) || value.length === 0 || this.isAutoComplete) {
      selectedKeys = [];
    } else if (isSingle(mode)) {
      selectedKeys = [valueToSelectKey(value)];
    } else {
      selectedKeys = [].concat(value).map(function(n) {
        return valueToSelectKey(n);
      });
    }
    var children = this.renderMenuItem(dataSource);
    var menuClassName = classnames((_classNames = {}, _classNames[prefix + "select-menu"] = true, _classNames[prefix + "select-menu-empty"] = !children || !children.length, _classNames));
    if (!children || !children.length) {
      children = React.createElement("span", {className: prefix + "select-menu-empty-content"}, notFoundContent || locale.notFoundContent);
    }
    var customProps = _extends({}, menuProps, {
      children,
      role: "listbox",
      selectedKeys,
      focusedKey: highlightKey,
      focusable: false,
      selectMode: isSingle(mode) ? "single" : "multiple",
      onSelect: this.handleMenuSelect,
      onItemClick: this.handleItemClick,
      header: this.renderMenuHeader(),
      onClick: this.handleMenuBodyClick,
      onMouseDown: preventDefault,
      className: menuClassName
    });
    var menuStyle = this.shouldAutoWidth() ? {width: this.width} : {minWidth: this.width};
    return useVirtual && children.length ? React.createElement("div", {className: prefix + "select-menu-wrapper", style: _extends({position: "relative"}, menuStyle)}, React.createElement(NextVirtualList, {
      itemsRenderer: function itemsRenderer(items, _ref) {
        return React.createElement(NextMenu, _extends({
          ref: function ref(c) {
            _ref(c);
            _this6.menuRef = c;
          },
          flatenContent: true
        }, customProps), items);
      }
    }, children)) : React.createElement(NextMenu, _extends({}, customProps, {style: menuStyle}));
  };
  Base2.prototype.renderMenuItem = function renderMenuItem(dataSource) {
    var _this7 = this;
    var _props5 = this.props, prefix = _props5.prefix, itemRender2 = _props5.itemRender, showDataSourceChildren = _props5.showDataSourceChildren;
    var searchKey = void 0;
    if (this.isAutoComplete) {
      searchKey = this.state.value;
    } else {
      searchKey = this.state.searchValue;
    }
    return dataSource.map(function(item, index) {
      if (!item) {
        return null;
      }
      if (Array.isArray(item.children) && showDataSourceChildren) {
        return React.createElement(MenuGroup, {key: index, label: item.label}, _this7.renderMenuItem(item.children));
      } else {
        var itemProps = {
          role: "option",
          key: item.value,
          className: prefix + "select-menu-item",
          disabled: item.disabled
        };
        if ("title" in item) {
          itemProps.title = item.title;
        }
        return React.createElement(MenuItem, itemProps, itemRender2(item, searchKey));
      }
    });
  };
  Base2.prototype.focusInput = function focusInput() {
    this.inputRef.focus();
  };
  Base2.prototype.focus = function focus() {
    var _inputRef;
    (_inputRef = this.inputRef).focus.apply(_inputRef, arguments);
  };
  Base2.prototype.beforeOpen = function beforeOpen() {
    var _state2 = this.state, value = _state2.value, highlightKey = _state2.highlightKey;
    if (this.props.mode === "single" && !value && !highlightKey) {
      this.setFirstHightLightKeyForMenu();
    }
    this.syncWidth();
  };
  Base2.prototype.beforeClose = function beforeClose() {
  };
  Base2.prototype.afterClose = function afterClose() {
  };
  Base2.prototype.shouldAutoWidth = function shouldAutoWidth() {
    if (this.props.popupComponent) {
      return false;
    }
    return this.props.autoWidth;
  };
  Base2.prototype.render = function render(props) {
    var _classNames2;
    var prefix = props.prefix, mode = props.mode, popupProps = props.popupProps, popupContainer = props.popupContainer, popupClassName = props.popupClassName, popupStyle = props.popupStyle, popupContent = props.popupContent, canCloseByTrigger = props.canCloseByTrigger, followTrigger = props.followTrigger, cache = props.cache, popupComponent = props.popupComponent, isPreview = props.isPreview, renderPreview = props.renderPreview, style = props.style, className = props.className;
    var cls = classnames((_classNames2 = {}, _classNames2[prefix + "select-auto-complete-menu"] = !popupContent && this.isAutoComplete, _classNames2[prefix + "select-" + mode + "-menu"] = !popupContent && !!mode, _classNames2), popupClassName || popupProps.className);
    if (isPreview) {
      if (this.isAutoComplete) {
        return React.createElement(NextInput, {
          style,
          className,
          isPreview,
          renderPreview,
          value: this.state.value
        });
      } else {
        var value = this.state.value;
        var valueDS = this.state.value;
        if (!this.useDetailValue()) {
          if (value === this.valueDataSource.value) {
            valueDS = this.valueDataSource.valueDS;
          } else {
            valueDS = getValueDataSource(value, this.valueDataSource.mapValueDS, this.dataStore.getMapDS()).valueDS;
          }
        }
        if (typeof renderPreview === "function") {
          var _classNames3;
          var previewCls = classnames((_classNames3 = {}, _classNames3[prefix + "form-preview"] = true, _classNames3[className] = !!className, _classNames3));
          return React.createElement("div", {style, className: previewCls}, renderPreview(valueDS, this.props));
        } else {
          var fillProps = this.props.fillProps;
          if (mode === "single") {
            return React.createElement(NextInput, {
              style,
              className,
              isPreview,
              value: valueDS ? fillProps ? valueDS[fillProps] : valueDS.label : ""
            });
          } else {
            return React.createElement(NextInput, {
              style,
              className,
              isPreview,
              value: (valueDS || []).map(function(i) {
                return i.label;
              }).join(", ")
            });
          }
        }
      }
    }
    var _props = _extends({
      triggerType: "click",
      autoFocus: !!this.props.popupAutoFocus,
      cache
    }, popupProps, {
      beforeOpen: makeChain(this.beforeOpen, popupProps.beforeOpen),
      beforeClose: makeChain(this.beforeClose, popupProps.beforeClose),
      afterClose: makeChain(this.afterClose, popupProps.afterClose),
      canCloseByTrigger,
      followTrigger,
      visible: this.state.visible,
      onVisibleChange: this.handleVisibleChange,
      shouldUpdatePosition: true,
      container: popupContainer || popupProps.container,
      className: cls,
      style: popupStyle || popupProps.style
    });
    var Tag = popupComponent ? popupComponent : Popup;
    return React.createElement(Tag, _extends({}, _props, {trigger: this.renderSelect(), ref: this.savePopupRef}), popupContent ? React.createElement("div", {
      className: prefix + "select-popup-wrap",
      style: this.shouldAutoWidth() ? {width: this.width} : {}
    }, popupContent) : this.renderMenu());
  };
  return Base2;
}(React.Component), _class.propTypes = {
  prefix: propTypes.string,
  size: propTypes.oneOf(["small", "medium", "large"]),
  value: propTypes.any,
  defaultValue: propTypes.any,
  placeholder: propTypes.string,
  autoWidth: propTypes.bool,
  label: propTypes.node,
  hasClear: propTypes.bool,
  state: propTypes.oneOf(["error", "loading"]),
  readOnly: propTypes.bool,
  disabled: propTypes.bool,
  visible: propTypes.bool,
  defaultVisible: propTypes.bool,
  onVisibleChange: propTypes.func,
  popupContainer: propTypes.any,
  popupClassName: propTypes.any,
  popupStyle: propTypes.object,
  popupProps: propTypes.object,
  followTrigger: propTypes.bool,
  popupContent: propTypes.node,
  menuProps: propTypes.object,
  filterLocal: propTypes.bool,
  filter: propTypes.func,
  defaultHighlightKey: propTypes.string,
  highlightKey: propTypes.string,
  onToggleHighlightItem: propTypes.func,
  autoHighlightFirstItem: propTypes.bool,
  useVirtual: propTypes.bool,
  className: propTypes.any,
  children: propTypes.any,
  dataSource: propTypes.array,
  itemRender: propTypes.func,
  mode: propTypes.string,
  notFoundContent: propTypes.node,
  locale: propTypes.object,
  rtl: propTypes.bool,
  popupComponent: propTypes.any,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func,
  showDataSourceChildren: propTypes.bool
}, _class.defaultProps = {
  prefix: "next-",
  size: "medium",
  autoWidth: true,
  onChange: noop,
  onVisibleChange: noop,
  onToggleHighlightItem: noop,
  popupProps: {},
  filterLocal: true,
  filter,
  itemRender: function itemRender(item) {
    return item.label || item.value;
  },
  locale: zhCN.Select,
  autoHighlightFirstItem: true,
  showDataSourceChildren: true,
  defaultHighlightKey: null
}, _temp);
Base.displayName = "Base";
var _class$1, _temp$1;
var bindCtx$1 = func.bindCtx, noop$1 = func.noop;
var isIE9 = env.ieVersion === 9;
var Select = (_temp$1 = _class$1 = function(_Base) {
  _inherits(Select2, _Base);
  function Select2(props) {
    _classCallCheck(this, Select2);
    var _this = _possibleConstructorReturn(this, _Base.call(this, props));
    _this.handleWrapClick = function(e) {
      if (e.target.nodeName !== "INPUT") {
        e.preventDefault();
      }
      _this.focusInput();
    };
    _this.handleArrowClick = function(e) {
      e.preventDefault();
      _this.focusInput();
      _this.state.visible && _this.hasSearch() && _this.setVisible(false);
    };
    _this.handleClear = function(e) {
      e.stopPropagation();
      _this.handleChange(void 0, "clear");
    };
    _this.valueDataSource = {
      valueDS: [],
      mapValueDS: {}
    };
    var searchValue = "searchValue" in props ? props.searchValue : "";
    _this.dataStore.setOptions({
      key: searchValue,
      addonKey: props.mode === "tag"
    });
    _extends(_this.state, {
      searchValue,
      dataSource: _this.setDataSource(props)
    });
    if (typeof _this.state.value !== "undefined") {
      _this.valueDataSource = getValueDataSource(_this.state.value, _this.valueDataSource.mapValueDS, _this.dataStore.getMapDS());
    }
    bindCtx$1(_this, ["handleMenuSelect", "handleItemClick", "handleSearch", "handleSearchKeyDown", "handleSelectAll", "maxTagPlaceholder"]);
    return _this;
  }
  Select2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var state = {};
    if ("value" in nextProps && nextProps.value !== prevState.value) {
      _extends(state, {
        value: nextProps.value
      });
    }
    if ("highlightKey" in nextProps && nextProps.highlightKey !== prevState.highlightKey) {
      _extends(state, {
        highlightKey: nextProps.highlightKey
      });
    }
    if ("searchValue" in nextProps && nextProps.searchValue !== prevState.searchValue) {
      var searchValue = nextProps.searchValue;
      _extends(state, {
        searchValue: searchValue === void 0 || searchValue === null ? "" : searchValue
      });
    }
    if ("visible" in nextProps && nextProps.visible !== prevState.visible) {
      _extends(state, {
        visible: nextProps.visible
      });
    }
    if (Object.keys(state).length) {
      return state;
    }
    return null;
  };
  Select2.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var props = this.props;
    if ("searchValue" in props && this.state.searchValue !== prevState.searchValue) {
      this.dataStore.setOptions({key: this.state.searchValue});
    }
    if (props.mode !== prevProps.mode) {
      this.dataStore.setOptions({
        addonKey: props.mode === "tag"
      });
    }
    if (props.mode !== prevProps.mode) {
      this.dataStore.setOptions({
        addonKey: props.mode === "tag"
      });
    }
    if (props.filter !== prevProps.filter) {
      this.dataStore.setOptions({
        filter: props.filter
      });
    }
    if (props.filterLocal !== prevProps.filterLocal) {
      this.dataStore.setOptions({
        filterLocal: props.filterLocal
      });
    }
    if (prevProps.children !== props.children || prevProps.dataSource !== props.dataSource) {
      this.setState({
        dataSource: this.setDataSource(props)
      });
      if (!props.popupContent) {
        this.setFirstHightLightKeyForMenu();
      }
    }
    if ("value" in props) {
      this.valueDataSource = getValueDataSource(props.value, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());
      this.updateSelectAllYet(this.valueDataSource.value);
    } else if ("defaultValue" in props && props.defaultValue === this.valueDataSource.value && (props.children !== prevProps.children || props.dataSource !== prevProps.dataSource)) {
      this.valueDataSource = getValueDataSource(props.defaultValue, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());
    }
    if (prevProps.label !== this.props.label || prevState.value !== this.state.value || props.searchValue !== this.state.searchValue) {
      this.syncWidth();
    }
  };
  Select2.prototype.componentDidMount = function componentDidMount() {
    if (isIE9) {
      this.ie9Hack();
    }
    _Base.prototype.componentDidMount.call(this);
  };
  Select2.prototype.ie9Hack = function ie9Hack() {
    try {
      var width = this.selectDOM.currentStyle.width;
      this.setState({
        fixWidth: width !== "auto"
      });
    } catch (e) {
    }
  };
  Select2.prototype.useDetailValue = function useDetailValue() {
    var _props = this.props, popupContent = _props.popupContent, useDetailValue2 = _props.useDetailValue, dataSource = _props.dataSource;
    return useDetailValue2 || popupContent && !dataSource;
  };
  Select2.prototype.hasSearch = function hasSearch() {
    var _props2 = this.props, showSearch = _props2.showSearch, mode = _props2.mode;
    return showSearch || mode === "tag";
  };
  Select2.prototype.handleMenuSelect = function handleMenuSelect(keys, item) {
    var _props3 = this.props, mode = _props3.mode, readOnly = _props3.readOnly, disabled = _props3.disabled;
    if (readOnly || disabled) {
      return false;
    }
    var isSingle2 = mode === "single";
    if (isSingle2) {
      return this.handleSingleSelect(keys[0], "itemClick");
    } else {
      return this.handleMultipleSelect(keys, "itemClick", item.props && item.props._key);
    }
  };
  Select2.prototype.handleItemClick = function handleItemClick() {
    if (!this.props.popupAutoFocus) {
      this.focusInput();
    }
  };
  Select2.prototype.handleSingleSelect = function handleSingleSelect(key, triggerType) {
    var cacheValue = this.props.cacheValue;
    var itemObj = getValueDataSource(key, cacheValue ? this.valueDataSource.mapValueDS : {}, this.dataStore.getMapDS());
    this.valueDataSource = itemObj;
    this.setVisible(false, triggerType);
    if (this.useDetailValue()) {
      return this.handleChange(itemObj.valueDS, triggerType);
    } else {
      this.handleChange(itemObj.value, triggerType, itemObj.valueDS);
    }
    this.setState({
      highlightKey: key
    });
    if (!("searchValue" in this.props) && this.state.searchValue) {
      this.handleSearchClear(triggerType);
    }
  };
  Select2.prototype.handleMultipleSelect = function handleMultipleSelect(keys, triggerType, key, keepSearchValue) {
    var _this2 = this;
    var itemObj = getValueDataSource(keys, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());
    var _props4 = this.props, cacheValue = _props4.cacheValue, mode = _props4.mode, hiddenSelected = _props4.hiddenSelected;
    if (cacheValue || mode === "tag") {
      this.valueDataSource = itemObj;
    }
    if (hiddenSelected) {
      this.setVisible(false, triggerType);
    }
    key && this.state.visible && this.setState({
      highlightKey: key
    });
    if (this.useDetailValue()) {
      this.handleChange(itemObj.valueDS, triggerType);
    } else {
      this.handleChange(itemObj.value, triggerType, itemObj.valueDS);
    }
    this.updateSelectAllYet(itemObj.value);
    if (!("searchValue" in this.props) && this.state.searchValue && !keepSearchValue) {
      setTimeout(function() {
        _this2.handleSearchClear(triggerType);
      });
    }
  };
  Select2.prototype.updateSelectAllYet = function updateSelectAllYet(value) {
    var _this3 = this;
    this.selectAllYet = false;
    if (this.props.hasSelectAll && Array.isArray(value)) {
      var selectAllValues = this.dataStore.getEnableDS().map(function(item) {
        return item.value;
      });
      if (selectAllValues.length <= value.length) {
        this.selectAllYet = true;
        selectAllValues.forEach(function(val) {
          if (value.indexOf(val) === -1) {
            _this3.selectAllYet = false;
            return;
          }
        });
      }
    }
  };
  Select2.prototype.handleSearchValue = function handleSearchValue(value) {
    if (this.state.searchValue === value) {
      return;
    }
    var filterLocal = this.props.filterLocal;
    if (filterLocal) {
      if (!("searchValue" in this.props)) {
        this.setState({
          searchValue: value,
          dataSource: this.dataStore.updateByKey(value)
        });
        this.setFirstHightLightKeyForMenu();
      }
    } else if (!("searchValue" in this.props)) {
      this.setState({
        searchValue: value
      });
    }
  };
  Select2.prototype.handleSearch = function handleSearch(value) {
    this.handleSearchValue(value);
    if (!this.state.visible && value) {
      this.setVisible(true);
    }
    this.props.onSearch(value);
  };
  Select2.prototype.handleSearchClear = function handleSearchClear(triggerType) {
    this.handleSearchValue("");
    this.props.onSearchClear(triggerType);
  };
  Select2.prototype.handleSearchKeyDown = function handleSearchKeyDown(e) {
    var _props5 = this.props, popupContent = _props5.popupContent, onKeyDown = _props5.onKeyDown, showSearch = _props5.showSearch, mode = _props5.mode, hasClear = _props5.hasClear, onToggleHighlightItem = _props5.onToggleHighlightItem, readOnly = _props5.readOnly, disabled = _props5.disabled;
    if (popupContent) {
      return onKeyDown(e);
    }
    var proxy = "search";
    var hasSearch = this.hasSearch();
    switch (e.keyCode) {
      case KEYCODE.UP:
        e.preventDefault();
        onToggleHighlightItem(this.toggleHighlightItem(-1, e), "up");
        break;
      case KEYCODE.DOWN:
        e.preventDefault();
        onToggleHighlightItem(this.toggleHighlightItem(1, e), "down");
        break;
      case KEYCODE.ENTER:
        e.preventDefault();
        if (readOnly || disabled) {
          break;
        }
        this.chooseHighlightItem(proxy, e);
        break;
      case KEYCODE.ESC:
        e.preventDefault();
        this.state.visible && this.setVisible(false, "keyDown");
        break;
      case KEYCODE.SPACE:
        e.stopPropagation();
        !hasSearch && e.preventDefault();
        break;
      case KEYCODE.BACKSPACE:
        if (readOnly || disabled) {
          break;
        }
        if (mode === "multiple" && showSearch || mode === "tag") {
          var valueDS = this.valueDataSource.valueDS;
          if (valueDS && valueDS.length && !valueDS[valueDS.length - 1].disabled) {
            this.handleDeleteTag(e);
          }
        } else if (mode === "single" && hasClear && !this.state.visible) {
          this.handleClear(e);
        }
        break;
    }
    onKeyDown(e);
  };
  Select2.prototype.chooseMultipleItem = function chooseMultipleItem(key) {
    var value = this.state.value || [];
    var keys = value.map(function(v) {
      return valueToSelectKey(v);
    });
    var keepSearchValue = false;
    var index = keys.map(function(v) {
      return "" + v;
    }).indexOf(key);
    if (index > -1) {
      keys.splice(index, 1);
      keepSearchValue = true;
    } else {
      keys.push(key);
    }
    this.handleMultipleSelect(keys, "enter", null, keepSearchValue);
  };
  Select2.prototype.chooseHighlightItem = function chooseHighlightItem(proxy, e) {
    var mode = this.props.mode;
    if (!this.state.visible) {
      if (mode === "tag" && this.state.searchValue) {
        this.chooseMultipleItem(this.state.searchValue);
      }
      return false;
    }
    var highlightKey = this.state.highlightKey;
    if (highlightKey === null || !this.dataStore.getMenuDS().length) {
      return;
    }
    if (mode === "single") {
      this.handleSingleSelect(highlightKey, "enter");
    } else {
      this.chooseMultipleItem(highlightKey);
      e && e.stopPropagation();
    }
  };
  Select2.prototype.handleTagClose = function handleTagClose(item) {
    var readOnly = this.props.readOnly;
    if (readOnly)
      return false;
    if (this.useDetailValue()) {
      var value = this.state.value.filter(function(v) {
        return item.value !== v.value;
      });
      this.handleChange(value, "tag");
    } else {
      var _value = this.state.value.filter(function(v) {
        return item.value !== v;
      });
      this.handleMultipleSelect(_value, "tag");
    }
    this.props.onRemove(item);
    return false;
  };
  Select2.prototype.handleDeleteTag = function handleDeleteTag(e) {
    var value = this.state.value;
    var searchValue = this.state.searchValue;
    if (searchValue || !value || !value.length) {
      return false;
    }
    e.preventDefault();
    var nextValues = value.slice(0, value.length - 1);
    if (this.useDetailValue()) {
      this.handleChange(nextValues, "tag");
    } else {
      this.handleMultipleSelect(nextValues, "tag");
    }
  };
  Select2.prototype.handleSelectAll = function handleSelectAll(e) {
    e && e.preventDefault();
    var nextValues = void 0;
    if (this.selectAllYet) {
      nextValues = [];
    } else {
      nextValues = this.dataStore.getEnableDS().map(function(item) {
        return item.value;
      });
    }
    this.handleMultipleSelect(nextValues, "selectAll");
  };
  Select2.prototype.handleVisibleChange = function handleVisibleChange(visible, type) {
    this.setVisible(visible, type);
  };
  Select2.prototype.afterClose = function afterClose() {
    if (this.hasSearch()) {
      this.handleSearchClear("popupClose");
    }
  };
  Select2.prototype.maxTagPlaceholder = function maxTagPlaceholder(selectedValues, totalValues) {
    var locale = this.props.locale;
    return "" + str.template(locale.maxTagPlaceholder, {
      selected: selectedValues.length,
      total: totalValues.length
    });
  };
  Select2.prototype.renderValues = function renderValues() {
    var _this4 = this;
    var _props6 = this.props, prefix = _props6.prefix, mode = _props6.mode, size = _props6.size, valueRender2 = _props6.valueRender, fillProps = _props6.fillProps, disabled = _props6.disabled, maxTagCount = _props6.maxTagCount, maxTagPlaceholder = _props6.maxTagPlaceholder, tagInline = _props6.tagInline, tagClosable = _props6.tagClosable;
    var value = this.state.value;
    if (isNull(value)) {
      return null;
    }
    if (!this.useDetailValue()) {
      if (value === this.valueDataSource.value) {
        value = this.valueDataSource.valueDS;
      } else {
        value = getValueDataSource(value, this.valueDataSource.mapValueDS, this.dataStore.getMapDS()).valueDS;
      }
    }
    if (mode === "single") {
      if (!value) {
        return null;
      }
      var retvalue = fillProps && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && fillProps in value ? value[fillProps] : valueRender2(value);
      return typeof retvalue === "number" ? retvalue.toString() : retvalue;
    } else if (value) {
      var limitedCountValue = value;
      var maxTagPlaceholderEl = void 0;
      var totalValue = this.dataStore.getFlattenDS();
      var holder = "maxTagPlaceholder" in this.props ? maxTagPlaceholder : this.maxTagPlaceholder;
      if (maxTagCount !== void 0 && value.length > maxTagCount && !tagInline) {
        limitedCountValue = limitedCountValue.slice(0, maxTagCount);
        maxTagPlaceholderEl = React.createElement(ConfigTag, {key: "_count", type: "primary", size: size === "large" ? "medium" : "small", animation: false}, holder(value, totalValue));
      }
      if (value.length > 0 && tagInline) {
        maxTagPlaceholderEl = React.createElement("div", {className: prefix + "select-tag-compact", key: "_count"}, holder(value, totalValue));
      }
      value = limitedCountValue;
      if (!Array.isArray(value)) {
        value = [value];
      }
      var selectedValueNodes = value.map(function(v) {
        if (!v) {
          return null;
        }
        var labelNode = fillProps ? v[fillProps] : valueRender2(v);
        return React.createElement(ConfigTag, {
          key: v.value,
          disabled: disabled || v.disabled,
          type: "primary",
          size: size === "large" ? "medium" : "small",
          animation: false,
          onClose: _this4.handleTagClose.bind(_this4, v),
          closable: tagClosable
        }, labelNode);
      });
      if (maxTagPlaceholderEl) {
        if (tagInline) {
          selectedValueNodes.unshift(maxTagPlaceholderEl);
        } else {
          selectedValueNodes.push(maxTagPlaceholderEl);
        }
      }
      return selectedValueNodes;
    }
    return null;
  };
  Select2.prototype.hasClear = function hasClear() {
    var _props7 = this.props, hasClear2 = _props7.hasClear, readOnly = _props7.readOnly, disabled = _props7.disabled, showSearch = _props7.showSearch;
    var _state = this.state, value = _state.value, visible = _state.visible;
    return typeof value !== "undefined" && value !== null && hasClear2 && !readOnly && !disabled && !(showSearch && visible);
  };
  Select2.prototype.renderExtraNode = function renderExtraNode() {
    var _props8 = this.props, hasArrow = _props8.hasArrow, hasClear = _props8.hasClear, prefix = _props8.prefix;
    var ret = [];
    if (hasArrow) {
      ret.push(React.createElement("span", {key: "arrow", "aria-hidden": true, onClick: this.handleArrowClick, className: prefix + "select-arrow"}, React.createElement(NextIcon, {type: "arrow-down", className: prefix + "select-symbol-fold"})));
    }
    if (hasClear) {
      ret.push(React.createElement("span", {key: "clear", "aria-hidden": true, onClick: this.handleClear, className: prefix + "select-clear"}, React.createElement(NextIcon, {type: "delete-filling"})));
    }
    return ret;
  };
  Select2.prototype.renderSelect = function renderSelect() {
    var _classNames, _this5 = this;
    var _props9 = this.props, prefix = _props9.prefix, showSearch = _props9.showSearch, placeholder = _props9.placeholder, mode = _props9.mode, size = _props9.size, className = _props9.className, style = _props9.style, readOnly = _props9.readOnly, disabled = _props9.disabled, hasBorder = _props9.hasBorder, label = _props9.label, locale = _props9.locale, state = _props9.state, onBlur = _props9.onBlur, onFocus = _props9.onFocus, onMouseEnter = _props9.onMouseEnter, onMouseLeave = _props9.onMouseLeave, rtl = _props9.rtl;
    var others = obj.pickOthers(Select2.propTypes, this.props);
    var othersData = obj.pickAttrsWith(others, "data-");
    var visible = this.state.visible;
    var isSingle2 = mode === "single";
    var hasSearch = this.hasSearch();
    var valueNodes = this.renderValues();
    var _placeholder = placeholder || locale.selectPlaceholder || locale.selectPlaceHolder;
    if (valueNodes && valueNodes.length) {
      _placeholder = null;
    }
    if (showSearch && visible && isSingle2 && typeof valueNodes === "string") {
      _placeholder = valueNodes;
    }
    var extra = this.renderExtraNode();
    var triggerClazz = classnames([prefix + "select", prefix + "select-trigger", prefix + "select-" + mode, "" + prefix + size, className], (_classNames = {}, _classNames[prefix + "active"] = visible, _classNames[prefix + "inactive"] = !visible, _classNames[prefix + "no-search"] = !hasSearch, _classNames[prefix + "has-search"] = hasSearch, _classNames[prefix + "select-in-ie"] = isIE9, _classNames[prefix + "select-in-ie-fixwidth"] = this.state.fixWidth, _classNames[prefix + "has-clear"] = this.hasClear(), _classNames));
    var valuetext = this.valueDataSource.valueDS ? this.valueDataSource.valueDS.label : "";
    return React.createElement("span", _extends({}, othersData, {
      className: triggerClazz,
      style,
      dir: rtl ? "rtl" : void 0,
      ref: this.saveSelectRef,
      onClick: this.handleWrapClick,
      onMouseEnter,
      onMouseLeave,
      onMouseDown: this.handleWrapClick
    }), React.createElement(NextInput, _extends({
      "aria-valuetext": valuetext
    }, obj.pickOthers(othersData, others), {
      role: "combobox",
      tabIndex: 0,
      "aria-expanded": this.state.visible,
      "aria-disabled": disabled,
      state,
      label,
      extra,
      value: this.state.searchValue,
      size,
      readOnly: !this.hasSearch() || readOnly,
      disabled,
      placeholder: _placeholder,
      hasBorder,
      hasClear: false,
      htmlSize: "1",
      inputRender: function inputRender(inputEl) {
        return _this5.renderSearchInput(valueNodes, _placeholder, inputEl);
      },
      onChange: this.handleSearch,
      onKeyDown: this.handleSearchKeyDown,
      onFocus,
      onBlur,
      className: prefix + "select-inner",
      ref: this.saveInputRef
    })), React.createElement("span", {className: prefix + "sr-only", "aria-live": "polite"}, this.state.srReader));
  };
  Select2.prototype.renderSearchInput = function renderSearchInput(valueNodes, placeholder, inputEl) {
    var _classNames2;
    var _props10 = this.props, prefix = _props10.prefix, mode = _props10.mode, tagInline = _props10.tagInline;
    var isSingle2 = mode === "single";
    var mirrorText = this.state.searchValue;
    var cls = classnames((_classNames2 = {}, _classNames2[prefix + "select-values"] = true, _classNames2[prefix + "input-text-field"] = true, _classNames2[prefix + "select-compact"] = !isSingle2 && tagInline, _classNames2));
    var searchInput = [isSingle2 && valueNodes ? React.createElement("em", {key: "select-value"}, valueNodes) : valueNodes];
    var triggerSearch = React.createElement("span", {key: "trigger-search", className: prefix + "select-trigger-search"}, inputEl, React.createElement("span", {"aria-hidden": true}, mirrorText || placeholder, " "));
    if (!isSingle2 && tagInline) {
      searchInput.unshift(triggerSearch);
    } else {
      searchInput.push(triggerSearch);
    }
    return React.createElement("span", {className: cls}, searchInput);
  };
  Select2.prototype.renderMenuHeader = function renderMenuHeader() {
    var _classNames3, _classNames4;
    var _props11 = this.props, prefix = _props11.prefix, hasSelectAll = _props11.hasSelectAll, mode = _props11.mode, locale = _props11.locale, menuProps = _props11.menuProps;
    if (menuProps && "header" in menuProps) {
      return menuProps.header;
    }
    var sourceCount = this.dataStore.getEnableDS().length;
    if (!hasSelectAll || mode === "single" || !sourceCount) {
      return null;
    }
    var text = typeof hasSelectAll === "boolean" ? locale.selectAll : hasSelectAll;
    var selectAllYet = this.selectAllYet;
    var cls = classnames((_classNames3 = {}, _classNames3[prefix + "select-all"] = true, _classNames3[prefix + "selected"] = selectAllYet, _classNames3));
    var clsInner = classnames((_classNames4 = {}, _classNames4[prefix + "select-all-inner"] = true, _classNames4));
    return React.createElement("div", {key: "all", onClick: this.handleSelectAll, className: cls, style: {lineHeight: "unset"}}, selectAllYet ? React.createElement(NextIcon, {className: prefix + "menu-icon-selected", style: {display: "none"}, type: "select"}) : null, React.createElement("span", {className: clsInner}, text));
  };
  Select2.prototype.render = function render() {
    var mode = this.props.mode;
    var props = _extends({}, this.props);
    if (this.hasSearch()) {
      props.canCloseByTrigger = false;
    }
    if (mode === "single") {
      props.cache = true;
    }
    return _Base.prototype.render.call(this, props);
  };
  return Select2;
}(Base), _class$1.propTypes = _extends({}, Base.propTypes, {
  mode: propTypes.oneOf(["single", "multiple", "tag"]),
  value: propTypes.any,
  defaultValue: propTypes.any,
  onChange: propTypes.func,
  dataSource: propTypes.arrayOf(propTypes.oneOfType([propTypes.shape({
    value: propTypes.any,
    label: propTypes.any,
    disabled: propTypes.bool,
    children: propTypes.array
  }), propTypes.bool, propTypes.number, propTypes.string])),
  hasBorder: propTypes.bool,
  hasArrow: propTypes.bool,
  showSearch: propTypes.bool,
  onSearch: propTypes.func,
  onSearchClear: propTypes.func,
  hasSelectAll: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  fillProps: propTypes.string,
  useDetailValue: propTypes.bool,
  cacheValue: propTypes.bool,
  valueRender: propTypes.func,
  itemRender: propTypes.func,
  notFoundContent: propTypes.node,
  style: propTypes.object,
  searchValue: propTypes.string,
  tagInline: propTypes.bool,
  tagClosable: propTypes.bool,
  maxTagCount: propTypes.number,
  maxTagPlaceholder: propTypes.func,
  hiddenSelected: propTypes.bool,
  onRemove: propTypes.func,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
  onKeyDown: propTypes.func,
  locale: propTypes.object,
  popupAutoFocus: propTypes.bool,
  showDataSourceChildren: propTypes.bool
}), _class$1.defaultProps = _extends({}, Base.defaultProps, {
  locale: zhCN.Select,
  mode: "single",
  showSearch: false,
  cacheValue: true,
  tagInline: false,
  onSearch: noop$1,
  onSearchClear: noop$1,
  hasArrow: true,
  onRemove: noop$1,
  valueRender: function valueRender(item) {
    return item.label || item.value;
  },
  onKeyDown: noop$1,
  onFocus: noop$1,
  onBlur: noop$1,
  onMouseEnter: noop$1,
  onMouseLeave: noop$1,
  popupAutoFocus: false,
  tagClosable: true
}), _class$1.displayName = "Select", _temp$1);
var Select$1 = polyfill(Select);
var _class$2, _temp$2;
var bindCtx$2 = func.bindCtx, noop$2 = func.noop;
var AutoComplete = (_temp$2 = _class$2 = function(_Base) {
  _inherits(AutoComplete2, _Base);
  function AutoComplete2(props) {
    _classCallCheck(this, AutoComplete2);
    var _this = _possibleConstructorReturn(this, _Base.call(this, props));
    _this.handleChange = function(value, proxy, item) {
      var _this$props = _this.props, disabled = _this$props.disabled, readOnly = _this$props.readOnly, filterLocal = _this$props.filterLocal;
      if (disabled || readOnly) {
        return false;
      }
      var actionType = typeof proxy === "string" ? proxy : "change";
      _this.isInputing = actionType === "change";
      if (filterLocal) {
        _this.setState({
          dataSource: _this.dataStore.updateByKey(value)
        });
        _this.shouldControlPopup(_this.props, actionType);
        _this.setFirstHightLightKeyForMenu();
      }
      if (!("value" in _this.props)) {
        _this.setState({
          value
        });
      }
      _this.props.onChange(value, actionType, item);
      if (actionType === "itemClick" || actionType === "enter") {
        _this.setVisible(false, actionType);
      }
    };
    _this.isAutoComplete = true;
    _this.isInputing = false;
    _this.dataStore.setOptions({key: _this.state.value});
    _extends(_this.state, {
      dataSource: _this.setDataSource(props)
    });
    bindCtx$2(_this, ["handleTriggerKeyDown", "handleMenuSelect", "handleItemClick"]);
    return _this;
  }
  AutoComplete2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var state = {};
    if ("value" in nextProps && nextProps.value !== prevState.value) {
      _extends(state, {
        value: nextProps.value
      });
    }
    if ("visible" in nextProps && nextProps.visible !== prevState.visible) {
      _extends(state, {
        visible: nextProps.visible
      });
    }
    if (Object.keys(state).length) {
      return state;
    }
    return null;
  };
  AutoComplete2.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var props = this.props;
    if ("value" in props) {
      this.dataStore.setOptions({key: props.value});
    }
    if (props.filter !== prevProps.filter) {
      this.dataStore.setOptions({
        filter: props.filter
      });
    }
    if (props.filterLocal !== prevProps.filterLocal) {
      this.dataStore.setOptions({
        filterLocal: props.filterLocal
      });
    }
    if (prevProps.children !== props.children || prevProps.dataSource !== props.dataSource) {
      this.setState({
        dataSource: this.setDataSource(props)
      });
      if (!props.filterLocal && this.isInputing) {
        this.shouldControlPopup(props, "update");
      }
      if (!props.filterLocal && !props.popupContent) {
        this.setFirstHightLightKeyForMenu();
      }
    }
  };
  AutoComplete2.prototype.shouldControlPopup = function shouldControlPopup() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
    var type = arguments[1];
    var hasPopup = props.popupContent || this.dataStore.getMenuDS().length;
    if (hasPopup) {
      this.setVisible(true, type);
    } else {
      this.setVisible(false, type);
    }
  };
  AutoComplete2.prototype.handleMenuSelect = function handleMenuSelect(keys) {
    var key = keys[0];
    var mapDS = this.dataStore.getMapDS();
    if (key in mapDS) {
      var item = mapDS[key];
      this.handleSelectEvent(key, item, "itemClick");
    }
  };
  AutoComplete2.prototype.handleItemClick = function handleItemClick() {
    this.setVisible(false, "itemClick");
  };
  AutoComplete2.prototype.handleSelectEvent = function handleSelectEvent(key, item, triggerType) {
    var value = item && item[this.props.fillProps] || key;
    if (triggerType === "itemClick" || triggerType === "enter") {
      this.setVisible(false, triggerType);
    }
    this.handleChange(value, triggerType, item);
  };
  AutoComplete2.prototype.handleVisibleChange = function handleVisibleChange(visible, type) {
    if (!("visible" in this.props) && visible && !this.props.popupContent && !this.dataStore.getMenuDS().length) {
      return;
    }
    this.setVisible(visible, type);
  };
  AutoComplete2.prototype.beforeClose = function beforeClose() {
    this.isInputing = false;
  };
  AutoComplete2.prototype.handleTriggerKeyDown = function handleTriggerKeyDown(e) {
    var _props = this.props, popupContent = _props.popupContent, onToggleHighlightItem = _props.onToggleHighlightItem, onKeyDown = _props.onKeyDown;
    if (popupContent) {
      e.stopPropagation();
      return onKeyDown(e);
    }
    switch (e.keyCode) {
      case KEYCODE.UP:
        e.preventDefault();
        onToggleHighlightItem(this.toggleHighlightItem(-1, e), "up");
        break;
      case KEYCODE.DOWN:
        e.preventDefault();
        onToggleHighlightItem(this.toggleHighlightItem(1, e), "down");
        break;
      case KEYCODE.ENTER:
        e.preventDefault();
        this.chooseHighlightItem(e);
        break;
      case KEYCODE.SPACE:
        e.stopPropagation();
        break;
      case KEYCODE.ESC:
        e.preventDefault();
        this.state.visible && this.setVisible(false, "esc");
        break;
    }
    onKeyDown(e);
  };
  AutoComplete2.prototype.chooseHighlightItem = function chooseHighlightItem() {
    if (!this.state.visible) {
      return false;
    }
    var highlightKey = this.state.highlightKey;
    var highlightItem = this.dataStore.getEnableDS().find(function(item) {
      return highlightKey === "" + item.value;
    });
    if (highlightItem) {
      this.handleSelectEvent(highlightKey, highlightItem, "enter");
    }
  };
  AutoComplete2.prototype.hasClear = function hasClear() {
    var _props2 = this.props, hasClear2 = _props2.hasClear, readOnly = _props2.readOnly, disabled = _props2.disabled;
    var value = this.state.value;
    return value && hasClear2 && !readOnly && !disabled;
  };
  AutoComplete2.prototype.renderSelect = function renderSelect() {
    var _classNames;
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
    var placeholder = props.placeholder, size = props.size, prefix = props.prefix, className = props.className, style = props.style, label = props.label, readOnly = props.readOnly, disabled = props.disabled, highlightHolder = props.highlightHolder, locale = props.locale, hasClear = props.hasClear, state = props.state, rtl = props.rtl;
    var others = obj.pickOthers(AutoComplete2.propTypes, props);
    var othersData = obj.pickAttrsWith(others, "data-");
    var value = this.state.value;
    var visible = this.state.visible;
    var triggerClazz = classnames([prefix + "select", prefix + "select-auto-complete", prefix + "size-" + size, className], (_classNames = {}, _classNames[prefix + "active"] = visible, _classNames[prefix + "disabled"] = disabled, _classNames));
    var _placeholder = placeholder || locale.autoCompletePlaceholder || locale.autoCompletePlaceHolder;
    if (highlightHolder && visible) {
      _placeholder = this.state.highlightKey || _placeholder;
    }
    var _inputProps = _extends({}, obj.pickOthers(othersData, others), {
      state,
      ref: this.saveInputRef,
      hasClear,
      value,
      size,
      disabled,
      readOnly,
      placeholder: _placeholder,
      label,
      onChange: this.handleChange,
      onKeyDown: this.handleTriggerKeyDown
    });
    return React.createElement("span", _extends({}, othersData, {
      className: triggerClazz,
      style,
      dir: rtl ? "rtl" : void 0,
      ref: this.saveSelectRef,
      onClick: this.focusInput
    }), React.createElement(NextInput, _extends({
      role: "combobox",
      "aria-autocomplete": "list",
      "aria-disabled": disabled,
      "aria-expanded": this.state.visible
    }, _inputProps)), React.createElement("span", {className: prefix + "sr-only", "aria-live": "polite"}, this.state.srReader));
  };
  AutoComplete2.prototype.render = function render() {
    var _this2 = this;
    if (this.hasClear()) {
      var safeNode = this.props.popupProps.safeNode || [];
      var safeNodes = Array.isArray(safeNode) ? safeNode : [safeNode];
      safeNodes.push(function() {
        return _this2.clearNode;
      });
      this.props.popupProps.safeNode = safeNodes;
    }
    return _Base.prototype.render.call(this, _extends({}, this.props, {canCloseByTrigger: false}));
  };
  return AutoComplete2;
}(Base), _class$2.propTypes = _extends({}, Base.propTypes, {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  defaultValue: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  dataSource: propTypes.arrayOf(propTypes.oneOfType([propTypes.shape({
    value: propTypes.string,
    label: propTypes.any,
    disabled: propTypes.bool,
    children: propTypes.array
  }), propTypes.string])),
  fillProps: propTypes.string,
  itemRender: propTypes.func,
  onKeyDown: propTypes.func,
  highlightHolder: propTypes.bool,
  style: propTypes.object
}), _class$2.defaultProps = _extends({}, Base.defaultProps, {
  onKeyDown: noop$2,
  fillProps: "value"
}), _temp$2);
var AutoComplete$1 = polyfill(AutoComplete);
var _class$3, _temp$3;
var Option = (_temp$3 = _class$3 = function(_React$Component) {
  _inherits(Option2, _React$Component);
  function Option2() {
    _classCallCheck(this, Option2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  Option2.prototype.render = function render() {
    return this.props.children;
  };
  return Option2;
}(React.Component), _class$3.propTypes = {
  value: propTypes.any.isRequired,
  disabled: propTypes.bool,
  children: propTypes.any
}, _class$3._typeMark = "next_select_option", _temp$3);
Option.displayName = "Option";
var _class$4, _temp$4;
var OptionGroup = (_temp$4 = _class$4 = function(_React$Component) {
  _inherits(OptionGroup2, _React$Component);
  function OptionGroup2() {
    _classCallCheck(this, OptionGroup2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  OptionGroup2.prototype.render = function render() {
    return this.props.children;
  };
  return OptionGroup2;
}(React.Component), _class$4.propTypes = {
  label: propTypes.node,
  children: propTypes.any
}, _class$4._typeMark = "next_select_option_group", _temp$4);
OptionGroup.displayName = "OptionGroup";
Select$1.AutoComplete = NextConfigProvider.config(AutoComplete$1, {
  componentName: "Select"
});
Select$1.Option = Option;
Select$1.OptionGroup = OptionGroup;
function _transform(props, deprecated) {
  var shape = props.shape, container = props.container, multiple = props.multiple, filterBy = props.filterBy, overlay = props.overlay, safeNode = props.safeNode, noFoundContent = props.noFoundContent, others = _objectWithoutProperties(props, ["shape", "container", "multiple", "filterBy", "overlay", "safeNode", "noFoundContent"]);
  var newprops = others;
  if (shape === "arrow-only") {
    deprecated("shape=arrow-only", "hasBorder=false", "Select");
    newprops.hasBorder = false;
  }
  if (container) {
    deprecated("container", "popupContainer", "Select");
    newprops.popupContainer = container;
  }
  if (multiple) {
    deprecated("multiple", "mode=multiple", "Select");
    newprops.mode = "multiple";
  }
  if (filterBy) {
    deprecated("filterBy", "filter", "Select");
    newprops.filter = filterBy;
  }
  if (overlay) {
    deprecated("overlay", "popupContent", "Select");
    newprops.popupContent = overlay;
    newprops.autoWidth = false;
  }
  if (noFoundContent) {
    deprecated("noFoundContent", "notFoundContent", "Select");
    newprops.notFoundContent = noFoundContent;
  }
  if (safeNode) {
    deprecated("safeNode", "popupProps={safeNode}", "Select");
    newprops.popupProps = {
      safeNode
    };
  }
  return newprops;
}
Select$1.Combobox = NextConfigProvider.config(Select$1, {
  transform: function transform(props, deprecated) {
    deprecated("Select.Combobox", "<Select showSearch={true}/>", "Select");
    var newprops = _transform(props, deprecated);
    if (props.onInputUpdate) {
      newprops.onSearch = props.onInputUpdate;
      newprops.showSearch = true;
    }
    return newprops;
  }
});
var NextSelect = NextConfigProvider.config(Select$1, {
  transform: _transform,
  exportNames: ["focusInput", "handleSearchClear"]
});
export {NextSelect as N};
