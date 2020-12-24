import {c as createElement, s as NextIcon, C as Component} from "./index.e8c3f862.js";
import "./0ad7b7e0.js";
import {N as NextProgress} from "./993fd690.js";
import {B as Button} from "./5bf6758b.js";
import {q as qe} from "./dd68b5ed.js";
function DemoComponent() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextProgress, {
    percent: 30,
    textRender: () => ""
  }), /* @__PURE__ */ createElement(NextProgress, {
    percent: 50
  }), /* @__PURE__ */ createElement(NextProgress, {
    percent: 90
  }), /* @__PURE__ */ createElement(NextProgress, {
    percent: 40
  }), /* @__PURE__ */ createElement(NextProgress, {
    percent: 40,
    hasBorder: true,
    size: "large"
  }));
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextProgress, {
    percent: 30,
    shape: "circle"
  }), "   ", /* @__PURE__ */ createElement(NextProgress, {
    percent: 50,
    shape: "circle"
  }), "   ", /* @__PURE__ */ createElement(NextProgress, {
    percent: 80,
    shape: "circle",
    textRender: () => ""
  }), "  ", /* @__PURE__ */ createElement(NextProgress, {
    percent: 100,
    shape: "circle",
    textRender: () => /* @__PURE__ */ createElement(NextIcon, {
      type: "select",
      size: "xl"
    })
  }));
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextProgress, {
    percent: 30,
    shape: "circle",
    color: "#AF5F3C"
  }), " ", "    ", /* @__PURE__ */ createElement(NextProgress, {
    percent: 40,
    shape: "circle"
  }), "    ", /* @__PURE__ */ createElement(NextProgress, {
    percent: 50,
    shape: "circle",
    color: "#E91E63",
    backgroundColor: "#00BCD4"
  }), "    ", /* @__PURE__ */ createElement(NextProgress, {
    percent: 90,
    shape: "circle",
    color: "rgba(119,66,141, 0.9)",
    textRender: () => /* @__PURE__ */ createElement(NextIcon, {
      type: "select",
      size: "xl"
    })
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextProgress, {
    percent: 30,
    shape: "line",
    color: "rgb(208,16,76)"
  }), /* @__PURE__ */ createElement(NextProgress, {
    percent: 40,
    shape: "line"
  }), /* @__PURE__ */ createElement(NextProgress, {
    percent: 50,
    shape: "line",
    color: "#E91E63",
    backgroundColor: "#00BCD4"
  }), /* @__PURE__ */ createElement(NextProgress, {
    percent: 90,
    shape: "line",
    color: "blue",
    textRender: () => /* @__PURE__ */ createElement(NextIcon, {
      type: "select",
      size: "medium"
    })
  }));
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
class CustomProgress extends Component {
  constructor(props) {
    super(props);
    this.addProgress = () => {
      this.setState((prevState) => {
        return {
          percent: prevState.percent + 10
        };
      });
    };
    this.minusProgress = () => {
      this.setState((prevState) => {
        return {
          percent: prevState.percent - 10
        };
      });
    };
    this.state = {
      percent: 0
    };
  }
  render() {
    const state = this.state;
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      className: "progress-panel"
    }, /* @__PURE__ */ createElement(Button.Group, null, /* @__PURE__ */ createElement(Button, {
      onClick: this.minusProgress,
      disabled: state.percent === 0
    }, /* @__PURE__ */ createElement(NextIcon, {
      type: "minus"
    })), /* @__PURE__ */ createElement(Button, {
      onClick: this.addProgress,
      disabled: state.percent === 100
    }, /* @__PURE__ */ createElement(NextIcon, {
      type: "add"
    })))), /* @__PURE__ */ createElement(NextProgress, {
      percent: state.percent,
      progressive: true,
      size: "large"
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextProgress, {
      percent: state.percent,
      progressive: true,
      shape: "circle",
      size: "large"
    }));
  }
}
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement(CustomProgress, null);
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = qe.div`
  .progress-panel {
    display: flex;
    margin-bottom: 14px;
  }

  .custom-select {
    margin-right: 20px;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const textRender = (percent) => {
  if (percent === 100) {
    return /* @__PURE__ */ createElement(NextIcon, {
      type: "select",
      size: "medium"
    });
  }
  return `${percent.toFixed(2)}%`;
};
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement("div", null, [1, 2, 3, 4, 5, 6].map((value, index) => /* @__PURE__ */ createElement(NextProgress, {
    key: index,
    percent: value / 6 * 100,
    shape: "circle",
    color: `hsl(${index * 60 + 60}, 90%, 50%)`,
    textRender
  })), [1, 2, 3, 4, 5, 6].map((value, index) => /* @__PURE__ */ createElement(NextProgress, {
    key: index,
    percent: value / 6 * 100,
    shape: "line",
    color: `hsl(${index * 60 + 60}, 90%, 50%)`,
    textRender
  })));
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = qe.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
function DemoComponent$5() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextProgress, {
    percent: 20,
    progressive: true
  }), /* @__PURE__ */ createElement(NextProgress, {
    percent: 60,
    progressive: true
  }), /* @__PURE__ */ createElement(NextProgress, {
    percent: 90,
    progressive: true
  }));
  return /* @__PURE__ */ createElement(Style$5, null, content);
}
const Style$5 = qe.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
function DemoComponent$6() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextProgress, {
    percent: 30,
    size: "small"
  }), /* @__PURE__ */ createElement(NextProgress, {
    percent: 50,
    size: "medium"
  }), /* @__PURE__ */ createElement(NextProgress, {
    percent: 90,
    size: "large"
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextProgress, {
    percent: 30,
    size: "small",
    shape: "circle"
  }), "   ", /* @__PURE__ */ createElement(NextProgress, {
    percent: 50,
    size: "medium",
    shape: "circle"
  }), "   ", /* @__PURE__ */ createElement(NextProgress, {
    percent: 90,
    size: "large",
    shape: "circle"
  }));
  return /* @__PURE__ */ createElement(Style$6, null, content);
}
const Style$6 = qe.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
function DemoComponent$7() {
  const content = /* @__PURE__ */ createElement("div", {
    className: ""
  }, /* @__PURE__ */ createElement(NextProgress, {
    percent: 20,
    shape: "circle",
    state: "normal",
    className: "custom-progress"
  }), /* @__PURE__ */ createElement(NextProgress, {
    percent: 95,
    shape: "circle",
    state: "success",
    className: "custom-progress"
  }), /* @__PURE__ */ createElement(NextProgress, {
    percent: 95,
    shape: "circle",
    state: "error",
    className: "custom-progress"
  }));
  return /* @__PURE__ */ createElement(Style$7, null, content);
}
const Style$7 = qe.div`
  .custom-progress {
    margin: 0 20px;
  }
`;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
const modules = {};
modules["_basic"] = m0;
modules["_circle"] = m1;
modules["_color"] = m2;
modules["_controlled"] = m3;
modules["_percentrender"] = m4;
modules["_progressive"] = m5;
modules["_size"] = m6;
modules["_state"] = m7;
export default modules;
