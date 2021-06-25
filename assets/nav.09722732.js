import{r as e,ae as t,a5 as o,a7 as r}from"./index.6a707a19.js";import{q as n}from"./styled-components.browser.esm.a87ca0b6.js";const{Item:a,SubNav:l}=t,c=e.exports.createElement("span",{className:"fusion"},"FUSION"),s=e.exports.createElement("a",{className:"login-in",href:"javascript:;"},"Login in");const p=n.div`
  .basic-nav .fusion {
    margin: 8px 20px;
    width: 100px;
    color: #ffffff;
    font-size: 20px;
  }
  .basic-nav .login-in {
    margin: 0 20px;
    color: #ffffff;
  }
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const o=e.exports.createElement(t,{className:"basic-nav",mode:"popup",direction:"hoz",type:"primary",header:c,footer:s,defaultSelectedKeys:["home"],triggerType:"hover"},e.exports.createElement(a,{key:"home"},"Home"),e.exports.createElement(l,{label:"Component",noIcon:!0},e.exports.createElement(l,{label:"Next"},e.exports.createElement(a,{key:"next-design"},"Design"),e.exports.createElement(a,{key:"next-doc"},"Document")),e.exports.createElement(l,{label:"Meet"},e.exports.createElement(a,{key:"meet-design"},"Design"),e.exports.createElement(a,{key:"meet-doc"},"Document"))),e.exports.createElement(a,{key:"document"},"Document"));return e.exports.createElement(p,null,o)}});const{Item:i,SubNav:u}=t;class x extends e.exports.Component{constructor(){super(...arguments),this.state={type:"normal",direction:"hoz",activeDirection:null,triggerType:"click",mode:"inline"}}setValue(e,t){this.setState({[e]:""===t?null:t})}setTriggerType(e){this.setState({triggerType:e})}setModeType(e){this.setState({mode:e})}render(){const{type:r,direction:n,activeDirection:a,triggerType:l,mode:c}=this.state;return e.exports.createElement("div",null,e.exports.createElement("div",{className:"demo-ctl"},e.exports.createElement(o.Group,{shape:"button",size:"medium",value:r,onChange:this.setValue.bind(this,"type")},e.exports.createElement(o,{value:"normal"},'type="normal"'),e.exports.createElement(o,{value:"primary"},'type="primary"'),e.exports.createElement(o,{value:"secondary"},'type="secondary"'),e.exports.createElement(o,{value:"line"},'type="line"')),e.exports.createElement(o.Group,{shape:"button",size:"medium",value:n,onChange:this.setValue.bind(this,"direction")},e.exports.createElement(o,{value:"hoz"},'direction="hoz"'),e.exports.createElement(o,{value:"ver"},'direction="ver"')),e.exports.createElement(o.Group,{shape:"button",size:"medium",value:null===a?"":a,onChange:this.setValue.bind(this,"activeDirection")},e.exports.createElement(o,{value:""},"activeDirection=null"),"hoz"===n?e.exports.createElement(o,{value:"top"},'activeDirection="top"'):null,"hoz"===n?e.exports.createElement(o,{value:"bottom"},'activeDirection="bottom"'):null,"ver"===n?e.exports.createElement(o,{value:"left"},'activeDirection="left"'):null,"ver"===n?e.exports.createElement(o,{value:"right"},'activeDirection="right"'):null),e.exports.createElement(o.Group,{shape:"button",size:"medium",value:l,onChange:this.setTriggerType.bind(this)},e.exports.createElement(o,{value:"click"},'triggerType="click"'),e.exports.createElement(o,{value:"hover"},'triggerType="hover"')),e.exports.createElement(o.Group,{shape:"button",size:"medium",value:c,onChange:this.setModeType.bind(this)},e.exports.createElement(o,{value:"inline"},'mode="inline"'),e.exports.createElement(o,{value:"popup"},'mode="popup"'))),e.exports.createElement(t,{className:"custom-nav",mode:c,type:r,direction:n,activeDirection:a,triggerType:l},e.exports.createElement(i,null,"Item 1"),e.exports.createElement(i,null,"Item 2"),e.exports.createElement(u,{label:"Sub Nav"},e.exports.createElement(i,null,"Item 3"),e.exports.createElement(i,null,"Item 4"),e.exports.createElement(u,{label:"Sub Nav"},e.exports.createElement(i,null,"Item 5"),e.exports.createElement(i,null,"Item 6"))),e.exports.createElement(i,{icon:"account"},e.exports.createElement("a",{href:"http://www.taobao.com",target:"_blank"},"Taobao"))))}}const d=n.div`
  .demo-ctl {
    background-color: #f1f1f1;
    border-left: 4px solid #0d599a;
    color: #0a7ac3;
    margin-bottom: 20px;
    padding: 5px;
  }
  .demo-ctl .next-radio-group {
    display: block;
    margin: 5px;
  }
  .custom-nav.next-hoz .next-nav-item {
    width: 100px;
  }
  .custom-nav.next-ver {
    width: 200px;
  }
