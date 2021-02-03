import{r as e,R as t,ad as n}from"./index.54491fbe.js";import{q as l}from"./styled-components.browser.esm.6105e56a.js";const{Item:a,SubNav:o}=n;class r extends e.Component{constructor(){super(...arguments),this.state={type:"normal",direction:"hoz",activeDirection:null,triggerType:"click",mode:"inline"}}setValue(e,t){this.setState({[e]:""===t?null:t})}setTriggerType(e){this.setState({triggerType:e})}setModeType(e){this.setState({mode:e})}render(){const{type:l,direction:r,activeDirection:c,triggerType:m,mode:i}=this.state;return e.createElement("div",null,e.createElement("div",{className:"demo-ctl"},e.createElement(t.Group,{shape:"button",size:"medium",value:l,onChange:this.setValue.bind(this,"type")},e.createElement(t,{value:"normal"},'type="normal"'),e.createElement(t,{value:"primary"},'type="primary"'),e.createElement(t,{value:"secondary"},'type="secondary"'),e.createElement(t,{value:"line"},'type="line"')),e.createElement(t.Group,{shape:"button",size:"medium",value:r,onChange:this.setValue.bind(this,"direction")},e.createElement(t,{value:"hoz"},'direction="hoz"'),e.createElement(t,{value:"ver"},'direction="ver"')),e.createElement(t.Group,{shape:"button",size:"medium",value:null===c?"":c,onChange:this.setValue.bind(this,"activeDirection")},e.createElement(t,{value:""},"activeDirection=null"),"hoz"===r?e.createElement(t,{value:"top"},'activeDirection="top"'):null,"hoz"===r?e.createElement(t,{value:"bottom"},'activeDirection="bottom"'):null,"ver"===r?e.createElement(t,{value:"left"},'activeDirection="left"'):null,"ver"===r?e.createElement(t,{value:"right"},'activeDirection="right"'):null),e.createElement(t.Group,{shape:"button",size:"medium",value:m,onChange:this.setTriggerType.bind(this)},e.createElement(t,{value:"click"},'triggerType="click"'),e.createElement(t,{value:"hover"},'triggerType="hover"')),e.createElement(t.Group,{shape:"button",size:"medium",value:i,onChange:this.setModeType.bind(this)},e.createElement(t,{value:"inline"},'mode="inline"'),e.createElement(t,{value:"popup"},'mode="popup"'))),e.createElement(n,{className:"custom-nav",mode:i,type:l,direction:r,activeDirection:c,triggerType:m},e.createElement(a,null,"Item 1"),e.createElement(a,null,"Item 2"),e.createElement(o,{label:"Sub Nav"},e.createElement(a,null,"Item 3"),e.createElement(a,null,"Item 4"),e.createElement(o,{label:"Sub Nav"},e.createElement(a,null,"Item 5"),e.createElement(a,null,"Item 6"))),e.createElement(a,{icon:"account"},e.createElement("a",{href:"http://www.taobao.com",target:"_blank"},"Taobao"))))}}const c=l.div`
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
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(r,null);return e.createElement(c,null,t)}});const{Item:i,Group:u}=n;const s=l.div``;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(n,{style:{width:240}},e.createElement(u,{label:"Group Label 1"},e.createElement(i,{icon:"account"},"Navigation One"),e.createElement(i,{icon:"account"},"Navigation Two"),e.createElement(i,{icon:"account"},"Navigation Three")),e.createElement(u,{label:"Group Label 2"},e.createElement(i,{icon:"account"},"Navigation Four"),e.createElement(i,{icon:"account"},"Navigation Five"),e.createElement(i,{icon:"account"},"Navigation Six")));return e.createElement(s,null,t)}});const{Item:d,SubNav:E}=n;class v extends e.Component{constructor(){super(...arguments),this.state={iconOnly:!1,hasTooltip:!0,hasArrow:!0}}setValue(e,t){this.setState({[e]:"true"===t})}render(){const{iconOnly:l,hasTooltip:a,hasArrow:o}=this.state;return e.createElement("div",null,e.createElement("div",{className:"demo-ctl"},e.createElement(t.Group,{shape:"button",size:"medium",value:l?"true":"false",onChange:this.setValue.bind(this,"iconOnly")},e.createElement(t,{value:"true"},"iconOnly=true"),e.createElement(t,{value:"false"},"iconOnly=false")),l?e.createElement(t.Group,{shape:"button",size:"medium",value:o?"true":"false",onChange:this.setValue.bind(this,"hasArrow")},e.createElement(t,{value:"true"},"hasArrow=true"),e.createElement(t,{value:"false"},"hasArrow=false")):null,l?e.createElement(t.Group,{shape:"button",size:"medium",value:a?"true":"false",onChange:this.setValue.bind(this,"hasTooltip")},e.createElement(t,{value:"true"},"hasTooltip=true"),e.createElement(t,{value:"false"},"hasTooltip=false")):null),e.createElement(n,{style:{width:"200px"},iconOnly:l,hasArrow:o,hasTooltip:a},e.createElement(d,{icon:"account"},"Navigation One"),e.createElement(d,{icon:"account"},"Navigation Two"),e.createElement(d,{icon:"account"},"Navigation Three"),e.createElement(d,{icon:"account"},"Navigation Four"),e.createElement(d,{icon:"account"},"Navigation Five"),e.createElement(E,{icon:"account",label:"Sub Nav"},e.createElement(d,{icon:"account"},"Item 1"),e.createElement(d,{icon:"account"},"Item 2"),e.createElement(d,{icon:"account"},"Item 3"),e.createElement(d,{icon:"account"},"Item 4"))))}}const b=l.div`
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
`;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(v,null);return e.createElement(b,null,t)}});const g=l.div``;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,"请查看"," ",e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://codepen.io/aboutblank/pen/JjdNKrm"},"https://codepen.io/aboutblank/pen/JjdNKrm"));return e.createElement(g,null,t)}});const{Item:y,SubNav:I}=n,x=e.createElement("span",{className:"fusion"},"FUSION"),N=e.createElement("a",{className:"login-in",href:"javascript:;"},"Login in");const S=l.div`
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
  .basic-nav .next-nav-item {
    width: 120px;
  }
