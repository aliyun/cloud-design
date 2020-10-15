import {c as createElement, C as Component} from "./index.9ac755a3.js";
import {H as He} from "./4ad0c37a.js";
import "./1efa18cd.js";
import "./509b26c1.js";
import "./cc041426.js";
import "./9cc958bb.js";
import "./ca58aca8.js";
import {N as NextMenu} from "./61e03baa.js";
import "./d88829e1.js";
import "./b85a5b85.js";
import "./2a58941b.js";
import {N as NextDropdown} from "./427be597.js";
import {e as exported} from "./f50d056e.js";
import {O as OverlayHOC} from "./dc68de8f.js";
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
