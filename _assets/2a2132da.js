import {c as createElement, C as Component, B as Radio} from "./index.0806c9c7.js";
import "./15bd0f82.js";
import {N as NextResponsiveGrid} from "./c3056010.js";
import {q as qe} from "./471d6f67.js";
const {Cell} = NextResponsiveGrid;
const ds = ["desktop", "tablet", "phone"];
class Demo extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      device: "desktop"
    };
    this.onChange = (device) => {
      this.setState({
        device
      });
    };
  }
  render() {
    const {device} = this.state;
    return /* @__PURE__ */ createElement("div", {
      className: "list"
    }, /* @__PURE__ */ createElement(Radio.Group, {
      shape: "button",
      onChange: this.onChange,
      dataSource: ds,
      defaultValue: "desktop"
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("div", {
      className: `list-item ${device}`
    }, /* @__PURE__ */ createElement(NextResponsiveGrid, {
      gap: 10,
      device
    }, /* @__PURE__ */ createElement(Cell, {
      className: "mygrid grid-12",
      colSpan: 12
    }, "12"), /* @__PURE__ */ createElement(Cell, {
      className: "mygrid grid-6",
      colSpan: 6
    }, "6"), /* @__PURE__ */ createElement(Cell, {
      className: "mygrid grid-6",
      colSpan: 6
    }, "6"), /* @__PURE__ */ createElement(Cell, {
      className: "mygrid grid-4",
      colSpan: 4
    }, "4"), /* @__PURE__ */ createElement(Cell, {
      className: "mygrid grid-4",
      colSpan: 4
    }, "4"), /* @__PURE__ */ createElement(Cell, {
      className: "mygrid grid-4",
      colSpan: 4
    }, "4"), /* @__PURE__ */ createElement(Cell, {
      className: "mygrid grid-3",
      colSpan: 3
    }, "3"), /* @__PURE__ */ createElement(Cell, {
      className: "mygrid grid-3",
      colSpan: 3
    }, "3"), /* @__PURE__ */ createElement(Cell, {
      className: "mygrid grid-3",
      colSpan: 3
    }, "3"), /* @__PURE__ */ createElement(Cell, {
      className: "mygrid grid-3",
      colSpan: 3
    }, "3"))));
  }
}
function DemoComponent() {
  const content = /* @__PURE__ */ createElement(Demo, null);
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div`
  .list {
    position: relative;
  }
  .list-item {
    position: relative;
    background: #ddd;
    border: 1px solid #eee;
    margin-bottom: 20px;
  }
  .phone {
    width: 30%;
  }
  .tablet {
    width: 60%;
  }
  .child {
    width: 100%;
    height: 100%;
    background: 'red';
  }
  .mygrid {
    display: block;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .grid-12 {
    background: red;
  }
  .grid-6 {
    background: purple;
  }
  .grid-4 {
    background: orange;
  }
  .grid-3 {
    background: green;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const modules = {};
modules["_basic"] = m0;
export default modules;
