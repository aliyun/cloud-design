import {c as createElement, C as Component} from "./index.8f10cf2d.js";
import {H as He} from "./5269ede4.js";
import "./929a5a64.js";
import "./684de3e1.js";
import "./08521dca.js";
import "./6a2a9ffb.js";
import "./5197dbb9.js";
import {N as NextMenu} from "./2ece3a6d.js";
import "./34797fae.js";
import "./89175236.js";
import "./ea718a12.js";
import {N as NextDropdown} from "./3eea8f8f.js";
import {e as exported} from "./a728ed3e.js";
import {O as OverlayHOC} from "./c5efd5d0.js";
var Dropdown = OverlayHOC(NextDropdown);
const menu = /* @__PURE__ */ createElement(NextMenu, null, /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 1"), /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 2"), /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 3"), /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 4"));
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Dropdown, {
    trigger: /* @__PURE__ */ createElement("button", null, "Hello dropdown"),
    triggerType: ["click", "hover"],
    afterOpen: () => console.log("after open")
  }, menu)));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const menu$1 = /* @__PURE__ */ createElement(NextMenu, null, /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 1"), /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 2"), /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 3"), /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 4"));
class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false
    };
    this.toggleVisible = () => {
      this.setState({
        visible: !this.state.visible
      });
    };
    this.onVisibleChange = (visible) => {
      this.setState({
        visible
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      style: {marginBottom: "20px"}
    }, /* @__PURE__ */ createElement(exported, {
      onClick: this.toggleVisible,
      ref: "button"
    }, "Toggle Overlay")), /* @__PURE__ */ createElement(Dropdown, {
      trigger: /* @__PURE__ */ createElement("span", null, "Hello dropdown"),
      triggerType: "click",
      visible: this.state.visible,
      onVisibleChange: this.onVisibleChange,
      safeNode: () => this.refs.button
    }, menu$1));
  }
}
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(App, null));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const menu$2 = /* @__PURE__ */ createElement(NextMenu, null, /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 1"), /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 2"), /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 3"), /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 4"));
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(Dropdown, {
    trigger: /* @__PURE__ */ createElement("a", null, "Click me"),
    triggerType: "click"
  }, menu$2));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const modules = {};
modules["_basic"] = m0;
modules["_controlled"] = m1;
modules["_trigger-type"] = m2;
export default modules;
