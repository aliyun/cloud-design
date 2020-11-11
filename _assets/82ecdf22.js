import {_ as _inherits, b as _classCallCheck, d as _possibleConstructorReturn, j as findDOMNode, R as React, D as NextMenu, f as _extends, m as _objectWithoutProperties, M as NextVirtualList, C as Component, p as propTypes, l as func, o as obj, K as KEYCODE, e as classnames, N as NextIcon, g as polyfill, i as dom, a as NextConfigProvider} from "./index.c66e7a18.js";
var _class, _temp2;
var CascaderMenu = (_temp2 = _class = function(_Component) {
  _inherits(CascaderMenu2, _Component);
  function CascaderMenu2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, CascaderMenu2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.saveMenuRef = function(ref) {
      _this.menuEl = ref;
    }, _this.saveVirtualRef = function(ref) {
      _this.virtualEl = ref;
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  CascaderMenu2.prototype.componentDidMount = function componentDidMount() {
    this.scrollToSelectedItem();
  };
  CascaderMenu2.prototype.scrollToSelectedItem = function scrollToSelectedItem() {
    var _props = this.props, prefix = _props.prefix, useVirtual = _props.useVirtual, children = _props.children;
    if (!children || children.length === 0) {
      return;
    }
    var selectedIndex = children.findIndex(function(item) {
      return !!item.props.checked || !!item.props.selected || !!item.props.expanded;
    });
    if (selectedIndex === -1) {
      return;
    }
    if (useVirtual) {
      var instance = this.virtualEl.getInstance();
      setTimeout(function() {
        return instance.scrollTo(selectedIndex);
      }, 0);
    } else {
      var itemSelector = "." + prefix + "menu-item";
      var menu = findDOMNode(this.menuEl);
      var targetItem = menu.querySelectorAll(itemSelector)[selectedIndex];
      if (targetItem) {
        menu.scrollTop = targetItem.offsetTop - Math.floor((menu.clientHeight / targetItem.clientHeight - 1) / 2) * targetItem.clientHeight;
      }
    }
  };
  CascaderMenu2.prototype.renderMenu = function renderMenu(items, ref, props) {
    var _this2 = this;
    return React.createElement(NextMenu, _extends({ref, role: "listbox"}, props), items.map(function(node) {
      if (React.isValidElement(node) && node.type.menuChildType === "item") {
        return React.cloneElement(node, {
          menu: _this2
        });
      }
      return node;
    }));
  };
  CascaderMenu2.prototype.render = function render() {
    var _this3 = this;
    var _props2 = this.props, prefix = _props2.prefix, useVirtual = _props2.useVirtual, className = _props2.className, style = _props2.style, children = _props2.children, others = _objectWithoutProperties(_props2, ["prefix", "useVirtual", "className", "style", "children"]);
    var menuProps = _extends({
      labelToggleChecked: false,
      className: prefix + "cascader-menu"
    }, others);
    return React.createElement("div", {
      ref: this.saveMenuRef,
      className: prefix + "cascader-menu-wrapper " + (className ? className : ""),
      style
    }, useVirtual ? React.createElement(NextVirtualList, {
      ref: this.saveVirtualRef,
      itemsRenderer: function itemsRenderer(items, ref) {
        return _this3.renderMenu(items, ref, menuProps);
      }
    }, children) : this.renderMenu(children, void 0, menuProps));
  };
  return CascaderMenu2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  className: propTypes.string,
  useVirtual: propTypes.bool,
  children: propTypes.node
}, _temp2);
CascaderMenu.displayName = "CascaderMenu";
var _class$1, _temp;
var bindCtx = func.bindCtx;
var pickOthers = obj.pickOthers;
var CascaderMenuItem = (_temp = _class$1 = function(_Component) {
  _inherits(CascaderMenuItem2, _Component);
  function CascaderMenuItem2(props) {
    _classCallCheck(this, CascaderMenuItem2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _this.state = {
      loading: false
    };
    bindCtx(_this, ["handleExpand", "handleClick", "handleMouseEnter", "handleKeyDown", "removeLoading"]);
    return _this;
  }
  CascaderMenuItem2.prototype.addLoading = function addLoading() {
    this.setState({
      loading: true
    });
  };
  CascaderMenuItem2.prototype.removeLoading = function removeLoading() {
    this.setState({
      loading: false
    });
  };
  CascaderMenuItem2.prototype.setLoadingIfNeed = function setLoadingIfNeed(p) {
    if (p && typeof p.then === "function") {
      this.addLoading();
      p.then(this.removeLoading).catch(this.removeLoading);
    }
  };
  CascaderMenuItem2.prototype.handleExpand = function handleExpand(focusedFirstChild) {
    this.setLoadingIfNeed(this.props.onExpand(focusedFirstChild));
  };
  CascaderMenuItem2.prototype.handleClick = function handleClick() {
    this.handleExpand(false);
  };
  CascaderMenuItem2.prototype.handleMouseEnter = function handleMouseEnter() {
    this.handleExpand(false);
  };
  CascaderMenuItem2.prototype.handleKeyDown = function handleKeyDown(e) {
    if (!this.props.disabled) {
      if (e.keyCode === KEYCODE.RIGHT || e.keyCode === KEYCODE.ENTER) {
        if (this.props.canExpand) {
          this.handleExpand(true);
        }
      } else if (e.keyCode === KEYCODE.LEFT || e.keyCode === KEYCODE.ESC) {
        this.props.onFold();
      } else if (e.keyCode === KEYCODE.SPACE) {
        this.handleExpand(false);
      }
    }
  };
  CascaderMenuItem2.prototype.render = function render() {
    var _cx;
    var _props = this.props, prefix = _props.prefix, className = _props.className, menu = _props.menu, disabled = _props.disabled, selected = _props.selected, onSelect = _props.onSelect, expanded = _props.expanded, canExpand = _props.canExpand, expandTriggerType = _props.expandTriggerType, checkable = _props.checkable, checked = _props.checked, indeterminate = _props.indeterminate, checkboxDisabled = _props.checkboxDisabled, onCheck = _props.onCheck, children = _props.children;
    var others = pickOthers(Object.keys(CascaderMenuItem2.propTypes), this.props);
    var loading = this.state.loading;
    var itemProps = _extends({
      className: classnames((_cx = {}, _cx[prefix + "cascader-menu-item"] = true, _cx[prefix + "expanded"] = expanded, _cx[className] = !!className, _cx)),
      disabled,
      menu,
      onKeyDown: this.handleKeyDown,
      role: "option"
    }, others);
    if (!disabled) {
      if (expandTriggerType === "hover") {
        itemProps.onMouseEnter = this.handleMouseEnter;
      } else {
        itemProps.onClick = this.handleClick;
      }
    }
    var Item = void 0, title = void 0;
    if (checkable) {
      Item = NextMenu.CheckboxItem;
      itemProps.checked = checked;
      itemProps.indeterminate = indeterminate;
      itemProps.checkboxDisabled = checkboxDisabled;
      itemProps.onChange = onCheck;
    } else {
      Item = NextMenu.Item;
      itemProps.selected = selected;
      itemProps.onSelect = onSelect;
    }
    if (typeof children === "string") {
      title = children;
    }
    return React.createElement(Item, _extends({title}, itemProps), children, canExpand ? loading ? React.createElement(NextIcon, {
      className: prefix + "cascader-menu-icon-right " + prefix + "cascader-menu-icon-loading",
      type: "loading"
    }) : React.createElement(NextIcon, {
      className: prefix + "cascader-menu-icon-right " + prefix + "cascader-menu-icon-expand",
      type: "arrow-right"
    }) : null);
  };
  return CascaderMenuItem2;
}(Component), _class$1.menuChildType = "item", _class$1.propTypes = {
  prefix: propTypes.string,
  className: propTypes.string,
  disabled: propTypes.bool,
  selected: propTypes.bool,
  onSelect: propTypes.func,
  expanded: propTypes.bool,
  canExpand: propTypes.bool,
  menu: propTypes.any,
  expandTriggerType: propTypes.oneOf(["click", "hover"]),
  onExpand: propTypes.func,
  onFold: propTypes.func,
  checkable: propTypes.bool,
  checked: propTypes.bool,
  indeterminate: propTypes.bool,
  checkboxDisabled: propTypes.bool,
  onCheck: propTypes.func,
  children: propTypes.node
}, _temp);
CascaderMenuItem.displayName = "CascaderMenuItem";
function normalizeToArray(values) {
  if (values !== void 0 && values !== null) {
    if (Array.isArray(values)) {
      return [].concat(values);
    }
    return [values];
  }
  return [];
}
function isNodeChecked(node, checkedValues) {
  if (node.disabled || node.checkboxDisabled)
    return true;
  if (node.checkable === false) {
    return !node.children || node.children.length === 0 || node.children.every(function(c) {
      return isNodeChecked(c, checkedValues);
    });
  }
  return checkedValues.indexOf(node.value) > -1;
}
function forEachEnableNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
  };
  if (node.disabled || node.checkboxDisabled)
    return;
  callback(node);
  if (node.children && node.children.length > 0) {
    node.children.forEach(function(child) {
      return forEachEnableNode(child, callback);
    });
  }
}
function getCheckableParentNode(node, _p2n) {
  var parentPos = node.pos.split(["-"]);
  if (parentPos.length === 2)
    return node;
  parentPos.splice(parentPos.length - 1, 1);
  parentPos = parentPos.join("-");
  var parentNode = _p2n[parentPos];
  if (parentNode.disabled || parentNode.checkboxDisabled)
    return false;
  if (parentNode.checkable === false) {
    return getCheckableParentNode(parentNode, _p2n);
  }
  return parentNode;
}
function filterChildValue(values, _v2n, _p2n) {
  var newValues = [];
  values.forEach(function(value) {
    var node = getCheckableParentNode(_v2n[value], _p2n);
    if (!node || node.checkable === false || node === _v2n[value] || values.indexOf(node.value) === -1) {
      newValues.push(value);
    }
  });
  return newValues;
}
function isDescendantOrSelf(currentPos, targetPos) {
  if (!currentPos || !targetPos) {
    return false;
  }
  var currentNums = currentPos.split("-");
  var targetNums = targetPos.split("-");
  return currentNums.length <= targetNums.length && currentNums.every(function(num, index) {
    return num === targetNums[index];
  });
}
function isSiblingOrSelf(currentPos, targetPos) {
  var currentNums = currentPos.split("-").slice(0, -1);
  var targetNums = targetPos.split("-").slice(0, -1);
  return currentNums.length === targetNums.length && currentNums.every(function(num, index) {
    return num === targetNums[index];
  });
}
function getAllCheckedValues(checkedValues, _v2n, _p2n) {
  checkedValues = normalizeToArray(checkedValues);
  var filteredValues = checkedValues.filter(function(value) {
    return !!_v2n[value];
  });
  var flatValues = [].concat(filterChildValue(filteredValues, _v2n, _p2n), filteredValues.filter(function(value) {
    return _v2n[value].disabled || _v2n[value].checkboxDisabled;
  }));
  var removeValue = function removeValue2(child) {
    if (child.disabled || child.checkboxDisabled)
      return;
    if (child.checkable === false && child.children && child.children.length > 0) {
      return child.children.forEach(removeValue2);
    }
    flatValues.splice(flatValues.indexOf(child.value), 1);
  };
  var addParentValue = function addParentValue2(i2, parent2) {
    return flatValues.splice(i2, 0, parent2.value);
  };
  var values = [].concat(flatValues);
  for (var i = 0; i < values.length; i++) {
    var pos = _v2n[values[i]].pos;
    var nums = pos.split("-");
    if (nums.length === 2) {
      break;
    }
    for (var j = nums.length - 2; j > 0; j--) {
      var parentPos = nums.slice(0, j + 1).join("-");
      var parent = _p2n[parentPos];
      if (parent.checkable === false || parent.disabled || parent.checkboxDisabled)
        continue;
      var parentChecked = parent.children.every(function(child) {
        return isNodeChecked(child, flatValues);
      });
      if (parentChecked) {
        parent.children.forEach(removeValue);
        addParentValue(i, parent);
      } else {
        break;
      }
    }
  }
  var newValues = [];
  flatValues.forEach(function(value) {
    if (_v2n[value].disabled || _v2n[value].checkboxDisabled) {
      newValues.push(value);
      return;
    }
    forEachEnableNode(_v2n[value], function(node) {
      if (node.checkable === false)
        return;
      newValues.push(node.value);
    });
  });
  return newValues;
}
var _class$2, _temp$1;
var bindCtx$1 = func.bindCtx;
var pickOthers$1 = obj.pickOthers;
var addClass = dom.addClass, removeClass = dom.removeClass, setStyle = dom.setStyle, getStyle = dom.getStyle;
var flatDataSource = function flatDataSource2(data) {
  var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "0";
  var v2n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var p2n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  data.forEach(function(item, index) {
    var value = item.value, children = item.children;
    var pos = prefix + "-" + index;
    var newValue = String(value);
    item.value = newValue;
    v2n[newValue] = p2n[pos] = _extends({}, item, {
      pos,
      _source: item
    });
    if (children && children.length) {
      flatDataSource2(children, pos, v2n, p2n);
    }
  });
  return {v2n, p2n};
};
var getExpandedValue = function getExpandedValue2(v, _v2n, _p2n) {
  if (!v || !_v2n[v]) {
    return [];
  }
  var pos = _v2n[v].pos;
  if (pos.split("-").length === 2) {
    return [];
  }
  var expandedMap = {};
  Object.keys(_p2n).forEach(function(p) {
    if (isDescendantOrSelf(p, pos) && p !== pos) {
      expandedMap[_p2n[p].value] = p;
    }
  });
  return Object.keys(expandedMap).sort(function(prev, next) {
    return expandedMap[prev].split("-").length - expandedMap[next].split("-").length;
  });
};
var normalizeValue = function normalizeValue2(value) {
  if (value) {
    if (Array.isArray(value)) {
      return value;
    }
    return [value];
  }
  return [];
};
var Cascader = (_temp$1 = _class$2 = function(_Component) {
  _inherits(Cascader2, _Component);
  function Cascader2(props, context) {
    _classCallCheck(this, Cascader2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
    var defaultValue = props.defaultValue, value = props.value, defaultExpandedValue = props.defaultExpandedValue, expandedValue = props.expandedValue, dataSource = props.dataSource, multiple = props.multiple, checkStrictly = props.checkStrictly, canOnlyCheckLeaf = props.canOnlyCheckLeaf, loadData = props.loadData;
    var _flatDataSource = flatDataSource(dataSource), v2n = _flatDataSource.v2n, p2n = _flatDataSource.p2n;
    var normalizedValue = normalizeValue(typeof value === "undefined" ? defaultValue : value);
    if (!loadData) {
      normalizedValue = normalizedValue.filter(function(v) {
        return v2n[v];
      });
    }
    var realExpandedValue = typeof expandedValue === "undefined" ? typeof defaultExpandedValue === "undefined" ? getExpandedValue(normalizedValue[0], v2n, p2n) : normalizeValue(defaultExpandedValue) : normalizeValue(expandedValue);
    var st = {
      value: normalizedValue,
      expandedValue: realExpandedValue
    };
    if (multiple && !checkStrictly && !canOnlyCheckLeaf) {
      st.value = getAllCheckedValues(st.value, v2n, p2n);
    }
    _this.lastExpandedValue = [].concat(st.expandedValue);
    _this.state = _extends({}, st, {
      _v2n: v2n,
      _p2n: p2n
    });
    bindCtx$1(_this, ["handleMouseLeave", "handleFocus", "handleFold", "getCascaderNode", "onBlur"]);
    return _this;
  }
  Cascader2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var _flatDataSource2 = flatDataSource(props.dataSource), v2n = _flatDataSource2.v2n, p2n = _flatDataSource2.p2n;
    var states = {};
    if ("value" in props) {
      states.value = normalizeValue(props.value);
      if (!props.loadData) {
        states.value = states.value.filter(function(v) {
          return v2n[v];
        });
      }
      var multiple = props.multiple, checkStrictly = props.checkStrictly, canOnlyCheckLeaf = props.canOnlyCheckLeaf;
      if (multiple && !checkStrictly && !canOnlyCheckLeaf) {
        states.value = getAllCheckedValues(states.value, v2n, p2n);
      }
      if (!state.expandedValue.length && !("expandedValue" in props)) {
        states.expandedValue = getExpandedValue(states.value[0], v2n, p2n);
      }
    }
    if ("expandedValue" in props) {
      states.expandedValue = normalizeValue(props.expandedValue);
    }
    return _extends({}, states, {
      _v2n: v2n,
      _p2n: p2n
    });
  };
  Cascader2.prototype.componentDidMount = function componentDidMount() {
    this.setCascaderInnerWidth();
  };
  Cascader2.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setCascaderInnerWidth();
  };
  Cascader2.prototype.getCascaderNode = function getCascaderNode(ref) {
    this.cascader = ref;
    if (this.cascader) {
      this.cascaderInner = this.cascader.querySelector("." + this.props.prefix + "cascader-inner");
    }
  };
  Cascader2.prototype.setCascaderInnerWidth = function setCascaderInnerWidth() {
    if (!this.cascaderInner) {
      return;
    }
    var menus = [].slice.call(this.cascaderInner.querySelectorAll("." + this.props.prefix + "cascader-menu-wrapper"));
    if (menus.length === 0) {
      return;
    }
    var menusWidth = Math.ceil(menus.reduce(function(ret, menu) {
      return ret + getStyle(menu, "width");
    }, 0));
    if (getStyle(this.cascaderInner, "width") !== menusWidth) {
      setStyle(this.cascaderInner, "width", menusWidth);
    }
    if (getStyle(this.cascader, "display") === "inline-block") {
      var hasRightBorderClass = this.props.prefix + "has-right-border";
      menus.forEach(function(menu) {
        return removeClass(menu, hasRightBorderClass);
      });
      if (this.cascader.clientWidth > menusWidth) {
        addClass(menus[menus.length - 1], hasRightBorderClass);
      }
    }
  };
  Cascader2.prototype.flatValue = function flatValue(value) {
    return filterChildValue(value, this.state._v2n, this.state._p2n);
  };
  Cascader2.prototype.getValue = function getValue(pos) {
    return this.state._p2n[pos] ? this.state._p2n[pos].value : null;
  };
  Cascader2.prototype.getPos = function getPos(value) {
    return this.state._v2n[value] ? this.state._v2n[value].pos : null;
  };
  Cascader2.prototype.getData = function getData(value) {
    var _this2 = this;
    return value.map(function(v) {
      return _this2.state._v2n[v];
    });
  };
  Cascader2.prototype.processValue = function processValue(value, v, checked) {
    var index = value.indexOf(v);
    if (checked && index === -1) {
      value.push(v);
    } else if (!checked && index > -1) {
      value.splice(index, 1);
    }
  };
  Cascader2.prototype.handleSelect = function handleSelect(v, canExpand) {
    var _this3 = this;
    if (!(this.props.canOnlySelectLeaf && canExpand)) {
      var data = this.state._v2n[v];
      var nums = data.pos.split("-");
      var selectedPath = nums.slice(1).reduce(function(ret, num, index) {
        var p = nums.slice(0, index + 2).join("-");
        ret.push(_this3.state._p2n[p]);
        return ret;
      }, []);
      if (this.state.value[0] !== v) {
        if (!("value" in this.props)) {
          this.setState({
            value: [v]
          });
        }
        if ("onChange" in this.props) {
          this.props.onChange(v, data, {
            selectedPath
          });
        }
      }
      if ("onSelect" in this.props) {
        this.props.onSelect(v, data, {
          selectedPath
        });
      }
    }
    if (canExpand) {
      if (!this.props.canOnlySelectLeaf) {
        this.lastExpandedValue = this.state.expandedValue.slice(0, -1);
      }
    } else {
      this.lastExpandedValue = [].concat(this.state.expandedValue);
    }
  };
  Cascader2.prototype.handleCheck = function handleCheck(v, checked) {
    var _this4 = this;
    var _props = this.props, checkStrictly = _props.checkStrictly, canOnlyCheckLeaf = _props.canOnlyCheckLeaf;
    var value = [].concat(this.state.value);
    if (checkStrictly || canOnlyCheckLeaf) {
      this.processValue(value, v, checked);
    } else {
      var pos = this.getPos(v);
      var ps = Object.keys(this.state._p2n);
      forEachEnableNode(this.state._v2n[v], function(node) {
        if (node.checkable === false)
          return;
        _this4.processValue(value, node.value, checked);
      });
      var currentPos = pos;
      var nums = pos.split("-");
      for (var i = nums.length; i > 2; i--) {
        var parentCheck = true;
        var parentPos = nums.slice(0, i - 1).join("-");
        if (this.state._p2n[parentPos].disabled || this.state._p2n[parentPos].checkboxDisabled || this.state._p2n[parentPos].checkable === false) {
          currentPos = parentPos;
          continue;
        }
        var parentValue = this.state._p2n[parentPos].value;
        var parentChecked = value.indexOf(parentValue) > -1;
        if (!checked && !parentChecked) {
          break;
        }
        for (var j = 0; j < ps.length; j++) {
          var p = ps[j];
          var pnode = this.state._p2n[p];
          if (isSiblingOrSelf(currentPos, p) && !pnode.disabled && !pnode.checkboxDisabled) {
            var k = pnode.value;
            if (pnode.checkable === false) {
              if (!pnode.children || pnode.children.length === 0) {
                continue;
              }
              for (var m = 0; m < pnode.children.length; m++) {
                if (!pnode.children.every(function(child) {
                  return isNodeChecked(child, value);
                })) {
                  parentCheck = false;
                  break;
                }
              }
            } else if (value.indexOf(k) === -1) {
              parentCheck = false;
            }
            if (!parentCheck)
              break;
          }
        }
        this.processValue(value, parentValue, parentCheck);
        currentPos = parentPos;
      }
    }
    if (!("value" in this.props)) {
      this.setState({
        value
      });
    }
    if ("onChange" in this.props) {
      if (checkStrictly || canOnlyCheckLeaf) {
        var data = this.getData(value);
        this.props.onChange(value, data, {
          checked,
          currentData: this.state._v2n[v],
          checkedData: data
        });
      } else {
        var flatValue = this.flatValue(value);
        var flatData = this.getData(flatValue);
        var checkedData = this.getData(value);
        var indeterminateValue = this.getIndeterminate(value);
        var indeterminateData = this.getData(indeterminateValue);
        this.props.onChange(flatValue, flatData, {
          checked,
          currentData: this.state._v2n[v],
          checkedData,
          indeterminateData
        });
      }
    }
    this.lastExpandedValue = [].concat(this.state.expandedValue);
  };
  Cascader2.prototype.handleExpand = function handleExpand(value, level, canExpand, focusedFirstChild) {
    var _this5 = this;
    var expandedValue = this.state.expandedValue;
    if (canExpand || expandedValue.length > level) {
      if (canExpand) {
        expandedValue.splice(level, expandedValue.length - level, value);
      } else {
        expandedValue.splice(level);
      }
      var callback = function callback2() {
        _this5.setExpandValue(expandedValue);
        if (focusedFirstChild) {
          var endExpandedValue = expandedValue[expandedValue.length - 1];
          _this5.setState({
            focusedValue: _this5.state._v2n[endExpandedValue].children[0].value
          });
        }
      };
      var loadData = this.props.loadData;
      if (canExpand && loadData) {
        var data = this.state._v2n[value];
        return loadData(data, data._source).then(callback);
      } else {
        return callback();
      }
    }
  };
  Cascader2.prototype.handleMouseLeave = function handleMouseLeave() {
    this.setExpandValue([].concat(this.lastExpandedValue));
  };
  Cascader2.prototype.setExpandValue = function setExpandValue(expandedValue) {
    if (!("expandedValue" in this.props)) {
      this.setState({
        expandedValue
      });
    }
    if ("onExpand" in this.props) {
      this.props.onExpand(expandedValue);
    }
  };
  Cascader2.prototype.getFirstFocusKeyByDataSource = function getFirstFocusKeyByDataSource(dataSource) {
    if (!dataSource || dataSource.length === 0) {
      return "";
    }
    for (var i = 0; i < dataSource.length; i++) {
      if (dataSource[i] && !dataSource[i].disabled) {
        return dataSource[i].value;
      }
    }
    return "";
  };
  Cascader2.prototype.getFirstFocusKeyByFilteredPaths = function getFirstFocusKeyByFilteredPaths(filteredPaths) {
    if (!filteredPaths || filteredPaths.length === 0) {
      return "";
    }
    for (var i = 0; i < filteredPaths.length; i++) {
      var path = filteredPaths[i];
      if (!path.some(function(item) {
        return item.disabled;
      })) {
        var lastItem = path[path.length - 1];
        return lastItem.value;
      }
    }
    return "";
  };
  Cascader2.prototype.getFirstFocusKey = function getFirstFocusKey() {
    var _props2 = this.props, dataSource = _props2.dataSource, searchValue = _props2.searchValue, filteredPaths = _props2.filteredPaths;
    return !searchValue ? this.getFirstFocusKeyByDataSource(dataSource) : this.getFirstFocusKeyByFilteredPaths(filteredPaths);
  };
  Cascader2.prototype.setFocusValue = function setFocusValue() {
    this.setState({
      focusedValue: this.getFirstFocusKey()
    });
  };
  Cascader2.prototype.handleFocus = function handleFocus(focusedValue) {
    this.setState({
      focusedValue
    });
  };
  Cascader2.prototype.handleFold = function handleFold() {
    var expandedValue = this.state.expandedValue;
    if (expandedValue.length > 0) {
      this.setExpandValue(expandedValue.slice(0, -1));
    }
    this.setState({
      focusedValue: expandedValue[expandedValue.length - 1]
    });
  };
  Cascader2.prototype.getIndeterminate = function getIndeterminate(value) {
    var _this6 = this;
    var indeterminateValues = [];
    var poss = filterChildValue(value.filter(function(v) {
      return !!_this6.state._v2n[v];
    }).filter(function(v) {
      return !_this6.state._v2n[v].disabled && !_this6.state._v2n[v].checkboxDisabled && _this6.state._v2n[v].checkable !== false;
    }), this.state._v2n, this.state._p2n).map(function(v) {
      return _this6.state._v2n[v].pos;
    });
    poss.forEach(function(pos) {
      var nums = pos.split("-");
      for (var i = nums.length; i > 2; i--) {
        var parentPos = nums.slice(0, i - 1).join("-");
        var parent = _this6.state._p2n[parentPos];
        if (parent.disabled || parent.checkboxDisabled)
          break;
        var parentValue = parent.value;
        if (indeterminateValues.indexOf(parentValue) === -1) {
          indeterminateValues.push(parentValue);
        }
      }
    });
    return indeterminateValues;
  };
  Cascader2.prototype.onBlur = function onBlur(e) {
    this.setState({
      focusedValue: void 0
    });
    this.props.onBlur && this.props.onBlur(e);
  };
  Cascader2.prototype.renderMenu = function renderMenu(data, level) {
    var _this7 = this;
    var _props3 = this.props, prefix = _props3.prefix, multiple = _props3.multiple, useVirtual = _props3.useVirtual, checkStrictly = _props3.checkStrictly, expandTriggerType = _props3.expandTriggerType, loadData = _props3.loadData, canOnlyCheckLeaf = _props3.canOnlyCheckLeaf, listClassName = _props3.listClassName, listStyle = _props3.listStyle, itemRender2 = _props3.itemRender;
    var _state = this.state, value = _state.value, expandedValue = _state.expandedValue, focusedValue = _state.focusedValue;
    return React.createElement(CascaderMenu, {
      key: level,
      prefix,
      useVirtual,
      className: listClassName,
      style: listStyle,
      ref: this.saveMenuRef,
      focusedKey: focusedValue,
      onItemFocus: this.handleFocus,
      onBlur: this.onBlur
    }, data.map(function(item) {
      var disabled = !!item.disabled;
      var canExpand = !!item.children && !!item.children.length || !!loadData && !item.isLeaf;
      var expanded = expandedValue[level] === item.value;
      var props = {
        prefix,
        disabled,
        canExpand,
        expanded,
        expandTriggerType,
        onExpand: _this7.handleExpand.bind(_this7, item.value, level, canExpand),
        onFold: _this7.handleFold
      };
      if ("title" in item) {
        props.title = item.title;
      }
      if (multiple) {
        props.checkable = !(canOnlyCheckLeaf && canExpand);
        props.checked = value.indexOf(item.value) > -1 || !!item.checked;
        props.indeterminate = (checkStrictly || canOnlyCheckLeaf ? false : _this7.indeterminate.indexOf(item.value) > -1) || !!item.indeterminate;
        props.checkboxDisabled = !!item.checkboxDisabled;
        props.onCheck = _this7.handleCheck.bind(_this7, item.value);
      } else {
        props.selected = value[0] === item.value;
        props.onSelect = _this7.handleSelect.bind(_this7, item.value, canExpand);
      }
      return React.createElement(CascaderMenuItem, _extends({key: item.value}, props), itemRender2(item));
    }));
  };
  Cascader2.prototype.renderMenus = function renderMenus() {
    var dataSource = this.props.dataSource;
    var expandedValue = this.state.expandedValue;
    var menus = [];
    var data = dataSource;
    for (var i = 0; i <= expandedValue.length; i++) {
      if (!data) {
        break;
      }
      menus.push(this.renderMenu(data, i));
      var expandedItem = void 0;
      for (var j = 0; j < data.length; j++) {
        if (data[j].value === expandedValue[i]) {
          expandedItem = data[j];
          break;
        }
      }
      data = expandedItem ? expandedItem.children : null;
    }
    return menus;
  };
  Cascader2.prototype.renderFilteredItem = function renderFilteredItem(path) {
    var _props4 = this.props, prefix = _props4.prefix, resultRender = _props4.resultRender, searchValue = _props4.searchValue, multiple = _props4.multiple;
    var value = this.state.value;
    var lastItem = path[path.length - 1];
    var Item = void 0;
    var props = {
      key: lastItem.value,
      className: prefix + "cascader-filtered-item",
      disabled: path.some(function(item) {
        return item.disabled;
      }),
      children: resultRender(searchValue, path)
    };
    if (multiple) {
      Item = NextMenu.CheckboxItem;
      var _props5 = this.props, checkStrictly = _props5.checkStrictly, canOnlyCheckLeaf = _props5.canOnlyCheckLeaf;
      props.checked = value.indexOf(lastItem.value) > -1;
      props.indeterminate = !checkStrictly && !canOnlyCheckLeaf && this.indeterminate.indexOf(lastItem.value) > -1;
      props.checkboxDisabled = lastItem.checkboxDisabled;
      props.onChange = this.handleCheck.bind(this, lastItem.value);
    } else {
      Item = NextMenu.Item;
      props.selected = value[0] === lastItem.value;
      props.onSelect = this.handleSelect.bind(this, lastItem.value, false);
    }
    return React.createElement(Item, props);
  };
  Cascader2.prototype.renderFilteredList = function renderFilteredList() {
    var _this8 = this;
    var _props6 = this.props, prefix = _props6.prefix, filteredListStyle = _props6.filteredListStyle, filteredPaths = _props6.filteredPaths;
    var focusedValue = this.state.focusedValue;
    return React.createElement(NextMenu, {
      focusedKey: focusedValue,
      onItemFocus: this.handleFocus,
      className: prefix + "cascader-filtered-list",
      style: filteredListStyle
    }, filteredPaths.map(function(path) {
      return _this8.renderFilteredItem(path);
    }));
  };
  Cascader2.prototype.render = function render() {
    var _cx;
    var _props7 = this.props, prefix = _props7.prefix, rtl = _props7.rtl, className = _props7.className, expandTriggerType = _props7.expandTriggerType, multiple = _props7.multiple, dataSource = _props7.dataSource, checkStrictly = _props7.checkStrictly, canOnlyCheckLeaf = _props7.canOnlyCheckLeaf, searchValue = _props7.searchValue;
    var others = pickOthers$1(Object.keys(Cascader2.propTypes), this.props);
    var value = this.state.value;
    if (rtl) {
      others.dir = "rtl";
    }
    var props = _extends({
      className: classnames((_cx = {}, _cx[prefix + "cascader"] = true, _cx.multiple = multiple, _cx[className] = !!className, _cx)),
      ref: "cascader"
    }, others);
    if (expandTriggerType === "hover") {
      props.onMouseLeave = this.handleMouseLeave;
    }
    if (multiple && !checkStrictly && !canOnlyCheckLeaf) {
      this.indeterminate = this.getIndeterminate(value);
    }
    return React.createElement("div", _extends({}, props, {ref: this.getCascaderNode}), !searchValue ? React.createElement("div", {className: prefix + "cascader-inner"}, dataSource && dataSource.length ? this.renderMenus() : null) : this.renderFilteredList());
  };
  return Cascader2;
}(Component), _class$2.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  pure: propTypes.bool,
  className: propTypes.string,
  dataSource: propTypes.arrayOf(propTypes.object),
  defaultValue: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  value: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  onChange: propTypes.func,
  onSelect: propTypes.func,
  defaultExpandedValue: propTypes.arrayOf(propTypes.string),
  expandedValue: propTypes.arrayOf(propTypes.string),
  expandTriggerType: propTypes.oneOf(["click", "hover"]),
  onExpand: propTypes.func,
  useVirtual: propTypes.bool,
  multiple: propTypes.bool,
  canOnlySelectLeaf: propTypes.bool,
  canOnlyCheckLeaf: propTypes.bool,
  checkStrictly: propTypes.bool,
  listStyle: propTypes.object,
  listClassName: propTypes.string,
  itemRender: propTypes.func,
  loadData: propTypes.func,
  searchValue: propTypes.string,
  onBlur: propTypes.func,
  filteredPaths: propTypes.array,
  filteredListStyle: propTypes.object,
  resultRender: propTypes.func
}, _class$2.defaultProps = {
  prefix: "next-",
  rtl: false,
  pure: false,
  dataSource: [],
  defaultValue: null,
  canOnlySelectLeaf: false,
  canOnlyCheckLeaf: false,
  expandTriggerType: "click",
  multiple: false,
  useVirtual: false,
  checkStrictly: false,
  itemRender: function itemRender(item) {
    return item.label;
  }
}, _temp$1);
Cascader.displayName = "Cascader";
var Cascader$1 = polyfill(Cascader);
var NextCascader = NextConfigProvider.config(Cascader$1, {
  transform: function transform(props, deprecated) {
    if ("expandTrigger" in props) {
      deprecated("expandTrigger", "expandTriggerType", "Cascader");
      var _props = props, expandTrigger = _props.expandTrigger, others = _objectWithoutProperties(_props, ["expandTrigger"]);
      props = _extends({expandTriggerType: expandTrigger}, others);
    }
    if ("showItemCount" in props) {
      deprecated("showItemCount", "listStyle | listClassName", "Cascader");
    }
    if ("labelWidth" in props) {
      deprecated("labelWidth", "listStyle | listClassName", "Cascader");
    }
    return props;
  },
  exportNames: ["setFocusValue"]
});
var global = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global;
var support = {
  searchParams: "URLSearchParams" in global,
  iterable: "Symbol" in global && "iterator" in Symbol,
  blob: "FileReader" in global && "Blob" in global && function() {
    try {
      new Blob();
      return true;
    } catch (e) {
      return false;
    }
  }(),
  formData: "FormData" in global,
  arrayBuffer: "ArrayBuffer" in global
};
function isDataView(obj2) {
  return obj2 && DataView.prototype.isPrototypeOf(obj2);
}
if (support.arrayBuffer) {
  var viewClasses = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ];
  var isArrayBufferView = ArrayBuffer.isView || function(obj2) {
    return obj2 && viewClasses.indexOf(Object.prototype.toString.call(obj2)) > -1;
  };
}
function normalizeName(name) {
  if (typeof name !== "string") {
    name = String(name);
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") {
    throw new TypeError("Invalid character in header field name");
  }
  return name.toLowerCase();
}
function normalizeValue$1(value) {
  if (typeof value !== "string") {
    value = String(value);
  }
  return value;
}
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift();
      return {done: value === void 0, value};
    }
  };
  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator;
    };
  }
  return iterator;
}
function Headers(headers) {
  this.map = {};
  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value);
    }, this);
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1]);
    }, this);
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name]);
    }, this);
  }
}
Headers.prototype.append = function(name, value) {
  name = normalizeName(name);
  value = normalizeValue$1(value);
  var oldValue = this.map[name];
  this.map[name] = oldValue ? oldValue + ", " + value : value;
};
Headers.prototype["delete"] = function(name) {
  delete this.map[normalizeName(name)];
};
Headers.prototype.get = function(name) {
  name = normalizeName(name);
  return this.has(name) ? this.map[name] : null;
};
Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name));
};
Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue$1(value);
};
Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this);
    }
  }
};
Headers.prototype.keys = function() {
  var items = [];
  this.forEach(function(value, name) {
    items.push(name);
  });
  return iteratorFor(items);
};
Headers.prototype.values = function() {
  var items = [];
  this.forEach(function(value) {
    items.push(value);
  });
  return iteratorFor(items);
};
Headers.prototype.entries = function() {
  var items = [];
  this.forEach(function(value, name) {
    items.push([name, value]);
  });
  return iteratorFor(items);
};
if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
}
function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError("Already read"));
  }
  body.bodyUsed = true;
}
function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result);
    };
    reader.onerror = function() {
      reject(reader.error);
    };
  });
}
function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsArrayBuffer(blob);
  return promise;
}
function readBlobAsText(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsText(blob);
  return promise;
}
function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf);
  var chars = new Array(view.length);
  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i]);
  }
  return chars.join("");
}
function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0);
  } else {
    var view = new Uint8Array(buf.byteLength);
    view.set(new Uint8Array(buf));
    return view.buffer;
  }
}
function Body() {
  this.bodyUsed = false;
  this._initBody = function(body) {
    this.bodyUsed = this.bodyUsed;
    this._bodyInit = body;
    if (!body) {
      this._bodyText = "";
    } else if (typeof body === "string") {
      this._bodyText = body;
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body;
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body;
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString();
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer);
      this._bodyInit = new Blob([this._bodyArrayBuffer]);
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body);
    } else {
      this._bodyText = body = Object.prototype.toString.call(body);
    }
    if (!this.headers.get("content-type")) {
      if (typeof body === "string") {
        this.headers.set("content-type", "text/plain;charset=UTF-8");
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set("content-type", this._bodyBlob.type);
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
      }
    }
  };
  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected;
      }
      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      } else if (this._bodyFormData) {
        throw new Error("could not read FormData body as blob");
      } else {
        return Promise.resolve(new Blob([this._bodyText]));
      }
    };
    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this);
        if (isConsumed) {
          return isConsumed;
        }
        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength));
        } else {
          return Promise.resolve(this._bodyArrayBuffer);
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer);
      }
    };
  }
  this.text = function() {
    var rejected = consumed(this);
    if (rejected) {
      return rejected;
    }
    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob);
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
    } else if (this._bodyFormData) {
      throw new Error("could not read FormData body as text");
    } else {
      return Promise.resolve(this._bodyText);
    }
  };
  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode);
    };
  }
  this.json = function() {
    return this.text().then(JSON.parse);
  };
  return this;
}
var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
function normalizeMethod(method) {
  var upcased = method.toUpperCase();
  return methods.indexOf(upcased) > -1 ? upcased : method;
}
function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  }
  options = options || {};
  var body = options.body;
  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError("Already read");
    }
    this.url = input.url;
    this.credentials = input.credentials;
    if (!options.headers) {
      this.headers = new Headers(input.headers);
    }
    this.method = input.method;
    this.mode = input.mode;
    this.signal = input.signal;
    if (!body && input._bodyInit != null) {
      body = input._bodyInit;
      input.bodyUsed = true;
    }
  } else {
    this.url = String(input);
  }
  this.credentials = options.credentials || this.credentials || "same-origin";
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers);
  }
  this.method = normalizeMethod(options.method || this.method || "GET");
  this.mode = options.mode || this.mode || null;
  this.signal = options.signal || this.signal;
  this.referrer = null;
  if ((this.method === "GET" || this.method === "HEAD") && body) {
    throw new TypeError("Body not allowed for GET or HEAD requests");
  }
  this._initBody(body);
  if (this.method === "GET" || this.method === "HEAD") {
    if (options.cache === "no-store" || options.cache === "no-cache") {
      var reParamSearch = /([?&])_=[^&]*/;
      if (reParamSearch.test(this.url)) {
        this.url = this.url.replace(reParamSearch, "$1_=" + new Date().getTime());
      } else {
        var reQueryString = /\?/;
        this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
      }
    }
  }
}
Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit});
};
function decode(body) {
  var form = new FormData();
  body.trim().split("&").forEach(function(bytes) {
    if (bytes) {
      var split = bytes.split("=");
      var name = split.shift().replace(/\+/g, " ");
      var value = split.join("=").replace(/\+/g, " ");
      form.append(decodeURIComponent(name), decodeURIComponent(value));
    }
  });
  return form;
}
function parseHeaders(rawHeaders) {
  var headers = new Headers();
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(":");
    var key = parts.shift().trim();
    if (key) {
      var value = parts.join(":").trim();
      headers.append(key, value);
    }
  });
  return headers;
}
Body.call(Request.prototype);
function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  }
  if (!options) {
    options = {};
  }
  this.type = "default";
  this.status = options.status === void 0 ? 200 : options.status;
  this.ok = this.status >= 200 && this.status < 300;
  this.statusText = "statusText" in options ? options.statusText : "";
  this.headers = new Headers(options.headers);
  this.url = options.url || "";
  this._initBody(bodyInit);
}
Body.call(Response.prototype);
Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  });
};
Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ""});
  response.type = "error";
  return response;
};
var redirectStatuses = [301, 302, 303, 307, 308];
Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError("Invalid status code");
  }
  return new Response(null, {status, headers: {location: url}});
};
var DOMException = global.DOMException;
try {
  new DOMException();
} catch (err) {
  DOMException = function(message, name) {
    this.message = message;
    this.name = name;
    var error = Error(message);
    this.stack = error.stack;
  };
  DOMException.prototype = Object.create(Error.prototype);
  DOMException.prototype.constructor = DOMException;
}
function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init);
    if (request.signal && request.signal.aborted) {
      return reject(new DOMException("Aborted", "AbortError"));
    }
    var xhr = new XMLHttpRequest();
    function abortXhr() {
      xhr.abort();
    }
    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || "")
      };
      options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
      var body = "response" in xhr ? xhr.response : xhr.responseText;
      setTimeout(function() {
        resolve(new Response(body, options));
      }, 0);
    };
    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError("Network request failed"));
      }, 0);
    };
    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError("Network request failed"));
      }, 0);
    };
    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException("Aborted", "AbortError"));
      }, 0);
    };
    function fixUrl(url) {
      try {
        return url === "" && global.location.href ? global.location.href : url;
      } catch (e) {
        return url;
      }
    }
    xhr.open(request.method, fixUrl(request.url), true);
    if (request.credentials === "include") {
      xhr.withCredentials = true;
    } else if (request.credentials === "omit") {
      xhr.withCredentials = false;
    }
    if ("responseType" in xhr) {
      if (support.blob) {
        xhr.responseType = "blob";
      } else if (support.arrayBuffer && request.headers.get("Content-Type") && request.headers.get("Content-Type").indexOf("application/octet-stream") !== -1) {
        xhr.responseType = "arraybuffer";
      }
    }
    if (init && typeof init.headers === "object" && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        xhr.setRequestHeader(name, normalizeValue$1(init.headers[name]));
      });
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });
    }
    if (request.signal) {
      request.signal.addEventListener("abort", abortXhr);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          request.signal.removeEventListener("abort", abortXhr);
        }
      };
    }
    xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
  });
}
fetch.polyfill = true;
if (!global.fetch) {
  global.fetch = fetch;
  global.Headers = Headers;
  global.Request = Request;
  global.Response = Response;
}
export {NextCascader as N};
