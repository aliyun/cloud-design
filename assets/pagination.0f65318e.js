import{r as e,ao as t}from"./index.db891132.js";import{q as n}from"./styled-components.browser.esm.2d3384e1.js";const l=e=>console.log(e),r={height:"300px",padding:0,width:"100%"},a={overflow:"auto",position:"relative",width:"100%",height:"200px",border:"1px solid black"},o={height:"200px",display:"flex","justify-content":"center","align-items":"center"},i={display:"flex","justify-content":"space-between"},c={align:"bl tl"};const u=n.div``;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement("h3",null,"default align - 'tl bl'"),e.createElement(t,{pageSizeSelector:"dropdown",total:"10",pageSizePosition:"start",onPageSizeChange:l}),e.createElement("h3",null,"custom align - 'bl tl'"),e.createElement(t,{pageSizeSelector:"dropdown",total:"10",pageSizePosition:"start",onPageSizeChange:l,popupProps:c}),e.createElement("h3",null,'Inside parent with "overlflow: auto"'),e.createElement("div",{style:r},e.createElement("div",{style:a},e.createElement("div",{style:o},"scroll down to see the example"),e.createElement("div",{style:i},e.createElement("div",null,e.createElement("h3",null,"default align - 'tl bl'"),e.createElement(t,{pageSizeSelector:"dropdown",total:"10",pageSizePosition:"start",onPageSizeChange:l})),e.createElement("div",null,e.createElement("h3",null,"custom align - 'bl tl'"),e.createElement(t,{pageSizeSelector:"dropdown",total:"10",pageSizePosition:"start",onPageSizeChange:l,popupProps:c}))))));return e.createElement(u,null,n)}});class m extends e.Component{constructor(e){super(e),this.state={current:2},this.handleChange=this.handleChange.bind(this)}handleChange(e){this.setState({current:e})}render(){return e.createElement(t,{current:this.state.current,onChange:this.handleChange})}}const d=n.div``;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(m,null);return e.createElement(d,null,t)}});const g=n.div`
  .next-pagination + .next-pagination {
    margin-top: 20px;
  }
`;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement("h3",null,"normal"),e.createElement(t,{defaultCurrent:2}),e.createElement("h3",null,"arrow-only"),e.createElement(t,{defaultCurrent:2,shape:"arrow-only"}),e.createElement("h3",null,"arrow-prev-only"),e.createElement(t,{defaultCurrent:2,shape:"arrow-prev-only"}),e.createElement("h3",null,"no-border"),e.createElement(t,{defaultCurrent:2,shape:"no-border",type:"simple"}));return e.createElement(g,null,n)}});class E extends e.Component{constructor(){super(...arguments),this.state={pageSize:20},this.handleChange=e=>{this.setState({pageSize:e})}}render(){return e.createElement("div",null,e.createElement("h3",null,"Set page size"),e.createElement(t,{pageSize:20}),e.createElement("h3",null,"Hide page size selector"),e.createElement(t,{pageSizeSelector:!1}),e.createElement("h3",null,"Set page size selector to 'dropdown'，and show it in the end"),e.createElement(t,{pageSizeSelector:"dropdown",pageSizePosition:"end"}),e.createElement("h3",null,"Use pageSizeList to specify the number of records per page."),e.createElement(t,{pageSize:this.state.pageSize,total:100,pageSizeSelector:"filter",pageSizeList:[5,10,20],onPageSizeChange:this.handleChange}))}}const f=n.div``;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(E,null);return e.createElement(f,null,t)}});const _=`${window.location.href}#/{page}`;const z=n.div``;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement(t,{defaultCurrent:2,link:_});return e.createElement(z,null,n)}});const b=n.div``;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement("h3",null,"Hide jump forcibly"),e.createElement(t,{total:500,showJump:!1}));return e.createElement(b,null,n)}});const C=n.div`
  .custom-pagination {
    display: inline-block;
    margin-left: 10px;
  }
`;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement(t,{className:"custom-pagination",total:50,totalRender:e=>`Total: ${e}`});return e.createElement(C,null,n)}});const j=n.div``;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement("h3",null,"normal"),e.createElement(t,{defaultCurrent:2}),e.createElement("h3",null,"simple"),e.createElement(t,{defaultCurrent:2,type:"simple"}),e.createElement("h3",null,"mini"),e.createElement(t,{defaultCurrent:2,type:"mini"}));return e.createElement(j,null,n)}});const P=function(e){console.log(e)};const T=n.div``;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement(t,{defaultCurrent:2,onChange:P});return e.createElement(T,null,n)}});const O=n.div``;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement("h3",null,"small"),e.createElement(t,{defaultCurrent:2,size:"small"}),e.createElement("h3",null,"medium"),e.createElement(t,{defaultCurrent:2,size:"medium"}),e.createElement("h3",null,"large"),e.createElement(t,{defaultCurrent:2,size:"large"}));return e.createElement(O,null,n)}});const H=n.div``;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement(t,{total:500});return e.createElement(H,null,n)}});const $={};$["_dropdown-direction"]=s,$._control=p,$._shape=h,$["_page-size"]=S,$._link=v,$["_show-jump"]=y,$["_show-total"]=w,$._type=x,$._uncontrol=M,$._size=k,$._more=L;export default $;