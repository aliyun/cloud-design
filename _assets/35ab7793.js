import {c as createElement, C as Component, s as NextIcon} from "./index.112f9bd1.js";
import {N as NextBadge} from "./241b5f95.js";
import "./cc57ab59.js";
import {e as exported} from "./cc260761.js";
import {H as He} from "./38b96acf.js";
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextBadge, {
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
  }, "unread messages")))));
}
const Style = He.div`
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
const ButtonGroup = exported.Group;
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
    }, "unread messages"))), /* @__PURE__ */ createElement(ButtonGroup, null, /* @__PURE__ */ createElement(exported, {
      "aria-label": "add",
      onClick: this.increase
    }, /* @__PURE__ */ createElement(NextIcon, {
      type: "add"
    })), /* @__PURE__ */ createElement(exported, {
      "aria-label": "minus",
      onClick: this.decrease
    }, /* @__PURE__ */ createElement(NextIcon, {
      type: "minus"
    })))), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextBadge, {
      dot: this.state.show
    }, /* @__PURE__ */ createElement("a", {
      href: "#",
      className: "head-example"
    })), /* @__PURE__ */ createElement(exported, {
      onClick: this.onClick
    }, "Toggle Display")));
  }
}
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(Demo, null));
}
const Style$1 = He.div`
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
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextBadge, {
    content: "hot",
    style: {backgroundColor: "#FC0E3D", color: "#FFFFFF"}
  }, /* @__PURE__ */ createElement("a", {
    href: "#",
    className: "head-example"
  })), /* @__PURE__ */ createElement(NextBadge, {
    content: /* @__PURE__ */ createElement(NextIcon, {
      type: "error"
    }),
    style: {backgroundColor: "transparent", color: "red", padding: 0}
  }, /* @__PURE__ */ createElement("a", {
    href: "#",
    className: "head-example"
  }))));
}
const Style$2 = He.div`
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
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextBadge, {
    dot: true
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "email"
  })), /* @__PURE__ */ createElement(NextBadge, {
    dot: true
  }, /* @__PURE__ */ createElement("a", {
    href: "#"
  }, "A Link"))));
}
const Style$3 = He.div`
  .next-badge {
    margin-right: 16px;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextBadge, {
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
    style: {backgroundColor: "#87d068"}
  }), /* @__PURE__ */ createElement(NextBadge, {
    dot: true
  }), /* @__PURE__ */ createElement(NextBadge, {
    content: "hot",
    style: {backgroundColor: "#FC0E3D", color: "#FFFFFF"}
  })));
}
const Style$4 = He.div`
  .next-badge {
    margin-right: 16px;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextBadge, {
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
  }))));
}
const Style$5 = He.div`
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
