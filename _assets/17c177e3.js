import {p as polyfill, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, j as _objectWithoutProperties, d as classnames, l as isValidElement, R as React, e as _extends, g as propTypes} from "./index.77174d20.js";
import {o as obj, f as func, K as KEYCODE} from "./6d58cf57.js";
import {z as zhCN, N as NextConfigProvider} from "./005127c8.js";
import {N as NextIcon} from "./4c162080.js";
import {N as NextButton} from "./328c3b2d.js";
import {N as NextInput} from "./083d7732.js";
import {N as NextSelect} from "./05a49538.js";
var _class, _temp, _initialiseProps;
var Group = NextInput.Group;
var AutoComplete = NextSelect.AutoComplete;
var Search = (_temp = _class = function(_React$Component) {
  _inherits(Search2, _React$Component);
  function Search2(props) {
    _classCallCheck(this, Search2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
    _initialiseProps.call(_this);
    var value = "value" in props ? props.value : props.defaultValue;
    var filterValue = "filterValue" in props ? props.filterValue : props.defaultFilterValue;
    _this.state = {
      value: typeof value === "undefined" ? "" : value,
      filterValue
    };
    _this.highlightKey = null;
    return _this;
  }
  Search2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var nextState = {};
    if ("value" in nextProps && nextProps.value !== prevState.value) {
      var value = nextProps.value;
      nextState.value = value === void 0 || value === null ? "" : nextProps.value;
    }
    if ("filterValue" in nextProps && nextProps.filterValue !== prevState.filterValue) {
      var filterValue = nextProps.filterValue;
      nextState.filterValue = filterValue === void 0 ? "" : filterValue;
    }
    if (Object.keys(nextState).length > 0) {
      return nextState;
    }
    return null;
  };
  Search2.prototype.focus = function focus() {
    var _inputRef;
    (_inputRef = this.inputRef).focus.apply(_inputRef, arguments);
  };
  Search2.prototype.render = function render() {
    var _classNames;
    var _props = this.props, shape = _props.shape, filter = _props.filter, hasIcon = _props.hasIcon, disabled = _props.disabled, placeholder = _props.placeholder, type = _props.type, className = _props.className, style = _props.style, size = _props.size, prefix = _props.prefix, searchText = _props.searchText, dataSource = _props.dataSource, filterProps = _props.filterProps, buttonProps = _props.buttonProps, popupContent = _props.popupContent, followTrigger = _props.followTrigger, hasClear = _props.hasClear, visible = _props.visible, locale = _props.locale, rtl = _props.rtl, icons = _props.icons, autoHighlightFirstItem = _props.autoHighlightFirstItem, others = _objectWithoutProperties(_props, ["shape", "filter", "hasIcon", "disabled", "placeholder", "type", "className", "style", "size", "prefix", "searchText", "dataSource", "filterProps", "buttonProps", "popupContent", "followTrigger", "hasClear", "visible", "locale", "rtl", "icons", "autoHighlightFirstItem"]);
    var cls = classnames((_classNames = {}, _classNames[prefix + "search"] = true, _classNames[prefix + "search-" + shape] = true, _classNames["" + prefix + type] = type, _classNames["" + prefix + size] = size, _classNames[prefix + "disabled"] = !!disabled, _classNames[className] = !!className, _classNames));
    var searchIcon = null, filterSelect = null, searchBtn = null, iconsSearch = icons.search;
    if (!isValidElement(icons.search) && icons.search) {
      iconsSearch = React.createElement("span", null, icons.search);
    }
    if (shape === "simple") {
      var _classNames2;
      var _cls = classnames((_classNames2 = {}, _classNames2[prefix + "search-icon"] = true, _classNames2[buttonProps.className] = !!buttonProps.className, _classNames2[prefix + "search-symbol-icon"] = !iconsSearch, _classNames2));
      hasIcon && (searchIcon = React.cloneElement(iconsSearch || React.createElement(NextIcon, {type: "search"}), _extends({
        role: "button",
        "aria-disabled": disabled,
        "aria-label": locale.buttonText
      }, buttonProps, {
        className: _cls,
        onClick: this.onSearch,
        onKeyDown: this.onKeyDown
      })));
    } else {
      var _classNames3;
      var _cls2 = classnames((_classNames3 = {}, _classNames3[prefix + "search-btn"] = true, _classNames3[buttonProps.className] = !!buttonProps.className, _classNames3));
      searchBtn = React.createElement(NextButton, _extends({
        tabIndex: "0",
        "aria-disabled": disabled,
        "aria-label": locale.buttonText,
        className: _cls2,
        disabled
      }, buttonProps, {
        onClick: this.onSearch,
        onKeyDown: this.onKeyDown
      }), hasIcon ? iconsSearch || React.createElement(NextIcon, {type: "search", className: prefix + "search-symbol-icon"}) : null, searchText ? React.createElement("span", {className: prefix + "search-btn-text"}, searchText) : null);
    }
    if (filter.length > 0) {
      filterSelect = React.createElement(NextSelect, _extends({}, filterProps, {
        followTrigger,
        hasBorder: false,
        dataSource: filter,
        size,
        disabled,
        value: this.state.filterValue,
        onChange: this.onFilterChange
      }));
    }
    var othersAttributes = obj.pickOthers(Search2.propTypes, others);
    if (visible !== void 0) {
      othersAttributes.visible = Boolean(visible);
    }
    var dataAttr = obj.pickAttrsWith(others, "data-");
    var left = React.createElement(Group, {
      addonBefore: filterSelect,
      className: prefix + "search-left",
      addonBeforeClassName: prefix + "search-left-addon"
    }, React.createElement(AutoComplete, _extends({
      "aria-label": locale.buttonText
    }, othersAttributes, {
      followTrigger,
      role: "searchbox",
      hasClear,
      className: prefix + "search-input",
      size,
      placeholder,
      dataSource,
      innerAfter: searchIcon,
      onPressEnter: this.onPressEnter,
      value: this.state.value,
      onChange: this.onChange,
      onToggleHighlightItem: this.onToggleHighlightItem,
      autoHighlightFirstItem,
      popupContent,
      disabled,
      ref: this.saveInputRef
    })));
    return React.createElement("span", _extends({className: cls, style}, dataAttr, {dir: rtl ? "rtl" : void 0}), searchBtn ? React.createElement(Group, {addonAfter: searchBtn}, left) : left);
  };
  return Search2;
}(React.Component), _class.propTypes = {
  prefix: propTypes.string,
  shape: propTypes.oneOf(["normal", "simple"]),
  type: propTypes.oneOf(["primary", "secondary", "normal", "dark"]),
  size: propTypes.oneOf(["large", "medium"]),
  defaultValue: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  onSearch: propTypes.func,
  defaultFilterValue: propTypes.string,
  filter: propTypes.array,
  filterValue: propTypes.string,
  onFilterChange: propTypes.func,
  dataSource: propTypes.array,
  placeholder: propTypes.string,
  searchText: propTypes.node,
  style: propTypes.object,
  className: propTypes.string,
  filterProps: propTypes.object,
  buttonProps: propTypes.object,
  popupContent: propTypes.node,
  followTrigger: propTypes.bool,
  visible: propTypes.bool,
  hasClear: propTypes.bool,
  hasIcon: propTypes.bool,
  disabled: propTypes.bool,
  locale: propTypes.object,
  rtl: propTypes.bool,
  icons: propTypes.object,
  autoHighlightFirstItem: propTypes.bool
}, _class.defaultProps = {
  prefix: "next-",
  shape: "normal",
  type: "normal",
  size: "medium",
  hasIcon: true,
  filter: [],
  locale: zhCN.Search,
  buttonProps: {},
  onChange: func.noop,
  onSearch: func.noop,
  onFilterChange: func.noop,
  hasClear: false,
  disabled: false,
  icons: {},
  autoHighlightFirstItem: true
}, _initialiseProps = function _initialiseProps2() {
  var _this2 = this;
  this.onChange = function(value, type) {
    for (var _len = arguments.length, argv = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      argv[_key - 2] = arguments[_key];
    }
    var _props2;
    if (_this2.props.disabled) {
      return;
    }
    if (!("value" in _this2.props)) {
      _this2.setState({value});
    }
    (_props2 = _this2.props).onChange.apply(_props2, [value, type].concat(argv));
    if (type === "enter") {
      _this2.highlightKey = "";
      _this2.props.onSearch(value, _this2.state.filterValue);
    }
  };
  this.onPressEnter = function() {
    if (_this2.highlightKey) {
      return;
    }
    _this2.onSearch();
  };
  this.onSearch = function() {
    if (_this2.props.disabled) {
      return;
    }
    _this2.props.onSearch(_this2.state.value, _this2.state.filterValue);
  };
  this.onFilterChange = function(filterValue) {
    if (!("filterValue" in _this2.props)) {
      _this2.setState({filterValue});
    }
    _this2.props.onFilterChange(filterValue);
  };
  this.onToggleHighlightItem = function(highlightKey) {
    _this2.highlightKey = highlightKey;
  };
  this.onKeyDown = function(e) {
    if (_this2.props.disabled) {
      return;
    }
    if (e.keyCode !== KEYCODE.ENTER) {
      return;
    }
    _this2.onSearch();
  };
  this.saveInputRef = function(ref) {
    if (ref && ref.getInstance()) {
      _this2.inputRef = ref.getInstance();
    }
  };
}, _temp);
Search.displayName = "Search";
var Search$1 = polyfill(Search);
var NextSearch = NextConfigProvider.config(Search$1, {
  transfrom: function transfrom(props, deprecated) {
    var onInputFocus = props.onInputFocus, overlayVisible = props.overlayVisible, combox = props.combox, others = _objectWithoutProperties(props, ["onInputFocus", "overlayVisible", "combox"]);
    var newprops = others;
    if (onInputFocus) {
      deprecated("onInputFocus", "onFocus", "Search");
      newprops.onFocus = onInputFocus;
    }
    if ("overlayVisible" in props) {
      deprecated("overlayVisible", "visible", "Search");
      newprops.visible = overlayVisible;
    }
    if (combox) {
      deprecated("combox", "popupContent", "Search");
      newprops.popupContent = combox;
    }
    return newprops;
  }
});
export {NextSearch as N};
