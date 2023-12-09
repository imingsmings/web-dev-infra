"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[31055],{489705:function($,f,e){e.d(f,{Z:function(){return D}});var m=e(487462),_=e(667294),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},i=s,l=e(713401),t=function(r,E){return _.createElement(l.Z,(0,m.Z)({},r,{ref:E,icon:i}))},D=_.forwardRef(t)},900366:function($,f,e){e.d(f,{Z:function(){return ye}});var m=e(601413),_=e(487462),s=e(671002),i=e(297685),l=e(912402),t=e(667294),D=e(602788),y=e(440228),r=e(294184),E=e.n(r),I=e(908410),g=e(821770),h=e(366680);function C(d){var n=window.innerWidth||document.documentElement.clientWidth,a=window.innerHeight||document.documentElement.clientHeight,u=d.getBoundingClientRect(),o=u.top,A=u.right,O=u.bottom,L=u.left;return o>=0&&L>=0&&A<=n&&O<=a}function x(d,n,a){var u;return(u=a!=null?a:n)!==null&&u!==void 0?u:d===null?"center":"bottom"}function j(d,n,a,u){var o=(0,t.useState)(void 0),A=(0,i.Z)(o,2),O=A[0],L=A[1];(0,I.Z)(function(){var P=typeof d=="function"?d():d;L(P||null)});var Z=(0,t.useState)(null),U=(0,i.Z)(Z,2),M=U[0],v=U[1],T=(0,h.Z)(function(){if(O){!C(O)&&n&&O.scrollIntoView(u);var P=O.getBoundingClientRect(),W=P.left,N=P.top,q=P.width,ee=P.height,X={left:W,top:N,width:q,height:ee,radius:0};v(function(Y){return JSON.stringify(Y)!==JSON.stringify(X)?X:Y})}else v(null)}),F=function(W){var N;return(N=Array.isArray(a==null?void 0:a.offset)?a==null?void 0:a.offset[W]:a==null?void 0:a.offset)!==null&&N!==void 0?N:6};(0,I.Z)(function(){return T(),window.addEventListener("resize",T),function(){window.removeEventListener("resize",T)}},[O,n,T]);var K=(0,t.useMemo)(function(){if(!M)return M;var P=F(0),W=F(1),N=(a==null?void 0:a.radius)||2;return{left:M.left-P,top:M.top-W,width:M.width+P*2,height:M.height+W*2,radius:N}},[M,a]);return[K,O]}var S=e(807028),p={fill:"transparent",pointerEvents:"auto"},B=function(n){var a=n.prefixCls,u=n.rootClassName,o=n.pos,A=n.showMask,O=n.style,L=O===void 0?{}:O,Z=n.fill,U=Z===void 0?"rgba(0,0,0,0.5)":Z,M=n.open,v=n.animated,T=n.zIndex,F=(0,S.Z)(),K="".concat(a,"-mask-").concat(F),P=(0,s.Z)(v)==="object"?v==null?void 0:v.placeholder:v;return t.createElement(D.Z,{open:M,autoLock:!0},t.createElement("div",{className:E()("".concat(a,"-mask"),u),style:(0,m.Z)({position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:T,pointerEvents:o?"none":"auto"},L)},A?t.createElement("svg",{style:{width:"100%",height:"100%"}},t.createElement("defs",null,t.createElement("mask",{id:K},t.createElement("rect",{x:"0",y:"0",width:"100vw",height:"100vh",fill:"white"}),o&&t.createElement("rect",{x:o.left,y:o.top,rx:o.radius,width:o.width,height:o.height,fill:"black",className:P?"".concat(a,"-placeholder-animated"):""}))),t.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:U,mask:"url(#".concat(K,")")}),o&&t.createElement(t.Fragment,null,t.createElement("rect",(0,_.Z)({},p,{x:"0",y:"0",width:"100%",height:o.top})),t.createElement("rect",(0,_.Z)({},p,{x:"0",y:"0",width:o.left,height:"100%"})),t.createElement("rect",(0,_.Z)({},p,{x:"0",y:o.top+o.height,width:"100%",height:"calc(100vh - ".concat(o.top+o.height,"px)")})),t.createElement("rect",(0,_.Z)({},p,{x:o.left+o.width,y:"0",width:"calc(100vw - ".concat(o.left+o.width,"px)"),height:"100%"})))):null))},c=B,ae={adjustX:1,adjustY:1},k=[0,0],se={left:{points:["cr","cl"],offset:[-8,0]},right:{points:["cl","cr"],offset:[8,0]},top:{points:["bc","tc"],offset:[0,-8]},bottom:{points:["tc","bc"],offset:[0,8]},topLeft:{points:["bl","tl"],offset:[0,-8]},leftTop:{points:["tr","tl"],offset:[-8,0]},topRight:{points:["br","tr"],offset:[0,-8]},rightTop:{points:["tl","tr"],offset:[8,0]},bottomRight:{points:["tr","br"],offset:[0,8]},rightBottom:{points:["bl","br"],offset:[8,0]},bottomLeft:{points:["tl","bl"],offset:[0,8]},leftBottom:{points:["br","bl"],offset:[-8,0]}};function oe(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n={};return Object.keys(se).forEach(function(a){n[a]=(0,m.Z)((0,m.Z)({},se[a]),{},{autoArrow:d,targetOffset:k})}),n}var Ge=oe(),Pe=e(974902);function Ce(d){var n=d.prefixCls,a=d.current,u=d.total,o=d.title,A=d.description,O=d.onClose,L=d.onPrev,Z=d.onNext,U=d.onFinish,M=d.className,v=d.closeIcon,T=v!==!1&&v!==null,F=v!==void 0&&v!==!0?v:t.createElement("span",{className:"".concat(n,"-close-x")},"\xD7");return t.createElement("div",{className:E()("".concat(n,"-content"),M)},t.createElement("div",{className:"".concat(n,"-inner")},T&&t.createElement("button",{type:"button",onClick:O,"aria-label":"Close",className:"".concat(n,"-close")},F),t.createElement("div",{className:"".concat(n,"-header")},t.createElement("div",{className:"".concat(n,"-title")},o)),t.createElement("div",{className:"".concat(n,"-description")},A),t.createElement("div",{className:"".concat(n,"-footer")},t.createElement("div",{className:"".concat(n,"-sliders")},u>1?(0,Pe.Z)(Array.from({length:u}).keys()).map(function(K,P){return t.createElement("span",{key:K,className:P===a?"active":""})}):null),t.createElement("div",{className:"".concat(n,"-buttons")},a!==0?t.createElement("button",{className:"".concat(n,"-prev-btn"),onClick:L},"Prev"):null,a===u-1?t.createElement("button",{className:"".concat(n,"-finish-btn"),onClick:U},"Finish"):t.createElement("button",{className:"".concat(n,"-next-btn"),onClick:Z},"Next")))))}var Oe=function(n){var a=n.current,u=n.renderPanel;return t.createElement(t.Fragment,null,typeof u=="function"?u(n,a):t.createElement(Ce,n))},Me=Oe,De=["prefixCls","steps","defaultCurrent","current","onChange","onClose","onFinish","open","mask","arrow","rootClassName","placement","renderPanel","gap","animated","scrollIntoViewOptions","zIndex","closeIcon"],xe={left:"50%",top:"50%",width:1,height:1},je=function(n){var a=n.prefixCls,u=a===void 0?"rc-tour":a,o=n.steps,A=o===void 0?[]:o,O=n.defaultCurrent,L=n.current,Z=n.onChange,U=n.onClose,M=n.onFinish,v=n.open,T=n.mask,F=T===void 0?!0:T,K=n.arrow,P=K===void 0?!0:K,W=n.rootClassName,N=n.placement,q=n.renderPanel,ee=n.gap,X=n.animated,Y=n.scrollIntoViewOptions,Ie=Y===void 0?!0:Y,le=n.zIndex,ie=le===void 0?1001:le,Te=n.closeIcon,Re=(0,l.Z)(n,De),de=t.useRef(),Ze=(0,g.default)(0,{value:L,defaultValue:O}),ue=(0,i.Z)(Ze,2),b=ue[0],ce=ue[1],Ue=(0,g.default)(void 0,{value:v,postState:function(R){return b<0||b>=A.length?!1:R!=null?R:!0}}),fe=(0,i.Z)(Ue,2),z=fe[0],We=fe[1],_e=t.useRef(z);(0,I.Z)(function(){z&&!_e.current&&ce(0),_e.current=z},[z]);var V=A[b]||{},Se=V.target,Be=V.placement,Le=V.style,me=V.arrow,Ke=V.className,te=V.mask,ne=V.scrollIntoViewOptions,re=V.closeIcon,J=z&&(te!=null?te:F),Ne=re!=null?re:Te,be=ne!=null?ne:Ie,Fe=j(Se,v,ee,be),ve=(0,i.Z)(Fe,2),Ee=ve[0],w=ve[1],ze=x(w,N,Be),Q=w?typeof me=="undefined"?P:me:!1,ge=(0,s.Z)(Q)==="object"?Q.pointAtCenter:!1;(0,I.Z)(function(){var H;(H=de.current)===null||H===void 0||H.forceAlign()},[ge,b]);var he=function(R){ce(R),Z==null||Z(R)};if(w===void 0)return null;var pe=function(){We(!1),U==null||U(b)},Ve=function(){return t.createElement(Me,(0,_.Z)({arrow:Q,key:"content",prefixCls:u,total:A.length,renderPanel:q,onPrev:function(){he(b-1)},onNext:function(){he(b+1)},onClose:pe,current:b,onFinish:function(){pe(),M==null||M()},closeIcon:Ne},A[b]))},He=typeof J=="boolean"?J:!!J,G=typeof J=="boolean"?void 0:J,$e=function(R){return R||w||document.body};return t.createElement(t.Fragment,null,t.createElement(c,{zIndex:ie,prefixCls:u,pos:Ee,showMask:He,style:G==null?void 0:G.style,fill:G==null?void 0:G.color,open:z,animated:X,rootClassName:W}),t.createElement(y.Z,(0,_.Z)({builtinPlacements:oe(ge)},Re,{ref:de,popupStyle:Le,popupPlacement:ze,popupVisible:z,popupClassName:E()(W,Ke),prefixCls:u,popup:Ve,forceRender:!1,destroyPopupOnHide:!0,zIndex:ie,getTriggerDOMNode:$e,arrow:!!Q}),t.createElement(D.Z,{open:z,autoLock:!0},t.createElement("div",{className:E()(W,"".concat(u,"-target-placeholder")),style:(0,m.Z)((0,m.Z)({},Ee||xe),{},{position:"fixed",pointerEvents:"none"})}))))},Ae=je,ye=Ae},649150:function($,f,e){e.r(f);var m=e(805574),_=e.n(m),s=e(667294),i=e(489705),l=e(988872),t=e(315816),D=e(945016),y=e(739838),r=e(785893),E=function(){var g=(0,s.useRef)(null),h=(0,s.useRef)(null),C=(0,s.useRef)(null),x=(0,s.useState)(!1),j=_()(x,2),S=j[0],p=j[1],B=[{title:"Upload File",description:"Put your files here.",cover:(0,r.jsx)("img",{alt:"tour.png",src:"https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"}),target:function(){return g.current}},{title:"Save",description:"Save your changes.",target:function(){return h.current}},{title:"Other Actions",description:"Click to see other actions.",target:function(){return C.current}}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.ZP,{type:"primary",onClick:function(){return p(!0)},children:"Begin Tour"}),(0,r.jsx)(t.Z,{}),(0,r.jsxs)(D.Z,{children:[(0,r.jsx)(l.ZP,{ref:g,children:" Upload"}),(0,r.jsx)(l.ZP,{ref:h,type:"primary",children:"Save"}),(0,r.jsx)(l.ZP,{ref:C,icon:(0,r.jsx)(i.Z,{})})]}),(0,r.jsx)(y.Z,{open:S,onClose:function(){return p(!1)},steps:B})]})};f.default=E},870219:function($,f,e){e.r(f);var m=e(805574),_=e.n(m),s=e(489705),i=e(667294),l=e(988872),t=e(315816),D=e(945016),y=e(739838),r=e(785893),E=function(){var g=(0,i.useRef)(null),h=(0,i.useRef)(null),C=(0,i.useRef)(null),x=(0,i.useState)(!1),j=_()(x,2),S=j[0],p=j[1],B=[{title:"Upload File",description:"Put your files here.",target:function(){return g.current}},{title:"Save",description:"Save your changes.",target:function(){return h.current}},{title:"Other Actions",description:"Click to see other actions.",target:function(){return C.current}}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.ZP,{type:"primary",onClick:function(){return p(!0)},children:"Begin Tour"}),(0,r.jsx)(t.Z,{}),(0,r.jsxs)(D.Z,{children:[(0,r.jsx)(l.ZP,{ref:g,children:"Upload"}),(0,r.jsx)(l.ZP,{ref:h,type:"primary",children:"Save"}),(0,r.jsx)(l.ZP,{ref:C,icon:(0,r.jsx)(s.Z,{})})]}),(0,r.jsx)(y.Z,{open:S,onClose:function(){return p(!1)},steps:B,indicatorsRender:function(ae,k){return(0,r.jsxs)("span",{children:[ae+1," / ",k]})}})]})};f.default=E},742240:function($,f,e){e.r(f);var m=e(805574),_=e.n(m),s=e(667294),i=e(489705),l=e(988872),t=e(315816),D=e(945016),y=e(739838),r=e(785893),E=function(){var g=(0,s.useRef)(null),h=(0,s.useRef)(null),C=(0,s.useRef)(null),x=(0,s.useState)(!1),j=_()(x,2),S=j[0],p=j[1],B=[{title:"Upload File",description:"Put your files here.",cover:(0,r.jsx)("img",{alt:"tour.png",src:"https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"}),target:function(){return g.current}},{title:"Save",description:"Save your changes.",target:function(){return h.current},mask:{style:{boxShadow:"inset 0 0 15px #fff"},color:"rgba(40, 0, 255, .4)"}},{title:"Other Actions",description:"Click to see other actions.",target:function(){return C.current},mask:!1}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.ZP,{type:"primary",onClick:function(){return p(!0)},children:"Begin Tour"}),(0,r.jsx)(t.Z,{}),(0,r.jsxs)(D.Z,{children:[(0,r.jsx)(l.ZP,{ref:g,children:" Upload"}),(0,r.jsx)(l.ZP,{ref:h,type:"primary",children:"Save"}),(0,r.jsx)(l.ZP,{ref:C,icon:(0,r.jsx)(i.Z,{})})]}),(0,r.jsx)(y.Z,{open:S,onClose:function(){return p(!1)},steps:B,mask:{style:{boxShadow:"inset 0 0 15px #333"},color:"rgba(80, 255, 255, .4)"}})]})};f.default=E},29332:function($,f,e){e.r(f);var m=e(805574),_=e.n(m),s=e(667294),i=e(489705),l=e(988872),t=e(315816),D=e(945016),y=e(739838),r=e(785893),E=function(){var g=(0,s.useRef)(null),h=(0,s.useRef)(null),C=(0,s.useRef)(null),x=(0,s.useState)(!1),j=_()(x,2),S=j[0],p=j[1],B=[{title:"Upload File",description:"Put your files here.",cover:(0,r.jsx)("img",{alt:"tour.png",src:"https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"}),target:function(){return g.current}},{title:"Save",description:"Save your changes.",target:function(){return h.current}},{title:"Other Actions",description:"Click to see other actions.",target:function(){return C.current}}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.ZP,{type:"primary",onClick:function(){return p(!0)},children:"Begin non-modal Tour"}),(0,r.jsx)(t.Z,{}),(0,r.jsxs)(D.Z,{children:[(0,r.jsx)(l.ZP,{ref:g,children:" Upload"}),(0,r.jsx)(l.ZP,{ref:h,type:"primary",children:"Save"}),(0,r.jsx)(l.ZP,{ref:C,icon:(0,r.jsx)(i.Z,{})})]}),(0,r.jsx)(y.Z,{open:S,onClose:function(){return p(!1)},mask:!1,type:"primary",steps:B})]})};f.default=E},983405:function($,f,e){e.r(f);var m=e(805574),_=e.n(m),s=e(667294),i=e(988872),l=e(739838),t=e(785893),D=function(){var r=(0,s.useRef)(null),E=(0,s.useState)(!1),I=_()(E,2),g=I[0],h=I[1],C=[{title:"Center",description:"Displayed in the center of screen.",target:null},{title:"Right",description:"On the right of target.",placement:"right",target:function(){return r.current}},{title:"Top",description:"On the top of target.",placement:"top",target:function(){return r.current}}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.ZP,{type:"primary",onClick:function(){return h(!0)},ref:r,children:"Begin Tour"}),(0,t.jsx)(l.Z,{open:g,onClose:function(){return h(!1)},steps:C})]})};f.default=D},108559:function($,f,e){e.r(f);var m=e(667294),_=e(739838),s=e(785893),i=_.Z._InternalPanelDoNotUseOrYouWillBeFired;f.default=function(){return(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:16,background:"rgba(50,0,0,0.65)",padding:8},children:[(0,s.jsx)(i,{title:"Hello World!",description:"Hello World?!"}),(0,s.jsx)(i,{title:"Hello World!",description:"Hello World?!",cover:(0,s.jsx)("img",{alt:"tour.png",src:"https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"}),current:5,total:7}),(0,s.jsx)(i,{title:"Hello World!",description:"Hello World?!",type:"primary",current:4,total:5})]})}}}]);