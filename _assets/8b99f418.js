import {c as createElement, C as Component} from "./index.e76f7845.js";
import {H as He} from "./a3f37a66.js";
import "./33d6cb60.js";
import "./cdd517eb.js";
import {N as NextIcon} from "./39b9d0c9.js";
import {C as ConfigTag} from "./d1d2a08f.js";
const {Group: TagGroup} = ConfigTag;
const dataType = ["全部", "衣服", "手机", "化妆品"];
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.onclick = this.onclick.bind(this);
  }
  onclick(v) {
    this.setState({name: v.item});
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(TagGroup, null, dataType.map((item) => /* @__PURE__ */ createElement(ConfigTag, {
      type: "normal",
      key: item,
      size: "medium",
      onClick: () => this.onclick({item})
    }, item))), this.state.name);
  }
}
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement(Demo, null));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const {Group: TagGroup$1} = ConfigTag;
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement("div", {
    className: "tag-list"
  }, /* @__PURE__ */ createElement("h4", null, "large size"), /* @__PURE__ */ createElement(TagGroup$1, null, /* @__PURE__ */ createElement(ConfigTag, {
    type: "normal",
    size: "large"
  }, "Normal large Tag"), /* @__PURE__ */ createElement(ConfigTag, {
    type: "primary",
    size: "large"
  }, "Primary large Tag"), /* @__PURE__ */ createElement(ConfigTag, {
    size: "large"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "smile"
  }), " Tag With Icon")), /* @__PURE__ */ createElement("h4", null, "medium(default) size"), /* @__PURE__ */ createElement(TagGroup$1, null, /* @__PURE__ */ createElement(ConfigTag, {
    type: "normal",
    size: "medium"
  }, "Normal Tag"), /* @__PURE__ */ createElement(ConfigTag, {
    type: "primary"
  }, "Primary Tag"), /* @__PURE__ */ createElement(ConfigTag, null, /* @__PURE__ */ createElement(NextIcon, {
    type: "smile"
  }), " Tag With Icon")), /* @__PURE__ */ createElement("h4", null, "small size"), /* @__PURE__ */ createElement(TagGroup$1, null, /* @__PURE__ */ createElement(ConfigTag, {
    type: "normal",
    size: "small"
  }, "Normal Small Tag"), /* @__PURE__ */ createElement(ConfigTag, {
    type: "primary",
    size: "small"
  }, "Primary Small Tag"), /* @__PURE__ */ createElement(ConfigTag, {
    size: "small"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "smile"
  }), " Tag With Icon")), /* @__PURE__ */ createElement("h4", null, "link tag"), /* @__PURE__ */ createElement(TagGroup$1, null, /* @__PURE__ */ createElement(ConfigTag, {
    type: "normal"
  }, /* @__PURE__ */ createElement("a", {
    href: "//www.alibaba.com",
    target: "_blank"
  }, "normal Link Tag")), /* @__PURE__ */ createElement(ConfigTag, {
    type: "primary"
  }, /* @__PURE__ */ createElement("a", {
    href: "//www.alibaba.com",
    target: "_blank"
  }, "primary Link Tag")), /* @__PURE__ */ createElement(ConfigTag, {
    size: "small"
  }, /* @__PURE__ */ createElement("a", {
    href: "//www.alibaba.com",
    target: "_blank"
  }, /* @__PURE__ */ createElement(NextIcon, {
    type: "smile"
  }), " Link Tag With Icon")))));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const {Group: TagGroup$2, Closeable: CloseableTag} = ConfigTag;
