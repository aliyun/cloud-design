import {g as _extends, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, R as React, y as NextSelect, B as Radio, h as propTypes, f as findDOMNode, k as _objectWithoutProperties, D as NextMenu, C as Component, s as NextIcon, P as PureComponent, d as classnames, p as polyfill, o as obj, N as NextConfigProvider, i as func, z as zhCN} from "./index.e4cec8f0.js";
import {h as hooks} from "./cf6ed2e0.js";
import {N as NextDropdown} from "./9cbb9b47.js";
var DAYS_OF_WEEK = 7;
var CALENDAR_TABLE_COL_COUNT = 7;
var CALENDAR_TABLE_ROW_COUNT = 6;
var MONTH_TABLE_ROW_COUNT = 4;
var MONTH_TABLE_COL_COUNT = 3;
var YEAR_TABLE_ROW_COUNT = 4;
var YEAR_TABLE_COL_COUNT = 3;
var CALENDAR_MODE_YEAR = "year";
var CALENDAR_MODE_MONTH = "month";
var CALENDAR_MODE_DATE = "date";
var CALENDAR_MODES = [CALENDAR_MODE_DATE, CALENDAR_MODE_MONTH, CALENDAR_MODE_YEAR];
function isDisabledDate(date, fn, view) {
  if (typeof fn === "function" && fn(date, view)) {
    return true;
  }
  return false;
}
function checkMomentObj(props, propName, componentName) {
  if (props[propName] && !hooks.isMoment(props[propName])) {
    return new Error("Invalid prop " + propName + " supplied to " + componentName + ". Required a moment object");
  }
}
function formatDateValue(value) {
  var reservedValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (value && hooks.isMoment(value)) {
    return value;
  }
  return reservedValue;
}
function getVisibleMonth(defaultVisibleMonth, value) {
  var getVM = defaultVisibleMonth;
  if (typeof getVM !== "function" || !hooks.isMoment(getVM())) {
    getVM = function getVM2() {
      if (value) {
        return value;
      }
      return hooks();
    };
  }
  return getVM();
}
function isSameYearMonth(dateA, dateB) {
  return dateA.month() === dateB.month() && dateA.year() === dateB.year();
}
function preFormatDateValue(value, format) {
  var val = typeof value === "string" ? hooks(value, format, false) : value;
  if (val && hooks.isMoment(val) && val.isValid()) {
    return val;
  }
  return null;
}
function getLocaleData(_ref, localeData) {
  var _months = _ref.months, shortMonths = _ref.shortMonths, _firstDayOfWeek = _ref.firstDayOfWeek, _weekdays = _ref.weekdays, shortWeekdays = _ref.shortWeekdays, veryShortWeekdays = _ref.veryShortWeekdays;
  return _extends({}, localeData, {
    monthsShort: function monthsShort() {
      return shortMonths || localeData.monthsShort();
    },
    months: function months() {
      return _months || localeData.months();
    },
    firstDayOfWeek: function firstDayOfWeek() {
      return _firstDayOfWeek || localeData.firstDayOfWeek();
    },
    weekdays: function weekdays() {
      return _weekdays || localeData.weekdays;
    },
    weekdaysShort: function weekdaysShort() {
      return shortWeekdays || localeData.weekdaysShort();
    },
    weekdaysMin: function weekdaysMin() {
      return veryShortWeekdays || localeData.weekdaysMin();
    }
  });
}
function getYears(yearRange, yearRangeOffset, year) {
  var options = [];
  var startYear = yearRange[0], endYear = yearRange[1];
  if (!startYear || !endYear) {
    startYear = year - yearRangeOffset;
    endYear = year + yearRangeOffset;
  }
  for (var i = startYear; i <= endYear; i++) {
    options.push({
      label: i,
      value: i
    });
  }
  return options;
}
function getMonths(momentLocale) {
  var localeMonths = momentLocale.monthsShort();
  var options = [];
  for (var i = 0; i < 12; i++) {
    options.push({
      value: i,
      label: localeMonths[i]
    });
  }
  return options;
}
var _class, _temp2;
var CardHeader = (_temp2 = _class = function(_React$PureComponent) {
  _inherits(CardHeader2, _React$PureComponent);
  function CardHeader2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, CardHeader2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.selectContainerHandler = function(target) {
      return target.parentNode;
    }, _this.onYearChange = function(year) {
      var _this$props = _this.props, visibleMonth = _this$props.visibleMonth, changeVisibleMonth = _this$props.changeVisibleMonth;
      changeVisibleMonth(visibleMonth.clone().year(year), "yearSelect");
    }, _this.changeVisibleMonth = function(month) {
      var _this$props2 = _this.props, visibleMonth = _this$props2.visibleMonth, changeVisibleMonth = _this$props2.changeVisibleMonth;
      changeVisibleMonth(visibleMonth.clone().month(month), "monthSelect");
    }, _this.onModePanelChange = function(mode) {
      _this.props.changeMode(mode);
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  CardHeader2.prototype.getYearSelect = function getYearSelect(year) {
    var _props = this.props, prefix = _props.prefix, yearRangeOffset = _props.yearRangeOffset, _props$yearRange = _props.yearRange, yearRange = _props$yearRange === void 0 ? [] : _props$yearRange, locale = _props.locale;
    var startYear = yearRange[0], endYear = yearRange[1];
    if (!startYear || !endYear) {
      startYear = year - yearRangeOffset;
      endYear = year + yearRangeOffset;
    }
    var options = [];
    for (var i = startYear; i <= endYear; i++) {
      options.push(React.createElement(NextSelect.Option, {key: i, value: i}, i));
    }
    return React.createElement(NextSelect, {
      prefix,
      value: year,
      "aria-label": locale.yearSelectAriaLabel,
      onChange: this.onYearChange,
      popupContainer: this.selectContainerHandler
    }, options);
  };
  CardHeader2.prototype.getMonthSelect = function getMonthSelect(month) {
    var _props2 = this.props, prefix = _props2.prefix, momentLocale = _props2.momentLocale, locale = _props2.locale;
    var localeMonths = momentLocale.monthsShort();
    var options = [];
    for (var i = 0; i < 12; i++) {
      options.push(React.createElement(NextSelect.Option, {key: i, value: i}, localeMonths[i]));
    }
    return React.createElement(NextSelect, {
      "aria-label": locale.monthSelectAriaLabel,
      prefix,
      value: month,
      onChange: this.changeVisibleMonth,
      popupContainer: this.selectContainerHandler
    }, options);
  };
  CardHeader2.prototype.render = function render() {
    var _props3 = this.props, prefix = _props3.prefix, mode = _props3.mode, locale = _props3.locale, visibleMonth = _props3.visibleMonth;
    var yearSelect = this.getYearSelect(visibleMonth.year());
    var monthSelect = mode === "month" ? null : this.getMonthSelect(visibleMonth.month());
    var panelSelect = React.createElement(Radio.Group, {
      shape: "button",
      size: "medium",
      value: mode,
      onChange: this.onModePanelChange
    }, React.createElement(Radio, {value: "date"}, locale.month), React.createElement(Radio, {value: "month"}, locale.year));
    return React.createElement("div", {className: prefix + "calendar-header"}, yearSelect, monthSelect, panelSelect);
  };
  return CardHeader2;
}(React.PureComponent), _class.propTypes = {
  yearRange: propTypes.arrayOf(propTypes.number),
  yearRangeOffset: propTypes.number,
  locale: propTypes.object
}, _class.defaultProps = {
  yearRangeOffset: 10
}, _temp2);
var _class$1, _temp2$1;
var SelectMenu = (_temp2$1 = _class$1 = function(_Component) {
  _inherits(SelectMenu2, _Component);
  function SelectMenu2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, SelectMenu2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.saveRef = function(ref) {
      _this.menuEl = ref;
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  SelectMenu2.prototype.componentDidMount = function componentDidMount() {
    this.scrollToSelectedItem();
  };
  SelectMenu2.prototype.scrollToSelectedItem = function scrollToSelectedItem() {
    var _props = this.props, prefix = _props.prefix, dataSource = _props.dataSource, value = _props.value;
    var selectedIndex = dataSource.findIndex(function(item) {
      return item.value === value;
    });
    if (selectedIndex === -1) {
      return;
    }
    var itemSelector = "." + prefix + "menu-item";
    var menu = findDOMNode(this.menuEl);
    var targetItem = menu.querySelectorAll(itemSelector)[selectedIndex];
    if (targetItem) {
      menu.scrollTop = targetItem.offsetTop - Math.floor((menu.clientHeight / targetItem.clientHeight - 1) / 2) * targetItem.clientHeight;
    }
  };
  SelectMenu2.prototype.render = function render() {
    var _props2 = this.props, prefix = _props2.prefix, dataSource = _props2.dataSource, onChange = _props2.onChange, value = _props2.value, className = _props2.className, others = _objectWithoutProperties(_props2, ["prefix", "dataSource", "onChange", "value", "className"]);
    return React.createElement(NextMenu, _extends({}, others, {
      ref: this.saveRef,
      selectMode: "single",
      selectedKeys: [String(value)],
      onSelect: function onSelect(selectKeys) {
        return onChange(Number(selectKeys[0]));
      },
      role: "listbox",
      className: prefix + "calendar-panel-menu " + className
    }), dataSource.map(function(_ref) {
      var label = _ref.label, value2 = _ref.value;
      return React.createElement(NextMenu.Item, {key: value2}, label);
    }));
  };
  return SelectMenu2;
}(Component), _class$1.isNextMenu = true, _class$1.propTypes = {
  dataSource: propTypes.arrayOf(propTypes.object),
  value: propTypes.number,
  prefix: propTypes.string,
  onChange: propTypes.func,
  children: propTypes.node
}, _temp2$1);
SelectMenu.displayName = "SelectMenu";
var _class$2, _temp2$2;
var DatePanelHeader = (_temp2$2 = _class$2 = function(_React$PureComponent) {
  _inherits(DatePanelHeader2, _React$PureComponent);
  function DatePanelHeader2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, DatePanelHeader2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.selectContainerHandler = function(target) {
      return target.parentNode;
    }, _this.onYearChange = function(year) {
      var _this$props = _this.props, visibleMonth = _this$props.visibleMonth, changeVisibleMonth = _this$props.changeVisibleMonth;
      changeVisibleMonth(visibleMonth.clone().year(year), "yearSelect");
    }, _this.changeVisibleMonth = function(month) {
      var _this$props2 = _this.props, visibleMonth = _this$props2.visibleMonth, changeVisibleMonth = _this$props2.changeVisibleMonth;
      changeVisibleMonth(visibleMonth.clone().month(month), "monthSelect");
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  DatePanelHeader2.prototype.render = function render() {
    var _this2 = this;
    var _props = this.props, prefix = _props.prefix, visibleMonth = _props.visibleMonth, momentLocale = _props.momentLocale, locale = _props.locale, changeMode = _props.changeMode, goNextMonth = _props.goNextMonth, goNextYear = _props.goNextYear, goPrevMonth = _props.goPrevMonth, goPrevYear = _props.goPrevYear, disableChangeMode = _props.disableChangeMode, yearRangeOffset = _props.yearRangeOffset, _props$yearRange = _props.yearRange, yearRange = _props$yearRange === void 0 ? [] : _props$yearRange;
    var localedMonths = momentLocale.months();
    var monthLabel = localedMonths[visibleMonth.month()];
    var yearLabel = visibleMonth.year();
    var btnCls = prefix + "calendar-btn";
    var monthButton = React.createElement("button", {
      role: "button",
      type: "button",
      className: btnCls,
      title: monthLabel,
      onClick: function onClick() {
        return changeMode("month", "start");
      }
    }, monthLabel);
    var yearButton = React.createElement("button", {
      role: "button",
      type: "button",
      className: btnCls,
      title: yearLabel,
      onClick: function onClick() {
        return changeMode("year", "start");
      }
    }, yearLabel);
    if (disableChangeMode) {
      var months = getMonths(momentLocale);
      var years = getYears(yearRange, yearRangeOffset, visibleMonth.year());
      monthButton = React.createElement(NextDropdown, {
        align: "tc bc",
        container: this.selectContainerHandler,
        trigger: React.createElement("button", {role: "button", type: "button", className: btnCls, title: monthLabel}, monthLabel, React.createElement(NextIcon, {type: "arrow-down"})),
        triggerType: "click"
      }, React.createElement(SelectMenu, {
        prefix,
        value: visibleMonth.month(),
        dataSource: months,
        onChange: function onChange(value) {
          return _this2.changeVisibleMonth(value);
        }
      }));
      yearButton = React.createElement(NextDropdown, {
        align: "tc bc",
        container: this.selectContainerHandler,
        trigger: React.createElement("button", {role: "button", type: "button", className: btnCls, title: yearLabel}, yearLabel, React.createElement(NextIcon, {type: "arrow-down"})),
        triggerType: "click"
      }, React.createElement(SelectMenu, {
        prefix,
        value: visibleMonth.year(),
        dataSource: years,
        onChange: this.onYearChange
      }));
    }
    return React.createElement("div", {className: prefix + "calendar-panel-header"}, React.createElement("button", {
      role: "button",
      type: "button",
      title: locale.prevYear,
      className: btnCls + " " + btnCls + "-prev-year",
      onClick: goPrevYear
    }, React.createElement(NextIcon, {type: "arrow-double-left", className: prefix + "calendar-symbol-prev-super"})), React.createElement("button", {
      role: "button",
      type: "button",
      title: locale.prevMonth,
      className: btnCls + " " + btnCls + "-prev-month",
      onClick: goPrevMonth
    }, React.createElement(NextIcon, {type: "arrow-left", className: prefix + "calendar-symbol-prev"})), React.createElement("div", {className: prefix + "calendar-panel-header-full"}, monthButton, yearButton), React.createElement("button", {
      role: "button",
      type: "button",
      title: locale.nextMonth,
      className: btnCls + " " + btnCls + "-next-month",
      onClick: goNextMonth
    }, React.createElement(NextIcon, {type: "arrow-right", className: prefix + "calendar-symbol-next"})), React.createElement("button", {
      role: "button",
      type: "button",
      title: locale.nextYear,
      className: btnCls + " " + btnCls + "-next-year",
      onClick: goNextYear
    }, React.createElement(NextIcon, {type: "arrow-double-right", className: prefix + "calendar-symbol-next-super"})));
  };
  return DatePanelHeader2;
}(React.PureComponent), _class$2.defaultProps = {
  yearRangeOffset: 10
}, _temp2$2);
var MonthPanelHeader = function(_React$PureComponent) {
  _inherits(MonthPanelHeader2, _React$PureComponent);
  function MonthPanelHeader2() {
    _classCallCheck(this, MonthPanelHeader2);
    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }
  MonthPanelHeader2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, visibleMonth = _props.visibleMonth, locale = _props.locale, changeMode = _props.changeMode, goPrevYear = _props.goPrevYear, goNextYear = _props.goNextYear;
    var yearLabel = visibleMonth.year();
    var btnCls = prefix + "calendar-btn";
    return React.createElement("div", {className: prefix + "calendar-panel-header"}, React.createElement("button", {
      role: "button",
      type: "button",
      title: locale.prevYear,
      className: btnCls + " " + btnCls + "-prev-year",
      onClick: goPrevYear
    }, React.createElement(NextIcon, {type: "arrow-double-left", className: prefix + "calendar-symbol-prev-super"})), React.createElement("div", {className: prefix + "calendar-panel-header-full"}, React.createElement("button", {
      role: "button",
      type: "button",
      title: yearLabel,
      className: "" + btnCls,
      onClick: function onClick() {
        return changeMode("year");
      }
    }, yearLabel)), React.createElement("button", {
      role: "button",
      type: "button",
      title: locale.nextYear,
      className: btnCls + " " + btnCls + "-next-year",
      onClick: goNextYear
    }, React.createElement(NextIcon, {type: "arrow-double-right", className: prefix + "calendar-symbol-next-super"})));
  };
  return MonthPanelHeader2;
}(React.PureComponent);
var YearPanelHeader = function(_React$PureComponent) {
  _inherits(YearPanelHeader2, _React$PureComponent);
  function YearPanelHeader2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, YearPanelHeader2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.getDecadeLabel = function(date) {
      var year = date.year();
      var start = parseInt(year / 10, 10) * 10;
      var end = start + 9;
      return start + "-" + end;
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  YearPanelHeader2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, visibleMonth = _props.visibleMonth, locale = _props.locale, goPrevDecade = _props.goPrevDecade, goNextDecade = _props.goNextDecade;
    var decadeLable = this.getDecadeLabel(visibleMonth);
    var btnCls = prefix + "calendar-btn";
    return React.createElement("div", {className: prefix + "calendar-panel-header"}, React.createElement("button", {
      role: "button",
      type: "button",
      title: locale.prevDecade,
      className: btnCls + " " + btnCls + "-prev-decade",
      onClick: goPrevDecade
    }, React.createElement(NextIcon, {type: "arrow-double-left", className: prefix + "calendar-symbol-prev-super"})), React.createElement("div", {className: prefix + "calendar-panel-header-full"}, React.createElement("button", {role: "button", type: "button", title: decadeLable, className: btnCls}, decadeLable)), React.createElement("button", {
      role: "button",
      type: "button",
      title: locale.nextDecade,
      className: btnCls + " " + btnCls + "-next-decade",
      onClick: goNextDecade
    }, React.createElement(NextIcon, {type: "arrow-double-right", className: prefix + "calendar-symbol-next-super"})));
  };
  return YearPanelHeader2;
}(React.PureComponent);
var DateTableHead = function(_PureComponent) {
  _inherits(DateTableHead2, _PureComponent);
  function DateTableHead2() {
    _classCallCheck(this, DateTableHead2);
    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }
  DateTableHead2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, momentLocale = _props.momentLocale;
    var firstDayOfWeek = momentLocale.firstDayOfWeek();
    var weekdaysShort = momentLocale.weekdaysShort();
    var elements = [];
    for (var i = 0; i < DAYS_OF_WEEK; i++) {
      var index = (firstDayOfWeek + i) % DAYS_OF_WEEK;
      elements.push(React.createElement("th", {key: i, className: prefix + "calendar-th", role: "cell"}, weekdaysShort[index]));
    }
    return React.createElement("thead", {className: prefix + "calendar-thead", role: "rowgroup"}, React.createElement("tr", {role: "row"}, elements));
  };
  return DateTableHead2;
}(PureComponent);
function isSameDay(a, b) {
  return a && b && a.isSame(b, "day");
}
function isRangeDate(date, startDate, endDate) {
  return date.format("L") !== startDate.format("L") && date.format("L") !== endDate.format("L") && date.valueOf() > startDate.valueOf() && date.valueOf() < endDate.valueOf();
}
function isLastMonthDate(date, target) {
  if (date.year() < target.year()) {
    return 1;
  }
  return date.year() === target.year() && date.month() < target.month();
}
function isNextMonthDate(date, target) {
  if (date.year() > target.year()) {
    return 1;
  }
  return date.year() === target.year() && date.month() > target.month();
}
var DateTable = function(_PureComponent) {
  _inherits(DateTable2, _PureComponent);
  function DateTable2() {
    _classCallCheck(this, DateTable2);
    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }
  DateTable2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, visibleMonth = _props.visibleMonth, showOtherMonth = _props.showOtherMonth, endValue = _props.endValue, format = _props.format, today = _props.today, momentLocale = _props.momentLocale, dateCellRender3 = _props.dateCellRender, disabledDate = _props.disabledDate, onSelectDate = _props.onSelectDate;
    var startValue = this.props.startValue || this.props.value;
    var firstDayOfMonth = visibleMonth.clone().startOf("month");
    var firstDayOfMonthInWeek = firstDayOfMonth.day();
    var firstDayOfWeek = momentLocale.firstDayOfWeek();
    var datesOfLastMonthCount = (firstDayOfMonthInWeek + DAYS_OF_WEEK - firstDayOfWeek) % DAYS_OF_WEEK;
    var lastMonthDate = firstDayOfMonth.clone();
    lastMonthDate.add(0 - datesOfLastMonthCount, "days");
    var counter = 0;
    var currentDate = void 0;
    var dateList = [];
    for (var i = 0; i < CALENDAR_TABLE_ROW_COUNT; i++) {
      for (var j = 0; j < CALENDAR_TABLE_COL_COUNT; j++) {
        currentDate = lastMonthDate;
        if (counter) {
          currentDate = currentDate.clone();
          currentDate.add(counter, "days");
        }
        dateList.push(currentDate);
        counter++;
      }
    }
    counter = 0;
    var monthElements = [];
    for (var _i = 0; _i < CALENDAR_TABLE_ROW_COUNT; _i++) {
      var weekElements = [];
      for (var _j = 0; _j < CALENDAR_TABLE_COL_COUNT; _j++) {
        var _classNames;
        currentDate = dateList[counter];
        var isLastMonth = isLastMonthDate(currentDate, visibleMonth);
        var isNextMonth = isNextMonthDate(currentDate, visibleMonth);
        var isCurrentMonth = !isLastMonth && !isNextMonth;
        var isDisabled = isDisabledDate(currentDate, disabledDate, "date");
        var isToday = !isDisabled && isSameDay(currentDate, today) && isCurrentMonth;
        var isSelected = !isDisabled && (isSameDay(currentDate, startValue) || isSameDay(currentDate, endValue)) && isCurrentMonth;
        var isInRange = !isDisabled && startValue && endValue && isRangeDate(currentDate, startValue, endValue) && isCurrentMonth;
        var cellContent = !showOtherMonth && !isCurrentMonth ? null : dateCellRender3(currentDate);
        var elementCls = classnames((_classNames = {}, _classNames[prefix + "calendar-cell"] = true, _classNames[prefix + "calendar-cell-prev-month"] = isLastMonth, _classNames[prefix + "calendar-cell-next-month"] = isNextMonth, _classNames[prefix + "calendar-cell-current"] = isToday, _classNames[prefix + "inrange"] = isInRange, _classNames[prefix + "selected"] = isSelected, _classNames[prefix + "disabled"] = cellContent && isDisabled, _classNames));
        weekElements.push(React.createElement("td", {
          key: counter,
          title: currentDate.format(format),
          onClick: isDisabled ? void 0 : onSelectDate.bind(null, currentDate),
          className: elementCls,
          role: "cell",
          "aria-disabled": isDisabled ? "true" : "false",
          "aria-selected": isSelected ? "true" : "false"
        }, React.createElement("div", {className: prefix + "calendar-date"}, cellContent)));
        counter++;
      }
      monthElements.push(React.createElement("tr", {key: _i, role: "row"}, weekElements));
    }
    return React.createElement("table", {className: prefix + "calendar-table", role: "grid"}, React.createElement(DateTableHead, _extends({}, this.props, {momentLocale})), React.createElement("tbody", {className: prefix + "calendar-tbody", role: "rowgroup"}, monthElements));
  };
  return DateTable2;
}(PureComponent);
function isSameMonth(currentDate, selectedDate) {
  return selectedDate && currentDate.year() === selectedDate.year() && currentDate.month() === selectedDate.month();
}
var MonthTable = function(_PureComponent) {
  _inherits(MonthTable2, _PureComponent);
  function MonthTable2() {
    _classCallCheck(this, MonthTable2);
    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }
  MonthTable2.prototype.onMonthCellClick = function onMonthCellClick(date) {
    this.props.onSelectMonth(date, "date");
  };
  MonthTable2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, value = _props.value, visibleMonth = _props.visibleMonth, disabledDate = _props.disabledDate, today = _props.today, momentLocale = _props.momentLocale, monthCellRender = _props.monthCellRender;
    var monthLocale = momentLocale.monthsShort();
    var counter = 0;
    var monthList = [];
    for (var i = 0; i < MONTH_TABLE_ROW_COUNT; i++) {
      var rowList = [];
      for (var j = 0; j < MONTH_TABLE_COL_COUNT; j++) {
        var _classnames;
        var monthDate = visibleMonth.clone().month(counter);
        var isDisabled = isDisabledDate(monthDate, disabledDate, "month");
        var isSelected = isSameMonth(monthDate, value);
        var isThisMonth = isSameMonth(monthDate, today);
        var elementCls = classnames((_classnames = {}, _classnames[prefix + "calendar-cell"] = true, _classnames[prefix + "calendar-cell-current"] = isThisMonth, _classnames[prefix + "selected"] = isSelected, _classnames[prefix + "disabled"] = isDisabled, _classnames));
        var localedMonth = monthLocale[counter];
        var monthCellContent = monthCellRender ? monthCellRender(monthDate) : localedMonth;
        rowList.push(React.createElement("td", {
          key: counter,
          title: localedMonth,
          onClick: isDisabled ? void 0 : this.onMonthCellClick.bind(this, monthDate),
          className: elementCls,
          role: "cell",
          "aria-disabled": isDisabled ? "true" : "false",
          "aria-selected": isSelected ? "true" : "false"
        }, React.createElement("div", {className: prefix + "calendar-month"}, monthCellContent)));
        counter++;
      }
      monthList.push(React.createElement("tr", {key: i, role: "row"}, rowList));
    }
    return React.createElement("table", {className: prefix + "calendar-table", role: "grid"}, React.createElement("tbody", {className: prefix + "calendar-tbody", role: "rowgroup"}, monthList));
  };
  return MonthTable2;
}(PureComponent);
var YearTable = function(_React$PureComponent) {
  _inherits(YearTable2, _React$PureComponent);
  function YearTable2() {
    _classCallCheck(this, YearTable2);
    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }
  YearTable2.prototype.onYearCellClick = function onYearCellClick(date) {
    this.props.onSelectYear(date, "month");
  };
  YearTable2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, value = _props.value, today = _props.today, visibleMonth = _props.visibleMonth, locale = _props.locale, disabledDate = _props.disabledDate, goPrevDecade = _props.goPrevDecade, goNextDecade = _props.goNextDecade, yearCellRender2 = _props.yearCellRender;
    var currentYear = today.year();
    var selectedYear = value ? value.year() : null;
    var visibleYear = visibleMonth.year();
    var startYear = Math.floor(visibleYear / 10) * 10;
    var yearElements = [];
    var counter = 0;
    var lastRowIndex = YEAR_TABLE_ROW_COUNT - 1;
    var lastColIndex = YEAR_TABLE_COL_COUNT - 1;
    for (var i = 0; i < YEAR_TABLE_ROW_COUNT; i++) {
      var rowElements = [];
      for (var j = 0; j < YEAR_TABLE_COL_COUNT; j++) {
        var _classnames;
        var content = void 0;
        var year = void 0;
        var isDisabled = false;
        var onClick = void 0;
        var title = void 0;
        if (i === 0 && j === 0) {
          title = locale.prevDecade;
          onClick = goPrevDecade;
          content = React.createElement(NextIcon, {type: "arrow-left", size: "xs"});
        } else if (i === lastRowIndex && j === lastColIndex) {
          title = locale.nextDecade;
          onClick = goNextDecade;
          content = React.createElement(NextIcon, {type: "arrow-right", size: "xs"});
        } else {
          year = startYear + counter++;
          title = year;
          var yearDate = visibleMonth.clone().year(year);
          isDisabled = isDisabledDate(yearDate, disabledDate, "year");
          !isDisabled && (onClick = this.onYearCellClick.bind(this, yearDate));
          content = yearCellRender2 ? yearCellRender2(yearDate) : year;
        }
        var isSelected = year === selectedYear;
        var classNames = classnames((_classnames = {}, _classnames[prefix + "calendar-cell"] = true, _classnames[prefix + "calendar-cell-current"] = year === currentYear, _classnames[prefix + "selected"] = isSelected, _classnames[prefix + "disabled"] = isDisabled, _classnames));
        rowElements.push(React.createElement("td", {key: i + "-" + j, className: classNames, role: "cell"}, React.createElement("div", {
          className: prefix + "calendar-year",
          onClick,
          title,
          "aria-disabled": isDisabled ? "true" : "false",
          "aria-selected": isSelected ? "true" : "false"
        }, content)));
      }
      yearElements.push(React.createElement("tr", {key: i, role: "row"}, rowElements));
    }
    return React.createElement("table", {className: prefix + "calendar-table", role: "grid"}, React.createElement("tbody", {className: prefix + "calendar-tbody", role: "rowgroup"}, yearElements));
  };
  return YearTable2;
}(React.PureComponent);
var _class$3, _temp, _initialiseProps;
var isValueChanged = function isValueChanged2(value, oldVlaue) {
  if (value && oldVlaue) {
    if (!hooks.isMoment(value)) {
      value = hooks(value);
    }
    if (!hooks.isMoment(oldVlaue)) {
      oldVlaue = hooks(oldVlaue);
    }
    return value.valueOf() !== oldVlaue.valueOf();
  } else {
    return value !== oldVlaue;
  }
};
var Calendar = (_temp = _class$3 = function(_Component) {
  _inherits(Calendar2, _Component);
  function Calendar2(props, context) {
    _classCallCheck(this, Calendar2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
    _initialiseProps.call(_this);
    var value = formatDateValue(props.value || props.defaultValue);
    var visibleMonth = getVisibleMonth(props.defaultVisibleMonth, value);
    _this.MODES = props.modes;
    _this.today = hooks();
    _this.state = {
      value,
      mode: props.mode || _this.MODES[0],
      MODES: _this.MODES,
      visibleMonth
    };
    return _this;
  }
  Calendar2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var st = {};
    if ("value" in props) {
      var value = formatDateValue(props.value);
      if (value && isValueChanged(props.value, state.value)) {
        st.visibleMonth = value;
      }
      st.value = value;
    }
    if (props.mode && state.MODES.indexOf(props.mode) > -1) {
      st.mode = props.mode;
    }
    return st;
  };
  Calendar2.prototype.changeVisibleMonthByOffset = function changeVisibleMonthByOffset(offset, type) {
    var cloneValue = this.state.visibleMonth.clone();
    cloneValue.add(offset, type);
    this.changeVisibleMonth(cloneValue, "buttonClick");
  };
  Calendar2.prototype.render = function render() {
    var _classnames, _tables, _panelHeaders;
    var _props = this.props, prefix = _props.prefix, rtl = _props.rtl, className = _props.className, shape = _props.shape, showOtherMonth = _props.showOtherMonth, format = _props.format, locale = _props.locale, dateCellRender3 = _props.dateCellRender, monthCellRender = _props.monthCellRender, yearCellRender2 = _props.yearCellRender, disabledDate = _props.disabledDate, yearRange = _props.yearRange, disableChangeMode = _props.disableChangeMode, others = _objectWithoutProperties(_props, ["prefix", "rtl", "className", "shape", "showOtherMonth", "format", "locale", "dateCellRender", "monthCellRender", "yearCellRender", "disabledDate", "yearRange", "disableChangeMode"]);
    var state = this.state;
    var classNames = classnames((_classnames = {}, _classnames[prefix + "calendar"] = true, _classnames[prefix + "calendar-" + shape] = shape, _classnames), className);
    if (rtl) {
      others.dir = "rtl";
    }
    var visibleMonth = state.visibleMonth;
    if (locale.momentLocale) {
      state.value && state.value.locale(locale.momentLocale);
      visibleMonth.locale(locale.momentLocale);
    }
    var localeData = getLocaleData(locale.format || {}, visibleMonth.localeData());
    var headerProps = {
      prefix,
      value: state.value,
      mode: state.mode,
      disableChangeMode,
      yearRange,
      locale,
      rtl,
      visibleMonth,
      momentLocale: localeData,
      changeMode: this.changeMode,
      changeVisibleMonth: this.changeVisibleMonth,
      goNextDecade: this.goNextDecade,
      goNextYear: this.goNextYear,
      goNextMonth: this.goNextMonth,
      goPrevDecade: this.goPrevDecade,
      goPrevYear: this.goPrevYear,
      goPrevMonth: this.goPrevMonth
    };
    var tableProps = {
      prefix,
      visibleMonth,
      showOtherMonth,
      value: state.value,
      mode: state.mode,
      locale,
      dateCellRender: dateCellRender3,
      monthCellRender,
      yearCellRender: yearCellRender2,
      disabledDate,
      momentLocale: localeData,
      today: this.today,
      goPrevDecade: this.goPrevDecade,
      goNextDecade: this.goNextDecade
    };
    var tables = (_tables = {}, _tables[CALENDAR_MODE_DATE] = React.createElement(DateTable, _extends({
      format
    }, tableProps, {
      onSelectDate: this.onSelectCell
    })), _tables[CALENDAR_MODE_MONTH] = React.createElement(MonthTable, _extends({}, tableProps, {onSelectMonth: this.onSelectCell})), _tables[CALENDAR_MODE_YEAR] = React.createElement(YearTable, _extends({}, tableProps, {
      rtl,
      onSelectYear: this.onSelectCell
    })), _tables);
    var panelHeaders = (_panelHeaders = {}, _panelHeaders[CALENDAR_MODE_DATE] = React.createElement(DatePanelHeader, headerProps), _panelHeaders[CALENDAR_MODE_MONTH] = React.createElement(MonthPanelHeader, headerProps), _panelHeaders[CALENDAR_MODE_YEAR] = React.createElement(YearPanelHeader, headerProps), _panelHeaders);
    return React.createElement("div", _extends({}, obj.pickOthers(Calendar2.propTypes, others), {
      className: classNames
    }), shape === "panel" ? panelHeaders[state.mode] : React.createElement(CardHeader, headerProps), tables[state.mode]);
  };
  return Calendar2;
}(Component), _class$3.propTypes = _extends({}, NextConfigProvider.propTypes, {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  defaultValue: checkMomentObj,
  value: checkMomentObj,
  mode: propTypes.oneOf(CALENDAR_MODES),
  modes: propTypes.array,
  disableChangeMode: propTypes.bool,
  format: propTypes.string,
  showOtherMonth: propTypes.bool,
  defaultVisibleMonth: propTypes.func,
  shape: propTypes.oneOf(["card", "fullscreen", "panel"]),
  onSelect: propTypes.func,
  onModeChange: propTypes.func,
  onVisibleMonthChange: propTypes.func,
  className: propTypes.string,
  dateCellRender: propTypes.func,
  monthCellRender: propTypes.func,
  yearCellRender: propTypes.func,
  yearRange: propTypes.arrayOf(propTypes.number),
  disabledDate: propTypes.func,
  locale: propTypes.object
}), _class$3.defaultProps = {
  prefix: "next-",
  rtl: false,
  shape: "fullscreen",
  modes: CALENDAR_MODES,
  disableChangeMode: false,
  format: "YYYY-MM-DD",
  onSelect: func.noop,
  onVisibleMonthChange: func.noop,
  onModeChange: func.noop,
  dateCellRender: function dateCellRender(value) {
    return value.date();
  },
  locale: zhCN.Calendar,
  showOtherMonth: true
}, _initialiseProps = function _initialiseProps2() {
  var _this2 = this;
  this.onSelectCell = function(date, nextMode) {
    var shape = _this2.props.shape;
    _this2.changeVisibleMonth(date, "cellClick");
    if (_this2.state.mode === _this2.MODES[0]) {
      _this2.props.onSelect(date);
    }
    if (shape === "panel") {
      _this2.changeMode(nextMode);
    }
  };
  this.changeMode = function(nextMode) {
    if (nextMode && _this2.MODES.indexOf(nextMode) > -1 && nextMode !== _this2.state.mode) {
      _this2.setState({mode: nextMode});
      _this2.props.onModeChange(nextMode);
    }
  };
  this.changeVisibleMonth = function(date, reason) {
    if (!isSameYearMonth(date, _this2.state.visibleMonth)) {
      _this2.setState({visibleMonth: date});
      _this2.props.onVisibleMonthChange(date, reason);
    }
  };
  this.goPrevDecade = function() {
    _this2.changeVisibleMonthByOffset(-10, "years");
  };
  this.goNextDecade = function() {
    _this2.changeVisibleMonthByOffset(10, "years");
  };
  this.goPrevYear = function() {
    _this2.changeVisibleMonthByOffset(-1, "years");
  };
  this.goNextYear = function() {
    _this2.changeVisibleMonthByOffset(1, "years");
  };
  this.goPrevMonth = function() {
    _this2.changeVisibleMonthByOffset(-1, "months");
  };
  this.goNextMonth = function() {
    _this2.changeVisibleMonthByOffset(1, "months");
  };
}, _temp);
Calendar.displayName = "Calendar";
var Calendar$1 = polyfill(Calendar);
var _class$4, _temp2$3;
var RangePanelHeader = (_temp2$3 = _class$4 = function(_React$PureComponent) {
  _inherits(RangePanelHeader2, _React$PureComponent);
  function RangePanelHeader2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, RangePanelHeader2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.selectContainerHandler = function(target) {
      return target.parentNode;
    }, _this.onYearChange = function(visibleMonth, year) {
      var changeVisibleMonth = _this.props.changeVisibleMonth;
      changeVisibleMonth(visibleMonth.clone().year(year), "yearSelect");
    }, _this.changeVisibleMonth = function(visibleMonth, month) {
      var changeVisibleMonth = _this.props.changeVisibleMonth;
      changeVisibleMonth(visibleMonth.clone().month(month), "monthSelect");
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  RangePanelHeader2.prototype.render = function render() {
    var _this2 = this;
    var _props = this.props, prefix = _props.prefix, startVisibleMonth = _props.startVisibleMonth, endVisibleMonth = _props.endVisibleMonth, _props$yearRange = _props.yearRange, yearRange = _props$yearRange === void 0 ? [] : _props$yearRange, yearRangeOffset = _props.yearRangeOffset, momentLocale = _props.momentLocale, locale = _props.locale, changeMode = _props.changeMode, goNextMonth = _props.goNextMonth, goNextYear = _props.goNextYear, goPrevMonth = _props.goPrevMonth, goPrevYear = _props.goPrevYear, disableChangeMode = _props.disableChangeMode;
    var localedMonths = momentLocale.months();
    var startMonthLabel = localedMonths[startVisibleMonth.month()];
    var endMonthLabel = localedMonths[endVisibleMonth.month()];
    var startYearLabel = startVisibleMonth.year();
    var endYearLabel = endVisibleMonth.year();
    var btnCls = prefix + "calendar-btn";
    var months = getMonths(momentLocale);
    var startYears = getYears(yearRange, yearRangeOffset, startVisibleMonth.year());
    var endYears = getYears(yearRange, yearRangeOffset, endVisibleMonth.year());
    return React.createElement("div", {className: prefix + "calendar-panel-header"}, React.createElement("button", {
      role: "button",
      type: "button",
      title: locale.prevYear,
      className: btnCls + " " + btnCls + "-prev-year",
      onClick: goPrevYear
    }, React.createElement(NextIcon, {type: "arrow-double-left", className: prefix + "calendar-symbol-prev-super"})), React.createElement("button", {
      role: "button",
      type: "button",
      title: locale.prevMonth,
      className: btnCls + " " + btnCls + "-prev-month",
      onClick: goPrevMonth
    }, React.createElement(NextIcon, {type: "arrow-left", className: prefix + "calendar-symbol-prev"})), React.createElement("div", {className: prefix + "calendar-panel-header-left"}, disableChangeMode ? React.createElement(NextDropdown, {
      align: "tc bc",
      container: this.selectContainerHandler,
      trigger: React.createElement("button", {role: "button", type: "button", className: btnCls, title: startMonthLabel}, startMonthLabel, React.createElement(NextIcon, {type: "arrow-down"})),
      triggerType: "click"
    }, React.createElement(SelectMenu, {
      prefix,
      value: startVisibleMonth.month(),
      dataSource: months,
      onChange: function onChange(value) {
        return _this2.changeVisibleMonth(startVisibleMonth, value);
      }
    })) : React.createElement("button", {
      role: "button",
      type: "button",
      title: startMonthLabel,
      className: btnCls,
      onClick: function onClick() {
        return changeMode("month", "start");
      }
    }, startMonthLabel), disableChangeMode ? React.createElement(NextDropdown, {
      align: "tc bc",
      container: this.selectContainerHandler,
      trigger: React.createElement("button", {role: "button", type: "button", className: btnCls, title: startYearLabel}, startYearLabel, React.createElement(NextIcon, {type: "arrow-down"})),
      triggerType: "click"
    }, React.createElement(SelectMenu, {
      prefix,
      value: startVisibleMonth.year(),
      dataSource: startYears,
      onChange: function onChange(v) {
        return _this2.onYearChange(startVisibleMonth, v);
      }
    })) : React.createElement("button", {
      role: "button",
      type: "button",
      title: startYearLabel,
      className: btnCls,
      onClick: function onClick() {
        return changeMode("year", "start");
      }
    }, startYearLabel)), React.createElement("div", {className: prefix + "calendar-panel-header-right"}, disableChangeMode ? React.createElement(NextDropdown, {
      align: "tc bc",
      container: this.selectContainerHandler,
      trigger: React.createElement("button", {role: "button", type: "button", className: btnCls, title: endMonthLabel}, endMonthLabel, React.createElement(NextIcon, {type: "arrow-down"})),
      triggerType: "click"
    }, React.createElement(SelectMenu, {
      prefix,
      value: endVisibleMonth.month(),
      dataSource: months,
      onChange: function onChange(value) {
        return _this2.changeVisibleMonth(endVisibleMonth, value);
      }
    })) : React.createElement("button", {
      role: "button",
      type: "button",
      title: endMonthLabel,
      className: btnCls,
      onClick: function onClick() {
        return changeMode("month", "end");
      }
    }, endMonthLabel), disableChangeMode ? React.createElement(NextDropdown, {
      align: "tc bc",
      container: this.selectContainerHandler,
      trigger: React.createElement("button", {role: "button", type: "button", className: btnCls, title: endYearLabel}, endYearLabel, React.createElement(NextIcon, {type: "arrow-down"})),
      triggerType: "click"
    }, React.createElement(SelectMenu, {
      prefix,
      value: endVisibleMonth.year(),
      dataSource: endYears,
      onChange: function onChange(v) {
        return _this2.onYearChange(endVisibleMonth, v);
      }
    })) : React.createElement("button", {
      role: "button",
      type: "button",
      title: endYearLabel,
      className: btnCls,
      onClick: function onClick() {
        return changeMode("year", "end");
      }
    }, endYearLabel)), React.createElement("button", {
      role: "button",
      type: "button",
      title: locale.nextMonth,
      className: btnCls + " " + btnCls + "-next-month",
      onClick: goNextMonth
    }, React.createElement(NextIcon, {type: "arrow-right", className: prefix + "calendar-symbol-next"})), React.createElement("button", {
      role: "button",
      type: "button",
      title: locale.nextYear,
      className: btnCls + " " + btnCls + "-next-year",
      onClick: goNextYear
    }, React.createElement(NextIcon, {type: "arrow-double-right", className: prefix + "calendar-symbol-next-super"})));
  };
  return RangePanelHeader2;
}(React.PureComponent), _class$4.defaultProps = {
  yearRangeOffset: 10
}, _temp2$3);
var _class$5, _temp$1;
var RangeCalendar = (_temp$1 = _class$5 = function(_React$Component) {
  _inherits(RangeCalendar2, _React$Component);
  function RangeCalendar2(props, context) {
    _classCallCheck(this, RangeCalendar2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
    _this.onSelectCell = function(date, nextMode) {
      if (_this.state.mode === CALENDAR_MODE_DATE) {
        _this.props.onSelect(date);
      } else {
        _this.changeVisibleMonth(date, "cellClick");
      }
      _this.changeMode(nextMode);
    };
    _this.changeMode = function(mode, activePanel) {
      if (typeof mode === "string" && mode !== _this.state.mode) {
        _this.setState({mode});
      }
      if (activePanel && activePanel !== _this.state.activePanel) {
        _this.setState({activePanel});
      }
    };
    _this.changeVisibleMonth = function(date, reason) {
      if (!isSameYearMonth(date, _this.state.startVisibleMonth)) {
        _this.setState({startVisibleMonth: date});
        _this.props.onVisibleMonthChange(date, reason);
      }
    };
    _this.changeVisibleMonthByOffset = function(offset, type) {
      var offsetDate = _this.state.startVisibleMonth.clone().add(offset, type);
      _this.changeVisibleMonth(offsetDate, "buttonClick");
    };
    _this.goPrevDecade = function() {
      _this.changeVisibleMonthByOffset(-10, "years");
    };
    _this.goNextDecade = function() {
      _this.changeVisibleMonthByOffset(10, "years");
    };
    _this.goPrevYear = function() {
      _this.changeVisibleMonthByOffset(-1, "years");
    };
    _this.goNextYear = function() {
      _this.changeVisibleMonthByOffset(1, "years");
    };
    _this.goPrevMonth = function() {
      _this.changeVisibleMonthByOffset(-1, "months");
    };
    _this.goNextMonth = function() {
      _this.changeVisibleMonthByOffset(1, "months");
    };
    var startValue = formatDateValue(props.startValue || props.defaultStartValue);
    var endValue = formatDateValue(props.endValue || props.defaultEndValue);
    var visibleMonth = getVisibleMonth(props.defaultVisibleMonth, startValue);
    _this.state = {
      startValue,
      endValue,
      mode: props.mode,
      prevMode: props.mode,
      startVisibleMonth: visibleMonth,
      activePanel: void 0
    };
    _this.today = hooks();
    return _this;
  }
  RangeCalendar2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var st = {};
    if ("startValue" in props) {
      var startValue = formatDateValue(props.startValue);
      st.startValue = startValue;
      if (startValue && !startValue.isSame(state.startValue, "day")) {
        st.startVisibleMonth = startValue;
      }
    }
    if ("endValue" in props) {
      st.endValue = formatDateValue(props.endValue);
    }
    if ("mode" in props && state.prevMode !== props.mode) {
      st.prevMode = props.mode;
      st.mode = props.mode;
    }
    return st;
  };
  RangeCalendar2.prototype.render = function render() {
    var _classnames;
    var _props = this.props, prefix = _props.prefix, rtl = _props.rtl, dateCellRender3 = _props.dateCellRender, monthCellRender = _props.monthCellRender, yearCellRender2 = _props.yearCellRender, className = _props.className, format = _props.format, locale = _props.locale, showOtherMonth = _props.showOtherMonth, disabledDate = _props.disabledDate, disableChangeMode = _props.disableChangeMode, yearRange = _props.yearRange, others = _objectWithoutProperties(_props, ["prefix", "rtl", "dateCellRender", "monthCellRender", "yearCellRender", "className", "format", "locale", "showOtherMonth", "disabledDate", "disableChangeMode", "yearRange"]);
    var _state = this.state, startValue = _state.startValue, endValue = _state.endValue, mode = _state.mode, startVisibleMonth = _state.startVisibleMonth, activePanel = _state.activePanel;
    if (locale.momentLocale) {
      startValue && startValue.locale(locale.momentLocale);
      endValue && endValue.locale(locale.momentLocale);
      startVisibleMonth.locale(locale.momentLocale);
    }
    if (rtl) {
      others.dir = "rtl";
    }
    var localeData = getLocaleData(locale.format || {}, startVisibleMonth.localeData());
    var endVisibleMonth = startVisibleMonth.clone().add(1, "months");
    var headerProps = {
      prefix,
      rtl,
      mode,
      locale,
      momentLocale: localeData,
      startVisibleMonth,
      endVisibleMonth,
      changeVisibleMonth: this.changeVisibleMonth,
      changeMode: this.changeMode,
      yearRange,
      disableChangeMode
    };
    var tableProps = {
      prefix,
      value: startValue,
      startValue,
      endValue,
      mode,
      locale,
      momentLocale: localeData,
      showOtherMonth,
      today: this.today,
      disabledDate,
      dateCellRender: dateCellRender3,
      monthCellRender,
      yearCellRender: yearCellRender2,
      changeMode: this.changeMode,
      changeVisibleMonth: this.changeVisibleMonth
    };
    var visibleMonths = {
      start: startVisibleMonth,
      end: endVisibleMonth
    };
    var visibleMonth = visibleMonths[activePanel];
    var header = void 0;
    var table = void 0;
    switch (mode) {
      case CALENDAR_MODE_DATE: {
        table = [React.createElement("div", {
          className: prefix + "calendar-body-left",
          key: "left-panel"
        }, React.createElement(DateTable, _extends({
          format
        }, tableProps, {
          visibleMonth: startVisibleMonth,
          onSelectDate: this.onSelectCell
        }))), React.createElement("div", {
          className: prefix + "calendar-body-right",
          key: "right-panel"
        }, React.createElement(DateTable, _extends({
          format
        }, tableProps, {
          visibleMonth: endVisibleMonth,
          onSelectDate: this.onSelectCell
        })))];
        header = React.createElement(RangePanelHeader, _extends({}, headerProps, {
          goPrevYear: this.goPrevYear,
          goPrevMonth: this.goPrevMonth,
          goNextYear: this.goNextYear,
          goNextMonth: this.goNextMonth
        }));
        break;
      }
      case CALENDAR_MODE_MONTH: {
        table = React.createElement(MonthTable, _extends({}, tableProps, {
          visibleMonth,
          onSelectMonth: this.onSelectCell
        }));
        header = React.createElement(MonthPanelHeader, _extends({}, headerProps, {
          visibleMonth,
          goPrevYear: this.goPrevYear,
          goNextYear: this.goNextYear
        }));
        break;
      }
      case CALENDAR_MODE_YEAR: {
        table = React.createElement(YearTable, _extends({}, tableProps, {
          rtl,
          visibleMonth,
          onSelectYear: this.onSelectCell,
          goPrevDecade: this.goPrevDecade,
          goNextDecade: this.goNextDecade
        }));
        header = React.createElement(YearPanelHeader, _extends({}, headerProps, {
          visibleMonth,
          goPrevDecade: this.goPrevDecade,
          goNextDecade: this.goNextDecade
        }));
        break;
      }
    }
    var classNames = classnames((_classnames = {}, _classnames[prefix + "calendar"] = true, _classnames[prefix + "calendar-range"] = true, _classnames), className);
    return React.createElement("div", _extends({}, obj.pickOthers(RangeCalendar2.propTypes, others), {
      className: classNames
    }), header, React.createElement("div", {className: prefix + "calendar-body"}, table));
  };
  return RangeCalendar2;
}(React.Component), _class$5.propTypes = _extends({}, NextConfigProvider.propTypes, {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  defaultStartValue: checkMomentObj,
  defaultEndValue: checkMomentObj,
  startValue: checkMomentObj,
  endValue: checkMomentObj,
  mode: propTypes.oneOf(CALENDAR_MODES),
  disableChangeMode: propTypes.bool,
  format: propTypes.string,
  yearRange: propTypes.arrayOf(propTypes.number),
  showOtherMonth: propTypes.bool,
  defaultVisibleMonth: propTypes.func,
  onVisibleMonthChange: propTypes.func,
  disabledDate: propTypes.func,
  onSelect: propTypes.func,
  dateCellRender: propTypes.func,
  monthCellRender: propTypes.func,
  yearCellRender: propTypes.func,
  locale: propTypes.object,
  className: propTypes.string
}), _class$5.defaultProps = {
  prefix: "next-",
  rtl: false,
  mode: CALENDAR_MODE_DATE,
  disableChangeMode: false,
  format: "YYYY-MM-DD",
  dateCellRender: function dateCellRender2(value) {
    return value.date();
  },
  onSelect: func.noop,
  onVisibleMonthChange: func.noop,
  locale: zhCN.Calendar,
  showOtherMonth: false
}, _temp$1);
RangeCalendar.displayName = "RangeCalendar";
var RangeCalendar$1 = NextConfigProvider.config(polyfill(RangeCalendar), {
  componentName: "Calendar"
});
var transform = function transform2(props, deprecated) {
  var type = props.type, onChange = props.onChange, base = props.base, disabledMonth = props.disabledMonth, disabledYear = props.disabledYear, others = _objectWithoutProperties(props, ["type", "onChange", "base", "disabledMonth", "disabledYear"]);
  var newProps = others;
  if ("type" in props) {
    deprecated("type", "shape", "Calendar");
    newProps.shape = type;
    if ("shape" in props) {
      newProps.shape = props.shape;
    }
  }
  if ("base" in props) {
    deprecated("base", "defaultVisibleMonth", "Calendar");
    var newDefaultVisibleMonth = function newDefaultVisibleMonth2() {
      preFormatDateValue(base, "YYYY-MM-DD");
    };
    if ("defaultVisibleMonth" in props) {
      newDefaultVisibleMonth = props.defaultVisibleMonth;
    }
    newProps.defaultVisibleMonth = newDefaultVisibleMonth;
  }
  if ("onChange" in props && typeof onChange === "function") {
    deprecated("onChange", "onSelect", "Calendar");
    var newOnSelect = function newOnSelect2(date) {
      onChange({mode: others.mode, value: date});
      if ("onSelect" in props) {
        props.onSelect(date);
      }
    };
    newProps.onSelect = newOnSelect;
  }
  if ("disabledMonth" in props && typeof disabledMonth === "function") {
    deprecated("disabledMonth", "disabledDate", "Calendar");
  }
  if ("disabledYear" in props && typeof disabledYear === "function") {
    deprecated("disabledYear", "disabledDate", "Calendar");
  }
  if ("yearCellRender" in props && typeof yearCellRender === "function") {
    deprecated("yearCellRender", "monthCellRender/dateCellRender", "Calendar");
  }
  if ("language" in props) {
    deprecated("language", "moment.locale", "Calendar");
  }
  return newProps;
};
Calendar$1.RangeCalendar = RangeCalendar$1;
var NextCalendar = NextConfigProvider.config(Calendar$1, {
  transform
});
export {NextCalendar as N, RangeCalendar$1 as R};
