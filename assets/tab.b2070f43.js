var e=Object.assign;import{r as t,au as n,B as a,b as l,l as o,J as c,ad as r}from"./index.db891132.js";import{q as i}from"./styled-components.browser.esm.2d3384e1.js";const m=i.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(n,null,t.createElement(n.Item,{title:"Home",key:"1"},"Home content"),t.createElement(n.Item,{title:"Documentation",key:"2"},"Doc content"),t.createElement(n.Item,{title:"Help",key:"3"},"Help Content"));return t.createElement(m,null,e)}});const p=[{tab:"Mail",key:1,closeable:!1},{tab:"Message",key:2,closeable:!0},{tab:"Setting",key:3,closeable:!0},{tab:"Unread",key:4,closeable:!0}];class d extends t.Component{constructor(e){super(e),this.onClose=e=>{this.remove(e)},this.onChange=e=>{this.setState({activeKey:e})},this.addTabpane=()=>{this.setState((e=>{const{panes:t}=e;return t.push({tab:"new tab",key:Math.random(),closeable:!0}),{panes:t}}))},this.state={panes:p,activeKey:p[0].key}}remove(e){let t=this.state.activeKey;const n=[];this.state.panes.forEach((t=>{t.key!=e&&n.push(t)})),e==t&&(t=n[0].key),this.setState({panes:n,activeKey:t})}render(){const e=this.state;return t.createElement("div",null,t.createElement(a,{onClick:this.addTabpane,type:"primary"},t.createElement(l,{type:"add"})," New Tab"),t.createElement(n,{shape:"wrapped",activeKey:e.activeKey,onChange:this.onChange,onClose:this.onClose,className:"custom-tab"},e.panes.map((e=>t.createElement(n.Item,{title:e.tab,key:e.key,closeable:e.closeable},e.tab," content")))))}}const b=i.div`
  .custom-tab {
    margin-top: 14px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(d,null);return t.createElement(b,null,e)}});function E({title:e,desc:n,img:a}){return t.createElement("div",{className:"custom-tab-item"},t.createElement("div",{className:"tab-title"},t.createElement("img",{className:"tab-img",src:a}),e),t.createElement("div",{className:"tab-desc"},n))}const y=[{key:"e-checking",title:"Alipay",desc:"The fee to be paid is $15",img:"https://img.alicdn.com/tfs/TB1wra0otTfau8jSZFwXXX1mVXa-80-80.png"},{key:"brand-card",title:"Bank Card",desc:"The fee to be paid is $17",img:"https://img.alicdn.com/tfs/TB1nKE5s79l0K4jSZFKXXXFjpXa-67-65.png"}];const g=i.div`
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
`;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const a=t.createElement(n,{shape:"wrapped",tabRender:(n,a)=>t.createElement(E,e({key:n},a))},y.map((a=>t.createElement(n.Item,e(e({key:a.key},a),{tabStyle:{height:"60px"}}),a.desc))));return t.createElement(g,null,a)}});const h=[{tab:"Todo Tasks",key:0},{tab:"Finished Tasks",key:1},{tab:"Unread Messages",key:2},{tab:"Past Messages",key:3},{tab:"All Messages",key:4}],f={border:"1px solid #DCDEE3",padding:"20px"};const x=i.div`
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
`;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",{className:"fusion-demo"},t.createElement("div",{className:"demo-item-title"},"Customize with contentStyle or contentClassName"),t.createElement(n,{shape:"wrapped",contentStyle:f},h.map((e=>t.createElement(n.Item,{title:e.tab,key:e.key},e.tab)))),t.createElement("div",{className:"demo-item-title"},"Setting className and style in Tab.Item"),t.createElement(n,{shape:"wrapped",navStyle:{background:"#DEE8FF"}},h.map((e=>t.createElement(n.Item,{title:e.tab,key:e.key,className:"custom-tab-item",style:{background:"#FFF"}},e.tab)))),t.createElement("div",{className:"demo-item-title"},"Tabs with same width"),t.createElement(n,{shape:"capsule"},h.map((e=>t.createElement(n.Item,{title:e.tab,key:e.key,className:"justify-tabs-tab"},e.tab)))));return t.createElement(x,null,e)}});function T(e){console.log(e)}const _=t.createElement(a,{type:"primary",onClick:function(){console.log("hello world")}},"Hello world");const I=i.div`
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
`;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",{className:"fusion-demo"},t.createElement("div",{className:"demo-item-title"},"Extra in Horizontal"),t.createElement(n,{shape:"wrapped",onChange:T,extra:_},t.createElement(n.Item,{title:"Tab 1",key:"1"},"Tab 1 Content"),t.createElement(n.Item,{title:"Tab 2",key:"2"},"Tab 2 Content"),t.createElement(n.Item,{title:"Tab 3",key:"3"},"Tab 3 Content")),t.createElement("div",{className:"demo-item-title"},"Extra in Vertical"),t.createElement(n,{shape:"wrapped",tabPosition:"left",onChange:T,extra:_,contentClassName:"custom-tab-content"},t.createElement(n.Item,{title:"Tab 1",key:"1"},"Tab 1 Content"),t.createElement(n.Item,{title:"Tab 2",key:"2"},"Tab 2 Content"),t.createElement(n.Item,{title:"Tab 3",key:"3"},"Tab 3 Content")));return t.createElement(I,null,e)}});const C=[{tab:"Home",key:1},{tab:"Documnet",key:2},{tab:"Setting",key:3},{tab:"Help",key:4},{tab:"Admin",key:5},{tab:"More 1",key:6},{tab:"More 2",key:7},{tab:"More 3",key:8},{tab:"More 4",key:9},{tab:"More 5",key:10},{tab:"More 6",key:11},{tab:"More 7",key:12},{tab:"More 8",key:13},{tab:"More 9",key:14},{tab:"More 10",key:15},{tab:"More 11",key:16}];function z(e){console.log(e)}const M=i.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",{className:"fusion-demo",style:{maxWidth:"520px"}},t.createElement(n,{excessMode:"dropdown"},C.map((e=>t.createElement(n.Item,{key:e.key,title:e.tab,onClick:z},e.tab," content, content, content")))),t.createElement("br",null),t.createElement(n,{excessMode:"slide"},C.map((e=>t.createElement(n.Item,{key:e.key,title:e.tab,onClick:z},e.tab," content, content, content")))));return t.createElement(M,null,e)}});const N=i.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(n,{disableKeyboard:!0},t.createElement(n.Item,{title:"Home",key:"1"},"Home content"),t.createElement(n.Item,{title:"Documentation",key:"2"},"Doc content"),t.createElement(n.Item,{title:"Help",key:"3"},"Help Content"));return t.createElement(N,null,e)}});class D extends t.Component{constructor(e){super(e),this.onKeyDown=e=>{const{keyCode:t}=e;t>36&&t<41&&e.stopPropagation()},this.onBlur=e=>{this.setState({editable:!1,tabTitle:e.target.value})},this.onDblClick=()=>{this.setState({editable:!0})},this.state={tabTitle:e.defaultTitle,editable:!1}}componentWillReceiveProps(e){e.defaultTitle!==this.state.tabTitle&&this.setState({tabTitle:e.defaultTitle})}render(){const{tabTitle:e,editable:n}=this.state;return n?t.createElement(o,{defaultValue:e,onKeyDown:this.onKeyDown,onBlur:this.onBlur}):t.createElement("span",{onDoubleClick:this.onDblClick},e)}}const H=(e,{title:n})=>t.createElement("div",{key:e,className:"editable-tab-wrapper"},t.createElement(D,{defaultTitle:n}));const O=i.div`
  .editable-tab-wrapper {
    padding: 10px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(n,{defaultActiveKey:"1",tabRender:H},t.createElement(n.Item,{title:"Double Click To Edit Me",key:"1"},"Editable tab"),t.createElement(n.Item,{title:"Double Click To Edit Me",key:"2"},"Editable tab"));return t.createElement(O,null,e)}});const P=i.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(n,null,t.createElement(n.Item,{title:"Tab 1",disabled:!0,key:"1"},"Tab 1 content"),t.createElement(n.Item,{title:"Tab 2",key:"2"},"Tab 2 content"),t.createElement(n.Item,{title:"Tab 3",key:"3"},"Tab 3 content"));return t.createElement(P,null,e)}});function A(e){console.log(e)}const X=()=>{const[e,a]=t.useState("pure");return t.createElement("div",null,"shape:"," ",t.createElement(c.Group,{shape:"button",value:e,onChange:a},t.createElement(c,{value:"pure"},"pure"),t.createElement(c,{value:"wrapped"},"wrapped"),t.createElement(c,{value:"text"},"text"),t.createElement(c,{value:"capsule"},"capsule")),t.createElement("br",null),t.createElement("br",null),t.createElement(n,{shape:e,onChange:A},t.createElement(n.Item,{key:"home",title:"Home"},"This is home page"),t.createElement(n.Item,{key:"document",title:"Document"},"This is document page"),t.createElement(n.Item,{key:"api",title:"API"},"This is api page"),t.createElement(n.Item,{key:"repo",title:"Repo"},"This is repo link")))};const B=i.div``;var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(X,null);return t.createElement(B,null,e)}});function $(e){console.log(e)}const L=i.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(n,{onChange:$,shape:"wrapped"},t.createElement(n.Item,{title:"Tab 1",key:"1"},t.createElement(n,{shape:"wrapped"},t.createElement(n.Item,{title:"1-1",key:"11"},"1-1"),t.createElement(n.Item,{title:"1-2",key:"12"},"1-2"),t.createElement(n.Item,{title:"1-3",key:"13"},"1-3"))),t.createElement(n.Item,{title:"Tab 2",key:"2"},t.createElement(n,{shape:"pure"},t.createElement(n.Item,{title:"2-1",key:"21"},"2-1"),t.createElement(n.Item,{title:"2-2",key:"22"},"2-2"),t.createElement(n.Item,{title:"3-3",key:"23"},"2-3"))),t.createElement(n.Item,{title:"Tab 3",key:"3"},t.createElement(n,{shape:"capsule"},t.createElement(n.Item,{title:"3-1",key:"31"},"3-1"),t.createElement(n.Item,{title:"3-2",key:"32"},"3-2"),t.createElement(n.Item,{title:"3-3",key:"33"},"3-3"))),t.createElement(n.Item,{title:"Tab 4",key:"4"},t.createElement(n,{shape:"text"},t.createElement(n.Item,{title:"4-1",key:"41"},"4-1"),t.createElement(n.Item,{title:"4-2",key:"42"},"4-2"),t.createElement(n.Item,{title:"4-3",key:"43"},"4-3"))));return t.createElement(L,null,e)}});const V=[{tab:"Home",key:0,content:"This is home page"},{tab:"Document",key:1,content:"This is document page"},{tab:"API",key:2,content:"This is api page"}];const G=i.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement("div",null,"use lazyLoad=false to render all tab items"),t.createElement(n,{lazyLoad:!1},V.map((e=>t.createElement(n.Item,{key:e.key,title:e.tab},e.content)))),t.createElement("br",null),t.createElement("div",null,"Unmount other items while switch tab"),t.createElement(n,{unmountInactiveTabs:!0},V.map((e=>t.createElement(n.Item,{key:e.key,title:e.tab},e.content)))));return t.createElement(G,null,e)}});const Z=()=>{const[e,a]=t.useState("top");return t.createElement("div",null,"Position:"," ",t.createElement(c.Group,{shape:"button",value:e,onChange:a},t.createElement(c,{value:"top"},"top"),t.createElement(c,{value:"bottom"},"bottom"),t.createElement(c,{value:"left"},"left"),t.createElement(c,{value:"right"},"right")),t.createElement("br",null),t.createElement("br",null),t.createElement(n,{tabPosition:e,shape:"wrapped",contentClassName:"custom-tab-content"},t.createElement(n.Item,{title:"Tab 1",key:"1"},"Tab 1 Content"),t.createElement(n.Item,{title:"Tab 2",key:"2"},"Tab 2 Content"),t.createElement(n.Item,{title:"Tab 3",key:"3"},"Tab 3 Content")))};const q=i.div`
  .custom-tab-content {
    min-height: 50px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(Z,null);return t.createElement(q,null,e)}});const Q=[{tab:"Home",key:0,content:"This is home page"},{tab:"Document",key:1,content:"This is document page"},{tab:"API",key:2,content:"This is api page"}];function Y(e){console.log("change",e)}function ee(e){console.log("click",e)}function te(e,t){console.log("enter",t.target,e)}function ne(e,t){console.log("leave",t.target,e)}const ae=i.div`
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
`;var le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",{className:"fusion-demo"},t.createElement("div",{className:"demo-item-title"},"Click to change"),t.createElement(n,{triggerType:"click",onChange:Y},Q.map((e=>t.createElement(n.Item,{key:e.key,title:e.tab,onClick:ee},e.content)))),t.createElement("div",{className:"demo-item-title"},"Hover to change"),t.createElement(n,{triggerType:"hover",onChange:Y},Q.map((e=>t.createElement(n.Item,{key:e.key,title:e.tab,onClick:ee,onMouseEnter:te,onMouseLeave:ne},e.content)))));return t.createElement(ae,null,e)}});const{Row:oe,Col:ce}=r,re=function(e){const t=[];for(let n=1;n<15;n++)t.push({tab:`tab ${n}`,key:n,content:`tab ${n} content`});return t}();const ie=i.div`
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
`;var me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",{className:"custom-wrapper"},t.createElement(oe,{className:"custom-row"},t.createElement(ce,{fixedSpan:"12",className:"custom-col-sidebar"},"Sidebar"),t.createElement(ce,{className:"custom-col-content"},t.createElement(n,null,re.map((e=>t.createElement(n.Item,{key:e.key,title:e.tab},e.content)))))));return t.createElement(ie,null,e)}});const se=[{tab:"Home",key:"home",content:"This is home page"},{tab:"Document",key:"doc",content:"This is document page"},{tab:"API",key:"api",content:"This is api page"}];const pe=i.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement(n,{size:"small"},se.map((e=>t.createElement(n.Item,{key:e.key,title:e.tab},e.content)))),t.createElement("br",null),t.createElement(n,{size:"small",shape:"wrapped"},se.map((e=>t.createElement(n.Item,{key:e.key,title:e.tab},e.content)))),t.createElement("br",null),t.createElement(n,{size:"small",shape:"text"},se.map((e=>t.createElement(n.Item,{key:e.key,title:e.tab},e.content)))),t.createElement("br",null),t.createElement(n,{size:"small",shape:"capsule"},se.map((e=>t.createElement(n.Item,{key:e.key,title:e.tab},e.content)))));return t.createElement(pe,null,e)}});const be={};be._basic=s,be._closable=u,be["_custom-tab"]=k,be["_custom-style"]=v,be._extra=S,be["_excess-mode"]=w,be["_disable-keyboard"]=j,be["_editable-tab"]=K,be._disabled=F,be._shape=R,be._nested=U,be["_lazy-load"]=W,be._position=J,be["_trigger-type"]=le,be["_tab-in-grid"]=me,be._size=de;export default be;
