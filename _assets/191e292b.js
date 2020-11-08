import {N as NextConfigProvider, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, d as classnames, R as React, C as Component, h as propTypes, J as ReactDOM, s as NextIcon, z as zhCN, q as log, k as _objectWithoutProperties, g as _extends, o as obj, j as hoistNonReactStatics_cjs, D as NextMenu} from "./index.112f9bd1.js";
import {N as NextButton} from "./cc57ab59.js";
import {N as NextDropdown} from "./4e0e0a09.js";
var _class, _temp;
var CardBulletHeader = (_temp = _class = function(_Component) {
  _inherits(CardBulletHeader2, _Component);
  function CardBulletHeader2() {
    _classCallCheck(this, CardBulletHeader2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  CardBulletHeader2.prototype.render = function render() {
    var _classNames;
    var _props = this.props, prefix = _props.prefix, title = _props.title, subTitle = _props.subTitle, extra = _props.extra, showTitleBullet = _props.showTitleBullet;
    if (!title)
      return null;
    var headCls = classnames((_classNames = {}, _classNames[prefix + "card-head"] = true, _classNames[prefix + "card-head-show-bullet"] = showTitleBullet, _classNames));
    var headExtra = extra ? React.createElement("div", {className: prefix + "card-extra"}, extra) : null;
    return React.createElement("div", {className: headCls}, React.createElement("div", {className: prefix + "card-head-main"}, React.createElement("div", {className: prefix + "card-title"}, title, subTitle ? React.createElement("span", {className: prefix + "card-subtitle"}, subTitle) : null), headExtra));
  };
  return CardBulletHeader2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  title: propTypes.node,
  subTitle: propTypes.node,
  showTitleBullet: propTypes.bool,
  extra: propTypes.node
}, _class.defaultProps = {
  prefix: "next-",
  showTitleBullet: true
}, _temp);
CardBulletHeader.displayName = "CardBulletHeader";
var CardBulletHeader$1 = NextConfigProvider.config(CardBulletHeader, {
  componentName: "Card"
});
var _class$1, _temp$1;
var CardCollapseContent = (_temp$1 = _class$1 = function(_Component) {
  _inherits(CardCollapseContent2, _Component);
  function CardCollapseContent2(props, context) {
    _classCallCheck(this, CardCollapseContent2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
    _this.handleToggle = function() {
      _this.setState(function(prevState) {
        return {
          expand: !prevState.expand
        };
      });
    };
    _this._contentRefHandler = function(ref) {
      _this.content = ref;
    };
    _this.saveFooter = function(ref) {
      _this.footer = ref;
    };
    _this.state = {
      needMore: false,
      expand: false,
      contentHeight: "auto"
    };
    return _this;
  }
  CardCollapseContent2.prototype.componentDidMount = function componentDidMount() {
    this._setNeedMore();
    this._setContentHeight();
  };
  CardCollapseContent2.prototype.componentDidUpdate = function componentDidUpdate() {
    this._setContentHeight();
  };
  CardCollapseContent2.prototype._setNeedMore = function _setNeedMore() {
    var contentHeight = this.props.contentHeight;
    var childrenHeight = this._getNodeChildrenHeight(this.content);
    this.setState({
      needMore: contentHeight !== "auto" && childrenHeight > contentHeight
    });
  };
  CardCollapseContent2.prototype._setContentHeight = function _setContentHeight() {
    if (this.props.contentHeight === "auto") {
      this.content.style.height = "auto";
      return;
    }
    if (this.state.expand) {
      var childrenHeight = this._getNodeChildrenHeight(this.content);
      this.content.style.height = childrenHeight + "px";
    } else {
      var el = ReactDOM.findDOMNode(this.footer);
      var height = this.props.contentHeight;
      if (el) {
        height = height - el.getBoundingClientRect().height;
      }
      this.content.style.height = height + "px";
    }
  };
  CardCollapseContent2.prototype._getNodeChildrenHeight = function _getNodeChildrenHeight(node) {
    if (!node) {
      return 0;
    }
    var contentChildNodes = node.childNodes;
    var length = contentChildNodes.length;
    if (!length) {
      return 0;
    }
    var lastNode = contentChildNodes[length - 1];
    return lastNode.offsetTop + lastNode.offsetHeight;
  };
  CardCollapseContent2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, children = _props.children, locale = _props.locale;
    var _state = this.state, needMore = _state.needMore, expand = _state.expand;
    return React.createElement("div", {className: prefix + "card-body"}, React.createElement("div", {className: prefix + "card-content", ref: this._contentRefHandler}, children), needMore ? React.createElement("div", {className: prefix + "card-footer", ref: this.saveFooter, onClick: this.handleToggle}, React.createElement(NextButton, {text: true, type: "primary"}, expand ? locale.fold : locale.expand, React.createElement(NextIcon, {type: "arrow-down", className: expand ? "expand" : ""}))) : null);
  };
  return CardCollapseContent2;
}(Component), _class$1.propTypes = {
  prefix: propTypes.string,
  contentHeight: propTypes.oneOfType([propTypes.string, propTypes.number]),
  locale: propTypes.object,
  children: propTypes.node
}, _class$1.defaultProps = {
  prefix: "next-",
  contentHeight: 120,
  locale: zhCN.Card
}, _temp$1);
CardCollapseContent.displayName = "CardCollapseContent";
var CollaspeContent = NextConfigProvider.config(CardCollapseContent, {
  componentName: "Card"
});
var _class$2, _temp$2;
var warning = log.warning;
var MEDIA_COMPONENTS = ["video", "audio", "picture", "iframe", "img"];
var CardMedia = (_temp$2 = _class$2 = function(_Component) {
  _inherits(CardMedia2, _Component);
  function CardMedia2() {
    _classCallCheck(this, CardMedia2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  CardMedia2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, style = _props.style, className = _props.className, Component2 = _props.component, image = _props.image, src = _props.src, others = _objectWithoutProperties(_props, ["prefix", "style", "className", "component", "image", "src"]);
    if (!("children" in others || Boolean(image || src))) {
      warning("either `children`, `image` or `src` prop must be specified.");
    }
    var isMediaComponent = MEDIA_COMPONENTS.indexOf(Component2) !== -1;
    var composedStyle = !isMediaComponent && image ? _extends({backgroundImage: 'url("' + image + '")'}, style) : style;
    return React.createElement(Component2, _extends({}, others, {
      style: composedStyle,
      className: classnames(prefix + "card-media", className),
      src: isMediaComponent ? image || src : void 0
    }));
  };
  return CardMedia2;
}(Component), _class$2.propTypes = {
  prefix: propTypes.string,
  component: propTypes.elementType,
  image: propTypes.string,
  src: propTypes.string,
  style: propTypes.object,
  className: propTypes.string
}, _class$2.defaultProps = {
  prefix: "next-",
  component: "div",
  style: {}
}, _temp$2);
CardMedia.displayName = "CardMedia";
var CardMedia$1 = NextConfigProvider.config(CardMedia);
var _class$3, _temp$3;
var CardActions = (_temp$3 = _class$3 = function(_Component) {
  _inherits(CardActions2, _Component);
  function CardActions2() {
    _classCallCheck(this, CardActions2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  CardActions2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, Component2 = _props.component, className = _props.className, others = _objectWithoutProperties(_props, ["prefix", "component", "className"]);
    return React.createElement(Component2, _extends({}, others, {
      className: classnames(prefix + "card-actions", className)
    }));
  };
  return CardActions2;
}(Component), _class$3.propTypes = {
  prefix: propTypes.string,
  component: propTypes.elementType,
  className: propTypes.string
}, _class$3.defaultProps = {
  prefix: "next-",
  component: "div"
}, _temp$3);
CardActions.displayName = "CardActions";
var CardActions$1 = NextConfigProvider.config(CardActions);
var _class$4, _temp$4;
var pickOthers = obj.pickOthers;
var Card = (_temp$4 = _class$4 = function(_React$Component) {
  _inherits(Card2, _React$Component);
  function Card2() {
    _classCallCheck(this, Card2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  Card2.prototype.render = function render() {
    var _classNames;
    var _props = this.props, prefix = _props.prefix, className = _props.className, title = _props.title, subTitle = _props.subTitle, extra = _props.extra, showTitleBullet = _props.showTitleBullet, showHeadDivider = _props.showHeadDivider, children = _props.children, rtl = _props.rtl, contentHeight = _props.contentHeight, free = _props.free, actions = _props.actions, media = _props.media;
    var cardCls = classnames((_classNames = {}, _classNames[prefix + "card"] = true, _classNames[prefix + "card-free"] = free, _classNames[prefix + "card-show-divider"] = showHeadDivider, _classNames[prefix + "card-hide-divider"] = !showHeadDivider, _classNames), className);
    var others = pickOthers(Object.keys(Card2.propTypes), this.props);
    others.dir = rtl ? "rtl" : void 0;
    return React.createElement("div", _extends({}, others, {className: cardCls}), media && React.createElement(CardMedia$1, null, media), React.createElement(CardBulletHeader$1, {title, subTitle, extra, showTitleBullet}), free ? children : React.createElement(CollaspeContent, {contentHeight}, children), actions && React.createElement(CardActions$1, null, actions));
  };
  return Card2;
}(React.Component), _class$4.displayName = "Card", _class$4.propTypes = _extends({}, NextConfigProvider.propTypes, {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  media: propTypes.node,
  title: propTypes.node,
  subTitle: propTypes.node,
  actions: propTypes.node,
  showTitleBullet: propTypes.bool,
  showHeadDivider: propTypes.bool,
  contentHeight: propTypes.oneOfType([propTypes.string, propTypes.number]),
  extra: propTypes.node,
  free: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node
}), _class$4.defaultProps = {
  prefix: "next-",
  free: false,
  showTitleBullet: true,
  showHeadDivider: true,
  contentHeight: 120
}, _temp$4);
Card.displayName = "Card";
var _class$5, _temp$5;
var CardHeader = (_temp$5 = _class$5 = function(_Component) {
  _inherits(CardHeader2, _Component);
  function CardHeader2() {
    _classCallCheck(this, CardHeader2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  CardHeader2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, title = _props.title, subTitle = _props.subTitle, extra = _props.extra, className = _props.className, Component2 = _props.component, others = _objectWithoutProperties(_props, ["prefix", "title", "subTitle", "extra", "className", "component"]);
    return React.createElement(Component2, _extends({}, others, {
      className: classnames(prefix + "card-header", className)
    }), extra && React.createElement("div", {className: prefix + "card-header-extra"}, extra), React.createElement("div", {className: prefix + "card-header-titles"}, title && React.createElement("div", {className: prefix + "card-header-title"}, title), subTitle && React.createElement("div", {className: prefix + "card-header-subtitle"}, subTitle)));
  };
  return CardHeader2;
}(Component), _class$5.propTypes = {
  prefix: propTypes.string,
  title: propTypes.node,
  subTitle: propTypes.node,
  extra: propTypes.node,
  component: propTypes.elementType,
  className: propTypes.string
}, _class$5.defaultProps = {
  prefix: "next-",
  component: "div"
}, _temp$5);
CardHeader.displayName = "CardHeader";
var CardHeader$1 = NextConfigProvider.config(CardHeader);
var _class$6, _temp$6;
var CardDivider = (_temp$6 = _class$6 = function(_Component) {
  _inherits(CardDivider2, _Component);
  function CardDivider2() {
    _classCallCheck(this, CardDivider2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  CardDivider2.prototype.render = function render() {
    var _classNames;
    var _props = this.props, prefix = _props.prefix, Component2 = _props.component, inset = _props.inset, className = _props.className, others = _objectWithoutProperties(_props, ["prefix", "component", "inset", "className"]);
    var dividerClassName = classnames(prefix + "card-divider", (_classNames = {}, _classNames[prefix + "card-divider--inset"] = inset, _classNames), className);
    return React.createElement(Component2, _extends({}, others, {className: dividerClassName}));
  };
  return CardDivider2;
}(Component), _class$6.propTypes = {
  prefix: propTypes.string,
  component: propTypes.elementType,
  inset: propTypes.bool,
  className: propTypes.string
}, _class$6.defaultProps = {
  prefix: "next-",
  component: "hr"
}, _temp$6);
CardDivider.displayName = "CardDivider";
var CardDivider$1 = NextConfigProvider.config(CardDivider);
var _class$7, _temp$7;
var CardContent = (_temp$7 = _class$7 = function(_Component) {
  _inherits(CardContent2, _Component);
  function CardContent2() {
    _classCallCheck(this, CardContent2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  CardContent2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, className = _props.className, Component2 = _props.component, others = _objectWithoutProperties(_props, ["prefix", "className", "component"]);
    return React.createElement(Component2, _extends({}, others, {
      className: classnames(prefix + "card-content-container", className)
    }));
  };
  return CardContent2;
}(Component), _class$7.propTypes = {
  prefix: propTypes.string,
  component: propTypes.elementType,
  className: propTypes.string
}, _class$7.defaultProps = {
  prefix: "next-",
  component: "div"
}, _temp$7);
CardContent.displayName = "CardContent";
var CardContent$1 = NextConfigProvider.config(CardContent);
Card.Header = CardHeader$1;
Card.Media = CardMedia$1;
Card.Divider = CardDivider$1;
Card.Content = CardContent$1;
Card.Actions = CardActions$1;
Card.BulletHeader = CardBulletHeader$1;
Card.CollaspeContent = CollaspeContent;
Card.CollapseContent = CollaspeContent;
var NextCard = NextConfigProvider.config(Card, {
  transform: function transform(props, deprecated) {
    if ("titlePrefixLine" in props) {
      deprecated("titlePrefixLine", "showTitleBullet", "Card");
      var _props = props, titlePrefixLine = _props.titlePrefixLine, others = _objectWithoutProperties(_props, ["titlePrefixLine"]);
      props = _extends({showTitleBullet: titlePrefixLine}, others);
    }
    if ("titleBottomLine" in props) {
      deprecated("titleBottomLine", "showHeadDivider", "Card");
      var _props2 = props, titleBottomLine = _props2.titleBottomLine, _others = _objectWithoutProperties(_props2, ["titleBottomLine"]);
      props = _extends({showHeadDivider: titleBottomLine}, _others);
    }
    if ("bodyHeight" in props) {
      deprecated("bodyHeight", "contentHeight", "Card");
      var _props3 = props, bodyHeight = _props3.bodyHeight, _others2 = _objectWithoutProperties(_props3, ["bodyHeight"]);
      props = _extends({contentHeight: bodyHeight}, _others2);
    }
    return props;
  }
});
const Card$1 = (props) => {
  return /* @__PURE__ */ React.createElement(NextCard, {
    ...props
  });
};
hoistNonReactStatics_cjs(Card$1, NextCard);
Card$1.DropDownActions = ({actions}) => {
  return /* @__PURE__ */ React.createElement(NextDropdown, {
    trigger: /* @__PURE__ */ React.createElement(NextIcon, {
      type: "ellipsis-vertical",
      size: "small"
    }),
    triggerType: "click"
  }, /* @__PURE__ */ React.createElement(NextMenu, null, actions.map(({label, onClick}, idx) => {
    return /* @__PURE__ */ React.createElement(NextMenu.Item, {
      onClick,
      key: idx
    }, label);
  })));
};
const CollapsableTail = ({
  collapsed,
  onCollapsedChange,
  prefix,
  children = "展开更多"
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: `${prefix}card-collapsable-tail`,
    onClick: () => onCollapsedChange(!collapsed)
  }, children, collapsed ? /* @__PURE__ */ React.createElement(NextIcon, {
    type: "3212"
  }) : /* @__PURE__ */ React.createElement(NextIcon, {
    type: "3213"
  }));
};
Card$1.CollapsableTail = NextConfigProvider.config(CollapsableTail);
const CollapsableHead = ({
  collapsed,
  onCollapsedChange,
  prefix,
  children = "标题"
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: `${prefix}card-collapsable-head`,
    onClick: () => onCollapsedChange(!collapsed)
  }, children, collapsed ? /* @__PURE__ */ React.createElement(NextIcon, {
    type: "3212"
  }) : /* @__PURE__ */ React.createElement(NextIcon, {
    type: "3213"
  }));
};
Card$1.CollapsableHead = NextConfigProvider.config(CollapsableHead);
export {Card$1 as C};
