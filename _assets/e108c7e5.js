import {c as createElement, C as Component} from "./index.e76f7845.js";
import {h as hooks} from "./cf6ed2e0.js";
import {N as NextField} from "./8a005736.js";
import {H as He} from "./a3f37a66.js";
import "./33d6cb60.js";
import "./cdd517eb.js";
import "./482b3bb1.js";
import "./39b9d0c9.js";
import "./80678f37.js";
import "./ce275d39.js";
import "./d1d2a08f.js";
import "./f29a9117.js";
import "./af998bd5.js";
import "./ec5ade52.js";
import "./1ba1a98f.js";
import "./3960f8db.js";
import "./ce7ac670.js";
import "./a6527bd5.js";
import "./f1386190.js";
import "./0b61e7ab.js";
import {N as NextDatePicker} from "./96a08571.js";
import {e as exported} from "./36689a45.js";
const {RangePicker, MonthPicker, YearPicker} = NextDatePicker;
const onChange = (val) => console.log(val);
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextDatePicker, {
    dateInputAriaLabel: "date input",
    inputProps: {"aria-label": "date picker main"},
    onChange
  }), " ", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(RangePicker, {
    startDateInputAriaLabel: "start date",
    startTimeInputAriaLabel: "start time",
    endDateInputAriaLabel: "end date",
    endTimeInputAriaLabel: "end time",
    onChange,
    inputProps: {"aria-label": "range picker main"}
  })));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const {RangePicker: RangePicker$1, MonthPicker: MonthPicker$1, YearPicker: YearPicker$1, WeekPicker} = NextDatePicker;
