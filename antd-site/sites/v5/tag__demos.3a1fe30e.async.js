"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[68582],{461229:function(x,a,e){e.r(a);var j=e(719632),_=e.n(j),r=e(805574),s=e.n(r),n=e(667294),o=e(724969),t=e(752376),d=e(965516),u=e(844183),i=e(432210),l=e(785893),D=function(){var C=d.Z.useToken(),v=C.token,U=(0,n.useState)(["Tag 1","Tag 2","Tag 3"]),Z=s()(U,2),E=Z[0],h=Z[1],P=(0,n.useState)(!1),g=s()(P,2),f=g[0],I=g[1],L=(0,n.useState)(""),W=s()(L,2),T=W[0],B=W[1],K=(0,n.useRef)(null);(0,n.useEffect)(function(){if(f){var O;(O=K.current)===null||O===void 0||O.focus()}},[f]);var Y=function(M){var R=E.filter(function(F){return F!==M});console.log(R),h(R)},S=function(){I(!0)},z=function(M){B(M.target.value)},p=function(){T&&E.indexOf(T)===-1&&h([].concat(_()(E),[T])),I(!1),B("")},G=function(M){var R=(0,l.jsx)(u.Z,{closable:!0,onClose:function(H){H.preventDefault(),Y(M)},children:M});return(0,l.jsx)("span",{style:{display:"inline-block"},children:R},M)},V=E.map(G),b={background:v.colorBgContainer,borderStyle:"dashed"};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{style:{marginBottom:16},children:(0,l.jsx)(t.Z,{enter:{scale:.8,opacity:0,type:"from",duration:100},onEnd:function(M){(M.type==="appear"||M.type==="enter")&&(M.target.style="display: inline-block")},leave:{opacity:0,width:0,scale:0,duration:200},appear:!1,children:V})}),f?(0,l.jsx)(i.Z,{ref:K,type:"text",size:"small",style:{width:78},value:T,onChange:z,onBlur:p,onPressEnter:p}):(0,l.jsxs)(u.Z,{onClick:S,style:b,children:[(0,l.jsx)(o.Z,{})," New Tag"]})]})};a.default=D},967806:function(x,a,e){e.r(a);var j=e(418429),_=e(667294),r=e(945016),s=e(844183),n=e(785893),o=function(i){console.log(i)},t=function(i){i.preventDefault(),console.log("Clicked! But prevent default.")},d=function(){return(0,n.jsxs)(r.Z,{size:[0,8],wrap:!0,children:[(0,n.jsx)(s.Z,{children:"Tag 1"}),(0,n.jsx)(s.Z,{children:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Link"})}),(0,n.jsx)(s.Z,{closeIcon:!0,onClose:t,children:"Prevent Default"}),(0,n.jsx)(s.Z,{closeIcon:(0,n.jsx)(j.Z,{}),onClose:o,children:"Tag 2"})]})};a.default=d},927713:function(x,a,e){e.r(a);var j=e(667294),_=e(945016),r=e(844183),s=e(315816),n=e(785893),o=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(_.Z,{size:[0,"small"],wrap:!0,children:[(0,n.jsx)(r.Z,{bordered:!1,children:"Tag 1"}),(0,n.jsx)(r.Z,{bordered:!1,children:"Tag 2"}),(0,n.jsx)(r.Z,{bordered:!1,closable:!0,children:"Tag 3"}),(0,n.jsx)(r.Z,{bordered:!1,closable:!0,children:"Tag 4"})]}),(0,n.jsx)(s.Z,{}),(0,n.jsxs)(_.Z,{size:[0,"small"],wrap:!0,children:[(0,n.jsx)(r.Z,{bordered:!1,color:"processing",children:"processing"}),(0,n.jsx)(r.Z,{bordered:!1,color:"success",children:"success"}),(0,n.jsx)(r.Z,{bordered:!1,color:"error",children:"error"}),(0,n.jsx)(r.Z,{bordered:!1,color:"warning",children:"warning"}),(0,n.jsx)(r.Z,{bordered:!1,color:"magenta",children:"magenta"}),(0,n.jsx)(r.Z,{bordered:!1,color:"red",children:"red"}),(0,n.jsx)(r.Z,{bordered:!1,color:"volcano",children:"volcano"}),(0,n.jsx)(r.Z,{bordered:!1,color:"orange",children:"orange"}),(0,n.jsx)(r.Z,{bordered:!1,color:"gold",children:"gold"}),(0,n.jsx)(r.Z,{bordered:!1,color:"lime",children:"lime"}),(0,n.jsx)(r.Z,{bordered:!1,color:"green",children:"green"}),(0,n.jsx)(r.Z,{bordered:!1,color:"cyan",children:"cyan"}),(0,n.jsx)(r.Z,{bordered:!1,color:"blue",children:"blue"}),(0,n.jsx)(r.Z,{bordered:!1,color:"geekblue",children:"geekblue"}),(0,n.jsx)(r.Z,{bordered:!1,color:"purple",children:"purple"})]})]})};a.default=o},864400:function(x,a,e){e.r(a);var j=e(667294),_=e(965516),r=e(945016),s=e(844183),n=e(315816),o=e(785893),t=function(){var u=_.Z.useToken(),i=u.token;return(0,o.jsxs)("div",{style:{backgroundColor:i.colorBgLayout,padding:16},children:[(0,o.jsxs)(r.Z,{size:[0,"small"],wrap:!0,children:[(0,o.jsx)(s.Z,{bordered:!1,children:"Tag 1"}),(0,o.jsx)(s.Z,{bordered:!1,children:"Tag 2"}),(0,o.jsx)(s.Z,{bordered:!1,closable:!0,children:"Tag 3"}),(0,o.jsx)(s.Z,{bordered:!1,closable:!0,children:"Tag 4"})]}),(0,o.jsx)(n.Z,{}),(0,o.jsxs)(r.Z,{size:[0,"small"],wrap:!0,children:[(0,o.jsx)(s.Z,{bordered:!1,color:"magenta",children:"magenta"}),(0,o.jsx)(s.Z,{bordered:!1,color:"red",children:"red"}),(0,o.jsx)(s.Z,{bordered:!1,color:"volcano",children:"volcano"}),(0,o.jsx)(s.Z,{bordered:!1,color:"orange",children:"orange"}),(0,o.jsx)(s.Z,{bordered:!1,color:"gold",children:"gold"}),(0,o.jsx)(s.Z,{bordered:!1,color:"lime",children:"lime"}),(0,o.jsx)(s.Z,{bordered:!1,color:"green",children:"green"}),(0,o.jsx)(s.Z,{bordered:!1,color:"cyan",children:"cyan"}),(0,o.jsx)(s.Z,{bordered:!1,color:"blue",children:"blue"}),(0,o.jsx)(s.Z,{bordered:!1,color:"geekblue",children:"geekblue"}),(0,o.jsx)(s.Z,{bordered:!1,color:"purple",children:"purple"})]})]})};a.default=t},972389:function(x,a,e){e.r(a);var j=e(719632),_=e.n(j),r=e(805574),s=e.n(r),n=e(667294),o=e(844183),t=e(945016),d=e(785893),u=o.Z.CheckableTag,i=["Movies","Books","Music","Sports"],l=function(){var A=(0,n.useState)(["Books"]),C=s()(A,2),v=C[0],U=C[1],Z=function(h,P){var g=P?[].concat(_()(v),[h]):v.filter(function(f){return f!==h});console.log("You are interested in: ",g),U(g)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{style:{marginRight:8},children:"Categories:"}),(0,d.jsx)(t.Z,{size:[0,8],wrap:!0,children:i.map(function(E){return(0,d.jsx)(u,{checked:v.includes(E),onChange:function(P){return Z(E,P)},children:E},E)})})]})};a.default=l},332289:function(x,a,e){e.r(a);var j=e(667294),_=e(945016),r=e(844183),s=e(785893),n=function(){return(0,s.jsxs)(_.Z,{size:[0,8],wrap:!0,children:[(0,s.jsx)(r.Z,{color:"magenta-inverse",children:"magenta"}),(0,s.jsx)(r.Z,{color:"red-inverse",children:"red"}),(0,s.jsx)(r.Z,{color:"volcano-inverse",children:"volcano"}),(0,s.jsx)(r.Z,{color:"orange-inverse",children:"orange"}),(0,s.jsx)(r.Z,{color:"gold-inverse",children:"gold"}),(0,s.jsx)(r.Z,{color:"lime-inverse",children:"lime"}),(0,s.jsx)(r.Z,{color:"green-inverse",children:"green"}),(0,s.jsx)(r.Z,{color:"cyan-inverse",children:"cyan"}),(0,s.jsx)(r.Z,{color:"blue-inverse",children:"blue"}),(0,s.jsx)(r.Z,{color:"geekblue-inverse",children:"geekblue"}),(0,s.jsx)(r.Z,{color:"purple-inverse",children:"purple"})]})};a.default=n},381176:function(x,a,e){e.r(a);var j=e(667294),_=e(315816),r=e(945016),s=e(844183),n=e(785893),o=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_.Z,{orientation:"left",children:"Presets"}),(0,n.jsxs)(r.Z,{size:[0,8],wrap:!0,children:[(0,n.jsx)(s.Z,{color:"magenta",children:"magenta"}),(0,n.jsx)(s.Z,{color:"red",children:"red"}),(0,n.jsx)(s.Z,{color:"volcano",children:"volcano"}),(0,n.jsx)(s.Z,{color:"orange",children:"orange"}),(0,n.jsx)(s.Z,{color:"gold",children:"gold"}),(0,n.jsx)(s.Z,{color:"lime",children:"lime"}),(0,n.jsx)(s.Z,{color:"green",children:"green"}),(0,n.jsx)(s.Z,{color:"cyan",children:"cyan"}),(0,n.jsx)(s.Z,{color:"blue",children:"blue"}),(0,n.jsx)(s.Z,{color:"geekblue",children:"geekblue"}),(0,n.jsx)(s.Z,{color:"purple",children:"purple"})]}),(0,n.jsx)(_.Z,{orientation:"left",children:"Custom"}),(0,n.jsxs)(r.Z,{size:[0,8],wrap:!0,children:[(0,n.jsx)(s.Z,{color:"#f50",children:"#f50"}),(0,n.jsx)(s.Z,{color:"#2db7f5",children:"#2db7f5"}),(0,n.jsx)(s.Z,{color:"#87d068",children:"#87d068"}),(0,n.jsx)(s.Z,{color:"#108ee9",children:"#108ee9"})]})]})};a.default=o},422294:function(x,a,e){e.r(a);var j=e(418429),_=e(198165),r=e(667294),s=e(75529),n=e(945016),o=e(844183),t=e(785893);a.default=function(){return(0,t.jsx)(s.ZP,{theme:{components:{Tag:{defaultBg:"#f9f0ff",defaultColor:"#4b34d3"}}},children:(0,t.jsxs)(n.Z,{size:[0,8],wrap:!0,children:[(0,t.jsx)(o.Z,{children:(0,t.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Link"})}),(0,t.jsx)(o.Z,{closable:!0,color:"magenta",children:"Tag 2"}),(0,t.jsx)(o.Z,{icon:(0,t.jsx)(j.Z,{}),color:"error",children:"error"}),(0,t.jsx)(o.Z,{color:"red-inverse",children:"red"}),(0,t.jsx)(o.Z,{bordered:!1,color:"magenta",children:"magenta"}),(0,t.jsx)(o.Z,{icon:(0,t.jsx)(_.Z,{spin:!0}),color:"processing",children:"processing"})]})})}},828857:function(x,a,e){e.r(a);var j=e(719632),_=e.n(j),r=e(805574),s=e.n(r),n=e(667294),o=e(724969),t=e(965516),d=e(945016),u=e(432210),i=e(844183),l=e(879587),D=e(785893),A=function(){var v=t.Z.useToken(),U=v.token,Z=(0,n.useState)(["Unremovable","Tag 2","Tag 3"]),E=s()(Z,2),h=E[0],P=E[1],g=(0,n.useState)(!1),f=s()(g,2),I=f[0],L=f[1],W=(0,n.useState)(""),T=s()(W,2),B=T[0],K=T[1],Y=(0,n.useState)(-1),S=s()(Y,2),z=S[0],p=S[1],G=(0,n.useState)(""),V=s()(G,2),b=V[0],O=V[1],M=(0,n.useRef)(null),R=(0,n.useRef)(null);(0,n.useEffect)(function(){if(I){var c;(c=M.current)===null||c===void 0||c.focus()}},[I]),(0,n.useEffect)(function(){var c;(c=R.current)===null||c===void 0||c.focus()},[b]);var F=function(m){var y=h.filter(function(N){return N!==m});console.log(y),P(y)},H=function(){L(!0)},$=function(m){K(m.target.value)},J=function(){B&&!h.includes(B)&&P([].concat(_()(h),[B])),L(!1),K("")},k=function(m){O(m.target.value)},Q=function(){var m=_()(h);m[z]=b,P(m),p(-1),O("")},X={width:64,height:22,marginInlineEnd:8,verticalAlign:"top"},w={height:22,background:U.colorBgContainer,borderStyle:"dashed"};return(0,D.jsxs)(d.Z,{size:[0,8],wrap:!0,children:[h.map(function(c,m){if(z===m)return(0,D.jsx)(u.Z,{ref:R,size:"small",style:X,value:b,onChange:k,onBlur:Q,onPressEnter:Q},c);var y=c.length>20,N=(0,D.jsx)(i.Z,{closable:m!==0,style:{userSelect:"none"},onClose:function(){return F(c)},children:(0,D.jsx)("span",{onDoubleClick:function(ee){m!==0&&(p(m),O(c),ee.preventDefault())},children:y?"".concat(c.slice(0,20),"..."):c})},c);return y?(0,D.jsx)(l.Z,{title:c,children:N},c):N}),I?(0,D.jsx)(u.Z,{ref:M,type:"text",size:"small",style:X,value:B,onChange:$,onBlur:J,onPressEnter:J}):(0,D.jsx)(i.Z,{style:w,icon:(0,D.jsx)(o.Z,{}),onClick:H,children:"New Tag"})]})};a.default=A},618807:function(x,a,e){e.r(a);var j=e(667294),_=e(418429),r=e(844183),s=e(785893),n=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{closable:!0,closeIcon:"\u5173 \u95ED",children:"Tag1"}),(0,s.jsx)(r.Z,{closable:!0,closeIcon:(0,s.jsx)(_.Z,{}),children:"Tag2"})]})};a.default=n},726322:function(x,a,e){e.r(a);var j=e(805574),_=e.n(j),r=e(97857),s=e.n(r),n=e(960887),o=e(245587),t=e(667294),d=e(844183),u=e(785893),i=function(A){var C=A.tag,v=(0,o.nB)({id:C.id}),U=v.listeners,Z=v.setNodeRef,E=v.transform,h=v.transition,P=v.isDragging,g={cursor:"move",transition:"unset"},f=E?s()(s()({},g),{},{transform:"translate3d(".concat(E.x,"px, ").concat(E.y,"px, 0)"),transition:P?"unset":h}):g;return(0,u.jsx)(d.Z,s()(s()({style:f,ref:Z},U),{},{children:C.text}))},l=function(){var A=(0,t.useState)([{id:1,text:"Tag 1"},{id:2,text:"Tag 2"},{id:3,text:"Tag 3"}]),C=_()(A,2),v=C[0],U=C[1],Z=(0,n.Dy)((0,n.VT)(n.we)),E=function(P){var g=P.active,f=P.over;f&&g.id!==f.id&&U(function(I){var L=I.findIndex(function(T){return T.id===g.id}),W=I.findIndex(function(T){return T.id===f.id});return(0,o.Rp)(I,L,W)})};return(0,u.jsx)(n.LB,{sensors:Z,onDragEnd:E,collisionDetection:n.pE,children:(0,u.jsx)(o.Fo,{items:v,strategy:o.PG,children:v.map(function(h){return(0,u.jsx)(i,{tag:h},h.id)})})})};a.default=l},311882:function(x,a,e){e.r(a);var j=e(667294),_=e(985093),r=e(935326),s=e(859505),n=e(72490),o=e(945016),t=e(844183),d=e(785893),u=function(){return(0,d.jsxs)(o.Z,{size:[0,8],wrap:!0,children:[(0,d.jsx)(t.Z,{icon:(0,d.jsx)(_.Z,{}),color:"#55acee",children:"Twitter"}),(0,d.jsx)(t.Z,{icon:(0,d.jsx)(r.Z,{}),color:"#cd201f",children:"Youtube"}),(0,d.jsx)(t.Z,{icon:(0,d.jsx)(s.Z,{}),color:"#3b5999",children:"Facebook"}),(0,d.jsx)(t.Z,{icon:(0,d.jsx)(n.Z,{}),color:"#55acee",children:"LinkedIn"})]})};a.default=u},997413:function(x,a,e){e.r(a);var j=e(667294),_=e(708751),r=e(198165),s=e(418429),n=e(111475),o=e(24019),t=e(103089),d=e(315816),u=e(945016),i=e(844183),l=e(785893),D=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.Z,{orientation:"left",children:"Without icon"}),(0,l.jsxs)(u.Z,{size:[0,8],wrap:!0,children:[(0,l.jsx)(i.Z,{color:"success",children:"success"}),(0,l.jsx)(i.Z,{color:"processing",children:"processing"}),(0,l.jsx)(i.Z,{color:"error",children:"error"}),(0,l.jsx)(i.Z,{color:"warning",children:"warning"}),(0,l.jsx)(i.Z,{color:"default",children:"default"})]}),(0,l.jsx)(d.Z,{orientation:"left",children:"With icon"}),(0,l.jsxs)(u.Z,{size:[0,8],wrap:!0,children:[(0,l.jsx)(i.Z,{icon:(0,l.jsx)(_.Z,{}),color:"success",children:"success"}),(0,l.jsx)(i.Z,{icon:(0,l.jsx)(r.Z,{spin:!0}),color:"processing",children:"processing"}),(0,l.jsx)(i.Z,{icon:(0,l.jsx)(s.Z,{}),color:"error",children:"error"}),(0,l.jsx)(i.Z,{icon:(0,l.jsx)(n.Z,{}),color:"warning",children:"warning"}),(0,l.jsx)(i.Z,{icon:(0,l.jsx)(o.Z,{}),color:"default",children:"waiting"}),(0,l.jsx)(i.Z,{icon:(0,l.jsx)(t.Z,{}),color:"default",children:"stop"})]})]})};a.default=D}}]);
