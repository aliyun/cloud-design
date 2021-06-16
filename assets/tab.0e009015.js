var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,s=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&l(e,n,t[n]);if(o)for(var n of o(t))r.call(t,n)&&l(e,n,t[n]);return e};import{r as c,a4 as i,B as p,d as m,f as x,a5 as d,a6 as b}from"./index.16a07d60.js";import{q as u}from"./styled-components.browser.esm.d6068967.js";const y=u.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement(i,null,c.exports.createElement(i.Item,{title:"Home",key:"1"},"Home content"),c.exports.createElement(i.Item,{title:"Documentation",key:"2"},"Doc content"),c.exports.createElement(i.Item,{title:"Help",key:"3"},"Help Content"));return c.exports.createElement(y,null,e)}});const g=[{tab:"Mail",key:1,closeable:!1},{tab:"Message",key:2,closeable:!0},{tab:"Setting",key:3,closeable:!0},{tab:"Unread",key:4,closeable:!0}];class k extends c.exports.Component{constructor(e){super(e),this.onClose=e=>{this.remove(e)},this.onChange=e=>{this.setState({activeKey:e})},this.addTabpane=()=>{this.setState((e=>{const{panes:t}=e;return t.push({tab:"new tab",key:Math.random(),closeable:!0}),{panes:t}}))},this.state={panes:g,activeKey:g[0].key}}remove(e){let t=this.state.activeKey;const n=[];this.state.panes.forEach((t=>{t.key!=e&&n.push(t)})),e==t&&(t=n[0].key),this.setState({panes:n,activeKey:t})}render(){const e=this.state;return c.exports.createElement("div",null,c.exports.createElement(p,{onClick:this.addTabpane,type:"primary"},c.exports.createElement(m,{type:"add"})," New Tab"),c.exports.createElement(i,{shape:"wrapped",activeKey:e.activeKey,onChange:this.onChange,onClose:this.onClose,className:"custom-tab"},e.panes.map((e=>c.exports.createElement(i.Item,{title:e.tab,key:e.key,closeable:e.closeable},e.tab," content")))))}}const h=u.div`
  .custom-tab {
    margin-top: 14px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement(k,null);return c.exports.createElement(h,null,e)}});const v=[{tab:"Todo Tasks",key:0},{tab:"Finished Tasks",key:1},{tab:"Unread Messages",key:2},{tab:"Past Messages",key:3},{tab:"All Messages",key:4}],T={border:"1px solid #DCDEE3",padding:"20px"};const _=u.div`
  .fusion-demo .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 14px 0;
  }

  .custom-content {
    padding: 15px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }

  .custom-tab-item {
    margin-right: -1px !important;
  }

  .justify-tabs-tab {
    width: 140px;
    text-align: center;
  }
