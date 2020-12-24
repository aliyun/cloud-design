import {c as createElement, M as NextVirtualList, C as Component} from "./index.e8c3f862.js";
import {q as qe} from "./dd68b5ed.js";
const dataSource = [];
const generateLi = (index = "index") => {
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
};
for (let i = 0; i < 1e3; i++) {
  dataSource.push(generateLi(i));
}
const demo = /* @__PURE__ */ createElement("div", {
  className: "virtual-box"
}, /* @__PURE__ */ createElement(NextVirtualList, null, dataSource));
function DemoComponent() {
  const content = demo;
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div`
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
const dataSource$1 = [];
function generateLi$1(index) {
  return /* @__PURE__ */ createElement("li", {
    key: `key-${index}`,
    style: {lineHeight: "20px"}
  }, "key-", index);
}
function generateData(len) {
  for (let i = 0; i < len; i++) {
    dataSource$1.push(generateLi$1(i));
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
    }, dataSource$1)));
  }
}
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement(App, null);
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div`
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
const dataSource$2 = [];
function generateLi$2(index) {
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
    dataSource$2.push(generateLi$2(i));
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
    }, dataSource$2)));
  }
}
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement(App$1, null);
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div`
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