`;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(n,{className:"basic-nav",direction:"hoz",type:"primary",header:x,footer:N,defaultSelectedKeys:["home"],triggerType:"hover"},e.createElement(y,{key:"home"},"Home"),e.createElement(I,{label:"Component"},e.createElement(y,{key:"next"},"Next"),e.createElement(y,{key:"mext"},"Mext")),e.createElement(y,{key:"document"},"Document"));return e.createElement(S,null,t)}});const{Item:T,SubNav:k}=n;class z extends e.Component{constructor(){super(...arguments),this.state={popupAlign:"follow"}}setValue(e){this.setState({popupAlign:e})}render(){const{popupAlign:l}=this.state;return e.createElement("div",null,e.createElement("div",{className:"demo-ctl"},e.createElement(t.Group,{shape:"button",size:"medium",value:l,onChange:this.setValue.bind(this)},e.createElement(t,{value:"follow"},'popupAlign="follow"'),e.createElement(t,{value:"outside"},'popupAlign="outside"'))),e.createElement(n,{style:{height:400,width:240},mode:"popup",popupAlign:l,defaultOpenKeys:["sub-nav-2"]},e.createElement(k,{key:"sub-nav-1",label:"Sub Nav 1"},e.createElement(T,{key:"1"},"Item 1")),e.createElement(k,{key:"sub-nav-2",label:"Sub Nav 2"},e.createElement(T,{key:"1"},"Item 1"),e.createElement(T,{key:"2"},"Item 2")),e.createElement(k,{key:"sub-nav-3",label:"Sub Nav 3"},e.createElement(T,{key:"1"},"Item 1"),e.createElement(T,{key:"2"},"Item 2"),e.createElement(T,{key:"3"},"Item 3")),e.createElement(k,{key:"sub-nav-4",label:"Sub Nav 4"},e.createElement(T,{key:"1"},"Item 1"),e.createElement(T,{key:"2"},"Item 2"),e.createElement(T,{key:"3"},"Item 3"),e.createElement(T,{key:"4"},"Item 4"))))}}const w=l.div`
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
`;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(z,null);return e.createElement(w,null,t)}});const{Item:M,SubNav:C}=n;class G extends e.Component{constructor(){super(...arguments),this.state={openMode:"single"}}setValue(e){this.setState({openMode:e})}render(){const{openMode:l}=this.state;return e.createElement("div",null,e.createElement("div",{className:"demo-ctl"},e.createElement(t.Group,{shape:"button",size:"medium",value:l,onChange:this.setValue.bind(this)},e.createElement(t,{value:"single"},'openMode="single"'),e.createElement(t,{value:"multiple"},'openMode="multiple"'))),e.createElement(n,{style:{width:240},openMode:l},e.createElement(C,{label:"Sub Nav 1"},e.createElement(M,null,"Item 1")),e.createElement(C,{label:"Sub Nav 2"},e.createElement(M,null,"Item 1"),e.createElement(M,null,"Item 2"),e.createElement(C,{label:"Sub Nav 1"},e.createElement(M,null,"Item 1"),e.createElement(M,null,"Item 2")),e.createElement(C,{label:"Sub Nav 2"},e.createElement(M,null,"Item 1"),e.createElement(M,null,"Item 2"))),e.createElement(C,{label:"Sub Nav 3"},e.createElement(M,null,"Item 1"),e.createElement(M,null,"Item 2"),e.createElement(M,null,"Item 3"),e.createElement(C,{label:"Sub Nav 1"},e.createElement(M,null,"Item 1"),e.createElement(M,null,"Item 2"),e.createElement(M,null,"Item 3")),e.createElement(C,{label:"Sub Nav 2"},e.createElement(M,null,"Item 1"),e.createElement(M,null,"Item 2"),e.createElement(M,null,"Item 3")),e.createElement(C,{label:"Sub Nav 3"},e.createElement(M,null,"Item 1"),e.createElement(M,null,"Item 2"),e.createElement(M,null,"Item 3"))),e.createElement(M,null,"Item")))}}const j=l.div`
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
`;var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(G,null);return e.createElement(j,null,t)}});const V={};V._custom=m,V._group=p,V["_icon-only"]=h,V._fixed=f,V._basic=_,V["_popup-align"]=O,V["_open-mode"]=A;export default V;
