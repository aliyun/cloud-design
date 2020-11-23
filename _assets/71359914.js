import {c as createElement, C as Component, B as Radio, L as Checkbox} from "./index.96485df2.js";
import {N as NextCascader} from "./56db2f9e.js";
import {q as qe} from "./af173317.js";
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((response) => response.json()).then((data) => {
      data[1].disabled = true;
      this.setState({data});
    }).catch((e) => console.log(e));
  }
  handleChange(value, data, extra) {
    console.log(value, data, extra);
    this.setState({
      label: extra.selectedPath.map((d) => d.label).join(" / ")
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      className: "cascader-value"
    }, "Select: ", this.state.label), /* @__PURE__ */ createElement(NextCascader, {
      dataSource: this.state.data,
      onChange: this.handleChange
    }));
  }
}
function DemoComponent() {
  const content = /* @__PURE__ */ createElement(Demo, null);
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div`
  .cascader-value {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const dataSource = [
  {
    value: "2973",
    label: "陕西",
    children: [
      {
        value: "2974",
        label: "西安",
        children: [
          {value: "2975", label: "西安市"},
          {value: "2976", label: "高陵县"}
        ]
      },
      {
        value: "2980",
        label: "铜川",
        children: [
          {value: "2981", label: "铜川市"},
          {value: "2982", label: "宜君县"}
        ]
      }
    ]
  },
  {
    value: "3371",
    label: "新疆",
    children: [
      {
        value: "3430",
        label: "巴音郭楞蒙古自治州",
        children: [
          {value: "3431", label: "库尔勒市"},
          {value: "3432", label: "和静县"}
        ]
      }
    ]
  }
];
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement(NextCascader, {
    defaultValue: "3439",
    defaultExpandedValue: ["3371", "3430"],
    listStyle: {width: "200px", height: "256px"},
    dataSource
  });
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const dataSource$1 = [
  {
    value: "2973",
    label: "陕西"
  }
];
class Demo$1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: dataSource$1
    };
    this.onLoadData = this.onLoadData.bind(this);
  }
  onLoadData(data) {
    console.log(data);
    return new Promise((resolve) => {
      setTimeout(() => {
        this.setState({
          dataSource: [
            {
              value: "2973",
              label: "陕西",
              children: [
                {
                  value: "2974",
                  label: "西安",
                  children: [
                    {value: "2975", label: "西安市", isLeaf: true},
                    {value: "2976", label: "高陵县", isLeaf: true}
                  ]
                },
                {
                  value: "2980",
                  label: "铜川",
                  children: [
                    {value: "2981", label: "铜川市", isLeaf: true},
                    {value: "2982", label: "宜君县", isLeaf: true}
                  ]
                }
              ]
            }
          ]
        }, resolve);
      }, 500);
    });
  }
  render() {
    return /* @__PURE__ */ createElement(NextCascader, {
      canOnlySelectLeaf: true,
      dataSource: this.state.dataSource,
      loadData: this.onLoadData
    });
  }
}
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement(Demo$1, null);
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div`
  .cascader-value {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const RadioGroup = Radio.Group;
class Demo$2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      triggerType: "click",
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTriggerTypeChange = this.handleTriggerTypeChange.bind(this);
  }
  componentDidMount() {
    fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((response) => response.json()).then((data) => this.setState({data})).catch((e) => console.log(e));
  }
  handleChange(value, data, extra) {
    console.log(value, data, extra);
  }
  handleTriggerTypeChange(triggerType) {
    this.setState({
      triggerType
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      className: "trigger-check"
    }, "Expand trigger type:", /* @__PURE__ */ createElement(RadioGroup, {
      dataSource: ["click", "hover"],
      value: this.state.triggerType,
      onChange: this.handleTriggerTypeChange
    })), /* @__PURE__ */ createElement(NextCascader, {
      expandTriggerType: this.state.triggerType,
      dataSource: this.state.data,
      onChange: this.handleChange
    }));
  }
}
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement(Demo$2, null);
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = qe.div`
  .trigger-check {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }

  .trigger-check .next-radio-group {
    margin-left: 10px;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
class Demo$3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((response) => response.json()).then((data) => {
      data[1].disabled = true;
      data[2].checkboxDisabled = true;
      data[0].children[2].checkboxDisabled = true;
      data[0].children[1].disabled = true;
      this.setState({data});
    }).catch((e) => console.log(e));
  }
  handleChange(value, data, extra) {
    console.log(value, data, extra);
    this.setState({
      label: data.map((d) => d.label).join(", ")
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      className: "cascader-value"
    }, "Select: ", this.state.label), /* @__PURE__ */ createElement(NextCascader, {
      multiple: true,
      dataSource: this.state.data,
      onChange: this.handleChange
    }));
  }
}
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement(Demo$3, null);
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = qe.div`
  .cascader-value {
    width: 500px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
class Demo$4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      data: [],
      checkStrictly: false
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((response) => response.json()).then((data) => this.setState({data, value: ["2975"]})).catch((e) => console.log(e));
  }
  handleCheck() {
    this.setState({
      checkStrictly: !this.state.checkStrictly,
      value: []
    });
  }
  handleChange(value, data, extra) {
    console.log(value, data, extra);
    this.setState({
      value
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "control-multiple-demo"
    }, /* @__PURE__ */ createElement("label", {
      className: "strictly-check"
    }, /* @__PURE__ */ createElement(Checkbox, {
      value: this.state.checkStrictly,
      onChange: this.handleCheck
    }), /* @__PURE__ */ createElement("span", {
      className: "strictly-text"
    }, "Enable checkStrictly")), /* @__PURE__ */ createElement(NextCascader, {
      multiple: true,
      checkStrictly: this.state.checkStrictly,
      value: this.state.value,
      dataSource: this.state.data,
      onChange: this.handleChange
    }));
  }
}
function DemoComponent$5() {
  const content = /* @__PURE__ */ createElement(Demo$4, null);
  return /* @__PURE__ */ createElement(Style$5, null, content);
}
const Style$5 = qe.div`
  .control-multiple-demo .strictly-check {
    display: block;
    margin-bottom: 10px;
  }

  .control-multiple-demo .strictly-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
class Demo$5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      canOnlySelectLeaf: false,
      data: []
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((response) => response.json()).then((data) => this.setState({data, value: "2975"})).catch((e) => console.log(e));
  }
  handleCheck() {
    this.setState({
      canOnlySelectLeaf: !this.state.canOnlySelectLeaf,
      value: null
    });
  }
  handleChange(value, data, extra) {
    console.log(value, data, extra);
    this.setState({
      value
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", {
      className: "control-single-demo"
    }, /* @__PURE__ */ createElement("label", {
      className: "leaf-check"
    }, /* @__PURE__ */ createElement(Checkbox, {
      value: this.state.canOnlySelectLeaf,
      onChange: this.handleCheck
    }), /* @__PURE__ */ createElement("span", {
      className: "leaf-text"
    }, "Enable canOnlySelectLeaf")), /* @__PURE__ */ createElement(NextCascader, {
      canOnlySelectLeaf: this.state.canOnlySelectLeaf,
      value: this.state.value,
      dataSource: this.state.data,
      onChange: this.handleChange
    }));
  }
}
function DemoComponent$6() {
  const content = /* @__PURE__ */ createElement(Demo$5, null);
  return /* @__PURE__ */ createElement(Style$6, null, content);
}
const Style$6 = qe.div`
  .control-single-demo .leaf-check {
    display: block;
    margin-bottom: 10px;
  }

  .control-single-demo .leaf-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const dataSource$2 = [
  {
    value: "2974",
    label: "西安"
  },
  {
    value: "2980",
    label: "铜川"
  }
];
class Demo$6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: dataSource$2
    };
    this.onLoadData = this.onLoadData.bind(this);
  }
  onLoadData(data, source) {
    console.log(data, source);
    return new Promise((resolve) => {
      source.children = source.value === "2974" ? [
        {value: "2975", label: "西安市", isLeaf: true},
        {value: "2976", label: "高陵县", isLeaf: true}
      ] : [
        {value: "2981", label: "铜川市", isLeaf: true},
        {value: "2982", label: "宜君县", isLeaf: true}
      ];
      setTimeout(() => {
        this.setState({
          dataSource: this.state.dataSource
        }, resolve);
      }, 500);
    });
  }
  render() {
    return /* @__PURE__ */ createElement(NextCascader, {
      canOnlySelectLeaf: true,
      dataSource: this.state.dataSource,
      loadData: this.onLoadData
    });
  }
}
function DemoComponent$7() {
  const content = /* @__PURE__ */ createElement(Demo$6, null);
  return /* @__PURE__ */ createElement(Style$7, null, content);
}
const Style$7 = qe.div`
  .cascader-value {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
const modules = {};
modules["_basic"] = m0;
modules["_custom-style"] = m1;
modules["_dynamic"] = m2;
modules["_expand-trigger"] = m3;
modules["_multiple"] = m4;
modules["_multiple-control"] = m5;
modules["_single-control"] = m6;
modules["_source"] = m7;
export default modules;
