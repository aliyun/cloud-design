import {N as NextConfigProvider, R as React, x as NextInput, s as NextIcon, d as classnames, J as ReactDOM, I as useState, c as createElement, a7 as Fragment} from "./index.79f375bb.js";
import {N as NextBalloon} from "./7f28546e.js";
import "./5f69b0ea.js";
import {N as NextSwitch} from "./1155b13a.js";
import "./b2f22ff2.js";
import {e as exported} from "./d4a1894f.js";
import {H as He} from "./6639483f.js";
function off(node, eventName, callback, useCapture) {
  if (node.removeEventListener) {
    node.removeEventListener(eventName, callback, useCapture || false);
  }
}
function on(node, eventName, callback, useCapture) {
  if (node.addEventListener) {
    node.addEventListener(eventName, callback, useCapture || false);
  }
  return {
    off: () => off(node, eventName, callback, useCapture)
  };
}
function once(node, eventName, callback, useCapture) {
  return on(node, eventName, function __fn(...args) {
    callback.apply(this, args);
    off(node, eventName, __fn, useCapture);
  }, useCapture);
}
var _events = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  off,
  on,
  once
});
var _KEYCODE = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  ESCAPE: 27,
  LEFT_ARROW: 37,
  UP_ARROW: 38,
  RIGHT_ARROW: 39,
  DOWN_ARROW: 40,
  CONTROL: 17,
  OPTION: 18,
  CMD: 91,
  COMMAND: 91,
  DELETE: 8
};
const KEYCODE = _KEYCODE;
const events = _events;
const {Tooltip} = NextBalloon;
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.addDocumentEvents = () => {
      if (this.props.canCloseByEsc) {
        this._keydownEvents = events.on(document, "keydown", this.handleDocumentKeyDown);
      }
    };
    this.handleDocumentKeyDown = (e) => {
      if (this.state.visible && e.keyCode === KEYCODE.ESC) {
        this.setState({
          visible: false
        });
      }
    };
    this.removeDocumentEvents = () => {
      if (this._keydownEvents) {
        this._keydownEvents.off();
        this._keydownEvents = null;
      }
    };
    this.onSideDrawerVisibleChange = (checked) => {
      this.props.onSideDrawerVisibleChange(checked);
    };
    this.onEditTitleChange = (value) => {
      this.props.onEditTitleChange(value);
    };
    this.onEnterEditing = () => {
      this.setState({
        isEditing: true
      });
    };
    this.onLeaveEditing = () => {
      this.setState({
        isEditing: false
      });
    };
    this.onClose = () => {
      const {onClose} = this.props;
      if (!("visible" in this.props)) {
        this.setState({
          visible: false
        });
      }
      onClose();
    };
    this.renderTitle = () => {
      const {
        prefix,
        title,
        titleEditable,
        titleEditTooltip,
        titleInputWidth
      } = this.props;
      const {isEditing} = this.state;
      const editTitle = isEditing ? /* @__PURE__ */ React.createElement(NextInput, {
        autoFocus: true,
        value: title,
        onChange: this.onEditTitleChange,
        onBlur: this.onLeaveEditing,
        onPressEnter: this.onLeaveEditing,
        style: {width: titleInputWidth}
      }) : /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", {
        className: "edit-title"
      }, title), /* @__PURE__ */ React.createElement(Tooltip, {
        trigger: /* @__PURE__ */ React.createElement(exported, {
          className: `${prefix}modal-edit-icon`,
          type: "secondary",
          onClick: this.onEnterEditing,
          size: "small",
          text: true
        }, /* @__PURE__ */ React.createElement(NextIcon, {
          type: "pencil"
        })),
        align: "r"
      }, titleEditTooltip));
      return /* @__PURE__ */ React.createElement("div", {
        className: `${prefix}modal-title`
      }, titleEditable ? editTitle : title);
    };
    this.renderHeader = () => {
      const {
        prefix,
        description,
        operations,
        sideDrawer,
        sideDrawerLabel,
        sideDrawerVisible
      } = this.props;
      const title = this.renderTitle();
      return /* @__PURE__ */ React.createElement("div", {
        className: `${prefix}modal-header`
      }, /* @__PURE__ */ React.createElement("div", {
        className: "left-part"
      }, title, /* @__PURE__ */ React.createElement("div", {
        className: `${prefix}modal-description`
      }, description)), /* @__PURE__ */ React.createElement("div", {
        className: "right-part"
      }, /* @__PURE__ */ React.createElement("div", {
        className: `${prefix}modal-operations`
      }, operations), sideDrawer ? /* @__PURE__ */ React.createElement("div", {
        className: `${prefix}modal-side-drawer-switch`
      }, /* @__PURE__ */ React.createElement("span", {
        className: `${prefix}modal-side-drawer-switch-label`
      }, sideDrawerLabel), /* @__PURE__ */ React.createElement(NextSwitch, {
        size: "small",
        checked: sideDrawerVisible,
        onChange: this.onSideDrawerVisibleChange
      })) : null, /* @__PURE__ */ React.createElement(exported, {
        className: `${prefix}modal-close`,
        onClick: this.onClose,
        size: "small",
        text: true
      }, /* @__PURE__ */ React.createElement(NextIcon, {
        type: "remove"
      }))));
    };
    this.renderBody = () => {
      const {
        prefix,
        sideDrawer,
        sideDrawerVisible,
        sideDrawerWidth,
        children
      } = this.props;
      return /* @__PURE__ */ React.createElement("div", {
        className: `${prefix}modal-body`
      }, /* @__PURE__ */ React.createElement("div", {
        className: `${prefix}modal-children`
      }, children), sideDrawer ? /* @__PURE__ */ React.createElement("div", {
        className: classnames({
          [`${prefix}modal-side-drawer`]: true,
          [`${prefix}modal-side-drawer-visible`]: sideDrawerVisible
        }),
        style: {
          width: sideDrawerVisible ? sideDrawerWidth : 0
        }
      }, sideDrawer) : null);
    };
    this.renderModal = () => {
      const {prefix, className, style} = this.props;
      const header = this.renderHeader();
      const body = this.renderBody();
      return /* @__PURE__ */ React.createElement("div", {
        className: classnames({
          [`${prefix}modal`]: true,
          [className]: !!className
        }),
        style
      }, header, body);
    };
    this.state = {
      visible: "visible" in props ? props.visible : props.defaultVisible || false,
      isEditing: false
    };
    this.container = document.createElement("div");
  }
  componentDidMount() {
    document.body.appendChild(this.container);
    if (this.state.visible) {
      document.body.classList.add("next-modal-open");
    }
    this.addDocumentEvents();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.props.visible) {
      this.setState({
        visible: nextProps.visible
      });
    }
  }
  componentDidUpdate() {
    if (this.state.visible === false) {
      document.body.classList.remove("next-modal-open");
    }
  }
  componentWillUnmount() {
    document.body.removeChild(this.container);
    document.body.classList.remove("next-modal-open");
    this.container = null;
    this.removeDocumentEvents();
  }
  render() {
    const {visible} = this.state;
    if (visible) {
      return ReactDOM.createPortal(this.renderModal(), this.container);
    }
    return null;
  }
}
Modal.defaultProps = {
  prefix: "next-",
  sideDrawerWidth: 400,
  titleEditTooltip: "点击即可编辑",
  onClose: () => {
  },
  onSideDrawerVisibleChange: () => {
  },
  onEditTitleChange: () => {
  },
  canCloseByEsc: true
};
var Modal$1 = NextConfigProvider.config(Modal, "Modal");
const Demo = () => {
  const [visible, onVisibleChange] = useState(false);
  const onClose = () => {
    onVisibleChange(false);
  };
  const onOpen = () => {
    onVisibleChange(true);
  };
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
    onClick: onOpen
  }, "打开Modal"), /* @__PURE__ */ createElement(Modal$1, {
    title: "标题",
    description: "描述区域",
    visible,
    onClose,
    operations: /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(exported, {
      type: "secondary"
    }, /* @__PURE__ */ createElement(NextIcon, {
      type: "paper-pen"
    }), "编辑"), /* @__PURE__ */ createElement(exported, {
      type: "secondary"
    }, /* @__PURE__ */ createElement(NextIcon, {
      type: "save"
    }), "保存"))
  }, /* @__PURE__ */ createElement("div", {
    className: "custom-content"
  }))));
};
const Style = He.div`
  .custom-content {
    height: 2000px;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Demo
});
const Demo$1 = () => {
  const [visible, onVisibleChange] = useState(false);
  const onClose = () => {
    onVisibleChange(false);
  };
  const onOpen = () => {
    onVisibleChange(true);
  };
  const [sideDrawerVisible, onSideDrawerVisibleChange] = useState(true);
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
    onClick: onOpen
  }, "打开Modal"), /* @__PURE__ */ createElement(Modal$1, {
    title: "标题",
    description: "描述区域",
    visible,
    onClose,
    sideDrawerLabel: "侧栏",
    sideDrawer: /* @__PURE__ */ createElement("div", {
      className: "custom-content"
    }),
    sideDrawerVisible,
    onSideDrawerVisibleChange,
    operations: /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(exported, {
      type: "secondary"
    }, /* @__PURE__ */ createElement(NextIcon, {
      type: "paper-pen"
    }), "编辑"), /* @__PURE__ */ createElement(exported, {
      type: "secondary"
    }, /* @__PURE__ */ createElement(NextIcon, {
      type: "save"
    }), "保存"))
  }, /* @__PURE__ */ createElement("div", {
    className: "custom-content"
  }))));
};
const Style$1 = He.div`
  .custom-content {
    height: 2000px;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Demo$1
});
const Demo$2 = () => {
  const [visible, onVisibleChange] = useState(false);
  const onClose = () => {
    onVisibleChange(false);
  };
  const onOpen = () => {
    onVisibleChange(true);
  };
  const [sideDrawerVisible, onSideDrawerVisibleChange] = useState(true);
  const [title, onChangeTitle] = useState("标题");
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
    onClick: onOpen
  }, "打开Modal"), /* @__PURE__ */ createElement(Modal$1, {
    title,
    titleEditable: true,
    onEditTitleChange: onChangeTitle,
    visible,
    onClose,
    sideDrawerLabel: "侧栏",
    sideDrawer: /* @__PURE__ */ createElement("div", {
      className: "custom-content"
    }),
    sideDrawerVisible,
    onSideDrawerVisibleChange,
    operations: /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(exported, {
      type: "secondary"
    }, /* @__PURE__ */ createElement(NextIcon, {
      type: "paper-pen"
    }), "编辑"), /* @__PURE__ */ createElement(exported, {
      type: "secondary"
    }, /* @__PURE__ */ createElement(NextIcon, {
      type: "save"
    }), "保存"))
  }, /* @__PURE__ */ createElement("div", {
    className: "custom-content"
  }))));
};
const Style$2 = He.div`
  .custom-content {
    height: 2000px;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Demo$2
});
const modules = {};
modules["_basic"] = m0;
modules["_side-drawer"] = m1;
modules["_title-editable"] = m2;
export default modules;
