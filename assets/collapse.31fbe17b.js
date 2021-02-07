import{_ as e,d as t,e as o,K as a,w as l,f as r,r as n,g as i,b as s,p as c,u,c as m,j as d,o as p,R as h}from"./index.fee66166.js";import{q as b}from"./styled-components.browser.esm.6d4e4fc0.js";var y,g,E=(g=y=function(c){function u(){var e,l;t(this,u);for(var r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];return e=l=o(this,c.call.apply(c,[this].concat(n))),l.onKeyDown=function(e){if(e.keyCode===a.SPACE){var t=l.props.onClick;e.preventDefault(),t&&t(e)}},o(l,e)}return e(u,c),u.prototype.render=function(){var e,t,o=this.props,a=o.title,c=o.children,u=o.className,m=o.isExpanded,d=o.disabled,p=o.style,h=o.prefix,b=o.onClick,y=o.id,g=l(o,["title","children","className","isExpanded","disabled","style","prefix","onClick","id"]),E=r(((e={})[h+"collapse-panel"]=!0,e[h+"collapse-panel-hidden"]=!m,e[h+"collapse-panel-expanded"]=m,e[h+"collapse-panel-disabled"]=d,e[u]=u,e)),v=r(((t={})[h+"collapse-panel-icon"]=!0,t[h+"collapse-panel-icon-expanded"]=m,t)),P=y?y+"-heading":void 0,f=y?y+"-region":void 0;return n.createElement("div",i({className:E,style:p,id:y},g),n.createElement("div",{id:P,className:h+"collapse-panel-title",onClick:b,onKeyDown:this.onKeyDown,tabIndex:"0","aria-disabled":d,"aria-expanded":m,"aria-controls":f,role:"button"},n.createElement(s,{type:"arrow-right",className:v,"aria-hidden":"true"}),a),n.createElement("div",{className:h+"collapse-panel-content",role:"region",id:f},c))},u}(n.Component),y.propTypes={prefix:c.string,style:c.object,children:c.any,isExpanded:c.bool,disabled:c.bool,title:c.node,className:c.string,onClick:c.func,id:c.string},y.defaultProps={prefix:"next-",isExpanded:!1,onClick:u.noop},y.isNextPanel=!0,g);E.displayName="Panel";var v,P,f=m.config(E),k=(P=v=function(a){function l(e){t(this,l);var r=o(this,a.call(this,e)),n=void 0;return n="expandedKeys"in e?e.expandedKeys:e.defaultExpandedKeys,r.state={expandedKeys:void 0===n?[]:n},r}return e(l,a),l.getDerivedStateFromProps=function(e){return"expandedKeys"in e?{expandedKeys:void 0===e.expandedKeys?[]:e.expandedKeys}:null},l.prototype.onItemClick=function(e){var t=this.state.expandedKeys;if(this.props.accordion)t=String(t[0])===String(e)?[]:[e];else{t=[].concat(t);var o=String(e),a=t.findIndex((function(e){return String(e)===o}));a>-1?t.splice(a,1):t.push(e)}this.setExpandedKey(t)},l.prototype.genratePanelId=function(e,t){var o=this.props.id,a=void 0;return e?a=e:o&&(a=o+"-panel-"+t),a},l.prototype.getProps=function(e,t,o){var a=this,l=this.state.expandedKeys,r=e.title,n=this.props.disabled;n||(n=e.disabled);var i=!1;i=this.props.accordion?String(l[0])===String(o):l.some((function(e){return null!=e&&null!=o&&(e===o||e.toString()===o.toString())}));var s=this.genratePanelId(e.id,t);return{key:o,title:r,isExpanded:i,disabled:n,id:s,onClick:n?null:function(){a.onItemClick(o),"onClick"in e&&e.onClick(o)}}},l.prototype.getItemsByDataSource=function(){var e=this,t=this.props.dataSource,o=t.some((function(e){return"key"in e}));return t.map((function(t,a){var l=o?t.key:""+a;return n.createElement(f,i({},e.getProps(t,a,l),{key:l}),t.content)}))},l.prototype.getItemsByChildren=function(){var e=this,t=n.Children.map(this.props.children,(function(e){return e&&e.key})),o=Boolean(t.length);return n.Children.map(this.props.children,(function(t,a){if(t&&"function"==typeof t.type&&t.type.isNextPanel){var l=o?t.key:""+a;return n.cloneElement(t,e.getProps(t.props,a,l))}return t}))},l.prototype.setExpandedKey=function(e){"expandedKeys"in this.props||this.setState({expandedKeys:e}),this.props.onExpand(this.props.accordion?e[0]:e)},l.prototype.render=function(){var e,t=this.props,o=t.prefix,a=t.className,s=t.style,c=t.disabled,u=t.dataSource,m=t.id,d=t.rtl,h=r(((e={})[o+"collapse"]=!0,e[o+"collapse-disabled"]=c,e[a]=Boolean(a),e)),b=p.pickOthers(l.propTypes,this.props);return n.createElement("div",i({id:m,className:h,style:s},b,{role:"presentation",dir:d?"rtl":void 0}),u?this.getItemsByDataSource():this.getItemsByChildren())},l}(n.Component),v.propTypes={prefix:c.string,style:c.object,dataSource:c.array,defaultExpandedKeys:c.array,expandedKeys:c.array,onExpand:c.func,disabled:c.bool,className:c.string,accordion:c.bool,children:c.node,id:c.string,rtl:c.bool},v.defaultProps={accordion:!1,prefix:"next-",onExpand:u.noop},v.contextTypes={prefix:c.string},P);k.displayName="Collapse";var S=d(m.config(k));S.Panel=f;const x=S.Panel,w=h.Group;class _ extends n.Component{constructor(e){super(e),this.state={rtl:!1},this.handleDirectionChange=this.handleDirectionChange.bind(this)}handleDirectionChange(e){this.setState({rtl:!this.state.rtl})}render(){return n.createElement("div",null,n.createElement(w,{dataSource:["ltr","rtl"],value:this.state.rtl?"rtl":"ltr",onChange:this.handleDirectionChange}),n.createElement(S,{rtl:this.state.rtl},n.createElement(x,{title:"simple tile"},n.createElement("ul",null,n.createElement("li",null,"Promotions are marketing campaigns ran by Marketplace"),n.createElement("li",null,"Participate to sale your products during that promotion and make a profit"))),n.createElement(x,{title:"What are Promotion Products?"},n.createElement("ul",null,n.createElement("li",null,"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"),n.createElement("li",null,"You can choose which products should be available for the promotion"),n.createElement("li",null,"Not all Products of you will be available, because Promotions will only attract certain Product areas"))),n.createElement(x,{title:"Why can i not submit a higher price?"},n.createElement("ul",null,n.createElement("li",null,"The Promotion requires a certain price to make sure that our customers are attracted"))),n.createElement(x,{title:"What is Promo Stock?"},"Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active.")))}}const C=b.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(_,null);return n.createElement(C,null,e)}});const K=S.Panel;const W=b.div``;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(S,{accordion:!0},n.createElement(K,{title:"There is a long title, you can set the multiTitle to multi line display, the associated configuration properties and a single height is not the same, the specific configuration platform configuration can be configured."},n.createElement("ul",null,n.createElement("li",null,"Promotions are marketing campaigns ran by Marketplace"),n.createElement("li",null,"Participate to sale your products during that promotion and make a profit"))),n.createElement(K,{title:"What are Promotion Products?"},n.createElement("ul",null,n.createElement("li",null,"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"),n.createElement("li",null,"You can choose which products should be available for the promotion"),n.createElement("li",null,"Not all Products of you will be available, because Promotions will only attract certain Product areas"))),n.createElement(K,{title:"Why can i not submit a higher price?"},n.createElement("ul",null,n.createElement("li",null,"The Promotion requires a certain price to make sure that our customers are attracted"))),n.createElement(K,{title:"What is Promo Stock?"},"Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active."));return n.createElement(W,null,e)}});const T=S.Panel;const N=b.div``;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(S,{id:"collapse-accessibility"},n.createElement(T,{id:"panel-accessibility",title:"There is a long title, you can set the multiTitle to multi line display, the associated configuration properties and a single height is not the same, the specific configuration platform configuration can be configured."},n.createElement("ul",null,n.createElement("li",null,"Promotions are marketing campaigns ran by Marketplace"),n.createElement("li",null,"Participate to sale your products during that promotion and make a profit"))),n.createElement(T,{title:"What are Promotion Products?"},n.createElement("ul",null,n.createElement("li",null,"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"),n.createElement("li",null,"You can choose which products should be available for the promotion"),n.createElement("li",null,"Not all Products of you will be available, because Promotions will only attract certain Product areas"))));return n.createElement(N,null,e)}});const q=[{title:"Well, hello there",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",disabled:!0},{title:"Gigantomaniac Monster Text, very long, much width, wow",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{title:"Generic Title",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{title:"Login Infomation",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}];const D=b.div``;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(S,{dataSource:q});return n.createElement(D,null,e)}});const A=S.Panel;class O extends n.Component{constructor(e,t){super(e,t),this.state={expandedKeys:[]}}onExpand(e){this.setState({expandedKeys:e})}onClick(e){console.log("clicked",e)}render(){return n.createElement(S,{onExpand:this.onExpand.bind(this),expandedKeys:this.state.expandedKeys},n.createElement(A,{title:"simple tile",onClick:this.onClick},n.createElement("ul",null,n.createElement("li",null,"Promotions are marketing campaigns ran by Marketplace"),n.createElement("li",null,"Participate to sale your products during that promotion and make a profit"))),n.createElement(A,{title:"What are Promotion Products?"},n.createElement("ul",null,n.createElement("li",null,"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"),n.createElement("li",null,"You can choose which products should be available for the promotion"),n.createElement("li",null,"Not all Products of you will be available, because Promotions will only attract certain Product areas"))),n.createElement(A,{title:"Why can i not submit a higher price?"},n.createElement("ul",null,n.createElement("li",null,"The Promotion requires a certain price to make sure that our customers are attracted"))),n.createElement(A,{title:"What is Promo Stock?"},"Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active."))}}const Y=b.div``;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(O,null);return n.createElement(Y,null,e)}});const B=S.Panel;const G=b.div``;var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement("div",null,n.createElement(S,{disabled:!0},n.createElement(B,{title:"disable collapse"},n.createElement("ul",null,n.createElement("li",null,"Promotions are marketing campaigns ran by Marketplace"),n.createElement("li",null,"Participate to sale your products during that promotion and make a profit"))),n.createElement(B,{title:"disable collapse"},n.createElement("ul",null,n.createElement("li",null,"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"),n.createElement("li",null,"You can choose which products should be available for the promotion"),n.createElement("li",null,"Not all Products of you will be available, because Promotions will only attract certain Product areas"))),n.createElement(B,{title:"disable collapse"},n.createElement("ul",null,n.createElement("li",null,"The Promotion requires a certain price to make sure that our customers are attracted"))),n.createElement(B,{title:"disable collapse"},"Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active.")),n.createElement("br",null),n.createElement(S,null,n.createElement(B,{title:"simple title(disabled)",disabled:!0},n.createElement("ul",null,n.createElement("li",null,"Promotions are marketing campaigns ran by Marketplace"),n.createElement("li",null,"Participate to sale your products during that promotion and make a profit"))),n.createElement(B,{title:"What are Promotion Products?(disabled)",disabled:!0},n.createElement("ul",null,n.createElement("li",null,"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"),n.createElement("li",null,"You can choose which products should be available for the promotion"),n.createElement("li",null,"Not all Products of you will be available, because Promotions will only attract certain Product areas"))),n.createElement(B,{title:"Why can i not submit a higher price?"},n.createElement("ul",null,n.createElement("li",null,"The Promotion requires a certain price to make sure that our customers are attracted"))),n.createElement(B,{title:"What is Promo Stock?"},"Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active.")));return n.createElement(G,null,e)}});const R=S.Panel;const H=b.div``;var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement("div",null,n.createElement(S,null,n.createElement(R,{title:"simple tile"},n.createElement(S,null,n.createElement(R,{title:"simple tile"},n.createElement("ul",null,n.createElement("li",null,"Promotions are marketing campaigns ran by Marketplace"),n.createElement("li",null,"Participate to sale your products during that promotion and make a profit"))),n.createElement(R,{title:"What are Promotion Products?"},n.createElement("ul",null,n.createElement("li",null,"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"),n.createElement("li",null,"You can choose which products should be available for the promotion"),n.createElement("li",null,"Not all Products of you will be available, because Promotions will only attract certain Product areas"))),n.createElement(R,{title:"Why can i not submit a higher price?"},n.createElement("ul",null,n.createElement("li",null,"The Promotion requires a certain price to make sure that our customers are attracted"))),n.createElement(R,{title:"What is Promo Stock?"},"Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active."))),n.createElement(R,{title:"What are Promotion Products?"},n.createElement("ul",null,n.createElement("li",null,"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"),n.createElement("li",null,"You can choose which products should be available for the promotion"),n.createElement("li",null,"Not all Products of you will be available, because Promotions will only attract certain Product areas")))));return n.createElement(H,null,e)}});const Q={};Q._basic=j,Q._accordion=M,Q._accessibility=L,Q._datasource=I,Q._event=z,Q._disabled=F,Q._nested=J;export default Q;
