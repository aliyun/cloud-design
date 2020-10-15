import {c as createElement, C as Component} from "./index.e76f7845.js";
import {H as He} from "./a3f37a66.js";
import "./33d6cb60.js";
import "./cdd517eb.js";
import "./482b3bb1.js";
import "./39b9d0c9.js";
import "./02466dec.js";
import "./af998bd5.js";
import "./ec5ade52.js";
import "./1ba1a98f.js";
import {R as Radio} from "./3960f8db.js";
import {e as exported} from "./7e36e1e4.js";
const {Item, SubNav} = exported;
const header = /* @__PURE__ */ createElement("span", {
  className: "fusion"
}, "FUSION");
const footer = /* @__PURE__ */ createElement("a", {
  className: "login-in",
  href: "javascript:;"
}, "Login in");
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement(exported, {
    className: "basic-nav",
    direction: "hoz",
    type: "primary",
    header,
    footer,
    defaultSelectedKeys: ["home"],
    triggerType: "hover"
  }, /* @__PURE__ */ createElement(Item, {
    key: "home"
  }, "Home"), /* @__PURE__ */ createElement(SubNav, {
    label: "Component"
  }, /* @__PURE__ */ createElement(Item, {
    key: "next"
  }, "Next"), /* @__PURE__ */ createElement(Item, {
    key: "mext"
  }, "Mext")), /* @__PURE__ */ createElement(Item, {
    key: "document"
  }, "Document")));
}
const Style = He.div`
  .basic-nav .fusion {
    margin: 8px 20px;
    width: 100px;
    color: #ffffff;
    font-size: 20px;
  }
  .basic-nav .login-in {
    margin: 0 20px;
    color: #ffffff;
  }
  .basic-nav .next-nav-item {
    width: 120px;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const {Item: Item$1, SubNav: SubNav$1} = exported;
class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      type: "normal",
      direction: "hoz",
      activeDirection: null,
      triggerType: "click",
      mode: "inline"
    };
  }
  setValue(name, value) {
    this.setState({
      [name]: value === "" ? null : value
    });
  }
  setTriggerType(triggerType) {
    this.setState({
      triggerType
    });
  }
  setModeType(mode) {
    this.setState({
      mode
    });
  }
  render() {
    const {type, direction, activeDirection, triggerType, mode} = this.state;
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      className: "demo-ctl"
    }, /* @__PURE__ */ createElement(Radio.Group, {
      shape: "button",
      size: "medium",
      value: type,
      onChange: this.setValue.bind(this, "type")
    }, /* @__PURE__ */ createElement(Radio, {
      value: "normal"
    }, 'type="normal"'), /* @__PURE__ */ createElement(Radio, {
      value: "primary"
    }, 'type="primary"'), /* @__PURE__ */ createElement(Radio, {
      value: "secondary"
    }, 'type="secondary"'), /* @__PURE__ */ createElement(Radio, {
      value: "line"
    }, 'type="line"')), /* @__PURE__ */ createElement(Radio.Group, {
      shape: "button",
      size: "medium",
      value: direction,
      onChange: this.setValue.bind(this, "direction")
    }, /* @__PURE__ */ createElement(Radio, {
      value: "hoz"
    }, 'direction="hoz"'), /* @__PURE__ */ createElement(Radio, {
      value: "ver"
    }, 'direction="ver"')), /* @__PURE__ */ createElement(Radio.Group, {
      shape: "button",
      size: "medium",
      value: activeDirection === null ? "" : activeDirection,
      onChange: this.setValue.bind(this, "activeDirection")
    }, /* @__PURE__ */ createElement(Radio, {
      value: ""
    }, "activeDirection=null"), direction === "hoz" ? /* @__PURE__ */ createElement(Radio, {
      value: "top"
    }, 'activeDirection="top"') : null, direction === "hoz" ? /* @__PURE__ */ createElement(Radio, {
      value: "bottom"
    }, 'activeDirection="bottom"') : null, direction === "ver" ? /* @__PURE__ */ createElement(Radio, {
      value: "left"
    }, 'activeDirection="left"') : null, direction === "ver" ? /* @__PURE__ */ createElement(Radio, {
      value: "right"
    }, 'activeDirection="right"') : null), /* @__PURE__ */ createElement(Radio.Group, {
      shape: "button",
      size: "medium",
      value: triggerType,
      onChange: this.setTriggerType.bind(this)
    }, /* @__PURE__ */ createElement(Radio, {
      value: "click"
    }, 'triggerType="click"'), /* @__PURE__ */ createElement(Radio, {
      value: "hover"
    }, 'triggerType="hover"')), /* @__PURE__ */ createElement(Radio.Group, {
      shape: "button",
      size: "medium",
      value: mode,
      onChange: this.setModeType.bind(this)
    }, /* @__PURE__ */ createElement(Radio, {
      value: "inline"
    }, 'mode="inline"'), /* @__PURE__ */ createElement(Radio, {
      value: "popup"
    }, 'mode="popup"'))), /* @__PURE__ */ createElement(exported, {
      className: "custom-nav",
      mode,
      type,
      direction,
      activeDirection,
      triggerType
    }, /* @__PURE__ */ createElement(Item$1, null, "Item 1"), /* @__PURE__ */ createElement(Item$1, null, "Item 2"), /* @__PURE__ */ createElement(SubNav$1, {
      label: "Sub Nav"
    }, /* @__PURE__ */ createElement(Item$1, null, "Item 3"), /* @__PURE__ */ createElement(Item$1, null, "Item 4"), /* @__PURE__ */ createElement(SubNav$1, {
      label: "Sub Nav"
    }, /* @__PURE__ */ createElement(Item$1, null, "Item 5"), /* @__PURE__ */ createElement(Item$1, null, "Item 6"))), /* @__PURE__ */ createElement(Item$1, {
      icon: "account"
    }, /* @__PURE__ */ createElement("a", {
      href: "http://www.taobao.com",
      target: "_blank"
    }, "Taobao"))));
  }
}
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(App, null));
}
const Style$1 = He.div`
  .demo-ctl {
    background-color: #f1f1f1;
    border-left: 4px solid #0d599a;
    color: #0a7ac3;
    margin-bottom: 20px;
    padding: 5px;
  }
  .demo-ctl .next-radio-group {
    display: block;
    margin: 5px;
  }
  .custom-nav.next-hoz .next-nav-item {
    width: 100px;
  }
  .custom-nav.next-ver {
    width: 200px;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement("div", null, "请查看", " ", /* @__PURE__ */ createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://codepen.io/aboutblank/pen/JjdNKrm"
  }, "https://codepen.io/aboutblank/pen/JjdNKrm")));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const {Item: Item$2, Group} = exported;
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(exported, {
    style: {width: 240}
  }, /* @__PURE__ */ createElement(Group, {
    label: "Group Label 1"
  }, /* @__PURE__ */ createElement(Item$2, {
    icon: "account"
  }, "Navigation One"), /* @__PURE__ */ createElement(Item$2, {
    icon: "account"
  }, "Navigation Two"), /* @__PURE__ */ createElement(Item$2, {
    icon: "account"
  }, "Navigation Three")), /* @__PURE__ */ createElement(Group, {
    label: "Group Label 2"
  }, /* @__PURE__ */ createElement(Item$2, {
    icon: "account"
  }, "Navigation Four"), /* @__PURE__ */ createElement(Item$2, {
    icon: "account"
  }, "Navigation Five"), /* @__PURE__ */ createElement(Item$2, {
    icon: "account"
  }, "Navigation Six"))));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const {Item: Item$3, SubNav: SubNav$2} = exported;
