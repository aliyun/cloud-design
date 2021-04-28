import{r as e,am as t,J as n,q as l}from"./index.db891132.js";import{q as a}from"./styled-components.browser.esm.2d3384e1.js";const{Item:o,SubNav:c}=t,r=e.createElement("span",{className:"fusion"},"FUSION"),m=e.createElement("a",{className:"login-in",href:"javascript:;"},"Login in");const i=a.div`
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
`;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement(t,{className:"basic-nav",mode:"popup",direction:"hoz",type:"primary",header:r,footer:m,defaultSelectedKeys:["home"],triggerType:"hover"},e.createElement(o,{key:"home"},"Home"),e.createElement(c,{label:"Component",noIcon:!0},e.createElement(c,{label:"Next"},e.createElement(o,{key:"next-design"},"Design"),e.createElement(o,{key:"next-doc"},"Document")),e.createElement(c,{label:"Meet"},e.createElement(o,{key:"meet-design"},"Design"),e.createElement(o,{key:"meet-doc"},"Document"))),e.createElement(o,{key:"document"},"Document"));return e.createElement(i,null,n)}});const{Item:s,SubNav:d}=t;class p extends e.Component{constructor(){super(...arguments),this.state={type:"normal",direction:"hoz",activeDirection:null,triggerType:"click",mode:"inline"}}setValue(e,t){this.setState({[e]:""===t?null:t})}setTriggerType(e){this.setState({triggerType:e})}setModeType(e){this.setState({mode:e})}render(){const{type:l,direction:a,activeDirection:o,triggerType:c,mode:r}=this.state;return e.createElement("div",null,e.createElement("div",{className:"demo-ctl"},e.createElement(n.Group,{shape:"button",size:"medium",value:l,onChange:this.setValue.bind(this,"type")},e.createElement(n,{value:"normal"},'type="normal"'),e.createElement(n,{value:"primary"},'type="primary"'),e.createElement(n,{value:"secondary"},'type="secondary"'),e.createElement(n,{value:"line"},'type="line"')),e.createElement(n.Group,{shape:"button",size:"medium",value:a,onChange:this.setValue.bind(this,"direction")},e.createElement(n,{value:"hoz"},'direction="hoz"'),e.createElement(n,{value:"ver"},'direction="ver"')),e.createElement(n.Group,{shape:"button",size:"medium",value:null===o?"":o,onChange:this.setValue.bind(this,"activeDirection")},e.createElement(n,{value:""},"activeDirection=null"),"hoz"===a?e.createElement(n,{value:"top"},'activeDirection="top"'):null,"hoz"===a?e.createElement(n,{value:"bottom"},'activeDirection="bottom"'):null,"ver"===a?e.createElement(n,{value:"left"},'activeDirection="left"'):null,"ver"===a?e.createElement(n,{value:"right"},'activeDirection="right"'):null),e.createElement(n.Group,{shape:"button",size:"medium",value:c,onChange:this.setTriggerType.bind(this)},e.createElement(n,{value:"click"},'triggerType="click"'),e.createElement(n,{value:"hover"},'triggerType="hover"')),e.createElement(n.Group,{shape:"button",size:"medium",value:r,onChange:this.setModeType.bind(this)},e.createElement(n,{value:"inline"},'mode="inline"'),e.createElement(n,{value:"popup"},'mode="popup"'))),e.createElement(t,{className:"custom-nav",mode:r,type:l,direction:a,activeDirection:o,triggerType:c},e.createElement(s,null,"Item 1"),e.createElement(s,null,"Item 2"),e.createElement(d,{label:"Sub Nav"},e.createElement(s,null,"Item 3"),e.createElement(s,null,"Item 4"),e.createElement(d,{label:"Sub Nav"},e.createElement(s,null,"Item 5"),e.createElement(s,null,"Item 6"))),e.createElement(s,{icon:"account"},e.createElement("a",{href:"http://www.taobao.com",target:"_blank"},"Taobao"))))}}const E=a.div`
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
`;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(p,null);return e.createElement(E,null,t)}});const b=a.div``;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,"请查看"," ",e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://codepen.io/aboutblank/pen/JjdNKrm"},"https://codepen.io/aboutblank/pen/JjdNKrm"));return e.createElement(b,null,t)}});const{Item:g,Group:f}=t;const y=a.div``;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement(t,{style:{width:240}},e.createElement(f,{label:"Group Label 1"},e.createElement(g,{icon:"account"},"Navigation One"),e.createElement(g,{icon:"account"},"Navigation Two"),e.createElement(g,{icon:"account"},"Navigation Three")),e.createElement(f,{label:"Group Label 2"},e.createElement(g,{icon:"account"},"Navigation Four"),e.createElement(g,{icon:"account"},"Navigation Five"),e.createElement(g,{icon:"account"},"Navigation Six")));return e.createElement(y,null,n)}});const{Item:S,SubNav:I}=t;class N extends e.Component{constructor(){super(...arguments),this.state={iconOnly:!1,hasTooltip:!0,hasArrow:!0}}setValue(e,t){this.setState({[e]:"true"===t})}render(){const{iconOnly:l,hasTooltip:a,hasArrow:o}=this.state;return e.createElement("div",null,e.createElement("div",{className:"demo-ctl"},e.createElement(n.Group,{shape:"button",size:"medium",value:l?"true":"false",onChange:this.setValue.bind(this,"iconOnly")},e.createElement(n,{value:"true"},"iconOnly=true"),e.createElement(n,{value:"false"},"iconOnly=false")),l?e.createElement(n.Group,{shape:"button",size:"medium",value:o?"true":"false",onChange:this.setValue.bind(this,"hasArrow")},e.createElement(n,{value:"true"},"hasArrow=true"),e.createElement(n,{value:"false"},"hasArrow=false")):null,l?e.createElement(n.Group,{shape:"button",size:"medium",value:a?"true":"false",onChange:this.setValue.bind(this,"hasTooltip")},e.createElement(n,{value:"true"},"hasTooltip=true"),e.createElement(n,{value:"false"},"hasTooltip=false")):null),e.createElement(t,{style:{width:"200px"},iconOnly:l,hasArrow:o,hasTooltip:a},e.createElement(S,{icon:"account"},"Navigation One"),e.createElement(S,{icon:"account"},"Navigation Two"),e.createElement(S,{icon:"account"},"Navigation Three"),e.createElement(S,{icon:"account"},"Navigation Four"),e.createElement(S,{icon:"account"},"Navigation Five"),e.createElement(I,{icon:"account",label:"Sub Nav"},e.createElement(S,{icon:"account"},"Item 1"),e.createElement(S,{icon:"account"},"Item 2"),e.createElement(S,{icon:"account"},"Item 3"),e.createElement(S,{icon:"account"},"Item 4"))))}}const _=a.div`
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
`;var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(N,null);return e.createElement(_,null,t)}});const{Item:k,SubNav:z}=t;class w extends e.Component{constructor(){super(...arguments),this.state={openMode:"single"}}setValue(e){this.setState({openMode:e})}render(){const{openMode:l}=this.state;return e.createElement("div",null,e.createElement("div",{className:"demo-ctl"},e.createElement(n.Group,{shape:"button",size:"medium",value:l,onChange:this.setValue.bind(this)},e.createElement(n,{value:"single"},'openMode="single"'),e.createElement(n,{value:"multiple"},'openMode="multiple"'))),e.createElement(t,{style:{width:240},openMode:l,defaultOpenKeys:["0-0"]},e.createElement(z,{label:"Sub Nav 1"},e.createElement(k,null,"Item 1")),e.createElement(z,{label:"Sub Nav 2"},e.createElement(k,null,"Item 1"),e.createElement(k,null,"Item 2"),e.createElement(z,{label:"Sub Nav 1"},e.createElement(k,null,"Item 1"),e.createElement(k,null,"Item 2")),e.createElement(z,{label:"Sub Nav 2"},e.createElement(k,null,"Item 1"),e.createElement(k,null,"Item 2"))),e.createElement(z,{label:"Sub Nav 3"},e.createElement(k,null,"Item 1"),e.createElement(k,null,"Item 2"),e.createElement(k,null,"Item 3"),e.createElement(z,{label:"Sub Nav 1"},e.createElement(k,null,"Item 1"),e.createElement(k,null,"Item 2"),e.createElement(k,null,"Item 3")),e.createElement(z,{label:"Sub Nav 2"},e.createElement(k,null,"Item 1"),e.createElement(k,null,"Item 2"),e.createElement(k,null,"Item 3")),e.createElement(z,{label:"Sub Nav 3"},e.createElement(k,null,"Item 1"),e.createElement(k,null,"Item 2"),e.createElement(k,null,"Item 3"))),e.createElement(k,null,"Item")))}}const C=a.div`
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
`;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(w,null);return e.createElement(C,null,t)}});const{Item:M,SubNav:A}=t;class G extends e.Component{constructor(){super(...arguments),this.state={popupAlign:"outside"}}setValue(e){this.setState({popupAlign:e})}render(){const{popupAlign:l}=this.state;return e.createElement("div",null,e.createElement("div",{className:"demo-ctl"},e.createElement(n.Group,{shape:"button",size:"medium",value:l,onChange:this.setValue.bind(this)},e.createElement(n,{value:"follow"},'popupAlign="follow"'),e.createElement(n,{value:"outside"},'popupAlign="outside"'))),e.createElement(t,{style:{height:400,width:240},mode:"popup",popupAlign:l},e.createElement(A,{key:"sub-nav-1",label:"Sub Nav 1"},e.createElement(M,{key:"1"},"Item 1")),e.createElement(A,{key:"sub-nav-2",label:"Sub Nav 2"},e.createElement(M,{key:"1"},"Item 1"),e.createElement(M,{key:"2"},"Item 2")),e.createElement(A,{key:"sub-nav-3",label:"Sub Nav 3"},e.createElement(M,{key:"1"},"Item 1"),e.createElement(M,{key:"2"},"Item 2"),e.createElement(M,{key:"3"},"Item 3")),e.createElement(A,{key:"sub-nav-4",label:"Sub Nav 4"},e.createElement(M,{key:"1"},"Item 1"),e.createElement(M,{key:"2"},"Item 2"),e.createElement(M,{key:"3"},"Item 3"),e.createElement(M,{key:"4"},"Item 4"))))}}const j=a.div`
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
`;var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(G,null);return e.createElement(j,null,t)}});const{Item:V,SubNav:F}=t;class K extends e.Component{constructor(){super(...arguments),this.state={type:"normal"},this.changeType=e=>{this.setState({type:e})}}render(){const{type:l}=this.state;return e.createElement("div",null,e.createElement("div",{className:"demo-ctl"},e.createElement(n.Group,{shape:"button",size:"medium",value:l,onChange:this.changeType},e.createElement(n,{value:"normal"},'type="normal"'),e.createElement(n,{value:"primary"},'type="primary"'),e.createElement(n,{value:"secondary"},'type="secondary"'),e.createElement(n,{value:"line"},'type="line"'))),e.createElement(t,{style:{width:"200px"},type:l,defaultOpenAll:!0},e.createElement(V,{icon:"account"},"Navigation One"),e.createElement(V,{icon:"account"},"Navigation Two"),e.createElement(V,{icon:"account"},"Navigation Three"),e.createElement(V,{icon:"account"},"Navigation Four"),e.createElement(V,{icon:"account"},"Navigation Five"),e.createElement(F,{icon:"account",label:"Sub Nav"},e.createElement(V,{icon:"account"},"Item 1"),e.createElement(V,{icon:"account"},"Item 2"),e.createElement(V,{icon:"account"},"Item 3"),e.createElement(V,{icon:"account"},"Item 4"))))}}const J=a.div`
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
`;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(K,null);return e.createElement(J,null,t)}});const{Item:q,SubNav:H}=t;class U extends e.Component{constructor(){super(...arguments),this.state={collapse:!1,embeddable:!1},this.onChange=e=>{this.setState({collapse:e})},this.changeEmbeddable=e=>{this.setState({embeddable:e})}}render(){const{collapse:a,embeddable:o}=this.state;let c,r;return a?(c=!0,r="popup"):(c=!1,r="inline"),e.createElement("div",null,e.createElement(l,{defaultChecked:!1,onChange:this.onChange,size:"small"}),e.createElement("div",{className:"demo-ctl"},e.createElement(n.Group,{shape:"button",size:"medium",value:o,onChange:this.changeEmbeddable},e.createElement(n,{value:!0},"embeddable=true"),e.createElement(n,{value:!1},"embeddable=false"))),e.createElement(t,{style:{width:"200px"},embeddable:o,defaultOpenAll:!0,defaultSelectedKeys:["0-1"],iconOnly:c,hasArrow:!1,hasTooltip:!0,mode:r},e.createElement(q,{icon:"calendar"}," Schedule "),e.createElement(q,{icon:"email"}," Email "),e.createElement(q,{icon:"help"}," Help "),e.createElement(H,{icon:"set",label:"Settings"},e.createElement(q,{icon:"account"}," Account "),e.createElement(q,{icon:"exit"}," Exit "))))}}const B=a.div`
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
`;var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(U,null);return e.createElement(B,null,t)}});const Q={};Q._basic=u,Q._custom=v,Q._fixed=h,Q._group=x,Q["_icon-only"]=T,Q["_open-mode"]=O,Q["_popup-align"]=D,Q._vertical=L,Q["_vertical-smart"]=P;export default Q;
