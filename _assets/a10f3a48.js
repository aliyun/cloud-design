import {c as createElement, C as Component} from "./index.c7468b78.js";
import {H as He} from "./676b8be8.js";
import "./3bb20657.js";
import "./0a77e8e6.js";
import {N as NextIcon} from "./75ec77ea.js";
import "./5576421d.js";
import "./b5ac2a31.js";
import "./2e1eb8ae.js";
import {G as Grid} from "./93628a1f.js";
import {N as NextNumberPicker} from "./d8202697.js";
import {R as Range} from "./431353a9.js";
const style = {
  marginBottom: "15px"
};
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", {
    style: {width: "400px", margin: "50px"}
  }, /* @__PURE__ */ createElement("h4", null, "single slider - from left to right"), /* @__PURE__ */ createElement(Range, {
    defaultValue: 30,
    style,
    hasTip: false
  }), /* @__PURE__ */ createElement("h4", null, "single slider - from right to left"), /* @__PURE__ */ createElement(Range, {
    defaultValue: 30,
    style,
    reverse: true,
    hasTip: false
  })));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const style$1 = {
  marginBottom: "15px"
};
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement("div", {
    style: {width: "400px", margin: "50px"}
  }, /* @__PURE__ */ createElement("h4", null, "single slider - from left to right"), /* @__PURE__ */ createElement(Range, {
    defaultValue: 30,
    style: style$1,
    hasTip: false
  }), /* @__PURE__ */ createElement("h4", null, "single slider - from right to left"), /* @__PURE__ */ createElement(Range, {
    defaultValue: 30,
    style: style$1,
    reverse: true,
    hasTip: false
  }), /* @__PURE__ */ createElement("h4", null, "double slider - from outside to inside"), /* @__PURE__ */ createElement(Range, {
    slider: "double",
    defaultValue: [20, 40],
    style: style$1
  }), /* @__PURE__ */ createElement("h4", null, "double slider - from inside to outside"), /* @__PURE__ */ createElement(Range, {
    slider: "double",
    defaultValue: [20, 40],
    style: style$1,
    reverse: true
  }), /* @__PURE__ */ createElement("h4", null, "Disabled"), /* @__PURE__ */ createElement(Range, {
    defaultValue: 30,
    disabled: true,
    style: style$1
  }), /* @__PURE__ */ createElement("h4", null, "Disabled"), /* @__PURE__ */ createElement(Range, {
    slider: "double",
    defaultValue: [20, 40],
    disabled: true,
    style: style$1
  }), /* @__PURE__ */ createElement("h4", null, "tooltipVisible disabled"), /* @__PURE__ */ createElement(Range, {
    disabled: true,
    tooltipVisible: true,
    defaultValue: 60,
    style: style$1
  }), /* @__PURE__ */ createElement("h4", null, "tooltipVisible"), /* @__PURE__ */ createElement(Range, {
    tooltipVisible: true,
    defaultValue: 60,
    style: style$1
  }), /* @__PURE__ */ createElement("h4", null, "tooltipVisible disabled"), /* @__PURE__ */ createElement(Range, {
    disabled: true,
    tooltipVisible: true,
    slider: "double",
    defaultValue: [57, 77],
    style: style$1
  }), /* @__PURE__ */ createElement("h4", null, "tooltipVisible"), /* @__PURE__ */ createElement(Range, {
    tooltipVisible: true,
    slider: "double",
    defaultValue: [57, 77],
    style: style$1
  })));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 128,
      value2: 300,
      doubleValue: [200, 300]
    };
  }
  onChange(value) {
    console.log("onChange value:", value);
    this.setState({value});
  }
  onProcess(value) {
    console.log("onProcess: ", value);
  }
  onChangeDouble(doubleValue) {
    console.log("onChange doubleValue:", doubleValue);
    this.setState({doubleValue});
  }
  onProcessDouble(doubleValue) {
    console.log("onProcess: ", doubleValue);
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      style: {width: "400px", margin: "50px"}
    }, /* @__PURE__ */ createElement("p", null, "range 0 ~ 1024"), /* @__PURE__ */ createElement("div", {
      style: {width: "400px", marginTop: "50px"}
    }, /* @__PURE__ */ createElement(Range, {
      value: this.state.value,
      onChange: this.onChange.bind(this),
      onProcess: this.onProcess.bind(this),
      min: 0,
      max: 1024,
      marks: [0, 1024]
    })), /* @__PURE__ */ createElement("p", null, "with value and without onChange"), /* @__PURE__ */ createElement("div", {
      style: {width: "400px", marginTop: "50px"}
    }, /* @__PURE__ */ createElement(Range, {
      value: this.state.value2,
      onProcess: this.onProcess.bind(this),
      min: 0,
      max: 1024,
      marks: [0, 1024]
    })), /* @__PURE__ */ createElement("p", null, "double slider controlled"), /* @__PURE__ */ createElement("div", {
      style: {width: "400px", marginTop: "50px"}
    }, /* @__PURE__ */ createElement(Range, {
      slider: "double",
      value: this.state.doubleValue,
      onChange: this.onChangeDouble.bind(this),
      onProcess: this.onProcessDouble.bind(this),
      min: 0,
      max: 1024,
      marks: [0, 1024]
    })));
  }
}
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(App, null));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const {Row, Col} = Grid;
class Demo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      valueInt: 3,
      valueDec: 0.05,
      valueIcon: 1,
      preIconClass: "",
      afterIconClass: ""
    };
  }
  onChangeInt(value) {
    console.log(value);
    this.setState(Object.assign({}, this.state, {
      valueInt: value
    }));
  }
  onChangeDec(value) {
    this.setState(Object.assign({}, this.state, {
      valueDec: value
    }));
  }
  onIconRangeProcess(value) {
    const mid = 50;
    this.setState(Object.assign({}, this.state, {
      valueIcon: value,
      preIconClass: value < mid ? "myicon-highlight" : "",
      afterIconClass: value >= mid ? "myicon-highlight" : ""
    }));
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      style: {width: "400px", margin: "50px"}
    }, /* @__PURE__ */ createElement("h2", null, "Used with numberPicker"), /* @__PURE__ */ createElement(Row, null, /* @__PURE__ */ createElement(Col, {
      span: "12",
      style: {marginTop: "10px"}
    }, /* @__PURE__ */ createElement(Range, {
      value: this.state.valueInt,
      min: 0,
      max: 20,
      step: 1,
      onChange: this.onChangeInt.bind(this)
    })), /* @__PURE__ */ createElement(Col, {
      span: "12"
    }, /* @__PURE__ */ createElement(NextNumberPicker, {
      value: this.state.valueInt,
      min: 0,
      max: 1024,
      step: 1,
      onChange: this.onChangeInt.bind(this)
    }))), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Row, null, /* @__PURE__ */ createElement(Col, {
      span: "12",
      style: {marginTop: "10px"}
    }, /* @__PURE__ */ createElement(Range, {
      value: this.state.valueDec,
      min: 0,
      max: 1,
      step: 0.01,
      onChange: this.onChangeDec.bind(this)
    })), /* @__PURE__ */ createElement(Col, {
      span: "12"
    }, /* @__PURE__ */ createElement(NextNumberPicker, {
      value: this.state.valueDec,
      min: 0,
      max: 1,
      step: 0.01,
      onChange: this.onChangeDec.bind(this)
    }))), /* @__PURE__ */ createElement("h2", null, "Used with Icon"), /* @__PURE__ */ createElement("div", {
      className: "iconWrapper"
    }, /* @__PURE__ */ createElement(NextIcon, {
      className: `myicon ${this.state.preIconClass}`,
      type: "cry"
    }), /* @__PURE__ */ createElement(Range, {
      min: 1,
      max: 100,
      onChange: this.onIconRangeProcess.bind(this),
      value: this.state.valueIcon
    }), /* @__PURE__ */ createElement(NextIcon, {
      className: `myicon ${this.state.afterIconClass}`,
      type: "smile"
    })));
  }
}
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(Demo, null));
}
const Style$3 = He.div`
  .iconWrapper {
    position: relative;
    padding: 0px 40px;
  }

  .iconWrapper .myicon {
    position: absolute;
    top: -3px;
    width: 16px;
    height: 16px;
    line-height: 1;
    font-size: 16px;
    color: #ccc;
  }

  .iconWrapper .myicon:first-child {
    left: 0;
  }

  .iconWrapper .myicon:last-child {
    right: 0;
  }

  .myicon.myicon-highlight {
    color: #666;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const style$2 = {
  marginBottom: "15px"
};
const styleX3 = {
  marginBottom: "45px"
};
class App$1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [10, 300]
    };
  }
  onChange(value) {
    console.log("onChange value:", value);
    this.setState({value});
  }
  onProcess(value) {
    console.log("onProcess: ", value);
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      style: {width: "400px", margin: "50px"}
    }, /* @__PURE__ */ createElement("h4", null, "fixedWidth basic"), /* @__PURE__ */ createElement(Range, {
      fixedWidth: true,
      defaultValue: [20, 40],
      style: style$2
    }), /* @__PURE__ */ createElement("h4", null, "fixedWidth basic with tooltipVisible"), /* @__PURE__ */ createElement(Range, {
      tooltipVisible: true,
      fixedWidth: true,
      defaultValue: [70, 90],
      style: styleX3
    }), /* @__PURE__ */ createElement(Range, {
      disabled: true,
      tooltipVisible: true,
      fixedWidth: true,
      defaultValue: [70, 90],
      style: style$2
    }), /* @__PURE__ */ createElement("h4", null, "fixedWidth with marks"), /* @__PURE__ */ createElement(Range, {
      fixedWidth: true,
      step: 10,
      defaultValue: [20, 40],
      scales: 10,
      marks: 10,
      style: styleX3
    }), /* @__PURE__ */ createElement(Range, {
      fixedWidth: true,
      step: 2,
      defaultValue: [60, 80],
      scales: [0, 100],
      marks: [0, 30, 100],
      style: style$2,
      marksPosition: "below"
    }), /* @__PURE__ */ createElement("h4", null, "fixedWidth with 0.01 step"), /* @__PURE__ */ createElement(Range, {
      fixedWidth: true,
      defaultValue: [0.6, 0.7],
      min: 0.5,
      max: 1,
      step: 0.01
    }), /* @__PURE__ */ createElement("div", {
      style: {width: "400px", marginTop: "50px"}
    }, /* @__PURE__ */ createElement("p", null, "range 0 ~ 1024"), /* @__PURE__ */ createElement(Range, {
      fixedWidth: true,
      value: this.state.value,
      onChange: this.onChange.bind(this),
      onProcess: this.onProcess.bind(this),
      min: 0,
      max: 1024,
      marks: [0, 1024]
    })));
  }
}
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement(App$1, null));
}
const Style$4 = He.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const style$3 = {
  marginBottom: "20px",
  marginTop: "20px"
};
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement("div", {
    style: {width: "400px", margin: "50px"}
  }, /* @__PURE__ */ createElement("p", null, "With minimal and maximal value"), /* @__PURE__ */ createElement(Range, {
    defaultValue: 0,
    marks: [0, 100],
    style: style$3
  }), /* @__PURE__ */ createElement(Range, {
    slider: "double",
    defaultValue: [20, 40],
    scales: [0, 100],
    marks: [0, 100],
    style: style$3
  }), /* @__PURE__ */ createElement(Range, {
    defaultValue: 30,
    style: style$3
  }), /* @__PURE__ */ createElement("p", null, "Below"), /* @__PURE__ */ createElement(Range, {
    defaultValue: 0,
    marks: [0, 100],
    style: style$3,
    marksPosition: "below"
  }), /* @__PURE__ */ createElement(Range, {
    slider: "double",
    defaultValue: [20, 40],
    scales: [0, 100],
    marks: [0, 100],
    style: style$3,
    marksPosition: "below"
  }), /* @__PURE__ */ createElement(Range, {
    defaultValue: 30,
    scales: [0, 100],
    marks: [0, 100],
    style: style$3,
    marksPosition: "below"
  }), /* @__PURE__ */ createElement("p", null, "Equal division"), /* @__PURE__ */ createElement(Range, {
    defaultValue: 30,
    marks: 5,
    style: style$3
  }), /* @__PURE__ */ createElement(Range, {
    slider: "double",
    defaultValue: [20, 40],
    scales: 10,
    marks: 10,
    style: style$3
  }), /* @__PURE__ */ createElement(Range, {
    disabled: true,
    slider: "double",
    defaultValue: [20, 40],
    scales: 10,
    marks: 10,
    style: style$3
  }), /* @__PURE__ */ createElement("p", null, "Free"), /* @__PURE__ */ createElement(Range, {
    defaultValue: 30,
    marks: [0, 26, 37, 100],
    style: style$3
  }), /* @__PURE__ */ createElement(Range, {
    slider: "double",
    defaultValue: [20, 40],
    marks: [0, 26, 37, 100],
    style: style$3,
    hasTip: false
  }), /* @__PURE__ */ createElement(Range, {
    defaultValue: 30,
    marks: {0: "0°C", 26: "26°C", 37: "37°C", 100: "100°C"},
    style: style$3
  })));
}
const Style$5 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const style$4 = {
  marginBottom: "40px",
  marginTop: "40px"
};
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement("div", {
    style: {width: "400px", margin: "50px"}
  }, /* @__PURE__ */ createElement("p", null, "Range 0 ~ 1024"), /* @__PURE__ */ createElement(Range, {
    defaultValue: 128,
    min: 0,
    max: 1024,
    marks: [0, 1024],
    style: style$4
  }), /* @__PURE__ */ createElement("p", null, "Range 0 ~ 1024，step 128"), /* @__PURE__ */ createElement(Range, {
    defaultValue: 512,
    min: 0,
    max: 1024,
    step: 128,
    marks: [0, 1024],
    style: style$4
  })));
}
const Style$6 = He.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const style$5 = {
  marginBottom: "15px"
};
function DemoComponent$7() {
  return /* @__PURE__ */ createElement(Style$7, null, /* @__PURE__ */ createElement("div", {
    style: {width: "400px", margin: "50px"}
  }, /* @__PURE__ */ createElement(Range, {
    defaultValue: 30,
    style: style$5,
    hasTip: false
  }), /* @__PURE__ */ createElement(Range, {
    defaultValue: 30,
    style: style$5,
    reverse: true,
    hasTip: false
  }), /* @__PURE__ */ createElement(Range, {
    slider: "double",
    defaultValue: [20, 40],
    style: style$5
  }), /* @__PURE__ */ createElement(Range, {
    slider: "double",
    defaultValue: [20, 40],
    style: style$5,
    reverse: true
  }), /* @__PURE__ */ createElement(Range, {
    defaultValue: 30,
    disabled: true,
    style: style$5
  }), /* @__PURE__ */ createElement(Range, {
    defaultValue: 30,
    disabled: true,
    style: style$5,
    reverse: true
  }), /* @__PURE__ */ createElement(Range, {
    slider: "double",
    defaultValue: [20, 40],
    disabled: true,
    style: style$5
  }), /* @__PURE__ */ createElement(Range, {
    slider: "double",
    defaultValue: [20, 40],
    disabled: true,
    style: style$5,
    reverse: true
  })));
}
const Style$7 = He.div``;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
class App$2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 128
    };
  }
  onChange(value) {
    console.log("onChange value:", value);
  }
  onProcess(value) {
    console.log("onProcess");
    this.setState({value});
  }
  formatter(value) {
    return `$${value}`;
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      style: {width: "400px", margin: "50px"}
    }, /* @__PURE__ */ createElement("p", null, "Range 0 ~ 1024"), /* @__PURE__ */ createElement("div", {
      style: {width: "400px", marginTop: "50px"}
    }, /* @__PURE__ */ createElement(Range, {
      defaultValue: 256,
      tipRender: this.formatter.bind(this),
      value: this.state.value,
      onChange: this.onChange.bind(this),
      onProcess: this.onProcess.bind(this),
      min: 0,
      max: 1024,
      marks: [0, 1024]
    })));
  }
}
function DemoComponent$8() {
  return /* @__PURE__ */ createElement(Style$8, null, /* @__PURE__ */ createElement(App$2, null));
}
const Style$8 = He.div``;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
const modules = {};
modules["_accessibility"] = m0;
modules["_basic"] = m1;
modules["_change"] = m2;
modules["_control"] = m3;
modules["_fixedWidth"] = m4;
modules["_marks"] = m5;
modules["_range"] = m6;
modules["_reverse"] = m7;
modules["_tipRender"] = m8;
export default modules;
