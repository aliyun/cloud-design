import {c as createElement, C as Component, s as NextIcon} from "./index.0806c9c7.js";
import "./31d59ec1.js";
import {N as NextSwitch} from "./47556422.js";
import {B as Button} from "./0caf7caf.js";
import {q as qe} from "./471d6f67.js";
function onChange(checked) {
  console.log(`switch to ${checked}`);
}
function DemoComponent() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextSwitch, {
    checkedChildren: "on",
    onChange,
    unCheckedChildren: "off",
    "aria-label": "accessible switch"
  }));
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div`
  .large-width {
    width: 100px;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function onChange$1(checked) {
  console.log(`switch to ${checked}`);
}
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextSwitch, {
    checkedChildren: "on",
    onChange: onChange$1,
    unCheckedChildren: "off"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextSwitch, {
    defaultChecked: false,
    onChange: onChange$1,
    size: "small"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextSwitch, {
    className: "large-width",
    checkedChildren: "on",
    onChange: onChange$1,
    unCheckedChildren: "off please"
  }));
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div`
  .large-width {
    width: 100px;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(checked) {
    this.setState({checked});
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      className: "line"
    }, "value of switch: ", this.state.checked ? "true" : "false"), /* @__PURE__ */ createElement("div", {
      className: "line"
    }, /* @__PURE__ */ createElement(NextSwitch, {
      checked: this.state.checked,
      onChange: this.onChange
    }), /* @__PURE__ */ createElement(NextSwitch, {
      checked: this.state.checked,
      onChange: this.onChange,
      disabled: true
    })));
  }
}
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement(App, null);
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div`
  .line {
    margin-bottom: 10px;
  }
  .next-switch {
    margin-right: 20px;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    };
  }
  toggle() {
    this.setState(Object.assign({}, this.state, {
      disabled: !this.state.disabled
    }));
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextSwitch, {
      checkedChildren: /* @__PURE__ */ createElement(NextIcon, {
        type: "select",
        size: "small"
      }),
      unCheckedChildren: /* @__PURE__ */ createElement(NextIcon, {
        type: "close",
        size: "small"
      }),
      disabled: this.state.disabled
    }), /* @__PURE__ */ createElement(NextSwitch, {
      checkedChildren: "on",
      unCheckedChildren: "off",
      disabled: this.state.disabled
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Button, {
      type: "primary",
      onClick: this.toggle.bind(this)
    }, "Toggle disabled"));
  }
}
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement(Test, null);
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = qe.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const modules = {};
modules["_accessibility"] = m0;
modules["_basic"] = m1;
modules["_control"] = m2;
modules["_disabled"] = m3;
export default modules;
