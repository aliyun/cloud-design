import {c as createElement, C as Component} from "./index.e76f7845.js";
import {H as He} from "./a3f37a66.js";
import "./33d6cb60.js";
import {N as NextIcon} from "./39b9d0c9.js";
import "./80678f37.js";
import {N as NextSwitch} from "./06d25bc3.js";
import {e as exported} from "./36689a45.js";
function onChange(checked) {
  console.log(`switch to ${checked}`);
}
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextSwitch, {
    checkedChildren: "on",
    onChange,
    unCheckedChildren: "off",
    "aria-label": "accessible switch"
  })));
}
const Style = He.div`
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
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextSwitch, {
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
  })));
}
const Style$1 = He.div`
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
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(App, null));
}
const Style$2 = He.div`
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
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: this.toggle.bind(this)
    }, "Toggle disabled"));
  }
}
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(Test, null));
}
const Style$3 = He.div``;
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