const onChange$1 = (val) => console.log(val);
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextDatePicker, {
    onChange: onChange$1
  }), " ", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextDatePicker, {
    showTime: true,
    onChange: onChange$1
  }), " ", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(MonthPicker$1, {
    onChange: onChange$1
  }), " ", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(YearPicker$1, {
    onChange: onChange$1
  }), " ", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(WeekPicker, {
    onChange: onChange$1
  }), " ", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(RangePicker$1, {
    type: "year",
    onChange: onChange$1
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(RangePicker$1, {
    type: "month",
    onChange: onChange$1
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(RangePicker$1, {
    onChange: onChange$1
  })));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
class CustomRangePicker extends Component {
  constructor(props, context) {
    super(props, context);
    this.disabledStartDate = (startValue2) => {
      const {endValue: endValue2} = this.state;
      if (!startValue2 || !endValue2) {
        return false;
      }
      return startValue2.valueOf() > endValue2.valueOf();
    };
    this.disabledEndDate = (endValue2) => {
      const {startValue: startValue2} = this.state;
      if (!endValue2 || !startValue2) {
        return false;
      }
      return endValue2.valueOf() <= startValue2.valueOf();
    };
    this.onChange = (stateName, value) => {
      this.setState({
        [stateName]: value
      });
    };
    this.onStartChange = (value) => {
      this.onChange("startValue", value);
    };
    this.onEndChange = (value) => {
      this.onChange("endValue", value);
    };
    this.handleStartOpenChange = (open) => {
      if (!open) {
        this.setState({endOpen: true});
      }
    };
    this.handleEndOpenChange = (open) => {
      this.setState({endOpen: open});
    };
    this.state = {
      startValue: null,
      endValue: null,
      endOpen: false
    };
  }
  render() {
    const {endOpen} = this.state;
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextDatePicker, {
      disabledDate: this.disabledStartDate,
      placeholder: "Departure Date",
      onChange: this.onStartChange,
      onVisibleChange: this.handleStartOpenChange
    }), /* @__PURE__ */ createElement("span", {
      className: "custom-sep"
    }, "-"), /* @__PURE__ */ createElement(NextDatePicker, {
      disabledDate: this.disabledEndDate,
      placeholder: "Return Date",
      onChange: this.onEndChange,
      visible: endOpen,
      onVisibleChange: this.handleEndOpenChange
    }));
  }
}
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(CustomRangePicker, null)));
}
const Style$2 = He.div`
  .custom-sep {
    margin: 0 6px;
    color: #999;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const {RangePicker: RangePicker$2, MonthPicker: MonthPicker$2, YearPicker: YearPicker$2} = NextDatePicker;
const startValue = hooks("2017-11-20", "YYYY-MM-DD", true);
const endValue = hooks("2017-12-15", "YYYY-MM-DD", true);
const timeStamp = hooks(1581938105e3);
const onChange$2 = (val) => console.log(val);
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextDatePicker, {
    defaultValue: startValue,
    onChange: onChange$2
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextDatePicker, {
    defaultValue: timeStamp,
    onChange: onChange$2
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(MonthPicker$2, {
    defaultValue: startValue,
    onChange: onChange$2
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(YearPicker$2, {
    defaultValue: startValue,
    onChange: onChange$2
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(RangePicker$2, {
    type: "year",
    defaultValue: [startValue, endValue],
    onChange: onChange$2
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(RangePicker$2, {
    type: "month",
    defaultValue: [startValue, endValue],
    onChange: onChange$2
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(RangePicker$2, {
    defaultValue: [startValue, endValue],
    onChange: onChange$2
  })));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const {RangePicker: RangePicker$3, MonthPicker: MonthPicker$3} = NextDatePicker;
function onVisibleMonthChange(val, reason) {
  console.log(val.format("L"), reason);
}
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("p", null, "Setting last month as default visible month"), /* @__PURE__ */ createElement(NextDatePicker, {
    defaultVisibleMonth: () => hooks().add(-1, "months"),
    onVisibleMonthChange
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(RangePicker$3, {
    defaultVisibleMonth: () => hooks().add(-1, "months"),
    onVisibleMonthChange
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("p", null, "Setting 2017 as default visible year"), /* @__PURE__ */ createElement(MonthPicker$3, {
    defaultVisibleYear: () => hooks("2017", "YYYY")
  })));
}
const Style$4 = He.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const {RangePicker: RangePicker$4} = NextDatePicker;
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextDatePicker, {
    disabled: true
  }), "  ", /* @__PURE__ */ createElement(RangePicker$4, {
    disabled: true
  })));
}
const Style$5 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const {RangePicker: RangePicker$5, MonthPicker: MonthPicker$4, YearPicker: YearPicker$3} = NextDatePicker;
const currentDate = hooks();
const disabledDate = function(date, view) {
  switch (view) {
    case "date":
      return date.valueOf() <= currentDate.valueOf();
    case "year":
      return date.year() < currentDate.year();
    case "month":
      return date.year() * 100 + date.month() < currentDate.year() * 100 + currentDate.month();
    default:
      return false;
  }
};
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextDatePicker, {
    disabledDate,
    onChange: (val) => console.log(val)
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(MonthPicker$4, {
    disabledDate,
    onChange: (val) => console.log(val)
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(YearPicker$3, {
    disabledDate,
    onChange: (val) => console.log(val)
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(RangePicker$5, {
    disabledDate,
    onChange: (val) => console.log(val)
  })));
}
const Style$6 = He.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const {RangePicker: RangePicker$6, YearPicker: YearPicker$4, MonthPicker: MonthPicker$5} = NextDatePicker;
class App extends Component {
  constructor() {
    super(...arguments);
    this.field = new NextField(this);
    this.printData = () => {
      this.field.validate((err, values) => {
        if (err) {
          console.error("Error: ", err);
          return;
        }
        console.log("datepicker: %s", values.date.format("YYYY-MM-DD"));
        console.log("monthpicker: %s", values.month.format("YYYY-MM"));
        console.log("yearpicker: %s", values.year.format("YYYY"));
        const range = values.range;
        console.log("rangepicker: [%s, %s]", range[0] && range[0].format("YYYY-MM-DD"), range[1] && range[1].format("YYYY-MM-DD"));
      });
    };
    this.printError = (name) => {
      if (this.field.getError(name)) {
        return /* @__PURE__ */ createElement("span", {
          className: "error-msg"
        }, this.field.getError(name).join(","));
      }
    };
  }
  render() {
    const init = this.field.init;
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextDatePicker, {
      ...init("date", {
        rules: [
          {
            required: true,
            message: "请选择日期"
          }
        ]
      })
    }), this.printError("date"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(MonthPicker$5, {
      ...init("month", {
        rules: [
          {
            required: true,
            message: "请选择月份"
          }
        ]
      })
    }), this.printError("month"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(YearPicker$4, {
      ...init("year", {
        rules: [
          {
            required: true,
            message: "请选择年份"
          }
        ]
      })
    }), this.printError("year"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(RangePicker$6, {
      ...init("range", {
        rules: [
          {
            required: true,
            message: "请选择日期范围"
          }
        ]
      })
    }), this.printError("range"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
      onClick: this.printData
    }, "Print to Console"));
  }
}
function DemoComponent$7() {
  return /* @__PURE__ */ createElement(Style$7, null, /* @__PURE__ */ createElement(App, null));
}
const Style$7 = He.div`
  .error-msg {
    color: #e72b00;
    font-size: 12px;
  }
`;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
const {RangePicker: RangePicker$7} = NextDatePicker;
function footerRender() {
  return /* @__PURE__ */ createElement("div", {
    className: "custom-footer"
  }, "👍 Some useful info here");
}
function DemoComponent$8() {
  return /* @__PURE__ */ createElement(Style$8, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextDatePicker, {
    footerRender
  }), "  ", /* @__PURE__ */ createElement(RangePicker$7, {
    footerRender
  })));
}
const Style$8 = He.div`
  .custom-footer {
    padding: 12px;
    font-size: 12px;
    border-top: 1px solid #dcdee3;
  }
