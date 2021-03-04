import{r as e,X as t}from"./index.85ae9c06.js";import{q as l}from"./styled-components.browser.esm.1d25448f.js";const i=[];function n(t){for(let n=0;n<t;n++)i.push((l=n,e.createElement("li",{key:`key-${l}`,style:{lineHeight:"20px"}},"key-",l)));var l}class r extends e.Component{constructor(){super(...arguments),this.state={initial:50,dataSource:n(1e3)}}onClick(){this.setState({initial:this.state.initial+20})}render(){return e.createElement("div",null,e.createElement("button",{onClick:this.onClick.bind(this)},"jump to ",this.state.initial+20),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{className:"virtual-box"},e.createElement(t,{ref:"virtual",jumpIndex:this.state.initial},i)))}}const o=l.div`
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
`;var a=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(r,null);return e.createElement(o,null,t)}});const s=[],u=(t="index")=>t%3==0?e.createElement("li",{key:`key-${t}`,style:{lineHeight:"30px",background:"#5f83ff",color:"#fff"}},"key-",t):e.createElement("li",{key:`key-${t}`,style:{lineHeight:"20px"}},"key-",t);for(let v=0;v<1e3;v++)s.push(u(v));const c=e.createElement("div",{className:"virtual-box"},e.createElement(t,null,s));const d=l.div`
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
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=c;return e.createElement(d,null,t)}});const p=[];function b(t){for(let i=0;i<t;i++)p.push((l=i)%3==0?e.createElement("li",{key:`key-${l}`,style:{lineHeight:"30px",background:"#5f83ff",color:"#fff"}},"key-",l):e.createElement("li",{key:`key-${l}`,style:{lineHeight:"20px"}},"key-",l));var l}class x extends e.Component{constructor(){super(...arguments),this.state={initial:20,dataSource:b(1e3)}}componentDidMount(){setTimeout((()=>{this.refs.virtual.getInstance().scrollTo(50)}),200)}getHeight(e){return e%3==0?30:20}onClick(){this.setState({initial:this.state.initial+20})}render(){return e.createElement("div",null,e.createElement("button",{onClick:this.onClick.bind(this)},"jump to ",this.state.initial+20),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{className:"virtual-box"},e.createElement(t,{ref:"virtual",jumpIndex:this.state.initial,itemSizeGetter:this.getHeight.bind(this)},p)))}}const f=l.div`
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
`;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(x,null);return e.createElement(f,null,t)}});const g={};g["_initial-index"]=a,g._basic=m,g["_item-size-getter"]=h;export default g;
