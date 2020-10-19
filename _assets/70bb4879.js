import {p as polyfill, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, e as _extends, d as classnames, R as React, C as Component, g as propTypes, j as _objectWithoutProperties, o as ReactDOM} from "./index.bb8dccba.js";
import {o as obj, g as guid} from "./6568bbcc.js";
import {N as NextConfigProvider, z as zhCN} from "./b6f4cd1d.js";
import {A as Animate} from "./e494a2e1.js";
import {N as NextOverlay} from "./fffc39de.js";
import {N as NextIcon} from "./d16919af.js";
var _class, _temp2;
var noop = function noop2() {
};
var Message = (_temp2 = _class = function(_Component) {
  _inherits(Message2, _Component);
  function Message2() {
    var _temp, _this, _ret;
    _classCallCheck(this, Message2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      visible: typeof _this.props.visible === "undefined" ? _this.props.defaultVisible : _this.props.visible
    }, _this.onClose = function() {
      if (!("visible" in _this.props)) {
        _this.setState({
          visible: false
        });
      }
      _this.props.onClose(false);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  Message2.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
    if ("visible" in props) {
      return {
        visible: props.visible
      };
    }
    return {};
  };
  Message2.prototype.render = function render() {
    var _classNames;
    var _props = this.props, prefix = _props.prefix, pure = _props.pure, className = _props.className, style = _props.style, type = _props.type, shape = _props.shape, size = _props.size, title = _props.title, children = _props.children, defaultVisible = _props.defaultVisible, propsVisible = _props.visible, icon = _props.iconType, closeable = _props.closeable, onClose = _props.onClose, afterClose = _props.afterClose, animation = _props.animation, rtl = _props.rtl, locale = _props.locale;
    var others = _extends({}, obj.pickOthers(Object.keys(Message2.propTypes), this.props));
    var visible = this.state.visible;
    var messagePrefix = prefix + "message";
    var classes = classnames((_classNames = {}, _classNames[messagePrefix] = true, _classNames[prefix + "message-" + type] = type, _classNames["" + prefix + shape] = shape, _classNames["" + prefix + size] = size, _classNames[prefix + "title-content"] = !!title, _classNames[prefix + "only-content"] = !title && !!children, _classNames[className] = className, _classNames));
    var newChildren = visible ? React.createElement("div", _extends({
      role: "alert",
      style
    }, others, {
      className: classes,
      dir: rtl ? "rtl" : void 0
    }), closeable ? React.createElement("a", {
      role: "button",
      "aria-label": locale.closeAriaLabel,
      className: messagePrefix + "-close",
      onClick: this.onClose
    }, React.createElement(NextIcon, {type: "close"})) : null, React.createElement(NextIcon, {
      className: messagePrefix + "-symbol " + (!icon && messagePrefix + "-symbol-icon"),
      type: icon
    }), title ? React.createElement("div", {className: messagePrefix + "-title"}, title) : null, children ? React.createElement("div", {className: messagePrefix + "-content"}, children) : null) : null;
    if (animation) {
      return React.createElement(Animate.Expand, {animationAppear: false, afterLeave: afterClose}, newChildren);
    }
    return newChildren;
  };
  return Message2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  pure: propTypes.bool,
  className: propTypes.string,
  style: propTypes.object,
  type: propTypes.oneOf(["success", "warning", "error", "notice", "help", "loading"]),
  shape: propTypes.oneOf(["inline", "addon", "toast"]),
  size: propTypes.oneOf(["medium", "large"]),
  title: propTypes.node,
  children: propTypes.node,
  defaultVisible: propTypes.bool,
  visible: propTypes.bool,
  iconType: propTypes.string,
  closeable: propTypes.bool,
  onClose: propTypes.func,
  afterClose: propTypes.func,
  animation: propTypes.bool,
  locale: propTypes.object,
  rtl: propTypes.bool
}, _class.defaultProps = {
  prefix: "next-",
  pure: false,
  type: "success",
  shape: "inline",
  size: "medium",
  defaultVisible: true,
  closeable: false,
  onClose: noop,
  afterClose: noop,
  animation: true,
  locale: zhCN.Message
}, _temp2);
Message.displayName = "Message";
var Message$1 = NextConfigProvider.config(polyfill(Message));
var _class$1, _temp2$1;
var config = NextConfigProvider.config;
var instance = void 0;
var timeouts = {};
var Mask = (_temp2$1 = _class$1 = function(_React$Component) {
  _inherits(Mask2, _React$Component);
  function Mask2() {
    var _temp, _this, _ret;
    _classCallCheck(this, Mask2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      visible: true
    }, _this.handleClose = function() {
      var silent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      _this.setState({
        visible: false
      });
      if (!silent) {
        _this.props.onClose && _this.props.onClose();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  Mask2.prototype.componentWillUnmount = function componentWillUnmount() {
    var timeoutId = this.props.timeoutId;
    if (timeoutId in timeouts) {
      var timeout = timeouts[timeoutId];
      clearTimeout(timeout);
      delete timeouts[timeoutId];
    }
  };
  Mask2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, type = _props.type, title = _props.title, content = _props.content, align = _props.align, offset = _props.offset, hasMask = _props.hasMask, afterClose = _props.afterClose, animation = _props.animation, overlayProps = _props.overlayProps, timeoutId = _props.timeoutId, className = _props.className, style = _props.style, others = _objectWithoutProperties(_props, ["prefix", "type", "title", "content", "align", "offset", "hasMask", "afterClose", "animation", "overlayProps", "timeoutId", "className", "style"]);
    var visible = this.state.visible;
    return React.createElement(NextOverlay, _extends({}, overlayProps, {
      prefix,
      animation,
      visible,
      align,
      offset,
      hasMask,
      afterClose
    }), React.createElement(Message$1, _extends({}, others, {
      prefix,
      visible: true,
      type,
      shape: "toast",
      title,
      style,
      className: prefix + "message-wrapper " + className,
      onClose: this.handleClose
    }), content));
  };
  return Mask2;
}(React.Component), _class$1.contextTypes = {
  prefix: propTypes.string
}, _class$1.propTypes = {
  prefix: propTypes.string,
  type: propTypes.string,
  title: propTypes.node,
  content: propTypes.node,
  align: propTypes.string,
  offset: propTypes.array,
  hasMask: propTypes.bool,
  afterClose: propTypes.func,
  animation: propTypes.oneOfType([propTypes.object, propTypes.bool]),
  overlayProps: propTypes.object,
  onClose: propTypes.func,
  timeoutId: propTypes.string,
  style: propTypes.object,
  className: propTypes.string
}, _class$1.defaultProps = {
  prefix: "next-",
  align: "tc tc",
  offset: [0, 30],
  hasMask: false,
  animation: {
    in: "pulse",
    out: "zoomOut"
  },
  style: {},
  className: ""
}, _temp2$1);
Mask.displayName = "Mask";
var NewMask = config(Mask);
var create = function create2(props) {
  var duration = props.duration, afterClose = props.afterClose, contextConfig = props.contextConfig, others = _objectWithoutProperties(props, ["duration", "afterClose", "contextConfig"]);
  var div = document.createElement("div");
  document.body.appendChild(div);
  var closeChain = function closeChain2() {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
    afterClose && afterClose();
  };
  var newContext = contextConfig;
  if (!newContext)
    newContext = NextConfigProvider.getContext();
  var mask = void 0, myRef = void 0, destroyed = false;
  var destroy = function destroy2() {
    var inc = mask && mask.getInstance();
    inc && inc.handleClose(true);
    destroyed = true;
  };
  ReactDOM.render(React.createElement(NextConfigProvider, newContext, React.createElement(NewMask, _extends({
    afterClose: closeChain
  }, others, {
    ref: function ref(_ref) {
      myRef = _ref;
    }
  }))), div, function() {
    mask = myRef;
    if (mask && destroyed) {
      destroy();
    }
  });
  return {
    component: mask,
    destroy
  };
};
function handleConfig(config2, type) {
  var newConfig = {};
  if (typeof config2 === "string" || React.isValidElement(config2)) {
    newConfig.title = config2;
  } else if (isObject(config2)) {
    newConfig = _extends({}, config2);
  }
  if (typeof newConfig.duration !== "number") {
    newConfig.duration = 3e3;
  }
  if (type) {
    newConfig.type = type;
  }
  return newConfig;
}
function isObject(obj2) {
  return {}.toString.call(obj2) === "[object Object]";
}
function open(config2, type) {
  close();
  config2 = handleConfig(config2, type);
  var timeoutId = guid();
  instance = create(_extends({}, config2, {timeoutId}));
  if (config2.duration > 0) {
    var timeout = setTimeout(close, config2.duration);
    timeouts[timeoutId] = timeout;
  }
}
function close() {
  if (instance) {
    instance.destroy();
    instance = null;
  }
}
function _show(config2) {
  open(config2);
}
function hide() {
  close();
}
function _success(config2) {
  open(config2, "success");
}
function _warning(config2) {
  open(config2, "warning");
}
function _error(config2) {
  open(config2, "error");
}
function _help(config2) {
  open(config2, "help");
}
function _loading(config2) {
  open(config2, "loading");
}
function _notice(config2) {
  open(config2, "notice");
}
var toast = {
  show: _show,
  hide,
  success: _success,
  warning: _warning,
  error: _error,
  help: _help,
  loading: _loading,
  notice: _notice
};
var withContext = function withContext2(WrappedComponent) {
  var HOC = function HOC2(props) {
    return React.createElement(NextConfigProvider.Consumer, null, function(contextConfig) {
      return React.createElement(WrappedComponent, _extends({}, props, {
        contextMessage: {
          show: function show() {
            var config2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return _show(_extends({}, config2, {contextConfig}));
          },
          hide,
          success: function success() {
            var config2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return _success(_extends({}, config2, {contextConfig}));
          },
          warning: function warning() {
            var config2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return _warning(_extends({}, config2, {contextConfig}));
          },
          error: function error() {
            var config2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return _error(_extends({}, config2, {contextConfig}));
          },
          help: function help() {
            var config2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return _help(_extends({}, config2, {contextConfig}));
          },
          loading: function loading() {
            var config2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return _loading(_extends({}, config2, {contextConfig}));
          },
          notice: function notice() {
            var config2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return _notice(_extends({}, config2, {contextConfig}));
          }
        }
      }));
    });
  };
  return HOC;
};
Message$1.show = toast.show;
Message$1.success = toast.success;
Message$1.warning = toast.warning;
Message$1.error = toast.error;
Message$1.notice = toast.notice;
Message$1.help = toast.help;
Message$1.loading = toast.loading;
Message$1.hide = toast.hide;
Message$1.withContext = withContext;
var NextMessage = NextConfigProvider.config(Message$1, {
  componentName: "Message"
});
export {NextMessage as N};
