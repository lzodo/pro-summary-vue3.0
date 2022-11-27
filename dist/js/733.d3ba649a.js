"use strict";(self["webpackChunkpro_summary_vue3_0"]=self["webpackChunkpro_summary_vue3_0"]||[]).push([[733],{8567:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(1471),r=(n(7603),n(3396)),l=n(7139),i=n(9242);const o=e=>((0,r.dD)("data-v-4178b32e"),e=e(),(0,r.Cn)(),e),s={class:"login-page page header-page"},u={class:"top"},c={class:"menu"},d={class:"loginInfo"},g={class:"loginInner"},m={class:"sign sign-in"},p={class:"input-info"},v=o((()=>(0,r._)("span",{class:"label"},"user name or email",-1))),f={class:"input-info"},h=o((()=>(0,r._)("span",{class:"label"},"passwd",-1))),b=["src"];function y(e,t,n,o,y,k){const w=(0,r.up)("si-header"),C=a.g;return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(w,{title:"登录",type:"login"}),(0,r._)("div",u,[(0,r._)("div",c,[(0,r._)("div",{class:(0,l.C_)(["item",{active:0==e.activeIndex}]),onClick:t[0]||(t[0]=t=>e.changeTab(0))}," Sign In ",2),(0,r._)("div",{class:(0,l.C_)(["item",{active:1==e.activeIndex}]),onClick:t[1]||(t[1]=t=>e.changeTab(1))}," Sign Up ",2)])]),(0,r._)("div",d,[(0,r._)("div",g,[(0,r._)("div",m,[(0,r._)("div",p,[v,(0,r.Wm)(C,{"right-icon":"manager-o",modelValue:e.username,"onUpdate:modelValue":t[2]||(t[2]=t=>e.username=t),placeholder:"请输入用户名"},null,8,["modelValue"])]),(0,r._)("div",f,[h,(0,r.Wm)(C,{"right-icon":"eye-o",modelValue:e.passwd,"onUpdate:modelValue":t[3]||(t[3]=t=>e.passwd=t),placeholder:"请输入密码",type:"password"},null,8,["modelValue"])]),0==e.activeIndex?((0,r.wg)(),(0,r.j4)(C,{key:0,modelValue:e.userCodeVal,"onUpdate:modelValue":t[5]||(t[5]=t=>e.userCodeVal=t),center:"",clearable:"",label:"",placeholder:"请输入验证码","label-width":"50"},{button:(0,r.w5)((()=>[(0,r._)("img",{class:"verimgcode",src:e.verImg,onClick:t[4]||(t[4]=(...t)=>e.getVerifCode&&e.getVerifCode(...t))},null,8,b)])),_:1},8,["modelValue"])):(0,r.kq)("",!0),0==e.activeIndex?((0,r.wg)(),(0,r.iD)("button",{key:1,class:"submitbtn",type:"warning",onKeydown:t[6]||(t[6]=(0,i.D2)(((...t)=>e.signin&&e.signin(...t)),["enter"])),onClick:t[7]||(t[7]=(...t)=>e.signin&&e.signin(...t))}," 登 录 ",32)):(0,r.kq)("",!0),1==e.activeIndex?((0,r.wg)(),(0,r.iD)("button",{key:2,class:"submitbtn",type:"warning",onClick:t[8]||(t[8]=(...t)=>e.signup&&e.signup(...t))}," 注 册 ")):(0,r.kq)("",!0)])])])])}n(7658);var k=n(2135),w=n(2641);function C(e){return(0,w.Z)({url:"/api/users/login",headers:{notToken:!0,successdialog:!0,successMsg:encodeURIComponent("登录成功"),noterrdialog:!1},data:e,method:"post"})}function I(e){return(0,w.Z)({url:"/api/users/adduser",headers:{notToken:!0,successdialog:!0,successMsg:encodeURIComponent("注册成功")},data:e,method:"post"})}function V(){return(0,w.Z)({url:"/api/users/verifCode",headers:{notToken:!0},method:"get"})}var x=n(558),S=n(3554),W=(0,r.aZ)({name:"UserLogin",data(){return{activeIndex:0,username:"",passwd:"",verToken:"",verImg:"",userCodeVal:""}},components:{SiHeader:S.Z},methods:{changeTab(e){this.activeIndex=e},signin(){let e={name:this.username,passwd:this.passwd};(0,x.O)(e)||(this.verToken==this.userCodeVal?C(e).then((e=>{localStorage.setItem("token",e.token),localStorage.setItem("userInfo",JSON.stringify(e.userInfo)),this.$router.push({path:"/index"})})):(0,k.g)("验证码不正确"))},signup(){let e={name:this.username,passwd:this.passwd};(0,x.O)(e)||I(e).then((()=>{this.activeIndex=0}))},getVerifCode(){V().then((e=>{this.verImg=`data:image/jpeg;base64,${e.base64}`,this.verToken=e.token}))}},mounted(){this.getVerifCode()}}),_=n(89);const T=(0,_.Z)(W,[["render",y],["__scopeId","data-v-4178b32e"]]);var M=T},1471:function(e,t,n){n.d(t,{g:function(){return $}});var a=n(1404),r=n(3396),l=n(4870),i=n(610),o=n(5323),s=n(2220),u=n(5322),c=n(6491),d=n(6048),g=n(7936);function m(e){return Array.isArray(e)?!e.length:0!==e&&!e}function p(e,t){if(m(e)){if(t.required)return!1;if(!1===t.validateEmpty)return!0}return!(t.pattern&&!t.pattern.test(String(e)))}function v(e,t){return new Promise((n=>{const a=t.validator(e,t);(0,c.tI)(a)?a.then(n):n(a)}))}function f(e,t){const{message:n}=t;return(0,c.mf)(n)?n(e,t):n||""}function h({target:e}){e.composing=!0}function b({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function y(e,t){const n=(0,g.oD)();e.style.height="auto";let a=e.scrollHeight;if((0,c.Kn)(t)){const{maxHeight:e,minHeight:n}=t;void 0!==e&&(a=Math.min(a,e)),void 0!==n&&(a=Math.max(a,n))}a&&(e.style.height=`${a}px`,(0,g.kn)(n))}function k(e){return"number"===e?{type:"text",inputmode:"decimal"}:"digit"===e?{type:"tel",inputmode:"numeric"}:{type:e}}function w(e){return[...e].length}function C(e,t){return[...e].slice(0,t).join("")}var I=n(9048),V=n(253);let x=0;function S(){const e=(0,r.FN)(),{name:t="unknown"}=(null==e?void 0:e.type)||{};return`${t}-${++x}`}var W=n(3444),_=n(316),T=n(4250);const[M,q]=(0,i["do"])("field"),B={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:o.Or,formatter:Function,clearIcon:(0,o.SQ)("clear"),modelValue:(0,o.SI)(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:(0,o.SQ)("focus"),formatTrigger:(0,o.SQ)("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},F=(0,s.l7)({},I.x,B,{rows:o.Or,type:(0,o.SQ)("text"),rules:Array,autosize:[Boolean,Object],labelWidth:o.Or,labelClass:o.Vg,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var P=(0,r.aZ)({name:M,props:F,emits:["blur","focus","clear","keypress","click-input","end-validate","start-validate","click-left-icon","click-right-icon","update:modelValue"],setup(e,{emit:t,slots:n}){const a=S(),i=(0,l.qj)({status:"unvalidated",focused:!1,validateMessage:""}),o=(0,l.iH)(),I=(0,l.iH)(),x=(0,l.iH)(),{parent:M}=(0,V.NB)(u.WN),B=()=>{var t;return String(null!=(t=e.modelValue)?t:"")},F=t=>(0,c.Xq)(e[t])?e[t]:M&&(0,c.Xq)(M.props[t])?M.props[t]:void 0,P=(0,r.Fl)((()=>{const t=F("readonly");if(e.clearable&&!t){const t=""!==B(),n="always"===e.clearTrigger||"focus"===e.clearTrigger&&i.focused;return t&&n}return!1})),$=(0,r.Fl)((()=>x.value&&n.input?x.value():e.modelValue)),A=e=>e.reduce(((e,t)=>e.then((()=>{if("failed"===i.status)return;let{value:e}=$;if(t.formatter&&(e=t.formatter(e,t)),!p(e,t))return i.status="failed",void(i.validateMessage=f(e,t));if(t.validator){if(m(e)&&!1===t.validateEmpty)return;return v(e,t).then((n=>{n&&"string"===typeof n?(i.status="failed",i.validateMessage=n):!1===n&&(i.status="failed",i.validateMessage=f(e,t))}))}}))),Promise.resolve()),O=()=>{i.status="unvalidated",i.validateMessage=""},D=()=>t("end-validate",{status:i.status}),U=(n=e.rules)=>new Promise((a=>{O(),n?(t("start-validate"),A(n).then((()=>{"failed"===i.status?(a({name:e.name,message:i.validateMessage}),D()):(i.status="passed",a(),D())}))):a()})),E=t=>{if(M&&e.rules){const{validateTrigger:n}=M.props,a=(0,s.qo)(n).includes(t),r=e.rules.filter((e=>e.trigger?(0,s.qo)(e.trigger).includes(t):a));r.length&&U(r)}},H=t=>{const{maxlength:n}=e;if((0,c.Xq)(n)&&w(t)>n){const e=B();return e&&w(e)===+n?e:C(t,+n)}return t},Z=(n,a="onChange")=>{if(n=H(n),"number"===e.type||"digit"===e.type){const t="number"===e.type;n=(0,d.uf)(n,t,t)}e.formatter&&a===e.formatTrigger&&(n=e.formatter(n)),o.value&&o.value.value!==n&&(o.value.value=n),n!==e.modelValue&&t("update:modelValue",n)},z=e=>{e.target.composing||Z(e.target.value)},J=()=>{var e;return null==(e=o.value)?void 0:e.blur()},j=()=>{var e;return null==(e=o.value)?void 0:e.focus()},L=()=>{const t=o.value;"textarea"===e.type&&e.autosize&&t&&y(t,e.autosize)},N=e=>{i.focused=!0,t("focus",e),(0,r.Y3)(L),F("readonly")&&J()},Y=e=>{F("readonly")||(i.focused=!1,Z(B(),"onBlur"),t("blur",e),E("onBlur"),(0,r.Y3)(L),(0,g.pe)())},Q=e=>t("click-input",e),K=e=>t("click-left-icon",e),R=e=>t("click-right-icon",e),X=e=>{(0,g.PF)(e),t("update:modelValue",""),t("clear",e)},G=(0,r.Fl)((()=>"boolean"===typeof e.error?e.error:!(!M||!M.props.showError||"failed"!==i.status)||void 0)),ee=(0,r.Fl)((()=>{const e=F("labelWidth");if(e)return{width:(0,d.Nn)(e)}})),te=n=>{const a=13;if(n.keyCode===a){const t=M&&M.props.submitOnEnter;t||"textarea"===e.type||(0,g.PF)(n),"search"===e.type&&J()}t("keypress",n)},ne=()=>e.id||`${a}-input`,ae=()=>i.status,re=()=>{const t=q("control",[F("inputAlign"),{error:G.value,custom:!!n.input,"min-height":"textarea"===e.type&&!e.autosize}]);if(n.input)return(0,r.Wm)("div",{class:t,onClick:Q},[n.input()]);const l={id:ne(),ref:o,name:e.name,rows:void 0!==e.rows?+e.rows:void 0,class:t,disabled:F("disabled"),readonly:F("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,enterkeyhint:e.enterkeyhint,"aria-labelledby":e.label?`${a}-label`:void 0,onBlur:Y,onFocus:N,onInput:z,onClick:Q,onChange:b,onKeypress:te,onCompositionend:b,onCompositionstart:h};return"textarea"===e.type?(0,r.Wm)("textarea",l,null):(0,r.Wm)("input",(0,r.dG)(k(e.type),l),null)},le=()=>{const t=n["left-icon"];if(e.leftIcon||t)return(0,r.Wm)("div",{class:q("left-icon"),onClick:K},[t?t():(0,r.Wm)(_.J,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},ie=()=>{const t=n["right-icon"];if(e.rightIcon||t)return(0,r.Wm)("div",{class:q("right-icon"),onClick:R},[t?t():(0,r.Wm)(_.J,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},oe=()=>{if(e.showWordLimit&&e.maxlength){const t=w(B());return(0,r.Wm)("div",{class:q("word-limit")},[(0,r.Wm)("span",{class:q("word-num")},[t]),(0,r.Uk)("/"),e.maxlength])}},se=()=>{if(M&&!1===M.props.showErrorMessage)return;const t=e.errorMessage||i.validateMessage;if(t){const e=n["error-message"],a=F("errorMessageAlign");return(0,r.Wm)("div",{class:q("error-message",a)},[e?e({message:t}):t])}},ue=()=>{const t=F("colon")?":":"";return n.label?[n.label(),t]:e.label?(0,r.Wm)("label",{id:`${a}-label`,for:ne()},[e.label+t]):void 0},ce=()=>[(0,r.Wm)("div",{class:q("body")},[re(),P.value&&(0,r.Wm)(_.J,{ref:I,name:e.clearIcon,class:q("clear")},null),ie(),n.button&&(0,r.Wm)("div",{class:q("button")},[n.button()])]),oe(),se()];return(0,W.F)({blur:J,focus:j,validate:U,formValue:$,resetValidation:O,getValidationStatus:ae}),(0,r.JJ)(V.F1,{customValue:x,resetValidation:O,validateWithTrigger:E}),(0,r.YP)((()=>e.modelValue),(()=>{Z(B()),O(),E("onChange"),(0,r.Y3)(L)})),(0,r.bv)((()=>{Z(B(),e.formatTrigger),(0,r.Y3)(L)})),(0,V.OR)("touchstart",X,{target:(0,r.Fl)((()=>{var e;return null==(e=I.value)?void 0:e.$el}))}),()=>{const t=F("disabled"),a=F("labelAlign"),l=ue(),i=le();return(0,r.Wm)(T.b,{size:e.size,icon:e.leftIcon,class:q({error:G.value,disabled:t,[`label-${a}`]:a}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:ee.value,valueClass:q("value"),titleClass:[q("label",[a,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:i?()=>i:null,title:l?()=>l:null,value:ce,extra:n.extra})}}});const $=(0,a.n)(P)},7603:function(e,t,n){n(1958),n(368),n(6742),n(3094)}}]);
//# sourceMappingURL=733.d3ba649a.js.map