import {N as NextConfigProvider, p as polyfill, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, g as _extends, k as _objectWithoutProperties, R as React, m as Children, d as classnames, o as obj, C as Component, i as propTypes, z as zhCN, A as Animate, s as NextIcon} from "./index.d0c11305.js";
import {N as NextButton} from "./ce63a13f.js";
var _class, _temp;
var Timeline = (_temp = _class = function(_Component) {
  _inherits(Timeline2, _Component);
  function Timeline2(props, context) {
    _classCallCheck(this, Timeline2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
    _this.state = {
      fold: props.fold
    };
    return _this;
  }
  Timeline2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var innerUpdate = prevState.innerUpdate, fold = prevState.fold;
    if (innerUpdate) {
      return {
        fold,
        innerUpdate: false
      };
    }
    if ("fold" in nextProps) {
      return {
        fold: nextProps.fold
      };
    }
    return null;
  };
  Timeline2.prototype.toggleFold = function toggleFold2(folderIndex, total) {
    var fold = this.state.fold.map(function(item) {
      return _extends({}, item);
    });
    if (folderIndex) {
      for (var i = 0; i < fold.length; i++) {
        var _fold$i = fold[i], foldArea = _fold$i.foldArea, foldShow = _fold$i.foldShow;
        if (foldArea[1] && folderIndex === foldArea[1] || !foldArea[1] && folderIndex === total - 1) {
          fold[i].foldShow = !foldShow;
        }
      }
      this.setState({fold, innerUpdate: true});
    }
  };
  Timeline2.prototype.render = function render() {
    var _this2 = this, _classNames;
    var _props = this.props, prefix = _props.prefix, rtl = _props.rtl, className = _props.className, children = _props.children, locale = _props.locale, animation = _props.animation, others = _objectWithoutProperties(_props, ["prefix", "rtl", "className", "children", "locale", "animation"]);
    var fold = this.state.fold;
    var childrenCount = React.Children.count(children);
    var cloneChildren = Children.map(children, function(child, i) {
      var folderIndex = null;
      var foldNodeShow = false;
      fold.forEach(function(item) {
        var foldArea = item.foldArea, foldShow = item.foldShow;
        if (foldArea[0] && i >= foldArea[0] && (i <= foldArea[1] || !foldArea[1])) {
          folderIndex = foldArea[1] || childrenCount - 1;
          foldNodeShow = foldShow;
        }
      });
      return React.cloneElement(child, {
        prefix,
        locale,
        total: childrenCount,
        index: i,
        folderIndex,
        foldShow: foldNodeShow,
        toggleFold: folderIndex === i ? _this2.toggleFold.bind(_this2, folderIndex, childrenCount) : function() {
        },
        animation
      });
    });
    var timelineCls = classnames((_classNames = {}, _classNames[prefix + "timeline"] = true, _classNames), className);
    if (rtl) {
      others.dir = "rtl";
    }
    return React.createElement("ul", _extends({}, obj.pickOthers(Timeline2.propTypes, others), {
      className: timelineCls
    }), cloneChildren);
  };
  return Timeline2;
}(Component), _class.propTypes = _extends({}, NextConfigProvider.propTypes, {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  fold: propTypes.array,
  className: propTypes.string,
  children: propTypes.any,
  locale: propTypes.object,
  animation: propTypes.bool
}), _class.defaultProps = {
  prefix: "next-",
  rtl: false,
  fold: [],
  locale: zhCN.Timeline,
  animation: true
}, _temp);
Timeline.displayName = "Timeline";
var Timeline$1 = NextConfigProvider.config(polyfill(Timeline));
var _class$1, _temp2;
var Expand = Animate.Expand;
var TimelineItem = (_temp2 = _class$1 = function(_Component) {
  _inherits(TimelineItem2, _Component);
  function TimelineItem2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, TimelineItem2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.beforeEnter = function() {
      _this["timeline-item"].style["min-height"] = "auto";
    }, _this.beforeLeave = function() {
      _this["timeline-item"].style["min-height"] = "48px";
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  TimelineItem2.prototype.toggleFold = function toggleFold2(folderIndex) {
    this.props.toggleFold(folderIndex);
  };
  TimelineItem2.prototype.render = function render() {
    var _classNames, _classNames2, _classNames3, _classNames4, _this2 = this;
    var _props = this.props, prefix = _props.prefix, className = _props.className, state = _props.state, icon = _props.icon, dot = _props.dot, time = _props.time, title = _props.title, timeLeft = _props.timeLeft, content = _props.content, index = _props.index, total = _props.total, folderIndex = _props.folderIndex, foldShow = _props.foldShow, locale = _props.locale, animation = _props.animation, others = _objectWithoutProperties(_props, ["prefix", "className", "state", "icon", "dot", "time", "title", "timeLeft", "content", "index", "total", "folderIndex", "foldShow", "locale", "animation"]);
    var finalItemNode = dot ? dot : icon ? React.createElement("span", {className: prefix + "timeline-item-icon"}, React.createElement(NextIcon, {type: icon, size: "xs"})) : React.createElement("span", {className: prefix + "timeline-item-dot"});
    var itemCls = classnames((_classNames = {}, _classNames[prefix + "timeline-item"] = true, _classNames[prefix + "timeline-item-first"] = index === 0, _classNames[prefix + "timeline-item-last"] = index === total - 1, _classNames[prefix + "timeline-item-" + state] = state, _classNames[prefix + "timeline-item-folded"] = folderIndex, _classNames[prefix + "timeline-item-unfolded"] = foldShow, _classNames[prefix + "timeline-item-has-left-content"] = timeLeft, _classNames[className] = className, _classNames));
    var folderCls = classnames((_classNames2 = {}, _classNames2[prefix + "timeline-item-folder"] = true, _classNames2[prefix + "timeline-item-has-left-content"] = timeLeft, _classNames2));
    var itemNodeCls = classnames((_classNames3 = {}, _classNames3[prefix + "timeline-item-node"] = true, _classNames3[prefix + "timeline-item-node-custom"] = dot, _classNames3));
    var dotTailCls = classnames((_classNames4 = {}, _classNames4[prefix + "timeline-item-dot-tail"] = true, _classNames4[prefix + "timeline-item-dot-tail-solid"] = foldShow, _classNames4[prefix + "timeline-hide"] = index === total - 1 && foldShow, _classNames4));
    var buttonProps = {
      text: true,
      size: "small",
      type: "primary",
      onClick: this.toggleFold.bind(this, folderIndex, total)
    };
    var timelineNode = folderIndex && foldShow || !folderIndex ? React.createElement("div", _extends({}, obj.pickOthers(TimelineItem2.propTypes, others), {
      className: itemCls,
      ref: function ref(e) {
        _this2["timeline-item"] = e;
      }
    }), React.createElement("div", {className: prefix + "timeline-item-left-content"}, React.createElement("p", {className: prefix + "timeline-item-body"}, timeLeft)), React.createElement("div", {className: prefix + "timeline-item-timeline"}, React.createElement("div", {className: prefix + "timeline-item-tail"}, React.createElement("i", null)), React.createElement("div", {className: itemNodeCls}, finalItemNode)), React.createElement("div", {className: prefix + "timeline-item-content"}, React.createElement("div", {className: prefix + "timeline-item-title"}, title), React.createElement("div", {className: prefix + "timeline-item-body"}, content), React.createElement("div", {className: prefix + "timeline-item-time"}, time))) : null;
    return React.createElement("li", {tabIndex: "0"}, animation && folderIndex ? React.createElement(Expand, {
      animationAppear: false,
      beforeEnter: this.beforeEnter,
      beforeLeave: this.beforeEnter,
      afterEnter: this.beforeLeave
    }, timelineNode) : timelineNode, folderIndex === index ? React.createElement("div", {className: folderCls}, React.createElement("div", {className: dotTailCls}), foldShow ? React.createElement(NextButton, buttonProps, locale.fold, React.createElement(NextIcon, {type: "arrow-up"})) : React.createElement(NextButton, buttonProps, locale.expand, React.createElement(NextIcon, {type: "arrow-down"}))) : null);
  };
  return TimelineItem2;
}(Component), _class$1.propTypes = _extends({}, NextConfigProvider.propTypes, {
  prefix: propTypes.string,
  index: propTypes.number,
  total: propTypes.number,
  folderIndex: propTypes.number,
  foldShow: propTypes.bool,
  state: propTypes.oneOf(["done", "process", "error", "success"]),
  icon: propTypes.string,
  dot: propTypes.node,
  time: propTypes.node,
  title: propTypes.node,
  timeLeft: propTypes.node,
  content: propTypes.node,
  toggleFold: propTypes.func,
  className: propTypes.string,
  locale: propTypes.object,
  animation: propTypes.bool
}), _class$1.defaultProps = {
  prefix: "next-",
  state: "done",
  toggleFold: function toggleFold() {
  },
  animation: true
}, _temp2);
TimelineItem.displayName = "TimelineItem";
Timeline$1.Item = TimelineItem;
export {Timeline$1 as T};
