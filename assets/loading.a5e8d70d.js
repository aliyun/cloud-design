var e=Object.assign;import{r as t,a9 as n,aa as r,v as a,I as o,a8 as i,B as l,a5 as s,u as c}from"./index.9e4b8ce1.js";import{s as u,m as d,u as f,q as m}from"./styled-components.browser.esm.19571eea.js";var h=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t,n=function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(n,t),this.tags.push(n)}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{var o=105===e.charCodeAt(1)&&64===e.charCodeAt(0);a.insertRule(e,o?0:a.cssRules.length)}catch(i){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}();function p(e){e&&b.current.insert(e+"}")}var b={current:null},v=function(e,t,n,r,a,o,i,l,s,c){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return b.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return""}break;case 2:if(0===l)return t+"/*|*/";break;case 3:switch(l){case 102:case 112:return b.current.insert(n[0]+t),"";default:return t+(0===c?"/*|*/":"")}case-2:t.split("/*|*/}").forEach(p)}};function y(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]):r+=n+" "})),r}var g=function(e,t,n){var r=e.key+"-"+t.name;if(!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles),void 0===e.inserted[t.name]){var a=t;do{e.insert("."+r,a,e.sheet,!0);a=a.next}while(void 0!==a)}};var E=/[A-Z]|^ms/g,_=/_EMO_([^_]+?)_([^]*?)_EMO_/g,w=function(e){return 45===e.charCodeAt(1)},k=function(e){return null!=e&&"boolean"!=typeof e},x=d((function(e){return w(e)?e:e.replace(E,"-$&").toLowerCase()})),O=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(_,(function(e,t,n){return S={name:t,styles:n,next:S},t}))}return 1===f[e]||w(e)||"number"!=typeof t||0===t?t:t+"px"};function j(e,t,n,r){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return S={name:n.name,styles:n.styles,next:S},n.name;if(void 0!==n.styles){var a=n.next;if(void 0!==a)for(;void 0!==a;)S={name:a.name,styles:a.styles,next:S},a=a.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=j(e,t,n[a],!1);else for(var o in n){var i=n[o];if("object"!=typeof i)null!=t&&void 0!==t[i]?r+=o+"{"+t[i]+"}":k(i)&&(r+=x(o)+":"+O(o,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var l=j(e,t,i,!1);switch(o){case"animation":case"animationName":r+=x(o)+":"+l+";";break;default:r+=o+"{"+l+"}"}}else for(var s=0;s<i.length;s++)k(i[s])&&(r+=x(o)+":"+O(o,i[s])+";")}return r}(e,t,n);case"function":if(void 0!==e){var o=S,i=n(e);return S=o,j(e,t,i,r)}}if(null==t)return n;var l=t[n];return void 0===l||r?n:l}var S,C=/label:\s*([^\s;\n{]+)\s*;/g,P=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,a="";S=void 0;var o=e[0];null==o||void 0===o.raw?(r=!1,a+=j(n,t,o,!1)):a+=o[0];for(var i=1;i<e.length;i++)a+=j(n,t,e[i],46===a.charCodeAt(a.length-1)),r&&(a+=o[i]);C.lastIndex=0;for(var l,s="";null!==(l=C.exec(a));)s+="-"+l[1];return{name:function(e){for(var t,n=0,r=0,a=e.length;a>=4;++r,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(a)+s,styles:a,next:S}},A=Object.prototype.hasOwnProperty,N=t.createContext("undefined"!=typeof HTMLElement?function(e){void 0===e&&(e={});var t,n=e.key||"css";void 0!==e.prefix&&(t={prefix:e.prefix});var r,a=new u(t),o={};r=e.container||document.head;var i,l=document.querySelectorAll("style[data-emotion-"+n+"]");Array.prototype.forEach.call(l,(function(e){e.getAttribute("data-emotion-"+n).split(" ").forEach((function(e){o[e]=!0})),e.parentNode!==r&&r.appendChild(e)})),a.use(e.stylisPlugins)(v),i=function(e,t,n,r){var o=t.name;b.current=n,a(e,t.styles),r&&(s.inserted[o]=!0)};var s={key:n,sheet:new h({key:n,container:r,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:o,registered:{},insert:i};return s}():null),z=t.createContext({}),M=N.Provider,T=function(e){var n=function(n,r){return t.createElement(N.Consumer,null,(function(t){return e(n,t,r)}))};return t.forwardRef(n)},D="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",L=function(e,t){var n={};for(var r in t)A.call(t,r)&&(n[r]=t[r]);return n[D]=e,n},R=function(e,n,r,a){var o=null===r?n.css:n.css(r);"string"==typeof o&&void 0!==e.registered[o]&&(o=e.registered[o]);var i=n[D],l=[o],s="";"string"==typeof n.className?s=y(e.registered,l,n.className):null!=n.className&&(s=n.className+" ");var c=P(l);g(e,c,"string"==typeof i);s+=e.key+"-"+c.name;var u={};for(var d in n)A.call(n,d)&&"css"!==d&&d!==D&&(u[d]=n[d]);return u.ref=a,u.className=s,t.createElement(i,u)},B=T((function(e,n,r){return"function"==typeof e.css?t.createElement(z.Consumer,null,(function(t){return R(n,e,t,r)})):R(n,e,null,r)}));function H(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return P(t)}var I=function(e,n){var r=arguments;if(null==n||!A.call(n,"css"))return t.createElement.apply(void 0,r);var a=r.length,o=new Array(a);o[0]=B,o[1]=L(e,n);for(var i=2;i<a;i++)o[i]=r[i];return t.createElement.apply(null,o)},U=T((function(e,n){var r=e.styles;if("function"==typeof r)return t.createElement(z.Consumer,null,(function(e){var a=P([r(e)]);return t.createElement(V,{serialized:a,cache:n})}));var a=P([r]);return t.createElement(V,{serialized:a,cache:n})})),V=function(e){function t(t,n,r){return e.call(this,t,n,r)||this}n(t,e);var r=t.prototype;return r.componentDidMount=function(){this.sheet=new h({key:this.props.cache.key+"-global",nonce:this.props.cache.sheet.nonce,container:this.props.cache.sheet.container});var e=document.querySelector("style[data-emotion-"+this.props.cache.key+'="'+this.props.serialized.name+'"]');null!==e&&this.sheet.tags.push(e),this.props.cache.sheet.tags.length&&(this.sheet.before=this.props.cache.sheet.tags[0]),this.insertStyles()},r.componentDidUpdate=function(e){e.serialized.name!==this.props.serialized.name&&this.insertStyles()},r.insertStyles=function(){if(void 0!==this.props.serialized.next&&g(this.props.cache,this.props.serialized.next,!0),this.sheet.tags.length){var e=this.sheet.tags[this.sheet.tags.length-1].nextElementSibling;this.sheet.before=e,this.sheet.flush()}this.props.cache.insert("",this.props.serialized,this.sheet,!1)},r.componentWillUnmount=function(){this.sheet.flush()},r.render=function(){return null},t}(t.Component),q=function e(t){for(var n=t.length,r=0,a="";r<n;r++){var o=t[r];if(null!=o){var i=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))i=e(o);else for(var l in i="",o)o[l]&&l&&(i&&(i+=" "),i+=l);break;default:i=o}i&&(a&&(a+=" "),a+=i)}}return a};function W(e,t,n){var r=[],a=y(e,r,n);return r.length<2?n:a+t(r)}var K=T((function(e,n){return t.createElement(z.Consumer,null,(function(t){var r=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=P(t,n.registered);return g(n,a,!1),n.key+"-"+a.name},a={css:r,cx:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return W(n.registered,r,q(t))},theme:t},o=e.children(a);return!0,o}))})),F=r(Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",ClassNames:K,Global:U,createElement:I,jsx:I,keyframes:function(){var e=H.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},CacheProvider:M,ThemeContext:z,withEmotionCache:T,css:H})),G=a((function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=f,n.skeletonStyles=n.skeletonKeyframes=n.defaultHighlightColor=n.defaultBaseColor=void 0;var r;(r=t)&&r.__esModule;function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  0% {\n    background-position: -200px 0;\n  }\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }\n"]);return l=function(){return e},e}var s="#eee";n.defaultBaseColor=s;var c="#f5f5f5";n.defaultHighlightColor=c;var u=(0,F.keyframes)(l());n.skeletonKeyframes=u;var d=(0,F.css)("background-color:",s,";background-image:linear-gradient( 90deg,",s,",",c,",",s," );background-size:200px 100%;background-repeat:no-repeat;border-radius:4px;display:inline-block;line-height:1;width:100%;;label:skeletonStyles;");function f(e){for(var t=e.count,n=e.duration,r=e.width,a=e.wrapper,i=e.height,l=e.circle,s=e.style,c=e.className,f=[],m=0;m<t;m++){var h={};null!==r&&(h.width=r),null!==i&&(h.height=i),null!==r&&null!==i&&l&&(h.borderRadius="50%");var p="react-loading-skeleton";c&&(p+=" "+c),f.push((0,F.jsx)("span",{key:m,className:p,css:(0,F.css)(d," animation:",u," ",n,"s ease-in-out infinite;label:Skeleton;"),style:o({},s,{},h)},"‌"))}return(0,F.jsx)("span",null,a?f.map((function(e,t){return(0,F.jsx)(a,{key:t},e,"‌")})):f)}n.skeletonStyles=d,f.defaultProps={count:1,duration:1.2,width:null,wrapper:null,height:null,circle:!1}})),Y=a((function(e,n){function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u,d,f,m=function(e){function t(){return o(this,t),l(this,s(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.color,n=e.highlightColor,r=e.children,a=(0,F.css)(".react-loading-skeleton{background-color:",t,";background-image:linear-gradient( 90deg,",t,",",n,",",t," );};label:SkeletonTheme;");return(0,F.jsx)("div",{css:a},r)}}])&&i(n.prototype,r),a&&i(n,a),t}(function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(t).Component);n.default=m,u=m,d="defaultProps",f={color:G.defaultBaseColor,highlightColor:G.defaultHighlightColor},d in u?Object.defineProperty(u,d,{value:f,enumerable:!0,configurable:!0,writable:!0}):u[d]=f})),Z=o(a((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"SkeletonTheme",{enumerable:!0,get:function(){return r.default}});var n=a(G),r=a(Y);function a(e){return e&&e.__esModule?e:{default:e}}})));const $=m.div`
  .demo {
    width: 500px;
    background-color: #f2f3f7;
    text-align: center;
    padding: 50px;
  }
`;var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement("div",null,"LTR",t.createElement(i,{tip:"加载中..."},t.createElement("div",{className:"demo"},"test"))),t.createElement("div",null,"RTL",t.createElement(i,{tip:"加载中...",rtl:!0},t.createElement("div",{className:"demo"},"test"))));return t.createElement($,null,e)}});class Q extends t.Component{constructor(e,t){super(e,t),this.onClose=()=>{this.setState({visible:!1})},this.state={visible:!1}}onClick(){this.setState({visible:!this.state.visible})}render(){return t.createElement("span",null,t.createElement(i,{visible:this.state.visible,fullScreen:!0,shape:"fusion-reactor",safeNode:this.btn,onVisibleChange:this.onClose.bind(this)},t.createElement(l,{onClick:this.onClick.bind(this),ref:e=>this.btn=e},"Full Screen")))}}const X=m.div``;var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(Q,null);return t.createElement(X,null,e)}});const te=s.Item,ne={labelCol:{fixedSpan:4},wrapperCol:{span:18}};class re extends t.Component{constructor(e){super(e),this.state={visible:!1}}setVisible(e){this.setState({visible:e})}render(){return t.createElement("div",null,t.createElement(i,{visible:this.state.visible,shape:"fusion-reactor"},t.createElement(s,{style:{width:500}},t.createElement(te,e({label:"Username"},ne),t.createElement(c,null)),t.createElement(te,e({label:"Password"},ne),t.createElement(c,{htmlType:"password",placeholder:"please input"})),t.createElement(te,e({label:"Detail"},ne),t.createElement(c,{multiple:!0})))),t.createElement("div",{style:{paddingLeft:80}},t.createElement(l,{onClick:this.setVisible.bind(this,!0),type:"primary"},"Submit"),t.createElement(l,{onClick:this.setVisible.bind(this,!1),style:{marginLeft:5}},"Cancel")))}}const ae=m.div``;var oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(re,null);return t.createElement(ae,null,e)}});const ie=m.div`
  .demo {
    width: 500px;
    background-color: #f2f3f7;
    text-align: center;
    padding: 50px;
  }
  .next-loading {
    margin-bottom: 5px;
  }
`;var le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement(i,{tip:"normal(size default large)"},t.createElement("div",{className:"demo"},"test")),t.createElement(i,{tip:"large",size:"large"},t.createElement("div",{className:"demo"},"test")),t.createElement(i,{tip:"medium",size:"medium"},t.createElement("div",{className:"demo"},"test")));return t.createElement(ie,null,e)}});const se=t.createElement("div",{className:"load-container load1"},t.createElement("div",{className:"loader"},"loading...")),ce=t.createElement("div",{className:"load-container load7"},t.createElement("div",{className:"loader"},"loading..."));const ue=m.div`
  .demo {
    width: 500px;
    background-color: #f2f3f7;
    text-align: center;
    padding: 50px;
  }
  .next-loading {
    margin-bottom: 5px;
  }

  /* start copy from here */

  .load-container {
    margin: 0 auto;
    position: relative;
  }

  /* animation 1 */
  .load1 .loader,
  .load1 .loader:before,
  .load1 .loader:after {
    background: #5584ff;
    color: #5584ff;
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }
  .load1 .loader:before,
  .load1 .loader:after {
    position: absolute;
    top: 0;
    content: '';
  }
  .load1 .loader:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .load1 .loader {
    text-indent: -9999em;
    margin: 0 auto !important;
    position: relative;
    font-size: 11px;
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .load1 .loader:after {
    left: 1.5em;
  }
  @-webkit-keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }

  /* animation 2 */
  .load7 .loader:before,
  .load7 .loader:after,
  .load7 .loader {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
    top: -36px;
  }
  .load7 .loader {
    margin: 0 auto !important;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .load7 .loader:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .load7 .loader:after {
    left: 3.5em;
  }
  .load7 .loader:before,
  .load7 .loader:after {
    content: '';
    position: absolute;
    top: 0;
  }
  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em #5584ff;
    }
    40% {
      box-shadow: 0 2.5em 0 0 #5584ff;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em #5584ff;
    }
    40% {
      box-shadow: 0 2.5em 0 0 #5584ff;
    }
  }
`;var de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement(i,{tip:"default animation"},t.createElement("div",{className:"demo"},"test")),t.createElement(i,{indicator:se},t.createElement("div",{className:"demo"},"test")),t.createElement(i,{indicator:ce},t.createElement("div",{className:"demo"},"test")));return t.createElement(ue,null,e)}});var fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:e=>t.createElement("div",null,t.createElement("div",{style:{width:400}},t.createElement(Z,{count:5})),t.createElement("p",null,"本骨架屏组件导出自",t.createElement("a",{href:"https://www.npmjs.com/package/react-loading-skeleton",target:"_blank"},"react-loading-skeleton"),"，更多用法请查阅它的文档。"))});const me=m.div`
  .demo {
    width: 500px;
    background-color: #f2f3f7;
    text-align: center;
    padding: 50px;
  }
  .next-loading {
    margin-bottom: 5px;
  }
`;var he=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement(i,{tip:"default"},t.createElement("div",{className:"demo"},"test")),t.createElement(i,{tip:"right",tipAlign:"right"},t.createElement("div",{className:"demo"},"test")),t.createElement(i,{tip:"bottom",tipAlign:"bottom"},t.createElement("div",{className:"demo"},"test")));return t.createElement(me,null,e)}});const pe={};pe._basic=J,pe._fullscreen=ee,pe._state=oe,pe._size=le,pe._indicator=de,pe._skeleton=fe,pe._tipAlign=he;export default pe;
