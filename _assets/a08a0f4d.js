import {c as createElement, F as createCommonjsModule, G as commonjsGlobal, H as getDefaultExportFromCjs} from "./index.09bdaa64.js";
import {h as hooks} from "./cf6ed2e0.js";
import {N as NextCalendar} from "./40f6fa07.js";
import "./18dc4424.js";
import {H as He} from "./8c9f3d42.js";
function onDateChange(value) {
  console.log(value.format("L"));
}
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextCalendar, {
    onSelect: onDateChange,
    defaultValue: hooks().add(1, "days")
  })));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function onDateChange$1(value) {
  console.log(value);
}
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement("div", {
    className: "wrapped-calendar"
  }, /* @__PURE__ */ createElement(NextCalendar, {
    onSelect: onDateChange$1,
    shape: "card"
  })));
}
const Style$1 = He.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #c4c6cf;
    border-radius: 3px;
    padding: 8px;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const currentDate = hooks();
const localeData = currentDate.clone().localeData();
const monthLocale = localeData.monthsShort();
function dateCellRender(date) {
  const dateNum = date.date();
  if (currentDate.month() !== date.month()) {
    return dateNum;
  }
  let eventList;
  switch (dateNum) {
    case 1:
      eventList = [
        {type: "primary", content: "Event 1"},
        {type: "normal", content: "Event 2"}
      ];
      break;
    case 10:
      eventList = [
        {type: "normal", content: "Event 3"},
        {type: "normal", content: "Event 4"}
      ];
      break;
    case 11:
      eventList = [
        {type: "primary", content: "Event 5"},
        {type: "primary", content: "Event 6"}
      ];
      break;
    default:
      eventList = [];
  }
  return /* @__PURE__ */ createElement("div", {
    className: "custom-calendar-cell"
  }, /* @__PURE__ */ createElement("div", {
    className: "custom-calendar-cell-value"
  }, dateNum), /* @__PURE__ */ createElement("div", {
    className: "custom-calendar-cell-content"
  }, /* @__PURE__ */ createElement("ul", {
    className: "event-list"
  }, eventList.map((item, key) => /* @__PURE__ */ createElement("li", {
    className: `${item.type}-event`,
    key
  }, item.content)))));
}
function monthCellRender(date) {
  if (currentDate.month() === date.month()) {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", null, monthLocale[date.month()]), /* @__PURE__ */ createElement("div", null, "Events"));
  }
  return monthLocale[date.month()];
}
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(NextCalendar, {
    dateCellRender,
    monthCellRender
  }));
}
const Style$2 = He.div`
  .custom-calendar-guide {
    width: 270px;
    border: 1px solid #c4c6cf;
    border-radius: 3px;
    overflow: hidden;
    margin-top: 20px;
  }

  .custom-calendar-cell-content {
    height: 50px;
    text-align: left;
  }

  .event-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .primary-event {
    color: white;
    background: red;
    border-radius: 3px;
    padding-left: 10px;
    margin-bottom: 3px;
  }

  .normal-event {
    color: white;
    background: blue;
    border-radius: 3px;
    padding-left: 10px;
    margin-bottom: 3px;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
function onSelect(value) {
  console.log(value.format("L"));
}
function onVisibleMonthChange(value, reason) {
  console.log("Visible month changed to %s from <%s>", value.format("YYYY-MM"), reason);
}
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(NextCalendar, {
    onSelect,
    defaultVisibleMonth: () => hooks("2018-01", "YYYY-MM", true),
    onVisibleMonthChange
  }));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const currentDate$1 = hooks();
const disabledDate = function(date) {
  return date.valueOf() > currentDate$1.valueOf();
};
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement("div", {
    className: "wrapped-calendar"
  }, /* @__PURE__ */ createElement(NextCalendar, {
    disabledDate,
    shape: "card"
  })));
}
const Style$4 = He.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #c4c6cf;
    border-radius: 3px;
    padding: 8px;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
hooks.locale("zh-cn");
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement(NextCalendar, null));
}
const Style$5 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
var solarlunar_min = createCommonjsModule(function(module, exports) {
  !function(b, f) {
    module.exports = f();
  }(commonjsGlobal, function() {
    return function(b) {
      function f(c) {
        if (e[c])
          return e[c].exports;
        var t = e[c] = {i: c, l: false, exports: {}};
        return b[c].call(t.exports, t, t.exports, f), t.l = true, t.exports;
      }
      var e = {};
      return f.m = b, f.c = e, f.d = function(b2, e2, c) {
        f.o(b2, e2) || Object.defineProperty(b2, e2, {configurable: false, enumerable: true, get: c});
      }, f.n = function(b2) {
        var e2 = b2 && b2.__esModule ? function() {
          return b2.default;
        } : function() {
          return b2;
        };
        return f.d(e2, "a", e2), e2;
      }, f.o = function(b2, f2) {
        return Object.prototype.hasOwnProperty.call(b2, f2);
      }, f.p = "", f(f.s = 0);
    }([function(b, f, e) {
      Object.defineProperty(f, "__esModule", {value: true});
      var c = e(1), t = function(b2) {
        return b2 && b2.__esModule ? b2 : {default: b2};
      }(c);
      f.default = t.default, b.exports = f.default;
    }, function(b, f, e) {
      function c(b2) {
        return b2 && b2.__esModule ? b2 : {default: b2};
      }
      Object.defineProperty(f, "__esModule", {value: true});
      var t = e(2), a = c(t), r = e(3), n = c(r), d = e(4), u = c(d), s = e(5), o = c(s), l = e(6), i = c(l), p = e(7), y = c(p), h = e(8), v = c(h), g = e(9), D = c(g), M = e(10), _ = c(M), m = e(11), x = c(m), T = e(12), j = c(T), I = {lunarInfo: a.default, solarMonth: n.default, gan: u.default, zhi: o.default, animals: i.default, lunarTerm: y.default, lTermInfo: v.default, nStr1: D.default, nStr2: _.default, nStr3: x.default, nStr4: j.default, lYearDays: function(b2) {
        var f2, e2 = 348;
        for (f2 = 32768; f2 > 8; f2 >>= 1)
          e2 += I.lunarInfo[b2 - 1900] & f2 ? 1 : 0;
        return e2 + I.leapDays(b2);
      }, leapMonth: function(b2) {
        return 15 & I.lunarInfo[b2 - 1900];
      }, leapDays: function(b2) {
        return I.leapMonth(b2) ? 65536 & I.lunarInfo[b2 - 1900] ? 30 : 29 : 0;
      }, monthDays: function(b2, f2) {
        return f2 > 12 || f2 < 1 ? -1 : I.lunarInfo[b2 - 1900] & 65536 >> f2 ? 30 : 29;
      }, solarDays: function(b2, f2) {
        if (f2 > 12 || f2 < 1)
          return -1;
        var e2 = f2 - 1;
        return e2 == 1 ? b2 % 4 == 0 && b2 % 100 != 0 || b2 % 400 == 0 ? 29 : 28 : I.solarMonth[e2];
      }, toGanZhi: function(b2) {
        return I.gan[b2 % 10] + I.zhi[b2 % 12];
      }, getTerm: function(b2, f2) {
        if (b2 < 1900 || b2 > 2100)
          return -1;
        if (f2 < 1 || f2 > 24)
          return -1;
        var e2 = I.lTermInfo[b2 - 1900], c2 = [parseInt("0x" + e2.substr(0, 5)).toString(), parseInt("0x" + e2.substr(5, 5)).toString(), parseInt("0x" + e2.substr(10, 5)).toString(), parseInt("0x" + e2.substr(15, 5)).toString(), parseInt("0x" + e2.substr(20, 5)).toString(), parseInt("0x" + e2.substr(25, 5)).toString()], t2 = [c2[0].substr(0, 1), c2[0].substr(1, 2), c2[0].substr(3, 1), c2[0].substr(4, 2), c2[1].substr(0, 1), c2[1].substr(1, 2), c2[1].substr(3, 1), c2[1].substr(4, 2), c2[2].substr(0, 1), c2[2].substr(1, 2), c2[2].substr(3, 1), c2[2].substr(4, 2), c2[3].substr(0, 1), c2[3].substr(1, 2), c2[3].substr(3, 1), c2[3].substr(4, 2), c2[4].substr(0, 1), c2[4].substr(1, 2), c2[4].substr(3, 1), c2[4].substr(4, 2), c2[5].substr(0, 1), c2[5].substr(1, 2), c2[5].substr(3, 1), c2[5].substr(4, 2)];
        return parseInt(t2[f2 - 1]);
      }, toChinaYear: function(b2) {
        var f2 = parseInt(b2 / 1e3), e2 = parseInt(b2 % 1e3 / 100), c2 = parseInt(b2 % 100 / 10), t2 = b2 % 10;
        return I.nStr4[f2] + I.nStr4[e2] + I.nStr4[c2] + I.nStr4[t2] + "年";
      }, toChinaMonth: function(b2) {
        if (b2 > 12 || b2 < 1)
          return -1;
        var f2 = I.nStr3[b2 - 1];
        return f2 += "月";
      }, toChinaDay: function(b2) {
        var f2;
        switch (b2) {
          case 10:
            f2 = "初十";
            break;
          case 20:
            f2 = "二十";
            break;
          case 30:
            f2 = "三十";
            break;
          default:
            f2 = I.nStr2[Math.floor(b2 / 10)], f2 += I.nStr1[b2 % 10];
        }
        return f2;
      }, getAnimal: function(b2) {
        return I.animals[(b2 - 4) % 12];
      }, solar2lunar: function(b2, f2, e2) {
        if (b2 < 1900 || b2 > 2100)
          return -1;
        if (b2 == 1900 && f2 == 1 && e2 < 31)
          return -1;
        if (b2)
          var c2 = new Date(b2, parseInt(f2) - 1, e2);
        else
          var c2 = new Date();
        var t2, a2 = 0, r2 = 0, b2 = c2.getFullYear(), f2 = c2.getMonth() + 1, e2 = c2.getDate(), n2 = (Date.UTC(c2.getFullYear(), c2.getMonth(), c2.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
        for (t2 = 1900; t2 < 2101 && n2 > 0; t2++)
          r2 = I.lYearDays(t2), n2 -= r2;
        n2 < 0 && (n2 += r2, t2--);
        var d2 = new Date(), u2 = false;
        d2.getFullYear() == b2 && d2.getMonth() + 1 == f2 && d2.getDate() == e2 && (u2 = true);
        var s2 = c2.getDay(), o2 = I.nStr1[s2];
        s2 == 0 && (s2 = 7);
        var l2 = t2, a2 = I.leapMonth(t2), i2 = false;
        for (t2 = 1; t2 < 13 && n2 > 0; t2++)
          a2 > 0 && t2 == a2 + 1 && i2 == 0 ? (--t2, i2 = true, r2 = I.leapDays(l2)) : r2 = I.monthDays(l2, t2), i2 == 1 && t2 == a2 + 1 && (i2 = false), n2 -= r2;
        n2 == 0 && a2 > 0 && t2 == a2 + 1 && (i2 ? i2 = false : (i2 = true, --t2)), n2 < 0 && (n2 += r2, --t2);
        var p2 = t2, y2 = n2 + 1, h2 = f2 - 1, v2 = I.getTerm(b2, 3), g2 = I.toGanZhi(b2 - 4), D2 = new Date(b2, 1, v2).getTime();
        new Date(b2, h2, e2).getTime() < D2 && (g2 = I.toGanZhi(b2 - 5));
        var M2 = I.getTerm(b2, 2 * f2 - 1), _2 = I.getTerm(b2, 2 * f2), m8 = I.toGanZhi(12 * (b2 - 1900) + f2 + 11);
        e2 >= M2 && (m8 = I.toGanZhi(12 * (b2 - 1900) + f2 + 12));
        var x2 = false, T2 = "";
        M2 == e2 && (x2 = true, T2 = I.lunarTerm[2 * f2 - 2]), _2 == e2 && (x2 = true, T2 = I.lunarTerm[2 * f2 - 1]);
        var j2 = Date.UTC(b2, h2, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, S = I.toGanZhi(j2 + e2 - 1);
        return {lYear: l2, lMonth: p2, lDay: y2, animal: I.getAnimal(l2), yearCn: I.toChinaYear(l2), monthCn: (i2 && a2 === p2 ? "闰" : "") + I.toChinaMonth(p2), dayCn: I.toChinaDay(y2), cYear: b2, cMonth: f2, cDay: e2, gzYear: g2, gzMonth: m8, gzDay: S, isToday: u2, isLeap: i2, nWeek: s2, ncWeek: "星期" + o2, isTerm: x2, term: T2};
      }, lunar2solar: function(b2, f2, e2, c2) {
        var t2 = I.leapMonth(b2);
        I.leapDays(b2);
        if (c2 && t2 != f2)
          return -1;
        if (b2 == 2100 && f2 == 12 && e2 > 1 || b2 == 1900 && f2 == 1 && e2 < 31)
          return -1;
        var a2 = I.monthDays(b2, f2);
        if (b2 < 1900 || b2 > 2100 || e2 > a2)
          return -1;
        for (var r2 = 0, n2 = 1900; n2 < b2; n2++)
          r2 += I.lYearDays(n2);
        for (var d2 = 0, u2 = false, n2 = 1; n2 < f2; n2++)
          d2 = I.leapMonth(b2), u2 || d2 <= n2 && d2 > 0 && (r2 += I.leapDays(b2), u2 = true), r2 += I.monthDays(b2, n2);
        c2 && (r2 += a2);
        var s2 = Date.UTC(1900, 1, 30, 0, 0, 0), o2 = new Date(864e5 * (r2 + e2 - 31) + s2), l2 = o2.getUTCFullYear(), i2 = o2.getUTCMonth() + 1, p2 = o2.getUTCDate();
        return I.solar2lunar(l2, i2, p2);
      }};
      f.default = I, b.exports = f.default;
    }, function(b, f, e) {
      Object.defineProperty(f, "__esModule", {value: true}), f.default = [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 23232, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 37600, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 42192, 53584, 62034, 54560], b.exports = f.default;
    }, function(b, f, e) {
      Object.defineProperty(f, "__esModule", {value: true}), f.default = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], b.exports = f.default;
    }, function(b, f, e) {
      Object.defineProperty(f, "__esModule", {value: true}), f.default = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"], b.exports = f.default;
    }, function(b, f, e) {
      Object.defineProperty(f, "__esModule", {value: true}), f.default = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"], b.exports = f.default;
    }, function(b, f, e) {
      Object.defineProperty(f, "__esModule", {value: true}), f.default = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"], b.exports = f.default;
    }, function(b, f, e) {
      Object.defineProperty(f, "__esModule", {value: true}), f.default = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"], b.exports = f.default;
    }, function(b, f, e) {
      Object.defineProperty(f, "__esModule", {value: true}), f.default = ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"], b.exports = f.default;
    }, function(b, f, e) {
      Object.defineProperty(f, "__esModule", {value: true}), f.default = ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], b.exports = f.default;
    }, function(b, f, e) {
      Object.defineProperty(f, "__esModule", {value: true}), f.default = ["初", "十", "廿", "卅"], b.exports = f.default;
    }, function(b, f, e) {
      Object.defineProperty(f, "__esModule", {value: true}), f.default = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"], b.exports = f.default;
    }, function(b, f, e) {
      Object.defineProperty(f, "__esModule", {value: true}), f.default = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], b.exports = f.default;
    }]);
  });
});
var solarLunar = /* @__PURE__ */ getDefaultExportFromCjs(solarlunar_min);
function onDateChange$2(value) {
  console.log(value.format("L"));
}
function dateCellRender$1(value) {
  const solar2lunarData = solarLunar.solar2lunar(value.year(), value.month(), value.date());
  return /* @__PURE__ */ createElement("div", {
    className: "custom-cell"
  }, value.date(), /* @__PURE__ */ createElement("span", null, solar2lunarData.lDay === 1 ? solar2lunarData.monthCn : solar2lunarData.dayCn));
}
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextCalendar, {
    onSelect: onDateChange$2,
    dateCellRender: dateCellRender$1,
    defaultValue: hooks().add(1, "days")
  })));
}
const Style$6 = He.div`
  .custom-cell {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
function DemoComponent$7() {
  return /* @__PURE__ */ createElement(Style$7, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextCalendar, {
    shape: "panel",
    value: hooks().add(1, "days")
  })));
}
const Style$7 = He.div``;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
const modules = {};
modules["_basic"] = m0;
modules["_card"] = m1;
modules["_custom-cell"] = m2;
modules["_default-visible-month"] = m3;
modules["_disabled"] = m4;
modules["_locale"] = m5;
modules["_lunar"] = m6;
modules["_panel"] = m7;
export default modules;