const handler = (from) => {
  console.log(`close from ${from}`);
  return false;
};
class Demo$1 extends Component {
  renderTagList(option) {
    return [
      /* @__PURE__ */ createElement(CloseableTag, {
        key: "tag-1",
        type: option.type
      }, option.type),
      /* @__PURE__ */ createElement(CloseableTag, {
        key: "tag-2",
        type: option.type,
        disabled: true
      }, option.type, " ", " disabled ")
    ];
  }
  renderCloseAreaTags() {
    return ["tag", "tail"].reduce((prev, curr) => prev.concat([
      /* @__PURE__ */ createElement(CloseableTag, {
        key: `tag-${curr}-1`,
        closeArea: curr
      }, "closeArea ", curr),
      /* @__PURE__ */ createElement(CloseableTag, {
        key: `tag-${curr}-2`,
        type: "primary",
        closeArea: curr
      }, "closeArea ", curr)
    ]), []);
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "tag-list"
    }, /* @__PURE__ */ createElement("h4", null, "type: 'normal'"), /* @__PURE__ */ createElement(TagGroup$2, null, this.renderTagList({type: "normal"})), /* @__PURE__ */ createElement("h4", null, "type: 'primary'"), /* @__PURE__ */ createElement(TagGroup$2, null, this.renderTagList({type: "primary"})), /* @__PURE__ */ createElement("h4", null, "closeArea: ['tag', 'tail']"), /* @__PURE__ */ createElement(TagGroup$2, null, this.renderCloseAreaTags()), /* @__PURE__ */ createElement("h4", null, "close handler"), /* @__PURE__ */ createElement(TagGroup$2, null, /* @__PURE__ */ createElement(CloseableTag, {
      onClose: () => true
    }, " onClose allow close"), /* @__PURE__ */ createElement(CloseableTag, {
      onClose: () => false
    }, " ", "onClose prevent close"), /* @__PURE__ */ createElement(CloseableTag, {
      onClose: handler
    }, " onClose from "), /* @__PURE__ */ createElement(CloseableTag, {
      afterClose: () => console.log("after close")
    }, "after Close")), /* @__PURE__ */ createElement("h4", null, "closeable link tag"), /* @__PURE__ */ createElement(TagGroup$2, null, /* @__PURE__ */ createElement(CloseableTag, {
      type: "primary"
    }, /* @__PURE__ */ createElement("a", {
      href: "//www.alibaba.com",
      target: "_blank"
    }, "Primary Link Tag")), /* @__PURE__ */ createElement(CloseableTag, {
      type: "normal"
    }, /* @__PURE__ */ createElement("a", {
      href: "//www.alibaba.com",
      target: "_blank"
    }, "normal Link Tag"))));
  }
}
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(Demo$1, null));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const {Group: TagGroup$3} = ConfigTag;
const presetColors = ["blue", "green", "orange", "red", "turquoise", "yellow"];
const customColos = ["#f50", "#2db7f5", "#87d068", "#108ee9"];
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement("div", {
    className: "tag-list"
  }, /* @__PURE__ */ createElement("h4", null, "presets"), /* @__PURE__ */ createElement(TagGroup$3, null, presetColors.map((color) => /* @__PURE__ */ createElement(ConfigTag, {
    key: `p_n_${color}`,
    type: "normal",
    color
  }, color))), /* @__PURE__ */ createElement(TagGroup$3, null, presetColors.map((color) => /* @__PURE__ */ createElement(ConfigTag, {
    key: `p_p_${color}`,
    type: "primary",
    color
  }, color))), /* @__PURE__ */ createElement("h4", null, "custom colors"), /* @__PURE__ */ createElement(TagGroup$3, null, customColos.map((color) => /* @__PURE__ */ createElement(ConfigTag, {
    key: `c_${color}`,
    color
  }, color)))));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const {Group: TagGroup$4, Selectable: SelectableTag} = ConfigTag;
const dataSource = [
  "selectable tag",
  "I like orange",
  "small tag",
  "disabled",
  "disabled & checked"
];
class Demo$2 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: ["I like orange", "disabled & checked"],
      singleValue: "selectable tag"
    };
  }
  handleChange(name, checked) {
    const {value} = this.state;
    const next = checked ? [...value, name] : value.filter((n) => n !== name);
    this.setState({value: next});
  }
  handleChangeSingle(name, checked) {
    const {singleValue} = this.state;
    const next = checked ? name : "";
    this.setState({singleValue: next});
  }
  renderTagList(props) {
    const {value} = this.state;
    return dataSource.map((name, i) => /* @__PURE__ */ createElement(SelectableTag, {
      key: name,
      checked: value.indexOf(name) > -1,
      disabled: i > 2,
      size: i === 2 ? "small" : void 0,
      onChange: this.handleChange.bind(this, name),
      ...props
    }, name));
  }
  renderTagListSingle(props) {
    const {singleValue} = this.state;
    return dataSource.map((name, i) => /* @__PURE__ */ createElement(SelectableTag, {
      key: name,
      checked: singleValue === name,
      disabled: i > 2,
      size: i === 2 ? "small" : void 0,
      onChange: this.handleChangeSingle.bind(this, name),
      ...props
    }, name));
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "tag-list"
    }, /* @__PURE__ */ createElement("h4", null, "type: 'default'"), /* @__PURE__ */ createElement(TagGroup$4, null, this.renderTagList({type: "normal"})), /* @__PURE__ */ createElement("h4", null, "type: 'primary'"), /* @__PURE__ */ createElement(TagGroup$4, null, this.renderTagList({type: "primary"})), /* @__PURE__ */ createElement("h4", null, "Controlled Tags: Only one selected at a time"), /* @__PURE__ */ createElement(TagGroup$4, null, this.renderTagListSingle({type: "normal"})));
  }
}
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement(Demo$2, null));
}
const Style$4 = He.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const modules = {};
modules["_accessibility"] = m0;
modules["_basic"] = m1;
modules["_closable"] = m2;
modules["_colorful-tag"] = m3;
modules["_selectable"] = m4;
export default modules;
