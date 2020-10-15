import {c as createElement, o as useState, R as React} from "./index.9ac755a3.js";
import {H as He} from "./4ad0c37a.js";
import "./1efa18cd.js";
import "./509b26c1.js";
import "./cc041426.js";
import "./9cc958bb.js";
import "./ca58aca8.js";
import "./61e03baa.js";
import "./d88829e1.js";
import "./b85a5b85.js";
import "./2a58941b.js";
import "./427be597.js";
import {C as Card} from "./593c2b55.js";
import {N as NextBox} from "./5149c54c.js";
import {e as exported} from "./f50d056e.js";
const commonProps = {
  subTitle: "SubTitle",
  extra: /* @__PURE__ */ createElement(exported, {
    text: true,
    type: "primary"
  }, "Link")
};
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Card, {
    free: true,
    style: {width: 300}
  }, /* @__PURE__ */ createElement(Card.Header, {
    title: "Simple Card",
    ...commonProps
  }), /* @__PURE__ */ createElement(Card.Content, null, "Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo."))));
}
const Style = He.div`
  .card-placeholder {
    height: 200px;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const Demo = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  return /* @__PURE__ */ React.createElement(Card, {
    free: true,
    contentHeight: "auto",
    style: {width: 300}
  }, /* @__PURE__ */ React.createElement(Card.CollapsableHead, {
    collapsed,
    onCollapsedChange: setCollapsed
  }, "项目标题"), collapsed && /* @__PURE__ */ React.createElement(Card.Content, null, "阿里云公共云控制台是一个包含了100+云产品的庞大产品集群，是一个结构复杂且庞大，目前仍在快速迭代更新的产品体系。我们通过大量实践、梳理和打磨，呈现出公共云控制台设计系统。将为阿里云公共云提供前沿创新、包容且智能的产品解决方案。提供轻松、可信赖的使用体验。呈现简洁有序、精致的视觉体验。"));
};
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Demo
});
const Demo$1 = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  return /* @__PURE__ */ React.createElement(Card, {
    free: true,
    contentHeight: "auto",
    style: {width: 300}
  }, /* @__PURE__ */ React.createElement(Card.Header, {
    title: "最新热点"
  }), /* @__PURE__ */ React.createElement(Card.Header, {
    title: "AI如何把招人的效率提高四成"
  }), /* @__PURE__ */ React.createElement(Card.Content, null, collapsed ? "阿里云公共云控制台是一个包含了100+云产品的庞大产品集群，是一个结构复杂且庞大，目前仍在快速迭代更新的产品体系。我们通过大量实践、梳理和打磨，呈现出公共云控制台设计系统。" : "阿里云公共云控制台是一个包含了100+云产品的庞大产品集群，是一个结构复杂且庞大，目前仍在快速迭代更新的产品体系。我们通过大量实践、梳理和打磨，呈现出公共云控制台设计系统。将为阿里云公共云提供前沿创新、包容且智能的产品解决方案。提供轻松、可信赖的使用体验。呈现简洁有序、精致的视觉体验。"), /* @__PURE__ */ React.createElement(Card.CollapsableTail, {
    collapsed,
    onCollapsedChange: setCollapsed
  }, "展开更多"));
};
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Demo$1
});
const commonProps$1 = {
  title: "Title",
  style: {width: 300},
  subTitle: "Sub-title",
  extra: /* @__PURE__ */ createElement(exported, {
    text: true,
    type: "primary"
  }, "Link")
};
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(NextBox, {
    direction: "row",
    spacing: 20
  }, /* @__PURE__ */ createElement(Card, {
    free: true,
    style: {width: 300}
  }, /* @__PURE__ */ createElement(Card.Header, {
    title: "Simple Card",
    ...commonProps$1
  }), /* @__PURE__ */ createElement(Card.Divider, null), /* @__PURE__ */ createElement(Card.Content, null, "Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo."), /* @__PURE__ */ createElement(Card.Divider, null), /* @__PURE__ */ createElement(Card.Actions, null, /* @__PURE__ */ createElement(exported, {
    type: "primary",
    key: "action1",
    text: true
  }, "Action 1"), /* @__PURE__ */ createElement(exported, {
    type: "primary",
    key: "action2",
    text: true
  }, "Action 2"))), /* @__PURE__ */ createElement(Card, {
    free: true,
    style: {width: 300}
  }, /* @__PURE__ */ createElement(Card.Header, {
    title: "Simple Card",
    ...commonProps$1
  }), /* @__PURE__ */ createElement(Card.Divider, {
    inset: true
  }), /* @__PURE__ */ createElement(Card.Content, null, "Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo."), /* @__PURE__ */ createElement(Card.Divider, {
    inset: true
  }), /* @__PURE__ */ createElement(Card.Actions, null, /* @__PURE__ */ createElement(exported, {
    type: "primary",
    key: "action1",
    text: true
  }, "Action 1"), /* @__PURE__ */ createElement(exported, {
    type: "primary",
    key: "action2",
    text: true
  }, "Action 2")))));
}
const Style$1 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Card, {
    className: "free-card custom",
    free: true
  }, /* @__PURE__ */ createElement(Card.Media, {
    image: "https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png"
  }), /* @__PURE__ */ createElement("div", {
    className: "free-card-main"
  }, /* @__PURE__ */ createElement(Card.Header, {
    title: "Title",
    subTitle: "Sub Title",
    extra: /* @__PURE__ */ createElement(exported, {
      type: "primary",
      text: true
    }, "Link")
  }), /* @__PURE__ */ createElement(Card.Content, null, "Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et."), /* @__PURE__ */ createElement(Card.Actions, null, /* @__PURE__ */ createElement(exported, {
    type: "primary",
    key: "action1",
    text: true
  }, "Action 1"), /* @__PURE__ */ createElement(exported, {
    type: "primary",
    key: "action2",
    text: true
  }, "Action 2")))), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Card, {
    className: "free-card",
    free: true
  }, /* @__PURE__ */ createElement(Card.Media, {
    style: {height: 140},
    image: "https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png"
  }), /* @__PURE__ */ createElement(Card.Header, {
    title: "Title",
    subTitle: "Sub Title",
    extra: /* @__PURE__ */ createElement(exported, {
      type: "primary",
      text: true
    }, "Link")
  }), /* @__PURE__ */ createElement(Card.Divider, null), /* @__PURE__ */ createElement(Card.Content, null, "Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo."), /* @__PURE__ */ createElement(Card.Actions, null, /* @__PURE__ */ createElement(exported, {
    type: "primary",
    key: "action1",
    text: true
  }, "Action 1"), /* @__PURE__ */ createElement(exported, {
    type: "primary",
    key: "action2",
    text: true
  }, "Action 2")))));
}
const Style$2 = He.div`
  .free-card {
    display: inline-block;
    width: 300px;
    vertical-align: top;
  }
  .free-card + .free-card {
    margin-left: 20px;
  }

  .free-card.custom {
    display: flex;
    justify-content: space-between;
    width: 500px;
    height: 200px;
  }

  .free-card.custom .next-card-media {
    height: 100%;
    width: 200px;
    flex-shrink: 0;
  }

  .free-card-main {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .free-card-main .next-card-content-container {
    flex: 1;
  }

  .free-card-main .next-card-actions {
    text-align: right;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const commonProps$2 = {
  extra: /* @__PURE__ */ createElement(Card.DropDownActions, {
    actions: [
      {
        label: "Action1",
        onClick: () => {
          console.log("Action1 clicked");
        }
      },
      {
        label: "Action2",
        onClick: () => {
          console.log("Action2 clicked");
        }
      }
    ]
  })
};
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Card, {
    free: true,
    style: {width: 300}
  }, /* @__PURE__ */ createElement(Card.Header, {
    title: "Simple Card",
    ...commonProps$2
  }), /* @__PURE__ */ createElement(Card.Content, null, "Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo."))));
}
const Style$3 = He.div`
  .card-placeholder {
    height: 200px;
  }
`;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement(Card, {
    className: "media-card",
    free: true
  }, /* @__PURE__ */ createElement(Card.Media, null, /* @__PURE__ */ createElement("img", {
    src: "https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png"
  })), /* @__PURE__ */ createElement(Card.Header, {
    title: "Title",
    subTitle: "Sub Title",
    extra: [
      /* @__PURE__ */ createElement(exported, {
        type: "primary",
        key: "action1",
        text: true
      }, "More")
    ]
  }), /* @__PURE__ */ createElement(Card.Content, null, "Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo."), /* @__PURE__ */ createElement(Card.Actions, null, /* @__PURE__ */ createElement(exported, {
    type: "primary",
    key: "action1",
    text: true
  }, "Action 1"), /* @__PURE__ */ createElement(exported, {
    type: "primary",
    key: "action2",
    text: true
  }, "Action 2"))));
}
const Style$4 = He.div`
  .media-card {
    width: 300px;
  }

  .custom-card p {
    color: #999;
  }
`;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const modules = {};
modules["_basic"] = m0;
modules["_collapsable-head"] = m1;
modules["_collapsable-tail"] = m2;
modules["_divider"] = m3;
modules["_free"] = m4;
modules["_header-actions"] = m5;
modules["_media"] = m6;
export default modules;
