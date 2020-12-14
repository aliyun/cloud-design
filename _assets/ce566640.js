import {$ as OverlayHOC, c as createElement, E as NextMenu, C as Component} from "./index.8a2425f4.js";
import "./7bef0369.js";
import {N as NextDropdown} from "./c5f48001.js";
import {B as Button} from "./db4a3e6e.js";
import {q as qe} from "./331485eb.js";
var Dropdown = OverlayHOC(NextDropdown);
const menu = /* @__PURE__ */ createElement(NextMenu, null, /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 1"), /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 2"), /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 3"), /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 4"));
function DemoComponent() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Dropdown, {
    trigger: /* @__PURE__ */ createElement("button", null, "Hello dropdown"),
    triggerType: ["click", "hover"],
    afterOpen: () => console.log("after open")
  }, menu));
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div``;
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
    }, /* @__PURE__ */ createElement(Button, {
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
  const content = /* @__PURE__ */ createElement(App, null);
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const menu$2 = /* @__PURE__ */ createElement(NextMenu, null, /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 1"), /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 2"), /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 3"), /* @__PURE__ */ createElement(NextMenu.Item, null, "Option 4"));
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement(Dropdown, {
    trigger: /* @__PURE__ */ createElement("a", null, "Click me"),
    triggerType: "click"
  }, menu$2);
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const modules = {};
modules["_basic"] = m0;
modules["_controlled"] = m1;
modules["_trigger-type"] = m2;
export default modules;
