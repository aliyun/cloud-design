import {c as createElement, C as Component, p as propTypes, I as Checkbox, N as NextIcon, F as createCommonjsModule, G as commonjsGlobal, aa as getAugmentedNamespace, a6 as require$$0, h as hoistNonReactStatics_cjs, H as getDefaultExportFromCjs, e as classnames, x as NextInput, S as Select} from "./index.fc1c4ecb.js";
import "./26fe4e81.js";
import "./b16eba57.js";
import "./8b96e82e.js";
import {e as exported$1} from "./1f1e24d2.js";
import "./12d2ddce.js";
import {N as NextLoading} from "./84d02bc3.js";
import {M as MenuButton} from "./464c7f7c.js";
import {P as Pagination} from "./995c7504.js";
import {e as exported} from "./da14963f.js";
import {B as Button} from "./7ead3c58.js";
import {q as qe} from "./7af9cfe0.js";
import "./4a749851.js";
import "./f060d6ce.js";
import {r as redux} from "./6054ce7e.js";
var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (ret !== void 0) {
    return !!ret;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
};
const result = [
  {
    id: "001",
    time: 1951,
    title: {name: "The Old Man and the Sea"}
  },
  {
    id: "002",
    time: 1925,
    title: {name: "the great gatsby"}
  },
  {
    id: "003",
    time: 1719,
    title: {name: "The adventures of Robinson Crusoe"}
  }
];
class Demo extends Component {
  constructor(props) {
    super(props);
    this.onRemove = (id) => {
      const {dataSource: dataSource2} = this.state;
      let index2 = -1;
      dataSource2.forEach((item, i) => {
        if (item.id === id) {
          index2 = i;
        }
      });
      if (index2 !== -1) {
        dataSource2.splice(index2, 1);
        this.setState({
          dataSource: dataSource2
        });
      }
    };
    this.renderOper = (value, index2, record) => {
      return /* @__PURE__ */ createElement("a", {
        onClick: this.onRemove.bind(this, record.id)
      }, "Remove(", record.id, ")");
    };
    this.state = {
      dataSource: result
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
      dataSource: this.state.dataSource,
      hasBorder: false
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Id",
      dataIndex: "id"
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Title",
      dataIndex: "title.name"
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time"
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "operate",
      cell: this.renderOper
    })));
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
const {Header, Cell} = exported;
const dataSource = () => {
  const result2 = [];
  for (let i = 0; i < 5; i++) {
    result2.push({
      title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
      id: 100306660940 + i,
      time: 2e3 + i
    });
  }
  return result2;
};
const AppHeader = (props, context) => {
  const {columns: columns2} = props;
  const {onChange: onChange2} = context;
  const length = columns2[columns2.length - 1].length;
  return /* @__PURE__ */ createElement(Header, {
    ...props
  }, /* @__PURE__ */ createElement("tr", null, /* @__PURE__ */ createElement(Cell, {
    colSpan: length
  }, /* @__PURE__ */ createElement("a", {
    onClick: () => onChange2(true),
    href: "javascript:;"
  }, "Select all"), " ", /* @__PURE__ */ createElement("a", {
    onClick: () => onChange2(false),
    href: "javascript:;"
  }, "Unselect all"))));
};
AppHeader.contextTypes = {
  onChange: propTypes.func
};
class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      selectedKeys: []
    };
    this.dataSource = dataSource();
    this.onChange = (checked) => {
      let selectedKeys = [];
      if (checked) {
        selectedKeys = this.dataSource.map((item) => item.id);
      }
      this.onRowChange(selectedKeys);
    };
    this.onRowChange = (selectedKeys) => {
      this.setState({
        selectedKeys
      });
    };
  }
  getChildContext() {
    return {
      onChange: this.onChange
    };
  }
  render() {
    return /* @__PURE__ */ createElement("span", null, /* @__PURE__ */ createElement(exported, {
      dataSource: this.dataSource,
      components: {
        Header: AppHeader
      },
      rowSelection: {
        selectedRowKeys: this.state.selectedKeys,
        onChange: this.onRowChange
      }
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Id",
      dataIndex: "id"
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Title",
      dataIndex: "title"
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time"
    })));
  }
}
App.childContextTypes = {
  onChange: propTypes.func
};
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement(App, null);
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const dataSource$1 = () => {
  const result2 = [];
  for (let i = 0; i < 5; i++) {
    result2.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2e3 + i
    });
  }
  return result2;
};
const render = (value, index2, record) => {
  return /* @__PURE__ */ createElement("a", {
    href: "javascript:;"
  }, "Remove(", record.id, ")");
};
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement(exported, {
    dataSource: dataSource$1()
  }, /* @__PURE__ */ createElement(exported.Column, {
    title: "Id",
    htmlTitle: "Unique Id",
    dataIndex: "id"
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Title",
    dataIndex: "title.name"
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Time",
    dataIndex: "time"
  }), /* @__PURE__ */ createElement(exported.Column, {
    cell: render
  }));
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const dataSource$2 = () => {
  const result2 = [];
  for (let i = 0; i < 5; i++) {
    result2.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2e3 + i
    });
  }
  return result2;
};
const render$1 = (value, index2, record) => {
  return /* @__PURE__ */ createElement("a", {
    href: "javascript:;"
  }, "Remove(", record.id, ")");
};
const columns = [
  {
    title: "Title1",
    dataIndex: "id",
    width: 140
  },
  {
    title: "Group2-7",
    children: [
      {
        title: "Title2",
        dataIndex: "id",
        width: 140
      },
      {
        title: "Title3",
        dataIndex: "title.name",
        lock: true,
        width: 200
      },
      {
        title: "Group4-7",
        children: [
          {
            title: "Title4",
            dataIndex: "title.name",
            width: 400
          },
          {
            title: "Title5",
            dataIndex: "title.name",
            width: 200
          },
          {
            title: "tet",
            children: [
              {
                title: "Title6",
                dataIndex: "title.name",
                width: 400
              },
              {
                title: "Title7",
                dataIndex: "title.name",
                width: 200
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "",
    children: [
      {
        title: "Time",
        dataIndex: "time",
        width: 500
      },
      {
        cell: render$1,
        width: 200
      }
    ]
  }
];
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement(exported, {
    columns,
    dataSource: dataSource$2()
  });
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = qe.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const dataSource$3 = (i, j) => {
  const result2 = [];
  for (let a = i; a < j; a++) {
    result2.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + a,
      time: 2e3 + a
    });
  }
  return result2;
}, render$2 = (value, index2, record) => {
  return /* @__PURE__ */ createElement("a", {
    href: "javascript:;"
  }, "Remove(", record.id, ")");
};
class App$1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowSelection: {
        onChange: this.onChange.bind(this),
        onSelect: function(selected, record, records) {
          console.log("onSelect", selected, record, records);
        },
        onSelectAll: function(selected, records) {
          console.log("onSelectAll", selected, records);
        },
        selectedRowKeys: [100306660940, 100306660941],
        getProps: (record) => {
          return {
            disabled: record.id === 100306660941
          };
        }
      },
      dataSource: dataSource$3(0, 5)
    };
  }
  onChange(ids, records) {
    const {rowSelection: rowSelection2} = this.state;
    rowSelection2.selectedRowKeys = ids;
    console.log("onChange", ids, records);
    this.setState({rowSelection: rowSelection2});
  }
  clear() {
    const {rowSelection: rowSelection2} = this.state;
    rowSelection2.selectedRowKeys = [];
    this.setState({rowSelection: rowSelection2});
  }
  toggleLoading() {
    this.setState({loading: !this.state.loading});
  }
  changeMode() {
    const {rowSelection: rowSelection2} = this.state;
    const mode = rowSelection2.mode;
    const selectedRowKeys = rowSelection2.selectedRowKeys;
    rowSelection2.mode = mode === "single" ? "multiple" : "single";
    rowSelection2.selectedRowKeys = selectedRowKeys.length === 1 ? selectedRowKeys : [];
    this.setState({rowSelection: rowSelection2});
  }
  modifyDataSource() {
    this.setState({
      dataSource: dataSource$3(9, 14)
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement(Button, {
      onClick: this.clear.bind(this)
    }, "Clear Selection"), " ", /* @__PURE__ */ createElement(Button, {
      onClick: this.changeMode.bind(this)
    }, "Change mode"), " ", /* @__PURE__ */ createElement(Button, {
      onClick: this.toggleLoading.bind(this)
    }, "Toggle loading"), " ", /* @__PURE__ */ createElement(Button, {
      onClick: this.modifyDataSource.bind(this)
    }, "Modify dataSource")), /* @__PURE__ */ createElement(exported, {
      dataSource: this.state.dataSource,
      loading: this.state.loading,
      rowSelection: this.state.rowSelection
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Id",
      dataIndex: "id"
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Title",
      dataIndex: "title.name"
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time"
    }), /* @__PURE__ */ createElement(exported.Column, {
      cell: render$2,
      width: 200
    })));
  }
}
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement(App$1, null);
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = qe.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const onRowClick = function(record, index2, e) {
  console.log(record, index2, e);
}, dataSource$4 = () => {
  const result2 = [];
  for (let i = 0; i < 5; i++) {
    result2.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      year: i === 0 ? "-" : `2019-10-2${3 + i}`,
      month: `16:39:${23 + i}`
    });
  }
  return result2;
}, cellProps = (rowIndex, colIndex) => {
  if (rowIndex === 2 && colIndex === 1) {
    return {
      rowSpan: 3
    };
  }
  if (rowIndex === 0 && colIndex === 2) {
    return {
      colSpan: 2
    };
  }
};
function DemoComponent$5() {
  const content = /* @__PURE__ */ createElement(exported, {
    dataSource: dataSource$4(),
    onRowClick,
    cellProps
  }, /* @__PURE__ */ createElement(exported.Column, {
    title: "Id",
    dataIndex: "id"
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Title",
    dataIndex: "title.name"
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Time",
    colSpan: 2,
    dataIndex: "year"
  }), /* @__PURE__ */ createElement(exported.Column, {
    colSpan: 0,
    dataIndex: "month"
  }));
  return /* @__PURE__ */ createElement(Style$5, null, content);
}
const Style$5 = qe.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const columns$1 = new Array(4).fill({
  dataIndex: "data",
  title: "Data",
  width: 200
});
columns$1.unshift({
  dataIndex: "id",
  title: "Id",
  width: 100,
  lock: "left"
});
columns$1.push({
  dataIndex: "state",
  title: "State",
  width: 200
});
columns$1.push({
  title: "Action",
  width: 100,
  align: "center",
  cell: () => /* @__PURE__ */ createElement(Button, null, "delete"),
  lock: "right"
});
const dataSource$5 = [
  {
    id: 3e4,
    data: "$13.02",
    state: "normal"
  },
  {
    id: 30001,
    data: "$16.02",
    state: "normal"
  },
  {
    id: 30002,
    data: "$63.0002",
    state: "error"
  }
];
function DemoComponent$6() {
  const content = /* @__PURE__ */ createElement(exported, {
    type: "primary",
    dataSource: dataSource$5,
    cellProps: (rowIndex, colIndex) => {
      if (colIndex === 0) {
        return {
          colSpan: 1,
          rowSpan: 2
        };
      }
      if (colIndex === columns$1.length - 1) {
        return {
          colSpan: 1,
          rowSpan: 3
        };
      }
    }
  }, columns$1.map((col, i) => {
    return /* @__PURE__ */ createElement(exported.Column, {
      key: i,
      ...col
    });
  }));
  return /* @__PURE__ */ createElement(Style$6, null, content);
}
const Style$6 = qe.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const {Group} = Checkbox;
const dataSource$6 = () => {
  const result2 = [];
  for (let i = 0; i < 5; i++) {
    result2.push({
      title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
      id: 100306660940 + i,
      time: 2e3 + i
    });
  }
  return result2;
}, cols = [
  {
    title: "id",
    dataIndex: "id"
  },
  {
    title: "Title",
    dataIndex: "title"
  },
  {
    title: "Time",
    dataIndex: "time"
  }
];
class App$2 extends Component {
  constructor(props) {
    super(props);
    this.openDialog = () => {
      exported$1.alert({
        content: this.renderControlContent(),
        title: "Select columns",
        onOk: () => {
          this.setState({
            cols: this.changedCols || this.state.cols
          });
          return true;
        }
      });
    };
    this.onChange = (value) => {
      this.changedCols = cols.filter((col) => value.indexOf(col.dataIndex) > -1);
    };
    this.state = {
      dataSource: dataSource$6(),
      cols
    };
  }
  renderControlContent() {
    const groupSource = cols.map((col) => {
      return {
        label: col.title,
        value: col.dataIndex
      };
    }), defaultValue = this.state.cols.map((col) => col.dataIndex);
    return /* @__PURE__ */ createElement(Group, {
      dataSource: groupSource,
      onChange: this.onChange,
      defaultValue
    });
  }
  renderCols() {
    const {cols: cols2} = this.state;
    return cols2.map((col) => {
      return /* @__PURE__ */ createElement(exported.Column, {
        title: col.title,
        dataIndex: col.dataIndex,
        key: col.dataIndex
      });
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement(Button, {
      onClick: this.openDialog
    }, " Select columns ")), /* @__PURE__ */ createElement(exported, {
      dataSource: this.state.dataSource
    }, this.renderCols()));
  }
}
function DemoComponent$7() {
  const content = /* @__PURE__ */ createElement(App$2, null);
  return /* @__PURE__ */ createElement(Style$7, null, content);
}
const Style$7 = qe.div``;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
const dataSource$7 = () => {
  const result2 = [];
  for (let i = 0; i < 5; i++) {
    result2.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2e3 + i
    });
  }
  return result2;
};
const render$3 = (current) => {
  return /* @__PURE__ */ createElement("a", null, " remove ", current);
};
function DemoComponent$8() {
  const content = /* @__PURE__ */ createElement(exported, {
    dataSource: dataSource$7(),
    crossline: true
  }, /* @__PURE__ */ createElement(exported.Column, {
    title: "Id",
    dataIndex: "id"
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Title",
    dataIndex: "title.name"
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Time",
    dataIndex: "time"
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Operation",
    dataIndex: "id",
    cell: render$3
  }));
  return /* @__PURE__ */ createElement(Style$8, null, content);
}
const Style$8 = qe.div``;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
const onRowClick$1 = function(record, index2, e) {
  console.log(record, index2, e);
}, dataSource$8 = () => {
  const result2 = [];
  for (let i = 0; i < 5; i++) {
    result2.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2e3 + i
    });
  }
  return result2;
};
class App$3 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      dataSource: dataSource$8()
    };
    this.onAdd = () => {
      const {dataSource: dataSource2} = this.state;
      dataSource2.push({
        title: {
          name: "Quotation for 1PCS Nano controller compatible"
        },
        id: Date.now(),
        time: 2e3
      });
      this.setState({
        dataSource: dataSource2
      });
    };
    this.onRemove = (id) => {
      const {dataSource: dataSource2} = this.state;
      let index2 = -1;
      dataSource2.forEach((item, i) => {
        if (item.id === id) {
          index2 = i;
        }
      });
      if (index2 !== -1) {
        dataSource2.splice(index2, 1);
        this.setState({
          dataSource: dataSource2
        });
      }
    };
  }
  render() {
    const renderOper = (value, index2, record) => {
      return /* @__PURE__ */ createElement("a", {
        onClick: this.onRemove.bind(this, record.id)
      }, "Remove(", record.id, ")");
    };
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement(Button, {
      onClick: this.onAdd
    }, "Add Item")), /* @__PURE__ */ createElement(exported, {
      dataSource: this.state.dataSource,
      onRowClick: onRowClick$1
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Id",
      dataIndex: "id"
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Title",
      dataIndex: "title.name"
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time"
    }), /* @__PURE__ */ createElement(exported.Column, {
      cell: renderOper,
      width: "20%"
    })));
  }
}
function DemoComponent$9() {
  const content = /* @__PURE__ */ createElement(App$3, null);
  return /* @__PURE__ */ createElement(Style$9, null, content);
}
const Style$9 = qe.div``;
var m9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$9
});
const dataSource$9 = () => {
  const result2 = [];
  for (let i = 0; i < 5; i++) {
    result2.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2e3 + i
    });
  }
  return result2;
};
const render$4 = (value, index2, record) => {
  return /* @__PURE__ */ createElement("a", {
    href: "javascript:;"
  }, "Remove(", record.id, ")");
};
const indicator = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextIcon, {
  type: "loading"
}));
const CustomLoading = (props) => /* @__PURE__ */ createElement(NextLoading, {
  indicator,
  ...props
});
function DemoComponent$a() {
  const content = /* @__PURE__ */ createElement(exported, {
    dataSource: dataSource$9(),
    loading: true,
    loadingComponent: CustomLoading
  }, /* @__PURE__ */ createElement(exported.Column, {
    title: "Id",
    dataIndex: "id"
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Title",
    dataIndex: "title.name"
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Time",
    dataIndex: "time"
  }), /* @__PURE__ */ createElement(exported.Column, {
    cell: render$4
  }));
  return /* @__PURE__ */ createElement(Style$a, null, content);
}
const Style$a = qe.div``;
var m10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$a
});
var interfaces = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var HandlerRole;
  (function(HandlerRole2) {
    HandlerRole2["SOURCE"] = "SOURCE";
    HandlerRole2["TARGET"] = "TARGET";
  })(HandlerRole = exports.HandlerRole || (exports.HandlerRole = {}));
});
var types = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.INIT_COORDS = "dnd-core/INIT_COORDS";
  exports.BEGIN_DRAG = "dnd-core/BEGIN_DRAG";
  exports.PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE";
  exports.HOVER = "dnd-core/HOVER";
  exports.DROP = "dnd-core/DROP";
  exports.END_DRAG = "dnd-core/END_DRAG";
});
var setClientOffset_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function setClientOffset(clientOffset, sourceClientOffset) {
    return {
      type: types.INIT_COORDS,
      payload: {
        sourceClientOffset: sourceClientOffset || null,
        clientOffset: clientOffset || null
      }
    };
  }
  exports.setClientOffset = setClientOffset;
});
var discount_lodash = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function get(obj, path, defaultValue) {
    return path.split(".").reduce(function(a, c) {
      return a && a[c] ? a[c] : defaultValue || null;
    }, obj);
  }
  exports.get = get;
  function without(items, item) {
    return items.filter(function(i) {
      return i !== item;
    });
  }
  exports.without = without;
  function isString(input) {
    return typeof input === "string";
  }
  exports.isString = isString;
  function isObject(input) {
    return typeof input === "object";
  }
  exports.isObject = isObject;
  function xor(itemsA, itemsB) {
    var map = new Map();
    var insertItem = function(item) {
      return map.set(item, map.has(item) ? map.get(item) + 1 : 1);
    };
    itemsA.forEach(insertItem);
    itemsB.forEach(insertItem);
    var result2 = [];
    map.forEach(function(count, key) {
      if (count === 1) {
        result2.push(key);
      }
    });
    return result2;
  }
  exports.xor = xor;
  function intersection(itemsA, itemsB) {
    return itemsA.filter(function(t) {
      return itemsB.indexOf(t) > -1;
    });
  }
  exports.intersection = intersection;
});
var invariant = function(condition, format, a, b, c, d, e, f) {
  if (!condition) {
    var error;
    if (format === void 0) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      }));
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
};
var browser = invariant;
var beginDrag = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var ResetCoordinatesAction = {
    type: types.INIT_COORDS,
    payload: {
      clientOffset: null,
      sourceClientOffset: null
    }
  };
  function createBeginDrag(manager) {
    return function beginDrag2(sourceIds, options) {
      if (sourceIds === void 0) {
        sourceIds = [];
      }
      if (options === void 0) {
        options = {
          publishSource: true
        };
      }
      var _a = options.publishSource, publishSource = _a === void 0 ? true : _a, clientOffset = options.clientOffset, getSourceClientOffset = options.getSourceClientOffset;
      var monitor = manager.getMonitor();
      var registry2 = manager.getRegistry();
      manager.dispatch(setClientOffset_1.setClientOffset(clientOffset));
      verifyInvariants(sourceIds, monitor, registry2);
      var sourceId = getDraggableSource(sourceIds, monitor);
      if (sourceId === null) {
        manager.dispatch(ResetCoordinatesAction);
        return;
      }
      var sourceClientOffset = null;
      if (clientOffset) {
        verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
        sourceClientOffset = getSourceClientOffset(sourceId);
      }
      manager.dispatch(setClientOffset_1.setClientOffset(clientOffset, sourceClientOffset));
      var source = registry2.getSource(sourceId);
      var item = source.beginDrag(monitor, sourceId);
      verifyItemIsObject(item);
      registry2.pinSource(sourceId);
      var itemType = registry2.getSourceType(sourceId);
      return {
        type: types.BEGIN_DRAG,
        payload: {
          itemType,
          item,
          sourceId,
          clientOffset: clientOffset || null,
          sourceClientOffset: sourceClientOffset || null,
          isSourcePublic: !!publishSource
        }
      };
    };
  }
  exports.default = createBeginDrag;
  function verifyInvariants(sourceIds, monitor, registry2) {
    browser(!monitor.isDragging(), "Cannot call beginDrag while dragging.");
    for (var _i = 0, sourceIds_1 = sourceIds; _i < sourceIds_1.length; _i++) {
      var s = sourceIds_1[_i];
      browser(registry2.getSource(s), "Expected sourceIds to be registered.");
    }
  }
  function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
    browser(typeof getSourceClientOffset === "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
  }
  function verifyItemIsObject(item) {
    browser(discount_lodash.isObject(item), "Item must be an object.");
  }
  function getDraggableSource(sourceIds, monitor) {
    var sourceId = null;
    for (var i = sourceIds.length - 1; i >= 0; i--) {
      if (monitor.canDragSource(sourceIds[i])) {
        sourceId = sourceIds[i];
        break;
      }
    }
    return sourceId;
  }
});
var publishDragSource = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function createPublishDragSource(manager) {
    return function publishDragSource2() {
      var monitor = manager.getMonitor();
      if (monitor.isDragging()) {
        return {type: types.PUBLISH_DRAG_SOURCE};
      }
    };
  }
  exports.default = createPublishDragSource;
});
var matchesType_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function matchesType(targetType, draggedItemType) {
    if (draggedItemType === null) {
      return targetType === null;
    }
    return Array.isArray(targetType) ? targetType.some(function(t) {
      return t === draggedItemType;
    }) : targetType === draggedItemType;
  }
  exports.default = matchesType;
});
var hover = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function createHover(manager) {
    return function hover2(targetIdsArg, _a) {
      var clientOffset = (_a === void 0 ? {} : _a).clientOffset;
      verifyTargetIdsIsArray(targetIdsArg);
      var targetIds = targetIdsArg.slice(0);
      var monitor = manager.getMonitor();
      var registry2 = manager.getRegistry();
      checkInvariants(targetIds, monitor, registry2);
      var draggedItemType = monitor.getItemType();
      removeNonMatchingTargetIds(targetIds, registry2, draggedItemType);
      hoverAllTargets(targetIds, monitor, registry2);
      return {
        type: types.HOVER,
        payload: {
          targetIds,
          clientOffset: clientOffset || null
        }
      };
    };
  }
  exports.default = createHover;
  function verifyTargetIdsIsArray(targetIdsArg) {
    browser(Array.isArray(targetIdsArg), "Expected targetIds to be an array.");
  }
  function checkInvariants(targetIds, monitor, registry2) {
    browser(monitor.isDragging(), "Cannot call hover while not dragging.");
    browser(!monitor.didDrop(), "Cannot call hover after drop.");
    for (var i = 0; i < targetIds.length; i++) {
      var targetId = targetIds[i];
      browser(targetIds.lastIndexOf(targetId) === i, "Expected targetIds to be unique in the passed array.");
      var target = registry2.getTarget(targetId);
      browser(target, "Expected targetIds to be registered.");
    }
  }
  function removeNonMatchingTargetIds(targetIds, registry2, draggedItemType) {
    for (var i = targetIds.length - 1; i >= 0; i--) {
      var targetId = targetIds[i];
      var targetType = registry2.getTargetType(targetId);
      if (!matchesType_1.default(targetType, draggedItemType)) {
        targetIds.splice(i, 1);
      }
    }
  }
  function hoverAllTargets(targetIds, monitor, registry2) {
    for (var _i = 0, targetIds_1 = targetIds; _i < targetIds_1.length; _i++) {
      var targetId = targetIds_1[_i];
      var target = registry2.getTarget(targetId);
      target.hover(monitor, targetId);
    }
  }
});
var drop = createCommonjsModule(function(module, exports) {
  var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  function createDrop(manager) {
    return function drop2(options) {
      if (options === void 0) {
        options = {};
      }
      var monitor = manager.getMonitor();
      var registry2 = manager.getRegistry();
      verifyInvariants(monitor);
      var targetIds = getDroppableTargets(monitor);
      targetIds.forEach(function(targetId, index2) {
        var dropResult = determineDropResult(targetId, index2, registry2, monitor);
        var action = {
          type: types.DROP,
          payload: {
            dropResult: __assign({}, options, dropResult)
          }
        };
        manager.dispatch(action);
      });
    };
  }
  exports.default = createDrop;
  function verifyInvariants(monitor) {
    browser(monitor.isDragging(), "Cannot call drop while not dragging.");
    browser(!monitor.didDrop(), "Cannot call drop twice during one drag operation.");
  }
  function determineDropResult(targetId, index2, registry2, monitor) {
    var target = registry2.getTarget(targetId);
    var dropResult = target ? target.drop(monitor, targetId) : void 0;
    verifyDropResultType(dropResult);
    if (typeof dropResult === "undefined") {
      dropResult = index2 === 0 ? {} : monitor.getDropResult();
    }
    return dropResult;
  }
  function verifyDropResultType(dropResult) {
    browser(typeof dropResult === "undefined" || discount_lodash.isObject(dropResult), "Drop result must either be an object or undefined.");
  }
  function getDroppableTargets(monitor) {
    var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
    targetIds.reverse();
    return targetIds;
  }
});
var endDrag = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function createEndDrag(manager) {
    return function endDrag2() {
      var monitor = manager.getMonitor();
      var registry2 = manager.getRegistry();
      verifyIsDragging(monitor);
      var sourceId = monitor.getSourceId();
      var source = registry2.getSource(sourceId, true);
      source.endDrag(monitor, sourceId);
      registry2.unpinSource();
      return {type: types.END_DRAG};
    };
  }
  exports.default = createEndDrag;
  function verifyIsDragging(monitor) {
    browser(monitor.isDragging(), "Cannot call endDrag while not dragging.");
  }
});
var dragDrop = createCommonjsModule(function(module, exports) {
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  Object.defineProperty(exports, "__esModule", {value: true});
  __export(types);
  function createDragDropActions(manager) {
    return {
      beginDrag: beginDrag.default(manager),
      publishDragSource: publishDragSource.default(manager),
      hover: hover.default(manager),
      drop: drop.default(manager),
      endDrag: endDrag.default(manager)
    };
  }
  exports.default = createDragDropActions;
});
var equality = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.strictEquality = function(a, b) {
    return a === b;
  };
  function areCoordsEqual(offsetA, offsetB) {
    if (!offsetA && !offsetB) {
      return true;
    } else if (!offsetA || !offsetB) {
      return false;
    } else {
      return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
    }
  }
  exports.areCoordsEqual = areCoordsEqual;
  function areArraysEqual(a, b, isEqual) {
    if (isEqual === void 0) {
      isEqual = exports.strictEquality;
    }
    if (a.length !== b.length) {
      return false;
    }
    for (var i = 0; i < a.length; ++i) {
      if (!isEqual(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
  exports.areArraysEqual = areArraysEqual;
});
var dragOffset_1 = createCommonjsModule(function(module, exports) {
  var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  var initialState = {
    initialSourceClientOffset: null,
    initialClientOffset: null,
    clientOffset: null
  };
  function dragOffset(state, action) {
    if (state === void 0) {
      state = initialState;
    }
    var payload = action.payload;
    switch (action.type) {
      case dragDrop.INIT_COORDS:
      case dragDrop.BEGIN_DRAG:
        return {
          initialSourceClientOffset: payload.sourceClientOffset,
          initialClientOffset: payload.clientOffset,
          clientOffset: payload.clientOffset
        };
      case dragDrop.HOVER:
        if (equality.areCoordsEqual(state.clientOffset, payload.clientOffset)) {
          return state;
        }
        return __assign({}, state, {clientOffset: payload.clientOffset});
      case dragDrop.END_DRAG:
      case dragDrop.DROP:
        return initialState;
      default:
        return state;
    }
  }
  exports.default = dragOffset;
});
var registry = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ADD_SOURCE = "dnd-core/ADD_SOURCE";
  exports.ADD_TARGET = "dnd-core/ADD_TARGET";
  exports.REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE";
  exports.REMOVE_TARGET = "dnd-core/REMOVE_TARGET";
  function addSource(sourceId) {
    return {
      type: exports.ADD_SOURCE,
      payload: {
        sourceId
      }
    };
  }
  exports.addSource = addSource;
  function addTarget(targetId) {
    return {
      type: exports.ADD_TARGET,
      payload: {
        targetId
      }
    };
  }
  exports.addTarget = addTarget;
  function removeSource(sourceId) {
    return {
      type: exports.REMOVE_SOURCE,
      payload: {
        sourceId
      }
    };
  }
  exports.removeSource = removeSource;
  function removeTarget(targetId) {
    return {
      type: exports.REMOVE_TARGET,
      payload: {
        targetId
      }
    };
  }
  exports.removeTarget = removeTarget;
});
var dragOperation_1 = createCommonjsModule(function(module, exports) {
  var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  var initialState = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: false,
    isSourcePublic: null
  };
  function dragOperation(state, action) {
    if (state === void 0) {
      state = initialState;
    }
    var payload = action.payload;
    switch (action.type) {
      case dragDrop.BEGIN_DRAG:
        return __assign({}, state, {itemType: payload.itemType, item: payload.item, sourceId: payload.sourceId, isSourcePublic: payload.isSourcePublic, dropResult: null, didDrop: false});
      case dragDrop.PUBLISH_DRAG_SOURCE:
        return __assign({}, state, {isSourcePublic: true});
      case dragDrop.HOVER:
        return __assign({}, state, {targetIds: payload.targetIds});
      case registry.REMOVE_TARGET:
        if (state.targetIds.indexOf(payload.targetId) === -1) {
          return state;
        }
        return __assign({}, state, {targetIds: discount_lodash.without(state.targetIds, payload.targetId)});
      case dragDrop.DROP:
        return __assign({}, state, {dropResult: payload.dropResult, didDrop: true, targetIds: []});
      case dragDrop.END_DRAG:
        return __assign({}, state, {itemType: null, item: null, sourceId: null, dropResult: null, didDrop: false, isSourcePublic: null, targetIds: []});
      default:
        return state;
    }
  }
  exports.default = dragOperation;
});
var refCount_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function refCount(state, action) {
    if (state === void 0) {
      state = 0;
    }
    switch (action.type) {
      case registry.ADD_SOURCE:
      case registry.ADD_TARGET:
        return state + 1;
      case registry.REMOVE_SOURCE:
      case registry.REMOVE_TARGET:
        return state - 1;
      default:
        return state;
    }
  }
  exports.default = refCount;
});
var dirtiness = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NONE = [];
  exports.ALL = [];
  exports.NONE.__IS_NONE__ = true;
  exports.ALL.__IS_ALL__ = true;
  function areDirty(dirtyIds, handlerIds) {
    if (dirtyIds === exports.NONE) {
      return false;
    }
    if (dirtyIds === exports.ALL || typeof handlerIds === "undefined") {
      return true;
    }
    var commonIds = discount_lodash.intersection(handlerIds, dirtyIds);
    return commonIds.length > 0;
  }
  exports.areDirty = areDirty;
});
var dirtyHandlerIds_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function dirtyHandlerIds(state, action) {
    if (state === void 0) {
      state = dirtiness.NONE;
    }
    switch (action.type) {
      case dragDrop.HOVER:
        break;
      case registry.ADD_SOURCE:
      case registry.ADD_TARGET:
      case registry.REMOVE_TARGET:
      case registry.REMOVE_SOURCE:
        return dirtiness.NONE;
      case dragDrop.BEGIN_DRAG:
      case dragDrop.PUBLISH_DRAG_SOURCE:
      case dragDrop.END_DRAG:
      case dragDrop.DROP:
      default:
        return dirtiness.ALL;
    }
    var _a = action.payload, _b = _a.targetIds, targetIds = _b === void 0 ? [] : _b, _c = _a.prevTargetIds, prevTargetIds = _c === void 0 ? [] : _c;
    var result2 = discount_lodash.xor(targetIds, prevTargetIds);
    var didChange = result2.length > 0 || !equality.areArraysEqual(targetIds, prevTargetIds);
    if (!didChange) {
      return dirtiness.NONE;
    }
    var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
    var innermostTargetId = targetIds[targetIds.length - 1];
    if (prevInnermostTargetId !== innermostTargetId) {
      if (prevInnermostTargetId) {
        result2.push(prevInnermostTargetId);
      }
      if (innermostTargetId) {
        result2.push(innermostTargetId);
      }
    }
    return result2;
  }
  exports.default = dirtyHandlerIds;
});
var stateId_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function stateId(state) {
    if (state === void 0) {
      state = 0;
    }
    return state + 1;
  }
  exports.default = stateId;
});
var reducers = createCommonjsModule(function(module, exports) {
  var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  function reduce(state, action) {
    if (state === void 0) {
      state = {};
    }
    return {
      dirtyHandlerIds: dirtyHandlerIds_1.default(state.dirtyHandlerIds, {
        type: action.type,
        payload: __assign({}, action.payload, {prevTargetIds: discount_lodash.get(state, "dragOperation.targetIds", [])})
      }),
      dragOffset: dragOffset_1.default(state.dragOffset, action),
      refCount: refCount_1.default(state.refCount, action),
      dragOperation: dragOperation_1.default(state.dragOperation, action),
      stateId: stateId_1.default(state.stateId)
    };
  }
  exports.default = reduce;
});
var coords = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function add(a, b) {
    return {
      x: a.x + b.x,
      y: a.y + b.y
    };
  }
  exports.add = add;
  function subtract(a, b) {
    return {
      x: a.x - b.x,
      y: a.y - b.y
    };
  }
  exports.subtract = subtract;
  function getSourceClientOffset(state) {
    var clientOffset = state.clientOffset, initialClientOffset = state.initialClientOffset, initialSourceClientOffset = state.initialSourceClientOffset;
    if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
      return null;
    }
    return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
  }
  exports.getSourceClientOffset = getSourceClientOffset;
  function getDifferenceFromInitialOffset(state) {
    var clientOffset = state.clientOffset, initialClientOffset = state.initialClientOffset;
    if (!clientOffset || !initialClientOffset) {
      return null;
    }
    return subtract(clientOffset, initialClientOffset);
  }
  exports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;
});
var DragDropMonitorImpl_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var DragDropMonitorImpl = function() {
    function DragDropMonitorImpl2(store, registry2) {
      this.store = store;
      this.registry = registry2;
    }
    DragDropMonitorImpl2.prototype.subscribeToStateChange = function(listener, options) {
      var _this = this;
      if (options === void 0) {
        options = {handlerIds: void 0};
      }
      var handlerIds = options.handlerIds;
      browser(typeof listener === "function", "listener must be a function.");
      browser(typeof handlerIds === "undefined" || Array.isArray(handlerIds), "handlerIds, when specified, must be an array of strings.");
      var prevStateId = this.store.getState().stateId;
      var handleChange = function() {
        var state = _this.store.getState();
        var currentStateId = state.stateId;
        try {
          var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !dirtiness.areDirty(state.dirtyHandlerIds, handlerIds);
          if (!canSkipListener) {
            listener();
          }
        } finally {
          prevStateId = currentStateId;
        }
      };
      return this.store.subscribe(handleChange);
    };
    DragDropMonitorImpl2.prototype.subscribeToOffsetChange = function(listener) {
      var _this = this;
      browser(typeof listener === "function", "listener must be a function.");
      var previousState = this.store.getState().dragOffset;
      var handleChange = function() {
        var nextState = _this.store.getState().dragOffset;
        if (nextState === previousState) {
          return;
        }
        previousState = nextState;
        listener();
      };
      return this.store.subscribe(handleChange);
    };
    DragDropMonitorImpl2.prototype.canDragSource = function(sourceId) {
      if (!sourceId) {
        return false;
      }
      var source = this.registry.getSource(sourceId);
      browser(source, "Expected to find a valid source.");
      if (this.isDragging()) {
        return false;
      }
      return source.canDrag(this, sourceId);
    };
    DragDropMonitorImpl2.prototype.canDropOnTarget = function(targetId) {
      if (!targetId) {
        return false;
      }
      var target = this.registry.getTarget(targetId);
      browser(target, "Expected to find a valid target.");
      if (!this.isDragging() || this.didDrop()) {
        return false;
      }
      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      return matchesType_1.default(targetType, draggedItemType) && target.canDrop(this, targetId);
    };
    DragDropMonitorImpl2.prototype.isDragging = function() {
      return Boolean(this.getItemType());
    };
    DragDropMonitorImpl2.prototype.isDraggingSource = function(sourceId) {
      if (!sourceId) {
        return false;
      }
      var source = this.registry.getSource(sourceId, true);
      browser(source, "Expected to find a valid source.");
      if (!this.isDragging() || !this.isSourcePublic()) {
        return false;
      }
      var sourceType = this.registry.getSourceType(sourceId);
      var draggedItemType = this.getItemType();
      if (sourceType !== draggedItemType) {
        return false;
      }
      return source.isDragging(this, sourceId);
    };
    DragDropMonitorImpl2.prototype.isOverTarget = function(targetId, options) {
      if (options === void 0) {
        options = {shallow: false};
      }
      if (!targetId) {
        return false;
      }
      var shallow = options.shallow;
      if (!this.isDragging()) {
        return false;
      }
      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      if (draggedItemType && !matchesType_1.default(targetType, draggedItemType)) {
        return false;
      }
      var targetIds = this.getTargetIds();
      if (!targetIds.length) {
        return false;
      }
      var index2 = targetIds.indexOf(targetId);
      if (shallow) {
        return index2 === targetIds.length - 1;
      } else {
        return index2 > -1;
      }
    };
    DragDropMonitorImpl2.prototype.getItemType = function() {
      return this.store.getState().dragOperation.itemType;
    };
    DragDropMonitorImpl2.prototype.getItem = function() {
      return this.store.getState().dragOperation.item;
    };
    DragDropMonitorImpl2.prototype.getSourceId = function() {
      return this.store.getState().dragOperation.sourceId;
    };
    DragDropMonitorImpl2.prototype.getTargetIds = function() {
      return this.store.getState().dragOperation.targetIds;
    };
    DragDropMonitorImpl2.prototype.getDropResult = function() {
      return this.store.getState().dragOperation.dropResult;
    };
    DragDropMonitorImpl2.prototype.didDrop = function() {
      return this.store.getState().dragOperation.didDrop;
    };
    DragDropMonitorImpl2.prototype.isSourcePublic = function() {
      return this.store.getState().dragOperation.isSourcePublic;
    };
    DragDropMonitorImpl2.prototype.getInitialClientOffset = function() {
      return this.store.getState().dragOffset.initialClientOffset;
    };
    DragDropMonitorImpl2.prototype.getInitialSourceClientOffset = function() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    };
    DragDropMonitorImpl2.prototype.getClientOffset = function() {
      return this.store.getState().dragOffset.clientOffset;
    };
    DragDropMonitorImpl2.prototype.getSourceClientOffset = function() {
      return coords.getSourceClientOffset(this.store.getState().dragOffset);
    };
    DragDropMonitorImpl2.prototype.getDifferenceFromInitialOffset = function() {
      return coords.getDifferenceFromInitialOffset(this.store.getState().dragOffset);
    };
    return DragDropMonitorImpl2;
  }();
  exports.default = DragDropMonitorImpl;
});
var getNextUniqueId_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var nextUniqueId = 0;
  function getNextUniqueId() {
    return nextUniqueId++;
  }
  exports.default = getNextUniqueId;
});
var contracts = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function validateSourceContract(source) {
    browser(typeof source.canDrag === "function", "Expected canDrag to be a function.");
    browser(typeof source.beginDrag === "function", "Expected beginDrag to be a function.");
    browser(typeof source.endDrag === "function", "Expected endDrag to be a function.");
  }
  exports.validateSourceContract = validateSourceContract;
  function validateTargetContract(target) {
    browser(typeof target.canDrop === "function", "Expected canDrop to be a function.");
    browser(typeof target.hover === "function", "Expected hover to be a function.");
    browser(typeof target.drop === "function", "Expected beginDrag to be a function.");
  }
  exports.validateTargetContract = validateTargetContract;
  function validateType(type, allowArray) {
    if (allowArray && Array.isArray(type)) {
      type.forEach(function(t) {
        return validateType(t, false);
      });
      return;
    }
    browser(typeof type === "string" || typeof type === "symbol", allowArray ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
  }
  exports.validateType = validateType;
});
var browserRaw = rawAsap;
function rawAsap(task) {
  if (!queue.length) {
    requestFlush();
  }
  queue[queue.length] = task;
}
var queue = [];
var requestFlush;
var index = 0;
var capacity = 1024;
function flush() {
  while (index < queue.length) {
    var currentIndex = index;
    index = index + 1;
    queue[currentIndex].call();
    if (index > capacity) {
      for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
        queue[scan] = queue[scan + index];
      }
      queue.length -= index;
      index = 0;
    }
  }
  queue.length = 0;
  index = 0;
}
var scope = typeof commonjsGlobal !== "undefined" ? commonjsGlobal : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
if (typeof BrowserMutationObserver === "function") {
  requestFlush = makeRequestCallFromMutationObserver(flush);
} else {
  requestFlush = makeRequestCallFromTimer(flush);
}
rawAsap.requestFlush = requestFlush;
function makeRequestCallFromMutationObserver(callback) {
  var toggle = 1;
  var observer = new BrowserMutationObserver(callback);
  var node = document.createTextNode("");
  observer.observe(node, {characterData: true});
  return function requestCall() {
    toggle = -toggle;
    node.data = toggle;
  };
}
function makeRequestCallFromTimer(callback) {
  return function requestCall() {
    var timeoutHandle = setTimeout(handleTimer, 0);
    var intervalHandle = setInterval(handleTimer, 50);
    function handleTimer() {
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      callback();
    }
  };
}
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;
var freeTasks = [];
var pendingErrors = [];
var requestErrorThrow = browserRaw.makeRequestCallFromTimer(throwFirstError);
function throwFirstError() {
  if (pendingErrors.length) {
    throw pendingErrors.shift();
  }
}
var browserAsap = asap;
function asap(task) {
  var rawTask;
  if (freeTasks.length) {
    rawTask = freeTasks.pop();
  } else {
    rawTask = new RawTask();
  }
  rawTask.task = task;
  browserRaw(rawTask);
}
function RawTask() {
  this.task = null;
}
RawTask.prototype.call = function() {
  try {
    this.task.call();
  } catch (error) {
    if (asap.onerror) {
      asap.onerror(error);
    } else {
      pendingErrors.push(error);
      requestErrorThrow();
    }
  } finally {
    this.task = null;
    freeTasks[freeTasks.length] = this;
  }
};
var HandlerRegistryImpl_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function getNextHandlerId(role) {
    var id = getNextUniqueId_1.default().toString();
    switch (role) {
      case interfaces.HandlerRole.SOURCE:
        return "S" + id;
      case interfaces.HandlerRole.TARGET:
        return "T" + id;
      default:
        throw new Error("Unknown Handler Role: " + role);
    }
  }
  function parseRoleFromHandlerId(handlerId) {
    switch (handlerId[0]) {
      case "S":
        return interfaces.HandlerRole.SOURCE;
      case "T":
        return interfaces.HandlerRole.TARGET;
      default:
        browser(false, "Cannot parse handler ID: " + handlerId);
    }
  }
  function mapContainsValue(map, searchValue) {
    var entries = map.entries();
    var isDone = false;
    do {
      var _a = entries.next(), done = _a.done, _b = _a.value, value = _b[1];
      if (value === searchValue) {
        return true;
      }
      isDone = done;
    } while (!isDone);
    return false;
  }
  var HandlerRegistryImpl = function() {
    function HandlerRegistryImpl2(store) {
      this.store = store;
      this.types = new Map();
      this.dragSources = new Map();
      this.dropTargets = new Map();
      this.pinnedSourceId = null;
      this.pinnedSource = null;
    }
    HandlerRegistryImpl2.prototype.addSource = function(type, source) {
      contracts.validateType(type);
      contracts.validateSourceContract(source);
      var sourceId = this.addHandler(interfaces.HandlerRole.SOURCE, type, source);
      this.store.dispatch(registry.addSource(sourceId));
      return sourceId;
    };
    HandlerRegistryImpl2.prototype.addTarget = function(type, target) {
      contracts.validateType(type, true);
      contracts.validateTargetContract(target);
      var targetId = this.addHandler(interfaces.HandlerRole.TARGET, type, target);
      this.store.dispatch(registry.addTarget(targetId));
      return targetId;
    };
    HandlerRegistryImpl2.prototype.containsHandler = function(handler) {
      return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
    };
    HandlerRegistryImpl2.prototype.getSource = function(sourceId, includePinned) {
      if (includePinned === void 0) {
        includePinned = false;
      }
      browser(this.isSourceId(sourceId), "Expected a valid source ID.");
      var isPinned = includePinned && sourceId === this.pinnedSourceId;
      var source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
      return source;
    };
    HandlerRegistryImpl2.prototype.getTarget = function(targetId) {
      browser(this.isTargetId(targetId), "Expected a valid target ID.");
      return this.dropTargets.get(targetId);
    };
    HandlerRegistryImpl2.prototype.getSourceType = function(sourceId) {
      browser(this.isSourceId(sourceId), "Expected a valid source ID.");
      return this.types.get(sourceId);
    };
    HandlerRegistryImpl2.prototype.getTargetType = function(targetId) {
      browser(this.isTargetId(targetId), "Expected a valid target ID.");
      return this.types.get(targetId);
    };
    HandlerRegistryImpl2.prototype.isSourceId = function(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === interfaces.HandlerRole.SOURCE;
    };
    HandlerRegistryImpl2.prototype.isTargetId = function(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === interfaces.HandlerRole.TARGET;
    };
    HandlerRegistryImpl2.prototype.removeSource = function(sourceId) {
      var _this = this;
      browser(this.getSource(sourceId), "Expected an existing source.");
      this.store.dispatch(registry.removeSource(sourceId));
      browserAsap(function() {
        _this.dragSources.delete(sourceId);
        _this.types.delete(sourceId);
      });
    };
    HandlerRegistryImpl2.prototype.removeTarget = function(targetId) {
      browser(this.getTarget(targetId), "Expected an existing target.");
      this.store.dispatch(registry.removeTarget(targetId));
      this.dropTargets.delete(targetId);
      this.types.delete(targetId);
    };
    HandlerRegistryImpl2.prototype.pinSource = function(sourceId) {
      var source = this.getSource(sourceId);
      browser(source, "Expected an existing source.");
      this.pinnedSourceId = sourceId;
      this.pinnedSource = source;
    };
    HandlerRegistryImpl2.prototype.unpinSource = function() {
      browser(this.pinnedSource, "No source is pinned at the time.");
      this.pinnedSourceId = null;
      this.pinnedSource = null;
    };
    HandlerRegistryImpl2.prototype.addHandler = function(role, type, handler) {
      var id = getNextHandlerId(role);
      this.types.set(id, type);
      if (role === interfaces.HandlerRole.SOURCE) {
        this.dragSources.set(id, handler);
      } else if (role === interfaces.HandlerRole.TARGET) {
        this.dropTargets.set(id, handler);
      }
      return id;
    };
    return HandlerRegistryImpl2;
  }();
  exports.default = HandlerRegistryImpl;
});
var redux_1 = /* @__PURE__ */ getAugmentedNamespace(redux);
var DragDropManagerImpl_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function makeStoreInstance(debugMode) {
    var reduxDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__;
    return redux_1.createStore(reducers.default, debugMode && reduxDevTools && reduxDevTools({
      name: "dnd-core",
      instanceId: "dnd-core"
    }));
  }
  var DragDropManagerImpl = function() {
    function DragDropManagerImpl2(createBackend, context, debugMode) {
      var _this = this;
      if (context === void 0) {
        context = {};
      }
      if (debugMode === void 0) {
        debugMode = false;
      }
      this.context = context;
      this.isSetUp = false;
      this.handleRefCountChange = function() {
        var shouldSetUp = _this.store.getState().refCount > 0;
        if (shouldSetUp && !_this.isSetUp) {
          _this.backend.setup();
          _this.isSetUp = true;
        } else if (!shouldSetUp && _this.isSetUp) {
          _this.backend.teardown();
          _this.isSetUp = false;
        }
      };
      var store = makeStoreInstance(debugMode);
      this.store = store;
      this.monitor = new DragDropMonitorImpl_1.default(store, new HandlerRegistryImpl_1.default(store));
      this.backend = createBackend(this);
      store.subscribe(this.handleRefCountChange);
    }
    DragDropManagerImpl2.prototype.getContext = function() {
      return this.context;
    };
    DragDropManagerImpl2.prototype.getMonitor = function() {
      return this.monitor;
    };
    DragDropManagerImpl2.prototype.getBackend = function() {
      return this.backend;
    };
    DragDropManagerImpl2.prototype.getRegistry = function() {
      return this.monitor.registry;
    };
    DragDropManagerImpl2.prototype.getActions = function() {
      var manager = this;
      var dispatch = this.store.dispatch;
      function bindActionCreator(actionCreator) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var action = actionCreator.apply(manager, args);
          if (typeof action !== "undefined") {
            dispatch(action);
          }
        };
      }
      var actions = dragDrop.default(this);
      return Object.keys(actions).reduce(function(boundActions, key) {
        var action = actions[key];
        boundActions[key] = bindActionCreator(action);
        return boundActions;
      }, {});
    };
    DragDropManagerImpl2.prototype.dispatch = function(action) {
      this.store.dispatch(action);
    };
    return DragDropManagerImpl2;
  }();
  exports.default = DragDropManagerImpl;
});
var factories = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function createDragDropManager(backend, context, debugMode) {
    return new DragDropManagerImpl_1.default(backend, context, debugMode);
  }
  exports.createDragDropManager = createDragDropManager;
});
var cjs = createCommonjsModule(function(module, exports) {
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  Object.defineProperty(exports, "__esModule", {value: true});
  __export(interfaces);
  __export(factories);
});
var checkDecoratorArguments_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function checkDecoratorArguments(functionName, signature) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
  }
  exports.default = checkDecoratorArguments;
});
var isRefable_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function isClassComponent(Component2) {
    return Component2 && Component2.prototype && typeof Component2.prototype.render === "function";
  }
  function isRefForwardingComponent(C) {
    return C && C.$$typeof && C.$$typeof.toString() === "Symbol(react.forward_ref)";
  }
  exports.isRefForwardingComponent = isRefForwardingComponent;
  function isRefable(C) {
    return isClassComponent(C) || isRefForwardingComponent(C);
  }
  exports.isRefable = isRefable;
});
var DragDropContext_1 = createCommonjsModule(function(module, exports) {
  var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (b2.hasOwnProperty(p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  var __rest = commonjsGlobal && commonjsGlobal.__rest || function(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.context = require$$0.createContext({
    dragDropManager: void 0
  });
  exports.Consumer = exports.context.Consumer, exports.Provider = exports.context.Provider;
  function createChildContext(backend, context, debugMode) {
    return {
      dragDropManager: cjs.createDragDropManager(backend, context, debugMode)
    };
  }
  exports.createChildContext = createChildContext;
  exports.DragDropContextProvider = function(_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var contextValue = "manager" in props ? {dragDropManager: props.manager} : createChildContext(props.backend, props.context, props.debugMode);
    return require$$0.createElement(exports.Provider, {value: contextValue}, children);
  };
  function DragDropContext(backendFactory, backendContext, debugMode) {
    checkDecoratorArguments_1.default("DragDropContext", "backend", backendFactory);
    var childContext = createChildContext(backendFactory, backendContext, debugMode);
    return function decorateContext(DecoratedComponent) {
      var Decorated = DecoratedComponent;
      var displayName = Decorated.displayName || Decorated.name || "Component";
      var DragDropContextContainer = function(_super) {
        __extends(DragDropContextContainer2, _super);
        function DragDropContextContainer2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.ref = require$$0.createRef();
          _this.getManager = function() {
            return childContext.dragDropManager;
          };
          return _this;
        }
        DragDropContextContainer2.prototype.getDecoratedComponentInstance = function() {
          browser(this.ref.current, "In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()");
          return this.ref.current;
        };
        DragDropContextContainer2.prototype.render = function() {
          return require$$0.createElement(exports.Provider, {value: childContext}, require$$0.createElement(Decorated, __assign({}, this.props, {ref: isRefable_1.isRefable(Decorated) ? this.ref : null})));
        };
        DragDropContextContainer2.DecoratedComponent = DecoratedComponent;
        DragDropContextContainer2.displayName = "DragDropContext(" + displayName + ")";
        return DragDropContextContainer2;
      }(require$$0.Component);
      return hoistNonReactStatics_cjs(DragDropContextContainer, DecoratedComponent);
    };
  }
  exports.DragDropContext = DragDropContext;
});
var discount_lodash$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function isFunction(input) {
    return typeof input === "function";
  }
  exports.isFunction = isFunction;
  function noop() {
  }
  exports.noop = noop;
  function isObjectLike(input) {
    return typeof input === "object" && input !== null;
  }
  function isPlainObject(input) {
    if (!isObjectLike(input)) {
      return false;
    }
    if (Object.getPrototypeOf(input) === null) {
      return true;
    }
    var proto = input;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(input) === proto;
  }
  exports.isPlainObject = isPlainObject;
});
var DragLayer_1 = createCommonjsModule(function(module, exports) {
  var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (b2.hasOwnProperty(p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  function DragLayer(collect, options) {
    if (options === void 0) {
      options = {};
    }
    checkDecoratorArguments_1.default("DragLayer", "collect[, options]", collect, options);
    browser(typeof collect === "function", 'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ', "Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer", collect);
    browser(discount_lodash$1.isPlainObject(options), 'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer', options);
    return function decorateLayer(DecoratedComponent) {
      var Decorated = DecoratedComponent;
      var _a = options.arePropsEqual, arePropsEqual = _a === void 0 ? shallowequal : _a;
      var displayName = Decorated.displayName || Decorated.name || "Component";
      var DragLayerContainer = function(_super) {
        __extends(DragLayerContainer2, _super);
        function DragLayerContainer2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.isCurrentlyMounted = false;
          _this.ref = require$$0.createRef();
          _this.handleChange = function() {
            if (!_this.isCurrentlyMounted) {
              return;
            }
            var nextState = _this.getCurrentState();
            if (!shallowequal(nextState, _this.state)) {
              _this.setState(nextState);
            }
          };
          return _this;
        }
        DragLayerContainer2.prototype.getDecoratedComponentInstance = function() {
          browser(this.ref.current, "In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()");
          return this.ref.current;
        };
        DragLayerContainer2.prototype.shouldComponentUpdate = function(nextProps, nextState) {
          return !arePropsEqual(nextProps, this.props) || !shallowequal(nextState, this.state);
        };
        DragLayerContainer2.prototype.componentDidMount = function() {
          this.isCurrentlyMounted = true;
          this.handleChange();
        };
        DragLayerContainer2.prototype.componentWillUnmount = function() {
          this.isCurrentlyMounted = false;
          if (this.unsubscribeFromOffsetChange) {
            this.unsubscribeFromOffsetChange();
            this.unsubscribeFromOffsetChange = void 0;
          }
          if (this.unsubscribeFromStateChange) {
            this.unsubscribeFromStateChange();
            this.unsubscribeFromStateChange = void 0;
          }
        };
        DragLayerContainer2.prototype.render = function() {
          var _this = this;
          return require$$0.createElement(DragDropContext_1.Consumer, null, function(_a2) {
            var dragDropManager = _a2.dragDropManager;
            if (dragDropManager === void 0) {
              return null;
            }
            _this.receiveDragDropManager(dragDropManager);
            if (!_this.isCurrentlyMounted) {
              return null;
            }
            return require$$0.createElement(Decorated, __assign({}, _this.props, _this.state, {ref: isRefable_1.isRefable(Decorated) ? _this.ref : null}));
          });
        };
        DragLayerContainer2.prototype.receiveDragDropManager = function(dragDropManager) {
          if (this.manager !== void 0) {
            return;
          }
          this.manager = dragDropManager;
          browser(typeof dragDropManager === "object", "Could not find the drag and drop manager in the context of %s. Make sure to wrap the top-level component of your app with DragDropContext. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context", displayName, displayName);
          var monitor = this.manager.getMonitor();
          this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);
          this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);
        };
        DragLayerContainer2.prototype.getCurrentState = function() {
          if (!this.manager) {
            return {};
          }
          var monitor = this.manager.getMonitor();
          return collect(monitor, this.props);
        };
        DragLayerContainer2.displayName = "DragLayer(" + displayName + ")";
        DragLayerContainer2.DecoratedComponent = DecoratedComponent;
        return DragLayerContainer2;
      }(require$$0.Component);
      return hoistNonReactStatics_cjs(DragLayerContainer, DecoratedComponent);
    };
  }
  exports.default = DragLayer;
});
var Disposable_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var Disposable = function() {
    function Disposable2(action) {
      this.isDisposed = false;
      this.action = discount_lodash$1.isFunction(action) ? action : discount_lodash$1.noop;
    }
    Disposable2.isDisposable = function(d) {
      return d && discount_lodash$1.isFunction(d.dispose);
    };
    Disposable2._fixup = function(result2) {
      return Disposable2.isDisposable(result2) ? result2 : Disposable2.empty;
    };
    Disposable2.create = function(action) {
      return new Disposable2(action);
    };
    Disposable2.prototype.dispose = function() {
      if (!this.isDisposed) {
        this.action();
        this.isDisposed = true;
      }
    };
    Disposable2.empty = {dispose: discount_lodash$1.noop};
    return Disposable2;
  }();
  exports.Disposable = Disposable;
});
var SerialDisposable_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var SerialDisposable = function() {
    function SerialDisposable2() {
      this.isDisposed = false;
    }
    SerialDisposable2.prototype.getDisposable = function() {
      return this.current;
    };
    SerialDisposable2.prototype.setDisposable = function(value) {
      var shouldDispose = this.isDisposed;
      if (!shouldDispose) {
        var old = this.current;
        this.current = value;
        if (old) {
          old.dispose();
        }
      }
      if (shouldDispose && value) {
        value.dispose();
      }
    };
    SerialDisposable2.prototype.dispose = function() {
      if (!this.isDisposed) {
        this.isDisposed = true;
        var old = this.current;
        this.current = void 0;
        if (old) {
          old.dispose();
        }
      }
    };
    return SerialDisposable2;
  }();
  exports.SerialDisposable = SerialDisposable;
});
var CompositeDisposable_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var CompositeDisposable = function() {
    function CompositeDisposable2() {
      var disposables2 = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        disposables2[_i] = arguments[_i];
      }
      this.isDisposed = false;
      this.disposables = disposables2;
    }
    CompositeDisposable2.prototype.add = function(item) {
      if (this.isDisposed) {
        item.dispose();
      } else {
        this.disposables.push(item);
      }
    };
    CompositeDisposable2.prototype.remove = function(item) {
      var shouldDispose = false;
      if (!this.isDisposed) {
        var idx = this.disposables.indexOf(item);
        if (idx !== -1) {
          shouldDispose = true;
          this.disposables.splice(idx, 1);
          item.dispose();
        }
      }
      return shouldDispose;
    };
    CompositeDisposable2.prototype.clear = function() {
      if (!this.isDisposed) {
        var len = this.disposables.length;
        var currentDisposables = new Array(len);
        for (var i = 0; i < len; i++) {
          currentDisposables[i] = this.disposables[i];
        }
        this.disposables = [];
        for (var i = 0; i < len; i++) {
          currentDisposables[i].dispose();
        }
      }
    };
    CompositeDisposable2.prototype.dispose = function() {
      if (!this.isDisposed) {
        this.isDisposed = true;
        var len = this.disposables.length;
        var currentDisposables = new Array(len);
        for (var i = 0; i < len; i++) {
          currentDisposables[i] = this.disposables[i];
        }
        this.disposables = [];
        for (var i = 0; i < len; i++) {
          currentDisposables[i].dispose();
        }
      }
    };
    return CompositeDisposable2;
  }();
  exports.CompositeDisposable = CompositeDisposable;
});
var disposables = createCommonjsModule(function(module, exports) {
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  Object.defineProperty(exports, "__esModule", {value: true});
  __export(Disposable_1);
  __export(SerialDisposable_1);
  __export(CompositeDisposable_1);
});
var decorateHandler_1 = createCommonjsModule(function(module, exports) {
  var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (b2.hasOwnProperty(p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  function decorateHandler(_a) {
    var DecoratedComponent = _a.DecoratedComponent, createHandler = _a.createHandler, createMonitor = _a.createMonitor, createConnector = _a.createConnector, registerHandler = _a.registerHandler, containerDisplayName = _a.containerDisplayName, getType = _a.getType, collect = _a.collect, options = _a.options;
    var _b = options.arePropsEqual, arePropsEqual = _b === void 0 ? shallowequal : _b;
    var Decorated = DecoratedComponent;
    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || "Component";
    var DragDropContainer = function(_super) {
      __extends(DragDropContainer2, _super);
      function DragDropContainer2(props) {
        var _this = _super.call(this, props) || this;
        _this.decoratedRef = require$$0.createRef();
        _this.handleChange = function() {
          var nextState = _this.getCurrentState();
          if (!shallowequal(nextState, _this.state)) {
            _this.setState(nextState);
          }
        };
        _this.disposable = new disposables.SerialDisposable();
        _this.receiveProps(props);
        _this.dispose();
        return _this;
      }
      DragDropContainer2.prototype.getHandlerId = function() {
        return this.handlerId;
      };
      DragDropContainer2.prototype.getDecoratedComponentInstance = function() {
        browser(this.decoratedRef.current, "In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()");
        return this.decoratedRef.current;
      };
      DragDropContainer2.prototype.shouldComponentUpdate = function(nextProps, nextState) {
        return !arePropsEqual(nextProps, this.props) || !shallowequal(nextState, this.state);
      };
      DragDropContainer2.prototype.componentDidMount = function() {
        this.disposable = new disposables.SerialDisposable();
        this.currentType = void 0;
        this.receiveProps(this.props);
        this.handleChange();
      };
      DragDropContainer2.prototype.componentDidUpdate = function(prevProps) {
        if (!arePropsEqual(this.props, prevProps)) {
          this.receiveProps(this.props);
          this.handleChange();
        }
      };
      DragDropContainer2.prototype.componentWillUnmount = function() {
        this.dispose();
      };
      DragDropContainer2.prototype.receiveProps = function(props) {
        if (!this.handler) {
          return;
        }
        this.handler.receiveProps(props);
        this.receiveType(getType(props));
      };
      DragDropContainer2.prototype.receiveType = function(type) {
        if (!this.handlerMonitor || !this.manager || !this.handlerConnector) {
          return;
        }
        if (type === this.currentType) {
          return;
        }
        this.currentType = type;
        var _a2 = registerHandler(type, this.handler, this.manager), handlerId = _a2[0], unregister = _a2[1];
        this.handlerId = handlerId;
        this.handlerMonitor.receiveHandlerId(handlerId);
        this.handlerConnector.receiveHandlerId(handlerId);
        var globalMonitor = this.manager.getMonitor();
        var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, {handlerIds: [handlerId]});
        this.disposable.setDisposable(new disposables.CompositeDisposable(new disposables.Disposable(unsubscribe), new disposables.Disposable(unregister)));
      };
      DragDropContainer2.prototype.dispose = function() {
        this.disposable.dispose();
        if (this.handlerConnector) {
          this.handlerConnector.receiveHandlerId(null);
        }
      };
      DragDropContainer2.prototype.getCurrentState = function() {
        if (!this.handlerConnector) {
          return {};
        }
        var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor, this.props);
        return nextState;
      };
      DragDropContainer2.prototype.render = function() {
        var _this = this;
        return require$$0.createElement(DragDropContext_1.Consumer, null, function(_a2) {
          var dragDropManager = _a2.dragDropManager;
          _this.receiveDragDropManager(dragDropManager);
          if (typeof requestAnimationFrame !== "undefined") {
            requestAnimationFrame(function() {
              return _this.handlerConnector.reconnect();
            });
          }
          return require$$0.createElement(Decorated, __assign({}, _this.props, _this.getCurrentState(), {
            ref: isRefable_1.isRefable(Decorated) ? _this.decoratedRef : null
          }));
        });
      };
      DragDropContainer2.prototype.receiveDragDropManager = function(dragDropManager) {
        if (this.manager !== void 0) {
          return;
        }
        browser(dragDropManager !== void 0, "Could not find the drag and drop manager in the context of %s. Make sure to wrap the top-level component of your app with DragDropContext. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context", displayName, displayName);
        if (dragDropManager === void 0) {
          return;
        }
        this.manager = dragDropManager;
        this.handlerMonitor = createMonitor(dragDropManager);
        this.handlerConnector = createConnector(dragDropManager.getBackend());
        this.handler = createHandler(this.handlerMonitor, this.decoratedRef);
      };
      DragDropContainer2.DecoratedComponent = DecoratedComponent;
      DragDropContainer2.displayName = containerDisplayName + "(" + displayName + ")";
      return DragDropContainer2;
    }(require$$0.Component);
    return hoistNonReactStatics_cjs(DragDropContainer, DecoratedComponent);
  }
  exports.default = decorateHandler;
});
var registerSource_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function registerSource(type, source, manager) {
    var registry2 = manager.getRegistry();
    var sourceId = registry2.addSource(type, source);
    return [sourceId, function() {
      return registry2.removeSource(sourceId);
    }];
  }
  exports.default = registerSource;
});
var getDecoratedComponent_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function getDecoratedComponent(instanceRef) {
    var currentRef = instanceRef.current;
    if (currentRef == null) {
      return null;
    } else if (currentRef.decoratedRef) {
      return currentRef.decoratedRef.current;
    } else {
      return currentRef;
    }
  }
  exports.getDecoratedComponent = getDecoratedComponent;
});
var createSourceFactory_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var ALLOWED_SPEC_METHODS = ["canDrag", "beginDrag", "isDragging", "endDrag"];
  var REQUIRED_SPEC_METHODS = ["beginDrag"];
  var SourceImpl = function() {
    function SourceImpl2(spec, monitor, ref) {
      var _this = this;
      this.spec = spec;
      this.monitor = monitor;
      this.ref = ref;
      this.props = null;
      this.beginDrag = function() {
        if (!_this.props) {
          return;
        }
        var item = _this.spec.beginDrag(_this.props, _this.monitor, _this.ref.current);
        return item;
      };
    }
    SourceImpl2.prototype.receiveProps = function(props) {
      this.props = props;
    };
    SourceImpl2.prototype.canDrag = function() {
      if (!this.props) {
        return false;
      }
      if (!this.spec.canDrag) {
        return true;
      }
      return this.spec.canDrag(this.props, this.monitor);
    };
    SourceImpl2.prototype.isDragging = function(globalMonitor, sourceId) {
      if (!this.props) {
        return false;
      }
      if (!this.spec.isDragging) {
        return sourceId === globalMonitor.getSourceId();
      }
      return this.spec.isDragging(this.props, this.monitor);
    };
    SourceImpl2.prototype.endDrag = function() {
      if (!this.props) {
        return;
      }
      if (!this.spec.endDrag) {
        return;
      }
      this.spec.endDrag(this.props, this.monitor, getDecoratedComponent_1.getDecoratedComponent(this.ref));
    };
    return SourceImpl2;
  }();
  function createSourceFactory(spec) {
    Object.keys(spec).forEach(function(key) {
      browser(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', ALLOWED_SPEC_METHODS.join(", "), key);
      browser(typeof spec[key] === "function", "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source", key, key, spec[key]);
    });
    REQUIRED_SPEC_METHODS.forEach(function(key) {
      browser(typeof spec[key] === "function", "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source", key, key, spec[key]);
    });
    return function createSource(monitor, ref) {
      return new SourceImpl(spec, monitor, ref);
    };
  }
  exports.default = createSourceFactory;
});
var DragSourceMonitorImpl_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var isCallingCanDrag = false;
  var isCallingIsDragging = false;
  var DragSourceMonitorImpl = function() {
    function DragSourceMonitorImpl2(manager) {
      this.sourceId = null;
      this.internalMonitor = manager.getMonitor();
    }
    DragSourceMonitorImpl2.prototype.receiveHandlerId = function(sourceId) {
      this.sourceId = sourceId;
    };
    DragSourceMonitorImpl2.prototype.getHandlerId = function() {
      return this.sourceId;
    };
    DragSourceMonitorImpl2.prototype.canDrag = function() {
      browser(!isCallingCanDrag, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        isCallingCanDrag = true;
        return this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        isCallingCanDrag = false;
      }
    };
    DragSourceMonitorImpl2.prototype.isDragging = function() {
      if (!this.sourceId) {
        return false;
      }
      browser(!isCallingIsDragging, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        isCallingIsDragging = true;
        return this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        isCallingIsDragging = false;
      }
    };
    DragSourceMonitorImpl2.prototype.subscribeToStateChange = function(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    };
    DragSourceMonitorImpl2.prototype.isDraggingSource = function(sourceId) {
      return this.internalMonitor.isDraggingSource(sourceId);
    };
    DragSourceMonitorImpl2.prototype.isOverTarget = function(targetId, options) {
      return this.internalMonitor.isOverTarget(targetId, options);
    };
    DragSourceMonitorImpl2.prototype.getTargetIds = function() {
      return this.internalMonitor.getTargetIds();
    };
    DragSourceMonitorImpl2.prototype.isSourcePublic = function() {
      return this.internalMonitor.isSourcePublic();
    };
    DragSourceMonitorImpl2.prototype.getSourceId = function() {
      return this.internalMonitor.getSourceId();
    };
    DragSourceMonitorImpl2.prototype.subscribeToOffsetChange = function(listener) {
      return this.internalMonitor.subscribeToOffsetChange(listener);
    };
    DragSourceMonitorImpl2.prototype.canDragSource = function(sourceId) {
      return this.internalMonitor.canDragSource(sourceId);
    };
    DragSourceMonitorImpl2.prototype.canDropOnTarget = function(targetId) {
      return this.internalMonitor.canDropOnTarget(targetId);
    };
    DragSourceMonitorImpl2.prototype.getItemType = function() {
      return this.internalMonitor.getItemType();
    };
    DragSourceMonitorImpl2.prototype.getItem = function() {
      return this.internalMonitor.getItem();
    };
    DragSourceMonitorImpl2.prototype.getDropResult = function() {
      return this.internalMonitor.getDropResult();
    };
    DragSourceMonitorImpl2.prototype.didDrop = function() {
      return this.internalMonitor.didDrop();
    };
    DragSourceMonitorImpl2.prototype.getInitialClientOffset = function() {
      return this.internalMonitor.getInitialClientOffset();
    };
    DragSourceMonitorImpl2.prototype.getInitialSourceClientOffset = function() {
      return this.internalMonitor.getInitialSourceClientOffset();
    };
    DragSourceMonitorImpl2.prototype.getSourceClientOffset = function() {
      return this.internalMonitor.getSourceClientOffset();
    };
    DragSourceMonitorImpl2.prototype.getClientOffset = function() {
      return this.internalMonitor.getClientOffset();
    };
    DragSourceMonitorImpl2.prototype.getDifferenceFromInitialOffset = function() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    };
    return DragSourceMonitorImpl2;
  }();
  exports.default = DragSourceMonitorImpl;
});
var cloneWithRef_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function setRef(ref, node) {
    if (typeof ref === "function") {
      ref(node);
    } else {
      ref.current = node;
    }
  }
  function cloneWithRef(element, newRef) {
    var previousRef = element.ref;
    browser(typeof previousRef !== "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute");
    if (!previousRef) {
      return require$$0.cloneElement(element, {
        ref: newRef
      });
    }
    return require$$0.cloneElement(element, {
      ref: function(node) {
        setRef(newRef, node);
        if (previousRef) {
          setRef(previousRef, node);
        }
      }
    });
  }
  exports.default = cloneWithRef;
});
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(search, thisLen) {
    if (thisLen === void 0 || thisLen > this.length) {
      thisLen = this.length;
    }
    return this.substring(thisLen - search.length, thisLen) === search;
  };
}
var wrapConnectorHooks_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function throwIfCompositeComponentElement(element) {
    if (typeof element.type === "string") {
      return;
    }
    var displayName = element.type.displayName || element.type.name || "the component";
    throw new Error("Only native element nodes can now be passed to React DnD connectors." + ("You can either wrap " + displayName + " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
  }
  function wrapHookToRecognizeElement(hook) {
    return function(elementOrNode, options) {
      if (elementOrNode === void 0) {
        elementOrNode = null;
      }
      if (options === void 0) {
        options = null;
      }
      if (!require$$0.isValidElement(elementOrNode)) {
        var node = elementOrNode;
        hook(node, options);
        return node;
      }
      var element = elementOrNode;
      throwIfCompositeComponentElement(element);
      var ref = options ? function(node2) {
        return hook(node2, options);
      } : hook;
      return cloneWithRef_1.default(element, ref);
    };
  }
  function wrapConnectorHooks(hooks2) {
    var wrappedHooks = {};
    Object.keys(hooks2).forEach(function(key) {
      var hook = hooks2[key];
      if (key.endsWith("Ref")) {
        wrappedHooks[key] = hooks2[key];
      } else {
        var wrappedHook_1 = wrapHookToRecognizeElement(hook);
        wrappedHooks[key] = function() {
          return wrappedHook_1;
        };
      }
    });
    return wrappedHooks;
  }
  exports.default = wrapConnectorHooks;
});
var isRef_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function isRef(obj) {
    return obj !== null && typeof obj === "object" && obj.hasOwnProperty("current");
  }
  exports.isRef = isRef;
});
var SourceConnector_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var SourceConnector = function() {
    function SourceConnector2(backend) {
      var _this = this;
      this.backend = backend;
      this.hooks = wrapConnectorHooks_1.default({
        dragSource: function(node, options) {
          _this.dragSourceOptions = options || null;
          if (isRef_1.isRef(node)) {
            _this.dragSourceRef = node;
          } else {
            _this.dragSourceNode = node;
          }
          _this.reconnectDragSource();
        },
        dragPreview: function(node, options) {
          _this.dragPreviewOptions = options || null;
          if (isRef_1.isRef(node)) {
            _this.dragPreviewRef = node;
          } else {
            _this.dragPreviewNode = node;
          }
          _this.reconnectDragPreview();
        }
      });
      this.handlerId = null;
      this.dragSourceRef = null;
      this.dragSourceOptionsInternal = null;
      this.dragPreviewRef = null;
      this.dragPreviewOptionsInternal = null;
      this.lastConnectedHandlerId = null;
      this.lastConnectedDragSource = null;
      this.lastConnectedDragSourceOptions = null;
      this.lastConnectedDragPreview = null;
      this.lastConnectedDragPreviewOptions = null;
    }
    SourceConnector2.prototype.receiveHandlerId = function(newHandlerId) {
      if (this.handlerId === newHandlerId) {
        return;
      }
      this.handlerId = newHandlerId;
      this.reconnect();
    };
    Object.defineProperty(SourceConnector2.prototype, "connectTarget", {
      get: function() {
        return this.dragSource;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SourceConnector2.prototype, "dragSourceOptions", {
      get: function() {
        return this.dragSourceOptionsInternal;
      },
      set: function(options) {
        this.dragSourceOptionsInternal = options;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SourceConnector2.prototype, "dragPreviewOptions", {
      get: function() {
        return this.dragPreviewOptionsInternal;
      },
      set: function(options) {
        this.dragPreviewOptionsInternal = options;
      },
      enumerable: true,
      configurable: true
    });
    SourceConnector2.prototype.reconnect = function() {
      this.reconnectDragSource();
      this.reconnectDragPreview();
    };
    SourceConnector2.prototype.reconnectDragSource = function() {
      var didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
      if (didChange) {
        this.disconnectDragSource();
      }
      var dragSource = this.dragSource;
      if (!this.handlerId) {
        return;
      }
      if (!dragSource) {
        this.lastConnectedDragSource = dragSource;
        return;
      }
      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragSource = dragSource;
        this.lastConnectedDragSourceOptions = this.dragSourceOptions;
        this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
      }
    };
    SourceConnector2.prototype.reconnectDragPreview = function() {
      var didChange = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
      if (didChange) {
        this.disconnectDragPreview();
      }
      var dragPreview = this.dragPreview;
      if (!this.handlerId || !dragPreview) {
        return;
      }
      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragPreview = dragPreview;
        this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
        this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
      }
    };
    SourceConnector2.prototype.didHandlerIdChange = function() {
      return this.lastConnectedHandlerId !== this.handlerId;
    };
    SourceConnector2.prototype.didConnectedDragSourceChange = function() {
      return this.lastConnectedDragSource !== this.dragSource;
    };
    SourceConnector2.prototype.didConnectedDragPreviewChange = function() {
      return this.lastConnectedDragPreview !== this.dragPreview;
    };
    SourceConnector2.prototype.didDragSourceOptionsChange = function() {
      return !shallowequal(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    };
    SourceConnector2.prototype.didDragPreviewOptionsChange = function() {
      return !shallowequal(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    };
    SourceConnector2.prototype.disconnectDragSource = function() {
      if (this.dragSourceUnsubscribe) {
        this.dragSourceUnsubscribe();
        this.dragSourceUnsubscribe = void 0;
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
      }
    };
    SourceConnector2.prototype.disconnectDragPreview = function() {
      if (this.dragPreviewUnsubscribe) {
        this.dragPreviewUnsubscribe();
        this.dragPreviewUnsubscribe = void 0;
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
      }
    };
    Object.defineProperty(SourceConnector2.prototype, "dragSource", {
      get: function() {
        return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SourceConnector2.prototype, "dragPreview", {
      get: function() {
        return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
      },
      enumerable: true,
      configurable: true
    });
    return SourceConnector2;
  }();
  exports.default = SourceConnector;
});
var isValidType_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function isValidType(type, allowArray) {
    return typeof type === "string" || typeof type === "symbol" || !!allowArray && Array.isArray(type) && type.every(function(t) {
      return isValidType(t, false);
    });
  }
  exports.default = isValidType;
});
var DragSource_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function DragSource(type, spec, collect, options) {
    if (options === void 0) {
      options = {};
    }
    checkDecoratorArguments_1.default("DragSource", "type, spec, collect[, options]", type, spec, collect, options);
    var getType = type;
    if (typeof type !== "function") {
      browser(isValidType_1.default(type), 'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', type);
      getType = function() {
        return type;
      };
    }
    browser(discount_lodash$1.isPlainObject(spec), 'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', spec);
    var createSource = createSourceFactory_1.default(spec);
    browser(typeof collect === "function", 'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', collect);
    browser(discount_lodash$1.isPlainObject(options), 'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', collect);
    return function decorateSource(DecoratedComponent) {
      return decorateHandler_1.default({
        containerDisplayName: "DragSource",
        createHandler: createSource,
        registerHandler: registerSource_1.default,
        createConnector: function(backend) {
          return new SourceConnector_1.default(backend);
        },
        createMonitor: function(manager) {
          return new DragSourceMonitorImpl_1.default(manager);
        },
        DecoratedComponent,
        getType,
        collect,
        options
      });
    };
  }
  exports.default = DragSource;
});
var registerTarget_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function registerTarget(type, target, manager) {
    var registry2 = manager.getRegistry();
    var targetId = registry2.addTarget(type, target);
    return [targetId, function() {
      return registry2.removeTarget(targetId);
    }];
  }
  exports.default = registerTarget;
});
var createTargetFactory_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var ALLOWED_SPEC_METHODS = ["canDrop", "hover", "drop"];
  var TargetImpl = function() {
    function TargetImpl2(spec, monitor, ref) {
      this.spec = spec;
      this.monitor = monitor;
      this.ref = ref;
      this.props = null;
    }
    TargetImpl2.prototype.receiveProps = function(props) {
      this.props = props;
    };
    TargetImpl2.prototype.receiveMonitor = function(monitor) {
      this.monitor = monitor;
    };
    TargetImpl2.prototype.canDrop = function() {
      if (!this.spec.canDrop) {
        return true;
      }
      return this.spec.canDrop(this.props, this.monitor);
    };
    TargetImpl2.prototype.hover = function() {
      if (!this.spec.hover) {
        return;
      }
      this.spec.hover(this.props, this.monitor, getDecoratedComponent_1.getDecoratedComponent(this.ref));
    };
    TargetImpl2.prototype.drop = function() {
      if (!this.spec.drop) {
        return void 0;
      }
      var dropResult = this.spec.drop(this.props, this.monitor, this.ref.current);
      return dropResult;
    };
    return TargetImpl2;
  }();
  function createTargetFactory(spec) {
    Object.keys(spec).forEach(function(key) {
      browser(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', ALLOWED_SPEC_METHODS.join(", "), key);
      browser(typeof spec[key] === "function", "Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target", key, key, spec[key]);
    });
    return function createTarget(monitor, ref) {
      return new TargetImpl(spec, monitor, ref);
    };
  }
  exports.default = createTargetFactory;
});
var DropTargetMonitorImpl_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var isCallingCanDrop = false;
  var DropTargetMonitorImpl = function() {
    function DropTargetMonitorImpl2(manager) {
      this.targetId = null;
      this.internalMonitor = manager.getMonitor();
    }
    DropTargetMonitorImpl2.prototype.receiveHandlerId = function(targetId) {
      this.targetId = targetId;
    };
    DropTargetMonitorImpl2.prototype.getHandlerId = function() {
      return this.targetId;
    };
    DropTargetMonitorImpl2.prototype.subscribeToStateChange = function(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    };
    DropTargetMonitorImpl2.prototype.canDrop = function() {
      if (!this.targetId) {
        return false;
      }
      browser(!isCallingCanDrop, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        isCallingCanDrop = true;
        return this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        isCallingCanDrop = false;
      }
    };
    DropTargetMonitorImpl2.prototype.isOver = function(options) {
      if (!this.targetId) {
        return false;
      }
      return this.internalMonitor.isOverTarget(this.targetId, options);
    };
    DropTargetMonitorImpl2.prototype.getItemType = function() {
      return this.internalMonitor.getItemType();
    };
    DropTargetMonitorImpl2.prototype.getItem = function() {
      return this.internalMonitor.getItem();
    };
    DropTargetMonitorImpl2.prototype.getDropResult = function() {
      return this.internalMonitor.getDropResult();
    };
    DropTargetMonitorImpl2.prototype.didDrop = function() {
      return this.internalMonitor.didDrop();
    };
    DropTargetMonitorImpl2.prototype.getInitialClientOffset = function() {
      return this.internalMonitor.getInitialClientOffset();
    };
    DropTargetMonitorImpl2.prototype.getInitialSourceClientOffset = function() {
      return this.internalMonitor.getInitialSourceClientOffset();
    };
    DropTargetMonitorImpl2.prototype.getSourceClientOffset = function() {
      return this.internalMonitor.getSourceClientOffset();
    };
    DropTargetMonitorImpl2.prototype.getClientOffset = function() {
      return this.internalMonitor.getClientOffset();
    };
    DropTargetMonitorImpl2.prototype.getDifferenceFromInitialOffset = function() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    };
    return DropTargetMonitorImpl2;
  }();
  exports.default = DropTargetMonitorImpl;
});
var TargetConnector_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var TargetConnector = function() {
    function TargetConnector2(backend) {
      var _this = this;
      this.backend = backend;
      this.hooks = wrapConnectorHooks_1.default({
        dropTarget: function(node, options) {
          _this.dropTargetOptions = options;
          if (isRef_1.isRef(node)) {
            _this.dropTargetRef = node;
          } else {
            _this.dropTargetNode = node;
          }
          _this.reconnect();
        }
      });
      this.handlerId = null;
      this.dropTargetRef = null;
      this.dropTargetOptionsInternal = null;
      this.lastConnectedHandlerId = null;
      this.lastConnectedDropTarget = null;
      this.lastConnectedDropTargetOptions = null;
    }
    Object.defineProperty(TargetConnector2.prototype, "connectTarget", {
      get: function() {
        return this.dropTarget;
      },
      enumerable: true,
      configurable: true
    });
    TargetConnector2.prototype.reconnect = function() {
      var didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
      if (didChange) {
        this.disconnectDropTarget();
      }
      var dropTarget = this.dropTarget;
      if (!this.handlerId) {
        return;
      }
      if (!dropTarget) {
        this.lastConnectedDropTarget = dropTarget;
        return;
      }
      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDropTarget = dropTarget;
        this.lastConnectedDropTargetOptions = this.dropTargetOptions;
        this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
      }
    };
    TargetConnector2.prototype.receiveHandlerId = function(newHandlerId) {
      if (newHandlerId === this.handlerId) {
        return;
      }
      this.handlerId = newHandlerId;
      this.reconnect();
    };
    Object.defineProperty(TargetConnector2.prototype, "dropTargetOptions", {
      get: function() {
        return this.dropTargetOptionsInternal;
      },
      set: function(options) {
        this.dropTargetOptionsInternal = options;
      },
      enumerable: true,
      configurable: true
    });
    TargetConnector2.prototype.didHandlerIdChange = function() {
      return this.lastConnectedHandlerId !== this.handlerId;
    };
    TargetConnector2.prototype.didDropTargetChange = function() {
      return this.lastConnectedDropTarget !== this.dropTarget;
    };
    TargetConnector2.prototype.didOptionsChange = function() {
      return !shallowequal(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    };
    TargetConnector2.prototype.disconnectDropTarget = function() {
      if (this.unsubscribeDropTarget) {
        this.unsubscribeDropTarget();
        this.unsubscribeDropTarget = void 0;
      }
    };
    Object.defineProperty(TargetConnector2.prototype, "dropTarget", {
      get: function() {
        return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
      },
      enumerable: true,
      configurable: true
    });
    return TargetConnector2;
  }();
  exports.default = TargetConnector;
});
var DropTarget_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function DropTarget(type, spec, collect, options) {
    if (options === void 0) {
      options = {};
    }
    checkDecoratorArguments_1.default("DropTarget", "type, spec, collect[, options]", type, spec, collect, options);
    var getType = type;
    if (typeof type !== "function") {
      browser(isValidType_1.default(type, true), 'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', type);
      getType = function() {
        return type;
      };
    }
    browser(discount_lodash$1.isPlainObject(spec), 'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', spec);
    var createTarget = createTargetFactory_1.default(spec);
    browser(typeof collect === "function", 'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', collect);
    browser(discount_lodash$1.isPlainObject(options), 'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', collect);
    return function decorateTarget(DecoratedComponent) {
      return decorateHandler_1.default({
        containerDisplayName: "DropTarget",
        createHandler: createTarget,
        registerHandler: registerTarget_1.default,
        createMonitor: function(manager) {
          return new DropTargetMonitorImpl_1.default(manager);
        },
        createConnector: function(backend) {
          return new TargetConnector_1.default(backend);
        },
        DecoratedComponent,
        getType,
        collect,
        options
      });
    };
  }
  exports.default = DropTarget;
});
var DragPreviewImage_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var DragPreviewImage = require$$0.memo(function(_a) {
    var connect = _a.connect, src = _a.src;
    if (typeof Image !== "undefined") {
      var img_1 = new Image();
      img_1.src = src;
      img_1.onload = function() {
        return connect(img_1);
      };
    }
    return null;
  });
  DragPreviewImage.displayName = "DragPreviewImage";
  exports.default = DragPreviewImage;
});
var useCollector_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function useCollector(monitor, collect, onUpdate) {
    var _a = require$$0.useState(function() {
      return collect(monitor);
    }), collected = _a[0], setCollected = _a[1];
    var updateCollected = require$$0.useCallback(function() {
      var nextValue = collect(monitor);
      if (!shallowequal(collected, nextValue)) {
        setCollected(nextValue);
        if (onUpdate) {
          onUpdate();
        }
      }
    }, [collected, monitor, onUpdate]);
    return [collected, updateCollected];
  }
  exports.useCollector = useCollector;
});
var useMonitorOutput_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function useMonitorOutput(monitor, collect, onCollect) {
    var _a = useCollector_1.useCollector(monitor, collect, onCollect), collected = _a[0], updateCollected = _a[1];
    require$$0.useEffect(function subscribeToMonitorStateChange() {
      var handlerId = monitor.getHandlerId();
      if (handlerId == null) {
        return void 0;
      }
      return monitor.subscribeToStateChange(updateCollected, {
        handlerIds: [handlerId]
      });
    }, [monitor, updateCollected]);
    return collected;
  }
  exports.useMonitorOutput = useMonitorOutput;
});
var useDragDropManager_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function useDragDropManager() {
    var dragDropManager = require$$0.useContext(DragDropContext_1.context).dragDropManager;
    browser(dragDropManager != null, "Expected drag drop context");
    return dragDropManager;
  }
  exports.useDragDropManager = useDragDropManager;
});
var drag = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function useDragSourceMonitor() {
    var manager = useDragDropManager_1.useDragDropManager();
    var monitor = require$$0.useMemo(function() {
      return new DragSourceMonitorImpl_1.default(manager);
    }, [manager]);
    var connector = require$$0.useMemo(function() {
      return new SourceConnector_1.default(manager.getBackend());
    }, [
      manager
    ]);
    return [monitor, connector];
  }
  exports.useDragSourceMonitor = useDragSourceMonitor;
  function useDragHandler(spec, monitor, connector) {
    var manager = useDragDropManager_1.useDragDropManager();
    var handler = require$$0.useMemo(function() {
      return {
        beginDrag: function() {
          var _a = spec.current, begin = _a.begin, item = _a.item;
          if (begin) {
            var beginResult = begin(monitor);
            browser(beginResult == null || typeof beginResult === "object", "dragSpec.begin() must either return an object, undefined, or null");
            return beginResult || item || {};
          }
          return item || {};
        },
        canDrag: function() {
          if (typeof spec.current.canDrag === "boolean") {
            return spec.current.canDrag;
          } else if (typeof spec.current.canDrag === "function") {
            return spec.current.canDrag(monitor);
          } else {
            return true;
          }
        },
        isDragging: function(globalMonitor, target) {
          var isDragging = spec.current.isDragging;
          return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
        },
        endDrag: function() {
          var end = spec.current.end;
          if (end) {
            end(monitor.getItem(), monitor);
          }
          connector.reconnect();
        }
      };
    }, []);
    require$$0.useEffect(function registerHandler() {
      var _a = registerSource_1.default(spec.current.item.type, handler, manager), handlerId = _a[0], unregister = _a[1];
      monitor.receiveHandlerId(handlerId);
      connector.receiveHandlerId(handlerId);
      return unregister;
    }, []);
  }
  exports.useDragHandler = useDragHandler;
});
var useDrag_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function useDrag(spec) {
    var specRef = require$$0.useRef(spec);
    specRef.current = spec;
    browser(spec.item != null, "item must be defined");
    browser(spec.item.type != null, "item type must be defined");
    var _a = drag.useDragSourceMonitor(), monitor = _a[0], connector = _a[1];
    drag.useDragHandler(specRef, monitor, connector);
    var result2 = useMonitorOutput_1.useMonitorOutput(monitor, specRef.current.collect || function() {
      return {};
    }, function() {
      return connector.reconnect();
    });
    var connectDragSource = require$$0.useMemo(function() {
      return connector.hooks.dragSource();
    }, [
      connector
    ]);
    var connectDragPreview = require$$0.useMemo(function() {
      return connector.hooks.dragPreview();
    }, [
      connector
    ]);
    require$$0.useEffect(function() {
      connector.dragSourceOptions = specRef.current.options || null;
      connector.reconnect();
    }, [connector]);
    require$$0.useEffect(function() {
      connector.dragPreviewOptions = specRef.current.previewOptions || null;
      connector.reconnect();
    }, [connector]);
    return [result2, connectDragSource, connectDragPreview];
  }
  exports.useDrag = useDrag;
});
var drop$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function useDropTargetMonitor() {
    var manager = useDragDropManager_1.useDragDropManager();
    var monitor = require$$0.useMemo(function() {
      return new DropTargetMonitorImpl_1.default(manager);
    }, [manager]);
    var connector = require$$0.useMemo(function() {
      return new TargetConnector_1.default(manager.getBackend());
    }, [
      manager
    ]);
    return [monitor, connector];
  }
  exports.useDropTargetMonitor = useDropTargetMonitor;
  function useDropHandler(spec, monitor, connector) {
    var manager = useDragDropManager_1.useDragDropManager();
    var handler = require$$0.useMemo(function() {
      return {
        canDrop: function() {
          var canDrop = spec.current.canDrop;
          return canDrop ? canDrop(monitor.getItem(), monitor) : true;
        },
        hover: function() {
          var hover2 = spec.current.hover;
          if (hover2) {
            hover2(monitor.getItem(), monitor);
          }
        },
        drop: function() {
          var drop2 = spec.current.drop;
          if (drop2) {
            return drop2(monitor.getItem(), monitor);
          }
        }
      };
    }, [monitor]);
    require$$0.useEffect(function registerHandler() {
      var _a = registerTarget_1.default(spec.current.accept, handler, manager), handlerId = _a[0], unregister = _a[1];
      monitor.receiveHandlerId(handlerId);
      connector.receiveHandlerId(handlerId);
      return unregister;
    }, [monitor, connector]);
  }
  exports.useDropHandler = useDropHandler;
});
var useDrop_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function useDrop(spec) {
    var specRef = require$$0.useRef(spec);
    specRef.current = spec;
    browser(spec.accept != null, "accept must be defined");
    var _a = drop$1.useDropTargetMonitor(), monitor = _a[0], connector = _a[1];
    drop$1.useDropHandler(specRef, monitor, connector);
    var result2 = useMonitorOutput_1.useMonitorOutput(monitor, specRef.current.collect || function() {
      return {};
    }, function() {
      return connector.reconnect();
    });
    var connectDropTarget = require$$0.useMemo(function() {
      return connector.hooks.dropTarget();
    }, [
      connector
    ]);
    require$$0.useEffect(function() {
      connector.dropTargetOptions = spec.options || null;
      connector.reconnect();
    }, [spec.options]);
    return [result2, connectDropTarget];
  }
  exports.useDrop = useDrop;
});
var useDragLayer_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function useDragLayer(collect) {
    var dragDropManager = useDragDropManager_1.useDragDropManager();
    var monitor = dragDropManager.getMonitor();
    var _a = useCollector_1.useCollector(monitor, collect), collected = _a[0], updateCollected = _a[1];
    require$$0.useEffect(function() {
      return monitor.subscribeToOffsetChange(updateCollected);
    });
    require$$0.useEffect(function() {
      return monitor.subscribeToStateChange(updateCollected);
    });
    return collected;
  }
  exports.useDragLayer = useDragLayer;
});
var hooks = createCommonjsModule(function(module, exports) {
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  Object.defineProperty(exports, "__esModule", {value: true});
  __export(useDrag_1);
  __export(useDrop_1);
  __export(useDragLayer_1);
});
var cjs$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DragDropContext = DragDropContext_1.DragDropContext;
  exports.DragDropContextProvider = DragDropContext_1.DragDropContextProvider;
  exports.DragDropContextConsumer = DragDropContext_1.Consumer;
  exports.DragLayer = DragLayer_1.default;
  exports.DragSource = DragSource_1.default;
  exports.DropTarget = DropTarget_1.default;
  exports.DragPreviewImage = DragPreviewImage_1.default;
  exports.useDrag = hooks.useDrag;
  exports.useDragLayer = hooks.useDragLayer;
  exports.useDrop = hooks.useDrop;
});
var discount_lodash$2 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function memoize(fn) {
    var result2 = null;
    var memoized = function() {
      if (result2 == null) {
        result2 = fn();
      }
      return result2;
    };
    return memoized;
  }
  exports.memoize = memoize;
  function without(items, item) {
    return items.filter(function(i) {
      return i !== item;
    });
  }
  exports.without = without;
  function union(itemsA, itemsB) {
    var set = new Set();
    var insertItem = function(item) {
      return set.add(item);
    };
    itemsA.forEach(insertItem);
    itemsB.forEach(insertItem);
    var result2 = [];
    set.forEach(function(key) {
      return result2.push(key);
    });
    return result2;
  }
  exports.union = union;
});
var EnterLeaveCounter_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var EnterLeaveCounter = function() {
    function EnterLeaveCounter2(isNodeInDocument) {
      this.entered = [];
      this.isNodeInDocument = isNodeInDocument;
    }
    EnterLeaveCounter2.prototype.enter = function(enteringNode) {
      var _this = this;
      var previousLength = this.entered.length;
      var isNodeEntered = function(node) {
        return _this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
      };
      this.entered = discount_lodash$2.union(this.entered.filter(isNodeEntered), [enteringNode]);
      return previousLength === 0 && this.entered.length > 0;
    };
    EnterLeaveCounter2.prototype.leave = function(leavingNode) {
      var previousLength = this.entered.length;
      this.entered = discount_lodash$2.without(this.entered.filter(this.isNodeInDocument), leavingNode);
      return previousLength > 0 && this.entered.length === 0;
    };
    EnterLeaveCounter2.prototype.reset = function() {
      this.entered = [];
    };
    return EnterLeaveCounter2;
  }();
  exports.default = EnterLeaveCounter;
});
var BrowserDetector = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isFirefox = discount_lodash$2.memoize(function() {
    return /firefox/i.test(navigator.userAgent);
  });
  exports.isSafari = discount_lodash$2.memoize(function() {
    return Boolean(window.safari);
  });
});
var MonotonicInterpolant_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var MonotonicInterpolant = function() {
    function MonotonicInterpolant2(xs, ys) {
      var length = xs.length;
      var indexes = [];
      for (var i = 0; i < length; i++) {
        indexes.push(i);
      }
      indexes.sort(function(a, b) {
        return xs[a] < xs[b] ? -1 : 1;
      });
      var dxs = [];
      var ms = [];
      var dx;
      var dy;
      for (var i = 0; i < length - 1; i++) {
        dx = xs[i + 1] - xs[i];
        dy = ys[i + 1] - ys[i];
        dxs.push(dx);
        ms.push(dy / dx);
      }
      var c1s = [ms[0]];
      for (var i = 0; i < dxs.length - 1; i++) {
        var m29 = ms[i];
        var mNext = ms[i + 1];
        if (m29 * mNext <= 0) {
          c1s.push(0);
        } else {
          dx = dxs[i];
          var dxNext = dxs[i + 1];
          var common = dx + dxNext;
          c1s.push(3 * common / ((common + dxNext) / m29 + (common + dx) / mNext));
        }
      }
      c1s.push(ms[ms.length - 1]);
      var c2s = [];
      var c3s = [];
      var m;
      for (var i = 0; i < c1s.length - 1; i++) {
        m = ms[i];
        var c1 = c1s[i];
        var invDx = 1 / dxs[i];
        var common = c1 + c1s[i + 1] - m - m;
        c2s.push((m - c1 - common) * invDx);
        c3s.push(common * invDx * invDx);
      }
      this.xs = xs;
      this.ys = ys;
      this.c1s = c1s;
      this.c2s = c2s;
      this.c3s = c3s;
    }
    MonotonicInterpolant2.prototype.interpolate = function(x) {
      var _a = this, xs = _a.xs, ys = _a.ys, c1s = _a.c1s, c2s = _a.c2s, c3s = _a.c3s;
      var i = xs.length - 1;
      if (x === xs[i]) {
        return ys[i];
      }
      var low = 0;
      var high = c3s.length - 1;
      var mid;
      while (low <= high) {
        mid = Math.floor(0.5 * (low + high));
        var xHere = xs[mid];
        if (xHere < x) {
          low = mid + 1;
        } else if (xHere > x) {
          high = mid - 1;
        } else {
          return ys[mid];
        }
      }
      i = Math.max(0, high);
      var diff = x - xs[i];
      var diffSq = diff * diff;
      return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
    };
    return MonotonicInterpolant2;
  }();
  exports.default = MonotonicInterpolant;
});
var OffsetUtils = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var ELEMENT_NODE = 1;
  function getNodeClientOffset(node) {
    var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
    if (!el) {
      return null;
    }
    var _a = el.getBoundingClientRect(), top = _a.top, left = _a.left;
    return {x: left, y: top};
  }
  exports.getNodeClientOffset = getNodeClientOffset;
  function getEventClientOffset(e) {
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
  exports.getEventClientOffset = getEventClientOffset;
  function isImageNode(node) {
    return node.nodeName === "IMG" && (BrowserDetector.isFirefox() || !document.documentElement.contains(node));
  }
  function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
    var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
    var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
    if (BrowserDetector.isSafari() && isImage) {
      dragPreviewHeight /= window.devicePixelRatio;
      dragPreviewWidth /= window.devicePixelRatio;
    }
    return {dragPreviewWidth, dragPreviewHeight};
  }
  function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
    var isImage = isImageNode(dragPreview);
    var dragPreviewNode = isImage ? sourceNode : dragPreview;
    var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
    var offsetFromDragPreview = {
      x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
      y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
    };
    var sourceWidth = sourceNode.offsetWidth, sourceHeight = sourceNode.offsetHeight;
    var anchorX = anchorPoint.anchorX, anchorY = anchorPoint.anchorY;
    var _a = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight), dragPreviewWidth = _a.dragPreviewWidth, dragPreviewHeight = _a.dragPreviewHeight;
    var calculateYOffset = function() {
      var interpolantY = new MonotonicInterpolant_1.default([0, 0.5, 1], [
        offsetFromDragPreview.y,
        offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
        offsetFromDragPreview.y + dragPreviewHeight - sourceHeight
      ]);
      var y = interpolantY.interpolate(anchorY);
      if (BrowserDetector.isSafari() && isImage) {
        y += (window.devicePixelRatio - 1) * dragPreviewHeight;
      }
      return y;
    };
    var calculateXOffset = function() {
      var interpolantX = new MonotonicInterpolant_1.default([0, 0.5, 1], [
        offsetFromDragPreview.x,
        offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
        offsetFromDragPreview.x + dragPreviewWidth - sourceWidth
      ]);
      return interpolantX.interpolate(anchorX);
    };
    var offsetX = offsetPoint.offsetX, offsetY = offsetPoint.offsetY;
    var isManualOffsetX = offsetX === 0 || offsetX;
    var isManualOffsetY = offsetY === 0 || offsetY;
    return {
      x: isManualOffsetX ? offsetX : calculateXOffset(),
      y: isManualOffsetY ? offsetY : calculateYOffset()
    };
  }
  exports.getDragPreviewOffset = getDragPreviewOffset;
});
var NativeTypes = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FILE = "__NATIVE_FILE__";
  exports.URL = "__NATIVE_URL__";
  exports.TEXT = "__NATIVE_TEXT__";
});
var getDataFromDataTransfer_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
    var result2 = typesToTry.reduce(function(resultSoFar, typeToTry) {
      return resultSoFar || dataTransfer.getData(typeToTry);
    }, "");
    return result2 != null ? result2 : defaultValue;
  }
  exports.getDataFromDataTransfer = getDataFromDataTransfer;
});
var nativeTypesConfig = createCommonjsModule(function(module, exports) {
  var _a;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.nativeTypesConfig = (_a = {}, _a[NativeTypes.FILE] = {
    exposeProperties: {
      files: function(dataTransfer) {
        return Array.prototype.slice.call(dataTransfer.files);
      },
      items: function(dataTransfer) {
        return dataTransfer.items;
      }
    },
    matchesTypes: ["Files"]
  }, _a[NativeTypes.URL] = {
    exposeProperties: {
      urls: function(dataTransfer, matchesTypes) {
        return getDataFromDataTransfer_1.getDataFromDataTransfer(dataTransfer, matchesTypes, "").split("\n");
      }
    },
    matchesTypes: ["Url", "text/uri-list"]
  }, _a[NativeTypes.TEXT] = {
    exposeProperties: {
      text: function(dataTransfer, matchesTypes) {
        return getDataFromDataTransfer_1.getDataFromDataTransfer(dataTransfer, matchesTypes, "");
      }
    },
    matchesTypes: ["Text", "text/plain"]
  }, _a);
});
var NativeDragSource_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var NativeDragSource = function() {
    function NativeDragSource2(config) {
      var _this = this;
      this.config = config;
      this.item = {};
      Object.keys(this.config.exposeProperties).forEach(function(property) {
        Object.defineProperty(_this.item, property, {
          configurable: true,
          enumerable: true,
          get: function() {
            console.warn(`Browser doesn't allow reading "` + property + '" until the drop event.');
            return null;
          }
        });
      });
    }
    NativeDragSource2.prototype.mutateItemByReadingDataTransfer = function(dataTransfer) {
      var _this = this;
      var newProperties = {};
      if (dataTransfer) {
        Object.keys(this.config.exposeProperties).forEach(function(property) {
          newProperties[property] = {
            value: _this.config.exposeProperties[property](dataTransfer, _this.config.matchesTypes)
          };
        });
      }
      Object.defineProperties(this.item, newProperties);
    };
    NativeDragSource2.prototype.canDrag = function() {
      return true;
    };
    NativeDragSource2.prototype.beginDrag = function() {
      return this.item;
    };
    NativeDragSource2.prototype.isDragging = function(monitor, handle) {
      return handle === monitor.getSourceId();
    };
    NativeDragSource2.prototype.endDrag = function() {
    };
    return NativeDragSource2;
  }();
  exports.NativeDragSource = NativeDragSource;
});
var NativeDragSources = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  function createNativeDragSource(type) {
    return new NativeDragSource_1.NativeDragSource(nativeTypesConfig.nativeTypesConfig[type]);
  }
  exports.createNativeDragSource = createNativeDragSource;
  function matchNativeItemType(dataTransfer) {
    if (!dataTransfer) {
      return null;
    }
    var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
    return Object.keys(nativeTypesConfig.nativeTypesConfig).filter(function(nativeItemType) {
      var matchesTypes = nativeTypesConfig.nativeTypesConfig[nativeItemType].matchesTypes;
      return matchesTypes.some(function(t) {
        return dataTransferTypes.indexOf(t) > -1;
      });
    })[0] || null;
  }
  exports.matchNativeItemType = matchNativeItemType;
});
var HTML5Backend_1 = createCommonjsModule(function(module, exports) {
  var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  var HTML5Backend2 = function() {
    function HTML5Backend3(manager) {
      var _this = this;
      this.sourcePreviewNodes = new Map();
      this.sourcePreviewNodeOptions = new Map();
      this.sourceNodes = new Map();
      this.sourceNodeOptions = new Map();
      this.dragStartSourceIds = null;
      this.dropTargetIds = [];
      this.dragEnterTargetIds = [];
      this.currentNativeSource = null;
      this.currentNativeHandle = null;
      this.currentDragSourceNode = null;
      this.altKeyPressed = false;
      this.mouseMoveTimeoutTimer = null;
      this.asyncEndDragFrameId = null;
      this.dragOverTargetIds = null;
      this.getSourceClientOffset = function(sourceId) {
        return OffsetUtils.getNodeClientOffset(_this.sourceNodes.get(sourceId));
      };
      this.endDragNativeItem = function() {
        if (!_this.isDraggingNativeItem()) {
          return;
        }
        _this.actions.endDrag();
        _this.registry.removeSource(_this.currentNativeHandle);
        _this.currentNativeHandle = null;
        _this.currentNativeSource = null;
      };
      this.isNodeInDocument = function(node) {
        return !!document && document.body.contains(node) || !!_this.window && _this.window.document.body.contains(node);
      };
      this.endDragIfSourceWasRemovedFromDOM = function() {
        var node = _this.currentDragSourceNode;
        if (_this.isNodeInDocument(node)) {
          return;
        }
        if (_this.clearCurrentDragSourceNode()) {
          _this.actions.endDrag();
        }
      };
      this.handleTopDragStartCapture = function() {
        _this.clearCurrentDragSourceNode();
        _this.dragStartSourceIds = [];
      };
      this.handleTopDragStart = function(e) {
        var dragStartSourceIds = _this.dragStartSourceIds;
        _this.dragStartSourceIds = null;
        var clientOffset = OffsetUtils.getEventClientOffset(e);
        if (_this.monitor.isDragging()) {
          _this.actions.endDrag();
        }
        _this.actions.beginDrag(dragStartSourceIds || [], {
          publishSource: false,
          getSourceClientOffset: _this.getSourceClientOffset,
          clientOffset
        });
        var dataTransfer = e.dataTransfer;
        var nativeType = NativeDragSources.matchNativeItemType(dataTransfer);
        if (_this.monitor.isDragging()) {
          if (dataTransfer && typeof dataTransfer.setDragImage === "function") {
            var sourceId = _this.monitor.getSourceId();
            var sourceNode = _this.sourceNodes.get(sourceId);
            var dragPreview = _this.sourcePreviewNodes.get(sourceId) || sourceNode;
            if (dragPreview) {
              var _a = _this.getCurrentSourcePreviewNodeOptions(), anchorX = _a.anchorX, anchorY = _a.anchorY, offsetX = _a.offsetX, offsetY = _a.offsetY;
              var anchorPoint = {anchorX, anchorY};
              var offsetPoint = {offsetX, offsetY};
              var dragPreviewOffset = OffsetUtils.getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
              dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
            }
          }
          try {
            dataTransfer.setData("application/json", {});
          } catch (err) {
          }
          _this.setCurrentDragSourceNode(e.target);
          var captureDraggingState = _this.getCurrentSourcePreviewNodeOptions().captureDraggingState;
          if (!captureDraggingState) {
            setTimeout(function() {
              return _this.actions.publishDragSource();
            }, 0);
          } else {
            _this.actions.publishDragSource();
          }
        } else if (nativeType) {
          _this.beginDragNativeItem(nativeType);
        } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable"))) {
          return;
        } else {
          e.preventDefault();
        }
      };
      this.handleTopDragEndCapture = function() {
        if (_this.clearCurrentDragSourceNode()) {
          _this.actions.endDrag();
        }
      };
      this.handleTopDragEnterCapture = function(e) {
        _this.dragEnterTargetIds = [];
        var isFirstEnter = _this.enterLeaveCounter.enter(e.target);
        if (!isFirstEnter || _this.monitor.isDragging()) {
          return;
        }
        var dataTransfer = e.dataTransfer;
        var nativeType = NativeDragSources.matchNativeItemType(dataTransfer);
        if (nativeType) {
          _this.beginDragNativeItem(nativeType);
        }
      };
      this.handleTopDragEnter = function(e) {
        var dragEnterTargetIds = _this.dragEnterTargetIds;
        _this.dragEnterTargetIds = [];
        if (!_this.monitor.isDragging()) {
          return;
        }
        _this.altKeyPressed = e.altKey;
        if (!BrowserDetector.isFirefox()) {
          _this.actions.hover(dragEnterTargetIds, {
            clientOffset: OffsetUtils.getEventClientOffset(e)
          });
        }
        var canDrop = dragEnterTargetIds.some(function(targetId) {
          return _this.monitor.canDropOnTarget(targetId);
        });
        if (canDrop) {
          e.preventDefault();
          if (e.dataTransfer) {
            e.dataTransfer.dropEffect = _this.getCurrentDropEffect();
          }
        }
      };
      this.handleTopDragOverCapture = function() {
        _this.dragOverTargetIds = [];
      };
      this.handleTopDragOver = function(e) {
        var dragOverTargetIds = _this.dragOverTargetIds;
        _this.dragOverTargetIds = [];
        if (!_this.monitor.isDragging()) {
          e.preventDefault();
          if (e.dataTransfer) {
            e.dataTransfer.dropEffect = "none";
          }
          return;
        }
        _this.altKeyPressed = e.altKey;
        _this.actions.hover(dragOverTargetIds || [], {
          clientOffset: OffsetUtils.getEventClientOffset(e)
        });
        var canDrop = (dragOverTargetIds || []).some(function(targetId) {
          return _this.monitor.canDropOnTarget(targetId);
        });
        if (canDrop) {
          e.preventDefault();
          if (e.dataTransfer) {
            e.dataTransfer.dropEffect = _this.getCurrentDropEffect();
          }
        } else if (_this.isDraggingNativeItem()) {
          e.preventDefault();
        } else {
          e.preventDefault();
          if (e.dataTransfer) {
            e.dataTransfer.dropEffect = "none";
          }
        }
      };
      this.handleTopDragLeaveCapture = function(e) {
        if (_this.isDraggingNativeItem()) {
          e.preventDefault();
        }
        var isLastLeave = _this.enterLeaveCounter.leave(e.target);
        if (!isLastLeave) {
          return;
        }
        if (_this.isDraggingNativeItem()) {
          _this.endDragNativeItem();
        }
      };
      this.handleTopDropCapture = function(e) {
        _this.dropTargetIds = [];
        e.preventDefault();
        if (_this.isDraggingNativeItem()) {
          _this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer);
        }
        _this.enterLeaveCounter.reset();
      };
      this.handleTopDrop = function(e) {
        var dropTargetIds = _this.dropTargetIds;
        _this.dropTargetIds = [];
        _this.actions.hover(dropTargetIds, {
          clientOffset: OffsetUtils.getEventClientOffset(e)
        });
        _this.actions.drop({dropEffect: _this.getCurrentDropEffect()});
        if (_this.isDraggingNativeItem()) {
          _this.endDragNativeItem();
        } else {
          _this.endDragIfSourceWasRemovedFromDOM();
        }
      };
      this.handleSelectStart = function(e) {
        var target = e.target;
        if (typeof target.dragDrop !== "function") {
          return;
        }
        if (target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
          return;
        }
        e.preventDefault();
        target.dragDrop();
      };
      this.actions = manager.getActions();
      this.monitor = manager.getMonitor();
      this.registry = manager.getRegistry();
      this.context = manager.getContext();
      this.enterLeaveCounter = new EnterLeaveCounter_1.default(this.isNodeInDocument);
    }
    Object.defineProperty(HTML5Backend3.prototype, "window", {
      get: function() {
        if (this.context && this.context.window) {
          return this.context.window;
        } else if (typeof window !== "undefined") {
          return window;
        }
        return void 0;
      },
      enumerable: true,
      configurable: true
    });
    HTML5Backend3.prototype.setup = function() {
      if (this.window === void 0) {
        return;
      }
      if (this.window.__isReactDndBackendSetUp) {
        throw new Error("Cannot have two HTML5 backends at the same time.");
      }
      this.window.__isReactDndBackendSetUp = true;
      this.addEventListeners(this.window);
    };
    HTML5Backend3.prototype.teardown = function() {
      if (this.window === void 0) {
        return;
      }
      this.window.__isReactDndBackendSetUp = false;
      this.removeEventListeners(this.window);
      this.clearCurrentDragSourceNode();
      if (this.asyncEndDragFrameId) {
        this.window.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    };
    HTML5Backend3.prototype.connectDragPreview = function(sourceId, node, options) {
      var _this = this;
      this.sourcePreviewNodeOptions.set(sourceId, options);
      this.sourcePreviewNodes.set(sourceId, node);
      return function() {
        _this.sourcePreviewNodes.delete(sourceId);
        _this.sourcePreviewNodeOptions.delete(sourceId);
      };
    };
    HTML5Backend3.prototype.connectDragSource = function(sourceId, node, options) {
      var _this = this;
      this.sourceNodes.set(sourceId, node);
      this.sourceNodeOptions.set(sourceId, options);
      var handleDragStart = function(e) {
        return _this.handleDragStart(e, sourceId);
      };
      var handleSelectStart = function(e) {
        return _this.handleSelectStart(e);
      };
      node.setAttribute("draggable", "true");
      node.addEventListener("dragstart", handleDragStart);
      node.addEventListener("selectstart", handleSelectStart);
      return function() {
        _this.sourceNodes.delete(sourceId);
        _this.sourceNodeOptions.delete(sourceId);
        node.removeEventListener("dragstart", handleDragStart);
        node.removeEventListener("selectstart", handleSelectStart);
        node.setAttribute("draggable", "false");
      };
    };
    HTML5Backend3.prototype.connectDropTarget = function(targetId, node) {
      var _this = this;
      var handleDragEnter = function(e) {
        return _this.handleDragEnter(e, targetId);
      };
      var handleDragOver = function(e) {
        return _this.handleDragOver(e, targetId);
      };
      var handleDrop = function(e) {
        return _this.handleDrop(e, targetId);
      };
      node.addEventListener("dragenter", handleDragEnter);
      node.addEventListener("dragover", handleDragOver);
      node.addEventListener("drop", handleDrop);
      return function() {
        node.removeEventListener("dragenter", handleDragEnter);
        node.removeEventListener("dragover", handleDragOver);
        node.removeEventListener("drop", handleDrop);
      };
    };
    HTML5Backend3.prototype.addEventListeners = function(target) {
      if (!target.addEventListener) {
        return;
      }
      target.addEventListener("dragstart", this.handleTopDragStart);
      target.addEventListener("dragstart", this.handleTopDragStartCapture, true);
      target.addEventListener("dragend", this.handleTopDragEndCapture, true);
      target.addEventListener("dragenter", this.handleTopDragEnter);
      target.addEventListener("dragenter", this.handleTopDragEnterCapture, true);
      target.addEventListener("dragleave", this.handleTopDragLeaveCapture, true);
      target.addEventListener("dragover", this.handleTopDragOver);
      target.addEventListener("dragover", this.handleTopDragOverCapture, true);
      target.addEventListener("drop", this.handleTopDrop);
      target.addEventListener("drop", this.handleTopDropCapture, true);
    };
    HTML5Backend3.prototype.removeEventListeners = function(target) {
      if (!target.removeEventListener) {
        return;
      }
      target.removeEventListener("dragstart", this.handleTopDragStart);
      target.removeEventListener("dragstart", this.handleTopDragStartCapture, true);
      target.removeEventListener("dragend", this.handleTopDragEndCapture, true);
      target.removeEventListener("dragenter", this.handleTopDragEnter);
      target.removeEventListener("dragenter", this.handleTopDragEnterCapture, true);
      target.removeEventListener("dragleave", this.handleTopDragLeaveCapture, true);
      target.removeEventListener("dragover", this.handleTopDragOver);
      target.removeEventListener("dragover", this.handleTopDragOverCapture, true);
      target.removeEventListener("drop", this.handleTopDrop);
      target.removeEventListener("drop", this.handleTopDropCapture, true);
    };
    HTML5Backend3.prototype.getCurrentSourceNodeOptions = function() {
      var sourceId = this.monitor.getSourceId();
      var sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
      return __assign({dropEffect: this.altKeyPressed ? "copy" : "move"}, sourceNodeOptions || {});
    };
    HTML5Backend3.prototype.getCurrentDropEffect = function() {
      if (this.isDraggingNativeItem()) {
        return "copy";
      }
      return this.getCurrentSourceNodeOptions().dropEffect;
    };
    HTML5Backend3.prototype.getCurrentSourcePreviewNodeOptions = function() {
      var sourceId = this.monitor.getSourceId();
      var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
      return __assign({anchorX: 0.5, anchorY: 0.5, captureDraggingState: false}, sourcePreviewNodeOptions || {});
    };
    HTML5Backend3.prototype.isDraggingNativeItem = function() {
      var itemType = this.monitor.getItemType();
      return Object.keys(NativeTypes).some(function(key) {
        return NativeTypes[key] === itemType;
      });
    };
    HTML5Backend3.prototype.beginDragNativeItem = function(type) {
      this.clearCurrentDragSourceNode();
      this.currentNativeSource = NativeDragSources.createNativeDragSource(type);
      this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
      this.actions.beginDrag([this.currentNativeHandle]);
    };
    HTML5Backend3.prototype.setCurrentDragSourceNode = function(node) {
      var _this = this;
      this.clearCurrentDragSourceNode();
      this.currentDragSourceNode = node;
      var MOUSE_MOVE_TIMEOUT = 1e3;
      this.mouseMoveTimeoutTimer = setTimeout(function() {
        return _this.window && _this.window.addEventListener("mousemove", _this.endDragIfSourceWasRemovedFromDOM, true);
      }, MOUSE_MOVE_TIMEOUT);
    };
    HTML5Backend3.prototype.clearCurrentDragSourceNode = function() {
      if (this.currentDragSourceNode) {
        this.currentDragSourceNode = null;
        if (this.window) {
          this.window.clearTimeout(this.mouseMoveTimeoutTimer || void 0);
          this.window.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
        }
        this.mouseMoveTimeoutTimer = null;
        return true;
      }
      return false;
    };
    HTML5Backend3.prototype.handleDragStart = function(e, sourceId) {
      if (!this.dragStartSourceIds) {
        this.dragStartSourceIds = [];
      }
      this.dragStartSourceIds.unshift(sourceId);
    };
    HTML5Backend3.prototype.handleDragEnter = function(e, targetId) {
      this.dragEnterTargetIds.unshift(targetId);
    };
    HTML5Backend3.prototype.handleDragOver = function(e, targetId) {
      if (this.dragOverTargetIds === null) {
        this.dragOverTargetIds = [];
      }
      this.dragOverTargetIds.unshift(targetId);
    };
    HTML5Backend3.prototype.handleDrop = function(e, targetId) {
      this.dropTargetIds.unshift(targetId);
    };
    return HTML5Backend3;
  }();
  exports.default = HTML5Backend2;
});
var getEmptyImage_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  var emptyImage;
  function getEmptyImage() {
    if (!emptyImage) {
      emptyImage = new Image();
      emptyImage.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
    }
    return emptyImage;
  }
  exports.default = getEmptyImage;
});
var cjs$2 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getEmptyImage = getEmptyImage_1.default;
  exports.NativeTypes = NativeTypes;
  function createHTML5Backend(manager) {
    return new HTML5Backend_1.default(manager);
  }
  exports.default = createHTML5Backend;
});
var HTML5Backend = /* @__PURE__ */ getDefaultExportFromCjs(cjs$2);
const {SelectionRow} = exported;
let dragingIndex = -1;
function MyRow(props) {
  const {
    isDragging,
    isOver,
    connectDragSource,
    connectDropTarget,
    moveRow,
    className,
    ...others
  } = props;
  const opacity = isDragging ? 0 : 1;
  const style = {...others.style, cursor: "move"};
  const cls = classnames({
    [className]: className,
    "drop-over-upward": isOver && others.index < dragingIndex,
    "drop-over-downward": isOver && others.index > dragingIndex
  });
  return /* @__PURE__ */ createElement(SelectionRow, {
    ...others,
    style: {...style, ...{opacity}},
    className: cls,
    wrapper: (row) => connectDragSource(connectDropTarget(row))
  });
}
const NewRow = cjs$1.DropTarget("row", {
  drop(props, monitor) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    if (dragIndex === hoverIndex) {
      return;
    }
    props.moveRow(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  }
}, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
}))(cjs$1.DragSource("row", {
  beginDrag: (props) => {
    dragingIndex = props.index;
    return {
      id: props.record[props.primaryKey],
      index: props.rowIndex
    };
  }
}, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(MyRow));
class InnerTable extends Component {
  constructor(props) {
    super(props);
    this.moveRow = (dragIndex, hoverIndex) => {
      const {onSort} = this.props;
      const dragRow = this.state.dataSource[dragIndex];
      const dataSource2 = [...this.state.dataSource];
      dataSource2.splice(dragIndex, 1);
      dataSource2.splice(hoverIndex, 0, dragRow);
      this.setState({
        dataSource: dataSource2
      });
      onSort && onSort(this.state.dataSource);
    };
    this.state = {
      dataSource: [...props.dataSource]
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.dataSource && JSON.stringify(nextProps.dataSource) !== JSON.stringify(this.state.dataSource)) {
      this.setState({dataSource: [...nextProps.dataSource]});
    }
  }
  render() {
    const {excludeProvider, ...restProps} = this.props;
    const tableProps = {
      ...restProps,
      dataSource: this.state.dataSource,
      rowProps: (props, index2) => ({
        index: index2,
        moveRow: this.moveRow
      }),
      components: {
        Row: NewRow
      }
    };
    return /* @__PURE__ */ createElement(exported, {
      ...tableProps
    });
  }
}
class SortableTable extends Component {
  render() {
    const ComponentName = cjs$1.DragDropContext(HTML5Backend)(InnerTable);
    return /* @__PURE__ */ createElement(ComponentName, {
      ...this.props
    });
  }
}
const result$1 = [
  {
    id: "001",
    time: 1951,
    title: {name: "The Old Man and the Sea"}
  },
  {
    id: "002",
    time: 1925,
    title: {name: "the great gatsby"}
  },
  {
    id: "003",
    time: 1719,
    title: {name: "The adventures of Robinson Crusoe"}
  }
];
class Demo$1 extends Component {
  constructor(props) {
    super(props);
    this.onRemove = (id) => {
      const {dataSource: dataSource2} = this.state;
      let index2 = -1;
      dataSource2.forEach((item, i) => {
        if (item.id === id) {
          index2 = i;
        }
      });
      if (index2 !== -1) {
        dataSource2.splice(index2, 1);
        this.setState({
          dataSource: dataSource2
        });
      }
    };
    this.renderOper = (value, index2, record) => {
      return /* @__PURE__ */ createElement("a", {
        onClick: this.onRemove.bind(this, record.id)
      }, "Remove(", record.id, ")");
    };
    this.state = {
      dataSource: result$1
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(SortableTable, {
      dataSource: this.state.dataSource,
      onSort: console.log
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Id",
      dataIndex: "id",
      width: 100,
      lock: true
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Title",
      dataIndex: "title.name",
      width: 400
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time",
      width: 300
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "operate",
      cell: this.renderOper,
      width: 300,
      lock: "right"
    })));
  }
}
function DemoComponent$b() {
  const content = /* @__PURE__ */ createElement(Demo$1, null);
  return /* @__PURE__ */ createElement(Style$b, null, content);
}
const Style$b = qe.div`
  .drop-over-downward {
    border-bottom: 2px dashed #3080fe;
  }

  .drop-over-upward {
    border-top: 2px dashed #3080fe;
  }
`;
var m11 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$b
});
const result$2 = [
  {
    id: "001",
    time: 1951,
    title: {name: "The Old Man and the Sea"}
  },
  {
    id: "002",
    time: 1925,
    title: {name: "the great gatsby"}
  },
  {
    id: "003",
    time: 1719,
    title: {name: "The adventures of Robinson Crusoe"}
  }
];
class EditablePane extends Component {
  constructor(props) {
    super(props);
    this.onKeyDown = (e) => {
      const {keyCode} = e;
      if (keyCode > 36 && keyCode < 41) {
        e.stopPropagation();
      }
    };
    this.onBlur = (e) => {
      this.setState({
        editable: false,
        cellTitle: e.target.value
      });
    };
    this.onDblClick = () => {
      this.setState({
        editable: true
      });
    };
    this.state = {
      cellTitle: props.defaultTitle,
      editable: false
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultTitle !== this.state.cellTitle) {
      this.setState({
        cellTitle: nextProps.defaultTitle
      });
    }
  }
  render() {
    const {cellTitle, editable} = this.state;
    if (editable) {
      return /* @__PURE__ */ createElement(NextInput, {
        autoFocus: true,
        defaultValue: cellTitle,
        onKeyDown: this.onKeyDown,
        onBlur: this.onBlur
      });
    }
    return /* @__PURE__ */ createElement("span", {
      onDoubleClick: this.onDblClick
    }, cellTitle);
  }
}
class Demo$2 extends Component {
  constructor(props) {
    super(props);
    this.renderCell = (value, index2, record) => {
      return /* @__PURE__ */ createElement(EditablePane, {
        defaultTitle: value
      });
    };
    this.state = {
      dataSource: result$2,
      id: ""
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
      dataSource: this.state.dataSource
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Id",
      dataIndex: "id"
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Title",
      dataIndex: "title.name",
      cell: this.renderCell
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time"
    })));
  }
}
function DemoComponent$c() {
  const content = /* @__PURE__ */ createElement(Demo$2, null);
  return /* @__PURE__ */ createElement(Style$c, null, content);
}
const Style$c = qe.div``;
var m12 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$c
});
const dataSource$a = () => {
  const result2 = [];
  for (let i = 0; i < 5; i++) {
    result2.push({
      title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
      id: 100306660940 + i,
      time: 2e3 + i
    });
  }
  return result2;
}, render$5 = (value, index2, record) => {
  return /* @__PURE__ */ createElement("a", null, "Remove(", record.id, ")");
};
class App$4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: dataSource$a()
    };
  }
  onSort(dataIndex, order) {
    const dataSource2 = this.state.dataSource.sort(function(a, b) {
      const result2 = a[dataIndex] - b[dataIndex];
      return order === "asc" ? result2 > 0 ? 1 : -1 : result2 > 0 ? -1 : 1;
    });
    this.setState({
      dataSource: dataSource2
    });
  }
  toggleIndent() {
    this.setState({
      expandedRowIndent: [2, 1]
    });
  }
  toggleCol() {
    this.setState({
      hasExpandedRowCtrl: false
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement(Button, {
      onClick: this.toggleIndent.bind(this)
    }, " ", "Update indent", " ")), /* @__PURE__ */ createElement(exported, {
      dataSource: this.state.dataSource,
      isZebra: this.state.isZebra,
      hasBorder: false,
      onSort: this.onSort.bind(this),
      expandedRowRender: (record) => record.title,
      onRowClick: () => console.log("rowClick"),
      expandedRowIndent: this.state.expandedRowIndent
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Id",
      dataIndex: "id",
      sortable: true
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Title",
      dataIndex: "title"
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time"
    }), /* @__PURE__ */ createElement(exported.Column, {
      cell: render$5,
      width: 200
    })));
  }
}
function DemoComponent$d() {
  const content = /* @__PURE__ */ createElement(App$4, null);
  return /* @__PURE__ */ createElement(Style$d, null, content);
}
const Style$d = qe.div``;
var m13 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$d
});
class ExpandedApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.props.dataSource
    };
  }
  load() {
    let {dataSource: dataSource2} = this.state;
    dataSource2 = dataSource2.concat(dataSource2);
    this.setState({dataSource: dataSource2});
  }
  render() {
    const style = {
      borderTop: "1px solid #eee",
      textAlign: "center",
      background: "#f8f8f8",
      lineHeight: "28px"
    };
    return /* @__PURE__ */ createElement("div", {
      style: {marginTop: 10}
    }, /* @__PURE__ */ createElement(exported, {
      dataSource: this.state.dataSource,
      hasHeader: false,
      hasBorder: false
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Title",
      dataIndex: "title"
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time",
      width: 200
    })), /* @__PURE__ */ createElement("p", {
      style,
      onClick: this.load.bind(this)
    }, this.props.index, ": Load more data.", " "));
  }
}
const dataSource$b = () => {
  const result2 = [];
  for (let i = 0; i < 5; i++) {
    result2.push({
      title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
      id: 100306660940 + i,
      time: 2e3 + i,
      children: [
        {
          title: `Sub title for Quotation ${3 + i}`,
          time: 2e3 + i
        },
        {
          title: `Sub2 title for Quotation ${3 + i}`,
          time: 2e3 + i
        }
      ]
    });
  }
  return result2;
}, render$6 = (value, index2, record) => {
  return /* @__PURE__ */ createElement("a", null, "Remove(", record.id, ")");
}, expandedRowRender = (record, index2) => {
  const children = record.children;
  return /* @__PURE__ */ createElement(ExpandedApp, {
    dataSource: children,
    index: index2
  });
};
class App$5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: dataSource$b(),
      hasBorder: false,
      openRowKeys: []
    };
  }
  onSort(dataIndex, order) {
    const dataSource2 = this.state.dataSource.sort(function(a, b) {
      const result2 = a[dataIndex] - b[dataIndex];
      return order === "asc" ? result2 > 0 ? 1 : -1 : result2 > 0 ? -1 : 1;
    });
    this.setState({
      dataSource: dataSource2
    });
  }
  disabledExpandedCol() {
    this.setState({
      getExpandedColProps: (record, index2) => {
        console.log(index2);
        if (index2 === 3) {
          return {
            disabled: true
          };
        }
      }
    });
  }
  toggleCol() {
    this.setState({
      hasExpandedRowCtrl: false
    });
  }
  onRowOpen(openRowKeys) {
    this.setState({openRowKeys});
  }
  toggleExpand(record) {
    const key = record.id, {openRowKeys} = this.state, index2 = openRowKeys.indexOf(key);
    if (index2 > -1) {
      openRowKeys.splice(index2, 1);
    } else {
      openRowKeys.push(key);
    }
    this.setState({
      openRowKeys
    });
  }
  rowProps(record, index2) {
    console.log("rowProps", record, index2);
    return {className: `next-myclass-${index2}`};
  }
  render() {
    const renderTitle = (value, index2, record) => {
      return /* @__PURE__ */ createElement("div", null, value, /* @__PURE__ */ createElement("span", {
        onClick: this.toggleExpand.bind(this, record)
      }, "index:", index2, " +++++"));
    };
    return /* @__PURE__ */ createElement("span", null, /* @__PURE__ */ createElement("p", null, " ", /* @__PURE__ */ createElement(Button, {
      onClick: this.disabledExpandedCol.bind(this)
    }, " ", "disable fourth row", " "), " ", " ", /* @__PURE__ */ createElement(Button, {
      onClick: this.toggleCol.bind(this)
    }, " hide + ")), /* @__PURE__ */ createElement(exported, {
      dataSource: this.state.dataSource,
      expandedIndexSimulate: true,
      isZebra: this.state.isZebra,
      hasBorder: this.state.hasBorder,
      onSort: this.onSort.bind(this),
      expandedRowRender,
      expandedRowIndent: [1, 1],
      openRowKeys: this.state.openRowKeys,
      getExpandedColProps: this.state.getExpandedColProps,
      hasExpandedRowCtrl: this.state.hasExpandedRowCtrl,
      onRowOpen: this.onRowOpen.bind(this),
      rowProps: this.rowProps.bind(this)
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Id",
      dataIndex: "id",
      sortable: true
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Title",
      dataIndex: "title",
      cell: renderTitle
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time",
      width: 200
    }), /* @__PURE__ */ createElement(exported.Column, {
      cell: render$6,
      width: 200
    })));
  }
}
function DemoComponent$e() {
  const content = /* @__PURE__ */ createElement(App$5, null);
  return /* @__PURE__ */ createElement(Style$e, null, content);
}
const Style$e = qe.div``;
var m14 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$e
});
const dataSource$c = () => {
  const result2 = [];
  for (let i = 0; i < 5; i++) {
    result2.push({
      title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
      id: 100306660940 + i,
      time: 2e3 + i,
      expandable: i !== 2
    });
  }
  return result2;
}, expandedRowRender$1 = (record, rowIndex) => {
  if (rowIndex === 0) {
    return record.title;
  }
  return /* @__PURE__ */ createElement(exported.StickyLock, {
    hasBorder: false,
    dataSource: dataSource$c()
  }, /* @__PURE__ */ createElement(exported.Column, {
    title: "Id",
    dataIndex: "id",
    lock: true,
    width: 100
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Title",
    dataIndex: "title",
    width: 200
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Time",
    dataIndex: "time",
    width: 200
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Title",
    dataIndex: "title",
    width: 200
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Title",
    dataIndex: "title",
    width: 200
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Title",
    dataIndex: "title",
    width: 200
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Title",
    dataIndex: "title",
    width: 200
  }));
}, render$7 = (value, index2, record) => {
  return /* @__PURE__ */ createElement("a", null, "Remove(", record.id, ")");
};
class App$6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: dataSource$c()
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported.StickyLock, {
      expandedIndexSimulate: true,
      dataSource: this.state.dataSource,
      hasBorder: false,
      expandedRowIndent: [2, 0],
      expandedRowRender: expandedRowRender$1,
      rowExpandable: (record) => record.expandable,
      onRowClick: () => console.log("rowClick")
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Id",
      dataIndex: "id",
      lock: true,
      width: 100
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Title",
      dataIndex: "title",
      width: 200
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time",
      width: 200
    }), /* @__PURE__ */ createElement(exported.Column, {
      cell: render$7,
      width: 300
    })));
  }
}
function DemoComponent$f() {
  const content = /* @__PURE__ */ createElement(App$6, null);
  return /* @__PURE__ */ createElement(Style$f, null, content);
}
const Style$f = qe.div``;
var m15 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$f
});
const dataSource$d = () => {
  const result2 = [];
  for (let i = 0; i < 5; i++) {
    result2.push({
      title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
      id: 100306660940 + i,
      time: 2e3 + i
    });
  }
  return result2;
}, render$8 = (value, index2, record) => {
  return /* @__PURE__ */ createElement("a", {
    href: "javascript:;"
  }, "Remove(", record.id, ")");
};
class App$7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: dataSource$d(),
      filterMode: "multiple"
    };
  }
  onSort(dataIndex, order) {
    const dataSource2 = this.state.dataSource.sort(function(a, b) {
      const result2 = a[dataIndex] - b[dataIndex];
      return order === "asc" ? result2 > 0 ? 1 : -1 : result2 > 0 ? -1 : 1;
    });
    this.setState({
      dataSource: dataSource2,
      sort: {id: order}
    });
  }
  onFilter(filterParams) {
    let ds = dataSource$d();
    Object.keys(filterParams).forEach((key) => {
      const selectedKeys = filterParams[key].selectedKeys;
      if (selectedKeys.length) {
        ds = ds.filter((record) => {
          return selectedKeys.some((value) => {
            return record[key].indexOf(value) > -1;
          });
        });
      }
    });
    this.setState({dataSource: ds});
  }
  changeMode() {
    this.setState({
      filterMode: "single"
    });
  }
  render() {
    const filters = [
      {
        label: "Nano 3",
        value: 3
      },
      {
        label: "Nano 678",
        value: 678,
        children: [
          {
            label: "Nano 67",
            value: 67,
            children: [
              {
                label: "Nano 6",
                value: 6
              },
              {
                label: "Nano 7",
                value: 7
              }
            ]
          },
          {
            label: "Nano 8",
            value: 8
          }
        ]
      },
      {
        label: "Other",
        value: "other",
        children: [
          {
            label: "Nano 4",
            value: 4
          },
          {
            label: "Nano 5",
            value: 5
          }
        ]
      }
    ];
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement(Button, {
      onClick: this.changeMode.bind(this)
    }, "Change filter menu to single select")), /* @__PURE__ */ createElement(exported, {
      dataSource: this.state.dataSource,
      onSort: this.onSort.bind(this),
      onFilter: this.onFilter.bind(this)
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Id",
      dataIndex: "id",
      sortable: true
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Title",
      dataIndex: "title",
      filters,
      filterMode: this.state.filterMode
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time"
    }), /* @__PURE__ */ createElement(exported.Column, {
      cell: render$8,
      width: 200
    })), /* @__PURE__ */ createElement("br", null), "Customize sortIcons:", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(exported, {
      dataSource: [],
      onSort: () => {
      },
      sortIcons: {
        desc: /* @__PURE__ */ createElement(NextIcon, {
          style: {top: "6px", left: "4px"},
          type: "arrow-down",
          size: "small"
        }),
        asc: /* @__PURE__ */ createElement(NextIcon, {
          style: {top: "-6px", left: "4px"},
          type: "arrow-up",
          size: "small"
        })
      }
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Id",
      dataIndex: "id",
      sortable: true
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Title",
      dataIndex: "title",
      filters,
      filterMode: this.state.filterMode
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time"
    })));
  }
}
function DemoComponent$g() {
  const content = /* @__PURE__ */ createElement(App$7, null);
  return /* @__PURE__ */ createElement(Style$g, null, content);
}
const Style$g = qe.div``;
var m16 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$g
});
const Option = Select.Option;
const dataSource$e = (length) => {
  const result2 = [];
  for (let i = 0; i < length; i++) {
    result2.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2e3 + i
    });
  }
  return result2;
};
const render$9 = (value, index2, record) => {
  return /* @__PURE__ */ createElement(Select, {
    popupContainer: (node) => node.parentNode,
    popupProps: {autoFit: true},
    defaultValue: "jack",
    "aria-label": "name is",
    showSearch: true,
    hasClear: true
  }, /* @__PURE__ */ createElement(Option, {
    value: "jack"
  }, "Jack"), /* @__PURE__ */ createElement(Option, {
    value: "frank"
  }, "Frank"), /* @__PURE__ */ createElement(Option, {
    value: "hugo"
  }, "Hugo"));
};
class App$8 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      sticky: false,
      lock: false,
      dataSource: dataSource$e(50)
    };
  }
  onSwitch(tag) {
    const props = {};
    switch (tag) {
      case "sticky":
        props.sticky = true;
        break;
      case "lock":
        props.lock = true;
        break;
      case "dataSource":
        props.dataSource = this.state.dataSource.length > 0 ? [] : dataSource$e(50);
        break;
    }
    this.setState(props);
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement(Button, {
      onClick: this.onSwitch.bind(this, "sticky")
    }, "enable sticky"), " ", " ", /* @__PURE__ */ createElement(Button, {
      onClick: this.onSwitch.bind(this, "lock")
    }, "enable lock"), " ", " ", /* @__PURE__ */ createElement(Button, {
      onClick: this.onSwitch.bind(this, "dataSource")
    }, "toggle dataSource")), /* @__PURE__ */ createElement(exported, {
      dataSource: this.state.dataSource,
      fixedHeader: true,
      stickyHeader: this.state.sticky
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Id",
      dataIndex: "id",
      width: 200,
      lock: this.state.lock
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Title",
      dataIndex: "title.name",
      width: 200
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time",
      width: 200
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "test",
      cell: render$9,
      width: 200
    })));
  }
}
function DemoComponent$h() {
  const content = /* @__PURE__ */ createElement(App$8, null);
  return /* @__PURE__ */ createElement(Style$h, null, content);
}
const Style$h = qe.div`
  .next-table td .next-table-cell-wrapper {
    overflow: visible;
  }
`;
var m17 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$h
});
const dataSource$f = () => {
  const result2 = [];
  for (let i = 0; i < 5; i++) {
    result2.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2e3 + i
    });
  }
  return result2;
};
const propsConf = {
  className: "next-myclass",
  style: {background: "black", color: "white"},
  onDoubleClick: () => {
    console.log("doubleClicked");
  }
};
const setRowProps = (record, index2) => {
  if (index2 === 2) {
    return propsConf;
  }
};
const setCellProps = (rowIndex, colIndex, dataIndex, record) => {
  if (rowIndex === 0 && colIndex === 0) {
    console.log(record);
    return propsConf;
  }
};
function DemoComponent$i() {
  const content = /* @__PURE__ */ createElement(exported, {
    dataSource: dataSource$f(),
    rowProps: setRowProps,
    cellProps: setCellProps
  }, /* @__PURE__ */ createElement(exported.Column, {
    title: "Id",
    dataIndex: "id"
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Title",
    dataIndex: "title.name"
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Time",
    dataIndex: "time"
  }));
  return /* @__PURE__ */ createElement(Style$i, null, content);
}
const Style$i = qe.div``;
var m18 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$i
});
const dataSource$g = [
  {
    price: "US $1",
    status: 1,
    parent: "root",
    id: 1,
    product: [
      {
        title: "2014 New Fashion Novelty Tank Slim Women's Fashion Dresses With Lace",
        avatar: "https://sc01.alicdn.com/kf/HTB1ravHKXXXXXccXVXXq6xXFXXXJ/Chinese-Style-Fashion-Custom-Digital-Print-Silk.jpg_220x220.jpg"
      }
    ],
    children: [
      {
        price: "US $1-1",
        status: 11,
        id: 2,
        parent: 0,
        index: 0,
        product: [
          {
            title: "Free shipping women Casual dresses lady dress plus size 2014",
            avatar: "https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg"
          }
        ]
      },
      {
        price: "US $1-2",
        status: 12,
        id: 3,
        parent: 0,
        product: [
          {
            title: "Free shipping women Casual dresses lady dress plus size 2014",
            avatar: "https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg"
          }
        ]
      },
      {
        price: "US $1-3",
        status: 13,
        id: 7,
        parent: 0,
        product: [
          {
            title: "Free shipping women Casual dresses lady dress plus size 2014",
            avatar: "https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg"
          }
        ]
      }
    ]
  },
  {
    price: "US $3",
    status: 3,
    parent: "root",
    id: 3,
    product: [
      {
        title: "2014 New Fashion Novelty Tank Slim Women's Fashion Dresses With Lace",
        avatar: "https://sc01.alicdn.com/kf/HTB1ravHKXXXXXccXVXXq6xXFXXXJ/Chinese-Style-Fashion-Custom-Digital-Print-Silk.jpg_220x220.jpg"
      }
    ],
    children: [
      {
        price: "US $3-1",
        status: 31,
        id: 31,
        parent: 1,
        index: 0,
        product: [
          {
            title: "Free shipping women Casual dresses lady dress plus size 2014",
            avatar: "https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg"
          }
        ]
      },
      {
        price: "US $3-2",
        status: 32,
        id: 32,
        parent: 1,
        product: [
          {
            title: "Free shipping women Casual dresses lady dress plus size 2014",
            avatar: "https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg"
          }
        ]
      },
      {
        price: "US $3-3",
        status: 33,
        id: 33,
        parent: 1,
        product: [
          {
            title: "Free shipping women Casual dresses lady dress plus size 2014",
            avatar: "https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg"
          }
        ]
      },
      {
        price: "US $3-4",
        status: 34,
        id: 34,
        parent: 1,
        product: [
          {
            title: "Free shipping women Casual dresses lady dress plus size 2014",
            avatar: "https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg"
          }
        ]
      }
    ]
  },
  {
    price: "US $4",
    status: 4,
    parent: "root",
    id: 4,
    product: [
      {
        title: "2014 New Fashion Novelty Tank Slim Women's Fashion Dresses With Lace",
        avatar: "https://sc01.alicdn.com/kf/HTB1ravHKXXXXXccXVXXq6xXFXXXJ/Chinese-Style-Fashion-Custom-Digital-Print-Silk.jpg_220x220.jpg"
      }
    ],
    children: [
      {
        price: "US $4-1",
        status: 31,
        id: 31,
        parent: 2,
        index: 0,
        product: [
          {
            title: "Free shipping women Casual dresses lady dress plus size 2014",
            avatar: "https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg"
          }
        ]
      },
      {
        price: "US $4-2",
        status: 32,
        id: 32,
        parent: 2,
        product: [
          {
            title: "Free shipping women Casual dresses lady dress plus size 2014",
            avatar: "https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg"
          }
        ]
      },
      {
        price: "US $4-3",
        status: 33,
        id: 33,
        parent: 2,
        product: [
          {
            title: "Free shipping women Casual dresses lady dress plus size 2014",
            avatar: "https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg"
          }
        ]
      }
    ]
  }
], productRender = function(product) {
  return /* @__PURE__ */ createElement("div", {
    className: "media"
  }, /* @__PURE__ */ createElement("img", {
    src: product[0].avatar,
    className: "media-side"
  }), /* @__PURE__ */ createElement("div", {
    className: "media-content"
  }, product[0].title));
}, priceRender = function(price) {
  return /* @__PURE__ */ createElement("b", null, price);
}, statusRender = function(status) {
  if (status) {
    return "Already Priced";
  } else {
    return "No Priced";
  }
}, operRender = function() {
  return /* @__PURE__ */ createElement("a", {
    href: "javascript:;"
  }, "View");
}, groupHeaderRender = function(record) {
  return /* @__PURE__ */ createElement("div", null, record.product[0].title);
}, rowSelection = {
  onChange: function(selectedKeys) {
    console.log(selectedKeys);
  }
};
const cellProps$1 = (rowIndex, colIndex, dataIndex, record) => {
  if (colIndex === 3 && record.index === 0) {
    return {
      rowSpan: dataSource$g[record.parent].children.length
    };
  }
  if (colIndex === 4 && record.index === 0) {
    return {
      rowSpan: dataSource$g[record.parent].children.length
    };
  }
};
class App$9 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      hasSelection: false
    };
    this.toggleGroupSelection = () => {
      this.setState({
        hasSelection: !this.state.hasSelection
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement(Button, {
      onClick: this.toggleGroupSelection
    }, "Toggle GroupHeader Selection")), /* @__PURE__ */ createElement(exported, {
      dataSource: dataSource$g,
      rowSelection,
      cellProps: cellProps$1
    }, /* @__PURE__ */ createElement(exported.GroupHeader, {
      cell: groupHeaderRender,
      hasChildrenSelection: this.state.hasSelection
    }), /* @__PURE__ */ createElement(exported.GroupFooter, {
      cell: groupHeaderRender
    }), /* @__PURE__ */ createElement(exported.Column, {
      cell: productRender,
      title: "Product Details",
      dataIndex: "product"
    }), /* @__PURE__ */ createElement(exported.Column, {
      cell: priceRender,
      title: "Price",
      dataIndex: "price",
      width: 120
    }), /* @__PURE__ */ createElement(exported.Column, {
      cell: statusRender,
      title: "Status",
      dataIndex: "status",
      width: 100
    }), /* @__PURE__ */ createElement(exported.Column, {
      cell: operRender,
      title: "Operation",
      width: 100
    })));
  }
}
function DemoComponent$j() {
  const content = /* @__PURE__ */ createElement(App$9, null);
  return /* @__PURE__ */ createElement(Style$j, null, content);
}
const Style$j = qe.div`
  .media-side {
    width: 48px;
    height: 48px;
    float: left;
    margin-right: 10px;
  }
  .media-content {
    overflow: hidden;
    vertical-align: top;
  }
  .media {
    overflow: hidden;
  }
`;
var m19 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$j
});
const onRowClick$2 = function(record, index2, e) {
  console.log(record, index2, e);
}, dataSource$h = () => {
  const result2 = [];
  for (let i = 0; i < 100; i++) {
    result2.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2e3 + i
    });
  }
  return result2;
}, render$a = (value, index2, record) => {
  return /* @__PURE__ */ createElement("a", null, "Remove(", record.id, ")");
};
class App$a extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      dataSource: [],
      cols: [
        /* @__PURE__ */ createElement(exported.Column, {
          title: "Title",
          dataIndex: "title.name",
          width: 200,
          key: "name1"
        }),
        /* @__PURE__ */ createElement(exported.ColumnGroup, {
          title: "abc",
          key: "name-group"
        }, /* @__PURE__ */ createElement(exported.Column, {
          title: "Title",
          dataIndex: "title.name",
          width: 100,
          key: "name2"
        }), /* @__PURE__ */ createElement(exported.Column, {
          title: "Title",
          dataIndex: "title.name",
          width: 400,
          key: "name3"
        })),
        /* @__PURE__ */ createElement(exported.Column, {
          title: "Time",
          dataIndex: "time",
          width: 500,
          key: "time"
        })
      ],
      loading: true
    };
    this.reduceCol = () => {
      this.setState({
        cols: [
          /* @__PURE__ */ createElement(exported.Column, {
            title: "Title",
            dataIndex: "title.name",
            width: 400,
            key: "name1"
          }),
          /* @__PURE__ */ createElement(exported.Column, {
            title: "Time",
            dataIndex: "time",
            width: 100,
            key: "time",
            lock: true
          })
        ]
      });
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        dataSource: dataSource$h(),
        loading: false
      });
    }, 200);
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement(Button, {
      onClick: this.reduceCol
    }, "Reduce Cols")), /* @__PURE__ */ createElement(exported, {
      dataSource: this.state.dataSource,
      onRowClick: onRowClick$2,
      fixedHeader: true,
      loading: this.state.loading
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Id-Id-Id-Id-Id-Id-Id-Id-Id-Id-Id-Id",
      dataIndex: "id",
      lock: true,
      width: 140
    }), this.state.cols, /* @__PURE__ */ createElement(exported.Column, {
      cell: render$a,
      width: 200
    })));
  }
}
function DemoComponent$k() {
  const content = /* @__PURE__ */ createElement(App$a, null);
  return /* @__PURE__ */ createElement(Style$k, null, content);
}
const Style$k = qe.div``;
var m20 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$k
});
const data = [
  {
    key: 1,
    name: "a",
    age: 32,
    address: "aa",
    children: [
      {
        key: 11,
        name: "b",
        age: 33,
        address: "bb"
      },
      {
        key: 12,
        name: "c",
        age: 33,
        address: "cc",
        children: [
          {
            key: 121,
            name: "d",
            age: 33,
            address: "dd"
          }
        ]
      },
      {
        key: 13,
        name: "e",
        age: 33,
        address: "ee",
        children: [
          {
            key: 131,
            name: "f",
            age: 33,
            address: "ff",
            children: [
              {
                key: 1311,
                name: "g",
                age: 33,
                address: "gg"
              },
              {
                key: 1312,
                name: "h",
                age: 33,
                address: "hh"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    key: 2,
    name: "i",
    age: 32,
    address: "ii",
    children: []
  }
];
const tableMixTree = /* @__PURE__ */ createElement(exported, {
  dataSource: data,
  primaryKey: "key",
  isTree: true,
  rowSelection: {onChange: () => {
  }}
}, /* @__PURE__ */ createElement(exported.Column, {
  title: "Key",
  dataIndex: "key"
}), /* @__PURE__ */ createElement(exported.Column, {
  title: "Name",
  dataIndex: "name"
}), /* @__PURE__ */ createElement(exported.Column, {
  title: "Age",
  dataIndex: "age"
}), /* @__PURE__ */ createElement(exported.Column, {
  title: "Address",
  dataIndex: "address"
}));
const tableMixExpanded = /* @__PURE__ */ createElement(exported, {
  dataSource: data,
  primaryKey: "key",
  expandedRowRender: (record) => record.address,
  rowSelection: {onChange: () => {
  }}
}, /* @__PURE__ */ createElement(exported.Column, {
  title: "Key",
  dataIndex: "key"
}), /* @__PURE__ */ createElement(exported.Column, {
  title: "Name",
  dataIndex: "name"
}), /* @__PURE__ */ createElement(exported.Column, {
  title: "Age",
  dataIndex: "age"
}), /* @__PURE__ */ createElement(exported.Column, {
  title: "Address",
  dataIndex: "address"
}));
const tableMixSelectionTreeLock = /* @__PURE__ */ createElement("div", {
  style: {width: "500px"}
}, /* @__PURE__ */ createElement(exported, {
  dataSource: data,
  primaryKey: "key",
  rowSelection: {onChange: () => {
  }},
  isTree: true
}, /* @__PURE__ */ createElement(exported.Column, {
  title: "Key",
  dataIndex: "key",
  width: 100
}), /* @__PURE__ */ createElement(exported.Column, {
  title: "Name",
  dataIndex: "name",
  lock: true,
  width: 100
}), /* @__PURE__ */ createElement(exported.Column, {
  title: "Age",
  dataIndex: "age",
  width: 200,
  lock: "right"
}), /* @__PURE__ */ createElement(exported.Column, {
  title: "Address",
  dataIndex: "address",
  width: 200
})));
const tableMixLock = /* @__PURE__ */ createElement("div", {
  style: {width: "500px"}
}, /* @__PURE__ */ createElement(exported, {
  dataSource: data,
  primaryKey: "key",
  rowSelection: {onChange: () => {
  }}
}, /* @__PURE__ */ createElement(exported.Column, {
  title: "Key",
  dataIndex: "key",
  width: 100
}), /* @__PURE__ */ createElement(exported.Column, {
  title: "Name",
  dataIndex: "name",
  lock: true,
  width: 100
}), /* @__PURE__ */ createElement(exported.Column, {
  title: "Age",
  dataIndex: "age",
  width: 200,
  lock: "right"
}), /* @__PURE__ */ createElement(exported.Column, {
  title: "Address",
  dataIndex: "address",
  width: 200
})));
const tableMixExpandedLock = /* @__PURE__ */ createElement("div", {
  style: {width: "500px"}
}, /* @__PURE__ */ createElement(exported, {
  dataSource: data,
  primaryKey: "key",
  rowSelection: {onChange: () => {
  }},
  expandedRowRender: (record) => record.address,
  expandedRowIndent: [3, 1]
}, /* @__PURE__ */ createElement(exported.Column, {
  title: "Key",
  dataIndex: "key",
  width: 100
}), /* @__PURE__ */ createElement(exported.Column, {
  title: "Name",
  dataIndex: "name",
  lock: true,
  width: 100
}), /* @__PURE__ */ createElement(exported.Column, {
  title: "Age",
  dataIndex: "age",
  width: 200,
  lock: "right"
}), /* @__PURE__ */ createElement(exported.Column, {
  title: "Address",
  dataIndex: "address",
  width: 200
})));
const tableMixTreeLock = /* @__PURE__ */ createElement("div", {
  style: {width: "500px"}
}, /* @__PURE__ */ createElement(exported, {
  dataSource: data,
  primaryKey: "key",
  isTree: true
}, /* @__PURE__ */ createElement(exported.Column, {
  title: "Key",
  dataIndex: "key",
  width: 100
}), /* @__PURE__ */ createElement(exported.Column, {
  title: "Name",
  dataIndex: "name",
  lock: true,
  width: 100
}), /* @__PURE__ */ createElement(exported.Column, {
  title: "Age",
  dataIndex: "age",
  width: 200,
  lock: "right"
}), /* @__PURE__ */ createElement(exported.Column, {
  title: "Address",
  dataIndex: "address",
  width: 200
})));
function DemoComponent$l() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "mix-demo"
  }, /* @__PURE__ */ createElement("div", {
    className: "row"
  }, /* @__PURE__ */ createElement("h4", null, "tree & select"), tableMixTree), /* @__PURE__ */ createElement("div", {
    className: "row"
  }, /* @__PURE__ */ createElement("h4", null, "extra & select"), tableMixExpanded), /* @__PURE__ */ createElement("div", {
    className: "row"
  }, /* @__PURE__ */ createElement("h4", null, "tree & lock column & select"), tableMixSelectionTreeLock), /* @__PURE__ */ createElement("div", {
    className: "row"
  }, /* @__PURE__ */ createElement("h4", null, "extra & lock column & select"), tableMixExpandedLock), /* @__PURE__ */ createElement("div", {
    className: "row"
  }, /* @__PURE__ */ createElement("h4", null, "lock column & select"), tableMixLock), /* @__PURE__ */ createElement("div", {
    className: "row"
  }, /* @__PURE__ */ createElement("h4", null, "tree & lock column"), tableMixTreeLock));
  return /* @__PURE__ */ createElement(Style$l, null, content);
}
const Style$l = qe.div`
  .mix-demo .row {
    margin-top: 10px;
  }
`;
var m21 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$l
});
const onRowClick$3 = function(record, index2, e) {
  console.log(record, index2, e);
}, dataSource$i = (j) => {
  const result2 = [];
  for (let i = 0; i < j; i++) {
    result2.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2e3 + i
    });
  }
  return result2;
}, render$b = (value, index2, record) => {
  return /* @__PURE__ */ createElement("a", null, "Remove(", record.id, ")");
};
class App$b extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      dataSource: dataSource$i(50)
    };
    this.onClick = () => {
      this.setState({
        dataSource: dataSource$i(4)
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement(Button, {
      onClick: this.onClick
    }, "Reduce count")), /* @__PURE__ */ createElement(exported, {
      dataSource: this.state.dataSource,
      onRowClick: onRowClick$3,
      fixedHeader: true,
      maxBodyHeight: 400
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Title1",
      dataIndex: "id",
      width: 140
    }), /* @__PURE__ */ createElement(exported.ColumnGroup, {
      title: "Group2-7"
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Title2",
      dataIndex: "id",
      lock: true,
      width: 140
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Title3",
      dataIndex: "title.name",
      width: 200
    }), /* @__PURE__ */ createElement(exported.ColumnGroup, {
      title: "Group4-7"
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Title4",
      dataIndex: "title.name",
      width: 400
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Title5",
      dataIndex: "title.name",
      width: 200
    }), /* @__PURE__ */ createElement(exported.ColumnGroup, {
      title: "Group6-7"
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Title6",
      dataIndex: "title.name",
      width: 400
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Title7",
      dataIndex: "title.name",
      width: 200
    })))), /* @__PURE__ */ createElement(exported.ColumnGroup, null, /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time",
      width: 500
    }), /* @__PURE__ */ createElement(exported.Column, {
      cell: render$b,
      width: 200,
      lock: "right"
    }))));
  }
}
function DemoComponent$m() {
  const content = /* @__PURE__ */ createElement(App$b, null);
  return /* @__PURE__ */ createElement(Style$m, null, content);
}
const Style$m = qe.div``;
var m22 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$m
});
const dataSource$j = (j) => {
  const result2 = [];
  for (let i = 0; i < 5; i++) {
    result2.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i + j,
      time: 2e3 + j
    });
  }
  return result2;
}, render$c = (value, index2, record) => {
  return /* @__PURE__ */ createElement("a", {
    href: "javascript:;"
  }, "Remove(", record.id, ")");
};
class App$c extends Component {
  constructor(props) {
    super(props);
    this.onChange = (currentPage) => {
      this.setState({
        loading: true
      });
      setTimeout(() => {
        this.setState({
          dataSource: dataSource$j(currentPage * 5),
          loading: false
        });
      }, 200);
    };
    this.state = {
      dataSource: dataSource$j(5)
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
      dataSource: this.state.dataSource,
      loading: this.state.loading
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Id1",
      dataIndex: "id",
      width: 140
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time",
      width: 500
    }), /* @__PURE__ */ createElement(exported.Column, {
      cell: render$c,
      width: 200
    })), /* @__PURE__ */ createElement(Pagination, {
      onChange: this.onChange,
      className: "page-demo"
    }));
  }
}
function DemoComponent$n() {
  const content = /* @__PURE__ */ createElement(App$c, null);
  return /* @__PURE__ */ createElement(Style$n, null, content);
}
const Style$n = qe.div`
  .page-demo {
    margin-top: 10px;
  }
`;
var m23 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$n
});
const onChange = function(...args) {
  console.log(...args);
}, dataSource$k = () => {
  const result2 = [];
  for (let i = 0; i < 5; i++) {
    result2.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2e3 + i
    });
  }
  return result2;
}, render$d = (value, index2, record) => {
  return /* @__PURE__ */ createElement("a", null, "Remove(", record.id, ")");
}, rowSelection$1 = {
  onChange,
  getProps: (record) => {
    return {
      disabled: record.id === 100306660942
    };
  }
};
class App$d extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      widths: {
        id: 100
      }
    };
    this.onResizeChange = (dataIndex, value) => {
      const {widths} = this.state;
      widths[dataIndex] = widths[dataIndex] + value;
      this.setState({
        widths
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement(exported, {
      dataSource: dataSource$k(),
      rowSelection: rowSelection$1,
      onResizeChange: this.onResizeChange
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Id",
      dataIndex: "id",
      resizable: true,
      width: this.state.widths.id
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Title",
      dataIndex: "title.name",
      width: 400
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time",
      width: 600
    }), /* @__PURE__ */ createElement(exported.Column, {
      cell: render$d,
      width: 200
    }));
  }
}
function DemoComponent$o() {
  const content = /* @__PURE__ */ createElement(App$d, null);
  return /* @__PURE__ */ createElement(Style$o, null, content);
}
const Style$o = qe.div``;
var m24 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$o
});
const onChange$1 = function(...args) {
  console.log(...args);
}, dataSource$l = () => {
  const result2 = [];
  for (let i = 0; i < 5; i++) {
    result2.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2e3 + i
    });
  }
  return result2;
}, render$e = (value, index2, record) => {
  return /* @__PURE__ */ createElement("a", null, "Remove(", record.id, ")");
}, rowSelection$2 = {
  onChange: onChange$1,
  getProps: (record) => {
    return {
      disabled: record.id === 100306660942
    };
  }
};
function DemoComponent$p() {
  const content = /* @__PURE__ */ createElement(exported, {
    dataSource: dataSource$l(),
    rowSelection: rowSelection$2
  }, /* @__PURE__ */ createElement(exported.Column, {
    title: "Id",
    dataIndex: "id"
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Title",
    dataIndex: "title.name"
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Time",
    dataIndex: "time"
  }), /* @__PURE__ */ createElement(exported.Column, {
    cell: render$e,
    width: 200
  }));
  return /* @__PURE__ */ createElement(Style$p, null, content);
}
const Style$p = qe.div``;
var m25 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$p
});
const {Item} = MenuButton;
const dataSource$m = () => {
  const result2 = [];
  for (let i = 0; i < 5; i++) {
    result2.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2e3 + i
    });
  }
  return result2;
};
const render$f = (value, index2, record) => {
  return /* @__PURE__ */ createElement("a", {
    href: "javascript:;"
  }, "Remove(", record.id, ")");
};
const onChange$2 = (...args) => {
  console.log(args);
};
const selectItem = (id) => {
  console.log(id);
};
function DemoComponent$q() {
  const content = /* @__PURE__ */ createElement(exported, {
    dataSource: dataSource$m(),
    rowSelection: {
      onChange: onChange$2,
      getProps: (record, index2) => {
        console.log(record, index2);
        return index2 === 2 ? {
          disabled: true,
          children: index2
        } : {
          children: index2
        };
      },
      columnProps: () => {
        return {
          lock: "left",
          width: 90,
          align: "center"
        };
      },
      titleProps: () => {
        return {
          disabled: true,
          children: /* @__PURE__ */ createElement(MenuButton, {
            text: true,
            onItemClick: selectItem,
            menuProps: {
              isSelectIconRight: true
            }
          }, /* @__PURE__ */ createElement(Item, {
            key: "odd"
          }, "odd"), /* @__PURE__ */ createElement(Item, {
            key: "even"
          }, "even"))
        };
      }
    }
  }, /* @__PURE__ */ createElement(exported.Column, {
    title: "Id",
    dataIndex: "id",
    width: 200
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Title",
    dataIndex: "title.name",
    width: 200
  }), /* @__PURE__ */ createElement(exported.Column, {
    title: "Time",
    dataIndex: "time",
    width: 200
  }), /* @__PURE__ */ createElement(exported.Column, {
    cell: render$f,
    width: 200
  }));
  return /* @__PURE__ */ createElement(Style$q, null, content);
}
const Style$q = qe.div``;
var m26 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$q
});
const dataSource$n = () => {
  const result2 = [];
  for (let i = 0; i < 5; i++) {
    result2.push({
      title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
      id: 100306660940 + i,
      time: 2e3 + i
    });
  }
  return result2;
}, render$g = (value, index2, record) => {
  return /* @__PURE__ */ createElement("a", null, "Remove(", record.id, ")");
};
class App$e extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: dataSource$n(),
      className: "",
      align: "left"
    };
  }
  toggleZebra() {
    this.setState({
      isZebra: !this.state.isZebra
    });
  }
  toggleBorder() {
    this.setState({
      hasBorder: !this.state.hasBorder
    });
  }
  makeBeauty() {
    this.setState({
      className: "beauty"
    });
  }
  makeAlign() {
    this.setState({
      align: "right"
    });
  }
  render() {
    return /* @__PURE__ */ createElement("span", null, /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement(Button, {
      onClick: this.toggleZebra.bind(this)
    }, " Toggle zebra "), " ", " ", /* @__PURE__ */ createElement(Button, {
      onClick: this.toggleBorder.bind(this)
    }, " ", "Toggle border"), " ", " ", /* @__PURE__ */ createElement(Button, {
      onClick: this.makeBeauty.bind(this)
    }, " ", "Make second column beauty", " "), " ", " ", /* @__PURE__ */ createElement(Button, {
      onClick: this.makeAlign.bind(this)
    }, " ", "Make first column align right", " "), " ", " "), /* @__PURE__ */ createElement(exported, {
      dataSource: this.state.dataSource,
      isZebra: this.state.isZebra,
      hasBorder: this.state.hasBorder
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Id",
      dataIndex: "id",
      alignHeader: "center"
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Title",
      dataIndex: "title",
      align: this.state.align,
      className: this.state.className
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time"
    }), /* @__PURE__ */ createElement(exported.Column, {
      cell: render$g,
      width: 200
    })));
  }
}
function DemoComponent$r() {
  const content = /* @__PURE__ */ createElement(App$e, null);
  return /* @__PURE__ */ createElement(Style$r, null, content);
}
const Style$r = qe.div`
  .beauty {
    background: #f7f7f7;
  }
`;
var m27 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$r
});
const dataSource$o = (j) => {
  const result2 = [];
  for (let i = 0; i < j; i++) {
    result2.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: `100306660940${i}`,
      time: 2e3 + i,
      index: i
    });
  }
  return result2;
};
const render$h = (value, index2, record) => {
  return /* @__PURE__ */ createElement("a", null, "Remove(", record.id, ")");
};
class App$f extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      scrollToRow: 20
    };
    this.onBodyScroll = (start) => {
      this.setState({
        scrollToRow: start
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement(exported, {
      dataSource: dataSource$o(200),
      maxBodyHeight: 400,
      useVirtual: true,
      scrollToRow: this.state.scrollToRow,
      onBodyScroll: this.onBodyScroll
    }, /* @__PURE__ */ createElement(exported.Column, {
      title: "Id1",
      dataIndex: "id",
      width: 100
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Index",
      dataIndex: "index",
      width: 200
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time",
      width: 200
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time",
      width: 200
    }), /* @__PURE__ */ createElement(exported.Column, {
      title: "Time",
      dataIndex: "time",
      width: 200,
      lock: "right"
    }), /* @__PURE__ */ createElement(exported.Column, {
      cell: render$h,
      width: 200,
      lock: true
    }));
  }
}
function DemoComponent$s() {
  const content = /* @__PURE__ */ createElement(App$f, null);
  return /* @__PURE__ */ createElement(Style$s, null, content);
}
const Style$s = qe.div``;
var m28 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$s
});
const modules = {};
modules["_accessibility"] = m0;
modules["_advanced"] = m1;
modules["_basic"] = m2;
modules["_basic-columns"] = m3;
modules["_clear-selection"] = m4;
modules["_colspan"] = m5;
modules["_colspan-lock-columns"] = m6;
modules["_column"] = m7;
modules["_crossline"] = m8;
modules["_crud"] = m9;
modules["_custom-loading"] = m10;
modules["_dragable"] = m11;
modules["_editable"] = m12;
modules["_expanded"] = m13;
modules["_expanded-complex"] = m14;
modules["_expanded-lock"] = m15;
modules["_filter&sort"] = m16;
modules["_fixed-header"] = m17;
modules["_get-row-props"] = m18;
modules["_list"] = m19;
modules["_lock-column"] = m20;
modules["_mix"] = m21;
modules["_multiple-header"] = m22;
modules["_pagination"] = m23;
modules["_resize"] = m24;
modules["_row-selection-config"] = m25;
modules["_selection"] = m26;
modules["_style"] = m27;
modules["_virtual"] = m28;
export default modules;
