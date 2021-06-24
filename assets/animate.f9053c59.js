import{r as e,J as t}from"./index.672a70f3.js";import{q as o}from"./styled-components.browser.esm.f3e9ec77.js";class a extends e.exports.Component{constructor(e){super(e),this.state={visible:!0},this.handleToggle=this.handleToggle.bind(this)}handleToggle(){this.setState({visible:!this.state.visible})}render(){return e.exports.createElement("div",null,e.exports.createElement("button",{onClick:this.handleToggle},"Toggle visible"),e.exports.createElement(t,{animation:{enter:"my-zoom-in",leave:"my-zoom-out"}},this.state.visible?e.exports.createElement("div",{className:"basic-demo"},"Next Animate"):null))}}const n=o.div`
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
`;var r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(a,null);return e.exports.createElement(n,null,t)}});class i extends e.exports.Component{constructor(e){super(e),this.state={expand:!0},["beforeEnter","onEnter","afterEnter","beforeLeave","onLeave","afterLeave","handleToggle"].forEach((e=>{this[e]=this[e].bind(this)}))}handleToggle(){this.setState({expand:!this.state.expand})}beforeEnter(e){this.height=e.offsetHeight,e.style.height="0px"}onEnter(e){e.style.height=`${this.height}px`}afterEnter(e){this.height=null,e.style.height=null}beforeLeave(e){e.style.height=`${this.height}px`}onLeave(e){e.style.height="0px"}afterLeave(e){e.style.height=null}render(){return e.exports.createElement("div",null,e.exports.createElement("button",{onClick:this.handleToggle},"Toggle expand"),e.exports.createElement(t,{animation:"expand",beforeEnter:this.beforeEnter,onEnter:this.onEnter,afterEnter:this.afterEnter,beforeLeave:this.beforeLeave,onLeave:this.onLeave,afterLeave:this.afterLeave},this.state.expand?e.exports.createElement("div",{className:"notice"}):null))}}const s=o.div`
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
`;var l=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(i,null);return e.exports.createElement(s,null,t)}});class c extends e.exports.Component{constructor(e){super(e),this.state={items:["hello","world","click","me"]}}handleAdd(){this.setState({items:[...this.state.items,prompt("Enter some text")]})}handleRemove(e){const t=this.state.items.slice();t.splice(e,1),this.setState({items:t})}render(){return e.exports.createElement("div",{className:"totolist-container"},e.exports.createElement(t,{animationAppear:!0,animation:"fade",className:"todo-list",singleMode:!1,beforeAppear:()=>console.log("before appear"),onAppear:()=>console.log("appear"),afterAppear:()=>console.log("after appear"),beforeEnter:()=>console.log("before enter"),onEnter:()=>console.log("enter"),afterEnter:()=>console.log("after enter"),beforeLeave:()=>console.log("before leave"),onLeave:()=>console.log("leave"),afterLeave:()=>console.log("after leave")},this.state.items.map(((t,o)=>e.exports.createElement("div",{key:t},t,e.exports.createElement("button",{onClick:()=>this.handleRemove(o)},"×"))))),e.exports.createElement("button",{onClick:()=>this.handleAdd()},"Add Item"))}}const p=o.div`
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
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(c,null);return e.exports.createElement(p,null,t)}});const d={};d._basic=r,d._expand=l,d._multiple=m;export default d;
