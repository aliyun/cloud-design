import {c as createElement, D as Radio, S as Select, C as Component, x as NextInput, L as Checkbox, s as NextIcon, N as NextConfigProvider} from "./index.3676e8a2.js";
import {N as NextBalloon} from "./95f1b00c.js";
import "./6f781cf5.js";
import "./cf6ed2e0.js";
import "./0cbf555e.js";
import "./4b170ff6.js";
import "./14d33d40.js";
import {N as NextDatePicker} from "./3462a09e.js";
import {N as NextField} from "./0d3cc551.js";
import "./3fea5293.js";
import "./b15c0dfb.js";
import {N as NextForm} from "./7ddb8bdd.js";
import {G as Grid} from "./c44abf3a.js";
import {N as NextNumberPicker} from "./bb8a0281.js";
import "./3197b2ac.js";
import {R as Range} from "./772a60d4.js";
import {N as NextRating} from "./153fe470.js";
import {N as NextSwitch} from "./469bae7a.js";
import {N as NextTimePicker} from "./49563b2e.js";
import {N as NextUpload} from "./99aeffa5.js";
import "./86f3944d.js";
import {e as exported} from "./3851df00.js";
import {H as He} from "./a805792c.js";
import {c as createStore, a as combineReducers} from "./6054ce7e.js";
import {P as Provider, c as connect} from "./79aeb9c0.js";
const RadioGroup = Radio.Group;
const FormItem = NextForm.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: {
    span: 7
  },
  wrapperCol: {
    span: 16
  }
};
class Demo extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      size: "medium"
    };
    this.submitHandle = (e) => {
      console.log(e);
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextForm, {
      ...formItemLayout,
      size: this.state.size,
      style: {maxWidth: "800px"}
    }, /* @__PURE__ */ createElement(FormItem, {
      required: true,
      label: "username:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Please enter your username",
      id: "a11yUsername",
      name: "a11yUsername",
      "aria-required": "true"
    })), /* @__PURE__ */ createElement(FormItem, {
      required: true,
      label: "Password:"
    }, /* @__PURE__ */ createElement(NextInput, {
      htmlType: "password",
      placeholder: "Please enter your password",
      id: "a11yPassword",
      name: "a11yPassword",
      "aria-required": "true"
    })), /* @__PURE__ */ createElement(FormItem, {
      id: "myDateInput-1",
      required: true,
      label: "Accessible Date 1 (YYYY/MM/DD):",
      requiredMessage: "Please select your date"
    }, /* @__PURE__ */ createElement(NextDatePicker, {
      name: "a11yDate",
      format: "YYYY/MM/DD",
      inputProps: {"aria-required": "true", id: "myDateInput-1"}
    })), /* @__PURE__ */ createElement(FormItem, {
      required: true,
      label: "Accessible Date 2 (YYYY/MM/DD):",
      requiredMessage: "Please select your date"
    }, /* @__PURE__ */ createElement(NextDatePicker, {
      name: "a11yOtherDate",
      format: "YYYY/MM/DD",
      dateInputAriaLabel: "Date input format YYYY/MM/DD",
      inputProps: {
        "aria-required": "true",
        "aria-label": "Accessible Date 2"
      }
    })), /* @__PURE__ */ createElement(FormItem, {
      label: "Switch:"
    }, /* @__PURE__ */ createElement(NextSwitch, {
      name: "a11ySwitch",
      "aria-label": "Accessible Switch",
      defaultChecked: true
    })), /* @__PURE__ */ createElement(FormItem, {
      required: true,
      label: "gender:",
      requiredMessage: "Please select your gender"
    }, /* @__PURE__ */ createElement(RadioGroup, {
      name: "a11ySex"
    }, /* @__PURE__ */ createElement(Radio, {
      value: "male",
      "aria-required": "true"
    }, "Male"), /* @__PURE__ */ createElement(Radio, {
      value: "female",
      "aria-required": "true"
    }, "Female"))), /* @__PURE__ */ createElement(FormItem, {
      label: "Language:"
    }, /* @__PURE__ */ createElement(Checkbox.Group, {
      name: "a11yLangs",
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
    }, "other"))), /* @__PURE__ */ createElement(FormItem, {
      label: "upload:"
    }, /* @__PURE__ */ createElement(NextUpload.Card, {
      listType: "card",
      action: "https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload",
      accept: "image/png, image/jpg, image/jpeg, image/gif, image/bmp",
      defaultValue: [],
      limit: 2,
      name: "a11yUpload"
    })), /* @__PURE__ */ createElement(FormItem, {
      label: "Note:"
    }, /* @__PURE__ */ createElement(NextInput.TextArea, {
      placeholder: "description",
      name: "a11yRemark"
    })), /* @__PURE__ */ createElement(FormItem, {
      wrapperCol: {offset: 5}
    }, /* @__PURE__ */ createElement(NextForm.Submit, {
      validate: true,
      type: "primary",
      onClick: this.submitHandle,
      style: {marginRight: 7}
    }, "Submit"), /* @__PURE__ */ createElement(NextForm.Reset, {
      style: {marginLeft: 130}
    }, "Reset"))));
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
const FormItem$1 = NextForm.Item;
const formItemLayout$1 = {
  labelCol: {
    fixedSpan: 10
  },
  wrapperCol: {
    span: 14
  }
};
class Demo$1 extends Component {
  constructor() {
    super(...arguments);
    this.handleSubmit = (values) => {
      console.log("Get form value:", values);
    };
  }
  render() {
    return /* @__PURE__ */ createElement(NextForm, {
      style: {width: "60%"},
      ...formItemLayout$1
    }, /* @__PURE__ */ createElement(FormItem$1, {
      label: "baseUsername:"
    }, /* @__PURE__ */ createElement("p", null, "Fixed Name")), /* @__PURE__ */ createElement(FormItem$1, {
      label: "password:"
    }, /* @__PURE__ */ createElement(NextInput, {
      htmlType: "password",
      name: "basePass",
      placeholder: "Please Enter Password"
    })), /* @__PURE__ */ createElement(FormItem$1, {
      label: "Note:",
      help: "something"
    }, /* @__PURE__ */ createElement(NextInput.TextArea, {
      placeholder: "something",
      name: "baseRemark"
    })), /* @__PURE__ */ createElement(FormItem$1, {
      label: "Agreement:"
    }, /* @__PURE__ */ createElement(Checkbox, {
      name: "baseAgreement",
      defaultChecked: true
    }, "Agree")), /* @__PURE__ */ createElement(FormItem$1, {
      label: " "
    }, /* @__PURE__ */ createElement(NextForm.Submit, {
      onClick: this.handleSubmit
    }, "Confirm")));
  }
}
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(Demo$1, null));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const FormItem$2 = NextForm.Item;
const {Row, Col} = Grid;
const style = {
  padding: "20px",
  background: "#F7F8FA",
  margin: "20px"
};
const formItemLayout$2 = {
  labelCol: {fixedSpan: 4}
};
const label = /* @__PURE__ */ createElement("span", null, "name：", /* @__PURE__ */ createElement(NextBalloon, {
  type: "primary",
  trigger: /* @__PURE__ */ createElement(NextIcon, {
    type: "prompt",
    size: "small"
  }),
  closable: false
}, "blablablablablablablabla"));
class Demo$2 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      labelAlign: "top"
    };
    this.handleChange = (v) => {
      this.setState({
        labelAlign: v ? "left" : "top"
      });
    };
  }
  render() {
    const labelAlign = this.state.labelAlign;
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "Label Position"), /* @__PURE__ */ createElement(NextSwitch, {
      checkedChildren: "left",
      unCheckedChildren: "top",
      checked: this.state.labelAlign === "left",
      onChange: this.handleChange
    }), /* @__PURE__ */ createElement(NextForm, {
      style
    }, /* @__PURE__ */ createElement(Row, {
      gutter: "4"
    }, /* @__PURE__ */ createElement(Col, null, /* @__PURE__ */ createElement(FormItem$2, {
      ...formItemLayout$2,
      labelAlign,
      label,
      required: true
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    })), /* @__PURE__ */ createElement(FormItem$2, {
      ...formItemLayout$2,
      labelAlign,
      label: "Long search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    })), /* @__PURE__ */ createElement(FormItem$2, {
      ...formItemLayout$2,
      labelAlign,
      label: "Search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    }))), /* @__PURE__ */ createElement(Col, null, /* @__PURE__ */ createElement(FormItem$2, {
      ...formItemLayout$2,
      labelAlign,
      label: "Search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    })), /* @__PURE__ */ createElement(FormItem$2, {
      ...formItemLayout$2,
      labelAlign,
      label: "Long search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    })), /* @__PURE__ */ createElement(FormItem$2, {
      ...formItemLayout$2,
      labelAlign,
      label: "Search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    }))), /* @__PURE__ */ createElement(Col, null, /* @__PURE__ */ createElement(FormItem$2, {
      ...formItemLayout$2,
      labelAlign,
      label: "Search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    })), /* @__PURE__ */ createElement(FormItem$2, {
      ...formItemLayout$2,
      labelAlign,
      label: "Long search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    })), /* @__PURE__ */ createElement(FormItem$2, {
      ...formItemLayout$2,
      labelAlign,
      label: "Search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    })))), /* @__PURE__ */ createElement(Row, null, /* @__PURE__ */ createElement(Col, {
      style: {textAlign: "right"}
    }, /* @__PURE__ */ createElement(exported, {
      type: "primary",
      style: {marginRight: "5px"}
    }, "Search"), /* @__PURE__ */ createElement(exported, null, "Clear All")))), /* @__PURE__ */ createElement(NextForm, {
      style
    }, /* @__PURE__ */ createElement(Row, {
      gutter: "4"
    }, /* @__PURE__ */ createElement(Col, null, /* @__PURE__ */ createElement(FormItem$2, {
      ...formItemLayout$2,
      labelAlign,
      label,
      required: true
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    }))), /* @__PURE__ */ createElement(Col, null, /* @__PURE__ */ createElement(FormItem$2, {
      ...formItemLayout$2,
      labelAlign,
      label: "Long search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    }))), /* @__PURE__ */ createElement(Col, null, /* @__PURE__ */ createElement(FormItem$2, {
      ...formItemLayout$2,
      labelAlign,
      label: "Search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    }))), /* @__PURE__ */ createElement(Col, null, /* @__PURE__ */ createElement(FormItem$2, {
      ...formItemLayout$2,
      labelAlign,
      label: "Search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    }))), /* @__PURE__ */ createElement(Col, null, /* @__PURE__ */ createElement(FormItem$2, {
      ...formItemLayout$2,
      labelAlign,
      label: "Search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    })))), /* @__PURE__ */ createElement(Row, null, /* @__PURE__ */ createElement(Col, {
      style: {textAlign: "right"}
    }, /* @__PURE__ */ createElement(exported, {
      type: "primary",
      style: {marginRight: "5px"}
    }, "Search"), /* @__PURE__ */ createElement(exported, null, "Clear All")))));
  }
}
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(Demo$2, null));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const FormItem$3 = NextForm.Item;
const RadioGroup$1 = Radio.Group;
const formItemLayout$3 = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
};
class BasicDemo extends Component {
  constructor() {
    super(...arguments);
    this.field = new NextField(this);
    this.validate = () => {
      this.field.validate(["sex"]);
    };
  }
  userExists(rule, value) {
    return new Promise((resolve, reject) => {
      if (!value) {
        resolve();
      } else {
        setTimeout(() => {
          if (value === "frank") {
            reject([new Error("Sorry, this username is already occupied.")]);
          } else {
            resolve();
          }
        }, 500);
      }
    });
  }
  checkPass(rule, value, callback) {
    const {validate} = this.field;
    if (value) {
      validate(["rePasswd"]);
    }
    callback();
  }
  checkPass2(rule, value, callback) {
    const {getValue} = this.field;
    if (value && value !== getValue("passwd")) {
      return callback("Inconsistent password input twice!");
    } else {
      return callback();
    }
  }
  render() {
    const {getState, getValue, getError} = this.field;
    return /* @__PURE__ */ createElement(NextForm, {
      ...formItemLayout$3,
      field: this.field
    }, /* @__PURE__ */ createElement(FormItem$3, {
      label: "Username:",
      hasFeedback: true,
      required: true,
      validator: this.userExists.bind(this),
      help: getState("username") === "loading" ? "Checking ..." : getError("username")
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Input frank",
      name: "username"
    }), /* @__PURE__ */ createElement("p", null, "Hello ", getValue("username"))), /* @__PURE__ */ createElement(FormItem$3, {
      label: "Password:",
      hasFeedback: true,
      required: true,
      requiredMessage: "Please enter password",
      validator: this.checkPass.bind(this)
    }, /* @__PURE__ */ createElement(NextInput, {
      htmlType: "password",
      name: "passwd"
    })), /* @__PURE__ */ createElement(FormItem$3, {
      label: "Check your password:",
      hasFeedback: true,
      required: true,
      requiredMessage: "Enter your password again",
      validator: this.checkPass2.bind(this)
    }, /* @__PURE__ */ createElement(NextInput, {
      htmlType: "password",
      placeholder: "Enter the same password twice",
      name: "rePasswd"
    })), /* @__PURE__ */ createElement(FormItem$3, {
      label: "Gender:",
      hasFeedback: true,
      required: true,
      requiredMessage: "Please select your gender"
    }, /* @__PURE__ */ createElement(RadioGroup$1, {
      name: "sex"
    }, /* @__PURE__ */ createElement(Radio, {
      value: "male"
    }, "Male"), /* @__PURE__ */ createElement(Radio, {
      value: "female"
    }, "Female"))), /* @__PURE__ */ createElement(FormItem$3, {
      wrapperCol: {offset: 6}
    }, /* @__PURE__ */ createElement(exported, {
      onClick: this.validate
    }, "Validate by Field"), /* @__PURE__ */ createElement(NextForm.Submit, {
      validate: true,
      type: "primary",
      onClick: (v, e) => console.log(v, e),
      style: {margin: "0 10px"}
    }, "Submit"), /* @__PURE__ */ createElement(NextForm.Reset, null, "Reset")));
  }
}
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(BasicDemo, null));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const FormItem$4 = NextForm.Item;
function handleSubmit(v) {
  console.log(v);
}
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextForm, {
    inline: true
  }, /* @__PURE__ */ createElement(FormItem$4, {
    label: "Username:"
  }, /* @__PURE__ */ createElement(FormItem$4, null, /* @__PURE__ */ createElement(NextInput, {
    name: "first",
    style: {width: 80},
    placeholder: "first"
  })), /* @__PURE__ */ createElement(FormItem$4, null, /* @__PURE__ */ createElement(NextInput, {
    name: "second",
    style: {width: 80},
    placeholder: "second"
  }))), /* @__PURE__ */ createElement(FormItem$4, {
    label: "Password:",
    required: true,
    hasFeedback: false
  }, /* @__PURE__ */ createElement(NextInput, {
    htmlType: "password",
    name: "inlinePass",
    placeholder: "Please enter your password!"
  })), /* @__PURE__ */ createElement(FormItem$4, {
    label: " "
  }, /* @__PURE__ */ createElement(NextForm.Submit, {
    onClick: handleSubmit
  }, "Submit")))));
}
const Style$4 = He.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const FormItem$5 = NextForm.Item;
const Option$1 = Select.Option;
const formItemLayout$4 = {
  labelCol: {fixedSpan: 4},
  wrapperCol: {span: 20}
};
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextForm, {
    ...formItemLayout$4,
    labelAlign: "inset",
    style: {maxWidth: "500px"}
  }, /* @__PURE__ */ createElement(FormItem$5, {
    label: "User Name:"
  }, /* @__PURE__ */ createElement(NextInput, {
    placeholder: "Please enter your name",
    id: "insetUserName",
    name: "insetUserName"
  })), /* @__PURE__ */ createElement(FormItem$5, {
    label: "Password:",
    validateState: "error"
  }, /* @__PURE__ */ createElement(NextInput, {
    htmlType: "password",
    placeholder: "Please enter your password",
    id: "insetPassword",
    name: "insetPassword"
  })), /* @__PURE__ */ createElement(FormItem$5, {
    label: "Size："
  }, /* @__PURE__ */ createElement(Select, {
    style: {width: "100%"}
  }, /* @__PURE__ */ createElement(Option$1, {
    value: "small"
  }, "small"), /* @__PURE__ */ createElement(Option$1, {
    value: "medium"
  }, "medium"), /* @__PURE__ */ createElement(Option$1, {
    value: "large"
  }, "large")))), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextForm, {
    labelAlign: "inset",
    inline: true
  }, /* @__PURE__ */ createElement(FormItem$5, {
    label: "User Name:"
  }, /* @__PURE__ */ createElement(NextInput, {
    placeholder: "Enter your name",
    id: "insetUserName2",
    name: "insetUserName2"
  })), /* @__PURE__ */ createElement(FormItem$5, {
    label: "Password:",
    validateState: "error",
    help: "Password is required!"
  }, /* @__PURE__ */ createElement(NextInput, {
    htmlType: "password",
    placeholder: "Enter your password",
    id: "insetPassword2",
    name: "insetPassword2"
  })), /* @__PURE__ */ createElement(FormItem$5, {
    label: "Size:"
  }, /* @__PURE__ */ createElement(Select, {
    style: {width: 150}
  }, /* @__PURE__ */ createElement(Option$1, {
    value: "small"
  }, "small"), /* @__PURE__ */ createElement(Option$1, {
    value: "medium"
  }, "medium"), /* @__PURE__ */ createElement(Option$1, {
    value: "large"
  }, "large"))))));
}
const Style$5 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const FormItem$6 = NextForm.Item;
const Option$2 = Select.Option;
const RangePicker = NextDatePicker.RangePicker;
const {Row: Row$1, Col: Col$1} = Grid;
const formItemLayout$5 = {
  labelCol: {span: 6},
  wrapperCol: {span: 14}
};
class Demo$3 extends Component {
  constructor() {
    super(...arguments);
    this.field = new NextField(this);
  }
  handleSubmit(value) {
    console.log("Form values：", value);
  }
  render() {
    const init = this.field.init;
    return /* @__PURE__ */ createElement(NextForm, {
      ...formItemLayout$5,
      field: this.field
    }, /* @__PURE__ */ createElement(FormItem$6, {
      label: "I'm the title："
    }, /* @__PURE__ */ createElement("p", {
      className: "next-form-text-align"
    }, "The quick brown fox jumps over the lazy dog."), /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement("a", {
      href: "#"
    }, "Link"))), /* @__PURE__ */ createElement(FormItem$6, {
      label: "Password:"
    }, /* @__PURE__ */ createElement(NextBalloon, {
      trigger: /* @__PURE__ */ createElement(NextInput, {
        htmlType: "password",
        ...init("pass")
      }),
      align: "r",
      closable: false,
      triggerType: "hover"
    }, "input password")), /* @__PURE__ */ createElement(FormItem$6, {
      label: "NumberPicker:"
    }, /* @__PURE__ */ createElement(NextNumberPicker, {
      min: 1,
      max: 10,
      name: "numberPicker",
      defaultValue: 3
    }), /* @__PURE__ */ createElement("span", null, "Something in here")), /* @__PURE__ */ createElement(FormItem$6, {
      label: "Switch:",
      required: true
    }, /* @__PURE__ */ createElement(NextSwitch, {
      name: "switch",
      defaultChecked: true
    })), /* @__PURE__ */ createElement(FormItem$6, {
      label: "Range:",
      required: true
    }, /* @__PURE__ */ createElement(Range, {
      defaultValue: 30,
      scales: [0, 100],
      marks: [0, 100],
      name: "range"
    })), /* @__PURE__ */ createElement(FormItem$6, {
      label: "Select:",
      required: true
    }, /* @__PURE__ */ createElement(Select, {
      style: {width: 200},
      name: "select"
    }, /* @__PURE__ */ createElement(Option$2, {
      value: "jack"
    }, "jack"), /* @__PURE__ */ createElement(Option$2, {
      value: "lucy"
    }, "lucy"), /* @__PURE__ */ createElement(Option$2, {
      value: "disabled",
      disabled: true
    }, "disabled"), /* @__PURE__ */ createElement(Option$2, {
      value: "hugohua"
    }, "hugohua"))), /* @__PURE__ */ createElement(FormItem$6, {
      label: "DatePicker:",
      labelCol: {span: 6},
      required: true
    }, /* @__PURE__ */ createElement(Row$1, null, /* @__PURE__ */ createElement(FormItem$6, {
      style: {marginRight: 10, marginBottom: 0}
    }, /* @__PURE__ */ createElement(NextDatePicker, {
      name: "startDate"
    })), /* @__PURE__ */ createElement(FormItem$6, {
      style: {marginBottom: 0}
    }, /* @__PURE__ */ createElement(NextDatePicker, {
      name: "endDate"
    })))), /* @__PURE__ */ createElement(FormItem$6, {
      label: "RangePicker:",
      labelCol: {span: 6},
      required: true
    }, /* @__PURE__ */ createElement(RangePicker, {
      name: "rangeDate"
    })), /* @__PURE__ */ createElement(FormItem$6, {
      label: "TimePicker:",
      required: true
    }, /* @__PURE__ */ createElement(NextTimePicker, {
      name: "time"
    })), /* @__PURE__ */ createElement(FormItem$6, {
      label: "Checkbox:"
    }, /* @__PURE__ */ createElement(Checkbox.Group, {
      name: "checkbox"
    }, /* @__PURE__ */ createElement(Checkbox, {
      value: "a"
    }, "option 1 "), /* @__PURE__ */ createElement(Checkbox, {
      value: "b"
    }, "option 2 "), /* @__PURE__ */ createElement(Checkbox, {
      disabled: true,
      value: "c"
    }, "option 3（disabled）"))), /* @__PURE__ */ createElement(FormItem$6, {
      label: "Radio:"
    }, /* @__PURE__ */ createElement(Radio.Group, {
      name: "radio"
    }, /* @__PURE__ */ createElement(Radio, {
      value: "apple"
    }, "apple"), /* @__PURE__ */ createElement(Radio, {
      value: "banana"
    }, "banana"), /* @__PURE__ */ createElement(Radio, {
      disabled: true,
      value: "cherry"
    }, "cherry（disabled）"))), /* @__PURE__ */ createElement(FormItem$6, {
      label: "Logo："
    }, /* @__PURE__ */ createElement(NextUpload, {
      action: "/upload.do",
      listType: "text",
      name: "upload"
    }, /* @__PURE__ */ createElement(exported, {
      type: "primary",
      style: {margin: "0 0 10px"}
    }, "Upload"))), /* @__PURE__ */ createElement(Row$1, {
      style: {marginTop: 24}
    }, /* @__PURE__ */ createElement(Col$1, {
      offset: "6"
    }, /* @__PURE__ */ createElement(NextForm.Submit, {
      type: "primary",
      onClick: this.handleSubmit.bind(this)
    }, "Submit"))));
  }
}
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement(Demo$3, null));
}
const Style$6 = He.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const FormItem$7 = NextForm.Item;
const formItemLayout$6 = {
  labelCol: {
    fixedSpan: 10
  },
  wrapperCol: {
    span: 14
  }
};
class Demo$4 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      device: "desktop"
    };
    this.handleDeviceChange = (device) => {
      this.setState({
        device
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Radio.Group, {
      shape: "button",
      value: this.state.device,
      onChange: this.handleDeviceChange
    }, /* @__PURE__ */ createElement(Radio, {
      value: "desktop"
    }, "desktop"), /* @__PURE__ */ createElement(Radio, {
      value: "phone"
    }, "phone")), /* @__PURE__ */ createElement("hr", null), /* @__PURE__ */ createElement(NextForm, {
      style: {width: "60%"},
      ...formItemLayout$6,
      device: this.state.device
    }, /* @__PURE__ */ createElement(FormItem$7, {
      label: "Username:"
    }, /* @__PURE__ */ createElement("p", null, "Fixed Name")), /* @__PURE__ */ createElement(FormItem$7, {
      label: "password:"
    }, /* @__PURE__ */ createElement(NextInput, {
      htmlType: "password",
      name: "basePass",
      placeholder: "Please Enter Password"
    })), /* @__PURE__ */ createElement(FormItem$7, {
      label: "Note:",
      help: "something"
    }, /* @__PURE__ */ createElement(NextInput.TextArea, {
      placeholder: "something",
      name: "baseRemark"
    })), /* @__PURE__ */ createElement(FormItem$7, {
      label: "Agreement:"
    }, /* @__PURE__ */ createElement(Checkbox, {
      name: "baseAgreement",
      defaultChecked: true
    }, "Agree")), /* @__PURE__ */ createElement(FormItem$7, {
      label: " "
    }, /* @__PURE__ */ createElement(NextForm.Submit, null, "Confirm"))));
  }
}
function DemoComponent$7() {
  return /* @__PURE__ */ createElement(Style$7, null, /* @__PURE__ */ createElement(Demo$4, null));
}
const Style$7 = He.div``;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
const FormItem$8 = NextForm.Item;
const {Row: Row$2, Col: Col$2} = Grid;
const formItemLayout$7 = {
  labelCol: {span: 4},
  wrapperCol: {span: 14}
};
const insetLayout = {
  labelCol: {fixedSpan: 3}
};
function DemoComponent$8() {
  return /* @__PURE__ */ createElement(Style$8, null, /* @__PURE__ */ createElement(NextForm, {
    ...formItemLayout$7
  }, /* @__PURE__ */ createElement(FormItem$8, {
    id: "control-input",
    label: "Input Something："
  }, /* @__PURE__ */ createElement(Row$2, {
    gutter: "4"
  }, /* @__PURE__ */ createElement(Col$2, null, /* @__PURE__ */ createElement(FormItem$8, {
    label: "Nest",
    labelAlign: "inset",
    ...insetLayout,
    required: true,
    requiredTrigger: "onBlur",
    asterisk: false
  }, /* @__PURE__ */ createElement(NextInput, {
    placeholder: "Please enter...",
    name: "firstname"
  }))), /* @__PURE__ */ createElement(Col$2, null, /* @__PURE__ */ createElement(FormItem$8, {
    label: "Nest",
    labelAlign: "inset",
    ...insetLayout,
    required: true,
    asterisk: false
  }, /* @__PURE__ */ createElement(NextInput, {
    placeholder: "need onChange",
    name: "secondname"
  }))))), /* @__PURE__ */ createElement(FormItem$8, {
    label: "Bank Account："
  }, /* @__PURE__ */ createElement(Row$2, {
    gutter: "4"
  }, /* @__PURE__ */ createElement(Col$2, null, /* @__PURE__ */ createElement(FormItem$8, {
    required: true,
    requiredTrigger: "onBlur"
  }, /* @__PURE__ */ createElement(NextInput, {
    name: "A"
  }))), /* @__PURE__ */ createElement(Col$2, null, /* @__PURE__ */ createElement(FormItem$8, {
    required: true,
    requiredTrigger: "onBlur"
  }, /* @__PURE__ */ createElement(NextInput, {
    name: "B"
  }))), /* @__PURE__ */ createElement(Col$2, null, /* @__PURE__ */ createElement(FormItem$8, {
    required: true,
    requiredTrigger: "onBlur"
  }, /* @__PURE__ */ createElement(NextInput, {
    name: "C"
  }))), /* @__PURE__ */ createElement(Col$2, null, /* @__PURE__ */ createElement(FormItem$8, {
    required: true,
    requiredTrigger: "onBlur"
  }, /* @__PURE__ */ createElement(NextInput, {
    name: "D"
  }))))), /* @__PURE__ */ createElement(FormItem$8, {
    label: " "
  }, /* @__PURE__ */ createElement(NextForm.Submit, {
    onClick: (v) => console.log(v)
  }, "Submit"))));
}
const Style$8 = He.div``;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
const FormItem$9 = NextForm.Item;
class Demo$5 extends Component {
  onSubmit(e) {
    e.preventDefault();
    console.log("onsubmit");
  }
  render() {
    return /* @__PURE__ */ createElement(NextForm, {
      onSubmit: this.onSubmit.bind(this)
    }, /* @__PURE__ */ createElement(FormItem$9, null, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter Key can also trigger ‘onSubmit’"
    })), /* @__PURE__ */ createElement(NextForm.Submit, {
      htmlType: "submit"
    }, "submit"));
  }
}
function DemoComponent$9() {
  return /* @__PURE__ */ createElement(Style$9, null, /* @__PURE__ */ createElement(Demo$5, null));
}
const Style$9 = He.div``;
var m9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$9
});
const FormItem$a = NextForm.Item;
const formItemLayout$8 = {
  labelCol: {
    span: 7
  },
  wrapperCol: {
    span: 16
  }
};
const fileList = [
  {
    uid: "0",
    name: "IMG.png",
    state: "done",
    url: "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",
    downloadURL: "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",
    imgURL: "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg"
  },
  {
    uid: "1",
    name: "IMG.png",
    percent: 50,
    state: "uploading",
    url: "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",
    downloadURL: "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",
    imgURL: "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg"
  },
  {
    uid: "2",
    name: "IMG.png",
    state: "error",
    url: "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",
    downloadURL: "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",
    imgURL: "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg"
  }
];
class Demo$6 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      preview: false
    };
    this.submitHandler = (e) => {
      console.log(e);
    };
    this.onPreviewChange = (checked) => {
      this.setState({
        preview: checked
      });
    };
    this.ratingPreview = (value) => {
      return /* @__PURE__ */ createElement("p", null, value, " ", value > 2.5 ? /* @__PURE__ */ createElement(NextIcon, {
        type: "smile"
      }) : /* @__PURE__ */ createElement(NextIcon, {
        type: "cry"
      }));
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextForm, {
      ...formItemLayout$8,
      isPreview: this.state.preview,
      style: {maxWidth: "800px"}
    }, /* @__PURE__ */ createElement(FormItem$a, {
      label: "preview: ",
      isPreview: false,
      size: "small",
      style: {marginBottom: 0}
    }, /* @__PURE__ */ createElement(NextSwitch, {
      size: "large",
      onChange: this.onPreviewChange
    })), /* @__PURE__ */ createElement("div", {
      style: {height: 1, width: "100%", margin: "20px 0"}
    }), /* @__PURE__ */ createElement(FormItem$a, {
      required: true,
      label: "Username:"
    }, /* @__PURE__ */ createElement(NextInput, {
      defaultValue: "Fusion",
      placeholder: "Please enter your username",
      id: "username",
      name: "username",
      "aria-required": "true"
    })), /* @__PURE__ */ createElement(FormItem$a, {
      required: true,
      label: "Password:"
    }, /* @__PURE__ */ createElement(NextInput, {
      defaultValue: "Fusion@2019",
      htmlType: "password",
      placeholder: "Please enter your password",
      id: "password",
      name: "password",
      "aria-required": "true"
    })), /* @__PURE__ */ createElement(FormItem$a, {
      required: true,
      label: "Link:"
    }, /* @__PURE__ */ createElement(NextInput, {
      name: "link",
      addonTextBefore: "http://",
      addonTextAfter: ".com",
      defaultValue: "alibaba",
      "aria-label": "input with config of addonTextBefore and addonTextAfter"
    })), /* @__PURE__ */ createElement(FormItem$a, {
      required: true,
      label: "Number:"
    }, /* @__PURE__ */ createElement(NextNumberPicker, {
      name: "number",
      defaultValue: 1
    })), /* @__PURE__ */ createElement(FormItem$a, {
      required: true,
      label: "autoComplete:"
    }, /* @__PURE__ */ createElement(Select.AutoComplete, {
      name: "autoComplete",
      defaultValue: "selected"
    })), /* @__PURE__ */ createElement(FormItem$a, {
      required: true,
      label: "multiple Select:"
    }, /* @__PURE__ */ createElement(Select, {
      name: "select",
      defaultValue: ["apple", "banana"],
      mode: "multiple"
    }, /* @__PURE__ */ createElement(Select.Option, {
      value: "apple"
    }, "Apple"), /* @__PURE__ */ createElement(Select.Option, {
      value: "banana"
    }, "Banana"))), /* @__PURE__ */ createElement(FormItem$a, {
      required: true,
      label: "Rating:"
    }, /* @__PURE__ */ createElement(NextRating, {
      defaultValue: 4.5,
      name: "rate",
      "aria-label": "what's the rate score"
    })), /* @__PURE__ */ createElement(FormItem$a, {
      required: true,
      label: "Custom Render Rating:",
      renderPreview: this.ratingPreview
    }, /* @__PURE__ */ createElement(NextRating, {
      defaultValue: 4.5,
      name: "rate2",
      "aria-label": "what's the rate2 score"
    })), /* @__PURE__ */ createElement(FormItem$a, {
      required: true,
      label: "Checkbox:"
    }, /* @__PURE__ */ createElement(Checkbox.Group, {
      name: "checkbox",
      defaultValue: ["react", "vue"]
    }, /* @__PURE__ */ createElement(Checkbox, {
      value: "react"
    }, "React"), /* @__PURE__ */ createElement(Checkbox, {
      value: "vue"
    }, "Vue"), /* @__PURE__ */ createElement(Checkbox, {
      value: "angular"
    }, "Angular"))), /* @__PURE__ */ createElement(FormItem$a, {
      required: true,
      label: "Radio:"
    }, /* @__PURE__ */ createElement(Radio.Group, {
      name: "radio",
      defaultValue: "react"
    }, /* @__PURE__ */ createElement(Radio, {
      value: "react"
    }, "React"), /* @__PURE__ */ createElement(Radio, {
      value: "vue"
    }, "Vue"), /* @__PURE__ */ createElement(Radio, {
      value: "angular"
    }, "Angular"))), /* @__PURE__ */ createElement(FormItem$a, {
      required: true,
      label: "Range:"
    }, /* @__PURE__ */ createElement(Range, {
      name: "range",
      slider: "double",
      defaultValue: [10, 80]
    })), /* @__PURE__ */ createElement(FormItem$a, {
      label: "Note:"
    }, /* @__PURE__ */ createElement(NextInput.TextArea, {
      placeholder: "description",
      name: "a11yRemark",
      defaultValue: "Fusion 是一套企业级中后台UI的解决方案，致力于解决设计师与前端在产品体验一致性、工作协同、开发效率方面的问题。通过协助业务线构建设计系统，提供系统化工具协助设计师前端使用设计系统，下游提供一站式设计项目协作平台；打通互联网产品从设计到开发的工作流。"
    })), /* @__PURE__ */ createElement(FormItem$a, {
      label: "Upload:"
    }, /* @__PURE__ */ createElement(NextUpload, {
      name: "upload",
      defaultValue: fileList,
      listType: "text"
    })), /* @__PURE__ */ createElement(FormItem$a, {
      label: "Upload:"
    }, /* @__PURE__ */ createElement(NextUpload, {
      name: "upload2",
      defaultValue: fileList,
      listType: "image"
    })), /* @__PURE__ */ createElement(FormItem$a, {
      wrapperCol: {offset: 7}
    }, /* @__PURE__ */ createElement(NextForm.Submit, {
      validate: true,
      type: "primary",
      onClick: this.submitHandler
    }, "Submit"), /* @__PURE__ */ createElement(NextForm.Reset, {
      style: {marginLeft: 10}
    }, "Reset"))));
  }
}
function DemoComponent$a() {
  return /* @__PURE__ */ createElement(Style$a, null, /* @__PURE__ */ createElement(Demo$6, null));
}
const Style$a = He.div``;
var m10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$a
});
const CheckboxGroup = Checkbox.Group;
function formReducer(state = {email: "", username: "xiachi", fruit: ["apple"]}, action) {
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
class FormDemo extends Component {
  constructor(props) {
    super(props);
    this.field = new NextField(this, {
      onChange: (name, value) => {
        console.log("onChange", name, value, this.field.getValues());
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
    this.field.setValues(nextProps.formData);
  }
  setEmail() {
    this.props.dispatch({
      type: "save_fields",
      payload: {
        email: "qq@gmail.com"
      }
    });
  }
  setName() {
    this.props.dispatch({
      type: "save_fields",
      payload: {
        username: "frank"
      }
    });
  }
  setGroup() {
    this.props.dispatch({
      type: "save_fields",
      payload: {
        fruit: ["pear"]
      }
    });
  }
  render() {
    return /* @__PURE__ */ createElement(NextForm, {
      field: this.field
    }, /* @__PURE__ */ createElement(NextForm.Item, {
      required: true,
      requiredMessage: "required!"
    }, /* @__PURE__ */ createElement(NextInput, {
      name: "email"
    })), /* @__PURE__ */ createElement(NextForm.Item, {
      required: true,
      requiredMessage: "required!"
    }, /* @__PURE__ */ createElement(NextInput, {
      name: "username",
      defaultValue: this.props.formData.username
    })), /* @__PURE__ */ createElement(NextForm.Item, {
      required: true,
      requiredMessage: "required!"
    }, /* @__PURE__ */ createElement(CheckboxGroup, {
      name: "fruit",
      dataSource: [
        {label: "Apple", value: "apple"},
        {label: "Pear", value: "pear"}
      ],
      defaultValue: this.props.formData.fruit
    })), /* @__PURE__ */ createElement("p", null, "email: ", this.props.email && this.props.email.value), /* @__PURE__ */ createElement(exported, {
      onClick: this.setEmail.bind(this)
    }, "setEmail"), /* @__PURE__ */ createElement(exported, {
      onClick: this.setName.bind(this)
    }, "setName"), /* @__PURE__ */ createElement(exported, {
      onClick: this.setGroup.bind(this)
    }, "setGroup"));
  }
}
const ReduxFormDemo = connect((state) => {
  return {
    formData: state.formReducer
  };
})(FormDemo);
const store = createStore(combineReducers({
  formReducer
}));
function DemoComponent$b() {
  return /* @__PURE__ */ createElement(Style$b, null, /* @__PURE__ */ createElement(Provider, {
    store
  }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(ReduxFormDemo, null))));
}
const Style$b = He.div``;
var m11 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$b
});
const initState = {
  values: {email: "", username: "xiachi"},
  errors: {}
};
function formReducer$1(state = initState, action) {
  switch (action.type) {
    case "save_fields":
      return {
        ...state,
        values: {
          ...state.values,
          ...action.values
        }
      };
    case "set_errors":
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.errors
        }
      };
    default:
      return state;
  }
}
class FormDemo$1 extends Component {
  constructor(props) {
    super(props);
    this.field = new NextField(this, {
      onChange: (name, value) => {
        console.log("onChange", name, value, this.field.getError(name));
        this.props.dispatch({
          type: "save_fields",
          values: {
            [name]: value
          }
        });
        this.props.dispatch({
          type: "set_errors",
          errors: {
            [name]: this.field.getError(name)
          }
        });
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    this.field.setValues(nextProps.formData.values);
    this.field.setErrors(nextProps.formData.errors);
  }
  setEmail() {
    this.props.dispatch({
      type: "save_fields",
      values: {
        email: "qq@gmail.com"
      }
    });
  }
  setName() {
    this.props.dispatch({
      type: "save_fields",
      values: {
        username: "frank"
      }
    });
  }
  setError() {
    this.props.dispatch({
      type: "set_errors",
      errors: {
        email: "Error message from remote"
      }
    });
  }
  setErrors() {
    this.props.dispatch({
      type: "set_errors",
      errors: {
        email: "A-Error message from remote",
        username: "B-Error message from remote"
      }
    });
  }
  render() {
    return /* @__PURE__ */ createElement(NextForm, {
      field: this.field
    }, /* @__PURE__ */ createElement(NextForm.Item, {
      required: true,
      format: "email"
    }, /* @__PURE__ */ createElement(NextInput, {
      name: "email"
    })), /* @__PURE__ */ createElement(NextForm.Item, {
      help: "",
      required: true,
      requiredMessage: "required"
    }, /* @__PURE__ */ createElement(NextInput, {
      name: "username",
      defaultValue: this.props.formData.values.username
    }), /* @__PURE__ */ createElement("p", {
      style: {color: "blue"}
    }, this.field.getError("username"))), /* @__PURE__ */ createElement("p", null, "email: ", this.props.email && this.props.email.value), /* @__PURE__ */ createElement(exported, {
      onClick: this.setEmail.bind(this)
    }, "setEmail"), /* @__PURE__ */ createElement(exported, {
      onClick: this.setName.bind(this)
    }, "setName"), /* @__PURE__ */ createElement(exported, {
      onClick: this.setError.bind(this)
    }, "setError"), /* @__PURE__ */ createElement(exported, {
      onClick: this.setErrors.bind(this)
    }, "setErrors"), /* @__PURE__ */ createElement(exported, {
      onClick: () => this.field.reset()
    }, "reset"));
  }
}
const ReduxFormDemo$1 = connect((state) => {
  return {
    formData: state.formReducer
  };
})(FormDemo$1);
const store$1 = createStore(combineReducers({
  formReducer: formReducer$1
}));
function DemoComponent$c() {
  return /* @__PURE__ */ createElement(Style$c, null, /* @__PURE__ */ createElement(Provider, {
    store: store$1
  }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(ReduxFormDemo$1, null))));
}
const Style$c = He.div``;
var m12 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$c
});
const FormItem$b = NextForm.Item;
const formItemLayout$9 = {
  labelCol: {fixedSpan: 3},
  wrapperCol: {span: 20}
};
class Demo$7 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      code: "",
      second: 60
    };
    this.handleSubmit = (values, errors) => {
      if (errors) {
        return;
      }
      console.log("Get form value:", values);
    };
    this.sendCode = (values, errors) => {
      if (errors) {
        return;
      }
      this.setState({
        code: Math.floor(Math.random() * (999999 - 99999 + 1) + 99999)
      });
      setInterval(() => {
        this.setState({
          second: --this.state.second
        });
      }, 1e3);
    };
  }
  render() {
    const {code} = this.state;
    return /* @__PURE__ */ createElement(NextForm, {
      style: {width: 400},
      ...formItemLayout$9,
      labelTextAlign: "left",
      size: "large",
      labelAlign: "inset"
    }, /* @__PURE__ */ createElement(FormItem$b, {
      label: "name",
      required: true,
      asterisk: false
    }, /* @__PURE__ */ createElement(NextInput, {
      name: "username",
      trim: true,
      defaultValue: "frank"
    })), /* @__PURE__ */ createElement(FormItem$b, {
      label: "phone",
      format: "tel",
      required: true,
      asterisk: false
    }, /* @__PURE__ */ createElement(NextInput, {
      name: "phone",
      trim: true,
      innerAfter: /* @__PURE__ */ createElement(NextForm.Submit, {
        text: true,
        type: "primary",
        disabled: !!code,
        validate: ["phone"],
        onClick: this.sendCode,
        style: {marginRight: 10}
      }, code ? `retry after ${this.state.second}s` : "send code")
    })), this.state.code ? /* @__PURE__ */ createElement(FormItem$b, {
      label: "code",
      required: true,
      asterisk: false
    }, /* @__PURE__ */ createElement(NextInput, {
      name: "code",
      trim: true,
      defaultValue: this.state.code
    })) : null, /* @__PURE__ */ createElement(FormItem$b, {
      label: " "
    }, /* @__PURE__ */ createElement(NextForm.Submit, {
      style: {width: "100%"},
      type: "primary",
      validate: true,
      onClick: this.handleSubmit
    }, "Submit")));
  }
}
function DemoComponent$d() {
  return /* @__PURE__ */ createElement(Style$d, null, /* @__PURE__ */ createElement(Demo$7, null));
}
const Style$d = He.div``;
var m13 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$d
});
const FormItem$c = NextForm.Item;
const formItemLayout$a = {
  labelCol: {xxs: 4, l: 4},
  wrapperCol: {xxs: 20, l: 16}
};
function DemoComponent$e() {
  return /* @__PURE__ */ createElement(Style$e, null, /* @__PURE__ */ createElement(NextForm, {
    ...formItemLayout$a
  }, /* @__PURE__ */ createElement(FormItem$c, {
    label: "userName:"
  }, /* @__PURE__ */ createElement(NextInput, null)), /* @__PURE__ */ createElement(FormItem$c, {
    label: "password:"
  }, /* @__PURE__ */ createElement(NextInput, {
    htmlType: "password",
    name: "resPass",
    placeholder: "Please Enter Password"
  })), /* @__PURE__ */ createElement(FormItem$c, {
    label: "Country:"
  }, /* @__PURE__ */ createElement(Select, {
    placeholder: "Please select a country",
    style: {width: "100%"}
  }, /* @__PURE__ */ createElement("option", {
    value: "china"
  }, "China"), /* @__PURE__ */ createElement("option", {
    value: "use"
  }, "United States"), /* @__PURE__ */ createElement("option", {
    value: "japan"
  }, "Japan"), /* @__PURE__ */ createElement("option", {
    value: "korean"
  }, "South Korea"), /* @__PURE__ */ createElement("option", {
    value: "Thailand"
  }, "Thailand"))), /* @__PURE__ */ createElement(FormItem$c, {
    label: "Note:",
    help: "something"
  }, /* @__PURE__ */ createElement(NextInput.TextArea, {
    placeholder: "something",
    name: "resReremark"
  })), /* @__PURE__ */ createElement(FormItem$c, {
    label: " "
  }, /* @__PURE__ */ createElement(NextForm.Submit, null, "Submit"))));
}
const Style$e = He.div``;
var m14 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$e
});
const FormItem$d = NextForm.Item;
const style$1 = {
  padding: "20px",
  background: "#F7F8FA",
  margin: "20px"
};
const formItemLayout$b = {
  labelWidth: 100,
  colSpan: 4
};
const label$1 = /* @__PURE__ */ createElement("span", null, "name：", /* @__PURE__ */ createElement(NextBalloon, {
  type: "primary",
  trigger: /* @__PURE__ */ createElement(NextIcon, {
    type: "prompt",
    size: "small"
  }),
  closable: false
}, "blablablablablablablabla"));
class Demo$8 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      labelAlign: "top",
      device: "desktop"
    };
    this.handleChange = (v) => {
      this.setState({
        labelAlign: v ? "left" : "top"
      });
    };
    this.btn = (device) => {
      this.setState({
        device
      });
    };
  }
  render() {
    const labelAlign = this.state.labelAlign;
    return /* @__PURE__ */ createElement(NextConfigProvider, {
      device: this.state.device
    }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "Label Position"), /* @__PURE__ */ createElement(NextSwitch, {
      checkedChildren: "left",
      unCheckedChildren: "top",
      checked: this.state.labelAlign === "left",
      onChange: this.handleChange
    }), /* @__PURE__ */ createElement(exported, {
      onClick: this.btn.bind(this, "desktop")
    }, "desktop"), /* @__PURE__ */ createElement(exported, {
      onClick: this.btn.bind(this, "tablet")
    }, "tablet"), /* @__PURE__ */ createElement(exported, {
      onClick: this.btn.bind(this, "phone")
    }, "phone"), /* @__PURE__ */ createElement(NextForm, {
      style: style$1,
      responsive: true
    }, /* @__PURE__ */ createElement(FormItem$d, {
      ...formItemLayout$b,
      labelAlign,
      label: label$1,
      required: true
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    })), /* @__PURE__ */ createElement(FormItem$d, {
      ...formItemLayout$b,
      labelAlign,
      label: "Long search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    })), /* @__PURE__ */ createElement(FormItem$d, {
      ...formItemLayout$b,
      labelAlign,
      label: "Search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    })), /* @__PURE__ */ createElement(FormItem$d, {
      ...formItemLayout$b,
      labelAlign,
      label: "Search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    })), /* @__PURE__ */ createElement(FormItem$d, {
      ...formItemLayout$b,
      labelAlign,
      label: "Long search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    })), /* @__PURE__ */ createElement(FormItem$d, {
      ...formItemLayout$b,
      labelAlign,
      label: "Search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    })), /* @__PURE__ */ createElement(FormItem$d, {
      ...formItemLayout$b,
      labelAlign,
      label: "Search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    })), /* @__PURE__ */ createElement(FormItem$d, {
      ...formItemLayout$b,
      labelAlign,
      label: "Long search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    })), /* @__PURE__ */ createElement(FormItem$d, {
      ...formItemLayout$b,
      labelAlign,
      label: "Search name:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Enter a search name:"
    })), /* @__PURE__ */ createElement(FormItem$d, {
      colSpan: 12,
      style: {textAlign: "right"}
    }, /* @__PURE__ */ createElement(exported, {
      type: "primary",
      style: {marginRight: "5px"}
    }, "Search"), /* @__PURE__ */ createElement(exported, null, "Clear All")))));
  }
}
function DemoComponent$f() {
  return /* @__PURE__ */ createElement(Style$f, null, /* @__PURE__ */ createElement(Demo$8, null));
}
const Style$f = He.div``;
var m15 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$f
});
const FormItem$e = NextForm.Item;
const Option$3 = Select.Option;
const formItemLayout$c = {
  labelCol: {span: 4},
  wrapperCol: {span: 20}
};
class Demo$9 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      size: "medium"
    };
    this.handleChange = (v) => {
      this.setState({
        size: v
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextForm, {
      ...formItemLayout$c,
      size: this.state.size,
      style: {maxWidth: "500px"}
    }, /* @__PURE__ */ createElement(FormItem$e, {
      label: "Size:"
    }, /* @__PURE__ */ createElement(Select, {
      value: this.state.size,
      onChange: this.handleChange,
      style: {width: "100%"}
    }, /* @__PURE__ */ createElement(Option$3, {
      value: "small"
    }, "small"), /* @__PURE__ */ createElement(Option$3, {
      value: "medium"
    }, "medium"), /* @__PURE__ */ createElement(Option$3, {
      value: "large"
    }, "large"))), /* @__PURE__ */ createElement(FormItem$e, {
      label: "Account:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Please enter your user name",
      id: "userName",
      name: "userName"
    })), /* @__PURE__ */ createElement(FormItem$e, {
      required: true,
      label: "Password:"
    }, /* @__PURE__ */ createElement(NextInput, {
      htmlType: "password",
      placeholder: "Please enter your password",
      id: "password",
      name: "password"
    })), /* @__PURE__ */ createElement(FormItem$e, {
      label: "Password:",
      validateState: "error"
    }, /* @__PURE__ */ createElement(NextInput, {
      htmlType: "password",
      placeholder: "Check your password",
      id: "rePass",
      name: "rePass"
    }))), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextForm, {
      size: this.state.size,
      inline: true
    }, /* @__PURE__ */ createElement(FormItem$e, {
      label: "Size:"
    }, /* @__PURE__ */ createElement(Select, {
      style: {width: "100%"},
      value: this.state.size,
      onChange: this.handleChange
    }, /* @__PURE__ */ createElement(Option$3, {
      value: "small"
    }, "small"), /* @__PURE__ */ createElement(Option$3, {
      value: "medium"
    }, "medium"), /* @__PURE__ */ createElement(Option$3, {
      value: "large"
    }, "large"))), /* @__PURE__ */ createElement(FormItem$e, {
      label: "Account:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Please enter your user name",
      id: "userName2",
      name: "userName2"
    })), /* @__PURE__ */ createElement(FormItem$e, {
      label: "Password:"
    }, /* @__PURE__ */ createElement(NextInput, {
      htmlType: "password",
      placeholder: "Please enter your password",
      id: "password2",
      name: "password2"
    })), /* @__PURE__ */ createElement(FormItem$e, {
      label: "Password:",
      validateState: "error"
    }, /* @__PURE__ */ createElement(NextInput, {
      htmlType: "password",
      placeholder: "Check your password",
      id: "rePass2",
      name: "rePass2"
    }))));
  }
}
function DemoComponent$g() {
  return /* @__PURE__ */ createElement(Style$g, null, /* @__PURE__ */ createElement(Demo$9, null));
}
const Style$g = He.div`
  .demo-ctl {
    background-color: #f1f1f1;
    padding: 10px;
    color: #0a7ac3;
    border-left: 4px solid #0d599a;
  }
`;
var m16 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$g
});
const FormItem$f = NextForm.Item;
const Option$4 = Select.Option;
class Demo$a extends Component {
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextForm, {
      labelAlign: "top"
    }, /* @__PURE__ */ createElement(FormItem$f, {
      label: "Account:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Please enter your user name",
      id: "userName",
      name: "userName"
    })), /* @__PURE__ */ createElement(FormItem$f, {
      required: true,
      label: "Password:"
    }, /* @__PURE__ */ createElement(NextInput, {
      htmlType: "password",
      placeholder: "Please enter your password",
      id: "password",
      name: "password"
    })), /* @__PURE__ */ createElement(FormItem$f, {
      label: "Password:",
      validateState: "error"
    }, /* @__PURE__ */ createElement(NextInput, {
      htmlType: "password",
      placeholder: "Please enter your password",
      id: "rePass",
      name: "rePass"
    })), /* @__PURE__ */ createElement(FormItem$f, {
      label: "Size:"
    }, /* @__PURE__ */ createElement(Select, {
      style: {width: "100%"},
      name: "size"
    }, /* @__PURE__ */ createElement(Option$4, {
      value: "small"
    }, "small"), /* @__PURE__ */ createElement(Option$4, {
      value: "medium"
    }, "medium"), /* @__PURE__ */ createElement(Option$4, {
      value: "large"
    }, "large")))), /* @__PURE__ */ createElement(NextForm, {
      inline: true,
      labelAlign: "top"
    }, /* @__PURE__ */ createElement(FormItem$f, {
      label: "Account:"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Please enter your user name",
      id: "userName2",
      name: "userName2"
    })), /* @__PURE__ */ createElement(FormItem$f, {
      label: "Password:"
    }, /* @__PURE__ */ createElement(NextInput, {
      htmlType: "password",
      placeholder: "Please enter your password",
      id: "password2",
      name: "password2"
    })), /* @__PURE__ */ createElement(FormItem$f, {
      label: "Password:",
      validateState: "error"
    }, /* @__PURE__ */ createElement(NextInput, {
      htmlType: "password",
      placeholder: "Please enter your password",
      id: "rePass2",
      name: "rePass2"
    })), /* @__PURE__ */ createElement(FormItem$f, {
      label: "Size:"
    }, /* @__PURE__ */ createElement(Select, {
      style: {width: "100%"},
      name: "size2"
    }, /* @__PURE__ */ createElement(Option$4, {
      value: "small"
    }, "small"), /* @__PURE__ */ createElement(Option$4, {
      value: "medium"
    }, "medium"), /* @__PURE__ */ createElement(Option$4, {
      value: "large"
    }, "large")))));
  }
}
function DemoComponent$h() {
  return /* @__PURE__ */ createElement(Style$h, null, /* @__PURE__ */ createElement(Demo$a, null));
}
const Style$h = He.div`
  .demo-ctl {
    background-color: #f1f1f1;
    padding: 10px;
    color: #0a7ac3;
    border-left: 4px solid #0d599a;
  }
`;
var m17 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$h
});
const FormItem$g = NextForm.Item;
const RadioGroup$2 = Radio.Group;
const formItemLayout$d = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
};
class BasicDemo$1 extends Component {
  userExists(rule, value) {
    return new Promise((resolve, reject) => {
      if (!value) {
        resolve();
      } else {
        setTimeout(() => {
          if (value === "frank") {
            reject([new Error("Sorry, this username is already exist.")]);
          } else {
            resolve();
          }
        }, 500);
      }
    });
  }
  render() {
    return /* @__PURE__ */ createElement(NextForm, {
      ...formItemLayout$d
    }, /* @__PURE__ */ createElement(FormItem$g, {
      label: "Account:",
      hasFeedback: true,
      validator: this.userExists.bind(this),
      help: ""
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Input frank",
      name: "valUsername"
    }), /* @__PURE__ */ createElement(NextForm.Error, {
      name: "valUsername"
    }, (errors, state) => {
      if (state === "loading") {
        return "loading...";
      } else {
        return errors;
      }
    })), /* @__PURE__ */ createElement(FormItem$g, {
      label: "Email:",
      hasFeedback: true,
      required: true,
      requiredTrigger: "onBlur",
      format: "email"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Both trigget onBlur and onChange",
      name: "valEmail"
    })), /* @__PURE__ */ createElement(FormItem$g, {
      label: "Password:",
      hasFeedback: true,
      required: true,
      requiredMessage: "Please enter password"
    }, /* @__PURE__ */ createElement(NextInput, {
      htmlType: "password",
      name: "valPasswd"
    })), /* @__PURE__ */ createElement(FormItem$g, {
      label: "Gender:",
      hasFeedback: true,
      required: true,
      requiredMessage: "Please select your gender"
    }, /* @__PURE__ */ createElement(RadioGroup$2, {
      name: "valSex"
    }, /* @__PURE__ */ createElement(Radio, {
      value: "male"
    }, "Male"), /* @__PURE__ */ createElement(Radio, {
      value: "female"
    }, "Female"))), /* @__PURE__ */ createElement(FormItem$g, {
      label: "Remarks:",
      required: true,
      requiredMessage: "Really do not intend to write anything?"
    }, /* @__PURE__ */ createElement(NextInput.TextArea, {
      maxLength: 20,
      hasLimitHint: true,
      placeholder: "Everything is ok!",
      name: "valTextarea"
    })), /* @__PURE__ */ createElement(FormItem$g, {
      wrapperCol: {offset: 6}
    }, /* @__PURE__ */ createElement(NextForm.Submit, {
      validate: true,
      type: "primary",
      onClick: (v, e) => console.log(v, e),
      style: {marginRight: 10}
    }, "Submit"), /* @__PURE__ */ createElement(NextForm.Reset, null, "Reset")));
  }
}
function DemoComponent$i() {
  return /* @__PURE__ */ createElement(Style$i, null, /* @__PURE__ */ createElement(BasicDemo$1, null));
}
const Style$i = He.div``;
var m18 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$i
});
const FormItem$h = NextForm.Item;
const formItemLayout$e = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
};
class BasicDemo$2 extends Component {
  constructor() {
    super(...arguments);
    this.field = new NextField(this);
  }
  render() {
    const {
      field,
      field: {init}
    } = this;
    return /* @__PURE__ */ createElement(NextForm, {
      ...formItemLayout$e,
      field
    }, /* @__PURE__ */ createElement(NextForm.Item, {
      label: "test",
      key: "test2"
    }, /* @__PURE__ */ createElement(NextInput, {
      ...init("input", {
        rules: [
          {
            validator(_rule, value, callback) {
              callback(/* @__PURE__ */ createElement("span", null, "This is a ", /* @__PURE__ */ createElement("em", null, "CUSTOM"), " error"));
            }
          }
        ]
      })
    })), /* @__PURE__ */ createElement(FormItem$h, {
      wrapperCol: {offset: 6}
    }, /* @__PURE__ */ createElement(NextForm.Submit, {
      validate: true,
      type: "primary"
    }, "Submit"), /* @__PURE__ */ createElement(NextForm.Reset, null, "Reset")));
  }
}
function DemoComponent$j() {
  return /* @__PURE__ */ createElement(Style$j, null, /* @__PURE__ */ createElement(BasicDemo$2, null));
}
const Style$j = He.div``;
var m19 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$j
});
const FormItem$i = NextForm.Item;
const RadioGroup$3 = Radio.Group;
const formItemLayout$f = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
};
class Demo$b extends Component {
  render() {
    return /* @__PURE__ */ createElement(NextForm, {
      ...formItemLayout$f,
      useLabelForErrorMessage: true
    }, /* @__PURE__ */ createElement(FormItem$i, {
      label: "Account:",
      required: true
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Input frank",
      name: "valUsername"
    })), /* @__PURE__ */ createElement(FormItem$i, {
      label: "Email:",
      required: true,
      requiredTrigger: "onBlur",
      format: "email"
    }, /* @__PURE__ */ createElement(NextInput, {
      placeholder: "Both trigget onBlur and onChange",
      name: "valEmail"
    })), /* @__PURE__ */ createElement(FormItem$i, {
      label: "Password:",
      hasFeedback: true,
      required: true,
      requiredMessage: "Please enter password"
    }, /* @__PURE__ */ createElement(NextInput, {
      htmlType: "password",
      name: "valPasswd"
    })), /* @__PURE__ */ createElement(FormItem$i, {
      label: "Gender:",
      hasFeedback: true,
      required: true,
      requiredMessage: "Please select your gender"
    }, /* @__PURE__ */ createElement(RadioGroup$3, {
      name: "valSex"
    }, /* @__PURE__ */ createElement(Radio, {
      value: "male"
    }, "Male"), /* @__PURE__ */ createElement(Radio, {
      value: "female"
    }, "Female"))), /* @__PURE__ */ createElement(FormItem$i, {
      label: "Remarks:",
      required: true,
      requiredMessage: "Really do not intend to write anything?"
    }, /* @__PURE__ */ createElement(NextInput.TextArea, {
      maxLength: 20,
      hasLimitHint: true,
      placeholder: "Everything is ok!",
      name: "valTextarea"
    })), /* @__PURE__ */ createElement(FormItem$i, {
      wrapperCol: {offset: 6}
    }, /* @__PURE__ */ createElement(NextForm.Submit, {
      validate: true,
      type: "primary",
      onClick: (v, e) => console.log(v, e),
      style: {marginRight: 10}
    }, "Submit"), /* @__PURE__ */ createElement(NextForm.Reset, null, "Reset")));
  }
}
function DemoComponent$k() {
  return /* @__PURE__ */ createElement(Style$k, null, /* @__PURE__ */ createElement(Demo$b, null));
}
const Style$k = He.div``;
var m20 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$k
});
const FormItem$j = NextForm.Item;
const formItemLayout$g = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
};
function DemoComponent$l() {
  return /* @__PURE__ */ createElement(Style$l, null, /* @__PURE__ */ createElement(NextForm, {
    ...formItemLayout$g
  }, /* @__PURE__ */ createElement(FormItem$j, {
    label: "Input Error：",
    validateState: "error",
    help: "Please enter a numeric and alphabetic string"
  }, /* @__PURE__ */ createElement(NextInput, {
    defaultValue: "Invalid choice"
  })), /* @__PURE__ */ createElement(FormItem$j, {
    label: "Loading：",
    hasFeedback: true,
    validateState: "loading",
    help: "Information Checking..."
  }, /* @__PURE__ */ createElement(NextInput, {
    defaultValue: "Checking"
  })), /* @__PURE__ */ createElement(FormItem$j, {
    label: "Success：",
    hasFeedback: true,
    validateState: "success"
  }, /* @__PURE__ */ createElement(NextInput, {
    defaultValue: "Successful verification"
  })), /* @__PURE__ */ createElement(FormItem$j, {
    label: "Datepicker：",
    validateState: "error",
    help: "Please select the correct date"
  }, /* @__PURE__ */ createElement(NextDatePicker, null)), /* @__PURE__ */ createElement(FormItem$j, {
    label: "Timepicker：",
    validateState: "error",
    help: "Please select the correct time"
  }, /* @__PURE__ */ createElement(NextTimePicker, null)), /* @__PURE__ */ createElement(FormItem$j, {
    label: "Select：",
    validateState: "error",
    help: "Please select a country"
  }, /* @__PURE__ */ createElement(Select, {
    placeholder: "Please select a country"
  }, /* @__PURE__ */ createElement("option", {
    value: "china"
  }, "China"), /* @__PURE__ */ createElement("option", {
    value: "use"
  }, "United States"), /* @__PURE__ */ createElement("option", {
    value: "japan"
  }, "Japan"), /* @__PURE__ */ createElement("option", {
    value: "korean"
  }, "South Korea"), /* @__PURE__ */ createElement("option", {
    value: "Thailand"
  }, "Thailand"))), /* @__PURE__ */ createElement(FormItem$j, {
    label: "NumberPicker：",
    validateState: "error"
  }, /* @__PURE__ */ createElement(NextNumberPicker, {
    defaultValue: 0
  }))));
}
const Style$l = He.div``;
var m21 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$l
});
const modules = {};
modules["_accessibility"] = m0;
modules["_base"] = m1;
modules["_custom"] = m2;
modules["_field"] = m3;
modules["_inline"] = m4;
modules["_inset"] = m5;
modules["_mix"] = m6;
modules["_mobile"] = m7;
modules["_nest"] = m8;
modules["_onsubmit"] = m9;
modules["_preview"] = m10;
modules["_redux"] = m11;
modules["_redux-seterror"] = m12;
modules["_register"] = m13;
modules["_responsive"] = m14;
modules["_responsive-grid"] = m15;
modules["_size"] = m16;
modules["_top"] = m17;
modules["_validate-basic"] = m18;
modules["_validate-custom-error"] = m19;
modules["_validate-label-as-name"] = m20;
modules["_validate-static"] = m21;
export default modules;
