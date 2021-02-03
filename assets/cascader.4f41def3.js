import{r as e,L as t,R as a,M as l}from"./index.3d842b9a.js";import{q as n}from"./styled-components.browser.esm.b64bc59a.js";import"./fetch.71669c70.js";const o=[{value:"2973",label:"陕西"}];class s extends e.Component{constructor(e){super(e),this.state={dataSource:o},this.onLoadData=this.onLoadData.bind(this)}onLoadData(e){return console.log(e),new Promise((e=>{setTimeout((()=>{this.setState({dataSource:[{value:"2973",label:"陕西",children:[{value:"2974",label:"西安",children:[{value:"2975",label:"西安市",isLeaf:!0},{value:"2976",label:"高陵县",isLeaf:!0}]},{value:"2980",label:"铜川",children:[{value:"2981",label:"铜川市",isLeaf:!0},{value:"2982",label:"宜君县",isLeaf:!0}]}]}]},e)}),500)}))}render(){return e.createElement(t,{canOnlySelectLeaf:!0,dataSource:this.state.dataSource,loadData:this.onLoadData})}}const c=n.div`
  .cascader-value {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;var r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(s,null);return e.createElement(c,null,t)}});class i extends e.Component{constructor(e){super(e),this.state={label:"",data:[]},this.handleChange=this.handleChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>{e[1].disabled=!0,this.setState({data:e})})).catch((e=>console.log(e)))}handleChange(e,t,a){console.log(e,t,a),this.setState({label:a.selectedPath.map((e=>e.label)).join(" / ")})}render(){return e.createElement("div",null,e.createElement("div",{className:"cascader-value"},"Select: ",this.state.label),e.createElement(t,{dataSource:this.state.data,onChange:this.handleChange}))}}const h=n.div`
  .cascader-value {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(i,null);return e.createElement(h,null,t)}});const u=a.Group;class m extends e.Component{constructor(e){super(e),this.state={triggerType:"click",data:[]},this.handleChange=this.handleChange.bind(this),this.handleTriggerTypeChange=this.handleTriggerTypeChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e}))).catch((e=>console.log(e)))}handleChange(e,t,a){console.log(e,t,a)}handleTriggerTypeChange(e){this.setState({triggerType:e})}render(){return e.createElement("div",null,e.createElement("div",{className:"trigger-check"},"Expand trigger type:",e.createElement(u,{dataSource:["click","hover"],value:this.state.triggerType,onChange:this.handleTriggerTypeChange})),e.createElement(t,{expandTriggerType:this.state.triggerType,dataSource:this.state.data,onChange:this.handleChange}))}}const g=n.div`
  .trigger-check {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }

  .trigger-check .next-radio-group {
    margin-left: 10px;
  }
`;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(m,null);return e.createElement(g,null,t)}});const b=[{value:"2973",label:"陕西",children:[{value:"2974",label:"西安",children:[{value:"2975",label:"西安市"},{value:"2976",label:"高陵县"}]},{value:"2980",label:"铜川",children:[{value:"2981",label:"铜川市"},{value:"2982",label:"宜君县"}]}]},{value:"3371",label:"新疆",children:[{value:"3430",label:"巴音郭楞蒙古自治州",children:[{value:"3431",label:"库尔勒市"},{value:"3432",label:"和静县"}]}]}];const v=n.div``;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const a=e.createElement(t,{defaultValue:"3439",defaultExpandedValue:["3371","3430"],listStyle:{width:"200px",height:"256px"},dataSource:b});return e.createElement(v,null,a)}});class S extends e.Component{constructor(e){super(e),this.state={label:"",data:[]},this.handleChange=this.handleChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>{e[1].disabled=!0,e[2].checkboxDisabled=!0,e[0].children[2].checkboxDisabled=!0,e[0].children[1].disabled=!0,this.setState({data:e})})).catch((e=>console.log(e)))}handleChange(e,t,a){console.log(e,t,a),this.setState({label:t.map((e=>e.label)).join(", ")})}render(){return e.createElement("div",null,e.createElement("div",{className:"cascader-value"},"Select: ",this.state.label),e.createElement(t,{multiple:!0,dataSource:this.state.data,onChange:this.handleChange}))}}const y=n.div`
  .cascader-value {
    width: 500px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(S,null);return e.createElement(y,null,t)}});class E extends e.Component{constructor(e){super(e),this.state={value:[],data:[],checkStrictly:!1},this.handleCheck=this.handleCheck.bind(this),this.handleChange=this.handleChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e,value:["2975"]}))).catch((e=>console.log(e)))}handleCheck(){this.setState({checkStrictly:!this.state.checkStrictly,value:[]})}handleChange(e,t,a){console.log(e,t,a),this.setState({value:e})}render(){return e.createElement("div",{className:"control-multiple-demo"},e.createElement("label",{className:"strictly-check"},e.createElement(l,{value:this.state.checkStrictly,onChange:this.handleCheck}),e.createElement("span",{className:"strictly-text"},"Enable checkStrictly")),e.createElement(t,{multiple:!0,checkStrictly:this.state.checkStrictly,value:this.state.value,dataSource:this.state.data,onChange:this.handleChange}))}}const x=n.div`
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
`;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(E,null);return e.createElement(x,null,t)}});class D extends e.Component{constructor(e){super(e),this.state={value:null,canOnlySelectLeaf:!1,data:[]},this.handleCheck=this.handleCheck.bind(this),this.handleChange=this.handleChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e,value:"2975"}))).catch((e=>console.log(e)))}handleCheck(){this.setState({canOnlySelectLeaf:!this.state.canOnlySelectLeaf,value:null})}handleChange(e,t,a){console.log(e,t,a),this.setState({value:e})}render(){return e.createElement("div",{className:"control-single-demo"},e.createElement("label",{className:"leaf-check"},e.createElement(l,{value:this.state.canOnlySelectLeaf,onChange:this.handleCheck}),e.createElement("span",{className:"leaf-text"},"Enable canOnlySelectLeaf")),e.createElement(t,{canOnlySelectLeaf:this.state.canOnlySelectLeaf,value:this.state.value,dataSource:this.state.data,onChange:this.handleChange}))}}const L=n.div`
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
`;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(D,null);return e.createElement(L,null,t)}});const T=[{value:"2974",label:"西安"},{value:"2980",label:"铜川"}];class j extends e.Component{constructor(e){super(e),this.state={dataSource:T},this.onLoadData=this.onLoadData.bind(this)}onLoadData(e,t){return console.log(e,t),new Promise((e=>{t.children="2974"===t.value?[{value:"2975",label:"西安市",isLeaf:!0},{value:"2976",label:"高陵县",isLeaf:!0}]:[{value:"2981",label:"铜川市",isLeaf:!0},{value:"2982",label:"宜君县",isLeaf:!0}],setTimeout((()=>{this.setState({dataSource:this.state.dataSource},e)}),500)}))}render(){return e.createElement(t,{canOnlySelectLeaf:!0,dataSource:this.state.dataSource,loadData:this.onLoadData})}}const O=n.div`
  .cascader-value {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(j,null);return e.createElement(O,null,t)}});const M={};M._dynamic=r,M._basic=d,M["_expand-trigger"]=p,M["_custom-style"]=f,M._multiple=C,M["_multiple-control"]=_,M["_single-control"]=k,M._source=z;export default M;
