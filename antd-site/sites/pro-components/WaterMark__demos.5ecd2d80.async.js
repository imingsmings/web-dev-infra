"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[9110],{3359:function(L,i,e){e.r(i);var r=e(58787),o=e(22795),P=e(2425),l=e(48398),g=e(1148),s=e(40460),c=e(35672),m=e(35877),_=e(11497),d=e(5735),n=e(11527);i.default=function(){return(0,n.jsx)(r.A,{initialValues:{content:"\u793A\u4F8B\u6C34\u5370",fontColor:"rgba(0,0,0,.15)",fontSize:"16",zIndex:9,rotate:"-22"},submitter:!1,children:(0,n.jsxs)(o.Z,{split:"vertical",title:"\u6C34\u5370\u81EA\u5B9A\u4E49\u914D\u7F6E\u5668",headerBordered:!0,bordered:!0,children:[(0,n.jsx)(o.Z,{colSpan:"70%",children:(0,n.jsx)(P.Z,{name:["rotate","content","fontColor","fontSize","zIndex"],children:function(a){var t=a.rotate,v=a.content,f=a.fontColor,h=a.fontSize,O=a.zIndex;return(0,n.jsxs)(l.D,{rotate:t,content:v,fontColor:f instanceof d.Hz?f.toHexString():f,fontSize:h,zIndex:O,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam aliquid perferendis, adipisci dolorum officia odio natus facere cumque iusto libero repellendus praesentium ipsa cupiditate iure autem eos repudiandae delectus totam?"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, aperiam numquam voluptatibus asperiores odio? Doloribus saepe, eligendi facere inventore culpa, exercitationem explicabo earum laborum deleniti reiciendis deserunt accusantium ullam."}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptas numquam impedit architecto facilis aliquam at assumenda, nostrum explicabo accusantium ipsam error provident voluptate molestias magnam quisquam excepturi illum sit!"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusantium quo corporis fugit possimus quaerat ad consequatur veniam voluptatum ut cumque illo beatae. Magni assumenda eligendi itaque eum voluptate non!"})]}),(0,n.jsxs)("h4",{children:["\u4E0B\u9762\u662F\u4E00\u5F20zIndex \u4E3A 10 \u7684 position \u4E3A relative \u56FE\u7247\uFF0C",(0,n.jsx)("br",{})," \u5982\u679C\u8981\u5728\u56FE\u7247\u4E2D\u5C55\u793A\u6C34\u5370\u5C1D\u8BD5\u8C03\u5927\u53F3\u4FA7\u7684 zIndex \u6ED1\u5757\u8BD5\u8BD5\u3002"]}),(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/bmw-prod/d283f09a-64d6-4d59-bfc7-37b49ea0da2b.svg",alt:"\u793A\u4F8B\u56FE\u7247",width:600,style:{zIndex:10,maxWidth:"100%",position:"relative"}})]})}})}),(0,n.jsxs)(o.Z,{title:"\u914D\u7F6E\u9762\u677F",children:[(0,n.jsx)(g.Z,{label:"\u6C34\u5370\u6587\u5B57",name:"content"}),(0,n.jsx)(s.Z,{label:"\u5B57\u4F53\u989C\u8272",name:"fontColor"}),(0,n.jsx)(c.Z,{label:"\u5B57\u4F53\u5927\u5C0F",name:"fontSize"}),(0,n.jsx)(c.Z,{label:"zIndex",name:"zIndex",min:0,max:100}),(0,n.jsx)(c.Z,{label:"\u65CB\u8F6C\u89D2\u5EA6",name:"rotate",min:-90,max:90}),(0,n.jsx)(_.Z,{}),(0,n.jsx)(P.Z,{name:["rotate","content","fontColor","fontSize","zIndex"],children:function(a){var t=a.rotate,v=a.content,f=a.fontColor,h=a.fontSize,O=a.zIndex;return(0,n.jsx)(m.Z,{ignoreFormItem:!0,mode:"read",valueType:"code",style:{width:220},text:`<WaterMark
  rotate={`.concat(t,`}
  content='`).concat(v,`'
  fontColor='`).concat(f,`'
  fontSize={`).concat(h,`}
  zIndex={`).concat(O,`}
>
  <div>xxx</div>
</WaterMark>`)})}})]})]})})}},39746:function(L,i,e){e.r(i);for(var r=e(33082),o=e(48398),P=e(93910),l=e(23685),g=e(1643),s=e(11527),c={0:"close",1:"running",2:"online",3:"error"},m=[],_=["\u4ED8\u5C0F\u5C0F","\u66F2\u4E3D\u4E3D","\u6797\u4E1C\u4E1C","\u9648\u5E05\u5E05","\u517C\u67D0\u67D0"],d=0;d<10;d+=1)m.push({key:d,name:"AppName",containers:Math.floor(Math.random()*20),creator:_[Math.floor(Math.random()*_.length)],status:c[Math.floor(Math.random()*10)%4+""],createdAt:Date.now()-Math.floor(Math.random()*1e5),memo:d%2===1?"\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u6587\u5B57\u8981\u5C55\u793A\u4F46\u662F\u8981\u7559\u4E0B\u5C3E\u5DF4":"\u7B80\u77ED\u5907\u6CE8\u6587\u6848"});var n=[{title:"\u5E94\u7528\u540D\u79F0",width:80,dataIndex:"name",render:function(a){return(0,s.jsx)("a",{children:a})}},{title:"\u5BB9\u5668\u6570\u91CF",dataIndex:"containers",align:"right",sorter:function(a,t){return a.containers-t.containers}},{title:"\u72B6\u6001",width:80,dataIndex:"status",initialValue:"all",valueEnum:{all:{text:"\u5168\u90E8",status:"Default"},close:{text:"\u5173\u95ED",status:"Default"},running:{text:"\u8FD0\u884C\u4E2D",status:"Processing"},online:{text:"\u5DF2\u4E0A\u7EBF",status:"Success"},error:{text:"\u5F02\u5E38",status:"Error"}}},{title:"\u521B\u5EFA\u8005",width:80,dataIndex:"creator",valueEnum:{all:{text:"\u5168\u90E8"},\u4ED8\u5C0F\u5C0F:{text:"\u4ED8\u5C0F\u5C0F"},\u66F2\u4E3D\u4E3D:{text:"\u66F2\u4E3D\u4E3D"},\u6797\u4E1C\u4E1C:{text:"\u6797\u4E1C\u4E1C"},\u9648\u5E05\u5E05:{text:"\u9648\u5E05\u5E05"},\u517C\u67D0\u67D0:{text:"\u517C\u67D0\u67D0"}}},{title:"\u5907\u6CE8",dataIndex:"memo",ellipsis:!0,copyable:!0},{title:"\u64CD\u4F5C",width:180,key:"option",valueType:"option",render:function(){return[(0,s.jsx)("a",{children:"\u94FE\u8DEF"},"link"),(0,s.jsx)("a",{children:"\u62A5\u8B66"},"link2"),(0,s.jsx)("a",{children:"\u76D1\u63A7"},"link3"),(0,s.jsx)(r.Z,{menus:[{key:"copy",name:"\u590D\u5236"},{key:"delete",name:"\u5220\u9664"}]},"actionGroup")]}}];i.default=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.D,{content:"\u8682\u8681\u96C6\u56E2",children:(0,s.jsx)(P.Z,{columns:n,dataSource:m,rowKey:"key",pagination:{showQuickJumper:!0},toolbar:{title:"\u6807\u7B7E",multipleLine:!0,filter:(0,s.jsx)(l.M,{children:(0,s.jsx)(g.Z,{name:"startdate",label:"\u54CD\u5E94\u65E5\u671F"})})},search:!1,dateFormatter:"string"})})})}},94254:function(L,i,e){e.r(i);var r=e(48398),o=e(11527);i.default=function(){return(0,o.jsx)(r.D,{height:36,width:115,content:"qixian.cs",image:"https://gw.alipayobjects.com/zos/bmw-prod/59a18171-ae17-4fc5-93a0-2645f64a3aca.svg",children:(0,o.jsxs)("div",{style:{height:500},children:[(0,o.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam aliquid perferendis, adipisci dolorum officia odio natus facere cumque iusto libero repellendus praesentium ipsa cupiditate iure autem eos repudiandae delectus totam?"}),(0,o.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, aperiam numquam voluptatibus asperiores odio? Doloribus saepe, eligendi facere inventore culpa, exercitationem explicabo earum laborum deleniti reiciendis deserunt accusantium ullam."}),(0,o.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptas numquam impedit architecto facilis aliquam at assumenda, nostrum explicabo accusantium ipsam error provident voluptate molestias magnam quisquam excepturi illum sit!"}),(0,o.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusantium quo corporis fugit possimus quaerat ad consequatur veniam voluptatum ut cumque illo beatae. Magni assumenda eligendi itaque eum voluptate non!"})]})})}},22304:function(L,i,e){e.r(i);var r=e(48398),o=e(11527);i.default=function(){return(0,o.jsx)(r.D,{content:"\u8682\u8681\u96C6\u56E2",children:(0,o.jsx)("div",{style:{height:500}})})}},6353:function(L,i,e){e.r(i);var r=e(48398),o=e(11527);i.default=function(){return(0,o.jsx)(r.D,{content:["\u8682\u8681\u96C6\u56E2","\u591A\u884C\u6587\u5B57"],children:(0,o.jsx)("div",{style:{height:500}})})}},48398:function(L,i,e){e.d(i,{D:function(){return p}});var r=e(77117),o=e.n(r),P=e(28152),l=e.n(P),g=e(65534),s=e(13937),c=e(84875),m=e.n(c),_=e(50959),d=e(11527),n=function(t){if(!t)return 1;var v=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||1;return(window.devicePixelRatio||1)/v},p=function(t){var v=(0,g.dQ)(),f=v.token,h=t.children,O=t.style,u=t.className,b=t.markStyle,j=t.markClassName,x=t.zIndex,U=x===void 0?9:x,W=t.gapX,M=W===void 0?212:W,R=t.gapY,I=R===void 0?222:R,T=t.width,E=T===void 0?120:T,D=t.height,A=D===void 0?64:D,F=t.rotate,K=F===void 0?-22:F,Z=t.image,k=t.offsetLeft,Q=t.offsetTop,H=t.fontStyle,X=H===void 0?"normal":H,Y=t.fontWeight,V=Y===void 0?"normal":Y,G=t.fontColor,J=G===void 0?f.colorFill:G,w=t.fontSize,q=w===void 0?16:w,ee=t.fontFamily,te=ee===void 0?"sans-serif":ee,ue=t.prefixCls,le=(0,_.useContext)(s.ZP.ConfigContext),_e=le.getPrefixCls,ne=_e("pro-layout-watermark",ue),de=m()("".concat(ne,"-wrapper"),u),ce=m()(ne,j),me=(0,_.useState)(""),oe=l()(me,2),ae=oe[0],ie=oe[1];return(0,_.useEffect)(function(){var S=document.createElement("canvas"),C=S.getContext("2d"),B=n(C),Ee="".concat((M+E)*B,"px"),pe="".concat((I+A)*B,"px"),ve=k||M/2,fe=Q||I/2;if(S.setAttribute("width",Ee),S.setAttribute("height",pe),!C){console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas");return}C.translate(ve*B,fe*B),C.rotate(Math.PI/180*Number(K));var xe=E*B,se=A*B,re=function(z){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,$=Number(q)*B;C.font="".concat(X," normal ").concat(V," ").concat($,"px/").concat(se,"px ").concat(te),C.fillStyle=J,Array.isArray(z)?z==null||z.forEach(function(De,Ce){return C.fillText(De,0,Ce*$+N)}):C.fillText(z,0,N?N+$:0),ie(S.toDataURL())};if(Z){var y=new Image;y.crossOrigin="anonymous",y.referrerPolicy="no-referrer",y.src=Z,y.onload=function(){if(C.drawImage(y,0,0,xe,se),ie(S.toDataURL()),t.content){re(t.content,y.height+8);return}};return}if(t.content){re(t.content);return}},[M,I,k,Q,K,X,V,E,A,te,J,Z,t.content,q]),(0,d.jsxs)("div",{style:o()({position:"relative"},O),className:de,children:[h,(0,d.jsx)("div",{className:ce,style:o()(o()({zIndex:U,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(M+E,"px"),pointerEvents:"none",backgroundRepeat:"repeat"},ae?{backgroundImage:"url('".concat(ae,"')")}:{}),b)})]})}},33082:function(L,i,e){var r=e(95530),o=e.n(r),P=e(77117),l=e.n(P),g=e(48651),s=e(63005),c=e(89400),m=e(13937),_=e(57946),d=e(51190),n=e(84875),p=e.n(n),a=e(50959),t=e(11527),v=["key","name"],f=function(u){var b=u.children,j=u.menus,x=u.onSelect,U=u.className,W=u.style,M=(0,a.useContext)(m.ZP.ConfigContext),R=M.getPrefixCls,I=R("pro-table-dropdown"),T=(0,c.Q)({onClick:function(D){return x&&x(D.key)},items:j==null?void 0:j.map(function(E){return{label:E.name,key:E.key}})});return(0,t.jsx)(_.Z,l()(l()({},T),{},{className:p()(I,U),children:(0,t.jsxs)(d.ZP,{style:W,children:[b," ",(0,t.jsx)(g.Z,{})]})}))},h=function(u){var b=u.className,j=u.style,x=u.onSelect,U=u.menus,W=U===void 0?[]:U,M=u.children,R=(0,a.useContext)(m.ZP.ConfigContext),I=R.getPrefixCls,T=I("pro-table-dropdown"),E=(0,c.Q)({onClick:function(A){x==null||x(A.key)},items:W.map(function(D){var A=D.key,F=D.name,K=o()(D,v);return l()(l()({key:A},K),{},{title:K.title,label:F})})});return(0,t.jsx)(_.Z,l()(l()({},E),{},{className:p()(T,b),children:(0,t.jsx)("a",{style:j,children:M||(0,t.jsx)(s.Z,{})})}))};h.Button=f,i.Z=h}}]);