`;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
const {RangePicker: RangePicker$8} = NextDatePicker;
const onChange$3 = (val) => console.log(val);
function DemoComponent$9() {
  return /* @__PURE__ */ createElement(Style$9, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextDatePicker, {
    format: "YYYY-M-D",
    onChange: onChange$3
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextDatePicker, {
    format: "YYYY-M-D",
    onChange: onChange$3,
    showTime: {format: "HH:mm"}
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(RangePicker$8, {
    format: "YYYY-M-D",
    onChange: onChange$3
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(RangePicker$8, {
    format: "YYYY-M-D",
    onChange: onChange$3,
    showTime: {format: "HH:mm"}
  })));
}
const Style$9 = He.div``;
var m9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$9
});
const {RangePicker: RangePicker$9} = NextDatePicker;
function DemoComponent$a() {
  return /* @__PURE__ */ createElement(Style$a, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("p", null, "Change popup align"), /* @__PURE__ */ createElement(NextDatePicker, {
    popupAlign: "bl tl"
  }), /* @__PURE__ */ createElement("p", null, "Change popup container"), /* @__PURE__ */ createElement(RangePicker$9, {
    popupContainer: (target) => target.parentNode
  })));
}
const Style$a = He.div``;
var m10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$a
});
const {RangePicker: RangePicker$a} = NextDatePicker;
const onChange$4 = (value) => console.log(value);
const onOk = (value) => console.log("onOK:", value.format("YYYY-MM-DD HH:mm:ss"));
const onRangeOk = (value) => console.log("onOk: [%s, %s]", value[0].format("YYYY-MM-DD HH:mm:ss"), value[1].format("YYYY-MM-DD HH:mm:ss"));
const defaultTimeValue = hooks("09:00:00", "HH:mm:ss", true);
const defaultTimeValues = [
  hooks("09:00:00", "HH:mm:ss", true),
  hooks("23:59:59", "HH:mm:ss", true)
];
function DemoComponent$b() {
  return /* @__PURE__ */ createElement(Style$b, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("p", null, "DatePicker With Time"), /* @__PURE__ */ createElement(NextDatePicker, {
    showTime: true,
    onChange: onChange$4,
    onOk
  }), /* @__PURE__ */ createElement("p", null, "DatePicker with Time, reset 00:00:00 for every select"), /* @__PURE__ */ createElement(NextDatePicker, {
    showTime: true,
    onChange: onChange$4,
    onOk,
    resetTime: true
  }), /* @__PURE__ */ createElement("p", null, "DatePicker with Time, with default time value"), /* @__PURE__ */ createElement(NextDatePicker, {
    showTime: {defaultValue: defaultTimeValue, secondStep: 10},
    onChange: onChange$4,
    onOk
  }), /* @__PURE__ */ createElement("p", null, "RangePicker with Time"), /* @__PURE__ */ createElement(RangePicker$a, {
    showTime: true,
    onChange: onChange$4,
    onOk: onRangeOk
  }), /* @__PURE__ */ createElement("p", null, "RangePicker with Time, reset 00:00:00 for every select"), /* @__PURE__ */ createElement(RangePicker$a, {
    showTime: true,
    resetTime: true,
    onChange: onChange$4,
    onOk: onRangeOk
  }), /* @__PURE__ */ createElement("p", null, "RangePicker with Time, with default time value, hide seconds"), /* @__PURE__ */ createElement(RangePicker$a, {
    showTime: {
      defaultValue: defaultTimeValue,
      format: "HH:mm",
      minuteStep: 15
    },
    onChange: onChange$4,
    onOk: onRangeOk
  }), /* @__PURE__ */ createElement("p", null, "RangePicker with Time, with default start & end time value, hide seconds"), /* @__PURE__ */ createElement(RangePicker$a, {
    showTime: {
      defaultValue: defaultTimeValues,
      format: "HH:mm",
      minuteStep: 15
    },
    onChange: onChange$4,
    onOk: onRangeOk
  })));
}
const Style$b = He.div``;
var m11 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$b
});
function DemoComponent$c() {
  return /* @__PURE__ */ createElement(Style$c, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextDatePicker, {
    size: "large"
  }), "   ", /* @__PURE__ */ createElement(NextDatePicker, null), "   ", /* @__PURE__ */ createElement(NextDatePicker, {
    size: "small"
  })));
}
const Style$c = He.div``;
var m12 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$c
});
const modules = {};
modules["_accessibility"] = m0;
modules["_basic"] = m1;
modules["_custom-range-picker"] = m2;
modules["_default"] = m3;
modules["_default-visible-month"] = m4;
modules["_disabled"] = m5;
modules["_disabled-date"] = m6;
modules["_field"] = m7;
modules["_footer"] = m8;
modules["_format"] = m9;
modules["_popup"] = m10;
modules["_show-time"] = m11;
modules["_size"] = m12;
export default modules;
