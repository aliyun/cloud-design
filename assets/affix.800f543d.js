import{r as e,N as t,B as n}from"./index.26e635a6.js";import{q as r}from"./styled-components.browser.esm.08d92d51.js";class o extends e.Component{_containerRefHandler(e){this.container=e}render(){return e.createElement("div",{className:"custom-affix-container",ref:this._containerRefHandler.bind(this)},e.createElement("div",{className:"affix-wrapper"},e.createElement(t,{container:()=>this.container,offsetTop:0,useAbsolute:!0},e.createElement(n,{type:"secondary"},"Absolute Position Affixed"))))}}const a=r.div`
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
`;var l=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(o,null);return e.createElement(a,null,t)}});const i=r.div``;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.createElement("div",null,e.createElement(t,null,e.createElement(n,{type:"secondary"},"Basic Affixed Button")),e.createElement("br",null),e.createElement("span",null,"Scroll window to see button affixed."));return e.createElement(i,null,r)}});class s extends e.Component{_containerRefHandler(e){this.container=e}render(){return e.createElement("div",{className:"custom-affix-container",ref:this._containerRefHandler.bind(this)},e.createElement("div",{className:"affix-wrapper"},e.createElement(t,{container:()=>this.container,offsetTop:0},e.createElement(n,{type:"secondary"},"Custom Container Affixed"))))}}const f=r.div`
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
`;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(s,null);return e.createElement(f,null,t)}});const d=r.div``;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.createElement(t,{offsetBottom:0},e.createElement(n,{type:"secondary"},"Custom Offset Affixed"));return e.createElement(d,null,r)}});class p extends e.Component{constructor(e){super(e),this.onAffix=e=>{this.setState({affixed:e})},this.state={affixed:!1}}render(){const r=this.state;return e.createElement("div",null,e.createElement(t,{onAffix:this.onAffix,style:{display:"inline-flex"}},e.createElement(n,{type:"primary"},r.affixed?"Affixed Button":"Unaffixed Button")))}}const x=r.div``;var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(p,null);return e.createElement(x,null,t)}});const _={};_["_absolute-position"]=l,_._basic=c,_["_custom-container"]=u,_["_custom-offset"]=m,_["_on-affix"]=X;export default _;
