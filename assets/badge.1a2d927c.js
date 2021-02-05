import{r as e,B as t,N as a}from"./index.e50fb7cb.js";import{q as n}from"./styled-components.browser.esm.4dfc2252.js";import{N as l}from"./index.3fa7fa76.js";const r=n.div`
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
`;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{count:5},e.createElement("a",{href:"#",className:"basic-example"})),e.createElement(l,{count:5},e.createElement("a",{href:"#",className:"basic-example"},e.createElement("span",{className:"next-sr-only"},"unread messages"))));return e.createElement(r,null,t)}});const o=t.Group;class s extends e.Component{constructor(e){super(e),this.state={count:5,show:!0},this.increase=this.increase.bind(this),this.decrease=this.decrease.bind(this),this.onClick=this.onClick.bind(this)}increase(){const e=this.state.count+1;this.setState({count:e})}decrease(){let e=this.state.count-1;e<0&&(e=0),this.setState({count:e})}onClick(){this.setState({show:!this.state.show})}render(){return e.createElement("div",null,e.createElement("div",{className:"change-count"},e.createElement(l,{count:this.state.count},e.createElement("a",{href:"#",className:"head-example"},e.createElement("span",{className:"next-sr-only"},"unread messages"))),e.createElement(l,{count:this.state.count,showZero:!0},e.createElement("a",{href:"#",className:"head-example"},e.createElement("span",{className:"next-sr-only"},"unread messages"))),e.createElement(o,null,e.createElement(t,{"aria-label":"add",onClick:this.increase},e.createElement(a,{type:"add"})),e.createElement(t,{"aria-label":"minus",onClick:this.decrease},e.createElement(a,{type:"minus"})))),e.createElement("div",null,e.createElement(l,{dot:this.state.show},e.createElement("a",{href:"#",className:"head-example"})),e.createElement(t,{onClick:this.onClick},"Toggle Display")))}}const i=n.div`
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
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(s,null);return e.createElement(i,null,t)}});const d=n.div`
  .next-badge {
    margin-right: 16px;
  }
`;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{dot:!0},e.createElement(a,{type:"email"})),e.createElement(l,{dot:!0},e.createElement("a",{href:"#"},"A Link")));return e.createElement(d,null,t)}});const h=n.div`
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
`;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{count:100},e.createElement("a",{href:"#",className:"head-example"})),e.createElement(l,{count:200,overflowCount:199},e.createElement("a",{href:"#",className:"head-example"})));return e.createElement(h,null,t)}});const g=n.div`
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
`;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{content:"hot",style:{backgroundColor:"#C82727",color:"#FFFFFF"}},e.createElement("a",{href:"#",className:"head-example"})),e.createElement(l,{content:e.createElement(a,{type:"error"}),style:{backgroundColor:"transparent",color:"#C82727",padding:0}},e.createElement("a",{href:"#",className:"head-example"})));return e.createElement(g,null,t)}});const b=n.div`
  .next-badge {
    margin-right: 16px;
  }
`;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{count:25}),e.createElement(l,{count:4,style:{backgroundColor:"#fff",color:"#999",border:"1px solid #d9d9d9"}}),e.createElement(l,{count:109,style:{backgroundColor:"#29A64E"}}),e.createElement(l,{dot:!0}),e.createElement(l,{content:"hot",style:{backgroundColor:"#C82727",color:"#FFFFFF"}}));return e.createElement(b,null,t)}});const f={};f._basic=c,f._change=m,f._dot=u,f._plus=p,f._content=E,f["_no-wrapper"]=x;export default f;
