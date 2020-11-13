import {N as NextConfigProvider, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, k as _objectWithoutProperties, R as React, g as _extends, C as Component, i as propTypes, d as classnames, c as createElement} from "./index.8e8886f2.js";
import {H as He} from "./9375aab8.js";
var _class, _temp;
var Text = (_temp = _class = function(_Component) {
  _inherits(Text2, _Component);
  function Text2() {
    _classCallCheck(this, Text2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Text2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, className = _props.className, component = _props.component, strong = _props.strong, underline = _props.underline, deleteProp = _props.delete, code = _props.code, mark = _props.mark, rtl = _props.rtl, others = _objectWithoutProperties(_props, ["prefix", "className", "component", "strong", "underline", "delete", "code", "mark", "rtl"]);
    var Tag = component;
    var children = this.props.children;
    if (strong) {
      children = React.createElement("strong", null, children);
    }
    if (underline) {
      children = React.createElement("u", null, children);
    }
    if (deleteProp) {
      children = React.createElement("del", null, children);
    }
    if (code) {
      children = React.createElement("code", null, children);
    }
    if (mark) {
      children = React.createElement("mark", null, children);
    }
    if (rtl) {
      others.dir = "rtl";
    }
    return React.createElement(Tag, _extends({}, others, {
      className: (className || "") + " " + prefix + "typography"
    }), children);
  };
  return Text2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  delete: propTypes.bool,
  mark: propTypes.bool,
  underline: propTypes.bool,
  strong: propTypes.bool,
  code: propTypes.bool,
  component: propTypes.elementType,
  children: propTypes.node,
  rtl: propTypes.bool
}, _class.defaultProps = {
  prefix: "next-",
  delete: false,
  mark: false,
  underline: false,
  strong: false,
  code: false,
  component: "span",
  rtl: false
}, _temp);
Text.displayName = "Text";
var Text$1 = NextConfigProvider.config(Text);
var _class$1, _temp$1;
var Typography = (_temp$1 = _class$1 = function(_Component) {
  _inherits(Typography2, _Component);
  function Typography2() {
    _classCallCheck(this, Typography2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Typography2.prototype.render = function render() {
    return React.createElement(Text$1, this.props);
  };
  return Typography2;
}(Component), _class$1.propTypes = {
  component: propTypes.elementType
}, _class$1.defaultProps = {
  component: "article"
}, _temp$1);
Typography.displayName = "Typography";
var _class$2, _temp$2;
var Paragraph = (_temp$2 = _class$2 = function(_React$Component) {
  _inherits(Paragraph2, _React$Component);
  function Paragraph2() {
    _classCallCheck(this, Paragraph2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  Paragraph2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, className = _props.className, component = _props.component, others = _objectWithoutProperties(_props, ["prefix", "className", "component"]);
    var cls = classnames(prefix + "typography-paragraph", className);
    return React.createElement(Text$1, _extends({}, others, {className: cls, component}));
  };
  return Paragraph2;
}(React.Component), _class$2.propTypes = {
  prefix: propTypes.string,
  component: propTypes.elementType
}, _class$2.defaultProps = {
  prefix: "next-",
  type: "long",
  size: "medium",
  component: "p"
}, _temp$2);
Paragraph.displayName = "Paragraph";
var Paragraph$1 = NextConfigProvider.config(Paragraph);
var createTitle = function(Tag) {
  var _class2, _temp2;
  var Title = (_temp2 = _class2 = function(_Component) {
    _inherits(Title2, _Component);
    function Title2() {
      _classCallCheck(this, Title2);
      return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }
    Title2.prototype.render = function render() {
      var _props = this.props, prefix = _props.prefix, className = _props.className, others = _objectWithoutProperties(_props, ["prefix", "className"]);
      return React.createElement(Text$1, _extends({}, others, {
        component: Tag,
        className: (className || "") + " " + prefix + "typography-title"
      }));
    };
    return Title2;
  }(Component), _class2.propTypes = {
    prefix: propTypes.string
  }, _class2.defaultProps = {
    prefix: "next-"
  }, _temp2);
  Title.displayName = "Title";
  Title.displayName = Tag.toUpperCase();
  return NextConfigProvider.config(Title);
};
Typography.Paragraph = Paragraph$1;
Typography.H1 = createTitle("h1");
Typography.H2 = createTitle("h2");
Typography.H3 = createTitle("h3");
Typography.H4 = createTitle("h4");
Typography.H5 = createTitle("h5");
Typography.H6 = createTitle("h6");
Typography.Text = Text$1;
const {H1, H2, Paragraph: Paragraph$2, Text: Text$2} = Typography;
function DemoComponent() {
  const content = /* @__PURE__ */ createElement(Typography, null, /* @__PURE__ */ createElement(H1, null, "Fusion 简介"), /* @__PURE__ */ createElement(Paragraph$2, null, "Fusion 是一套企业级中后台UI的解决方案，致力于解决设计师与前端在产品体验一致性、工作协同、开发效率方面的问题。通过协助业务线构建设计系统，提供系统化工具协助设计师前端使用设计系统，下游提供一站式设计项目协作平台；打通互联网产品从设计到开发的工作流。"), /* @__PURE__ */ createElement(Paragraph$2, null, "Fusion Design 产品创建于2015年底，阿里巴巴集团中台战略背景下，由国际UED（现国际用户体验事业部）与B2B技术部成立中台DPL项目。从国际UED，天猫，商家等各类业务形态中抽象解构，通过一套设计系统协议提升", /* @__PURE__ */ createElement(Text$2, {
    mark: true
  }, "设计与开发效率"), "，以统一的物料分发工具提升团队协同能力，借助灵活的在线样式配置支撑业务的设计创新。"), /* @__PURE__ */ createElement(H2, null, "Fusion 的能力"), /* @__PURE__ */ createElement(Paragraph$2, null, "我们提供完善的设计原则、最佳实践和设计资源文件（", /* @__PURE__ */ createElement(Text$2, {
    code: true
  }, "Sketch"), " ", "和 ", /* @__PURE__ */ createElement(Text$2, {
    code: true
  }, "Axure"), "），来帮助业务快速设计出高质量的产品原型。"), /* @__PURE__ */ createElement(Paragraph$2, {
    component: "div"
  }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "通过构建一套标准化中后台体验设计原则，提升中后台产品体验一致性问题。"), /* @__PURE__ */ createElement("li", null, "通过Fusion平台的主题配置能力，线上优化品牌样式并同步物料给设计师与开发使用，做到品牌样式迭代0成本。节省了大量的设计师和开发工作量。"), /* @__PURE__ */ createElement("li", null, "设计可直接在", /* @__PURE__ */ createElement(Text$2, {
    code: true
  }, "sketch"), "（通过插件", /* @__PURE__ */ createElement(Text$2, {
    code: true
  }, "FusionCool"), "）使用配好的组件画设计稿；开发可在本地工程里面使用配好的主题开发项目，不需要关心组件样式（未来甚至页面样式）；从而打破协作壁垒，让合作更加顺畅。"), /* @__PURE__ */ createElement("li", null, "通过 ", /* @__PURE__ */ createElement(Text$2, {
    code: true
  }, "FusionCool"), " ", "可以直接方便的沉淀模块模板；通过脚手架工具可以方便的沉淀业务组件、代码端； 让项目更快落地。"))));
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const {Paragraph: Paragraph$3} = Typography;
function DemoComponent$1() {
  const content2 = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Paragraph$3, null, content2));
  return /* @__PURE__ */ createElement(Style$1, null, content2);
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const {Text: Text$3} = Typography;
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Text$3, null, "Fusion Design"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Text$3, {
    mark: true
  }, "Fusion Design"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Text$3, {
    code: true
  }, "Fusion Design"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Text$3, {
    underline: true
  }, "Fusion Design"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Text$3, {
    delete: true
  }, "Fusion Design"), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Text$3, {
    strong: true
  }, "Fusion Design"));
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const {H1: H1$1, H2: H2$1, H3, H4, H5, H6} = Typography;
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(H1$1, null, "h1. Fusion Design"), /* @__PURE__ */ createElement(H2$1, null, "h2. Fusion Design"), /* @__PURE__ */ createElement(H3, null, "h3. Fusion Design"), /* @__PURE__ */ createElement(H4, null, "h4. Fusion Design"), /* @__PURE__ */ createElement(H5, null, "h5. Fusion Design"), /* @__PURE__ */ createElement(H6, null, "h6. Fusion Design"));
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const modules = {};
modules["_basic"] = m0;
modules["_paragraph"] = m1;
modules["_text"] = m2;
modules["_title"] = m3;
export default modules;
