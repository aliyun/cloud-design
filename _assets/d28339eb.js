import {N as NextConfigProvider, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, o as obj, d as classnames, R as React, s as NextIcon, g as _extends, C as Component, h as propTypes} from "./index.d4405210.js";
var _class, _temp2;
var Avatar = (_temp2 = _class = function(_Component) {
  _inherits(Avatar2, _Component);
  function Avatar2() {
    var _temp, _this, _ret;
    _classCallCheck(this, Avatar2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      isImgExist: true
    }, _this.handleImgLoadError = function() {
      var onError = _this.props.onError;
      var errorFlag = onError ? onError() : void 0;
      if (errorFlag !== false) {
        _this.setState({isImgExist: false});
      }
    }, _this.getIconSize = function(avatarSize) {
      return typeof avatarSize === "number" ? avatarSize / 2 : avatarSize;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  Avatar2.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.src !== this.props.src) {
      this.setState({isImgExist: true});
    }
  };
  Avatar2.prototype.render = function render() {
    var _classNames;
    var _props = this.props, prefix = _props.prefix, className = _props.className, style = _props.style, size = _props.size, icon = _props.icon, alt = _props.alt, srcSet = _props.srcSet, shape = _props.shape, src = _props.src;
    var isImgExist = this.state.isImgExist;
    var children = this.props.children;
    var others = obj.pickOthers(Avatar2.propTypes, this.props);
    var cls = classnames((_classNames = {}, _classNames[prefix + "avatar"] = true, _classNames[prefix + "avatar-" + shape] = !!shape, _classNames[prefix + "avatar-image"] = src && isImgExist, _classNames[prefix + "avatar-" + size] = typeof size === "string", _classNames), className);
    var sizeStyle = typeof size === "number" ? {
      width: size,
      height: size,
      lineHeight: size + "px",
      fontSize: icon ? size / 2 : 18
    } : {};
    var iconSize = this.getIconSize(size);
    if (src) {
      if (isImgExist) {
        children = React.createElement("img", {
          src,
          srcSet,
          onError: this.handleImgLoadError,
          alt
        });
      } else {
        children = React.createElement(NextIcon, {type: "picture", size: iconSize});
      }
    } else if (typeof icon === "string") {
      children = React.createElement(NextIcon, {type: icon, size: iconSize});
    } else if (icon) {
      var newIconSize = "size" in icon.props ? icon.props.size : iconSize;
      children = React.cloneElement(icon, {size: newIconSize});
    }
    return React.createElement("span", _extends({
      className: cls,
      style: _extends({}, sizeStyle, style)
    }, others), children);
  };
  return Avatar2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  children: propTypes.any,
  className: propTypes.string,
  size: propTypes.oneOfType([propTypes.oneOf(["small", "medium", "large"]), propTypes.number]),
  shape: propTypes.oneOf(["circle", "square"]),
  icon: propTypes.oneOfType([propTypes.node, propTypes.string]),
  src: propTypes.string,
  onError: propTypes.func,
  alt: propTypes.string,
  srcSet: propTypes.string
}, _class.defaultProps = {
  prefix: "next-",
  size: "medium",
  shape: "circle"
}, _temp2);
Avatar.displayName = "Avatar";
var NextAvatar = NextConfigProvider.config(Avatar);
export {NextAvatar as N};