`;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(x,null);return e.exports.createElement(d,null,t)}});const v=n.div``;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement("div",null,"请查看"," ",e.exports.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://codepen.io/aboutblank/pen/JjdNKrm"},"https://codepen.io/aboutblank/pen/JjdNKrm"));return e.exports.createElement(v,null,t)}});const{Item:h,Group:g}=t;const f=n.div``;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const o=e.exports.createElement(t,{style:{width:240}},e.exports.createElement(g,{label:"Group Label 1"},e.exports.createElement(h,{icon:"account"},"Navigation One"),e.exports.createElement(h,{icon:"account"},"Navigation Two"),e.exports.createElement(h,{icon:"account"},"Navigation Three")),e.exports.createElement(g,{label:"Group Label 2"},e.exports.createElement(h,{icon:"account"},"Navigation Four"),e.exports.createElement(h,{icon:"account"},"Navigation Five"),e.exports.createElement(h,{icon:"account"},"Navigation Six")));return e.exports.createElement(f,null,o)}});const{Item:S,SubNav:I}=t;class N extends e.exports.Component{constructor(){super(...arguments),this.state={iconOnly:!1,hasTooltip:!0,hasArrow:!0}}setValue(e,t){this.setState({[e]:"true"===t})}render(){const{iconOnly:r,hasTooltip:n,hasArrow:a}=this.state;return e.exports.createElement("div",null,e.exports.createElement("div",{className:"demo-ctl"},e.exports.createElement(o.Group,{shape:"button",size:"medium",value:r?"true":"false",onChange:this.setValue.bind(this,"iconOnly")},e.exports.createElement(o,{value:"true"},"iconOnly=true"),e.exports.createElement(o,{value:"false"},"iconOnly=false")),r?e.exports.createElement(o.Group,{shape:"button",size:"medium",value:a?"true":"false",onChange:this.setValue.bind(this,"hasArrow")},e.exports.createElement(o,{value:"true"},"hasArrow=true"),e.exports.createElement(o,{value:"false"},"hasArrow=false")):null,r?e.exports.createElement(o.Group,{shape:"button",size:"medium",value:n?"true":"false",onChange:this.setValue.bind(this,"hasTooltip")},e.exports.createElement(o,{value:"true"},"hasTooltip=true"),e.exports.createElement(o,{value:"false"},"hasTooltip=false")):null),e.exports.createElement(t,{style:{width:"200px"},iconOnly:r,hasArrow:a,hasTooltip:n},e.exports.createElement(S,{icon:"account"},"Navigation One"),e.exports.createElement(S,{icon:"account"},"Navigation Two"),e.exports.createElement(S,{icon:"account"},"Navigation Three"),e.exports.createElement(S,{icon:"account"},"Navigation Four"),e.exports.createElement(S,{icon:"account"},"Navigation Five"),e.exports.createElement(I,{icon:"account",label:"Sub Nav"},e.exports.createElement(S,{icon:"account"},"Item 1"),e.exports.createElement(S,{icon:"account"},"Item 2"),e.exports.createElement(S,{icon:"account"},"Item 3"),e.exports.createElement(S,{icon:"account"},"Item 4"))))}}const _=n.div`
  .demo-ctl {
    background-color: #f1f1f1;
    border-left: 4px solid #0d599a;
    color: #0a7ac3;
    margin-bottom: 20px;
    padding: 5px;
  }
  .demo-ctl .next-radio-group {
    margin: 5px;
  }
