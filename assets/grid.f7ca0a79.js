import{r as e,a6 as t,a2 as l,C as n}from"./index.54491fbe.js";import{q as c}from"./styled-components.browser.esm.6105e56a.js";const{Row:a,Col:o}=t;const r=c.div`
  .breakpoint-demo .demo-title {
    margin-left: 20px;
  }

  .breakpoint-demo .next-row {
    margin: 10px 0;
  }

  .breakpoint-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"breakpoint-demo"},e.createElement("div",{className:"demo-title"},"Resize browser to see how each column changes"),e.createElement(a,null,e.createElement(o,{xs:12,s:8,m:6},"Col"),e.createElement(o,{xs:6,s:8,m:6},"Col"),e.createElement(o,{xs:6,s:8,m:12},"Col")));return e.createElement(r,null,t)}});const{Row:i,Col:s}=t;const d=c.div`
  .basic-demo ul {
    list-style: none;
    padding: 0;
  }

  .basic-demo .demo-title {
    margin-left: 20px;
  }

  .basic-demo .next-row {
    margin: 10px 0;
  }

  .basic-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"basic-demo"},e.createElement("div",{className:"demo-title"},"Rendered as `ul` and `li`"),e.createElement(i,{component:"ul"},e.createElement(s,{span:"12",component:"li"},"col-12"),e.createElement(s,{span:"12",component:"li"},"col-12")));return e.createElement(d,null,t)}});const{Row:E,Col:x}=t;class u extends e.Component{constructor(e){super(e),this.state={gutter:0},this.handleChange=this.handleChange.bind(this)}handleChange(e){this.setState({gutter:e})}render(){const{gutter:t}=this.state;return e.createElement("div",{className:"gutter-demo"},e.createElement(l,{value:t,onChange:this.handleChange,marks:4,step:4,max:16,hasTip:!1,style:{width:"400px",marginLeft:"20px",marginTop:"30px"}}),e.createElement(E,{gutter:t},e.createElement(x,{span:"6"},e.createElement("div",{className:"demo-col-inset"},"col-6")),e.createElement(x,{span:"6"},e.createElement("div",{className:"demo-col-inset"},"col-6")),e.createElement(x,{span:"6"},e.createElement("div",{className:"demo-col-inset"},"col-6")),e.createElement(x,{span:"6"},e.createElement("div",{className:"demo-col-inset"},"col-6"))))}}const f=c.div`
  .gutter-demo .demo-title {
    margin-left: 20px;
  }

  .gutter-demo .next-row {
    margin: 10px 0;
  }

  .gutter-demo .demo-col-inset {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(u,null);return e.createElement(f,null,t)}});const{Row:h,Col:b}=t;const v=c.div`
  .basic-demo .demo-title {
    margin-left: 20px;
  }

  .basic-demo .next-row {
    margin: 10px 0;
  }

  .basic-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"basic-demo"},e.createElement("div",{className:"demo-title"},"One"),e.createElement(h,null,e.createElement(b,{span:"24"},"col-24")),e.createElement("div",{className:"demo-title"},"Two"),e.createElement(h,null,e.createElement(b,{span:"12"},"col-12"),e.createElement(b,{span:"12"},"col-12")),e.createElement("div",{className:"demo-title"},"Three"),e.createElement(h,null,e.createElement(b,{span:"8"},"col-8"),e.createElement(b,{span:"8"},"col-8"),e.createElement(b,{span:"8"},"col-8")),e.createElement("div",{className:"demo-title"},"Four"),e.createElement(h,null,e.createElement(b,{span:"6"},"col-6"),e.createElement(b,{span:"6"},"col-6"),e.createElement(b,{span:"6"},"col-6"),e.createElement(b,{span:"6"},"col-6")),e.createElement("div",{className:"demo-title"},"Five"),e.createElement(h,null,e.createElement(b,{span:"1p5"},"col-1p5"),e.createElement(b,{span:"1p5"},"col-1p5"),e.createElement(b,{span:"1p5"},"col-1p5"),e.createElement(b,{span:"1p5"},"col-1p5"),e.createElement(b,{span:"1p5"},"col-1p5")),e.createElement("div",{className:"demo-title"},"Six"),e.createElement(h,null,e.createElement(b,{span:"4"},"col-4"),e.createElement(b,{span:"4"},"col-4"),e.createElement(b,{span:"4"},"col-4"),e.createElement(b,{span:"4"},"col-4"),e.createElement(b,{span:"4"},"col-4"),e.createElement(b,{span:"4"},"col-4")));return e.createElement(v,null,t)}});const{Row:N,Col:w}=t;const y=c.div`
  .hidden-demo .demo-title {
    margin-left: 20px;
  }

  .hidden-demo .next-row {
    margin: 10px 0;
  }

  .hidden-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"hidden-demo"},e.createElement("div",{className:"demo-title"},"Hide columns under all breakpoints, resize browser to see if the second column is hidden or shown"),e.createElement(N,null,e.createElement(w,{span:"8"},"col-8"),e.createElement(w,{span:"16",hidden:!0},"col-16")),e.createElement("div",{className:"demo-title"},"Hide columns under a breakpoint such as xs, resize browser to see if the second column is hidden or shown"),e.createElement(N,null,e.createElement(w,{span:"8"},"col-8"),e.createElement(w,{span:"16",hidden:"xs"},"col-16")),e.createElement("div",{className:"demo-title"},"Hide columns under some breakpoints such as xs and s, resize browser to see if the second column is hidden or shown"),e.createElement(N,null,e.createElement(w,{span:"8"},"col-8"),e.createElement(w,{span:"16",hidden:["xs","s"]},"col-16")));return e.createElement(y,null,t)}});const{Row:j,Col:z}=t;const C=c.div`
  .mixin-demo .demo-title {
    margin-left: 20px;
  }

  .mixin-demo .next-row {
    margin: 10px 0;
  }

  .mixin-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"mixin-demo"},e.createElement("div",{className:"demo-title"},"Two-column layout, left column fixed, right column adaptive"),e.createElement(j,null,e.createElement(z,{fixedSpan:"16"},"col-fixed-16"),e.createElement(z,null,"col")),e.createElement("div",{className:"demo-title"},"Two-column layout, right column fixed, left column adaptive"),e.createElement(j,null,e.createElement(z,null,"col"),e.createElement(z,{fixedSpan:"16"},"col-fixed-16")),e.createElement("div",{className:"demo-title"},"Three-column layout, left column and right column fixed, middle column adaptive"),e.createElement(j,null,e.createElement(z,{fixedSpan:"8"},"col-fixed-8"),e.createElement(z,null,"col"),e.createElement(z,{fixedSpan:"8"},"col-fixed-8")));return e.createElement(C,null,t)}});const{Row:T,Col:O}=t;const R=c.div`
  .align-demo .demo-title {
    margin-left: 20px;
  }

  .align-demo .next-row {
    margin: 10px 0;
  }

  .align-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    line-height: 30px;
    text-align: center;
  }
`;var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"align-demo"},e.createElement("div",{className:"demo-title"},"top"),e.createElement(T,{align:"top"},e.createElement(O,{span:"8",style:{height:"100px",lineHeight:"100px"}},"col-8"),e.createElement(O,{span:"8",style:{height:"50px",lineHeight:"50px"}},"col-8"),e.createElement(O,{span:"8",style:{height:"150px",lineHeight:"150px"}},"col-8")),e.createElement("div",{className:"demo-title"},"center"),e.createElement(T,{align:"center"},e.createElement(O,{span:"8",style:{height:"100px",lineHeight:"100px"}},"col-8"),e.createElement(O,{span:"8",style:{height:"50px",lineHeight:"50px"}},"col-8"),e.createElement(O,{span:"8",style:{height:"150px",lineHeight:"150px"}},"col-8")),e.createElement("div",{className:"demo-title"},"bottom"),e.createElement(T,{align:"bottom"},e.createElement(O,{span:"8",style:{height:"100px",lineHeight:"100px"}},"col-8"),e.createElement(O,{span:"8",style:{height:"50px",lineHeight:"50px"}},"col-8"),e.createElement(O,{span:"8",style:{height:"150px",lineHeight:"150px"}},"col-8")),e.createElement("div",{className:"demo-title"},"baseline"),e.createElement(T,{align:"baseline"},e.createElement(O,{span:"8",style:{height:"100px",paddingTop:"20px",fontSize:"30px"}},"col-8"),e.createElement(O,{span:"8",style:{height:"50px",paddingTop:"20px",fontSize:"20px"}},"col-8"),e.createElement(O,{span:"8",style:{height:"150px",paddingTop:"20px",fontSize:"40px"}},"col-8")),e.createElement("div",{className:"demo-title"},"stretch"),e.createElement(T,{align:"stretch",style:{height:"150px"}},e.createElement(O,{span:"8"},"col-8"),e.createElement(O,{span:"8"},"col-8"),e.createElement(O,{span:"8"},"col-8")),e.createElement("div",{className:"demo-title"},"override"),e.createElement(T,{align:"top"},e.createElement(O,{align:"bottom",span:"8",style:{height:"100px",lineHeight:"100px"}},"col-8"),e.createElement(O,{span:"8",style:{height:"50px",lineHeight:"50px"}},"col-8"),e.createElement(O,{span:"8",style:{height:"150px",lineHeight:"150px"}},"col-8")));return e.createElement(R,null,t)}});const{Row:M,Col:W}=t;const L=c.div`
  .nest-demo .demo-title {
    margin-left: 20px;
  }

  .nest-demo .demo-row {
    margin: 10px 0;
  }

  .nest-demo .demo-col-inset {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"nest-demo"},e.createElement(M,{className:"demo-row"},e.createElement(W,{span:"10"},e.createElement(M,null,e.createElement(W,{span:"6"},e.createElement("div",{className:"demo-col-inset"},"col-10-6")),e.createElement(W,{span:"18"},e.createElement("div",{className:"demo-col-inset"},"col-10-18")))),e.createElement(W,{span:"14"},e.createElement(M,null,e.createElement(W,{span:"18"},e.createElement("div",{className:"demo-col-inset"},"col-14-18")),e.createElement(W,{span:"6"},e.createElement("div",{className:"demo-col-inset"},"col-14-6"))))));return e.createElement(L,null,t)}});const{Row:A,Col:F}=t;const q=c.div`
  .offset-fixed-demo .demo-title {
    margin-left: 20px;
  }

  .offset-fixed-demo .next-row {
    margin: 10px 0;
  }

  .offset-fixed-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"offset-fixed-demo"},e.createElement("div",{className:"demo-title"},"Normal offset, set offset from 1 to 30"),e.createElement(A,null,e.createElement(F,{fixedOffset:"0"},"offset-fixed-0")),e.createElement(A,null,e.createElement(F,{fixedOffset:"4"},"offset-fixed-4")),e.createElement(A,null,e.createElement(F,{fixedOffset:"8"},"offset-fixed-8")),e.createElement(A,null,e.createElement(F,{fixedOffset:"12"},"offset-fixed-12")),e.createElement("div",{className:"demo-title"},"Adaptive offset"),e.createElement(A,null,e.createElement(F,null,"col"),e.createElement(F,{fixedOffset:"12"},"offset-fixed-12")));return e.createElement(q,null,t)}});const{Row:$,Col:B}=t;const G=c.div`
  .justify-demo .demo-title {
    margin-left: 20px;
  }

  .justify-demo .next-row {
    margin: 10px 0;
  }

  .justify-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"justify-demo"},e.createElement("div",{className:"demo-title"},"start"),e.createElement($,{justify:"start"},e.createElement(B,{span:"4"},"col-4"),e.createElement(B,{span:"4"},"col-4"),e.createElement(B,{span:"4"},"col-4")),e.createElement("div",{className:"demo-title"},"center"),e.createElement($,{justify:"center"},e.createElement(B,{span:"4"},"col-4"),e.createElement(B,{span:"4"},"col-4"),e.createElement(B,{span:"4"},"col-4")),e.createElement("div",{className:"demo-title"},"end"),e.createElement($,{justify:"end"},e.createElement(B,{span:"4"},"col-4"),e.createElement(B,{span:"4"},"col-4"),e.createElement(B,{span:"4"},"col-4")),e.createElement("div",{className:"demo-title"},"space-between"),e.createElement($,{justify:"space-between"},e.createElement(B,{span:"4"},"col-4"),e.createElement(B,{span:"4"},"col-4"),e.createElement(B,{span:"4"},"col-4")),e.createElement("div",{className:"demo-title"},"space-around"),e.createElement($,{justify:"space-around"},e.createElement(B,{span:"4"},"col-4"),e.createElement(B,{span:"4"},"col-4"),e.createElement(B,{span:"4"},"col-4")));return e.createElement(G,null,t)}});const{Row:J,Col:K}=t,P={xxs:320,xs:480,s:720,m:990,l:1200,xl:1500};class Q extends e.Component{componentDidMount(){const e=n.findDOMNode(this.refs.fixCol);this.handleResize=()=>{let t="";const l=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=Object.keys(P);for(let e=0;e<n.length;e++){const c=P[n[e]],a=P[n[e+1]];if(l>c&&(l<a||!a)){t=n[e];break}}t&&(e.innerHTML=`${P[t]}px`)},window.addEventListener("resize",this.handleResize),this.handleResize()}componentWillUnmount(){window.removeListener("resize",this.handleResize)}render(){return e.createElement("div",{className:"type-demo"},e.createElement("div",{className:"demo-title"},"Default"),e.createElement(J,null,e.createElement(K,null,"100%")),e.createElement("div",{className:"demo-title"},"Set fixed to true"),e.createElement(J,{ref:"fixedRow",fixed:!0},e.createElement(K,{ref:"fixCol"})),e.createElement("div",{className:"demo-title"},"Set fixedWidth to 's'"),e.createElement(J,{fixedWidth:"s"},e.createElement(K,null,"720px")))}}const V=c.div`
  .type-demo .demo-title {
    margin-left: 20px;
  }

  .type-demo .next-row {
    margin: 10px 0;
  }

  .type-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(Q,null);return e.createElement(V,null,t)}});const{Row:Y,Col:Z}=t;const ee=c.div`
  .offset-demo .demo-title {
    margin-left: 20px;
  }

  .offset-demo .next-row {
    margin: 10px 0;
  }

  .offset-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;var te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"offset-demo"},e.createElement("div",{className:"demo-title"},"Normal offset, set offset from 1 to 24"),e.createElement(Y,null,e.createElement(Z,{offset:"0"},"offset-0")),e.createElement(Y,null,e.createElement(Z,{offset:"4"},"offset-4")),e.createElement(Y,null,e.createElement(Z,{offset:"8"},"offset-8")),e.createElement(Y,null,e.createElement(Z,{offset:"12"},"offset-12")),e.createElement("div",{className:"demo-title"},"Adaptive offset"),e.createElement(Y,null,e.createElement(Z,null,"col"),e.createElement(Z,{offset:"12"},"offset-12")));return e.createElement(ee,null,t)}});const{Row:le,Col:ne}=t;const ce=c.div`
  .wrap-demo .demo-title {
    margin-left: 20px;
  }

  .wrap-demo .next-row {
    margin: 10px 0;
  }

  .wrap-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`;var ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"wrap-demo"},e.createElement("div",{className:"demo-title"},"No wrap"),e.createElement(le,null,e.createElement(ne,{span:"6"},"col-6"),e.createElement(ne,{span:"6"},"col-6"),e.createElement(ne,{span:"6"},"col-6"),e.createElement(ne,{span:"8"},"col-8")),e.createElement("div",{className:"demo-title"},"Wrap"),e.createElement(le,{wrap:!0},e.createElement(ne,{span:"6"},"col-6"),e.createElement(ne,{span:"6"},"col-6"),e.createElement(ne,{span:"6"},"col-6"),e.createElement(ne,{span:"8"},"col-8")));return e.createElement(ce,null,t)}});const oe={};oe._breakpoint=m,oe["_custom-elem-type"]=p,oe._gutter=g,oe._basic=_,oe._hidden=S,oe._fixed=k,oe._align=H,oe._nest=D,oe["_offset-fixed"]=U,oe._justify=I,oe._type=X,oe._offset=te,oe._wrap=ae;export default oe;
