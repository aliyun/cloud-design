import {c as createElement} from "./index.8a2425f4.js";
import {N as NextDivider} from "./96c40b66.js";
import {q as qe} from "./331485eb.js";
function DemoComponent() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /* @__PURE__ */ createElement(NextDivider, null), /* @__PURE__ */ createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /* @__PURE__ */ createElement(NextDivider, {
    dashed: true
  }), /* @__PURE__ */ createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /* @__PURE__ */ createElement("a", {
    href: "#"
  }, "Add"), /* @__PURE__ */ createElement(NextDivider, {
    direction: "ver"
  }), /* @__PURE__ */ createElement("a", {
    href: "#"
  }, "Edit"), /* @__PURE__ */ createElement(NextDivider, {
    direction: "ver"
  }), /* @__PURE__ */ createElement("a", {
    href: "#"
  }, "Delete"));
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextDivider, null, "Text"), /* @__PURE__ */ createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /* @__PURE__ */ createElement(NextDivider, {
    orientation: "left"
  }, "Left Text"), /* @__PURE__ */ createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /* @__PURE__ */ createElement(NextDivider, {
    orientation: "right"
  }, "Right Text"), /* @__PURE__ */ createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const modules = {};
modules["_basic"] = m0;
modules["_orientation"] = m1;
export default modules;
