"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[68],{6326:(t,e,n)=>{n.d(e,{i:()=>_,m:()=>y});const s="http://www.w3.org/2000/svg";class o{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function i(t,e,n,s,o){return{type:"path",ops:f(t,e,n,s,o)}}function r(t,e,n){const s=(t||[]).length;if(s>2){const o=[];for(let e=0;e<s-1;e++)o.push(...f(t[e][0],t[e][1],t[e+1][0],t[e+1][1],n));return e&&o.push(...f(t[s-1][0],t[s-1][1],t[0][0],t[0][1],n)),{type:"path",ops:o}}return 2===s?i(t[0][0],t[0][1],t[1][0],t[1][1],n):{type:"path",ops:[]}}function h(t,e,n,s,o){return function(t,e){return r(t,!0,e)}([[t,e],[t+n,e],[t+n,e+s],[t,e+s]],o)}function a(t,e,n,s,o){return function(t,e,n,s){const[o,i]=d(s.increment,t,e,s.rx,s.ry,1,s.increment*u(.1,u(.4,1,n),n),n);let r=g(o,null,n);if(!n.disableMultiStroke){const[o]=d(s.increment,t,e,s.rx,s.ry,1.5,0,n),i=g(o,null,n);r=r.concat(i)}return{estimatedPoints:i,opset:{type:"path",ops:r}}}(t,e,o,function(t,e,n){const s=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(e/2,2))/2)),o=Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*s),i=2*Math.PI/o;let r=Math.abs(t/2),h=Math.abs(e/2);const a=1-n.curveFitting;return r+=l(r*a,n),h+=l(h*a,n),{increment:i,rx:r,ry:h}}(n,s,o)).opset}function c(t){return t.randomizer||(t.randomizer=new o(t.seed||0)),t.randomizer.next()}function u(t,e,n){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return n.roughness*s*(c(n)*(e-t)+t)}function l(t,e){return u(-t,t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:1)}function f(t,e,n,s,o){const i=arguments.length>5&&void 0!==arguments[5]&&arguments[5]?o.disableMultiStrokeFill:o.disableMultiStroke,r=p(t,e,n,s,o,!0,!1);if(i)return r;const h=p(t,e,n,s,o,!0,!0);return r.concat(h)}function p(t,e,n,s,o,i,r){const h=Math.pow(t-n,2)+Math.pow(e-s,2),a=Math.sqrt(h);let u=1;u=a<200?1:a>500?.4:-.0016668*a+1.233334;let f=o.maxRandomnessOffset||0;f*f*100>h&&(f=a/10);const p=f/2,g=.2+.2*c(o);let d=o.bowing*o.maxRandomnessOffset*(s-e)/200,m=o.bowing*o.maxRandomnessOffset*(t-n)/200;d=l(d,o,u),m=l(m,o,u);const v=[],w=()=>l(p,o,u),_=()=>l(f,o,u);return i&&(r?v.push({op:"move",data:[t+w(),e+w()]}):v.push({op:"move",data:[t+l(f,o,u),e+l(f,o,u)]})),r?v.push({op:"bcurveTo",data:[d+t+(n-t)*g+w(),m+e+(s-e)*g+w(),d+t+2*(n-t)*g+w(),m+e+2*(s-e)*g+w(),n+w(),s+w()]}):v.push({op:"bcurveTo",data:[d+t+(n-t)*g+_(),m+e+(s-e)*g+_(),d+t+2*(n-t)*g+_(),m+e+2*(s-e)*g+_(),n+_(),s+_()]}),v}function g(t,e,n){const s=t.length,o=[];if(s>3){const i=[],r=1-n.curveTightness;o.push({op:"move",data:[t[1][0],t[1][1]]});for(let e=1;e+2<s;e++){const n=t[e];i[0]=[n[0],n[1]],i[1]=[n[0]+(r*t[e+1][0]-r*t[e-1][0])/6,n[1]+(r*t[e+1][1]-r*t[e-1][1])/6],i[2]=[t[e+1][0]+(r*t[e][0]-r*t[e+2][0])/6,t[e+1][1]+(r*t[e][1]-r*t[e+2][1])/6],i[3]=[t[e+1][0],t[e+1][1]],o.push({op:"bcurveTo",data:[i[1][0],i[1][1],i[2][0],i[2][1],i[3][0],i[3][1]]})}if(e&&2===e.length){const t=n.maxRandomnessOffset;o.push({op:"lineTo",data:[e[0]+l(t,n),e[1]+l(t,n)]})}}else 3===s?(o.push({op:"move",data:[t[1][0],t[1][1]]}),o.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===s&&o.push(...f(t[0][0],t[0][1],t[1][0],t[1][1],n));return o}function d(t,e,n,s,o,i,r,h){const a=[],c=[],u=l(.5,h)-Math.PI/2;c.push([l(i,h)+e+.9*s*Math.cos(u-t),l(i,h)+n+.9*o*Math.sin(u-t)]);for(let f=u;f<2*Math.PI+u-.01;f+=t){const t=[l(i,h)+e+s*Math.cos(f),l(i,h)+n+o*Math.sin(f)];a.push(t),c.push(t)}return c.push([l(i,h)+e+s*Math.cos(u+2*Math.PI+.5*r),l(i,h)+n+o*Math.sin(u+2*Math.PI+.5*r)]),c.push([l(i,h)+e+.98*s*Math.cos(u+r),l(i,h)+n+.98*o*Math.sin(u+r)]),c.push([l(i,h)+e+.9*s*Math.cos(u+.5*r),l(i,h)+n+.9*o*Math.sin(u+.5*r)]),[c,a]}function m(t,e){return{maxRandomnessOffset:2,roughness:"highlight"===t?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,combineNestedSvgPaths:!1,disableMultiStroke:"double"!==t,disableMultiStrokeFill:!1,seed:e}}function v(t,e,n,o,c,u){const l=[];let f=n.strokeWidth||2;const p=function(t){const e=t.padding;if(e||0===e){if("number"==typeof e)return[e,e,e,e];if(Array.isArray(e)){const t=e;if(t.length)switch(t.length){case 4:return[...t];case 1:return[t[0],t[0],t[0],t[0]];case 2:return[...t,...t];case 3:return[...t,t[1]];default:return[t[0],t[1],t[2],t[3]]}}}return[5,5,5,5]}(n),g=void 0===n.animate||!!n.animate,d=n.iterations||2,v=n.rtl?1:0,w=m("single",u);switch(n.type){case"underline":{const t=e.y+e.h+p[2];for(let n=v;n<d+v;n++)n%2?l.push(i(e.x+e.w,t,e.x,t,w)):l.push(i(e.x,t,e.x+e.w,t,w));break}case"strike-through":{const t=e.y+e.h/2;for(let n=v;n<d+v;n++)n%2?l.push(i(e.x+e.w,t,e.x,t,w)):l.push(i(e.x,t,e.x+e.w,t,w));break}case"box":{const t=e.x-p[3],n=e.y-p[0],s=e.w+(p[1]+p[3]),o=e.h+(p[0]+p[2]);for(let e=0;e<d;e++)l.push(h(t,n,s,o,w));break}case"bracket":{const t=Array.isArray(n.brackets)?n.brackets:n.brackets?[n.brackets]:["right"],s=e.x-2*p[3],o=e.x+e.w+2*p[1],i=e.y-2*p[0],h=e.y+e.h+2*p[2];for(const n of t){let t;switch(n){case"bottom":t=[[s,e.y+e.h],[s,h],[o,h],[o,e.y+e.h]];break;case"top":t=[[s,e.y],[s,i],[o,i],[o,e.y]];break;case"left":t=[[e.x,i],[s,i],[s,h],[e.x,h]];break;case"right":t=[[e.x+e.w,i],[o,i],[o,h],[e.x+e.w,h]]}t&&l.push(r(t,!1,w))}break}case"crossed-off":{const t=e.x,n=e.y,s=t+e.w,o=n+e.h;for(let e=v;e<d+v;e++)e%2?l.push(i(s,o,t,n,w)):l.push(i(t,n,s,o,w));for(let e=v;e<d+v;e++)e%2?l.push(i(t,o,s,n,w)):l.push(i(s,n,t,o,w));break}case"circle":{const t=m("double",u),n=e.w+(p[1]+p[3]),s=e.h+(p[0]+p[2]),o=e.x-p[3]+n/2,i=e.y-p[0]+s/2,r=Math.floor(d/2),h=d-2*r;for(let e=0;e<r;e++)l.push(a(o,i,n,s,t));for(let e=0;e<h;e++)l.push(a(o,i,n,s,w));break}case"highlight":{const t=m("highlight",u);f=.95*e.h;const n=e.y+e.h/2;for(let s=v;s<d+v;s++)s%2?l.push(i(e.x+e.w,n,e.x,n,t)):l.push(i(e.x,n,e.x+e.w,n,t));break}}if(l.length){const e=function(t){const e=[];for(const n of t){let t="";for(const s of n.ops){const n=s.data;switch(s.op){case"move":t.trim()&&e.push(t.trim()),t="M".concat(n[0]," ").concat(n[1]," ");break;case"bcurveTo":t+="C".concat(n[0]," ").concat(n[1],", ").concat(n[2]," ").concat(n[3],", ").concat(n[4]," ").concat(n[5]," ");break;case"lineTo":t+="L".concat(n[0]," ").concat(n[1]," ")}}t.trim()&&e.push(t.trim())}return e}(l),i=[],r=[];let h=0;const a=(t,e,n)=>t.setAttribute(e,n);for(const o of e){const e=document.createElementNS(s,"path");if(a(e,"d",o),a(e,"fill","none"),a(e,"stroke",n.color||"currentColor"),a(e,"stroke-width",""+f),g){const t=e.getTotalLength();i.push(t),h+=t}t.appendChild(e),r.push(e)}if(g){let t=0;for(let e=0;e<r.length;e++){const n=r[e],s=i[e],a=h?c*(s/h):0,u=o+t,l=n.style;l.strokeDashoffset=""+s,l.strokeDasharray=""+s,l.animation="rough-notation-dash ".concat(a,"ms ease-out ").concat(u,"ms forwards"),t+=a}}}}class w{constructor(t,e){this._state="unattached",this._resizing=!1,this._seed=Math.floor(Math.random()*2**31),this._lastSizes=[],this._animationDelay=0,this._resizeListener=()=>{this._resizing||(this._resizing=!0,setTimeout((()=>{this._resizing=!1,"showing"===this._state&&this.haveRectsChanged()&&this.show()}),400))},this._e=t,this._config=JSON.parse(JSON.stringify(e)),this.attach()}get animate(){return this._config.animate}set animate(t){this._config.animate=t}get animationDuration(){return this._config.animationDuration}set animationDuration(t){this._config.animationDuration=t}get iterations(){return this._config.iterations}set iterations(t){this._config.iterations=t}get color(){return this._config.color}set color(t){this._config.color!==t&&(this._config.color=t,this.refresh())}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(t){this._config.strokeWidth!==t&&(this._config.strokeWidth=t,this.refresh())}get padding(){return this._config.padding}set padding(t){this._config.padding!==t&&(this._config.padding=t,this.refresh())}attach(){if("unattached"===this._state&&this._e.parentElement){!function(){if(!window.__rno_kf_s){const t=window.__rno_kf_s=document.createElement("style");t.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(t)}}();const t=this._svg=document.createElementNS(s,"svg");t.setAttribute("class","rough-annotation");const e=t.style;e.position="absolute",e.top="0",e.left="0",e.overflow="visible",e.pointerEvents="none",e.width="100px",e.height="100px";const n="highlight"===this._config.type;if(this._e.insertAdjacentElement(n?"beforebegin":"afterend",t),this._state="not-showing",n){const t=window.getComputedStyle(this._e).position;(!t||"static"===t)&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver((t=>{for(const e of t)e.contentRect&&this._resizeListener()}))),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){const t=this.rects();if(t.length!==this._lastSizes.length)return!0;for(let e=0;e<t.length;e++)if(!this.isSameRect(t[e],this._lastSizes[e]))return!0}return!1}isSameRect(t,e){const n=(t,e)=>Math.round(t)===Math.round(e);return n(t.x,e.x)&&n(t.y,e.y)&&n(t.w,e.w)&&n(t.h,e.h)}isShowing(){return"not-showing"!==this._state}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then((()=>{this.isShowing()&&this.show(),delete this.pendingRefresh})))}show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&this.render(this._svg,!1)}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}render(t,e){let n=this._config;e&&(n=JSON.parse(JSON.stringify(this._config)),n.animate=!1);const s=this.rects();let o=0;s.forEach((t=>o+=t.w));const i=n.animationDuration||800;let r=0;for(let h=0;h<s.length;h++){const e=i*(s[h].w/o);v(t,s[h],n,r+this._animationDelay,e,this._seed),r+=e}this._lastSizes=s,this._state="showing"}rects(){const t=[];if(this._svg)if(this._config.multiline){const e=this._e.getClientRects();for(let n=0;n<e.length;n++)t.push(this.svgRect(this._svg,e[n]))}else t.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return t}svgRect(t,e){const n=t.getBoundingClientRect(),s=e;return{x:(s.x||s.left)-(n.x||n.left),y:(s.y||s.top)-(n.y||n.top),w:s.width,h:s.height}}}function _(t,e){return new w(t,e)}function y(t){let e=0;for(const s of t){const t=s;t._animationDelay=e,e+=0===t.animationDuration?0:t.animationDuration||800}const n=[...t];return{show(){for(const t of n)t.show()},hide(){for(const t of n)t.hide()}}}},2293:(t,e,n)=>{function s(){}function o(t,e,n,s,o){for(var i=0,r=e.length,h=0,a=0;i<r;i++){var c=e[i];if(c.removed){if(c.value=t.join(s.slice(a,a+c.count)),a+=c.count,i&&e[i-1].added){var u=e[i-1];e[i-1]=e[i],e[i]=u}}else{if(!c.added&&o){var l=n.slice(h,h+c.count);l=l.map((function(t,e){var n=s[a+e];return n.length>t.length?n:t})),c.value=t.join(l)}else c.value=t.join(n.slice(h,h+c.count));h+=c.count,c.added||(a+=c.count)}}var f=e[r-1];return r>1&&"string"===typeof f.value&&(f.added||f.removed)&&t.equals("",f.value)&&(e[r-2].value+=f.value,e.pop()),e}n.d(e,{NV:()=>c}),s.prototype={diff:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=n.callback;"function"===typeof n&&(s=n,n={}),this.options=n;var i=this;function r(t){return s?(setTimeout((function(){s(void 0,t)}),0),!0):t}t=this.castInput(t),e=this.castInput(e),t=this.removeEmpty(this.tokenize(t));var h=(e=this.removeEmpty(this.tokenize(e))).length,a=t.length,c=1,u=h+a;n.maxEditLength&&(u=Math.min(u,n.maxEditLength));var l=[{newPos:-1,components:[]}],f=this.extractCommon(l[0],e,t,0);if(l[0].newPos+1>=h&&f+1>=a)return r([{value:this.join(e),count:e.length}]);function p(){for(var n=-1*c;n<=c;n+=2){var s=void 0,u=l[n-1],f=l[n+1],p=(f?f.newPos:0)-n;u&&(l[n-1]=void 0);var g=u&&u.newPos+1<h,d=f&&0<=p&&p<a;if(g||d){if(!g||d&&u.newPos<f.newPos?(s={newPos:(m=f).newPos,components:m.components.slice(0)},i.pushComponent(s.components,void 0,!0)):((s=u).newPos++,i.pushComponent(s.components,!0,void 0)),p=i.extractCommon(s,e,t,n),s.newPos+1>=h&&p+1>=a)return r(o(i,s.components,e,t,i.useLongestToken));l[n]=s}else l[n]=void 0}var m;c++}if(s)!function t(){setTimeout((function(){if(c>u)return s();p()||t()}),0)}();else for(;c<=u;){var g=p();if(g)return g}},pushComponent:function(t,e,n){var s=t[t.length-1];s&&s.added===e&&s.removed===n?t[t.length-1]={count:s.count+1,added:e,removed:n}:t.push({count:1,added:e,removed:n})},extractCommon:function(t,e,n,s){for(var o=e.length,i=n.length,r=t.newPos,h=r-s,a=0;r+1<o&&h+1<i&&this.equals(e[r+1],n[h+1]);)r++,h++,a++;return a&&t.components.push({count:a}),t.newPos=r,h},equals:function(t,e){return this.options.comparator?this.options.comparator(t,e):t===e||this.options.ignoreCase&&t.toLowerCase()===e.toLowerCase()},removeEmpty:function(t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(t[n]);return e},castInput:function(t){return t},tokenize:function(t){return t.split("")},join:function(t){return t.join("")}};new s;function i(t,e){if("function"===typeof t)e.callback=t;else if(t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var r=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,h=/\S/,a=new s;function c(t,e,n){return n=i(n,{ignoreWhitespace:!0}),a.diff(t,e,n)}a.equals=function(t,e){return this.options.ignoreCase&&(t=t.toLowerCase(),e=e.toLowerCase()),t===e||this.options.ignoreWhitespace&&!h.test(t)&&!h.test(e)},a.tokenize=function(t){for(var e=t.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/),n=0;n<e.length-1;n++)!e[n+1]&&e[n+2]&&r.test(e[n])&&r.test(e[n+2])&&(e[n]+=e[n+2],e.splice(n+1,2),n--);return e};var u=new s;u.tokenize=function(t){var e=[],n=t.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(var s=0;s<n.length;s++){var o=n[s];s%2&&!this.options.newlineIsToken?e[e.length-1]+=o:(this.options.ignoreWhitespace&&(o=o.trim()),e.push(o))}return e};var l=new s;l.tokenize=function(t){return t.split(/(\S.+?[.!?])(?=\s+|$)/)};var f=new s;function p(t){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}f.tokenize=function(t){return t.split(/([{}:;,]|\s+)/)};var g=Object.prototype.toString,d=new s;function m(t,e,n,s,o){var i,r;for(e=e||[],n=n||[],s&&(t=s(o,t)),i=0;i<e.length;i+=1)if(e[i]===t)return n[i];if("[object Array]"===g.call(t)){for(e.push(t),r=new Array(t.length),n.push(r),i=0;i<t.length;i+=1)r[i]=m(t[i],e,n,s,o);return e.pop(),n.pop(),r}if(t&&t.toJSON&&(t=t.toJSON()),"object"===p(t)&&null!==t){e.push(t),r={},n.push(r);var h,a=[];for(h in t)t.hasOwnProperty(h)&&a.push(h);for(a.sort(),i=0;i<a.length;i+=1)r[h=a[i]]=m(t[h],e,n,s,h);e.pop(),n.pop()}else r=t;return r}d.useLongestToken=!0,d.tokenize=u.tokenize,d.castInput=function(t){var e=this.options,n=e.undefinedReplacement,s=e.stringifyReplacer,o=void 0===s?function(t,e){return"undefined"===typeof e?n:e}:s;return"string"===typeof t?t:JSON.stringify(m(t,null,null,o),o,"  ")},d.equals=function(t,e){return s.prototype.equals.call(d,t.replace(/,([\r\n])/g,"$1"),e.replace(/,([\r\n])/g,"$1"))};var v=new s;v.tokenize=function(t){return t.slice()},v.join=v.removeEmpty=function(t){return t}}}]);
//# sourceMappingURL=68.4ff33657.chunk.js.map