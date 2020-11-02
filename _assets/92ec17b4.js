import {c as createElement, S as Select, C as Component, D as Radio, F as createCommonjsModule, s as NextIcon, d as classnames, x as NextInput} from "./index.79f375bb.js";
import {N as NextBalloon} from "./7f28546e.js";
import "./5f69b0ea.js";
import {N as NextDivider} from "./87a2fa4a.js";
import "./b2f22ff2.js";
import {e as exported} from "./d4a1894f.js";
import {H as He} from "./6639483f.js";
const Option = Select.Option;
class App extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    console.log(value);
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("span", {
      id: "select-a11y"
    }, "Select: "), /* @__PURE__ */ createElement(Select, {
      onChange: this.onChange,
      defaultValue: "jack",
      "aria-labelledby": "select-a11y"
    }, /* @__PURE__ */ createElement(Option, {
      value: "jack"
    }, "Jack"), /* @__PURE__ */ createElement(Option, {
      value: "frank"
    }, "Frank"), /* @__PURE__ */ createElement(Option, {
      value: "hugo"
    }, "Hugo")));
  }
}
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement(App, null));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const Option$1 = Select.Option;
const onChange = function(value) {
  console.log(value);
};
const onToggleHighlightItem = function(item, type) {
  console.log(item, type);
};
const onFocus = () => {
  console.log("focus");
};
const onBlur = () => {
  console.log("blur");
};
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(Select, {
    id: "basic-demo",
    onChange,
    onToggleHighlightItem,
    defaultValue: "jack",
    onFocus,
    onBlur,
    "aria-label": "name is"
  }, /* @__PURE__ */ createElement(Option$1, {
    value: "jack"
  }, "Jack"), /* @__PURE__ */ createElement(Option$1, {
    value: "frank"
  }, "Frank"), /* @__PURE__ */ createElement(Option$1, {
    value: "hugo"
  }, "Hugo")));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const dataSource = [
  "Lucy King",
  "Lily King",
  "Jim Green",
  {
    label: "Chinese",
    children: [
      {value: "Hang Meimei", label: "Hang Meimei"},
      "Li Lei",
      {value: "Gao Hui", label: "Gao Hui", disabled: true},
      "Zhang San",
      "Li Si",
      "Wang Wu",
      {value: "Zhao Benshan", label: "Zhao Benshan", disabled: true},
      "Sun Yang",
      "Song Shuying"
    ]
  },
  {
    label: "Pets",
    children: ["Poly", "Kitty"]
  }
];
const onChange$1 = (v) => {
  console.log(v);
};
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(Select.AutoComplete, {
    style: {width: 300},
    onChange: onChange$1,
    dataSource
  }));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const {AutoComplete} = Select;
