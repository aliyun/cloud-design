import {c as createElement, C as Component, N as NextIcon} from "./index.fc1c4ecb.js";
import {N as NextBadge} from "./d7815c49.js";
import "./b16eba57.js";
import {B as Button} from "./7ead3c58.js";
import {q as qe} from "./7af9cfe0.js";
function DemoComponent() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextBadge, {
    count: 5
  }, /* @__PURE__ */ createElement("a", {
    href: "#",
    className: "basic-example"
  })), /* @__PURE__ */ createElement(NextBadge, {
    count: 5
  }, /* @__PURE__ */ createElement("a", {
    href: "#",
    className: "basic-example"
  }, /* @__PURE__ */ createElement("span", {
    className: "next-sr-only"
  }, "unread messages"))));
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div`
  .basic-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: #eee;
  }

  .next-badge {
    margin-right: 16px;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const ButtonGroup = Button.Group;
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      show: true
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  increase() {
    const count = this.state.count + 1;
    this.setState({count});
  }
  decrease() {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({count});
  }
  onClick() {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      className: "change-count"
    }, /* @__PURE__ */ createElement(NextBadge, {
      count: this.state.count
    }, /* @__PURE__ */ createElement("a", {
      href: "#",
      className: "head-example"
    }, /* @__PURE__ */ createElement("span", {
      className: "next-sr-only"
    }, "unread messages"))), /* @__PURE__ */ createElement(NextBadge, {
      count: this.state.count,
      showZero: true
    }, /* @__PURE__ */ createElement("a", {
      href: "#",
      className: "head-example"
    }, /* @__PURE__ */ createElement("span", {
      className: "next-sr-only"
    }, "unread messages"))), /* @__PURE__ */ createElement(ButtonGroup, null, /* @__PURE__ */ createElement(Button, {
      "aria-label": "add",
      onClick: this.increase
    }, /* @__PURE__ */ createElement(NextIcon, {
      type: "add"
    })), /* @__PURE__ */ createElement(Button, {
      "aria-label": "minus",
      onClick: this.decrease
    }, /* @__PURE__ */ createElement(NextIcon, {
      type: "minus"
    })))), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextBadge, {
      dot: this.state.show
    }, /* @__PURE__ */ createElement("a", {
      href: "#",
      className: "head-example"
    })), /* @__PURE__ */ createElement(Button, {
      onClick: this.onClick
    }, "Toggle Display")));
  }
}
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement(Demo, null);
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div`
  .next-badge {
    margin-right: 16px;
  }
  .change-count {
    margin-bottom: 16px;
  }
  .head-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: #eee;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextBadge, {
    content: "hot",
    style: {backgroundColor: "#C82727", color: "#FFFFFF"}
  }, /* @__PURE__ */ createElement("a", {
    href: "#",
    className: "head-example"
  })), /* @__PURE__ */ createElement(NextBadge, {
    content: /* @__PURE__ */ createElement(NextIcon, {
      type: "error"
    }),
    style: {backgroundColor: "transparent", color: "#C82727", padding: 0}
  }, /* @__PURE__ */ createElement("a", {
    href: "#",
    className: "head-example"
  })));
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div`
  .next-badge {
    margin-right: 24px;
  }
  .head-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background-color: #eee;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextBadge, {
    dot: true
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "email"
  })), /* @__PURE__ */ createElement(NextBadge, {
    dot: true
  }, /* @__PURE__ */ createElement("a", {
    href: "#"
  }, "A Link")));
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = qe.div`
  .next-badge {
    margin-right: 16px;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextBadge, {
    count: 25
  }), /* @__PURE__ */ createElement(NextBadge, {
    count: 4,
    style: {
      backgroundColor: "#fff",
      color: "#999",
      border: "1px solid #d9d9d9"
    }
  }), /* @__PURE__ */ createElement(NextBadge, {
    count: 109,
    style: {backgroundColor: "#29A64E"}
  }), /* @__PURE__ */ createElement(NextBadge, {
    dot: true
  }), /* @__PURE__ */ createElement(NextBadge, {
    content: "hot",
    style: {backgroundColor: "#C82727", color: "#FFFFFF"}
  }));
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = qe.div`
  .next-badge {
    margin-right: 16px;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
function DemoComponent$5() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextBadge, {
    count: 100
  }, /* @__PURE__ */ createElement("a", {
    href: "#",
    className: "head-example"
  })), /* @__PURE__ */ createElement(NextBadge, {
    count: 200,
    overflowCount: 199
  }, /* @__PURE__ */ createElement("a", {
    href: "#",
    className: "head-example"
  })));
  return /* @__PURE__ */ createElement(Style$5, null, content);
}
const Style$5 = qe.div`
  .next-badge {
    margin-right: 16px;
  }
  .head-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: #eee;
  }
`;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const modules = {};
modules["_basic"] = m0;
modules["_change"] = m1;
modules["_content"] = m2;
modules["_dot"] = m3;
modules["_no-wrapper"] = m4;
modules["_plus"] = m5;
export default modules;
