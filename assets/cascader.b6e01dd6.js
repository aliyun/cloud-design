import{r as e,ay as t,C as a,a5 as l}from"./index.16a07d60.js";import{q as n}from"./styled-components.browser.esm.d6068967.js";import"./fetch.5522b714.js";class o extends e.exports.Component{constructor(e){super(e),this.state={label:"",data:[]},this.handleChange=this.handleChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>{e[1].disabled=!0,this.setState({data:e})})).catch((e=>console.log(e)))}handleChange(e,t,a){console.log(e,t,a),this.setState({label:a.selectedPath.map((e=>e.label)).join(" / ")})}render(){return e.exports.createElement("div",null,e.exports.createElement("div",{className:"cascader-value"},"Selected: ",this.state.label),e.exports.createElement(t,{dataSource:this.state.data,onChange:this.handleChange}))}}const s=n.div`
  .cascader-value {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;var r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(o,null);return e.exports.createElement(s,null,t)}});class c extends e.exports.Component{constructor(e){super(e),this.handleCheck=()=>{this.setState({checkStrictly:!this.state.checkStrictly})},this.handleChange=(e,t,a)=>{console.log(e,t,a)},this.state={data:[],checkStrictly:!1}}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e,value:["2975"]}))).catch((e=>console.log(e)))}render(){return e.exports.createElement("div",{className:"control-multiple-demo"},e.exports.createElement("label",{className:"strictly-check"},e.exports.createElement(a,{checked:this.state.checkStrictly,onChange:this.handleCheck}),e.exports.createElement("span",{className:"strictly-text"},"Enable checkStrictly")),e.exports.createElement(t,{multiple:!0,checkStrictly:this.state.checkStrictly,dataSource:this.state.data,onChange:this.handleChange}))}}const i=n.div`
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
`;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(c,null);return e.exports.createElement(i,null,t)}});const d=[{value:"2973",label:"陕西",children:[{value:"2974",label:"西安",children:[{value:"2975",label:"西安市"},{value:"2976",label:"高陵县"}]},{value:"2980",label:"铜川",children:[{value:"2981",label:"铜川市"},{value:"2982",label:"宜君县"}]}]},{value:"3371",label:"新疆",children:[{value:"3430",label:"巴音郭楞蒙古自治州",children:[{value:"3431",label:"库尔勒市"},{value:"3432",label:"和静县"}]}]}];function u(e){return`${e.label}(${e.value})`}const p=n.div``;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const a=e.exports.createElement(t,{defaultValue:"3439",defaultExpandedValue:["3371","3430"],listStyle:{width:"180px",height:"256px"},dataSource:d,itemRender:u});return e.exports.createElement(p,null,a)}});const g=[{value:"2973",label:"陕西"}];class b extends e.exports.Component{constructor(e){super(e),this.state={dataSource:g},this.onLoadData=this.onLoadData.bind(this)}onLoadData(e){return console.log(e),new Promise((e=>{setTimeout((()=>{this.setState({dataSource:[{value:"2973",label:"陕西",children:[{value:"2974",label:"西安",children:[{value:"2975",label:"西安市",isLeaf:!0},{value:"2976",label:"高陵县",isLeaf:!0}]},{value:"2980",label:"铜川",children:[{value:"2981",label:"铜川市",isLeaf:!0},{value:"2982",label:"宜君县",isLeaf:!0}]}]}]},e)}),500)}))}render(){return e.exports.createElement(t,{canOnlySelectLeaf:!0,dataSource:this.state.dataSource,loadData:this.onLoadData})}}const x=n.div`
  .cascader-value {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(b,null);return e.exports.createElement(x,null,t)}});const S=l.Group;class f extends e.exports.Component{constructor(e){super(e),this.state={triggerType:"click",data:[]},this.handleChange=this.handleChange.bind(this),this.handleTriggerTypeChange=this.handleTriggerTypeChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e}))).catch((e=>console.log(e)))}handleChange(e,t,a){console.log(e,t,a)}handleTriggerTypeChange(e){this.setState({triggerType:e})}render(){return e.exports.createElement("div",null,e.exports.createElement("div",{className:"trigger-check"},e.exports.createElement(S,{dataSource:["click","hover"],shape:"button",value:this.state.triggerType,onChange:this.handleTriggerTypeChange})),e.exports.createElement(t,{expandTriggerType:this.state.triggerType,dataSource:this.state.data,onChange:this.handleChange}))}}const y=n.div`
  .trigger-check {
    margin-bottom: 10px;
  }
`;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(f,null);return e.exports.createElement(y,null,t)}});class C extends e.exports.Component{constructor(e){super(e),this.state={label:"",data:[]},this.handleChange=this.handleChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>{this.setState({data:e})})).catch((e=>console.log(e)))}handleChange(e,t,a){console.log(e,t,a),this.setState({label:t.map((e=>e.label)).join(", ")})}render(){return e.exports.createElement("div",null,e.exports.createElement("div",{className:"cascader-value"},"Select: ",this.state.label),e.exports.createElement(t,{multiple:!0,dataSource:this.state.data,onChange:this.handleChange}))}}const _=n.div`
  .cascader-value {
    width: 500px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(C,null);return e.exports.createElement(_,null,t)}});class T extends e.exports.Component{constructor(e){super(e),this.handleChange=(e,t,a)=>{console.log(e,t,a)},this.state={value:null}}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e,value:"2975"}))).catch((e=>console.log(e)))}render(){return e.exports.createElement("div",{className:"control-single-demo"},e.exports.createElement(t,{canOnlySelectLeaf:!0,dataSource:this.state.data,onChange:this.handleChange}),e.exports.createElement("br",null),e.exports.createElement("br",null),e.exports.createElement(t,{multiple:!0,canOnlyCheckLeaf:!0,dataSource:this.state.data,onChange:this.handleChange}))}}const D=n.div`
  .control-single-demo > div:not(last-child) {
    margin-right: 20px;
  }
`;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(T,null);return e.exports.createElement(D,null,t)}});const O={};O._basic=r,O["_check-strictly"]=h,O["_custom-style"]=m,O._dynamic=v,O["_expand-trigger"]=E,O._multiple=j,O["_only-leaf"]=k;export default O;