`;var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(N,null);return e.exports.createElement(_,null,t)}});const{Item:k,SubNav:z}=t;class w extends e.exports.Component{constructor(){super(...arguments),this.state={openMode:"single"}}setValue(e){this.setState({openMode:e})}render(){const{openMode:r}=this.state;return e.exports.createElement("div",null,e.exports.createElement("div",{className:"demo-ctl"},e.exports.createElement(o.Group,{shape:"button",size:"medium",value:r,onChange:this.setValue.bind(this)},e.exports.createElement(o,{value:"single"},'openMode="single"'),e.exports.createElement(o,{value:"multiple"},'openMode="multiple"'))),e.exports.createElement(t,{style:{width:240},openMode:r,defaultOpenKeys:["0-0"]},e.exports.createElement(z,{label:"Sub Nav 1"},e.exports.createElement(k,null,"Item 1")),e.exports.createElement(z,{label:"Sub Nav 2"},e.exports.createElement(k,null,"Item 1"),e.exports.createElement(k,null,"Item 2"),e.exports.createElement(z,{label:"Sub Nav 1"},e.exports.createElement(k,null,"Item 1"),e.exports.createElement(k,null,"Item 2")),e.exports.createElement(z,{label:"Sub Nav 2"},e.exports.createElement(k,null,"Item 1"),e.exports.createElement(k,null,"Item 2"))),e.exports.createElement(z,{label:"Sub Nav 3"},e.exports.createElement(k,null,"Item 1"),e.exports.createElement(k,null,"Item 2"),e.exports.createElement(k,null,"Item 3"),e.exports.createElement(z,{label:"Sub Nav 1"},e.exports.createElement(k,null,"Item 1"),e.exports.createElement(k,null,"Item 2"),e.exports.createElement(k,null,"Item 3")),e.exports.createElement(z,{label:"Sub Nav 2"},e.exports.createElement(k,null,"Item 1"),e.exports.createElement(k,null,"Item 2"),e.exports.createElement(k,null,"Item 3")),e.exports.createElement(z,{label:"Sub Nav 3"},e.exports.createElement(k,null,"Item 1"),e.exports.createElement(k,null,"Item 2"),e.exports.createElement(k,null,"Item 3"))),e.exports.createElement(k,null,"Item")))}}const C=n.div`
  .demo-ctl {
    background-color: #f1f1f1;
    border-left: 4px solid #0d599a;
    color: #0a7ac3;
    margin-bottom: 20px;
    padding: 5px;
  }
  .demo-ctl .next-radio-group {
    margin: 5px;
  }
`;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(w,null);return e.exports.createElement(C,null,t)}});const{Item:M,SubNav:A}=t;class G extends e.exports.Component{constructor(){super(...arguments),this.state={popupAlign:"outside"}}setValue(e){this.setState({popupAlign:e})}render(){const{popupAlign:r}=this.state;return e.exports.createElement("div",null,e.exports.createElement("div",{className:"demo-ctl"},e.exports.createElement(o.Group,{shape:"button",size:"medium",value:r,onChange:this.setValue.bind(this)},e.exports.createElement(o,{value:"follow"},'popupAlign="follow"'),e.exports.createElement(o,{value:"outside"},'popupAlign="outside"'))),e.exports.createElement(t,{style:{height:400,width:240},mode:"popup",popupAlign:r},e.exports.createElement(A,{key:"sub-nav-1",label:"Sub Nav 1"},e.exports.createElement(M,{key:"1"},"Item 1")),e.exports.createElement(A,{key:"sub-nav-2",label:"Sub Nav 2"},e.exports.createElement(M,{key:"1"},"Item 1"),e.exports.createElement(M,{key:"2"},"Item 2")),e.exports.createElement(A,{key:"sub-nav-3",label:"Sub Nav 3"},e.exports.createElement(M,{key:"1"},"Item 1"),e.exports.createElement(M,{key:"2"},"Item 2"),e.exports.createElement(M,{key:"3"},"Item 3")),e.exports.createElement(A,{key:"sub-nav-4",label:"Sub Nav 4"},e.exports.createElement(M,{key:"1"},"Item 1"),e.exports.createElement(M,{key:"2"},"Item 2"),e.exports.createElement(M,{key:"3"},"Item 3"),e.exports.createElement(M,{key:"4"},"Item 4"))))}}const j=n.div`
  .demo-ctl {
    background-color: #f1f1f1;
    border-left: 4px solid #0d599a;
    color: #0a7ac3;
    margin-bottom: 20px;
    padding: 5px;
  }
  .demo-ctl .next-radio-group {
    margin: 5px;
  }
