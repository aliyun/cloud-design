import {c as createElement, C as Component, f as findDOMNode} from "./index.0806c9c7.js";
import "./96c6ddcf.js";
import {G as Grid} from "./5d32160e.js";
import {R as Range} from "./e79f37b0.js";
import {q as qe} from "./471d6f67.js";
const {Row, Col} = Grid;
function DemoComponent() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "align-demo"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "top"), /* @__PURE__ */ createElement(Row, {
    align: "top"
  }, /* @__PURE__ */ createElement(Col, {
    span: "8",
    style: {height: "100px", lineHeight: "100px"}
  }, "col-8"), /* @__PURE__ */ createElement(Col, {
    span: "8",
    style: {height: "50px", lineHeight: "50px"}
  }, "col-8"), /* @__PURE__ */ createElement(Col, {
    span: "8",
    style: {height: "150px", lineHeight: "150px"}
  }, "col-8")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "center"), /* @__PURE__ */ createElement(Row, {
    align: "center"
  }, /* @__PURE__ */ createElement(Col, {
    span: "8",
    style: {height: "100px", lineHeight: "100px"}
  }, "col-8"), /* @__PURE__ */ createElement(Col, {
    span: "8",
    style: {height: "50px", lineHeight: "50px"}
  }, "col-8"), /* @__PURE__ */ createElement(Col, {
    span: "8",
    style: {height: "150px", lineHeight: "150px"}
  }, "col-8")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "bottom"), /* @__PURE__ */ createElement(Row, {
    align: "bottom"
  }, /* @__PURE__ */ createElement(Col, {
    span: "8",
    style: {height: "100px", lineHeight: "100px"}
  }, "col-8"), /* @__PURE__ */ createElement(Col, {
    span: "8",
    style: {height: "50px", lineHeight: "50px"}
  }, "col-8"), /* @__PURE__ */ createElement(Col, {
    span: "8",
    style: {height: "150px", lineHeight: "150px"}
  }, "col-8")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "baseline"), /* @__PURE__ */ createElement(Row, {
    align: "baseline"
  }, /* @__PURE__ */ createElement(Col, {
    span: "8",
    style: {height: "100px", paddingTop: "20px", fontSize: "30px"}
  }, "col-8"), /* @__PURE__ */ createElement(Col, {
    span: "8",
    style: {height: "50px", paddingTop: "20px", fontSize: "20px"}
  }, "col-8"), /* @__PURE__ */ createElement(Col, {
    span: "8",
    style: {height: "150px", paddingTop: "20px", fontSize: "40px"}
  }, "col-8")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "stretch"), /* @__PURE__ */ createElement(Row, {
    align: "stretch",
    style: {height: "150px"}
  }, /* @__PURE__ */ createElement(Col, {
    span: "8"
  }, "col-8"), /* @__PURE__ */ createElement(Col, {
    span: "8"
  }, "col-8"), /* @__PURE__ */ createElement(Col, {
    span: "8"
  }, "col-8")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "override"), /* @__PURE__ */ createElement(Row, {
    align: "top"
  }, /* @__PURE__ */ createElement(Col, {
    align: "bottom",
    span: "8",
    style: {height: "100px", lineHeight: "100px"}
  }, "col-8"), /* @__PURE__ */ createElement(Col, {
    span: "8",
    style: {height: "50px", lineHeight: "50px"}
  }, "col-8"), /* @__PURE__ */ createElement(Col, {
    span: "8",
    style: {height: "150px", lineHeight: "150px"}
  }, "col-8")));
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div`
  .align-demo .demo-title {
    margin-left: 20px;
  }

  .align-demo .next-row {
    margin: 10px 0;
  }

  .align-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    line-height: 30px;
    text-align: center;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const {Row: Row$1, Col: Col$1} = Grid;
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "basic-demo"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "One"), /* @__PURE__ */ createElement(Row$1, null, /* @__PURE__ */ createElement(Col$1, {
    span: "24"
  }, "col-24")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "Two"), /* @__PURE__ */ createElement(Row$1, null, /* @__PURE__ */ createElement(Col$1, {
    span: "12"
  }, "col-12"), /* @__PURE__ */ createElement(Col$1, {
    span: "12"
  }, "col-12")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "Three"), /* @__PURE__ */ createElement(Row$1, null, /* @__PURE__ */ createElement(Col$1, {
    span: "8"
  }, "col-8"), /* @__PURE__ */ createElement(Col$1, {
    span: "8"
  }, "col-8"), /* @__PURE__ */ createElement(Col$1, {
    span: "8"
  }, "col-8")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "Four"), /* @__PURE__ */ createElement(Row$1, null, /* @__PURE__ */ createElement(Col$1, {
    span: "6"
  }, "col-6"), /* @__PURE__ */ createElement(Col$1, {
    span: "6"
  }, "col-6"), /* @__PURE__ */ createElement(Col$1, {
    span: "6"
  }, "col-6"), /* @__PURE__ */ createElement(Col$1, {
    span: "6"
  }, "col-6")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "Five"), /* @__PURE__ */ createElement(Row$1, null, /* @__PURE__ */ createElement(Col$1, {
    span: "1p5"
  }, "col-1p5"), /* @__PURE__ */ createElement(Col$1, {
    span: "1p5"
  }, "col-1p5"), /* @__PURE__ */ createElement(Col$1, {
    span: "1p5"
  }, "col-1p5"), /* @__PURE__ */ createElement(Col$1, {
    span: "1p5"
  }, "col-1p5"), /* @__PURE__ */ createElement(Col$1, {
    span: "1p5"
  }, "col-1p5")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "Six"), /* @__PURE__ */ createElement(Row$1, null, /* @__PURE__ */ createElement(Col$1, {
    span: "4"
  }, "col-4"), /* @__PURE__ */ createElement(Col$1, {
    span: "4"
  }, "col-4"), /* @__PURE__ */ createElement(Col$1, {
    span: "4"
  }, "col-4"), /* @__PURE__ */ createElement(Col$1, {
    span: "4"
  }, "col-4"), /* @__PURE__ */ createElement(Col$1, {
    span: "4"
  }, "col-4"), /* @__PURE__ */ createElement(Col$1, {
    span: "4"
  }, "col-4")));
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div`
  .basic-demo .demo-title {
    margin-left: 20px;
  }

  .basic-demo .next-row {
    margin: 10px 0;
  }

  .basic-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const {Row: Row$2, Col: Col$2} = Grid;
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "breakpoint-demo"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "Resize browser to see how each column changes"), /* @__PURE__ */ createElement(Row$2, null, /* @__PURE__ */ createElement(Col$2, {
    xs: 12,
    s: 8,
    m: 6
  }, "Col"), /* @__PURE__ */ createElement(Col$2, {
    xs: 6,
    s: 8,
    m: 6
  }, "Col"), /* @__PURE__ */ createElement(Col$2, {
    xs: 6,
    s: 8,
    m: 12
  }, "Col")));
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div`
  .breakpoint-demo .demo-title {
    margin-left: 20px;
  }

  .breakpoint-demo .next-row {
    margin: 10px 0;
  }

  .breakpoint-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const {Row: Row$3, Col: Col$3} = Grid;
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "basic-demo"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "Rendered as `ul` and `li`"), /* @__PURE__ */ createElement(Row$3, {
    component: "ul"
  }, /* @__PURE__ */ createElement(Col$3, {
    span: "12",
    component: "li"
  }, "col-12"), /* @__PURE__ */ createElement(Col$3, {
    span: "12",
    component: "li"
  }, "col-12")));
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = qe.div`
  .basic-demo ul {
    list-style: none;
    padding: 0;
  }

  .basic-demo .demo-title {
    margin-left: 20px;
  }

  .basic-demo .next-row {
    margin: 10px 0;
  }

  .basic-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const {Row: Row$4, Col: Col$4} = Grid;
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "mixin-demo"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "Two-column layout, left column fixed, right column adaptive"), /* @__PURE__ */ createElement(Row$4, null, /* @__PURE__ */ createElement(Col$4, {
    fixedSpan: "16"
  }, "col-fixed-16"), /* @__PURE__ */ createElement(Col$4, null, "col")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "Two-column layout, right column fixed, left column adaptive"), /* @__PURE__ */ createElement(Row$4, null, /* @__PURE__ */ createElement(Col$4, null, "col"), /* @__PURE__ */ createElement(Col$4, {
    fixedSpan: "16"
  }, "col-fixed-16")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "Three-column layout, left column and right column fixed, middle column adaptive"), /* @__PURE__ */ createElement(Row$4, null, /* @__PURE__ */ createElement(Col$4, {
    fixedSpan: "8"
  }, "col-fixed-8"), /* @__PURE__ */ createElement(Col$4, null, "col"), /* @__PURE__ */ createElement(Col$4, {
    fixedSpan: "8"
  }, "col-fixed-8")));
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = qe.div`
  .mixin-demo .demo-title {
    margin-left: 20px;
  }

  .mixin-demo .next-row {
    margin: 10px 0;
  }

  .mixin-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const {Row: Row$5, Col: Col$5} = Grid;
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gutter: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(gutter) {
    this.setState({
      gutter
    });
  }
  render() {
    const {gutter} = this.state;
    return /* @__PURE__ */ createElement("div", {
      className: "gutter-demo"
    }, /* @__PURE__ */ createElement(Range, {
      value: gutter,
      onChange: this.handleChange,
      marks: 4,
      step: 4,
      max: 16,
      hasTip: false,
      style: {width: "400px", marginLeft: "20px", marginTop: "30px"}
    }), /* @__PURE__ */ createElement(Row$5, {
      gutter
    }, /* @__PURE__ */ createElement(Col$5, {
      span: "6"
    }, /* @__PURE__ */ createElement("div", {
      className: "demo-col-inset"
    }, "col-6")), /* @__PURE__ */ createElement(Col$5, {
      span: "6"
    }, /* @__PURE__ */ createElement("div", {
      className: "demo-col-inset"
    }, "col-6")), /* @__PURE__ */ createElement(Col$5, {
      span: "6"
    }, /* @__PURE__ */ createElement("div", {
      className: "demo-col-inset"
    }, "col-6")), /* @__PURE__ */ createElement(Col$5, {
      span: "6"
    }, /* @__PURE__ */ createElement("div", {
      className: "demo-col-inset"
    }, "col-6"))));
  }
}
function DemoComponent$5() {
  const content = /* @__PURE__ */ createElement(Demo, null);
  return /* @__PURE__ */ createElement(Style$5, null, content);
}
const Style$5 = qe.div`
  .gutter-demo .demo-title {
    margin-left: 20px;
  }

  .gutter-demo .next-row {
    margin: 10px 0;
  }

  .gutter-demo .demo-col-inset {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const {Row: Row$6, Col: Col$6} = Grid;
function DemoComponent$6() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "hidden-demo"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "Hide columns under all breakpoints, resize browser to see if the second column is hidden or shown"), /* @__PURE__ */ createElement(Row$6, null, /* @__PURE__ */ createElement(Col$6, {
    span: "8"
  }, "col-8"), /* @__PURE__ */ createElement(Col$6, {
    span: "16",
    hidden: true
  }, "col-16")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "Hide columns under a breakpoint such as xs, resize browser to see if the second column is hidden or shown"), /* @__PURE__ */ createElement(Row$6, null, /* @__PURE__ */ createElement(Col$6, {
    span: "8"
  }, "col-8"), /* @__PURE__ */ createElement(Col$6, {
    span: "16",
    hidden: "xs"
  }, "col-16")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "Hide columns under some breakpoints such as xs and s, resize browser to see if the second column is hidden or shown"), /* @__PURE__ */ createElement(Row$6, null, /* @__PURE__ */ createElement(Col$6, {
    span: "8"
  }, "col-8"), /* @__PURE__ */ createElement(Col$6, {
    span: "16",
    hidden: ["xs", "s"]
  }, "col-16")));
  return /* @__PURE__ */ createElement(Style$6, null, content);
}
const Style$6 = qe.div`
  .hidden-demo .demo-title {
    margin-left: 20px;
  }

  .hidden-demo .next-row {
    margin: 10px 0;
  }

  .hidden-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const {Row: Row$7, Col: Col$7} = Grid;
function DemoComponent$7() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "justify-demo"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "start"), /* @__PURE__ */ createElement(Row$7, {
    justify: "start"
  }, /* @__PURE__ */ createElement(Col$7, {
    span: "4"
  }, "col-4"), /* @__PURE__ */ createElement(Col$7, {
    span: "4"
  }, "col-4"), /* @__PURE__ */ createElement(Col$7, {
    span: "4"
  }, "col-4")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "center"), /* @__PURE__ */ createElement(Row$7, {
    justify: "center"
  }, /* @__PURE__ */ createElement(Col$7, {
    span: "4"
  }, "col-4"), /* @__PURE__ */ createElement(Col$7, {
    span: "4"
  }, "col-4"), /* @__PURE__ */ createElement(Col$7, {
    span: "4"
  }, "col-4")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "end"), /* @__PURE__ */ createElement(Row$7, {
    justify: "end"
  }, /* @__PURE__ */ createElement(Col$7, {
    span: "4"
  }, "col-4"), /* @__PURE__ */ createElement(Col$7, {
    span: "4"
  }, "col-4"), /* @__PURE__ */ createElement(Col$7, {
    span: "4"
  }, "col-4")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "space-between"), /* @__PURE__ */ createElement(Row$7, {
    justify: "space-between"
  }, /* @__PURE__ */ createElement(Col$7, {
    span: "4"
  }, "col-4"), /* @__PURE__ */ createElement(Col$7, {
    span: "4"
  }, "col-4"), /* @__PURE__ */ createElement(Col$7, {
    span: "4"
  }, "col-4")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "space-around"), /* @__PURE__ */ createElement(Row$7, {
    justify: "space-around"
  }, /* @__PURE__ */ createElement(Col$7, {
    span: "4"
  }, "col-4"), /* @__PURE__ */ createElement(Col$7, {
    span: "4"
  }, "col-4"), /* @__PURE__ */ createElement(Col$7, {
    span: "4"
  }, "col-4")));
  return /* @__PURE__ */ createElement(Style$7, null, content);
}
const Style$7 = qe.div`
  .justify-demo .demo-title {
    margin-left: 20px;
  }

  .justify-demo .next-row {
    margin: 10px 0;
  }

  .justify-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
