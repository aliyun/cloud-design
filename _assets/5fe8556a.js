import {p as polyfill, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, o as ReactDOM, R as React, j as _objectWithoutProperties, k as Children, d as classnames, e as _extends, C as Component$2, g as propTypes, c as createElement} from "./index.2dd166ed.js";
import {s as support, e as events, d as dom, H as He} from "./2c811738.js";
import {N as NextConfigProvider} from "./399cb00c.js";
import "./17ebea95.js";
import "./857177ad.js";
import {N as NextIcon} from "./f9e612ff.js";
import "./92303b48.js";
import "./e5558639.js";
import "./cf19697e.js";
import "./dfa9fef1.js";
import "./30c34cb9.js";
import "./bb5f28c2.js";
import "./d11bc707.js";
import "./1eb3882c.js";
import "./b6c4c22f.js";
import {N as NextProgress} from "./93afb3a1.js";
import {e as exported} from "./c39feb7c.js";
import "./68ce33c3.js";
import {S as Select} from "./eaee42e0.js";
var _class, _temp;
var getHeight = function getHeight2(el) {
  return dom.getStyle(el, "height");
};
var setHeight = function setHeight2(el, height) {
  return dom.setStyle(el, "height", height);
};
var Step = (_temp = _class = function(_Component) {
  _inherits(Step2, _Component);
  Step2.getDerivedStateFromProps = function getDerivedStateFromProps(newProps) {
    if ("current" in newProps) {
      return {
        current: newProps.current
      };
    }
  };
  function Step2(props, context) {
    _classCallCheck(this, Step2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
    _this._stepRefHandler = function(ref) {
      _this.step = ref;
    };
    _this.state = {
      parentWidth: "auto",
      parentHeight: "auto",
      currentfocus: 0
    };
    _this.resize = _this.resize.bind(_this);
    return _this;
  }
  Step2.prototype.componentDidMount = function componentDidMount() {
    if (!support.flex) {
      this.resize();
      events.on(window, "resize", this.resize);
    }
    this.adjustHeight();
  };
  Step2.prototype.componentDidUpdate = function componentDidUpdate() {
    this.adjustHeight();
  };
  Step2.prototype.componentWillUnmount = function componentWillUnmount() {
    if (!support.flex) {
      events.off(window, "resize", this.resize);
    }
  };
  Step2.prototype.adjustHeight = function adjustHeight() {
    var _props = this.props, shape = _props.shape, direction = _props.direction, prefix = _props.prefix, labelPlacement = _props.labelPlacement;
    if (shape !== "arrow" && (direction === "horizontal" || direction === "hoz") && (labelPlacement === "vertical" || labelPlacement === "ver")) {
      var step = ReactDOM.findDOMNode(this.step);
      var height = Array.prototype.slice.call(step.getElementsByClassName(prefix + "step-item")).reduce(function(ret, re) {
        var itemHeight = getHeight(re.getElementsByClassName(prefix + "step-item-container")[0]) + getHeight(re.getElementsByClassName(prefix + "step-item-body")[0]);
        return Math.max(itemHeight, ret);
      }, 0);
      setHeight(step, height);
    }
  };
  Step2.prototype.resize = function resize() {
    if (this.step) {
      this.setState({
        parentWidth: this.step.offsetWidth || 0,
        parentHeight: this.step.offsetHeight || 0
      });
    }
  };
  Step2.prototype._getValidChildren = function _getValidChildren(children) {
    var result = [];
    React.Children.forEach(children, function(child) {
      if (React.isValidElement(child)) {
        result.push(child);
      }
    });
    return result;
  };
  Step2.prototype.render = function render() {
    var _classNames;
    var _props2 = this.props, className = _props2.className, current = _props2.current, labelPlacement = _props2.labelPlacement, shape = _props2.shape, readOnly = _props2.readOnly, animation = _props2.animation, itemRender3 = _props2.itemRender, rtl = _props2.rtl, others = _objectWithoutProperties(_props2, ["className", "current", "labelPlacement", "shape", "readOnly", "animation", "itemRender", "rtl"]);
    var _props3 = this.props, prefix = _props3.prefix, direction = _props3.direction, children = _props3.children;
    prefix = this.context.prefix || prefix;
    var _state = this.state, parentWidth = _state.parentWidth, parentHeight = _state.parentHeight;
    direction = shape === "arrow" ? "hoz" : direction;
    children = this._getValidChildren(children);
    var cloneChildren = Children.map(children, function(child, index) {
      var status = index < current ? "finish" : index === current ? "process" : "wait";
      return React.cloneElement(child, {
        prefix,
        key: index,
        index,
        total: children.length,
        status: child.props.status || status,
        shape,
        direction,
        labelPlacement,
        parentWidth,
        parentHeight,
        readOnly,
        animation,
        tabIndex: 0,
        "aria-current": status === "process" ? "step" : null,
        itemRender: child.props.itemRender ? child.props.itemRender : itemRender3
      });
    });
    var _direction = direction === "ver" || direction === "vertical" ? "vertical" : "horizontal";
    var _labelPlacement = labelPlacement === "ver" || labelPlacement === "vertical" ? "vertical" : "horizontal";
    var stepCls = classnames((_classNames = {}, _classNames[prefix + "step"] = true, _classNames[prefix + "step-" + shape] = shape, _classNames[prefix + "step-" + _direction] = _direction, _classNames[prefix + "step-label-" + _labelPlacement] = _labelPlacement, _classNames[className] = className, _classNames));
    if (rtl) {
      others.dir = "rtl";
    }
    return React.createElement("ol", _extends({}, others, {className: stepCls, ref: this._stepRefHandler}), cloneChildren);
  };
  return Step2;
}(Component$2), _class.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  current: propTypes.number,
  direction: propTypes.oneOf(["hoz", "ver"]),
  labelPlacement: propTypes.oneOf(["hoz", "ver"]),
  shape: propTypes.oneOf(["circle", "arrow", "dot"]),
  readOnly: propTypes.bool,
  animation: propTypes.bool,
  className: propTypes.string,
  itemRender: propTypes.func
}, _class.defaultProps = {
  prefix: "next-",
  current: 0,
  direction: "hoz",
  labelPlacement: "ver",
  shape: "circle",
  animation: true,
  itemRender: null
}, _class.contextTypes = {
  prefix: propTypes.string
}, _temp);
Step.displayName = "Step";
var Step$1 = polyfill(Step);
var _class$1, _temp$1;
var StepItem = (_temp$1 = _class$1 = function(_Component) {
  _inherits(StepItem2, _Component);
  function StepItem2(props) {
    _classCallCheck(this, StepItem2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _this.onClick = function() {
      var _this$props = _this.props, index = _this$props.index, disabled = _this$props.disabled, readOnly = _this$props.readOnly, animation = _this$props.animation;
      if (disabled || readOnly) {
        return false;
      }
      if (animation && _this.stepNode) {
        dom.hasClass(_this.stepNode, "clicked") ? dom.removeClass(_this.stepNode, "clicked") : dom.addClass(_this.stepNode, "clicked");
      }
      _this.props.onClick(index);
    };
    _this.removeClickedCls = _this.removeClickedCls.bind(_this);
    _this._refHandlerCreator = _this._refHandlerCreator.bind(_this);
    _this.resize = _this.resize.bind(_this);
    return _this;
  }
  StepItem2.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props, shape = _props.shape, direction = _props.direction, labelPlacement = _props.labelPlacement, index = _props.index, total = _props.total;
    if (shape === "arrow") {
      return;
    }
    if (direction === "vertical" || direction === "ver") {
      this.resize();
      this.forceUpdate();
      this.eventHandler = events.on(window, "resize", this.resize);
    } else if ((direction === "horizontal" || direction === "hoz") && (labelPlacement === "horizontal" || labelPlacement === "hoz") && index !== total - 1) {
      this.adjustTail();
    }
  };
  StepItem2.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;
    var _props2 = this.props, shape = _props2.shape, direction = _props2.direction, labelPlacement = _props2.labelPlacement, index = _props2.index, total = _props2.total, rtl = _props2.rtl;
    if (shape === "arrow") {
      return;
    }
    var resetTailStyle = function resetTailStyle2() {
      dom.setStyle(_this2.tail, {
        width: "",
        top: ""
      });
    };
    if (direction === "vertical" || direction === "ver") {
      this.resize();
    } else if (direction === "horizontal" || direction === "hoz") {
      var _dom$setStyle;
      var pos = rtl ? "right" : "left";
      dom.setStyle(this.body, (_dom$setStyle = {
        width: ""
      }, _dom$setStyle[pos] = "", _dom$setStyle));
      if (shape === "circle" && (labelPlacement === "horizontal" || labelPlacement === "hoz") && index !== total - 1) {
        this.adjustTail();
      } else {
        resetTailStyle();
      }
    } else if (index !== total - 1) {
      resetTailStyle();
    }
  };
  StepItem2.prototype.componentWillUnmount = function componentWillUnmount() {
    this.eventHandler && this.eventHandler.off();
  };
  StepItem2.prototype.adjustTail = function adjustTail() {
    var width = this.container.offsetWidth + this.title.offsetWidth;
    dom.setStyle(this.tail, {
      width: "calc(100% - " + width + "px)",
      top: dom.getStyle(this.container, "height") / 2 + "px"
    });
  };
  StepItem2.prototype.resize = function resize() {
    var stepWidth = dom.getStyle(this.step, "width");
    var rtl = this.props.rtl;
    rtl ? this.body.style.right = stepWidth + "px" : this.body.style.left = stepWidth + "px";
    dom.setStyle(this.body, {
      width: dom.getStyle(this.step.parentNode.parentNode, "width") - stepWidth
    });
    dom.setStyle(this.tail, "height", dom.getStyle(this.body, "height") - dom.getStyle(this.container, "height"));
  };
  StepItem2.prototype._getNode = function _getNode() {
    var _props3 = this.props, prefix = _props3.prefix, index = _props3.index, status = _props3.status, icon = _props3.icon, shape = _props3.shape, percent = _props3.percent, itemRender3 = _props3.itemRender;
    var nodeElement = icon;
    if (shape === "dot") {
      nodeElement = icon ? React.createElement(NextIcon, {type: icon}) : React.createElement("div", {className: prefix + "step-item-node-dot"}, " ");
    } else if (shape === "circle" && percent) {
      nodeElement = React.createElement(NextProgress, {
        shape: "circle",
        percent,
        className: prefix + "step-item-progress"
      });
    } else if (shape === "circle" && !!itemRender3 && typeof itemRender3 === "function") {
      nodeElement = null;
    } else {
      nodeElement = React.createElement("div", {className: prefix + "step-item-node-circle"}, icon ? React.createElement(NextIcon, {type: icon}) : this._itemRender(index, status));
    }
    return nodeElement;
  };
  StepItem2.prototype.getNode = function getNode(args) {
    var _props4 = this.props, prefix = _props4.prefix, itemRender3 = _props4.itemRender, index = _props4.index, status = _props4.status, title = _props4.title, content = _props4.content, shape = _props4.shape;
    var others = args.others, stepCls = args.stepCls, overlayCls = args.overlayCls;
    var nodeElement = this._getNode();
    var containerStyle = shape === "dot" && {fontSize: "initial"} || {};
    var finalNodeElement = React.createElement("div", {
      className: prefix + "step-item-container",
      style: containerStyle,
      ref: this._refHandlerCreator("container")
    }, React.createElement("div", {
      className: prefix + "step-item-node-placeholder",
      onClick: this.onClick
    }, React.createElement("div", {
      className: prefix + "step-item-node",
      ref: this._refHandlerCreator("stepNode"),
      onTransitionEnd: this.removeClickedCls
    }, nodeElement)));
    if (!nodeElement) {
      finalNodeElement = React.createElement("div", {
        className: prefix + "step-item-container",
        style: containerStyle,
        ref: this._refHandlerCreator("container")
      }, React.createElement("div", {
        className: prefix + "step-item-node-placeholder",
        onClick: this.onClick
      }, itemRender3(index, status, title, content)));
    }
    if (shape !== "arrow") {
      delete others.tabIndex;
      delete others["aria-current"];
    }
    return React.createElement("li", _extends({}, others, {
      style: this.getStyle(),
      className: stepCls,
      ref: this._refHandlerCreator("step")
    }), finalNodeElement, React.createElement("div", {
      className: prefix + "step-item-body",
      ref: this._refHandlerCreator("body"),
      tabIndex: this.props.tabIndex,
      "aria-current": this.props["aria-current"]
    }, React.createElement("div", {
      className: prefix + "step-item-title",
      ref: this._refHandlerCreator("title")
    }, title), React.createElement("div", {className: prefix + "step-item-content"}, content)), React.createElement("div", {
      className: prefix + "step-item-tail",
      ref: this._refHandlerCreator("tail")
    }, React.createElement("div", {className: prefix + "step-item-tail-underlay"}, React.createElement("div", {
      className: prefix + "step-item-tail-overlay",
      style: overlayCls
    }))));
  };
  StepItem2.prototype.getStyle = function getStyle() {
    var _props5 = this.props, parentWidth = _props5.parentWidth, parentHeight = _props5.parentHeight, direction = _props5.direction, total = _props5.total, index = _props5.index, shape = _props5.shape;
    var width = "auto";
    if (Number(parentWidth) && Number(parentHeight)) {
      if (!support.flex && shape === "arrow") {
        width = Math.floor(parentWidth / total - parentHeight / 2 - parentHeight / 8);
      }
    }
    if (shape !== "arrow" && (direction === "horizontal" || direction === "hoz")) {
      width = total - 1 !== index ? Math.floor(100 / total) + "%" : "auto";
    }
    return {
      width
    };
  };
  StepItem2.prototype.removeClickedCls = function removeClickedCls() {
    var animation = this.props.animation;
    if (animation && this.stepNode && dom.hasClass(this.stepNode, "clicked")) {
      dom.removeClass(this.stepNode, "clicked");
    }
  };
  StepItem2.prototype._itemRender = function _itemRender(index, status) {
    var itemRender3 = this.props.itemRender;
    if (itemRender3) {
      return itemRender3(index, status);
    }
    return status === "finish" ? React.createElement(NextIcon, {type: "select"}) : index + 1;
  };
  StepItem2.prototype._refHandlerCreator = function _refHandlerCreator(refName) {
    var self = this;
    return function(ref) {
      self[refName] = ref;
    };
  };
  StepItem2.prototype.render = function render() {
    var _classNames;
    var _props6 = this.props, prefix = _props6.prefix, locale = _props6.locale, className = _props6.className, status = _props6.status, title = _props6.title, icon = _props6.icon, index = _props6.index, total = _props6.total, shape = _props6.shape, content = _props6.content, direction = _props6.direction, disabled = _props6.disabled, onClick2 = _props6.onClick, readOnly = _props6.readOnly, animation = _props6.animation, parentHeight = _props6.parentHeight, itemRender3 = _props6.itemRender, parentWidth = _props6.parentWidth, labelPlacement = _props6.labelPlacement, rtl = _props6.rtl, others = _objectWithoutProperties(_props6, ["prefix", "locale", "className", "status", "title", "icon", "index", "total", "shape", "content", "direction", "disabled", "onClick", "readOnly", "animation", "parentHeight", "itemRender", "parentWidth", "labelPlacement", "rtl"]);
    var stepCls = classnames((_classNames = {}, _classNames[prefix + "step-item"] = true, _classNames[prefix + "step-item-" + status] = status, _classNames[prefix + "step-item-first"] = index === 0, _classNames[prefix + "step-item-last"] = index === total - 1, _classNames[prefix + "step-item-disabled"] = disabled, _classNames[prefix + "step-item-read-only"] = readOnly, _classNames[className] = className, _classNames));
    var overlayCls = status === "finish" ? {width: "100%"} : null;
    var arrowElement = React.createElement("li", _extends({}, others, {
      style: this.getStyle(),
      className: stepCls,
      onClick: this.onClick
    }), React.createElement("div", {className: prefix + "step-item-container"}, React.createElement("div", {className: prefix + "step-item-title"}, title)));
    var otherElement = this.getNode({others, stepCls, overlayCls});
    return shape === "arrow" ? arrowElement : otherElement;
  };
  return StepItem2;
}(Component$2), _class$1.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  status: propTypes.oneOf(["wait", "process", "finish"]),
  title: propTypes.node,
  direction: propTypes.oneOf(["hoz", "ver"]),
  labelPlacement: propTypes.oneOf(["hoz", "ver"]),
  shape: propTypes.oneOf(["circle", "arrow", "dot"]),
  icon: propTypes.string,
  content: propTypes.node,
  itemRender: propTypes.func,
  percent: propTypes.number,
  index: propTypes.number,
  total: propTypes.number,
  animation: propTypes.bool,
  disabled: propTypes.bool,
  parentWidth: propTypes.oneOfType([propTypes.string, propTypes.number]),
  parentHeight: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onClick: propTypes.func,
  className: propTypes.string,
  readOnly: propTypes.bool
}, _class$1.defaultProps = {
  shape: "circle",
  index: 0,
  total: 1,
  onClick: function onClick() {
  }
}, _temp$1);
StepItem.displayName = "StepItem";
var StepItem$1 = NextConfigProvider.config(StepItem);
Step$1.Item = StepItem$1;
var NextStep = NextConfigProvider.config(Step$1, {
  transform: function transform(props, deprecated) {
    if ("type" in props) {
      deprecated("type", "shape", "Step");
      var _props = props, type = _props.type, direction = _props.direction, labelPlacement = _props.labelPlacement, others = _objectWithoutProperties(_props, ["type", "direction", "labelPlacement"]);
      direction = direction === "vertical" ? "ver" : direction === "horizontal" ? "hoz" : direction;
      labelPlacement = labelPlacement === "vertical" ? "ver" : labelPlacement === "horizontal" ? "hoz" : labelPlacement;
      props = _extends({shape: type, direction, labelPlacement}, others);
    }
    return props;
  }
});
const steps = [
  ["Step 1", "Open the refrigerator door"],
  ["Step 2", "Put the elephant in the refrigerator"],
  ["Step 3", "Close the refrigerator door"]
].map((item, index) => /* @__PURE__ */ createElement(NextStep.Item, {
  "aria-current": index === 1 ? "step" : null,
  key: index,
  title: item[0],
  content: item[1]
}));
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "Arrow"), /* @__PURE__ */ createElement(NextStep, {
    current: 1,
    shape: "arrow"
  }, steps), /* @__PURE__ */ createElement("h3", null, "Circle"), /* @__PURE__ */ createElement(NextStep, {
    current: 1,
    shape: "circle"
  }, steps), /* @__PURE__ */ createElement("h3", null, "Circle(Horizontal content)"), /* @__PURE__ */ createElement(NextStep, {
    current: 1,
    shape: "circle",
    labelPlacement: "hoz"
  }, steps), /* @__PURE__ */ createElement("h3", null, "Dot"), /* @__PURE__ */ createElement(NextStep, {
    current: 1,
    shape: "dot"
  }, steps)));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const StepItem$2 = NextStep.Item, ButtonGroup = exported.Group;
