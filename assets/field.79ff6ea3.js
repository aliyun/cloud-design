var e=Object.assign;import{r as t,$ as l,l as n,B as r,U as a,M as i,R as s,S as o,a2 as c,G as u}from"./index.4272a92a.js";import{q as m}from"./styled-components.browser.esm.6c715b82.js";import{N as d}from"./index.862f61cb.js";import{N as h}from"./index.e8b9b551.js";import{m as E}from"./moment.45ed427f.js";import{c as p,a as g}from"./redux.7df07dca.js";import{c as f,P as b}from"./index.8c727ee2.js";import"./index.42e756c2.js";import"./index.a95d1588.js";class v extends t.Component{constructor(){super(...arguments),this.state={show:!0,show2:!0},this.field=new l(this),this.field2=new l(this,{autoUnmount:!1})}render(){return t.createElement("div",null,this.state.show?t.createElement(n,e({},this.field.init("name",{initValue:"autoUnmount = true"}))):null,t.createElement(r,{onClick:()=>{console.log("value auto delete",this.field.getValues())},style:{marginLeft:4}},"print"),t.createElement(r,{onClick:()=>this.setState({show:!1}),warning:!0,style:{marginLeft:4}},"delete"),t.createElement("br",null),t.createElement("br",null),this.state.show2?t.createElement(n,e({},this.field2.init("name2",{initValue:"autoUnmount = false"}))):null,t.createElement(r,{onClick:()=>{console.log("value always exist",this.field2.getValues())},style:{marginLeft:4}},"print"),t.createElement(r,{onClick:()=>this.setState({show2:!1}),warning:!0,style:{marginLeft:4}},"delete"))}}const y=m.div``;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(v,null);return t.createElement(y,null,e)}});class V extends t.Component{constructor(){super(...arguments),this.field=new l(this)}onGetValue(){console.log(this.field.getValue("input"))}render(){const{init:l,setValue:a,reset:i}=this.field;return t.createElement("div",{className:"demo"},t.createElement(n,e({},l("input",{initValue:"test"}))),t.createElement("br",null),t.createElement("br",null),t.createElement(r,{type:"primary",onClick:this.onGetValue.bind(this)},"getValue"),t.createElement(r,{type:"primary",onClick:()=>a("input","set me by click")},"setValue"),t.createElement(r,{onClick:()=>i()},"reset"))}}const x=m.div`
  .demo .next-btn {
    margin-right: 5px;
  }
`;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(V,null);return t.createElement(x,null,e)}});class C extends t.Component{constructor(a){super(a),this.getValues=()=>{const e=this.field.getValues();console.log(e)},this.input=(l,r)=>t.createElement(n,e({},this.field.init(`name.${r}.input`))),this.op=(e,l)=>t.createElement("span",null,t.createElement(r,{type:"primary",onClick:this.addItem.bind(this,l+1)},"add"),t.createElement(r,{warning:!0,onClick:this.removeItem.bind(this,l),style:{marginLeft:4}},"delete")),this.idx=3,this.field=new l(this,{parseName:!0,values:{name:[0,1,2,3].map((e=>({id:e,input:e})))}})}addItem(e){++this.idx,this.field.addArrayValue("name",e,{id:this.idx,input:this.idx})}removeItem(e){this.field.deleteArrayValue("name",e)}render(){const e=this.field.getValue("name");return t.createElement("div",null,t.createElement(a,{dataSource:e},t.createElement(a.Column,{title:"id",dataIndex:"id"}),t.createElement(a.Column,{title:"input",dataIndex:"id",cell:this.input}),t.createElement(a.Column,{title:"operation",cell:this.op,width:150})),t.createElement("pre",{style:{marginTop:8}},JSON.stringify(e,null,2)))}}const S=m.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(C,null);return t.createElement(S,null,e)}});class w extends t.Component{constructor(e){super(e),this.onAdd=()=>{const e=this.state.value.concat([]);e.push("new"),this.setState({value:e}),this.props.onChange(e)},this.state={value:void 0===e.value?[]:e.value}}componentWillReceiveProps(e){"value"in e&&this.setState({value:void 0===e.value?[]:e.value})}render(){return t.createElement("div",{className:"custom"},this.state.value.map(((e,l)=>t.createElement(r,{key:l},e))),t.createElement(r,{type:"primary",onClick:this.onAdd.bind(this)},"Add ＋"," "))}}class O extends t.Component{constructor(){super(...arguments),this.field=new l(this,{deepReset:!0})}onGetValue(){console.log(this.field.getValue("custom"))}render(){const{init:l,setValue:n,reset:a}=this.field;return t.createElement("div",{className:"demo"},t.createElement(w,e({},l("custom",{initValue:["test"]}))),t.createElement("br",null),t.createElement("br",null),t.createElement(r,{type:"primary",onClick:this.onGetValue.bind(this)},"getValue"),t.createElement(r,{type:"primary",onClick:()=>n("custom",["test","setValue"])},"setValue"),t.createElement(r,{onClick:()=>a()},"reset"))}}const T=m.div`
  .demo .next-btn {
    margin-right: 5px;
  }
  .custom {
    border: 1px dashed;
    padding: 4px;
    display: inline-block;
  }
`;var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(O,null);return t.createElement(T,null,e)}});function M(){const a=l.useField(),{init:i,setValue:s,reset:o,getError:c}=a;return t.createElement("div",{className:"demo"},t.createElement(n,e({},i("input",{initValue:"test",rules:[{required:!0,pattern:/hello/,message:"must be hello"}]}))),t.createElement("span",{style:{color:"red"}},c("input")),t.createElement("br",null),t.createElement("br",null),t.createElement(r,{onClick:function(){a.setValue("input","xyz")}}," setValue "),t.createElement(r,{onClick:function(){console.log(a.getValue("input"))}}," getValue "),t.createElement("br",null),t.createElement("br",null))}const z=m.div``;var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(M,null);return t.createElement(z,null,e)}});const q=i.Group,D=s.Group,G=[{value:"apple",label:"apple"},{value:"pear",label:"pear"},{value:"orange",label:"orange"}],P={marginBottom:10,width:400};class A extends t.Component{constructor(){super(...arguments),this.field=new l(this)}render(){const{init:l,getValue:a}=this.field;return t.createElement("div",{className:"demo"},t.createElement("div",{style:{marginBottom:10}},t.createElement(D,e({},l("radiogroup",{initValue:"a"})),t.createElement(s,{value:"a"},"A"),t.createElement(s,{value:"b"},"B"),t.createElement(s,{value:"c"},"C"),t.createElement(s,{value:"d"},"D"))),"d"!==a("radiogroup")?t.createElement(o,e(e({},l("name",{initValue:"lucy"})),{style:P}),t.createElement(o.Option,{value:"jack"},"jack"),t.createElement(o.Option,{value:"lucy"},"lucy"),t.createElement(o.Option,{value:"disabled",disabled:!0},"disabled"),t.createElement(o.Option,{value:"hugohua"},"hugohua")):t.createElement(n,e({},l("name",{initValue:"frankqian"}))),t.createElement("br",null),t.createElement(c,e({style:e(e({},P),{marginTop:30}),slider:"double",scales:10,marks:10},l("range",{initValue:[20,40]}))),t.createElement("div",{style:{marginBottom:10}},t.createElement(q,e({dataSource:G},l("checkboxgroup",{initValue:["apple"]})))),t.createElement("div",{style:{marginBottom:10}},t.createElement(d,e({},l("datepicker")))),t.createElement("div",{style:{marginBottom:10}},t.createElement(d.RangePicker,e({},l("rangepicker")))),t.createElement("div",{style:{marginBottom:10}},t.createElement(h,e({},l("timepicker")))),t.createElement(r,{type:"primary",onClick:()=>{console.log(this.field.getValues())}},"getValues"),t.createElement(r,{onClick:()=>{this.field.setValues({name:"hugohua",range:[30,50],checkboxgroup:["orange"],radiogroup:"d"})}},"setValues"),t.createElement(r,{onClick:()=>{this.field.reset()}},"reset"))}}const W=m.div`
  .demo .next-btn {
    margin-right: 5px;
  }
`;var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(A,null);return t.createElement(W,null,e)}});class F extends t.Component{constructor(){super(...arguments),this.field=new l(this)}render(){const l=this.field.init;return t.createElement("div",null,t.createElement(u,e({},l("switch",{getValueFormatter:e=>e?1:0,setValueFormatter:e=>1===e}))),t.createElement("br",null),t.createElement(d,e({},l("time",{getValueFormatter:e=>e.format("YYYY-MM-DD"),setValueFormatter:e=>E(e,"YYYY-MM-DD")}))),t.createElement("br",null),t.createElement("pre",{style:{marginTop:8}},JSON.stringify(this.field.getValues(),null,2)))}}const L=m.div``;var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(F,null);return t.createElement(L,null,e)}});class I extends t.Component{constructor(){super(...arguments),this.field=new l(this),this.validate=()=>{console.log(this.field.getErrors()),this.field.validate(((e,t)=>{alert(JSON.stringify(e))}))}}render(){const{init:l,getError:a,setError:i,setErrors:s}=this.field;return t.createElement("div",{className:"demo"},t.createElement(n,e({},l("input",{rules:[{required:!0,pattern:/hello/,message:"must be hello"}]}))),t.createElement("br",null),t.createElement("span",{style:{color:"red"}},a("input")),t.createElement("br",null),t.createElement(r,{onClick:()=>{i("input","set error 1")}},"setError"),t.createElement(r,{onClick:()=>{s({input:"set error 2"})}},"setErrors"),t.createElement(r,{onClick:()=>{s({input:""})}},"clear"),t.createElement("br",null),t.createElement("br",null),t.createElement(n,e({},l("input2"))),t.createElement("br",null),t.createElement("span",{style:{color:"red"}},a("input2")),t.createElement("br",null),t.createElement(r,{onClick:()=>{i("input2","errors will be removed by onChange and shown on validate")}},"setError"),t.createElement(r,{onClick:this.validate},"validate"))}}const $=m.div`
  .demo .next-btn {
    margin-right: 5px;
  }
`;var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(I,null);return t.createElement($,null,e)}});class U extends t.Component{constructor(){super(...arguments),this.field=new l(this,{onChange:(e,t)=>{switch(console.log(this.field.getValues()),e){case"input":this.field.setValue("sync",`change to: ${t}`);break;case"select":this.field.setValue("sync",`${t} is coming`);break;case"range":this.field.setValue("sync",` (${t.join(",")}) ready`)}}})}render(){const{init:l,getValue:r}=this.field,a={marginBottom:10,width:400};return t.createElement("div",null,t.createElement(n,e(e({placeholder:"controlled by onChange"},l("input")),{style:a})),t.createElement("br",null),t.createElement(n,e(e({placeholder:"under control"},l("input")),{style:a})),t.createElement("br",null),t.createElement(o,e({style:a},l("select",{initValue:"lucy"})),t.createElement(o.Option,{value:"jack"},"jack"),t.createElement(o.Option,{value:"lucy"},"lucy"),t.createElement(o.Option,{value:"disabled",disabled:!0},"disabled"),t.createElement(o.Option,{value:"hugo"},"hugo")),t.createElement("br",null),"hugo"!==r("select")?t.createElement(c,e({style:e(e({},a),{marginTop:30}),slider:"double",scales:10,marks:10},l("range",{initValue:[20,40],trigger:"onProcess"}))):null,t.createElement("br",null),t.createElement("hr",{style:{marginBottom:10}}),t.createElement(n,e(e({placeholder:"everyone can control me"},l("sync")),{style:a})),t.createElement("br",null))}}const H=m.div``;var K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(U,null);return t.createElement(H,null,e)}});class Q extends t.Component{constructor(){super(...arguments),this.field=new l(this,{parseName:!0,values:{objWithDefaults:{a:1,b:2}}})}onGetValue(){console.log(this.field.getValues())}onSetValue(){this.field.setValues({obj:{b:"b",c:"c"},arr:["first","second"],objWithDefaults:{a:100,b:200}})}render(){const{init:l,reset:a,resetToDefault:i}=this.field;return t.createElement("div",{className:"demo"},t.createElement("h3",null,"Object transfer"),"obj.b: ",t.createElement(n,e({},l("obj.b",{initValue:"test1"}))),"   obj.c: ",t.createElement(n,e({},l("obj.c",{initValue:"test2"}))),t.createElement("br",null),t.createElement("h3",null,"Array transfer"),"arr.0: ",t.createElement(n,e({},l("arr.0",{initValue:"0"}))),"   arr.1:"," ",t.createElement(n,e({},l("arr.1",{initValue:"1"}))),t.createElement("br",null),t.createElement("br",null),t.createElement("h3",null,"Object with Defaults"),"objWithDefaults.a: ",t.createElement(n,e({},l("objWithDefaults.a"))),"   objWithDefaults.b: ",t.createElement(n,e({},l("objWithDefaults.b"))),t.createElement("br",null),t.createElement("br",null),"result:",t.createElement("pre",null,JSON.stringify(this.field.getValues(),null,2)),t.createElement("br",null),t.createElement("br",null),t.createElement(r,{type:"primary",onClick:this.onGetValue.bind(this)},"getValues"),t.createElement(r,{onClick:this.onSetValue.bind(this)},"setValues"),t.createElement(r,{onClick:()=>a()},"reset"),t.createElement(r,{onClick:()=>i()},"resetToDefault"))}}const X=m.div`
  .demo .next-btn {
    margin-right: 5px;
  }
`;var Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(Q,null);return t.createElement(X,null,e)}});class ee extends t.Component{constructor(){super(...arguments),this.field=new l(this,{onChange:(e,t)=>{console.log("onChange",e,t),this.field.setValue("newlen",t.length),this.props.dispatch({type:"save_fields",payload:{[e]:t}})}})}componentWillReceiveProps(e){this.field.setValues({email:e.email,newlen:e.email.length})}setEmail(){this.props.dispatch({type:"save_fields",payload:{email:"qq@gmail.com"}})}render(){const l=this.field.init,a=l("newlen",{initValue:this.props.email.length});return t.createElement("div",null,t.createElement(n,e({},l("email",{initValue:this.props.email},{rules:[{required:!0,type:"email",message:"at least 5 chars"}]}))),"now length is:",a.value,t.createElement("p",null,"email: ",this.props.email),t.createElement(r,{onClick:this.setEmail.bind(this)},"set"))}}const te=f((e=>({email:e.formReducer.email})))(ee),le=p(g({formReducer:function(t={email:"frankqian@qq.com"},l){switch(l.type){case"save_fields":return e(e({},t),l.payload);default:return t}}}));const ne=m.div``;var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(b,{store:le},t.createElement("div",null,t.createElement(te,null)));return t.createElement(ne,null,e)}});const ae=i.Group,ie=[{value:"apple",label:"apple"},{value:"pear",label:"pear"},{value:"orange",label:"orange"}];class se extends t.Component{constructor(){super(...arguments),this.state={checkboxStatus:!0},this.field=new l(this,{scrollToFirstError:-10})}isChecked(e,t,l){return t?l():l("consent agreement not checked ")}userName(e,t,l){"frank"===t?setTimeout((()=>l("name existed")),200):setTimeout((()=>l()),200)}render(){const{init:l,validate:a,reset:s}=this.field;return t.createElement("div",{className:"demo"},t.createElement(n,e({},l("input",{initValue:"delete all",rules:{required:!0}}))),this.field.getError("input")?t.createElement("span",{style:{color:"red"}},this.field.getError("input").join(",")):"",t.createElement("br",null),t.createElement("br",null),t.createElement(n,e({placeholder:"try onBlur"},l("input1",{rules:[{required:!0,message:"can not be empty",trigger:["onBlur","onChange"]}]}))),this.field.getError("input1")?t.createElement("span",{style:{color:"red"}},this.field.getError("input1").join(",")):"",t.createElement("br",null),t.createElement("br",null),t.createElement(n,e({defaultValue:"",placeholder:"try frank"},l("username",{rules:[{validator:this.userName,trigger:["onBlur","onChange"]}]}))),"loading"===this.field.getState("username")?"validating...":"",this.field.getError("username")?t.createElement("span",{style:{color:"red"}},this.field.getError("username").join(",")):"",t.createElement("br",null),t.createElement("br",null),"agreement:",t.createElement(i,e({},l("checkbox",{valueName:"checked",rules:[{validator:this.isChecked}]}))),this.field.getError("checkbox")?t.createElement("span",{style:{color:"red"}},this.field.getError("checkbox").join(",")):"",t.createElement("br",null),t.createElement("br",null),t.createElement(n.TextArea,e({placeholder:">3 and <10"},l("textarea",{rules:[{required:!0,minLength:3,maxLength:10}]}))),this.field.getError("textarea")?t.createElement("span",{style:{color:"red"}},this.field.getError("textarea").join(",")):"",t.createElement("br",null),t.createElement("br",null),this.state.checkboxStatus?t.createElement("div",null,"Array validate：",t.createElement(ae,e(e({dataSource:ie},l("checkboxgroup",{rules:[{required:!0,type:"array",message:"choose one please"}]})),{style:{marginBottom:10}})),this.field.getError("checkboxgroup")?t.createElement("span",{style:{color:"red"}},this.field.getError("checkboxgroup").join(",")):""):null,t.createElement("br",null),t.createElement("br",null),t.createElement(r,{type:"primary",onClick:()=>{a(((e,t)=>{console.log(e,t)}))}},"validate"),t.createElement(r,{onClick:()=>{s()}},"reset"),t.createElement(r,{onClick:()=>{this.state.checkboxStatus?(this.setState({checkboxStatus:!1}),this.field.remove("checkboxgroup")):this.setState({checkboxStatus:!0})}},this.state.checkboxStatus?"delete":"restore"))}}const oe=m.div`
  .demo .next-btn {
    margin-right: 5px;
  }
`;var ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(se,null);return t.createElement(oe,null,e)}});class ue extends t.Component{constructor(){super(...arguments),this.field=new l(this)}render(){const l=this.field.init;return t.createElement("div",{className:"demo"},t.createElement(s,e({},l("radio",{initValue:!1,valueName:"checked"}))," ","checked"),t.createElement("br",null),t.createElement(i,e({},l("checkbox",{valueName:"checked",initValue:!0})),"defaultChecked"),t.createElement("br",null),t.createElement(u,e(e({},l("switch",{valueName:"checked",initValue:!1})),{style:{marginTop:10,marginBottom:10}})),t.createElement("br",null),t.createElement(r,{type:"primary",onClick:()=>{console.log(this.field.getValues())}},"getValues"),t.createElement(r,{onClick:()=>{this.field.setValues({radio:!0,switch:!0,checkbox:!1})}}," ","setValues"," "),t.createElement(r,{onClick:()=>{this.field.reset()}},"reset"))}}const me=m.div`
  .demo .next-btn {
    margin-right: 5px;
  }
`;var de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(ue,null);return t.createElement(me,null,e)}});i.Group;class he extends t.Component{constructor(){super(...arguments),this.state={checkboxStatus:!0},this.field=new l(this,{scrollToFirstError:-10})}isChecked(e,t){return t?Promise.resolve(null):Promise.reject("consent agreement not checked ")}userName(e,t){return new Promise("frank"===t?(e,t)=>{setTimeout((()=>t("name existed")),200)}:e=>{setTimeout((()=>e(null)),200)})}render(){const l=this.field.init;return t.createElement("div",{className:"demo"},t.createElement(n,e({defaultValue:"",placeholder:"try frank"},l("username",{rules:[{validator:this.userName,trigger:["onBlur","onChange"]}]}))),"loading"===this.field.getState("username")?"validating...":"",this.field.getError("username")?t.createElement("span",{style:{color:"red"}},this.field.getError("username").join(",")):"",t.createElement("br",null),t.createElement("br",null),"agreement:",t.createElement(i,e({},l("checkbox",{valueName:"checked",rules:[{validator:this.isChecked}]}))),this.field.getError("checkbox")?t.createElement("span",{style:{color:"red"}},this.field.getError("checkbox").join(",")):"",t.createElement("br",null),t.createElement("br",null),t.createElement(r,{type:"primary",onClick:()=>{this.field.validatePromise().then((({errors:e,values:t})=>{console.log(e,t)}))}},"validate"),t.createElement(r,{onClick:()=>{this.field.reset()}},"reset"))}}const Ee=m.div`
  .demo .next-btn {
    margin-right: 5px;
  }
`;var pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(he,null);return t.createElement(Ee,null,e)}});const ge={};ge._autounmout=k,ge._basic=_,ge._dynamic=j,ge._custom=N,ge._hooks=B,ge._mix=Y,ge._normalize=R,ge._seterror=J,ge._onchange=K,ge._topath=Z,ge._redux=re,ge._validator=ce,ge._valuename=de,ge._validatorPromise=pe;export default ge;
