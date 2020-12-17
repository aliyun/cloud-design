import {c as createElement} from "./index.201274f6.js";
import {N as NextRating} from "./f183f829.js";
import {q as qe} from "./1be0f98b.js";
const starMap = {
  1: "Bad",
  2: "OK",
  3: "Good",
  4: "Great",
  5: "Perfect"
};
function DemoComponent() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextRating, {
    id: "rating-a11y-1",
    defaultValue: 3,
    readAs: (val) => starMap[val],
    onChange: (val) => console.log("change:", val),
    onHoverChange: (val) => console.log("hover:", val)
  }));
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextRating, {
    defaultValue: 3.2,
    onChange: (val) => console.log("change:", val),
    onHoverChange: (val) => console.log("hover:", val)
  }));
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement(NextRating, {
    defaultValue: 3.2,
    disabled: true
  });
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div``;
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
  const content = /* @__PURE__ */ createElement(NextRating, {
    defaultValue: 2,
    showGrade: true,
    readAs: (val) => starMap$1[val]
  });
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = qe.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement(NextRating, {
    defaultValue: 3.2,
    allowHalf: true
  });
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = qe.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
function DemoComponent$5() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextRating, {
    defaultValue: 3.2,
    size: "small"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextRating, {
    defaultValue: 3.2
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextRating, {
    defaultValue: 3.2,
    size: "large"
  }));
  return /* @__PURE__ */ createElement(Style$5, null, content);
}
const Style$5 = qe.div``;
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
