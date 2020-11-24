import {c as createElement, C as Component} from "./index.d0c11305.js";
import {N as NextAffix} from "./17248895.js";
import "./ce63a13f.js";
import {B as Button} from "./a691d3d5.js";
import {q as qe} from "./ca03a06a.js";
class Demo extends Component {
  _containerRefHandler(ref) {
    this.container = ref;
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "custom-affix-container",
      ref: this._containerRefHandler.bind(this)
    }, /* @__PURE__ */ createElement("div", {
      className: "affix-wrapper"
    }, /* @__PURE__ */ createElement(NextAffix, {
      container: () => this.container,
      offsetTop: 0,
      useAbsolute: true
    }, /* @__PURE__ */ createElement(Button, {
      type: "secondary"
    }, "Affixed Button"))));
  }
}
function DemoComponent() {
  const content = /* @__PURE__ */ createElement(Demo, null);
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div`
  .custom-affix-container {
    height: 150px;
    overflow-y: scroll;
    background: url(https://img.alicdn.com/tfs/TB1AbJXSpXXXXXJXpXXXXXXXXXX-32-32.jpg)
      repeat 50% 50%;
  }

  .custom-affix-container .affix-wrapper {
    padding-top: 100px;
    height: 500px;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "custom-affix-wrapper"
  }, /* @__PURE__ */ createElement(NextAffix, null, /* @__PURE__ */ createElement(Button, {
    type: "secondary"
  }, "Affixed Button")));
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div`
  .custom-affix-wrapper {
    padding: 40px 0;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
class Demo$1 extends Component {
  _containerRefHandler(ref) {
    this.container = ref;
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "custom-affix-container",
      ref: this._containerRefHandler.bind(this)
    }, /* @__PURE__ */ createElement("div", {
      className: "affix-wrapper"
    }, /* @__PURE__ */ createElement(NextAffix, {
      container: () => this.container,
      offsetTop: 0
    }, /* @__PURE__ */ createElement(Button, {
      type: "secondary"
    }, "Affixed Button"))));
  }
}
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement(Demo$1, null);
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div`
  .custom-affix-container {
    height: 150px;
    overflow-y: scroll;
    background: url(https://img.alicdn.com/tfs/TB1AbJXSpXXXXXJXpXXXXXXXXXX-32-32.jpg)
      repeat 50% 50%;
  }

  .custom-affix-container .affix-wrapper {
    padding-top: 50px;
    height: 500px;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "custom-affix-wrapper"
  }, /* @__PURE__ */ createElement(NextAffix, {
    offsetBottom: 0
  }, /* @__PURE__ */ createElement(Button, {
    type: "secondary"
  }, "Affixed Button")));
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = qe.div`
  .custom-affix-wrapper {
    padding: 40px 0;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
class Demo$2 extends Component {
  constructor(props) {
    super(props);
    this.onAffix = (affixed) => {
      this.setState({
        affixed
      });
    };
    this.state = {
      affixed: false
    };
  }
  render() {
    const state = this.state;
    return /* @__PURE__ */ createElement("div", {
      className: "affix-demo-wrapper"
    }, /* @__PURE__ */ createElement(NextAffix, {
      onAffix: this.onAffix
    }, /* @__PURE__ */ createElement(Button, {
      type: "secondary"
    }, state.affixed ? "Affixed Button" : "Unaffixed Button")));
  }
}
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement(Demo$2, null);
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = qe.div`
  .affix-demo-wrapper {
    padding: 40px 0;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const modules = {};
modules["_absolute-position"] = m0;
modules["_basic"] = m1;
modules["_custom-container"] = m2;
modules["_custom-offset"] = m3;
modules["_on-affix"] = m4;
export default modules;
