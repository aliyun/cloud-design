import {c as createElement, L as Checkbox, C as Component} from "./index.c66e7a18.js";
import "./1df25b18.js";
import {e as exported} from "./3b97e505.js";
import {H as He} from "./85e129b2.js";
const CheckboxGroup = () => /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h4", null, "Programming language："), /* @__PURE__ */ createElement(Checkbox.Group, {
  "aria-label": "Please select a programming language"
}, /* @__PURE__ */ createElement(Checkbox, {
  value: "python"
}, "python"), /* @__PURE__ */ createElement(Checkbox, {
  value: "java"
}, "java"), /* @__PURE__ */ createElement(Checkbox, {
  value: "angular"
}, "angular"), /* @__PURE__ */ createElement(Checkbox, {
  value: "c"
}, "c"), /* @__PURE__ */ createElement(Checkbox, {
  value: "other"
}, "other")));
function DemoComponent() {
  const content = /* @__PURE__ */ createElement(CheckboxGroup, null);
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h6", null, "Different status without label:"), /* @__PURE__ */ createElement(Checkbox, null, "Unchecked"), /* @__PURE__ */ createElement(Checkbox, {
    defaultChecked: true
  }, "DefaultChecked"), /* @__PURE__ */ createElement(Checkbox, {
    defaultIndeterminate: true
  }, "Indeterminate"), /* @__PURE__ */ createElement(Checkbox, {
    disabled: true
  }, "Disabled"), ";", /* @__PURE__ */ createElement(Checkbox, {
    disabled: true,
    checked: true
  }, "Checked-Disabled"), /* @__PURE__ */ createElement(Checkbox, {
    checked: true
  }, "Checked"), /* @__PURE__ */ createElement("h6", null, "Using with label"), /* @__PURE__ */ createElement(Checkbox, null, "Banana"), " ", /* @__PURE__ */ createElement(Checkbox, {
    id: "apple"
  }), /* @__PURE__ */ createElement("label", {
    htmlFor: "apple",
    className: "next-checkbox-label"
  }, "Apple"), " ", /* @__PURE__ */ createElement("label", null, /* @__PURE__ */ createElement(Checkbox, {
    id: "pear"
  }), /* @__PURE__ */ createElement("span", {
    className: "next-checkbox-label"
  }, "Pear")), " ", /* @__PURE__ */ createElement(Checkbox, {
    label: "Banana"
  }));
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const {Group: CheckboxGroup$1} = Checkbox;
const list = [
  {
    value: "apple",
    label: "Apple"
  },
  {
    value: "pear",
    label: "Pear"
  },
  {
    value: "orange",
    label: "Orange"
  }
];
class ControlApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ["orange"]
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(selectedItems) {
    console.log("onChange callback", selectedItems);
    this.setState({
      value: selectedItems
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      style: {padding: "20px"}
    }, /* @__PURE__ */ createElement(CheckboxGroup$1, {
      value: this.state.value,
      dataSource: list,
      onChange: this.onChange
    }));
  }
}
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement(ControlApp, null);
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const CheckboxGroup$2 = () => /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h4", null, "Horizonal direction"), /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement(Checkbox.Group, {
  itemDirection: "hoz"
}, /* @__PURE__ */ createElement(Checkbox, {
  value: "react"
}, "React"), /* @__PURE__ */ createElement(Checkbox, {
  value: "vue"
}, "Vue"), /* @__PURE__ */ createElement(Checkbox, {
  value: "angular"
}, "Angular"))), /* @__PURE__ */ createElement("h4", null, "Vertical direction"), /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement(Checkbox.Group, {
  itemDirection: "ver"
}, /* @__PURE__ */ createElement(Checkbox, {
  value: "react"
}, "React"), /* @__PURE__ */ createElement(Checkbox, {
  value: "vue"
}, "Vue"), /* @__PURE__ */ createElement(Checkbox, {
  value: "angular"
}, "Angular"))));
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement(CheckboxGroup$2, null);
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
class IndeterminateApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      indeterminate: true,
      disabled: false
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Checkbox, {
      checked: this.state.checked,
      indeterminate: this.state.indeterminate,
      disabled: this.state.disabled,
      onChange: (checked) => {
        this.setState({checked, indeterminate: false});
      }
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: () => {
        this.setState({checked: true, indeterminate: false});
      }
    }, "checked = true"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: () => {
        this.setState({checked: false});
      }
    }, "checked = false"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: () => {
        this.setState({checked: false, indeterminate: true});
      }
    }, "indeterminate = true"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: () => {
        this.setState({indeterminate: false});
      }
    }, "indeterminate = false"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: () => {
        this.setState({disabled: !this.state.disabled});
      }
    }, "toggle disabled"));
  }
}
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement(IndeterminateApp, null);
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = He.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const {Group: CheckboxGroup$3} = Checkbox;
class NestApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ["orange"]
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(selectedItems) {
    this.setState({
      value: selectedItems
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(CheckboxGroup$3, {
      value: this.state.value,
      onChange: this.onChange
    }, /* @__PURE__ */ createElement(Checkbox, {
      id: "apple",
      value: "apple",
      disabled: true
    }, "Apple"), /* @__PURE__ */ createElement(Checkbox, {
      id: "watermelon",
      value: "watermelon"
    }, "Watermelon"), /* @__PURE__ */ createElement(Checkbox, {
      id: "orange",
      value: "orange"
    }, "Orange")));
  }
}
function DemoComponent$5() {
  const content = /* @__PURE__ */ createElement(NestApp, null);
  return /* @__PURE__ */ createElement(Style$5, null, content);
}
const Style$5 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const {Group: CheckboxGroup$4} = Checkbox;
const list$1 = [
  {
    value: "apple",
    label: "Apple",
    disabled: false
  },
  {
    value: "pear",
    label: "Pear"
  },
  {
    value: "orange",
    label: "Orange",
    disabled: true
  }
];
class UnControlApp extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(selectedItems) {
    console.log("onChange callback", selectedItems);
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      style: {padding: "20px"}
    }, /* @__PURE__ */ createElement(CheckboxGroup$4, {
      defaultValue: ["apple"],
      dataSource: list$1,
      onChange: this.onChange
    }));
  }
}
function DemoComponent$6() {
  const content = /* @__PURE__ */ createElement(UnControlApp, null);
  return /* @__PURE__ */ createElement(Style$6, null, content);
}
const Style$6 = He.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const modules = {};
modules["_accessibility"] = m0;
modules["_basic"] = m1;
modules["_control"] = m2;
modules["_group"] = m3;
modules["_indeterminate"] = m4;
modules["_nest"] = m5;
modules["_uncontrol"] = m6;
export default modules;
