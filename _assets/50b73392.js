import {c as createElement, C as Component, M as NextVirtualList} from "./index.e4cec8f0.js";
import {H as He} from "./ad0376ff.js";
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, "demo");
}
const Style = He.div`
  .virtual-box {
    height: 200px;
    width: 200px;
    border: 1px solid #ddd;
    overflow: auto;
  }
  .virtual-box ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .virtual-box li {
    padding-left: 10px;
    border-bottom: 1px solid #333;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const dataSource = [];
function generateLi(index) {
  return /* @__PURE__ */ createElement("li", {
    key: `key-${index}`,
    style: {lineHeight: "20px"}
  }, "key-", index);
}
function generateData(len) {
  for (let i = 0; i < len; i++) {
    dataSource.push(generateLi(i));
  }
}
class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      initial: 50,
      dataSource: generateData(1e3)
    };
  }
  onClick() {
    this.setState({
      initial: this.state.initial + 20
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("button", {
      onClick: this.onClick.bind(this)
    }, "jump to ", this.state.initial + 20), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("div", {
      className: "virtual-box"
    }, /* @__PURE__ */ createElement(NextVirtualList, {
      ref: "virtual",
      jumpIndex: this.state.initial
    }, dataSource)));
  }
}
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(App, null));
}
const Style$1 = He.div`
  .virtual-box {
    height: 200px;
    width: 200px;
    border: 1px solid #ddd;
    overflow: auto;
  }
  .virtual-box ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .virtual-box li {
    padding-left: 10px;
    border-bottom: 1px solid #333;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const dataSource$1 = [];
function generateLi$1(index) {
  if (index % 3 === 0) {
    return /* @__PURE__ */ createElement("li", {
      key: `key-${index}`,
      style: {lineHeight: "30px", background: "#5f83ff", color: "#fff"}
    }, "key-", index);
  } else {
    return /* @__PURE__ */ createElement("li", {
      key: `key-${index}`,
      style: {lineHeight: "20px"}
    }, "key-", index);
  }
}
function generateData$1(len) {
  for (let i = 0; i < len; i++) {
    dataSource$1.push(generateLi$1(i));
  }
}
class App$1 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      initial: 20,
      dataSource: generateData$1(1e3)
    };
  }
  componentDidMount() {
    setTimeout(() => {
      const instance = this.refs.virtual.getInstance();
      instance.scrollTo(50);
    }, 200);
  }
  getHeight(index) {
    return index % 3 === 0 ? 30 : 20;
  }
  onClick() {
    this.setState({
      initial: this.state.initial + 20
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("button", {
      onClick: this.onClick.bind(this)
    }, "jump to ", this.state.initial + 20), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("div", {
      className: "virtual-box"
    }, /* @__PURE__ */ createElement(NextVirtualList, {
      ref: "virtual",
      jumpIndex: this.state.initial,
      itemSizeGetter: this.getHeight.bind(this)
    }, dataSource$1)));
  }
}
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(App$1, null));
}
const Style$2 = He.div`
  .virtual-box {
    height: 200px;
    width: 200px;
    border: 1px solid #ddd;
    overflow: auto;
  }
  .virtual-box ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .virtual-box li {
    padding-left: 10px;
    border-bottom: 1px solid #333;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const modules = {};
modules["_basic"] = m0;
modules["_initial-index"] = m1;
modules["_item-size-getter"] = m2;
export default modules;
