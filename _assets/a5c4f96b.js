import {c as createElement, C as Component} from "./index.9ac755a3.js";
import {H as He} from "./4ad0c37a.js";
import "./1efa18cd.js";
import "./509b26c1.js";
import "./cc041426.js";
import "./9cc958bb.js";
import "./ca58aca8.js";
import "./d88829e1.js";
import {R as Radio} from "./2a58941b.js";
import {N as NextMessage} from "./75ca14d5.js";
import {e as exported} from "./f50d056e.js";
const showSuccess = () => NextMessage.success("success");
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", {
    className: "message-toast-quick-demo"
  }, /* @__PURE__ */ createElement(exported, {
    onClick: showSuccess
  }, "success")));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: true
    };
    this.handleChange = () => {
      this.setState({
        visible: !this.state.visible
      });
    };
    this.handleClose = () => {
      this.setState({
        visible: false
      });
    };
  }
  render() {
    const {visible} = this.state;
    return /* @__PURE__ */ createElement("div", {
      className: "control-demo"
    }, /* @__PURE__ */ createElement(exported, {
      onClick: this.handleChange
    }, "Toggle Visible"), /* @__PURE__ */ createElement(NextMessage, {
      type: "warning",
      visible,
      title: "Warning",
      closeable: true,
      onClose: this.handleClose
    }, 'This item already has the label "travel". You can add a new label.'));
  }
}
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(App, null));
}
const Style$1 = He.div`
  .control-demo .next-btn.next-medium {
    margin-bottom: 10px;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const onClose = () => console.log("onClose triggered!");
const afterClose = () => console.log("afterClose triggered!");
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextMessage, {
    title: "title",
    closeable: true,
    onClose,
    afterClose
  }, "Content Content Content Content")));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const types = ["success", "warning", "error", "notice", "help", "loading"];
const list = [
  {
    value: "inline",
    label: "inline"
  },
  {
    value: "addon",
    label: "addon"
  },
  {
    value: "toast",
    label: "toast"
  }
];
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shape: "inline"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(shape) {
    this.setState({shape});
  }
  render() {
    const {shape} = this.state;
    return /* @__PURE__ */ createElement("div", {
      className: "message-shape-demo"
    }, /* @__PURE__ */ createElement("span", {
      className: "demo-label"
    }, "Select Shape："), /* @__PURE__ */ createElement(Radio.Group, {
      defaultValue: "inline",
      dataSource: list,
      value: this.state.shape,
      onChange: this.handleSelect
    }), types.map((type) => /* @__PURE__ */ createElement(NextMessage, {
      key: type,
      title: type,
      type,
      shape
    }, "Content Content Content Content")));
  }
}
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(Demo, null));
}
const Style$3 = He.div`
  .message-shape-demo .demo-label {
    display: inline-block;
    vertical-align: top;
    height: 22px;
    line-height: 22px;
  }

  .message-shape-demo .next-message-title {
    text-transform: capitalize;
  }

  .message-shape-demo .next-message {
    margin-top: 10px;
  }

  .message-shape-demo .next-message.next-message-toast {
    position: relative !important;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const types$1 = ["success", "warning", "error", "notice", "help", "loading"];
const list$1 = [
  {
    value: "medium",
    label: "medium"
  },
  {
    value: "large",
    label: "large"
  }
];
class Demo$1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "medium"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(size) {
    this.setState({size});
  }
  render() {
    const {size} = this.state;
    return /* @__PURE__ */ createElement("div", {
      className: "message-size-demo"
    }, /* @__PURE__ */ createElement("span", {
      className: "demo-label"
    }, "Select Size："), /* @__PURE__ */ createElement(Radio.Group, {
      defaultValue: "medium",
      dataSource: list$1,
      value: this.state.size,
      onChange: this.handleSelect
    }), types$1.map((type) => /* @__PURE__ */ createElement(NextMessage, {
      key: type,
      title: type,
      type,
      size
    }, "Content Content Content Content")));
  }
}
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement(Demo$1, null));
}
const Style$4 = He.div`
  .message-size-demo .demo-label {
    display: inline-block;
    vertical-align: top;
    height: 28px;
    line-height: 28px;
  }

  .message-size-demo .next-message-title {
    text-transform: capitalize;
  }

  .message-size-demo .next-message {
    margin-top: 10px;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const show = () => {
  NextMessage.show({
    type: "loading",
    content: "Will be closed after 3 seconds or manually click on the close button",
    afterClose: () => console.log("Closed the toast")
  });
};
const hide = () => NextMessage.hide();
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement("div", {
    className: "message-toast-demo"
  }, /* @__PURE__ */ createElement(exported, {
    onClick: show
  }, "Show"), /* @__PURE__ */ createElement(exported, {
    onClick: hide
  }, "Hide")));
}
const Style$5 = He.div`
  .message-toast-demo .next-btn.next-medium {
    margin-right: 10px;
  }
`;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const showSuccess$1 = () => NextMessage.success("success");
const showWarning = () => NextMessage.warning("warning");
const showError = () => NextMessage.error("error");
const showNotice = () => NextMessage.notice("notice");
const showHelp = () => NextMessage.help("help");
const showLoading = () => NextMessage.loading("loading");
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement("div", {
    className: "message-toast-quick-demo"
  }, /* @__PURE__ */ createElement(exported, {
    onClick: showSuccess$1
  }, "success"), /* @__PURE__ */ createElement(exported, {
    onClick: showWarning
  }, "warning"), /* @__PURE__ */ createElement(exported, {
    onClick: showError
  }, "error"), /* @__PURE__ */ createElement(exported, {
    onClick: showNotice
  }, "notice"), /* @__PURE__ */ createElement(exported, {
    onClick: showHelp
  }, "help"), /* @__PURE__ */ createElement(exported, {
    onClick: showLoading
  }, "loading")));
}
const Style$6 = He.div`
  .message-toast-quick-demo .next-btn.next-medium {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
function DemoComponent$7() {
  return /* @__PURE__ */ createElement(Style$7, null, /* @__PURE__ */ createElement("div", {
    className: "message-type-demo"
  }, /* @__PURE__ */ createElement(NextMessage, {
    title: "Success",
    type: "success"
  }, "Content Content Content Content"), /* @__PURE__ */ createElement(NextMessage, {
    title: "Warning",
    type: "warning"
  }, "Content Content Content Content"), /* @__PURE__ */ createElement(NextMessage, {
    title: "Error",
    type: "error"
  }, "Content Content Content Content"), /* @__PURE__ */ createElement(NextMessage, {
    title: "Notice",
    type: "notice"
  }, "Content Content Content Content"), /* @__PURE__ */ createElement(NextMessage, {
    title: "Help",
    type: "help"
  }, "Content Content Content Content"), /* @__PURE__ */ createElement(NextMessage, {
    title: "Loading",
    type: "loading"
  }, "Content Content Content Content")));
}
const Style$7 = He.div`
  .message-type-demo .next-message {
    margin-bottom: 10px;
  }
`;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
const modules = {};
modules["_accessibility"] = m0;
modules["_control"] = m1;
modules["_inline-close"] = m2;
modules["_shape"] = m3;
modules["_size"] = m4;
modules["_toast"] = m5;
modules["_toast-quick"] = m6;
modules["_type"] = m7;
export default modules;
