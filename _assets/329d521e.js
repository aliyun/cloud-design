import {c as createElement, s as NextIcon, C as Component} from "./index.d4405210.js";
import "./35723b75.js";
import {e as exported} from "./781f98f8.js";
import {H as He} from "./e522708e.js";
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported.Group, null, /* @__PURE__ */ createElement(exported, {
    type: "primary",
    "aria-label": "prompt button"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "prompt"
  })), /* @__PURE__ */ createElement(exported, {
    type: "primary",
    "aria-label": "clock button"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "clock"
  })), /* @__PURE__ */ createElement(exported, {
    type: "primary",
    "aria-label": "set button"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "set"
  })))));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
    type: "normal"
  }, "Normal"), "   ", /* @__PURE__ */ createElement(exported, {
    type: "primary"
  }, "Prirmary"), "   ", /* @__PURE__ */ createElement(exported, {
    type: "secondary"
  }, "Secondary"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
    type: "normal",
    text: true
  }, "Normal"), " ", "  ", /* @__PURE__ */ createElement(exported, {
    type: "primary",
    text: true
  }, "Primary"), " ", "  ", /* @__PURE__ */ createElement(exported, {
    type: "secondary",
    text: true
  }, "Secondary"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
    type: "normal",
    warning: true
  }, "Normal"), " ", "  ", /* @__PURE__ */ createElement(exported, {
    type: "primary",
    warning: true
  }, "Primary"), " ", "  "));
}
const Style$1 = He.div``;
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
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
    ...props,
    type: "primary"
  }, "alibaba.com"), " ", "  ", /* @__PURE__ */ createElement(exported, {
    ...props,
    type: "secondary"
  }, "alibaba.com"), " ", "  ", /* @__PURE__ */ createElement(exported, {
    ...props,
    type: "normal"
  }, "alibaba.com")));
}
const Style$2 = He.div``;
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
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
      type: "secondary",
      iconSize: "xs",
      loading: true,
      icons: {
        loading: /* @__PURE__ */ createElement(NextIcon, {
          type: "loading",
          style: {color: "orange"}
        })
      }
    }, "Custom loading icon"), "  ", /* @__PURE__ */ createElement(exported, {
      type: "primary",
      loading: this.state.loading,
      onClick: this.setLoading,
      icons: {
        loading: /* @__PURE__ */ createElement(NextIcon, {
          type: "loading",
          style: {color: "orange"}
        })
      }
    }, "Click to loading and show loading icon"));
  }
}
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(Demo, null));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
    type: "primary"
  }, "Primary"), "  ", /* @__PURE__ */ createElement(exported, {
    component: "a",
    type: "primary",
    disabled: true
  }, "Primary"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
    type: "secondary"
  }, "Secondary"), "  ", /* @__PURE__ */ createElement(exported, {
    type: "secondary",
    disabled: true
  }, "Secondary"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
    type: "normal"
  }, "Normal"), "  ", /* @__PURE__ */ createElement(exported, {
    type: "normal",
    disabled: true
  }, "Normal"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
    className: "ghost-light-background"
  }, /* @__PURE__ */ createElement(exported, {
    ghost: "light",
    disabled: true
  }, "Ghost Light")), /* @__PURE__ */ createElement("div", {
    className: "ghost-dark-background"
  }, /* @__PURE__ */ createElement(exported, {
    ghost: "dark",
    disabled: true
  }, "Ghost Dark")))));
}
const Style$4 = He.div`
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
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement("div", {
    style: {clear: "both"}
  }, /* @__PURE__ */ createElement("div", {
    className: "ghost-light-background"
  }, /* @__PURE__ */ createElement(exported, {
    ghost: "light"
  }, "Ghost light")), /* @__PURE__ */ createElement("div", {
    className: "ghost-dark-background"
  }, /* @__PURE__ */ createElement(exported, {
    ghost: "dark"
  }, "Ghost dark"))));
}
const Style$5 = He.div`
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
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported.Group, null, /* @__PURE__ */ createElement(exported, {
    type: "primary"
  }, "OK"), /* @__PURE__ */ createElement(exported, {
    type: "secondary"
  }, "Cancel")), "  ", /* @__PURE__ */ createElement(exported.Group, null, /* @__PURE__ */ createElement(exported, {
    disabled: true
  }, "Left"), /* @__PURE__ */ createElement(exported, {
    disabled: true
  }, "Middle"), /* @__PURE__ */ createElement(exported, {
    disabled: true
  }, "Right")), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported.Group, null, /* @__PURE__ */ createElement(exported, {
    type: "primary"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "arrow-left"
  }), " Backward"), /* @__PURE__ */ createElement(exported, {
    type: "primary"
  }, "Forward ", /* @__PURE__ */ createElement(NextIcon, {
    type: "arrow-right"
  }))), "  ", /* @__PURE__ */ createElement(exported.Group, null, /* @__PURE__ */ createElement(exported, {
    type: "primary"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "prompt"
  })), /* @__PURE__ */ createElement(exported, {
    type: "primary"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "clock"
  })), /* @__PURE__ */ createElement(exported, {
    type: "primary"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "set"
  })))));
}
const Style$6 = He.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
function DemoComponent$7() {
  return /* @__PURE__ */ createElement(Style$7, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, null, /* @__PURE__ */ createElement(NextIcon, {
    type: "atm"
  }), " ATM"), " ", "  ", /* @__PURE__ */ createElement(exported, {
    text: true
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "atm"
  }), " ATM"), " ", "  ", /* @__PURE__ */ createElement(exported, {
    warning: true
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "atm"
  }), " ATM"), " ", "  ", /* @__PURE__ */ createElement(exported, {
    iconSize: "xxs"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "arrow-left"
  }), " ARROW"), " ", "  "));
}
const Style$7 = He.div``;
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
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
      type: "secondary",
      loading: true
    }, "Loading"), "  ", /* @__PURE__ */ createElement(exported, {
      type: "primary",
      loading: this.state.loading,
      onClick: this.setLoading
    }, "点击加载"));
  }
}
function DemoComponent$8() {
  return /* @__PURE__ */ createElement(Style$8, null, /* @__PURE__ */ createElement(Demo$1, null));
}
const Style$8 = He.div``;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
function DemoComponent$9() {
  return /* @__PURE__ */ createElement(Style$9, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
    type: "primary",
    size: "large"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "atm"
  }), "Large"), "  ", /* @__PURE__ */ createElement(exported, {
    type: "primary"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "atm"
  }), "Medium"), "  ", /* @__PURE__ */ createElement(exported, {
    type: "primary",
    size: "small"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "atm"
  }), "Small"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported.Group, {
    size: "large"
  }, /* @__PURE__ */ createElement(exported, null, "Button"), /* @__PURE__ */ createElement(exported, null, "Button"), /* @__PURE__ */ createElement(exported, null, "Button"))));
}
const Style$9 = He.div``;
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
