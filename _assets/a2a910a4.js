import {N as NextConfigProvider, p as polyfill, y as NextSelect, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, R as React, d as classnames, g as _extends, U as str, s as NextIcon, w as NextInput, K as KEYCODE, k as _objectWithoutProperties, o as obj, C as Component, i as propTypes, z as zhCN} from "./index.8e8886f2.js";
import {N as NextButton} from "./450d92db.js";
var _class, _temp;
var Option = NextSelect.Option;
var noop = function noop2() {
};
function correctCurrent(currentPage, total, currentPageSize) {
  var totalPage = getTotalPage(total, currentPageSize);
  return currentPage > totalPage ? totalPage : currentPage;
}
function getTotalPage(total, currentPageSize) {
  var totalPage = Math.ceil(total / currentPageSize);
  return totalPage <= 0 ? 1 : totalPage;
}
var Pagination = (_temp = _class = function(_Component) {
  _inherits(Pagination2, _Component);
  function Pagination2(props, context) {
    _classCallCheck(this, Pagination2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
    _this.handleJump = function(e) {
      var total = _this.props.total;
      var _this$state = _this.state, current = _this$state.current, currentPageSize = _this$state.currentPageSize, inputValue = _this$state.inputValue;
      var totalPage = getTotalPage(total, currentPageSize);
      var value = parseInt(inputValue, 10);
      if (isNaN(value)) {
        value = "";
      } else if (value < 1) {
        value = 1;
      } else if (value > totalPage) {
        value = totalPage;
      }
      if (value && value !== current) {
        _this.onPageItemClick(value, e);
      }
      _this.setState({
        inputValue: ""
      });
    };
    _this.state = {
      current: props.defaultCurrent || 1,
      currentPageSize: 0,
      inputValue: ""
    };
    return _this;
  }
  Pagination2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var current = props.current, total = props.total, pageSize = props.pageSize;
    var st = {};
    var newCurrent = correctCurrent(current || state.current, total, pageSize);
    if (state.current !== newCurrent) {
      st.current = newCurrent;
    }
    if (state.currentPageSize !== pageSize) {
      st.currentPageSize = pageSize;
    }
    return st;
  };
  Pagination2.prototype.onPageItemClick = function onPageItemClick(page, e) {
    if (!("current" in this.props)) {
      this.setState({
        current: page
      });
    }
    this.props.onChange(page, e);
  };
  Pagination2.prototype.onInputChange = function onInputChange(value) {
    this.setState({
      inputValue: value
    });
  };
  Pagination2.prototype.onSelectSize = function onSelectSize(pageSize) {
    var newState = {
      currentPageSize: pageSize
    };
    var totalPage = getTotalPage(this.props.total, pageSize);
    if (this.state.current > totalPage) {
      newState.current = totalPage;
    }
    this.setState(newState);
    this.props.onPageSizeChange(pageSize);
  };
  Pagination2.prototype.renderPageTotal = function renderPageTotal() {
    var _props = this.props, prefix = _props.prefix, total = _props.total, totalRender = _props.totalRender;
    var _state = this.state, currentPageSize = _state.currentPageSize, current = _state.current;
    var range = [(current - 1) * currentPageSize + 1, current * currentPageSize];
    return React.createElement("div", {className: prefix + "pagination-total"}, totalRender(total, range));
  };
  Pagination2.prototype.renderPageItem = function renderPageItem(index) {
    var _cx;
    var _props2 = this.props, prefix = _props2.prefix, size = _props2.size, link = _props2.link, pageNumberRender2 = _props2.pageNumberRender, total = _props2.total, pageSize = _props2.pageSize, locale = _props2.locale;
    var current = this.state.current;
    var totalPage = getTotalPage(total, pageSize);
    var isCurrent = parseInt(index, 10) === current;
    var props = {
      size,
      className: classnames((_cx = {}, _cx[prefix + "pagination-item"] = true, _cx[prefix + "current"] = isCurrent, _cx)),
      onClick: isCurrent ? noop : this.onPageItemClick.bind(this, index)
    };
    if (link) {
      props.component = "a";
      props.href = link.replace("{page}", index);
    }
    return React.createElement(NextButton, _extends({
      "aria-label": str.template(locale.total, {
        current: index,
        total: totalPage
      })
    }, props, {
      key: index
    }), pageNumberRender2(index));
  };
  Pagination2.prototype.renderPageFirst = function renderPageFirst(current) {
    var _cx2;
    var _props3 = this.props, prefix = _props3.prefix, size = _props3.size, shape = _props3.shape, locale = _props3.locale;
    var isFirst = current <= 1;
    var props = {
      disabled: isFirst,
      size,
      className: classnames((_cx2 = {}, _cx2[prefix + "pagination-item"] = true, _cx2[prefix + "prev"] = true, _cx2)),
      onClick: this.onPageItemClick.bind(this, current - 1)
    };
    var icon = React.createElement(NextIcon, {
      type: "arrow-left",
      className: prefix + "pagination-icon-prev"
    });
    return React.createElement(NextButton, _extends({}, props, {
      "aria-label": str.template(locale.labelPrev, {current})
    }), icon, shape === "arrow-only" || shape === "arrow-prev-only" || shape === "no-border" ? "" : locale.prev);
  };
  Pagination2.prototype.renderPageLast = function renderPageLast(current, totalPage) {
    var _cx3;
    var _props4 = this.props, prefix = _props4.prefix, size = _props4.size, shape = _props4.shape, locale = _props4.locale;
    var isLast = current >= totalPage;
    var props = {
      disabled: isLast,
      size,
      className: classnames((_cx3 = {}, _cx3[prefix + "pagination-item"] = true, _cx3[prefix + "next"] = true, _cx3)),
      onClick: this.onPageItemClick.bind(this, current + 1)
    };
    var icon = React.createElement(NextIcon, {
      type: "arrow-right",
      className: prefix + "pagination-icon-next"
    });
    return React.createElement(NextButton, _extends({}, props, {
      "aria-label": str.template(locale.labelNext, {current})
    }), shape === "arrow-only" || shape === "no-border" ? "" : locale.next, icon);
  };
  Pagination2.prototype.renderPageEllipsis = function renderPageEllipsis(idx) {
    var prefix = this.props.prefix;
    return React.createElement(NextIcon, {
      className: prefix + "pagination-ellipsis " + prefix + "pagination-icon-ellipsis",
      type: "ellipsis",
      key: "ellipsis-" + idx
    });
  };
  Pagination2.prototype.renderPageJump = function renderPageJump() {
    var _this2 = this;
    var _props5 = this.props, prefix = _props5.prefix, size = _props5.size, locale = _props5.locale;
    var inputValue = this.state.inputValue;
    return [React.createElement("span", {className: prefix + "pagination-jump-text"}, locale.goTo), React.createElement(NextInput, {
      className: prefix + "pagination-jump-input",
      type: "text",
      "aria-label": locale.inputAriaLabel,
      size,
      value: inputValue,
      onChange: this.onInputChange.bind(this),
      onKeyDown: function onKeyDown(e) {
        if (e.keyCode === KEYCODE.ENTER) {
          _this2.handleJump(e);
        }
      }
    }), React.createElement("span", {className: prefix + "pagination-jump-text"}, locale.page), React.createElement(NextButton, {
      className: prefix + "pagination-jump-go",
      size,
      onClick: this.handleJump
    }, locale.go)];
  };
  Pagination2.prototype.renderPageDisplay = function renderPageDisplay(current, totalPage) {
    var _props6 = this.props, prefix = _props6.prefix, pageNumberRender2 = _props6.pageNumberRender;
    return React.createElement("span", {className: prefix + "pagination-display"}, React.createElement("em", null, pageNumberRender2(current)), "/", pageNumberRender2(totalPage));
  };
  Pagination2.prototype.renderPageList = function renderPageList(current, totalPage) {
    var _props7 = this.props, prefix = _props7.prefix, pageShowCount = _props7.pageShowCount;
    var pages = [];
    if (totalPage <= pageShowCount) {
      for (var i = 1; i <= totalPage; i++) {
        pages.push(this.renderPageItem(i));
      }
    } else {
      var othersCount = pageShowCount - 3;
      var halfCount = parseInt(othersCount / 2, 10);
      var start = void 0, end = void 0;
      pages.push(this.renderPageItem(1));
      start = current - halfCount;
      end = current + halfCount;
      if (start <= 1) {
        start = 2;
        end = start + othersCount;
      }
      if (start > 2) {
        pages.push(this.renderPageEllipsis(1));
      }
      if (end >= totalPage - 1) {
        end = totalPage - 1;
        start = totalPage - 1 - othersCount;
      }
      for (var j = start; j <= end; j++) {
        pages.push(this.renderPageItem(j));
      }
      if (end < totalPage - 1) {
        pages.push(this.renderPageEllipsis(2));
      }
      pages.push(this.renderPageItem(totalPage));
    }
    return React.createElement("div", {className: prefix + "pagination-list"}, pages);
  };
  Pagination2.prototype.renderPageSizeSelector = function renderPageSizeSelector() {
    var _props8 = this.props, prefix = _props8.prefix, pageSizeSelector = _props8.pageSizeSelector, locale = _props8.locale;
    var pageSizeSpan = React.createElement("span", {className: prefix + "pagination-size-selector-title"}, locale.pageSize);
    switch (pageSizeSelector) {
      case "filter":
        return React.createElement("div", {className: prefix + "pagination-size-selector"}, pageSizeSpan, this.renderPageSizeFilter());
      case "dropdown":
        return React.createElement("div", {className: prefix + "pagination-size-selector"}, pageSizeSpan, this.renderPageSizeDropdown());
      default:
        return null;
    }
  };
  Pagination2.prototype.renderPageSizeFilter = function renderPageSizeFilter() {
    var _this3 = this;
    var _props9 = this.props, prefix = _props9.prefix, size = _props9.size, pageSizeList = _props9.pageSizeList;
    var currentPageSize = this.state.currentPageSize;
    return React.createElement("div", {className: prefix + "pagination-size-selector-filter"}, pageSizeList.map(function(item, index) {
      var _cx4;
      var label = void 0;
      var pageSize = void 0;
      if (item.value) {
        label = item.label;
        pageSize = item.value;
      } else {
        label = pageSize = item;
      }
      var classes = classnames((_cx4 = {}, _cx4[prefix + "pagination-size-selector-btn"] = true, _cx4[prefix + "current"] = pageSize === currentPageSize, _cx4));
      return React.createElement(NextButton, {
        key: index,
        text: true,
        size,
        className: classes,
        onClick: pageSize !== currentPageSize ? _this3.onSelectSize.bind(_this3, pageSize) : null
      }, label);
    }));
  };
  Pagination2.prototype.renderPageSizeDropdown = function renderPageSizeDropdown() {
    var _props10 = this.props, prefix = _props10.prefix, size = _props10.size, pageSizeList = _props10.pageSizeList, selectPopupContiner2 = _props10.selectPopupContiner, locale = _props10.locale, popupProps = _props10.popupProps;
    var currentPageSize = this.state.currentPageSize;
    return React.createElement(NextSelect, {
      className: prefix + "pagination-size-selector-dropdown",
      popupClassName: prefix + "pagination-size-selector-popup",
      popupContainer: selectPopupContiner2,
      popupProps,
      "aria-label": locale.selectAriaLabel,
      autoWidth: true,
      size,
      value: currentPageSize,
      onChange: this.onSelectSize.bind(this)
    }, pageSizeList.map(function(item, index) {
      var label = void 0;
      var pageSize = void 0;
      if (item.value) {
        label = item.label;
        pageSize = item.value;
      } else {
        label = pageSize = item;
      }
      return React.createElement(Option, {key: index, value: pageSize}, label);
    }));
  };
  Pagination2.prototype.render = function render() {
    var _cx5, _this4 = this;
    var _props11 = this.props, prefix = _props11.prefix, pure = _props11.pure, rtl = _props11.rtl, device = _props11.device, paginationType = _props11.type, size = _props11.size, shape = _props11.shape, className = _props11.className, total = _props11.total, totalRender = _props11.totalRender, pageSize = _props11.pageSize, pageSizeSelector = _props11.pageSizeSelector, pageSizeList = _props11.pageSizeList, pageSizePosition = _props11.pageSizePosition, useFloatLayout = _props11.useFloatLayout, onPageSizeChange = _props11.onPageSizeChange, hideOnlyOnePage = _props11.hideOnlyOnePage, showJump = _props11.showJump, locale = _props11.locale, current = _props11.current, defaultCurrent = _props11.defaultCurrent, pageShowCount = _props11.pageShowCount, pageNumberRender2 = _props11.pageNumberRender, link = _props11.link, onChange = _props11.onChange, selectPopupContiner2 = _props11.selectPopupContiner, popupProps = _props11.popupProps, others = _objectWithoutProperties(_props11, ["prefix", "pure", "rtl", "device", "type", "size", "shape", "className", "total", "totalRender", "pageSize", "pageSizeSelector", "pageSizeList", "pageSizePosition", "useFloatLayout", "onPageSizeChange", "hideOnlyOnePage", "showJump", "locale", "current", "defaultCurrent", "pageShowCount", "pageNumberRender", "link", "onChange", "selectPopupContiner", "popupProps"]);
    var _state2 = this.state, currentPage = _state2.current, currentPageSize = _state2.currentPageSize;
    var totalPage = getTotalPage(total, currentPageSize);
    var pageFirst = this.renderPageFirst(currentPage);
    var pageLast = this.renderPageLast(currentPage, totalPage);
    var sizeSelector = this.renderPageSizeSelector();
    var isStart = pageSizePosition === "start";
    var type = paginationType;
    if (device === "phone" && type === "normal") {
      type = "simple";
    }
    var classes = classnames((_cx5 = {}, _cx5[prefix + "pagination"] = true, _cx5["" + prefix + size] = size, _cx5["" + prefix + type] = type, _cx5["" + prefix + shape] = shape, _cx5[prefix + "start"] = !!pageSizeSelector && isStart && useFloatLayout, _cx5[prefix + "end"] = !!pageSizeSelector && !isStart && useFloatLayout, _cx5[prefix + "hide"] = totalPage <= 1 && hideOnlyOnePage, _cx5[className] = !!className, _cx5));
    if (rtl) {
      others.dir = "rtl";
    }
    var buildComponent = function buildComponent2() {
      for (var _len = arguments.length, coms = Array(_len), _key = 0; _key < _len; _key++) {
        coms[_key] = arguments[_key];
      }
      return React.createElement("div", _extends({
        className: classes
      }, obj.pickOthers(Object.keys(Pagination2.propTypes), others)), isStart && sizeSelector, totalRender ? _this4.renderPageTotal() : null, React.createElement("div", {className: prefix + "pagination-pages"}, coms.map(function(com, index) {
        return com && React.cloneElement(com, {key: index});
      })), !isStart && sizeSelector);
    };
    switch (type) {
      case "mini":
        return buildComponent(pageFirst, pageLast);
      case "simple": {
        var pageDisplay = this.renderPageDisplay(currentPage, totalPage);
        return buildComponent(pageFirst, pageDisplay, pageLast);
      }
      case "normal": {
        var pageList = this.renderPageList(currentPage, totalPage);
        var _pageDisplay = showJump && total > pageSize * pageShowCount ? this.renderPageDisplay(currentPage, totalPage) : null;
        var pageJump = showJump && total > pageSize * pageShowCount ? this.renderPageJump(currentPage, totalPage) : null;
        return buildComponent.apply(void 0, [pageFirst, pageList, pageLast, _pageDisplay].concat(pageJump));
      }
      default:
        return null;
    }
  };
  return Pagination2;
}(Component), _class.propTypes = _extends({}, NextConfigProvider.propTypes, {
  prefix: propTypes.string,
  pure: propTypes.bool,
  rtl: propTypes.bool,
  device: propTypes.oneOf(["desktop", "tablet", "phone"]),
  className: propTypes.string,
  locale: propTypes.object,
  type: propTypes.oneOf(["normal", "simple", "mini"]),
  shape: propTypes.oneOf(["normal", "arrow-only", "arrow-prev-only", "no-border"]),
  size: propTypes.oneOf(["small", "medium", "large"]),
  current: propTypes.number,
  defaultCurrent: propTypes.number,
  onChange: propTypes.func,
  total: propTypes.number,
  totalRender: propTypes.func,
  pageShowCount: propTypes.number,
  pageSize: propTypes.number,
  pageSizeSelector: propTypes.oneOf([false, "filter", "dropdown"]),
  pageSizeList: propTypes.oneOfType([propTypes.arrayOf(propTypes.number), propTypes.arrayOf(propTypes.shape({
    label: propTypes.string,
    value: propTypes.number
  }))]),
  pageNumberRender: propTypes.func,
  pageSizePosition: propTypes.oneOf(["start", "end"]),
  useFloatLayout: propTypes.bool,
  onPageSizeChange: propTypes.func,
  hideOnlyOnePage: propTypes.bool,
  showJump: propTypes.bool,
  link: propTypes.string,
  selectPopupContiner: propTypes.any,
  popupProps: propTypes.object
}), _class.defaultProps = {
  prefix: "next-",
  pure: false,
  rtl: false,
  locale: zhCN.Pagination,
  type: "normal",
  shape: "normal",
  size: "medium",
  defaultCurrent: 1,
  onChange: noop,
  pageSize: 10,
  pageSizeSelector: false,
  pageSizeList: [5, 10, 20],
  pageSizePosition: "start",
  onPageSizeChange: noop,
  useFloatLayout: false,
  total: 100,
  pageShowCount: 5,
  hideOnlyOnePage: false,
  showJump: true,
  pageNumberRender: function pageNumberRender(index) {
    return index;
  },
  selectPopupContiner: function selectPopupContiner(node) {
    return node.parentNode;
  }
}, _temp);
Pagination.displayName = "Pagination";
var Pagination$1 = NextConfigProvider.config(polyfill(Pagination));
export {Pagination$1 as P};
