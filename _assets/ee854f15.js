import {N as NextConfigProvider, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, R as React, k as _objectWithoutProperties, d as classnames, g as _extends, C as Component, i as propTypes, p as polyfill, e as events, s as NextIcon, m as Children, n as _typeof, c as createElement} from "./index.91461bfc.js";
import {H as He} from "./0ad0a923.js";
var _class, _temp;
var Item = (_temp = _class = function(_Component) {
  _inherits(Item2, _Component);
  function Item2() {
    _classCallCheck(this, Item2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Item2.Separator = function Separator(_ref) {
    var prefix = _ref.prefix, children2 = _ref.children;
    return React.createElement("span", {className: prefix + "breadcrumb-separator"}, children2);
  };
  Item2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, rtl = _props.rtl, className = _props.className, children2 = _props.children, link = _props.link, activated = _props.activated, separator = _props.separator, others = _objectWithoutProperties(_props, ["prefix", "rtl", "className", "children", "link", "activated", "separator"]);
    var clazz = classnames(prefix + "breadcrumb-text", className, {
      activated
    });
    return React.createElement("li", {dir: rtl ? "rtl" : null, className: prefix + "breadcrumb-item"}, link ? React.createElement("a", _extends({href: link, className: clazz}, others), children2) : React.createElement("span", _extends({className: clazz}, others), children2), activated ? null : Item2.Separator({prefix, children: separator}));
  };
  return Item2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  link: propTypes.string,
  activated: propTypes.bool,
  separator: propTypes.node,
  className: propTypes.any,
  children: propTypes.node
}, _class.defaultProps = {
  prefix: "next-"
}, _class._typeMark = "breadcrumb_item", _temp);
Item.displayName = "Item";
var Item$1 = NextConfigProvider.config(Item);
var _class$1, _temp$1, _initialiseProps;
var Breadcrumb = (_temp$1 = _class$1 = function(_Component) {
  _inherits(Breadcrumb2, _Component);
  function Breadcrumb2(props) {
    _classCallCheck(this, Breadcrumb2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _initialiseProps.call(_this);
    _this.state = {
      maxNode: props.maxNode === "auto" ? 100 : props.maxNode
    };
    return _this;
  }
  Breadcrumb2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (state.prevMaxNode === props.maxNode) {
      return {};
    }
    return {
      prevMaxNode: props.maxNode,
      maxNode: props.maxNode === "auto" ? 100 : props.maxNode
    };
  };
  Breadcrumb2.prototype.componentDidMount = function componentDidMount() {
    this.computeMaxNode();
    events.on(window, "resize", this.computeMaxNode);
  };
  Breadcrumb2.prototype.componentDidUpdate = function componentDidUpdate() {
    this.computeMaxNode();
  };
  Breadcrumb2.prototype.componentWillUnmount = function componentWillUnmount() {
    events.off(window, "resize", this.computeMaxNode);
  };
  Breadcrumb2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, rtl = _props.rtl, className = _props.className, children2 = _props.children, component = _props.component, maxNodeProp = _props.maxNode, others = _objectWithoutProperties(_props, ["prefix", "rtl", "className", "children", "component", "maxNode"]);
    var separator = this.props.separator || React.createElement(NextIcon, {type: "arrow-right", className: prefix + "breadcrumb-icon-sep"});
    var maxNode = this.state.maxNode;
    var items = void 0;
    var length = Children.count(children2);
    if (maxNode > 1 && length > maxNode) {
      var breakpointer = length - maxNode + 1;
      items = [];
      Children.forEach(children2, function(item, i) {
        var ariaProps = {};
        if (i === length - 1) {
          ariaProps["aria-current"] = "page";
        }
        if (i && i === breakpointer) {
          items.push(React.cloneElement(item, _extends({
            separator,
            prefix,
            key: i,
            activated: i === length - 1
          }, ariaProps, {
            className: prefix + "breadcrumb-text-ellipsis"
          }), "..."));
        } else if (!i || i > breakpointer) {
          items.push(React.cloneElement(item, _extends({
            separator,
            prefix,
            key: i
          }, ariaProps, {
            activated: i === length - 1
          })));
        }
      });
    } else {
      items = Children.map(children2, function(item, i) {
        var ariaProps = {};
        if (i === length - 1) {
          ariaProps["aria-current"] = "page";
        }
        return React.cloneElement(item, _extends({
          separator,
          prefix,
          activated: i === length - 1
        }, ariaProps, {
          key: i
        }));
      });
    }
    if (rtl) {
      others.dir = "rtl";
    }
    var BreadcrumbComponent = component;
    delete others.maxNode;
    return React.createElement(BreadcrumbComponent, _extends({
      "aria-label": "Breadcrumb",
      className
    }, others, {
      style: _extends({position: "relative"}, others.style || {})
    }), React.createElement("ul", {className: prefix + "breadcrumb"}, items), maxNodeProp === "auto" ? React.createElement("ul", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        visibility: "hidden"
      },
      ref: this.saveBreadcrumbRef,
      className: prefix + "breadcrumb"
    }, Children.map(children2, function(item, i) {
      return React.cloneElement(item, {
        separator,
        prefix,
        activated: i === length - 1,
        key: i
      });
    })) : null);
  };
  return Breadcrumb2;
}(Component), _class$1.Item = Item$1, _class$1.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  children: function children(props, propName) {
    Children.forEach(props[propName], function(child) {
      if (!(child && ["function", "object"].indexOf(_typeof(child.type)) > -1 && child.type._typeMark === "breadcrumb_item")) {
        throw new Error("Breadcrumb's children must be Breadcrumb.Item!");
      }
    });
  },
  maxNode: propTypes.oneOfType([propTypes.number, propTypes.oneOf(["auto"])]),
  separator: propTypes.oneOfType([propTypes.node, propTypes.string]),
  component: propTypes.oneOfType([propTypes.string, propTypes.func]),
  className: propTypes.any
}, _class$1.defaultProps = {
  prefix: "next-",
  maxNode: 100,
  component: "nav"
}, _initialiseProps = function _initialiseProps2() {
  var _this2 = this;
  this.computeMaxNode = function() {
    if (_this2.props.maxNode !== "auto" || !_this2.breadcrumbEl)
      return;
    var scrollWidth = _this2.breadcrumbEl.scrollWidth;
    var rect = _this2.breadcrumbEl.getBoundingClientRect();
    if (scrollWidth <= rect.width)
      return;
    var maxNode = _this2.breadcrumbEl.children.length;
    var index = 1;
    var fullWidth = scrollWidth;
    while (index < _this2.breadcrumbEl.children.length - 1) {
      var el = _this2.breadcrumbEl.children[index];
      maxNode--;
      fullWidth -= el.getBoundingClientRect().width;
      if (fullWidth <= rect.width) {
        break;
      }
      index++;
    }
    maxNode = Math.max(3, maxNode);
    if (maxNode !== _this2.state.maxNode) {
      _this2.setState({
        maxNode
      });
    }
  };
  this.saveBreadcrumbRef = function(ref) {
    _this2.breadcrumbEl = ref;
  };
}, _temp$1);
Breadcrumb.displayName = "Breadcrumb";
var NextBreadcrumb = NextConfigProvider.config(polyfill(Breadcrumb));
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement(NextBreadcrumb, null, /* @__PURE__ */ createElement(NextBreadcrumb.Item, {
    link: "javascript:void(0);"
  }, "Home"), /* @__PURE__ */ createElement(NextBreadcrumb.Item, {
    link: "javascript:void(0);"
  }, "All Categories"), /* @__PURE__ */ createElement(NextBreadcrumb.Item, {
    link: "javascript:void(0);"
  }, "Women’s Clothing"), /* @__PURE__ */ createElement(NextBreadcrumb.Item, {
    link: "javascript:void(0);"
  }, "Blouses & Shirts"), /* @__PURE__ */ createElement(NextBreadcrumb.Item, null, "T-shirts  ", /* @__PURE__ */ createElement("b", null, "78,999"), " Results")));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(NextBreadcrumb, {
    maxNode: 5
  }, /* @__PURE__ */ createElement(NextBreadcrumb.Item, {
    link: "javascript:void(0);"
  }, "Home 1"), /* @__PURE__ */ createElement(NextBreadcrumb.Item, {
    link: "javascript:void(0);"
  }, "Whatever 2"), /* @__PURE__ */ createElement(NextBreadcrumb.Item, {
    link: "javascript:void(0);"
  }, "All Categories 3"), /* @__PURE__ */ createElement(NextBreadcrumb.Item, {
    link: "javascript:void(0);"
  }, "Women’s Clothing 4"), /* @__PURE__ */ createElement(NextBreadcrumb.Item, {
    link: "javascript:void(0);"
  }, "Blouses & Shirts 5"), /* @__PURE__ */ createElement(NextBreadcrumb.Item, null, "T-shirts 6")));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(NextBreadcrumb, {
    separator: "/"
  }, /* @__PURE__ */ createElement(NextBreadcrumb.Item, {
    link: "javascript:void(0);"
  }, "Home"), /* @__PURE__ */ createElement(NextBreadcrumb.Item, {
    link: "javascript:void(0);"
  }, "All Categories"), /* @__PURE__ */ createElement(NextBreadcrumb.Item, {
    link: "javascript:void(0);"
  }, "Women’s Clothing"), /* @__PURE__ */ createElement(NextBreadcrumb.Item, {
    link: "javascript:void(0);"
  }, "Blouses & Shirts"), /* @__PURE__ */ createElement(NextBreadcrumb.Item, null, "T-shirts")));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const modules = {};
modules["_basic"] = m0;
modules["_more"] = m1;
modules["_separator"] = m2;
export default modules;
