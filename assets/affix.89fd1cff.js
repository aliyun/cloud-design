import{r as e,j as t,B as n}from"./index.e50fb7cb.js";import{q as r}from"./styled-components.browser.esm.4dfc2252.js";const a=r.div`
  .custom-affix-wrapper {
    padding: 40px 0;
  }
`;var o=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.createElement("div",{className:"custom-affix-wrapper"},e.createElement(t,null,e.createElement(n,{type:"secondary"},"Affixed Button")));return e.createElement(a,null,r)}});class c extends e.Component{_containerRefHandler(e){this.container=e}render(){return e.createElement("div",{className:"custom-affix-container",ref:this._containerRefHandler.bind(this)},e.createElement("div",{className:"affix-wrapper"},e.createElement(t,{container:()=>this.container,offsetTop:0,useAbsolute:!0},e.createElement(n,{type:"secondary"},"Affixed Button"))))}}const i=r.div`
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
`;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(c,null);return e.createElement(i,null,t)}});class l extends e.Component{_containerRefHandler(e){this.container=e}render(){return e.createElement("div",{className:"custom-affix-container",ref:this._containerRefHandler.bind(this)},e.createElement("div",{className:"affix-wrapper"},e.createElement(t,{container:()=>this.container,offsetTop:0},e.createElement(n,{type:"secondary"},"Affixed Button"))))}}const s=r.div`
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
`;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(l,null);return e.createElement(s,null,t)}});const p=r.div`
  .custom-affix-wrapper {
    padding: 40px 0;
  }
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.createElement("div",{className:"custom-affix-wrapper"},e.createElement(t,{offsetBottom:0},e.createElement(n,{type:"secondary"},"Affixed Button")));return e.createElement(p,null,r)}});class u extends e.Component{constructor(e){super(e),this.onAffix=e=>{this.setState({affixed:e})},this.state={affixed:!1}}render(){const r=this.state;return e.createElement("div",{className:"affix-demo-wrapper"},e.createElement(t,{onAffix:this.onAffix},e.createElement(n,{type:"secondary"},r.affixed?"Affixed Button":"Unaffixed Button")))}}const x=r.div`
  .affix-demo-wrapper {
    padding: 40px 0;
  }
`;var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(u,null);return e.createElement(x,null,t)}});const _={};_._basic=o,_["_absolute-position"]=f,_["_custom-container"]=d,_["_custom-offset"]=m,_["_on-affix"]=X;export default _;
