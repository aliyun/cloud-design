import{r as e,G as t,ah as n,l}from"./index.26e635a6.js";import{q as a}from"./styled-components.browser.esm.08d92d51.js";const{Item:o,SubNav:c}=n;class r extends e.Component{constructor(){super(...arguments),this.state={type:"normal",direction:"hoz",activeDirection:null,triggerType:"click",mode:"inline"}}setValue(e,t){this.setState({[e]:""===t?null:t})}setTriggerType(e){this.setState({triggerType:e})}setModeType(e){this.setState({mode:e})}render(){const{type:l,direction:a,activeDirection:r,triggerType:m,mode:i}=this.state;return e.createElement("div",null,e.createElement("div",{className:"demo-ctl"},e.createElement(t.Group,{shape:"button",size:"medium",value:l,onChange:this.setValue.bind(this,"type")},e.createElement(t,{value:"normal"},'type="normal"'),e.createElement(t,{value:"primary"},'type="primary"'),e.createElement(t,{value:"secondary"},'type="secondary"'),e.createElement(t,{value:"line"},'type="line"')),e.createElement(t.Group,{shape:"button",size:"medium",value:a,onChange:this.setValue.bind(this,"direction")},e.createElement(t,{value:"hoz"},'direction="hoz"'),e.createElement(t,{value:"ver"},'direction="ver"')),e.createElement(t.Group,{shape:"button",size:"medium",value:null===r?"":r,onChange:this.setValue.bind(this,"activeDirection")},e.createElement(t,{value:""},"activeDirection=null"),"hoz"===a?e.createElement(t,{value:"top"},'activeDirection="top"'):null,"hoz"===a?e.createElement(t,{value:"bottom"},'activeDirection="bottom"'):null,"ver"===a?e.createElement(t,{value:"left"},'activeDirection="left"'):null,"ver"===a?e.createElement(t,{value:"right"},'activeDirection="right"'):null),e.createElement(t.Group,{shape:"button",size:"medium",value:m,onChange:this.setTriggerType.bind(this)},e.createElement(t,{value:"click"},'triggerType="click"'),e.createElement(t,{value:"hover"},'triggerType="hover"')),e.createElement(t.Group,{shape:"button",size:"medium",value:i,onChange:this.setModeType.bind(this)},e.createElement(t,{value:"inline"},'mode="inline"'),e.createElement(t,{value:"popup"},'mode="popup"'))),e.createElement(n,{className:"custom-nav",mode:i,type:l,direction:a,activeDirection:r,triggerType:m},e.createElement(o,null,"Item 1"),e.createElement(o,null,"Item 2"),e.createElement(c,{label:"Sub Nav"},e.createElement(o,null,"Item 3"),e.createElement(o,null,"Item 4"),e.createElement(c,{label:"Sub Nav"},e.createElement(o,null,"Item 5"),e.createElement(o,null,"Item 6"))),e.createElement(o,{icon:"account"},e.createElement("a",{href:"http://www.taobao.com",target:"_blank"},"Taobao"))))}}const m=a.div`
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
`;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(r,null);return e.createElement(m,null,t)}});const u=a.div``;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,"请查看"," ",e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://codepen.io/aboutblank/pen/JjdNKrm"},"https://codepen.io/aboutblank/pen/JjdNKrm"));return e.createElement(u,null,t)}});const{Item:d,SubNav:p}=n,E=e.createElement("span",{className:"fusion"},"FUSION"),v=e.createElement("a",{className:"login-in",href:"javascript:;"},"Login in");const b=a.div`
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
`;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(n,{className:"basic-nav",mode:"popup",direction:"hoz",type:"primary",header:E,footer:v,defaultSelectedKeys:["home"],triggerType:"hover"},e.createElement(d,{key:"home"},"Home"),e.createElement(p,{label:"Component",noIcon:!0},e.createElement(p,{label:"Next"},e.createElement(d,{key:"next-design"},"Design"),e.createElement(d,{key:"next-doc"},"Document")),e.createElement(p,{label:"Meet"},e.createElement(d,{key:"meet-design"},"Design"),e.createElement(d,{key:"meet-doc"},"Document"))),e.createElement(d,{key:"document"},"Document"));return e.createElement(b,null,t)}});const{Item:g,Group:f}=n;const y=a.div``;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(n,{style:{width:240}},e.createElement(f,{label:"Group Label 1"},e.createElement(g,{icon:"account"},"Navigation One"),e.createElement(g,{icon:"account"},"Navigation Two"),e.createElement(g,{icon:"account"},"Navigation Three")),e.createElement(f,{label:"Group Label 2"},e.createElement(g,{icon:"account"},"Navigation Four"),e.createElement(g,{icon:"account"},"Navigation Five"),e.createElement(g,{icon:"account"},"Navigation Six")));return e.createElement(y,null,t)}});const{Item:S,SubNav:I}=n;class N extends e.Component{constructor(){super(...arguments),this.state={openMode:"single"}}setValue(e){this.setState({openMode:e})}render(){const{openMode:l}=this.state;return e.createElement("div",null,e.createElement("div",{className:"demo-ctl"},e.createElement(t.Group,{shape:"button",size:"medium",value:l,onChange:this.setValue.bind(this)},e.createElement(t,{value:"single"},'openMode="single"'),e.createElement(t,{value:"multiple"},'openMode="multiple"'))),e.createElement(n,{style:{width:240},openMode:l,defaultOpenKeys:["0-0"]},e.createElement(I,{label:"Sub Nav 1"},e.createElement(S,null,"Item 1")),e.createElement(I,{label:"Sub Nav 2"},e.createElement(S,null,"Item 1"),e.createElement(S,null,"Item 2"),e.createElement(I,{label:"Sub Nav 1"},e.createElement(S,null,"Item 1"),e.createElement(S,null,"Item 2")),e.createElement(I,{label:"Sub Nav 2"},e.createElement(S,null,"Item 1"),e.createElement(S,null,"Item 2"))),e.createElement(I,{label:"Sub Nav 3"},e.createElement(S,null,"Item 1"),e.createElement(S,null,"Item 2"),e.createElement(S,null,"Item 3"),e.createElement(I,{label:"Sub Nav 1"},e.createElement(S,null,"Item 1"),e.createElement(S,null,"Item 2"),e.createElement(S,null,"Item 3")),e.createElement(I,{label:"Sub Nav 2"},e.createElement(S,null,"Item 1"),e.createElement(S,null,"Item 2"),e.createElement(S,null,"Item 3")),e.createElement(I,{label:"Sub Nav 3"},e.createElement(S,null,"Item 1"),e.createElement(S,null,"Item 2"),e.createElement(S,null,"Item 3"))),e.createElement(S,null,"Item")))}}const _=a.div`
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
`;var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(N,null);return e.createElement(_,null,t)}});const{Item:k,SubNav:z}=n;class w extends e.Component{constructor(){super(...arguments),this.state={iconOnly:!1,hasTooltip:!0,hasArrow:!0}}setValue(e,t){this.setState({[e]:"true"===t})}render(){const{iconOnly:l,hasTooltip:a,hasArrow:o}=this.state;return e.createElement("div",null,e.createElement("div",{className:"demo-ctl"},e.createElement(t.Group,{shape:"button",size:"medium",value:l?"true":"false",onChange:this.setValue.bind(this,"iconOnly")},e.createElement(t,{value:"true"},"iconOnly=true"),e.createElement(t,{value:"false"},"iconOnly=false")),l?e.createElement(t.Group,{shape:"button",size:"medium",value:o?"true":"false",onChange:this.setValue.bind(this,"hasArrow")},e.createElement(t,{value:"true"},"hasArrow=true"),e.createElement(t,{value:"false"},"hasArrow=false")):null,l?e.createElement(t.Group,{shape:"button",size:"medium",value:a?"true":"false",onChange:this.setValue.bind(this,"hasTooltip")},e.createElement(t,{value:"true"},"hasTooltip=true"),e.createElement(t,{value:"false"},"hasTooltip=false")):null),e.createElement(n,{style:{width:"200px"},iconOnly:l,hasArrow:o,hasTooltip:a},e.createElement(k,{icon:"account"},"Navigation One"),e.createElement(k,{icon:"account"},"Navigation Two"),e.createElement(k,{icon:"account"},"Navigation Three"),e.createElement(k,{icon:"account"},"Navigation Four"),e.createElement(k,{icon:"account"},"Navigation Five"),e.createElement(z,{icon:"account",label:"Sub Nav"},e.createElement(k,{icon:"account"},"Item 1"),e.createElement(k,{icon:"account"},"Item 2"),e.createElement(k,{icon:"account"},"Item 3"),e.createElement(k,{icon:"account"},"Item 4"))))}}const C=a.div`
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
`;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(w,null);return e.createElement(C,null,t)}});const{Item:M,SubNav:A}=n;class G extends e.Component{constructor(){super(...arguments),this.state={popupAlign:"outside"}}setValue(e){this.setState({popupAlign:e})}render(){const{popupAlign:l}=this.state;return e.createElement("div",null,e.createElement("div",{className:"demo-ctl"},e.createElement(t.Group,{shape:"button",size:"medium",value:l,onChange:this.setValue.bind(this)},e.createElement(t,{value:"follow"},'popupAlign="follow"'),e.createElement(t,{value:"outside"},'popupAlign="outside"'))),e.createElement(n,{style:{height:400,width:240},mode:"popup",popupAlign:l},e.createElement(A,{key:"sub-nav-1",label:"Sub Nav 1"},e.createElement(M,{key:"1"},"Item 1")),e.createElement(A,{key:"sub-nav-2",label:"Sub Nav 2"},e.createElement(M,{key:"1"},"Item 1"),e.createElement(M,{key:"2"},"Item 2")),e.createElement(A,{key:"sub-nav-3",label:"Sub Nav 3"},e.createElement(M,{key:"1"},"Item 1"),e.createElement(M,{key:"2"},"Item 2"),e.createElement(M,{key:"3"},"Item 3")),e.createElement(A,{key:"sub-nav-4",label:"Sub Nav 4"},e.createElement(M,{key:"1"},"Item 1"),e.createElement(M,{key:"2"},"Item 2"),e.createElement(M,{key:"3"},"Item 3"),e.createElement(M,{key:"4"},"Item 4"))))}}const j=a.div`
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
`;var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(G,null);return e.createElement(j,null,t)}});const{Item:V,SubNav:F}=n;class K extends e.Component{constructor(){super(...arguments),this.state={collapse:!1,embeddable:!1},this.onChange=e=>{this.setState({collapse:e})},this.changeEmbeddable=e=>{this.setState({embeddable:e})}}render(){const{collapse:a,embeddable:o}=this.state;let c,r;return a?(c=!0,r="popup"):(c=!1,r="inline"),e.createElement("div",null,e.createElement(l,{defaultChecked:!1,onChange:this.onChange,size:"small"}),e.createElement("div",{className:"demo-ctl"},e.createElement(t.Group,{shape:"button",size:"medium",value:o,onChange:this.changeEmbeddable},e.createElement(t,{value:!0},"embeddable=true"),e.createElement(t,{value:!1},"embeddable=false"))),e.createElement(n,{style:{width:"200px"},embeddable:o,defaultOpenAll:!0,defaultSelectedKeys:["0-1"],iconOnly:c,hasArrow:!1,hasTooltip:!0,mode:r},e.createElement(V,{icon:"calendar"}," Schedule "),e.createElement(V,{icon:"email"}," Email "),e.createElement(V,{icon:"help"}," Help "),e.createElement(F,{icon:"set",label:"Settings"},e.createElement(V,{icon:"account"}," Account "),e.createElement(V,{icon:"exit"}," Exit "))))}}const L=a.div`
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
`;var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(K,null);return e.createElement(L,null,t)}});const{Item:J,SubNav:q}=n;class U extends e.Component{constructor(){super(...arguments),this.state={type:"normal"},this.changeType=e=>{this.setState({type:e})}}render(){const{type:l}=this.state;return e.createElement("div",null,e.createElement("div",{className:"demo-ctl"},e.createElement(t.Group,{shape:"button",size:"medium",value:l,onChange:this.changeType},e.createElement(t,{value:"normal"},'type="normal"'),e.createElement(t,{value:"primary"},'type="primary"'),e.createElement(t,{value:"secondary"},'type="secondary"'),e.createElement(t,{value:"line"},'type="line"'))),e.createElement(n,{style:{width:"200px"},type:l,defaultOpenAll:!0},e.createElement(J,{icon:"account"},"Navigation One"),e.createElement(J,{icon:"account"},"Navigation Two"),e.createElement(J,{icon:"account"},"Navigation Three"),e.createElement(J,{icon:"account"},"Navigation Four"),e.createElement(J,{icon:"account"},"Navigation Five"),e.createElement(q,{icon:"account",label:"Sub Nav"},e.createElement(J,{icon:"account"},"Item 1"),e.createElement(J,{icon:"account"},"Item 2"),e.createElement(J,{icon:"account"},"Item 3"),e.createElement(J,{icon:"account"},"Item 4"))))}}const B=a.div`
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
`;var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(U,null);return e.createElement(B,null,t)}});const Q={};Q._custom=i,Q._fixed=s,Q._basic=h,Q._group=x,Q["_open-mode"]=T,Q["_icon-only"]=O,Q["_popup-align"]=D,Q["_vertical-smart"]=H,Q._vertical=P;export default Q;
