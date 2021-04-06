import{r as e,U as t,V as a,G as l}from"./index.26e635a6.js";import{q as n}from"./styled-components.browser.esm.08d92d51.js";import"./fetch.71669c70.js";const o=[{value:"2973",label:"陕西",children:[{value:"2974",label:"西安",children:[{value:"2975",label:"西安市"},{value:"2976",label:"高陵县"}]},{value:"2980",label:"铜川",children:[{value:"2981",label:"铜川市"},{value:"2982",label:"宜君县"}]}]},{value:"3371",label:"新疆",children:[{value:"3430",label:"巴音郭楞蒙古自治州",children:[{value:"3431",label:"库尔勒市"},{value:"3432",label:"和静县"}]}]}];function c(e){return`${e.label}(${e.value})`}const s=n.div``;var r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const a=e.createElement(t,{defaultValue:"3439",defaultExpandedValue:["3371","3430"],listStyle:{width:"180px",height:"256px"},dataSource:o,itemRender:c});return e.createElement(s,null,a)}});class i extends e.Component{constructor(e){super(e),this.handleCheck=()=>{this.setState({checkStrictly:!this.state.checkStrictly})},this.handleChange=(e,t,a)=>{console.log(e,t,a)},this.state={data:[],checkStrictly:!1}}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e,value:["2975"]}))).catch((e=>console.log(e)))}render(){return e.createElement("div",{className:"control-multiple-demo"},e.createElement("label",{className:"strictly-check"},e.createElement(a,{checked:this.state.checkStrictly,onChange:this.handleCheck}),e.createElement("span",{className:"strictly-text"},"Enable checkStrictly")),e.createElement(t,{multiple:!0,checkStrictly:this.state.checkStrictly,dataSource:this.state.data,onChange:this.handleChange}))}}const h=n.div`
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
`;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(i,null);return e.createElement(h,null,t)}});class u extends e.Component{constructor(e){super(e),this.state={label:"",data:[]},this.handleChange=this.handleChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>{e[1].disabled=!0,this.setState({data:e})})).catch((e=>console.log(e)))}handleChange(e,t,a){console.log(e,t,a),this.setState({label:a.selectedPath.map((e=>e.label)).join(" / ")})}render(){return e.createElement("div",null,e.createElement("div",{className:"cascader-value"},"Selected: ",this.state.label),e.createElement(t,{dataSource:this.state.data,onChange:this.handleChange}))}}const m=n.div`
  .cascader-value {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(u,null);return e.createElement(m,null,t)}});class p extends e.Component{constructor(e){super(e),this.handleChange=(e,t,a)=>{console.log(e,t,a)},this.state={value:null}}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e,value:"2975"}))).catch((e=>console.log(e)))}render(){return e.createElement("div",{className:"control-single-demo"},e.createElement(t,{canOnlySelectLeaf:!0,dataSource:this.state.data,onChange:this.handleChange}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{multiple:!0,canOnlyCheckLeaf:!0,dataSource:this.state.data,onChange:this.handleChange}))}}const b=n.div`
  .control-single-demo > div:not(last-child) {
    margin-right: 20px;
  }
`;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(p,null);return e.createElement(b,null,t)}});const S=l.Group;class f extends e.Component{constructor(e){super(e),this.state={triggerType:"click",data:[]},this.handleChange=this.handleChange.bind(this),this.handleTriggerTypeChange=this.handleTriggerTypeChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e}))).catch((e=>console.log(e)))}handleChange(e,t,a){console.log(e,t,a)}handleTriggerTypeChange(e){this.setState({triggerType:e})}render(){return e.createElement("div",null,e.createElement("div",{className:"trigger-check"},e.createElement(S,{dataSource:["click","hover"],shape:"button",value:this.state.triggerType,onChange:this.handleTriggerTypeChange})),e.createElement(t,{expandTriggerType:this.state.triggerType,dataSource:this.state.data,onChange:this.handleChange}))}}const y=n.div`
  .trigger-check {
    margin-bottom: 10px;
  }
`;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(f,null);return e.createElement(y,null,t)}});const C=[{value:"2973",label:"陕西"}];class _ extends e.Component{constructor(e){super(e),this.state={dataSource:C},this.onLoadData=this.onLoadData.bind(this)}onLoadData(e){return console.log(e),new Promise((e=>{setTimeout((()=>{this.setState({dataSource:[{value:"2973",label:"陕西",children:[{value:"2974",label:"西安",children:[{value:"2975",label:"西安市",isLeaf:!0},{value:"2976",label:"高陵县",isLeaf:!0}]},{value:"2980",label:"铜川",children:[{value:"2981",label:"铜川市",isLeaf:!0},{value:"2982",label:"宜君县",isLeaf:!0}]}]}]},e)}),500)}))}render(){return e.createElement(t,{canOnlySelectLeaf:!0,dataSource:this.state.dataSource,loadData:this.onLoadData})}}const j=n.div`
  .cascader-value {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(_,null);return e.createElement(j,null,t)}});class T extends e.Component{constructor(e){super(e),this.state={label:"",data:[]},this.handleChange=this.handleChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>{this.setState({data:e})})).catch((e=>console.log(e)))}handleChange(e,t,a){console.log(e,t,a),this.setState({label:t.map((e=>e.label)).join(", ")})}render(){return e.createElement("div",null,e.createElement("div",{className:"cascader-value"},"Select: ",this.state.label),e.createElement(t,{multiple:!0,dataSource:this.state.data,onChange:this.handleChange}))}}const D=n.div`
  .cascader-value {
    width: 500px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(T,null);return e.createElement(D,null,t)}});const O={};O["_custom-style"]=r,O["_check-strictly"]=d,O._basic=g,O["_only-leaf"]=v,O["_expand-trigger"]=E,O._dynamic=x,O._multiple=k;export default O;
