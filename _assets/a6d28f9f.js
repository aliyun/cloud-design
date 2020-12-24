import {D as NextMenu, j as func, o as obj, t as dom, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, d as classnames, g as _extends, R as React, C as Component, i as propTypes, V as htmlId, M as NextVirtualList, L as Checkbox, p as polyfill, N as NextConfigProvider, s as NextIcon, z as zhCN} from "./index.0806c9c7.js";
import {N as NextButton} from "./31d59ec1.js";
import {N as NextSearch} from "./c5ca8ff8.js";
var _class, _temp;
var Item = NextMenu.Item, CheckboxItem = NextMenu.CheckboxItem;
var bindCtx = func.bindCtx;
var pickOthers = obj.pickOthers;
var getOffset = dom.getOffset;
var TransferItem = (_temp = _class = function(_Component) {
  _inherits(TransferItem2, _Component);
  function TransferItem2(props) {
    _classCallCheck(this, TransferItem2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _this.state = {
      highlight: false
    };
    bindCtx(_this, ["getItemDOM", "handleClick", "handleDragStart", "handleDragOver", "handleDragEnd", "handleDrop"]);
    return _this;
  }
  TransferItem2.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;
    if (this.props.needHighlight) {
      this.addHighlightTimer = setTimeout(function() {
        _this2.setState({
          highlight: true
        });
      }, 1);
      this.removeHighlightTimer = setTimeout(function() {
        _this2.setState({
          highlight: false
        });
      }, 201);
    }
  };
  TransferItem2.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.addHighlightTimer);
    clearTimeout(this.removeHighlightTimer);
  };
  TransferItem2.prototype.getItemDOM = function getItemDOM(ref) {
    this.item = ref;
  };
  TransferItem2.prototype.handleClick = function handleClick() {
    var _props = this.props, onClick = _props.onClick, panelPosition = _props.panelPosition, item = _props.item;
    onClick(panelPosition === "left" ? "right" : "left", item.value);
  };
  TransferItem2.prototype.handleDragStart = function handleDragStart(ev) {
    ev && ev.dataTransfer && typeof ev.dataTransfer.setData === "function" && ev.dataTransfer.setData("text/plain", ev.target.id);
    var _props2 = this.props, onDragStart = _props2.onDragStart, panelPosition = _props2.panelPosition, item = _props2.item;
    onDragStart(panelPosition, item.value);
  };
  TransferItem2.prototype.getDragGap = function getDragGap(e) {
    var referenceTop = getOffset(e.currentTarget).top;
    var referenceHeight = e.currentTarget.offsetHeight;
    return e.pageY <= referenceTop + referenceHeight / 2 ? "before" : "after";
  };
  TransferItem2.prototype.handleDragOver = function handleDragOver(e) {
    var _props3 = this.props, panelPosition = _props3.panelPosition, dragPosition = _props3.dragPosition, onDragOver = _props3.onDragOver, item = _props3.item;
    if (panelPosition === dragPosition) {
      e.preventDefault();
      var dragGap = this.getDragGap(e);
      if (this.dragGap !== dragGap) {
        this.dragGap = dragGap;
        onDragOver(item.value);
      }
    }
  };
  TransferItem2.prototype.handleDragEnd = function handleDragEnd() {
    var onDragEnd = this.props.onDragEnd;
    onDragEnd();
  };
  TransferItem2.prototype.handleDrop = function handleDrop(e) {
    e.preventDefault();
    var _props4 = this.props, onDrop = _props4.onDrop, item = _props4.item, panelPosition = _props4.panelPosition, dragValue = _props4.dragValue;
    onDrop(panelPosition, dragValue, item.value, this.dragGap);
  };
  TransferItem2.prototype.render = function render() {
    var _cx;
    var _props5 = this.props, prefix = _props5.prefix, mode = _props5.mode, checked = _props5.checked, disabled = _props5.disabled, item = _props5.item, onCheck = _props5.onCheck, itemRender2 = _props5.itemRender, draggable = _props5.draggable, dragOverValue = _props5.dragOverValue, panelPosition = _props5.panelPosition, dragPosition = _props5.dragPosition;
    var others = pickOthers(Object.keys(TransferItem2.propTypes), this.props);
    var highlight = this.state.highlight;
    var isSimple = mode === "simple";
    var classNames = classnames((_cx = {}, _cx[prefix + "transfer-panel-item"] = true, _cx[prefix + "insert-" + this.dragGap] = dragOverValue === item.value && panelPosition === dragPosition, _cx[prefix + "focused"] = highlight, _cx[prefix + "simple"] = isSimple, _cx));
    var children = itemRender2(item);
    var itemProps = _extends({
      ref: this.getItemDOM,
      className: classNames,
      children,
      disabled,
      draggable: draggable && !disabled,
      onDragStart: this.handleDragStart,
      onDragOver: this.handleDragOver,
      onDragEnd: this.handleDragEnd,
      onDrop: this.handleDrop
    }, others);
    var title = void 0;
    if (typeof children === "string") {
      title = children;
    }
    if (isSimple) {
      if (!itemProps.disabled) {
        itemProps.onClick = this.handleClick;
      }
      return React.createElement(Item, _extends({title}, itemProps));
    }
    return React.createElement(CheckboxItem, _extends({
      checked,
      onChange: onCheck.bind(this, item.value),
      title
    }, itemProps));
  };
  return TransferItem2;
}(Component), _class.menuChildType = CheckboxItem.menuChildType, _class.propTypes = {
  prefix: propTypes.string,
  mode: propTypes.oneOf(["normal", "simple"]),
  value: propTypes.array,
  disabled: propTypes.bool,
  item: propTypes.object,
  onCheck: propTypes.func,
  onClick: propTypes.func,
  needHighlight: propTypes.bool,
  itemRender: propTypes.func,
  draggable: propTypes.bool,
  onDragStart: propTypes.func,
  onDragOver: propTypes.func,
  onDragEnd: propTypes.func,
  onDrop: propTypes.func,
  dragPosition: propTypes.oneOf(["left", "right"]),
  dragValue: propTypes.string,
  dragOverValue: propTypes.string,
  panelPosition: propTypes.oneOf(["left", "right"])
}, _temp);
TransferItem.displayName = "TransferItem";
var _class$1, _temp$1;
var bindCtx$1 = func.bindCtx;
var TransferPanel = (_temp$1 = _class$1 = function(_Component) {
  _inherits(TransferPanel2, _Component);
  function TransferPanel2(props, context) {
    _classCallCheck(this, TransferPanel2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
    _this.state = {
      searchedValue: "",
      dragValue: null,
      dragOverValue: null
    };
    _this.footerId = props.baseId ? htmlId.escapeForId(props.baseId + "-panel-footer-" + props.position) : "";
    _this.headerId = props.baseId ? htmlId.escapeForId(props.baseId + "-panel-header-" + props.position) : "";
    bindCtx$1(_this, ["handleCheck", "handleAllCheck", "handleSearch", "handleItemDragStart", "handleItemDragOver", "handleItemDragEnd", "handleItemDrop", "getListDOM"]);
    _this.firstRender = true;
    return _this;
  }
  TransferPanel2.prototype.componentDidMount = function componentDidMount() {
    this.firstRender = false;
  };
  TransferPanel2.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.dataSource.length !== this.props.dataSource.length && this.list) {
      if (this.list.scrollTop > 0) {
        this.list.scrollTop = 0;
      }
    }
    this.searched = false;
  };
  TransferPanel2.prototype.getListDOM = function getListDOM(ref) {
    this.list = ref;
  };
  TransferPanel2.prototype.getListData = function getListData(dataSource, disableHighlight) {
    var _this2 = this;
    var _props = this.props, prefix = _props.prefix, position = _props.position, mode = _props.mode, value = _props.value, onMove = _props.onMove, disabled = _props.disabled, itemRender2 = _props.itemRender, sortable = _props.sortable;
    var _state = this.state, dragPosition = _state.dragPosition, dragValue = _state.dragValue, dragOverValue = _state.dragOverValue;
    return dataSource.map(function(item) {
      var others = "title" in item ? {
        title: item.title
      } : {};
      return React.createElement(TransferItem, _extends({
        key: item.value,
        prefix,
        mode,
        checked: value.indexOf(item.value) > -1,
        disabled: disabled || item.disabled,
        item,
        onCheck: _this2.handleCheck,
        onClick: onMove,
        needHighlight: !_this2.firstRender && !_this2.searched && !disableHighlight,
        itemRender: itemRender2,
        draggable: sortable,
        onDragStart: _this2.handleItemDragStart,
        onDragOver: _this2.handleItemDragOver,
        onDragEnd: _this2.handleItemDragEnd,
        onDrop: _this2.handleItemDrop,
        dragPosition,
        dragValue,
        dragOverValue,
        panelPosition: position
      }, others));
    });
  };
  TransferPanel2.prototype.handleAllCheck = function handleAllCheck(allChecked) {
    var _props2 = this.props, position = _props2.position, onChange = _props2.onChange;
    var newValue = void 0;
    if (allChecked) {
      newValue = this.enabledDatasource.map(function(item) {
        return item.value;
      });
    } else {
      newValue = [];
    }
    onChange && onChange(position, newValue);
  };
  TransferPanel2.prototype.handleCheck = function handleCheck(itemValue, checked) {
    var _props3 = this.props, position = _props3.position, value = _props3.value, onChange = _props3.onChange;
    var newValue = [].concat(value);
    var index = value.indexOf(itemValue);
    if (checked && index === -1) {
      newValue.push(itemValue);
    } else if (!checked && index > -1) {
      newValue.splice(index, 1);
    }
    onChange && onChange(position, newValue);
  };
  TransferPanel2.prototype.handleSearch = function handleSearch(searchedValue) {
    this.setState({
      searchedValue
    });
    this.searched = true;
    var _props4 = this.props, onSearch2 = _props4.onSearch, position = _props4.position;
    onSearch2(searchedValue, position);
  };
  TransferPanel2.prototype.handleItemDragStart = function handleItemDragStart(position, value) {
    this.setState({
      dragPosition: position,
      dragValue: value
    });
  };
  TransferPanel2.prototype.handleItemDragOver = function handleItemDragOver(value) {
    this.setState({
      dragOverValue: value
    });
  };
  TransferPanel2.prototype.handleItemDragEnd = function handleItemDragEnd() {
    this.setState({
      dragOverValue: null
    });
  };
  TransferPanel2.prototype.handleItemDrop = function handleItemDrop() {
    var _props5;
    this.setState({
      dragOverValue: null
    });
    (_props5 = this.props).onSort.apply(_props5, arguments);
  };
  TransferPanel2.prototype.renderHeader = function renderHeader() {
    var _props6 = this.props, title = _props6.title, prefix = _props6.prefix;
    return React.createElement("div", {
      id: this.headerId,
      className: prefix + "transfer-panel-header"
    }, title);
  };
  TransferPanel2.prototype.renderSearch = function renderSearch() {
    var _props7 = this.props, prefix = _props7.prefix, searchPlaceholder = _props7.searchPlaceholder, locale = _props7.locale;
    return React.createElement(NextSearch, {
      "aria-labelledby": this.headerId,
      shape: "simple",
      className: prefix + "transfer-panel-search",
      placeholder: searchPlaceholder || locale.searchPlaceholder,
      onChange: this.handleSearch
    });
  };
  TransferPanel2.prototype.renderList = function renderList(dataSource) {
    var _cx;
    var _props8 = this.props, prefix = _props8.prefix, listClassName = _props8.listClassName, listStyle = _props8.listStyle, customerList = _props8.customerList, useVirtual = _props8.useVirtual;
    var newClassName = classnames((_cx = {}, _cx[prefix + "transfer-panel-list"] = true, _cx[listClassName] = !!listClassName, _cx));
    var customerPanel = customerList && customerList(this.props);
    if (customerPanel) {
      return React.createElement("div", {
        className: newClassName,
        style: listStyle,
        ref: this.getListDOM
      }, customerPanel);
    }
    if (!dataSource.length) {
      return React.createElement("div", {className: newClassName, style: listStyle}, this.renderNotFoundContent());
    }
    if (useVirtual) {
      return React.createElement("div", {
        className: newClassName,
        style: _extends({position: "relative"}, listStyle)
      }, React.createElement(NextVirtualList, {
        itemsRenderer: function itemsRenderer(items, ref) {
          return React.createElement(NextMenu, {style: {border: "none"}, ref}, items);
        }
      }, this.getListData(dataSource, true)));
    }
    return React.createElement(NextMenu, {
      className: newClassName,
      style: listStyle,
      ref: this.getListDOM
    }, this.getListData(dataSource));
  };
  TransferPanel2.prototype.renderNotFoundContent = function renderNotFoundContent() {
    var _props9 = this.props, prefix = _props9.prefix, notFoundContent = _props9.notFoundContent;
    return React.createElement("div", {className: prefix + "transfer-panel-not-found-container"}, React.createElement("div", {className: prefix + "transfer-panel-not-found"}, notFoundContent));
  };
  TransferPanel2.prototype.renderFooter = function renderFooter() {
    var _props10 = this.props, prefix = _props10.prefix, position = _props10.position, mode = _props10.mode, disabled = _props10.disabled, locale = _props10.locale, showCheckAll = _props10.showCheckAll;
    if (mode === "simple") {
      var _cx2;
      var onMoveAll = this.props.onMoveAll;
      var classNames = classnames((_cx2 = {}, _cx2[prefix + "transfer-panel-move-all"] = true, _cx2[prefix + "disabled"] = disabled, _cx2));
      return React.createElement("div", {className: prefix + "transfer-panel-footer"}, React.createElement("a", {
        className: classNames,
        onClick: onMoveAll.bind(this, position === "left" ? "right" : "left")
      }, locale.moveAll));
    }
    var _props11 = this.props, value = _props11.value, dataSource = _props11.dataSource;
    var checkedCount = value.length;
    var totalCount = dataSource.length;
    var totalEnabledCount = this.enabledDatasource.length;
    var checked = checkedCount > 0 && checkedCount >= totalEnabledCount;
    var indeterminate = checkedCount > 0 && checkedCount < totalEnabledCount;
    var items = totalCount > 1 ? locale.items : locale.item;
    var countLabel = checkedCount === 0 ? totalCount + " " + items : checkedCount + "/" + totalCount + " " + items;
    return React.createElement("div", {className: prefix + "transfer-panel-footer"}, showCheckAll && React.createElement(Checkbox, {
      disabled,
      checked,
      indeterminate,
      onChange: this.handleAllCheck,
      "aria-labelledby": this.footerId
    }), React.createElement("span", {
      className: prefix + "transfer-panel-count",
      id: this.footerId
    }, countLabel));
  };
  TransferPanel2.prototype.render = function render() {
    var _props12 = this.props, prefix = _props12.prefix, title = _props12.title, showSearch = _props12.showSearch, filter2 = _props12.filter;
    var searchedValue = this.state.searchedValue;
    var dataSource = this.props.dataSource;
    this.enabledDatasource = dataSource.filter(function(item) {
      return !item.disabled;
    });
    if (showSearch && searchedValue) {
      dataSource = dataSource.filter(function(item) {
        return filter2(searchedValue, item);
      });
    }
    return React.createElement("div", {className: prefix + "transfer-panel"}, title ? this.renderHeader() : null, showSearch ? this.renderSearch() : null, this.renderList(dataSource), this.renderFooter());
  };
  return TransferPanel2;
}(Component), _class$1.propTypes = {
  prefix: propTypes.string,
  position: propTypes.oneOf(["left", "right"]),
  mode: propTypes.oneOf(["normal", "simple"]),
  dataSource: propTypes.array,
  value: propTypes.array,
  onChange: propTypes.func,
  onMove: propTypes.func,
  onMoveAll: propTypes.func,
  disabled: propTypes.bool,
  locale: propTypes.object,
  title: propTypes.node,
  showSearch: propTypes.bool,
  filter: propTypes.func,
  onSearch: propTypes.func,
  searchPlaceholder: propTypes.string,
  notFoundContent: propTypes.node,
  listClassName: propTypes.string,
  listStyle: propTypes.object,
  itemRender: propTypes.func,
  sortable: propTypes.bool,
  onSort: propTypes.func,
  baseId: propTypes.string,
  customerList: propTypes.func,
  useVirtual: propTypes.bool,
  showCheckAll: propTypes.bool
}, _temp$1);
TransferPanel.displayName = "TransferPanel";
var _class$2, _temp$2;
var config = NextConfigProvider.config;
var bindCtx$2 = func.bindCtx;
var pickOthers$1 = obj.pickOthers;
var getLeftValue = function getLeftValue2(dataSource, rightValue) {
  return dataSource.map(function(item) {
    return item.value;
  }).filter(function(itemValue) {
    return rightValue.indexOf(itemValue) === -1;
  });
};
var filterCheckedValue = function filterCheckedValue2(left, right, dataSource) {
  var result = {
    left: [],
    right: []
  };
  if (left.length || right.length) {
    var value = dataSource.map(function(item) {
      return item.value;
    });
    value.forEach(function(itemValue) {
      if (left.indexOf(itemValue) > -1) {
        result.left.push(itemValue);
      } else if (right.indexOf(itemValue) > -1) {
        result.right.push(itemValue);
      }
    });
  }
  return result;
};
var Transfer = (_temp$2 = _class$2 = function(_Component) {
  _inherits(Transfer2, _Component);
  Transfer2.normalizeValue = function normalizeValue(value) {
    if (value) {
      if (Array.isArray(value)) {
        return value;
      }
      return [value];
    }
    return [];
  };
  Transfer2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var innerUpdate = prevState.innerUpdate, value = prevState.value, leftValue = prevState.leftValue;
    if (innerUpdate) {
      return {
        innerUpdate: false,
        value,
        leftValue
      };
    }
    var st = {};
    var newValue = void 0;
    if ("value" in nextProps) {
      var _value = Transfer2.normalizeValue(nextProps.value);
      st.value = _value;
      newValue = _value;
    } else {
      newValue = prevState.value;
    }
    st.leftValue = getLeftValue(nextProps.dataSource, newValue);
    var _filterCheckedValue = filterCheckedValue(prevState.leftCheckedValue, prevState.rightCheckedValue, nextProps.dataSource), left = _filterCheckedValue.left, right = _filterCheckedValue.right;
    st.leftCheckedValue = left;
    st.rightCheckedValue = right;
    return st;
  };
  function Transfer2(props, context) {
    _classCallCheck(this, Transfer2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
    var value = props.value, defaultValue = props.defaultValue, defaultLeftChecked = props.defaultLeftChecked, defaultRightChecked = props.defaultRightChecked, dataSource = props.dataSource, rtl = props.rtl, operations = props.operations;
    if (operations.length === 0) {
      operations.push(React.createElement(NextIcon, {rtl, type: "arrow-right"}));
      operations.push(React.createElement(NextIcon, {rtl, type: "arrow-left"}));
    }
    var _filterCheckedValue2 = filterCheckedValue(Transfer2.normalizeValue(defaultLeftChecked), Transfer2.normalizeValue(defaultRightChecked), dataSource), left = _filterCheckedValue2.left, right = _filterCheckedValue2.right;
    var stValue = Transfer2.normalizeValue("value" in props ? value : defaultValue);
    _this.state = {
      value: stValue,
      leftCheckedValue: left,
      rightCheckedValue: right,
      leftValue: getLeftValue(dataSource, stValue)
    };
    bindCtx$2(_this, ["handlePanelChange", "handlePanelSort", "handleMoveItem", "handleSimpleMove", "handleSimpleMoveAll"]);
    return _this;
  }
  Transfer2.prototype.groupDatasource = function groupDatasource(value, itemValues, dataSource) {
    return value.reduce(function(ret, itemValue) {
      var index = itemValues.indexOf(itemValue);
      if (index > -1) {
        ret.push(dataSource[index]);
      }
      return ret;
    }, []);
  };
  Transfer2.prototype.handlePanelChange = function handlePanelChange(position, value) {
    var _setState;
    var valuePropName = position === "left" ? "leftCheckedValue" : "rightCheckedValue";
    this.setState((_setState = {
      innerUpdate: true
    }, _setState[valuePropName] = value, _setState));
  };
  Transfer2.prototype.handlePanelSort = function handlePanelSort(position, dragValue, referenceValue, dragGap) {
    var _this2 = this;
    var _state = this.state, value = _state.value, leftValue = _state.leftValue;
    var newValue = position === "right" ? value : leftValue;
    var currentIndex = newValue.indexOf(dragValue);
    var referenceIndex = newValue.indexOf(referenceValue);
    var expectIndex = dragGap === "before" ? referenceIndex : referenceIndex + 1;
    if (currentIndex === expectIndex) {
      return;
    }
    newValue.splice(currentIndex, 1);
    if (currentIndex < expectIndex) {
      expectIndex = expectIndex - 1;
    }
    newValue.splice(expectIndex, 0, dragValue);
    this.setState({
      innerUpdate: true,
      value,
      leftValue
    }, function() {
      _this2.props.onSort(newValue, position);
    });
  };
  Transfer2.prototype.handleMoveItem = function handleMoveItem(direction) {
    var _st;
    var rightValue = void 0;
    var newLeftValue = void 0;
    var movedValue = void 0;
    var valuePropName = void 0;
    var _state2 = this.state, value = _state2.value, leftValue = _state2.leftValue, leftCheckedValue = _state2.leftCheckedValue, rightCheckedValue = _state2.rightCheckedValue;
    if (direction === "right") {
      rightValue = leftCheckedValue.concat(value);
      newLeftValue = leftValue.filter(function(itemValue) {
        return leftCheckedValue.indexOf(itemValue) === -1;
      });
      movedValue = leftCheckedValue;
      valuePropName = "leftCheckedValue";
    } else {
      rightValue = value.filter(function(itemValue) {
        return rightCheckedValue.indexOf(itemValue) === -1;
      });
      newLeftValue = rightCheckedValue.concat(leftValue);
      movedValue = rightCheckedValue;
      valuePropName = "rightCheckedValue";
    }
    var st = (_st = {}, _st[valuePropName] = [], _st);
    this.setValueState(st, rightValue, newLeftValue, movedValue, direction);
  };
  Transfer2.prototype.handleSimpleMove = function handleSimpleMove(direction, v) {
    var rightValue = void 0;
    var newLeftValue = void 0;
    var _state3 = this.state, value = _state3.value, leftValue = _state3.leftValue;
    if (direction === "right") {
      rightValue = [v].concat(value);
      newLeftValue = leftValue.filter(function(itemValue) {
        return itemValue !== v;
      });
    } else {
      rightValue = value.filter(function(itemValue) {
        return itemValue !== v;
      });
      newLeftValue = [v].concat(leftValue);
    }
    this.setValueState({}, rightValue, newLeftValue, [v], direction);
  };
  Transfer2.prototype.handleSimpleMoveAll = function handleSimpleMoveAll(direction) {
    var rightValue = void 0;
    var newLeftValue = void 0;
    var movedValue = void 0;
    var dataSource = this.props.dataSource;
    var _state4 = this.state, value = _state4.value, leftValue = _state4.leftValue;
    var disabledValue = dataSource.reduce(function(ret, item) {
      if (item.disabled) {
        ret.push(item.value);
      }
      return ret;
    }, []);
    if (direction === "right") {
      movedValue = leftValue.filter(function(itemValue) {
        return disabledValue.indexOf(itemValue) === -1;
      });
      rightValue = movedValue.concat(value);
      newLeftValue = leftValue.filter(function(itemValue) {
        return disabledValue.indexOf(itemValue) > -1;
      });
    } else {
      movedValue = value.filter(function(itemValue) {
        return disabledValue.indexOf(itemValue) === -1;
      });
      rightValue = value.filter(function(itemValue) {
        return disabledValue.indexOf(itemValue) > -1;
      });
      newLeftValue = movedValue.concat(leftValue);
    }
    this.setValueState({}, rightValue, newLeftValue, movedValue, direction);
  };
  Transfer2.prototype.setValueState = function setValueState(st, rightValue, leftValue, movedValue, direction) {
    var _this3 = this;
    var dataSource = this.props.dataSource;
    var callback = function callback2() {
      if ("onChange" in _this3.props) {
        var itemValues = dataSource.map(function(item) {
          return item.value;
        });
        var rightData = _this3.groupDatasource(rightValue, itemValues, dataSource);
        var leftData = _this3.groupDatasource(leftValue, itemValues, dataSource);
        var movedData = _this3.groupDatasource(movedValue, itemValues, dataSource);
        _this3.props.onChange(rightValue, rightData, {
          leftValue,
          leftData,
          movedValue,
          movedData,
          direction
        });
      }
    };
    if (!("value" in this.props)) {
      st.value = rightValue;
      st.leftValue = leftValue;
    }
    if (Object.keys(st).length) {
      this.setState(st, callback);
    } else {
      callback();
    }
  };
  Transfer2.prototype.renderCenter = function renderCenter() {
    var _props = this.props, prefix = _props.prefix, mode = _props.mode, operations = _props.operations, disabled = _props.disabled, leftDisabled = _props.leftDisabled, rightDisabled = _props.rightDisabled, locale = _props.locale;
    var _state5 = this.state, leftCheckedValue = _state5.leftCheckedValue, rightCheckedValue = _state5.rightCheckedValue;
    return React.createElement("div", {className: prefix + "transfer-operations"}, mode === "simple" ? React.createElement(NextIcon, {
      className: prefix + "transfer-move",
      size: "large",
      type: "switch"
    }) : [React.createElement(NextButton, {
      "aria-label": locale.moveToRight,
      key: "l2r",
      className: prefix + "transfer-operation",
      type: leftCheckedValue.length ? "primary" : "normal",
      disabled: leftDisabled || disabled || !leftCheckedValue.length,
      onClick: this.handleMoveItem.bind(this, "right")
    }, operations[0]), React.createElement(NextButton, {
      "aria-label": locale.moveToLeft,
      key: "r2l",
      className: prefix + "transfer-operation",
      type: rightCheckedValue.length ? "primary" : "normal",
      disabled: rightDisabled || disabled || !rightCheckedValue.length,
      onClick: this.handleMoveItem.bind(this, "left")
    }, operations[1])]);
  };
  Transfer2.prototype.render = function render() {
    var _props2 = this.props, prefix = _props2.prefix, mode = _props2.mode, disabled = _props2.disabled, className = _props2.className, dataSource = _props2.dataSource, locale = _props2.locale, showSearch = _props2.showSearch, filter2 = _props2.filter, onSearch2 = _props2.onSearch, leftDisabled = _props2.leftDisabled, rightDisabled = _props2.rightDisabled, searchPlaceholder = _props2.searchPlaceholder, notFoundContent = _props2.notFoundContent, titles = _props2.titles, listClassName = _props2.listClassName, listStyle = _props2.listStyle, itemRender2 = _props2.itemRender, sortable = _props2.sortable, useVirtual = _props2.useVirtual, rtl = _props2.rtl, id = _props2.id, children = _props2.children, showCheckAll = _props2.showCheckAll;
    var _state6 = this.state, value = _state6.value, leftValue = _state6.leftValue, leftCheckedValue = _state6.leftCheckedValue, rightCheckedValue = _state6.rightCheckedValue;
    var itemValues = dataSource.map(function(item) {
      return item.value;
    });
    var leftDatasource = this.groupDatasource(leftValue, itemValues, dataSource);
    var rightDatasource = this.groupDatasource(value, itemValues, dataSource);
    var panelProps = {
      prefix,
      mode,
      locale,
      showSearch,
      filter: filter2,
      onSearch: onSearch2,
      searchPlaceholder,
      notFoundContent,
      listClassName,
      listStyle,
      itemRender: itemRender2,
      onMove: this.handleSimpleMove,
      onMoveAll: this.handleSimpleMoveAll,
      onChange: this.handlePanelChange,
      sortable,
      useVirtual,
      onSort: this.handlePanelSort,
      baseId: id,
      customerList: children,
      showCheckAll
    };
    var others = pickOthers$1(Object.keys(Transfer2.propTypes), this.props);
    if (rtl) {
      others.dir = "rtl";
    }
    return React.createElement("div", _extends({
      className: classnames(prefix + "transfer", className),
      id
    }, others), React.createElement(TransferPanel, _extends({}, panelProps, {
      position: "left",
      dataSource: leftDatasource,
      disabled: leftDisabled || disabled,
      value: leftCheckedValue,
      title: titles[0]
    })), this.renderCenter(), React.createElement(TransferPanel, _extends({}, panelProps, {
      position: "right",
      dataSource: rightDatasource,
      disabled: rightDisabled || disabled,
      value: rightCheckedValue,
      title: titles[1]
    })));
  };
  return Transfer2;
}(Component), _class$2.contextTypes = {
  prefix: propTypes.string
}, _class$2.propTypes = _extends({}, NextConfigProvider.propTypes, {
  prefix: propTypes.string,
  pure: propTypes.bool,
  rtl: propTypes.bool,
  className: propTypes.string,
  mode: propTypes.oneOf(["normal", "simple"]),
  dataSource: propTypes.arrayOf(propTypes.object),
  value: propTypes.arrayOf(propTypes.string),
  defaultValue: propTypes.arrayOf(propTypes.string),
  onChange: propTypes.func,
  disabled: propTypes.bool,
  leftDisabled: propTypes.bool,
  rightDisabled: propTypes.bool,
  itemRender: propTypes.func,
  showSearch: propTypes.bool,
  filter: propTypes.func,
  onSearch: propTypes.func,
  searchPlaceholder: propTypes.string,
  notFoundContent: propTypes.node,
  titles: propTypes.arrayOf(propTypes.node),
  operations: propTypes.arrayOf(propTypes.node),
  defaultLeftChecked: propTypes.arrayOf(propTypes.string),
  defaultRightChecked: propTypes.arrayOf(propTypes.string),
  listClassName: propTypes.string,
  listStyle: propTypes.object,
  sortable: propTypes.bool,
  onSort: propTypes.func,
  locale: propTypes.object,
  id: propTypes.string,
  children: propTypes.func,
  useVirtual: propTypes.bool,
  showCheckAll: propTypes.bool
}), _class$2.defaultProps = {
  prefix: "next-",
  pure: false,
  mode: "normal",
  dataSource: [],
  defaultValue: [],
  disabled: false,
  leftDisabled: false,
  rightDisabled: false,
  showCheckAll: true,
  itemRender: function itemRender(data) {
    return data.label;
  },
  showSearch: false,
  filter: function filter(searchedValue, data) {
    var labelString = "";
    var loop = function loop2(arg) {
      if (React.isValidElement(arg) && arg.props.children) {
        React.Children.forEach(arg.props.children, loop2);
      } else if (typeof arg === "string") {
        labelString += arg;
      }
    };
    loop(data.label);
    return labelString.length >= searchedValue.length && labelString.indexOf(searchedValue) > -1;
  },
  onSearch: function onSearch() {
  },
  notFoundContent: "Not Found",
  titles: [],
  operations: [],
  defaultLeftChecked: [],
  defaultRightChecked: [],
  sortable: false,
  onSort: function onSort() {
  },
  locale: zhCN.Transfer
}, _temp$2);
Transfer.displayName = "Transfer";
var Transfer$1 = config(polyfill(Transfer));
export {Transfer$1 as T};
