import {c as createElement, C as Component, w as NextInput, R as React, L as Checkbox, B as Radio, S as Select} from "./index.e4cec8f0.js";
import "./843ccbc4.js";
import "./c4c06d64.js";
import "./2ccb06a5.js";
import {h as hooks} from "./cf6ed2e0.js";
import "./261233b2.js";
import "./9cbb9b47.js";
import "./0aaed859.js";
import {N as NextDatePicker} from "./613b9899.js";
import {N as NextField} from "./ada95d85.js";
import "./c0d81f9d.js";
import {R as Range} from "./462add25.js";
import {N as NextSwitch} from "./07f026a3.js";
import {e as exported$1} from "./d0cbf4d5.js";
import {N as NextTimePicker} from "./b01b0ea1.js";
import {e as exported} from "./3ba3b71a.js";
import {H as He} from "./ad0376ff.js";
import {c as createStore, a as combineReducers} from "./6054ce7e.js";
import {P as Provider, c as connect} from "./7639f893.js";
class Demo extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      show: true,
      show2: true
    };
    this.field = new NextField(this);
    this.field2 = new NextField(this, {autoUnmount: false});
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, this.state.show ? /* @__PURE__ */ createElement(NextInput, {
      ...this.field.init("name", {initValue: "autoUnmount = true"})
    }) : null, /* @__PURE__ */ createElement(exported, {
      onClick: () => {
        console.log("value auto delete", this.field.getValues());
      },
      style: {marginLeft: 4}
    }, "print"), /* @__PURE__ */ createElement(exported, {
      onClick: () => this.setState({show: false}),
      warning: true,
      style: {marginLeft: 4}
    }, "delete"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), this.state.show2 ? /* @__PURE__ */ createElement(NextInput, {
      ...this.field2.init("name2", {initValue: "autoUnmount = false"})
    }) : null, /* @__PURE__ */ createElement(exported, {
      onClick: () => {
        console.log("value always exist", this.field2.getValues());
      },
      style: {marginLeft: 4}
    }, "print"), /* @__PURE__ */ createElement(exported, {
      onClick: () => this.setState({show2: false}),
      warning: true,
      style: {marginLeft: 4}
    }, "delete"));
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
class App extends Component {
  constructor() {
    super(...arguments);
    this.field = new NextField(this);
  }
  onGetValue() {
    console.log(this.field.getValue("input"));
  }
  render() {
    const {init, setValue, reset} = this.field;
    return /* @__PURE__ */ createElement("div", {
      className: "demo"
    }, /* @__PURE__ */ createElement(NextInput, {
      ...init("input", {initValue: "test"})
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: this.onGetValue.bind(this)
    }, "getValue"), /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: () => setValue("input", "set me by click")
    }, "setValue"), /* @__PURE__ */ createElement(exported, {
      onClick: () => reset()
    }, "reset"));
  }
}
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(App, null));
}
const Style$1 = He.div`
  .demo .next-btn {
    margin-right: 5px;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
class Custom extends Component {
  constructor(props) {
    super(props);
    this.onAdd = () => {
      const value = this.state.value.concat([]);
      value.push("new");
      this.setState({
        value
      });
      this.props.onChange(value);
    };
    this.state = {
      value: typeof props.value === "undefined" ? [] : props.value
    };
  }
  componentWillReceiveProps(nextProps) {
    if ("value" in nextProps) {
      this.setState({
        value: typeof nextProps.value === "undefined" ? [] : nextProps.value
      });
    }
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "custom"
    }, this.state.value.map((v, i) => {
      return /* @__PURE__ */ createElement(exported, {
        key: i
      }, v);
    }), /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: this.onAdd.bind(this)
    }, "Add ＋", " "));
  }
}
class App$1 extends Component {
  constructor() {
    super(...arguments);
    this.field = new NextField(this, {
      deepReset: true
    });
  }
  onGetValue() {
    console.log(this.field.getValue("custom"));
  }
  render() {
    const {init, setValue, reset} = this.field;
    return /* @__PURE__ */ createElement("div", {
      className: "demo"
    }, /* @__PURE__ */ createElement(Custom, {
      ...init("custom", {initValue: ["test"]})
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: this.onGetValue.bind(this)
    }, "getValue"), /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: () => setValue("custom", ["test", "setValue"])
    }, "setValue"), /* @__PURE__ */ createElement(exported, {
      onClick: () => reset()
    }, "reset"));
  }
}
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(App$1, null));
}
const Style$2 = He.div`
  .demo .next-btn {
    margin-right: 5px;
  }
  .custom {
    border: 1px dashed;
    padding: 4px;
    display: inline-block;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
class Demo$1 extends Component {
  constructor(props) {
    super(props);
    this.getValues = () => {
      const values = this.field.getValues();
      console.log(values);
    };
    this.input = (value, index) => /* @__PURE__ */ createElement(NextInput, {
      ...this.field.init(`name.${index}.input`)
    });
    this.op = (value, index) => {
      return /* @__PURE__ */ createElement("span", null, /* @__PURE__ */ createElement(exported, {
        type: "primary",
        onClick: this.addItem.bind(this, index + 1)
      }, "add"), /* @__PURE__ */ createElement(exported, {
        warning: true,
        onClick: this.removeItem.bind(this, index),
        style: {marginLeft: 4}
      }, "delete"));
    };
    this.idx = 3;
    this.field = new NextField(this, {
      parseName: true,
      values: {
        name: [0, 1, 2, 3].map((i) => {
          return {id: i, input: i};
        })
      }
    });
  }
  addItem(index) {
    ++this.idx;
    this.field.addArrayValue("name", index, {id: this.idx, input: this.idx});
  }
  removeItem(index) {
    this.field.deleteArrayValue("name", index);
  }
  render() {
    const dataSource = this.field.getValue("name");
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported$1, {
      dataSource
    }, /* @__PURE__ */ createElement(exported$1.Column, {
      title: "id",
      dataIndex: "id"
    }), /* @__PURE__ */ createElement(exported$1.Column, {
      title: "input",
      dataIndex: "id",
      cell: this.input
    }), /* @__PURE__ */ createElement(exported$1.Column, {
      title: "operation",
      cell: this.op,
      width: 150
    })), /* @__PURE__ */ createElement("pre", {
      style: {marginTop: 8}
    }, JSON.stringify(dataSource, null, 2)));
  }
}
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(Demo$1, null));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
function App$2() {
  const field = NextField.useField();
  const {init, setValue, reset, getError} = field;
  function onGetValue() {
    console.log(field.getValue("input"));
  }
  function onSetValue() {
    field.setValue("input", "xyz");
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "demo"
  }, /* @__PURE__ */ React.createElement(NextInput, {
    ...init("input", {
      initValue: "test",
      rules: [
        {
          required: true,
          pattern: /hello/,
          message: "must be hello"
        }
      ]
    })
  }), /* @__PURE__ */ React.createElement("span", {
    style: {color: "red"}
  }, getError("input")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(exported, {
    onClick: onSetValue
  }, " setValue "), /* @__PURE__ */ React.createElement(exported, {
    onClick: onGetValue
  }, " getValue "), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null));
}
function DemoComponent$4() {
  return /* @__PURE__ */ React.createElement(Style$4, null, /* @__PURE__ */ React.createElement(App$2, null));
}
const Style$4 = He.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const list = [
  {
    value: "apple",
    label: "apple"
  },
  {
    value: "pear",
    label: "pear"
  },
  {
    value: "orange",
    label: "orange"
  }
];
const layout = {
  marginBottom: 10,
  width: 400
};
class App$3 extends Component {
  constructor() {
    super(...arguments);
    this.field = new NextField(this);
  }
  render() {
    const {init, getValue} = this.field;
    return /* @__PURE__ */ createElement("div", {
      className: "demo"
    }, /* @__PURE__ */ createElement("div", {
      style: {marginBottom: 10}
    }, /* @__PURE__ */ createElement(RadioGroup, {
      ...init("radiogroup", {initValue: "a"})
    }, /* @__PURE__ */ createElement(Radio, {
      value: "a"
    }, "A"), /* @__PURE__ */ createElement(Radio, {
      value: "b"
    }, "B"), /* @__PURE__ */ createElement(Radio, {
      value: "c"
    }, "C"), /* @__PURE__ */ createElement(Radio, {
      value: "d"
    }, "D"))), getValue("radiogroup") !== "d" ? /* @__PURE__ */ createElement(Select, {
      ...init("name", {initValue: "lucy"}),
      style: layout
    }, /* @__PURE__ */ createElement(Select.Option, {
      value: "jack"
    }, "jack"), /* @__PURE__ */ createElement(Select.Option, {
      value: "lucy"
    }, "lucy"), /* @__PURE__ */ createElement(Select.Option, {
      value: "disabled",
      disabled: true
    }, "disabled"), /* @__PURE__ */ createElement(Select.Option, {
      value: "hugohua"
    }, "hugohua")) : /* @__PURE__ */ createElement(NextInput, {
      ...init("name", {initValue: "frankqian"})
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Range, {
      style: {...layout, marginTop: 30},
      slider: "double",
      scales: 10,
      marks: 10,
      ...init("range", {initValue: [20, 40]})
    }), /* @__PURE__ */ createElement("div", {
      style: {marginBottom: 10}
    }, /* @__PURE__ */ createElement(CheckboxGroup, {
      dataSource: list,
      ...init("checkboxgroup", {initValue: ["apple"]})
    })), /* @__PURE__ */ createElement("div", {
      style: {marginBottom: 10}
    }, /* @__PURE__ */ createElement(NextDatePicker, {
      ...init("datepicker")
    })), /* @__PURE__ */ createElement("div", {
      style: {marginBottom: 10}
    }, /* @__PURE__ */ createElement(NextDatePicker.RangePicker, {
      ...init("rangepicker")
    })), /* @__PURE__ */ createElement("div", {
      style: {marginBottom: 10}
    }, /* @__PURE__ */ createElement(NextTimePicker, {
      ...init("timepicker")
    })), /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: () => {
        console.log(this.field.getValues());
      }
    }, "getValues"), /* @__PURE__ */ createElement(exported, {
      onClick: () => {
        this.field.setValues({
          name: "hugohua",
          range: [30, 50],
          checkboxgroup: ["orange"],
          radiogroup: "d"
        });
      }
    }, "setValues"), /* @__PURE__ */ createElement(exported, {
      onClick: () => {
        this.field.reset();
      }
    }, "reset"));
  }
}
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement(App$3, null));
}
const Style$5 = He.div`
  .demo .next-btn {
    margin-right: 5px;
  }
`;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
class App$4 extends Component {
  constructor() {
    super(...arguments);
    this.field = new NextField(this);
  }
  render() {
    const init = this.field.init;
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextSwitch, {
      ...init("switch", {
        getValueFormatter: (value) => value ? 1 : 0,
        setValueFormatter: (value) => value === 1
      })
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextDatePicker, {
      ...init("time", {
        getValueFormatter: (value) => value.format("YYYY-MM-DD"),
        setValueFormatter: (value) => hooks(value, "YYYY-MM-DD")
      })
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("pre", {
      style: {marginTop: 8}
    }, JSON.stringify(this.field.getValues(), null, 2)));
  }
}
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement(App$4, null));
}
const Style$6 = He.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
class App$5 extends Component {
  constructor() {
    super(...arguments);
    this.field = new NextField(this, {
      onChange: (name, value) => {
        console.log(this.field.getValues());
        switch (name) {
          case "input":
            this.field.setValue("sync", `change to: ${value}`);
            break;
          case "select":
            this.field.setValue("sync", `${value} is coming`);
            break;
          case "range":
            this.field.setValue("sync", ` (${value.join(",")}) ready`);
            break;
        }
      }
    });
  }
  render() {
    const {init, getValue} = this.field;
    const layout2 = {
      marginBottom: 10,
      width: 400
    };
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "controlled by onChange",
      ...init("input"),
      style: layout2
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
      placeholder: "under control",
      ...init("input"),
      style: layout2
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Select, {
      style: layout2,
      ...init("select", {initValue: "lucy"})
    }, /* @__PURE__ */ createElement(Select.Option, {
      value: "jack"
    }, "jack"), /* @__PURE__ */ createElement(Select.Option, {
      value: "lucy"
    }, "lucy"), /* @__PURE__ */ createElement(Select.Option, {
      value: "disabled",
      disabled: true
    }, "disabled"), /* @__PURE__ */ createElement(Select.Option, {
      value: "hugo"
    }, "hugo")), /* @__PURE__ */ createElement("br", null), getValue("select") !== "hugo" ? /* @__PURE__ */ createElement(Range, {
      style: {...layout2, marginTop: 30},
      slider: "double",
      scales: 10,
      marks: 10,
      ...init("range", {initValue: [20, 40], trigger: "onProcess"})
    }) : null, /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("hr", {
      style: {marginBottom: 10}
    }), /* @__PURE__ */ createElement(NextInput, {
      placeholder: "everyone can control me",
      ...init("sync"),
      style: layout2
    }), /* @__PURE__ */ createElement("br", null));
  }
}
function DemoComponent$7() {
  return /* @__PURE__ */ createElement(Style$7, null, /* @__PURE__ */ createElement(App$5, null));
}
const Style$7 = He.div``;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
function formReducer(state = {email: "frankqian@qq.com"}, action) {
  switch (action.type) {
    case "save_fields":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
class Demo$2 extends Component {
  constructor() {
    super(...arguments);
    this.field = new NextField(this, {
      onChange: (name, value) => {
        console.log("onChange", name, value);
        this.field.setValue("newlen", value.length);
        this.props.dispatch({
          type: "save_fields",
          payload: {
            [name]: value
          }
        });
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    this.field.setValues({
      email: nextProps.email,
      newlen: nextProps.email.length
    });
  }
  setEmail() {
    this.props.dispatch({
      type: "save_fields",
      payload: {
        email: "qq@gmail.com"
      }
    });
  }
  render() {
    const init = this.field.init;
    const newLen = init("newlen", {initValue: this.props.email.length});
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextInput, {
      ...init("email", {initValue: this.props.email}, {
        rules: [
          {required: true, type: "email", message: "at least 5 chars"}
        ]
      })
    }), "now length is:", newLen.value, /* @__PURE__ */ createElement("p", null, "email: ", this.props.email), /* @__PURE__ */ createElement(exported, {
      onClick: this.setEmail.bind(this)
    }, "set"));
  }
}
const ReduxDemo = connect((state) => {
  return {
    email: state.formReducer.email
  };
})(Demo$2);
const store = createStore(combineReducers({
  formReducer
}));
function DemoComponent$8() {
  return /* @__PURE__ */ createElement(Style$8, null, "(", /* @__PURE__ */ createElement(Provider, {
    store
  }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(ReduxDemo, null))), ")");
}
const Style$8 = He.div``;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
class App$6 extends Component {
  constructor() {
    super(...arguments);
    this.field = new NextField(this);
    this.validate = () => {
      console.log(this.field.getErrors());
      this.field.validate((error, values) => {
        alert(JSON.stringify(error));
      });
    };
  }
  render() {
    const {init, getError, setError, setErrors} = this.field;
    return /* @__PURE__ */ createElement("div", {
      className: "demo"
    }, /* @__PURE__ */ createElement(NextInput, {
      ...init("input", {
        rules: [
          {
            required: true,
            pattern: /hello/,
            message: "must be hello"
          }
        ]
      })
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("span", {
      style: {color: "red"}
    }, getError("input")), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
      onClick: () => {
        setError("input", "set error 1");
      }
    }, "setError"), /* @__PURE__ */ createElement(exported, {
      onClick: () => {
        setErrors({input: "set error 2"});
      }
    }, "setErrors"), /* @__PURE__ */ createElement(exported, {
      onClick: () => {
        setErrors({input: ""});
      }
    }, "clear"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
      ...init("input2")
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("span", {
      style: {color: "red"}
    }, getError("input2")), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
      onClick: () => {
        setError("input2", "errors will be removed by onChange and shown on validate");
      }
    }, "setError"), /* @__PURE__ */ createElement(exported, {
      onClick: this.validate
    }, "validate"));
  }
}
function DemoComponent$9() {
  return /* @__PURE__ */ createElement(Style$9, null, /* @__PURE__ */ createElement(App$6, null));
}
const Style$9 = He.div`
  .demo .next-btn {
    margin-right: 5px;
  }
`;
var m9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$9
});
class App$7 extends Component {
  constructor() {
    super(...arguments);
    this.field = new NextField(this, {
      parseName: true,
      values: {
        objWithDefaults: {
          a: 1,
          b: 2
        }
      }
    });
  }
  onGetValue() {
    console.log(this.field.getValues());
  }
  onSetValue() {
    this.field.setValues({
      obj: {
        b: "b",
        c: "c"
      },
      arr: ["first", "second"],
      objWithDefaults: {
        a: 100,
        b: 200
      }
    });
  }
  render() {
    const {init, reset, resetToDefault} = this.field;
    return /* @__PURE__ */ createElement("div", {
      className: "demo"
    }, /* @__PURE__ */ createElement("h3", null, "Object transfer"), "obj.b: ", /* @__PURE__ */ createElement(NextInput, {
      ...init("obj.b", {initValue: "test1"})
    }), "   obj.c: ", /* @__PURE__ */ createElement(NextInput, {
      ...init("obj.c", {initValue: "test2"})
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("h3", null, "Array transfer"), "arr.0: ", /* @__PURE__ */ createElement(NextInput, {
      ...init("arr.0", {initValue: "0"})
    }), "   arr.1:", " ", /* @__PURE__ */ createElement(NextInput, {
      ...init("arr.1", {initValue: "1"})
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("h3", null, "Object with Defaults"), "objWithDefaults.a: ", /* @__PURE__ */ createElement(NextInput, {
      ...init("objWithDefaults.a")
    }), "   objWithDefaults.b: ", /* @__PURE__ */ createElement(NextInput, {
      ...init("objWithDefaults.b")
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), "result:", /* @__PURE__ */ createElement("pre", null, JSON.stringify(this.field.getValues(), null, 2)), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: this.onGetValue.bind(this)
    }, "getValues"), /* @__PURE__ */ createElement(exported, {
      onClick: this.onSetValue.bind(this)
    }, "setValues"), /* @__PURE__ */ createElement(exported, {
      onClick: () => reset()
    }, "reset"), /* @__PURE__ */ createElement(exported, {
      onClick: () => resetToDefault()
    }, "resetToDefault"));
  }
}
function DemoComponent$a() {
  return /* @__PURE__ */ createElement(Style$a, null, /* @__PURE__ */ createElement(App$7, null));
}
const Style$a = He.div`
  .demo .next-btn {
    margin-right: 5px;
  }
`;
var m10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$a
});
const CheckboxGroup$1 = Checkbox.Group;
const list$1 = [
  {
    value: "apple",
    label: "apple"
  },
  {
    value: "pear",
    label: "pear"
  },
  {
    value: "orange",
    label: "orange"
  }
];
class App$8 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      checkboxStatus: true
    };
    this.field = new NextField(this, {scrollToFirstError: -10});
  }
  isChecked(rule, value, callback) {
    if (!value) {
      return callback("consent agreement not checked ");
    } else {
      return callback();
    }
  }
  userName(rule, value, callback) {
    if (value === "frank") {
      setTimeout(() => callback("name existed"), 200);
    } else {
      setTimeout(() => callback(), 200);
    }
  }
  render() {
    const {init, validate, reset} = this.field;
    return /* @__PURE__ */ createElement("div", {
      className: "demo"
    }, /* @__PURE__ */ createElement(NextInput, {
      ...init("input", {
        initValue: "delete all",
        rules: {required: true}
      })
    }), this.field.getError("input") ? /* @__PURE__ */ createElement("span", {
      style: {color: "red"}
    }, this.field.getError("input").join(",")) : "", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
      placeholder: "try onBlur",
      ...init("input1", {
        rules: [
          {
            required: true,
            message: "can not be empty",
            trigger: ["onBlur", "onChange"]
          }
        ]
      })
    }), this.field.getError("input1") ? /* @__PURE__ */ createElement("span", {
      style: {color: "red"}
    }, this.field.getError("input1").join(",")) : "", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput, {
      defaultValue: "",
      placeholder: "try frank",
      ...init("username", {
        rules: [
          {
            validator: this.userName,
            trigger: ["onBlur", "onChange"]
          }
        ]
      })
    }), this.field.getState("username") === "loading" ? "validating..." : "", this.field.getError("username") ? /* @__PURE__ */ createElement("span", {
      style: {color: "red"}
    }, this.field.getError("username").join(",")) : "", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), "agreement:", /* @__PURE__ */ createElement(Checkbox, {
      ...init("checkbox", {
        valueName: "checked",
        rules: [{validator: this.isChecked}]
      })
    }), this.field.getError("checkbox") ? /* @__PURE__ */ createElement("span", {
      style: {color: "red"}
    }, this.field.getError("checkbox").join(",")) : "", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextInput.TextArea, {
      placeholder: ">3 and <10",
      ...init("textarea", {
        rules: [
          {
            required: true,
            minLength: 3,
            maxLength: 10
          }
        ]
      })
    }), this.field.getError("textarea") ? /* @__PURE__ */ createElement("span", {
      style: {color: "red"}
    }, this.field.getError("textarea").join(",")) : "", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), this.state.checkboxStatus ? /* @__PURE__ */ createElement("div", null, "Array validate：", /* @__PURE__ */ createElement(CheckboxGroup$1, {
      dataSource: list$1,
      ...init("checkboxgroup", {
        rules: [
          {
            required: true,
            type: "array",
            message: "choose one please"
          }
        ]
      }),
      style: {marginBottom: 10}
    }), this.field.getError("checkboxgroup") ? /* @__PURE__ */ createElement("span", {
      style: {color: "red"}
    }, this.field.getError("checkboxgroup").join(",")) : "") : null, /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: () => {
        validate((errors, values) => {
          console.log(errors, values);
        });
      }
    }, "validate"), /* @__PURE__ */ createElement(exported, {
      onClick: () => {
        reset();
      }
    }, "reset"), /* @__PURE__ */ createElement(exported, {
      onClick: () => {
        if (this.state.checkboxStatus) {
          this.setState({checkboxStatus: false});
          this.field.remove("checkboxgroup");
        } else {
          this.setState({checkboxStatus: true});
        }
      }
    }, this.state.checkboxStatus ? "delete" : "restore"));
  }
}
function DemoComponent$b() {
  return /* @__PURE__ */ createElement(Style$b, null, /* @__PURE__ */ createElement(App$8, null));
}
const Style$b = He.div`
  .demo .next-btn {
    margin-right: 5px;
  }
`;
var m11 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$b
});
const CheckboxGroup$2 = Checkbox.Group;
class App$9 extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      checkboxStatus: true
    };
    this.field = new NextField(this, {scrollToFirstError: -10});
  }
  isChecked(rule, value) {
    if (!value) {
      return Promise.reject("consent agreement not checked ");
    } else {
      return Promise.resolve(null);
    }
  }
  userName(rule, value) {
    if (value === "frank") {
      return new Promise((resolve, reject) => {
        setTimeout(() => reject("name existed"), 200);
      });
    } else {
      return new Promise((resolve) => {
        setTimeout(() => resolve(null), 200);
      });
    }
  }
  render() {
    const init = this.field.init;
    return /* @__PURE__ */ React.createElement("div", {
      className: "demo"
    }, /* @__PURE__ */ React.createElement(NextInput, {
      defaultValue: "",
      placeholder: "try frank",
      ...init("username", {
        rules: [
          {
            validator: this.userName,
            trigger: ["onBlur", "onChange"]
          }
        ]
      })
    }), this.field.getState("username") === "loading" ? "validating..." : "", this.field.getError("username") ? /* @__PURE__ */ React.createElement("span", {
      style: {color: "red"}
    }, this.field.getError("username").join(",")) : "", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "agreement:", /* @__PURE__ */ React.createElement(Checkbox, {
      ...init("checkbox", {
        valueName: "checked",
        rules: [{validator: this.isChecked}]
      })
    }), this.field.getError("checkbox") ? /* @__PURE__ */ React.createElement("span", {
      style: {color: "red"}
    }, this.field.getError("checkbox").join(",")) : "", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(exported, {
      type: "primary",
      onClick: () => {
        this.field.validatePromise().then(({errors, values}) => {
          console.log(errors, values);
        });
      }
    }, "validate"), /* @__PURE__ */ React.createElement(exported, {
      onClick: () => {
        this.field.reset();
      }
    }, "reset"));
  }
}
function DemoComponent$c() {
  return /* @__PURE__ */ React.createElement(Style$c, null, /* @__PURE__ */ React.createElement(App$9, null));
}
const Style$c = He.div`
  .demo .next-btn {
    margin-right: 5px;
  }
`;
var m12 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$c
});
class App$a extends Component {
  constructor() {
    super(...arguments);
    this.field = new NextField(this);
  }
  render() {
    const init = this.field.init;
    return /* @__PURE__ */ createElement("div", {
      className: "demo"
    }, /* @__PURE__ */ createElement(Radio, {
      ...init("radio", {initValue: false, valueName: "checked"})
    }, " ", "checked"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Checkbox, {
      ...init("checkbox", {valueName: "checked", initValue: true})
    }, "defaultChecked"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextSwitch, {
      ...init("switch", {valueName: "checked", initValue: false}),
      style: {marginTop: 10, marginBottom: 10}
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: () => {
        console.log(this.field.getValues());
      }
    }, "getValues"), /* @__PURE__ */ createElement(exported, {
      onClick: () => {
        this.field.setValues({
          radio: true,
          switch: true,
          checkbox: false
        });
      }
    }, " ", "setValues", " "), /* @__PURE__ */ createElement(exported, {
      onClick: () => {
        this.field.reset();
      }
    }, "reset"));
  }
}
function DemoComponent$d() {
  return /* @__PURE__ */ createElement(Style$d, null, /* @__PURE__ */ createElement(App$a, null));
}
const Style$d = He.div`
  .demo .next-btn {
    margin-right: 5px;
  }
`;
var m13 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$d
});
const modules = {};
modules["_autounmout"] = m0;
modules["_basic"] = m1;
modules["_custom"] = m2;
modules["_dynamic"] = m3;
modules["_hooks"] = m4;
modules["_mix"] = m5;
modules["_normalize"] = m6;
modules["_onchange"] = m7;
modules["_redux"] = m8;
modules["_seterror"] = m9;
modules["_topath"] = m10;
modules["_validator"] = m11;
modules["_validatorPromise"] = m12;
modules["_valuename"] = m13;
export default modules;
