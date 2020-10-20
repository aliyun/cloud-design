import {c as createElement, C as Component} from "./index.2dd166ed.js";
import {H as He} from "./2c811738.js";
import "./399cb00c.js";
import "./17ebea95.js";
import "./857177ad.js";
import "./f9e612ff.js";
import "./92303b48.js";
import {N as NextMenu} from "./dfa9fef1.js";
import "./30c34cb9.js";
import "./bb5f28c2.js";
import "./d11bc707.js";
import {N as NextDropdown} from "./2f59517c.js";
import {e as exported} from "./c39feb7c.js";
import {O as OverlayHOC} from "./68ce33c3.js";
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
