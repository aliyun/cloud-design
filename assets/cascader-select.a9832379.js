import{r as e,U as t,b as l,T as a,J as n}from"./index.db891132.js";import{q as o}from"./styled-components.browser.esm.2d3384e1.js";import"./fetch.71669c70.js";class s extends e.Component{constructor(e){super(e),this.valueRender=e=>e.label?e.label:"432988"===e.value?"不存在的值":e.value,this.state={data:[]},this.handleChange=this.handleChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>{e[1].disabled=!0,this.setState({data:e})})).catch((e=>console.log(e)))}handleChange(e,t,l){console.log(e,t,l)}render(){return e.createElement(t,{valueRender:this.valueRender,defaultValue:"432988",dataSource:this.state.data,onChange:this.handleChange})}}const c=o.div``;var r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(s,null);return e.createElement(c,null,t)}});class i extends e.Component{constructor(e){super(e),this.handleChange=(e,t,l)=>{console.log(e,t,l)},this.state={data:[]}}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>{this.setState({data:e})})).catch((e=>console.log(e)))}render(){return e.createElement(t,{dataSource:this.state.data,onChange:this.handleChange})}}const h=o.div``;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(i,null);return e.createElement(h,null,t)}});class d extends e.Component{constructor(e){super(e),this.handleChange=(e,t,l)=>{console.log(e,t,l)},this.state={data:[]}}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e,value:"2975"}))).catch((e=>console.log(e)))}render(){return e.createElement("div",{className:"control-single-demo"},e.createElement(t,{changeOnSelect:!0,dataSource:this.state.data,onChange:this.handleChange}))}}const m=o.div`
  .control-single-demo > div:not(last-child) {
    margin-right: 20px;
  }
`;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(d,null);return e.createElement(m,null,t)}});const p=[{value:"0100",label:"金庸",children:[{value:"0101",label:"飞狐外传"},{value:"0102",label:"雪山飞狐"},{value:"0103",label:"连城诀"},{value:"0104",label:"天龙八部"},{value:"0105",label:"射雕英雄传"},{value:"0106",label:"白马啸西风"},{value:"0107",label:"鹿鼎记"},{value:"0108",label:"笑傲江湖"},{value:"0109",label:"书剑恩仇录"},{value:"0110",label:"神雕侠侣"},{value:"0111",label:"侠客行"},{value:"0112",label:"倚天屠龙记"},{value:"0113",label:"碧血剑"},{value:"0114",label:"鸳鸯刀"}]},{value:"0200",label:"古龙",children:[{value:"0201",label:"小李飞刀"},{value:"0202",label:"绝代双骄"},{value:"0203",label:"大旗英雄传"},{value:"0204",label:"英雄无泪"},{value:"0205",label:"边城浪子"},{value:"0206",label:"楚留香传奇"}]},{children:[{value:"0301",label:"白发魔女传"},{value:"0302",label:"七剑下天山"},{value:"0303",label:"云海玉弓缘"}],value:"0300",label:"梁羽生"}];class b extends e.Component{constructor(e){super(e),this.state={data:[]},this.handleChange=this.handleChange.bind(this)}componentDidMount(){this.setState({data:p})}handleChange(e,t,l){console.log(e,t,l)}render(){return e.createElement(t,{dataSource:this.state.data,onChange:this.handleChange,listStyle:{width:"200px",height:"256px"},"aria-labelledby":"a11y-cascader-select"})}}const v=o.div`
  .next-menu-item:focus {
    background-color: #f2f3f7;
  }
`;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(b,null);return e.createElement(v,null,t)}});class S extends e.Component{constructor(e){super(e),this.handleChange=(e,t,l)=>{console.log(e,t,l)},this.state={data:[{value:"2973",label:"陕西",children:[{value:"2974",label:"西安",children:[{value:"2975",label:"西安市",isLeaf:!0,checkboxDisabled:!0},{value:"2976",label:"高陵县",isLeaf:!0}]},{value:"2980",label:"铜川",disabled:!0,children:[{value:"2981",label:"铜川市",isLeaf:!0},{value:"2982",label:"宜君县",isLeaf:!0}]}]}]}}render(){return e.createElement(t,{multiple:!0,dataSource:this.state.data,onChange:this.handleChange})}}const _=o.div``;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(S,null);return e.createElement(_,null,t)}});const E=[{value:"2973",label:"陕西",children:[{value:"2974",label:"西安",children:[{value:"2975",label:"西安市"},{value:"2976",label:"高陵县"}]},{value:"2980",label:"铜川",children:[{value:"2981",label:"铜川市"},{value:"2982",label:"宜君县"}]}]},{value:"3371",label:"新疆",children:[{value:"3430",label:"巴音郭楞蒙古自治州",children:[{value:"3431",label:"库尔勒市"},{value:"3432",label:"和静县"}]}]}],y=t=>e.createElement("span",null,e.createElement(l,{type:"account",size:"xs"})," ",t.label);const x=o.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement(t,{listStyle:{width:"120px",height:"160px"},displayRender:e=>e[e.length-1],defaultValue:"3431",dataSource:E,itemRender:y});return e.createElement(x,null,l)}});const D=[{value:"2973",label:"陕西"}];class T extends e.Component{constructor(e){super(e),this.state={dataSource:D},this.onLoadData=this.onLoadData.bind(this)}onLoadData(e){return console.log(e),new Promise((e=>{setTimeout((()=>{this.setState({dataSource:[{value:"2973",label:"陕西",children:[{value:"2974",label:"西安",children:[{value:"2975",label:"西安市",isLeaf:!0},{value:"2976",label:"高陵县",isLeaf:!0}]},{value:"2980",label:"铜川",children:[{value:"2981",label:"铜川市",isLeaf:!0},{value:"2982",label:"宜君县",isLeaf:!0}]}]}]},e)}),500)}))}render(){return e.createElement(t,{dataSource:this.state.dataSource,loadData:this.onLoadData})}}const O=o.div`
  .cascader-value {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(T,null);return e.createElement(O,null,t)}});class k extends e.Component{constructor(e){super(e),this.handleChange=(e,t,l)=>{console.log(e,t,l)},this.state={data:[{value:"2973",label:"陕西",children:[{value:"2974",label:"西安",children:[{value:"2975",label:"西安市",isLeaf:!0},{value:"2976",label:"高陵县",isLeaf:!0}]},{value:"2980",label:"铜川",children:[{value:"2981",label:"铜川市",isLeaf:!0},{value:"2982",label:"宜君县",isLeaf:!0}]}]}]}}render(){return e.createElement(t,{defaultExpandedValue:["2973","2980","2981"],dataSource:this.state.data,onChange:this.handleChange})}}const M=o.div``;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(k,null);return e.createElement(M,null,t)}});class w extends e.Component{constructor(e){super(e),this.handleCheck=()=>{this.setState({checkStrictly:!this.state.checkStrictly})},this.handleChange=(e,t,l)=>{console.log(e,t,l)},this.state={data:[],checkStrictly:!1}}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e,value:["2975"]}))).catch((e=>console.log(e)))}render(){return e.createElement("div",{className:"control-multiple-demo"},e.createElement("label",{className:"strictly-check"},e.createElement(a,{checked:this.state.checkStrictly,onChange:this.handleCheck}),e.createElement("span",{className:"strictly-text"},"Enable checkStrictly")),e.createElement(t,{multiple:!0,checkStrictly:this.state.checkStrictly,dataSource:this.state.data,onChange:this.handleChange}))}}const q=o.div`
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
`;var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(w,null);return e.createElement(q,null,t)}});class F extends e.Component{constructor(e){super(e),this.state={data:[]},this.handleChange=this.handleChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>{this.setState({data:e})})).catch((e=>console.log(e)))}handleChange(e,t,l){console.log(e,t,l)}render(){return e.createElement(t,{multiple:!0,dataSource:this.state.data,onChange:this.handleChange})}}const W=o.div`
  .cascader-value {
    width: 500px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
`;var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(F,null);return e.createElement(W,null,t)}});class N extends e.Component{constructor(e){super(e),this.handleChange=(e,t,l)=>{console.log(e,t,l)},this.state={data:[]}}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e,value:["2975"]}))).catch((e=>console.log(e)))}filter(e,t){return""===e||t.map((({value:e,label:t})=>`${e}${t}`)).join("").match(e)}render(){return e.createElement("div",{className:"search-demo"},e.createElement(t,{showSearch:!0,style:{width:"240px"},dataSource:this.state.data,placeholder:"搜索名字",onChange:this.handleChange}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{showSearch:!0,filter:this.filter,style:{width:"240px"},multiple:this.state.multiple,dataSource:this.state.data,onChange:this.handleChange,placeholder:"搜索名字或id值"}))}}const R=o.div`
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
`;var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(N,null);return e.createElement(R,null,t)}});class $ extends e.Component{constructor(e){super(e),this.handleChange=(e,t,l)=>{console.log(e,t,l)},this.state={data:[]}}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e,value:"2975"}))).catch((e=>console.log(e)))}render(){return e.createElement("div",{className:"control-single-demo"},e.createElement(t,{multiple:!0,canOnlyCheckLeaf:!0,dataSource:this.state.data,onChange:this.handleChange}))}}const G=o.div`
  .control-single-demo > div:not(last-child) {
    margin-right: 20px;
  }
`;var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement($,null);return e.createElement(G,null,t)}});const P=n.Group;class U extends e.Component{constructor(e){super(e),this.state={triggerType:"click",data:[]},this.handleChange=this.handleChange.bind(this),this.handleTriggerTypeChange=this.handleTriggerTypeChange.bind(this)}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:e}))).catch((e=>console.log(e)))}handleChange(e,t,l){console.log(e,t,l)}handleTriggerTypeChange(e){this.setState({triggerType:e})}render(){return e.createElement("div",null,e.createElement("div",{className:"trigger-check"},e.createElement(P,{dataSource:["click","hover"],shape:"button",value:this.state.triggerType,onChange:this.handleTriggerTypeChange})),e.createElement(t,{expandTriggerType:this.state.triggerType,dataSource:this.state.data,onChange:this.handleChange}))}}const B=o.div``;var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(U,null);return e.createElement(B,null,t)}});const I={};I._custom=r,I._basic=u,I["_change-on-select"]=g,I._accessibility=f,I._disabled=C,I["_custom-style"]=j,I._dynamic=L,I["_expanded-value"]=z,I["_check-strictyle"]=A,I._multiple=X,I._search=V,I["_only-leaf"]=J,I["_expand-trigger"]=H;export default I;