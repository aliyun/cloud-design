import{r as e,ad as t,B as n}from"./index.672a70f3.js";import{q as r}from"./styled-components.browser.esm.f3e9ec77.js";class o extends e.exports.Component{_containerRefHandler(e){this.container=e}render(){return e.exports.createElement("div",{className:"custom-affix-container",ref:this._containerRefHandler.bind(this)},e.exports.createElement("div",{className:"affix-wrapper"},e.exports.createElement(t,{container:()=>this.container,offsetTop:0,useAbsolute:!0},e.exports.createElement(n,{type:"secondary"},"Absolute Position Affixed"))))}}const s=r.div`
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
`;var a=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(o,null);return e.exports.createElement(s,null,t)}});const l=r.div``;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.exports.createElement("div",null,e.exports.createElement(t,null,e.exports.createElement(n,{type:"secondary"},"Basic Affixed Button")),e.exports.createElement("br",null),e.exports.createElement("span",null,"Scroll window to see button affixed."));return e.exports.createElement(l,null,r)}});class c extends e.exports.Component{_containerRefHandler(e){this.container=e}render(){return e.exports.createElement("div",{className:"custom-affix-container",ref:this._containerRefHandler.bind(this)},e.exports.createElement("div",{className:"affix-wrapper"},e.exports.createElement(t,{container:()=>this.container,offsetTop:0},e.exports.createElement(n,{type:"secondary"},"Custom Container Affixed"))))}}const f=r.div`
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
`;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(c,null);return e.exports.createElement(f,null,t)}});const u=r.div``;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.exports.createElement(t,{offsetBottom:0},e.exports.createElement(n,{type:"secondary"},"Custom Offset Affixed"));return e.exports.createElement(u,null,r)}});class d extends e.exports.Component{constructor(e){super(e),this.onAffix=e=>{this.setState({affixed:e})},this.state={affixed:!1}}render(){const r=this.state;return e.exports.createElement("div",null,e.exports.createElement(t,{onAffix:this.onAffix,style:{display:"inline-flex"}},e.exports.createElement(n,{type:"primary"},r.affixed?"Affixed Button":"Unaffixed Button")))}}const m=r.div``;var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(d,null);return e.exports.createElement(m,null,t)}});const _={};_["_absolute-position"]=a,_._basic=i,_["_custom-container"]=p,_["_custom-offset"]=x,_["_on-affix"]=X;export default _;
