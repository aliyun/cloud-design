import {c as createElement, D as NextMenu, C as Component} from "./index.0806c9c7.js";
import {N as NextBox} from "./15bd0f82.js";
import {N as NextSwitch} from "./47556422.js";
import {q as qe} from "./471d6f67.js";
const {SubMenu, Item} = NextMenu;
function DemoComponent() {
  const content = /* @__PURE__ */ createElement(NextMenu, {
    defaultOpenKeys: "1",
    className: "my-menu",
    openMode: "single"
  }, /* @__PURE__ */ createElement(SubMenu, {
    key: "0",
    label: "Sub menu 1"
  }, /* @__PURE__ */ createElement(Item, {
    key: "0-0"
  }, "Sub option 1"), /* @__PURE__ */ createElement(Item, {
    key: "0-1"
  }, "Sub option 2"), /* @__PURE__ */ createElement(Item, {
    key: "0-2"
  }, "Sub option 3")), /* @__PURE__ */ createElement(SubMenu, {
    key: "1",
    label: "Sub menu 2"
  }, /* @__PURE__ */ createElement(Item, {
    key: "1-0"
  }, "Sub option 1"), /* @__PURE__ */ createElement(Item, {
    key: "1-1"
  }, "Sub option 2"), /* @__PURE__ */ createElement(Item, {
    key: "1-2"
  }, "Sub option 3")), /* @__PURE__ */ createElement(SubMenu, {
    key: "2",
    label: "Sub menu 3"
  }, /* @__PURE__ */ createElement(Item, {
    key: "2-0"
  }, "Sub option 1"), /* @__PURE__ */ createElement(Item, {
    key: "2-1"
  }, "Sub option 2"), /* @__PURE__ */ createElement(Item, {
    key: "2-2"
  }, "Sub option 3")), /* @__PURE__ */ createElement(SubMenu, {
    key: "3",
    label: "Sub menu 4"
  }, /* @__PURE__ */ createElement(Item, {
    key: "3-0"
  }, "Sub option 1"), /* @__PURE__ */ createElement(Item, {
    key: "3-1"
  }, "Sub option 2"), /* @__PURE__ */ createElement(Item, {
    key: "3-2"
  }, "Sub option 3")));
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div`
  .my-menu {
    width: 200px;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const {SubMenu: SubMenu$1, Item: Item$1, Group, Divider} = NextMenu;
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement(NextMenu, {
    className: "my-menu",
    defaultOpenKeys: "sub-menu"
  }, /* @__PURE__ */ createElement(Item$1, {
    key: "1"
  }, "Option 1"), /* @__PURE__ */ createElement(Item$1, {
    disabled: true,
    key: "2"
  }, "Disabled option 2"), /* @__PURE__ */ createElement(Divider, {
    key: "divider"
  }), /* @__PURE__ */ createElement(Group, {
    label: "Group"
  }, /* @__PURE__ */ createElement(Item$1, {
    key: "group-1"
  }, "Group option 1"), /* @__PURE__ */ createElement(Item$1, {
    key: "group-2"
  }, "Group option 2")), /* @__PURE__ */ createElement(Divider, null), /* @__PURE__ */ createElement(SubMenu$1, {
    key: "sub-menu",
    label: "Sub menu"
  }, /* @__PURE__ */ createElement(Item$1, {
    key: "sub-1"
  }, "Sub option 1"), /* @__PURE__ */ createElement(Item$1, {
    key: "sub-2"
  }, "Sub option 2"), /* @__PURE__ */ createElement(Item$1, {
    disabled: true,
    key: "sub-3"
  }, /* @__PURE__ */ createElement("a", {
    href: "https://www.taobao.com/",
    target: "__blank"
  }, "Disabled Option Link 3")), /* @__PURE__ */ createElement(Item$1, {
    key: "sub-4"
  }, /* @__PURE__ */ createElement("a", {
    href: "https://www.taobao.com/",
    target: "__blank"
  }, "Option Link 4"))), /* @__PURE__ */ createElement(Item$1, {
    key: "3",
    helper: "CTRL+P"
  }, "Option 3"), /* @__PURE__ */ createElement(Item$1, {
    disabled: true,
    key: "4"
  }, /* @__PURE__ */ createElement("a", {
    href: "https://www.taobao.com/",
    target: "__blank"
  }, "Disabled Option Link")), /* @__PURE__ */ createElement(Item$1, {
    key: "5"
  }, /* @__PURE__ */ createElement("a", {
    href: "https://www.taobao.com/",
    target: "__blank"
  }, "Option Link")));
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div`
  .my-menu {
    width: 200px;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const {SubMenu: SubMenu$2, Item: Item$2, Divider: Divider$1} = NextMenu;
class Demo extends Component {
  constructor(props) {
    super(props);
    this.createContextMenu = (e) => {
      e.preventDefault();
      const target = e.target;
      const {top, left} = target.getBoundingClientRect();
      NextMenu.create({
        target: e.target,
        offset: [e.clientX - left, e.clientY - top],
        className: "context-menu",
        popupClassName: "context-menu",
        onItemClick: console.log,
        selectedKeys: this.state.selectedKeys,
        selectMode: "multiple",
        onSelect: this.handleSelect,
        children: [
          /* @__PURE__ */ createElement(Item$2, {
            key: "1"
          }, "Option 1"),
          /* @__PURE__ */ createElement(Item$2, {
            key: "2"
          }, "Option 2"),
          /* @__PURE__ */ createElement(Item$2, {
            key: "3"
          }, "Option 3"),
          /* @__PURE__ */ createElement(Divider$1, {
            key: "divider-1"
          }),
          /* @__PURE__ */ createElement(SubMenu$2, {
            key: "sub-menu",
            label: "Sub menu"
          }, /* @__PURE__ */ createElement(Item$2, {
            key: "sub-1"
          }, "Sub option 1"), /* @__PURE__ */ createElement(Item$2, {
            key: "sub-2"
          }, "Sub option 2")),
          /* @__PURE__ */ createElement(Item$2, {
            key: "4"
          }, "Option 4"),
          /* @__PURE__ */ createElement(Divider$1, {
            key: "divider-2"
          }),
          /* @__PURE__ */ createElement(Item$2, {
            key: "5"
          }, "Option 5")
        ]
      });
    };
    this.state = {
      selectedKeys: []
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(selectedKeys) {
    selectedKeys = selectedKeys.filter((key) => {
      return ["sub-1", "sub-2"].indexOf(key) > -1;
    });
    this.setState({
      selectedKeys
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "context-demo",
      onContextMenu: this.createContextMenu
    }, "Right click here to see the context menu!");
  }
}
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement(Demo, null);
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div`
  .context-demo {
    width: 500px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    background: #ddd;
    border: 1px solid black;
  }

  .context-menu {
    width: 120px;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const {CheckboxItem, RadioItem, Divider: Divider$2} = NextMenu;
const sexs = ["male", "female"];
const balls = ["football", "basketball", "volleyball"];
class Demo$1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: "male",
      balls: []
    };
    this.handleSexCheck = this.handleSexCheck.bind(this);
    this.handleBallCheck = this.handleBallCheck.bind(this);
  }
  handleSexCheck(key) {
    this.setState({
      sex: key
    });
  }
  handleBallCheck(key, check) {
    let newKeys;
    const index = this.state.balls.indexOf(key);
    if (check && index === -1) {
      newKeys = this.state.balls.concat(key);
    } else if (!check && index > -1) {
      newKeys = [
        ...this.state.balls.slice(0, index),
        ...this.state.balls.slice(index + 1)
      ];
    }
    if (newKeys) {
      this.setState({
        balls: newKeys
      });
    }
  }
  render() {
    return /* @__PURE__ */ createElement(NextMenu, {
      className: "my-menu"
    }, sexs.map((sex) => /* @__PURE__ */ createElement(RadioItem, {
      key: sex,
      checked: this.state.sex === sex,
      onChange: this.handleSexCheck.bind(this, sex)
    }, sex)), /* @__PURE__ */ createElement(Divider$2, {
      key: "divider"
    }), balls.map((ball) => /* @__PURE__ */ createElement(CheckboxItem, {
      key: ball,
      checked: this.state.balls.indexOf(ball) > -1,
      onChange: this.handleBallCheck.bind(this, ball)
    }, ball)));
  }
}
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement(Demo$1, null);
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = qe.div`
  .my-menu {
    width: 200px;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const {PopupItem} = NextMenu;
class Demo$2 extends Component {
  render() {
    const popupProps2 = {
      target: () => ReactDOM.findDOMNode(this),
      offset: [-1, 0],
      animation: false
    };
    return /* @__PURE__ */ createElement(NextMenu, {
      className: "my-custom-menu",
      popupProps: popupProps2
    }, /* @__PURE__ */ createElement(PopupItem, {
      key: "0",
      label: "Popup item 1"
    }, /* @__PURE__ */ createElement("div", {
      className: "my-custom-content"
    }, "Custom content 1")), /* @__PURE__ */ createElement(PopupItem, {
      key: "1",
      label: "Popup item 2"
    }, /* @__PURE__ */ createElement("div", {
      className: "my-custom-content"
    }, "Custom content 2")), /* @__PURE__ */ createElement(PopupItem, {
      key: "2",
      label: "Popup item 3"
    }, /* @__PURE__ */ createElement("div", {
      className: "my-custom-content"
    }, "Custom content 3")), /* @__PURE__ */ createElement(PopupItem, {
      key: "3",
      label: "Popup item 4"
    }, /* @__PURE__ */ createElement("div", {
      className: "my-custom-content"
    }, "Custom content 4")));
  }
}
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement(Demo$2, null);
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = qe.div`
  .my-custom-menu {
    width: 200px;
    border: 1px solid #ccc;
    padding: 0;
    box-shadow: none;
    z-index: 1000;
  }

  .my-custom-content {
    width: 400px;
    height: 200px;
    background: #fff;
    border: 1px solid #ccc;
    line-height: 200px;
    text-align: center;
    font-size: 20px;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const {SubMenu: SubMenu$3, Item: Item$3, Divider: Divider$3} = NextMenu;
function DemoComponent$5() {
  const content = /* @__PURE__ */ createElement(NextMenu, {
    className: "my-menu",
    mode: "popup",
    triggerType: "hover"
  }, /* @__PURE__ */ createElement(Item$3, {
    key: "1"
  }, "Option 1"), /* @__PURE__ */ createElement(Item$3, {
    key: "2"
  }, "Option 2"), /* @__PURE__ */ createElement(Item$3, {
    key: "3"
  }, "Option 3"), /* @__PURE__ */ createElement(Divider$3, {
    key: "divider"
  }), /* @__PURE__ */ createElement(SubMenu$3, {
    key: "sub-1",
    label: "Popup menu 1"
  }, /* @__PURE__ */ createElement(Item$3, {
    key: "popup-1-1"
  }, "Popup option 1"), /* @__PURE__ */ createElement(Item$3, {
    key: "popup-1-2"
  }, "Popup option 2")), /* @__PURE__ */ createElement(SubMenu$3, {
    key: "sub-2",
    label: "Popup menu 2"
  }, /* @__PURE__ */ createElement(Item$3, {
    key: "popup-2-1"
  }, "Popup option 1"), /* @__PURE__ */ createElement(Item$3, {
    key: "popup-2-2"
  }, "Popup option 2")));
  return /* @__PURE__ */ createElement(Style$5, null, content);
}
const Style$5 = qe.div`
  .my-menu {
    width: 200px;
  }
`;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const {SubMenu: SubMenu$4, Item: Item$4} = NextMenu;
function DemoComponent$6() {
  const content = /* @__PURE__ */ createElement(NextMenu, {
    hozInLine: true,
    direction: "hoz",
    mode: "popup",
    className: "my-hoz-menu",
    popupClassName: "my-hoz-menu",
    popupAutoWidth: true
  }, /* @__PURE__ */ createElement(Item$4, {
    key: "1"
  }, "First"), /* @__PURE__ */ createElement(Item$4, {
    key: "2"
  }, "Second"), /* @__PURE__ */ createElement(SubMenu$4, {
    label: "Sub Nav"
  }, /* @__PURE__ */ createElement(Item$4, {
    key: "sub-12"
  }, "Sub option 1"), /* @__PURE__ */ createElement(Item$4, {
    key: "sub-22"
  }, "Sub option 2"), /* @__PURE__ */ createElement(SubMenu$4, {
    label: "Sub Sub Nav"
  }, /* @__PURE__ */ createElement(Item$4, {
    key: "sub-sub-122"
  }, "Sub sub option 1"), /* @__PURE__ */ createElement(Item$4, {
    key: "sub-sub-222"
  }, "Sub sub option 2"))), /* @__PURE__ */ createElement(SubMenu$4, {
    label: "Sub Nav"
  }, /* @__PURE__ */ createElement(Item$4, {
    key: "sub-1"
  }, "Sub option 1"), /* @__PURE__ */ createElement(Item$4, {
    key: "sub-2"
  }, "Sub option 2"), /* @__PURE__ */ createElement(SubMenu$4, {
    label: "Sub Sub Nav"
  }, /* @__PURE__ */ createElement(Item$4, {
    key: "sub-sub-1"
  }, "Sub sub option 1"), /* @__PURE__ */ createElement(Item$4, {
    key: "sub-sub-2"
  }, "Sub sub option 2"))), /* @__PURE__ */ createElement(Item$4, {
    key: "3"
  }, "Third"));
  return /* @__PURE__ */ createElement(Style$6, null, content);
}
const Style$6 = qe.div`
  .my-hoz-menu .next-menu-item {
    width: 160px;
  }
  .my-hoz-menu .next-menu-item.next-menu-more {
    width: 60px;
  }
`;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const {SubMenu: SubMenu$5, Item: Item$5, Divider: Divider$4} = NextMenu;
function DemoComponent$7() {
  const content = /* @__PURE__ */ createElement(NextMenu, {
    className: "my-menu",
    mode: "popup"
  }, /* @__PURE__ */ createElement(Item$5, {
    key: "1"
  }, "Option 1"), /* @__PURE__ */ createElement(Item$5, {
    key: "2"
  }, "Option 2"), /* @__PURE__ */ createElement(Item$5, {
    key: "3"
  }, "Option 3"), /* @__PURE__ */ createElement(Divider$4, {
    key: "divider"
  }), /* @__PURE__ */ createElement(SubMenu$5, {
    key: "sub-1",
    label: "Popup menu 1"
  }, /* @__PURE__ */ createElement(Item$5, {
    key: "popup-1-1"
  }, "Popup option 1"), /* @__PURE__ */ createElement(Item$5, {
    key: "popup-1-2"
  }, "Popup option 2")), /* @__PURE__ */ createElement(SubMenu$5, {
    key: "sub-2",
    label: "Popup menu 2"
  }, /* @__PURE__ */ createElement(Item$5, {
    key: "popup-2-1"
  }, "Popup option 1"), /* @__PURE__ */ createElement(Item$5, {
    key: "popup-2-2"
  }, "Popup option 2")));
  return /* @__PURE__ */ createElement(Style$7, null, content);
}
const Style$7 = qe.div`
  .my-menu {
    width: 200px;
  }
`;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
const {SubMenu: SubMenu$6, Item: Item$6, Divider: Divider$5} = NextMenu;
function DemoComponent$8() {
  const content = /* @__PURE__ */ createElement(NextMenu, {
    className: "my-menu",
    mode: "popup",
    popupAlign: "outside"
  }, /* @__PURE__ */ createElement(Item$6, {
    key: "1"
  }, "Option 1"), /* @__PURE__ */ createElement(Item$6, {
    key: "2"
  }, "Option 2"), /* @__PURE__ */ createElement(Item$6, {
    key: "3"
  }, "Option 3"), /* @__PURE__ */ createElement(Divider$5, {
    key: "divider"
  }), /* @__PURE__ */ createElement(SubMenu$6, {
    key: "sub-1",
    label: "Popup menu 1"
  }, /* @__PURE__ */ createElement(Item$6, {
    key: "popup-1-1"
  }, "Popup option 1"), /* @__PURE__ */ createElement(Item$6, {
    key: "popup-1-2"
  }, "Popup option 2")), /* @__PURE__ */ createElement(SubMenu$6, {
    key: "sub-2",
    label: "Popup menu 2"
  }, /* @__PURE__ */ createElement(Item$6, {
    key: "popup-2-1"
  }, "Popup option 1"), /* @__PURE__ */ createElement(Item$6, {
    key: "popup-2-2"
  }, "Popup option 2")));
  return /* @__PURE__ */ createElement(Style$8, null, content);
}
const Style$8 = qe.div`
  .my-menu {
    width: 200px;
  }
`;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
const {SubMenu: SubMenu$7, Item: Item$7, PopupItem: PopupItem$1, Divider: Divider$6} = NextMenu;
const popupProps = {
  align: "tc bc",
  triggerType: "click"
};
const ds = [
  {
    title: "库存管理",
    children: [
      {
        title: "部门库存管理",
        link: ""
      },
      {
        title: "小二库存管理",
        link: ""
      }
    ]
  },
  {
    title: "功能模块管理",
    children: [
      {
        title: "功能模块管理",
        link: ""
      },
      {
        title: "卡片管理",
        link: ""
      },
      {
        title: "首页布局",
        link: ""
      },
      {
        title: "页面管理",
        link: ""
      }
    ]
  },
  {
    title: "系统管理",
    children: [
      {
        title: "角色管理",
        link: ""
      },
      {
        title: "标签管理",
        link: ""
      },
      {
        title: "字典管理",
        link: ""
      }
    ]
  }
];
const Panel = (props) => {
  const {dataSource, ...others} = props;
  return /* @__PURE__ */ createElement("div", {
    className: "my-custom-content3",
    ...others
  }, /* @__PURE__ */ createElement(NextBox, {
    direction: "row"
  }, dataSource.map((item, i) => {
    return /* @__PURE__ */ createElement(NextMenu, {
      embeddable: true,
      key: i
    }, /* @__PURE__ */ createElement(NextMenu.Item, null, /* @__PURE__ */ createElement("div", {
      className: "title"
    }, item.title)), /* @__PURE__ */ createElement(Divider$6, null), item.dataSource.map((child, g) => {
      const a = child.children && child.children.map((c, j) => {
        return /* @__PURE__ */ createElement(NextMenu.Item, {
          key: j
        }, /* @__PURE__ */ createElement("a", {
          href: c.link
        }, c.title));
      });
      return [
        /* @__PURE__ */ createElement("div", {
          className: "sub-title",
          key: `title-${g}`
        }, child.title),
        ...a
      ];
    }));
  })));
};
const SubPanel = (props) => {
  const {dataSource, ...others} = props;
  return /* @__PURE__ */ createElement("div", {
    className: "my-custom-content2",
    ...others
  }, /* @__PURE__ */ createElement(NextBox, {
    direction: "row"
  }, dataSource.map((item, i) => {
    return /* @__PURE__ */ createElement(NextMenu, {
      embeddable: true,
      key: i
    }, /* @__PURE__ */ createElement("div", {
      className: "sub-title"
    }, item.title), item.children.map((child, j) => {
      return /* @__PURE__ */ createElement(NextMenu.Item, {
        key: j
      }, /* @__PURE__ */ createElement("a", {
        href: child.link
      }, child.title));
    }));
  })));
};
function DemoComponent$9() {
  const content = /* @__PURE__ */ createElement(NextMenu, {
    hozInLine: true,
    direction: "hoz",
    mode: "popup",
    className: "my-hoz-menu",
    popupClassName: "my-hoz-menu",
    popupProps,
    renderMore: (more) => {
      const newDs = more.map((item, i) => {
        const data = item.props.children.props;
        return {
          title: item.props.label,
          dataSource: data.dataSource
        };
      });
      return /* @__PURE__ */ createElement(PopupItem$1, {
        noIcon: true,
        triggerType: "click",
        key: "0-more",
        label: "更多"
      }, /* @__PURE__ */ createElement(Panel, {
        dataSource: newDs
      }));
    }
  }, /* @__PURE__ */ createElement(PopupItem$1, {
    key: "0",
    label: "Popup item 1",
    noIcon: true
  }, /* @__PURE__ */ createElement(SubPanel, {
    dataSource: ds
  })), /* @__PURE__ */ createElement(PopupItem$1, {
    key: "1",
    label: "Popup item 2",
    noIcon: true
  }, /* @__PURE__ */ createElement(SubPanel, {
    dataSource: ds
  })), /* @__PURE__ */ createElement(PopupItem$1, {
    key: "2",
    label: "Popup item 3",
    noIcon: true
  }, /* @__PURE__ */ createElement(SubPanel, {
    dataSource: ds
  })), /* @__PURE__ */ createElement(PopupItem$1, {
    key: "3",
    label: "Popup item 4",
    noIcon: true
  }, /* @__PURE__ */ createElement(SubPanel, {
    dataSource: ds
  })), /* @__PURE__ */ createElement(PopupItem$1, {
    key: "4",
    label: "Popup item 5",
    noIcon: true
  }, /* @__PURE__ */ createElement(SubPanel, {
    dataSource: ds
  })), /* @__PURE__ */ createElement(PopupItem$1, {
    key: "5",
    label: "Popup item 6",
    noIcon: true
  }, /* @__PURE__ */ createElement(SubPanel, {
    dataSource: ds
  })), /* @__PURE__ */ createElement(PopupItem$1, {
    key: "6",
    label: "Popup item 7",
    noIcon: true
  }, /* @__PURE__ */ createElement(SubPanel, {
    dataSource: ds
  })), /* @__PURE__ */ createElement(PopupItem$1, {
    key: "7",
    label: "Popup item 8",
    noIcon: true
  }, /* @__PURE__ */ createElement(SubPanel, {
    dataSource: ds
  })), /* @__PURE__ */ createElement(PopupItem$1, {
    key: "8",
    label: "Popup item 9",
    noIcon: true
  }, /* @__PURE__ */ createElement(SubPanel, {
    dataSource: ds
  })));
  return /* @__PURE__ */ createElement(Style$9, null, content);
}
const Style$9 = qe.div`
  .my-custom-menu {
    width: 200px;
    border: 1px solid #ccc;
    padding: 0;
    box-shadow: none;
    z-index: 1000;
    text-align: left;
  }

  .my-custom-content2 {
    background: #fff;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 20px;
    text-align: left;
  }

  .my-custom-content3 {
    background: #fff;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 20px;
    text-align: left;
  }

  ul {
    list-style: none;
    padding-inline-start: 10px;
  }
  .title {
    font-size: 16px;
    font-weight: bold;
  }
  .sub-title {
    font-size: 12px;
    font-weight: normal;
    color: #999;
    padding-left: 20px;
  }
`;
var m9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$9
});
const {SubMenu: SubMenu$8, Item: Item$8} = NextMenu;
class Demo$3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multiple: false,
      subMenuSelectable: false,
      shallowSelect: false,
      isSelectIconRight: false,
      selectedKeys: ["1"]
    };
    [
      "handleMultipleChange",
      "handleSubMenuSelectableChange",
      "handleShallowSelectChange",
      "handleSelect",
      "handleIconDirectionChange"
    ].forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }
  handleMultipleChange() {
    this.setState({
      multiple: !this.state.multiple,
      selectedKeys: []
    });
  }
  handleIconDirectionChange() {
    this.setState({
      isSelectIconRight: !this.state.isSelectIconRight,
      selectedKeys: []
    });
  }
  handleSubMenuSelectableChange() {
    this.setState({
      subMenuSelectable: !this.state.subMenuSelectable,
      selectedKeys: []
    });
  }
  handleShallowSelectChange() {
    this.setState({
      shallowSelect: !this.state.shallowSelect,
      selectedKeys: []
    });
  }
  handleSelect(selectedKeys, ...others) {
    this.setState({
      selectedKeys
    });
    console.log(selectedKeys, ...others);
  }
  render() {
    const {
      multiple,
      subMenuSelectable,
      shallowSelect,
      selectedKeys,
      isSelectIconRight
    } = this.state;
    const selectMode = multiple ? "multiple" : "single";
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("span", {
      className: "my-switch-label"
    }, "Multiple "), /* @__PURE__ */ createElement(NextSwitch, {
      value: multiple,
      onChange: this.handleMultipleChange
    })), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("span", {
      className: "my-switch-label"
    }, "isSelectIconRight "), /* @__PURE__ */ createElement(NextSwitch, {
      value: multiple,
      onChange: this.handleIconDirectionChange
    })), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("span", {
      className: "my-switch-label"
    }, "Label of submenu selectable "), /* @__PURE__ */ createElement(NextSwitch, {
      value: multiple,
      onChange: this.handleSubMenuSelectableChange
    })), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("span", {
      className: "my-switch-label"
    }, "Only first level selectable "), /* @__PURE__ */ createElement(NextSwitch, {
      value: multiple,
      onChange: this.handleShallowSelectChange
    })), /* @__PURE__ */ createElement(NextMenu, {
      isSelectIconRight,
      className: "my-select-menu",
      defaultOpenKeys: ["sub"],
      selectMode,
      selectedKeys,
      shallowSelect,
      onSelect: this.handleSelect
    }, /* @__PURE__ */ createElement(Item$8, {
      key: "1"
    }, "Option 1"), /* @__PURE__ */ createElement(Item$8, {
      disabled: true,
      key: "2"
    }, "Disabled option 2"), /* @__PURE__ */ createElement(SubMenu$8, {
      key: "sub",
      label: "Sub menu",
      selectable: subMenuSelectable
    }, /* @__PURE__ */ createElement(Item$8, {
      key: "sub-1"
    }, "Sub option 1"), /* @__PURE__ */ createElement(Item$8, {
      key: "sub-2"
    }, "Sub option 2")), /* @__PURE__ */ createElement(Item$8, {
      key: "3"
    }, "Option 3")));
  }
}
function DemoComponent$a() {
  const content = /* @__PURE__ */ createElement(Demo$3, null);
  return /* @__PURE__ */ createElement(Style$a, null, content);
}
const Style$a = qe.div`
  .my-switch-label {
    vertical-align: super;
  }

  .my-select-menu {
    margin-top: 10px;
    width: 200px;
  }
`;
var m10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$a
});
const modules = {};
modules["_accordian"] = m0;
modules["_basic"] = m1;
modules["_context"] = m2;
modules["_csutom-select"] = m3;
modules["_custom-popup"] = m4;
modules["_hover"] = m5;
modules["_hoz"] = m6;
modules["_popup"] = m7;
modules["_popup-align"] = m8;
modules["_render-more"] = m9;
modules["_select"] = m10;
export default modules;
