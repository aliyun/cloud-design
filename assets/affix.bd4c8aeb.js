import{r as e,N as t,B as n}from"./index.4272a92a.js";import{q as a}from"./styled-components.browser.esm.6c715b82.js";class r extends e.Component{constructor(e){super(e),this.onAffix=e=>{this.setState({affixed:e})},this.state={affixed:!1}}render(){const a=this.state;return e.createElement("div",{className:"affix-demo-wrapper"},e.createElement(t,{onAffix:this.onAffix},e.createElement(n,{type:"secondary"},a.affixed?"Affixed Button":"Unaffixed Button")))}}const o=a.div`
  .affix-demo-wrapper {
    padding: 40px 0;
  }
`;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(r,null);return e.createElement(o,null,t)}});const i=a.div`
  .custom-affix-wrapper {
    padding: 40px 0;
  }
`;var l=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const a=e.createElement("div",{className:"custom-affix-wrapper"},e.createElement(t,null,e.createElement(n,{type:"secondary"},"Affixed Button")));return e.createElement(i,null,a)}});class s extends e.Component{_containerRefHandler(e){this.container=e}render(){return e.createElement("div",{className:"custom-affix-container",ref:this._containerRefHandler.bind(this)},e.createElement("div",{className:"affix-wrapper"},e.createElement(t,{container:()=>this.container,offsetTop:0,useAbsolute:!0},e.createElement(n,{type:"secondary"},"Affixed Button"))))}}const f=a.div`
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
`;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(s,null);return e.createElement(f,null,t)}});const p=a.div`
  .custom-affix-wrapper {
    padding: 40px 0;
  }
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const a=e.createElement("div",{className:"custom-affix-wrapper"},e.createElement(t,{offsetBottom:0},e.createElement(n,{type:"secondary"},"Affixed Button")));return e.createElement(p,null,a)}});class u extends e.Component{_containerRefHandler(e){this.container=e}render(){return e.createElement("div",{className:"custom-affix-container",ref:this._containerRefHandler.bind(this)},e.createElement("div",{className:"affix-wrapper"},e.createElement(t,{container:()=>this.container,offsetTop:0},e.createElement(n,{type:"secondary"},"Affixed Button"))))}}const x=a.div`
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
`;var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(u,null);return e.createElement(x,null,t)}});const _={};_["_on-affix"]=c,_._basic=l,_["_absolute-position"]=d,_["_custom-offset"]=m,_["_custom-container"]=X;export default _;
