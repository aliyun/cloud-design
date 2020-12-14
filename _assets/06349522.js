import {c as createElement, s as NextIcon, C as Component} from "./index.8a2425f4.js";
import "./7bef0369.js";
import {B as Button} from "./db4a3e6e.js";
import {q as qe} from "./331485eb.js";
function DemoComponent() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Button.Group, null, /* @__PURE__ */ createElement(Button, {
    type: "primary",
    "aria-label": "prompt button"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "prompt"
  })), /* @__PURE__ */ createElement(Button, {
    type: "primary",
    "aria-label": "clock button"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "clock"
  })), /* @__PURE__ */ createElement(Button, {
    type: "primary",
    "aria-label": "set button"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "set"
  }))));
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Button, {
    type: "normal"
  }, "Normal"), "   ", /* @__PURE__ */ createElement(Button, {
    type: "primary"
  }, "Prirmary"), "   ", /* @__PURE__ */ createElement(Button, {
    type: "secondary"
  }, "Secondary"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Button, {
    type: "normal",
    text: true
  }, "Normal"), " ", "  ", /* @__PURE__ */ createElement(Button, {
    type: "primary",
    text: true
  }, "Primary"), " ", "  ", /* @__PURE__ */ createElement(Button, {
    type: "secondary",
    text: true
  }, "Secondary"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Button, {
    type: "normal",
    warning: true
  }, "Normal"), " ", "  ", /* @__PURE__ */ createElement(Button, {
    type: "primary",
    warning: true
  }, "Primary"), " ", "  ");
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const props = {
  component: "a",
  href: "http://www.alibaba.com",
  target: "_blank"
};
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Button, {
    ...props,
    type: "primary"
  }, "alibaba.com"), " ", "  ", /* @__PURE__ */ createElement(Button, {
    ...props,
    type: "secondary"
  }, "alibaba.com"), " ", "  ", /* @__PURE__ */ createElement(Button, {
    ...props,
    type: "normal"
  }, "alibaba.com"));
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
class Demo extends Component {
  constructor(props2, context) {
    super(props2, context);
    this.setLoading = () => {
      this.setState({loading: true});
    };
    this.state = {
      loading: false
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Button, {
      type: "secondary",
      iconSize: "xs",
      loading: true,
      icons: {
        loading: /* @__PURE__ */ createElement(NextIcon, {
          type: "loading",
          style: {color: "#1b58f4"}
        })
      }
    }, "Custom loading icon"), "  ", /* @__PURE__ */ createElement(Button, {
      type: "primary",
      loading: this.state.loading,
      onClick: this.setLoading,
      icons: {
        loading: /* @__PURE__ */ createElement(NextIcon, {
          type: "loading",
          style: {color: "#1b58f4"}
        })
      }
    }, "Click to loading and show loading icon"));
  }
}
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement(Demo, null);
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = qe.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Button, {
    type: "primary"
  }, "Primary"), "  ", /* @__PURE__ */ createElement(Button, {
    component: "a",
    type: "primary",
    disabled: true
  }, "Primary"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Button, {
    type: "secondary"
  }, "Secondary"), "  ", /* @__PURE__ */ createElement(Button, {
    type: "secondary",
    disabled: true
  }, "Secondary"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Button, {
    type: "normal"
  }, "Normal"), "  ", /* @__PURE__ */ createElement(Button, {
    type: "normal",
    disabled: true
  }, "Normal"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
    className: "ghost-light-background"
  }, /* @__PURE__ */ createElement(Button, {
    ghost: "light",
    disabled: true
  }, "Ghost Light")), /* @__PURE__ */ createElement("div", {
    className: "ghost-dark-background"
  }, /* @__PURE__ */ createElement(Button, {
    ghost: "dark",
    disabled: true
  }, "Ghost Dark"))));
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = qe.div`
  .ghost-light-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #ebecf0;
    margin-bottom: 20px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .ghost-dark-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #333;
    margin-bottom: 20px;
    padding-left: 10px;
    box-sizing: border-box;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
function DemoComponent$5() {
  const content = /* @__PURE__ */ createElement("div", {
    style: {clear: "both"}
  }, /* @__PURE__ */ createElement("div", {
    className: "ghost-light-background"
  }, /* @__PURE__ */ createElement(Button, {
    ghost: "light"
  }, "Ghost light")), /* @__PURE__ */ createElement("div", {
    className: "ghost-dark-background"
  }, /* @__PURE__ */ createElement(Button, {
    ghost: "dark"
  }, "Ghost dark")));
  return /* @__PURE__ */ createElement(Style$5, null, content);
}
const Style$5 = qe.div`
  .ghost-light-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #ebecf0;
    margin-bottom: 20px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .ghost-dark-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #333;
    margin-bottom: 20px;
    padding-left: 10px;
    box-sizing: border-box;
  }