`;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement("div",{className:"fusion-demo"},c.exports.createElement("div",{className:"demo-item-title"},"Customize with contentStyle or contentClassName"),c.exports.createElement(i,{shape:"wrapped",contentStyle:T},v.map((e=>c.exports.createElement(i.Item,{title:e.tab,key:e.key},e.tab)))),c.exports.createElement("div",{className:"demo-item-title"},"Setting className and style in Tab.Item"),c.exports.createElement(i,{shape:"wrapped",navStyle:{background:"#DEE8FF"}},v.map((e=>c.exports.createElement(i.Item,{title:e.tab,key:e.key,className:"custom-tab-item",style:{background:"#FFF"}},e.tab)))),c.exports.createElement("div",{className:"demo-item-title"},"Tabs with same width"),c.exports.createElement(i,{shape:"capsule"},v.map((e=>c.exports.createElement(i.Item,{title:e.tab,key:e.key,className:"justify-tabs-tab"},e.tab)))));return c.exports.createElement(_,null,e)}});function S({title:e,desc:t,img:n}){return c.exports.createElement("div",{className:"custom-tab-item"},c.exports.createElement("div",{className:"tab-title"},c.exports.createElement("img",{className:"tab-img",src:n}),e),c.exports.createElement("div",{className:"tab-desc"},t))}const C=[{key:"e-checking",title:"Alipay",desc:"The fee to be paid is $15",img:"https://img.alicdn.com/tfs/TB1wra0otTfau8jSZFwXXX1mVXa-80-80.png"},{key:"brand-card",title:"Bank Card",desc:"The fee to be paid is $17",img:"https://img.alicdn.com/tfs/TB1nKE5s79l0K4jSZFKXXXFjpXa-67-65.png"}];const z=u.div`
  .custom-tab-item {
    padding: 10px;
  }

  .tab-title {
    display: flex;
    align-items: center;
  }
  .tab-img {
    margin-right: 8px;
    width: 20px;
  }
  .tab-desc {
    margin: 10px 0 0 0;
    font-size: 12px;
  }
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement(i,{shape:"wrapped",tabRender:(e,t)=>c.exports.createElement(S,s({key:e},t))},C.map((e=>{return c.exports.createElement(i.Item,(o=s({key:e.key},e),t(o,n({tabStyle:{height:"60px"}}))),e.desc);var o})));return c.exports.createElement(z,null,e)}});const M=u.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement(i,{disableKeyboard:!0},c.exports.createElement(i.Item,{title:"Home",key:"1"},"Home content"),c.exports.createElement(i.Item,{title:"Documentation",key:"2"},"Doc content"),c.exports.createElement(i.Item,{title:"Help",key:"3"},"Help Content"));return c.exports.createElement(M,null,e)}});const N=u.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement(i,null,c.exports.createElement(i.Item,{title:"Tab 1",disabled:!0,key:"1"},"Tab 1 content"),c.exports.createElement(i.Item,{title:"Tab 2",key:"2"},"Tab 2 content"),c.exports.createElement(i.Item,{title:"Tab 3",key:"3"},"Tab 3 content"));return c.exports.createElement(N,null,e)}});class D extends c.exports.Component{constructor(e){super(e),this.onKeyDown=e=>{const{keyCode:t}=e;t>36&&t<41&&e.stopPropagation()},this.onBlur=e=>{this.setState({editable:!1,tabTitle:e.target.value})},this.onDblClick=()=>{this.setState({editable:!0})},this.state={tabTitle:e.defaultTitle,editable:!1}}componentWillReceiveProps(e){e.defaultTitle!==this.state.tabTitle&&this.setState({tabTitle:e.defaultTitle})}render(){const{tabTitle:e,editable:t}=this.state;return t?c.exports.createElement(x,{defaultValue:e,onKeyDown:this.onKeyDown,onBlur:this.onBlur}):c.exports.createElement("span",{onDoubleClick:this.onDblClick},e)}}const H=(e,{title:t})=>c.exports.createElement("div",{key:e,className:"editable-tab-wrapper"},c.exports.createElement(D,{defaultTitle:t}));const P=u.div`
  .editable-tab-wrapper {
    padding: 10px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement(i,{defaultActiveKey:"1",tabRender:H},c.exports.createElement(i.Item,{title:"Double Click To Edit Me",key:"1"},"Editable tab"),c.exports.createElement(i.Item,{title:"Double Click To Edit Me",key:"2"},"Editable tab"));return c.exports.createElement(P,null,e)}});const F=[{tab:"Home",key:1},{tab:"Documnet",key:2},{tab:"Setting",key:3},{tab:"Help",key:4},{tab:"Admin",key:5},{tab:"More 1",key:6},{tab:"More 2",key:7},{tab:"More 3",key:8},{tab:"More 4",key:9},{tab:"More 5",key:10},{tab:"More 6",key:11},{tab:"More 7",key:12},{tab:"More 8",key:13},{tab:"More 9",key:14},{tab:"More 10",key:15},{tab:"More 11",key:16}];function A(e){console.log(e)}const X=u.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement("div",{className:"fusion-demo",style:{maxWidth:"520px"}},c.exports.createElement(i,{excessMode:"dropdown"},F.map((e=>c.exports.createElement(i.Item,{key:e.key,title:e.tab,onClick:A},e.tab," content, content, content")))),c.exports.createElement("br",null),c.exports.createElement(i,{excessMode:"slide"},F.map((e=>c.exports.createElement(i.Item,{key:e.key,title:e.tab,onClick:A},e.tab," content, content, content")))));return c.exports.createElement(X,null,e)}});function R(e){console.log(e)}const $=c.exports.createElement(p,{type:"primary",onClick:function(){console.log("hello world")}},"Hello world");const L=u.div`
  .fusion-demo .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 14px 0;
  }

  .custom-tab-content {
    min-height: 150px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement("div",{className:"fusion-demo"},c.exports.createElement("div",{className:"demo-item-title"},"Extra in Horizontal"),c.exports.createElement(i,{shape:"wrapped",onChange:R,extra:$},c.exports.createElement(i.Item,{title:"Tab 1",key:"1"},"Tab 1 Content"),c.exports.createElement(i.Item,{title:"Tab 2",key:"2"},"Tab 2 Content"),c.exports.createElement(i.Item,{title:"Tab 3",key:"3"},"Tab 3 Content")),c.exports.createElement("div",{className:"demo-item-title"},"Extra in Vertical"),c.exports.createElement(i,{shape:"wrapped",tabPosition:"left",onChange:R,extra:$,contentClassName:"custom-tab-content"},c.exports.createElement(i.Item,{title:"Tab 1",key:"1"},"Tab 1 Content"),c.exports.createElement(i.Item,{title:"Tab 2",key:"2"},"Tab 2 Content"),c.exports.createElement(i.Item,{title:"Tab 3",key:"3"},"Tab 3 Content")));return c.exports.createElement(L,null,e)}});const V=[{tab:"Home",key:0,content:"This is home page"},{tab:"Document",key:1,content:"This is document page"},{tab:"API",key:2,content:"This is api page"}];const G=u.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement("div",null,c.exports.createElement("div",null,"use lazyLoad=false to render all tab items"),c.exports.createElement(i,{lazyLoad:!1},V.map((e=>c.exports.createElement(i.Item,{key:e.key,title:e.tab},e.content)))),c.exports.createElement("br",null),c.exports.createElement("div",null,"Unmount other items while switch tab"),c.exports.createElement(i,{unmountInactiveTabs:!0},V.map((e=>c.exports.createElement(i.Item,{key:e.key,title:e.tab},e.content)))));return c.exports.createElement(G,null,e)}});function Z(e){console.log(e)}const q=u.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement(i,{onChange:Z,shape:"wrapped"},c.exports.createElement(i.Item,{title:"Tab 1",key:"1"},c.exports.createElement(i,{shape:"wrapped"},c.exports.createElement(i.Item,{title:"1-1",key:"11"},"1-1"),c.exports.createElement(i.Item,{title:"1-2",key:"12"},"1-2"),c.exports.createElement(i.Item,{title:"1-3",key:"13"},"1-3"))),c.exports.createElement(i.Item,{title:"Tab 2",key:"2"},c.exports.createElement(i,{shape:"pure"},c.exports.createElement(i.Item,{title:"2-1",key:"21"},"2-1"),c.exports.createElement(i.Item,{title:"2-2",key:"22"},"2-2"),c.exports.createElement(i.Item,{title:"3-3",key:"23"},"2-3"))),c.exports.createElement(i.Item,{title:"Tab 3",key:"3"},c.exports.createElement(i,{shape:"capsule"},c.exports.createElement(i.Item,{title:"3-1",key:"31"},"3-1"),c.exports.createElement(i.Item,{title:"3-2",key:"32"},"3-2"),c.exports.createElement(i.Item,{title:"3-3",key:"33"},"3-3"))),c.exports.createElement(i.Item,{title:"Tab 4",key:"4"},c.exports.createElement(i,{shape:"text"},c.exports.createElement(i.Item,{title:"4-1",key:"41"},"4-1"),c.exports.createElement(i.Item,{title:"4-2",key:"42"},"4-2"),c.exports.createElement(i.Item,{title:"4-3",key:"43"},"4-3"))));return c.exports.createElement(q,null,e)}});const Q=()=>{const[e,t]=c.exports.useState("top");return c.exports.createElement("div",null,"Position:"," ",c.exports.createElement(d.Group,{shape:"button",value:e,onChange:t},c.exports.createElement(d,{value:"top"},"top"),c.exports.createElement(d,{value:"bottom"},"bottom"),c.exports.createElement(d,{value:"left"},"left"),c.exports.createElement(d,{value:"right"},"right")),c.exports.createElement("br",null),c.exports.createElement("br",null),c.exports.createElement(i,{tabPosition:e,shape:"wrapped",contentClassName:"custom-tab-content"},c.exports.createElement(i.Item,{title:"Tab 1",key:"1"},"Tab 1 Content"),c.exports.createElement(i.Item,{title:"Tab 2",key:"2"},"Tab 2 Content"),c.exports.createElement(i.Item,{title:"Tab 3",key:"3"},"Tab 3 Content")))};const Y=u.div`
  .custom-tab-content {
    min-height: 50px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement(Q,null);return c.exports.createElement(Y,null,e)}});function te(e){console.log(e)}const ne=()=>{const[e,t]=c.exports.useState("pure");return c.exports.createElement("div",null,"shape:"," ",c.exports.createElement(d.Group,{shape:"button",value:e,onChange:t},c.exports.createElement(d,{value:"pure"},"pure"),c.exports.createElement(d,{value:"wrapped"},"wrapped"),c.exports.createElement(d,{value:"text"},"text"),c.exports.createElement(d,{value:"capsule"},"capsule")),c.exports.createElement("br",null),c.exports.createElement("br",null),c.exports.createElement(i,{shape:e,onChange:te},c.exports.createElement(i.Item,{key:"home",title:"Home"},"This is home page"),c.exports.createElement(i.Item,{key:"document",title:"Document"},"This is document page"),c.exports.createElement(i.Item,{key:"api",title:"API"},"This is api page"),c.exports.createElement(i.Item,{key:"repo",title:"Repo"},"This is repo link")))};const oe=u.div``;var ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement(ne,null);return c.exports.createElement(oe,null,e)}});const re=[{tab:"Home",key:"home",content:"This is home page"},{tab:"Document",key:"doc",content:"This is document page"},{tab:"API",key:"api",content:"This is api page"}];const le=u.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement("div",null,c.exports.createElement(i,{size:"small"},re.map((e=>c.exports.createElement(i.Item,{key:e.key,title:e.tab},e.content)))),c.exports.createElement("br",null),c.exports.createElement(i,{size:"small",shape:"wrapped"},re.map((e=>c.exports.createElement(i.Item,{key:e.key,title:e.tab},e.content)))),c.exports.createElement("br",null),c.exports.createElement(i,{size:"small",shape:"text"},re.map((e=>c.exports.createElement(i.Item,{key:e.key,title:e.tab},e.content)))),c.exports.createElement("br",null),c.exports.createElement(i,{size:"small",shape:"capsule"},re.map((e=>c.exports.createElement(i.Item,{key:e.key,title:e.tab},e.content)))));return c.exports.createElement(le,null,e)}});const{Row:ce,Col:ie}=b,pe=function(e){const t=[];for(let n=1;n<15;n++)t.push({tab:`tab ${n}`,key:n,content:`tab ${n} content`});return t}();const me=u.div`
  .custom-row {
    border: 1px solid #ccc;
  }

  .custom-col-sidebar {
    border-right: 1px solid #ccc;
    height: 130px;
    line-height: 130px;
    text-align: center;
  }

  .custom-col-content {
    overflow: hidden;
  }
