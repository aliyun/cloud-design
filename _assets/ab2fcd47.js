import {p as polyfill, j as func, o as obj, t as dom, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, g as _extends, K as KEYCODE, R as React, E as NextMenu, d as classnames, B as NextSelect, C as Component, i as propTypes, N as NextConfigProvider, k as _objectWithoutProperties, O as HOC, c as createElement, s as NextIcon, D as Radio, I as Checkbox} from "./index.8a2425f4.js";
import {N as NextCascader} from "./79c43778.js";
import {q as qe} from "./331485eb.js";
var _class, _temp;
var bindCtx = func.bindCtx;
var pickOthers = obj.pickOthers;
var getStyle = dom.getStyle;
var normalizeValue = function normalizeValue2(value) {
  if (value) {
    if (Array.isArray(value)) {
      return value;
    }
    return [value];
  }
  return [];
};
var CascaderSelect = (_temp = _class = function(_Component) {
  _inherits(CascaderSelect2, _Component);
  function CascaderSelect2(props, context) {
    _classCallCheck(this, CascaderSelect2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
    _this.state = {
      value: normalizeValue("value" in props ? props.value : props.defaultValue),
      searchValue: "",
      visible: typeof props.visible === "undefined" ? props.defaultVisible : props.visible
    };
    bindCtx(_this, ["handleVisibleChange", "handleAfterOpen", "handleSelect", "handleChange", "handleClear", "handleRemove", "handleSearch", "getPopup", "saveSelectRef", "saveCascaderRef", "handleKeyDown"]);
    return _this;
  }
  CascaderSelect2.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
    var st = {};
    if ("value" in props) {
      st.value = normalizeValue(props.value);
    }
    if ("visible" in props) {
      st.visible = props.visible;
    }
    return st;
  };
  CascaderSelect2.prototype.updateCache = function updateCache(dataSource2) {
    var _this2 = this;
    this._v2n = {};
    this._p2n = {};
    var loop = function loop2(data2) {
      var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "0";
      return data2.forEach(function(item, index) {
        var value = item.value, children = item.children;
        var pos = prefix + "-" + index;
        _this2._v2n[value] = _this2._p2n[pos] = _extends({}, item, {pos});
        if (children && children.length) {
          loop2(children, pos);
        }
      });
    };
    loop(dataSource2);
  };
  CascaderSelect2.prototype.flatValue = function flatValue(value) {
    var _this3 = this;
    var getDepth = function getDepth2(v) {
      var pos = _this3.getPos(v);
      if (!pos) {
        return 0;
      }
      return pos.split("-").length;
    };
    var newValue = value.slice(0).sort(function(prev, next) {
      return getDepth(prev) - getDepth(next);
    });
    for (var i = 0; i < newValue.length; i++) {
      for (var j = 0; j < newValue.length; j++) {
        if (i !== j && this.isDescendantOrSelf(this.getPos(newValue[i]), this.getPos(newValue[j]))) {
          newValue.splice(j, 1);
          j--;
        }
      }
    }
    return newValue;
  };
  CascaderSelect2.prototype.isDescendantOrSelf = function isDescendantOrSelf(currentPos, targetPos) {
    if (!currentPos || !targetPos) {
      return false;
    }
    var currentNums = currentPos.split("-");
    var targetNums = targetPos.split("-");
    return currentNums.length <= targetNums.length && currentNums.every(function(num, index) {
      return num === targetNums[index];
    });
  };
  CascaderSelect2.prototype.getValue = function getValue(pos) {
    return this._p2n[pos] ? this._p2n[pos].value : null;
  };
  CascaderSelect2.prototype.getPos = function getPos(value) {
    return this._v2n[value] ? this._v2n[value].pos : null;
  };
  CascaderSelect2.prototype.getData = function getData(value) {
    var _this4 = this;
    return value.map(function(v) {
      return _this4._v2n[v];
    });
  };
  CascaderSelect2.prototype.getLabelPath = function getLabelPath(data2) {
    var _this5 = this;
    var nums = data2.pos.split("-");
    return nums.slice(1).reduce(function(ret, num, index) {
      var p = nums.slice(0, index + 2).join("-");
      ret.push(_this5._p2n[p].label);
      return ret;
    }, []);
  };
  CascaderSelect2.prototype.getSignleData = function getSignleData(value) {
    if (!value.length) {
      return null;
    }
    if (Array.isArray(value))
      value = value[0];
    var data2 = this._v2n[value];
    if (!data2) {
      return {
        value
      };
    }
    var labelPath = this.getLabelPath(data2);
    var displayRender = this.props.displayRender || function(labels) {
      return labels.join(" / ");
    };
    return _extends({}, data2, {
      label: displayRender(labelPath, data2)
    });
  };
  CascaderSelect2.prototype.getMultipleData = function getMultipleData(value) {
    var _this6 = this;
    if (!value.length) {
      return null;
    }
    var _props = this.props, checkStrictly = _props.checkStrictly, canOnlyCheckLeaf = _props.canOnlyCheckLeaf, displayRender = _props.displayRender;
    var data2 = (checkStrictly || canOnlyCheckLeaf ? value : this.flatValue(value)).map(function(v) {
      return _this6._v2n[v] || {value: v};
    });
    if (displayRender) {
      data2 = data2.map(function(item) {
        if (!item.pos) {
          return item;
        }
        var labelPath = _this6.getLabelPath(item);
        return _extends({}, item, {
          label: displayRender(labelPath, item)
        });
      });
    }
    return data2;
  };
  CascaderSelect2.prototype.getIndeterminate = function getIndeterminate(value) {
    var _this7 = this;
    var indeterminate = [];
    var positions = value.map(this.getPos.bind(this));
    positions.forEach(function(pos) {
      if (!pos) {
        return false;
      }
      var nums = pos.split("-");
      for (var i = nums.length; i > 2; i--) {
        var parentPos = nums.slice(0, i - 1).join("-");
        var parentValue = _this7.getValue(parentPos);
        if (indeterminate.indexOf(parentValue) === -1) {
          indeterminate.push(parentValue);
        }
      }
    });
    return indeterminate;
  };
  CascaderSelect2.prototype.saveSelectRef = function saveSelectRef(ref) {
    this.select = ref;
  };
  CascaderSelect2.prototype.saveCascaderRef = function saveCascaderRef(ref) {
    this.cascader = ref;
  };
  CascaderSelect2.prototype.completeValue = function completeValue(value) {
    var newValue = [];
    var flatValue = this.flatValue(value).reverse();
    var ps = Object.keys(this._p2n);
    for (var i = 0; i < ps.length; i++) {
      for (var j = 0; j < flatValue.length; j++) {
        var v = flatValue[j];
        if (this.isDescendantOrSelf(this.getPos(v), ps[i])) {
          newValue.push(this.getValue(ps[i]));
          ps.splice(i, 1);
          i--;
          break;
        }
      }
    }
    return newValue;
  };
  CascaderSelect2.prototype.isLeaf = function isLeaf(data2) {
    return !(data2.children && data2.children.length || !!this.props.loadData && !data2.isLeaf);
  };
  CascaderSelect2.prototype.handleVisibleChange = function handleVisibleChange(visible, type) {
    var searchValue = this.state.searchValue;
    if (!("visible" in this.props)) {
      this.setState({
        visible
      });
    }
    if (!visible && searchValue) {
      this.setState({
        searchValue: ""
      });
    }
    if (["fromCascader", "keyboard"].indexOf(type) !== -1 && !visible) {
      this.select.focusInput();
    }
    this.props.onVisibleChange(visible, type);
  };
  CascaderSelect2.prototype.handleKeyDown = function handleKeyDown(e) {
    var onKeyDown = this.props.onKeyDown;
    var visible = this.state.visible;
    if (onKeyDown) {
      onKeyDown(e);
    }
    if (!visible) {
      return;
    }
    switch (e.keyCode) {
      case KEYCODE.UP:
      case KEYCODE.DOWN:
        this.cascader.setFocusValue();
        e.preventDefault();
        break;
    }
  };
  CascaderSelect2.prototype.getPopup = function getPopup(ref) {
    this.popup = ref;
    if (typeof this.props.popupProps.ref === "function") {
      this.props.popupProps.ref(ref);
    }
  };
  CascaderSelect2.prototype.handleAfterOpen = function handleAfterOpen() {
    if (!this.popup) {
      return;
    }
    var _props2 = this.props, prefix = _props2.prefix, popupProps = _props2.popupProps;
    var dropDownNode = this.popup.getInstance().overlay.getInstance().getContentNode();
    var cascaderNode = dropDownNode.querySelector("." + prefix + "cascader");
    if (cascaderNode) {
      this.cascaderHeight = getStyle(cascaderNode, "height");
    }
    if (typeof popupProps.afterOpen === "function") {
      popupProps.afterOpen();
    }
  };
  CascaderSelect2.prototype.handleSelect = function handleSelect(value, data2) {
    var _props3 = this.props, multiple = _props3.multiple, changeOnSelect = _props3.changeOnSelect;
    var _state = this.state, visible = _state.visible, searchValue = _state.searchValue;
    if (!multiple && (!changeOnSelect || this.isLeaf(data2) || !!searchValue)) {
      this.handleVisibleChange(!visible, "fromCascader");
    }
  };
  CascaderSelect2.prototype.handleChange = function handleChange(value, data2, extra) {
    var _this8 = this;
    var _props4 = this.props, multiple = _props4.multiple, onChange = _props4.onChange;
    var _state2 = this.state, searchValue = _state2.searchValue, stateValue = _state2.value;
    var st = {};
    if (multiple && stateValue && Array.isArray(stateValue)) {
      value = [].concat(stateValue.filter(function(v) {
        return !_this8._v2n[v];
      }), value);
    }
    if (!("value" in this.props)) {
      st.value = value;
    }
    if (!multiple && searchValue) {
      st.searchValue = "";
    }
    if (Object.keys(st).length) {
      this.setState(st);
    }
    if (onChange) {
      onChange(value, data2, extra);
    }
    if (searchValue && this.select) {
      this.select.handleSearchClear();
    }
  };
  CascaderSelect2.prototype.handleClear = function handleClear() {
    var _props5 = this.props, hasClear = _props5.hasClear, multiple = _props5.multiple, treeCheckable = _props5.treeCheckable;
    if (hasClear && (!multiple || !treeCheckable)) {
      if (!("value" in this.props)) {
        this.setState({
          value: []
        });
      }
      this.props.onChange(null, null);
    }
  };
  CascaderSelect2.prototype.handleRemove = function handleRemove(currentData) {
    var currentValue = currentData.value;
    var value = void 0;
    var _props6 = this.props, multiple = _props6.multiple, checkStrictly = _props6.checkStrictly, onChange = _props6.onChange;
    if (multiple) {
      value = [].concat(this.state.value);
      value.splice(value.indexOf(currentValue), 1);
      if (this.props.onChange) {
        var data2 = this.getData(value);
        var checked = false;
        if (checkStrictly) {
          this.props.onChange(value, data2, {
            checked,
            currentData,
            checkedData: data2
          });
        } else {
          var checkedValue = this.completeValue(value);
          var checkedData = this.getData(checkedValue);
          var indeterminateValue = this.getIndeterminate(value);
          var indeterminateData = this.getData(indeterminateValue);
          this.props.onChange(value, data2, {
            checked,
            currentData,
            checkedData,
            indeterminateData
          });
        }
      }
    } else {
      value = [];
      onChange(null, null);
    }
    if (!("value" in this.props)) {
      this.setState({
        value
      });
    }
  };
  CascaderSelect2.prototype.handleSearch = function handleSearch(searchValue) {
    this.setState({
      searchValue
    });
  };
  CascaderSelect2.prototype.getPath = function getPath(pos) {
    var items = [];
    var nums = pos.split("-");
    if (nums === 2) {
      items.push(this._p2n[pos]);
    } else {
      for (var i = 1; i < nums.length; i++) {
        var p = nums.slice(0, i + 1).join("-");
        items.push(this._p2n[p]);
      }
    }
    return items;
  };
  CascaderSelect2.prototype.filterItems = function filterItems() {
    var _this9 = this;
    var _props7 = this.props, multiple = _props7.multiple, changeOnSelect = _props7.changeOnSelect, canOnlyCheckLeaf = _props7.canOnlyCheckLeaf, filter2 = _props7.filter;
    var searchValue = this.state.searchValue;
    var items = Object.keys(this._p2n).map(function(p) {
      return _this9._p2n[p];
    });
    if (!multiple && !changeOnSelect || multiple && canOnlyCheckLeaf) {
      items = items.filter(function(item) {
        return !item.children || !item.children.length;
      });
    }
    return items.map(function(item) {
      return _this9.getPath(item.pos);
    }).filter(function(path) {
      return filter2(searchValue, path);
    });
  };
  CascaderSelect2.prototype.renderNotFound = function renderNotFound() {
    var _props8 = this.props, prefix = _props8.prefix, notFoundContent = _props8.notFoundContent;
    return React.createElement(NextMenu, {className: prefix + "cascader-select-not-found"}, React.createElement(NextMenu.Item, null, notFoundContent));
  };
  CascaderSelect2.prototype.renderCascader = function renderCascader() {
    var dataSource2 = this.props.dataSource;
    if (dataSource2.length === 0) {
      return this.renderNotFound();
    }
    var searchValue = this.state.searchValue;
    var filteredPaths = [];
    if (searchValue) {
      filteredPaths = this.filterItems();
      if (filteredPaths.length === 0) {
        return this.renderNotFound();
      }
    }
    var _props9 = this.props, multiple = _props9.multiple, useVirtual = _props9.useVirtual, changeOnSelect = _props9.changeOnSelect, checkStrictly = _props9.checkStrictly, canOnlyCheckLeaf = _props9.canOnlyCheckLeaf, defaultExpandedValue = _props9.defaultExpandedValue, expandTriggerType = _props9.expandTriggerType, onExpand2 = _props9.onExpand, listStyle = _props9.listStyle, listClassName = _props9.listClassName, loadData = _props9.loadData, showSearch = _props9.showSearch, resultRender2 = _props9.resultRender, readOnly = _props9.readOnly, itemRender2 = _props9.itemRender;
    var value = this.state.value;
    var props = {
      dataSource: dataSource2,
      value,
      multiple,
      useVirtual,
      canOnlySelectLeaf: !changeOnSelect,
      checkStrictly,
      canOnlyCheckLeaf,
      defaultExpandedValue,
      expandTriggerType,
      ref: this.saveCascaderRef,
      onExpand: onExpand2,
      listStyle,
      listClassName,
      loadData,
      itemRender: itemRender2
    };
    if ("expandedValue" in this.props) {
      props.expandedValue = this.props.expandedValue;
    }
    if (!readOnly) {
      props.onChange = this.handleChange;
      props.onSelect = this.handleSelect;
    }
    if (showSearch) {
      props.searchValue = searchValue;
      props.filteredPaths = filteredPaths;
      props.resultRender = resultRender2;
      props.filteredListStyle = {height: this.cascaderHeight};
    }
    return React.createElement(NextCascader, props);
  };
  CascaderSelect2.prototype.renderPopupContent = function renderPopupContent() {
    var _props10 = this.props, prefix = _props10.prefix, header = _props10.header, footer = _props10.footer;
    return React.createElement("div", {className: prefix + "cascader-select-dropdown"}, header, this.renderCascader(), footer);
  };
  CascaderSelect2.prototype.renderPreview = function renderPreview(others) {
    var _props11 = this.props, prefix = _props11.prefix, multiple = _props11.multiple, className = _props11.className, renderPreview2 = _props11.renderPreview;
    var value = this.state.value;
    var previewCls = classnames(className, prefix + "form-preview");
    var items = (multiple ? this.getMultipleData(value) : this.getSignleData(value)) || [];
    if (!Array.isArray(items)) {
      items = [items];
    }
    if (typeof renderPreview2 === "function") {
      return React.createElement("div", _extends({}, others, {className: previewCls}), renderPreview2(items, this.props));
    }
    return React.createElement("p", _extends({}, others, {className: previewCls}), items.map(function(_ref) {
      var label = _ref.label;
      return label;
    }).join(", "));
  };
  CascaderSelect2.prototype.render = function render() {
    var _props12 = this.props, prefix = _props12.prefix, size = _props12.size, hasArrow = _props12.hasArrow, hasBorder = _props12.hasBorder, hasClear = _props12.hasClear, label = _props12.label, readOnly = _props12.readOnly, placeholder = _props12.placeholder, dataSource2 = _props12.dataSource, disabled = _props12.disabled, multiple = _props12.multiple, className = _props12.className, showSearch = _props12.showSearch, popupStyle = _props12.popupStyle, popupClassName = _props12.popupClassName, popupContainer = _props12.popupContainer, popupProps = _props12.popupProps, followTrigger = _props12.followTrigger, isPreview = _props12.isPreview, resultAutoWidth = _props12.resultAutoWidth;
    var _state3 = this.state, value = _state3.value, searchValue = _state3.searchValue, visible = _state3.visible;
    var others = pickOthers(Object.keys(CascaderSelect2.propTypes), this.props);
    this.updateCache(dataSource2);
    if (isPreview) {
      return this.renderPreview(others);
    }
    var popupContent = this.renderPopupContent();
    var props = {
      prefix,
      className,
      size,
      placeholder,
      disabled,
      hasArrow,
      hasBorder,
      hasClear,
      label,
      readOnly,
      ref: this.saveSelectRef,
      autoWidth: false,
      mode: multiple ? "multiple" : "single",
      value: multiple ? this.getMultipleData(value) : this.getSignleData(value),
      onChange: this.handleClear,
      onRemove: this.handleRemove,
      visible,
      onVisibleChange: this.handleVisibleChange,
      showSearch,
      onSearch: this.handleSearch,
      onKeyDown: this.handleKeyDown,
      popupContent,
      popupStyle,
      popupClassName,
      popupContainer,
      popupProps,
      followTrigger
    };
    if (showSearch) {
      props.popupProps = _extends({}, popupProps, {
        ref: this.getPopup,
        afterOpen: this.handleAfterOpen
      });
      props.autoWidth = resultAutoWidth && !!searchValue;
    }
    return React.createElement(NextSelect, _extends({}, props, others));
  };
  return CascaderSelect2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  pure: propTypes.bool,
  className: propTypes.string,
  size: propTypes.oneOf(["small", "medium", "large"]),
  placeholder: propTypes.string,
  disabled: propTypes.bool,
  hasArrow: propTypes.bool,
  hasBorder: propTypes.bool,
  hasClear: propTypes.bool,
  label: propTypes.node,
  readOnly: propTypes.bool,
  dataSource: propTypes.arrayOf(propTypes.object),
  defaultValue: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  value: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  onChange: propTypes.func,
  defaultExpandedValue: propTypes.arrayOf(propTypes.string),
  expandedValue: propTypes.arrayOf(propTypes.string),
  expandTriggerType: propTypes.oneOf(["click", "hover"]),
  onExpand: propTypes.func,
  useVirtual: propTypes.bool,
  multiple: propTypes.bool,
  changeOnSelect: propTypes.bool,
  canOnlyCheckLeaf: propTypes.bool,
  checkStrictly: propTypes.bool,
  listStyle: propTypes.object,
  listClassName: propTypes.string,
  displayRender: propTypes.func,
  itemRender: propTypes.func,
  showSearch: propTypes.bool,
  filter: propTypes.func,
  resultRender: propTypes.func,
  resultAutoWidth: propTypes.bool,
  notFoundContent: propTypes.node,
  loadData: propTypes.func,
  header: propTypes.node,
  footer: propTypes.node,
  defaultVisible: propTypes.bool,
  visible: propTypes.bool,
  onVisibleChange: propTypes.func,
  popupStyle: propTypes.object,
  popupClassName: propTypes.string,
  popupContainer: propTypes.any,
  popupProps: propTypes.object,
  followTrigger: propTypes.bool,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func
}, _class.defaultProps = {
  prefix: "next-",
  pure: false,
  size: "medium",
  disabled: false,
  hasArrow: true,
  hasBorder: true,
  hasClear: false,
  dataSource: [],
  defaultValue: null,
  expandTriggerType: "click",
  onExpand: function onExpand() {
  },
  useVirtual: false,
  multiple: false,
  changeOnSelect: false,
  canOnlyCheckLeaf: false,
  checkStrictly: false,
  showSearch: false,
  filter: function filter(searchValue, path) {
    return path.some(function(item) {
      return item.label.indexOf(searchValue) > -1;
    });
  },
  resultRender: function resultRender(searchValue, path) {
    var parts = [];
    path.forEach(function(item, i) {
      var others = item.label.split(searchValue);
      others.forEach(function(other, j) {
        if (other) {
          parts.push(other);
        }
        if (j < others.length - 1) {
          parts.push(React.createElement("em", {key: i + "-" + j}, searchValue));
        }
      });
      if (i < path.length - 1) {
        parts.push(" / ");
      }
    });
    return React.createElement("span", null, parts);
  },
  resultAutoWidth: true,
  notFoundContent: "Not Found",
  defaultVisible: false,
  onVisibleChange: function onVisibleChange() {
  },
  popupProps: {}
}, _temp);
CascaderSelect.displayName = "CascaderSelect";
var CascaderSelect$1 = polyfill(CascaderSelect);
var NextCascaderSelect = NextConfigProvider.config(CascaderSelect$1, {
  transform: function transform(props, deprecated) {
    if ("shape" in props) {
      deprecated("shape", "hasBorder", "CascaderSelect");
      var _props = props, shape = _props.shape, others = _objectWithoutProperties(_props, ["shape"]);
      props = _extends({hasBorder: shape !== "arrow-only"}, others);
    }
    if ("container" in props) {
      deprecated("container", "popupContainer", "CascaderSelect");
      var _props2 = props, container = _props2.container, _others = _objectWithoutProperties(_props2, ["container"]);
      props = _extends({popupContainer: container}, _others);
    }
    if ("expandTrigger" in props) {
      deprecated("expandTrigger", "expandTriggerType", "CascaderSelect");
      var _props3 = props, expandTrigger = _props3.expandTrigger, _others2 = _objectWithoutProperties(_props3, ["expandTrigger"]);
      props = _extends({expandTriggerType: expandTrigger}, _others2);
    }
    if ("showItemCount" in props) {
      deprecated("showItemCount", "listStyle | listClassName", "CascaderSelect");
    }
    if ("labelWidth" in props) {
      deprecated("labelWidth", "listStyle | listClassName", "CascaderSelect");
    }
    return props;
  }
});
var CascaderSelect$2 = HOC(NextCascaderSelect);
const data = [
  {
    value: "0100",
    label: "金庸",
    children: [
      {value: "0101", label: "飞狐外传"},
      {value: "0102", label: "雪山飞狐"},
      {value: "0103", label: "连城诀"},
      {value: "0104", label: "天龙八部"},
      {value: "0105", label: "射雕英雄传"},
      {value: "0106", label: "白马啸西风"},
      {value: "0107", label: "鹿鼎记"},
      {value: "0108", label: "笑傲江湖"},
      {value: "0109", label: "书剑恩仇录"},
      {value: "0110", label: "神雕侠侣"},
      {value: "0111", label: "侠客行"},
      {value: "0112", label: "倚天屠龙记"},
      {value: "0113", label: "碧血剑"},
      {value: "0114", label: "鸳鸯刀"}
    ]
  },
  {
    value: "0200",
    label: "古龙",
    children: [
      {value: "0201", label: "小李飞刀"},
      {value: "0202", label: "绝代双骄"},
      {value: "0203", label: "大旗英雄传"},
      {value: "0204", label: "英雄无泪"},
      {value: "0205", label: "边城浪子"},
      {value: "0206", label: "楚留香传奇"}
    ]
  },
  {
    children: [
      {value: "0301", label: "白发魔女传"},
      {value: "0302", label: "七剑下天山"},
      {value: "0303", label: "云海玉弓缘"}
    ],
    value: "0300",
    label: "梁羽生"
  }
];
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({data});
  }
  handleChange(value, data2, extra) {
    console.log(value, data2, extra);
    this.setState({
      label: extra.selectedPath.map((d) => d.label).join(" / ")
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      id: "a11y-cascader-select"
    }, "CascaderSelect: "), /* @__PURE__ */ createElement(CascaderSelect$2, {
      dataSource: this.state.data,
      onChange: this.handleChange,
      "aria-labelledby": "a11y-cascader-select"
    }));
  }
}
function DemoComponent() {
  const content = /* @__PURE__ */ createElement(Demo, null);
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div`
  .next-menu-item:focus {
    background-color: #f2f3f7;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
class Demo$1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((response) => response.json()).then((data2) => {
      data2[1].disabled = true;
      this.setState({data: data2});
    }).catch((e) => console.log(e));
  }
  handleChange(value, data2, extra) {
    console.log(value, data2, extra);
  }
  render() {
    return /* @__PURE__ */ createElement(CascaderSelect$2, {
      style: {width: "302px"},
      dataSource: this.state.data,
      onChange: this.handleChange
    });
  }
}
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement(Demo$1, null);
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
class Demo$2 extends Component {
  constructor(props) {
    super(props);
    this.valueRender = (item) => {
      if (item.label) {
        return item.label;
      }
      return item.value === "432988" ? "不存在的" : item.value;
    };
    this.state = {
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((response) => response.json()).then((data2) => {
      data2[1].disabled = true;
      this.setState({data: data2});
    }).catch((e) => console.log(e));
  }
  handleChange(value, data2, extra) {
    console.log(value, data2, extra);
  }
  render() {
    return /* @__PURE__ */ createElement(CascaderSelect$2, {
      valueRender: this.valueRender,
      defaultValue: "432988",
      style: {width: "302px"},
      dataSource: this.state.data,
      onChange: this.handleChange
    });
  }
}
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement(Demo$2, null);
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const dataSource = [
  {
    value: "2973",
    label: "陕西",
    children: [
      {
        value: "2974",
        label: "西安",
        children: [
          {value: "2975", label: "西安市"},
          {value: "2976", label: "高陵县"}
        ]
      },
      {
        value: "2980",
        label: "铜川",
        children: [
          {value: "2981", label: "铜川市"},
          {value: "2982", label: "宜君县"}
        ]
      }
    ]
  },
  {
    value: "3371",
    label: "新疆",
    children: [
      {
        value: "3430",
        label: "巴音郭楞蒙古自治州",
        children: [
          {value: "3431", label: "库尔勒市"},
          {value: "3432", label: "和静县"}
        ]
      }
    ]
  }
];
const itemRender = (item) => {
  return /* @__PURE__ */ createElement("span", null, /* @__PURE__ */ createElement(NextIcon, {
    type: "account",
    size: "xs"
  }), " ", item.label);
};
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement(CascaderSelect$2, {
    style: {width: "302px"},
    listStyle: {width: "302px", height: "160px"},
    displayRender: (labels) => labels[labels.length - 1],
    defaultValue: "3431",
    dataSource,
    itemRender
  });
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = qe.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const dataSource$1 = [
  {
    value: "2973",
    label: "陕西"
  }
];
class Demo$3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: dataSource$1
    };
    this.onLoadData = this.onLoadData.bind(this);
  }
  onLoadData(data2) {
    console.log(data2);
    return new Promise((resolve) => {
      setTimeout(() => {
        this.setState({
          dataSource: [
            {
              value: "2973",
              label: "陕西",
              children: [
                {
                  value: "2974",
                  label: "西安",
                  children: [
                    {value: "2975", label: "西安市", isLeaf: true},
                    {value: "2976", label: "高陵县", isLeaf: true}
                  ]
                },
                {
                  value: "2980",
                  label: "铜川",
                  children: [
                    {value: "2981", label: "铜川市", isLeaf: true},
                    {value: "2982", label: "宜君县", isLeaf: true}
                  ]
                }
              ]
            }
          ]
        }, resolve);
      }, 500);
    });
  }
  render() {
    return /* @__PURE__ */ createElement(CascaderSelect$2, {
      style: {width: "302px"},
      dataSource: this.state.dataSource,
      loadData: this.onLoadData
    });
  }
}
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement(Demo$3, null);
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = qe.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const RadioGroup = Radio.Group;
class Demo$4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      triggerType: "click",
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTriggerTypeChange = this.handleTriggerTypeChange.bind(this);
  }
  componentDidMount() {
    fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((response) => response.json()).then((data2) => this.setState({data: data2})).catch((e) => console.log(e));
  }
  handleChange(value, data2, extra) {
    console.log(value, data2, extra);
  }
  handleTriggerTypeChange(triggerType) {
    this.setState({
      triggerType
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      className: "trigger-check"
    }, "Expand trigger type:", /* @__PURE__ */ createElement(RadioGroup, {
      dataSource: ["click", "hover"],
      value: this.state.triggerType,
      onChange: this.handleTriggerTypeChange
    })), /* @__PURE__ */ createElement(CascaderSelect$2, {
      style: {width: "302px"},
      expandTriggerType: this.state.triggerType,
      dataSource: this.state.data,
      onChange: this.handleChange
    }));
  }
}
function DemoComponent$5() {
  const content = /* @__PURE__ */ createElement(Demo$4, null);
  return /* @__PURE__ */ createElement(Style$5, null, content);
}
const Style$5 = qe.div`
  .trigger-check {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }

  .trigger-check .next-radio-group {
    margin-left: 10px;
  }
`;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
class Demo$5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((response) => response.json()).then((data2) => {
      data2[1].disabled = true;
      data2[2].checkboxDisabled = true;
      this.setState({data: data2});
    }).catch((e) => console.log(e));
  }
  handleChange(value, data2, extra) {
    console.log(value, data2, extra);
  }
  render() {
    return /* @__PURE__ */ createElement(CascaderSelect$2, {
      style: {width: "302px"},
      multiple: true,
      dataSource: this.state.data,
      onChange: this.handleChange
    });
  }
}
function DemoComponent$6() {
  const content = /* @__PURE__ */ createElement(Demo$5, null);
  return /* @__PURE__ */ createElement(Style$6, null, content);
}
const Style$6 = qe.div`
  .cascader-value {
    width: 500px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
class Demo$6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      data: [],
      checkStrictly: false
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((response) => response.json()).then((data2) => this.setState({data: data2, value: ["2975"]})).catch((e) => console.log(e));
  }
  handleCheck() {
    this.setState({
      checkStrictly: !this.state.checkStrictly,
      value: []
    });
  }
  handleChange(value, data2, extra) {
    console.log(value, data2, extra);
    this.setState({
      value
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "control-multiple-demo"
    }, /* @__PURE__ */ createElement("label", {
      className: "strictly-check"
    }, /* @__PURE__ */ createElement(Checkbox, {
      value: this.state.checkStrictly,
      onChange: this.handleCheck
    }), /* @__PURE__ */ createElement("span", {
      className: "strictly-text"
    }, "Enable checkStrictly")), /* @__PURE__ */ createElement(CascaderSelect$2, {
      style: {width: "302px"},
      multiple: true,
      checkStrictly: this.state.checkStrictly,
      value: this.state.value,
      dataSource: this.state.data,
      onChange: this.handleChange
    }));
  }
}
function DemoComponent$7() {
  const content = /* @__PURE__ */ createElement(Demo$6, null);
  return /* @__PURE__ */ createElement(Style$7, null, content);
}
const Style$7 = qe.div`
  .control-multiple-demo .strictly-check {
    display: block;
    margin-bottom: 10px;
  }

  .control-multiple-demo .strictly-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
class Demo$7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      data: [],
      multiple: false
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((response) => response.json()).then((data2) => this.setState({data: data2, value: ["2975"]})).catch((e) => console.log(e));
  }
  handleCheck() {
    this.setState({
      multiple: !this.state.multiple,
      value: []
    });
  }
  handleChange(value, data2, extra) {
    console.log(value, data2, extra);
    this.setState({
      value
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "search-demo"
    }, /* @__PURE__ */ createElement("label", {
      className: "multiple-check"
    }, /* @__PURE__ */ createElement(Checkbox, {
      value: this.state.multiple,
      onChange: this.handleCheck
    }), /* @__PURE__ */ createElement("span", {
      className: "multiple-text"
    }, "Multiple select")), /* @__PURE__ */ createElement(CascaderSelect$2, {
      style: {width: "302px"},
      showSearch: true,
      multiple: this.state.multiple,
      value: this.state.value,
      dataSource: this.state.data,
      onChange: this.handleChange
    }));
  }
}
function DemoComponent$8() {
  const content = /* @__PURE__ */ createElement(Demo$7, null);
  return /* @__PURE__ */ createElement(Style$8, null, content);
}
const Style$8 = qe.div`
  .search-demo .multiple-check {
    display: block;
    margin-bottom: 10px;
  }

  .search-demo .multiple-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
