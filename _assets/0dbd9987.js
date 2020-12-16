import {a as NextConfigProvider, _ as _inherits, b as _classCallCheck, d as _possibleConstructorReturn, n as log, j as _objectWithoutProperties, e as classnames, R as React, f as _extends, p as propTypes, c as createElement} from "./index.fc1c4ecb.js";
import {q as qe} from "./7af9cfe0.js";
var _class, _temp;
var Paragraph = (_temp = _class = function(_React$Component) {
  _inherits(Paragraph2, _React$Component);
  function Paragraph2(props) {
    _classCallCheck(this, Paragraph2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
    log.warning("[Paragraph] is deprecated, please use Typography.Paragraph instead!");
    return _this;
  }
  Paragraph2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, className = _props.className, type = _props.type, size = _props.size, rtl = _props.rtl, others = _objectWithoutProperties(_props, ["prefix", "className", "type", "size", "rtl"]);
    var cls = classnames(prefix + "paragraph", type === "short" ? prefix + "paragraph-short" : prefix + "paragraph-long", size === "small" ? prefix + "paragraph-small" : prefix + "paragraph-medium", className);
    if (rtl) {
      others.dir = "rtl";
    }
    return React.createElement("div", _extends({}, others, {className: cls}), this.props.children);
  };
  return Paragraph2;
}(React.Component), _class.propTypes = {
  prefix: propTypes.string,
  className: propTypes.string,
  type: propTypes.oneOf(["long", "short"]),
  size: propTypes.oneOf(["medium", "small"]),
  rtl: propTypes.bool
}, _class.defaultProps = {
  prefix: "next-",
  type: "long",
  size: "medium"
}, _temp);
Paragraph.displayName = "Paragraph";
var NextParagraph = NextConfigProvider.config(Paragraph);
function DemoComponent() {
  const content2 = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextParagraph, null, content2), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextParagraph, {
    size: "small"
  }, content2));
  return /* @__PURE__ */ createElement(Style, null, content2);
}
const Style = qe.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function DemoComponent$1() {
  const content2 = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextParagraph, null, content2), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextParagraph, {
    type: "short"
  }, content2));
  return /* @__PURE__ */ createElement(Style$1, null, content2);
}
const Style$1 = qe.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const modules = {};
modules["_basic"] = m0;
modules["_type"] = m1;
export default modules;
