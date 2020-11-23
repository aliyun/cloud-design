import {c as createElement, C as Component} from "./index.44fdd359.js";
import "./1e9e62d2.js";
import "./a8b51aea.js";
import "./32e707a4.js";
import "./618b3406.js";
import "./c3c8ba69.js";
import {e as exported} from "./2731a432.js";
import {T as Transfer} from "./c0eb3e14.js";
import {N as NextTree} from "./f18408eb.js";
import {B as Button} from "./5c949337.js";
import {q as qe} from "./c8ca2854.js";
const dataSource = (() => {
  const dataSource2 = [];
  for (let i = 0; i < 10; i++) {
    dataSource2.push({
      label: `content${i}`,
      value: `${i}`
    });
  }
  return dataSource2;
})();
const obj = {
  items: "项",
  item: "项",
  moveAll: "移动全部",
  searchPlaceholder: "请输入",
  moveToLeft: "撤销选中元素",
  moveToRight: "提交选中元素"
};
class Demo extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value, data, extra) {
    console.log(value, data, extra);
  }
  render() {
    return /* @__PURE__ */ createElement(Transfer, {
      id: "a11y-transfer",
      defaultValue: ["2"],
      dataSource,
      defaultLeftChecked: ["1"],
      locale: obj,
      onChange: this.handleChange,
      titles: ["Title", "Title"]
    });
  }
}
function DemoComponent() {
  const content = /* @__PURE__ */ createElement(Demo, null);
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const dataSource$1 = (() => {
  const dataSource2 = [];
  for (let i = 0; i < 10; i++) {
    dataSource2.push({
      label: `content${i}`,
      value: `${i}`,
      disabled: i % 4 === 0
    });
  }
  return dataSource2;
})();
class Demo$1 extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value, data, extra) {
    console.log(value, data, extra);
  }
  render() {
    return /* @__PURE__ */ createElement(Transfer, {
      defaultValue: ["3"],
      dataSource: dataSource$1,
      defaultLeftChecked: ["1"],
      onChange: this.handleChange,
      titles: ["Title", "Title"]
    });
  }
}
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement(Demo$1, null);
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const dataSource$2 = (() => {
  const dataSource2 = [];
  for (let i = 0; i < 10; i++) {
    dataSource2.push({
      label: `content${i}`,
      value: `${i}`,
      disabled: i % 4 === 0
    });
  }
  return dataSource2;
})();
class Demo$2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ["3"]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value, data, extra) {
    console.log(value, data, extra);
    this.setState({
      value
    });
  }
  render() {
    return /* @__PURE__ */ createElement(Transfer, {
      value: this.state.value,
      dataSource: dataSource$2,
      defaultLeftChecked: ["1"],
      onChange: this.handleChange,
      titles: ["Title", "Title"]
    });
  }
}
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement(Demo$2, null);
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const dataSource$3 = (() => {
  const dataSource2 = [];
  for (let i = 0; i < 10; i++) {
    dataSource2.push({
      label: i % 3 === 0 ? `content${i}contentcontentcontentcontentcontent` : `content${i}`,
      value: `${i}`,
      disabled: i % 4 === 0
    });
  }
  return dataSource2;
})();
class Demo$3 extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value, data, extra) {
    console.log(value, data, extra);
  }
  render() {
    return /* @__PURE__ */ createElement(Transfer, {
      defaultValue: ["3"],
      dataSource: dataSource$3,
      listStyle: {width: "200px", height: "192px"},
      defaultLeftChecked: ["1"],
      onChange: this.handleChange,
      titles: [
        /* @__PURE__ */ createElement(Button, {
          key: "left",
          type: "primary"
        }, "Source"),
        "Target"
      ],
      operations: [">>", "<<"]
    });
  }
}
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement(Demo$3, null);
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = qe.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const TreeNode = NextTree.Node;
const treeDataSource = [
  {
    label: "Form",
    key: "2",
    value: "2",
    children: [
      {
        label: "Input",
        key: "4",
        value: "4"
      },
      {
        label: "Field",
        key: "7",
        value: "7"
      },
      {
        label: "Select",
        key: "5",
        value: "5"
      }
    ]
  },
  {
    label: "Display",
    key: "3",
    value: "3",
    children: [
      {
        label: "Table",
        key: "6",
        value: "6"
      }
    ]
  },
  {
    label: "Data",
    key: "8",
    value: "8"
  }
];
const transferDataSource = [];
function flatten(list = []) {
  list.forEach((item) => {
    transferDataSource.push(item);
    flatten(item.children);
  });
}
flatten(treeDataSource);
class Demo$4 extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selected: []
    };
  }
  handleChange(value, data, extra) {
    this.setState({selected: value});
  }
  onCheck(keys, info) {
  }
  getTreeDataSource(dataSource2 = [], value) {
    return dataSource2.map(({children, ...props}) => /* @__PURE__ */ createElement(TreeNode, {
      ...props,
      disabled: props.disabled || value.includes(props.value),
      key: props.value
    }, this.getTreeDataSource(children, value)));
  }
  render() {
    const {onChange} = this.props;
    const {selected} = this.state;
    return /* @__PURE__ */ createElement(Transfer, {
      dataSource: transferDataSource,
      listStyle: {width: "200px", height: "192px"},
      onChange: this.handleChange,
      titles: [
        /* @__PURE__ */ createElement(Button, {
          key: "left",
          type: "primary"
        }, "Source"),
        "Target"
      ]
    }, ({position, onChange: onChange2, value}) => {
      if (position === "left") {
        return /* @__PURE__ */ createElement(NextTree, {
          checkable: true,
          editable: true,
          style: {padding: "10px"},
          checkedKeys: value,
          onCheck: (keys, extra) => {
            const newValues = extra.checkedNodes.map((item) => item.props.value);
            onChange2(position, newValues);
          }
        }, this.getTreeDataSource(treeDataSource, selected));
      }
    });
  }
}
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement(Demo$4, null);
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = qe.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const dataSource$4 = (() => {
  const dataSource2 = [];
  for (let i = 0; i < 10; i++) {
    dataSource2.push({
      label: `content${i}`,
      value: `${i}`,
      disabled: i % 4 === 0
    });
  }
  return dataSource2;
})();
class Demo$5 extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value, data, extra) {
    console.log(value, data, extra);
  }
  render() {
    return /* @__PURE__ */ createElement(Transfer, {
      showSearch: true,
      defaultValue: ["3"],
      dataSource: dataSource$4,
      defaultLeftChecked: ["1"],
      onChange: this.handleChange,
      titles: ["Searchable", "Searchable"]
    });
  }
}
function DemoComponent$5() {
  const content = /* @__PURE__ */ createElement(Demo$5, null);
  return /* @__PURE__ */ createElement(Style$5, null, content);
}
const Style$5 = qe.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const dataSource$5 = (() => {
  const dataSource2 = [];
  for (let i = 0; i < 10; i++) {
    dataSource2.push({
      label: `content${i}`,
      value: `${i}`,
      disabled: i % 4 === 0
    });
  }
  return dataSource2;
})();
class Demo$6 extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value, data, extra) {
    console.log(value, data, extra);
  }
  render() {
    return /* @__PURE__ */ createElement(Transfer, {
      mode: "simple",
      defaultValue: ["3"],
      dataSource: dataSource$5,
      defaultLeftChecked: ["1"],
      onChange: this.handleChange,
      titles: ["Simple Mode", "Simple Mode"]
    });
  }
}
function DemoComponent$6() {
  const content = /* @__PURE__ */ createElement(Demo$6, null);
  return /* @__PURE__ */ createElement(Style$6, null, content);
}
const Style$6 = qe.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const dataSource$6 = (() => {
  const dataSource2 = [];
  for (let i = 0; i < 10; i++) {
    dataSource2.push({
      label: `content${i}`,
      value: `${i}`,
      disabled: i % 4 === 0
    });
  }
  return dataSource2;
})();
class Demo$7 extends Component {
  constructor(props) {
    super(props);
    this.handleSort = this.handleSort.bind(this);
  }
  handleSort(value, position) {
    console.log(value, position);
  }
  render() {
    return /* @__PURE__ */ createElement(Transfer, {
      sortable: true,
      defaultValue: ["3"],
      dataSource: dataSource$6,
      onSort: this.handleSort,
      titles: ["Sortable", "Sortable"]
    });
  }
}
function DemoComponent$7() {
  const content = /* @__PURE__ */ createElement(Demo$7, null);
  return /* @__PURE__ */ createElement(Style$7, null, content);
}
const Style$7 = qe.div``;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
const generateTransferDataSource = (i, j) => {
  const result = [];
  for (let a = i; a < j; a++) {
    result.push({
      label: `Quotation Nano ${3 + i}`,
      value: `${100306660940 + a}`
    });
  }
  return result;
};
const TransferDataSource = generateTransferDataSource(0, 3);
const transferToTable = (dataSource2) => {
  const newTableDataSource = dataSource2.map((v) => ({
    label: v.label,
    id: v.value
  }));
  return newTableDataSource;
};
const TableDataSource = transferToTable(TransferDataSource);
const render = (value, index, record) => {
  return /* @__PURE__ */ createElement("a", {
    href: "javascript:;"
  }, "Remove(", record.id, ")");
};
class Demo$8 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      selectedValue: [],
      leftTableDataSource: TableDataSource,
      rightTableDataSource: [],
      rselectedRowKeys: [],
      lselectedRowKeys: []
    };
    this.handleChange = (value, data, extra) => {
      console.log("handleChange", value, data, extra);
      this.setState({
        leftTableDataSource: transferToTable(extra.leftData),
        rightTableDataSource: transferToTable(data),
        rselectedRowKeys: [],
        lselectedRowKeys: []
      });
    };
  }
  render() {
    const {
      selectedValue,
      leftTableDataSource,
      rightTableDataSource,
      rselectedRowKeys,
      lselectedRowKeys
    } = this.state;
    return /* @__PURE__ */ createElement(Transfer, {
      dataSource: TransferDataSource,
      titles: ["Source", "Target"],
      onChange: this.handleChange,
      showCheckAll: false,
      className: "table-transfer-demo"
    }, ({position, onChange, value, dataSource: dataSource2}) => {
      if (position === "left") {
        return /* @__PURE__ */ createElement(exported, {
          dataSource: leftTableDataSource,
          rowSelection: {
            onChange: (selectedRowKeys, records) => {
              console.log(selectedRowKeys, records);
              this.setState({
                lselectedRowKeys: selectedRowKeys
              }, () => {
                onChange(position, selectedRowKeys);
              });
            },
            selectedRowKeys: lselectedRowKeys
          }
        }, /* @__PURE__ */ createElement(exported.Column, {
          title: "Label",
          dataIndex: "label",
          width: 150
        }), /* @__PURE__ */ createElement(exported.Column, {
          title: "Id",
          dataIndex: "id",
          width: 150
        }), /* @__PURE__ */ createElement(exported.Column, {
          cell: render,
          width: 200
        }));
      } else {
        return /* @__PURE__ */ createElement(exported, {
          dataSource: rightTableDataSource,
          rowSelection: {
            onChange: (selectedRowKeys, records) => {
              console.log(selectedRowKeys, records);
              this.setState({
                rselectedRowKeys: selectedRowKeys
              }, () => {
                onChange(position, selectedRowKeys);
              });
            },
            selectedRowKeys: rselectedRowKeys
          }
        }, /* @__PURE__ */ createElement(exported.Column, {
          title: "Label",
          dataIndex: "label",
          width: 150
        }));
      }
    });
  }
}
function DemoComponent$8() {
  const content = /* @__PURE__ */ createElement(Demo$8, null);
  return /* @__PURE__ */ createElement(Style$8, null, content);
}
const Style$8 = qe.div`
  .table-transfer-demo.next-transfer .next-transfer-panel-list {
    width: auto;
  }
`;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
const dataSource$7 = (() => {
  const dataSource2 = [];
  for (let i = 0; i < 1e3; i++) {
    dataSource2.push({
      label: `content${i}`,
      value: `${i}`,
      disabled: i % 4 === 0
    });
  }
  return dataSource2;
})();
class Demo$9 extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value, data, extra) {
    console.log(value, data, extra);
  }
  render() {
    return /* @__PURE__ */ createElement(Transfer, {
      mode: "simple",
      useVirtual: true,
      defaultValue: ["3"],
      dataSource: dataSource$7,
      defaultLeftChecked: ["1"],
      onChange: this.handleChange,
      titles: ["Simple Mode", "Simple Mode"]
    });
  }
}
function DemoComponent$9() {
  const content = /* @__PURE__ */ createElement(Demo$9, null);
  return /* @__PURE__ */ createElement(Style$9, null, content);
}
const Style$9 = qe.div``;
var m9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$9
});
const modules = {};
modules["_accessibility"] = m0;
modules["_basic"] = m1;
modules["_control"] = m2;
modules["_custom"] = m3;
modules["_custom-panel"] = m4;
modules["_search"] = m5;
modules["_simple"] = m6;
modules["_sortable"] = m7;
modules["_table-transfer"] = m8;
modules["_virtual-list"] = m9;
export default modules;
