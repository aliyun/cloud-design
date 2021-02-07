import{r as e,N as t,B as n}from"./index.fee66166.js";import{q as r}from"./styled-components.browser.esm.6d4e4fc0.js";class a extends e.Component{constructor(e){super(e),this.onAffix=e=>{this.setState({affixed:e})},this.state={affixed:!1}}render(){const r=this.state;return e.createElement("div",{className:"affix-demo-wrapper"},e.createElement(t,{onAffix:this.onAffix},e.createElement(n,{type:"secondary"},r.affixed?"Affixed Button":"Unaffixed Button")))}}const o=r.div`
  .affix-demo-wrapper {
    padding: 40px 0;
  }
`;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(a,null);return e.createElement(o,null,t)}});class i extends e.Component{_containerRefHandler(e){this.container=e}render(){return e.createElement("div",{className:"custom-affix-container",ref:this._containerRefHandler.bind(this)},e.createElement("div",{className:"affix-wrapper"},e.createElement(t,{container:()=>this.container,offsetTop:0,useAbsolute:!0},e.createElement(n,{type:"secondary"},"Affixed Button"))))}}const f=r.div`
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
`;var l=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(i,null);return e.createElement(f,null,t)}});const s=r.div`
  .custom-affix-wrapper {
    padding: 40px 0;
  }
`;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.createElement("div",{className:"custom-affix-wrapper"},e.createElement(t,{offsetBottom:0},e.createElement(n,{type:"secondary"},"Affixed Button")));return e.createElement(s,null,r)}});const p=r.div`
  .custom-affix-wrapper {
    padding: 40px 0;
  }
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.createElement("div",{className:"custom-affix-wrapper"},e.createElement(t,null,e.createElement(n,{type:"secondary"},"Affixed Button")));return e.createElement(p,null,r)}});class u extends e.Component{_containerRefHandler(e){this.container=e}render(){return e.createElement("div",{className:"custom-affix-container",ref:this._containerRefHandler.bind(this)},e.createElement("div",{className:"affix-wrapper"},e.createElement(t,{container:()=>this.container,offsetTop:0},e.createElement(n,{type:"secondary"},"Affixed Button"))))}}const x=r.div`
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
`;var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(u,null);return e.createElement(x,null,t)}});const _={};_["_on-affix"]=c,_["_absolute-position"]=l,_["_custom-offset"]=d,_._basic=m,_["_custom-container"]=X;export default _;
