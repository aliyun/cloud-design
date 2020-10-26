import {c as createElement, C as Component, B as Radio, N as NextConfigProvider} from "./index.91461bfc.js";
import "./2de87bf0.js";
import {e as exported$1} from "./f0f0ccc0.js";
import {N as NextMessage} from "./5cc1c7a9.js";
import {N as NextSwitch} from "./7f5e2841.js";
import {e as exported} from "./3fc9f385.js";
import {H as He} from "./0ad0a923.js";
class Demo extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false
    };
    this.onOpen = () => {
      this.setState({
        visible: true
      });
    };
    this.onClose = () => {
      this.setState({
        visible: false
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
      onClick: this.onOpen,
      type: "primary"
    }, "Open dialog"), /* @__PURE__ */ createElement(exported$1, {
      title: "Welcome to Alibaba.com",
      visible: this.state.visible,
      autoFocus: true,
      onOk: this.onClose.bind(this, "okClick"),
      onCancel: this.onClose.bind(this, "cancelClick"),
      onClose: this.onClose,
      cancelProps: {"aria-label": "cancel"},
      okProps: {"aria-label": "ok"}
    }, /* @__PURE__ */ createElement("p", {
      tabIndex: "0"
    }, " ", "Start your business here by searching a popular product")));
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
class Demo$1 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false
    };
    this.onOpen = () => {
      this.setState({
        visible: true
      });
    };
    this.onClose = (reason) => {
      console.log(reason);
      this.setState({
        visible: false
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
      onClick: this.onOpen,
      type: "primary"
    }, "Open dialog"), /* @__PURE__ */ createElement(exported$1, {
      title: "Welcome to Alibaba.com",
      visible: this.state.visible,
      onOk: this.onClose.bind(this, "okClick"),
      onCancel: this.onClose.bind(this, "cancelClick"),
      onClose: this.onClose
    }, "Start your business here by searching a popular product"));
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
class Demo$2 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false
    };
    this.onOpenFullyCustomized = () => {
      this.setState({
        fullyCustomizedVisible: true
      });
    };
    this.onCloseFullyCustomized = () => {
      this.setState({
        fullyCustomizedVisible: false
      });
    };
    this.onOpenTextCustomized = () => {
      this.setState({
        textCustomizedVisible: true
      });
    };
    this.onCloseTextCustomized = () => {
      this.setState({
        textCustomizedVisible: false
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
      onClick: this.onOpenFullyCustomized,
      type: "primary"
    }, "Fully Customized Footer"), " ", " ", /* @__PURE__ */ createElement(exported$1, {
      title: "Welcome to Alibaba.com",
      footer: /* @__PURE__ */ createElement(exported, {
        warning: true,
        type: "primary",
        onClick: this.onCloseFullyCustomized
      }, "Customize footer"),
      visible: this.state.fullyCustomizedVisible,
      onOk: this.onCloseFullyCustomized,
      onCancel: this.onCloseFullyCustomized,
      onClose: this.onCloseFullyCustomized
    }, "Start your business here by searching a popular product"), /* @__PURE__ */ createElement(exported, {
      onClick: this.onOpenTextCustomized,
      type: "primary"
    }, "Text Only Customize"), /* @__PURE__ */ createElement(exported$1, {
      title: "Welcome to Alibaba.com",
      visible: this.state.textCustomizedVisible,
      onOk: this.onCloseTextCustomized,
      onCancel: this.onCloseTextCustomized,
      onClose: this.onCloseTextCustomized,
      okProps: {children: "Custom OK", className: "asdf"},
      cancelProps: {children: "Custom Cancel"}
    }, "Start your business here by searching a popular product"));
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
class Demo$3 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false
    };
    this.onOpen = () => {
      this.setState({
        visible: true
      });
    };
    this.onClose = () => {
      this.setState({
        visible: false
      });
    };
  }
  render() {
    const {visible} = this.state;
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
      onClick: this.onOpen,
      type: "primary"
    }, "Open dialog"), /* @__PURE__ */ createElement(exported$1, {
      title: "Fixed Height",
      visible,
      height: "400px",
      onOk: this.onClose,
      onCancel: this.onClose,
      onClose: this.onClose
    }, "Small Content in a fixed size Dialog"));
  }
}
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(Demo$3, null));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
class Demo$4 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false,
      footerActions: ["ok", "cancel"],
      footerAlign: "right",
      loading: false
    };
    this.onOpen = () => {
      this.setState({
        visible: true
      });
    };
    this.onClose = () => {
      this.setState({
        visible: false
      });
    };
    this.toggleFooterActions = (footerActionsStr) => {
      this.setState({
        footerActions: footerActionsStr.split(",")
      });
    };
    this.toggleFooterAlign = (footerAlign) => {
      this.setState({
        footerAlign
      });
    };
    this.toggleOkLoader = (loading) => {
      this.setState({
        loading
      });
    };
  }
  render() {
    const {visible, footerActions, footerAlign, loading} = this.state;
    const okProps = {
      loading
    };
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
      onClick: this.onOpen,
      type: "primary"
    }, "Open dialog"), /* @__PURE__ */ createElement(exported$1, {
      title: "Customize buttons of footer",
      visible,
      footerActions,
      footerAlign,
      onOk: this.onClose,
      onCancel: this.onClose,
      onClose: this.onClose,
      okProps
    }, /* @__PURE__ */ createElement("div", {
      className: "demo-content"
    }, /* @__PURE__ */ createElement(Radio.Group, {
      className: "demo-radio-group",
      shape: "button",
      value: footerActions.join(","),
      onChange: this.toggleFooterActions
    }, /* @__PURE__ */ createElement(Radio, {
      value: "ok,cancel"
    }, "ok is left"), /* @__PURE__ */ createElement(Radio, {
      value: "cancel,ok"
    }, "ok is right"), /* @__PURE__ */ createElement(Radio, {
      value: "ok"
    }, "only ok"), /* @__PURE__ */ createElement(Radio, {
      value: "cancel"
    }, "only cancel")), /* @__PURE__ */ createElement(Radio.Group, {
      className: "demo-radio-group",
      shape: "button",
      value: footerAlign,
      onChange: this.toggleFooterAlign
    }, /* @__PURE__ */ createElement(Radio, {
      value: "left"
    }, "left"), /* @__PURE__ */ createElement(Radio, {
      value: "center"
    }, "center"), /* @__PURE__ */ createElement(Radio, {
      value: "right"
    }, "right")), /* @__PURE__ */ createElement(Radio.Group, {
      className: "demo-radio-group",
      shape: "button",
      value: loading,
      onChange: this.toggleOkLoader
    }, /* @__PURE__ */ createElement(Radio, {
      value: false
    }, "Loading Off"), /* @__PURE__ */ createElement(Radio, {
      value: true
    }, "Loading On")))));
  }
}
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement(Demo$4, null));
}
const Style$4 = He.div`
  .demo-content {
    padding: 10px;
    border: 2px dashed #ddd;
    background: #f8f8f8;
  }

  .demo-radio-group {
    display: block;
  }

  .demo-radio-group + .demo-radio-group {
    margin-top: 10px;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const largeContent = new Array(30).fill(/* @__PURE__ */ createElement("p", null, "Start your business here by searching a popular product"));
class Demo$5 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false,
      isFullScreen: false,
      closeOnMaskClick: false
    };
    this.onOpen = () => {
      this.setState({
        visible: true
      });
    };
    this.onClose = () => {
      this.setState({
        visible: false
      });
    };
    this.toggleIsFullScreen = () => {
      this.setState({
        isFullScreen: !this.state.isFullScreen
      });
    };
    this.toggleCloseOnMaskClick = () => {
      this.setState({
        closeOnMaskClick: !this.state.closeOnMaskClick
      });
    };
  }
  render() {
    const {visible, isFullScreen, closeOnMaskClick} = this.state;
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      style: {display: "block", marginBottom: "10px"}
    }, "When the height of the dialog exceeds the viewport height of the browser, whether to show the scroll bar:"), /* @__PURE__ */ createElement(NextSwitch, {
      style: {display: "block", marginBottom: "10px"},
      checked: isFullScreen,
      onChange: this.toggleIsFullScreen
    }), /* @__PURE__ */ createElement("div", {
      style: {display: "block", marginBottom: "10px"}
    }, "Close on mask click:"), /* @__PURE__ */ createElement(NextSwitch, {
      style: {display: "block", marginBottom: "10px"},
      checked: closeOnMaskClick,
      onChange: this.toggleCloseOnMaskClick
    }), /* @__PURE__ */ createElement(exported, {
      onClick: this.onOpen,
      type: "primary"
    }, "Open dialog"), /* @__PURE__ */ createElement(exported$1, {
      title: "Welcome to Alibaba.com",
      visible,
      isFullScreen,
      closeMode: closeOnMaskClick ? ["close", "esc", "mask"] : ["close", "esc"],
      onOk: this.onClose,
      onCancel: this.onClose,
      onClose: this.onClose
    }, largeContent));
  }
}
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement(Demo$5, null));
}
const Style$5 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
class Demo$6 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false,
      loading: false
    };
    this.onOpen = () => {
      this.setState({
        visible: true
      });
    };
    this.onOk = () => {
      return new Promise((resolve) => {
        this.setState({
          loading: true
        });
        setTimeout(resolve, 2e3);
      }).then(() => {
        NextMessage.success("Deleted successfully!");
        this.setState({
          loading: false,
          visible: false
        });
      });
    };
    this.onClose = () => {
      this.setState({
        visible: false
      });
    };
  }
  render() {
    const okProps = {
      loading: this.state.loading
    };
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
      onClick: this.onOpen,
      type: "primary"
    }, "Dialog Promise"), /* @__PURE__ */ createElement(exported$1, {
      title: "Welcome to Alibaba.com",
      visible: this.state.visible,
      okProps,
      onOk: this.onOk,
      onCancel: this.onClose,
      onClose: this.onClose
    }, "Start your business here by searching a popular product"));
  }
}
const popupConfirm = () => {
  exported$1.confirm({
    title: "Confirm",
    content: "Do you confirm deleting this content?",
    onOk: () => {
      return new Promise((resolve) => {
        setTimeout(resolve, 2e3);
      }).then(() => {
        NextMessage.success("Deleted successfully!");
      });
    }
  });
};
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Demo$6, null), /* @__PURE__ */ createElement(exported, {
    type: "primary",
    warning: true,
    onClick: popupConfirm
  }, "Quick Confirm Promise")));
}
const Style$6 = He.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const popupAlert = () => {
  exported$1.alert({
    title: "Alert",
    content: "alert content alert content...",
    okProps: {children: "Custom OK"},
    onOk: () => console.log("ok")
  });
};
const popupConfirm$1 = () => {
  exported$1.confirm({
    title: "Confirm",
    content: "confirm content confirm content...",
    onOk: () => console.log("ok"),
    onCancel: () => console.log("cancel")
  });
};
const popupShow = () => {
  const dialog = exported$1.show({
    title: "Custom",
    content: "custom content custom content...",
    footer: /* @__PURE__ */ createElement(exported, {
      warning: true,
      type: "primary",
      onClick: () => dialog.hide()
    }, "Custom button")
  });
};
const popupCustomIcon = () => {
  exported$1.confirm({
    title: "Confirm",
    content: 'set icon as "warning" ',
    messageProps: {
      type: "warning"
    },
    onOk: () => console.log("ok"),
    onCancel: () => console.log("cancel")
  });
};
function DemoComponent$7() {
  return /* @__PURE__ */ createElement(Style$7, null, /* @__PURE__ */ createElement(NextConfigProvider, {
    locale: {Dialog: {ok: "OK", cancel: "Cancel"}}
  }, /* @__PURE__ */ createElement("span", null, /* @__PURE__ */ createElement(exported, {
    onClick: popupAlert
  }, "Alert"), "  ", /* @__PURE__ */ createElement(exported, {
    onClick: popupConfirm$1
  }, "Confirm"), "  ", /* @__PURE__ */ createElement(exported, {
    onClick: popupShow
  }, "Show"), "  ", /* @__PURE__ */ createElement(exported, {
    onClick: popupCustomIcon
  }, "Custom Icon"))));
}
const Style$7 = He.div``;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
const shortContent = /* @__PURE__ */ createElement("p", null, "Start your business here by searching a popular product");
const longContent = [
  /* @__PURE__ */ createElement("p", {
    key: "0"
  }, "Start your business here by searching a popular product"),
  /* @__PURE__ */ createElement("p", {
    key: "1"
  }, "Start your business here by searching a popular product"),
  /* @__PURE__ */ createElement("p", {
    key: "2"
  }, "Start your business here by searching a popular product"),
  /* @__PURE__ */ createElement("p", {
    key: "3"
  }, "Start your business here by searching a popular product")
];
class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false,
      short: true,
      shouldUpdatePosition: true
    };
    this.onOpen = () => {
      this.setState({
        visible: true,
        short: true
      });
    };
    this.onClose = () => {
      this.setState({
        visible: false
      });
    };
    this.toggleShouldUpdatePosition = () => {
      this.setState({
        shouldUpdatePosition: !this.state.shouldUpdatePosition
      });
    };
    this.modifyContent = () => {
      this.setState({
        short: !this.state.short
      });
    };
  }
  render() {
    const {visible, short, shouldUpdatePosition} = this.state;
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      style: {display: "block", marginBottom: "10px"}
    }, "Whether to update the dialog position when the dialog height changes:"), /* @__PURE__ */ createElement(NextSwitch, {
      style: {display: "block", marginBottom: "10px"},
      checked: shouldUpdatePosition,
      onChange: this.toggleShouldUpdatePosition
    }), /* @__PURE__ */ createElement(exported, {
      onClick: this.onOpen,
      type: "primary"
    }, "Open dialog"), /* @__PURE__ */ createElement(exported$1, {
      title: "Welcome to Alibaba.com",
      visible,
      onOk: this.onClose.bind(this, "okClick"),
      onCancel: this.onClose.bind(this, "cancelClick"),
      onClose: this.onClose,
      shouldUpdatePosition
    }, /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: this.modifyContent
    }, "Change content"), short ? shortContent : longContent));
  }
}
function DemoComponent$8() {
  return /* @__PURE__ */ createElement(Style$8, null, /* @__PURE__ */ createElement(App, null));
}
const Style$8 = He.div``;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
const BeforeFix = () => {
  return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
    onClick: () => {
      exported$1.confirm({
        title: "Dialog.confirm 命令式弹窗"
      });
    }
  }, "使用 Dialog.confirm"));
};
const AfterFix = exported$1.withContext(({contextDialog}) => {
  return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
    onClick: () => {
      contextDialog.confirm({
        title: "Dialog.withContext 命令式弹窗"
      });
    }
  }, "使用 Dialog.withContext"));
});
class Demo$7 extends Component {
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextConfigProvider, {
      locale: {
        Dialog: {
          close: "关闭（根组件文案）",
          ok: "确认（根组件文案）",
          cancel: "取消（根组件文案）"
        }
      }
    }, /* @__PURE__ */ createElement(NextConfigProvider, {
      locale: {
        Dialog: {
          close: "关闭（局部文案）",
          ok: "确认（局部文案）",
          cancel: "取消（局部文案）"
        }
      }
    }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(BeforeFix, null), /* @__PURE__ */ createElement(AfterFix, null)))));
  }
}
function DemoComponent$9() {
  return /* @__PURE__ */ createElement(Style$9, null, /* @__PURE__ */ createElement(Demo$7, null));
}
const Style$9 = He.div``;
var m9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$9
});
const modules = {};
modules["_accessibility"] = m0;
modules["_basic"] = m1;
modules["_customize-footer"] = m2;
modules["_fixed-height"] = m3;
modules["_footer"] = m4;
modules["_large-content"] = m5;
modules["_promise"] = m6;
modules["_quick"] = m7;
modules["_should-update-position"] = m8;
modules["_withContext"] = m9;
export default modules;
