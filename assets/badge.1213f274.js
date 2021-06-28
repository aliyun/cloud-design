import{r as e,d as t,B as r}from"./index.d204dc79.js";import{q as a}from"./styled-components.browser.esm.b206912e.js";import{N as n}from"./index.49cf1e22.js";const o=a.div`
  .basic-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: #eee;
  }

  .next-badge {
    margin-right: 16px;
  }
`;var l=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement("div",null,e.exports.createElement(n,{count:5},e.exports.createElement("a",{href:"#",className:"basic-example"},e.exports.createElement("span",{className:"next-sr-only"},"unread messages"))));return e.exports.createElement(o,null,t)}});const s=a.div`
  .basic-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: #eee;
  }

  .next-badge {
    margin-right: 16px;
  }
`;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement("div",null,e.exports.createElement(n,{count:5},e.exports.createElement("a",{href:"#",className:"basic-example"})),e.exports.createElement(n,{count:0,showZero:!0},e.exports.createElement("a",{href:"#",className:"basic-example"})));return e.exports.createElement(s,null,t)}});const i=a.div`
  .basic-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: #eee;
  }

  .next-badge {
    margin-right: 16px;
  }
`;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement("a",{href:"#"},e.exports.createElement(n,{count:5},e.exports.createElement("span",{className:"basic-example"})));return e.exports.createElement(i,null,t)}});const m=a.div`
  .next-badge {
    margin-right: 24px;
  }
  .head-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background-color: #eee;
  }
`;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.exports.createElement("div",null,e.exports.createElement(n,{content:"hot",style:{backgroundColor:"#FC0E3D",color:"#FFFFFF"}},e.exports.createElement("a",{href:"#",className:"head-example"})),e.exports.createElement(n,{content:e.exports.createElement(t,{type:"error"}),style:{backgroundColor:"transparent",color:"red",padding:0}},e.exports.createElement("a",{href:"#",className:"head-example"})));return e.exports.createElement(m,null,r)}});const d=a.div`
  .next-badge {
    margin-right: 16px;
  }
`;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.exports.createElement("div",null,e.exports.createElement(n,{dot:!0},e.exports.createElement(t,{type:"email"})),e.exports.createElement(n,{count:0,dot:!0},e.exports.createElement(t,{type:"email"})),e.exports.createElement(n,{dot:!0},e.exports.createElement("a",{href:"#"},"A Link")));return e.exports.createElement(d,null,r)}});const h=r.Group;class E extends e.exports.Component{constructor(e){super(e),this.state={count:0,show:!0},this.increase=this.increase.bind(this),this.decrease=this.decrease.bind(this),this.onClick=this.onClick.bind(this)}increase(){const e=this.state.count+1;this.setState({count:e})}decrease(){let e=this.state.count-1;e<0&&(e=0),this.setState({count:e})}onClick(){this.setState({show:!this.state.show})}render(){return e.exports.createElement("div",null,e.exports.createElement("div",{className:"change-count"},e.exports.createElement(n,{count:this.state.count},e.exports.createElement("a",{href:"#",className:"head-example"},e.exports.createElement("span",{className:"next-sr-only"},"unread messages"))),e.exports.createElement(n,{count:this.state.count,showZero:!0},e.exports.createElement("a",{href:"#",className:"head-example"},e.exports.createElement("span",{className:"next-sr-only"},"unread messages"))),e.exports.createElement(h,null,e.exports.createElement(r,{"aria-label":"add",onClick:this.increase},e.exports.createElement(t,{type:"add"})),e.exports.createElement(r,{"aria-label":"minus",onClick:this.decrease},e.exports.createElement(t,{type:"minus"})))),e.exports.createElement("div",null,e.exports.createElement(n,{dot:this.state.show},e.exports.createElement("a",{href:"#",className:"head-example"})),e.exports.createElement(r,{onClick:this.onClick},"Toggle Display")))}}const b=a.div`
  .next-badge {
    margin-right: 16px;
  }
  .change-count {
    margin-bottom: 16px;
  }
  .head-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: #eee;
  }
`;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(E,null);return e.exports.createElement(b,null,t)}});const f=a.div`
  .next-badge {
    margin-right: 16px;
  }
`;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement("div",null,e.exports.createElement(n,{count:25}),e.exports.createElement(n,{count:4,style:{backgroundColor:"#fff",color:"#999",border:"1px solid #d9d9d9"}}),e.exports.createElement(n,{count:109,style:{backgroundColor:"#87d068"}}),e.exports.createElement(n,{dot:!0}),e.exports.createElement(n,{content:"hot",style:{backgroundColor:"#FC0E3D",color:"#FFFFFF"}}));return e.exports.createElement(f,null,t)}});const y=a.div`
  .next-badge {
    margin-right: 16px;
  }
  .head-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: #eee;
  }
`;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement("div",null,e.exports.createElement(n,{count:99},e.exports.createElement("a",{href:"#",className:"head-example"})),e.exports.createElement(n,{count:100},e.exports.createElement("a",{href:"#",className:"head-example"})),e.exports.createElement(n,{count:100,overflowCount:10},e.exports.createElement("a",{href:"#",className:"head-example"})),e.exports.createElement(n,{count:1e3,overflowCount:999},e.exports.createElement("a",{href:"#",className:"head-example"})));return e.exports.createElement(y,null,t)}});const k={};k._accessibility=l,k._basic=c,k._clickable=p,k._content=x,k._dot=u,k["_dynamic-content"]=g,k["_no-wrapper"]=_,k._overflowCount=v;export default k;
