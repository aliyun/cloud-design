import {_ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, C as Component, e as _extends, g as propTypes, R as React, j as _objectWithoutProperties, d as classnames, p as polyfill, c as createElement} from "./index.bb8dccba.js";
import {d as dom, K as KEYCODE, a as env, H as He} from "./6568bbcc.js";
import {N as NextConfigProvider} from "./b6f4cd1d.js";
import {N as NextAffix} from "./4dab3de1.js";
import "./e494a2e1.js";
import "./fffc39de.js";
import {N as NextIcon} from "./d16919af.js";
import "./1ed38102.js";
import "./7b1ecb27.js";
import "./450c4260.js";
import "./bb1305a9.js";
import "./5226ac39.js";
import "./a1bfc215.js";
import "./995cf0bc.js";
import {R as Radio} from "./145acf68.js";
import "./871d780a.js";
import "./243ba4be.js";
import {e as exported} from "./358691bd.js";
import "./abc8c979.js";
import "./775619bb.js";
import {S as Search} from "./cd16e180.js";
function isBoolean(val) {
  return typeof val === "boolean";
}
function getCollapseMap(device) {
  var origin = {
    Navigation: true,
    LocalNavigation: true,
    Ancillary: true,
    ToolDock: true
  };
  var map = [];
  switch (device) {
    case "phone":
      break;
    case "pad":
    case "tablet":
      map = ["ToolDock"];
      break;
    case "desktop":
      map = ["Navigation", "LocalNavigation", "Ancillary", "ToolDock"];
      break;
  }
  Object.keys(origin).forEach(function(key) {
    if (map.indexOf(key) > -1) {
      origin[key] = false;
    }
  });
  return origin;
}
function ShellBase(props) {
  var _class, _temp, _initialiseProps;
  var componentName = props.componentName;
  var Shell2 = (_temp = _class = function(_Component) {
    _inherits(Shell3, _Component);
    function Shell3(props2) {
      _classCallCheck(this, Shell3);
      var _this = _possibleConstructorReturn(this, _Component.call(this, props2));
      _initialiseProps.call(_this);
      var deviceMap = getCollapseMap(props2.device);
      _this.layout = {};
      _this.state = {
        controll: false,
        collapseMap: deviceMap,
        device: props2.device
      };
      return _this;
    }
    Shell3.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      var device = prevState.device;
      if (nextProps.device !== device) {
        var deviceMap = getCollapseMap(nextProps.device);
        return {
          controll: false,
          collapseMap: deviceMap,
          device: nextProps.device
        };
      }
      return {};
    };
    Shell3.prototype.componentDidMount = function componentDidMount() {
      this.checkAsideFixed();
    };
    Shell3.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
      var _this2 = this;
      if (prevProps.device !== this.props.device) {
        var deviceMapBefore = getCollapseMap(prevProps.device);
        var deviceMapAfter = getCollapseMap(this.props.device);
        Object.keys(deviceMapAfter).forEach(function(block) {
          var _ref = _this2.layout[block] || {}, props2 = _ref.props;
          if (deviceMapBefore[block] !== deviceMapAfter[block]) {
            if (props2 && typeof props2.onCollapseChange === "function") {
              props2.onCollapseChange(deviceMapAfter[block]);
            }
          }
        });
      }
      setTimeout(function() {
        _this2.checkAsideFixed();
      }, 201);
    };
    Shell3.prototype.render = function render() {
      return this.renderShell(this.props);
    };
    return Shell3;
  }(Component), _class.displayName = componentName, _class._typeMark = componentName, _class.propTypes = _extends({}, NextConfigProvider.propTypes, {
    prefix: propTypes.string,
    device: propTypes.oneOf(["phone", "tablet", "desktop"]),
    type: propTypes.oneOf(["light", "dark", "brand"]),
    fixedHeader: propTypes.bool
  }), _class.defaultProps = {
    prefix: "next-",
    device: "desktop",
    type: "light",
    fixedHeader: false
  }, _initialiseProps = function _initialiseProps2() {
    var _this3 = this;
    this.checkAsideFixed = function() {
      var fixedHeader = _this3.props.fixedHeader;
      if (!fixedHeader) {
        return;
      }
      var headerHeight = void 0;
      if (_this3.headerRef && (_this3.navigationFixed || _this3.toolDockFixed)) {
        headerHeight = dom.getStyle(_this3.headerRef, "height");
      }
      if (_this3.navigationFixed) {
        var style = {};
        style.marginLeft = dom.getStyle(_this3.navRef, "width");
        dom.addClass(_this3.navRef, "fixed");
        headerHeight && dom.setStyle(_this3.navRef, {top: headerHeight});
        dom.setStyle(_this3.localNavRef || _this3.submainRef, style);
      }
      if (_this3.toolDockFixed) {
        var _style = {};
        _style.marginRight = dom.getStyle(_this3.toolDockRef, "width");
        dom.addClass(_this3.toolDockRef, "fixed");
        headerHeight && dom.setStyle(_this3.toolDockRef, {top: headerHeight});
        dom.setStyle(_this3.localNavRef || _this3.submainRef, _style);
      }
    };
    this.setChildCollapse = function(child, mark) {
      var _state = _this3.state, device = _state.device, collapseMap = _state.collapseMap, controll = _state.controll;
      var collapse = child.props.collapse;
      var deviceMap = getCollapseMap(device);
      var props2 = {};
      if (isBoolean(collapse) === false) {
        props2.collapse = controll ? collapseMap[mark] : deviceMap[mark];
      }
      if (device !== "phone" && mark === "Navigation") {
        props2.miniable = true;
      }
      return React.cloneElement(child, props2);
    };
    this.toggleAside = function(mark, props2, e) {
      var _extends2;
      var _state2 = _this3.state, device = _state2.device, collapseMap = _state2.collapseMap;
      var deviceMap = getCollapseMap(device);
      var current = props2.collapse;
      var newCollapseMap = _extends({}, deviceMap, collapseMap, (_extends2 = {}, _extends2[mark] = !current, _extends2));
      _this3.setState({
        controll: true,
        collapseMap: newCollapseMap
      });
      if (props2 && typeof props2.onCollapseChange === "function") {
        props2.onCollapseChange(newCollapseMap[mark]);
      }
      var children = _this3.props.children;
      var com = void 0;
      if (mark === "Navigation") {
        com = children.filter(function(child) {
          return child && child.type._typeMark.replace("Shell_", "") === mark && child.props.direction !== "hoz";
        }).pop();
      } else {
        com = children.filter(function(child) {
          return child && child.type._typeMark.replace("Shell_", "") === mark;
        }).pop();
      }
      var _com$props$triggerPro = com.props.triggerProps, triggerProps = _com$props$triggerPro === void 0 ? {} : _com$props$triggerPro;
      if (typeof triggerProps.onClick === "function") {
        triggerProps.onClick(e, _this3.state.collapseMap[mark]);
      }
    };
    this.toggleNavigation = function(e) {
      var mark = "Navigation";
      var props2 = _this3.layout[mark].props;
      if ("keyCode" in e && e.keyCode !== KEYCODE.ENTER) {
        return;
      }
      _this3.toggleAside(mark, props2, e);
    };
    this.toggleLocalNavigation = function(e) {
      var mark = "LocalNavigation";
      var props2 = _this3.layout[mark].props;
      if ("keyCode" in e && e.keyCode !== KEYCODE.ENTER) {
        return;
      }
      _this3.toggleAside(mark, props2, e);
    };
    this.toggleAncillary = function(e) {
      var mark = "Ancillary";
      var props2 = _this3.layout[mark].props;
      if ("keyCode" in e && e.keyCode !== KEYCODE.ENTER) {
        return;
      }
      _this3.toggleAside(mark, props2, e);
    };
    this.toggleToolDock = function(e) {
      var mark = "ToolDock";
      var props2 = _this3.layout[mark].props;
      if ("keyCode" in e && e.keyCode !== KEYCODE.ENTER) {
        return;
      }
      _this3.toggleAside(mark, props2, e);
    };
    this.saveHeaderRef = function(ref) {
      _this3.headerRef = ref;
    };
    this.saveLocalNavRef = function(ref) {
      _this3.localNavRef = ref;
    };
    this.saveNavRef = function(ref) {
      _this3.navRef = ref;
    };
    this.saveSubmainRef = function(ref) {
      _this3.submainRef = ref;
    };
    this.saveToolDockRef = function(ref) {
      _this3.toolDockRef = ref;
    };
    this.renderShell = function(props2) {
      var _classnames, _classnames2, _classnames3, _classnames4, _classnames5, _classnames6, _classnames7, _classnames11;
      var prefix = props2.prefix, children = props2.children, className = props2.className, type = props2.type, fixedHeader = props2.fixedHeader, others = _objectWithoutProperties(props2, ["prefix", "children", "className", "type", "fixedHeader"]);
      var device = _this3.state.device;
      var layout = {};
      layout.header = {};
      var hasToolDock = false, needNavigationTrigger = false, needDockTrigger = false;
      React.Children.map(children, function(child) {
        if (child && typeof child.type === "function") {
          var mark = child.type._typeMark.replace("Shell_", "");
          switch (mark) {
            case "Branding":
            case "Action":
              layout.header[mark] = child;
              break;
            case "MultiTask":
              layout.taskHeader = child;
              break;
            case "LocalNavigation":
              if (!layout[mark]) {
                layout[mark] = [];
              }
              layout[mark] = _this3.setChildCollapse(child, mark);
              break;
            case "Ancillary":
              if (!layout[mark]) {
                layout[mark] = [];
              }
              layout[mark] = _this3.setChildCollapse(child, mark);
              break;
            case "ToolDock":
              hasToolDock = true;
              if (!layout[mark]) {
                layout[mark] = [];
              }
              _this3.toolDockFixed = child.props.fixed;
              var childT = _this3.setChildCollapse(child, mark);
              layout[mark] = childT;
              break;
            case "AppBar":
            case "Content":
            case "Footer":
              layout.content || (layout.content = []);
              layout.content.push(child);
              break;
            case "Page":
              layout.page || (layout.page = []);
              layout.page = child;
              break;
            case "Navigation":
              if (child.props.direction === "hoz") {
                layout.header[mark] = child;
              } else {
                if (!layout[mark]) {
                  layout[mark] = [];
                }
                needNavigationTrigger = true;
                _this3.navigationFixed = child.props.fixed;
                var childN = _this3.setChildCollapse(child, mark);
                layout[mark] = childN;
              }
              break;
          }
        }
      });
      var headerCls = classnames((_classnames = {}, _classnames[prefix + "shell-header"] = true, _classnames[prefix + "shell-fixed-header"] = fixedHeader, _classnames));
      var mainCls = classnames((_classnames2 = {}, _classnames2[prefix + "shell-main"] = true, _classnames2));
      var pageCls = classnames((_classnames3 = {}, _classnames3[prefix + "shell-page"] = true, _classnames3));
      var submainCls = classnames((_classnames4 = {}, _classnames4[prefix + "shell-sub-main"] = true, _classnames4));
      var asideCls = classnames((_classnames5 = {}, _classnames5[prefix + "shell-aside"] = true, _classnames5));
      var toolDockCls = classnames((_classnames6 = {}, _classnames6[prefix + "aside-tooldock"] = true, _classnames6));
      var navigationCls = classnames((_classnames7 = {}, _classnames7[prefix + "aside-navigation"] = true, _classnames7[prefix + "shell-collapse"] = layout.Navigation && layout.Navigation.props.collapse, _classnames7));
      if (hasToolDock) {
        if (device === "phone") {
          needDockTrigger = true;
        }
      }
      if (needNavigationTrigger) {
        var branding = layout.header.Branding;
        var _layout$Navigation$pr = layout.Navigation.props, trigger = _layout$Navigation$pr.trigger, collapse = _layout$Navigation$pr.collapse;
        if ("trigger" in layout.Navigation.props) {
          trigger = trigger && React.cloneElement(trigger, {
            onClick: _this3.toggleNavigation,
            "aria-expanded": !collapse
          }) || trigger;
        } else {
          trigger = React.createElement("div", {
            key: "nav-trigger",
            role: "button",
            tabIndex: 0,
            "aria-expanded": !collapse,
            "aria-label": "toggle",
            className: "nav-trigger",
            onClick: _this3.toggleNavigation,
            onKeyDown: _this3.toggleNavigation
          }, collapse ? React.createElement(NextIcon, {size: "small", type: "toggle-right"}) : React.createElement(NextIcon, {size: "small", type: "toggle-left"}));
        }
        if (!branding) {
          trigger && (layout.header.Branding = trigger);
        } else {
          layout.header.Branding = React.cloneElement(branding, {}, [trigger, branding.props.children]);
        }
      }
      if (needDockTrigger) {
        var action = layout.header.Action;
        var _layout$ToolDock$prop = layout.ToolDock.props, _trigger = _layout$ToolDock$prop.trigger, _collapse = _layout$ToolDock$prop.collapse;
        if ("trigger" in layout.ToolDock.props) {
          _trigger = _trigger && React.cloneElement(_trigger, {
            onClick: _this3.toggleToolDock,
            "aria-expanded": !_collapse
          }) || _trigger;
        } else {
          _trigger = React.createElement("div", {
            key: "dock-trigger",
            tabIndex: 0,
            role: "button",
            "aria-expanded": !_collapse,
            "aria-label": "toggle",
            className: "dock-trigger",
            onClick: _this3.toggleToolDock,
            onKeyDown: _this3.toggleToolDock
          }, React.createElement(NextIcon, {size: "small", type: "add"}));
        }
        if (!action) {
          layout.header.Action = _trigger;
        } else {
          layout.header.Action = React.cloneElement(action, {}, [action.props.children, _trigger]);
        }
      }
      var headerDom = [], contentArr = [], innerArr = [], taskHeaderDom = null;
      if (layout.taskHeader) {
        var _classnames8;
        var taskHeaderCls = classnames((_classnames8 = {}, _classnames8[prefix + "shell-task-header"] = true, _classnames8));
        taskHeaderDom = React.createElement("section", {key: "task-header", className: taskHeaderCls}, layout.taskHeader);
      }
      if (layout.LocalNavigation) {
        var _classnames9;
        var _layout$LocalNavigati = layout.LocalNavigation.props, _trigger2 = _layout$LocalNavigati.trigger, _collapse2 = _layout$LocalNavigati.collapse;
        if ("trigger" in layout.LocalNavigation.props) {
          _trigger2 = _trigger2 && React.cloneElement(_trigger2, {
            onClick: _this3.toggleLocalNavigation,
            "aria-expanded": !_collapse2
          }) || _trigger2;
        } else {
          _trigger2 = React.createElement("div", {
            key: "local-nav-trigger",
            role: "button",
            tabIndex: 0,
            "aria-expanded": !_collapse2,
            "aria-label": "toggle",
            className: "local-nav-trigger aside-trigger",
            onClick: _this3.toggleLocalNavigation,
            onKeyDown: _this3.toggleLocalNavigation
          }, _collapse2 ? React.createElement(NextIcon, {size: "small", type: "arrow-right"}) : React.createElement(NextIcon, {size: "small", type: "arrow-left"}));
        }
        var localNavCls = classnames(asideCls, (_classnames9 = {}, _classnames9[prefix + "aside-localnavigation"] = true, _classnames9));
        innerArr.push(React.createElement("aside", {key: "localnavigation", className: localNavCls, ref: _this3.saveLocalNavRef}, React.cloneElement(layout.LocalNavigation, {}, [React.createElement("div", {key: "wrapper", className: prefix + "shell-content-wrapper"}, layout.LocalNavigation.props.children), _trigger2])));
      }
      if (layout.content) {
        innerArr.push(React.createElement("section", {key: "submain", className: submainCls, ref: _this3.saveSubmainRef}, layout.content));
      }
      if (layout.Ancillary) {
        var _classnames10;
        var _layout$Ancillary$pro = layout.Ancillary.props, _trigger3 = _layout$Ancillary$pro.trigger, _collapse3 = _layout$Ancillary$pro.collapse;
        if ("trigger" in layout.Ancillary.props) {
          _trigger3 = _trigger3 && React.cloneElement(_trigger3, {
            onClick: _this3.toggleAncillary,
            "aria-expanded": !_collapse3
          }) || _trigger3;
        } else {
          _trigger3 = React.createElement("div", {
            key: "ancillary-trigger",
            role: "button",
            tabIndex: 0,
            "aria-expanded": !_collapse3,
            "aria-label": "toggle",
            className: "ancillary-trigger aside-trigger",
            onClick: _this3.toggleAncillary,
            onKeyDown: _this3.toggleAncillary
          }, _collapse3 ? React.createElement(NextIcon, {size: "small", type: "arrow-left"}) : React.createElement(NextIcon, {size: "small", type: "arrow-right"}));
        }
        var ancillaryCls = classnames(asideCls, (_classnames10 = {}, _classnames10[prefix + "aside-ancillary"] = true, _classnames10));
        innerArr.push(React.createElement("aside", {key: "ancillary", className: ancillaryCls}, React.cloneElement(layout.Ancillary, {}, [React.createElement("div", {key: "wrapper", className: prefix + "shell-content-wrapper"}, layout.Ancillary.props.children), _trigger3])));
      }
      if (Object.keys(layout.header).length > 0) {
        var _dom = React.createElement("header", {key: "header", className: headerCls, ref: _this3.saveHeaderRef}, layout.header.Branding, layout.header.Navigation, layout.header.Action);
        if (fixedHeader && env.ieVersion) {
          headerDom = React.createElement(NextAffix, {style: {zIndex: 9}}, _dom);
        } else {
          headerDom = _dom;
        }
      }
      layout.Navigation && contentArr.push(React.createElement("aside", {key: "navigation", className: navigationCls, ref: _this3.saveNavRef}, React.cloneElement(layout.Navigation, {
        className: classnames(asideCls, layout.Navigation.props.className)
      })));
      contentArr = contentArr.concat(innerArr.length > 0 ? innerArr : [React.createElement("section", {key: "page", ref: _this3.saveSubmainRef, className: submainCls}, layout.page)]);
      layout.ToolDock && contentArr.push(React.createElement("aside", {key: "tooldock", className: toolDockCls, ref: _this3.saveToolDockRef}, React.cloneElement(layout.ToolDock, {
        className: classnames(asideCls, layout.ToolDock.props.className),
        key: "tooldock"
      })));
      var cls = classnames((_classnames11 = {}, _classnames11[prefix + "shell"] = true, _classnames11[prefix + "shell-" + device] = true, _classnames11[prefix + "shell-" + type] = true, _classnames11[className] = !!className, _classnames11));
      if (componentName === "Page") {
        return React.createElement("section", {className: pageCls}, children);
      }
      _this3.layout = layout;
      return React.createElement("section", _extends({className: cls}, others), headerDom, taskHeaderDom, React.createElement("section", {className: mainCls}, contentArr));
    };
  }, _temp);
  Shell2.displayName = "Shell";
  return polyfill(Shell2);
}
function Base(props) {
  var _class, _temp;
  var componentName = props.componentName;
  var Shell2 = (_temp = _class = function(_Component) {
    _inherits(Shell3, _Component);
    function Shell3() {
      _classCallCheck(this, Shell3);
      return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }
    Shell3.prototype.getChildContext = function getChildContext() {
      var collapse = this.props.collapse;
      return {
        isCollapse: collapse
      };
    };
    Shell3.prototype.render = function render() {
      var _classnames;
      var _props = this.props, prefix = _props.prefix, className = _props.className, miniable = _props.miniable, device = _props.device, direction = _props.direction, children = _props.children, collapse = _props.collapse, triggerProps = _props.triggerProps, onCollapseChange = _props.onCollapseChange, component = _props.component, align = _props.align, fixed = _props.fixed, others = _objectWithoutProperties(_props, ["prefix", "className", "miniable", "device", "direction", "children", "collapse", "triggerProps", "onCollapseChange", "component", "align", "fixed"]);
      var Tag = component;
      var cls = classnames((_classnames = {}, _classnames[prefix + "shell-" + componentName.toLowerCase()] = true, _classnames[prefix + "shell-collapse"] = !!collapse, _classnames[prefix + "shell-mini"] = miniable, _classnames[prefix + "shell-nav-" + align] = componentName === "Navigation" && direction === "hoz" && align, _classnames[className] = !!className, _classnames));
      var newChildren = children;
      if (componentName === "Content") {
        newChildren = React.createElement("div", {className: prefix + "shell-content-inner"}, children);
      }
      if (componentName === "Page") {
        return children;
      }
      return React.createElement(Tag, _extends({className: cls}, others), newChildren);
    };
    return Shell3;
  }(Component), _class.displayName = componentName, _class._typeMark = "Shell_" + componentName, _class.propTypes = _extends({}, NextConfigProvider.propTypes, {
    prefix: propTypes.string,
    collapse: propTypes.bool,
    miniable: propTypes.bool,
    component: propTypes.string,
    trigger: propTypes.node,
    triggerProps: propTypes.object,
    direction: propTypes.oneOf(["hoz", "ver"]),
    align: propTypes.oneOf(["left", "right", "center"]),
    onCollapseChange: propTypes.func,
    fixed: propTypes.bool
  }), _class.defaultProps = {
    prefix: "next-",
    component: "div",
    onCollapseChange: function onCollapseChange() {
    },
    fixed: false
  }, _class.childContextTypes = {
    isCollapse: propTypes.bool
  }, _temp);
  Shell2.displayName = "Shell";
  return NextConfigProvider.config(Shell2);
}
var Shell = ShellBase({
  componentName: "Shell"
});
["Branding", "Navigation", "Action", "MultiTask", "LocalNavigation", "AppBar", "Content", "Footer", "Ancillary", "ToolDock", "ToolDockItem"].forEach(function(key) {
  Shell[key] = Base({
    componentName: key
  });
});
Shell.Page = NextConfigProvider.config(ShellBase({
  componentName: "Page"
}));
var NextShell = NextConfigProvider.config(Shell, {
  transform: function transform(props, deprecated) {
    if ("Component" in props) {
      deprecated("Component", "component", "Shell");
      var _props = props, Component2 = _props.Component, component = _props.component, others = _objectWithoutProperties(_props, ["Component", "component"]);
      if ("component" in props) {
        props = _extends({component}, others);
      } else {
        props = _extends({component: Component2}, others);
      }
    }
    return props;
  }
});
class App extends Component {
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextShell, {
      className: "iframe-hack",
      style: {border: "1px solid #eee"}
    }, /* @__PURE__ */ createElement(NextShell.Branding, null, /* @__PURE__ */ createElement("div", {
      className: "rectangular"
    }), /* @__PURE__ */ createElement("span", {
      style: {marginLeft: 10}
    }, "App Name")), /* @__PURE__ */ createElement(NextShell.Navigation, {
      direction: "hoz"
    }, /* @__PURE__ */ createElement(Search, {
      key: "2",
      shape: "simple",
      type: "dark",
      palceholder: "Search",
      style: {width: "200px"}
    })), /* @__PURE__ */ createElement(NextShell.Action, null, /* @__PURE__ */ createElement(NextIcon, {
      type: "ic_tongzhi"
    }), /* @__PURE__ */ createElement("img", {
      src: "https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png",
      className: "avatar",
      alt: "用户头像"
    }), /* @__PURE__ */ createElement("span", {
      style: {marginLeft: 10}
    }, "MyName")), /* @__PURE__ */ createElement(NextShell.Content, null, /* @__PURE__ */ createElement("div", {
      style: {minHeight: 1200, background: "#fff"}
    })), /* @__PURE__ */ createElement(NextShell.Footer, null, /* @__PURE__ */ createElement("span", null, "Alibaba Fusion"), /* @__PURE__ */ createElement("span", null, "@ 2019 Alibaba Piecework 版权所有"))));
  }
}
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, "(", /* @__PURE__ */ createElement(App, null), ")");
}
const Style = He.div`
  .avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .rectangular {
    width: 32px;
    height: 32px;
    background: rgba(0, 0, 0, 0.04);
  }

  .iframe-hack {
    width: 100%;
    height: 500px;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const {SubNav, Item, Group, Divider} = exported;
class App$1 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      device: "desktop"
    };
    this.onChange = (device) => {
      this.setState({
        device
      });
    };
    this.btnClick = () => {
      this.setState({
        navcollapse: !this.state.navcollapse
      });
    };
    this.onCollapseChange = (visible, e) => {
      console.log("onCollapseChange:", visible, e);
      this.setState({
        navcollapse: visible
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Radio.Group, {
      style: {marginBottom: "10px"},
      onChange: this.onChange,
      defaultValue: "desktop"
    }, /* @__PURE__ */ createElement(Radio, {
      value: "phone"
    }, "phone"), /* @__PURE__ */ createElement(Radio, {
      value: "tablet"
    }, "tablet"), /* @__PURE__ */ createElement(Radio, {
      value: "desktop"
    }, "desktop")), /* @__PURE__ */ createElement(NextShell, {
      className: "iframe-hack",
      device: this.state.device,
      style: {border: "1px solid #eee"}
    }, /* @__PURE__ */ createElement(NextShell.Branding, null, /* @__PURE__ */ createElement("div", {
      className: "rectangular"
    }), /* @__PURE__ */ createElement("span", {
      style: {marginLeft: 10}
    }, "App Name")), /* @__PURE__ */ createElement(NextShell.Navigation, {
      direction: "hoz"
    }, /* @__PURE__ */ createElement(Search, {
      key: "2",
      shape: "simple",
      type: "dark",
      palceholder: "Search",
      style: {width: "200px"}
    })), /* @__PURE__ */ createElement(NextShell.Action, null, /* @__PURE__ */ createElement("img", {
      src: "https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png",
      className: "avatar",
      alt: "用户头像"
    }), /* @__PURE__ */ createElement("span", {
      style: {marginLeft: 10}
    }, "MyName")), /* @__PURE__ */ createElement(NextShell.Navigation, {
      collapse: this.state.navcollapse,
      onCollapseChange: this.onCollapseChange
    }, /* @__PURE__ */ createElement(exported, {
      embeddable: true,
      "aria-label": "global navigation"
    }, /* @__PURE__ */ createElement(exported.Item, {
      icon: "account"
    }, "Nav Item 1"), /* @__PURE__ */ createElement(exported.Item, {
      icon: "calendar"
    }, "Nav Item 2"), /* @__PURE__ */ createElement(exported.Item, {
      icon: "atm"
    }, "Nav Item 3"), /* @__PURE__ */ createElement(exported.Item, {
      icon: "account"
    }, "Nav Item 4"), /* @__PURE__ */ createElement(exported.Item, {
      icon: "account"
    }, "Nav Item 5"), /* @__PURE__ */ createElement(exported.Item, {
      icon: "account"
    }, "Nav Item 6"), /* @__PURE__ */ createElement(exported.Item, {
      icon: "account"
    }, "Nav Item 7")), /* @__PURE__ */ createElement("div", {
      style: {textAlign: "center", background: "#eee"},
      onClick: this.btnClick
    }, this.state.navcollapse ? /* @__PURE__ */ createElement(NextIcon, {
      type: "arrow-right",
      size: "xs"
    }) : /* @__PURE__ */ createElement(NextIcon, {
      type: "arrow-left",
      size: "xs"
    }))), /* @__PURE__ */ createElement(NextShell.LocalNavigation, null, /* @__PURE__ */ createElement(exported, {
      embeddable: true,
      "aria-label": "local navigation"
    }, /* @__PURE__ */ createElement(exported.SubNav, {
      label: "Local Nav1"
    }, /* @__PURE__ */ createElement(Item, null, "Local Nav1")), /* @__PURE__ */ createElement(exported.SubNav, {
      label: "Local Nav2"
    }, /* @__PURE__ */ createElement(Item, null, "Local Nav2")), /* @__PURE__ */ createElement(exported.SubNav, {
      label: "Local Nav3"
    }, /* @__PURE__ */ createElement(Item, null, "Local Nav3")), /* @__PURE__ */ createElement(Item, null, "Local Nav4"), /* @__PURE__ */ createElement(Item, null, "Local Nav5"), /* @__PURE__ */ createElement(Item, null, "Local Nav6"), /* @__PURE__ */ createElement(Item, null, "Local Nav7"), /* @__PURE__ */ createElement(Item, null, "Local Nav8"), /* @__PURE__ */ createElement(Item, null, "Local Nav4"), /* @__PURE__ */ createElement(Item, null, "Local Nav5"), /* @__PURE__ */ createElement(Item, null, "Local Nav6"), /* @__PURE__ */ createElement(Item, null, "Local Nav7"), /* @__PURE__ */ createElement(Item, null, "Local Nav8"))), /* @__PURE__ */ createElement(NextShell.Content, null, /* @__PURE__ */ createElement("div", {
      style: {minHeight: 1200, background: "#fff"}
    })), /* @__PURE__ */ createElement(NextShell.Footer, null, /* @__PURE__ */ createElement("span", null, "Alibaba Fusion"), /* @__PURE__ */ createElement("span", null, "@ 2019 Alibaba Piecework 版权所有")), /* @__PURE__ */ createElement(NextShell.Ancillary, null), /* @__PURE__ */ createElement(NextShell.ToolDock, null, /* @__PURE__ */ createElement(NextShell.ToolDockItem, null, /* @__PURE__ */ createElement(NextIcon, {
      type: "calendar"
    })), /* @__PURE__ */ createElement(NextShell.ToolDockItem, null, /* @__PURE__ */ createElement(NextIcon, {
      type: "atm"
    })), /* @__PURE__ */ createElement(NextShell.ToolDockItem, null, /* @__PURE__ */ createElement(NextIcon, {
      type: "account"
    })))));
  }
}
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, "(", /* @__PURE__ */ createElement(App$1, null), ")");
}
const Style$1 = He.div`
  .avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .rectangular {
    width: 32px;
    height: 32px;
    background: rgba(0, 0, 0, 0.04);
  }

  .iframe-hack {
    width: 100%;
    height: 500px;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
class App$2 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      device: "desktop"
    };
    this.onChange = (device) => {
      this.setState({
        device
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Radio.Group, {
      style: {marginBottom: "10px"},
      onChange: this.onChange,
      defaultValue: "desktop"
    }, /* @__PURE__ */ createElement(Radio, {
      value: "phone"
    }, "phone"), /* @__PURE__ */ createElement(Radio, {
      value: "tablet"
    }, "tablet"), /* @__PURE__ */ createElement(Radio, {
      value: "desktop"
    }, "desktop")), /* @__PURE__ */ createElement(NextShell, {
      className: "iframe-hack",
      device: this.state.device,
      style: {border: "1px solid #eee"}
    }, /* @__PURE__ */ createElement(NextShell.Branding, null, /* @__PURE__ */ createElement("div", {
      className: "rectangular"
    }), /* @__PURE__ */ createElement("span", {
      style: {marginLeft: 10}
    }, "App Name")), /* @__PURE__ */ createElement(NextShell.Navigation, {
      direction: "hoz"
    }, /* @__PURE__ */ createElement(Search, {
      key: "2",
      shape: "simple",
      type: "dark",
      palceholder: "Search",
      style: {width: "200px"}
    })), /* @__PURE__ */ createElement(NextShell.Action, null, /* @__PURE__ */ createElement("img", {
      src: "https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png",
      className: "avatar",
      alt: "用户头像"
    }), /* @__PURE__ */ createElement("span", {
      style: {marginLeft: 10}
    }, "MyName")), /* @__PURE__ */ createElement(NextShell.Navigation, null, /* @__PURE__ */ createElement(exported, {
      embeddable: true,
      "aria-label": "global navigation"
    }, /* @__PURE__ */ createElement(exported.Item, {
      icon: "account"
    }, "Nav Item 1"), /* @__PURE__ */ createElement(exported.Item, {
      icon: "calendar"
    }, "Nav Item 2"), /* @__PURE__ */ createElement(exported.Item, {
      icon: "atm"
    }, "Nav Item 3"), /* @__PURE__ */ createElement(exported.Item, {
      icon: "account"
    }, "Nav Item 4"), /* @__PURE__ */ createElement(exported.Item, {
      icon: "account"
    }, "Nav Item 5"), /* @__PURE__ */ createElement(exported.Item, {
      icon: "account"
    }, "Nav Item 6"), /* @__PURE__ */ createElement(exported.Item, {
      icon: "account"
    }, "Nav Item 7"))), /* @__PURE__ */ createElement(NextShell.Content, null, /* @__PURE__ */ createElement("div", {
      style: {minHeight: 1200, background: "#fff"}
    }))));
  }
}
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, "(", /* @__PURE__ */ createElement(App$2, null), ")");
}
const Style$2 = He.div`
  .avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .rectangular {
    width: 32px;
    height: 32px;
    background: rgba(0, 0, 0, 0.04);
  }
  .iframe-hack {
    width: 100%;
    height: 500px;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const {SubNav: SubNav$1, Item: Item$1, Group: Group$1, Divider: Divider$1} = exported;
class App$3 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      device: "desktop"
    };
    this.onChange = (device) => {
      this.setState({
        device
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Radio.Group, {
      style: {marginBottom: "10px"},
      onChange: this.onChange,
      defaultValue: "desktop"
    }, /* @__PURE__ */ createElement(Radio, {
      value: "phone"
    }, "phone"), /* @__PURE__ */ createElement(Radio, {
      value: "tablet"
    }, "tablet"), /* @__PURE__ */ createElement(Radio, {
      value: "desktop"
    }, "desktop")), /* @__PURE__ */ createElement(NextShell, {
      className: "iframe-hack",
      device: this.state.device,
      style: {border: "1px solid #eee"}
    }, /* @__PURE__ */ createElement(NextShell.Branding, null, /* @__PURE__ */ createElement("div", {
      className: "rectangular"
    }), /* @__PURE__ */ createElement("span", {
      style: {marginLeft: 10}
    }, "App Name")), /* @__PURE__ */ createElement(NextShell.Navigation, {
      direction: "hoz"
    }, /* @__PURE__ */ createElement(Search, {
      key: "2",
      shape: "simple",
      type: "dark",
      palceholder: "Search",
      style: {width: "200px"}
    })), /* @__PURE__ */ createElement(NextShell.Action, null, /* @__PURE__ */ createElement("img", {
      src: "https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png",
      className: "avatar",
      alt: "用户头像"
    }), /* @__PURE__ */ createElement("span", {
      style: {marginLeft: 10}
    }, "MyName")), /* @__PURE__ */ createElement(NextShell.Navigation, null, /* @__PURE__ */ createElement(exported, {
      embeddable: true,
      "aria-label": "global navigation"
    }, /* @__PURE__ */ createElement(exported.Item, {
      icon: "account"
    }, "Nav Item 1"), /* @__PURE__ */ createElement(exported.Item, {
      icon: "calendar"
    }, "Nav Item 2"), /* @__PURE__ */ createElement(exported.Item, {
      icon: "atm"
    }, "Nav Item 3"), /* @__PURE__ */ createElement(exported.Item, {
      icon: "account"
    }, "Nav Item 4"), /* @__PURE__ */ createElement(exported.Item, {
      icon: "account"
    }, "Nav Item 5"), /* @__PURE__ */ createElement(exported.Item, {
      icon: "account"
    }, "Nav Item 6"), /* @__PURE__ */ createElement(exported.Item, {
      icon: "account"
    }, "Nav Item 7"))), /* @__PURE__ */ createElement(NextShell.LocalNavigation, null, /* @__PURE__ */ createElement(exported, {
      embeddable: true,
      "aria-label": "local navigation"
    }, /* @__PURE__ */ createElement(exported.SubNav, {
      label: "Local Nav1"
    }, /* @__PURE__ */ createElement(Item$1, null, "Local Nav1")), /* @__PURE__ */ createElement(exported.SubNav, {
      label: "Local Nav2"
    }, /* @__PURE__ */ createElement(Item$1, null, "Local Nav2")), /* @__PURE__ */ createElement(exported.SubNav, {
      label: "Local Nav3"
    }, /* @__PURE__ */ createElement(Item$1, null, "Local Nav3")), /* @__PURE__ */ createElement(Item$1, null, "Local Nav4"), /* @__PURE__ */ createElement(Item$1, null, "Local Nav5"), /* @__PURE__ */ createElement(Item$1, null, "Local Nav6"), /* @__PURE__ */ createElement(Item$1, null, "Local Nav7"), /* @__PURE__ */ createElement(Item$1, null, "Local Nav8"), /* @__PURE__ */ createElement(Item$1, null, "Local Nav4"), /* @__PURE__ */ createElement(Item$1, null, "Local Nav5"), /* @__PURE__ */ createElement(Item$1, null, "Local Nav6"), /* @__PURE__ */ createElement(Item$1, null, "Local Nav7"), /* @__PURE__ */ createElement(Item$1, null, "Local Nav8"))), /* @__PURE__ */ createElement(NextShell.Content, null, /* @__PURE__ */ createElement("div", {
      style: {minHeight: 1200, background: "#fff"}
    }))));
  }
}
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, "(", /* @__PURE__ */ createElement(App$3, null), ")");
}
const Style$3 = He.div`
  .root {
    height: 500px;
    overflow: auto;
  }

  .avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .rectangular {
    width: 32px;
    height: 32px;
    background: rgba(0, 0, 0, 0.04);
  }
  .iframe-hack {
    width: 100%;
    height: 500px;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const modules = {};
modules["_basic"] = m0;
modules["_complicated"] = m1;
modules["_header-global"] = m2;
modules["_header-global-local"] = m3;
export default modules;
