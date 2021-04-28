import{r as e,b as t,B as a}from"./index.db891132.js";import{q as n}from"./styled-components.browser.esm.2d3384e1.js";import{N as l}from"./index.c9179b66.js";const r=n.div`
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
`;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const a=e.createElement("div",null,e.createElement(l,{content:"hot",style:{backgroundColor:"#FC0E3D",color:"#FFFFFF"}},e.createElement("a",{href:"#",className:"head-example"})),e.createElement(l,{content:e.createElement(t,{type:"error"}),style:{backgroundColor:"transparent",color:"red",padding:0}},e.createElement("a",{href:"#",className:"head-example"})));return e.createElement(r,null,a)}});const o=n.div`
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
`;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("a",{href:"#"},e.createElement(l,{count:5},e.createElement("span",{className:"basic-example"})));return e.createElement(o,null,t)}});const i=n.div`
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
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{count:5},e.createElement("a",{href:"#",className:"basic-example"},e.createElement("span",{className:"next-sr-only"},"unread messages"))));return e.createElement(i,null,t)}});const d=n.div`
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
`;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{count:5},e.createElement("a",{href:"#",className:"basic-example"})),e.createElement(l,{count:0,showZero:!0},e.createElement("a",{href:"#",className:"basic-example"})));return e.createElement(d,null,t)}});const h=n.div`
  .next-badge {
    margin-right: 16px;
  }
`;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{count:25}),e.createElement(l,{count:4,style:{backgroundColor:"#fff",color:"#999",border:"1px solid #d9d9d9"}}),e.createElement(l,{count:109,style:{backgroundColor:"#87d068"}}),e.createElement(l,{dot:!0}),e.createElement(l,{content:"hot",style:{backgroundColor:"#FC0E3D",color:"#FFFFFF"}}));return e.createElement(h,null,t)}});const b=a.Group;class E extends e.Component{constructor(e){super(e),this.state={count:0,show:!0},this.increase=this.increase.bind(this),this.decrease=this.decrease.bind(this),this.onClick=this.onClick.bind(this)}increase(){const e=this.state.count+1;this.setState({count:e})}decrease(){let e=this.state.count-1;e<0&&(e=0),this.setState({count:e})}onClick(){this.setState({show:!this.state.show})}render(){return e.createElement("div",null,e.createElement("div",{className:"change-count"},e.createElement(l,{count:this.state.count},e.createElement("a",{href:"#",className:"head-example"},e.createElement("span",{className:"next-sr-only"},"unread messages"))),e.createElement(l,{count:this.state.count,showZero:!0},e.createElement("a",{href:"#",className:"head-example"},e.createElement("span",{className:"next-sr-only"},"unread messages"))),e.createElement(b,null,e.createElement(a,{"aria-label":"add",onClick:this.increase},e.createElement(t,{type:"add"})),e.createElement(a,{"aria-label":"minus",onClick:this.decrease},e.createElement(t,{type:"minus"})))),e.createElement("div",null,e.createElement(l,{dot:this.state.show},e.createElement("a",{href:"#",className:"head-example"})),e.createElement(a,{onClick:this.onClick},"Toggle Display")))}}const g=n.div`
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
`;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(E,null);return e.createElement(g,null,t)}});const f=n.div`
  .next-badge {
    margin-right: 16px;
  }
`;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const a=e.createElement("div",null,e.createElement(l,{dot:!0},e.createElement(t,{type:"email"})),e.createElement(l,{count:0,dot:!0},e.createElement(t,{type:"email"})),e.createElement(l,{dot:!0},e.createElement("a",{href:"#"},"A Link")));return e.createElement(f,null,a)}});const y=n.div`
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
`;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{count:99},e.createElement("a",{href:"#",className:"head-example"})),e.createElement(l,{count:100},e.createElement("a",{href:"#",className:"head-example"})),e.createElement(l,{count:100,overflowCount:10},e.createElement("a",{href:"#",className:"head-example"})),e.createElement(l,{count:1e3,overflowCount:999},e.createElement("a",{href:"#",className:"head-example"})));return e.createElement(y,null,t)}});const k={};k._content=c,k._clickable=s,k._accessibility=m,k._basic=u,k["_no-wrapper"]=p,k["_dynamic-content"]=x,k._dot=_,k._overflowCount=v;export default k;