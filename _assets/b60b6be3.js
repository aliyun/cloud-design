import {c as createElement, w as NextInput, S as Select, C as Component, s as NextIcon} from "./index.26359282.js";
import "./f5b00a0a.js";
import {e as exported} from "./19c0ac3a.js";
import {H as He} from "./679ba706.js";
function onChange(v) {
  console.log(v);
}
function onKeyDown(v) {
  console.log(v);
}
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextInput, {
    size: "large",
    placeholder: "please input",
    onChange,
    onKeyDown,
    "aria-label": "this is input"
  })));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextInput, {
    hasLimitHint: true,
    addonTextBefore: "http://",
    addonTextAfter: ".com",
    size: "large",
    defaultValue: "alibaba",
    maxLength: 5,
    "aria-label": "input with config of addonTextBefore and addonTextAfter"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    addonTextBefore: "http://",
    addonTextAfter: ".com",
    size: "medium",
    value: "alibaba",
    "aria-label": "input with config of addonTextBefore and addonTextAfter"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    addonTextBefore: "http://",
    addonTextAfter: ".com",
    size: "small",
    value: "alibaba",
    "aria-label": "input with config of addonTextBefore and addonTextAfter"
  })));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextInput.TextArea, {
    autoHeight: true,
    "aria-label": "auto height",
    placeholder: "autoHeight",
    onKeyDown: (e, opts) => {
      console.log("onKeyDown", opts);
    }
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput.TextArea, {
    "aria-label": "auto height",
    autoHeight: {minRows: 2, maxRows: 6}
  })));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
