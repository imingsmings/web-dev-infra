(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[9490],{98471:function(ie,ee,w){"use strict";w.d(ee,{Z:function(){return p}});var Z=w(24456),T=w(94881),I=w(50959),Q=w(64769),_=w(21488),re=w(84875),Y=w.n(re),q=w(84918),G=w(41491),k=w(96667),R=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],D=I.forwardRef(function(E,x){var f=E.className,g=E.component,S=E.viewBox,C=E.spin,h=E.rotate,O=E.tabIndex,b=E.onClick,m=E.children,y=(0,T.Z)(E,R),P=I.useRef(),s=(0,q.x1)(P,x);(0,k.Kp)(!!(g||m),"Should have `component` prop or `children`."),(0,k.C3)(P);var N=I.useContext(G.Z),j=N.prefixCls,H=j===void 0?"anticon":j,$=N.rootClassName,z=Y()($,H,f),X=Y()((0,_.Z)({},"".concat(H,"-spin"),!!C)),F=h?{msTransform:"rotate(".concat(h,"deg)"),transform:"rotate(".concat(h,"deg)")}:void 0,W=(0,Q.Z)((0,Q.Z)({},k.vD),{},{className:X,style:F,viewBox:S});S||delete W.viewBox;var te=function(){return g?I.createElement(g,W,m):m?((0,k.Kp)(!!S||I.Children.count(m)===1&&I.isValidElement(m)&&I.Children.only(m).type==="use","Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),I.createElement("svg",(0,Z.Z)({},W,{viewBox:S}),m)):null},ne=O;return ne===void 0&&b&&(ne=-1),I.createElement("span",(0,Z.Z)({role:"img"},y,{ref:s,tabIndex:ne,onClick:b,className:z}),te())});D.displayName="AntdIcon";var l=D,M=["type","children"],a=new Set;function u(E){return!!(typeof E=="string"&&E.length&&!a.has(E))}function o(E){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,f=E[x];if(u(f)){var g=document.createElement("script");g.setAttribute("src",f),g.setAttribute("data-namespace",f),E.length>x+1&&(g.onload=function(){o(E,x+1)},g.onerror=function(){o(E,x+1)}),a.add(f),document.body.appendChild(g)}}function p(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},x=E.scriptUrl,f=E.extraCommonProps,g=f===void 0?{}:f;x&&typeof document!="undefined"&&typeof window!="undefined"&&typeof document.createElement=="function"&&(Array.isArray(x)?o(x.reverse()):o([x]));var S=I.forwardRef(function(C,h){var O=C.type,b=C.children,m=(0,T.Z)(C,M),y=null;return C.type&&(y=I.createElement("use",{xlinkHref:"#".concat(O)})),b&&(y=b),I.createElement(l,(0,Z.Z)({},g,m,{ref:h}),y)});return S.displayName="Iconfont",S}},79209:function(ie,ee,w){"use strict";w.d(ee,{Z:function(){return Y}});var Z=w(24456),T=w(50959),I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"}}]},name:"copyright",theme:"outlined"},Q=I,_=w(38782),re=function(G,k){return T.createElement(_.Z,(0,Z.Z)({},G,{ref:k,icon:Q}))},Y=T.forwardRef(re)},53987:function(ie,ee,w){"use strict";w.d(ee,{Z:function(){return Y}});var Z=w(24456),T=w(50959),I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"},Q=I,_=w(38782),re=function(G,k){return T.createElement(_.Z,(0,Z.Z)({},G,{ref:k,icon:Q}))},Y=T.forwardRef(re)},32991:function(ie,ee,w){"use strict";w.d(ee,{nG:function(){return Je},Un:function(){return Ke}});var Z=w(70916);function T(e,r){return r>>>e|r<<32-e}function I(e,r,t){return e&r^~e&t}function Q(e,r,t){return e&r^e&t^r&t}function _(e){return T(2,e)^T(13,e)^T(22,e)}function re(e){return T(6,e)^T(11,e)^T(25,e)}function Y(e){return T(7,e)^T(18,e)^e>>>3}function q(e){return T(17,e)^T(19,e)^e>>>10}function G(e,r){return e[r&15]+=q(e[r+14&15])+e[r+9&15]+Y(e[r+1&15])}var k=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],R,D,l,M="0123456789abcdef";function a(e,r){var t=(e&65535)+(r&65535),n=(e>>16)+(r>>16)+(t>>16);return n<<16|t&65535}function u(){R=new Array(8),D=new Array(2),l=new Array(64),D[0]=D[1]=0,R[0]=1779033703,R[1]=3144134277,R[2]=1013904242,R[3]=2773480762,R[4]=1359893119,R[5]=2600822924,R[6]=528734635,R[7]=1541459225}function o(){var e,r,t,n,i,d,c,v,A,B,J=new Array(16);e=R[0],r=R[1],t=R[2],n=R[3],i=R[4],d=R[5],c=R[6],v=R[7];for(var V=0;V<16;V++)J[V]=l[(V<<2)+3]|l[(V<<2)+2]<<8|l[(V<<2)+1]<<16|l[V<<2]<<24;for(var L=0;L<64;L++)A=v+re(i)+I(i,d,c)+k[L],L<16?A+=J[L]:A+=G(J,L),B=_(e)+Q(e,r,t),v=c,c=d,d=i,i=a(n,A),n=t,t=r,r=e,e=a(A,B);R[0]+=e,R[1]+=r,R[2]+=t,R[3]+=n,R[4]+=i,R[5]+=d,R[6]+=c,R[7]+=v}function p(e,r){var t,n,i=0;n=D[0]>>3&63;var d=r&63;for((D[0]+=r<<3)<r<<3&&D[1]++,D[1]+=r>>29,t=0;t+63<r;t+=64){for(var c=n;c<64;c++)l[c]=e.charCodeAt(i++);o(),n=0}for(var v=0;v<d;v++)l[v]=e.charCodeAt(i++)}function E(){var e=D[0]>>3&63;if(l[e++]=128,e<=56)for(var r=e;r<56;r++)l[r]=0;else{for(var t=e;t<64;t++)l[t]=0;o();for(var n=0;n<56;n++)l[n]=0}l[56]=D[1]>>>24&255,l[57]=D[1]>>>16&255,l[58]=D[1]>>>8&255,l[59]=D[1]&255,l[60]=D[0]>>>24&255,l[61]=D[0]>>>16&255,l[62]=D[0]>>>8&255,l[63]=D[0]&255,o()}function x(){for(var e=0,r=new Array(32),t=0;t<8;t++)r[e++]=R[t]>>>24&255,r[e++]=R[t]>>>16&255,r[e++]=R[t]>>>8&255,r[e++]=R[t]&255;return r}function f(){for(var e=new String,r=0;r<8;r++)for(var t=28;t>=0;t-=4)e+=M.charAt(R[r]>>>t&15);return e}function g(e){return u(),p(e,e.length),E(),f()}var S=g;function C(e){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},C(e)}var h=["pro_layout_parentKeys","children","icon","flatMenu","indexRoute","routes"];function O(e,r){return y(e)||m(e,r)||fe(e,r)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(e,r){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,d=!1,c,v;try{for(t=t.call(e);!(i=(c=t.next()).done)&&(n.push(c.value),!(r&&n.length===r));i=!0);}catch(A){d=!0,v=A}finally{try{!i&&t.return!=null&&t.return()}finally{if(d)throw v}}return n}}function y(e){if(Array.isArray(e))return e}function P(e,r){var t=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=fe(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(B){throw B},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d=!0,c=!1,v;return{s:function(){t=t.call(e)},n:function(){var B=t.next();return d=B.done,B},e:function(B){c=!0,v=B},f:function(){try{!d&&t.return!=null&&t.return()}finally{if(c)throw v}}}}function s(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function N(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,r,t){return r&&N(e.prototype,r),t&&N(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function H(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&U(e,r)}function $(e){var r=te();return function(){var n=ae(e),i;if(r){var d=ae(this).constructor;i=Reflect.construct(n,arguments,d)}else i=n.apply(this,arguments);return z(this,i)}}function z(e,r){if(r&&(C(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return X(e)}function X(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){var r=typeof Map=="function"?new Map:void 0;return F=function(n){if(n===null||!ne(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof r!="undefined"){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return W(n,arguments,ae(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),U(i,n)},F(e)}function W(e,r,t){return te()?W=Reflect.construct.bind():W=function(i,d,c){var v=[null];v.push.apply(v,d);var A=Function.bind.apply(i,v),B=new A;return c&&U(B,c.prototype),B},W.apply(null,arguments)}function te(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function ne(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function U(e,r){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},U(e,r)}function ae(e){return ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ae(e)}function oe(e){return be(e)||ve(e)||fe(e)||ge()}function ge(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fe(e,r){if(e){if(typeof e=="string")return ce(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ce(e,r)}}function ve(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function be(e){if(Array.isArray(e))return ce(e)}function ce(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function pe(e,r){if(e==null)return{};var t=we(e,r),n,i;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(i=0;i<d.length;i++)n=d[i],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function we(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,d;for(d=0;d<n.length;d++)i=n[d],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}function Pe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function K(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Pe(Object(t),!0).forEach(function(n){$e(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Pe(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function $e(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var ue="routes";function he(e){return e.split("?")[0].split("#")[0]}var Ee=function(r){if(!r.startsWith("http"))return!1;try{var t=new URL(r);return!!t}catch(n){return!1}},De=function(r){var t=r.path;if(!t||t==="/")try{return"/".concat(S(JSON.stringify(r)))}catch(n){}return t&&he(t)},je=function(r,t){var n=r.name,i=r.locale;return"locale"in r&&i===!1||!n?!1:r.locale||"".concat(t,".").concat(n)},Re=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"/";return r.endsWith("/*")?r.replace("/*","/"):(r||t).startsWith("/")||Ee(r)?r:"/".concat(t,"/").concat(r).replace(/\/\//g,"/").replace(/\/\//g,"/")},He=function(r,t){var n=r.menu,i=n===void 0?{}:n,d=r.indexRoute,c=r.path,v=c===void 0?"":c,A=r.children||[],B=i.name,J=B===void 0?r.name:B,V=i.icon,L=V===void 0?r.icon:V,ye=i.hideChildren,Me=ye===void 0?r.hideChildren:ye,Se=i.flatMenu,Ae=Se===void 0?r.flatMenu:Se,xe=d&&Object.keys(d).join(",")!=="redirect"?[K({path:v,menu:i},d)].concat(A||[]):A,se=K({},r);if(J&&(se.name=J),L&&(se.icon=L),xe&&xe.length){if(Me)return delete se.children,se;var Ce=Oe(K(K({},t),{},{data:xe}),r);if(Ae)return Ce;delete se[ue]}return se},le=function(r){return Array.isArray(r)&&r.length>0};function Oe(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{path:"/"},t=e.data,n=e.formatMessage,i=e.parentName,d=e.locale;return!t||!Array.isArray(t)?[]:t.filter(function(c){return c?le(c.children)||c.path||c.originPath||c.layout?!0:(c.redirect||c.unaccessible,!1):!1}).filter(function(c){var v,A;return!(c==null||(v=c.menu)===null||v===void 0)&&v.name||c!=null&&c.flatMenu||!(c==null||(A=c.menu)===null||A===void 0)&&A.flatMenu?!0:c.menu!==!1}).map(function(c){var v=K(K({},c),{},{path:c.path||c.originPath});return!v.children&&v[ue]&&(v.children=v[ue],delete v[ue]),v.unaccessible&&delete v.name,v.path==="*"&&(v.path="."),v.path==="/*"&&(v.path="."),!v.path&&v.originPath&&(v.path=v.originPath),v}).map(function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{path:"/"},v=c.children||[],A=Re(c.path,r?r.path:"/"),B=c.name,J=je(c,i||"menu"),V=J!==!1&&d!==!1&&n&&J?n({id:J,defaultMessage:B}):B,L=r.pro_layout_parentKeys,ye=L===void 0?[]:L,Me=r.children,Se=r.icon,Ae=r.flatMenu,xe=r.indexRoute,se=r.routes,Ce=pe(r,h),Ne=new Set([].concat(oe(ye),oe(c.parentKeys||[])));r.key&&Ne.add(r.key);var de=K(K(K({},Ce),{},{menu:void 0},c),{},{path:A,locale:J,key:c.key||De(K(K({},c),{},{path:A})),pro_layout_parentKeys:Array.from(Ne).filter(function(Ie){return Ie&&Ie!=="/"})});if(V?de.name=V:delete de.name,de.menu===void 0&&delete de.menu,le(v)){var Be=Oe(K(K({},e),{},{data:v,parentName:J||""}),de);le(Be)&&(de.children=Be)}return He(de,e)}).flat(1)}var _e=function e(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return r.filter(function(t){return t&&(t.name||le(t.children))&&!t.hideInMenu&&!t.redirect}).map(function(t){var n=K({},t),i=n.children||[];if(delete n[ue],le(i)&&!n.hideChildrenInMenu&&i.some(function(c){return c&&!!c.name})){var d=e(i);if(d.length)return K(K({},n),{},{children:d})}return K({},t)}).filter(function(t){return t})},Fe=function(e){H(t,e);var r=$(t);function t(){return s(this,t),r.apply(this,arguments)}return j(t,[{key:"get",value:function(i){var d;try{var c=P(this.entries()),v;try{for(c.s();!(v=c.n()).done;){var A=O(v.value,2),B=A[0],J=A[1],V=he(B);if(!Ee(B)&&(0,Z.Bo)(V,[]).test(i)){d=J;break}}}catch(L){c.e(L)}finally{c.f()}}catch(L){d=void 0}return d}}]),t}(F(Map)),Le=function(r){var t=new Fe,n=function i(d,c){d.forEach(function(v){var A=v.children||[];le(A)&&i(A,v);var B=Re(v.path,c?c.path:"/");t.set(he(B),v)})};return n(r),t},Ze=function e(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return r.map(function(t){var n=t.children;if(le(n)){var i=e(n);if(i.length)return K({},t)}var d=K({},t);return delete d[ue],delete d.children,d}).filter(function(t){return t})},ze=function(r,t,n,i){var d=Oe({data:r,formatMessage:n,locale:t}),c=i?Ze(d):_e(d),v=Le(d);return{breadcrumb:v,menuData:c}},Ke=ze;function Te(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function me(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Te(Object(t),!0).forEach(function(n){We(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Te(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function We(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Ue=function e(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t={};return r.forEach(function(n){var i=me({},n);if(!(!i||!i.key)){!i.children&&i[ue]&&(i.children=i[ue],delete i[ue]);var d=i.children||[];t[he(i.path||i.key||"/")]=me({},i),t[i.key||i.path||"/"]=me({},i),d&&(t=me(me({},t),e(d)))}}),t},Ve=Ue,Ge=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return r.filter(function(i){if(i==="/"&&t==="/")return!0;if(i!=="/"&&i!=="/*"&&i&&!Ee(i)){var d=he(i);try{if(n&&(0,Z.Bo)("".concat(d)).test(t)||(0,Z.Bo)("".concat(d),[]).test(t)||(0,Z.Bo)("".concat(d,"/(.*)")).test(t))return!0}catch(c){}}return!1}).sort(function(i,d){return i===t?10:d===t?-10:i.substr(1).split("/").length-d.substr(1).split("/").length})},Xe=function(r,t,n,i){var d=Ve(t),c=Object.keys(d),v=Ge(c,r||"/",i);return!v||v.length<1?[]:(n||(v=[v[v.length-1]]),v.map(function(A){var B=d[A]||{pro_layout_parentKeys:"",key:""},J=new Map,V=(B.pro_layout_parentKeys||[]).map(function(L){return J.has(L)?null:(J.set(L,!0),d[L])}).filter(function(L){return L});return B.key&&V.push(B),V}).flat(1))},Je=Xe},70916:function(ie,ee){var w;function Z(a){"@babel/helpers - typeof";return Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Z(a)}w={value:!0},ee.Bo=w=w=w=w=w=w=void 0;function T(a){for(var u=[],o=0;o<a.length;){var p=a[o];if(p==="*"||p==="+"||p==="?"){u.push({type:"MODIFIER",index:o,value:a[o++]});continue}if(p==="\\"){u.push({type:"ESCAPED_CHAR",index:o++,value:a[o++]});continue}if(p==="{"){u.push({type:"OPEN",index:o,value:a[o++]});continue}if(p==="}"){u.push({type:"CLOSE",index:o,value:a[o++]});continue}if(p===":"){for(var E="",x=o+1;x<a.length;){var f=a.charCodeAt(x);if(f>=48&&f<=57||f>=65&&f<=90||f>=97&&f<=122||f===95){E+=a[x++];continue}break}if(!E)throw new TypeError("Missing parameter name at "+o);u.push({type:"NAME",index:o,value:E}),o=x;continue}if(p==="("){var g=1,S="",x=o+1;if(a[x]==="?")throw new TypeError('Pattern cannot start with "?" at '+x);for(;x<a.length;){if(a[x]==="\\"){S+=a[x++]+a[x++];continue}if(a[x]===")"){if(g--,g===0){x++;break}}else if(a[x]==="("&&(g++,a[x+1]!=="?"))throw new TypeError("Capturing groups are not allowed at "+x);S+=a[x++]}if(g)throw new TypeError("Unbalanced pattern at "+o);if(!S)throw new TypeError("Missing pattern at "+o);u.push({type:"PATTERN",index:o,value:S}),o=x;continue}u.push({type:"CHAR",index:o,value:a[o++]})}return u.push({type:"END",index:o,value:""}),u}function I(a,u){u===void 0&&(u={});for(var o=T(a),p=u.prefixes,E=p===void 0?"./":p,x="[^"+q(u.delimiter||"/#?")+"]+?",f=[],g=0,S=0,C="",h=function(F){if(S<o.length&&o[S].type===F)return o[S++].value},O=function(F){var W=h(F);if(W!==void 0)return W;var te=o[S],ne=te.type,U=te.index;throw new TypeError("Unexpected "+ne+" at "+U+", expected "+F)},b=function(){for(var F="",W;W=h("CHAR")||h("ESCAPED_CHAR");)F+=W;return F};S<o.length;){var m=h("CHAR"),y=h("NAME"),P=h("PATTERN");if(y||P){var s=m||"";E.indexOf(s)===-1&&(C+=s,s=""),C&&(f.push(C),C=""),f.push({name:y||g++,prefix:s,suffix:"",pattern:P||x,modifier:h("MODIFIER")||""});continue}var N=m||h("ESCAPED_CHAR");if(N){C+=N;continue}C&&(f.push(C),C="");var j=h("OPEN");if(j){var s=b(),H=h("NAME")||"",$=h("PATTERN")||"",z=b();O("CLOSE"),f.push({name:H||($?g++:""),pattern:H&&!$?x:$,prefix:s,suffix:z,modifier:h("MODIFIER")||""});continue}O("END")}return f}w=I;function Q(a,u){return _(I(a,u),u)}w=Q;function _(a,u){u===void 0&&(u={});var o=G(u),p=u.encode,E=p===void 0?function(S){return S}:p,x=u.validate,f=x===void 0?!0:x,g=a.map(function(S){if(Z(S)==="object")return new RegExp("^(?:"+S.pattern+")$",o)});return function(S){for(var C="",h=0;h<a.length;h++){var O=a[h];if(typeof O=="string"){C+=O;continue}var b=S?S[O.name]:void 0,m=O.modifier==="?"||O.modifier==="*",y=O.modifier==="*"||O.modifier==="+";if(Array.isArray(b)){if(!y)throw new TypeError('Expected "'+O.name+'" to not repeat, but got an array');if(b.length===0){if(m)continue;throw new TypeError('Expected "'+O.name+'" to not be empty')}for(var P=0;P<b.length;P++){var s=E(b[P],O);if(f&&!g[h].test(s))throw new TypeError('Expected all "'+O.name+'" to match "'+O.pattern+'", but got "'+s+'"');C+=O.prefix+s+O.suffix}continue}if(typeof b=="string"||typeof b=="number"){var s=E(String(b),O);if(f&&!g[h].test(s))throw new TypeError('Expected "'+O.name+'" to match "'+O.pattern+'", but got "'+s+'"');C+=O.prefix+s+O.suffix;continue}if(!m){var N=y?"an array":"a string";throw new TypeError('Expected "'+O.name+'" to be '+N)}}return C}}w=_;function re(a,u){var o=[],p=M(a,o,u);return Y(p,o,u)}w=re;function Y(a,u,o){o===void 0&&(o={});var p=o.decode,E=p===void 0?function(x){return x}:p;return function(x){var f=a.exec(x);if(!f)return!1;for(var g=f[0],S=f.index,C=Object.create(null),h=function(m){if(f[m]===void 0)return"continue";var y=u[m-1];y.modifier==="*"||y.modifier==="+"?C[y.name]=f[m].split(y.prefix+y.suffix).map(function(P){return E(P,y)}):C[y.name]=E(f[m],y)},O=1;O<f.length;O++)h(O);return{path:g,index:S,params:C}}}w=Y;function q(a){return a.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function G(a){return a&&a.sensitive?"":"i"}function k(a,u){if(!u)return a;var o=a.source.match(/\((?!\?)/g);if(o)for(var p=0;p<o.length;p++)u.push({name:p,prefix:"",suffix:"",modifier:"",pattern:""});return a}function R(a,u,o){var p=a.map(function(E){return M(E,u,o).source});return new RegExp("(?:"+p.join("|")+")",G(o))}function D(a,u,o){return l(I(a,o),u,o)}function l(a,u,o){o===void 0&&(o={});for(var p=o.strict,E=p===void 0?!1:p,x=o.start,f=x===void 0?!0:x,g=o.end,S=g===void 0?!0:g,C=o.encode,h=C===void 0?function(X){return X}:C,O="["+q(o.endsWith||"")+"]|$",b="["+q(o.delimiter||"/#?")+"]",m=f?"^":"",y=0,P=a;y<P.length;y++){var s=P[y];if(typeof s=="string")m+=q(h(s));else{var N=q(h(s.prefix)),j=q(h(s.suffix));if(s.pattern)if(u&&u.push(s),N||j)if(s.modifier==="+"||s.modifier==="*"){var H=s.modifier==="*"?"?":"";m+="(?:"+N+"((?:"+s.pattern+")(?:"+j+N+"(?:"+s.pattern+"))*)"+j+")"+H}else m+="(?:"+N+"("+s.pattern+")"+j+")"+s.modifier;else m+="("+s.pattern+")"+s.modifier;else m+="(?:"+N+j+")"+s.modifier}}if(S)E||(m+=b+"?"),m+=o.endsWith?"(?="+O+")":"$";else{var $=a[a.length-1],z=typeof $=="string"?b.indexOf($[$.length-1])>-1:$===void 0;E||(m+="(?:"+b+"(?="+O+"))?"),z||(m+="(?="+b+"|"+O+")")}return new RegExp(m,G(o))}w=l;function M(a,u,o){return a instanceof RegExp?k(a,u):Array.isArray(a)?R(a,u,o):D(a,u,o)}ee.Bo=M},49824:function(ie,ee,w){"use strict";w.d(ee,{Z:function(){return O}});var Z=w(36014),T=w(50959),I=w(84875),Q=w.n(I),_=w(87017),re=w(30651),Y=w(23574),q=w(13763),G=w(93334);function k(b,m,y){return typeof y=="boolean"?y:b.length?!0:(0,q.Z)(m).some(s=>s.type===G.Z)}var R=w(57564),l=b=>{const{componentCls:m,bodyBg:y,lightSiderBg:P,lightTriggerBg:s,lightTriggerColor:N}=b;return{[`${m}-sider-light`]:{background:P,[`${m}-sider-trigger`]:{color:N,background:s},[`${m}-sider-zero-width-trigger`]:{color:N,background:s,border:`1px solid ${y}`,borderInlineStart:0}}}};const M=b=>{const{antCls:m,componentCls:y,colorText:P,triggerColor:s,footerBg:N,triggerBg:j,headerHeight:H,headerPadding:$,headerColor:z,footerPadding:X,triggerHeight:F,zeroTriggerHeight:W,zeroTriggerWidth:te,motionDurationMid:ne,motionDurationSlow:U,fontSize:ae,borderRadius:oe,bodyBg:ge,headerBg:fe,siderBg:ve}=b;return{[y]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:ge,"&, *":{boxSizing:"border-box"},[`&${y}-has-sider`]:{flexDirection:"row",[`> ${y}, > ${y}-content`]:{width:0}},[`${y}-header, &${y}-footer`]:{flex:"0 0 auto"},[`${y}-sider`]:{position:"relative",minWidth:0,background:ve,transition:`all ${ne}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${m}-menu${m}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:F},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:F,color:s,lineHeight:`${F}px`,textAlign:"center",background:j,cursor:"pointer",transition:`all ${ne}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:H,insetInlineEnd:-te,zIndex:1,width:te,height:W,color:s,fontSize:b.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:ve,borderStartStartRadius:0,borderStartEndRadius:oe,borderEndEndRadius:oe,borderEndStartRadius:0,cursor:"pointer",transition:`background ${U} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${U}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-te,borderStartStartRadius:oe,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:oe}}}}},l(b)),{"&-rtl":{direction:"rtl"}}),[`${y}-header`]:{height:H,padding:$,color:z,lineHeight:`${H}px`,background:fe,[`${m}-menu`]:{lineHeight:"inherit"}},[`${y}-footer`]:{padding:X,color:P,fontSize:ae,background:N},[`${y}-content`]:{flex:"auto",minHeight:0}}};var a=(0,R.Z)("Layout",b=>[M(b)],b=>{const{colorBgLayout:m,controlHeight:y,controlHeightLG:P,colorText:s,controlHeightSM:N,marginXXS:j,colorTextLightSolid:H,colorBgContainer:$}=b,z=P*1.25;return{colorBgHeader:"#001529",colorBgBody:m,colorBgTrigger:"#002140",bodyBg:m,headerBg:"#001529",headerHeight:y*2,headerPadding:`0 ${z}px`,headerColor:s,footerPadding:`${N}px ${z}px`,footerBg:m,siderBg:"#001529",triggerHeight:P+j*2,triggerBg:"#002140",triggerColor:H,zeroTriggerWidth:P,zeroTriggerHeight:P,lightSiderBg:$,lightTriggerBg:$,lightTriggerColor:s}},{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),u=function(b,m){var y={};for(var P in b)Object.prototype.hasOwnProperty.call(b,P)&&m.indexOf(P)<0&&(y[P]=b[P]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,P=Object.getOwnPropertySymbols(b);s<P.length;s++)m.indexOf(P[s])<0&&Object.prototype.propertyIsEnumerable.call(b,P[s])&&(y[P[s]]=b[P[s]]);return y};function o(b){let{suffixCls:m,tagName:y,displayName:P}=b;return s=>T.forwardRef((j,H)=>T.createElement(s,Object.assign({ref:H,suffixCls:m,tagName:y},j)))}const p=T.forwardRef((b,m)=>{const{prefixCls:y,suffixCls:P,className:s,tagName:N}=b,j=u(b,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:H}=T.useContext(re.E_),$=H("layout",y),[z,X]=a($),F=P?`${$}-${P}`:$;return z(T.createElement(N,Object.assign({className:Q()(y||F,s,X),ref:m},j)))}),E=T.forwardRef((b,m)=>{const{direction:y}=T.useContext(re.E_),[P,s]=T.useState([]),{prefixCls:N,className:j,rootClassName:H,children:$,hasSider:z,tagName:X,style:F}=b,W=u(b,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),te=(0,_.Z)(W,["suffixCls"]),{getPrefixCls:ne,layout:U}=T.useContext(re.E_),ae=ne("layout",N),oe=k(P,$,z),[ge,fe]=a(ae),ve=Q()(ae,{[`${ae}-has-sider`]:oe,[`${ae}-rtl`]:y==="rtl"},U==null?void 0:U.className,j,H,fe),be=T.useMemo(()=>({siderHook:{addSider:ce=>{s(pe=>[].concat((0,Z.Z)(pe),[ce]))},removeSider:ce=>{s(pe=>pe.filter(we=>we!==ce))}}}),[]);return ge(T.createElement(Y.V.Provider,{value:be},T.createElement(X,Object.assign({ref:m,className:ve,style:Object.assign(Object.assign({},U==null?void 0:U.style),F)},te),$)))}),x=o({tagName:"div",displayName:"Layout"})(E),f=o({suffixCls:"header",tagName:"header",displayName:"Header"})(p),g=o({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(p),S=o({suffixCls:"content",tagName:"main",displayName:"Content"})(p);var C=x;const h=C;h.Header=f,h.Footer=g,h.Content=S,h.Sider=G.Z,h._InternalSiderContext=G.D;var O=h},58809:function(ie){ie.exports=D,ie.exports.parse=T,ie.exports.compile=I,ie.exports.tokensToFunction=Q,ie.exports.tokensToRegExp=R;var ee="/",w="./",Z=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function T(l,M){for(var a=[],u=0,o=0,p="",E=M&&M.delimiter||ee,x=M&&M.delimiters||w,f=!1,g;(g=Z.exec(l))!==null;){var S=g[0],C=g[1],h=g.index;if(p+=l.slice(o,h),o=h+S.length,C){p+=C[1],f=!0;continue}var O="",b=l[o],m=g[2],y=g[3],P=g[4],s=g[5];if(!f&&p.length){var N=p.length-1;x.indexOf(p[N])>-1&&(O=p[N],p=p.slice(0,N))}p&&(a.push(p),p="",f=!1);var j=O!==""&&b!==void 0&&b!==O,H=s==="+"||s==="*",$=s==="?"||s==="*",z=O||E,X=y||P;a.push({name:m||u++,prefix:O,delimiter:z,optional:$,repeat:H,partial:j,pattern:X?re(X):"[^"+_(z)+"]+?"})}return(p||o<l.length)&&a.push(p+l.substr(o)),a}function I(l,M){return Q(T(l,M))}function Q(l){for(var M=new Array(l.length),a=0;a<l.length;a++)typeof l[a]=="object"&&(M[a]=new RegExp("^(?:"+l[a].pattern+")$"));return function(u,o){for(var p="",E=o&&o.encode||encodeURIComponent,x=0;x<l.length;x++){var f=l[x];if(typeof f=="string"){p+=f;continue}var g=u?u[f.name]:void 0,S;if(Array.isArray(g)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but got array');if(g.length===0){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var C=0;C<g.length;C++){if(S=E(g[C],f),!M[x].test(S))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'"');p+=(C===0?f.prefix:f.delimiter)+S}continue}if(typeof g=="string"||typeof g=="number"||typeof g=="boolean"){if(S=E(String(g),f),!M[x].test(S))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but got "'+S+'"');p+=f.prefix+S;continue}if(f.optional){f.partial&&(p+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be '+(f.repeat?"an array":"a string"))}return p}}function _(l){return l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function re(l){return l.replace(/([=!:$/()])/g,"\\$1")}function Y(l){return l&&l.sensitive?"":"i"}function q(l,M){if(!M)return l;var a=l.source.match(/\((?!\?)/g);if(a)for(var u=0;u<a.length;u++)M.push({name:u,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return l}function G(l,M,a){for(var u=[],o=0;o<l.length;o++)u.push(D(l[o],M,a).source);return new RegExp("(?:"+u.join("|")+")",Y(a))}function k(l,M,a){return R(T(l,a),M,a)}function R(l,M,a){a=a||{};for(var u=a.strict,o=a.start!==!1,p=a.end!==!1,E=_(a.delimiter||ee),x=a.delimiters||w,f=[].concat(a.endsWith||[]).map(_).concat("$").join("|"),g=o?"^":"",S=l.length===0,C=0;C<l.length;C++){var h=l[C];if(typeof h=="string")g+=_(h),S=C===l.length-1&&x.indexOf(h[h.length-1])>-1;else{var O=h.repeat?"(?:"+h.pattern+")(?:"+_(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;M&&M.push(h),h.optional?h.partial?g+=_(h.prefix)+"("+O+")?":g+="(?:"+_(h.prefix)+"("+O+"))?":g+=_(h.prefix)+"("+O+")"}}return p?(u||(g+="(?:"+E+")?"),g+=f==="$"?"$":"(?="+f+")"):(u||(g+="(?:"+E+"(?="+f+"))?"),S||(g+="(?="+E+"|"+f+")")),new RegExp(g,Y(a))}function D(l,M,a){return l instanceof RegExp?q(l,M):Array.isArray(l)?G(l,M,a):k(l,M,a)}}}]);