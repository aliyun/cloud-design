import {c as createElement, i as propTypes, N as NextConfigProvider, C as Component, H as getDefaultExportFromCjs, F as createCommonjsModule, B as Radio, S as Select, D as NextMenu} from "./index.d0c11305.js";
import "./17248895.js";
import "./ce63a13f.js";
import "./cf6ed2e0.js";
import {N as NextCalendar} from "./dd875ffc.js";
import "./eb4d0865.js";
import {C as Card} from "./0d89a50f.js";
import "./7ff038be.js";
import {N as NextDatePicker} from "./eadc5cab.js";
import {e as exported} from "./4c37e551.js";
import "./3123cdd9.js";
import "./68efc4e4.js";
import {P as Pagination} from "./4a95a792.js";
import "./58a97782.js";
import "./3e25df03.js";
import {e as exported$1} from "./9321ce6d.js";
import {N as NextTimePicker} from "./a6772f7f.js";
import {T as Timeline} from "./6851347c.js";
import {T as Transfer} from "./32276ae8.js";
import {N as NextUpload} from "./9ea640ba.js";
import {B as Button} from "./a691d3d5.js";
import {q as qe} from "./ca03a06a.js";
const {config} = NextConfigProvider;
class Output extends Component {
  render() {
    const {prefix, locale} = this.props;
    return /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "prefix: ", prefix), /* @__PURE__ */ createElement("li", null, "locale: ", JSON.stringify(locale)));
  }
}
Output.propTypes = {
  prefix: propTypes.string,
  locale: propTypes.object
};
Output.defaultProps = {
  prefix: "next-",
  locale: {
    hello: "你好"
  }
};
const Func = (props) => {
  return /* @__PURE__ */ createElement("div", null, "This is a Function Component");
};
const NewFunc = config(Func);
const NewOutput = config(Output);
class Demo extends Component {
  render() {
    return /* @__PURE__ */ createElement(NextConfigProvider, {
      prefix: "custom-",
      locale: {Output: {hello: "hello"}}
    }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NewOutput, null), /* @__PURE__ */ createElement(NewFunc, null)));
  }
}
function DemoComponent() {
  const content = /* @__PURE__ */ createElement(Demo, null);
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
var enUs = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;
  exports.default = {
    momentLocale: "en",
    Timeline: {
      expand: "Expand",
      fold: "Fold"
    },
    Balloon: {
      close: "Close"
    },
    Card: {
      expand: "Expand",
      fold: "Fold"
    },
    Calendar: {
      today: "Today",
      now: "Now",
      ok: "OK",
      clear: "Clear",
      month: "Month",
      year: "Year",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      prevDecade: "Previous Decade",
      nextDecade: "Next Decade",
      yearSelectAriaLabel: "Select Year",
      monthSelectAriaLabel: "Select Month"
    },
    DatePicker: {
      placeholder: "Select Date",
      datetimePlaceholder: "Select Date And Time",
      monthPlaceholder: "Select Month",
      yearPlaceholder: "Select Year",
      weekPlaceholder: "Select week",
      now: "Now",
      selectTime: "Select Time",
      selectDate: "Select Date",
      ok: "OK",
      clear: "Clear",
      startPlaceholder: "Start Date",
      endPlaceholder: "End Date",
      hour: "H",
      minute: "M",
      second: "S"
    },
    Dialog: {
      close: "Close",
      ok: "OK",
      cancel: "Cancel"
    },
    Drawer: {
      close: "Close"
    },
    Message: {
      closeAriaLabel: "Close"
    },
    Pagination: {
      prev: "Previous",
      next: "Next",
      goTo: "Go to",
      page: "Page",
      go: "View",
      total: "Page {current}, {total} pages",
      labelPrev: "Previous page, current page {current}",
      labelNext: "Next page, current page {current}",
      inputAriaLabel: "Please enter what page to skip to",
      selectAriaLabel: "Please select how many items are displayed on each page",
      pageSize: "Items per page:"
    },
    Input: {
      clear: "Clear"
    },
    List: {
      empty: "No Data"
    },
    Select: {
      selectPlaceholder: "Please Select",
      autoCompletePlaceholder: "Please Input",
      notFoundContent: "No Options",
      maxTagPlaceholder: "Selected {selected}/{total} Total",
      selectAll: "Select All"
    },
    Table: {
      empty: "No Data",
      ok: "OK",
      reset: "Reset",
      asc: "Ascending Order",
      desc: "Descending Order",
      expanded: "Expanded",
      folded: "Folded",
      filter: "Filter",
      selectAll: "Select All"
    },
    TimePicker: {
      placeholder: "Select Time",
      clear: "Clear",
      hour: "H",
      minute: "M",
      second: "S"
    },
    Transfer: {
      items: "items",
      item: "item",
      moveAll: "Move All",
      searchPlaceholder: "Please Input",
      moveToLeft: "Uncheck Selected Elements",
      moveToRight: "Submit Selected Elements"
    },
    Upload: {
      card: {
        cancel: "Cancel",
        addPhoto: "Add Picture",
        download: "Download",
        delete: "Delete"
      },
      drag: {
        text: "Click or Drag the file to this area to upload",
        hint: "Support docx, xls, PDF, rar, zip, PNG, JPG and other files upload"
      },
      upload: {
        delete: "Delete"
      }
    },
    Search: {
      buttonText: "Search"
    },
    Tag: {
      delete: "Delete"
    },
    Rating: {
      description: "Rating Options"
    },
    Switch: {
      on: "on",
      off: "off"
    },
    Tab: {
      closeAriaLabel: "close"
    }
  };
  module.exports = exports["default"];
});
var enUS = /* @__PURE__ */ getDefaultExportFromCjs(enUs);
var zhCn = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;
  exports.default = {
    momentLocale: "zh-cn",
    Timeline: {
      expand: "展开",
      fold: "收起"
    },
    Balloon: {
      close: "关闭"
    },
    Card: {
      expand: "展开",
      fold: "收起"
    },
    Calendar: {
      today: "今天",
      now: "此刻",
      ok: "确定",
      clear: "清除",
      month: "月",
      year: "年",
      prevYear: "上一年",
      nextYear: "下一年",
      prevMonth: "上个月",
      nextMonth: "下个月",
      prevDecade: "上十年",
      nextDecade: "后十年",
      yearSelectAriaLabel: "选择年份",
      monthSelectAriaLabel: "选择月份"
    },
    DatePicker: {
      placeholder: "请选择日期",
      datetimePlaceholder: "请选择日期和时间",
      monthPlaceholder: "请选择月",
      yearPlaceholder: "请选择年",
      weekPlaceholder: "请选择周",
      now: "此刻",
      selectTime: "选择时间",
      selectDate: "选择日期",
      ok: "确定",
      clear: "清除",
      startPlaceholder: "起始日期",
      endPlaceholder: "结束日期",
      hour: "时",
      minute: "分",
      second: "秒"
    },
    Dialog: {
      close: "关闭",
      ok: "确认",
      cancel: "取消"
    },
    Drawer: {
      close: "关闭"
    },
    Message: {
      closeAriaLabel: "关闭"
    },
    Pagination: {
      prev: "上一页",
      next: "下一页",
      goTo: "到第",
      page: "页",
      go: "确定",
      total: "第{current}页，共{total}页",
      labelPrev: "上一页，当前第{current}页",
      labelNext: "下一页，当前第{current}页",
      inputAriaLabel: "请输入跳转到第几页",
      selectAriaLabel: "请选择每页显示几条",
      pageSize: "每页显示："
    },
    Input: {
      clear: "清除"
    },
    List: {
      empty: "没有数据"
    },
    Select: {
      selectPlaceholder: "请选择",
      autoCompletePlaceholder: "请输入",
      notFoundContent: "无选项",
      maxTagPlaceholder: "已选择 {selected}/{total} 项",
      selectAll: "全选"
    },
    Table: {
      empty: "没有数据",
      ok: "确认",
      reset: "重置",
      asc: "升序",
      desc: "降序",
      expanded: "已展开",
      folded: "已折叠",
      filter: "筛选",
      selectAll: "全选"
    },
    TimePicker: {
      placeholder: "请选择时间",
      clear: "清除",
      hour: "时",
      minute: "分",
      second: "秒"
    },
    Transfer: {
      items: "项",
      item: "项",
      moveAll: "移动全部",
      searchPlaceholder: "请输入",
      moveToLeft: "撤销选中元素",
      moveToRight: "提交选中元素"
    },
    Upload: {
      card: {
        cancel: "取消",
        addPhoto: "上传图片",
        download: "下载",
        delete: "删除"
      },
      drag: {
        text: "点击或者拖动文件到虚线框内上传",
        hint: "支持 docx, xls, PDF, rar, zip, PNG, JPG 等类型的文件"
      },
      upload: {
        delete: "删除"
      }
    },
    Search: {
      buttonText: "搜索"
    },
    Tag: {
      delete: "删除"
    },
    Rating: {
      description: "评分选项"
    },
    Switch: {
      on: "已打开",
      off: "已关闭"
    },
    Tab: {
      closeAriaLabel: "关闭"
    }
  };
  module.exports = exports["default"];
});
var zhCN = /* @__PURE__ */ getDefaultExportFromCjs(zhCn);
const RangePicker = NextDatePicker.RangePicker;
const transferDataSource = (() => {
  const dataSource = [];
  for (let i = 0; i < 10; i++) {
    dataSource.push({
      label: `content ${i}`,
      value: `${i}`,
      disabled: i % 4 === 0
    });
  }
  return dataSource;
})();
class Demo$1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "en-us"
    };
    this.changeLang = this.changeLang.bind(this);
    this.showDialog = this.showDialog.bind(this);
  }
  changeLang(lang) {
    this.setState({
      lang
    });
  }
  showDialog() {
    exported.confirm({
      title: "Confirm",
      content: "Are you sure you want to delete all alert e-mails waiting in queue?"
    });
  }
  render() {
    const locale = this.state.lang === "en-us" ? enUS : zhCN;
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      className: "change-locale"
    }, /* @__PURE__ */ createElement("span", {
      style: {marginRight: 16}
    }, "Change locale of components: "), /* @__PURE__ */ createElement(Radio.Group, {
      shape: "button",
      size: "large",
      defaultValue: "en-us",
      onChange: this.changeLang
    }, /* @__PURE__ */ createElement(Radio, {
      key: "en",
      value: "en-us"
    }, "English"), /* @__PURE__ */ createElement(Radio, {
      key: "cn",
      value: "zh-cn"
    }, "中文"))), /* @__PURE__ */ createElement(NextConfigProvider, {
      locale
    }, /* @__PURE__ */ createElement("div", {
      className: "locale-components"
    }, /* @__PURE__ */ createElement(Button, {
      type: "primary",
      onClick: this.showDialog
    }, "Show Dialog"), /* @__PURE__ */ createElement(Select, {
      style: {width: "150px"},
      dataSource: ["hello", "bye"]
    }), /* @__PURE__ */ createElement(NextDatePicker, null), /* @__PURE__ */ createElement(NextTimePicker, null), /* @__PURE__ */ createElement(RangePicker, null), /* @__PURE__ */ createElement(NextCalendar, {
      style: {
        width: "350px",
        padding: "12px",
        border: "1px solid #C4C6CF",
        borderRadius: "3px"
      },
      shape: "card"
    }), /* @__PURE__ */ createElement(Pagination, {
      defaultCurrent: 2
    }), /* @__PURE__ */ createElement(Transfer, {
      dataSource: transferDataSource,
      defaultValue: ["3"],
      defaultLeftChecked: ["1"],
      titles: ["Source", "Target"]
    }), /* @__PURE__ */ createElement(exported$1, {
      style: {width: "500px"},
      dataSource: []
    }, /* @__PURE__ */ createElement(exported$1.Column, {
      title: "Name",
      dataIndex: "name",
      filters: [
        {label: "Filter 1", value: "1"},
        {label: "Filter 2", value: "2"}
      ]
    }), /* @__PURE__ */ createElement(exported$1.Column, {
      title: "Age",
      dataIndex: "age"
    })), /* @__PURE__ */ createElement(Card, {
      style: {width: "300px"},
      title: "Title"
    }, /* @__PURE__ */ createElement("div", {
      style: {height: "250px", background: "#F7F8FA"}
    })), /* @__PURE__ */ createElement(Timeline, {
      fold: [{foldArea: [1, 2], foldShow: true}]
    }, /* @__PURE__ */ createElement(Timeline.Item, {
      title: "Signed",
      content: "Signed, sign Alibaba is a small post office, thanks to the use of STO, look forward to once again at your service",
      time: "2016-06-10 10:30:00",
      state: "process"
    }), /* @__PURE__ */ createElement(Timeline.Item, {
      title: "Ship",
      content: "Express has arrived in Hangzhou, Zhejiang Binjiang company",
      time: "2016-06-10 09:30:00"
    }), /* @__PURE__ */ createElement(Timeline.Item, {
      title: "Ship",
      content: "Zhejiang Hangzhou Riverside company sent a member for you to send pieces",
      time: "2016-06-10 09:03:00"
    }), /* @__PURE__ */ createElement(Timeline.Item, {
      title: "Ship",
      content: "Zhejiang Hangzhou Transshipment Center has been issued",
      time: "2016-06-10 06:10:00"
    })), /* @__PURE__ */ createElement(NextUpload.Dragger, {
      style: {width: "500px"},
      listType: "image",
      action: "https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload",
      accept: "image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    }))));
  }
}
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(Demo$1, null));
}
const Style$1 = qe.div`
  .change-locale {
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 16px;
  }

  .locale-components > * {
    margin: 16px 0;
    display: block;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const localeSettings = {
  momentLocale: "fr-FR",
  CustomizedComponent: {
    helloWorld: "hello, world"
  }
};
const App = ({children}) => /* @__PURE__ */ createElement(NextConfigProvider, {
  prefix: "customized-",
  locale: localeSettings,
  pure: true,
  warning: false
}, children);
App.propTypes = {
  children: propTypes.node
};
const Child = () => /* @__PURE__ */ createElement(NextConfigProvider.Consumer, null, (context) => /* @__PURE__ */ createElement("div", {
  className: "context-data"
}, /* @__PURE__ */ createElement("h3", null, "Context's state"), /* @__PURE__ */ createElement("pre", null, JSON.stringify(context, false, 2))));
const Demo$2 = () => /* @__PURE__ */ createElement(App, null, /* @__PURE__ */ createElement(Child, null));
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement(Demo$2, null);
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div`
  .context-data {
    padding: 0 32px 32px;
    border: 3px dashed #aaa;
    border-radius: 9px;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const {ErrorBoundary, config: config$1} = NextConfigProvider;
class Demo$3 extends Component {
  render() {
    if (this.props.throwError) {
      throw Error("There is something going wrong!");
    } else {
      return /* @__PURE__ */ createElement("span", null, "normal");
    }
  }
}
const NewDemo = config$1(Demo$3);
class App$1 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      throwError: false
    };
    this.onClick = () => {
      this.setState({
        throwError: true
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, "Click to throw an error", " ", /* @__PURE__ */ createElement(Button, {
      type: "primary",
      onClick: this.onClick
    }, "trigger error"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), "Default fallback UI:", /* @__PURE__ */ createElement("hr", null), /* @__PURE__ */ createElement(NextConfigProvider, {
      errorBoundary: true
    }, /* @__PURE__ */ createElement(NewDemo, {
      throwError: this.state.throwError
    })), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), "Customize fallback UI of configed Component(Basic Components / Biz Components):", /* @__PURE__ */ createElement("hr", null), /* @__PURE__ */ createElement(NextConfigProvider, {
      errorBoundary: {
        fallbackUI: (props) => {
          const {error, errorInfo} = props;
          return /* @__PURE__ */ createElement("span", {
            style: {color: "red"}
          }, "Error: ", error.toString());
        },
        afterCatch: () => {
          console.log("catching");
        }
      }
    }, /* @__PURE__ */ createElement(NewDemo, {
      throwError: this.state.throwError
    })));
  }
}
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement(App$1, null);
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = qe.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const {config: config$2, getContextProps} = NextConfigProvider;
const {Option} = Select;
const locales = {
  "zh-cn": {
    ClickMe: {
      clickMe: "点我！"
    },
    Toast: {
      close: "关闭"
    }
  },
  "en-us": {
    ClickMe: {
      clickMe: "click me!"
    },
    Toast: {
      close: "close"
    }
  }
};
class ClickMe extends Component {
  render() {
    const {locale, onClick} = this.props;
    return /* @__PURE__ */ createElement(Button, {
      onClick
    }, locale.clickMe);
  }
}
ClickMe.propTypes = {
  locale: propTypes.object,
  onClick: propTypes.func
};
ClickMe.defaultProps = {
  locale: locales["zh-cn"].ClickMe,
  onClick: () => {
  }
};
class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose() {
    this.setState({
      visible: false
    });
    this.props.afterClose();
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "toast"
    }, /* @__PURE__ */ createElement(Button, {
      type: "primary",
      onClick: this.handleClose
    }, this.props.locale.close));
  }
}
Toast.propTypes = {
  locale: propTypes.object,
  afterClose: propTypes.func
};
Toast.defaultProps = {
  locale: locales["zh-cn"].Toast,
  afterClose: () => {
  }
};
Toast.create = (props = {}) => {
  const mountNode = document.createElement("div");
  document.body.appendChild(mountNode);
  const closeChain = () => {
    ReactDOM.unmountComponentAtNode(mountNode);
    document.body.removeChild(mountNode);
  };
  const newLocale = getContextProps(props, "Toast").locale;
  ReactDOM.render(/* @__PURE__ */ createElement(Toast, {
    afterClose: closeChain,
    locale: newLocale
  }), mountNode);
};
const NewClickMe = config$2(ClickMe);
const NewToast = config$2(Toast);
class Demo$4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "zh-cn"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }
  handleClick() {
    NewToast.create();
  }
  handleChangeLanguage(language) {
    this.setState({
      language
    });
  }
  render() {
    const {language} = this.state;
    return /* @__PURE__ */ createElement(NextConfigProvider, {
      locale: locales[language]
    }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      className: "select-language"
    }, /* @__PURE__ */ createElement(Select, {
      value: language,
      onChange: this.handleChangeLanguage
    }, /* @__PURE__ */ createElement(Option, {
      value: "zh-cn"
    }, "zh-cn"), /* @__PURE__ */ createElement(Option, {
      value: "en-us"
    }, "en-us"))), /* @__PURE__ */ createElement(NewClickMe, {
      onClick: this.handleClick
    })));
  }
}
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement(Demo$4, null);
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = qe.div`
  .toast {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 200px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    background: white;
    box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.32);
  }

  .toast .next-btn {
    margin: auto;
  }

  .select-language {
    margin-bottom: 20px;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const {SubMenu, Item, Group, Divider} = NextMenu;
const RangePicker$1 = NextDatePicker.RangePicker;
class Demo$5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dir: "rtl"
    };
    this.changeDir = this.changeDir.bind(this);
    this.showDialog = this.showDialog.bind(this);
  }
  changeDir(value) {
    this.setState({
      dir: value
    });
  }
  showDialog() {
    exported.confirm({
      title: "Confirm",
      content: "Are you sure you want to delete all alert e-mails waiting in queue?"
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      className: "change-rtl"
    }, /* @__PURE__ */ createElement("span", {
      style: {marginRight: 16}
    }, "Change direction of components:", " "), /* @__PURE__ */ createElement(Radio.Group, {
      shape: "button",
      size: "large",
      value: this.state.dir,
      onChange: this.changeDir
    }, /* @__PURE__ */ createElement(Radio, {
      key: "rtl",
      value: "rtl"
    }, "RTL"), /* @__PURE__ */ createElement(Radio, {
      key: "ltr",
      value: "ltr"
    }, "LTR"))), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("hr", null), /* @__PURE__ */ createElement(NextConfigProvider, {
      rtl: this.state.dir === "rtl"
    }, /* @__PURE__ */ createElement("div", {
      className: "locale-components",
      dir: this.state.dir
    }, /* @__PURE__ */ createElement(Button, {
      type: "primary",
      onClick: this.showDialog
    }, "Show Dialog"), /* @__PURE__ */ createElement(Select, {
      style: {width: "150px"},
      dataSource: ["hello", "bye"]
    }), /* @__PURE__ */ createElement(RangePicker$1, {
      showTime: true
    }), /* @__PURE__ */ createElement(NextCalendar, {
      style: {
        width: "350px",
        padding: "12px",
        border: "1px solid #C4C6CF",
        borderRadius: "3px"
      },
      shape: "card"
    }), /* @__PURE__ */ createElement(Timeline, {
      fold: [{foldArea: [1, 2], foldShow: true}]
    }, /* @__PURE__ */ createElement(Timeline.Item, {
      title: "Signed",
      content: "Signed, sign Alibaba is a small post office, thanks to the use of STO, look forward to once again at your service",
      time: "2016-06-10 10:30:00",
      state: "process"
    }), /* @__PURE__ */ createElement(Timeline.Item, {
      title: "Ship",
      content: "Express has arrived in Hangzhou, Zhejiang Binjiang company",
      time: "2016-06-10 09:30:00"
    }), /* @__PURE__ */ createElement(Timeline.Item, {
      title: "Ship",
      content: "Zhejiang Hangzhou Riverside company sent a member for you to send pieces",
      time: "2016-06-10 09:03:00"
    }), /* @__PURE__ */ createElement(Timeline.Item, {
      title: "Ship",
      content: "Zhejiang Hangzhou Transshipment Center has been issued",
      time: "2016-06-10 06:10:00"
    })), /* @__PURE__ */ createElement(NextMenu, {
      className: "my-menu",
      defaultOpenKeys: "sub-menu"
    }, /* @__PURE__ */ createElement(Item, {
      key: "1"
    }, "Option 1"), /* @__PURE__ */ createElement(Item, {
      disabled: true,
      key: "2"
    }, "Disabled option 2"), /* @__PURE__ */ createElement(Divider, {
      key: "divider"
    }), /* @__PURE__ */ createElement(Group, {
      label: "Group"
    }, /* @__PURE__ */ createElement(Item, {
      key: "group-1"
    }, "Group option 1"), /* @__PURE__ */ createElement(Item, {
      key: "group-2"
    }, "Group option 2")), /* @__PURE__ */ createElement(Divider, null), /* @__PURE__ */ createElement(SubMenu, {
      key: "sub-menu",
      label: "Sub menu"
    }, /* @__PURE__ */ createElement(Item, {
      key: "sub-1"
    }, "Sub option 1"), /* @__PURE__ */ createElement(Item, {
      key: "sub-2"
    }, "Sub option 2"), /* @__PURE__ */ createElement(Item, {
      disabled: true,
      key: "sub-3"
    }, /* @__PURE__ */ createElement("a", {
      href: "https://www.taobao.com/",
      target: "__blank"
    }, "Disabled Option Link 3")), /* @__PURE__ */ createElement(Item, {
      key: "sub-4"
    }, /* @__PURE__ */ createElement("a", {
      href: "https://www.taobao.com/",
      target: "__blank"
    }, "Option Link 4"))), /* @__PURE__ */ createElement(Item, {
      key: "3",
      helper: "CTRL+P"
    }, "Option 3"), /* @__PURE__ */ createElement(Item, {
      disabled: true,
      key: "4"
    }, /* @__PURE__ */ createElement("a", {
      href: "https://www.taobao.com/",
      target: "__blank"
    }, "Disabled Option Link")), /* @__PURE__ */ createElement(Item, {
      key: "5"
    }, /* @__PURE__ */ createElement("a", {
      href: "https://www.taobao.com/",
      target: "__blank"
    }, "Option Link"))))));
  }
}
function DemoComponent$5() {
  const content = /* @__PURE__ */ createElement(Demo$5, null);
  return /* @__PURE__ */ createElement(Style$5, null, content);
}
const Style$5 = qe.div`
  .my-menu {
    width: 200px;
  }

  .change-locale {
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 16px;
  }

  .locale-components > * {
    margin: 16px 0;
    display: block;
  }
`;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const modules = {};
modules["_basic"] = m0;
modules["_components"] = m1;
modules["_consumer"] = m2;
modules["_error-boundary"] = m3;
modules["_locale"] = m4;
modules["_rtl"] = m5;
export default modules;
