import {c as createElement} from "./index.26359282.js";
import {N as NextRating} from "./7dc55852.js";
import {H as He} from "./679ba706.js";
const starMap = {
  1: "Bad",
  2: "OK",
  3: "Good",
  4: "Great",
  5: "Perfect"
};
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextRating, {
    id: "rating-a11y-1",
    defaultValue: 3,
    readAs: (val) => starMap[val],
    onChange: (val) => console.log("change:", val),
    onHoverChange: (val) => console.log("hover:", val)
  })));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextRating, {
    defaultValue: 3.2,
    onChange: (val) => console.log("change:", val),
    onHoverChange: (val) => console.log("hover:", val)
  })));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(NextRating, {
    defaultValue: 3.2,
    disabled: true
  }));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const starMap$1 = {
  1: "Bad",
  2: "OK",
  3: "Good",
  4: "Great",
  5: "Perfect"
};
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(NextRating, {
    defaultValue: 2,
    showGrade: true,
    readAs: (val) => starMap$1[val]
  }));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement(NextRating, {
    defaultValue: 3.2,
    allowHalf: true
  }));
}
const Style$4 = He.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextRating, {
    defaultValue: 3.2,
    size: "small"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextRating, {
    defaultValue: 3.2
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextRating, {
    defaultValue: 3.2,
    size: "large"
  })));
}
const Style$5 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const modules = {};
modules["_accessibility"] = m0;
modules["_basic"] = m1;
modules["_disabled"] = m2;
modules["_grade"] = m3;
modules["_half"] = m4;
modules["_size"] = m5;
export default modules;
