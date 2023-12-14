"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[6412],{52190:function(Q,w,a){a.d(w,{Z:function(){return z}});var l=a(24456),p=a(50959),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.7c-3.7 11.6-5.7 23.9-5.7 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1zm496 58.4L318.8 611.3l-12.9-5.2H184V417.9h121.9l12.9-5.2L840 203.3v617.4z"}}]},name:"notification",theme:"outlined"},S=b,E=a(38782),O=function(c,g){return p.createElement(E.Z,(0,l.Z)({},c,{ref:g,icon:S}))},z=p.forwardRef(O)},28619:function(Q,w,a){a.d(w,{Z:function(){return z}});var l=a(24456),p=a(50959),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"profile",theme:"outlined"},S=b,E=a(38782),O=function(c,g){return p.createElement(E.Z,(0,l.Z)({},c,{ref:g,icon:S}))},z=p.forwardRef(O)},622:function(Q,w,a){a.d(w,{Z:function(){return de}});var l=a(50959),p=a(84875),b=a.n(p),S=a(59304),E=a(30651),O=a(44746),z=a(43014),c={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},d=l.createContext({}),m=a(13763),j=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const h=e=>(0,m.Z)(e).map(t=>Object.assign(Object.assign({},t==null?void 0:t.props),{key:t.key}));function T(e,t,r){const n=l.useMemo(()=>t||h(r),[t,r]);return l.useMemo(()=>n.map(s=>{var{span:i}=s,$=j(s,["span"]);return Object.assign(Object.assign({},$),{span:typeof i=="number"?i:(0,S.m9)(e,i)})}),[n,e])}function M(e,t,r){let n=e,o=!1;return(r===void 0||r>t)&&(n=Object.assign(Object.assign({},e),{span:t}),o=r!==void 0),[n,o]}function V(e,t){const r=[];let n=[],o=t,s=!1;return e.filter(i=>i).forEach((i,$)=>{const N=i==null?void 0:i.span,f=N||1;if($===e.length-1){const[u,x]=M(i,o,N);s=s||x,n.push(u),r.push(n);return}if(f<o)o-=f,n.push(i);else{const[u,x]=M(i,o,f);s=s||x,n.push(u),r.push(n),o=t,n=[]}}),[r,s]}var P=(e,t)=>{const[r,n]=(0,l.useMemo)(()=>V(t,e),[t,e]);return r},q=e=>{let{children:t}=e;return t};function R(e){return e!=null}var L=e=>{const{itemPrefixCls:t,component:r,span:n,className:o,style:s,labelStyle:i,contentStyle:$,bordered:N,label:f,content:u,colon:x}=e,I=r;return N?l.createElement(I,{className:b()({[`${t}-item-label`]:R(f),[`${t}-item-content`]:R(u)},o),style:s,colSpan:n},R(f)&&l.createElement("span",{style:i},f),R(u)&&l.createElement("span",{style:$},u)):l.createElement(I,{className:b()(`${t}-item`,o),style:s,colSpan:n},l.createElement("div",{className:`${t}-item-container`},(f||f===0)&&l.createElement("span",{className:b()(`${t}-item-label`,{[`${t}-item-no-colon`]:!x}),style:i},f),(u||u===0)&&l.createElement("span",{className:b()(`${t}-item-content`),style:$},u)))};function A(e,t,r){let{colon:n,prefixCls:o,bordered:s}=t,{component:i,type:$,showLabel:N,showContent:f,labelStyle:u,contentStyle:x}=r;return e.map((I,H)=>{let{label:W,children:K,prefixCls:F=o,className:G,style:X,labelStyle:C,contentStyle:v,span:Z=1,key:U}=I;return typeof i=="string"?l.createElement(L,{key:`${$}-${U||H}`,className:G,style:X,labelStyle:Object.assign(Object.assign({},u),C),contentStyle:Object.assign(Object.assign({},x),v),span:Z,colon:n,component:i,itemPrefixCls:F,bordered:s,label:N?W:null,content:f?K:null}):[l.createElement(L,{key:`label-${U||H}`,className:G,style:Object.assign(Object.assign(Object.assign({},u),X),C),span:1,colon:n,component:i[0],itemPrefixCls:F,bordered:s,label:W}),l.createElement(L,{key:`content-${U||H}`,className:G,style:Object.assign(Object.assign(Object.assign({},x),X),v),span:Z*2-1,component:i[1],itemPrefixCls:F,bordered:s,content:K})]})}var B=e=>{const t=l.useContext(d),{prefixCls:r,vertical:n,row:o,index:s,bordered:i}=e;return n?l.createElement(l.Fragment,null,l.createElement("tr",{key:`label-${s}`,className:`${r}-row`},A(o,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),l.createElement("tr",{key:`content-${s}`,className:`${r}-row`},A(o,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):l.createElement("tr",{key:s,className:`${r}-row`},A(o,e,Object.assign({component:i?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},D=a(5871),oe=a(57564),re=a(37863);const ae=e=>{const{componentCls:t,labelBg:r}=e;return{[`&${t}-bordered`]:{[`> ${t}-view`]:{border:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto",borderCollapse:"collapse"},[`${t}-row`]:{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${e.padding}px ${e.paddingLG}px`,borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:r,"&::after":{display:"none"}}}},[`&${t}-middle`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${e.paddingSM}px ${e.paddingLG}px`}}},[`&${t}-small`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${e.paddingXS}px ${e.padding}px`}}}}}},ie=e=>{const{componentCls:t,extraColor:r,itemPaddingBottom:n,colonMarginRight:o,colonMarginLeft:s,titleMarginBottom:i}=e;return{[t]:Object.assign(Object.assign(Object.assign({},(0,D.Wf)(e)),ae(e)),{["&-rtl"]:{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:i},[`${t}-title`]:Object.assign(Object.assign({},D.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:r,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}},[`${t}-row`]:{"> th, > td":{paddingBottom:n},"&:last-child":{borderBottom:"none"}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${s}px ${o}px`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}};var se=(0,oe.Z)("Descriptions",e=>{const t=(0,re.TS)(e,{});return[ie(t)]},e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText})),ce=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const ne=e=>{const{prefixCls:t,title:r,extra:n,column:o,colon:s=!0,bordered:i,layout:$,children:N,className:f,rootClassName:u,style:x,size:I,labelStyle:H,contentStyle:W,items:K}=e,F=ce(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:G,direction:X,descriptions:C}=l.useContext(E.E_),v=G("descriptions",t),Z=(0,z.Z)(),U=l.useMemo(()=>{var J;return typeof o=="number"?o:(J=(0,S.m9)(Z,Object.assign(Object.assign({},c),o)))!==null&&J!==void 0?J:3},[Z,o]),ue=T(Z,K,N),_=(0,O.Z)(I),me=P(U,ue),[fe,pe]=se(v),ge=l.useMemo(()=>({labelStyle:H,contentStyle:W}),[H,W]);return fe(l.createElement(d.Provider,{value:ge},l.createElement("div",Object.assign({className:b()(v,C==null?void 0:C.className,{[`${v}-${_}`]:_&&_!=="default",[`${v}-bordered`]:!!i,[`${v}-rtl`]:X==="rtl"},f,u,pe),style:Object.assign(Object.assign({},C==null?void 0:C.style),x)},F),(r||n)&&l.createElement("div",{className:`${v}-header`},r&&l.createElement("div",{className:`${v}-title`},r),n&&l.createElement("div",{className:`${v}-extra`},n)),l.createElement("div",{className:`${v}-view`},l.createElement("table",null,l.createElement("tbody",null,me.map((J,le)=>l.createElement(B,{key:le,index:le,colon:s,prefixCls:v,vertical:$==="vertical",bordered:i,row:J}))))))))};ne.Item=q;var de=ne},28442:function(Q,w,a){a.d(w,{Z:function(){return z}});var l=a(89043),p=a(50959);function b(y){var c=p.useRef();c.current=y;var g=p.useCallback(function(){for(var d,m=arguments.length,j=new Array(m),h=0;h<m;h++)j[h]=arguments[h];return(d=c.current)===null||d===void 0?void 0:d.call.apply(d,[c].concat(j))},[]);return g}var S=a(19891);function E(y){var c=p.useRef(!1),g=p.useState(y),d=(0,l.Z)(g,2),m=d[0],j=d[1];p.useEffect(function(){return c.current=!1,function(){c.current=!0}},[]);function h(T,M){M&&c.current||j(T)}return[m,h]}function O(y){return y!==void 0}function z(y,c){var g=c||{},d=g.defaultValue,m=g.value,j=g.onChange,h=g.postState,T=E(function(){return O(m)?m:O(d)?typeof d=="function"?d():d:typeof y=="function"?y():y}),M=(0,l.Z)(T,2),V=M[0],Y=M[1],P=m!==void 0?m:V,ee=h?h(P):P,q=b(j),R=E([P]),k=(0,l.Z)(R,2),L=k[0],A=k[1];(0,S.o)(function(){var B=L[0];V!==B&&q(V,B)},[L]),(0,S.o)(function(){O(m)||Y(m)},[m]);var te=b(function(B,D){Y(B,D),A([P],D)});return[ee,te]}}}]);
