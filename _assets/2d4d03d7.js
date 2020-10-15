import {p as polyfill, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, j as _objectWithoutProperties, d as classnames, R as React, e as _extends, C as Component, g as propTypes, c as createElement} from "./index.e76f7845.js";
import {H as He} from "./a3f37a66.js";
import {N as NextConfigProvider, z as zhCN} from "./33d6cb60.js";
import "./482b3bb1.js";
import "./39b9d0c9.js";
import "./80678f37.js";
import {N as NextBox} from "./3834e27c.js";
import {N as NextLoading} from "./306a8848.js";
import {N as NextDivider} from "./db5dfb65.js";
import {N as NextAvatar} from "./63f54319.js";
import {e as exported} from "./36689a45.js";
var _class, _temp;
var List = (_temp = _class = function(_Component) {
  _inherits(List2, _Component);
  function List2() {
    _classCallCheck(this, List2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  List2.prototype.render = function render() {
    var _classNames;
    var _props = this.props, prefix = _props.prefix, header = _props.header, footer = _props.footer, size = _props.size, divider = _props.divider, className = _props.className, children = _props.children, rtl = _props.rtl, dataSource = _props.dataSource, renderItem2 = _props.renderItem, locale = _props.locale, loading = _props.loading, _props$loadingCompone = _props.loadingComponent, LoadingComponent = _props$loadingCompone === void 0 ? NextLoading : _props$loadingCompone, emptyContent = _props.emptyContent, others = _objectWithoutProperties(_props, ["prefix", "header", "footer", "size", "divider", "className", "children", "rtl", "dataSource", "renderItem", "locale", "loading", "loadingComponent", "emptyContent"]);
    if (rtl) {
      others.dir = "rtl";
    }
    var dSValid = Array.isArray(dataSource);
    var classes = classnames(prefix + "list", (_classNames = {}, _classNames[prefix + "list-" + size] = size, _classNames[prefix + "list-divider"] = divider, _classNames), className);
    var customContent = dSValid && dataSource.map(function(one, index) {
      return renderItem2(one, index);
    });
    var content = React.createElement("div", _extends({}, others, {className: classes}), header ? React.createElement("div", {className: prefix + "list-header"}, header) : null, !(dSValid && dataSource.length > 1) && !children ? React.createElement("div", {className: prefix + "list-empty"}, emptyContent || locale.empty) : React.createElement("ul", {key: "list-body", className: prefix + "list-items"}, customContent, children), footer ? React.createElement("div", {className: prefix + "list-footer"}, footer) : null);
    if (loading) {
      var loadingClassName = prefix + "list-loading";
      return React.createElement(LoadingComponent, {className: loadingClassName}, content);
    }
    return content;
  };
  return List2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  header: propTypes.node,
  footer: propTypes.node,
  size: propTypes.oneOf(["medium", "small"]),
  divider: propTypes.bool,
  dataSource: propTypes.array,
  renderItem: propTypes.func,
  loading: propTypes.bool,
  loadingComponent: propTypes.func,
  emptyContent: propTypes.node,
  className: propTypes.string,
  children: propTypes.any,
  locale: propTypes.object
}, _class.defaultProps = {
  rtl: false,
  size: "medium",
  divider: true,
  prefix: "next-",
  locale: zhCN.List,
  renderItem: function renderItem(item) {
    return item;
  },
  loading: false
}, _temp);
List.displayName = "List";
var List$1 = NextConfigProvider.config(polyfill(List));
var _class$1, _temp$1;
var ListItem = (_temp$1 = _class$1 = function(_Component) {
  _inherits(ListItem2, _Component);
  function ListItem2() {
    _classCallCheck(this, ListItem2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  ListItem2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, title = _props.title, description = _props.description, media = _props.media, extra = _props.extra, className = _props.className, children = _props.children, others = _objectWithoutProperties(_props, ["prefix", "title", "description", "media", "extra", "className", "children"]);
    var classes = classnames(prefix + "list-item", className);
    return React.createElement("li", _extends({}, others, {className: classes}), media ? React.createElement("div", {className: prefix + "list-item-media"}, media) : null, React.createElement("div", {className: prefix + "list-item-content"}, title ? React.createElement("div", {className: prefix + "list-item-title"}, title) : null, description ? React.createElement("div", {className: prefix + "list-item-description"}, description) : null, children), extra ? React.createElement("div", {className: prefix + "list-item-extra"}, extra) : null);
  };
  return ListItem2;
}(Component), _class$1.propTypes = {
  prefix: propTypes.string,
  title: propTypes.node,
  description: propTypes.node,
  media: propTypes.node,
  extra: propTypes.node,
  className: propTypes.any
}, _class$1.defaultProps = {
  prefix: "next-"
}, _temp$1);
ListItem.displayName = "ListItem";
var Item = NextConfigProvider.config(polyfill(ListItem));
List$1.Item = Item;
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", {
    style: {width: 288}
  }, /* @__PURE__ */ createElement(List$1, {
    size: "small",
    header: /* @__PURE__ */ createElement("div", null, "Notifications")
  }, /* @__PURE__ */ createElement(List$1.Item, {
    extra: "$20",
    media: /* @__PURE__ */ createElement(NextAvatar, {
      src: "https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png"
    }),
    title: "Title"
  }, "List Item 1"), /* @__PURE__ */ createElement(List$1.Item, {
    extra: "$20",
    title: "Title",
    media: /* @__PURE__ */ createElement(NextAvatar, {
      src: "https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png"
    })
  }, "List Item 2"), /* @__PURE__ */ createElement(List$1.Item, {
    extra: "$20",
    title: "Title",
    media: /* @__PURE__ */ createElement(NextAvatar, {
      src: "https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png"
    })
  }, "List Item 3"), /* @__PURE__ */ createElement(List$1.Item, {
    extra: "$20",
    title: "Title",
    media: /* @__PURE__ */ createElement(NextAvatar, {
      src: "https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png"
    })
  }, "List Item 4"), /* @__PURE__ */ createElement(List$1.Item, {
    extra: "$20",
    title: "Title",
    media: /* @__PURE__ */ createElement(NextAvatar, {
      src: "https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png"
    })
  }, "List Item 5"))));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const actions = /* @__PURE__ */ createElement(NextBox, {
  direction: "row",
  align: "center",
  style: {whiteSpace: "nowrap", height: "100%", paddingLeft: 100}
}, /* @__PURE__ */ createElement(exported, {
  text: true,
  type: "primary"
}, "编辑"), /* @__PURE__ */ createElement(NextDivider, {
  direction: "ver"
}), /* @__PURE__ */ createElement(exported, {
  text: true,
  type: "primary"
}, "订阅"), /* @__PURE__ */ createElement(NextDivider, {
  direction: "ver"
}), /* @__PURE__ */ createElement(exported, {
  text: true,
  type: "primary"
}, "删除"));
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(List$1, null, /* @__PURE__ */ createElement(List$1.Item, {
    extra: actions,
    media: /* @__PURE__ */ createElement("img", {
      width: "161",
      height: "108",
      src: "https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png"
    }),
    title: "构建一套产品化设计系统"
  }, /* @__PURE__ */ createElement("p", {
    style: {margin: "12px 0"}
  }, "随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易” 的过程中，网站 UI 构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配” …"), /* @__PURE__ */ createElement("div", null, "谢瑶 3 小时前更新")), /* @__PURE__ */ createElement(List$1.Item, {
    extra: actions,
    title: "构建一套产品化设计系统",
    media: /* @__PURE__ */ createElement("img", {
      width: "161",
      height: "108",
      src: "https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png"
    })
  }, /* @__PURE__ */ createElement("p", {
    style: {margin: "12px 0"}
  }, "随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易” 的过程中，网站 UI 构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配” …"), /* @__PURE__ */ createElement("div", null, "谢瑶 3 小时前更新")), /* @__PURE__ */ createElement(List$1.Item, {
    extra: actions,
    title: "构建一套产品化设计系统",
    media: /* @__PURE__ */ createElement("img", {
      width: "161",
      height: "108",
      src: "https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png"
    })
  }, /* @__PURE__ */ createElement("p", {
    style: {margin: "12px 0"}
  }, "随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易” 的过程中，网站 UI 构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配” …"), /* @__PURE__ */ createElement("div", null, "谢瑶 3 小时前更新")), /* @__PURE__ */ createElement(List$1.Item, {
    extra: actions,
    title: "构建一套产品化设计系统",
    media: /* @__PURE__ */ createElement("img", {
      width: "161",
      height: "108",
      src: "https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png"
    })
  }, /* @__PURE__ */ createElement("p", {
    style: {margin: "12px 0"}
  }, "随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易” 的过程中，网站 UI 构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配” …"), /* @__PURE__ */ createElement("div", null, "谢瑶 3 小时前更新")), /* @__PURE__ */ createElement(List$1.Item, {
    extra: actions,
    title: "构建一套产品化设计系统",
    media: /* @__PURE__ */ createElement("img", {
      width: "161",
      height: "108",
      src: "https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png"
    })
  }, /* @__PURE__ */ createElement("p", {
    style: {margin: "12px 0"}
  }, "随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易” 的过程中，网站 UI 构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配” …"), /* @__PURE__ */ createElement("div", null, "谢瑶 3 小时前更新"))));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const modules = {};
modules["_basic"] = m0;
modules["_complex"] = m1;
export default modules;
