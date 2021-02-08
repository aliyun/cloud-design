import{B as e,r as t,b as a}from"./index.9ecd65a8.js";import{q as n}from"./styled-components.browser.esm.fe3a3df0.js";import{N as l}from"./index.caf5998f.js";const r=e.Group;class c extends t.Component{constructor(e){super(e),this.state={count:5,show:!0},this.increase=this.increase.bind(this),this.decrease=this.decrease.bind(this),this.onClick=this.onClick.bind(this)}increase(){const e=this.state.count+1;this.setState({count:e})}decrease(){let e=this.state.count-1;e<0&&(e=0),this.setState({count:e})}onClick(){this.setState({show:!this.state.show})}render(){return t.createElement("div",null,t.createElement("div",{className:"change-count"},t.createElement(l,{count:this.state.count},t.createElement("a",{href:"#",className:"head-example"},t.createElement("span",{className:"next-sr-only"},"unread messages"))),t.createElement(l,{count:this.state.count,showZero:!0},t.createElement("a",{href:"#",className:"head-example"},t.createElement("span",{className:"next-sr-only"},"unread messages"))),t.createElement(r,null,t.createElement(e,{"aria-label":"add",onClick:this.increase},t.createElement(a,{type:"add"})),t.createElement(e,{"aria-label":"minus",onClick:this.decrease},t.createElement(a,{type:"minus"})))),t.createElement("div",null,t.createElement(l,{dot:this.state.show},t.createElement("a",{href:"#",className:"head-example"})),t.createElement(e,{onClick:this.onClick},"Toggle Display")))}}const o=n.div`
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
`;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(c,null);return t.createElement(o,null,e)}});const i=n.div`
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
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement(l,{count:5},t.createElement("a",{href:"#",className:"basic-example"})),t.createElement(l,{count:5},t.createElement("a",{href:"#",className:"basic-example"},t.createElement("span",{className:"next-sr-only"},"unread messages"))));return t.createElement(i,null,e)}});const d=n.div`
  .next-badge {
    margin-right: 16px;
  }
`;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement(l,{dot:!0},t.createElement(a,{type:"email"})),t.createElement(l,{dot:!0},t.createElement("a",{href:"#"},"A Link")));return t.createElement(d,null,e)}});const h=n.div`
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
`;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement(l,{count:100},t.createElement("a",{href:"#",className:"head-example"})),t.createElement(l,{count:200,overflowCount:199},t.createElement("a",{href:"#",className:"head-example"})));return t.createElement(h,null,e)}});const g=n.div`
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
`;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement(l,{content:"hot",style:{backgroundColor:"#C82727",color:"#FFFFFF"}},t.createElement("a",{href:"#",className:"head-example"})),t.createElement(l,{content:t.createElement(a,{type:"error"}),style:{backgroundColor:"transparent",color:"#C82727",padding:0}},t.createElement("a",{href:"#",className:"head-example"})));return t.createElement(g,null,e)}});const b=n.div`
  .next-badge {
    margin-right: 16px;
  }
`;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement(l,{count:25}),t.createElement(l,{count:4,style:{backgroundColor:"#fff",color:"#999",border:"1px solid #d9d9d9"}}),t.createElement(l,{count:109,style:{backgroundColor:"#29A64E"}}),t.createElement(l,{dot:!0}),t.createElement(l,{content:"hot",style:{backgroundColor:"#C82727",color:"#FFFFFF"}}));return t.createElement(b,null,e)}});const f={};f._change=s,f._basic=m,f._dot=u,f._plus=p,f._content=E,f["_no-wrapper"]=x;export default f;
