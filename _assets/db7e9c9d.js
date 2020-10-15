import {i as polyfill, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, m as findDOMNode, d as classnames, R as React, C as Component, p as propTypes} from "./index.eccaf1a0.js";
import {e as events} from "./32fed6c0.js";
import {N as NextConfigProvider} from "./7ba79dc5.js";
var _class, _temp;
var NOOP = function NOOP2() {
};
var MAX_SYNC_UPDATES = 40;
var isEqualSubset = function isEqualSubset2(a, b) {
  for (var key in b) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
};
var getOffset = function getOffset2(el) {
  var offset = el.clientLeft || 0;
  do {
    offset += el.offsetTop || 0;
    el = el.offsetParent;
  } while (el);
  return offset;
};
var constrain = function constrain2(from, size, _ref) {
  var children = _ref.children, minSize = _ref.minSize;
  var length = children && children.length;
  size = Math.max(size, minSize);
  if (size > length) {
    size = length;
  }
  from = from ? Math.max(Math.min(from, length - size), 0) : 0;
  return {from, size};
};
var VirtualList = (_temp = _class = function(_Component) {
  _inherits(VirtualList2, _Component);
  function VirtualList2(props) {
    _classCallCheck(this, VirtualList2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    var jumpIndex = props.jumpIndex;
    var _constrain = constrain(jumpIndex, 0, props), from = _constrain.from, size = _constrain.size;
    _this.state = {from, size};
    _this.cache = {};
    _this.cacheAdd = {};
    _this.scrollTo = _this.scrollTo.bind(_this);
    _this.cachedScroll = null;
    _this.unstable = false;
    _this.updateCounter = 0;
    return _this;
  }
  VirtualList2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var from = prevState.from, size = prevState.size;
    return constrain(from, size, nextProps);
  };
  VirtualList2.prototype.componentDidMount = function componentDidMount() {
    var jumpIndex = this.props.jumpIndex;
    this.updateFrameAndClearCache = this.updateFrameAndClearCache.bind(this);
    events.on(window, "resize", this.updateFrameAndClearCache);
    this.updateFrame(this.scrollTo.bind(this, jumpIndex));
  };
  VirtualList2.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;
    var oldIndex = prevProps.jumpIndex;
    var newIndex = this.props.jumpIndex;
    if (oldIndex !== newIndex) {
      this.updateFrame(this.scrollTo.bind(this, newIndex));
    }
    if (this.unstable) {
      return;
    }
    if (++this.updateCounter > MAX_SYNC_UPDATES) {
      this.unstable = true;
    }
    if (!this.updateCounterTimeoutId) {
      this.updateCounterTimeoutId = setTimeout(function() {
        _this2.updateCounter = 0;
        delete _this2.updateCounterTimeoutId;
      }, 0);
    }
    this.updateFrame();
  };
  VirtualList2.prototype.componentWillUnmount = function componentWillUnmount() {
    events.off(window, "resize", this.updateFrameAndClearCache);
    events.off(this.scrollParent, "scroll", this.updateFrameAndClearCache);
    events.off(this.scrollParent, "mousewheel", NOOP);
  };
  VirtualList2.prototype.maybeSetState = function maybeSetState(b, cb) {
    if (isEqualSubset(this.state, b)) {
      return cb();
    }
    this.setState(b, cb);
  };
  VirtualList2.prototype.getEl = function getEl() {
    return this.el || this.items || {};
  };
  VirtualList2.prototype.getScrollParent = function getScrollParent() {
    var el = this.getEl();
    el = el.parentElement;
    switch (window.getComputedStyle(el).overflowY) {
      case "auto":
      case "scroll":
      case "overlay":
      case "visible":
        return el;
    }
    return window;
  };
  VirtualList2.prototype.getScroll = function getScroll() {
    var scrollParent = this.scrollParent;
    var scrollKey = "scrollTop";
    var actual = scrollParent === window ? document.body[scrollKey] || document.documentElement[scrollKey] : scrollParent[scrollKey];
    var max = this.getScrollSize() - this.getViewportSize();
    var scroll = Math.max(0, Math.min(actual, max));
    var el = this.getEl();
    this.cachedScroll = getOffset(scrollParent) + scroll - getOffset(el);
    return this.cachedScroll;
  };
  VirtualList2.prototype.setScroll = function setScroll(offset) {
    var scrollParent = this.scrollParent;
    offset += getOffset(this.getEl());
    if (scrollParent === window) {
      return window.scrollTo(0, offset);
    }
    offset -= getOffset(this.scrollParent);
    scrollParent.scrollTop = offset;
  };
  VirtualList2.prototype.getViewportSize = function getViewportSize() {
    var scrollParent = this.scrollParent;
    return scrollParent === window ? window.innerHeight : scrollParent.clientHeight;
  };
  VirtualList2.prototype.getScrollSize = function getScrollSize() {
    var scrollParent = this.scrollParent;
    var _document = document, body = _document.body, documentElement = _document.documentElement;
    var key = "scrollHeight";
    return scrollParent === window ? Math.max(body[key], documentElement[key]) : scrollParent[key];
  };
  VirtualList2.prototype.getStartAndEnd = function getStartAndEnd() {
    var threshold = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props.threshold;
    var scroll = this.getScroll();
    var trueScroll = scroll;
    var start = Math.max(0, trueScroll - threshold);
    var end = trueScroll + this.getViewportSize() + threshold;
    return {start, end};
  };
  VirtualList2.prototype.updateFrameAndClearCache = function updateFrameAndClearCache(cb) {
    this.cachedScroll = null;
    return this.updateFrame(cb);
  };
  VirtualList2.prototype.updateFrame = function updateFrame(cb) {
    this.updateScrollParent();
    if (typeof cb !== "function") {
      cb = NOOP;
    }
    return this.updateVariableFrame(cb);
  };
  VirtualList2.prototype.updateScrollParent = function updateScrollParent() {
    var prev = this.scrollParent;
    this.scrollParent = this.getScrollParent();
    if (prev === this.scrollParent) {
      return;
    }
    if (prev) {
      events.off(prev, "scroll", this.updateFrameAndClearCache);
      events.off(prev, "mousewheel", NOOP);
    }
    events.on(this.scrollParent, "scroll", this.updateFrameAndClearCache);
    events.on(this.scrollParent, "mousewheel", NOOP);
  };
  VirtualList2.prototype.updateVariableFrame = function updateVariableFrame(cb) {
    if (!this.props.itemSizeGetter) {
      this.cacheSizes();
    }
    var _getStartAndEnd = this.getStartAndEnd(), start = _getStartAndEnd.start, end = _getStartAndEnd.end;
    var _props = this.props, pageSize = _props.pageSize, children = _props.children;
    var length = children.length;
    var space = 0;
    var from = 0;
    var size = 0;
    var maxFrom = length - 1;
    while (from < maxFrom) {
      var itemSize = this.getSizeOf(from);
      if (itemSize === null || itemSize === void 0 || space + itemSize > start) {
        break;
      }
      space += itemSize;
      ++from;
    }
    var maxSize = length - from;
    while (size < maxSize && space < end) {
      var _itemSize = this.getSizeOf(from + size);
      if (_itemSize === null || _itemSize === void 0) {
        size = Math.min(size + pageSize, maxSize);
        break;
      }
      space += _itemSize;
      ++size;
    }
    this.maybeSetState({from, size}, cb);
  };
  VirtualList2.prototype.getSpaceBefore = function getSpaceBefore(index) {
    var cache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!index) {
      return 0;
    }
    if (cache[index] !== null && cache[index] !== void 0) {
      return cache[index] || 0;
    }
    var from = index;
    while (from > 0 && (cache[from] === null || cache[from] === void 0)) {
      from--;
    }
    var space = cache[from] || 0;
    for (var i = from; i < index; ++i) {
      cache[i] = space;
      var itemSize = this.getSizeOf(i);
      if (itemSize === null || itemSize === void 0) {
        break;
      }
      space += itemSize;
    }
    cache[index] = space;
    return cache[index] || 0;
  };
  VirtualList2.prototype.cacheSizes = function cacheSizes() {
    var cache = this.cache;
    var from = this.state.from;
    var _items = this.items, children = _items.children, _items$props = _items.props, props = _items$props === void 0 ? {} : _items$props;
    var itemEls = children || props.children || [];
    try {
      for (var i = 0, l = itemEls.length; i < l; ++i) {
        var ulRef = findDOMNode(this.items);
        var height = ulRef.children[i].offsetHeight;
        if (height > 0) {
          cache[from + i] = height;
        }
      }
    } catch (error) {
    }
  };
  VirtualList2.prototype.getSizeOf = function getSizeOf(index) {
    var _this3 = this;
    var cache = this.cache;
    var _props2 = this.props, itemSizeGetter = _props2.itemSizeGetter, jumpIndex = _props2.jumpIndex;
    if (index in cache) {
      return cache[index];
    }
    if (itemSizeGetter) {
      return itemSizeGetter(index);
    }
    var height = Object.keys(this.cache).map(function(key) {
      return _this3.cache[key];
    }).pop();
    if (!this.defaultItemHeight && jumpIndex > -1 && height) {
      this.defaultItemHeight = height;
    }
    if (this.defaultItemHeight) {
      return this.defaultItemHeight;
    }
  };
  VirtualList2.prototype.scrollTo = function scrollTo(index) {
    this.setScroll(this.getSpaceBefore(index, this.cacheAdd));
  };
  VirtualList2.prototype.renderMenuItems = function renderMenuItems() {
    var _this4 = this;
    var _props3 = this.props, children = _props3.children, itemsRenderer2 = _props3.itemsRenderer;
    var _state = this.state, from = _state.from, size = _state.size;
    var items = [];
    for (var i = 0; i < size; ++i) {
      items.push(children[from + i]);
    }
    return itemsRenderer2(items, function(c) {
      _this4.items = c;
      return _this4.items;
    });
  };
  VirtualList2.prototype.render = function render() {
    var _cx, _this5 = this;
    var _props4 = this.props, _props4$children = _props4.children, children = _props4$children === void 0 ? [] : _props4$children, prefix = _props4.prefix, className = _props4.className;
    var length = children.length;
    var from = this.state.from;
    var items = this.renderMenuItems();
    var style = {position: "relative"};
    var size = this.getSpaceBefore(length, this.cacheAdd);
    if (size) {
      style.height = size;
    }
    var offset = this.getSpaceBefore(from, this.cacheAdd);
    var transform = "translate(0px, " + offset + "px)";
    var listStyle = {
      msTransform: transform,
      WebkitTransform: transform,
      transform
    };
    var cls = classnames((_cx = {}, _cx[prefix + "virtual-list-wrapper"] = true, _cx[className] = !!className, _cx));
    return React.createElement("div", {
      className: cls,
      style,
      ref: function ref(c) {
        _this5.el = c;
        return _this5.el;
      }
    }, React.createElement("div", {style: listStyle}, items));
  };
  return VirtualList2;
}(Component), _class.displayName = "VirtualList", _class.propTypes = {
  prefix: propTypes.string,
  children: propTypes.any,
  minSize: propTypes.number,
  pageSize: propTypes.number,
  itemsRenderer: propTypes.func,
  threshold: propTypes.number,
  itemSizeGetter: propTypes.func,
  jumpIndex: propTypes.number,
  className: propTypes.string
}, _class.defaultProps = {
  prefix: "next-",
  itemsRenderer: function itemsRenderer(items, ref) {
    return React.createElement("ul", {ref}, items);
  },
  minSize: 1,
  pageSize: 10,
  jumpIndex: 0,
  threshold: 100
}, _temp);
VirtualList.displayName = "VirtualList";
var VirtualList$1 = polyfill(VirtualList);
var NextVirtualList = NextConfigProvider.config(VirtualList$1);
export {NextVirtualList as N};