class App$1 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      iconOnly: false,
      hasTooltip: true,
      hasArrow: true
    };
  }
  setValue(name, value) {
    this.setState({
      [name]: value === "true"
    });
  }
  render() {
    const {iconOnly, hasTooltip, hasArrow} = this.state;
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      className: "demo-ctl"
    }, /* @__PURE__ */ createElement(Radio.Group, {
      shape: "button",
      size: "medium",
      value: iconOnly ? "true" : "false",
      onChange: this.setValue.bind(this, "iconOnly")
    }, /* @__PURE__ */ createElement(Radio, {
      value: "true"
    }, "iconOnly=true"), /* @__PURE__ */ createElement(Radio, {
      value: "false"
    }, "iconOnly=false")), iconOnly ? /* @__PURE__ */ createElement(Radio.Group, {
      shape: "button",
      size: "medium",
      value: hasArrow ? "true" : "false",
      onChange: this.setValue.bind(this, "hasArrow")
    }, /* @__PURE__ */ createElement(Radio, {
      value: "true"
    }, "hasArrow=true"), /* @__PURE__ */ createElement(Radio, {
      value: "false"
    }, "hasArrow=false")) : null, iconOnly ? /* @__PURE__ */ createElement(Radio.Group, {
      shape: "button",
      size: "medium",
      value: hasTooltip ? "true" : "false",
      onChange: this.setValue.bind(this, "hasTooltip")
    }, /* @__PURE__ */ createElement(Radio, {
      value: "true"
    }, "hasTooltip=true"), /* @__PURE__ */ createElement(Radio, {
      value: "false"
    }, "hasTooltip=false")) : null), /* @__PURE__ */ createElement(exported, {
      style: {width: "200px"},
      iconOnly,
      hasArrow,
      hasTooltip
    }, /* @__PURE__ */ createElement(Item$3, {
      icon: "account"
    }, "Navigation One"), /* @__PURE__ */ createElement(Item$3, {
      icon: "account"
    }, "Navigation Two"), /* @__PURE__ */ createElement(Item$3, {
      icon: "account"
    }, "Navigation Three"), /* @__PURE__ */ createElement(Item$3, {
      icon: "account"
    }, "Navigation Four"), /* @__PURE__ */ createElement(Item$3, {
      icon: "account"
    }, "Navigation Five"), /* @__PURE__ */ createElement(SubNav$2, {
      icon: "account",
      label: "Sub Nav"
    }, /* @__PURE__ */ createElement(Item$3, {
      icon: "account"
    }, "Item 1"), /* @__PURE__ */ createElement(Item$3, {
      icon: "account"
    }, "Item 2"), /* @__PURE__ */ createElement(Item$3, {
      icon: "account"
    }, "Item 3"), /* @__PURE__ */ createElement(Item$3, {
      icon: "account"
    }, "Item 4"))));
  }
}
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement(App$1, null));
}
const Style$4 = He.div`
  .demo-ctl {
    background-color: #f1f1f1;
    border-left: 4px solid #0d599a;
    color: #0a7ac3;
    margin-bottom: 20px;
    padding: 5px;
  }
  .demo-ctl .next-radio-group {
    margin: 5px;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const {Item: Item$4, SubNav: SubNav$3} = exported;
class App$2 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      openMode: "single"
    };
  }
  setValue(openMode) {
    this.setState({
      openMode
    });
  }
  render() {
    const {openMode} = this.state;
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      className: "demo-ctl"
    }, /* @__PURE__ */ createElement(Radio.Group, {
      shape: "button",
      size: "medium",
      value: openMode,
      onChange: this.setValue.bind(this)
    }, /* @__PURE__ */ createElement(Radio, {
      value: "single"
    }, 'openMode="single"'), /* @__PURE__ */ createElement(Radio, {
      value: "multiple"
    }, 'openMode="multiple"'))), /* @__PURE__ */ createElement(exported, {
      style: {width: 240},
      openMode
    }, /* @__PURE__ */ createElement(SubNav$3, {
      label: "Sub Nav 1"
    }, /* @__PURE__ */ createElement(Item$4, null, "Item 1")), /* @__PURE__ */ createElement(SubNav$3, {
      label: "Sub Nav 2"
    }, /* @__PURE__ */ createElement(Item$4, null, "Item 1"), /* @__PURE__ */ createElement(Item$4, null, "Item 2"), /* @__PURE__ */ createElement(SubNav$3, {
      label: "Sub Nav 1"
    }, /* @__PURE__ */ createElement(Item$4, null, "Item 1"), /* @__PURE__ */ createElement(Item$4, null, "Item 2")), /* @__PURE__ */ createElement(SubNav$3, {
      label: "Sub Nav 2"
    }, /* @__PURE__ */ createElement(Item$4, null, "Item 1"), /* @__PURE__ */ createElement(Item$4, null, "Item 2"))), /* @__PURE__ */ createElement(SubNav$3, {
      label: "Sub Nav 3"
    }, /* @__PURE__ */ createElement(Item$4, null, "Item 1"), /* @__PURE__ */ createElement(Item$4, null, "Item 2"), /* @__PURE__ */ createElement(Item$4, null, "Item 3"), /* @__PURE__ */ createElement(SubNav$3, {
      label: "Sub Nav 1"
    }, /* @__PURE__ */ createElement(Item$4, null, "Item 1"), /* @__PURE__ */ createElement(Item$4, null, "Item 2"), /* @__PURE__ */ createElement(Item$4, null, "Item 3")), /* @__PURE__ */ createElement(SubNav$3, {
      label: "Sub Nav 2"
    }, /* @__PURE__ */ createElement(Item$4, null, "Item 1"), /* @__PURE__ */ createElement(Item$4, null, "Item 2"), /* @__PURE__ */ createElement(Item$4, null, "Item 3")), /* @__PURE__ */ createElement(SubNav$3, {
      label: "Sub Nav 3"
    }, /* @__PURE__ */ createElement(Item$4, null, "Item 1"), /* @__PURE__ */ createElement(Item$4, null, "Item 2"), /* @__PURE__ */ createElement(Item$4, null, "Item 3"))), /* @__PURE__ */ createElement(Item$4, null, "Item")));
  }
}
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement(App$2, null));
}
const Style$5 = He.div`
  .demo-ctl {
    background-color: #f1f1f1;
    border-left: 4px solid #0d599a;
    color: #0a7ac3;
    margin-bottom: 20px;
    padding: 5px;
  }
  .demo-ctl .next-radio-group {
    margin: 5px;
  }