`;var xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement("div",{className:"custom-wrapper"},c.exports.createElement(ce,{className:"custom-row"},c.exports.createElement(ie,{fixedSpan:"12",className:"custom-col-sidebar"},"Sidebar"),c.exports.createElement(ie,{className:"custom-col-content"},c.exports.createElement(i,null,pe.map((e=>c.exports.createElement(i.Item,{key:e.key,title:e.tab},e.content)))))));return c.exports.createElement(me,null,e)}});const de=[{tab:"Home",key:0,content:"This is home page"},{tab:"Document",key:1,content:"This is document page"},{tab:"API",key:2,content:"This is api page"}];function be(e){console.log("change",e)}function ue(e){console.log("click",e)}function ye(e,t){console.log("enter",t.target,e)}function Ee(e,t){console.log("leave",t.target,e)}const ge=u.div`
  .fusion-demo .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 14px 0;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement("div",{className:"fusion-demo"},c.exports.createElement("div",{className:"demo-item-title"},"Click to change"),c.exports.createElement(i,{triggerType:"click",onChange:be},de.map((e=>c.exports.createElement(i.Item,{key:e.key,title:e.tab,onClick:ue},e.content)))),c.exports.createElement("div",{className:"demo-item-title"},"Hover to change"),c.exports.createElement(i,{triggerType:"hover",onChange:be},de.map((e=>c.exports.createElement(i.Item,{key:e.key,title:e.tab,onClick:ue,onMouseEnter:ye,onMouseLeave:Ee},e.content)))));return c.exports.createElement(ge,null,e)}});const he={};he._basic=E,he._closable=f,he["_custom-style"]=I,he["_custom-tab"]=w,he["_disable-keyboard"]=j,he._disabled=O,he["_editable-tab"]=K,he["_excess-mode"]=B,he._extra=U,he["_lazy-load"]=W,he._nested=J,he._position=ee,he._shape=ae,he._size=se,he["_tab-in-grid"]=xe,he["_trigger-type"]=ke;export default he;
