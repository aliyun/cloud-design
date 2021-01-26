import{r as e,a3 as n,h as r,a4 as t,a as o,E as u}from"./index.4642f55c.js";import{b as a}from"./redux.7df07dca.js";var i=e.createContext(null);var s=function(e){e()},c={notify:function(){}};function p(){var e=s,n=null,r=null;return{clear:function(){n=null,r=null},notify:function(){e((function(){for(var e=n;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=n;r;)e.push(r),r=r.next;return e},subscribe:function(e){var t=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:n=o,function(){t&&null!==n&&(t=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:n=o.next)}}}}var f=function(){function e(e,n){this.store=e,this.parentSub=n,this.unsubscribe=null,this.listeners=c,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var n=e.prototype;return n.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},n.notifyNestedSubs=function(){this.listeners.notify()},n.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},n.isSubscribed=function(){return Boolean(this.unsubscribe)},n.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=p())},n.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=c)},e}();function d(n){var r=n.store,t=n.context,o=n.children,u=e.useMemo((function(){var e=new f(r);return e.onStateChange=e.notifyNestedSubs,{store:r,subscription:e}}),[r]),a=e.useMemo((function(){return r.getState()}),[r]);e.useEffect((function(){var e=u.subscription;return e.trySubscribe(),a!==r.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[u,a]);var s=t||i;return e.createElement(s.Provider,{value:u},o)}var l="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?e.useLayoutEffect:e.useEffect,v=[],h=[null,null];function m(e,n){var r=e[1];return[n.payload,r+1]}function b(e,n,r){l((function(){return e.apply(void 0,n)}),r)}function P(e,n,r,t,o,u,a){e.current=t,n.current=o,r.current=!1,u.current&&(u.current=null,a())}function y(e,n,r,t,o,u,a,i,s,c){if(e){var p=!1,f=null,d=function(){if(!p){var e,r,d=n.getState();try{e=t(d,o.current)}catch(l){r=l,f=l}r||(f=null),e===u.current?a.current||s():(u.current=e,i.current=e,a.current=!0,c({type:"STORE_UPDATED",payload:{error:r}}))}};r.onStateChange=d,r.trySubscribe(),d();return function(){if(p=!0,r.tryUnsubscribe(),r.onStateChange=null,f)throw f}}}var S=function(){return[null,0]};function g(u,a){void 0===a&&(a={});var s=a,c=s.getDisplayName,p=void 0===c?function(e){return"ConnectAdvanced("+e+")"}:c,d=s.methodName,l=void 0===d?"connectAdvanced":d,g=s.renderCountProp,w=void 0===g?void 0:g,C=s.shouldHandleStateChanges,O=void 0===C||C,E=s.storeKey,M=void 0===E?"store":E,x=(s.withRef,s.forwardRef),N=void 0!==x&&x,R=s.context,T=void 0===R?i:R,q=t(s,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]),D=T;return function(a){var i=a.displayName||a.name||"Component",s=p(i),c=n({},q,{getDisplayName:p,methodName:l,renderCountProp:w,shouldHandleStateChanges:O,storeKey:M,displayName:s,wrappedComponentName:i,WrappedComponent:a}),d=q.pure;var g=d?e.useMemo:function(e){return e()};function C(r){var i=e.useMemo((function(){var e=r.reactReduxForwardedRef,n=t(r,["reactReduxForwardedRef"]);return[r.context,e,n]}),[r]),s=i[0],p=i[1],d=i[2],l=e.useMemo((function(){return s&&s.Consumer&&o.isContextConsumer(e.createElement(s.Consumer,null))?s:D}),[s,D]),w=e.useContext(l),C=Boolean(r.store)&&Boolean(r.store.getState)&&Boolean(r.store.dispatch),E=(Boolean(w)&&Boolean(w.store),C?r.store:w.store),M=e.useMemo((function(){return function(e){return u(e.dispatch,c)}(E)}),[E]),x=e.useMemo((function(){if(!O)return h;var e=new f(E,C?null:w.subscription),n=e.notifyNestedSubs.bind(e);return[e,n]}),[E,C,w]),N=x[0],R=x[1],T=e.useMemo((function(){return C?w:n({},w,{subscription:N})}),[C,w,N]),q=e.useReducer(m,v,S),j=q[0][0],B=q[1];if(j&&j.error)throw j.error;var W=e.useRef(),F=e.useRef(d),H=e.useRef(),U=e.useRef(!1),k=g((function(){return H.current&&d===F.current?H.current:M(E.getState(),d)}),[E,j,d]);b(P,[F,W,U,d,k,H,R]),b(y,[O,E,N,M,F,W,U,H,R,B],[E,N,M]);var A=e.useMemo((function(){return e.createElement(a,n({},k,{ref:p}))}),[p,a,k]);return e.useMemo((function(){return O?e.createElement(l.Provider,{value:T},A):A}),[l,A,T])}var E=d?e.memo(C):C;if(E.WrappedComponent=a,E.displayName=s,N){var x=e.forwardRef((function(r,t){return e.createElement(E,n({},r,{reactReduxForwardedRef:t}))}));return x.displayName=s,x.WrappedComponent=a,r(x,a)}return r(E,a)}}function w(e,n){return e===n?0!==e||0!==n||1/e==1/n:e!=e&&n!=n}function C(e,n){if(w(e,n))return!0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n)return!1;var r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;for(var o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(n,r[o])||!w(e[r[o]],n[r[o]]))return!1;return!0}function O(e){return function(n,r){var t=e(n,r);function o(){return t}return o.dependsOnOwnProps=!1,o}}function E(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function M(e,n){return function(n,r){r.displayName;var t=function(e,n){return t.dependsOnOwnProps?t.mapToProps(e,n):t.mapToProps(e)};return t.dependsOnOwnProps=!0,t.mapToProps=function(n,r){t.mapToProps=e,t.dependsOnOwnProps=E(e);var o=t(n,r);return"function"==typeof o&&(t.mapToProps=o,t.dependsOnOwnProps=E(o),o=t(n,r)),o},t}}var x=[function(e){return"function"==typeof e?M(e):void 0},function(e){return e?void 0:O((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?O((function(n){return a(e,n)})):void 0}];var N=[function(e){return"function"==typeof e?M(e):void 0},function(e){return e?void 0:O((function(){return{}}))}];function R(e,r,t){return n({},t,e,r)}var T=[function(e){return"function"==typeof e?function(e){return function(n,r){r.displayName;var t,o=r.pure,u=r.areMergedPropsEqual,a=!1;return function(n,r,i){var s=e(n,r,i);return a?o&&u(s,t)||(t=s):(a=!0,t=s),t}}}(e):void 0},function(e){return e?void 0:function(){return R}}];function q(e,n,r,t){return function(o,u){return r(e(o,u),n(t,u),u)}}function D(e,n,r,t,o){var u,a,i,s,c,p=o.areStatesEqual,f=o.areOwnPropsEqual,d=o.areStatePropsEqual,l=!1;function v(o,l){var v,h,m=!f(l,a),b=!p(o,u);return u=o,a=l,m&&b?(i=e(u,a),n.dependsOnOwnProps&&(s=n(t,a)),c=r(i,s,a)):m?(e.dependsOnOwnProps&&(i=e(u,a)),n.dependsOnOwnProps&&(s=n(t,a)),c=r(i,s,a)):b?(v=e(u,a),h=!d(v,i),i=v,h&&(c=r(i,s,a)),c):c}return function(o,p){return l?v(o,p):(i=e(u=o,a=p),s=n(t,a),c=r(i,s,a),l=!0,c)}}function j(e,n){var r=n.initMapStateToProps,o=n.initMapDispatchToProps,u=n.initMergeProps,a=t(n,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),i=r(e,a),s=o(e,a),c=u(e,a);return(a.pure?D:q)(i,s,c,e,a)}function B(e,n,r){for(var t=n.length-1;t>=0;t--){var o=n[t](e);if(o)return o}return function(n,t){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+t.wrappedComponentName+".")}}function W(e,n){return e===n}function F(e){var r=void 0===e?{}:e,o=r.connectHOC,u=void 0===o?g:o,a=r.mapStateToPropsFactories,i=void 0===a?N:a,s=r.mapDispatchToPropsFactories,c=void 0===s?x:s,p=r.mergePropsFactories,f=void 0===p?T:p,d=r.selectorFactory,l=void 0===d?j:d;return function(e,r,o,a){void 0===a&&(a={});var s=a,p=s.pure,d=void 0===p||p,v=s.areStatesEqual,h=void 0===v?W:v,m=s.areOwnPropsEqual,b=void 0===m?C:m,P=s.areStatePropsEqual,y=void 0===P?C:P,S=s.areMergedPropsEqual,g=void 0===S?C:S,w=t(s,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),O=B(e,i,"mapStateToProps"),E=B(r,c,"mapDispatchToProps"),M=B(o,f,"mergeProps");return u(l,n({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:O,initMapDispatchToProps:E,initMergeProps:M,pure:d,areStatesEqual:h,areOwnPropsEqual:b,areStatePropsEqual:y,areMergedPropsEqual:g},w))}}var H,U=F();H=u.unstable_batchedUpdates,s=H;export{d as P,U as c};