`;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const {Item: Item$5, SubNav: SubNav$4} = exported;
class App$3 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      popupAlign: "follow"
    };
  }
  setValue(popupAlign) {
    this.setState({
      popupAlign
    });
  }
  render() {
    const {popupAlign} = this.state;
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      className: "demo-ctl"
    }, /* @__PURE__ */ createElement(Radio.Group, {
      shape: "button",
      size: "medium",
      value: popupAlign,
      onChange: this.setValue.bind(this)
    }, /* @__PURE__ */ createElement(Radio, {
      value: "follow"
    }, 'popupAlign="follow"'), /* @__PURE__ */ createElement(Radio, {
      value: "outside"
    }, 'popupAlign="outside"'))), /* @__PURE__ */ createElement(exported, {
      style: {height: 400, width: 240},
      mode: "popup",
      popupAlign,
      defaultOpenKeys: ["sub-nav-2"]
    }, /* @__PURE__ */ createElement(SubNav$4, {
      key: "sub-nav-1",
      label: "Sub Nav 1"
    }, /* @__PURE__ */ createElement(Item$5, {
      key: "1"
    }, "Item 1")), /* @__PURE__ */ createElement(SubNav$4, {
      key: "sub-nav-2",
      label: "Sub Nav 2"
    }, /* @__PURE__ */ createElement(Item$5, {
      key: "1"
    }, "Item 1"), /* @__PURE__ */ createElement(Item$5, {
      key: "2"
    }, "Item 2")), /* @__PURE__ */ createElement(SubNav$4, {
      key: "sub-nav-3",
      label: "Sub Nav 3"
    }, /* @__PURE__ */ createElement(Item$5, {
      key: "1"
    }, "Item 1"), /* @__PURE__ */ createElement(Item$5, {
      key: "2"
    }, "Item 2"), /* @__PURE__ */ createElement(Item$5, {
      key: "3"
    }, "Item 3")), /* @__PURE__ */ createElement(SubNav$4, {
      key: "sub-nav-4",
      label: "Sub Nav 4"
    }, /* @__PURE__ */ createElement(Item$5, {
      key: "1"
    }, "Item 1"), /* @__PURE__ */ createElement(Item$5, {
      key: "2"
    }, "Item 2"), /* @__PURE__ */ createElement(Item$5, {
      key: "3"
    }, "Item 3"), /* @__PURE__ */ createElement(Item$5, {
      key: "4"
    }, "Item 4"))));
  }
}
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement(App$3, null));
}
const Style$6 = He.div`
  .demo-ctl {
    background-color: #f1f1f1;
    border-left: 4px solid #0d599a;
    color: #0a7ac3;
    margin-bottom: 20px;
    padding: 5px;
  }
  .demo-ctl .next-radio-group {
    margin: 5px;
  }
`;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const modules = {};
modules["_basic"] = m0;
modules["_custom"] = m1;
modules["_fixed"] = m2;
modules["_group"] = m3;
modules["_icon-only"] = m4;
modules["_open-mode"] = m5;
modules["_popup-align"] = m6;
export default modules;