`;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
function DemoComponent$6() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Button.Group, null, /* @__PURE__ */ createElement(Button, {
    type: "primary"
  }, "OK"), /* @__PURE__ */ createElement(Button, {
    type: "secondary"
  }, "Cancel")), "  ", /* @__PURE__ */ createElement(Button.Group, null, /* @__PURE__ */ createElement(Button, {
    disabled: true
  }, "Left"), /* @__PURE__ */ createElement(Button, {
    disabled: true
  }, "Middle"), /* @__PURE__ */ createElement(Button, {
    disabled: true
  }, "Right")), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Button.Group, null, /* @__PURE__ */ createElement(Button, {
    type: "primary"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "arrow-left"
  }), " Backward"), /* @__PURE__ */ createElement(Button, {
    type: "primary"
  }, "Forward ", /* @__PURE__ */ createElement(NextIcon, {
    type: "arrow-right"
  }))), "  ", /* @__PURE__ */ createElement(Button.Group, null, /* @__PURE__ */ createElement(Button, {
    type: "primary"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "prompt"
  })), /* @__PURE__ */ createElement(Button, {
    type: "primary"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "clock"
  })), /* @__PURE__ */ createElement(Button, {
    type: "primary"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "set"
  }))));
  return /* @__PURE__ */ createElement(Style$6, null, content);
}
const Style$6 = qe.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
function DemoComponent$7() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Button, null, /* @__PURE__ */ createElement(NextIcon, {
    type: "atm"
  }), " ATM"), " ", "  ", /* @__PURE__ */ createElement(Button, {
    text: true
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "atm"
  }), " ATM"), " ", "  ", /* @__PURE__ */ createElement(Button, {
    warning: true
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "atm"
  }), " ATM"), " ", "  ", /* @__PURE__ */ createElement(Button, {
    iconSize: "xxs"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "arrow-left"
  }), " ARROW"), " ", "  ");
  return /* @__PURE__ */ createElement(Style$7, null, content);
}
const Style$7 = qe.div``;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
class Demo$1 extends Component {
  constructor(props2, context) {
    super(props2, context);
    this.setLoading = () => {
      this.setState({loading: true});
    };
    this.state = {
      loading: false
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Button, {
      type: "secondary",
      loading: true
    }, "Loading"), "  ", /* @__PURE__ */ createElement(Button, {
      type: "primary",
      loading: this.state.loading,
      onClick: this.setLoading
    }, "Click to loading"));
  }
}
function DemoComponent$8() {
  const content = /* @__PURE__ */ createElement(Demo$1, null);
  return /* @__PURE__ */ createElement(Style$8, null, content);
}
const Style$8 = qe.div``;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
function DemoComponent$9() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Button, {
    type: "primary",
    size: "large"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "atm"
  }), "Large"), "  ", /* @__PURE__ */ createElement(Button, {
    type: "primary"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "atm"
  }), "Medium"), "  ", /* @__PURE__ */ createElement(Button, {
    type: "primary",
    size: "small"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "atm"
  }), "Small"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Button.Group, {
    size: "large"
  }, /* @__PURE__ */ createElement(Button, null, "Button"), /* @__PURE__ */ createElement(Button, null, "Button"), /* @__PURE__ */ createElement(Button, null, "Button")));
  return /* @__PURE__ */ createElement(Style$9, null, content);
}
const Style$9 = qe.div``;
var m9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$9
});
const modules = {};
modules["_accessibility"] = m0;
modules["_basic"] = m1;
modules["_component"] = m2;
modules["_custom-icons"] = m3;
modules["_disabled"] = m4;
modules["_ghost"] = m5;
modules["_group"] = m6;
modules["_icon"] = m7;
modules["_loading"] = m8;
modules["_size"] = m9;
export default modules;
