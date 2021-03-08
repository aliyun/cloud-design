import{r as e,b as t,B as a}from"./index.e23bfa0a.js";import{q as n}from"./styled-components.browser.esm.9bbc5b35.js";import{N as l}from"./index.bba415b1.js";const r=n.div`
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
`;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const a=e.createElement("div",null,e.createElement(l,{content:"hot",style:{backgroundColor:"#C82727",color:"#FFFFFF"}},e.createElement("a",{href:"#",className:"head-example"})),e.createElement(l,{content:e.createElement(t,{type:"error"}),style:{backgroundColor:"transparent",color:"#C82727",padding:0}},e.createElement("a",{href:"#",className:"head-example"})));return e.createElement(r,null,a)}});const o=n.div`
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
`;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{count:5},e.createElement("a",{href:"#",className:"basic-example"})),e.createElement(l,{count:5},e.createElement("a",{href:"#",className:"basic-example"},e.createElement("span",{className:"next-sr-only"},"unread messages"))));return e.createElement(o,null,t)}});const i=n.div`
  .next-badge {
    margin-right: 16px;
  }
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const a=e.createElement("div",null,e.createElement(l,{dot:!0},e.createElement(t,{type:"email"})),e.createElement(l,{dot:!0},e.createElement("a",{href:"#"},"A Link")));return e.createElement(i,null,a)}});const d=n.div`
  .next-badge {
    margin-right: 16px;
  }
`;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{count:25}),e.createElement(l,{count:4,style:{backgroundColor:"#fff",color:"#999",border:"1px solid #d9d9d9"}}),e.createElement(l,{count:109,style:{backgroundColor:"#29A64E"}}),e.createElement(l,{dot:!0}),e.createElement(l,{content:"hot",style:{backgroundColor:"#C82727",color:"#FFFFFF"}}));return e.createElement(d,null,t)}});const h=a.Group;class p extends e.Component{constructor(e){super(e),this.state={count:5,show:!0},this.increase=this.increase.bind(this),this.decrease=this.decrease.bind(this),this.onClick=this.onClick.bind(this)}increase(){const e=this.state.count+1;this.setState({count:e})}decrease(){let e=this.state.count-1;e<0&&(e=0),this.setState({count:e})}onClick(){this.setState({show:!this.state.show})}render(){return e.createElement("div",null,e.createElement("div",{className:"change-count"},e.createElement(l,{count:this.state.count},e.createElement("a",{href:"#",className:"head-example"},e.createElement("span",{className:"next-sr-only"},"unread messages"))),e.createElement(l,{count:this.state.count,showZero:!0},e.createElement("a",{href:"#",className:"head-example"},e.createElement("span",{className:"next-sr-only"},"unread messages"))),e.createElement(h,null,e.createElement(a,{"aria-label":"add",onClick:this.increase},e.createElement(t,{type:"add"})),e.createElement(a,{"aria-label":"minus",onClick:this.decrease},e.createElement(t,{type:"minus"})))),e.createElement("div",null,e.createElement(l,{dot:this.state.show},e.createElement("a",{href:"#",className:"head-example"})),e.createElement(a,{onClick:this.onClick},"Toggle Display")))}}const b=n.div`
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
`;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(p,null);return e.createElement(b,null,t)}});const E=n.div`
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
`;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{count:100},e.createElement("a",{href:"#",className:"head-example"})),e.createElement(l,{count:200,overflowCount:199},e.createElement("a",{href:"#",className:"head-example"})));return e.createElement(E,null,t)}});const f={};f._content=c,f._basic=s,f._dot=m,f["_no-wrapper"]=u,f._change=g,f._plus=x;export default f;
