import {c as createElement, C as Component} from "./index.6aa7224e.js";
import "./589bcaa7.js";
import "./a72f9d80.js";
import "./ece31660.js";
import "./d60ace15.js";
import "./006a2233.js";
import {e as exported$1} from "./432ab7f4.js";
import {T as Transfer} from "./f6132b7d.js";
import {N as NextTree} from "./004a8364.js";
import {e as exported} from "./04d88b00.js";
import {H as He} from "./c502784d.js";
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
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement(Demo, null));
}
const Style = He.div``;
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
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(Demo$1, null));
}
const Style$1 = He.div``;
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
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(Demo$2, null));
}
const Style$2 = He.div``;
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
        /* @__PURE__ */ createElement(exported, {
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
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(Demo$3, null));
}
const Style$3 = He.div``;
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
        /* @__PURE__ */ createElement(exported, {
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
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement(Demo$4, null));
}
const Style$4 = He.div``;
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
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement(Demo$5, null));
}
const Style$5 = He.div``;
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
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement(Demo$6, null));
}
const Style$6 = He.div``;
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
  return /* @__PURE__ */ createElement(Style$7, null, /* @__PURE__ */ createElement(Demo$7, null));
}
const Style$7 = He.div``;
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
        return /* @__PURE__ */ createElement(exported$1, {
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
        }, /* @__PURE__ */ createElement(exported$1.Column, {
          title: "Label",
          dataIndex: "label",
          width: 150
        }), /* @__PURE__ */ createElement(exported$1.Column, {
          title: "Id",
          dataIndex: "id",
          width: 150
        }), /* @__PURE__ */ createElement(exported$1.Column, {
          cell: render,
          width: 200
        }));
      } else {
        return /* @__PURE__ */ createElement(exported$1, {
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
        }, /* @__PURE__ */ createElement(exported$1.Column, {
          title: "Label",
          dataIndex: "label",
          width: 150
        }));
      }
    });
  }
}
function DemoComponent$8() {
  return /* @__PURE__ */ createElement(Style$8, null, /* @__PURE__ */ createElement(Demo$8, null));
}
const Style$8 = He.div`
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
  return /* @__PURE__ */ createElement(Style$9, null, /* @__PURE__ */ createElement(Demo$9, null));
}
const Style$9 = He.div``;
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
