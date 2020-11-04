import {p as polyfill, i as func, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, o as obj, d as classnames, R as React, g as _extends, C as Component, h as propTypes, z as zhCN, K as KEYCODE, s as NextIcon, N as NextConfigProvider, k as _objectWithoutProperties} from "./index.09bdaa64.js";
var _class, _temp;
var noop = func.noop, bindCtx = func.bindCtx;
var ENTER = KEYCODE.ENTER, LEFT = KEYCODE.LEFT, UP = KEYCODE.UP, RIGHT = KEYCODE.RIGHT, DOWN = KEYCODE.DOWN;
var supportKeys = [ENTER, LEFT, UP, RIGHT, DOWN];
var ICON_SIZE_MAP = {
  small: "xs",
  medium: "small",
  large: "medium"
};
var Rating = (_temp = _class = function(_Component) {
  _inherits(Rating2, _Component);
  Rating2.currentValue = function currentValue(min, max, hoverValue, stateValue) {
    var value = hoverValue ? hoverValue : stateValue;
    value = value >= max ? max : value;
    value = value <= min ? min : value;
    return value || 0;
  };
  function Rating2(props) {
    _classCallCheck(this, Rating2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _this.saveRef = function(ref, i) {
      _this["refs-rating-icon-" + i] = ref;
    };
    _this.state = {
      value: "value" in props ? props.value : props.defaultValue,
      hoverValue: 0,
      iconSpace: 0,
      iconSize: 0,
      clicked: false
    };
    _this.timer = null;
    bindCtx(_this, ["handleClick", "handleHover", "handleLeave", "onKeyDown"]);
    return _this;
  }
  Rating2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var state = {};
    if ("value" in nextProps) {
      state.value = nextProps.value || 0;
    }
    if ("disabled" in nextProps || "readOnly" in nextProps || "isPreview" in nextProps || "renderPreview" in nextProps) {
      state.disabled = nextProps.disabled || nextProps.readOnly || nextProps.isPreview && !("renderPreview" in nextProps);
    }
    return state;
  };
  Rating2.prototype.componentDidMount = function componentDidMount() {
    this.getRenderResult();
  };
  Rating2.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearTimer();
  };
  Rating2.prototype.clearTimer = function clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  };
  Rating2.prototype.getRenderResult = function getRenderResult() {
    var count = this.props.count;
    var _state = this.state, iconSpace = _state.iconSpace, iconSize = _state.iconSize;
    var icon = this["refs-rating-icon-0"];
    if (icon && this.underlayNode) {
      var newIconSize = icon.offsetWidth;
      var newIconSpace = (this.underlayNode.offsetWidth - count * newIconSize) / (count + 1);
      if (newIconSize !== iconSize || newIconSpace !== iconSpace) {
        this.setState({
          iconSpace: newIconSpace,
          iconSize: newIconSize
        });
      }
    }
  };
  Rating2.prototype.getValue = function getValue(e) {
    this.getRenderResult();
    var _props = this.props, allowHalf = _props.allowHalf, count = _props.count, rtl = _props.rtl;
    var _state2 = this.state, iconSpace = _state2.iconSpace, iconSize = _state2.iconSize;
    var pos = e.pageX - this.underlayNode.getBoundingClientRect().left;
    var fullNum = Math.floor(pos / (iconSpace + iconSize));
    var surplusNum = (pos - fullNum * (iconSpace + iconSize) - iconSpace) / iconSize;
    var value = Number(fullNum) + Number(surplusNum.toFixed(1));
    if (value >= count) {
      value = count;
    } else if (allowHalf) {
      var floorValue = Math.floor(value);
      if (rtl) {
        value = value - 0.5 >= floorValue ? floorValue + 1.5 : floorValue + 1;
      } else {
        value = value - 0.5 >= floorValue ? floorValue + 1 : floorValue + 0.5;
      }
    } else {
      value = Math.floor(value) + 1;
    }
    return rtl ? count - value + 1 : value;
  };
  Rating2.prototype.handleHover = function handleHover(e) {
    var _this2 = this;
    if (this.state.disabled) {
      return;
    }
    var value = this.getValue(e);
    var onHoverChange = this.props.onHoverChange;
    if (value !== this.state.hoverValue) {
      this.clearTimer();
      this.timer = setTimeout(function() {
        _this2.setState({hoverValue: value}, function() {
          onHoverChange(value);
        });
      }, 0);
    }
  };
  Rating2.prototype.handleLeave = function handleLeave() {
    if (this.state.disabled) {
      return;
    }
    this.clearTimer();
    this.setState({
      hoverValue: 0
    });
  };
  Rating2.prototype.onKeyDown = function onKeyDown(e) {
    if (this.state.disabled) {
      return;
    }
    var _props2 = this.props, onKeyDown2 = _props2.onKeyDown, count = _props2.count;
    var disabled = this.state.disabled;
    if (disabled || supportKeys.indexOf(e.keyCode) < 0) {
      return !onKeyDown2 || onKeyDown2(e);
    }
    var _state3 = this.state, hoverValue = _state3.hoverValue, value = _state3.value;
    var changingValue = hoverValue;
    if (changingValue === 0) {
      changingValue = value;
    }
    switch (e.keyCode) {
      case DOWN:
      case RIGHT:
        if (changingValue < count) {
          changingValue += 1;
        } else {
          changingValue = 1;
        }
        this.handleChecked(changingValue);
        break;
      case UP:
      case LEFT:
        if (changingValue > 1) {
          changingValue -= 1;
        } else {
          changingValue = count;
        }
        this.handleChecked(changingValue);
        break;
      case ENTER:
        this.props.onChange(changingValue);
        this.setState({
          value: changingValue,
          hoverValue: changingValue
        });
        break;
    }
    return !onKeyDown2 || onKeyDown2(e);
  };
  Rating2.prototype.handleChecked = function handleChecked(index) {
    if (this.state.disabled) {
      return;
    }
    this.setState({hoverValue: index});
  };
  Rating2.prototype.handleClick = function handleClick(e) {
    var _this3 = this;
    if (this.state.disabled) {
      return;
    }
    var value = this.getValue(e);
    if (value < 0) {
      return;
    }
    if (!("value" in this.props)) {
      this.setState({value, clicked: true});
    }
    this.props.onChange(value);
    setTimeout(function() {
      _this3.setState({clicked: false});
    }, 100);
  };
  Rating2.prototype.getOverlayWidth = function getOverlayWidth() {
    var _state4 = this.state, hoverValue = _state4.hoverValue, iconSpace = _state4.iconSpace, iconSize = _state4.iconSize;
    if (!iconSpace || !iconSize) {
      return "auto";
    }
    var value = Rating2.currentValue(0, this.props.count, hoverValue, this.state.value);
    var floorValue = Math.floor(value);
    return iconSize * value + (floorValue + 1) * iconSpace;
  };
  Rating2.prototype.getInfoLeft = function getInfoLeft() {
    var _state5 = this.state, value = _state5.value, hoverValue = _state5.hoverValue, iconSpace = _state5.iconSpace, iconSize = _state5.iconSize;
    var infoValue = hoverValue || value;
    var ceilValue = Math.ceil(infoValue);
    return iconSize * (ceilValue - 1) + ceilValue * iconSpace;
  };
  Rating2.prototype.render = function render() {
    var _classNames, _classNames2, _classNames3, _this4 = this;
    var _props3 = this.props, id = _props3.id, prefix = _props3.prefix, className = _props3.className, showGrade = _props3.showGrade, count = _props3.count, size = _props3.size, iconType = _props3.iconType, strokeMode = _props3.strokeMode, readAs2 = _props3.readAs, rtl = _props3.rtl, isPreview = _props3.isPreview, renderPreview = _props3.renderPreview, locale = _props3.locale;
    var disabled = this.state.disabled;
    var others = obj.pickOthers(Rating2.propTypes, this.props);
    var _state6 = this.state, hoverValue = _state6.hoverValue, clicked = _state6.clicked;
    var underlay = [], overlay = [];
    var enableA11y = !!id;
    var value = Rating2.currentValue(0, count, hoverValue, this.state.value);
    var sizeMap = ICON_SIZE_MAP[size];
    var _loop = function _loop2(i2) {
      var _classNames4;
      var isCurrent = Math.ceil(value - 1) === i2;
      var iconCls = classnames((_classNames4 = {
        hover: hoverValue > 0 && isCurrent,
        clicked: clicked && isCurrent
      }, _classNames4[prefix + "rating-symbol-icon"] = !iconType, _classNames4));
      var iconNode = iconType ? React.createElement(NextIcon, {type: iconType, size: sizeMap, className: iconCls}) : React.createElement(NextIcon, {type: "favorites-filling", size: sizeMap, className: iconCls});
      var saveRefs = function saveRefs2(ref) {
        _this4.saveRef(ref, i2);
      };
      underlay.push(React.createElement("span", {ref: saveRefs, key: "underlay-" + i2, className: prefix + "rating-icon"}, iconNode));
      if (enableA11y) {
        overlay.push(React.createElement("input", {
          id: id + "-" + prefix + "star" + (i2 + 1),
          key: "input-" + i2,
          className: prefix + "sr-only",
          "aria-checked": i2 + 1 === parseInt(hoverValue),
          checked: i2 + 1 === parseInt(hoverValue),
          onChange: _this4.handleChecked.bind(_this4, i2 + 1),
          type: "radio",
          name: "rating"
        }));
      }
      overlay.push(React.createElement("label", {
        key: "overlay-" + i2,
        htmlFor: enableA11y ? id + "-" + prefix + "star" + (i2 + 1) : null,
        className: prefix + "rating-icon"
      }, iconNode, enableA11y ? React.createElement("span", {className: prefix + "sr-only"}, readAs2(i2 + 1)) : null));
    };
    for (var i = 0; i < count; i++) {
      _loop(i);
    }
    var ratingCls = classnames([prefix + "rating", prefix + "rating-" + size], (_classNames = {}, _classNames[prefix + "rating-grade-low"] = value <= count * 0.4, _classNames[prefix + "rating-grade-high"] = value > count * 0.4, _classNames[prefix + "rating-stroke-mode"] = strokeMode, _classNames.hover = hoverValue > 0, _classNames), className);
    var baseCls = classnames(prefix + "rating-base", (_classNames2 = {}, _classNames2[prefix + "rating-base-disabled"] = disabled, _classNames2));
    var previewCls = classnames((_classNames3 = {}, _classNames3[prefix + "form-preview"] = true, _classNames3[className] = !!className, _classNames3));
    var overlayStyle = {
      width: this.getOverlayWidth()
    };
    var infoStyle = {
      left: this.getInfoLeft(),
      display: hoverValue ? "block" : "none"
    };
    var finalProps = disabled ? {} : {
      onClick: this.handleClick,
      onMouseOver: this.handleHover,
      onMouseMove: this.handleHover,
      onMouseLeave: this.handleLeave
    };
    if (rtl) {
      others.dir = "rtl";
    }
    if (isPreview && "renderPreview" in this.props) {
      return React.createElement("div", _extends({id}, others, {className: previewCls}), renderPreview(value, this.props));
    }
    return React.createElement("div", _extends({
      id
    }, others, {
      className: ratingCls,
      onKeyDown: this.onKeyDown,
      tabIndex: "0",
      role: "group",
      "aria-label": locale.description
    }), React.createElement("div", _extends({className: baseCls}, finalProps), React.createElement("div", {className: prefix + "rating-underlay", ref: function ref(n) {
      return _this4.underlayNode = n;
    }, "aria-hidden": true}, underlay), React.createElement("div", {className: prefix + "rating-overlay", style: overlayStyle}, overlay)), showGrade ? React.createElement("div", {className: prefix + "rating-info", style: infoStyle}, readAs2(value)) : null);
  };
  return Rating2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  defaultValue: propTypes.number,
  value: propTypes.number,
  count: propTypes.number,
  showGrade: propTypes.bool,
  size: propTypes.oneOf(["small", "medium", "large"]),
  allowHalf: propTypes.bool,
  onChange: propTypes.func,
  onHoverChange: propTypes.func,
  disabled: propTypes.bool,
  readAs: propTypes.func,
  iconType: propTypes.string,
  strokeMode: propTypes.bool,
  className: propTypes.string,
  id: propTypes.string,
  rtl: propTypes.bool,
  locale: propTypes.object,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func,
  readOnly: propTypes.bool
}, _class.defaultProps = {
  prefix: "next-",
  size: "medium",
  disabled: false,
  readOnly: false,
  isPreview: false,
  count: 5,
  showGrade: false,
  defaultValue: 0,
  readAs: function readAs(val) {
    return val;
  },
  allowHalf: false,
  onChange: noop,
  onHoverChange: noop,
  locale: zhCN.Rating
}, _temp);
Rating.displayName = "Rating";
var Rating$1 = polyfill(Rating);
var NextRating = NextConfigProvider.config(Rating$1, {
  transform: function transform(props, deprecated) {
    if ("type" in props) {
      deprecated("type", "showGrade", "Rating");
      var _props = props, type = _props.type, others = _objectWithoutProperties(_props, ["type"]);
      props = _extends({showGrade: type === "grade"}, others);
    }
    var _props2 = props, disabled = _props2.disabled, readOnly = _props2.readOnly;
    props.disabled = disabled || readOnly;
    return props;
  }
});
export {NextRating as N};
