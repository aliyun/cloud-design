import {c as createElement, w as NextInput, C as Component, S as Select} from "./index.d0c11305.js";
import {N as NextBalloon} from "./c9f624b3.js";
import "./ce63a13f.js";
import {h as hooks} from "./cf6ed2e0.js";
import "./dd875ffc.js";
import "./eb4d0865.js";
import "./7ff038be.js";
import {N as NextDatePicker} from "./eadc5cab.js";
import "./4eaf801c.js";
import {B as Button} from "./a691d3d5.js";
import {q as qe} from "./ca03a06a.js";
const {Tooltip} = NextBalloon;
const innerButton = /* @__PURE__ */ createElement(Button, {
  className: "btrigger"
}, "Fill in form");
const triggerTooltip = /* @__PURE__ */ createElement(Button, {
  style: {margin: "5px"}
}, "show tooltip");
const App = () => /* @__PURE__ */ createElement("div", {
  className: "container nested"
}, /* @__PURE__ */ createElement(NextBalloon, {
  id: "inner-a11y-balloon-1",
  autoFocus: true,
  trigger: /* @__PURE__ */ createElement(Button, {
    type: "primary"
  }, "Fill in sub-form"),
  popupContainer: (trigger) => trigger.parentNode,
  triggerType: "click"
}, "please input your age:", /* @__PURE__ */ createElement(NextInput, {
  placeholder: "Age",
  size: "small",
  label: "Age :",
  id: "balloon-input-1"
}), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null)), "        ", /* @__PURE__ */ createElement(NextBalloon, {
  id: "a11y-balloon",
  type: "primary",
  autoFocus: true,
  trigger: innerButton,
  triggerType: "click"
}, /* @__PURE__ */ createElement(NextBalloon, {
  id: "inner-a11y-balloon",
  autoFocus: true,
  trigger: /* @__PURE__ */ createElement(Button, {
    type: "primary"
  }, "Fill in sub-form"),
  popupContainer: (trigger) => trigger.parentNode,
  triggerType: "click"
}, "please input your age:", /* @__PURE__ */ createElement(NextInput, {
  placeholder: "Age",
  size: "small",
  label: "Age :",
  id: "balloon-input-2"
}), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null)), /* @__PURE__ */ createElement("br", null), "please input your name:", /* @__PURE__ */ createElement(NextInput, {
  placeholder: "Name",
  size: "small",
  label: "Name :",
  id: "balloon-input-3"
}), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null)), "        ", /* @__PURE__ */ createElement(Tooltip, {
  trigger: triggerTooltip,
  id: "aria-tooltip"
}, /* @__PURE__ */ createElement("p", null, "This is content for tooltip.")));
function DemoComponent() {
  const content2 = /* @__PURE__ */ createElement(App, null);
  return /* @__PURE__ */ createElement(Style, null, content2);
}
const Style = qe.div`
  .container.nested {
    margin-left: 100px;
    margin-bottom: 50px;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const top = /* @__PURE__ */ createElement(Button, {
  id: "top",
  style: {margin: "5px"},
  className: "btrigger"
}, "top");
const right = /* @__PURE__ */ createElement(Button, {
  id: "right",
  style: {margin: "5px"},
  className: "btrigger"
}, "right");
const bottom = /* @__PURE__ */ createElement(Button, {
  id: "bottom",
  style: {margin: "5px"},
  className: "btrigger"
}, "bottom");
const left = /* @__PURE__ */ createElement(Button, {
  id: "left",
  style: {margin: "5px"},
  className: "btrigger"
}, "left");
const topLeft = /* @__PURE__ */ createElement(Button, {
  id: "topLeft",
  style: {margin: "5px"},
  className: "btrigger"
}, "top left");
const topRight = /* @__PURE__ */ createElement(Button, {
  id: "topRight",
  style: {margin: "5px"},
  className: "btrigger"
}, "top right");
const rightTop = /* @__PURE__ */ createElement(Button, {
  id: "rightTop",
  style: {margin: "5px"},
  className: "btrigger"
}, "right top");
const rightBottom = /* @__PURE__ */ createElement(Button, {
  id: "rightBottom",
  style: {margin: "5px"},
  className: "btrigger"
}, "right bottom");
const bottomLeft = /* @__PURE__ */ createElement(Button, {
  id: "bottomLeft",
  style: {margin: "5px"},
  className: "btrigger"
}, "bottom left");
const bottomRight = /* @__PURE__ */ createElement(Button, {
  id: "bottomRight",
  style: {margin: "5px"},
  className: "btrigger"
}, "bottom right");
const leftTop = /* @__PURE__ */ createElement(Button, {
  id: "leftTop",
  style: {margin: "5px"},
  className: "btrigger"
}, "left top");
const leftBottom = /* @__PURE__ */ createElement(Button, {
  id: "leftBottom",
  style: {margin: "5px"},
  className: "btrigger"
}, "left bottom");
const Content = () => /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h4", {
  style: {marginTop: 0}
}, "balloon title"), /* @__PURE__ */ createElement("hr", null), /* @__PURE__ */ createElement("p", null, "balloon content"));
const App$1 = () => /* @__PURE__ */ createElement("div", {
  style: {paddingLeft: 320, paddingTop: 100}
}, /* @__PURE__ */ createElement("div", {
  style: {marginLeft: 75}
}, /* @__PURE__ */ createElement(NextBalloon, {
  trigger: topLeft,
  align: "tl",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null)), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: top,
  align: "t",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null)), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: topRight,
  align: "tr",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null))), /* @__PURE__ */ createElement("div", {
  style: {width: 80, float: "left"}
}, /* @__PURE__ */ createElement(NextBalloon, {
  trigger: leftTop,
  align: "lt",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null)), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: left,
  align: "l",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null)), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: leftBottom,
  align: "lb",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null))), /* @__PURE__ */ createElement("div", {
  style: {width: 80, marginLeft: 290}
}, /* @__PURE__ */ createElement(NextBalloon, {
  trigger: rightTop,
  align: "rt",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null)), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: right,
  align: "r",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null)), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: rightBottom,
  align: "rb",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null))), /* @__PURE__ */ createElement("div", {
  style: {marginLeft: 80, clear: "both"}
}, /* @__PURE__ */ createElement(NextBalloon, {
  trigger: bottomLeft,
  align: "bl",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null)), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: bottom,
  align: "b",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null)), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: bottomRight,
  align: "br",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null))));
function DemoComponent$1() {
  const content2 = /* @__PURE__ */ createElement(App$1, null);
  return /* @__PURE__ */ createElement(Style$1, null, content2);
}
const Style$1 = qe.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const defaultTrigger = /* @__PURE__ */ createElement(Button, {
  className: "btrigger",
  style: {margin: "5px"}
}, "default style");
const disabledTrigger = /* @__PURE__ */ createElement(Button, {
  disabled: true,
  className: "btrigger",
  style: {margin: "5px"}
}, "default style");
const primary = /* @__PURE__ */ createElement(Button, {
  className: "btrigger",
  style: {margin: "5px"}
}, "primary style");
const Demo = () => /* @__PURE__ */ createElement("div", {
  className: "container"
}, /* @__PURE__ */ createElement(NextBalloon, {
  trigger: defaultTrigger,
  closable: false
}, "default"), /* @__PURE__ */ createElement(NextBalloon, {
  type: "primary",
  trigger: primary,
  triggerType: "click"
}, "primary"), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: disabledTrigger,
  closable: false
}, "disabeled default"));
function DemoComponent$2() {
  const content2 = /* @__PURE__ */ createElement(Demo, null);
  return /* @__PURE__ */ createElement(Style$2, null, content2);
}
const Style$2 = qe.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
class App$2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  hide() {
    this.setState({
      visible: false
    });
  }
  handleVisibleChange(visible) {
    this.setState({visible});
  }
  onClose() {
    console.log("onClose doing!");
  }
  afterClose() {
    console.log("afterClose doing!");
  }
  render() {
    const visibleTrigger = /* @__PURE__ */ createElement(Button, {
      type: "primary",
      style: {margin: "5px"}
    }, "click to popup the card");
    const clickTrigger = /* @__PURE__ */ createElement(Button, {
      type: "primary",
      style: {margin: "5px"}
    }, "hover to popup the card");
    const content2 = /* @__PURE__ */ createElement("div", null, "click the button", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("a", {
      style: {right: 0},
      id: "confirmBtn",
      onClick: this.hide.bind(this)
    }, "confirm"), /* @__PURE__ */ createElement("a", {
      style: {marginLeft: "4px"},
      id: "cancelBtn",
      onClick: this.hide.bind(this)
    }, "cancel"));
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextBalloon, {
      trigger: visibleTrigger,
      triggerType: "click",
      visible: this.state.visible,
      onVisibleChange: this.handleVisibleChange.bind(this)
    }, content2), /* @__PURE__ */ createElement(NextBalloon, {
      trigger: clickTrigger,
      triggerType: "hover",
      onClose: this.onClose.bind(this),
      afterClose: this.afterClose.bind(this)
    }, content2));
  }
}
function DemoComponent$3() {
  const content2 = /* @__PURE__ */ createElement(App$2, null);
  return /* @__PURE__ */ createElement(Style$3, null, content2);
}
const Style$3 = qe.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const showSelect = /* @__PURE__ */ createElement(Button, {
  className: "btrigger"
}, "Show Select");
const showDatePicker = /* @__PURE__ */ createElement(Button, {
  className: "btrigger"
}, "Show DatePicker");
const innerButton$1 = /* @__PURE__ */ createElement(Button, {
  className: "btrigger"
}, "Show Inner Balloon");
const dateValue = hooks("2018-01-01", "YYYY-MM-DD", true);
const App$3 = () => /* @__PURE__ */ createElement("div", {
  className: "container nested"
}, /* @__PURE__ */ createElement(NextBalloon, {
  type: "primary",
  autoFocus: true,
  trigger: showSelect,
  closable: false,
  triggerType: "click"
}, /* @__PURE__ */ createElement(Select, {
  dataSource: ["apple", "banana", "orange"],
  followTrigger: true
})), "         ", /* @__PURE__ */ createElement(NextBalloon, {
  type: "primary",
  autoFocus: true,
  trigger: showDatePicker,
  closable: false,
  triggerType: "click"
}, /* @__PURE__ */ createElement(NextDatePicker, {
  defaultValue: dateValue,
  followTrigger: true
})), "         ", /* @__PURE__ */ createElement(NextBalloon, {
  type: "primary",
  autoFocus: true,
  trigger: innerButton$1,
  closable: false,
  triggerType: "click"
}, /* @__PURE__ */ createElement(NextBalloon, {
  trigger: /* @__PURE__ */ createElement(Button, {
    type: "primary"
  }, "please click"),
  followTrigger: true,
  triggerType: "click"
}, "nesting balloon content")));
function DemoComponent$4() {
  const content2 = /* @__PURE__ */ createElement(App$3, null);
  return /* @__PURE__ */ createElement(Style$4, null, content2);
}
const Style$4 = qe.div`
  .container.nested {
    margin-bottom: 50px;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
class App$4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  onClose() {
    console.log("onClose doing!");
  }
  onClick() {
    this.setState({visible: true});
  }
  render() {
    const visibleTrigger = /* @__PURE__ */ createElement(Button, {
      onClick: this.onClick.bind(this),
      type: "primary"
    }, "click to pupup the card");
    const content2 = /* @__PURE__ */ createElement("div", null, "content");
    return /* @__PURE__ */ createElement("div", {
      style: {marginBottom: "100px"}
    }, /* @__PURE__ */ createElement(NextBalloon, {
      trigger: visibleTrigger,
      triggerType: "click",
      visible: this.state.visible,
      onClose: this.onClose.bind(this)
    }, content2));
  }
}
function DemoComponent$5() {
  const content2 = /* @__PURE__ */ createElement(App$4, null);
  return /* @__PURE__ */ createElement(Style$5, null, content2);
}
const Style$5 = qe.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const Tooltip$1 = NextBalloon.Tooltip;
const top$1 = /* @__PURE__ */ createElement(Button, {
  style: {margin: "5px"},
  id: "top",
  className: "btrigger"
}, "top");
const right$1 = /* @__PURE__ */ createElement(Button, {
  style: {margin: "5px"},
  id: "right",
  className: "btrigger"
}, "right");
const bottom$1 = /* @__PURE__ */ createElement(Button, {
  style: {margin: "5px"},
  id: "bottom",
  className: "btrigger"
}, "bottom");
const left$1 = /* @__PURE__ */ createElement(Button, {
  style: {margin: "5px"},
  id: "left",
  className: "btrigger"
}, "left");
const topLeft$1 = /* @__PURE__ */ createElement(Button, {
  style: {margin: "5px"},
  id: "topLeft",
  className: "btrigger"
}, "top left");
const topRight$1 = /* @__PURE__ */ createElement(Button, {
  style: {margin: "5px"},
  id: "topRight",
  className: "btrigger"
}, "top right");
const rightTop$1 = /* @__PURE__ */ createElement(Button, {
  style: {margin: "5px"},
  id: "rightTop",
  className: "btrigger"
}, "right top");
const rightBottom$1 = /* @__PURE__ */ createElement(Button, {
  style: {margin: "5px"},
  id: "rightBottom",
  className: "btrigger"
}, "right bottom");
const bottomLeft$1 = /* @__PURE__ */ createElement(Button, {
  style: {margin: "5px"},
  id: "bottomLeft",
  className: "btrigger"
}, "bottom left");
const bottomRight$1 = /* @__PURE__ */ createElement(Button, {
  style: {margin: "5px"},
  id: "bottomRight",
  className: "btrigger"
}, "bottom right");
const leftTop$1 = /* @__PURE__ */ createElement(Button, {
  style: {margin: "5px"},
  id: "leftTop",
  className: "btrigger"
}, "left top");
const leftBottom$1 = /* @__PURE__ */ createElement(Button, {
  style: {margin: "5px"},
  id: "leftBottom",
  className: "btrigger"
}, "left bottom");
const App$5 = () => /* @__PURE__ */ createElement("div", {
  style: {paddingLeft: 220, paddingTop: 100}
}, /* @__PURE__ */ createElement("div", {
  style: {marginLeft: 75}
}, /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: topLeft$1,
  align: "tl"
}, "text text"), /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: top$1,
  align: "t"
}, "text text"), /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: topRight$1,
  align: "tr"
}, "text text")), /* @__PURE__ */ createElement("div", {
  style: {width: 80, float: "left"}
}, /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: leftTop$1,
  align: "lt"
}, "text text"), /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: left$1,
  align: "l"
}, "text text"), /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: leftBottom$1,
  align: "lb"
}, "text text")), /* @__PURE__ */ createElement("div", {
  style: {width: 80, marginLeft: 290}
}, /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: rightTop$1,
  align: "rt"
}, "text text"), /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: right$1,
  align: "r"
}, "text text"), /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: rightBottom$1,
  align: "rb"
}, "text text")), /* @__PURE__ */ createElement("div", {
  style: {marginLeft: 80, clear: "both"}
}, /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: bottomLeft$1,
  align: "bl"
}, "text text"), /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: bottom$1,
  align: "b"
}, "text text"), /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: bottomRight$1,
  align: "br"
}, "text text")));
function DemoComponent$6() {
  const content2 = /* @__PURE__ */ createElement(App$5, null);
  return /* @__PURE__ */ createElement(Style$6, null, content2);
}
const Style$6 = qe.div`
  .code-box-demo .sui-btn {
    margin-right: 1em;
    margin-bottom: 1em;
  }
`;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("p", null, "content"));
const MoveTarget = /* @__PURE__ */ createElement(Button, {
  style: {margin: "5px"}
}, "hover");
const ClickTarget = /* @__PURE__ */ createElement(Button, {
  style: {margin: "5px"}
}, "click");
const FocusTarget = /* @__PURE__ */ createElement(Button, {
  style: {margin: "5px"}
}, "focus");
const HoverInputTarget = /* @__PURE__ */ createElement(NextInput, {
  placeholder: "hover",
  style: {marginRight: "20px"}
});
const ClickInputTarget = /* @__PURE__ */ createElement(NextInput, {
  placeholder: "click",
  style: {marginRight: "20px"}
});
const FocusInputTarget = /* @__PURE__ */ createElement(NextInput, {
  placeholder: "focus"
});
const App$6 = () => /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextBalloon, {
  trigger: MoveTarget,
  triggerType: "hover"
}, content), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: ClickTarget,
  triggerType: "click"
}, content), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: FocusTarget,
  triggerType: "focus"
}, content), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: HoverInputTarget,
  triggerType: "hover"
}, content), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: ClickInputTarget,
  triggerType: "click"
}, content), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: FocusInputTarget,
  triggerType: "focus"
}, content));
function DemoComponent$7() {
  const content2 = /* @__PURE__ */ createElement(App$6, null);
  return /* @__PURE__ */ createElement(Style$7, null, content2);
}
const Style$7 = qe.div``;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
const modules = {};
modules["_accessibility"] = m0;
modules["_alignment"] = m1;
modules["_basic"] = m2;
modules["_control"] = m3;
modules["_nested"] = m4;
modules["_onCloseClick"] = m5;
modules["_tooltip"] = m6;
modules["_triggerType"] = m7;
export default modules;
