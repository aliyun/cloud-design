import{o as e,_ as t,d as l,e as r,f as o,r as n,b as a,g as s,p as i,C as c,z as p,k as h,c as u,B as d,E as m,t as b}from"./index.4543a34a.js";import{q as g}from"./styled-components.browser.esm.09d3b94c.js";var f,y,C,v,w=e.pickOthers,k=(y=f=function(e){function i(){return l(this,i),r(this,e.apply(this,arguments))}return t(i,e),i.prototype.renderHeader=function(){var e,t=this.props,l=t.prefix,r=t.title,a=t.headerStyle,s=this.renderCloseLink(),i=o(((e={})[l+"drawer-header"]=!0,e[l+"drawer-no-title"]=!r,e));return n.createElement("div",{className:i,style:a,role:"heading","aria-level":"1"},r,s)},i.prototype.renderBody=function(){var e=this.props,t=e.prefix,l=e.children,r=e.bodyStyle;return l?n.createElement("div",{className:t+"drawer-body",style:r},l):null},i.prototype.renderCloseLink=function(){var e=this.props,t=e.prefix,l=e.closeable,r=e.onClose,o=e.locale;return l?n.createElement("a",{role:"button","aria-label":o.close,className:t+"drawer-close",onClick:r},n.createElement(a,{className:t+"drawer-close-icon",type:"close"})):null},i.prototype.render=function(){var e,t=this.props,l=t.prefix,r=t.className,a=t.closeable,c=t.placement,p=t.role,h=t.rtl,u=w(Object.keys(i.propTypes),this.props),d=o(((e={})[l+"drawer"]=!0,e[l+"drawer-"+c]=!0,e[l+"closeable"]=a,e[r]=!!r,e)),m={role:p,"aria-modal":"true"},b=this.renderHeader(),g=this.renderBody();return n.createElement("div",s({},m,{className:d},u,{dir:h?"rtl":void 0}),n.createElement("div",{style:{height:"100%",overflow:"auto"}},b,g))},i}(n.Component),f.propTypes={prefix:i.string,className:i.string,closeable:i.bool,role:i.string,title:i.node,placement:i.oneOf(["top","right","bottom","left"]),rtl:i.bool,onClose:i.func,locale:i.object,headerStyle:i.object,bodyStyle:i.object,afterClose:i.func,beforeOpen:i.func,beforeClose:i.func,cache:i.bool,shouldUpdatePosition:i.bool},f.defaultProps={prefix:"next-",closeable:!0,role:"dialog",onClose:function(){},locale:c.Drawer},y);k.displayName="Inner";var E=p.Popup,S=e.pickOthers,O=(v=C=function(e){function o(){var t,n;l(this,o);for(var a=arguments.length,s=Array(a),i=0;i<a;i++)s[i]=arguments[i];return t=n=r(this,e.call.apply(e,[this].concat(s))),n.getAlign=function(e){var t=void 0;switch(e){case"top":t="tl tl";break;case"bottom":t="bl bl";break;case"left":t="tl tl";break;case"right":default:t="tr tr"}return t},n.getAnimation=function(e){if("animation"in n.props)return n.props.animation;var t=void 0;switch(e){case"top":t={in:"slideInDown",out:"slideOutUp"};break;case"bottom":t={in:"slideInUp",out:"slideOutDown"};break;case"left":t={in:"slideInLeft",out:"slideOutLeft"};break;case"right":default:t={in:"slideInRight",out:"slideOutRight"}}return t},n.getOverlayRef=function(e){n.overlay=e},n.mapcloseableToConfig=function(e){return["esc","close","mask"].reduce((function(t,l){var r=l.charAt(0).toUpperCase()+l.substr(1),o="boolean"==typeof e?e:e.split(",").indexOf(l)>-1;return"esc"===l||"mask"===l?t["canCloseBy"+r]=o:t["canCloseBy"+r+"Click"]=o,t}),{})},n.handleVisibleChange=function(e,t,l){var r=n.props,o=r.onClose,a=r.onVisibleChange;!1===e&&o&&o(t,l),a&&a(e,t,l)},r(n,t)}return t(o,e),o.prototype.renderInner=function(e){var t=this.props,l=t.prefix,r=t.className,a=t.children,i=t.title,c=t.onClose,p=t.locale,h=t.headerStyle,u=t.bodyStyle,d=t.placement,m=t.rtl,b=S(Object.keys(o.propTypes),this.props);return n.createElement(k,s({prefix:l,title:i,className:r,locale:p,closeable:e,rtl:m,headerStyle:h,bodyStyle:u,placement:d,onClose:c.bind(this,"closeClick")},b),a)},o.prototype.render=function(){var e=this.props,t=e.prefix,l=e.style,r=e.width,o=e.height,a=e.trigger,i=e.triggerType,c=(e.animation,e.hasMask),p=e.visible,u=e.placement,d=(e.onClose,e.onVisibleChange,e.closeable),m=e.closeMode,b=e.rtl,g=e.popupContainer,f=h(e,["prefix","style","width","height","trigger","triggerType","animation","hasMask","visible","placement","onClose","onVisibleChange","closeable","closeMode","rtl","popupContainer"]),y=s({width:r,height:o},l),C="closeMode"in this.props?Array.isArray(m)?m.join(","):m:d,v=this.mapcloseableToConfig(C),w=v.canCloseByCloseClick,k=h(v,["canCloseByCloseClick"]),S=s({prefix:t,visible:p,trigger:a,triggerType:i,onVisibleChange:this.handleVisibleChange,animation:this.getAnimation(u),hasMask:c,align:this.getAlign(u)},k,{canCloseByOutSideClick:!1,disableScroll:!0,ref:this.getOverlayRef,rtl:b,target:"viewport",style:y,needAdjust:!1,container:g}),O=this.renderInner(w);return n.createElement(E,s({},S,f),O)},o}(n.Component),C.displayName="Drawer",C.propTypes=s({},E.propTypes||{},{prefix:i.string,pure:i.bool,rtl:i.bool,trigger:i.element,triggerType:i.oneOfType([i.string,i.array]),width:i.oneOfType([i.number,i.string]),height:i.oneOfType([i.number,i.string]),closeable:i.oneOfType([i.string,i.bool]),closeMode:i.oneOfType([i.arrayOf(i.oneOf(["close","mask","esc"])),i.oneOf(["close","mask","esc"])]),onClose:i.func,placement:i.oneOf(["top","right","bottom","left"]),title:i.node,headerStyle:i.object,bodyStyle:i.object,visible:i.bool,hasMask:i.bool,onVisibleChange:i.func,animation:i.oneOfType([i.object,i.bool]),locale:i.object,popupContainer:i.any}),C.defaultProps={prefix:"next-",triggerType:"click",trigger:null,closeable:!0,onClose:function(){},hasMask:!0,placement:"right",locale:c.Drawer},v);O.displayName="Drawer",O.Inner=k;var x=u.config(O);class T extends n.Component{constructor(){super(...arguments),this.state={visible:!1,childrenDrawer:!1},this.showDrawer=()=>{this.setState({visible:!0})},this.onClose=()=>{this.setState({visible:!1})},this.showChildrenDrawer=()=>{this.setState({childrenDrawer:!0})},this.onChildrenDrawerClose=()=>{this.setState({childrenDrawer:!1})}}render(){return n.createElement("div",null,n.createElement(d,{type:"primary",onClick:this.showDrawer},"Open drawer"),n.createElement(x,{title:"Multi-level drawer",width:520,closeMode:"mask",onClose:this.onClose,visible:this.state.visible},n.createElement(d,{type:"primary",onClick:this.showChildrenDrawer},"Two-level drawer"),n.createElement("div",{style:{height:800,marginTop:40}},"很长的内容"),n.createElement("div",{style:{marginBottom:40}},"底部的内容"),n.createElement(x,{title:"Two-level Drawer",width:320,closeMode:"mask",onClose:this.onChildrenDrawerClose,visible:this.state.childrenDrawer},"This is two-level drawer"),n.createElement("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},n.createElement(d,{style:{marginRight:8},onClick:this.onClose},"Cancel"),n.createElement(d,{onClick:this.onClose,type:"primary"},"Submit"))))}}const _=g.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(T,null);return n.createElement(_,null,e)}});class D extends n.Component{constructor(){super(...arguments),this.state={visible:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onClose=(e,t)=>{console.log("onClose: ",e,t),this.setState({visible:!1})}}render(){return n.createElement("div",null,n.createElement(d,{type:"primary",onClick:this.onOpen}," ","open"," "),n.createElement(x,{title:"标题",placement:"right",visible:this.state.visible,onClose:this.onClose},"Start your business here by searching a popular product"))}}const M=g.div``;var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(D,null);return n.createElement(M,null,e)}});class A extends n.Component{constructor(){super(...arguments),this.state={visible:!1,placement:"right"},this.onOpen=()=>{this.setState({visible:!0})},this.onClose=e=>{this.setState({visible:!1})},this.onPlacementChange=e=>{this.setState({placement:e})}}render(){return n.createElement("div",null,n.createElement(m.Group,{dataSource:["right","bottom","left","top"],defaultValue:"right",onChange:this.onPlacementChange}),n.createElement("br",null),n.createElement("br",null),n.createElement(d,{type:"primary",onClick:this.onOpen}," ","open"," "),n.createElement(x,{title:"标题",visible:this.state.visible,placement:this.state.placement,onClose:this.onClose},"Start your business here by searching a popular product"))}}const B=g.div``;var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(A,null);return n.createElement(B,null,e)}});const I=b.Option,P=function(e){console.log(e)},R=function(e){console.log(/onblur/,e)},z=function(e,t){console.log(e,t)};class H extends n.Component{constructor(){super(...arguments),this.state={placement:"right"},this.onPlacementChange=e=>{this.setState({placement:e})}}render(){const e={placement:this.state.placement,closeMode:"mask",bodyStyle:{padding:0}};return n.createElement("div",null,n.createElement(m.Group,{dataSource:["right","bottom","left","top"],defaultValue:"right",onChange:this.onPlacementChange}),n.createElement("br",null),n.createElement("br",null),n.createElement(b,{id:"basic-demo",popupComponent:x,popupProps:e,autoWidth:!1,onChange:P,onBlur:R,onToggleHighlightItem:z,defaultValue:"jack","aria-label":"name is",hasClear:!0},n.createElement(I,{value:"jack"},"Jack"),n.createElement(I,{value:"frank"},"Frank"),n.createElement(I,{value:"hugo"},"Hugo")))}}const L=g.div``;var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(H,null);return n.createElement(L,null,e)}});const G={};G._double=j,G._basic=N,G._placement=V,G._select=U;export default G;