class Demo$8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      changeOnSelect: false,
      data: []
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((response) => response.json()).then((data2) => this.setState({data: data2, value: "2975"})).catch((e) => console.log(e));
  }
  handleCheck() {
    this.setState({
      changeOnSelect: !this.state.changeOnSelect,
      value: null
    });
  }
  handleChange(value, data2, extra) {
    console.log(value, data2, extra);
    this.setState({
      value
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "control-single-demo"
    }, /* @__PURE__ */ createElement("label", {
      className: "change-check"
    }, /* @__PURE__ */ createElement(Checkbox, {
      value: !this.state.changeOnSelect,
      onChange: this.handleCheck
    }), /* @__PURE__ */ createElement("span", {
      className: "change-text"
    }, "Enable changeOnSelect")), /* @__PURE__ */ createElement(CascaderSelect$2, {
      style: {width: "302px"},
      changeOnSelect: this.state.changeOnSelect,
      value: this.state.value,
      dataSource: this.state.data,
      onChange: this.handleChange
    }));
  }
}
function DemoComponent$9() {
  const content = /* @__PURE__ */ createElement(Demo$8, null);
  return /* @__PURE__ */ createElement(Style$9, null, content);
}
const Style$9 = qe.div`
  .control-single-demo .change-check {
    display: block;
    margin-bottom: 10px;
  }

  .control-single-demo .change-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`;
var m9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$9
});
const modules = {};
modules["_accessibility"] = m0;
modules["_basic"] = m1;
modules["_custom"] = m2;
modules["_custom-style"] = m3;
modules["_dynamic"] = m4;
modules["_expand-trigger"] = m5;
modules["_multiple"] = m6;
modules["_multiple-control"] = m7;
modules["_search"] = m8;
modules["_single-control"] = m9;
export default modules;
