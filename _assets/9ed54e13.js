import {c as createElement, C as Component, y as Radio} from "./index.086d3ff2.js";
import "./e9aa4cc7.js";
import {N as NextNumberPicker} from "./5d1e09b9.js";
import {B as Button} from "./9219f706.js";
import {H as He} from "./3cf202b9.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      tip: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(value, e) {
    let num = "";
    if (value >= 0) {
      num = value;
    } else {
      num = `negative ${value * -1}`;
    }
    this.setState({
      value,
      tip: `${num}`
    });
  }
  render() {
    const {value, tip} = this.state;
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("span", {
      id: "a11y-number-picker",
      "aria-live": "assertive",
      "aria-label": tip
    }), /* @__PURE__ */ createElement(NextNumberPicker, {
      type: "inline",
      value,
      onChange: this.onChange,
      upBtnProps: {"aria-label": "\b\bincreasing button"},
      downBtnProps: {"aria-label": "decreasing button"},
      "aria-labelledby": "a11y-number-picker"
    }));
  }
}
function DemoComponent() {
  const content = /* @__PURE__ */ createElement(App, null);
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function onChange(value, e) {
  console.log(value, e.type, e.triggerType);
}
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextNumberPicker, {
    onChange
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextNumberPicker, {
    defaultValue: 0,
    type: "inline",
    onChange
  }));
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextNumberPicker, {
    defaultValue: 0,
    disabled: true
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextNumberPicker, {
    defaultValue: 0,
    type: "inline",
    disabled: true
  }));
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
class App$1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      value: 0
    };
  }
  toogle() {
    this.setState({
      editable: !this.state.editable
    });
  }
  onChange(value) {
    console.log("changed", value);
    this.setState({
      value
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextNumberPicker, {
      onChange: this.onChange.bind(this),
      value: this.state.value,
      editable: this.state.editable
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Button, {
      onClick: this.toogle.bind(this)
    }, "Toggle to ", !this.state.editable ? "editable" : "uneditable"));
  }
}
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement(App$1, null);
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const intlize = (val) => Intl.NumberFormat("en-US").format(val);
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextNumberPicker, {
    format: intlize,
    defaultValue: 5e3
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextNumberPicker, {
    label: "p:",
    format: (val) => `${val}%`,
    defaultValue: 85
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextNumberPicker, {
    innerAfter: "%"
  }));
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = He.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
function onChange$1(value, e) {
  console.log("onChange", value, e);
}
function onCorrect(obj) {
  console.log("onCorrect", obj);
}
function DemoComponent$5() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextNumberPicker, {
    type: "inline",
    step: 3,
    min: 6,
    max: 30,
    defaultValue: 6,
    onChange: onChange$1,
    onCorrect
  }));
  return /* @__PURE__ */ createElement(Style$5, null, content);
}
const Style$5 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
class Demo extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      device: "desktop"
    };
    this.handleDeviceChange = (device) => {
      this.setState({
        device
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Radio.Group, {
      shape: "button",
      value: this.state.device,
      onChange: this.handleDeviceChange
    }, /* @__PURE__ */ createElement(Radio, {
      value: "desktop"
    }, "desktop"), /* @__PURE__ */ createElement(Radio, {
      value: "phone"
    }, "phone")), /* @__PURE__ */ createElement("hr", null), /* @__PURE__ */ createElement(NextNumberPicker, {
      device: this.state.device
    }));
  }
}
function DemoComponent$6() {
  const content = /* @__PURE__ */ createElement(Demo, null);
  return /* @__PURE__ */ createElement(Style$6, null, content);
}
const Style$6 = He.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
function onChange$2(value) {
  console.log("changed", value);
}
function onCorrect$1(obj) {
  console.log(obj);
}
function DemoComponent$7() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextNumberPicker, {
    defaultValue: -3.99,
    onChange: onChange$2,
    onCorrect: onCorrect$1,
    step: 2,
    precision: 2
  }));
  return /* @__PURE__ */ createElement(Style$7, null, content);
}
const Style$7 = He.div``;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
function DemoComponent$8() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextNumberPicker, {
    defaultValue: 0,
    size: "small"
  }), /* @__PURE__ */ createElement(NextNumberPicker, {
    defaultValue: 0
  }), /* @__PURE__ */ createElement(NextNumberPicker, {
    defaultValue: 0,
    size: "large"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextNumberPicker, {
    defaultValue: 0,
    size: "small",
    type: "inline"
  }), /* @__PURE__ */ createElement(NextNumberPicker, {
    defaultValue: 0,
    type: "inline"
  }), /* @__PURE__ */ createElement(NextNumberPicker, {
    defaultValue: 0,
    size: "large",
    type: "inline"
  }));
  return /* @__PURE__ */ createElement(Style$8, null, content);
}
const Style$8 = He.div`
  .next-number-picker {
    margin-right: 10px;
  }
`;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
function onChange$3(value) {
  console.log("changed", value);
}
function onCorrect$2(obj) {
  console.log(obj);
}
function DemoComponent$9() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextNumberPicker, {
    defaultValue: 0,
    onChange: onChange$3,
    onCorrect: onCorrect$2,
    step: 0.01
  }));
  return /* @__PURE__ */ createElement(Style$9, null, content);
}
const Style$9 = He.div``;
var m9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$9
});
function DemoComponent$a() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextNumberPicker, {
    alwaysShowTrigger: true
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextNumberPicker, {
    hasTrigger: false
  }));
  return /* @__PURE__ */ createElement(Style$a, null, content);
}
const Style$a = He.div``;
var m10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$a
});
const modules = {};
modules["_accessibility"] = m0;
modules["_basic"] = m1;
modules["_disabled"] = m2;
modules["_editable"] = m3;
modules["_format"] = m4;
modules["_limit"] = m5;
modules["_mobile"] = m6;
modules["_precision"] = m7;
modules["_size"] = m8;
modules["_step"] = m9;
modules["_trigger"] = m10;
export default modules;
