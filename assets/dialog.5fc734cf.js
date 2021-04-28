import{r as e,B as t,W as o,J as n,q as l,V as s,n as i,a1 as r}from"./index.db891132.js";import{q as a}from"./styled-components.browser.esm.2d3384e1.js";class c extends e.Component{constructor(){super(...arguments),this.state={visible:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onClose=e=>{console.log(e),this.setState({visible:!1})}}render(){return e.createElement("div",null,e.createElement(t,{onClick:this.onOpen,type:"primary"},"Open dialog"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:this.state.visible,onOk:this.onClose.bind(this,"okClick"),onCancel:this.onClose.bind(this,"cancelClick"),onClose:this.onClose},"Start your business here by searching a popular product"))}}const u=a.div``;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(c,null);return e.createElement(u,null,t)}});class h extends e.Component{constructor(){super(...arguments),this.state={visible:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onClose=()=>{this.setState({visible:!1})}}render(){return e.createElement("div",null,e.createElement(t,{onClick:this.onOpen,type:"primary"},"Open dialog"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:this.state.visible,autoFocus:!0,onOk:this.onClose.bind(this,"okClick"),onCancel:this.onClose.bind(this,"cancelClick"),onClose:this.onClose,cancelProps:{"aria-label":"cancel"},okProps:{"aria-label":"ok"}},e.createElement("p",{tabIndex:"0"}," ","Start your business here by searching a popular product")))}}const d=a.div``;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(h,null);return e.createElement(d,null,t)}});class C extends e.Component{constructor(){super(...arguments),this.state={visible:!1},this.onOpenFullyCustomized=()=>{this.setState({fullyCustomizedVisible:!0})},this.onCloseFullyCustomized=()=>{this.setState({fullyCustomizedVisible:!1})},this.onOpenTextCustomized=()=>{this.setState({textCustomizedVisible:!0})},this.onCloseTextCustomized=()=>{this.setState({textCustomizedVisible:!1})}}render(){return e.createElement("div",null,e.createElement(t,{onClick:this.onOpenFullyCustomized,type:"primary"},"Fully Customized Footer"),e.createElement("br",null),e.createElement("br",null),e.createElement(o,{title:"Welcome to Alibaba.com",footer:e.createElement(t,{warning:!0,type:"primary",onClick:this.onCloseFullyCustomized},"Customize footer"),visible:this.state.fullyCustomizedVisible,onOk:this.onCloseFullyCustomized,onCancel:this.onCloseFullyCustomized,onClose:this.onCloseFullyCustomized},"Start your business here by searching a popular product"),e.createElement(t,{onClick:this.onOpenTextCustomized,type:"primary"},"Text Only Customize"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:this.state.textCustomizedVisible,onOk:this.onCloseTextCustomized,onCancel:this.onCloseTextCustomized,onClose:this.onCloseTextCustomized,okProps:{children:"Custom OK",className:"asdf"},cancelProps:{children:"Custom Cancel"}},"Start your business here by searching a popular product"))}}const g=a.div``;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(C,null);return e.createElement(g,null,t)}});class y extends e.Component{constructor(){super(...arguments),this.state={visible:!1,footerActions:["ok","cancel"],footerAlign:"right",loading:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onClose=()=>{this.setState({visible:!1})},this.toggleFooterActions=e=>{this.setState({footerActions:e.split(",")})},this.toggleFooterAlign=e=>{this.setState({footerAlign:e})},this.toggleOkLoader=e=>{this.setState({loading:e})}}render(){const{visible:l,footerActions:s,footerAlign:i,loading:r}=this.state,a={loading:r};return e.createElement("div",null,e.createElement(t,{onClick:this.onOpen,type:"primary"},"Open dialog"),e.createElement(o,{title:"Customize buttons of footer",visible:l,footerActions:s,footerAlign:i,onOk:this.onClose,onCancel:this.onClose,onClose:this.onClose,okProps:a},e.createElement("div",{className:"demo-content"},e.createElement(n.Group,{className:"demo-radio-group",shape:"button",value:s.join(","),onChange:this.toggleFooterActions},e.createElement(n,{value:"ok,cancel"},"ok is left"),e.createElement(n,{value:"cancel,ok"},"ok is right"),e.createElement(n,{value:"ok"},"only ok"),e.createElement(n,{value:"cancel"},"only cancel")),e.createElement(n.Group,{className:"demo-radio-group",shape:"button",value:i,onChange:this.toggleFooterAlign},e.createElement(n,{value:"left"},"left"),e.createElement(n,{value:"center"},"center"),e.createElement(n,{value:"right"},"right")),e.createElement(n.Group,{className:"demo-radio-group",shape:"button",value:r,onChange:this.toggleOkLoader},e.createElement(n,{value:!1},"Loading Off"),e.createElement(n,{value:!0},"Loading On")))))}}const k=a.div`
  .demo-content {
    padding: 10px;
    border: 2px dashed #ddd;
    background: #f8f8f8;
  }

  .demo-radio-group {
    display: block;
  }

  .demo-radio-group + .demo-radio-group {
    margin-top: 10px;
  }
`;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(y,null);return e.createElement(k,null,t)}});class v extends e.Component{constructor(){super(...arguments),this.state={visible:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onClose=()=>{this.setState({visible:!1})}}render(){const{visible:n}=this.state;return e.createElement("div",null,e.createElement(t,{onClick:this.onOpen,type:"primary"},"Open dialog"),e.createElement(o,{title:"Fixed Height",visible:n,height:"400px",onOk:this.onClose,onCancel:this.onClose,onClose:this.onClose},"Small Content in a fixed size Dialog"))}}const f=a.div``;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(v,null);return e.createElement(f,null,t)}});const O=new Array(60).fill().map(((t,o)=>e.createElement("p",{key:o},"Start your business here by searching a popular product")));class _ extends e.Component{constructor(){super(...arguments),this.state={visible:!1,isFullScreen:!1,closeOnMaskClick:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onClose=()=>{this.setState({visible:!1})},this.toggleIsFullScreen=()=>{this.setState({isFullScreen:!this.state.isFullScreen})},this.toggleCloseOnMaskClick=()=>{this.setState({closeOnMaskClick:!this.state.closeOnMaskClick})}}render(){const{visible:n,isFullScreen:s,closeOnMaskClick:i}=this.state;return e.createElement("div",null,e.createElement("div",{style:{display:"block",marginBottom:"10px"}},"When the height of the dialog exceeds the viewport height of the browser, whether to show the scroll bar:"),e.createElement(l,{style:{display:"block",marginBottom:"10px"},checked:s,onChange:this.toggleIsFullScreen}),e.createElement("div",{style:{display:"block",marginBottom:"10px"}},"Close on mask click:"),e.createElement(l,{style:{display:"block",marginBottom:"10px"},checked:i,onChange:this.toggleCloseOnMaskClick}),e.createElement(t,{onClick:this.onOpen,type:"primary"},"Open dialog"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:n,isFullScreen:s,closeMode:i?["close","esc","mask"]:["close","esc"],onOk:this.onClose,onCancel:this.onClose,onClose:this.onClose},O))}}const x=a.div``;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(_,null);return e.createElement(x,null,t)}});const w=()=>{o.alert({title:"Alert",content:"alert content alert content...",okProps:{children:"Custom OK"},onOk:()=>console.log("ok")})},A=()=>{o.confirm({title:"Confirm",content:"confirm content confirm content...",onOk:()=>console.log("ok"),onCancel:()=>console.log("cancel")})},F=()=>{const n=o.show({title:"Custom",content:"custom content custom content...",footer:e.createElement(t,{warning:!0,type:"primary",onClick:()=>n.hide()},"Custom button")})},P=()=>{o.confirm({title:"Confirm",content:'set icon as "warning" ',messageProps:{type:"warning"},onOk:()=>console.log("ok"),onCancel:()=>console.log("cancel")})};const T=a.div``;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const o=e.createElement(s,{locale:{Dialog:{ok:"OK",cancel:"Cancel"}}},e.createElement(i,{direction:"row",spacing:20},e.createElement(t,{onClick:w},"Alert"),e.createElement(t,{onClick:A},"Confirm"),e.createElement(t,{onClick:F},"Show"),e.createElement(t,{onClick:P},"Custom Icon")));return e.createElement(T,null,o)}});const j=e.createElement("p",null,"Start your business here by searching a popular product"),D=[e.createElement("p",{key:"0"},"Start your business here by searching a popular product"),e.createElement("p",{key:"1"},"Start your business here by searching a popular product"),e.createElement("p",{key:"2"},"Start your business here by searching a popular product"),e.createElement("p",{key:"3"},"Start your business here by searching a popular product")];class W extends e.Component{constructor(){super(...arguments),this.state={visible:!1,short:!0,shouldUpdatePosition:!0},this.onOpen=()=>{this.setState({visible:!0,short:!0})},this.onClose=()=>{this.setState({visible:!1})},this.toggleShouldUpdatePosition=()=>{this.setState({shouldUpdatePosition:!this.state.shouldUpdatePosition})},this.modifyContent=()=>{this.setState({short:!this.state.short})}}render(){const{visible:n,short:s,shouldUpdatePosition:i}=this.state;return e.createElement("div",null,e.createElement("div",{style:{display:"block",marginBottom:"10px"}},"Whether to update the dialog position when the dialog height changes"),e.createElement(l,{style:{display:"block",marginBottom:"10px",width:"60px"},checked:i,onChange:this.toggleShouldUpdatePosition}),e.createElement(t,{onClick:this.onOpen,type:"primary"},"Open dialog"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:n,onOk:this.onClose.bind(this,"okClick"),onCancel:this.onClose.bind(this,"cancelClick"),onClose:this.onClose,shouldUpdatePosition:i},e.createElement(t,{type:"primary",onClick:this.modifyContent},"Change content"),s?j:D))}}const B=a.div``;var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(W,null);return e.createElement(B,null,t)}});class V extends e.Component{constructor(){super(...arguments),this.state={visible:!1,loading:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onOk=()=>new Promise((e=>{this.setState({loading:!0}),setTimeout(e,2e3)})).then((()=>{r.success("Deleted successfully!"),this.setState({loading:!1,visible:!1})})),this.onClose=()=>{this.setState({visible:!1})}}render(){const n={loading:this.state.loading};return e.createElement("div",null,e.createElement(t,{onClick:this.onOpen,type:"primary"},"Dialog Promise"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:this.state.visible,okProps:n,onOk:this.onOk,onCancel:this.onClose,onClose:this.onClose},"Start your business here by searching a popular product"))}}const N=()=>{o.confirm({title:"Confirm",content:"Do you confirm deleting this content?",onOk:()=>new Promise((e=>{setTimeout(e,2e3)})).then((()=>{r.success("Deleted successfully!")}))})};const I=a.div``;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const o=e.createElement("div",null,e.createElement(V,null),e.createElement("br",null),e.createElement(t,{type:"primary",warning:!0,onClick:N},"Quick Confirm Promise"));return e.createElement(I,null,o)}});const q=()=>e.createElement("div",null,e.createElement(t,{onClick:()=>{o.confirm({title:"Dialog.confirm 命令式弹窗"})}},"使用 Dialog.confirm")),G=o.withContext((({contextDialog:o})=>e.createElement("div",null,e.createElement(t,{onClick:()=>{o.confirm({title:"Dialog.withContext 命令式弹窗"})}},"使用 Dialog.withContext"))));class K extends e.Component{render(){return e.createElement(s,{locale:{Dialog:{close:"关闭（根组件文案）",ok:"确认（根组件文案）",cancel:"取消（根组件文案）"}}},e.createElement(s,{locale:{Dialog:{close:"关闭（局部文案）",ok:"确认（局部文案）",cancel:"取消（局部文案）"}}},e.createElement("div",null,e.createElement(q,null),e.createElement("br",null),e.createElement(G,null))))}}const H=a.div``;var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(K,null);return e.createElement(H,null,t)}});const Q={};Q._basic=m,Q._accessibility=p,Q["_customize-footer"]=b,Q._footer=E,Q._height=S,Q["_large-content"]=z,Q._quick=M,Q["_should-update-position"]=U,Q._promise=L,Q._withContext=J;export default Q;