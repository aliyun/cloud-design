import {c as createElement, C as Component} from "./index.bb8dccba.js";
import {H as He} from "./6568bbcc.js";
import "./b6f4cd1d.js";
import "./e494a2e1.js";
import "./fffc39de.js";
import "./d16919af.js";
import "./7b1ecb27.js";
import "./450c4260.js";
import "./bb1305a9.js";
import {N as NextMenu} from "./5226ac39.js";
import "./a1bfc215.js";
import "./995cf0bc.js";
import "./145acf68.js";
import "./871d780a.js";
import "./243ba4be.js";
import "./abc8c979.js";
import {e as exported} from "./13ee3965.js";
import "./775619bb.js";
import {S as Search} from "./cd16e180.js";
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Search, {
    key: "3",
    placeholder: "Please enter the search content",
    onSearch: (v) => console.log(v),
    searchText: /* @__PURE__ */ createElement("span", null, "search"),
    style: {width: "400px"}
  })));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
function onSearch(v) {
  console.log(v);
}
const App = () => [
  /* @__PURE__ */ createElement("p", {
    key: "1"
  }, "simple"),
  /* @__PURE__ */ createElement(Search, {
    key: "2",
    shape: "simple",
    onSearch,
    style: {width: "400px"}
  }),
  /* @__PURE__ */ createElement("p", {
    key: "2.4"
  }, "disabled"),
  /* @__PURE__ */ createElement(Search, {
    key: "2.5",
    shape: "simple",
    disabled: true,
    onSearch,
    style: {width: "400px"}
  }),
  /* @__PURE__ */ createElement("p", {
    key: "3"
  }, "default"),
  /* @__PURE__ */ createElement(Search, {
    key: "4",
    onSearch,
    style: {width: "400px"}
  }),
  /* @__PURE__ */ createElement("p", {
    key: "5"
  }, "custom text "),
  /* @__PURE__ */ createElement(Search, {
    key: "6",
    searchText: "search",
    onSearch,
    style: {width: "400px"}
  }),
  /* @__PURE__ */ createElement("p", {
    key: "7"
  }, "custom text widthout icon"),
  /* @__PURE__ */ createElement(Search, {
    key: "8",
    hasIcon: false,
    searchText: /* @__PURE__ */ createElement("span", {
      style: {color: "blue"}
    }, "search"),
    onSearch,
    style: {width: "400px"}
  })
];
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(App, null));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const dataSource = [
  {
    label: "Recent",
    value: "Recent"
  },
  {
    label: "dress",
    value: "dress"
  },
  {
    label: "sunglasses",
    value: "sunglasses"
  },
  {
    label: "t-shirt",
    value: "t-shirt"
  }
];
class App$1 extends Component {
  onSearch(value, filterValue) {
    console.log("onSearch", value, filterValue);
  }
  onChange(value, type, e) {
    console.log("onChange", value, type, e);
    this.setState({
      value
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, "auto highlight first item", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Search, {
      dataSource,
      onChange: this.onChange.bind(this),
      onSearch: this.onSearch.bind(this)
    }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), "no default highlight item, should use UP/DOWN", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Search, {
      autoHighlightFirstItem: false,
      dataSource,
      onChange: this.onChange.bind(this),
      onSearch: this.onSearch.bind(this)
    }));
  }
}
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(App$1, null));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const menuData = [
  {
    label: "Option 1",
    value: "Option 1 Value",
    index: "1"
  },
  {
    label: "Option 2",
    value: "Option 2 Value",
    index: "2"
  },
  {
    label: "Option 3",
    value: "Option 3 Value",
    index: "3"
  },
  {
    label: "Option 4",
    value: "Option 4 Value",
    index: "4"
  }
];
class App$2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      value: "111222",
      menuData
    };
    this.onVisibleChange = this.onVisibleChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }
  renderMenu() {
    const menuData2 = this.state.menuData;
    return /* @__PURE__ */ createElement(NextMenu, {
      onSelect: this.onSelect.bind(this),
      rtl: true,
      className: "diy-menu",
      selectMode: "single"
    }, /* @__PURE__ */ createElement(NextMenu.Group, {
      label: "Recent",
      key: "xxx"
    }, menuData2.map((item) => {
      return /* @__PURE__ */ createElement(NextMenu.Item, {
        key: item.value
      }, item.label, /* @__PURE__ */ createElement(exported, {
        className: "diy-menu-button",
        onClick: this.onDelete.bind(this, item.index),
        text: true
      }, "Delete"));
    })));
  }
  onSearch(value) {
    console.log(value);
  }
  onChange(value) {
    this.setState({
      visible: value.length > 0,
      value
    });
  }
  onSelect(selectedKeys) {
    this.setState({
      visible: false,
      value: selectedKeys[0]
    });
  }
  onDelete(index, e) {
    e.stopPropagation();
    const menuData2 = this.state.menuData;
    const menuDataNew = [];
    menuData2.forEach(function(item) {
      if (item.index !== index) {
        menuDataNew.push(item);
      }
    });
    this.setState({
      menuData: menuDataNew
    });
  }
  onFocus() {
    this.setState({
      visible: true
    });
  }
  onVisibleChange() {
    this.setState({
      visible: false
    });
  }
  render() {
    const {visible, value} = this.state;
    return /* @__PURE__ */ createElement("div", {
      style: {width: 700}
    }, /* @__PURE__ */ createElement(Search, {
      onVisibleChange: this.onVisibleChange,
      popupContent: this.renderMenu(),
      visible,
      value,
      onSearch: this.onSearch,
      onChange: this.onChange,
      onFocus: this.onFocus
    }));
  }
}
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(App$2, null));
}
const Style$3 = He.div`
  .diy-menu {
    /*width: 275px*/
  }

  .diy-menu .next-menu-item a {
    display: none;
    float: right;
    cursor: pointer;
  }
  .diy-menu .next-menu-item:hover a {
    display: inline-block;
  }
  .diy-menu .diy-menu-button {
    float: right;
  }
  .diy-menu[dir='rtl'] .diy-menu-button {
    float: left;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
class App$3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: [
        {
          label: "Products",
          value: "Products"
        },
        {
          label: "Products1",
          value: "Products1"
        },
        {
          label: "Products2",
          value: "Products2"
        },
        {
          label: "Products3",
          value: "Products3"
        },
        {
          label: "Products4",
          value: "Products4"
        },
        {
          label: "Products5",
          value: "Products5"
        },
        {
          label: "Products6",
          value: "Products6"
        },
        {
          label: "Products7",
          value: "Products7"
        },
        {
          label: "Products8",
          value: "Products8"
        },
        {
          label: "Products9",
          value: "Products9"
        },
        {
          label: "Products10",
          value: "Products10"
        },
        {
          label: "Suppliers",
          value: "Suppliers"
        }
      ],
      value: ""
    };
  }
  onSearch(value, filterValue) {
    console.log(value, filterValue);
  }
  onChange(value) {
    this.setState({
      value
    });
  }
  onFilterChange(value) {
    console.log(value);
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Search, {
      onChange: this.onChange.bind(this),
      onSearch: this.onSearch.bind(this),
      filterProps: {autoWidth: false},
      defaultFilterValue: "Suppliers",
      filter: this.state.filter,
      onFilterChange: this.onFilterChange.bind(this)
    }));
  }
}
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement(App$3, null));
}
const Style$4 = He.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Search, {
    size: "large",
    defaultValue: "large",
    searchText: "Search",
    placeholder: "What are you looking for..."
  }), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Search, {
    size: "medium",
    defaultValue: "medium",
    searchText: "Search",
    placeholder: "What are you looking for..."
  })));
}
const Style$5 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h2", null, "Normal"), /* @__PURE__ */ createElement(Search, {
    type: "primary",
    placeholder: "primary"
  }), /* @__PURE__ */ createElement("br", null), " ", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Search, {
    type: "secondary",
    placeholder: "Secondary"
  }), /* @__PURE__ */ createElement("br", null), " ", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(Search, {
    type: "normal",
    placeholder: "normal"
  }), /* @__PURE__ */ createElement("br", null), " ", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("div", {
    style: {background: "#333", padding: 20}
  }, /* @__PURE__ */ createElement(Search, {
    type: "dark",
    placeholder: "dark"
  })), /* @__PURE__ */ createElement("h2", null, "Simple"), /* @__PURE__ */ createElement(Search, {
    type: "normal",
    shape: "simple",
    placeholder: "normal"
  }), /* @__PURE__ */ createElement("br", null), " ", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("div", {
    style: {background: "#333", padding: 20}
  }, /* @__PURE__ */ createElement(Search, {
    shape: "simple",
    type: "dark",
    placeholder: "dark"
  }))));
}
const Style$6 = He.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const modules = {};
modules["_accessibility"] = m0;
modules["_base"] = m1;
modules["_combobox"] = m2;
modules["_custom"] = m3;
modules["_filter"] = m4;
modules["_size"] = m5;
modules["_type"] = m6;
export default modules;
