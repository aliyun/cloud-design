import {c as createElement, C as Component} from "./index.e76f7845.js";
import {N as NextTree} from "./190f7452.js";
import {H as He} from "./a3f37a66.js";
import "./33d6cb60.js";
import "./cdd517eb.js";
import "./482b3bb1.js";
import "./39b9d0c9.js";
import "./80678f37.js";
import "./d1d2a08f.js";
import "./f29a9117.js";
import "./af998bd5.js";
import "./ec5ade52.js";
import {C as Checkbox} from "./1ba1a98f.js";
import "./3960f8db.js";
import "./ce7ac670.js";
import "./a6527bd5.js";
import "./0106129c.js";
import "./7796e7f8.js";
import {S as Search} from "./dcae2569.js";
const TreeNode = NextTree.Node;
class Demo extends Component {
  onSelect(keys, info) {
    console.log("onSelect", keys, info);
  }
  onCheck(keys, info) {
    console.log("onCheck", keys, info);
  }
  onEditFinish(key, label, node) {
    console.log("onEditFinish", key, label, node);
  }
  onRightClick(info) {
    console.log("onRightClick", info);
  }
  render() {
    return /* @__PURE__ */ createElement(NextTree, {
      checkable: true,
      editable: true,
      defaultExpandedKeys: ["2"],
      defaultCheckedKeys: ["2", "4", "5"],
      onSelect: this.onSelect,
      onCheck: this.onCheck,
      onEditFinish: this.onEditFinish,
      onRightClick: this.onRightClick
    }, /* @__PURE__ */ createElement(TreeNode, {
      key: "1",
      label: "Component"
    }, /* @__PURE__ */ createElement(TreeNode, {
      key: "2",
      label: "Form",
      selectable: false
    }, /* @__PURE__ */ createElement(TreeNode, {
      key: "4",
      label: "Input"
    }), /* @__PURE__ */ createElement(TreeNode, {
      key: "5",
      label: "Select",
      disabled: true
    })), /* @__PURE__ */ createElement(TreeNode, {
      key: "3",
      label: "Display"
    }, /* @__PURE__ */ createElement(TreeNode, {
      key: "6",
      label: "Table"
    }))));
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
const data = [
  {
    key: "0-0",
    label: "0-0",
    children: [
      {
        key: "0-0-0",
        label: "0-0-0",
        children: [
          {
            key: "0-0-0-0",
            label: "0-0-0-0",
            children: [
              {
                key: "0-0-0-0-0",
                label: "0-0-0-0-0"
              }
            ]
          },
          {
            key: "0-0-0-1",
            label: "0-0-0-1"
          }
        ]
      },
      {
        key: "0-0-1",
        label: "0-0-1",
        children: [
          {
            key: "0-0-1-0",
            label: "0-0-1-0"
          },
          {
            key: "0-0-1-1",
            label: "0-0-1-1"
          }
        ]
      }
    ]
  }
];
class Demo$1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedKeys: [],
      checkStrictly: false
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleCheckStrictly = this.handleCheckStrictly.bind(this);
  }
  handleCheck(keys, info) {
    console.log(keys, info);
    this.setState({
      checkedKeys: keys
    });
  }
  handleCheckStrictly() {
    this.setState({
      checkStrictly: !this.state.checkStrictly,
      checkedKeys: []
    });
  }
  render() {
    const {checkedKeys, checkStrictly} = this.state;
    return /* @__PURE__ */ createElement("div", {
      className: "control-check-demo"
    }, /* @__PURE__ */ createElement("label", {
      className: "strictly-check"
    }, /* @__PURE__ */ createElement(Checkbox, {
      checked: checkStrictly,
      onChange: this.handleCheckStrictly
    }), /* @__PURE__ */ createElement("span", {
      className: "strictly-text"
    }, "Enable checkStrictly")), /* @__PURE__ */ createElement(NextTree, {
      defaultExpandAll: true,
      checkable: true,
      checkStrictly,
      checkedKeys,
      onCheck: this.handleCheck,
      dataSource: data
    }));
  }
}
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(Demo$1, null));
}
const Style$1 = He.div`
  .control-check-demo .strictly-check {
    display: block;
    margin-bottom: 10px;
  }

  .control-check-demo .strictly-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const data$1 = [
  {
    key: "0-0",
    label: "0-0",
    children: [
      {
        key: "0-0-0",
        label: "0-0-0",
        children: [
          {
            key: "0-0-0-0",
            label: "0-0-0-0",
            children: [
              {
                key: "0-0-0-0-0",
                label: "0-0-0-0-0"
              }
            ]
          },
          {
            key: "0-0-0-1",
            label: "0-0-0-1"
          }
        ]
      },
      {
        key: "0-0-1",
        label: "0-0-1",
        children: [
          {
            key: "0-0-1-0",
            label: "0-0-1-0"
          },
          {
            key: "0-0-1-1",
            label: "0-0-1-1"
          }
        ]
      }
    ]
  }
];
class Demo$2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: [],
      multiple: false
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleSelect(keys, info) {
    console.log(keys, info);
    this.setState({
      selectedKeys: keys
    });
  }
  handleCheck() {
    this.setState({
      multiple: !this.state.multiple,
      selectedKeys: []
    });
  }
  render() {
    const {multiple, selectedKeys} = this.state;
    return /* @__PURE__ */ createElement("div", {
      className: "control-select-demo"
    }, /* @__PURE__ */ createElement("label", {
      className: "multiple-check"
    }, /* @__PURE__ */ createElement(Checkbox, {
      checked: multiple,
      onChange: this.handleCheck
    }), /* @__PURE__ */ createElement("span", {
      className: "multiple-text"
    }, "Enable multiple")), /* @__PURE__ */ createElement(NextTree, {
      defaultExpandAll: true,
      multiple,
      selectedKeys,
      onSelect: this.handleSelect,
      dataSource: data$1
    }));
  }
}
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(Demo$2, null));
}
const Style$2 = He.div`
  .control-select-demo .multiple-check {
    display: block;
    margin-bottom: 10px;
  }

  .control-select-demo .multiple-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const data$2 = [
  {
    label: "Component",
    key: "1",
    children: [
      {
        label: "Form",
        key: "2",
        selectable: false,
        children: [
          {
            label: "Input",
            key: "4"
          },
          {
            label: "Select",
            key: "5",
            disabled: true
          }
        ]
      },
      {
        label: "Display",
        key: "3",
        children: [
          {
            label: "Table",
            key: "6"
          }
        ]
      }
    ]
  }
];
class Demo$3 extends Component {
  onSelect(keys, info) {
    console.log("onSelect", keys, info);
  }
  onCheck(keys, info) {
    console.log("onCheck", keys, info);
  }
  onEditFinish(key, label, node) {
    console.log("onEditFinish", key, label, node);
  }
  onRightClick(info) {
    console.log("onRightClick", info);
  }
  render() {
    return /* @__PURE__ */ createElement(NextTree, {
      checkable: true,
      editable: true,
      defaultExpandedKeys: ["2"],
      defaultCheckedKeys: ["2", "4", "5"],
      onSelect: this.onSelect,
      onCheck: this.onCheck,
      onEditFinish: this.onEditFinish,
      onRightClick: this.onRightClick,
      dataSource: data$2
    });
  }
}
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(Demo$3, null));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const TreeNode$1 = NextTree.Node;
const x = 3;
const y = 2;
const z = 1;
const gData = [];
const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || "0";
  const tns = _tns || gData;
  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({label: key, key});
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);
class Demo$4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gData
    };
  }
  onDrop(info) {
    if (!info.dragNode) {
      return;
    }
    const dragKey = info.dragNode.props.eventKey;
    const dropKey = info.node.props.eventKey;
    const dropPosition = info.dropPosition;
    const loop = (data22, key, callback) => {
      data22.forEach((item, index, arr) => {
        if (item.key === key) {
          return callback(item, index, arr);
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
      });
    };
    const data2 = [...this.state.gData];
    let dragObj;
    loop(data2, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });
    if (info.dropPosition === 0) {
      loop(data2, dropKey, (item) => {
        item.children = item.children || [];
        item.children.push(dragObj);
      });
    } else {
      let ar;
      let i;
      loop(data2, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }
    this.setState({
      gData: data2
    });
  }
  render() {
    const loop = (data2) => data2.map((item) => {
      if (item.children) {
        return /* @__PURE__ */ createElement(TreeNode$1, {
          key: item.key,
          label: item.key
        }, loop(item.children));
      }
      return /* @__PURE__ */ createElement(TreeNode$1, {
        key: item.key,
        label: item.key
      });
    });
    return /* @__PURE__ */ createElement(NextTree, {
      draggable: true,
      selectable: false,
      isLabelBlock: true,
      defaultExpandedKeys: ["0-0", "0-0-0", "0-0-0-0"],
      onDrop: this.onDrop.bind(this)
    }, loop(this.state.gData));
  }
}
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement(Demo$4, null));
}
const Style$4 = He.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
class Demo$5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label: "Expand to load", key: "0"},
        {label: "Expand to load", key: "1"},
        {label: "Leaf", key: "2", isLeaf: true}
      ]
    };
    this.onLoadData = this.onLoadData.bind(this);
  }
  onLoadData(node) {
    return new Promise((resolve) => {
      if (node.props.children) {
        return resolve();
      }
      const {eventKey, pos} = node.props;
      const item = this.getItemByPos(pos);
      setTimeout(() => {
        item.children = [
          {label: "Child Tree", key: `${eventKey}-0`},
          {label: "Child Tree", key: `${eventKey}-1`}
        ];
        this.setState({
          data: [...this.state.data]
        });
        resolve();
      }, 1e3);
    });
  }
  getItemByPos(pos) {
    return pos.split("-").slice(1).reduce((ret, num) => ret.children[num], {children: this.state.data});
  }
  render() {
    return /* @__PURE__ */ createElement(NextTree, {
      dataSource: this.state.data,
      loadData: this.onLoadData
    });
  }
}
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement(Demo$5, null));
}
const Style$5 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const TreeNode$2 = NextTree.Node;
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement(NextTree, {
    defaultExpandAll: true,
    showLine: true
  }, /* @__PURE__ */ createElement(TreeNode$2, {
    label: "Trunk"
  }, /* @__PURE__ */ createElement(TreeNode$2, {
    label: "Branch"
  }, /* @__PURE__ */ createElement(TreeNode$2, {
    label: "Branch"
  }, /* @__PURE__ */ createElement(TreeNode$2, {
    label: "Leaf"
  })), /* @__PURE__ */ createElement(TreeNode$2, {
    label: "Leaf"
  })), /* @__PURE__ */ createElement(TreeNode$2, {
    label: "Branch"
  }, /* @__PURE__ */ createElement(TreeNode$2, {
    label: "Leaf"
  }), /* @__PURE__ */ createElement(TreeNode$2, {
    label: "Leaf"
  })))));
}
const Style$6 = He.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const TreeNode$3 = NextTree.Node;
function DemoComponent$7() {
  return /* @__PURE__ */ createElement(Style$7, null, /* @__PURE__ */ createElement(NextTree, {
    defaultExpandAll: true,
    isNodeBlock: {defaultPaddingLeft: 50},
    defaultSelectedKeys: ["1"],
    style: {width: "300px"}
  }, /* @__PURE__ */ createElement(TreeNode$3, {
    label: "Component",
    key: "0"
  }, /* @__PURE__ */ createElement(TreeNode$3, {
    label: "Form",
    key: "1",
    disabled: true
  }, /* @__PURE__ */ createElement(TreeNode$3, {
    label: "Select",
    key: "2"
  }, /* @__PURE__ */ createElement(TreeNode$3, {
    label: "TreeSelect",
    key: "3"
  })), /* @__PURE__ */ createElement(TreeNode$3, {
    label: "Input",
    key: "4"
  })), /* @__PURE__ */ createElement(TreeNode$3, {
    label: "Display",
    key: "5"
  }, /* @__PURE__ */ createElement(TreeNode$3, {
    label: "Card",
    key: "6"
  }), /* @__PURE__ */ createElement(TreeNode$3, {
    label: "Table",
    key: "7"
  })))));
}
const Style$7 = He.div``;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
const TreeNode$4 = NextTree.Node;
const formatDataSource = (data2) => {
  return data2.map((it) => {
    return {
      ...it,
      key: it.value,
      children: formatDataSource(it.children || [])
    };
  });
};
class Demo$6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((response) => response.json()).then((data2) => this.setState({data: formatDataSource([data2[0]])})).catch((e) => console.log(e));
  }
  render() {
    return /* @__PURE__ */ createElement(NextTree, {
      checkable: true,
      renderChildNodes: (nodes) => {
        if (nodes.find((node) => node.props.children && node.props.children.length))
          ;
        return /* @__PURE__ */ createElement("ul", {
          role: "group",
          className: "next-tree-child-tree custom-leaf-tree"
        }, nodes);
      },
      defaultExpandAll: true,
      dataSource: this.state.data
    });
  }
}
function DemoComponent$8() {
  return /* @__PURE__ */ createElement(Style$8, null, /* @__PURE__ */ createElement(Demo$6, null));
}
const Style$8 = He.div`
  .custom-leaf-tree {
    padding-left: 20px;
    display: block;
    font-size: 0;
    white-space: normal;
  }
  .custom-leaf-tree .next-tree-switcher {
    display: none;
  }

  .custom-leaf-tree .next-tree-node {
    margin-left: 0 !important;
    margin-right: 8px;
    width: 68px;
    display: inline-block;
  }
`;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
const data$3 = [
  {
    label: "Component",
    key: "1",
    children: [
      {
        label: "Form",
        key: "2",
        children: [
          {
            label: "Input",
            key: "4"
          },
          {
            label: "Select",
            key: "5"
          }
        ]
      },
      {
        label: "Display",
        key: "3",
        children: [
          {
            label: "Table",
            key: "6"
          }
        ]
      }
    ]
  }
];
class Demo$7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedKeys: ["2"],
      autoExpandParent: true
    };
    this.matchedKeys = [];
    this.handleSearch = this.handleSearch.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
  }
  handleSearch(value) {
    value = value.trim();
    if (!value) {
      this.matchedKeys = null;
      return;
    }
    const matchedKeys = [];
    const loop = (data2) => data2.forEach((item) => {
      if (item.label.indexOf(value) > -1) {
        matchedKeys.push(item.key);
      }
      if (item.children && item.children.length) {
        loop(item.children);
      }
    });
    loop(data$3);
    this.setState({
      expandedKeys: [...matchedKeys],
      autoExpandParent: true
    });
    this.matchedKeys = matchedKeys;
  }
  handleExpand(keys) {
    this.setState({
      expandedKeys: keys,
      autoExpandParent: false
    });
  }
  render() {
    const {expandedKeys, autoExpandParent} = this.state;
    const filterTreeNode = (node) => {
      return this.matchedKeys && this.matchedKeys.indexOf(node.props.eventKey) > -1;
    };
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Search, {
      shape: "simple",
      size: "medium",
      style: {width: "200px", marginBottom: "10px"},
      onChange: this.handleSearch
    }), /* @__PURE__ */ createElement(NextTree, {
      expandedKeys,
      autoExpandParent,
      filterTreeNode,
      onExpand: this.handleExpand,
      dataSource: data$3
    }));
  }
}
function DemoComponent$9() {
  return /* @__PURE__ */ createElement(Style$9, null, /* @__PURE__ */ createElement(Demo$7, null));
}
const Style$9 = He.div``;
var m9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$9
});
function createDataSource(level = 3, count = 5) {
  const dataSource = [];
  let num = 0;
  const drill = (children, _level, _count) => {
    children.forEach((child, i) => {
      child.children = new Array(_count).fill(null).map((item, k) => {
        const key = `${child.key}-${k}`;
        num++;
        return {
          key,
          label: key
        };
      });
      _level > 0 && drill(child.children, _level - 1, count);
    });
  };
  dataSource.push({
    label: "0-0",
    key: "0-0"
  });
  drill(dataSource, level, count);
  console.log("node num:", num + 1);
  return dataSource;
}
class Demo$8 extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: []
    };
  }
  onSelect(keys, info) {
    console.log("onSelect", keys, info);
  }
  onCheck(keys, info) {
    console.log("onCheck", keys, info);
  }
  onEditFinish(key, label, node) {
    console.log("onEditFinish", key, label, node);
  }
  onRightClick(info) {
    console.log("onRightClick", info);
  }
  componentDidMount() {
    this.setState({
      dataSource: createDataSource()
    });
  }
  render() {
    const dataSource = this.state.dataSource;
    return dataSource.length && /* @__PURE__ */ createElement(NextTree, {
      checkable: true,
      editable: true,
      focusable: true,
      showLine: true,
      useVirtual: true,
      animation: true,
      style: {maxHeight: "480px", overflow: "auto"},
      defaultExpandAll: true,
      defaultCheckedKeys: ["0-0-1", "0-0-2"],
      onSelect: this.onSelect,
      onCheck: this.onCheck,
      dataSource,
      onEditFinish: this.onEditFinish,
      onRightClick: this.onRightClick
    });
  }
}
function DemoComponent$a() {
  return /* @__PURE__ */ createElement(Style$a, null, /* @__PURE__ */ createElement(Demo$8, null));
}
const Style$a = He.div``;
var m10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$a
});
const modules = {};
modules["_basic"] = m0;
modules["_control-check"] = m1;
modules["_control-select"] = m2;
modules["_data"] = m3;
modules["_draggable"] = m4;
modules["_dynamic"] = m5;
modules["_line"] = m6;
modules["_node-block"] = m7;
modules["_render-child-nodes"] = m8;
modules["_search-tree"] = m9;
modules["_virtual-tree"] = m10;
export default modules;
