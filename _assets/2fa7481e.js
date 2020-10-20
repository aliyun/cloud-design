import {c as createElement, C as Component} from "./index.8f10cf2d.js";
import {H as He} from "./5269ede4.js";
import "./929a5a64.js";
import "./34797fae.js";
import {R as Radio} from "./ea718a12.js";
import {G as Grid} from "./0fd40d7f.js";
const RadioGroup = Radio.Group;
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("span", {
    id: "radio-a11y"
  }, "Programming language ："), /* @__PURE__ */ createElement(RadioGroup, {
    "aria-labelledby": "radio-a11y"
  }, /* @__PURE__ */ createElement(Radio, {
    id: "python",
    value: "python"
  }, "python"), /* @__PURE__ */ createElement(Radio, {
    id: "java",
    value: "java"
  }, "java"), /* @__PURE__ */ createElement(Radio, {
    id: "c",
    value: "c"
  }, "c"))));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, "(", /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h4", null, "Without Label"), /* @__PURE__ */ createElement(Radio, {
    defaultChecked: true
  }), " ", /* @__PURE__ */ createElement(Radio, {
    checked: true
  }), " ", /* @__PURE__ */ createElement(Radio, {
    disabled: true
  }), " ", /* @__PURE__ */ createElement(Radio, {
    checked: true,
    disabled: true
  }), " ", /* @__PURE__ */ createElement(Radio, null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("h4", null, "With Label"), /* @__PURE__ */ createElement(Radio, {
    id: "apple"
  }, "Apple"), " ", /* @__PURE__ */ createElement(Radio, {
    id: "banana"
  }), /* @__PURE__ */ createElement("label", {
    htmlFor: "banana",
    className: "next-radio-label"
  }, "Banana"), " ", /* @__PURE__ */ createElement(Radio, {
    id: "apple2",
    label: "Apple",
    className: "testClassname"
  })), ")");
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const RadioGroup$1 = Radio.Group;
const list = [
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
class ControlApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: "apple",
      value2: "apple",
      value3: ""
    };
    this.onNestChange = this.onNestChange.bind(this);
    this.onSmallChange = this.onSmallChange.bind(this);
    this.onMediumChange = this.onMediumChange.bind(this);
  }
  onSmallChange(value) {
    this.setState({
      value1: value
    });
  }
  onMediumChange(value) {
    this.setState({
      value2: value
    });
  }
  onNestChange(value) {
    this.setState({
      value3: value
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h4", null, "Small size"), /* @__PURE__ */ createElement(RadioGroup$1, {
      dataSource: list,
      shape: "button",
      size: "small",
      value: this.state.value1,
      onChange: this.onSmallChange
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("h4", null, "Medium size (default)"), /* @__PURE__ */ createElement(RadioGroup$1, {
      dataSource: list,
      shape: "button",
      size: "medium",
      value: this.state.value2,
      onChange: this.onMediumChange
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("h4", null, "Large size"), /* @__PURE__ */ createElement(RadioGroup$1, {
      shape: "button",
      size: "large",
      value: this.state.value3,
      onChange: this.onNestChange
    }, /* @__PURE__ */ createElement(Radio, {
      id: "banana",
      value: "banana"
    }, "Banana"), /* @__PURE__ */ createElement(Radio, {
      id: "watermelon",
      value: "watermelon"
    }, "Watermelon"), /* @__PURE__ */ createElement(Radio, {
      id: "peach",
      value: "peach"
    }, "Peach")), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("h4", null, "Disabled and Selected-Disabled status"), /* @__PURE__ */ createElement(RadioGroup$1, {
      shape: "button",
      value: "banana",
      onChange: this.onNestChange
    }, /* @__PURE__ */ createElement(Radio, {
      id: "peach",
      disabled: true,
      value: "peach"
    }, "Peach"), /* @__PURE__ */ createElement(Radio, {
      id: "banana",
      disabled: true,
      value: "banana"
    }, "Banana")));
  }
}
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(ControlApp, null));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const RadioGroup$2 = Radio.Group;
const list$1 = [
  {
    value: "appale",
    label: "Appale"
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
class ControlApp$1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "orange"
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    this.setState({
      value
    });
    console.log("onChange", value);
  }
  onClick(e) {
    console.log("onClick", e);
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, "normal:", " ", /* @__PURE__ */ createElement(RadioGroup$2, {
      dataSource: list$1,
      value: this.state.value,
      onChange: this.onChange
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), "disabled:", " ", /* @__PURE__ */ createElement(RadioGroup$2, {
      disabled: true,
      dataSource: list$1,
      value: this.state.value,
      onChange: this.onChange
    }));
  }
}
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(ControlApp$1, null));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const Shape = {
  NORMAL: "normal",
  BUTTON: "button"
};
const ItemDirection = {
  HORIZON: "hoz",
  VERTICAL: "ver"
};
class RadioGroup$3 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      shape: Shape.NORMAL,
      itemDirection: ItemDirection.HORIZON
    };
    this.onShapeChange = (shape) => {
      this.setState({shape});
    };
    this.onItemDirectionChange = (itemDirection) => {
      this.setState({itemDirection});
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h5", null, "Choose a shape"), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Radio.Group, {
      shape: "button",
      value: this.state.shape,
      onChange: this.onShapeChange
    }, /* @__PURE__ */ createElement(Radio, {
      value: Shape.NORMAL
    }, "Normal"), /* @__PURE__ */ createElement(Radio, {
      value: Shape.BUTTON
    }, "Button"))), /* @__PURE__ */ createElement("h5", null, "Choose an align-type of the item"), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Radio.Group, {
      shape: "button",
      value: this.state.itemDirection,
      onChange: this.onItemDirectionChange
    }, /* @__PURE__ */ createElement(Radio, {
      value: ItemDirection.HORIZON
    }, "Horizon"), /* @__PURE__ */ createElement(Radio, {
      value: ItemDirection.VERTICAL,
      disabled: this.state.shape === Shape.BUTTON
    }, "Vertical"))), /* @__PURE__ */ createElement("div", {
      className: "rendered-container"
    }, /* @__PURE__ */ createElement("h3", null, "Rendered Result"), /* @__PURE__ */ createElement(Radio.Group, {
      shape: this.state.shape,
      itemDirection: this.state.itemDirection
    }, /* @__PURE__ */ createElement(Radio, {
      value: "react"
    }, "React"), /* @__PURE__ */ createElement(Radio, {
      value: "vue"
    }, "Vue"), /* @__PURE__ */ createElement(Radio, {
      value: "angular"
    }, "Angular"))));
  }
}
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement(RadioGroup$3, null));
}
const Style$4 = He.div`
  .rendered-container {
    margin: 32px 0 0;
    padding: 0 24px 24px;
    border: 3px dashed #aaa;
    border-radius: 11px;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const RadioGroup$4 = Radio.Group;
class NestApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "orange"
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    this.setState({
      value
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("label", {
      id: "groupId"
    }, "Choose fruit"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(RadioGroup$4, {
      value: this.state.value,
      onChange: this.onChange,
      "aria-labelledby": "groupId"
    }, /* @__PURE__ */ createElement(Radio, {
      id: "apple",
      value: "apple"
    }, "Apple"), /* @__PURE__ */ createElement(Radio, {
      id: "watermelon",
      value: "watermelon"
    }, "Watermelon"), /* @__PURE__ */ createElement(Radio, {
      id: "orange",
      value: "orange"
    }, "Orange")));
  }
}
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement(NestApp, null));
}
const Style$5 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const RadioGroup$5 = Radio.Group;
const list$2 = [
  {
    value: "apple",
    label: "Apple",
    disabled: false
  },
  {
    value: "pear",
    label: "Pear",
    disabled: true
  },
  {
    value: "orange",
    label: "Orange"
  }
];
const UnControlApp = () => {
  return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(RadioGroup$5, {
    dataSource: list$2,
    defaultValue: "apple"
  }));
};
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement(UnControlApp, null));
}
const Style$6 = He.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const {Row, Col} = Grid;
const RadioGroup$6 = Radio.Group;
class ControlApp$2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "orange",
      other: 0
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    this.setState({
      value
    });
    console.log("onChange", value);
  }
  onClick(e) {
    console.log("onClick", e);
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h4", null, "Grid Layout"), /* @__PURE__ */ createElement(RadioGroup$6, {
      onChange: this.onChange,
      style: {width: "1000px"}
    }, /* @__PURE__ */ createElement(Row, null, /* @__PURE__ */ createElement(Col, {
      span: "8"
    }, /* @__PURE__ */ createElement(Radio, {
      value: "apple1",
      onClick: this.onClick
    }, "Apple")), /* @__PURE__ */ createElement(Col, {
      span: "8"
    }, /* @__PURE__ */ createElement(Radio, {
      value: "pear1",
      onClick: this.onClick
    }, "Pear")), /* @__PURE__ */ createElement(Col, {
      span: "8"
    }, /* @__PURE__ */ createElement(Radio, {
      value: "banana1",
      onClick: this.onClick
    }, "Banana"))), /* @__PURE__ */ createElement(Row, null, /* @__PURE__ */ createElement(Col, {
      span: "8"
    }, /* @__PURE__ */ createElement(Radio, {
      value: "peach",
      onClick: this.onClick
    }, "Peach")), /* @__PURE__ */ createElement(Col, {
      span: "8"
    }, /* @__PURE__ */ createElement(Radio, {
      value: "watermelon",
      onClick: this.onClick
    }, "Watermelon")), /* @__PURE__ */ createElement(Col, {
      span: "8"
    }, /* @__PURE__ */ createElement(Radio, {
      value: "strawberry",
      onClick: this.onClick
    }, "Strawberry"))), /* @__PURE__ */ createElement(Row, null, "Just simple context")));
  }
}
function DemoComponent$7() {
  return /* @__PURE__ */ createElement(Style$7, null, /* @__PURE__ */ createElement(ControlApp$2, null));
}
const Style$7 = He.div``;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
const modules = {};
modules["_accessibility"] = m0;
modules["_basic"] = m1;
modules["_button"] = m2;
modules["_control"] = m3;
modules["_group"] = m4;
modules["_nest"] = m5;
modules["_uncontrol"] = m6;
modules["_useWithGrid"] = m7;
export default modules;