const dataSource$1 = [
  "Lucy King",
  "Lily King",
  "Jim Green",
  {
    label: "Chinese",
    children: [
      {value: "Hang Meimei", label: "Hang Meimei"},
      "Li Lei",
      {value: "Gao Hui", label: "Gao Hui", disabled: true},
      "Zhang San",
      "Li Si",
      "Wang Wu",
      {value: "Zhao Benshan", label: "Zhao Benshan", disabled: true},
      "Sun Yang",
      "Song Shuying"
    ]
  },
  {
    label: "Pets",
    children: ["Poly", "Kitty"]
  }
];
const ctrlDataSources = {
  size: ["small", "medium", "large"],
  disabled: [true, false],
  hasClear: [true, false]
};
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      size: void 0,
      disabled: void 0,
      hasClear: void 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCtrlChange = this.handleCtrlChange.bind(this);
  }
  handleCtrlChange(key, value) {
    this.setState({[key]: value});
    if (key === "mode") {
      this.setState({value: null});
    }
  }
  handleChange(value) {
    console.log("handleChange: value: ", value);
    this.setState({value});
  }
  renderCtrlNodes(state) {
    const ctrlNodes = [];
    let k;
    for (k in ctrlDataSources) {
      if (ctrlDataSources.hasOwnProperty(k)) {
        ctrlNodes.push(/* @__PURE__ */ createElement(Select, {
          key: k,
          label: `${k}: `,
          value: state[k],
          dataSource: ctrlDataSources[k],
          onChange: this.handleCtrlChange.bind(this, k)
        }));
      }
    }
    return ctrlNodes;
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "demo-container"
    }, /* @__PURE__ */ createElement("div", {
      className: "demo-controller"
    }, this.renderCtrlNodes(this.state)), /* @__PURE__ */ createElement(AutoComplete, {
      ...this.state,
      style: {maxWidth: 300},
      onChange: this.handleChange,
      dataSource: dataSource$1
    }));
  }
}
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(Demo, null));
}
const Style$3 = He.div`
  .demo-container {
    padding: 16px;
    background-color: #f8f8f8;
  }

  .demo-controller {
    padding: 12px 12px 4px;
    margin-bottom: 16px;
    border: 2px dashed #ddd;
  }

  .next-select {
    margin-right: 8px;
    margin-bottom: 8px;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const {AutoComplete: AutoComplete$1} = Select;
const dataSource$2 = [
  {value: "Hang Meimei", label: "韩梅梅"},
  {value: "Gao Hui", label: "高辉"},
  {value: "Zhang San", label: "张三"},
  {value: "Li Si", label: "李四"},
  {value: "Wang Wu", label: "王五"},
  {value: "Sun Yang", label: "孙杨"}
];
class Demo$1 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: "",
      fillProps: "value"
    };
    this.handleCtrlChange = (fillProps) => {
      this.setState({fillProps});
    };
    this.handleChange = (value) => {
      this.setState({value});
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      style: {marginBottom: 10}
    }, "fillProps:", /* @__PURE__ */ createElement(Radio.Group, {
      style: {marginLeft: 8},
      shape: "button",
      value: this.state.fillProps,
      onChange: this.handleCtrlChange
    }, /* @__PURE__ */ createElement(Radio, {
      value: "value"
    }, "value"), /* @__PURE__ */ createElement(Radio, {
      value: "label"
    }, "label"))), /* @__PURE__ */ createElement(AutoComplete$1, {
      value: this.state.value,
      fillProps: this.state.fillProps,
      style: {width: 300},
      onChange: this.handleChange,
      dataSource: dataSource$2
    }));
  }
}
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement(Demo$1, null));
}
const Style$4 = He.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
var s = 1e3;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;
var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === "string" && val.length > 0) {
    return parse(val);
  } else if (type === "number" && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
};
function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || "ms").toLowerCase();
  switch (type) {
    case "years":
    case "year":
    case "yrs":
    case "yr":
    case "y":
      return n * y;
    case "days":
    case "day":
    case "d":
      return n * d;
    case "hours":
    case "hour":
    case "hrs":
    case "hr":
    case "h":
      return n * h;
    case "minutes":
    case "minute":
    case "mins":
    case "min":
    case "m":
      return n * m;
    case "seconds":
    case "second":
    case "secs":
    case "sec":
    case "s":
      return n * s;
    case "milliseconds":
    case "millisecond":
    case "msecs":
    case "msec":
    case "ms":
      return n;
    default:
      return void 0;
  }
}
function fmtShort(ms2) {
  if (ms2 >= d) {
    return Math.round(ms2 / d) + "d";
  }
  if (ms2 >= h) {
    return Math.round(ms2 / h) + "h";
  }
  if (ms2 >= m) {
    return Math.round(ms2 / m) + "m";
  }
  if (ms2 >= s) {
    return Math.round(ms2 / s) + "s";
  }
  return ms2 + "ms";
}
function fmtLong(ms2) {
  return plural(ms2, d, "day") || plural(ms2, h, "hour") || plural(ms2, m, "minute") || plural(ms2, s, "second") || ms2 + " ms";
}
function plural(ms2, n, name) {
  if (ms2 < n) {
    return;
  }
  if (ms2 < n * 1.5) {
    return Math.floor(ms2 / n) + " " + name;
  }
  return Math.ceil(ms2 / n) + " " + name + "s";
}
var debug = createCommonjsModule(function(module, exports) {
  exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = ms;
  exports.names = [];
  exports.skips = [];
  exports.formatters = {};
  var prevTime;
  function selectColor(namespace) {
    var hash = 0, i;
    for (i in namespace) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0;
    }
    return exports.colors[Math.abs(hash) % exports.colors.length];
  }
  function createDebug(namespace) {
    function debug2() {
      if (!debug2.enabled)
        return;
      var self = debug2;
      var curr = +new Date();
      var ms2 = curr - (prevTime || curr);
      self.diff = ms2;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      args[0] = exports.coerce(args[0]);
      if (typeof args[0] !== "string") {
        args.unshift("%O");
      }
      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
        if (match === "%%")
          return match;
        index++;
        var formatter = exports.formatters[format];
        if (typeof formatter === "function") {
          var val = args[index];
          match = formatter.call(self, val);
          args.splice(index, 1);
          index--;
        }
        return match;
      });
      exports.formatArgs.call(self, args);
      var logFn = debug2.log || exports.log || console.log.bind(console);
      logFn.apply(self, args);
    }
    debug2.namespace = namespace;
    debug2.enabled = exports.enabled(namespace);
    debug2.useColors = exports.useColors();
    debug2.color = selectColor(namespace);
    if (typeof exports.init === "function") {
      exports.init(debug2);
    }
    return debug2;
  }
  function enable(namespaces) {
    exports.save(namespaces);
    exports.names = [];
    exports.skips = [];
    var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
    var len = split.length;
    for (var i = 0; i < len; i++) {
      if (!split[i])
        continue;
      namespaces = split[i].replace(/\*/g, ".*?");
      if (namespaces[0] === "-") {
        exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
      } else {
        exports.names.push(new RegExp("^" + namespaces + "$"));
      }
    }
  }
  function disable() {
    exports.enable("");
  }
  function enabled(name) {
    var i, len;
    for (i = 0, len = exports.skips.length; i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = exports.names.length; i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }
  function coerce(val) {
    if (val instanceof Error)
      return val.stack || val.message;
    return val;
  }
});
var browser = createCommonjsModule(function(module, exports) {
  exports = module.exports = debug;
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = typeof chrome != "undefined" && typeof chrome.storage != "undefined" ? chrome.storage.local : localstorage();
  exports.colors = [
    "lightseagreen",
    "forestgreen",
    "goldenrod",
    "dodgerblue",
    "darkorchid",
    "crimson"
  ];
  function useColors() {
    if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
      return true;
    }
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  exports.formatters.j = function(v) {
    try {
      return JSON.stringify(v);
    } catch (err) {
      return "[UnexpectedJSONParseError]: " + err.message;
    }
  };
  function formatArgs(args) {
    var useColors2 = this.useColors;
    args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
    if (!useColors2)
      return;
    var c = "color: " + this.color;
    args.splice(1, 0, c, "color: inherit");
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function(match) {
      if (match === "%%")
        return;
      index++;
      if (match === "%c") {
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
  }
  function log() {
    return typeof console === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }
  function save(namespaces) {
    try {
      if (namespaces == null) {
        exports.storage.removeItem("debug");
      } else {
        exports.storage.debug = namespaces;
      }
    } catch (e) {
    }
  }
  function load() {
    var r;
    try {
      r = exports.storage.debug;
    } catch (e) {
    }
    if (!r && typeof process !== "undefined" && "env" in process) {
      r = {}.DEBUG;
    }
    return r;
  }
  exports.enable(load());
  function localstorage() {
    try {
      return window.localStorage;
    } catch (e) {
    }
  }
});
var debug$1 = browser("jsonp");
var jsonp_1 = jsonp;
var count = 0;
function noop() {
}
function jsonp(url, opts, fn) {
  if (typeof opts == "function") {
    fn = opts;
    opts = {};
  }
  if (!opts)
    opts = {};
  var prefix = opts.prefix || "__jp";
  var id = opts.name || prefix + count++;
  var param = opts.param || "callback";
  var timeout = opts.timeout != null ? opts.timeout : 6e4;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName("script")[0] || document.head;
  var script;
  var timer;
  if (timeout) {
    timer = setTimeout(function() {
      cleanup();
      if (fn)
        fn(new Error("Timeout"));
    }, timeout);
  }
  function cleanup() {
    if (script.parentNode)
      script.parentNode.removeChild(script);
    window[id] = noop;
    if (timer)
      clearTimeout(timer);
  }
  function cancel() {
    if (window[id]) {
      cleanup();
    }
  }
  window[id] = function(data) {
    debug$1("jsonp got", data);
    cleanup();
    if (fn)
      fn(null, data);
  };
  url += (~url.indexOf("?") ? "&" : "?") + param + "=" + enc(id);
  url = url.replace("?&", "?");
  debug$1('jsonp req "%s"', url);
  script = document.createElement("script");
  script.src = url;
  target.parentNode.insertBefore(script, target);
  return cancel;
}
const {AutoComplete: AutoComplete$2} = Select;
class Demo$2 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      dataSource: []
    };
    this.handleChange = (value) => {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        jsonp_1(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`, (err, data) => {
          const dataSource3 = data.result.map((item) => item[0]);
          this.setState({dataSource: dataSource3});
        });
      }, 100);
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "demo-container"
    }, /* @__PURE__ */ createElement(AutoComplete$2, {
      filterLocal: false,
      placeholder: "search from taobao",
      onChange: this.handleChange,
      dataSource: this.state.dataSource
    }));
  }
}
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement(Demo$2, null));
}
const Style$5 = He.div`
  .demo-container {
    background-color: #f8f8f8;
    padding: 16px;
  }
`;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const {AutoComplete: AutoComplete$3} = Select;
class Demo$3 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      dataSource: []
    };
    this.handleChange = (value) => {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(() => {
        jsonp_1(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`, (err, data) => {
          const dataSource3 = data.result.map((item) => {
            return {
              label: /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextIcon, {
                type: "picture",
                size: "small"
              }), " ", item[0]),
              value: item[1],
              originLabel: item[0]
            };
          });
          this.setState({dataSource: dataSource3});
        });
      }, 100);
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "demo-container"
    }, /* @__PURE__ */ createElement(AutoComplete$3, {
      onChange: this.handleChange,
      filterLocal: false,
      fillProps: "originLabel",
      placeholder: "search from taobao",
      dataSource: this.state.dataSource
    }));
  }
}
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement(Demo$3, null));
}
const Style$6 = He.div`
  .next-select {
    margin-right: 10px;
    vertical-align: middle;
  }

  .demo-container {
    background-color: #f8f8f8;
    padding: 16px;
  }

  .demo-container p {
    margin-top: 0;
  }
`;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const dataSource$3 = [
  {value: "#FF0000", label: "red", title: "red"},
  {value: "#00AA00", label: "green", title: "green"},
  {value: "#B482DB", label: "purple", title: "purple"},
  {value: "#F17334", label: "orange", title: "orange"},
  {value: "#66CCFF", label: "blue", title: "blue"}
];
const itemRender = (item) => {
  return /* @__PURE__ */ createElement("span", null, /* @__PURE__ */ createElement(NextIcon, {
    type: "account",
    size: "xs",
    style: {color: item.value}
  }), /* @__PURE__ */ createElement(NextIcon, {
    type: "account",
    size: "xs",
    style: {color: item.value}
  }), /* @__PURE__ */ createElement(NextIcon, {
    type: "account",
    size: "xs",
    style: {color: item.value}
  }), /* @__PURE__ */ createElement(NextIcon, {
    type: "account",
    size: "xs",
    style: {color: item.value}
  }), /* @__PURE__ */ createElement(NextIcon, {
    type: "account",
    size: "xs",
    style: {color: item.value}
  }));
};
const valueRender = (item) => {
  return /* @__PURE__ */ createElement("span", null, /* @__PURE__ */ createElement(NextIcon, {
    type: "account",
    size: "xs",
    style: {color: item.value}
  }), " ", item.label);
};
const dataSource2 = [
  "Lorem ipsum dolor sit amet",
  "consectetur adipisicing elit",
  "sed do eiusmod tempor incididunt",
  "ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam",
  "quis nostrud exercitation",
  "ullamco laboris nisi ut",
  "aliquip ex ea commodo consequat",
  "Duis aute irure dolor in",
  "reprehenderit in voluptate",
  "velit esse cillum dolore eu",
  "Fugiat nulla pariatur excepteur sint",
  "occaecat cupidatat non proident",
  "sunt in culpa qui officia",
  "deserunt mollit anim id est laborum"
];
const itemRender2 = (item, searchKey) => {
  let label = item.label;
  if (searchKey && searchKey.length) {
    const key = searchKey.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
    const reg = new RegExp(`(${key})`, "ig");
    label = label.replace(reg, (x) => `<span class="next-select-highlight">${x}</span>`);
  }
  return /* @__PURE__ */ createElement("span", {
    dangerouslySetInnerHTML: {__html: label}
  });
};
function DemoComponent$7() {
  return /* @__PURE__ */ createElement(Style$7, null, /* @__PURE__ */ createElement("div", {
    className: "demo-container"
  }, /* @__PURE__ */ createElement(Select, {
    dataSource: dataSource$3,
    itemRender,
    valueRender,
    placeholder: "pick your color"
  }), /* @__PURE__ */ createElement(Select, {
    showSearch: true,
    dataSource: dataSource2,
    itemRender: itemRender2,
    placeholder: "highlight keywords",
    style: {minWidth: 200}
  })));
}
const Style$7 = He.div`
  .demo-container {
    padding: 16px;
    background-color: #f8f8f8;
  }

  .demo-container .next-select {
    margin-right: 10px;
  }
`;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
function preventDefault(e) {
  e.preventDefault();
}
class Menu extends Component {
  constructor() {
    super(...arguments);
    this.data = [
      {
        label: "value1",
        value: 1
      },
      {
        label: "value2",
        value: 2
      }
    ];
  }
  onClick(item) {
    this.props.onChange(item);
  }
  renderItems() {
    return this.data.map((item) => /* @__PURE__ */ createElement("li", {
      onClick: this.onClick.bind(this, item),
      key: item.value
    }, item.label));
  }
  render() {
    const {className, ...others} = this.props;
    const cls = classnames("overlay-content", className);
    return /* @__PURE__ */ createElement("ul", {
      className: cls,
      ...others
    }, this.renderItems());
  }
}
class Demo$4 extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = (value) => {
      this.setState({
        value,
        visible: false
      });
    };
    this.onVisibleChange = (visible) => {
      this.setState({
        visible
      });
    };
    this.state = {
      value: null
    };
  }
  render() {
    const popupContent = /* @__PURE__ */ createElement(Menu, {
      onChange: this.handleSelect,
      onMouseDown: preventDefault
    });
    const popupProps = {
      triggerClickKeycode: [13, 32, 40]
    };
    return /* @__PURE__ */ createElement("div", {
      className: "demo-container"
    }, /* @__PURE__ */ createElement(Select, {
      placeholder: "custom popupContent",
      visible: this.state.visible,
      onVisibleChange: this.onVisibleChange,
      value: this.state.value,
      popupProps,
      popupContent
    }));
  }
}
function DemoComponent$8() {
  return /* @__PURE__ */ createElement(Style$8, null, /* @__PURE__ */ createElement(Demo$4, null));
}
const Style$8 = He.div`
  .demo-container {
    background-color: #f8f8f8;
    padding: 16px;
  }

  .demo-container p {
    margin-top: 0;
  }

  .overlay-content {
    border: 1px solid #dddddd;
    padding: 10px;
    background: #ffffff;
    margin: 0;
    font-size: 12px;
    font-family: Arial;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }

  .overlay-content li {
    list-style: none;
    line-height: 30px;
    padding: 0 5px;
    cursor: pointer;
  }

  .overlay-content li:hover {
    background: #f8f8f8;
  }

  .overlay-content li:last-child {
    border-width: 0;
  }
`;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
const {Tooltip} = NextBalloon;
const dataSource$4 = [
  {value: "10001", label: "Lucy King"},
  {value: 10002, label: "Lily King"},
  {value: 10003, label: "Tom Cat", disabled: true},
  {
    label: "Special Group",
    children: [
      {value: -1, label: "FALSE"},
      {value: 0, label: "ZERO"}
    ]
  }
];
function handleChange(value) {
  console.log(value);
}
const maxTagPlaceholder = (selectedValues, totalValues) => {
  const trigger = /* @__PURE__ */ createElement("span", null, `${selectedValues.length}/${totalValues.length}`);
  const labels = selectedValues.map((obj) => obj.label);
  return /* @__PURE__ */ createElement(Tooltip, {
    trigger
  }, labels.join(", "));
};
function DemoComponent$9() {
  return /* @__PURE__ */ createElement(Style$9, null, /* @__PURE__ */ createElement("div", null, "hasSelectAll:", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Select, {
    hasSelectAll: true,
    mode: "multiple",
    onChange: handleChange,
    dataSource: dataSource$4,
    style: {width: 200}
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), "maxTagCount=2", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Select, {
    maxTagCount: 2,
    defaultValue: ["10001", "10002", "-1"],
    mode: "multiple",
    onChange: handleChange,
    dataSource: dataSource$4,
    style: {width: 200}
  }), " ", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), "maxTagPlaceholder", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Select, {
    maxTagCount: 2,
    maxTagPlaceholder,
    defaultValue: ["10001", "10002", "-1"],
    mode: "multiple",
    onChange: handleChange,
    dataSource: dataSource$4,
    style: {width: 200}
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), "tagInline ", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Select, {
    maxTagCount: 2,
    tagInline: true,
    mode: "multiple",
    defaultValue: ["10001", "10002", "-1"],
    onChange: handleChange,
    dataSource: dataSource$4,
    style: {width: 200}
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), "maxTagPlaceholder", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Select, {
    maxTagCount: 2,
    tagInline: true,
    maxTagPlaceholder,
    defaultValue: ["10001", "10002", "-1"],
    mode: "multiple",
    onChange: handleChange,
    dataSource: dataSource$4,
    style: {width: 200}
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null)));
}
const Style$9 = He.div``;
var m9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$9
});
const dataSource$5 = [
  {value: "10001", label: "Lucy King"},
  {value: 10002, label: "Lily King"},
  {value: 10003, label: "Tom Cat", disabled: true},
  {
    label: "Special Group",
    children: [
      {value: -1, label: "FALSE"},
      {value: 0, label: "ZERO"}
    ]
  }
];
function handleChange$1(value) {
  console.log(value);
}
function DemoComponent$a() {
  return /* @__PURE__ */ createElement(Style$a, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Select, {
    mode: "multiple",
    showSearch: true,
    defaultValue: ["10001"],
    onChange: handleChange$1,
    dataSource: dataSource$5,
    style: {width: 300}
  })));
}
const Style$a = He.div``;
var m10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$a
});
const dataSource$6 = [
  {value: "10001", label: "Lucy King"},
  {value: 10002, label: "Lily King"},
  {value: 10003, label: "Tom Cat", disabled: true},
  {
    label: "Special Group",
    children: [
      {value: -1, label: "FALSE"},
      {value: 0, label: "ZERO"}
    ]
  }
];
const ctrlDataSources$1 = {
  mode: ["single", "multiple", "tag"],
  size: ["small", "medium", "large"],
  showSearch: [true, false],
  hasArrow: [true, false],
  hasBorder: [true, false],
  hasClear: [true, false]
};
class Demo$5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      size: void 0,
      mode: void 0,
      hasArrow: void 0,
      hasBorder: void 0,
      showSearch: void 0,
      hasClear: void 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCtrlChange = this.handleCtrlChange.bind(this);
  }
  handleCtrlChange(key, value) {
    this.setState({[key]: value});
    if (key === "mode") {
      this.setState({value: null});
    }
  }
  handleChange(value, item) {
    console.log("handleChange: value: ", value, item);
    this.setState({value});
  }
  renderCtrlNodes(state) {
    const ctrlNodes = [];
    let k;
    for (k in ctrlDataSources$1) {
      if (ctrlDataSources$1.hasOwnProperty(k)) {
        ctrlNodes.push(/* @__PURE__ */ createElement(Select, {
          key: k,
          label: `${k}: `,
          value: state[k],
          id: k,
          dataSource: ctrlDataSources$1[k],
          onChange: this.handleCtrlChange.bind(this, k)
        }));
      }
    }
    return ctrlNodes;
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "demo-container"
    }, /* @__PURE__ */ createElement("div", {
      className: "demo-controller"
    }, this.renderCtrlNodes(this.state)), /* @__PURE__ */ createElement(Select, {
      ...this.state,
      onChange: this.handleChange,
      dataSource: dataSource$6
    }));
  }
}
function DemoComponent$b() {
  return /* @__PURE__ */ createElement(Style$b, null, /* @__PURE__ */ createElement(Demo$5, null));
}
const Style$b = He.div`
  .demo-container {
    padding: 16px;
    background-color: #f8f8f8;
  }

  .demo-controller {
    padding: 12px 12px 4px;
    margin-bottom: 16px;
    border: 2px dashed #ddd;
  }

  .next-select {
    margin-right: 8px;
    margin-bottom: 8px;
  }
`;
var m11 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$b
});
const provinceData = ["Zhejiang", "Hubei", "Jiangsu"];
const cityData = {
  Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
  Hubei: ["Wuhan", "Yichang", "Jingzhou"],
  Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"]
};
class Demo$6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      disabled: true
    };
    this.handleProvinceChange = this.handleProvinceChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }
  handleProvinceChange(value) {
    const data = cityData[value];
    this.setState({data, province: value, city: "", disabled: !data});
  }
  handleCityChange(value) {
    this.setState({city: value});
    console.log(this.state.province, value);
  }
  render() {
    const {data, disabled, province, city} = this.state;
    return /* @__PURE__ */ createElement("div", {
      className: "demo-container"
    }, /* @__PURE__ */ createElement(Select, {
      placeholder: "Select Province",
      dataSource: provinceData,
      value: province,
      onChange: this.handleProvinceChange
    }), /* @__PURE__ */ createElement(Select, {
      placeholder: "Select City",
      dataSource: data,
      value: city,
      onChange: this.handleCityChange,
      disabled
    }));
  }
}
function DemoComponent$c() {
  return /* @__PURE__ */ createElement(Style$c, null, /* @__PURE__ */ createElement(Demo$6, null));
}
const Style$c = He.div`
  .next-select {
    margin-right: 10px;
  }

  .demo-container {
    background-color: #f8f8f8;
    padding: 16px;
  }
`;
var m12 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$c
});
const Option$2 = Select.Option;
const dataSource$7 = [
  {value: "10001", label: "Lucy King"},
  {value: 10002, label: "Lily King"},
  {value: 10003, label: "Tom Cat", disabled: true}
];
const generateData = (base, total) => {
  const arr = [];
  for (let i = 0; i < total; i++) {
    arr.push(`extra-${base + i}`);
  }
  return arr;
};
class App$1 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      dataSource: dataSource$7
    };
    this.loadMore = () => {
      const ds = this.state.dataSource;
      this.setState({
        dataSource: [...ds, ...generateData(ds.length, 5)]
      });
    };
  }
  render() {
    const menuProps = {
      focusable: false,
      header: /* @__PURE__ */ createElement("div", {
        style: {padding: "0 4px", textAlign: "center"}
      }, /* @__PURE__ */ createElement("div", {
        style: {paddingBottom: 4}
      }, /* @__PURE__ */ createElement(NextInput, {
        style: {width: "100%"},
        ref: (ref) => this.inputRef = ref,
        onClick: (e) => console.log(/onclick/),
        onMouseDown: (e) => {
          console.log(/onMouseDown/);
          this.inputRef.focus();
        }
      })), /* @__PURE__ */ createElement(NextDivider, {
        style: {marginTop: 0, marginBottom: 4}
      })),
      footer: /* @__PURE__ */ createElement("div", {
        style: {padding: "0 4px", textAlign: "center"}
      }, /* @__PURE__ */ createElement(NextDivider, {
        style: {marginBottom: 0, marginTop: 4}
      }), /* @__PURE__ */ createElement(exported, {
        text: true,
        type: "primary",
        onClick: this.loadMore
      }, "Load More..."))
    };
    return /* @__PURE__ */ createElement(Select, {
      hasSelectAll: true,
      mode: "multiple",
      dataSource: this.state.dataSource,
      style: {width: 200},
      menuProps,
      popupAutoFocus: true
    });
  }
}
function DemoComponent$d() {
  return /* @__PURE__ */ createElement(Style$d, null, /* @__PURE__ */ createElement(App$1, null));
}
const Style$d = He.div``;
var m13 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$d
});
const dataSource$8 = [
  {value: "Lilith", age: 22, gender: "F"},
  {value: "Tom Cat", age: 28, gender: "M"},
  {value: "Jim Green", age: 18, gender: "M"},
  {value: "Monkey King", age: 999, gender: "M"}
];
const handleChange$2 = (value) => {
  console.log("handleChange: ", value);
};
const valueRender$1 = (v) => {
  return `${v.value} / ${v.gender} / ${v.age}`;
};
function DemoComponent$e() {
  return /* @__PURE__ */ createElement(Style$e, null, /* @__PURE__ */ createElement(Select, {
    mode: "multiple",
    placeholder: "custom value",
    valueRender: valueRender$1,
    dataSource: dataSource$8,
    onChange: handleChange$2
  }));
}
const Style$e = He.div``;
var m14 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$e
});
const dataSource$9 = [
  {label: "1", value: 1},
  {label: "10", value: 10},
  {label: "50", value: 50},
  {label: "100", value: 100}
];
const handleChange$3 = (value) => {
  console.log("handleChange: ", value);
};
function DemoComponent$f() {
  return /* @__PURE__ */ createElement(Style$f, null, /* @__PURE__ */ createElement(Select, {
    label: "size:",
    innerAfter: /* @__PURE__ */ createElement("span", {
      style: {color: "#999", marginRight: 4}
    }, "GB"),
    dataSource: dataSource$9,
    onChange: handleChange$3
  }));
}
const Style$f = He.div``;
var m15 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$f
});
const {Option: Option$3, OptionGroup} = Select;
const dataSource$a = [
  {
    label: "label1",
    children: [
      {
        label: "label1-1",
        value: "text1-1"
      }
    ]
  },
  {
    label: "label2",
    children: [
      {
        label: "label2-1",
        value: "text2-1"
      }
    ]
  }
];
function DemoComponent$g() {
  return /* @__PURE__ */ createElement(Style$g, null, /* @__PURE__ */ createElement("div", {
    className: "demo-container"
  }, /* @__PURE__ */ createElement(Select, {
    placeholder: "OptionGroup"
  }, /* @__PURE__ */ createElement(OptionGroup, {
    label: "group1"
  }, /* @__PURE__ */ createElement(Option$3, {
    value: "small"
  }, "Small"), /* @__PURE__ */ createElement(Option$3, {
    value: "medium"
  }, "Medium"), /* @__PURE__ */ createElement(Option$3, {
    value: "large"
  }, "Large")), /* @__PURE__ */ createElement(OptionGroup, {
    label: "group2"
  }, /* @__PURE__ */ createElement(Option$3, {
    value: "small2"
  }, "Small2"), /* @__PURE__ */ createElement(Option$3, {
    value: "medium2"
  }, "Medium2"), /* @__PURE__ */ createElement(Option$3, {
    value: "large2"
  }, "Large2"))), /* @__PURE__ */ createElement(Select, {
    placeholder: "optgroup"
  }, /* @__PURE__ */ createElement("option", {
    value: "apple"
  }, "Apple"), /* @__PURE__ */ createElement("option", {
    value: "orange"
  }, "Orange"), /* @__PURE__ */ createElement("option", {
    value: "banana"
  }, "Banana"), /* @__PURE__ */ createElement("optgroup", {
    label: "Pets Group"
  }, /* @__PURE__ */ createElement("option", {
    value: "cat"
  }, "Cat"), /* @__PURE__ */ createElement("option", {
    value: "rabbit"
  }, "Rabbit"), /* @__PURE__ */ createElement("option", {
    value: "dog",
    disabled: true
  }, "Dog"))), /* @__PURE__ */ createElement(Select, {
    placeholder: "item.children",
    dataSource: dataSource$a
  })));
}
const Style$g = He.div`
  .next-select {
    margin-right: 10px;
  }

  .demo-container {
    background-color: #f8f8f8;
    padding: 16px;
  }
`;
var m16 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$g
});
const Option$4 = Select.Option;
function generateItem(start, end) {
  const arr = [];
  for (let i = start; i < end; i++) {
    arr.push({label: `option${i}`, value: `option${i}`});
  }
  return arr;
}
class App$2 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      dataSource: generateItem(0, 10)
    };
    this.onScroll = (e) => {
      const scrollHeight = e.target.scrollHeight;
      const clientHeight = e.target.clientHeight;
      const scrollTop = e.target.scrollTop;
      console.log(scrollTop, clientHeight, scrollHeight);
      if (scrollTop + clientHeight === scrollHeight) {
        const dataSource3 = this.state.dataSource;
        const otherData = generateItem(dataSource3.length, dataSource3.length + 10);
        console.log(dataSource3, otherData);
        this.setState({
          dataSource: dataSource3.concat(otherData)
        });
      }
    };
  }
  render() {
    return /* @__PURE__ */ createElement(Select, {
      style: {width: 200},
      dataSource: this.state.dataSource,
      menuProps: {onScroll: this.onScroll},
      autoHighlightFirstItem: false
    });
  }
}
function DemoComponent$h() {
  return /* @__PURE__ */ createElement(Style$h, null, /* @__PURE__ */ createElement(App$2, null));
}
const Style$h = He.div``;
var m17 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$h
});
let timestamp = Date.now();
class Demo$7 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      dataSource: []
    };
    this.handleSearch = (value) => {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(() => {
        value ? jsonp_1(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`, (err, data) => {
          const dataSource3 = data.result.map((item) => ({
            label: item[0],
            value: (timestamp++).toString(36)
          }));
          this.setState({dataSource: dataSource3});
        }) : this.setState({dataSource: []});
      }, 100);
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "demo-container"
    }, /* @__PURE__ */ createElement(Select, {
      showSearch: true,
      placeholder: "select search",
      filterLocal: false,
      dataSource: this.state.dataSource,
      onSearch: this.handleSearch,
      style: {width: 200}
    }));
  }
}
function DemoComponent$i() {
  return /* @__PURE__ */ createElement(Style$i, null, /* @__PURE__ */ createElement(Demo$7, null));
}
const Style$i = He.div``;
var m18 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$i
});
const dataSource$b = [
  {value: "10001", label: "Lucy King"},
  {value: 10002, label: "Lily King"},
  {value: 10003, label: "Tom Cat", disabled: true},
  {
    label: "Special Group",
    children: [
      {value: -1, label: "FALSE"},
      {value: 0, label: "ZERO"}
    ]
  }
];
function handleChange$4(value) {
  console.log(value);
}
function DemoComponent$j() {
  return /* @__PURE__ */ createElement(Style$j, null, /* @__PURE__ */ createElement(Select, {
    "aria-label": "tag mode",
    mode: "tag",
    defaultValue: ["10001"],
    onChange: handleChange$4,
    dataSource: dataSource$b,
    style: {width: 300}
  }));
}
const Style$j = He.div``;
var m19 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$j
});
const dataSource$c = [
  {value: "10001", label: "Lucy King"},
  {value: 10002, label: "Lily King"},
  {value: 10003, label: "Tom Cat", disabled: true},
  {
    label: "Special Group",
    children: [
      {value: new Date(), label: "new Date()"},
      {value: false, label: "FALSE"},
      {value: 0, label: "ZERO"}
    ]
  }
];
function handleChange$5(value) {
  console.log(value);
}
function DemoComponent$k() {
  return /* @__PURE__ */ createElement(Style$k, null, /* @__PURE__ */ createElement(Select, {
    useDetailValue: true,
    defaultValue: {value: "10001", label: "Lucy King"},
    onChange: handleChange$5,
    dataSource: dataSource$c,
    style: {width: 150}
  }));
}
const Style$k = He.div``;
var m20 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$k
});
const Option$5 = Select.Option;
const onChange$2 = function(value) {
  console.log(value);
};
function generateItem$1(index) {
  return {label: `option${index}`, value: `option${index}`};
}
function generateOption(index) {
  return /* @__PURE__ */ createElement(Option$5, {
    key: `option${index}`,
    value: `option${index}`
  }, `option${index}`);
}
function generateData$1(len, isOption) {
  const data = [];
  for (let i = 0; i < len; i++) {
    isOption ? data.push(generateOption(i)) : data.push(generateItem$1(i));
  }
  return data;
}
function DemoComponent$l() {
  return /* @__PURE__ */ createElement(Style$l, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Select, {
    dataSource: generateData$1(100),
    useVirtual: true,
    onChange: onChange$2,
    defaultValue: "option0"
  }), "    ", /* @__PURE__ */ createElement(Select, {
    useVirtual: true,
    onChange: onChange$2,
    defaultValue: "option50"
  }, generateData$1(100, true)), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Select, {
    style: {width: 300},
    hasSelectAll: true,
    tagInline: true,
    mode: "multiple",
    dataSource: generateData$1(100),
    useVirtual: true,
    onChange: onChange$2,
    defaultValue: ["option0"]
  })));
}
const Style$l = He.div``;
var m21 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$l
});
const modules = {};
modules["_accessibility"] = m0;
modules["_basic"] = m1;
modules["_combobox"] = m2;
modules["_combobox-basic"] = m3;
modules["_combobox-fillprops"] = m4;
modules["_combobox-remote"] = m5;
modules["_combobox-rich-text"] = m6;
modules["_customize-menu"] = m7;
modules["_customize-overlay"] = m8;
modules["_max-count"] = m9;
modules["_multiple"] = m10;
modules["_select-basic"] = m11;
modules["_select-cascader"] = m12;
modules["_select-custom-menu"] = m13;
modules["_select-custom-value"] = m14;
modules["_select-label"] = m15;
modules["_select-options-group"] = m16;
modules["_select-scroll-load"] = m17;
modules["_select-search"] = m18;
modules["_tag"] = m19;
modules["_use-detail-value"] = m20;
modules["_virtual-select"] = m21;
export default modules;
