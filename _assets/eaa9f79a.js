import {c as createElement, C as Component} from "./index.3676e8a2.js";
import "./6f781cf5.js";
import {h as hooks} from "./cf6ed2e0.js";
import "./14d33d40.js";
import {N as NextField} from "./0d3cc551.js";
import {N as NextTimePicker} from "./49563b2e.js";
import {e as exported} from "./3851df00.js";
import {H as He} from "./a805792c.js";
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement(NextTimePicker, {
    onChange: (val) => console.log(val)
  }));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const defaultVal = hooks("12:00:00", "HH:mm:ss", true);
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextTimePicker, {
    defaultValue: defaultVal,
    onChange: (val) => console.log(val)
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextTimePicker, {
    defaultValue: "12:00:00",
    onChange: (val) => console.log(val)
  })));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const disabledHours = [1, 2, 3, 4, 5];
const disabledMinutes = [10, 20, 30, 40, 50];
const disabledSeconds = [10, 20, 30, 40, 50];
const disabledItems = (list) => (index) => {
  return list.indexOf(index) >= 0;
};
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("p", null, "Disable TimePicker"), /* @__PURE__ */ createElement(NextTimePicker, {
    disabled: true
  }), /* @__PURE__ */ createElement("p", null, "Disable Hours/Minutes/Seconds"), /* @__PURE__ */ createElement(NextTimePicker, {
    disabledHours: disabledItems(disabledHours),
    disabledMinutes: disabledItems(disabledMinutes),
    disabledSeconds: disabledItems(disabledSeconds)
  })));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
class Demo extends Component {
  constructor() {
    super(...arguments);
    this.field = new NextField(this);
    this.onClick = () => {
      const value = this.field.getValue("time-picker");
      console.log(value.format("HH:mm:ss"));
    };
  }
  render() {
    const {init} = this.field;
    const props = init("time-picker", {
      rules: [{required: true, message: "Time Required"}],
      initValue: hooks("00:00:00", "HH:mm:ss", true)
    });
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextTimePicker, {
      ...props
    }), " ", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
      onClick: this.onClick
    }, "Print Value in Console"));
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
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextTimePicker, {
    format: "HH"
  }), /* @__PURE__ */ createElement("p", null, "Hide seconds"), /* @__PURE__ */ createElement(NextTimePicker, {
    format: "HH:mm"
  }), /* @__PURE__ */ createElement("p", null, "Hide hours"), /* @__PURE__ */ createElement(NextTimePicker, {
    format: "mm:ss"
  })));
}
const Style$4 = He.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const renderTimeMenuItems = (list) => {
  return list.map(({label, value}) => {
    return {
      value,
      label: value > 9 ? String(value) : `0${value}`
    };
  });
};
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement(NextTimePicker, {
    renderTimeMenuItems
  }));
}
const Style$5 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextTimePicker, {
    size: "large"
  }), "  ", /* @__PURE__ */ createElement(NextTimePicker, null), "  ", /* @__PURE__ */ createElement(NextTimePicker, {
    size: "small"
  })));
}
const Style$6 = He.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
function DemoComponent$7() {
  return /* @__PURE__ */ createElement(Style$7, null, /* @__PURE__ */ createElement(NextTimePicker, {
    onChange: (val) => console.log(val.format("HH:mm:ss")),
    hourStep: 2,
    minuteStep: 5,
    secondStep: 5
  }));
}
const Style$7 = He.div``;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
class ControlledTimePicker extends Component {
  constructor(props, context) {
    super(props, context);
    this.onSelect = (value) => {
      this.setState({value});
      this.props.onChange(value);
    };
    this.state = {
      value: hooks("12:00:00", "HH:mm:ss", true)
    };
  }
  render() {
    return /* @__PURE__ */ createElement(NextTimePicker, {
      value: this.state.value,
      onChange: this.onSelect
    });
  }
}
function DemoComponent$8() {
  return /* @__PURE__ */ createElement(Style$8, null, /* @__PURE__ */ createElement(ControlledTimePicker, {
    onChange: (val) => console.log(val.format("HH:mm:ss"))
  }));
}
const Style$8 = He.div``;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
const modules = {};
modules["_basic"] = m0;
modules["_default-value"] = m1;
modules["_disabled"] = m2;
modules["_field"] = m3;
modules["_format"] = m4;
modules["_render-menu"] = m5;
modules["_size"] = m6;
modules["_step"] = m7;
modules["_value"] = m8;
export default modules;