function onChange$1(v) {
  console.log(v);
}
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextInput, {
    size: "large",
    placeholder: "Large",
    onChange: onChange$1,
    "aria-label": "Large"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("span", {
    id: "J_InputMedium",
    style: {display: "none"}
  }, "Aria Labelby Demo", " "), /* @__PURE__ */ createElement(NextInput, {
    placeholder: "Medium",
    "aria-label": "Medium",
    "aria-labelledby": "J_InputMedium"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    placeholder: "Small",
    size: "small",
    label: "SIZE :",
    id: "J_InputSmall"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput.TextArea, {
    placeholder: "TextArea",
    "aria-label": "TextArea"
  })));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const onChange$2 = (value) => {
  console.log(value);
};
const onBlur = (e) => {
  console.log(e);
};
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextInput, {
    hasClear: true,
    defaultValue: "clear by click",
    size: "small",
    "aria-label": "input with config of hasClear",
    onChange: onChange$2
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    hasClear: true,
    defaultValue: "2019-09-10 10:10:20",
    "aria-label": "input with config of hasClear",
    onChange: onChange$2,
    onBlur,
    hint: "calendar"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    hasClear: true,
    defaultValue: "clear by click",
    size: "large",
    "aria-label": "input with config of hasClear",
    onChange: onChange$2
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null)));
}
const Style$4 = He.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextInput, {
    disabled: true,
    "aria-label": "disabled",
    placeholder: "disabled",
    size: "small"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    disabled: true,
    "aria-label": "disabled",
    addonTextBefore: "http://",
    addonTextAfter: ".com",
    size: "medium",
    value: "alibaba"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    disabled: true,
    "aria-label": "disabled",
    placeholder: "medium",
    maxLength: 10,
    hasLimitHint: true
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput.TextArea, {
    disabled: true,
    "aria-label": "disabled",
    placeholder: "medium",
    maxLength: 10,
    hasLimitHint: true
  })));
}
const Style$5 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const select = /* @__PURE__ */ createElement(Select, {
  "aria-label": "please select"
}, /* @__PURE__ */ createElement("option", {
  value: "https"
}, "https"), /* @__PURE__ */ createElement("option", {
  value: "http"
}, "http"));
const button = /* @__PURE__ */ createElement(exported, null, "search");
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextInput.Group, {
    addonBefore: select,
    addonAfter: button
  }, /* @__PURE__ */ createElement(NextInput, {
    hasClear: true,
    defaultValue: "abc",
    style: {width: "100%"},
    "aria-label": "please input"
  })), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    addonTextAfter: ".com",
    addonBefore: select,
    "aria-label": "please input"
  })));
}
const Style$6 = He.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      v: ""
    };
    this.onChange = (v) => {
      this.setState({
        v
      });
    };
    this.onClick = () => {
      console.log(this.state.v);
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextInput, {
      innerBefore: /* @__PURE__ */ createElement(NextIcon, {
        type: "search",
        style: {margin: 4},
        onClick: this.onClick
      }),
      placeholder: "search",
      value: this.state.v,
      "aria-label": "input with config of innerBefore",
      onChange: this.onChange
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
      innerAfter: /* @__PURE__ */ createElement(NextIcon, {
        type: "search",
        size: "xs",
        onClick: this.onClick,
        style: {margin: 4}
      }),
      placeholder: "search",
      value: this.state.v,
      "aria-label": "input with config of innerAfter",
      onChange: this.onChange
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
      disabled: true,
      defaultValue: "hi",
      innerAfter: /* @__PURE__ */ createElement(NextIcon, {
        type: "calendar",
        style: {margin: 4}
      }),
      "aria-label": "input with config of innerAfter and disabled"
    }));
  }
}
function DemoComponent$7() {
  return /* @__PURE__ */ createElement(Style$7, null, /* @__PURE__ */ createElement(App, null));
}
const Style$7 = He.div``;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
class App$1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxLength: 10,
      control: "maxLen control"
    };
  }
  onChange(v) {
    console.log(v);
    this.setState({
      control: v
    });
  }
  onKeyDown(e, opts) {
    console.log("onKeyDown", opts);
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextInput, {
      maxLength: 10,
      size: "large",
      placeholder: "Large",
      value: this.state.control,
      hasLimitHint: true,
      "aria-label": "input max length 10",
      onChange: this.onChange.bind(this),
      onKeyDown: this.onKeyDown.bind(this)
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
      maxLength: 20,
      placeholder: "medium",
      hasLimitHint: true,
      cutString: false,
      "aria-label": "input max length 20",
      onChange: (v) => {
        this.setState({control: v});
        console.log(v);
      },
      onKeyDown: (e, opts) => {
        console.log("onKeyDown", opts);
      }
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
      hasLimitHint: true,
      size: "small",
      placeholder: "small",
      maxLength: 100,
      "aria-label": "input max length 100"
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput.TextArea, {
      placeholder: "TextArea",
      maxLength: 100,
      rows: 4,
      hasLimitHint: true,
      "aria-label": "input max length 100"
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
      maxLength: 5,
      placeholder: "Original maxLength",
      "aria-label": "input max length 5"
    }));
  }
}
function DemoComponent$8() {
  return /* @__PURE__ */ createElement(Style$8, null, /* @__PURE__ */ createElement(App$1, null));
}
const Style$8 = He.div``;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
function onChange$3(v) {
  console.log(v);
}
function DemoComponent$9() {
  return /* @__PURE__ */ createElement(Style$9, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextInput.Password, {
    placeholder: "please input password",
    onChange: onChange$3
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput.Password, {
    size: "large",
    placeholder: "please input password",
    onChange: onChange$3
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput.Password, {
    size: "small",
    placeholder: "please input password",
    onChange: onChange$3
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null)));
}
const Style$9 = He.div``;
var m9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$9
});
function DemoComponent$a() {
  return /* @__PURE__ */ createElement(Style$a, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextInput, {
    state: "error",
    placeholder: "error",
    size: "small",
    "aria-live": "assertive",
    "aria-label": "error"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    state: "error",
    hasLimitHint: true,
    maxLength: 100,
    placeholder: "error",
    size: "medium",
    "aria-live": "assertive",
    "aria-label": "error"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    state: "error",
    multiple: true,
    placeholder: "error",
    size: "large",
    "aria-live": "assertive",
    "aria-label": "error"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    state: "success",
    size: "small",
    value: "success",
    "aria-live": "assertive",
    "aria-label": "success"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    state: "success",
    maxLength: 100,
    hasLimitHint: true,
    placeholder: "success",
    size: "medium",
    "aria-live": "assertive",
    "aria-label": "success"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    state: "success",
    placeholder: "success",
    size: "large",
    "aria-live": "assertive",
    "aria-label": "success"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    state: "loading",
    placeholder: "loading",
    size: "small",
    "aria-live": "assertive",
    "aria-label": "loading"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    state: "loading",
    placeholder: "loading",
    size: "medium",
    "aria-live": "assertive",
    "aria-label": "loading"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    state: "loading",
    placeholder: "loading",
    size: "large",
    "aria-live": "assertive",
    "aria-label": "loading"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null)));
}
const Style$a = He.div``;
var m10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$a
});
function DemoComponent$b() {
  return /* @__PURE__ */ createElement(Style$b, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextInput, {
    placeholder: "width:400",
    style: {width: 400},
    "aria-label": "style width 400"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    addonTextBefore: "http://",
    addonTextAfter: ".com",
    size: "medium",
    value: "alibaba",
    style: {width: 400},
    "aria-label": "style width 400"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    placeholder: "medium",
    maxLength: 10,
    hasLimitHint: true,
    style: {width: 400},
    "aria-label": "style width 400"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    placeholder: "medium",
    hasClear: true,
    maxLength: 10,
    hasLimitHint: true,
    style: {width: 400},
    className: "my-input-class",
    state: "success",
    "aria-label": "style width 400"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
    placeholder: "className",
    className: "my-input-class",
    "aria-label": "custom my input class"
  }), /* @__PURE__ */ createElement(NextInput, {
    htmlType: "hidden",
    "aria-label": "hidden input"
  })));
}
const Style$b = He.div`
  body .my-input-class {
    width: 500px;
  }
`;
var m11 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$b
});
class App$2 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: ""
    };
  }
  onChange(value) {
    console.log("onChange", value);
    this.setState({
      value
    });
  }
  onKeyDown(e, opts) {
    console.log("onKeyDown", opts);
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextInput, {
      trim: true,
      placeholder: "cant not input space",
      "aria-label": "cant not input space",
      onChange: this.onChange.bind(this),
      onKeyDown: this.onKeyDown.bind(this)
    }));
  }
}
function DemoComponent$c() {
  return /* @__PURE__ */ createElement(Style$c, null, /* @__PURE__ */ createElement(App$2, null));
}
const Style$c = He.div``;
var m12 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$c
});
const modules = {};
modules["_accessibility"] = m0;
modules["_addon"] = m1;
modules["_autoheight"] = m2;
modules["_basic"] = m3;
modules["_clear"] = m4;
modules["_disabled"] = m5;
modules["_group"] = m6;
modules["_inner"] = m7;
modules["_maxlen"] = m8;
modules["_passwd"] = m9;
modules["_state"] = m10;
modules["_style"] = m11;
modules["_trim"] = m12;
export default modules;
