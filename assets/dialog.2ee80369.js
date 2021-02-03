import{r as e,B as t,P as o,a0 as n,Q as l,R as s,l as i}from"./index.9e4b8ce1.js";import{q as a}from"./styled-components.browser.esm.19571eea.js";class r extends e.Component{constructor(){super(...arguments),this.state={visible:!1},this.onOpenFullyCustomized=()=>{this.setState({fullyCustomizedVisible:!0})},this.onCloseFullyCustomized=()=>{this.setState({fullyCustomizedVisible:!1})},this.onOpenTextCustomized=()=>{this.setState({textCustomizedVisible:!0})},this.onCloseTextCustomized=()=>{this.setState({textCustomizedVisible:!1})}}render(){return e.createElement("div",null,e.createElement(t,{onClick:this.onOpenFullyCustomized,type:"primary"},"Fully Customized Footer")," "," ",e.createElement(o,{title:"Welcome to Alibaba.com",footer:e.createElement(t,{warning:!0,type:"primary",onClick:this.onCloseFullyCustomized},"Customize footer"),visible:this.state.fullyCustomizedVisible,onOk:this.onCloseFullyCustomized,onCancel:this.onCloseFullyCustomized,onClose:this.onCloseFullyCustomized},"Start your business here by searching a popular product"),e.createElement(t,{onClick:this.onOpenTextCustomized,type:"primary"},"Text Only Customize"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:this.state.textCustomizedVisible,onOk:this.onCloseTextCustomized,onCancel:this.onCloseTextCustomized,onClose:this.onCloseTextCustomized,okProps:{children:"Custom OK",className:"asdf"},cancelProps:{children:"Custom Cancel"}},"Start your business here by searching a popular product"))}}const c=a.div``;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(r,null);return e.createElement(c,null,t)}});class m extends e.Component{constructor(){super(...arguments),this.state={visible:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onClose=()=>{this.setState({visible:!1})}}render(){return e.createElement("div",null,e.createElement(t,{onClick:this.onOpen,type:"primary"},"Open dialog"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:this.state.visible,autoFocus:!0,onOk:this.onClose.bind(this,"okClick"),onCancel:this.onClose.bind(this,"cancelClick"),onClose:this.onClose,cancelProps:{"aria-label":"cancel"},okProps:{"aria-label":"ok"}},e.createElement("p",{tabIndex:"0"}," ","Start your business here by searching a popular product")))}}const h=a.div``;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(m,null);return e.createElement(h,null,t)}});class p extends e.Component{constructor(){super(...arguments),this.state={visible:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onClose=()=>{this.setState({visible:!1})}}render(){const{visible:n}=this.state;return e.createElement("div",null,e.createElement(t,{onClick:this.onOpen,type:"primary"},"Open dialog"),e.createElement(o,{title:"Fixed Height",visible:n,height:"400px",onOk:this.onClose,onCancel:this.onClose,onClose:this.onClose},"Small Content in a fixed size Dialog"))}}const C=a.div``;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(p,null);return e.createElement(C,null,t)}});class b extends e.Component{constructor(){super(...arguments),this.state={visible:!1,loading:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onOk=()=>new Promise((e=>{this.setState({loading:!0}),setTimeout(e,2e3)})).then((()=>{n.success("Deleted successfully!"),this.setState({loading:!1,visible:!1})})),this.onClose=()=>{this.setState({visible:!1})}}render(){const n={loading:this.state.loading};return e.createElement("div",null,e.createElement(t,{onClick:this.onOpen,type:"primary"},"Dialog Promise"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:this.state.visible,okProps:n,onOk:this.onOk,onCancel:this.onClose,onClose:this.onClose},"Start your business here by searching a popular product"))}}const y=()=>{o.confirm({title:"Confirm",content:"Do you confirm deleting this content?",onOk:()=>new Promise((e=>{setTimeout(e,2e3)})).then((()=>{n.success("Deleted successfully!")}))})};const k=a.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const o=e.createElement("div",null,e.createElement(b,null),e.createElement(t,{type:"primary",warning:!0,onClick:y},"Quick Confirm Promise"));return e.createElement(k,null,o)}});class v extends e.Component{constructor(){super(...arguments),this.state={visible:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onClose=e=>{console.log(e),this.setState({visible:!1})}}render(){return e.createElement("div",null,e.createElement(t,{onClick:this.onOpen,type:"primary"},"Open dialog"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:this.state.visible,onOk:this.onClose.bind(this,"okClick"),onCancel:this.onClose.bind(this,"cancelClick"),onClose:this.onClose},e.createElement("div",{style:{width:"520px",height:"252px",background:"#D9D9D9"}})))}}const f=a.div``;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(v,null);return e.createElement(f,null,t)}});var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:n=>{const[l,s]=e.useState(!1);return e.createElement("div",null,e.createElement(t,{onClick:()=>{s(!0)},type:"primary"},"Open dialog"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:l,onOk:()=>{s(!1)},onCancel:()=>{s(!1)},onClose:()=>{s(!1)},footer:[e.createElement(t,{type:"primary",loading:!0},"custom ok"),e.createElement(t,null,"custom cancle")]},"Start your business here by searching a popular product"))}});const _=()=>{o.alert({title:"Alert",content:"alert content alert content...",okProps:{children:"Custom OK"},onOk:()=>console.log("ok")})},x=()=>{o.confirm({title:"Confirm",content:"confirm content confirm content...",onOk:()=>console.log("ok"),onCancel:()=>console.log("cancel"),closeable:!1})},z=()=>{const n=o.show({title:"Custom",content:"custom content custom content...",footer:e.createElement(t,{warning:!0,type:"primary",onClick:()=>n.hide()},"Custom button"),closeable:!1})},A=()=>{o.confirm({title:"Confirm",content:'set icon as "warning" ',messageProps:{type:"warning"},onOk:()=>console.log("ok"),onCancel:()=>console.log("cancel"),closeable:!1})};const F=a.div``;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const o=e.createElement(l,{locale:{Dialog:{ok:"OK",cancel:"Cancel"}}},e.createElement("span",null,e.createElement(t,{onClick:_},"Alert"),"  ",e.createElement(t,{onClick:x},"Confirm"),"  ",e.createElement(t,{onClick:z},"Show"),"  ",e.createElement(t,{onClick:A},"Custom Icon")));return e.createElement(F,null,o)}});class P extends e.Component{constructor(){super(...arguments),this.state={visible:!1,footerActions:["ok","cancel"],footerAlign:"right",loading:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onClose=()=>{this.setState({visible:!1})},this.toggleFooterActions=e=>{this.setState({footerActions:e.split(",")})},this.toggleFooterAlign=e=>{this.setState({footerAlign:e})},this.toggleOkLoader=e=>{this.setState({loading:e})}}render(){const{visible:n,footerActions:l,footerAlign:i,loading:a}=this.state,r={loading:a};return e.createElement("div",null,e.createElement(t,{onClick:this.onOpen,type:"primary"},"Open dialog"),e.createElement(o,{title:"Customize buttons of footer",visible:n,footerActions:l,footerAlign:i,onOk:this.onClose,onCancel:this.onClose,onClose:this.onClose,okProps:r},e.createElement("div",{className:"demo-content"},e.createElement(s.Group,{className:"demo-radio-group",shape:"button",value:l.join(","),onChange:this.toggleFooterActions},e.createElement(s,{value:"ok,cancel"},"ok is left"),e.createElement(s,{value:"cancel,ok"},"ok is right"),e.createElement(s,{value:"ok"},"only ok"),e.createElement(s,{value:"cancel"},"only cancel")),e.createElement(s.Group,{className:"demo-radio-group",shape:"button",value:i,onChange:this.toggleFooterAlign},e.createElement(s,{value:"left"},"left"),e.createElement(s,{value:"center"},"center"),e.createElement(s,{value:"right"},"right")),e.createElement(s.Group,{className:"demo-radio-group",shape:"button",value:a,onChange:this.toggleOkLoader},e.createElement(s,{value:!1},"Loading Off"),e.createElement(s,{value:!0},"Loading On")))))}}const T=a.div`
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
`;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(P,null);return e.createElement(T,null,t)}});const D=e.createElement("p",null,"Start your business here by searching a popular product"),j=[e.createElement("p",{key:"0"},"Start your business here by searching a popular product"),e.createElement("p",{key:"1"},"Start your business here by searching a popular product"),e.createElement("p",{key:"2"},"Start your business here by searching a popular product"),e.createElement("p",{key:"3"},"Start your business here by searching a popular product")];class W extends e.Component{constructor(){super(...arguments),this.state={visible:!1,short:!0,shouldUpdatePosition:!0},this.onOpen=()=>{this.setState({visible:!0,short:!0})},this.onClose=()=>{this.setState({visible:!1})},this.toggleShouldUpdatePosition=()=>{this.setState({shouldUpdatePosition:!this.state.shouldUpdatePosition})},this.modifyContent=()=>{this.setState({short:!this.state.short})}}render(){const{visible:n,short:l,shouldUpdatePosition:s}=this.state;return e.createElement("div",null,e.createElement("div",{style:{display:"block",marginBottom:"10px"}},"Whether to update the dialog position when the dialog height changes:"),e.createElement(i,{style:{display:"block",marginBottom:"10px"},checked:s,onChange:this.toggleShouldUpdatePosition}),e.createElement(t,{onClick:this.onOpen,type:"primary"},"Open dialog"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:n,onOk:this.onClose.bind(this,"okClick"),onCancel:this.onClose.bind(this,"cancelClick"),onClose:this.onClose,shouldUpdatePosition:s},e.createElement(t,{type:"primary",onClick:this.modifyContent},"Change content"),l?D:j))}}const B=a.div``;var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(W,null);return e.createElement(B,null,t)}});const V=new Array(30).fill(e.createElement("p",null,"Start your business here by searching a popular product"));class N extends e.Component{constructor(){super(...arguments),this.state={visible:!1,isFullScreen:!1,closeOnMaskClick:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onClose=()=>{this.setState({visible:!1})},this.toggleIsFullScreen=()=>{this.setState({isFullScreen:!this.state.isFullScreen})},this.toggleCloseOnMaskClick=()=>{this.setState({closeOnMaskClick:!this.state.closeOnMaskClick})}}render(){const{visible:n,isFullScreen:l,closeOnMaskClick:s}=this.state;return e.createElement("div",null,e.createElement("div",{style:{display:"block",marginBottom:"10px"}},"When the height of the dialog exceeds the viewport height of the browser, whether to show the scroll bar:"),e.createElement(i,{style:{display:"block",marginBottom:"10px"},checked:l,onChange:this.toggleIsFullScreen}),e.createElement("div",{style:{display:"block",marginBottom:"10px"}},"Close on mask click:"),e.createElement(i,{style:{display:"block",marginBottom:"10px"},checked:s,onChange:this.toggleCloseOnMaskClick}),e.createElement(t,{onClick:this.onOpen,type:"primary"},"Open dialog"),e.createElement(o,{title:"Welcome to Alibaba.com",visible:n,isFullScreen:l,closeMode:s?["close","esc","mask"]:["close","esc"],onOk:this.onClose,onCancel:this.onClose,onClose:this.onClose},V))}}const I=a.div``;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(N,null);return e.createElement(I,null,t)}});const G=()=>e.createElement("div",null,e.createElement(t,{onClick:()=>{o.confirm({title:"Dialog.confirm 命令式弹窗"})}},"使用 Dialog.confirm")),K=o.withContext((({contextDialog:o})=>e.createElement("div",null,e.createElement(t,{onClick:()=>{o.confirm({title:"Dialog.withContext 命令式弹窗"})}},"使用 Dialog.withContext"))));class q extends e.Component{render(){return e.createElement("div",null,e.createElement(l,{locale:{Dialog:{close:"关闭（根组件文案）",ok:"确认（根组件文案）",cancel:"取消（根组件文案）"}}},e.createElement(l,{locale:{Dialog:{close:"关闭（局部文案）",ok:"确认（局部文案）",cancel:"取消（局部文案）"}}},e.createElement("div",null,e.createElement(G,null),e.createElement(K,null)))))}}const Q=a.div``;var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(q,null);return e.createElement(Q,null,t)}});const R={};R["_customize-footer"]=u,R._accessibility=d,R["_fixed-height"]=g,R._promise=E,R._basic=S,R["_footer-button-margin"]=O,R._quick=w,R._footer=M,R["_should-update-position"]=U,R["_large-content"]=L,R._withContext=H;export default R;
