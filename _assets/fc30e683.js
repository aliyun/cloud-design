import {c as createElement, C as Component} from "./index.c1c37145.js";
import "./01ac0d7e.js";
import {P as Pagination} from "./cff1bb2d.js";
import {H as He} from "./1c117732.js";
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 2
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(current) {
    this.setState({
      current
    });
  }
  render() {
    return /* @__PURE__ */ createElement(Pagination, {
      current: this.state.current,
      onChange: this.handleChange
    });
  }
}
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement(Demo, null));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const handlePageSizeChange = (size) => console.log(size);
const containerStyle = {
  height: "300px",
  padding: 0,
  width: "100%"
};
const boxStyle = {
  overflow: "auto",
  position: "relative",
  width: "100%",
  height: "200px",
  border: "1px solid black"
};
const tempStyle = {
  height: "200px",
  display: "flex",
  "justify-content": "center",
  "align-items": "center"
};
const parentStyle = {
  display: "flex",
  "justify-content": "space-between"
};
const popupProps = {
  align: "bl tl"
};
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "default align - 'tl bl'"), /* @__PURE__ */ createElement(Pagination, {
    pageSizeSelector: "dropdown",
    total: "10",
    pageSizePosition: "start",
    onPageSizeChange: handlePageSizeChange
  }), /* @__PURE__ */ createElement("h3", null, "custom align - 'bl tl'"), /* @__PURE__ */ createElement(Pagination, {
    pageSizeSelector: "dropdown",
    total: "10",
    pageSizePosition: "start",
    onPageSizeChange: handlePageSizeChange,
    popupProps
  }), /* @__PURE__ */ createElement("h3", null, 'Inside parent with "overlflow: auto"'), /* @__PURE__ */ createElement("div", {
    style: containerStyle
  }, /* @__PURE__ */ createElement("div", {
    style: boxStyle
  }, /* @__PURE__ */ createElement("div", {
    style: tempStyle
  }, "scroll down to see the example"), /* @__PURE__ */ createElement("div", {
    style: parentStyle
  }, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "default align - 'tl bl'"), /* @__PURE__ */ createElement(Pagination, {
    pageSizeSelector: "dropdown",
    total: "10",
    pageSizePosition: "start",
    onPageSizeChange: handlePageSizeChange
  })), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "custom align - 'bl tl'"), /* @__PURE__ */ createElement(Pagination, {
    pageSizeSelector: "dropdown",
    total: "10",
    pageSizePosition: "start",
    onPageSizeChange: handlePageSizeChange,
    popupProps
  })))))));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const format = `${window.location.href}#/{page}`;
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    link: format
  }));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const handlePageSizeChange$1 = (size) => console.log(size);
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "To hidden per page size selector"), /* @__PURE__ */ createElement(Pagination, {
    pageSizeSelector: false
  }), /* @__PURE__ */ createElement("h3", null, "Type per page size selector of is dropdown，and as for the tail of the entire component"), /* @__PURE__ */ createElement(Pagination, {
    pageSizeSelector: "dropdown",
    pageSizePosition: "end",
    onPageSizeChange: handlePageSizeChange$1
  }), /* @__PURE__ */ createElement("h3", null, "Filter type per page size selector, and use floating layout"), /* @__PURE__ */ createElement(Pagination, {
    pageSizeSelector: "filter",
    onPageSizeChange: handlePageSizeChange$1,
    useFloatLayout: true
  })));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "normal"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2
  }), /* @__PURE__ */ createElement("h3", null, "arrow-only"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    shape: "arrow-only"
  }), /* @__PURE__ */ createElement("h3", null, "arrow-prev-only"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    shape: "arrow-prev-only"
  }), /* @__PURE__ */ createElement("h3", null, "no-border"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    shape: "no-border",
    type: "simple"
  })));
}
const Style$4 = He.div`
  .next-pagination + .next-pagination {
    margin-top: 20px;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const total = 50;
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement(Pagination, {
    className: "custom-pagination",
    total,
    totalRender: (total2) => `Total: ${total2}`
  }));
}
const Style$5 = He.div`
  .custom-pagination {
    display: inline-block;
    margin-left: 10px;
  }
`;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "small"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    size: "small"
  }), /* @__PURE__ */ createElement("h3", null, "medium"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    size: "medium"
  }), /* @__PURE__ */ createElement("h3", null, "large"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    size: "large"
  })));
}
const Style$6 = He.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
function DemoComponent$7() {
  return /* @__PURE__ */ createElement(Style$7, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h3", null, "normal"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2
  }), /* @__PURE__ */ createElement("h3", null, "simple"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    type: "simple"
  }), /* @__PURE__ */ createElement("h3", null, "mini"), /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    type: "mini"
  })));
}
const Style$7 = He.div``;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
const change = function(value) {
  console.log(value);
};
function DemoComponent$8() {
  return /* @__PURE__ */ createElement(Style$8, null, /* @__PURE__ */ createElement(Pagination, {
    defaultCurrent: 2,
    onChange: change
  }));
}
const Style$8 = He.div``;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
const modules = {};
modules["_control"] = m0;
modules["_dropdown-direction"] = m1;
modules["_link"] = m2;
modules["_page-size"] = m3;
modules["_shape"] = m4;
modules["_show-total"] = m5;
modules["_size"] = m6;
modules["_type"] = m7;
modules["_uncontrol"] = m8;
export default modules;
