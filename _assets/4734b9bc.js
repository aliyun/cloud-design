import {c as createElement, y as NextOverlay, C as Component} from "./index.7e05a4b9.js";
import {H as He} from "./af117473.js";
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
    id: "container1",
    className: "overlay-container"
  }, "normal example", /* @__PURE__ */ createElement(NextOverlay, {
    target: "container1",
    visible: true,
    align: "tr tr"
  }, /* @__PURE__ */ createElement("span", null, "123")), /* @__PURE__ */ createElement(NextOverlay, {
    target: "container1",
    visible: true,
    align: "cc cr"
  }, /* @__PURE__ */ createElement("span", null, "123")), /* @__PURE__ */ createElement(NextOverlay, {
    target: "container1",
    visible: true,
    align: "bc bc"
  }, /* @__PURE__ */ createElement("span", null, "123"))), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("div", {
    id: "container2",
    className: "overlay-container",
    dir: "rtl"
  }, "dir=rtl example", /* @__PURE__ */ createElement(NextOverlay, {
    target: "container2",
    rtl: true,
    visible: true,
    align: "tr tr"
  }, /* @__PURE__ */ createElement("span", null, "123")), /* @__PURE__ */ createElement(NextOverlay, {
    target: "container2",
    rtl: true,
    visible: true,
    align: "cc cr"
  }, /* @__PURE__ */ createElement("span", null, "123")), /* @__PURE__ */ createElement(NextOverlay, {
    target: "container2",
    rtl: true,
    visible: true,
    align: "bc bc"
  }, /* @__PURE__ */ createElement("span", null, "123")))));
}
const Style = He.div`
  .overlay-container {
    position: relative;
    height: 150px;
    margin: 50px;
    border: 1px solid #999;
    overflow: auto;
    text-align: center;
    color: red;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
class Demo extends Component {
  constructor(props) {
    super(props);
    this.onClick = () => {
      this.setState({
        visible: true
      });
    };
    this.onClose = () => {
      this.setState({
        visible: false
      });
    };
    this.state = {
      visible: false
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("button", {
      onClick: this.onClick,
      ref: (ref) => {
        this.btn = ref;
      }
    }, "Open"), /* @__PURE__ */ createElement(NextOverlay, {
      visible: this.state.visible,
      safeNode: () => this.btn,
      align: "cc cc",
      hasMask: true,
      disableScroll: true,
      onRequestClose: this.onClose
    }, /* @__PURE__ */ createElement("span", {
      className: "overlay-demo"
    }, "Hello World From Overlay!")));
  }
}
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(Demo, null));
}
const Style$1 = He.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const {Popup} = NextOverlay;
class Demo$1 extends Component {
  constructor(props) {
    super(props);
    this.onVisibleChange = (visible) => {
      this.setState({
        visible
      });
    };
    this.onGroupVisibleChange = (groupVisible) => {
      this.setState({
        groupVisible
      });
    };
    this.state = {
      visible: false
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Popup, {
      trigger: /* @__PURE__ */ createElement("button", null, "Open"),
      triggerType: "click",
      visible: this.state.visible,
      onVisibleChange: this.onVisibleChange
    }, /* @__PURE__ */ createElement("span", {
      className: "overlay-demo"
    }, "Hello World From Popup!"))), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Popup, {
      trigger: /* @__PURE__ */ createElement("button", {
        style: {"margin-right": "50px"},
        ref: (ref) => {
          this.btn1 = ref;
        }
      }, "Paired Popup 1"),
      triggerType: "click",
      visible: this.state.groupVisible,
      safeNode: [() => this.btn2, () => this.overlay2],
      onVisibleChange: this.onGroupVisibleChange
    }, /* @__PURE__ */ createElement("span", {
      className: "overlay-demo",
      ref: (ref) => {
        this.overlay1 = ref;
      }
    }, "Hello World From Popup!")), /* @__PURE__ */ createElement(Popup, {
      trigger: /* @__PURE__ */ createElement("button", {
        ref: (ref) => {
          this.btn2 = ref;
        }
      }, "Paired Popup 2"),
      triggerType: "click",
      visible: this.state.groupVisible,
      safeNode: [() => this.btn1, () => this.overlay1],
      onVisibleChange: this.onGroupVisibleChange
    }, /* @__PURE__ */ createElement("span", {
      className: "overlay-demo",
      ref: (ref) => {
        this.overlay2 = ref;
      }
    }, "Hello World From Popup!"))));
  }
}
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(Demo$1, null));
}
const Style$2 = He.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const {Popup: Popup$1} = NextOverlay;
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(Popup$1, {
    trigger: /* @__PURE__ */ createElement("button", null, "Open first overlay"),
    triggerType: "click"
  }, /* @__PURE__ */ createElement("div", {
    className: "overlay-demo"
  }, /* @__PURE__ */ createElement(Popup$1, {
    trigger: /* @__PURE__ */ createElement("button", null, "Open second overlay"),
    triggerType: "click",
    container: (trigger) => trigger.parentNode
  }, /* @__PURE__ */ createElement("div", {
    className: "overlay-demo"
  }, /* @__PURE__ */ createElement("p", null, "Hello World From Second Overlay!"))), /* @__PURE__ */ createElement("p", null, "Hello World From First Overlay!"))));
}
const Style$3 = He.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
class Demo$2 extends Component {
  constructor(props) {
    super(props);
    this.onClick = () => {
      this.setState({
        visible: !this.state.visible
      });
    };
    this.onClose = () => {
      this.setState({
        visible: false
      });
    };
    this.state = {
      visible: false
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("button", {
      onClick: this.onClick,
      ref: (ref) => {
        this.btn = ref;
      }
    }, "Toggle visible"), /* @__PURE__ */ createElement(NextOverlay, {
      visible: this.state.visible,
      target: () => this.btn,
      safeNode: () => this.btn,
      onRequestClose: this.onClose
    }, /* @__PURE__ */ createElement("span", {
      className: "overlay-demo"
    }, "Hello World From Overlay!")));
  }
}
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement(Demo$2, null));
}
const Style$4 = He.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const {Popup: Popup$2} = NextOverlay;
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Popup$2, {
    trigger: /* @__PURE__ */ createElement("button", null, "Open"),
    triggerType: "click"
  }, /* @__PURE__ */ createElement("span", {
    className: "overlay-demo"
  }, "Hello World From Popup!")), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Popup$2, {
    trigger: /* @__PURE__ */ createElement("button", null, "Use Down Arrow to open"),
    triggerType: "click",
    triggerClickKeycode: 40
  }, /* @__PURE__ */ createElement("span", {
    className: "overlay-demo"
  }, "Hello World From Popup!"))));
}
const Style$5 = He.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const {Popup: Popup$3} = NextOverlay;
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement("div", {
    className: "scroll-container"
  }, /* @__PURE__ */ createElement(Popup$3, {
    trigger: /* @__PURE__ */ createElement("button", null, "Open"),
    triggerType: "click",
    container: (trigger) => trigger.parentNode
  }, /* @__PURE__ */ createElement("div", {
    className: "overlay-demo"
  }, "Hello World From Popup!")), /* @__PURE__ */ createElement("div", {
    style: {height: "300px"}
  })));
}
const Style$6 = He.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }

  .scroll-container {
    position: relative;
    height: 150px;
    padding: 10px;
    border: 1px solid #999999;
    overflow: auto;
  }
`;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const modules = {};
modules["_align"] = m0;
modules["_backdrop"] = m1;
modules["_controlled"] = m2;
modules["_nested"] = m3;
modules["_overlay"] = m4;
modules["_popup"] = m5;
modules["_scroll"] = m6;
export default modules;
