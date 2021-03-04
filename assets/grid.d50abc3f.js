import{r as e,a6 as t,a2 as l,E as n}from"./index.85ae9c06.js";import{q as c}from"./styled-components.browser.esm.1d25448f.js";const{Row:a,Col:o}=t;const r=c.div`
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
`;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"basic-demo"},e.createElement("div",{className:"demo-title"},"One"),e.createElement(i,null,e.createElement(s,{span:"24"},"col-24")),e.createElement("div",{className:"demo-title"},"Two"),e.createElement(i,null,e.createElement(s,{span:"12"},"col-12"),e.createElement(s,{span:"12"},"col-12")),e.createElement("div",{className:"demo-title"},"Three"),e.createElement(i,null,e.createElement(s,{span:"8"},"col-8"),e.createElement(s,{span:"8"},"col-8"),e.createElement(s,{span:"8"},"col-8")),e.createElement("div",{className:"demo-title"},"Four"),e.createElement(i,null,e.createElement(s,{span:"6"},"col-6"),e.createElement(s,{span:"6"},"col-6"),e.createElement(s,{span:"6"},"col-6"),e.createElement(s,{span:"6"},"col-6")),e.createElement("div",{className:"demo-title"},"Five"),e.createElement(i,null,e.createElement(s,{span:"1p5"},"col-1p5"),e.createElement(s,{span:"1p5"},"col-1p5"),e.createElement(s,{span:"1p5"},"col-1p5"),e.createElement(s,{span:"1p5"},"col-1p5"),e.createElement(s,{span:"1p5"},"col-1p5")),e.createElement("div",{className:"demo-title"},"Six"),e.createElement(i,null,e.createElement(s,{span:"4"},"col-4"),e.createElement(s,{span:"4"},"col-4"),e.createElement(s,{span:"4"},"col-4"),e.createElement(s,{span:"4"},"col-4"),e.createElement(s,{span:"4"},"col-4"),e.createElement(s,{span:"4"},"col-4")));return e.createElement(d,null,t)}});const{Row:E,Col:x}=t;const u=c.div`
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
`;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"align-demo"},e.createElement("div",{className:"demo-title"},"top"),e.createElement(E,{align:"top"},e.createElement(x,{span:"8",style:{height:"100px",lineHeight:"100px"}},"col-8"),e.createElement(x,{span:"8",style:{height:"50px",lineHeight:"50px"}},"col-8"),e.createElement(x,{span:"8",style:{height:"150px",lineHeight:"150px"}},"col-8")),e.createElement("div",{className:"demo-title"},"center"),e.createElement(E,{align:"center"},e.createElement(x,{span:"8",style:{height:"100px",lineHeight:"100px"}},"col-8"),e.createElement(x,{span:"8",style:{height:"50px",lineHeight:"50px"}},"col-8"),e.createElement(x,{span:"8",style:{height:"150px",lineHeight:"150px"}},"col-8")),e.createElement("div",{className:"demo-title"},"bottom"),e.createElement(E,{align:"bottom"},e.createElement(x,{span:"8",style:{height:"100px",lineHeight:"100px"}},"col-8"),e.createElement(x,{span:"8",style:{height:"50px",lineHeight:"50px"}},"col-8"),e.createElement(x,{span:"8",style:{height:"150px",lineHeight:"150px"}},"col-8")),e.createElement("div",{className:"demo-title"},"baseline"),e.createElement(E,{align:"baseline"},e.createElement(x,{span:"8",style:{height:"100px",paddingTop:"20px",fontSize:"30px"}},"col-8"),e.createElement(x,{span:"8",style:{height:"50px",paddingTop:"20px",fontSize:"20px"}},"col-8"),e.createElement(x,{span:"8",style:{height:"150px",paddingTop:"20px",fontSize:"40px"}},"col-8")),e.createElement("div",{className:"demo-title"},"stretch"),e.createElement(E,{align:"stretch",style:{height:"150px"}},e.createElement(x,{span:"8"},"col-8"),e.createElement(x,{span:"8"},"col-8"),e.createElement(x,{span:"8"},"col-8")),e.createElement("div",{className:"demo-title"},"override"),e.createElement(E,{align:"top"},e.createElement(x,{align:"bottom",span:"8",style:{height:"100px",lineHeight:"100px"}},"col-8"),e.createElement(x,{span:"8",style:{height:"50px",lineHeight:"50px"}},"col-8"),e.createElement(x,{span:"8",style:{height:"150px",lineHeight:"150px"}},"col-8")));return e.createElement(u,null,t)}});const{Row:g,Col:h}=t;class b extends e.Component{constructor(e){super(e),this.state={gutter:0},this.handleChange=this.handleChange.bind(this)}handleChange(e){this.setState({gutter:e})}render(){const{gutter:t}=this.state;return e.createElement("div",{className:"gutter-demo"},e.createElement(l,{value:t,onChange:this.handleChange,marks:4,step:4,max:16,hasTip:!1,style:{width:"400px",marginLeft:"20px",marginTop:"30px"}}),e.createElement(g,{gutter:t},e.createElement(h,{span:"6"},e.createElement("div",{className:"demo-col-inset"},"col-6")),e.createElement(h,{span:"6"},e.createElement("div",{className:"demo-col-inset"},"col-6")),e.createElement(h,{span:"6"},e.createElement("div",{className:"demo-col-inset"},"col-6")),e.createElement(h,{span:"6"},e.createElement("div",{className:"demo-col-inset"},"col-6"))))}}const v=c.div`
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
`;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(b,null);return e.createElement(v,null,t)}});const{Row:N,Col:w}=t;const y=c.div`
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
`;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"justify-demo"},e.createElement("div",{className:"demo-title"},"start"),e.createElement(N,{justify:"start"},e.createElement(w,{span:"4"},"col-4"),e.createElement(w,{span:"4"},"col-4"),e.createElement(w,{span:"4"},"col-4")),e.createElement("div",{className:"demo-title"},"center"),e.createElement(N,{justify:"center"},e.createElement(w,{span:"4"},"col-4"),e.createElement(w,{span:"4"},"col-4"),e.createElement(w,{span:"4"},"col-4")),e.createElement("div",{className:"demo-title"},"end"),e.createElement(N,{justify:"end"},e.createElement(w,{span:"4"},"col-4"),e.createElement(w,{span:"4"},"col-4"),e.createElement(w,{span:"4"},"col-4")),e.createElement("div",{className:"demo-title"},"space-between"),e.createElement(N,{justify:"space-between"},e.createElement(w,{span:"4"},"col-4"),e.createElement(w,{span:"4"},"col-4"),e.createElement(w,{span:"4"},"col-4")),e.createElement("div",{className:"demo-title"},"space-around"),e.createElement(N,{justify:"space-around"},e.createElement(w,{span:"4"},"col-4"),e.createElement(w,{span:"4"},"col-4"),e.createElement(w,{span:"4"},"col-4")));return e.createElement(y,null,t)}});const{Row:j,Col:C}=t;const k=c.div`
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
`;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"basic-demo"},e.createElement("div",{className:"demo-title"},"Rendered as `ul` and `li`"),e.createElement(j,{component:"ul"},e.createElement(C,{span:"12",component:"li"},"col-12"),e.createElement(C,{span:"12",component:"li"},"col-12")));return e.createElement(k,null,t)}});const{Row:T,Col:O}=t;const R=c.div`
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
`;var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"mixin-demo"},e.createElement("div",{className:"demo-title"},"Two-column layout, left column fixed, right column adaptive"),e.createElement(T,null,e.createElement(O,{fixedSpan:"16"},"col-fixed-16"),e.createElement(O,null,"col")),e.createElement("div",{className:"demo-title"},"Two-column layout, right column fixed, left column adaptive"),e.createElement(T,null,e.createElement(O,null,"col"),e.createElement(O,{fixedSpan:"16"},"col-fixed-16")),e.createElement("div",{className:"demo-title"},"Three-column layout, left column and right column fixed, middle column adaptive"),e.createElement(T,null,e.createElement(O,{fixedSpan:"8"},"col-fixed-8"),e.createElement(O,null,"col"),e.createElement(O,{fixedSpan:"8"},"col-fixed-8")));return e.createElement(R,null,t)}});const{Row:M,Col:W}=t;const D=c.div`
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
`;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"hidden-demo"},e.createElement("div",{className:"demo-title"},"Hide columns under all breakpoints, resize browser to see if the second column is hidden or shown"),e.createElement(M,null,e.createElement(W,{span:"8"},"col-8"),e.createElement(W,{span:"16",hidden:!0},"col-16")),e.createElement("div",{className:"demo-title"},"Hide columns under a breakpoint such as xs, resize browser to see if the second column is hidden or shown"),e.createElement(M,null,e.createElement(W,{span:"8"},"col-8"),e.createElement(W,{span:"16",hidden:"xs"},"col-16")),e.createElement("div",{className:"demo-title"},"Hide columns under some breakpoints such as xs and s, resize browser to see if the second column is hidden or shown"),e.createElement(M,null,e.createElement(W,{span:"8"},"col-8"),e.createElement(W,{span:"16",hidden:["xs","s"]},"col-16")));return e.createElement(D,null,t)}});const{Row:A,Col:F}=t;const q=c.div`
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
`;var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"offset-demo"},e.createElement("div",{className:"demo-title"},"Normal offset, set offset from 1 to 24"),e.createElement(A,null,e.createElement(F,{offset:"0"},"offset-0")),e.createElement(A,null,e.createElement(F,{offset:"4"},"offset-4")),e.createElement(A,null,e.createElement(F,{offset:"8"},"offset-8")),e.createElement(A,null,e.createElement(F,{offset:"12"},"offset-12")),e.createElement("div",{className:"demo-title"},"Adaptive offset"),e.createElement(A,null,e.createElement(F,null,"col"),e.createElement(F,{offset:"12"},"offset-12")));return e.createElement(q,null,t)}});const{Row:$,Col:B}=t;const G=c.div`
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
`;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"offset-fixed-demo"},e.createElement("div",{className:"demo-title"},"Normal offset, set offset from 1 to 30"),e.createElement($,null,e.createElement(B,{fixedOffset:"0"},"offset-fixed-0")),e.createElement($,null,e.createElement(B,{fixedOffset:"4"},"offset-fixed-4")),e.createElement($,null,e.createElement(B,{fixedOffset:"8"},"offset-fixed-8")),e.createElement($,null,e.createElement(B,{fixedOffset:"12"},"offset-fixed-12")),e.createElement("div",{className:"demo-title"},"Adaptive offset"),e.createElement($,null,e.createElement(B,null,"col"),e.createElement(B,{fixedOffset:"12"},"offset-fixed-12")));return e.createElement(G,null,t)}});const{Row:J,Col:K}=t;const P=c.div`
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
`;var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"nest-demo"},e.createElement(J,{className:"demo-row"},e.createElement(K,{span:"10"},e.createElement(J,null,e.createElement(K,{span:"6"},e.createElement("div",{className:"demo-col-inset"},"col-10-6")),e.createElement(K,{span:"18"},e.createElement("div",{className:"demo-col-inset"},"col-10-18")))),e.createElement(K,{span:"14"},e.createElement(J,null,e.createElement(K,{span:"18"},e.createElement("div",{className:"demo-col-inset"},"col-14-18")),e.createElement(K,{span:"6"},e.createElement("div",{className:"demo-col-inset"},"col-14-6"))))));return e.createElement(P,null,t)}});const{Row:V,Col:X}=t;const Y=c.div`
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
`;var Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"wrap-demo"},e.createElement("div",{className:"demo-title"},"No wrap"),e.createElement(V,null,e.createElement(X,{span:"6"},"col-6"),e.createElement(X,{span:"6"},"col-6"),e.createElement(X,{span:"6"},"col-6"),e.createElement(X,{span:"8"},"col-8")),e.createElement("div",{className:"demo-title"},"Wrap"),e.createElement(V,{wrap:!0},e.createElement(X,{span:"6"},"col-6"),e.createElement(X,{span:"6"},"col-6"),e.createElement(X,{span:"6"},"col-6"),e.createElement(X,{span:"8"},"col-8")));return e.createElement(Y,null,t)}});const{Row:ee,Col:te}=t,le={xxs:320,xs:480,s:720,m:990,l:1200,xl:1500};class ne extends e.Component{componentDidMount(){const e=n.findDOMNode(this.refs.fixCol);this.handleResize=()=>{let t="";const l=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=Object.keys(le);for(let e=0;e<n.length;e++){const c=le[n[e]],a=le[n[e+1]];if(l>c&&(l<a||!a)){t=n[e];break}}t&&(e.innerHTML=`${le[t]}px`)},window.addEventListener("resize",this.handleResize),this.handleResize()}componentWillUnmount(){}render(){return e.createElement("div",{className:"type-demo"},e.createElement("div",{className:"demo-title"},"Default"),e.createElement(ee,null,e.createElement(te,null,"100%")),e.createElement("div",{className:"demo-title"},"Set fixed to true"),e.createElement(ee,{ref:"fixedRow",fixed:!0},e.createElement(te,{ref:"fixCol"})),e.createElement("div",{className:"demo-title"},"Set fixedWidth to 's'"),e.createElement(ee,{fixedWidth:"s"},e.createElement(te,null,"720px")))}}const ce=c.div`
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
`;var ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(ne,null);return e.createElement(ce,null,t)}});const oe={};oe._breakpoint=m,oe._basic=p,oe._align=f,oe._gutter=_,oe._justify=S,oe["_custom-elem-type"]=z,oe._fixed=H,oe._hidden=L,oe._offset=U,oe["_offset-fixed"]=I,oe._nest=Q,oe._wrap=Z,oe._type=ae;export default oe;
