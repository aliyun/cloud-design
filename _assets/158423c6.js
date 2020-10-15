import {c as createElement, C as Component} from "./index.c7468b78.js";
import {H as He} from "./676b8be8.js";
import {A as Animate} from "./0591e911.js";
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: true};
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      visible: !this.state.visible
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("button", {
      onClick: this.handleToggle
    }, "Toggle visible"), /* @__PURE__ */ createElement(Animate, {
      animation: {
        enter: "my-zoom-in",
        leave: "my-zoom-out"
      }
    }, this.state.visible ? /* @__PURE__ */ createElement("div", {
      className: "basic-demo"
    }, "Next Animate") : null));
  }
}
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement(Demo, null));
}
const Style = He.div`
  .basic-demo {
    font-size: 96px;
    text-align: center;
  }

  .my-zoom-in {
    opacity: 0;
  }

  .my-zoom-in-active {
    animation: my-zoom-in 500ms linear;
  }

  .my-zoom-out {
    opacity: 1;
  }

  .my-zoom-out-active {
    animation: my-zoom-out 500ms linear;
  }

  @keyframes my-zoom-in {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
      opacity: 1;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes my-zoom-out {
    from {
      opacity: 1;
    }

    50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    to {
      opacity: 0;
    }
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
class Demo$1 extends Component {
  constructor(props) {
    super(props);
    this.state = {expand: true};
    [
      "beforeEnter",
      "onEnter",
      "afterEnter",
      "beforeLeave",
      "onLeave",
      "afterLeave",
      "handleToggle"
    ].forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }
  handleToggle() {
    this.setState({
      expand: !this.state.expand
    });
  }
  beforeEnter(node) {
    this.height = node.offsetHeight;
    node.style.height = "0px";
  }
  onEnter(node) {
    node.style.height = `${this.height}px`;
  }
  afterEnter(node) {
    this.height = null;
    node.style.height = null;
  }
  beforeLeave(node) {
    node.style.height = `${this.height}px`;
  }
  onLeave(node) {
    node.style.height = "0px";
  }
  afterLeave(node) {
    node.style.height = null;
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("button", {
      onClick: this.handleToggle
    }, "Toggle expand"), /* @__PURE__ */ createElement(Animate, {
      animation: "expand",
      beforeEnter: this.beforeEnter,
      onEnter: this.onEnter,
      afterEnter: this.afterEnter,
      beforeLeave: this.beforeLeave,
      onLeave: this.onLeave,
      afterLeave: this.afterLeave
    }, this.state.expand ? /* @__PURE__ */ createElement("div", {
      className: "notice"
    }) : null));
  }
}
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(Demo$1, null));
}
const Style$1 = He.div`
  .expand-enter {
    overflow: hidden;
  }

  .expand-enter-active {
    transition: height 0.3s ease-out;
  }

  .expand-leave {
    overflow: hidden;
  }

  .expand-leave-active {
    transition: height 0.3s ease-out;
  }

  .notice {
    width: 200px;
    height: 100px;
    margin-top: 20px;
    border: 1px solid #ccc;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {items: ["hello", "world", "click", "me"]};
  }
  handleAdd() {
    this.setState({
      items: [
        ...this.state.items,
        prompt("Enter some text")
      ]
    });
  }
  handleRemove(i) {
    const newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "totolist-container"
    }, /* @__PURE__ */ createElement(Animate, {
      animationAppear: true,
      animation: "fade",
      className: "todo-list",
      singleMode: false,
      beforeAppear: () => console.log("before appear"),
      onAppear: () => console.log("appear"),
      afterAppear: () => console.log("after appear"),
      beforeEnter: () => console.log("before enter"),
      onEnter: () => console.log("enter"),
      afterEnter: () => console.log("after enter"),
      beforeLeave: () => console.log("before leave"),
      onLeave: () => console.log("leave"),
      afterLeave: () => console.log("after leave")
    }, this.state.items.map((item, i) => /* @__PURE__ */ createElement("div", {
      key: item
    }, item, /* @__PURE__ */ createElement("button", {
      onClick: () => this.handleRemove(i)
    }, "×")))), /* @__PURE__ */ createElement("button", {
      onClick: () => this.handleAdd()
    }, "Add Item"));
  }
}
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(TodoList, null));
}
const Style$2 = He.div`
  .fade-appear {
    opacity: 0.01;
  }

  .fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }

  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave.fade-leave-active {
    opacity: 0.01;
    transition: opacity 800ms ease-in;
  }

  .totolist-container {
    padding: 20px;
    border: 1px solid #ccc;
    width: 200px;
    border-radius: 4px;
  }

  .todo-list > * {
    margin: 5px 0;
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
  }

  .totolist-container > button {
    margin-top: 20px;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const modules = {};
modules["_basic"] = m0;
modules["_expand"] = m1;
modules["_multiple"] = m2;
export default modules;
