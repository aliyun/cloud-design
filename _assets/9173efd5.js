import {N as NextConfigProvider, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, K as KEYCODE, k as _objectWithoutProperties, d as classnames, R as React, g as _extends, s as NextIcon, i as propTypes, j as func, p as polyfill, o as obj, c as createElement, D as Radio, C as Component} from "./index.79f375bb.js";
import {H as He} from "./6639483f.js";
var _class, _temp2;
var Panel = (_temp2 = _class = function(_React$Component) {
  _inherits(Panel2, _React$Component);
  function Panel2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Panel2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onKeyDown = function(e) {
      var keyCode = e.keyCode;
      if (keyCode === KEYCODE.SPACE) {
        var onClick = _this.props.onClick;
        e.preventDefault();
        onClick && onClick(e);
      }
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Panel2.prototype.render = function render() {
    var _classNames, _classNames2;
    var _props = this.props, title = _props.title, children = _props.children, className = _props.className, isExpanded = _props.isExpanded, disabled = _props.disabled, style = _props.style, prefix = _props.prefix, onClick = _props.onClick, id = _props.id, others = _objectWithoutProperties(_props, ["title", "children", "className", "isExpanded", "disabled", "style", "prefix", "onClick", "id"]);
    var cls = classnames((_classNames = {}, _classNames[prefix + "collapse-panel"] = true, _classNames[prefix + "collapse-panel-hidden"] = !isExpanded, _classNames[prefix + "collapse-panel-expanded"] = isExpanded, _classNames[prefix + "collapse-panel-disabled"] = disabled, _classNames[className] = className, _classNames));
    var iconCls = classnames((_classNames2 = {}, _classNames2[prefix + "collapse-panel-icon"] = true, _classNames2[prefix + "collapse-panel-icon-expanded"] = isExpanded, _classNames2));
    var headingId = id ? id + "-heading" : void 0;
    var regionId = id ? id + "-region" : void 0;
    return React.createElement("div", _extends({className: cls, style, id}, others), React.createElement("div", {
      id: headingId,
      className: prefix + "collapse-panel-title",
      onClick,
      onKeyDown: this.onKeyDown,
      tabIndex: "0",
      "aria-disabled": disabled,
      "aria-expanded": isExpanded,
      "aria-controls": regionId,
      role: "button"
    }, React.createElement(NextIcon, {
      type: "arrow-right",
      className: iconCls,
      "aria-hidden": "true"
    }), title), React.createElement("div", {
      className: prefix + "collapse-panel-content",
      role: "region",
      id: regionId
    }, children));
  };
  return Panel2;
}(React.Component), _class.propTypes = {
  prefix: propTypes.string,
  style: propTypes.object,
  children: propTypes.any,
  isExpanded: propTypes.bool,
  disabled: propTypes.bool,
  title: propTypes.node,
  className: propTypes.string,
  onClick: propTypes.func,
  id: propTypes.string
}, _class.defaultProps = {
  prefix: "next-",
  isExpanded: false,
  onClick: func.noop
}, _class.isNextPanel = true, _temp2);
Panel.displayName = "Panel";
var Panel$1 = NextConfigProvider.config(Panel);
var _class$1, _temp;
var Collapse = (_temp = _class$1 = function(_React$Component) {
  _inherits(Collapse2, _React$Component);
  function Collapse2(props) {
    _classCallCheck(this, Collapse2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
    var expandedKeys = void 0;
    if ("expandedKeys" in props) {
      expandedKeys = props.expandedKeys;
    } else {
      expandedKeys = props.defaultExpandedKeys;
    }
    _this.state = {
      expandedKeys: typeof expandedKeys === "undefined" ? [] : expandedKeys
    };
    return _this;
  }
  Collapse2.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
    if ("expandedKeys" in props) {
      return {
        expandedKeys: typeof props.expandedKeys === "undefined" ? [] : props.expandedKeys
      };
    }
    return null;
  };
  Collapse2.prototype.onItemClick = function onItemClick(key) {
    var expandedKeys = this.state.expandedKeys;
    if (this.props.accordion) {
      expandedKeys = String(expandedKeys[0]) === String(key) ? [] : [key];
    } else {
      expandedKeys = [].concat(expandedKeys);
      var stringKey = String(key);
      var index = expandedKeys.findIndex(function(k) {
        return String(k) === stringKey;
      });
      var isExpanded = index > -1;
      if (isExpanded) {
        expandedKeys.splice(index, 1);
      } else {
        expandedKeys.push(key);
      }
    }
    this.setExpandedKey(expandedKeys);
  };
  Collapse2.prototype.genratePanelId = function genratePanelId(itemId, index) {
    var collapseId = this.props.id;
    var id = void 0;
    if (itemId) {
      id = itemId;
    } else if (collapseId) {
      id = collapseId + "-panel-" + index;
    }
    return id;
  };
  Collapse2.prototype.getProps = function getProps(item, index, key) {
    var _this2 = this;
    var expandedKeys = this.state.expandedKeys;
    var title = item.title;
    var disabled = this.props.disabled;
    if (!disabled) {
      disabled = item.disabled;
    }
    var isExpanded = false;
    if (this.props.accordion) {
      isExpanded = String(expandedKeys[0]) === String(key);
    } else {
      isExpanded = expandedKeys.some(function(expandedKey) {
        if (expandedKey === null || expandedKey === void 0 || key === null || key === void 0) {
          return false;
        }
        if (expandedKey === key || expandedKey.toString() === key.toString()) {
          return true;
        }
        return false;
      });
    }
    var id = this.genratePanelId(item.id, index);
    return {
      key,
      title,
      isExpanded,
      disabled,
      id,
      onClick: disabled ? null : function() {
        _this2.onItemClick(key);
        if ("onClick" in item) {
          item.onClick(key);
        }
      }
    };
  };
  Collapse2.prototype.getItemsByDataSource = function getItemsByDataSource() {
    var _this3 = this;
    var props = this.props;
    var dataSource = props.dataSource;
    var hasKeys = dataSource.some(function(item) {
      return "key" in item;
    });
    return dataSource.map(function(item, index) {
      var key = hasKeys ? item.key : "" + index;
      return React.createElement(Panel$1, _extends({}, _this3.getProps(item, index, key), {key}), item.content);
    });
  };
  Collapse2.prototype.getItemsByChildren = function getItemsByChildren() {
    var _this4 = this;
    var allKeys = React.Children.map(this.props.children, function(child) {
      return child && child.key;
    });
    var hasKeys = Boolean(allKeys.length);
    return React.Children.map(this.props.children, function(child, index) {
      if (child && typeof child.type === "function" && child.type.isNextPanel) {
        var key = hasKeys ? child.key : "" + index;
        return React.cloneElement(child, _this4.getProps(child.props, index, key));
      } else {
        return child;
      }
    });
  };
  Collapse2.prototype.setExpandedKey = function setExpandedKey(expandedKeys) {
    if (!("expandedKeys" in this.props)) {
      this.setState({expandedKeys});
    }
    this.props.onExpand(this.props.accordion ? expandedKeys[0] : expandedKeys);
  };
  Collapse2.prototype.render = function render() {
    var _classNames;
    var _props = this.props, prefix = _props.prefix, className = _props.className, style = _props.style, disabled = _props.disabled, dataSource = _props.dataSource, id = _props.id, rtl = _props.rtl;
    var collapseClassName = classnames((_classNames = {}, _classNames[prefix + "collapse"] = true, _classNames[prefix + "collapse-disabled"] = disabled, _classNames[className] = Boolean(className), _classNames));
    var others = obj.pickOthers(Collapse2.propTypes, this.props);
    return React.createElement("div", _extends({
      id,
      className: collapseClassName,
      style
    }, others, {
      role: "presentation",
      dir: rtl ? "rtl" : void 0
    }), dataSource ? this.getItemsByDataSource() : this.getItemsByChildren());
  };
  return Collapse2;
}(React.Component), _class$1.propTypes = {
  prefix: propTypes.string,
  style: propTypes.object,
  dataSource: propTypes.array,
  defaultExpandedKeys: propTypes.array,
  expandedKeys: propTypes.array,
  onExpand: propTypes.func,
  disabled: propTypes.bool,
  className: propTypes.string,
  accordion: propTypes.bool,
  children: propTypes.node,
  id: propTypes.string,
  rtl: propTypes.bool
}, _class$1.defaultProps = {
  accordion: false,
  prefix: "next-",
  onExpand: func.noop
}, _class$1.contextTypes = {
  prefix: propTypes.string
}, _temp);
Collapse.displayName = "Collapse";
var Collapse$1 = polyfill(NextConfigProvider.config(Collapse));
Collapse$1.Panel = Panel$1;
const Panel$2 = Collapse$1.Panel;
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement(Collapse$1, {
    id: "collapse-accessibility"
  }, /* @__PURE__ */ createElement(Panel$2, {
    id: "panel-accessibility",
    title: "There is a long title, you can set the multiTitle to multi line display, the associated configuration properties and a single height is not the same, the specific configuration platform configuration can be configured."
  }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "Promotions are marketing campaigns ran by Marketplace"), /* @__PURE__ */ createElement("li", null, "Participate to sale your products during that promotion and make a profit"))), /* @__PURE__ */ createElement(Panel$2, {
    title: "What are Promotion Products?"
  }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"), /* @__PURE__ */ createElement("li", null, "You can choose which products should be available for the promotion"), /* @__PURE__ */ createElement("li", null, "Not all Products of you will be available, because Promotions will only attract certain Product areas")))));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const Panel$3 = Collapse$1.Panel;
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(Collapse$1, {
    accordion: true
  }, /* @__PURE__ */ createElement(Panel$3, {
    title: "There is a long title, you can set the multiTitle to multi line display, the associated configuration properties and a single height is not the same, the specific configuration platform configuration can be configured."
  }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "Promotions are marketing campaigns ran by Marketplace"), /* @__PURE__ */ createElement("li", null, "Participate to sale your products during that promotion and make a profit"))), /* @__PURE__ */ createElement(Panel$3, {
    title: "What are Promotion Products?"
  }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"), /* @__PURE__ */ createElement("li", null, "You can choose which products should be available for the promotion"), /* @__PURE__ */ createElement("li", null, "Not all Products of you will be available, because Promotions will only attract certain Product areas"))), /* @__PURE__ */ createElement(Panel$3, {
    title: "Why can i not submit a higher price?"
  }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "The Promotion requires a certain price to make sure that our customers are attracted"))), /* @__PURE__ */ createElement(Panel$3, {
    title: "What is Promo Stock?"
  }, "Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active.")));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const Panel$4 = Collapse$1.Panel;