`;var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(G,null);return e.exports.createElement(j,null,t)}});const{Item:V,SubNav:F}=t;class K extends e.exports.Component{constructor(){super(...arguments),this.state={collapse:!1,embeddable:!1},this.onChange=e=>{this.setState({collapse:e})},this.changeEmbeddable=e=>{this.setState({embeddable:e})}}render(){const{collapse:n,embeddable:a}=this.state;let l,c;return n?(l=!0,c="popup"):(l=!1,c="inline"),e.exports.createElement("div",null,e.exports.createElement(r,{defaultChecked:!1,onChange:this.onChange,size:"small"}),e.exports.createElement("div",{className:"demo-ctl"},e.exports.createElement(o.Group,{shape:"button",size:"medium",value:a,onChange:this.changeEmbeddable},e.exports.createElement(o,{value:!0},"embeddable=true"),e.exports.createElement(o,{value:!1},"embeddable=false"))),e.exports.createElement(t,{style:{width:"200px"},embeddable:a,defaultOpenAll:!0,defaultSelectedKeys:["0-1"],iconOnly:l,hasArrow:!1,hasTooltip:!0,mode:c},e.exports.createElement(V,{icon:"calendar"}," Schedule "),e.exports.createElement(V,{icon:"email"}," Email "),e.exports.createElement(V,{icon:"help"}," Help "),e.exports.createElement(F,{icon:"set",label:"Settings"},e.exports.createElement(V,{icon:"account"}," Account "),e.exports.createElement(V,{icon:"exit"}," Exit "))))}}const L=n.div`
  .demo-ctl {
    background-color: #f1f1f1;
    border-left: 4px solid #0d599a;
    color: #0a7ac3;
    margin-bottom: 20px;
    padding: 5px;
  }
  .demo-ctl .next-radio-group {
    margin: 5px;
  }
`;var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(K,null);return e.exports.createElement(L,null,t)}});const{Item:J,SubNav:q}=t;class U extends e.exports.Component{constructor(){super(...arguments),this.state={type:"normal"},this.changeType=e=>{this.setState({type:e})}}render(){const{type:r}=this.state;return e.exports.createElement("div",null,e.exports.createElement("div",{className:"demo-ctl"},e.exports.createElement(o.Group,{shape:"button",size:"medium",value:r,onChange:this.changeType},e.exports.createElement(o,{value:"normal"},'type="normal"'),e.exports.createElement(o,{value:"primary"},'type="primary"'),e.exports.createElement(o,{value:"secondary"},'type="secondary"'),e.exports.createElement(o,{value:"line"},'type="line"'))),e.exports.createElement(t,{style:{width:"200px"},type:r,defaultOpenAll:!0},e.exports.createElement(J,{icon:"account"},"Navigation One"),e.exports.createElement(J,{icon:"account"},"Navigation Two"),e.exports.createElement(J,{icon:"account"},"Navigation Three"),e.exports.createElement(J,{icon:"account"},"Navigation Four"),e.exports.createElement(J,{icon:"account"},"Navigation Five"),e.exports.createElement(q,{icon:"account",label:"Sub Nav"},e.exports.createElement(J,{icon:"account"},"Item 1"),e.exports.createElement(J,{icon:"account"},"Item 2"),e.exports.createElement(J,{icon:"account"},"Item 3"),e.exports.createElement(J,{icon:"account"},"Item 4"))))}}const B=n.div`
  .demo-ctl {
    background-color: #f1f1f1;
    border-left: 4px solid #0d599a;
    color: #0a7ac3;
    margin-bottom: 20px;
    padding: 5px;
  }
  .demo-ctl .next-radio-group {
    display: block;
    margin: 5px;
  }
`;var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(U,null);return e.exports.createElement(B,null,t)}});const Q={};Q._basic=m,Q._custom=E,Q._fixed=b,Q._group=y,Q["_icon-only"]=T,Q["_open-mode"]=O,Q["_popup-align"]=D,Q["_vertical-smart"]=H,Q._vertical=P;export default Q;
