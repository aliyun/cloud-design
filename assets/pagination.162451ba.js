import{r as e,T as t}from"./index.9e4b8ce1.js";import{q as n}from"./styled-components.browser.esm.19571eea.js";const l=n.div`
  .next-pagination + .next-pagination {
    margin-top: 20px;
  }
`;var r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement("h3",null,"normal"),e.createElement(t,{defaultCurrent:2}),e.createElement("h3",null,"arrow-only"),e.createElement(t,{defaultCurrent:2,shape:"arrow-only"}),e.createElement("h3",null,"arrow-prev-only"),e.createElement(t,{defaultCurrent:2,shape:"arrow-prev-only"}),e.createElement("h3",null,"no-border"),e.createElement(t,{defaultCurrent:2,shape:"no-border",type:"simple"}));return e.createElement(l,null,n)}});const a=`${window.location.href}#/{page}`;const o=n.div``;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement(t,{defaultCurrent:2,link:a});return e.createElement(o,null,n)}});const c=n.div`
  .custom-pagination {
    display: inline-block;
    margin-left: 10px;
  }
`;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement(t,{className:"custom-pagination",total:50,totalRender:e=>`Total: ${e}`});return e.createElement(c,null,n)}});const s=e=>console.log(e);const d=n.div``;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement("h3",null,"To hidden per page size selector"),e.createElement(t,{pageSizeSelector:!1}),e.createElement("h3",null,"Type per page size selector of is dropdown，and as for the tail of the entire component"),e.createElement(t,{pageSizeSelector:"dropdown",pageSizePosition:"end",onPageSizeChange:s}),e.createElement("h3",null,"Filter type per page size selector, and use floating layout"),e.createElement(t,{pageSizeSelector:"filter",onPageSizeChange:s,useFloatLayout:!0}));return e.createElement(d,null,n)}});const p=n.div``;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement("h3",null,"normal"),e.createElement(t,{defaultCurrent:2}),e.createElement("h3",null,"simple"),e.createElement(t,{defaultCurrent:2,type:"simple"}),e.createElement("h3",null,"mini"),e.createElement(t,{defaultCurrent:2,type:"mini"}));return e.createElement(p,null,n)}});const h=n.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement("h3",null,"small"),e.createElement(t,{defaultCurrent:2,size:"small"}),e.createElement("h3",null,"medium"),e.createElement(t,{defaultCurrent:2,size:"medium"}),e.createElement("h3",null,"large"),e.createElement(t,{defaultCurrent:2,size:"large"}));return e.createElement(h,null,n)}});const f=function(e){console.log(e)};const _=n.div``;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement(t,{defaultCurrent:2,onChange:f});return e.createElement(_,null,n)}});const z=e=>console.log(e),v={height:"300px",padding:0,width:"100%"},b={overflow:"auto",position:"relative",width:"100%",height:"200px",border:"1px solid black"},y={height:"200px",display:"flex","justify-content":"center","align-items":"center"},C={display:"flex","justify-content":"space-between"},w={align:"bl tl"};const x=n.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement("h3",null,"default align - 'tl bl'"),e.createElement(t,{pageSizeSelector:"dropdown",total:"10",pageSizePosition:"start",onPageSizeChange:z}),e.createElement("h3",null,"custom align - 'bl tl'"),e.createElement(t,{pageSizeSelector:"dropdown",total:"10",pageSizePosition:"start",onPageSizeChange:z,popupProps:w}),e.createElement("h3",null,'Inside parent with "overlflow: auto"'),e.createElement("div",{style:v},e.createElement("div",{style:b},e.createElement("div",{style:y},"scroll down to see the example"),e.createElement("div",{style:C},e.createElement("div",null,e.createElement("h3",null,"default align - 'tl bl'"),e.createElement(t,{pageSizeSelector:"dropdown",total:"10",pageSizePosition:"start",onPageSizeChange:z})),e.createElement("div",null,e.createElement("h3",null,"custom align - 'bl tl'"),e.createElement(t,{pageSizeSelector:"dropdown",total:"10",pageSizePosition:"start",onPageSizeChange:z,popupProps:w}))))));return e.createElement(x,null,n)}});class P extends e.Component{constructor(e){super(e),this.state={current:2},this.handleChange=this.handleChange.bind(this)}handleChange(e){this.setState({current:e})}render(){return e.createElement(t,{current:this.state.current,onChange:this.handleChange,shape:"arrow-only"})}}const T=n.div``;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(P,null);return e.createElement(T,null,t)}});const O={};O._shape=r,O._link=i,O["_show-total"]=u,O["_page-size"]=m,O._type=g,O._size=E,O._uncontrol=S,O["_dropdown-direction"]=j,O._control=M;export default O;
