!function(){function e(e,r){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),l.push.apply(l,t)}return l}function r(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?e(Object(o),!0).forEach((function(e){l(r,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}function l(e,r,l){return r in e?Object.defineProperty(e,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[r]=l,e}var t=document.createElement("style");t.innerHTML=".el-alert{--el-alert-padding: 8px 16px;--el-alert-border-radius-base: var(--el-border-radius-base);--el-alert-title-font-size: 13px;--el-alert-description-font-size: 12px;--el-alert-close-font-size: 12px;--el-alert-close-customed-font-size: 13px;--el-alert-icon-size: 16px;--el-alert-icon-large-size: 28px;width:100%;padding:var(--el-alert-padding);margin:0;box-sizing:border-box;border-radius:var(--el-alert-border-radius-base);position:relative;background-color:var(--el-color-white);overflow:hidden;opacity:1;display:flex;align-items:center;transition:opacity var(--el-transition-duration-fast)}.el-alert.is-light .el-alert__close-btn{color:var(--el-text-color-placeholder)}.el-alert.is-dark .el-alert__close-btn,.el-alert.is-dark .el-alert__description{color:var(--el-color-white)}.el-alert.is-center{justify-content:center}.el-alert--success{--el-alert-bg-color: var(--el-color-success-light-9)}.el-alert--success.is-light{background-color:var(--el-alert-bg-color);color:var(--el-color-success)}.el-alert--success.is-light .el-alert__description{color:var(--el-color-success)}.el-alert--success.is-dark{background-color:var(--el-color-success);color:var(--el-color-white)}.el-alert--info{--el-alert-bg-color: var(--el-color-info-light-9)}.el-alert--info.is-light{background-color:var(--el-alert-bg-color);color:var(--el-color-info)}.el-alert--info.is-light .el-alert__description{color:var(--el-color-info)}.el-alert--info.is-dark{background-color:var(--el-color-info);color:var(--el-color-white)}.el-alert--warning{--el-alert-bg-color: var(--el-color-warning-light-9)}.el-alert--warning.is-light{background-color:var(--el-alert-bg-color);color:var(--el-color-warning)}.el-alert--warning.is-light .el-alert__description{color:var(--el-color-warning)}.el-alert--warning.is-dark{background-color:var(--el-color-warning);color:var(--el-color-white)}.el-alert--error{--el-alert-bg-color: var(--el-color-error-light-9)}.el-alert--error.is-light{background-color:var(--el-alert-bg-color);color:var(--el-color-error)}.el-alert--error.is-light .el-alert__description{color:var(--el-color-error)}.el-alert--error.is-dark{background-color:var(--el-color-error);color:var(--el-color-white)}.el-alert__content{display:table-cell;padding:0 8px}.el-alert .el-alert__icon{font-size:var(--el-alert-icon-size);width:var(--el-alert-icon-size)}.el-alert .el-alert__icon.is-big{font-size:var(--el-alert-icon-large-size);width:var(--el-alert-icon-large-size)}.el-alert__title{font-size:var(--el-alert-title-font-size);line-height:18px;vertical-align:text-top}.el-alert__title.is-bold{font-weight:700}.el-alert .el-alert__description{font-size:var(--el-alert-description-font-size);margin:5px 0 0}.el-alert .el-alert__close-btn{font-size:var(--el-alert-close-font-size);opacity:1;position:absolute;top:12px;right:15px;cursor:pointer}.el-alert .el-alert__close-btn.is-customed{font-style:normal;font-size:var(--el-alert-close-customed-font-size);top:9px}.el-alert-fade-enter-from,.el-alert-fade-leave-active{opacity:0}\n",document.head.appendChild(t),System.register(["./index-legacy.492b6ebd.js","./base-legacy.28cad0e5.js"],(function(e){"use strict";var t,o,a,i,n,c,s,u,d,f,p,g,b,v,y,h,_,w,k,m,x,z,O,j,P,S,E,C,T;return{setters:[function(e){t=e.d,o=e.C,a=e.r,i=e.c,n=e.a,c=e.b,s=e.e,u=e.K,d=e.m,f=e.g,p=e.u,g=e.l,b=e.k,v=e.f,y=e.i,h=e.O,_=e.t,w=e.F,k=e.j,m=e.L,x=e.T},function(e){z=e.b,O=e.aw,j=e.ax,P=e.ay,S=e.a,E=e.E,C=e._,T=e.w}],execute:function(){var D=z({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:O(j),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:["light","dark"],default:"light"}}),$={close:function(e){return e instanceof MouseEvent}},B=t({name:"ElAlert"}),I=t(r(r({},B),{},{props:D,emits:$,setup:function(e,r){var t=r.emit,z=e,O=P.Close,C=o(),T=S("alert"),D=a(!0),$=i((function(){return j[z.type]})),B=i((function(){return[T.e("icon"),l({},T.is("big"),!!z.description||!!C.default)]})),I=i((function(){return l({},T.is("bold"),z.description||C.default)})),L=function(e){D.value=!1,t("close",e)};return function(e,r){return n(),c(x,{name:p(T).b("fade"),persisted:""},{default:s((function(){return[u(d("div",{class:f([p(T).b(),p(T).m(e.type),p(T).is("center",e.center),p(T).is(e.effect)]),role:"alert"},[e.showIcon&&p($)?(n(),c(p(E),{key:0,class:f(p(B))},{default:s((function(){return[(n(),c(g(p($))))]})),_:1},8,["class"])):b("v-if",!0),d("div",{class:f(p(T).e("content"))},[e.title||e.$slots.title?(n(),v("span",{key:0,class:f([p(T).e("title"),p(I)])},[y(e.$slots,"title",{},(function(){return[h(_(e.title),1)]}))],2)):b("v-if",!0),e.$slots.default||e.description?(n(),v("p",{key:1,class:f(p(T).e("description"))},[y(e.$slots,"default",{},(function(){return[h(_(e.description),1)]}))],2)):b("v-if",!0),e.closable?(n(),v(w,{key:2},[e.closeText?(n(),v("div",{key:0,class:f([p(T).e("close-btn"),p(T).is("customed")]),onClick:L},_(e.closeText),3)):(n(),c(p(E),{key:1,class:f(p(T).e("close-btn")),onClick:L},{default:s((function(){return[k(p(O))]})),_:1},8,["class"]))],64)):b("v-if",!0)],2)],2),[[m,D.value]])]})),_:3},8,["name"])}}}));e("E",T(C(I,[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]])))}}}))}();