const RadioGroup = Radio.Group;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rtl: false
    };
    this.handleDirectionChange = this.handleDirectionChange.bind(this);
  }
  handleDirectionChange(v) {
    this.setState({
      rtl: !this.state.rtl
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(RadioGroup, {
      dataSource: ["ltr", "rtl"],
      value: this.state.rtl ? "rtl" : "ltr",
      onChange: this.handleDirectionChange
    }), /* @__PURE__ */ createElement(Collapse$1, {
      rtl: this.state.rtl
    }, /* @__PURE__ */ createElement(Panel$4, {
      title: "simple tile"
    }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "Promotions are marketing campaigns ran by Marketplace"), /* @__PURE__ */ createElement("li", null, "Participate to sale your products during that promotion and make a profit"))), /* @__PURE__ */ createElement(Panel$4, {
      title: "What are Promotion Products?"
    }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"), /* @__PURE__ */ createElement("li", null, "You can choose which products should be available for the promotion"), /* @__PURE__ */ createElement("li", null, "Not all Products of you will be available, because Promotions will only attract certain Product areas"))), /* @__PURE__ */ createElement(Panel$4, {
      title: "Why can i not submit a higher price?"
    }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "The Promotion requires a certain price to make sure that our customers are attracted"))), /* @__PURE__ */ createElement(Panel$4, {
      title: "What is Promo Stock?"
    }, "Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active.")));
  }
}
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(App, null));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const list = [
  {
    title: "Well, hello there",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    disabled: true
  },
  {
    title: "Gigantomaniac Monster Text, very long, much width, wow",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  },
  {
    title: "Generic Title",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  },
  {
    title: "Login Infomation",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  }
];
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(Collapse$1, {
    dataSource: list
  }));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const Panel$5 = Collapse$1.Panel;
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Collapse$1, {
    disabled: true
  }, /* @__PURE__ */ createElement(Panel$5, {
    title: "disable collapse"
  }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "Promotions are marketing campaigns ran by Marketplace"), /* @__PURE__ */ createElement("li", null, "Participate to sale your products during that promotion and make a profit"))), /* @__PURE__ */ createElement(Panel$5, {
    title: "disable collapse"
  }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"), /* @__PURE__ */ createElement("li", null, "You can choose which products should be available for the promotion"), /* @__PURE__ */ createElement("li", null, "Not all Products of you will be available, because Promotions will only attract certain Product areas"))), /* @__PURE__ */ createElement(Panel$5, {
    title: "disable collapse"
  }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "The Promotion requires a certain price to make sure that our customers are attracted"))), /* @__PURE__ */ createElement(Panel$5, {
    title: "disable collapse"
  }, "Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active.")), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Collapse$1, null, /* @__PURE__ */ createElement(Panel$5, {
    title: "simple title(disabled)",
    disabled: true
  }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "Promotions are marketing campaigns ran by Marketplace"), /* @__PURE__ */ createElement("li", null, "Participate to sale your products during that promotion and make a profit"))), /* @__PURE__ */ createElement(Panel$5, {
    title: "What are Promotion Products?(disabled)",
    disabled: true
  }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"), /* @__PURE__ */ createElement("li", null, "You can choose which products should be available for the promotion"), /* @__PURE__ */ createElement("li", null, "Not all Products of you will be available, because Promotions will only attract certain Product areas"))), /* @__PURE__ */ createElement(Panel$5, {
    title: "Why can i not submit a higher price?"
  }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "The Promotion requires a certain price to make sure that our customers are attracted"))), /* @__PURE__ */ createElement(Panel$5, {
    title: "What is Promo Stock?"
  }, "Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active."))));
}
const Style$4 = He.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const Panel$6 = Collapse$1.Panel;
class Demo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      expandedKeys: []
    };
  }
  onExpand(expandedKeys) {
    this.setState({
      expandedKeys
    });
  }
  onClick(key) {
    console.log("clicked", key);
  }
  render() {
    return /* @__PURE__ */ createElement(Collapse$1, {
      onExpand: this.onExpand.bind(this),
      expandedKeys: this.state.expandedKeys
    }, /* @__PURE__ */ createElement(Panel$6, {
      title: "simple tile",
      onClick: this.onClick
    }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "Promotions are marketing campaigns ran by Marketplace"), /* @__PURE__ */ createElement("li", null, "Participate to sale your products during that promotion and make a profit"))), /* @__PURE__ */ createElement(Panel$6, {
      title: "What are Promotion Products?"
    }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"), /* @__PURE__ */ createElement("li", null, "You can choose which products should be available for the promotion"), /* @__PURE__ */ createElement("li", null, "Not all Products of you will be available, because Promotions will only attract certain Product areas"))), /* @__PURE__ */ createElement(Panel$6, {
      title: "Why can i not submit a higher price?"
    }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "The Promotion requires a certain price to make sure that our customers are attracted"))), /* @__PURE__ */ createElement(Panel$6, {
      title: "What is Promo Stock?"
    }, "Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active."));
  }
}
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement(Demo, null));
}
const Style$5 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const Panel$7 = Collapse$1.Panel;
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Collapse$1, null, /* @__PURE__ */ createElement(Panel$7, {
    title: "simple tile"
  }, /* @__PURE__ */ createElement(Collapse$1, null, /* @__PURE__ */ createElement(Panel$7, {
    title: "simple tile"
  }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "Promotions are marketing campaigns ran by Marketplace"), /* @__PURE__ */ createElement("li", null, "Participate to sale your products during that promotion and make a profit"))), /* @__PURE__ */ createElement(Panel$7, {
    title: "What are Promotion Products?"
  }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"), /* @__PURE__ */ createElement("li", null, "You can choose which products should be available for the promotion"), /* @__PURE__ */ createElement("li", null, "Not all Products of you will be available, because Promotions will only attract certain Product areas"))), /* @__PURE__ */ createElement(Panel$7, {
    title: "Why can i not submit a higher price?"
  }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "The Promotion requires a certain price to make sure that our customers are attracted"))), /* @__PURE__ */ createElement(Panel$7, {
    title: "What is Promo Stock?"
  }, "Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active."))), /* @__PURE__ */ createElement(Panel$7, {
    title: "What are Promotion Products?"
  }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"), /* @__PURE__ */ createElement("li", null, "You can choose which products should be available for the promotion"), /* @__PURE__ */ createElement("li", null, "Not all Products of you will be available, because Promotions will only attract certain Product areas"))))));
}
const Style$6 = He.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const modules = {};
modules["_accessibility"] = m0;
modules["_accordion"] = m1;
modules["_basic"] = m2;
modules["_datasource"] = m3;
modules["_disabled"] = m4;
modules["_event"] = m5;
modules["_nested"] = m6;
export default modules;
