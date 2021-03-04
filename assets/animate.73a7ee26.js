import{r as e,A as t}from"./index.85ae9c06.js";import{q as o}from"./styled-components.browser.esm.1d25448f.js";class a extends e.Component{constructor(e){super(e),this.state={visible:!0},this.handleToggle=this.handleToggle.bind(this)}handleToggle(){this.setState({visible:!this.state.visible})}render(){return e.createElement("div",null,e.createElement("button",{onClick:this.handleToggle},"Toggle visible"),e.createElement(t,{animation:{enter:"my-zoom-in",leave:"my-zoom-out"}},this.state.visible?e.createElement("div",{className:"basic-demo"},"Next Animate"):null))}}const n=o.div`
  .basic-demo {
    font-size: 96px;
    text-align: center;
  }

  .my-zoom-in {
    opacity: 0;
  }

  .my-zoom-in-active {
    animation: my-zoom-in 500ms linear;
  }

  .my-zoom-out {
    opacity: 1;
  }

  .my-zoom-out-active {
    animation: my-zoom-out 500ms linear;
  }

  @keyframes my-zoom-in {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
      opacity: 1;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes my-zoom-out {
    from {
      opacity: 1;
    }

    50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    to {
      opacity: 0;
    }
  }
`;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(a,null);return e.createElement(n,null,t)}});class r extends e.Component{constructor(e){super(e),this.state={items:["hello","world","click","me"]}}handleAdd(){this.setState({items:[...this.state.items,prompt("Enter some text")]})}handleRemove(e){const t=this.state.items.slice();t.splice(e,1),this.setState({items:t})}render(){return e.createElement("div",{className:"totolist-container"},e.createElement(t,{animationAppear:!0,animation:"fade",className:"todo-list",singleMode:!1,beforeAppear:()=>console.log("before appear"),onAppear:()=>console.log("appear"),afterAppear:()=>console.log("after appear"),beforeEnter:()=>console.log("before enter"),onEnter:()=>console.log("enter"),afterEnter:()=>console.log("after enter"),beforeLeave:()=>console.log("before leave"),onLeave:()=>console.log("leave"),afterLeave:()=>console.log("after leave")},this.state.items.map(((t,o)=>e.createElement("div",{key:t},t,e.createElement("button",{onClick:()=>this.handleRemove(o)},"×"))))),e.createElement("button",{onClick:()=>this.handleAdd()},"Add Item"))}}const l=o.div`
  .fade-appear {
    opacity: 0.01;
  }

  .fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }

  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave.fade-leave-active {
    opacity: 0.01;
    transition: opacity 800ms ease-in;
  }

  .totolist-container {
    padding: 20px;
    border: 1px solid #ccc;
    width: 200px;
    border-radius: 4px;
  }

  .todo-list > * {
    margin: 5px 0;
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
  }

  .totolist-container > button {
    margin-top: 20px;
  }
`;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(r,null);return e.createElement(l,null,t)}});class c extends e.Component{constructor(e){super(e),this.state={expand:!0},["beforeEnter","onEnter","afterEnter","beforeLeave","onLeave","afterLeave","handleToggle"].forEach((e=>{this[e]=this[e].bind(this)}))}handleToggle(){this.setState({expand:!this.state.expand})}beforeEnter(e){this.height=e.offsetHeight,e.style.height="0px"}onEnter(e){e.style.height=`${this.height}px`}afterEnter(e){this.height=null,e.style.height=null}beforeLeave(e){e.style.height=`${this.height}px`}onLeave(e){e.style.height="0px"}afterLeave(e){e.style.height=null}render(){return e.createElement("div",null,e.createElement("button",{onClick:this.handleToggle},"Toggle expand"),e.createElement(t,{animation:"expand",beforeEnter:this.beforeEnter,onEnter:this.onEnter,afterEnter:this.afterEnter,beforeLeave:this.beforeLeave,onLeave:this.onLeave,afterLeave:this.afterLeave},this.state.expand?e.createElement("div",{className:"notice"}):null))}}const m=o.div`
  .expand-enter {
    overflow: hidden;
  }

  .expand-enter-active {
    transition: height 0.3s ease-out;
  }

  .expand-leave {
    overflow: hidden;
  }

  .expand-leave-active {
    transition: height 0.3s ease-out;
  }

  .notice {
    width: 200px;
    height: 100px;
    margin-top: 20px;
    border: 1px solid #ccc;
  }
`;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(c,null);return e.createElement(m,null,t)}});const p={};p._basic=i,p._multiple=s,p._expand=d;export default p;