const {Row: Row$8, Col: Col$8} = Grid;
function DemoComponent$8() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "nest-demo"
  }, /* @__PURE__ */ createElement(Row$8, {
    className: "demo-row"
  }, /* @__PURE__ */ createElement(Col$8, {
    span: "10"
  }, /* @__PURE__ */ createElement(Row$8, null, /* @__PURE__ */ createElement(Col$8, {
    span: "6"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-col-inset"
  }, "col-10-6")), /* @__PURE__ */ createElement(Col$8, {
    span: "18"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-col-inset"
  }, "col-10-18")))), /* @__PURE__ */ createElement(Col$8, {
    span: "14"
  }, /* @__PURE__ */ createElement(Row$8, null, /* @__PURE__ */ createElement(Col$8, {
    span: "18"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-col-inset"
  }, "col-14-18")), /* @__PURE__ */ createElement(Col$8, {
    span: "6"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-col-inset"
  }, "col-14-6"))))));
  return /* @__PURE__ */ createElement(Style$8, null, content);
}
const Style$8 = qe.div`
  .nest-demo .demo-title {
    margin-left: 20px;
  }

  .nest-demo .demo-row {
    margin: 10px 0;
  }

  .nest-demo .demo-col-inset {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
const {Row: Row$9, Col: Col$9} = Grid;
function DemoComponent$9() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "offset-demo"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "Normal offset, set offset from 1 to 24"), /* @__PURE__ */ createElement(Row$9, null, /* @__PURE__ */ createElement(Col$9, {
    offset: "0"
  }, "offset-0")), /* @__PURE__ */ createElement(Row$9, null, /* @__PURE__ */ createElement(Col$9, {
    offset: "4"
  }, "offset-4")), /* @__PURE__ */ createElement(Row$9, null, /* @__PURE__ */ createElement(Col$9, {
    offset: "8"
  }, "offset-8")), /* @__PURE__ */ createElement(Row$9, null, /* @__PURE__ */ createElement(Col$9, {
    offset: "12"
  }, "offset-12")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "Adaptive offset"), /* @__PURE__ */ createElement(Row$9, null, /* @__PURE__ */ createElement(Col$9, null, "col"), /* @__PURE__ */ createElement(Col$9, {
    offset: "12"
  }, "offset-12")));
  return /* @__PURE__ */ createElement(Style$9, null, content);
}
const Style$9 = qe.div`
  .offset-demo .demo-title {
    margin-left: 20px;
  }

  .offset-demo .next-row {
    margin: 10px 0;
  }

  .offset-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;
