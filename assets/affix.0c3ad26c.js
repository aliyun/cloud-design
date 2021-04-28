import{r as e,N as t,B as n}from"./index.db891132.js";import{q as r}from"./styled-components.browser.esm.2d3384e1.js";class o extends e.Component{_containerRefHandler(e){this.container=e}render(){return e.createElement("div",{className:"custom-affix-container",ref:this._containerRefHandler.bind(this)},e.createElement("div",{className:"affix-wrapper"},e.createElement(t,{container:()=>this.container,offsetTop:0,useAbsolute:!0},e.createElement(n,{type:"secondary"},"Absolute Position Affixed"))))}}const a=r.div`
  .custom-affix-container {
    height: 150px;
    overflow-y: scroll;
    background: url(https://img.alicdn.com/tfs/TB1AbJXSpXXXXXJXpXXXXXXXXXX-32-32.jpg)
      repeat 50% 50%;
  }

  .custom-affix-container .affix-wrapper {
    padding-top: 100px;
    height: 500px;
  }
`;var l=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(o,null);return e.createElement(a,null,t)}});class i extends e.Component{_containerRefHandler(e){this.container=e}render(){return e.createElement("div",{className:"custom-affix-container",ref:this._containerRefHandler.bind(this)},e.createElement("div",{className:"affix-wrapper"},e.createElement(t,{container:()=>this.container,offsetTop:0},e.createElement(n,{type:"secondary"},"Custom Container Affixed"))))}}const c=r.div`
  .custom-affix-container {
    height: 150px;
    overflow-y: scroll;
    background: url(https://img.alicdn.com/tfs/TB1AbJXSpXXXXXJXpXXXXXXXXXX-32-32.jpg)
      repeat 50% 50%;
  }

  .custom-affix-container .affix-wrapper {
    padding-top: 50px;
    height: 500px;
  }
`;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(i,null);return e.createElement(c,null,t)}});const f=r.div``;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.createElement(t,{offsetBottom:0},e.createElement(n,{type:"secondary"},"Custom Offset Affixed"));return e.createElement(f,null,r)}});class d extends e.Component{constructor(e){super(e),this.onAffix=e=>{this.setState({affixed:e})},this.state={affixed:!1}}render(){const r=this.state;return e.createElement("div",null,e.createElement(t,{onAffix:this.onAffix,style:{display:"inline-flex"}},e.createElement(n,{type:"primary"},r.affixed?"Affixed Button":"Unaffixed Button")))}}const m=r.div``;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(d,null);return e.createElement(m,null,t)}});const x=r.div``;var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.createElement("div",null,e.createElement(t,null,e.createElement(n,{type:"secondary"},"Basic Affixed Button")),e.createElement("br",null),e.createElement("span",null,"Scroll window to see button affixed."));return e.createElement(x,null,r)}});const _={};_["_absolute-position"]=l,_["_custom-container"]=s,_["_custom-offset"]=u,_["_on-affix"]=p,_._basic=X;export default _;
