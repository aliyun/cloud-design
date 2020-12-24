import {c as createElement, s as NextIcon} from "./index.0806c9c7.js";
import {N as NextBadge} from "./105a692b.js";
import {N as NextAvatar} from "./77c484db.js";
import {q as qe} from "./471d6f67.js";
function DemoComponent() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextAvatar, {
    size: 64,
    icon: "account"
  }), /* @__PURE__ */ createElement(NextAvatar, {
    size: "large",
    icon: "account"
  }), /* @__PURE__ */ createElement(NextAvatar, {
    icon: "account"
  }), /* @__PURE__ */ createElement(NextAvatar, {
    size: "small",
    icon: "account"
  })), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextAvatar, {
    shape: "square",
    size: 64,
    icon: "account"
  }), /* @__PURE__ */ createElement(NextAvatar, {
    shape: "square",
    size: "large",
    icon: "account"
  }), /* @__PURE__ */ createElement(NextAvatar, {
    shape: "square",
    icon: "account"
  }), /* @__PURE__ */ createElement(NextAvatar, {
    shape: "square",
    size: "small",
    icon: "account"
  })));
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div`
  .next-avatar {
    margin: 20px 20px 0 0;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextAvatar, {
    icon: "account"
  }), /* @__PURE__ */ createElement(NextAvatar, {
    icon: /* @__PURE__ */ createElement(NextIcon, {
      type: "account"
    })
  }), /* @__PURE__ */ createElement(NextAvatar, null, "U"), /* @__PURE__ */ createElement(NextAvatar, {
    src: "https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png"
  }), /* @__PURE__ */ createElement(NextAvatar, {
    style: {color: "#f56a00", backgroundColor: "#fde3cf"}
  }, "U"), /* @__PURE__ */ createElement(NextAvatar, {
    style: {backgroundColor: "#87d068"},
    icon: "account"
  }));
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div`
  .next-avatar {
    margin-right: 12px;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("span", {
    style: {marginRight: 24}
  }, /* @__PURE__ */ createElement(NextBadge, {
    count: 1
  }, /* @__PURE__ */ createElement(NextAvatar, {
    shape: "square",
    icon: "account"
  }))), /* @__PURE__ */ createElement("span", null, /* @__PURE__ */ createElement(NextBadge, {
    dot: true
  }, /* @__PURE__ */ createElement(NextAvatar, {
    shape: "square",
    icon: "account"
  }))));
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const modules = {};
modules["_basic"] = m0;
modules["_type"] = m1;
modules["_with-badge"] = m2;
export default modules;
