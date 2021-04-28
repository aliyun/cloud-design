import{r as e,Q as t,T as a,J as l}from"./index.db891132.js";import{q as n}from"./styled-components.browser.esm.2d3384e1.js";import"./fetch.71669c70.js";class o extends e.Component{constructor(e){super(e),this.state={label:"",data:[]},this.handleChange=this.handleChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>{e[1].disabled=!0,this.setState({data:e})})).catch((e=>console.log(e)))}handleChange(e,t,a){console.log(e,t,a),this.setState({label:a.selectedPath.map((e=>e.label)).join(" / ")})}render(){return e.createElement("div",null,e.createElement("div",{className:"cascader-value"},"Selected: ",this.state.label),e.createElement(t,{dataSource:this.state.data,onChange:this.handleChange}))}}const c=n.div`
  .cascader-value {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(o,null);return e.createElement(c,null,t)}});class r extends e.Component{constructor(e){super(e),this.handleCheck=()=>{this.setState({checkStrictly:!this.state.checkStrictly})},this.handleChange=(e,t,a)=>{console.log(e,t,a)},this.state={data:[],checkStrictly:!1}}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e,value:["2975"]}))).catch((e=>console.log(e)))}render(){return e.createElement("div",{className:"control-multiple-demo"},e.createElement("label",{className:"strictly-check"},e.createElement(a,{checked:this.state.checkStrictly,onChange:this.handleCheck}),e.createElement("span",{className:"strictly-text"},"Enable checkStrictly")),e.createElement(t,{multiple:!0,checkStrictly:this.state.checkStrictly,dataSource:this.state.data,onChange:this.handleChange}))}}const i=n.div`
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
`;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(r,null);return e.createElement(i,null,t)}});const d=[{value:"2973",label:"陕西",children:[{value:"2974",label:"西安",children:[{value:"2975",label:"西安市"},{value:"2976",label:"高陵县"}]},{value:"2980",label:"铜川",children:[{value:"2981",label:"铜川市"},{value:"2982",label:"宜君县"}]}]},{value:"3371",label:"新疆",children:[{value:"3430",label:"巴音郭楞蒙古自治州",children:[{value:"3431",label:"库尔勒市"},{value:"3432",label:"和静县"}]}]}];function u(e){return`${e.label}(${e.value})`}const m=n.div``;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const a=e.createElement(t,{defaultValue:"3439",defaultExpandedValue:["3371","3430"],listStyle:{width:"180px",height:"256px"},dataSource:d,itemRender:u});return e.createElement(m,null,a)}});class p extends e.Component{constructor(e){super(e),this.state={label:"",data:[]},this.handleChange=this.handleChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>{this.setState({data:e})})).catch((e=>console.log(e)))}handleChange(e,t,a){console.log(e,t,a),this.setState({label:t.map((e=>e.label)).join(", ")})}render(){return e.createElement("div",null,e.createElement("div",{className:"cascader-value"},"Select: ",this.state.label),e.createElement(t,{multiple:!0,dataSource:this.state.data,onChange:this.handleChange}))}}const b=n.div`
  .cascader-value {
    width: 500px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(p,null);return e.createElement(b,null,t)}});class S extends e.Component{constructor(e){super(e),this.handleChange=(e,t,a)=>{console.log(e,t,a)},this.state={value:null}}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e,value:"2975"}))).catch((e=>console.log(e)))}render(){return e.createElement("div",{className:"control-single-demo"},e.createElement(t,{canOnlySelectLeaf:!0,dataSource:this.state.data,onChange:this.handleChange}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{multiple:!0,canOnlyCheckLeaf:!0,dataSource:this.state.data,onChange:this.handleChange}))}}const f=n.div`
  .control-single-demo > div:not(last-child) {
    margin-right: 20px;
  }
`;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(S,null);return e.createElement(f,null,t)}});const E=l.Group;class C extends e.Component{constructor(e){super(e),this.state={triggerType:"click",data:[]},this.handleChange=this.handleChange.bind(this),this.handleTriggerTypeChange=this.handleTriggerTypeChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e}))).catch((e=>console.log(e)))}handleChange(e,t,a){console.log(e,t,a)}handleTriggerTypeChange(e){this.setState({triggerType:e})}render(){return e.createElement("div",null,e.createElement("div",{className:"trigger-check"},e.createElement(E,{dataSource:["click","hover"],shape:"button",value:this.state.triggerType,onChange:this.handleTriggerTypeChange})),e.createElement(t,{expandTriggerType:this.state.triggerType,dataSource:this.state.data,onChange:this.handleChange}))}}const _=n.div`
  .trigger-check {
    margin-bottom: 10px;
  }
`;var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(C,null);return e.createElement(_,null,t)}});const j=[{value:"2973",label:"陕西"}];class x extends e.Component{constructor(e){super(e),this.state={dataSource:j},this.onLoadData=this.onLoadData.bind(this)}onLoadData(e){return console.log(e),new Promise((e=>{setTimeout((()=>{this.setState({dataSource:[{value:"2973",label:"陕西",children:[{value:"2974",label:"西安",children:[{value:"2975",label:"西安市",isLeaf:!0},{value:"2976",label:"高陵县",isLeaf:!0}]},{value:"2980",label:"铜川",children:[{value:"2981",label:"铜川市",isLeaf:!0},{value:"2982",label:"宜君县",isLeaf:!0}]}]}]},e)}),500)}))}render(){return e.createElement(t,{canOnlySelectLeaf:!0,dataSource:this.state.dataSource,loadData:this.onLoadData})}}const D=n.div`
  .cascader-value {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(x,null);return e.createElement(D,null,t)}});const O={};O._basic=s,O["_check-strictly"]=h,O["_custom-style"]=g,O._multiple=v,O["_only-leaf"]=y,O["_expand-trigger"]=T,O._dynamic=k;export default O;
