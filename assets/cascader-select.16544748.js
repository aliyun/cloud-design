import{r as e,O as t,b as l,M as a,R as n}from"./index.4642f55c.js";import{q as s}from"./styled-components.browser.esm.1feaecc0.js";import"./fetch.71669c70.js";class o extends e.Component{constructor(e){super(e),this.state={data:[]},this.handleChange=this.handleChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>{e[1].disabled=!0,this.setState({data:e})})).catch((e=>console.log(e)))}handleChange(e,t,l){console.log(e,t,l)}render(){return e.createElement(t,{style:{width:"302px"},dataSource:this.state.data,onChange:this.handleChange})}}const c=s.div``;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(o,null);return e.createElement(c,null,t)}});class r extends e.Component{constructor(e){super(e),this.valueRender=e=>e.label?e.label:"432988"===e.value?"不存在的":e.value,this.state={data:[]},this.handleChange=this.handleChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>{e[1].disabled=!0,this.setState({data:e})})).catch((e=>console.log(e)))}handleChange(e,t,l){console.log(e,t,l)}render(){return e.createElement(t,{valueRender:this.valueRender,defaultValue:"432988",style:{width:"302px"},dataSource:this.state.data,onChange:this.handleChange})}}const i=s.div``;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(r,null);return e.createElement(i,null,t)}});const u=[{value:"0100",label:"金庸",children:[{value:"0101",label:"飞狐外传"},{value:"0102",label:"雪山飞狐"},{value:"0103",label:"连城诀"},{value:"0104",label:"天龙八部"},{value:"0105",label:"射雕英雄传"},{value:"0106",label:"白马啸西风"},{value:"0107",label:"鹿鼎记"},{value:"0108",label:"笑傲江湖"},{value:"0109",label:"书剑恩仇录"},{value:"0110",label:"神雕侠侣"},{value:"0111",label:"侠客行"},{value:"0112",label:"倚天屠龙记"},{value:"0113",label:"碧血剑"},{value:"0114",label:"鸳鸯刀"}]},{value:"0200",label:"古龙",children:[{value:"0201",label:"小李飞刀"},{value:"0202",label:"绝代双骄"},{value:"0203",label:"大旗英雄传"},{value:"0204",label:"英雄无泪"},{value:"0205",label:"边城浪子"},{value:"0206",label:"楚留香传奇"}]},{children:[{value:"0301",label:"白发魔女传"},{value:"0302",label:"七剑下天山"},{value:"0303",label:"云海玉弓缘"}],value:"0300",label:"梁羽生"}];class m extends e.Component{constructor(e){super(e),this.state={label:"",data:[]},this.handleChange=this.handleChange.bind(this)}componentDidMount(){this.setState({data:u})}handleChange(e,t,l){console.log(e,t,l),this.setState({label:l.selectedPath.map((e=>e.label)).join(" / ")})}render(){return e.createElement("div",null,e.createElement("div",{id:"a11y-cascader-select"},"CascaderSelect: "),e.createElement(t,{dataSource:this.state.data,onChange:this.handleChange,"aria-labelledby":"a11y-cascader-select"}))}}const g=s.div`
  .next-menu-item:focus {
    background-color: #f2f3f7;
  }
`;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(m,null);return e.createElement(g,null,t)}});class b extends e.Component{constructor(e){super(e),this.state={data:[]},this.handleChange=this.handleChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>{e[1].disabled=!0,e[2].checkboxDisabled=!0,this.setState({data:e})})).catch((e=>console.log(e)))}handleChange(e,t,l){console.log(e,t,l)}render(){return e.createElement(t,{style:{width:"302px"},multiple:!0,dataSource:this.state.data,onChange:this.handleChange})}}const v=s.div`
  .cascader-value {
    width: 500px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(b,null);return e.createElement(v,null,t)}});const S=[{value:"2973",label:"陕西",children:[{value:"2974",label:"西安",children:[{value:"2975",label:"西安市"},{value:"2976",label:"高陵县"}]},{value:"2980",label:"铜川",children:[{value:"2981",label:"铜川市"},{value:"2982",label:"宜君县"}]}]},{value:"3371",label:"新疆",children:[{value:"3430",label:"巴音郭楞蒙古自治州",children:[{value:"3431",label:"库尔勒市"},{value:"3432",label:"和静县"}]}]}],y=t=>e.createElement("span",null,e.createElement(l,{type:"account",size:"xs"})," ",t.label);const f=s.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement(t,{style:{width:"302px"},listStyle:{width:"302px",height:"160px"},displayRender:e=>e[e.length-1],defaultValue:"3431",dataSource:S,itemRender:y});return e.createElement(f,null,l)}});const x=[{value:"2973",label:"陕西"}];class _ extends e.Component{constructor(e){super(e),this.state={dataSource:x},this.onLoadData=this.onLoadData.bind(this)}onLoadData(e){return console.log(e),new Promise((e=>{setTimeout((()=>{this.setState({dataSource:[{value:"2973",label:"陕西",children:[{value:"2974",label:"西安",children:[{value:"2975",label:"西安市",isLeaf:!0},{value:"2976",label:"高陵县",isLeaf:!0}]},{value:"2980",label:"铜川",children:[{value:"2981",label:"铜川市",isLeaf:!0},{value:"2982",label:"宜君县",isLeaf:!0}]}]}]},e)}),500)}))}render(){return e.createElement(t,{style:{width:"302px"},dataSource:this.state.dataSource,loadData:this.onLoadData})}}const k=s.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(_,null);return e.createElement(k,null,t)}});class D extends e.Component{constructor(e){super(e),this.state={value:[],data:[],checkStrictly:!1},this.handleCheck=this.handleCheck.bind(this),this.handleChange=this.handleChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e,value:["2975"]}))).catch((e=>console.log(e)))}handleCheck(){this.setState({checkStrictly:!this.state.checkStrictly,value:[]})}handleChange(e,t,l){console.log(e,t,l),this.setState({value:e})}render(){return e.createElement("div",{className:"control-multiple-demo"},e.createElement("label",{className:"strictly-check"},e.createElement(a,{value:this.state.checkStrictly,onChange:this.handleCheck}),e.createElement("span",{className:"strictly-text"},"Enable checkStrictly")),e.createElement(t,{style:{width:"302px"},multiple:!0,checkStrictly:this.state.checkStrictly,value:this.state.value,dataSource:this.state.data,onChange:this.handleChange}))}}const O=s.div`
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
`;var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(D,null);return e.createElement(O,null,t)}});class w extends e.Component{constructor(e){super(e),this.state={value:[],data:[],multiple:!1},this.handleCheck=this.handleCheck.bind(this),this.handleChange=this.handleChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e,value:["2975"]}))).catch((e=>console.log(e)))}handleCheck(){this.setState({multiple:!this.state.multiple,value:[]})}handleChange(e,t,l){console.log(e,t,l),this.setState({value:e})}render(){return e.createElement("div",{className:"search-demo"},e.createElement("label",{className:"multiple-check"},e.createElement(a,{value:this.state.multiple,onChange:this.handleCheck}),e.createElement("span",{className:"multiple-text"},"Multiple select")),e.createElement(t,{style:{width:"302px"},showSearch:!0,multiple:this.state.multiple,value:this.state.value,dataSource:this.state.data,onChange:this.handleChange}))}}const M=s.div`
  .search-demo .multiple-check {
    display: block;
    margin-bottom: 10px;
  }

  .search-demo .multiple-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(w,null);return e.createElement(M,null,t)}});class L extends e.Component{constructor(e){super(e),this.state={value:null,changeOnSelect:!1,data:[]},this.handleCheck=this.handleCheck.bind(this),this.handleChange=this.handleChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e,value:"2975"}))).catch((e=>console.log(e)))}handleCheck(){this.setState({changeOnSelect:!this.state.changeOnSelect,value:null})}handleChange(e,t,l){console.log(e,t,l),this.setState({value:e})}render(){return e.createElement("div",{className:"control-single-demo"},e.createElement("label",{className:"change-check"},e.createElement(a,{value:!this.state.changeOnSelect,onChange:this.handleCheck}),e.createElement("span",{className:"change-text"},"Enable changeOnSelect")),e.createElement(t,{style:{width:"302px"},changeOnSelect:this.state.changeOnSelect,value:this.state.value,dataSource:this.state.data,onChange:this.handleChange}))}}const N=s.div`
  .control-single-demo .change-check {
    display: block;
    margin-bottom: 10px;
  }

  .control-single-demo .change-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`;var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(L,null);return e.createElement(N,null,t)}});const A=n.Group;class F extends e.Component{constructor(e){super(e),this.state={triggerType:"click",data:[]},this.handleChange=this.handleChange.bind(this),this.handleTriggerTypeChange=this.handleTriggerTypeChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e}))).catch((e=>console.log(e)))}handleChange(e,t,l){console.log(e,t,l)}handleTriggerTypeChange(e){this.setState({triggerType:e})}render(){return e.createElement("div",null,e.createElement("div",{className:"trigger-check"},"Expand trigger type:",e.createElement(A,{dataSource:["click","hover"],value:this.state.triggerType,onChange:this.handleTriggerTypeChange})),e.createElement(t,{style:{width:"302px"},expandTriggerType:this.state.triggerType,dataSource:this.state.data,onChange:this.handleChange}))}}const W=s.div`
  .trigger-check {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }

  .trigger-check .next-radio-group {
    margin-left: 10px;
  }
`;var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(F,null);return e.createElement(W,null,t)}});const R={};R._basic=h,R._custom=d,R._accessibility=p,R._multiple=C,R["_custom-style"]=E,R._dynamic=j,R["_multiple-control"]=T,R._search=z,R["_single-control"]=q,R["_expand-trigger"]=X;export default R;
