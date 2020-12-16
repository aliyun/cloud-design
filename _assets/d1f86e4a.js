import {f as _extends, _ as _inherits, b as _classCallCheck, d as _possibleConstructorReturn, j as _objectWithoutProperties, ac as uuid, R as React, A as Animate, C as Component, p as propTypes, a as NextConfigProvider, M as ReactDOM, c as createElement} from "./index.fc1c4ecb.js";
import "./b16eba57.js";
import {N as NextMessage} from "./12d2ddce.js";
import {N as NumberPicker} from "./53db7110.js";
import {B as Button} from "./7ead3c58.js";
import {q as qe} from "./7af9cfe0.js";
import "./4a749851.js";
import "./f060d6ce.js";
var _config = {
  offset: [30, 30],
  maxCount: 0,
  size: "large",
  placement: "tr",
  duration: 4500,
  getContainer: function getContainer() {
    return document.body;
  }
};
var _class, _temp;
var getAnimation = function getAnimation2(placement) {
  switch (placement) {
    case "tl":
    case "bl":
      return "slideInLeft";
    case "tr":
    case "br":
      return "slideInRight";
    default:
      return null;
  }
};
var Notification = (_temp = _class = function(_Component) {
  _inherits(Notification2, _Component);
  function Notification2(props) {
    _classCallCheck(this, Notification2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _this.close = function(key2) {
      var notifications = _this.state.notifications;
      var index = notifications.findIndex(function(notification) {
        return notification.key === key2;
      });
      if (index === -1)
        return;
      var _notifications$index = notifications[index], onClose = _notifications$index.onClose, timer = _notifications$index.timer;
      notifications.splice(index, 1);
      var timerIndex = _this.timers.findIndex(function(v) {
        return v === timer;
      });
      if (timerIndex !== -1) {
        _this.timers.splice(timerIndex, 1);
      }
      if (timer) {
        clearTimeout(timer);
      }
      _this.setState({
        notifications
      });
      if (onClose) {
        onClose();
      }
    };
    _this.open = function(_ref) {
      var key2 = _ref.key, duration2 = _ref.duration, others = _objectWithoutProperties(_ref, ["key", "duration"]);
      var notifications = [].concat(_this.state.notifications);
      if (!key2) {
        key2 = uuid("notification-");
      }
      var index = notifications.findIndex(function(notification) {
        return notification.key === key2;
      });
      if (index !== -1) {
        notifications[index] = _extends({}, notifications[index], others);
      } else {
        var timer = void 0;
        if (duration2 > 0) {
          timer = setTimeout(function() {
            _this.close(key2);
          }, duration2);
          _this.timers.push(timer);
        }
        notifications.push(_extends({}, others, {
          key: key2,
          timer
        }));
      }
      if (_config.maxCount > 0 && _config.maxCount < notifications.length) {
        while (notifications.length > _config.maxCount) {
          var _key = notifications[0].key;
          _this.close(_key);
          notifications.splice(0, 1);
        }
      }
      _this.setState({
        notifications
      });
      return key2;
    };
    _this.state = {
      notifications: []
    };
    _this.timers = [];
    return _this;
  }
  Notification2.prototype.componentWillUnmount = function componentWillUnmount() {
    this.timers.forEach(function(timer) {
      if (!timer)
        return;
      clearTimeout(timer);
    });
  };
  Notification2.prototype.render = function render() {
    var _ref2;
    var prefix = this.props.prefix;
    var notifications = this.state.notifications;
    return React.createElement("div", {
      className: prefix + "notification",
      style: (_ref2 = {}, _ref2[_config.placement.indexOf("b") === 0 ? "bottom" : "top"] = _config.offset[1], _ref2[_config.placement.indexOf("l") !== -1 ? "left" : "right"] = _config.offset[0], _ref2)
    }, React.createElement(Animate, {
      animationAppear: true,
      animation: {
        enter: getAnimation(_config.placement),
        leave: prefix + "notification-fade-leave"
      },
      singleMode: false
    }, notifications.map(function(_ref3) {
      var key2 = _ref3.key, type = _ref3.type, title = _ref3.title, content = _ref3.content, icon = _ref3.icon, onClick = _ref3.onClick, style = _ref3.style, className = _ref3.className;
      return React.createElement(NextMessage, {
        key: key2,
        shape: "toast",
        type,
        title,
        iconType: icon,
        closeable: true,
        animation: false,
        size: _config.size,
        visible: true,
        style,
        className,
        onClick,
        onClose: function onClose() {
          return close(key2);
        }
      }, content);
    })));
  };
  return Notification2;
}(Component), _class.propTypes = {
  prefix: propTypes.string
}, _class.defaultProps = {
  prefix: "next-"
}, _temp);
Notification.displayName = "Notification";
var ConfigedNotification = NextConfigProvider.config(Notification, {
  exportNames: ["open", "close"]
});
var instance = void 0;
var mounting = false;
var waitOpens = [];
function open() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  if (!options.title && !options.content)
    return;
  var duration2 = !options.duration && options.duration !== 0 ? _config.duration : options.duration;
  if (!instance) {
    if (!options.key) {
      options.key = uuid("notification-");
    }
    waitOpens.push(_extends({}, options, {
      duration: duration2
    }));
    if (!mounting) {
      mounting = true;
      var div = document.createElement("div");
      if (_config.getContainer) {
        var root = _config.getContainer();
        root.appendChild(div);
      } else {
        document.body.appendChild(div);
      }
      ReactDOM.render(React.createElement(NextConfigProvider, NextConfigProvider.getContext(), React.createElement(ConfigedNotification, {
        ref: function ref(_ref4) {
          instance = _ref4;
        }
      })), div, function() {
        waitOpens.forEach(function(item) {
          return instance.open(item);
        });
        waitOpens = [];
        mounting = false;
      });
    }
    return options.key;
  }
  var key2 = instance.open(_extends({}, options, {
    duration: duration2
  }));
  return key2;
}
function close(key2) {
  if (!instance) {
    var index = waitOpens.findIndex(function(item) {
      return item.key === key2;
    });
    waitOpens.splice(index, 1);
    return;
  }
  instance.close(key2);
}
function destroy() {
  if (!instance)
    return;
  var mountNode = ReactDOM.findDOMNode(instance).parentNode;
  if (mountNode) {
    ReactDOM.unmountComponentAtNode(mountNode);
    mountNode.parentNode.removeChild(mountNode);
  }
}
var levels = {};
["success", "error", "warning", "notice", "help"].forEach(function(type) {
  levels[type] = function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return open(_extends({}, options, {
      type
    }));
  };
});
var NextNotification = _extends({
  config: function config() {
    for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return _extends.apply(void 0, [_config].concat(args));
  },
  open,
  close,
  destroy
}, levels);
const openNotification = () => {
  NextNotification.open({
    title: "Notification Title",
    content: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    onClick: () => {
      console.log("Notification Clicked!");
    }
  });
};
function DemoComponent() {
  const content = /* @__PURE__ */ createElement(Button, {
    type: "primary",
    onClick: openNotification
  }, "Open Notification");
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
let duration = 4500;
const openNotification$1 = () => {
  const args = {
    title: "Notification Title",
    content: "I will never close automatically. I will be close automatically. I will never close automatically.",
    duration
  };
  NextNotification.open(args);
};
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NumberPicker, {
    defaultValue: duration,
    onChange: (v) => duration = v || 0
  }), /* @__PURE__ */ createElement(Button, {
    type: "primary",
    onClick: openNotification$1,
    style: {marginLeft: 20}
  }, "Open Notification"));
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const openNotification$2 = () => {
  const args = {
    title: "Notification Title",
    content: "I will never close automatically. I will be close automatically. I will never close automatically.",
    icon: "smile"
  };
  NextNotification.open(args);
};
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Button, {
    type: "primary",
    onClick: openNotification$2,
    style: {marginLeft: 20}
  }, "Open Notification"));
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const openNotification$3 = (type) => {
  NextNotification.open({
    title: "Notification Title",
    content: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    type
  });
};
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "button-row"
  }, /* @__PURE__ */ createElement(Button, {
    onClick: () => openNotification$3("success")
  }, "success"), /* @__PURE__ */ createElement(Button, {
    onClick: () => openNotification$3("warning")
  }, "warning"), /* @__PURE__ */ createElement(Button, {
    onClick: () => openNotification$3("error")
  }, "error"), /* @__PURE__ */ createElement(Button, {
    onClick: () => openNotification$3("notice")
  }, "notice"), /* @__PURE__ */ createElement(Button, {
    onClick: () => openNotification$3("help")
  }, "help"));
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = qe.div`
  .button-row .next-btn {
    margin-right: 10px;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const openNotification$4 = (placement) => {
  NextNotification.config({placement});
  NextNotification.open({
    title: "Notification Title",
    content: "This is the content of the notification. This is the content of the notification. This is the content of the notification."
  });
};
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "button-row"
  }, /* @__PURE__ */ createElement(Button, {
    onClick: () => openNotification$4("tl")
  }, "Top Left"), /* @__PURE__ */ createElement(Button, {
    onClick: () => openNotification$4("tr")
  }, "Top Right"), /* @__PURE__ */ createElement(Button, {
    onClick: () => openNotification$4("bl")
  }, "Bottom Left"), /* @__PURE__ */ createElement(Button, {
    onClick: () => openNotification$4("br")
  }, "Bottom Right"));
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = qe.div`
  .button-row .next-btn {
    margin-right: 10px;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const openNotification$5 = () => {
  NextNotification.open({
    title: "Notification Title",
    content: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    style: {
      width: 600,
      marginLeft: -225
    }
  });
};
function DemoComponent$5() {
  const content = /* @__PURE__ */ createElement(Button, {
    type: "primary",
    onClick: openNotification$5
  }, "Open Notification");
  return /* @__PURE__ */ createElement(Style$5, null, content);
}
const Style$5 = qe.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const key = "updatable";
const openNotification$6 = () => {
  NextNotification.open({
    key,
    title: "Notification Title",
    content: "description."
  });
  setTimeout(() => {
    NextNotification.open({
      key,
      title: "New Title",
      content: "New description."
    });
  }, 1e3);
};
function DemoComponent$6() {
  const content = /* @__PURE__ */ createElement(Button, {
    type: "primary",
    onClick: openNotification$6
  }, "Open Notification");
  return /* @__PURE__ */ createElement(Style$6, null, content);
}
const Style$6 = qe.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const modules = {};
modules["_basic"] = m0;
modules["_duration"] = m1;
modules["_icon"] = m2;
modules["_level"] = m3;
modules["_position"] = m4;
modules["_style"] = m5;
modules["_update"] = m6;
export default modules;
