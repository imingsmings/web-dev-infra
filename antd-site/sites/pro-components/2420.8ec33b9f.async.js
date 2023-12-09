"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[2420],{3054:function(Me,te,n){n.d(te,{Z:function(){return l}});var o=n(24456),D=n(50959),I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},O=I,p=n(38782),f=function(r,d){return D.createElement(p.Z,(0,o.Z)({},r,{ref:d,icon:O}))},l=D.forwardRef(f)},35216:function(Me,te,n){n.d(te,{F:function(){return p},Z:function(){return O}});var o=n(84875),D=n.n(o);const I=null;function O(f,l,b){return D()({[`${f}-status-success`]:l==="success",[`${f}-status-warning`]:l==="warning",[`${f}-status-error`]:l==="error",[`${f}-status-validating`]:l==="validating",[`${f}-has-feedback`]:b})}const p=(f,l)=>l||f},97913:function(Me,te,n){n.d(te,{Z:function(){return Te},n:function(){return re}});var o=n(50959),D=n(1871),I=n(84875),O=n.n(I),p=n(41549),f=n(12602),l=n(35216),b=n(30651),r=n(57501),d=n(44746),P=n(5867),j=n(51366),H=n(78090),y=n(36610);function le(N){return!!(N.prefix||N.suffix||N.allowClear)}var Y=function(N,h){var s={};for(var e in N)Object.prototype.hasOwnProperty.call(N,e)&&h.indexOf(e)<0&&(s[e]=N[e]);if(N!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(N);t<e.length;t++)h.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(N,e[t])&&(s[e[t]]=N[e[t]]);return s};function re(N,h){if(!N)return;N.focus(h);const{cursor:s}=h||{};if(s){const e=N.value.length;switch(s){case"start":N.setSelectionRange(0,0);break;case"end":N.setSelectionRange(e,e);break;default:N.setSelectionRange(0,e);break}}}var Te=(0,o.forwardRef)((N,h)=>{var s;const{prefixCls:e,bordered:t=!0,status:a,size:c,disabled:C,onBlur:E,onFocus:_,suffix:K,allowClear:U,addonAfter:ue,addonBefore:fe,className:$e,style:ge,styles:be,rootClassName:ae,onChange:W,classNames:J}=N,he=Y(N,["prefixCls","bordered","status","size","disabled","onBlur","onFocus","suffix","allowClear","addonAfter","addonBefore","className","style","styles","rootClassName","onChange","classNames"]),{getPrefixCls:B,direction:u,input:A}=o.useContext(b.E_),x=B("input",e),i=(0,o.useRef)(null),[ee,g]=(0,y.ZP)(x),{compactSize:m,compactItemClassnames:z}=(0,j.ri)(x,u),T=(0,d.Z)(F=>{var se;return(se=c!=null?c:m)!==null&&se!==void 0?se:F}),S=o.useContext(r.Z),R=C!=null?C:S,{status:Z,hasFeedback:v,feedbackIcon:w}=(0,o.useContext)(P.aM),X=(0,l.F)(Z,a),M=le(N)||!!v,de=(0,o.useRef)(M),Q=(0,H.Z)(i,!0),q=F=>{Q(),E==null||E(F)},ce=F=>{Q(),_==null||_(F)},k=F=>{Q(),W==null||W(F)},ne=(v||K)&&o.createElement(o.Fragment,null,K,v&&w);let ie;return typeof U=="object"&&(U!=null&&U.clearIcon)?ie=U:U&&(ie={clearIcon:o.createElement(D.Z,null)}),ee(o.createElement(p.Z,Object.assign({ref:(0,f.sQ)(h,i),prefixCls:x,autoComplete:A==null?void 0:A.autoComplete},he,{disabled:R,onBlur:q,onFocus:ce,style:Object.assign(Object.assign({},A==null?void 0:A.style),ge),styles:Object.assign(Object.assign({},A==null?void 0:A.styles),be),suffix:ne,allowClear:ie,className:O()($e,ae,z,A==null?void 0:A.className),onChange:k,addonAfter:ue&&o.createElement(j.BR,null,o.createElement(P.Ux,{override:!0,status:!0},ue)),addonBefore:fe&&o.createElement(j.BR,null,o.createElement(P.Ux,{override:!0,status:!0},fe)),classNames:Object.assign(Object.assign(Object.assign({},J),A==null?void 0:A.classNames),{input:O()({[`${x}-sm`]:T==="small",[`${x}-lg`]:T==="large",[`${x}-rtl`]:u==="rtl",[`${x}-borderless`]:!t},!M&&(0,l.Z)(x,X),J==null?void 0:J.input,(s=A==null?void 0:A.classNames)===null||s===void 0?void 0:s.input,g)}),classes:{affixWrapper:O()({[`${x}-affix-wrapper-sm`]:T==="small",[`${x}-affix-wrapper-lg`]:T==="large",[`${x}-affix-wrapper-rtl`]:u==="rtl",[`${x}-affix-wrapper-borderless`]:!t},(0,l.Z)(`${x}-affix-wrapper`,X,v),g),wrapper:O()({[`${x}-group-rtl`]:u==="rtl"},g),group:O()({[`${x}-group-wrapper-sm`]:T==="small",[`${x}-group-wrapper-lg`]:T==="large",[`${x}-group-wrapper-rtl`]:u==="rtl",[`${x}-group-wrapper-disabled`]:R},(0,l.Z)(`${x}-group-wrapper`,X,v),g)}})))})},91832:function(Me,te,n){n.d(te,{Z:function(){return x}});var o=n(50959),D=n(1871),I=n(84875),O=n.n(I),p=n(97605),f=n(12309),l=n(25201),b=n(36014),r=n(89043),d=n(10582),P=n(41549),j=n(76263),H=n(66420),y=n(65589),le=n(26407),Y=n(12682),re=n(77189),we=n(28449),Te=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,N=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],h={},s;function e(i){var ee=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=i.getAttribute("id")||i.getAttribute("data-reactid")||i.getAttribute("name");if(ee&&h[g])return h[g];var m=window.getComputedStyle(i),z=m.getPropertyValue("box-sizing")||m.getPropertyValue("-moz-box-sizing")||m.getPropertyValue("-webkit-box-sizing"),T=parseFloat(m.getPropertyValue("padding-bottom"))+parseFloat(m.getPropertyValue("padding-top")),S=parseFloat(m.getPropertyValue("border-bottom-width"))+parseFloat(m.getPropertyValue("border-top-width")),R=N.map(function(v){return"".concat(v,":").concat(m.getPropertyValue(v))}).join(";"),Z={sizingStyle:R,paddingSize:T,borderSize:S,boxSizing:z};return ee&&g&&(h[g]=Z),Z}function t(i){var ee=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;s||(s=document.createElement("textarea"),s.setAttribute("tab-index","-1"),s.setAttribute("aria-hidden","true"),document.body.appendChild(s)),i.getAttribute("wrap")?s.setAttribute("wrap",i.getAttribute("wrap")):s.removeAttribute("wrap");var z=e(i,ee),T=z.paddingSize,S=z.borderSize,R=z.boxSizing,Z=z.sizingStyle;s.setAttribute("style","".concat(Z,";").concat(Te)),s.value=i.value||i.placeholder||"";var v=void 0,w=void 0,X,M=s.scrollHeight;if(R==="border-box"?M+=S:R==="content-box"&&(M-=T),g!==null||m!==null){s.value=" ";var de=s.scrollHeight-T;g!==null&&(v=de*g,R==="border-box"&&(v=v+T+S),M=Math.max(v,M)),m!==null&&(w=de*m,R==="border-box"&&(w=w+T+S),X=M>w?"":"hidden",M=Math.min(w,M))}var Q={height:M,overflowY:X,resize:"none"};return v&&(Q.minHeight=v),w&&(Q.maxHeight=w),Q}var a=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],c=0,C=1,E=2,_=o.forwardRef(function(i,ee){var g=i,m=g.prefixCls,z=g.onPressEnter,T=g.defaultValue,S=g.value,R=g.autoSize,Z=g.onResize,v=g.className,w=g.style,X=g.disabled,M=g.onChange,de=g.onInternalAutoSize,Q=(0,d.Z)(g,a),q=(0,y.Z)(T,{value:S,postState:function(oe){return oe!=null?oe:""}}),ce=(0,r.Z)(q,2),k=ce[0],ne=ce[1],ie=function(oe){ne(oe.target.value),M==null||M(oe)},F=o.useRef();o.useImperativeHandle(ee,function(){return{textArea:F.current}});var se=o.useMemo(function(){return R&&(0,le.Z)(R)==="object"?[R.minRows,R.maxRows]:[]},[R]),Ce=(0,r.Z)(se,2),L=Ce[0],pe=Ce[1],Ie=!!R,ze=function(){try{if(document.activeElement===F.current){var oe=F.current,Le=oe.selectionStart,Ue=oe.selectionEnd,Ve=oe.scrollTop;F.current.setSelectionRange(Le,Ue),F.current.scrollTop=Ve}}catch(Ge){}},Pe=o.useState(E),ye=(0,r.Z)(Pe,2),ve=ye[0],Ee=ye[1],G=o.useState(),$=(0,r.Z)(G,2),xe=$[0],Re=$[1],Se=function(){Ee(c)};(0,re.Z)(function(){Ie&&Se()},[S,L,pe,Ie]),(0,re.Z)(function(){if(ve===c)Ee(C);else if(ve===C){var Oe=t(F.current,!1,L,pe);Ee(E),Re(Oe)}else ze()},[ve]);var Be=o.useRef(),je=function(){we.Z.cancel(Be.current)},Fe=function(oe){ve===E&&(Z==null||Z(oe),R&&(je(),Be.current=(0,we.Z)(function(){Se()})))};o.useEffect(function(){return je},[]);var Ke=Ie?xe:null,Ne=(0,f.Z)((0,f.Z)({},w),Ke);return(ve===c||ve===C)&&(Ne.overflowY="hidden",Ne.overflowX="hidden"),o.createElement(Y.Z,{onResize:Fe,disabled:!(R||Z)},o.createElement("textarea",(0,p.Z)({},Q,{ref:F,style:Ne,className:O()(m,v,(0,l.Z)({},"".concat(m,"-disabled"),X)),disabled:X,value:k,onChange:ie})))}),K=_,U=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","classes","showCount","count","className","style","disabled","hidden","classNames","styles","onResize"],ue=o.forwardRef(function(i,ee){var g,m,z=i.defaultValue,T=i.value,S=i.onFocus,R=i.onBlur,Z=i.onChange,v=i.allowClear,w=i.maxLength,X=i.onCompositionStart,M=i.onCompositionEnd,de=i.suffix,Q=i.prefixCls,q=Q===void 0?"rc-textarea":Q,ce=i.classes,k=i.showCount,ne=i.count,ie=i.className,F=i.style,se=i.disabled,Ce=i.hidden,L=i.classNames,pe=i.styles,Ie=i.onResize,ze=(0,d.Z)(i,U),Pe=(0,y.Z)(z,{value:T,defaultValue:z}),ye=(0,r.Z)(Pe,2),ve=ye[0],Ee=ye[1],G=ve==null?"":String(ve),$=o.useState(!1),xe=(0,r.Z)($,2),Re=xe[0],Se=xe[1],Be=o.useRef(!1),je=o.useState(null),Fe=(0,r.Z)(je,2),Ke=Fe[0],Ne=Fe[1],Oe=(0,o.useRef)(null),oe=function(){var V;return(V=Oe.current)===null||V===void 0?void 0:V.textArea},Le=function(){oe().focus()};(0,o.useImperativeHandle)(ee,function(){return{resizableTextArea:Oe.current,focus:Le,blur:function(){oe().blur()}}}),(0,o.useEffect)(function(){Se(function(me){return!se&&me})},[se]);var Ue=o.useState(null),Ve=(0,r.Z)(Ue,2),Ge=Ve[0],Qe=Ve[1];o.useEffect(function(){if(Ge){var me;(me=oe()).setSelectionRange.apply(me,(0,b.Z)(Ge))}},[Ge]);var Ae=(0,j.Z)(ne,k),We=(g=Ae.max)!==null&&g!==void 0?g:w,qe=Number(We)>0,Xe=Ae.strategy(G),ke=!!We&&Xe>We,Je=function(V,Ze){var He=Ze;!Be.current&&Ae.exceedFormatter&&Ae.max&&Ae.strategy(Ze)>Ae.max&&(He=Ae.exceedFormatter(Ze,{max:Ae.max}),Ze!==He&&Qe([oe().selectionStart||0,oe().selectionEnd||0])),Ee(He),(0,H.rJ)(V.currentTarget,V,Z,He)},_e=function(V){Be.current=!0,X==null||X(V)},et=function(V){Be.current=!1,Je(V,V.currentTarget.value),M==null||M(V)},tt=function(V){Je(V,V.target.value)},nt=function(V){var Ze=ze.onPressEnter,He=ze.onKeyDown;V.key==="Enter"&&Ze&&Ze(V),He==null||He(V)},ot=function(V){Se(!0),S==null||S(V)},rt=function(V){Se(!1),R==null||R(V)},at=function(V){Ee(""),Le(),(0,H.rJ)(oe(),V,Z)},Ye=de,De;Ae.show&&(Ae.showFormatter?De=Ae.showFormatter({value:G,count:Xe,maxLength:We}):De="".concat(Xe).concat(qe?" / ".concat(We):""),Ye=o.createElement(o.Fragment,null,Ye,o.createElement("span",{className:O()("".concat(q,"-data-count"),L==null?void 0:L.count),style:pe==null?void 0:pe.count},De)));var it=function(V){var Ze;Ie==null||Ie(V),(Ze=oe())!==null&&Ze!==void 0&&Ze.style.height&&Ne(!0)},lt=!ze.autoSize&&!k&&!v,st=o.createElement(P.Q,{value:G,allowClear:v,handleReset:at,suffix:Ye,prefixCls:q,classes:{affixWrapper:O()(ce==null?void 0:ce.affixWrapper,(m={},(0,l.Z)(m,"".concat(q,"-show-count"),k),(0,l.Z)(m,"".concat(q,"-textarea-allow-clear"),v),m))},disabled:se,focused:Re,className:O()(ie,ke&&"".concat(q,"-out-of-range")),style:(0,f.Z)((0,f.Z)({},F),Ke&&!lt?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof De=="string"?De:void 0}},hidden:Ce,inputElement:o.createElement(K,(0,p.Z)({},ze,{maxLength:w,onKeyDown:nt,onChange:tt,onFocus:ot,onBlur:rt,onCompositionStart:_e,onCompositionEnd:et,className:O()(L==null?void 0:L.textarea),style:(0,f.Z)((0,f.Z)({},pe==null?void 0:pe.textarea),{},{resize:F==null?void 0:F.resize}),disabled:se,prefixCls:q,onResize:it,ref:Oe}))});return st}),fe=ue,$e=fe,ge=n(35216),be=n(30651),ae=n(57501),W=n(44746),J=n(5867),he=n(97913),B=n(36610),u=function(i,ee){var g={};for(var m in i)Object.prototype.hasOwnProperty.call(i,m)&&ee.indexOf(m)<0&&(g[m]=i[m]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var z=0,m=Object.getOwnPropertySymbols(i);z<m.length;z++)ee.indexOf(m[z])<0&&Object.prototype.propertyIsEnumerable.call(i,m[z])&&(g[m[z]]=i[m[z]]);return g},x=(0,o.forwardRef)((i,ee)=>{var g;const{prefixCls:m,bordered:z=!0,size:T,disabled:S,status:R,allowClear:Z,classNames:v,rootClassName:w,className:X}=i,M=u(i,["prefixCls","bordered","size","disabled","status","allowClear","classNames","rootClassName","className"]),{getPrefixCls:de,direction:Q}=o.useContext(be.E_),q=(0,W.Z)(T),ce=o.useContext(ae.Z),k=S!=null?S:ce,{status:ne,hasFeedback:ie,feedbackIcon:F}=o.useContext(J.aM),se=(0,ge.F)(ne,R),Ce=o.useRef(null);o.useImperativeHandle(ee,()=>{var Pe;return{resizableTextArea:(Pe=Ce.current)===null||Pe===void 0?void 0:Pe.resizableTextArea,focus:ye=>{var ve,Ee;(0,he.n)((Ee=(ve=Ce.current)===null||ve===void 0?void 0:ve.resizableTextArea)===null||Ee===void 0?void 0:Ee.textArea,ye)},blur:()=>{var ye;return(ye=Ce.current)===null||ye===void 0?void 0:ye.blur()}}});const L=de("input",m);let pe;typeof Z=="object"&&(Z!=null&&Z.clearIcon)?pe=Z:Z&&(pe={clearIcon:o.createElement(D.Z,null)});const[Ie,ze]=(0,B.ZP)(L);return Ie(o.createElement($e,Object.assign({},M,{disabled:k,allowClear:pe,className:O()(X,w),classes:{affixWrapper:O()(`${L}-textarea-affix-wrapper`,{[`${L}-affix-wrapper-rtl`]:Q==="rtl",[`${L}-affix-wrapper-borderless`]:!z,[`${L}-affix-wrapper-sm`]:q==="small",[`${L}-affix-wrapper-lg`]:q==="large",[`${L}-textarea-show-count`]:i.showCount||((g=i.count)===null||g===void 0?void 0:g.show)},(0,ge.Z)(`${L}-affix-wrapper`,se),ze)},classNames:Object.assign(Object.assign({},v),{textarea:O()({[`${L}-borderless`]:!z,[`${L}-sm`]:q==="small",[`${L}-lg`]:q==="large"},(0,ge.Z)(L,se),ze,v==null?void 0:v.textarea)}),prefixCls:L,suffix:ie&&o.createElement("span",{className:`${L}-textarea-suffix`},F),ref:Ce})))})},78090:function(Me,te,n){n.d(te,{Z:function(){return D}});var o=n(50959);function D(I,O){const p=(0,o.useRef)([]),f=()=>{p.current.push(setTimeout(()=>{var l,b,r,d;!((l=I.current)===null||l===void 0)&&l.input&&((b=I.current)===null||b===void 0?void 0:b.input.getAttribute("type"))==="password"&&(!((r=I.current)===null||r===void 0)&&r.input.hasAttribute("value"))&&((d=I.current)===null||d===void 0||d.input.removeAttribute("value"))}))};return(0,o.useEffect)(()=>(O&&f(),()=>p.current.forEach(l=>{l&&clearTimeout(l)})),[]),f}},36610:function(Me,te,n){n.d(te,{M1:function(){return l},TM:function(){return s},Xy:function(){return b},bi:function(){return P},e5:function(){return h},ik:function(){return j},nz:function(){return p},pU:function(){return f},s7:function(){return H},x0:function(){return d}});var o=n(5871),D=n(53619),I=n(37863),O=n(57564);const p=e=>({"&::-moz-placeholder":{opacity:1},"&::placeholder":{color:e,userSelect:"none"},"&:placeholder-shown":{textOverflow:"ellipsis"}}),f=e=>({borderColor:e.hoverBorderColor,backgroundColor:e.hoverBg}),l=e=>({borderColor:e.activeBorderColor,boxShadow:e.activeShadow,outline:0,backgroundColor:e.activeBg}),b=e=>({color:e.colorTextDisabled,backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,boxShadow:"none",cursor:"not-allowed",opacity:1,"&:hover":Object.assign({},f((0,I.TS)(e,{hoverBorderColor:e.colorBorder,hoverBg:e.colorBgContainerDisabled})))}),r=e=>{const{paddingBlockLG:t,fontSizeLG:a,lineHeightLG:c,borderRadiusLG:C,paddingInlineLG:E}=e;return{padding:`${t}px ${E}px`,fontSize:a,lineHeight:c,borderRadius:C}},d=e=>({padding:`${e.paddingBlockSM}px ${e.paddingInlineSM}px`,borderRadius:e.borderRadiusSM}),P=(e,t)=>{const{componentCls:a,colorError:c,colorWarning:C,errorActiveShadow:E,warningActiveShadow:_,colorErrorBorderHover:K,colorWarningBorderHover:U}=e;return{[`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]:{borderColor:c,"&:hover":{borderColor:K},"&:focus, &:focus-within":Object.assign({},l((0,I.TS)(e,{activeBorderColor:c,activeShadow:E}))),[`${a}-prefix, ${a}-suffix`]:{color:c}},[`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]:{borderColor:C,"&:hover":{borderColor:U},"&:focus, &:focus-within":Object.assign({},l((0,I.TS)(e,{activeBorderColor:C,activeShadow:_}))),[`${a}-prefix, ${a}-suffix`]:{color:C}}}},j=e=>Object.assign(Object.assign({position:"relative",display:"inline-block",width:"100%",minWidth:0,padding:`${e.paddingBlock}px ${e.paddingInline}px`,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,backgroundColor:e.colorBgContainer,backgroundImage:"none",borderWidth:e.lineWidth,borderStyle:e.lineType,borderColor:e.colorBorder,borderRadius:e.borderRadius,transition:`all ${e.motionDurationMid}`},p(e.colorTextPlaceholder)),{"&:hover":Object.assign({},f(e)),"&:focus, &:focus-within":Object.assign({},l(e)),"&-disabled, &[disabled]":Object.assign({},b(e)),"&-borderless":{"&, &:hover, &:focus, &-focused, &-disabled, &[disabled]":{backgroundColor:"transparent",border:"none",boxShadow:"none"}},"textarea&":{maxWidth:"100%",height:"auto",minHeight:e.controlHeight,lineHeight:e.lineHeight,verticalAlign:"bottom",transition:`all ${e.motionDurationSlow}, height 0s`,resize:"vertical"},"&-lg":Object.assign({},r(e)),"&-sm":Object.assign({},d(e)),"&-rtl":{direction:"rtl"},"&-textarea-rtl":{direction:"rtl"}}),H=e=>{const{componentCls:t,antCls:a}=e;return{position:"relative",display:"table",width:"100%",borderCollapse:"separate",borderSpacing:0,["&[class*='col-']"]:{paddingInlineEnd:e.paddingXS,"&:last-child":{paddingInlineEnd:0}},[`&-lg ${t}, &-lg > ${t}-group-addon`]:Object.assign({},r(e)),[`&-sm ${t}, &-sm > ${t}-group-addon`]:Object.assign({},d(e)),[`&-lg ${a}-select-single ${a}-select-selector`]:{height:e.controlHeightLG},[`&-sm ${a}-select-single ${a}-select-selector`]:{height:e.controlHeightSM},[`> ${t}`]:{display:"table-cell","&:not(:first-child):not(:last-child)":{borderRadius:0}},[`${t}-group`]:{["&-addon, &-wrap"]:{display:"table-cell",width:1,whiteSpace:"nowrap",verticalAlign:"middle","&:not(:first-child):not(:last-child)":{borderRadius:0}},"&-wrap > *":{display:"block !important"},"&-addon":{position:"relative",padding:`0 ${e.paddingInline}px`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,textAlign:"center",backgroundColor:e.addonBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadius,transition:`all ${e.motionDurationSlow}`,lineHeight:1,[`${a}-select`]:{margin:`-${e.paddingBlock+1}px -${e.paddingInline}px`,[`&${a}-select-single:not(${a}-select-customize-input):not(${a}-pagination-size-changer)`]:{[`${a}-select-selector`]:{backgroundColor:"inherit",border:`${e.lineWidth}px ${e.lineType} transparent`,boxShadow:"none"}},"&-open, &-focused":{[`${a}-select-selector`]:{color:e.colorPrimary}}},[`${a}-cascader-picker`]:{margin:`-9px -${e.paddingInline}px`,backgroundColor:"transparent",[`${a}-cascader-input`]:{textAlign:"start",border:0,boxShadow:"none"}}},"&-addon:first-child":{borderInlineEnd:0},"&-addon:last-child":{borderInlineStart:0}},[`${t}`]:{width:"100%",marginBottom:0,textAlign:"inherit","&:focus":{zIndex:1,borderInlineEndWidth:1},"&:hover":{zIndex:1,borderInlineEndWidth:1,[`${t}-search-with-button &`]:{zIndex:0}}},[`> ${t}:first-child, ${t}-group-addon:first-child`]:{borderStartEndRadius:0,borderEndEndRadius:0,[`${a}-select ${a}-select-selector`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${t}-affix-wrapper`]:{[`&:not(:first-child) ${t}`]:{borderStartStartRadius:0,borderEndStartRadius:0},[`&:not(:last-child) ${t}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${t}:last-child, ${t}-group-addon:last-child`]:{borderStartStartRadius:0,borderEndStartRadius:0,[`${a}-select ${a}-select-selector`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`${t}-affix-wrapper`]:{"&:not(:last-child)":{borderStartEndRadius:0,borderEndEndRadius:0,[`${t}-search &`]:{borderStartStartRadius:e.borderRadius,borderEndStartRadius:e.borderRadius}},[`&:not(:first-child), ${t}-search &:not(:first-child)`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`&${t}-group-compact`]:Object.assign(Object.assign({display:"block"},(0,o.dF)()),{[`${t}-group-addon, ${t}-group-wrap, > ${t}`]:{"&:not(:first-child):not(:last-child)":{borderInlineEndWidth:e.lineWidth,"&:hover":{zIndex:1},"&:focus":{zIndex:1}}},"& > *":{display:"inline-block",float:"none",verticalAlign:"top",borderRadius:0},[`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${a}-picker-range
      `]:{display:"inline-flex"},"& > *:not(:last-child)":{marginInlineEnd:-e.lineWidth,borderInlineEndWidth:e.lineWidth},[`${t}`]:{float:"none"},[`& > ${a}-select > ${a}-select-selector,
      & > ${a}-select-auto-complete ${t},
      & > ${a}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]:{borderInlineEndWidth:e.lineWidth,borderRadius:0,"&:hover":{zIndex:1},"&:focus":{zIndex:1}},[`& > ${a}-select-focused`]:{zIndex:1},[`& > ${a}-select > ${a}-select-arrow`]:{zIndex:1},[`& > *:first-child,
      & > ${a}-select:first-child > ${a}-select-selector,
      & > ${a}-select-auto-complete:first-child ${t},
      & > ${a}-cascader-picker:first-child ${t}`]:{borderStartStartRadius:e.borderRadius,borderEndStartRadius:e.borderRadius},[`& > *:last-child,
      & > ${a}-select:last-child > ${a}-select-selector,
      & > ${a}-cascader-picker:last-child ${t},
      & > ${a}-cascader-picker-focused:last-child ${t}`]:{borderInlineEndWidth:e.lineWidth,borderStartEndRadius:e.borderRadius,borderEndEndRadius:e.borderRadius},[`& > ${a}-select-auto-complete ${t}`]:{verticalAlign:"top"},[`${t}-group-wrapper + ${t}-group-wrapper`]:{marginInlineStart:-e.lineWidth,[`${t}-affix-wrapper`]:{borderRadius:0}},[`${t}-group-wrapper:not(:last-child)`]:{[`&${t}-search > ${t}-group`]:{[`& > ${t}-group-addon > ${t}-search-button`]:{borderRadius:0},[`& > ${t}`]:{borderStartStartRadius:e.borderRadius,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:e.borderRadius}}}})}},y=e=>{const{componentCls:t,controlHeightSM:a,lineWidth:c}=e,C=16,E=(a-c*2-C)/2;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,o.Wf)(e)),j(e)),P(e,t)),{'&[type="color"]':{height:e.controlHeight,[`&${t}-lg`]:{height:e.controlHeightLG},[`&${t}-sm`]:{height:a,paddingTop:E,paddingBottom:E}},'&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':{"-webkit-appearance":"none"}})}},le=e=>{const{componentCls:t}=e;return{[`${t}-clear-icon`]:{margin:0,color:e.colorTextQuaternary,fontSize:e.fontSizeIcon,verticalAlign:-1,cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextTertiary},"&:active":{color:e.colorText},"&-hidden":{visibility:"hidden"},"&-has-suffix":{margin:`0 ${e.inputAffixPadding}px`}}}},Y=e=>{const{componentCls:t,inputAffixPadding:a,colorTextDescription:c,motionDurationSlow:C,colorIcon:E,colorIconHover:_,iconCls:K}=e;return{[`${t}-affix-wrapper`]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},j(e)),{display:"inline-flex",[`&:not(${t}-affix-wrapper-disabled):hover`]:{zIndex:1,[`${t}-search-with-button &`]:{zIndex:0}},"&-focused, &:focus":{zIndex:1},"&-disabled":{[`${t}[disabled]`]:{background:"transparent"}},[`> input${t}`]:{padding:0,fontSize:"inherit",border:"none",borderRadius:0,outline:"none","&::-ms-reveal":{display:"none"},"&:focus":{boxShadow:"none !important"}},"&::before":{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'},[`${t}`]:{"&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center","> *:not(:last-child)":{marginInlineEnd:e.paddingXS}},"&-show-count-suffix":{color:c},"&-show-count-has-suffix":{marginInlineEnd:e.paddingXXS},"&-prefix":{marginInlineEnd:a},"&-suffix":{marginInlineStart:a}}}),le(e)),{[`${K}${t}-password-icon`]:{color:E,cursor:"pointer",transition:`all ${C}`,"&:hover":{color:_}}}),P(e,`${t}-affix-wrapper`))}},re=e=>{const{componentCls:t,colorError:a,colorWarning:c,borderRadiusLG:C,borderRadiusSM:E}=e;return{[`${t}-group`]:Object.assign(Object.assign(Object.assign({},(0,o.Wf)(e)),H(e)),{"&-rtl":{direction:"rtl"},"&-wrapper":{display:"inline-block",width:"100%",textAlign:"start",verticalAlign:"top","&-rtl":{direction:"rtl"},"&-lg":{[`${t}-group-addon`]:{borderRadius:C,fontSize:e.fontSizeLG}},"&-sm":{[`${t}-group-addon`]:{borderRadius:E}},"&-status-error":{[`${t}-group-addon`]:{color:a,borderColor:a}},"&-status-warning":{[`${t}-group-addon`]:{color:c,borderColor:c}},"&-disabled":{[`${t}-group-addon`]:Object.assign({},b(e))},[`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]:{[`${t}, ${t}-group-addon`]:{borderRadius:0}},[`&:not(${t}-compact-last-item)${t}-compact-first-item`]:{[`${t}, ${t}-group-addon`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${t}-compact-first-item)${t}-compact-last-item`]:{[`${t}, ${t}-group-addon`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}})}},we=e=>{const{componentCls:t,antCls:a}=e,c=`${t}-search`;return{[c]:{[`${t}`]:{"&:hover, &:focus":{borderColor:e.colorPrimaryHover,[`+ ${t}-group-addon ${c}-button:not(${a}-btn-primary)`]:{borderInlineStartColor:e.colorPrimaryHover}}},[`${t}-affix-wrapper`]:{borderRadius:0},[`${t}-lg`]:{lineHeight:e.lineHeightLG-2e-4},[`> ${t}-group`]:{[`> ${t}-group-addon:last-child`]:{insetInlineStart:-1,padding:0,border:0,[`${c}-button`]:{paddingTop:0,paddingBottom:0,borderStartStartRadius:0,borderStartEndRadius:e.borderRadius,borderEndEndRadius:e.borderRadius,borderEndStartRadius:0,boxShadow:"none"},[`${c}-button:not(${a}-btn-primary)`]:{color:e.colorTextDescription,"&:hover":{color:e.colorPrimaryHover},"&:active":{color:e.colorPrimaryActive},[`&${a}-btn-loading::before`]:{insetInlineStart:0,insetInlineEnd:0,insetBlockStart:0,insetBlockEnd:0}}}},[`${c}-button`]:{height:e.controlHeight,"&:hover, &:focus":{zIndex:1}},[`&-large ${c}-button`]:{height:e.controlHeightLG},[`&-small ${c}-button`]:{height:e.controlHeightSM},"&-rtl":{direction:"rtl"},[`&${t}-compact-item`]:{[`&:not(${t}-compact-last-item)`]:{[`${t}-group-addon`]:{[`${t}-search-button`]:{marginInlineEnd:-e.lineWidth,borderRadius:0}}},[`&:not(${t}-compact-first-item)`]:{[`${t},${t}-affix-wrapper`]:{borderRadius:0}},[`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]:{"&:hover,&:focus,&:active":{zIndex:2}},[`> ${t}-affix-wrapper-focused`]:{zIndex:2}}}}},Te=e=>{const{componentCls:t,paddingLG:a}=e,c=`${t}-textarea`;return{[c]:{position:"relative","&-show-count":{[`> ${t}`]:{height:"100%"},[`${t}-data-count`]:{position:"absolute",bottom:-e.fontSize*e.lineHeight,insetInlineEnd:0,color:e.colorTextDescription,whiteSpace:"nowrap",pointerEvents:"none"}},"&-allow-clear":{[`> ${t}`]:{paddingInlineEnd:a}},[`&-affix-wrapper${c}-has-feedback`]:{[`${t}`]:{paddingInlineEnd:a}},[`&-affix-wrapper${t}-affix-wrapper`]:{padding:0,[`> textarea${t}`]:{fontSize:"inherit",border:"none",outline:"none","&:focus":{boxShadow:"none !important"}},[`${t}-suffix`]:{margin:0,"> *:not(:last-child)":{marginInline:0},[`${t}-clear-icon`]:{position:"absolute",insetInlineEnd:e.paddingXS,insetBlockStart:e.paddingXS},[`${c}-suffix`]:{position:"absolute",top:0,insetInlineEnd:e.paddingInline,bottom:0,zIndex:1,display:"inline-flex",alignItems:"center",margin:"auto",pointerEvents:"none"}}}}}},N=e=>{const{componentCls:t}=e;return{[`${t}-out-of-range`]:{[`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]:{color:e.colorError}}}};function h(e){return(0,I.TS)(e,{inputAffixPadding:e.paddingXXS})}const s=e=>{const{controlHeight:t,fontSize:a,lineHeight:c,lineWidth:C,controlHeightSM:E,controlHeightLG:_,fontSizeLG:K,lineHeightLG:U,paddingSM:ue,controlPaddingHorizontalSM:fe,controlPaddingHorizontal:$e,colorFillAlter:ge,colorPrimaryHover:be,colorPrimary:ae,controlOutlineWidth:W,controlOutline:J,colorErrorOutline:he,colorWarningOutline:B}=e;return{paddingBlock:Math.max(Math.round((t-a*c)/2*10)/10-C,0),paddingBlockSM:Math.max(Math.round((E-a*c)/2*10)/10-C,0),paddingBlockLG:Math.ceil((_-K*U)/2*10)/10-C,paddingInline:ue-C,paddingInlineSM:fe-C,paddingInlineLG:$e-C,addonBg:ge,activeBorderColor:ae,hoverBorderColor:be,activeShadow:`0 0 0 ${W}px ${J}`,errorActiveShadow:`0 0 0 ${W}px ${he}`,warningActiveShadow:`0 0 0 ${W}px ${B}`,hoverBg:"",activeBg:""}};te.ZP=(0,O.Z)("Input",e=>{const t=(0,I.TS)(e,h(e));return[y(t),Te(t),Y(t),re(t),we(t),N(t),(0,D.c)(t)]},s)},80245:function(Me,te){const n=o=>({[o.componentCls]:{[`${o.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${o.motionDurationMid} ${o.motionEaseInOut},
        opacity ${o.motionDurationMid} ${o.motionEaseInOut} !important`}},[`${o.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${o.motionDurationMid} ${o.motionEaseInOut},
        opacity ${o.motionDurationMid} ${o.motionEaseInOut} !important`}}});te.Z=n},76263:function(Me,te,n){n.d(te,{Z:function(){return l}});var o=n(10582),D=n(12309),I=n(26407),O=n(50959),p=["show"];function f(b,r){if(!r.max)return!0;var d=r.strategy(b);return d<=r.max}function l(b,r){return O.useMemo(function(){var d={};r&&(d.show=(0,I.Z)(r)==="object"&&r.formatter?r.formatter:!!r),d=(0,D.Z)((0,D.Z)({},d),b);var P=d,j=P.show,H=(0,o.Z)(P,p);return(0,D.Z)((0,D.Z)({},H),{},{show:!!j,showFormatter:typeof j=="function"?j:void 0,strategy:H.strategy||function(y){return y.length}})},[b,r])}},41549:function(Me,te,n){n.d(te,{Q:function(){return d},Z:function(){return N}});var o=n(97605),D=n(12309),I=n(25201),O=n(26407),p=n(84875),f=n.n(p),l=n(50959),b=n(66420),r=function(s){var e,t,a=s.inputElement,c=s.prefixCls,C=s.prefix,E=s.suffix,_=s.addonBefore,K=s.addonAfter,U=s.className,ue=s.style,fe=s.disabled,$e=s.readOnly,ge=s.focused,be=s.triggerFocus,ae=s.allowClear,W=s.value,J=s.handleReset,he=s.hidden,B=s.classes,u=s.classNames,A=s.dataAttrs,x=s.styles,i=s.components,ee=(i==null?void 0:i.affixWrapper)||"span",g=(i==null?void 0:i.groupWrapper)||"span",m=(i==null?void 0:i.wrapper)||"span",z=(i==null?void 0:i.groupAddon)||"span",T=(0,l.useRef)(null),S=function(ne){var ie;(ie=T.current)!==null&&ie!==void 0&&ie.contains(ne.target)&&(be==null||be())},R=function(){var ne;if(!ae)return null;var ie=!fe&&!$e&&W,F="".concat(c,"-clear-icon"),se=(0,O.Z)(ae)==="object"&&ae!==null&&ae!==void 0&&ae.clearIcon?ae.clearIcon:"\u2716";return l.createElement("span",{onClick:J,onMouseDown:function(L){return L.preventDefault()},className:f()(F,(ne={},(0,I.Z)(ne,"".concat(F,"-hidden"),!ie),(0,I.Z)(ne,"".concat(F,"-has-suffix"),!!E),ne)),role:"button",tabIndex:-1},se)},Z=(0,l.cloneElement)(a,{value:W,hidden:he,className:f()((e=a.props)===null||e===void 0?void 0:e.className,!(0,b.X3)(s)&&!(0,b.He)(s)&&U)||null,style:(0,D.Z)((0,D.Z)({},(t=a.props)===null||t===void 0?void 0:t.style),!(0,b.X3)(s)&&!(0,b.He)(s)?ue:{})});if((0,b.X3)(s)){var v,w="".concat(c,"-affix-wrapper"),X=f()(w,(v={},(0,I.Z)(v,"".concat(w,"-disabled"),fe),(0,I.Z)(v,"".concat(w,"-focused"),ge),(0,I.Z)(v,"".concat(w,"-readonly"),$e),(0,I.Z)(v,"".concat(w,"-input-with-clear-btn"),E&&ae&&W),v),!(0,b.He)(s)&&U,B==null?void 0:B.affixWrapper,u==null?void 0:u.affixWrapper),M=(E||ae)&&l.createElement("span",{className:f()("".concat(c,"-suffix"),u==null?void 0:u.suffix),style:x==null?void 0:x.suffix},R(),E);Z=l.createElement(ee,(0,o.Z)({className:X,style:(0,D.Z)((0,D.Z)({},(0,b.He)(s)?void 0:ue),x==null?void 0:x.affixWrapper),hidden:!(0,b.He)(s)&&he,onClick:S},A==null?void 0:A.affixWrapper,{ref:T}),C&&l.createElement("span",{className:f()("".concat(c,"-prefix"),u==null?void 0:u.prefix),style:x==null?void 0:x.prefix},C),(0,l.cloneElement)(a,{value:W,hidden:null}),M)}if((0,b.He)(s)){var de="".concat(c,"-group"),Q="".concat(de,"-addon"),q=f()("".concat(c,"-wrapper"),de,B==null?void 0:B.wrapper),ce=f()("".concat(c,"-group-wrapper"),U,B==null?void 0:B.group);return l.createElement(g,{className:ce,style:ue,hidden:he},l.createElement(m,{className:q},_&&l.createElement(z,{className:Q},_),(0,l.cloneElement)(Z,{hidden:null}),K&&l.createElement(z,{className:Q},K)))}return Z},d=r,P=n(36014),j=n(89043),H=n(10582),y=n(65589),le=n(87017),Y=n(76263),re=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],we=(0,l.forwardRef)(function(h,s){var e=h.autoComplete,t=h.onChange,a=h.onFocus,c=h.onBlur,C=h.onPressEnter,E=h.onKeyDown,_=h.prefixCls,K=_===void 0?"rc-input":_,U=h.disabled,ue=h.htmlSize,fe=h.className,$e=h.maxLength,ge=h.suffix,be=h.showCount,ae=h.count,W=h.type,J=W===void 0?"text":W,he=h.classes,B=h.classNames,u=h.styles,A=h.onCompositionStart,x=h.onCompositionEnd,i=(0,H.Z)(h,re),ee=(0,l.useState)(!1),g=(0,j.Z)(ee,2),m=g[0],z=g[1],T=l.useRef(!1),S=(0,l.useRef)(null),R=function($){S.current&&(0,b.nH)(S.current,$)},Z=(0,y.Z)(h.defaultValue,{value:h.value}),v=(0,j.Z)(Z,2),w=v[0],X=v[1],M=w==null?"":String(w),de=l.useState(null),Q=(0,j.Z)(de,2),q=Q[0],ce=Q[1],k=(0,Y.Z)(ae,be),ne=k.max||$e,ie=k.strategy(M),F=!!ne&&ie>ne;(0,l.useImperativeHandle)(s,function(){return{focus:R,blur:function(){var $;($=S.current)===null||$===void 0||$.blur()},setSelectionRange:function($,xe,Re){var Se;(Se=S.current)===null||Se===void 0||Se.setSelectionRange($,xe,Re)},select:function(){var $;($=S.current)===null||$===void 0||$.select()},input:S.current}}),(0,l.useEffect)(function(){z(function(G){return G&&U?!1:G})},[U]);var se=function($,xe){var Re=xe;if(!T.current&&k.exceedFormatter&&k.max&&k.strategy(xe)>k.max&&(Re=k.exceedFormatter(xe,{max:k.max}),xe!==Re)){var Se,Be;ce([((Se=S.current)===null||Se===void 0?void 0:Se.selectionStart)||0,((Be=S.current)===null||Be===void 0?void 0:Be.selectionEnd)||0])}X(Re),S.current&&(0,b.rJ)(S.current,$,t,Re)};l.useEffect(function(){if(q){var G;(G=S.current)===null||G===void 0||G.setSelectionRange.apply(G,(0,P.Z)(q))}},[q]);var Ce=function($){se($,$.target.value)},L=function($){T.current=!1,se($,$.currentTarget.value),x==null||x($)},pe=function($){C&&$.key==="Enter"&&C($),E==null||E($)},Ie=function($){z(!0),a==null||a($)},ze=function($){z(!1),c==null||c($)},Pe=function($){X(""),R(),S.current&&(0,b.rJ)(S.current,$,t)},ye=F&&"".concat(K,"-out-of-range"),ve=function(){var $=(0,le.Z)(h,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames"]);return l.createElement("input",(0,o.Z)({autoComplete:e},$,{onChange:Ce,onFocus:Ie,onBlur:ze,onKeyDown:pe,className:f()(K,(0,I.Z)({},"".concat(K,"-disabled"),U),B==null?void 0:B.input),style:u==null?void 0:u.input,ref:S,size:ue,type:J,onCompositionStart:function(Re){T.current=!0,A==null||A(Re)},onCompositionEnd:L}))},Ee=function(){var $=Number(ne)>0;if(ge||k.show){var xe=k.showFormatter?k.showFormatter({value:M,count:ie,maxLength:ne}):"".concat(ie).concat($?" / ".concat(ne):"");return l.createElement(l.Fragment,null,k.show&&l.createElement("span",{className:f()("".concat(K,"-show-count-suffix"),(0,I.Z)({},"".concat(K,"-show-count-has-suffix"),!!ge),B==null?void 0:B.count),style:(0,D.Z)({},u==null?void 0:u.count)},xe),ge)}return null};return l.createElement(d,(0,o.Z)({},i,{prefixCls:K,className:f()(fe,ye),inputElement:ve(),handleReset:Pe,value:M,focused:m,triggerFocus:R,suffix:Ee(),disabled:U,classes:he,classNames:B,styles:u}))}),Te=we,N=Te},66420:function(Me,te,n){n.d(te,{He:function(){return o},X3:function(){return D},nH:function(){return O},rJ:function(){return I}});function o(p){return!!(p.addonBefore||p.addonAfter)}function D(p){return!!(p.prefix||p.suffix||p.allowClear)}function I(p,f,l,b){if(l){var r=f;if(f.type==="click"){var d=p.cloneNode(!0);r=Object.create(f,{target:{value:d},currentTarget:{value:d}}),d.value="",l(r);return}if(b!==void 0){r=Object.create(f,{target:{value:p},currentTarget:{value:p}}),p.type!=="file"&&(p.value=b),l(r);return}l(r)}}function O(p,f){if(p){p.focus(f);var l=f||{},b=l.cursor;if(b){var r=p.value.length;switch(b){case"start":p.setSelectionRange(0,0);break;case"end":p.setSelectionRange(r,r);break;default:p.setSelectionRange(0,r)}}}}},10886:function(Me,te,n){n.d(te,{Z:function(){return b}});const o=r=>typeof r=="object"&&r!=null&&r.nodeType===1,D=(r,d)=>(!d||r!=="hidden")&&r!=="visible"&&r!=="clip",I=(r,d)=>{if(r.clientHeight<r.scrollHeight||r.clientWidth<r.scrollWidth){const P=getComputedStyle(r,null);return D(P.overflowY,d)||D(P.overflowX,d)||(j=>{const H=(y=>{if(!y.ownerDocument||!y.ownerDocument.defaultView)return null;try{return y.ownerDocument.defaultView.frameElement}catch(le){return null}})(j);return!!H&&(H.clientHeight<j.scrollHeight||H.clientWidth<j.scrollWidth)})(r)}return!1},O=(r,d,P,j,H,y,le,Y)=>y<r&&le>d||y>r&&le<d?0:y<=r&&Y<=P||le>=d&&Y>=P?y-r-j:le>d&&Y<P||y<r&&Y>P?le-d+H:0,p=r=>{const d=r.parentElement;return d==null?r.getRootNode().host||null:d},f=(r,d)=>{var P,j,H,y;if(typeof document=="undefined")return[];const{scrollMode:le,block:Y,inline:re,boundary:we,skipOverflowHiddenElements:Te}=d,N=typeof we=="function"?we:B=>B!==we;if(!o(r))throw new TypeError("Invalid target");const h=document.scrollingElement||document.documentElement,s=[];let e=r;for(;o(e)&&N(e);){if(e=p(e),e===h){s.push(e);break}e!=null&&e===document.body&&I(e)&&!I(document.documentElement)||e!=null&&I(e,Te)&&s.push(e)}const t=(j=(P=window.visualViewport)==null?void 0:P.width)!=null?j:innerWidth,a=(y=(H=window.visualViewport)==null?void 0:H.height)!=null?y:innerHeight,{scrollX:c,scrollY:C}=window,{height:E,width:_,top:K,right:U,bottom:ue,left:fe}=r.getBoundingClientRect(),{top:$e,right:ge,bottom:be,left:ae}=(B=>{const u=window.getComputedStyle(B);return{top:parseFloat(u.scrollMarginTop)||0,right:parseFloat(u.scrollMarginRight)||0,bottom:parseFloat(u.scrollMarginBottom)||0,left:parseFloat(u.scrollMarginLeft)||0}})(r);let W=Y==="start"||Y==="nearest"?K-$e:Y==="end"?ue+be:K+E/2-$e+be,J=re==="center"?fe+_/2-ae+ge:re==="end"?U+ge:fe-ae;const he=[];for(let B=0;B<s.length;B++){const u=s[B],{height:A,width:x,top:i,right:ee,bottom:g,left:m}=u.getBoundingClientRect();if(le==="if-needed"&&K>=0&&fe>=0&&ue<=a&&U<=t&&K>=i&&ue<=g&&fe>=m&&U<=ee)return he;const z=getComputedStyle(u),T=parseInt(z.borderLeftWidth,10),S=parseInt(z.borderTopWidth,10),R=parseInt(z.borderRightWidth,10),Z=parseInt(z.borderBottomWidth,10);let v=0,w=0;const X="offsetWidth"in u?u.offsetWidth-u.clientWidth-T-R:0,M="offsetHeight"in u?u.offsetHeight-u.clientHeight-S-Z:0,de="offsetWidth"in u?u.offsetWidth===0?0:x/u.offsetWidth:0,Q="offsetHeight"in u?u.offsetHeight===0?0:A/u.offsetHeight:0;if(h===u)v=Y==="start"?W:Y==="end"?W-a:Y==="nearest"?O(C,C+a,a,S,Z,C+W,C+W+E,E):W-a/2,w=re==="start"?J:re==="center"?J-t/2:re==="end"?J-t:O(c,c+t,t,T,R,c+J,c+J+_,_),v=Math.max(0,v+C),w=Math.max(0,w+c);else{v=Y==="start"?W-i-S:Y==="end"?W-g+Z+M:Y==="nearest"?O(i,g,A,S,Z+M,W,W+E,E):W-(i+A/2)+M/2,w=re==="start"?J-m-T:re==="center"?J-(m+x/2)+X/2:re==="end"?J-ee+R+X:O(m,ee,x,T,R+X,J,J+_,_);const{scrollLeft:q,scrollTop:ce}=u;v=Q===0?0:Math.max(0,Math.min(ce+v/Q,u.scrollHeight-A/Q+M)),w=de===0?0:Math.max(0,Math.min(q+w/de,u.scrollWidth-x/de+X)),W+=ce-v,J+=q-w}he.push({el:u,top:v,left:w})}return he},l=r=>r===!1?{block:"end",inline:"nearest"}:(d=>d===Object(d)&&Object.keys(d).length!==0)(r)?r:{block:"start",inline:"nearest"};function b(r,d){if(!r.isConnected||!(H=>{let y=H;for(;y&&y.parentNode;){if(y.parentNode===document)return!0;y=y.parentNode instanceof ShadowRoot?y.parentNode.host:y.parentNode}return!1})(r))return;const P=(H=>{const y=window.getComputedStyle(H);return{top:parseFloat(y.scrollMarginTop)||0,right:parseFloat(y.scrollMarginRight)||0,bottom:parseFloat(y.scrollMarginBottom)||0,left:parseFloat(y.scrollMarginLeft)||0}})(r);if((H=>typeof H=="object"&&typeof H.behavior=="function")(d))return d.behavior(f(r,d));const j=typeof d=="boolean"||d==null?void 0:d.behavior;for(const{el:H,top:y,left:le}of f(r,l(d))){const Y=y-P.top+P.bottom,re=le-P.left+P.right;H.scroll({top:Y,left:re,behavior:j})}}}}]);