var m9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$9
});
const {Row: Row$a, Col: Col$a} = Grid;
function DemoComponent$a() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "offset-fixed-demo"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "Normal offset, set offset from 1 to 30"), /* @__PURE__ */ createElement(Row$a, null, /* @__PURE__ */ createElement(Col$a, {
    fixedOffset: "0"
  }, "offset-fixed-0")), /* @__PURE__ */ createElement(Row$a, null, /* @__PURE__ */ createElement(Col$a, {
    fixedOffset: "4"
  }, "offset-fixed-4")), /* @__PURE__ */ createElement(Row$a, null, /* @__PURE__ */ createElement(Col$a, {
    fixedOffset: "8"
  }, "offset-fixed-8")), /* @__PURE__ */ createElement(Row$a, null, /* @__PURE__ */ createElement(Col$a, {
    fixedOffset: "12"
  }, "offset-fixed-12")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "Adaptive offset"), /* @__PURE__ */ createElement(Row$a, null, /* @__PURE__ */ createElement(Col$a, null, "col"), /* @__PURE__ */ createElement(Col$a, {
    fixedOffset: "12"
  }, "offset-fixed-12")));
  return /* @__PURE__ */ createElement(Style$a, null, content);
}
const Style$a = qe.div`
  .offset-fixed-demo .demo-title {
    margin-left: 20px;
  }

  .offset-fixed-demo .next-row {
    margin: 10px 0;
  }

  .offset-fixed-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;
var m10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$a
});
const {Row: Row$b, Col: Col$b} = Grid;
const breakpoints = {
  xxs: 320,
  xs: 480,
  s: 720,
  m: 990,
  l: 1200,
  xl: 1500
};
class Demo$1 extends Component {
  componentDidMount() {
    const row = findDOMNode(this.refs.fixCol);
    this.handleResize = () => {
      let point = "";
      const innerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const keys = Object.keys(breakpoints);
      for (let i = 0; i < keys.length; i++) {
        const width = breakpoints[keys[i]];
        const nextWidth = breakpoints[keys[i + 1]];
        if (innerWidth > width && (innerWidth < nextWidth || !nextWidth)) {
          point = keys[i];
          break;
        }
      }
      if (point) {
        row.innerHTML = `${breakpoints[point]}px`;
      }
    };
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }
  componentWillUnmount() {
    window.removeListener("resize", this.handleResize);
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "type-demo"
    }, /* @__PURE__ */ createElement("div", {
      className: "demo-title"
    }, "Default"), /* @__PURE__ */ createElement(Row$b, null, /* @__PURE__ */ createElement(Col$b, null, "100%")), /* @__PURE__ */ createElement("div", {
      className: "demo-title"
    }, "Set fixed to true"), /* @__PURE__ */ createElement(Row$b, {
      ref: "fixedRow",
      fixed: true
    }, /* @__PURE__ */ createElement(Col$b, {
      ref: "fixCol"
    })), /* @__PURE__ */ createElement("div", {
      className: "demo-title"
    }, "Set fixedWidth to 's'"), /* @__PURE__ */ createElement(Row$b, {
      fixedWidth: "s"
    }, /* @__PURE__ */ createElement(Col$b, null, "720px")));
  }
}
function DemoComponent$b() {
  const content = /* @__PURE__ */ createElement(Demo$1, null);
  return /* @__PURE__ */ createElement(Style$b, null, content);
}
const Style$b = qe.div`
  .type-demo .demo-title {
    margin-left: 20px;
  }

  .type-demo .next-row {
    margin: 10px 0;
  }

  .type-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;
