import{_ as e,d as t,e as o,K as a,k as r,f as i,r as n,g as l,b as s,p as c,y as u,c as d,j as m,o as p,E as h}from"./index.4543a34a.js";import{q as y}from"./styled-components.browser.esm.09d3b94c.js";var g,b,v=(b=g=function(c){function u(){var e,r;t(this,u);for(var i=arguments.length,n=Array(i),l=0;l<i;l++)n[l]=arguments[l];return e=r=o(this,c.call.apply(c,[this].concat(n))),r.onKeyDown=function(e){if(e.keyCode===a.SPACE){var t=r.props.onClick;e.preventDefault(),t&&t(e)}},o(r,e)}return e(u,c),u.prototype.render=function(){var e,t,o=this.props,a=o.title,c=o.children,u=o.className,d=o.isExpanded,m=o.disabled,p=o.style,h=o.prefix,y=o.onClick,g=o.id,b=r(o,["title","children","className","isExpanded","disabled","style","prefix","onClick","id"]),v=i(((e={})[h+"collapse-panel"]=!0,e[h+"collapse-panel-hidden"]=!d,e[h+"collapse-panel-expanded"]=d,e[h+"collapse-panel-disabled"]=m,e[u]=u,e)),f=i(((t={})[h+"collapse-panel-icon"]=!0,t[h+"collapse-panel-icon-expanded"]=d,t)),P=g?g+"-heading":void 0,k=g?g+"-region":void 0;return n.createElement("div",l({className:v,style:p,id:g},b),n.createElement("div",{id:P,className:h+"collapse-panel-title",onClick:y,onKeyDown:this.onKeyDown,tabIndex:"0","aria-disabled":m,"aria-expanded":d,"aria-controls":k,role:"button"},n.createElement(s,{type:"arrow-right",className:f,"aria-hidden":"true"}),a),n.createElement("div",{className:h+"collapse-panel-content",role:"region",id:k},c))},u}(n.Component),g.propTypes={prefix:c.string,style:c.object,children:c.any,isExpanded:c.bool,disabled:c.bool,title:c.node,className:c.string,onClick:c.func,id:c.string},g.defaultProps={prefix:"next-",isExpanded:!1,onClick:u.noop},g.isNextPanel=!0,b);v.displayName="Panel";var f,P,k=d.config(v),E=(P=f=function(a){function r(e){t(this,r);var i=o(this,a.call(this,e)),n=void 0;return n="expandedKeys"in e?e.expandedKeys:e.defaultExpandedKeys,i.state={expandedKeys:void 0===n?[]:n},i}return e(r,a),r.getDerivedStateFromProps=function(e){return"expandedKeys"in e?{expandedKeys:void 0===e.expandedKeys?[]:e.expandedKeys}:null},r.prototype.onItemClick=function(e){var t=this.state.expandedKeys;if(this.props.accordion)t=String(t[0])===String(e)?[]:[e];else{t=[].concat(t);var o=String(e),a=t.findIndex((function(e){return String(e)===o}));a>-1?t.splice(a,1):t.push(e)}this.setExpandedKey(t)},r.prototype.genratePanelId=function(e,t){var o=this.props.id,a=void 0;return e?a=e:o&&(a=o+"-panel-"+t),a},r.prototype.getProps=function(e,t,o){var a=this,r=this.state.expandedKeys,i=e.title,n=this.props.disabled;n||(n=e.disabled);var l=!1;l=this.props.accordion?String(r[0])===String(o):r.some((function(e){return null!=e&&null!=o&&(e===o||e.toString()===o.toString())}));var s=this.genratePanelId(e.id,t);return{key:o,title:i,isExpanded:l,disabled:n,id:s,onClick:n?null:function(){a.onItemClick(o),"onClick"in e&&e.onClick(o)}}},r.prototype.getItemsByDataSource=function(){var e=this,t=this.props.dataSource,o=t.some((function(e){return"key"in e}));return t.map((function(t,a){var r=o?t.key:""+a;return n.createElement(k,l({},e.getProps(t,a,r),{key:r}),t.content)}))},r.prototype.getItemsByChildren=function(){var e=this,t=n.Children.map(this.props.children,(function(e){return e&&e.key})),o=Boolean(t.length);return n.Children.map(this.props.children,(function(t,a){if(t&&"function"==typeof t.type&&t.type.isNextPanel){var r=o?t.key:""+a;return n.cloneElement(t,e.getProps(t.props,a,r))}return t}))},r.prototype.setExpandedKey=function(e){"expandedKeys"in this.props||this.setState({expandedKeys:e}),this.props.onExpand(this.props.accordion?e[0]:e)},r.prototype.render=function(){var e,t=this.props,o=t.prefix,a=t.className,s=t.style,c=t.disabled,u=t.dataSource,d=t.id,m=t.rtl,h=i(((e={})[o+"collapse"]=!0,e[o+"collapse-disabled"]=c,e[a]=Boolean(a),e)),y=p.pickOthers(r.propTypes,this.props);return n.createElement("div",l({id:d,className:h,style:s},y,{role:"presentation",dir:m?"rtl":void 0}),u?this.getItemsByDataSource():this.getItemsByChildren())},r}(n.Component),f.propTypes={prefix:c.string,style:c.object,dataSource:c.array,defaultExpandedKeys:c.array,expandedKeys:c.array,onExpand:c.func,disabled:c.bool,className:c.string,accordion:c.bool,children:c.node,id:c.string,rtl:c.bool},f.defaultProps={accordion:!1,prefix:"next-",onExpand:u.noop},f.contextTypes={prefix:c.string},P);E.displayName="Collapse";var S=m(d.config(E));S.Panel=k;const x=S.Panel;const w=y.div``;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(S,{id:"collapse-accessibility"},n.createElement(x,{id:"panel-accessibility",title:"There is a long title, you can set the multiTitle to multi line display, the associated configuration properties and a single height is not the same, the specific configuration platform configuration can be configured."},n.createElement("ul",null,n.createElement("li",null,"Promotions are marketing campaigns ran by Marketplace"),n.createElement("li",null,"Participate to sale your products during that promotion and make a profit"))),n.createElement(x,{title:"What are Promotion Products?"},n.createElement("ul",null,n.createElement("li",null,"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"),n.createElement("li",null,"You can choose which products should be available for the promotion"),n.createElement("li",null,"Not all Products of you will be available, because Promotions will only attract certain Product areas"))));return n.createElement(w,null,e)}});const j=S.Panel;const C=y.div``;var K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(S,{accordion:!0},n.createElement(j,{title:"There is a long title, you can set the multiTitle to multi line display, the associated configuration properties and a single height is not the same, the specific configuration platform configuration can be configured."},"Promotions are marketing campaigns ran by Marketplace. Participate to sale your products during that promotion and make a profit"),n.createElement(j,{title:"What are Promotion Products?"},"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range. You can choose which products should be available for the promotion. Not all Products of you will be available, because Promotions will only attract certain Product areas."),n.createElement(j,{title:"Why can i not submit a higher price?"},"The Promotion requires a certain price to make sure that our customers are attracted."),n.createElement(j,{title:"What is Promo Stock?"},"Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active."));return n.createElement(C,null,e)}});const W=S.Panel;class T extends n.Component{constructor(e,t){super(e,t),this.state={expandedKeys:[]}}onExpand(e){this.setState({expandedKeys:e})}onClick(e){console.log("clicked",e)}render(){return n.createElement(S,{onExpand:this.onExpand.bind(this),expandedKeys:this.state.expandedKeys},n.createElement(W,{title:"simple tile",onClick:this.onClick},"Promotions are marketing campaigns ran by Marketplace. Participate to sale your products during that promotion and make a profit"),n.createElement(W,{title:"What are Promotion Products?"},"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range. You can choose which products should be available for the promotion. Not all Products of you will be available, because Promotions will only attract certain Product areas."),n.createElement(W,{title:"Why can i not submit a higher price?"},"The Promotion requires a certain price to make sure that our customers are attracted."),n.createElement(W,{title:"What is Promo Stock?"},"Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active."))}}const M=y.div``;var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(T,null);return n.createElement(M,null,e)}});const L=[{title:"Well, hello there",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",disabled:!0},{title:"Gigantomaniac Monster Text, very long, much width, wow",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{title:"Generic Title",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{title:"Login Infomation",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}];const q=y.div``;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(S,{dataSource:L});return n.createElement(q,null,e)}});const A=S.Panel;h.Group;const O=y.div``;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(S,null,n.createElement(A,{title:"simple tile"},"Promotions are marketing campaigns ran by Marketplace. Participate to sale your products during that promotion and make a profit"),n.createElement(A,{title:"What are Promotion Products?"},"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range. You can choose which products should be available for the promotion. Not all Products of you will be available, because Promotions will only attract certain Product areas."),n.createElement(A,{title:"Why can i not submit a higher price?"},"The Promotion requires a certain price to make sure that our customers are attracted."),n.createElement(A,{title:"What is Promo Stock?",disabled:!0},"Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active."));return n.createElement(O,null,e)}});const D=S.Panel;const Y=y.div``;var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(S,{disabled:!0},n.createElement(D,{title:"simple tile"},"Promotions are marketing campaigns ran by Marketplace. Participate to sale your products during that promotion and make a profit"),n.createElement(D,{title:"What are Promotion Products?"},"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range. You can choose which products should be available for the promotion. Not all Products of you will be available, because Promotions will only attract certain Product areas."),n.createElement(D,{title:"Why can i not submit a higher price?"},"The Promotion requires a certain price to make sure that our customers are attracted."),n.createElement(D,{title:"What is Promo Stock?"},"Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active."));return n.createElement(Y,null,e)}});const G=S.Panel;const F=y.div``;var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement("div",null,n.createElement(S,null,n.createElement(G,{title:"simple tile"},n.createElement(S,null,n.createElement(G,{title:"simple tile"},n.createElement("ul",null,n.createElement("li",null,"Promotions are marketing campaigns ran by Marketplace"),n.createElement("li",null,"Participate to sale your products during that promotion and make a profit"))),n.createElement(G,{title:"What are Promotion Products?"},n.createElement("ul",null,n.createElement("li",null,"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"),n.createElement("li",null,"You can choose which products should be available for the promotion"),n.createElement("li",null,"Not all Products of you will be available, because Promotions will only attract certain Product areas"))),n.createElement(G,{title:"Why can i not submit a higher price?"},n.createElement("ul",null,n.createElement("li",null,"The Promotion requires a certain price to make sure that our customers are attracted"))),n.createElement(G,{title:"What is Promo Stock?"},"Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active."))),n.createElement(G,{title:"What are Promotion Products?"},n.createElement("ul",null,n.createElement("li",null,"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"),n.createElement("li",null,"You can choose which products should be available for the promotion"),n.createElement("li",null,"Not all Products of you will be available, because Promotions will only attract certain Product areas")))));return n.createElement(F,null,e)}});const J={};J._accessibility=_,J._accordion=K,J._event=N,J._datasource=I,J._basic=z,J._disabled=B,J._nested=H;export default J;
