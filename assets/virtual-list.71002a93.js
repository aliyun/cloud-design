import{r as e,N as t}from"./index.672a70f3.js";import{q as l}from"./styled-components.browser.esm.f3e9ec77.js";const i=[],r=(t="index")=>t%3==0?e.exports.createElement("li",{key:`key-${t}`,style:{lineHeight:"30px",background:"#5f83ff",color:"#fff"}},"key-",t):e.exports.createElement("li",{key:`key-${t}`,style:{lineHeight:"20px"}},"key-",t);for(let v=0;v<1e3;v++)i.push(r(v));const o=e.exports.createElement("div",{className:"virtual-box"},e.exports.createElement(t,null,i));const n=l.div`
  .virtual-box {
    height: 200px;
    width: 200px;
    border: 1px solid #ddd;
    overflow: auto;
  }
  .virtual-box ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .virtual-box li {
    padding-left: 10px;
    border-bottom: 1px solid #333;
  }
`;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=o;return e.exports.createElement(n,null,t)}});const a=[];function u(t){for(let i=0;i<t;i++)a.push((l=i,e.exports.createElement("li",{key:`key-${l}`,style:{lineHeight:"20px"}},"key-",l)));var l}class p extends e.exports.Component{constructor(){super(...arguments),this.state={initial:50,dataSource:u(1e3)}}onClick(){this.setState({initial:this.state.initial+20})}render(){return e.exports.createElement("div",null,e.exports.createElement("button",{onClick:this.onClick.bind(this)},"jump to ",this.state.initial+20),e.exports.createElement("br",null),e.exports.createElement("br",null),e.exports.createElement("div",{className:"virtual-box"},e.exports.createElement(t,{ref:"virtual",jumpIndex:this.state.initial},a)))}}const c=l.div`
  .virtual-box {
    height: 200px;
    width: 200px;
    border: 1px solid #ddd;
    overflow: auto;
  }
  .virtual-box ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .virtual-box li {
    padding-left: 10px;
    border-bottom: 1px solid #333;
  }
`;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(p,null);return e.exports.createElement(c,null,t)}});const x=[];function m(t){for(let i=0;i<t;i++)x.push((l=i)%3==0?e.exports.createElement("li",{key:`key-${l}`,style:{lineHeight:"30px",background:"#5f83ff",color:"#fff"}},"key-",l):e.exports.createElement("li",{key:`key-${l}`,style:{lineHeight:"20px"}},"key-",l));var l}class b extends e.exports.Component{constructor(){super(...arguments),this.state={initial:20,dataSource:m(1e3)}}componentDidMount(){setTimeout((()=>{this.refs.virtual.getInstance().scrollTo(50)}),200)}getHeight(e){return e%3==0?30:20}onClick(){this.setState({initial:this.state.initial+20})}render(){return e.exports.createElement("div",null,e.exports.createElement("button",{onClick:this.onClick.bind(this)},"jump to ",this.state.initial+20),e.exports.createElement("br",null),e.exports.createElement("br",null),e.exports.createElement("div",{className:"virtual-box"},e.exports.createElement(t,{ref:"virtual",jumpIndex:this.state.initial,itemSizeGetter:this.getHeight.bind(this)},x)))}}const f=l.div`
  .virtual-box {
    height: 200px;
    width: 200px;
    border: 1px solid #ddd;
    overflow: auto;
  }
  .virtual-box ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .virtual-box li {
    padding-left: 10px;
    border-bottom: 1px solid #333;
  }
`;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(b,null);return e.exports.createElement(f,null,t)}});const g={};g._basic=s,g["_initial-index"]=d,g["_item-size-getter"]=h;export default g;