var m11 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$b
});
const {Row: Row$c, Col: Col$c} = Grid;
function DemoComponent$c() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "wrap-demo"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "No wrap"), /* @__PURE__ */ createElement(Row$c, null, /* @__PURE__ */ createElement(Col$c, {
    span: "6"
  }, "col-6"), /* @__PURE__ */ createElement(Col$c, {
    span: "6"
  }, "col-6"), /* @__PURE__ */ createElement(Col$c, {
    span: "6"
  }, "col-6"), /* @__PURE__ */ createElement(Col$c, {
    span: "8"
  }, "col-8")), /* @__PURE__ */ createElement("div", {
    className: "demo-title"
  }, "Wrap"), /* @__PURE__ */ createElement(Row$c, {
    wrap: true
  }, /* @__PURE__ */ createElement(Col$c, {
    span: "6"
  }, "col-6"), /* @__PURE__ */ createElement(Col$c, {
    span: "6"
  }, "col-6"), /* @__PURE__ */ createElement(Col$c, {
    span: "6"
  }, "col-6"), /* @__PURE__ */ createElement(Col$c, {
    span: "8"
  }, "col-8")));
  return /* @__PURE__ */ createElement(Style$c, null, content);
}
const Style$c = qe.div`
  .wrap-demo .demo-title {
    margin-left: 20px;
  }

  .wrap-demo .next-row {
    margin: 10px 0;
  }

  .wrap-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;
var m12 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$c
});
const modules = {};
modules["_align"] = m0;
modules["_basic"] = m1;
modules["_breakpoint"] = m2;
modules["_custom-elem-type"] = m3;
modules["_fixed"] = m4;
modules["_gutter"] = m5;
modules["_hidden"] = m6;
modules["_justify"] = m7;
modules["_nest"] = m8;
modules["_offset"] = m9;
modules["_offset-fixed"] = m10;
modules["_type"] = m11;
modules["_wrap"] = m12;
export default modules;