const renders = {
  1: function itemRender1(index) {
    return /* @__PURE__ */ createElement("div", {
      className: "custom-node1"
    }, /* @__PURE__ */ createElement("span", null, index + 1));
  },
  2: function itemRender2(index, status) {
    return /* @__PURE__ */ createElement("div", {
      className: "custom-node2"
    }, status === "finish" ? /* @__PURE__ */ createElement(NextIcon, {
      type: "success"
    }) : /* @__PURE__ */ createElement("span", null, index + 1), " ");
  }
};
const contents = [
  "Description1",
  "Description2 --- Very Looooooooooooooooooooooog content",
  "Description3"
];
class Component extends Component$2 {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 3,
      stepType: "circle",
      stepAnimation: true,
      labelPlacement: "ver"
    };
    this.onClick = this.onClick.bind(this);
  }
  next() {
    const s = this.state.currentStep + 1;
    this.setState({
      currentStep: s > 6 ? 6 : s
    });
  }
  prev() {
    const s = this.state.currentStep - 1;
    this.setState({
      currentStep: s < 0 ? 0 : s
    });
  }
  onClick(currentStep) {
    console.log(currentStep);
    this.setState({
      currentStep
    });
  }
  onStepTypeChange(value) {
    this.setState({stepType: value});
  }
  onStepAnimation(value) {
    this.setState({stepAnimation: value});
  }
  onLabelPlacementChange(value) {
    this.setState({labelPlacement: value});
  }
  onItemRenderChange(value) {
    this.setState({itemRender: renders[value], content: contents[value]});
  }
  render() {
    const {currentStep} = this.state;
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      className: "custom-step-option"
    }, /* @__PURE__ */ createElement(Select, {
      innerBefore: "shape:",
      placeholder: "Choose the dispaly type",
      onChange: this.onStepTypeChange.bind(this),
      className: "custom-select",
      defaultValue: "circle"
    }, ["circle", "arrow", "dot"].map((item) => /* @__PURE__ */ createElement(Select.Option, {
      value: item,
      key: item
    }, item))), /* @__PURE__ */ createElement(Select, {
      innerBefore: "labelPlacement:",
      placeholder: "Label placement",
      onChange: this.onLabelPlacementChange.bind(this),
      className: "custom-select",
      defaultValue: "hoz"
    }, ["hoz", "ver"].map((item) => /* @__PURE__ */ createElement(Select.Option, {
      value: item,
      key: item
    }, item))), /* @__PURE__ */ createElement(Select, {
      innerBefore: "animation:",
      placeholder: "Enable animation",
      onChange: this.onStepAnimation.bind(this),
      className: "custom-select",
      defaultValue: true
    }, [true, false].map((item, index) => /* @__PURE__ */ createElement(Select.Option, {
      value: item,
      key: index
    }, item ? "on" : "off"))), /* @__PURE__ */ createElement(Select, {
      innerBefore: "render:",
      placeholder: "Choose itemRender",
      onChange: this.onItemRenderChange.bind(this),
      className: "custom-select",
      defaultValue: 0
    }, ["ItemRender", "ItemRender1", "ItemRender2"].map((item, index) => /* @__PURE__ */ createElement(Select.Option, {
      value: index,
      key: index
    }, item)))), /* @__PURE__ */ createElement(NextStep, {
      itemRender: this.state.itemRender,
      current: currentStep,
      shape: this.state.stepType,
      animation: this.state.stepAnimation,
      labelPlacement: this.state.labelPlacement
    }, /* @__PURE__ */ createElement(StepItem$2, {
      title: "Step 1",
      onClick: this.onClick,
      content: "Description"
    }), /* @__PURE__ */ createElement(StepItem$2, {
      title: "Step 2",
      onClick: this.onClick,
      content: "Description"
    }), /* @__PURE__ */ createElement(StepItem$2, {
      title: "Step 3",
      onClick: this.onClick,
      content: this.state.content || "Description1"
    }), /* @__PURE__ */ createElement(StepItem$2, {
      title: "Step 4",
      onClick: this.onClick,
      content: "Description"
    }), /* @__PURE__ */ createElement(StepItem$2, {
      title: "Step 5",
      onClick: this.onClick,
      content: "Description"
    }), /* @__PURE__ */ createElement(StepItem$2, {
      title: "Step 6",
      onClick: this.onClick,
      content: "Description"
    })), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(ButtonGroup, null, /* @__PURE__ */ createElement(exported, {
      onClick: this.prev.bind(this),
      type: "primary",
      disabled: currentStep === 0
    }, "Backward"), /* @__PURE__ */ createElement(exported, {
      onClick: this.next.bind(this),
      type: "primary",
      disabled: currentStep === 6
    }, "Forward")));
  }
}
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(Component, null));
}
const Style$1 = He.div`
  .custom-step-option {
    margin-bottom: 20px;
  }

  .custom-select {
    margin-right: 20px;
  }
  .next-input-inner.next-before {
    margin-left: 8px;
  }
  .fusion-demo-item {
    margin: 15px 0;
  }
  .custom-node1 {
    height: 100%;
    width: 100%;
    border-radius: 20%;
    border: 1px dashed #3e71f1;
    text-align: center;
  }
  .custom-node1 span {
    font-size: 12px;

    position: absolute;
    top: 50%;
    text-align: center;
    width: 100%;
    left: 0;
    transform: translateY(-50%);
  }
  .custom-node2 {
    height: 100%;
    width: 100%;
    border-radius: 20%;
    border: 1px dashed #3e71f1;
    text-align: center;
    background: #3e71f1;
    color: #fff;
    position: relative;
  }

  .custom-node2 span,
  .custom-node2 i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    text-align: center;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const steps$1 = ["one", "two", "three", "four"];
function itemRender(index) {
  return /* @__PURE__ */ createElement("div", {
    className: "custom-node1"
  }, /* @__PURE__ */ createElement("span", null, index + 1));
}
function itemRender22(index, status) {
  return /* @__PURE__ */ createElement("div", {
    className: "custom-node2"
  }, status === "finish" ? /* @__PURE__ */ createElement(NextIcon, {
    type: "success"
  }) : /* @__PURE__ */ createElement("span", null, index + 1), " ");
}
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement("div", {
    className: "fusion-demo"
  }, /* @__PURE__ */ createElement("div", {
    className: "fusion-demo-item"
  }, /* @__PURE__ */ createElement(NextStep, {
    current: 2,
    animation: false,
    itemRender
  }, steps$1.map((item) => /* @__PURE__ */ createElement(NextStep.Item, {
    key: item,
    title: item
  })))), /* @__PURE__ */ createElement("div", {
    className: "fusion-demo-item"
  }, /* @__PURE__ */ createElement(NextStep, {
    current: 2,
    animation: false,
    itemRender: itemRender22
  }, steps$1.map((item) => /* @__PURE__ */ createElement(NextStep.Item, {
    key: item,
    title: item
  }))))));
}
const Style$2 = He.div`
  .fusion-demo-item {
    margin: 15px 0;
  }
  .custom-node1 {
    height: 100%;
    width: 100%;
    border-radius: 20%;
    border: 1px dashed #3e71f1;
    text-align: center;
  }
  .custom-node1 span {
    font-size: 12px;

    position: absolute;
    top: 50%;
    text-align: center;
    width: 100%;
    left: 0;
    transform: translateY(-50%);
  }
  .custom-node2 {
    height: 100%;
    width: 100%;
    border-radius: 20%;
    border: 1px dashed #3e71f1;
    text-align: center;
    background: #3e71f1;
    color: #fff;
    position: relative;
  }

  .custom-node2 span,
  .custom-node2 i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    text-align: center;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextStep, {
    current: 1,
    direction: "ver",
    animation: false
  }, /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 1",
    content: "Open the refrigerator door"
  }), /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 2",
    content: "Put the elephant in the refrigerator"
  }), /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 3",
    content: "Close the refrigerator door"
  })), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextStep, {
    current: 1,
    direction: "ver",
    shape: "dot",
    animation: false
  }, /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 1",
    content: "Open the refrigerator door"
  }), /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 2",
    content: "Put the elephant in the refrigerator"
  }), /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 3",
    content: "Close the refrigerator door"
  }))));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextStep, {
    current: 1,
    shape: "arrow"
  }, /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 1"
  }), /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 2"
  }), /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 3",
    disabled: true
  }), /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 4"
  })), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextStep, {
    current: 1,
    shape: "dot"
  }, /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 1"
  }), /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 2"
  }), /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 3",
    disabled: true
  }), /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 4"
  })), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextStep, {
    current: 1,
    shape: "circle"
  }, /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 1"
  }), /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 2"
  }), /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 3",
    disabled: true
  }), /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 4"
  }))));
}
const Style$4 = He.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextStep, {
    current: 1,
    animation: false,
    shape: "dot"
  }, /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 1",
    content: "Open the refrigerator door",
    icon: "calendar"
  }), /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 2",
    content: "Put the elephant in the refrigerator",
    percent: 40
  }), /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 3",
    content: "Close the refrigerator door",
    icon: "smile"
  })), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextStep, {
    current: 1,
    animation: false
  }, /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 1",
    content: "Open the refrigerator door",
    icon: "calendar"
  }), /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 2",
    content: "Put the elephant in the refrigerator",
    percent: 40
  }), /* @__PURE__ */ createElement(NextStep.Item, {
    title: "Step 3",
    content: "Close the refrigerator door",
    icon: "smile"
  }))));
}
const Style$5 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const StepItem$3 = NextStep.Item, ButtonGroup$1 = exported.Group;
class Component$1 extends Component$2 {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 3
    };
  }
  next() {
    const s = this.state.currentStep + 1;
    this.setState({
      currentStep: s > 6 ? 6 : s
    });
  }
  prev() {
    const s = this.state.currentStep - 1;
    this.setState({
      currentStep: s < 0 ? 0 : s
    });
  }
  onClick(currentStep) {
    console.log(currentStep);
    this.setState({
      currentStep
    });
  }
  render() {
    const {currentStep} = this.state;
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextStep, {
      current: currentStep,
      readOnly: true
    }, /* @__PURE__ */ createElement(StepItem$3, {
      title: "Step 1",
      onClick: this.onClick.bind(this)
    }), /* @__PURE__ */ createElement(StepItem$3, {
      title: "Step 2",
      onClick: this.onClick.bind(this)
    }), /* @__PURE__ */ createElement(StepItem$3, {
      title: "Step 3",
      onClick: this.onClick.bind(this)
    }), /* @__PURE__ */ createElement(StepItem$3, {
      title: "Step 4",
      onClick: this.onClick.bind(this)
    }), /* @__PURE__ */ createElement(StepItem$3, {
      title: "Step 5",
      onClick: this.onClick.bind(this)
    }), /* @__PURE__ */ createElement(StepItem$3, {
      title: "Step 6",
      onClick: this.onClick.bind(this)
    })), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(ButtonGroup$1, null, /* @__PURE__ */ createElement(exported, {
      onClick: this.prev.bind(this),
      type: "primary",
      disabled: currentStep === 0
    }, "Backward"), /* @__PURE__ */ createElement(exported, {
      onClick: this.next.bind(this),
      type: "primary",
      disabled: currentStep === 6
    }, "Forward")));
  }
}
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement(Component$1, null));
}
const Style$6 = He.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const modules = {};
modules["_basic"] = m0;
modules["_controlled"] = m1;
modules["_custom-step-item"] = m2;
modules["_direction"] = m3;
modules["_disable"] = m4;
modules["_percent"] = m5;
modules["_read-only"] = m6;
export default modules;
