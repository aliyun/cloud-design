import {i as func, o as obj, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, Q as guid, R as React, d as classnames, g as _extends, s as NextIcon, C as Component, h as propTypes, z as zhCN, T as focus, t as dom, e as events, k as _objectWithoutProperties, x as NextOverlay, E as env, N as NextConfigProvider, J as ReactDOM, q as log, j as hoistNonReactStatics_cjs} from "./index.112f9bd1.js";
import {N as NextButton} from "./cc57ab59.js";
import {N as NextMessage} from "./a2f25fce.js";
var _class, _temp;
var makeChain = func.makeChain;
var pickOthers = obj.pickOthers;
var noop = function noop2() {
};
var Inner = (_temp = _class = function(_Component) {
  _inherits(Inner2, _Component);
  function Inner2() {
    _classCallCheck(this, Inner2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Inner2.prototype.getNode = function getNode(name, ref) {
    this[name] = ref;
  };
  Inner2.prototype.renderHeader = function renderHeader() {
    var _props = this.props, prefix = _props.prefix, title = _props.title;
    if (title) {
      this.titleId = guid("dialog-title-");
      return React.createElement("div", {
        className: prefix + "dialog-header",
        id: this.titleId,
        ref: this.getNode.bind(this, "headerNode"),
        role: "heading",
        "aria-level": "1"
      }, title);
    }
    return null;
  };
  Inner2.prototype.renderBody = function renderBody() {
    var _props2 = this.props, prefix = _props2.prefix, children = _props2.children;
    if (children) {
      return React.createElement("div", {
        className: prefix + "dialog-body",
        ref: this.getNode.bind(this, "bodyNode")
      }, children);
    }
    return null;
  };
  Inner2.prototype.renderFooter = function renderFooter() {
    var _cx, _this2 = this;
    var _props3 = this.props, prefix = _props3.prefix, footer = _props3.footer, footerAlign = _props3.footerAlign, footerActions = _props3.footerActions, locale = _props3.locale, height = _props3.height;
    if (footer === false) {
      return null;
    }
    var newClassName = classnames((_cx = {}, _cx[prefix + "dialog-footer"] = true, _cx[prefix + "align-" + footerAlign] = true, _cx[prefix + "dialog-footer-fixed-height"] = !!height, _cx));
    var footerContent = footer === true || !footer ? footerActions.map(function(action) {
      var btnProps = _this2.props[action + "Props"];
      var newBtnProps = _extends({}, btnProps, {
        prefix,
        className: classnames(prefix + "dialog-btn", btnProps.className),
        onClick: makeChain(_this2.props["on" + (action[0].toUpperCase() + action.slice(1))], btnProps.onClick),
        children: btnProps.children || locale[action]
      });
      if (action === "ok") {
        newBtnProps.type = "primary";
      }
      return React.createElement(NextButton, _extends({key: action}, newBtnProps));
    }) : footer;
    return React.createElement("div", {
      className: newClassName,
      ref: this.getNode.bind(this, "footerNode")
    }, footerContent);
  };
  Inner2.prototype.renderCloseLink = function renderCloseLink() {
    var _props4 = this.props, prefix = _props4.prefix, closeable = _props4.closeable, onClose = _props4.onClose, locale = _props4.locale;
    if (closeable) {
      return React.createElement("a", {
        role: "button",
        "aria-label": locale.close,
        className: prefix + "dialog-close",
        onClick: onClose
      }, React.createElement(NextIcon, {
        className: prefix + "dialog-close-icon",
        type: "close"
      }));
    }
    return null;
  };
  Inner2.prototype.render = function render() {
    var _cx2;
    var _props5 = this.props, prefix = _props5.prefix, className = _props5.className, closeable = _props5.closeable, title = _props5.title, role = _props5.role, rtl = _props5.rtl, height = _props5.height;
    var others = pickOthers(Object.keys(Inner2.propTypes), this.props);
    var newClassName = classnames((_cx2 = {}, _cx2[prefix + "dialog"] = true, _cx2[prefix + "closeable"] = closeable, _cx2[className] = !!className, _cx2));
    var header = this.renderHeader();
    var body = this.renderBody();
    var footer = this.renderFooter();
    var closeLink = this.renderCloseLink();
    var ariaProps = {
      role,
      "aria-modal": "true"
    };
    if (title) {
      ariaProps["aria-labelledby"] = this.titleId;
    }
    others.style = _extends({}, others.style, {height});
    return React.createElement("div", _extends({}, ariaProps, {
      className: newClassName
    }, others, {
      dir: rtl ? "rtl" : void 0
    }), header, body, footer, closeLink);
  };
  return Inner2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  className: propTypes.string,
  title: propTypes.node,
  children: propTypes.node,
  footer: propTypes.oneOfType([propTypes.bool, propTypes.node]),
  footerAlign: propTypes.oneOf(["left", "center", "right"]),
  footerActions: propTypes.array,
  onOk: propTypes.func,
  onCancel: propTypes.func,
  okProps: propTypes.object,
  cancelProps: propTypes.object,
  closeable: propTypes.bool,
  onClose: propTypes.func,
  locale: propTypes.object,
  role: propTypes.string,
  rtl: propTypes.bool,
  height: propTypes.string
}, _class.defaultProps = {
  prefix: "next-",
  footerAlign: "right",
  footerActions: ["ok", "cancel"],
  onOk: noop,
  onCancel: noop,
  okProps: {},
  cancelProps: {},
  closeable: true,
  onClose: noop,
  locale: zhCN.Dialog,
  role: "dialog"
}, _temp);
Inner.displayName = "Inner";
var _class$1, _temp$1;
var noop$1 = function noop3() {
};
var limitTabRange = focus.limitTabRange;
var bindCtx = func.bindCtx;
var pickOthers$1 = obj.pickOthers;
var getStyle = dom.getStyle, setStyle = dom.setStyle;
function _getSize(dom2, name) {
  var boxSizing = getStyle(dom2, "boxSizing");
  if (env.ieVersion && ["width", "height"].indexOf(name) !== -1 && boxSizing === "border-box") {
    return parseFloat(dom2.getBoundingClientRect()[name].toFixed(1));
  } else {
    return getStyle(dom2, name);
  }
}
var Dialog = (_temp$1 = _class$1 = function(_Component) {
  _inherits(Dialog2, _Component);
  function Dialog2(props, context) {
    _classCallCheck(this, Dialog2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
    bindCtx(_this, ["onKeyDown", "beforePosition", "adjustPosition", "getOverlayRef"]);
    return _this;
  }
  Dialog2.prototype.componentDidMount = function componentDidMount() {
    events.on(document, "keydown", this.onKeyDown);
    if (!this.useCSSToPosition()) {
      this.adjustPosition();
    }
  };
  Dialog2.prototype.componentWillUnmount = function componentWillUnmount() {
    events.off(document, "keydown", this.onKeyDown);
  };
  Dialog2.prototype.useCSSToPosition = function useCSSToPosition() {
    var _props = this.props, align = _props.align, isFullScreen = _props.isFullScreen;
    return align === "cc cc" && isFullScreen;
  };
  Dialog2.prototype.onKeyDown = function onKeyDown(e) {
    var node = this.getInnerNode();
    if (node) {
      limitTabRange(node, e);
    }
  };
  Dialog2.prototype.beforePosition = function beforePosition() {
    if (this.props.visible && this.overlay) {
      var inner = this.getInner();
      if (inner) {
        var node = this.getInnerNode();
        if (this._lastDialogHeight !== _getSize(node, "height")) {
          this.revertSize(inner.bodyNode);
        }
      }
    }
  };
  Dialog2.prototype.adjustPosition = function adjustPosition() {
    if (this.props.visible && this.overlay) {
      var inner = this.getInner();
      if (inner) {
        var node = this.getInnerNode();
        var top = getStyle(node, "top");
        var minMargin = this.props.minMargin;
        if (top < minMargin) {
          top = minMargin;
          setStyle(node, "top", minMargin + "px");
        }
        var height = _getSize(node, "height");
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        if (viewportHeight < height + top * 2 - 1 || this.props.height) {
          this.adjustSize(inner, node, Math.min(height, viewportHeight - top * 2));
        } else {
          this.revertSize(inner.bodyNode);
        }
        this._lastDialogHeight = height;
      }
    }
  };
  Dialog2.prototype.adjustSize = function adjustSize(inner, node, expectHeight) {
    var headerNode = inner.headerNode, bodyNode = inner.bodyNode, footerNode = inner.footerNode;
    var _map = [headerNode, footerNode].map(function(node2) {
      return node2 ? _getSize(node2, "height") : 0;
    }), headerHeight = _map[0], footerHeight = _map[1];
    var padding = ["padding-top", "padding-bottom"].reduce(function(sum, attr) {
      return sum + getStyle(node, attr);
    }, 0);
    var maxBodyHeight = expectHeight - headerHeight - footerHeight - padding;
    if (maxBodyHeight < 0) {
      maxBodyHeight = 1;
    }
    if (bodyNode) {
      this.dialogBodyStyleMaxHeight = bodyNode.style.maxHeight;
      this.dialogBodyStyleOverflowY = bodyNode.style.overflowY;
      setStyle(bodyNode, {
        "max-height": maxBodyHeight + "px",
        "overflow-y": "auto"
      });
    }
  };
  Dialog2.prototype.revertSize = function revertSize(bodyNode) {
    setStyle(bodyNode, {
      "max-height": this.dialogBodyStyleMaxHeight,
      "overflow-y": this.dialogBodyStyleOverflowY
    });
  };
  Dialog2.prototype.mapcloseableToConfig = function mapcloseableToConfig(closeable) {
    return ["esc", "close", "mask"].reduce(function(ret, option) {
      var key = option.charAt(0).toUpperCase() + option.substr(1);
      var value = typeof closeable === "boolean" ? closeable : closeable.split(",").indexOf(option) > -1;
      if (option === "esc" || option === "mask") {
        ret["canCloseBy" + key] = value;
      } else {
        ret["canCloseBy" + key + "Click"] = value;
      }
      return ret;
    }, {});
  };
  Dialog2.prototype.getOverlayRef = function getOverlayRef(ref) {
    this.overlay = ref;
  };
  Dialog2.prototype.getInner = function getInner() {
    return this.overlay.getInstance().getContent();
  };
  Dialog2.prototype.getInnerNode = function getInnerNode() {
    return this.overlay.getInstance().getContentNode();
  };
  Dialog2.prototype.renderInner = function renderInner(closeable) {
    var _props2 = this.props, prefix = _props2.prefix, className = _props2.className, title = _props2.title, children = _props2.children, footer = _props2.footer, footerAlign = _props2.footerAlign, footerActions = _props2.footerActions, onOk = _props2.onOk, onCancel = _props2.onCancel, okProps = _props2.okProps, cancelProps = _props2.cancelProps, onClose = _props2.onClose, locale = _props2.locale, visible = _props2.visible, rtl = _props2.rtl, height = _props2.height;
    var others = pickOthers$1(Object.keys(Dialog2.propTypes), this.props);
    return React.createElement(Inner, _extends({
      prefix,
      className,
      title,
      footer,
      footerAlign,
      footerActions,
      onOk: visible ? onOk : noop$1,
      onCancel: visible ? onCancel : noop$1,
      okProps,
      cancelProps,
      locale,
      closeable,
      rtl,
      onClose: onClose.bind(this, "closeClick"),
      height
    }, others), children);
  };
  Dialog2.prototype.render = function render() {
    var _props3 = this.props, prefix = _props3.prefix, visible = _props3.visible, hasMask = _props3.hasMask, animation = _props3.animation, autoFocus = _props3.autoFocus, closeable = _props3.closeable, closeMode = _props3.closeMode, onClose = _props3.onClose, afterClose = _props3.afterClose, shouldUpdatePosition = _props3.shouldUpdatePosition, align = _props3.align, popupContainer = _props3.popupContainer, overlayProps = _props3.overlayProps, rtl = _props3.rtl;
    var useCSS = this.useCSSToPosition();
    var newCloseable = "closeMode" in this.props ? Array.isArray(closeMode) ? closeMode.join(",") : closeMode : closeable;
    var _mapcloseableToConfig = this.mapcloseableToConfig(newCloseable), canCloseByCloseClick = _mapcloseableToConfig.canCloseByCloseClick, closeConfig = _objectWithoutProperties(_mapcloseableToConfig, ["canCloseByCloseClick"]);
    var newOverlayProps = _extends({
      disableScroll: true,
      container: popupContainer
    }, overlayProps, {
      prefix,
      visible,
      animation,
      hasMask,
      autoFocus,
      afterClose
    }, closeConfig, {
      canCloseByOutSideClick: false,
      align: useCSS ? false : align,
      onRequestClose: onClose,
      needAdjust: false,
      ref: this.getOverlayRef,
      rtl,
      maskClass: useCSS ? prefix + "dialog-container" : "",
      isChildrenInMask: useCSS && hasMask
    });
    if (!useCSS) {
      newOverlayProps.beforePosition = this.beforePosition;
      newOverlayProps.onPosition = this.adjustPosition;
      newOverlayProps.shouldUpdatePosition = shouldUpdatePosition;
    }
    var inner = this.renderInner(canCloseByCloseClick);
    return React.createElement(NextOverlay, newOverlayProps, useCSS && !hasMask ? React.createElement("div", {className: prefix + "dialog-container", dir: rtl ? "rtl" : void 0}, inner) : inner);
  };
  return Dialog2;
}(Component), _class$1.propTypes = {
  prefix: propTypes.string,
  pure: propTypes.bool,
  rtl: propTypes.bool,
  className: propTypes.string,
  visible: propTypes.bool,
  title: propTypes.node,
  children: propTypes.node,
  footer: propTypes.oneOfType([propTypes.bool, propTypes.node]),
  footerAlign: propTypes.oneOf(["left", "center", "right"]),
  footerActions: propTypes.array,
  onOk: propTypes.func,
  onCancel: propTypes.func,
  okProps: propTypes.object,
  cancelProps: propTypes.object,
  closeable: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  closeMode: propTypes.oneOfType([propTypes.arrayOf(propTypes.oneOf(["close", "mask", "esc"])), propTypes.oneOf(["close", "mask", "esc"])]),
  onClose: propTypes.func,
  afterClose: propTypes.func,
  hasMask: propTypes.bool,
  animation: propTypes.oneOfType([propTypes.object, propTypes.bool]),
  autoFocus: propTypes.bool,
  align: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  isFullScreen: propTypes.bool,
  shouldUpdatePosition: propTypes.bool,
  minMargin: propTypes.number,
  overlayProps: propTypes.object,
  locale: propTypes.object,
  height: propTypes.string,
  popupContainer: propTypes.any
}, _class$1.defaultProps = {
  prefix: "next-",
  pure: false,
  visible: false,
  footerAlign: "right",
  footerActions: ["ok", "cancel"],
  onOk: noop$1,
  onCancel: noop$1,
  okProps: {},
  cancelProps: {},
  closeable: "esc,close",
  onClose: noop$1,
  afterClose: noop$1,
  hasMask: true,
  animation: {
    in: "fadeInDown",
    out: "fadeOutUp"
  },
  autoFocus: false,
  align: "cc cc",
  isFullScreen: false,
  shouldUpdatePosition: false,
  minMargin: 40,
  overlayProps: {},
  locale: zhCN.Dialog
}, _temp$1);
Dialog.displayName = "Dialog";
var _class$2, _temp2;
var Dialog$1 = NextConfigProvider.config(Dialog);
var noop$2 = function noop4() {
};
var MESSAGE_TYPE = {
  alert: "warning",
  confirm: "help"
};
var ModalInner = function ModalInner2(_ref) {
  var type = _ref.type, _ref$messageProps = _ref.messageProps, messageProps = _ref$messageProps === void 0 ? {} : _ref$messageProps, title = _ref.title, rtl = _ref.rtl, _ref$prefix = _ref.prefix, prefix = _ref$prefix === void 0 ? "next-" : _ref$prefix, content = _ref.content;
  return React.createElement(NextMessage, _extends({
    size: "large",
    shape: "addon",
    type: MESSAGE_TYPE[type]
  }, messageProps, {
    title,
    rtl,
    className: classnames(prefix + "dialog-message", messageProps.className)
  }), content);
};
var Modal = (_temp2 = _class$2 = function(_Component) {
  _inherits(Modal2, _Component);
  function Modal2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Modal2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      visible: true,
      loading: false
    }, _this.close = function() {
      _this.setState({
        visible: false
      });
    }, _this.loading = function(loading) {
      _this.setState({
        loading
      });
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Modal2.prototype.wrapper = function wrapper(fn, callback) {
    var _this2 = this;
    return function() {
      var res = fn.apply(void 0, arguments);
      if (res && res.then) {
        _this2.loading(true);
        res.then(function(result) {
          _this2.loading(false);
          if (result !== false) {
            return callback();
          }
        }).catch(function(e) {
          _this2.loading(false);
          throw e;
        });
      } else if (res !== false) {
        return callback();
      }
    };
  };
  Modal2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, type = _props.type, title = _props.title, content = _props.content, messageProps = _props.messageProps, footerActions = _props.footerActions, onOk = _props.onOk, onCancel = _props.onCancel, onClose = _props.onClose, okProps = _props.okProps, needWrapper = _props.needWrapper, rtl = _props.rtl, className = _props.className, others = _objectWithoutProperties(_props, ["prefix", "type", "title", "content", "messageProps", "footerActions", "onOk", "onCancel", "onClose", "okProps", "needWrapper", "rtl", "className"]);
    var newTitle = needWrapper && type ? null : title;
    var newContent = needWrapper && type ? React.createElement(ModalInner, {
      type,
      messageProps,
      title,
      rtl,
      prefix,
      content
    }) : content;
    var newFooterActions = footerActions || (type === "alert" ? ["ok"] : type === "confirm" ? ["ok", "cancel"] : void 0);
    var newOnOk = this.wrapper(onOk, this.close);
    var newOnCancel = this.wrapper(onCancel, this.close);
    var newOnClose = this.wrapper(onClose, this.close);
    var _state = this.state, visible = _state.visible, loading = _state.loading;
    okProps.loading = loading;
    var classNames = classnames(prefix + "dialog-quick", className);
    return React.createElement(Dialog$1, _extends({
      prefix,
      role: "alertdialog"
    }, others, {
      visible,
      title: newTitle,
      rtl,
      footerActions: newFooterActions,
      onOk: this.state.loading ? noop$2 : newOnOk,
      onCancel: newOnCancel,
      onClose: newOnClose,
      okProps,
      className: classNames
    }), newContent);
  };
  return Modal2;
}(Component), _class$2.propTypes = {
  prefix: propTypes.string,
  pure: propTypes.bool,
  rtl: propTypes.bool,
  type: propTypes.oneOf(["alert", "confirm"]),
  title: propTypes.node,
  content: propTypes.node,
  messageProps: propTypes.object,
  footerActions: propTypes.array,
  onOk: propTypes.func,
  onCancel: propTypes.func,
  onClose: propTypes.func,
  okProps: propTypes.object,
  locale: propTypes.object,
  needWrapper: propTypes.bool,
  className: propTypes.string
}, _class$2.defaultProps = {
  prefix: "next-",
  pure: false,
  messageProps: {},
  onOk: noop$2,
  onCancel: noop$2,
  onClose: noop$2,
  okProps: {},
  locale: zhCN.Dialog,
  needWrapper: true
}, _temp2);
Modal.displayName = "Modal";
var ConfigModal = NextConfigProvider.config(Modal, {componentName: "Dialog"});
var _show = function _show2() {
  var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var container = document.createElement("div");
  var unmount = function unmount2() {
    if (config.afterClose) {
      config.afterClose();
    }
    ReactDOM.unmountComponentAtNode(container);
    container.parentNode.removeChild(container);
  };
  document.body.appendChild(container);
  var newContext = config.contextConfig;
  if (!newContext)
    newContext = NextConfigProvider.getContext();
  var instance = void 0, myRef = void 0;
  ReactDOM.render(React.createElement(NextConfigProvider, newContext, React.createElement(ConfigModal, _extends({}, config, {
    afterClose: unmount,
    ref: function ref(_ref2) {
      myRef = _ref2;
    }
  }))), container, function() {
    instance = myRef;
  });
  return {
    hide: function hide() {
      var inc = instance && instance.getInstance();
      inc && inc.close();
    }
  };
};
var methodFactory = function methodFactory2(type) {
  return function() {
    var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    config.type = type;
    return _show(config);
  };
};
var _alert = methodFactory("alert");
var _confirm = methodFactory("confirm");
var withContext = function withContext2(WrappedComponent) {
  var HOC = function HOC2(props) {
    return React.createElement(NextConfigProvider.Consumer, null, function(contextConfig) {
      return React.createElement(WrappedComponent, _extends({}, props, {
        contextDialog: {
          show: function show() {
            var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return _show(_extends({}, config, {contextConfig}));
          },
          alert: function alert() {
            var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return _alert(_extends({}, config, {contextConfig}));
          },
          confirm: function confirm() {
            var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return _confirm(_extends({}, config, {contextConfig}));
          }
        }
      }));
    });
  };
  return HOC;
};
Dialog.Inner = Inner;
Dialog.show = function(config) {
  var _ConfigProvider$getCo = NextConfigProvider.getContextProps(config, "Dialog"), warning = _ConfigProvider$getCo.warning;
  if (warning !== false) {
    config = processProps(config, log.deprecated);
  }
  return _show(config);
};
Dialog.alert = function(config) {
  var _ConfigProvider$getCo2 = NextConfigProvider.getContextProps(config, "Dialog"), warning = _ConfigProvider$getCo2.warning;
  if (warning !== false) {
    config = processProps(config, log.deprecated);
  }
  return _alert(config);
};
Dialog.confirm = function(config) {
  var _ConfigProvider$getCo3 = NextConfigProvider.getContextProps(config, "Dialog"), warning = _ConfigProvider$getCo3.warning;
  if (warning !== false) {
    config = processProps(config, log.deprecated);
  }
  return _confirm(config);
};
Dialog.withContext = withContext;
function processProps(props, deprecated) {
  if ("closable" in props) {
    deprecated("closable", "closeable", "Dialog");
    var _props = props, closable = _props.closable, others = _objectWithoutProperties(_props, ["closable"]);
    props = _extends({closeable: closable}, others);
  }
  var overlayPropNames = ["target", "offset", "beforeOpen", "onOpen", "afterOpen", "beforePosition", "onPosition", "cache", "safeNode", "wrapperClassName", "container"];
  overlayPropNames.forEach(function(name) {
    if (name in props) {
      var _extends2;
      deprecated(name, "overlayProps." + name, "Dialog");
      var _props2 = props, overlayProps = _props2.overlayProps, _others = _objectWithoutProperties(_props2, ["overlayProps"]);
      var newOverlayProps = _extends((_extends2 = {}, _extends2[name] = props[name], _extends2), overlayProps || {});
      delete _others[name];
      props = _extends({overlayProps: newOverlayProps}, _others);
    }
  });
  return props;
}
var NextDialog = NextConfigProvider.config(Dialog, {
  transform: function transform(props, deprecated) {
    return processProps(props, deprecated);
  }
});
const Dialog$2 = ({...props}) => {
  return /* @__PURE__ */ React.createElement(NextDialog, {
    footerAlign: "left",
    ...props
  });
};
hoistNonReactStatics_cjs(Dialog$2, NextDialog);
const exported = Dialog$2;
export {exported as e};
