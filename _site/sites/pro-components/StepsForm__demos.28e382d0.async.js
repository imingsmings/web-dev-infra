"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[134],{43855:function(g,C,e){e.r(C);var B=e(63180),o=e(1148),F=e(51729),i=e(64471),E=e(5726),l=e.n(E),P=e(50959),m=e(11527),M={jobInfo:{name:"normal job",type:1},syncTableInfo:{timeRange:[l()().subtract(1,"m"),l()()],title:"example table title"}},h=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(_){setTimeout(function(){_(M)},O)})},D=[{value:1,label:"\u56FD\u4F01"},{value:2,label:"\u79C1\u4F01"}],v=function(){var O=(0,P.useRef)([]);return(0,P.useEffect)(function(){h(1e3).then(function(){var _;O==null||(_=O.current)===null||_===void 0||_.forEach(function(n){var a;n==null||(a=n.current)===null||a===void 0||a.setFieldsValue(M)})})},[]),(0,m.jsxs)(B.L0,{formMapRef:O,onFinish:function(n){return console.log(n),Promise.resolve(!0)},children:[(0,m.jsxs)(B.L0.StepForm,{name:"step1",title:"\u5DE5\u4F5C\u4FE1\u606F",children:[(0,m.jsx)(o.Z,{label:"\u59D3\u540D",name:["jobInfo","name"]}),(0,m.jsx)(F.Z,{label:"\u5DE5\u4F5C\u7C7B\u578B",name:["jobInfo","type"],options:D})]}),(0,m.jsxs)(B.L0.StepForm,{name:"step2",title:"\u540C\u6B65\u8868\u5355\u4FE1\u606F",children:[(0,m.jsx)(i.Z,{label:"\u65F6\u95F4\u533A\u95F4",name:["syncTableInfo","timeRange"]}),(0,m.jsx)(o.Z,{label:"\u6807\u9898",name:["syncTableInfo","title"]})]})]})};C.default=v},5041:function(g,C,e){e.r(C);var B=e(13448),o=e.n(B),F=e(74815),i=e.n(F),E=e(22795),l=e(63180),P=e(1148),m=e(1643),M=e(64471),h=e(77319),D=e(57448),v=e(58787),c=e(51729),O=e(10622),_=e(51190),n=e(11527),a=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(u){setTimeout(function(){u(!0)},r)})};C.default=function(){return(0,n.jsx)(E.Z,{children:(0,n.jsxs)(l.L0,{onFinish:function(){var s=i()(o()().mark(function r(u){return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log(u),d.next=3,a(1e3);case 3:O.ZP.success("\u63D0\u4EA4\u6210\u529F");case 4:case"end":return d.stop()}},r)}));return function(r){return s.apply(this,arguments)}}(),formProps:{validateMessages:{required:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}},submitter:{render:function(r){return r.step===0?(0,n.jsxs)(_.ZP,{type:"primary",onClick:function(){var t;return(t=r.onSubmit)===null||t===void 0?void 0:t.call(r)},children:["\u53BB\u7B2C\u4E8C\u6B65 ",">"]}):r.step===1?[(0,n.jsx)(_.ZP,{onClick:function(){var t;return(t=r.onPre)===null||t===void 0?void 0:t.call(r)},children:"\u8FD4\u56DE\u7B2C\u4E00\u6B65"},"pre"),(0,n.jsxs)(_.ZP,{type:"primary",onClick:function(){var t;return(t=r.onSubmit)===null||t===void 0?void 0:t.call(r)},children:["\u53BB\u7B2C\u4E09\u6B65 ",">"]},"goToTree")]:[(0,n.jsxs)(_.ZP,{onClick:function(){var t;return(t=r.onPre)===null||t===void 0?void 0:t.call(r)},children:["<"," \u8FD4\u56DE\u7B2C\u4E8C\u6B65"]},"gotoTwo"),(0,n.jsx)(_.ZP,{type:"primary",onClick:function(){var t;return(t=r.onSubmit)===null||t===void 0?void 0:t.call(r)},children:"\u63D0\u4EA4 \u221A"},"goToTree")]}},children:[(0,n.jsxs)(l.L0.StepForm,{name:"base",title:"\u521B\u5EFA\u5B9E\u9A8C",onFinish:function(){var s=i()(o()().mark(function r(u){var t;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return t=u.name,console.log(t),p.next=4,a(2e3);case 4:return p.abrupt("return",!0);case 5:case"end":return p.stop()}},r)}));return function(r){return s.apply(this,arguments)}}(),children:[(0,n.jsx)(P.Z,{name:"name",label:"\u5B9E\u9A8C\u540D\u79F0",width:"md",tooltip:"\u6700\u957F\u4E3A 24 \u4F4D\uFF0C\u7528\u4E8E\u6807\u5B9A\u7684\u552F\u4E00 id",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",rules:[{required:!0}]}),(0,n.jsx)(m.Z,{name:"date",label:"\u65E5\u671F"}),(0,n.jsx)(M.Z,{name:"dateTime",label:"\u65F6\u95F4\u533A\u95F4"}),(0,n.jsx)(h.Z,{name:"remark",label:"\u5907\u6CE8",width:"lg",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"})]}),(0,n.jsxs)(l.L0.StepForm,{name:"checkbox",title:"\u8BBE\u7F6E\u53C2\u6570",children:[(0,n.jsx)(D.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",width:"lg",options:["\u7ED3\u6784\u8FC1\u79FB","\u5168\u91CF\u8FC1\u79FB","\u589E\u91CF\u8FC1\u79FB","\u5168\u91CF\u6821\u9A8C"]}),(0,n.jsxs)(v.A.Group,{children:[(0,n.jsx)(P.Z,{name:"dbname",label:"\u4E1A\u52A1 DB \u7528\u6237\u540D"}),(0,n.jsx)(m.Z,{name:"datetime",label:"\u8BB0\u5F55\u4FDD\u5B58\u65F6\u95F4",width:"sm"}),(0,n.jsx)(D.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",options:["\u5B8C\u6574 LOB","\u4E0D\u540C\u6B65 LOB","\u53D7\u9650\u5236 LOB"]})]})]}),(0,n.jsxs)(l.L0.StepForm,{name:"time",title:"\u53D1\u5E03\u5B9E\u9A8C",children:[(0,n.jsx)(D.Z.Group,{name:"checkbox",label:"\u90E8\u7F72\u5355\u5143",rules:[{required:!0}],options:["\u90E8\u7F72\u5355\u51431","\u90E8\u7F72\u5355\u51432","\u90E8\u7F72\u5355\u51433"]}),(0,n.jsx)(c.Z,{label:"\u90E8\u7F72\u5206\u7EC4\u7B56\u7565",name:"remark",rules:[{required:!0}],initialValue:"1",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]}),(0,n.jsx)(c.Z,{label:"Pod \u8C03\u5EA6\u7B56\u7565",name:"remark2",initialValue:"2",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]})]})]})})}},35860:function(g,C,e){e.r(C);var B=e(13448),o=e.n(B),F=e(74815),i=e.n(F),E=e(28152),l=e.n(E),P=e(38861),m=e(63180),M=e(1148),h=e(1643),D=e(58787),v=e(29535),c=e(77319),O=e(57448),_=e(51729),n=e(51190),a=e(10622),s=e(28964),r=e(50959),u=e(11527),t=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(x){setTimeout(function(){x(!0)},p)})};C.default=function(){var d=(0,r.useState)(!1),p=l()(d,2),x=p[0],A=p[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(n.ZP,{type:"primary",onClick:function(){return A(!0)},children:[(0,u.jsx)(P.Z,{}),"\u5206\u6B65\u8868\u5355\u65B0\u5EFA"]}),(0,u.jsxs)(m.L0,{onFinish:function(){var L=i()(o()().mark(function U(T){return o()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return console.log(T),R.next=3,t(1e3);case 3:A(!1),a.ZP.success("\u63D0\u4EA4\u6210\u529F");case 5:case"end":return R.stop()}},U)}));return function(U){return L.apply(this,arguments)}}(),formProps:{validateMessages:{required:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}},stepsFormRender:function(U,T){return(0,u.jsx)(s.Z,{title:"\u5206\u6B65\u8868\u5355",width:800,onCancel:function(){return A(!1)},open:x,footer:T,destroyOnClose:!0,children:U})},children:[(0,u.jsxs)(m.L0.StepForm,{name:"base",title:"\u521B\u5EFA\u5B9E\u9A8C",onFinish:i()(o()().mark(function L(){return o()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,t(2e3);case 2:return T.abrupt("return",!0);case 3:case"end":return T.stop()}},L)})),children:[(0,u.jsx)(M.Z,{name:"name",width:"md",label:"\u5B9E\u9A8C\u540D\u79F0",tooltip:"\u6700\u957F\u4E3A 24 \u4F4D\uFF0C\u7528\u4E8E\u6807\u5B9A\u7684\u552F\u4E00 id",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",rules:[{required:!0}]}),(0,u.jsx)(h.Z,{name:"date",label:"\u65E5\u671F"}),(0,u.jsxs)(D.A.Group,{title:"\u65F6\u95F4\u9009\u62E9",children:[(0,u.jsx)(v.Z,{name:"dateTime",label:"\u5F00\u59CB\u65F6\u95F4"}),(0,u.jsx)(h.Z,{name:"date",label:"\u7ED3\u675F\u65F6\u95F4"})]}),(0,u.jsx)(c.Z,{name:"remark",label:"\u5907\u6CE8",width:"lg",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"})]}),(0,u.jsxs)(m.L0.StepForm,{name:"checkbox",title:"\u8BBE\u7F6E\u53C2\u6570",children:[(0,u.jsx)(O.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",width:"lg",options:["\u7ED3\u6784\u8FC1\u79FB","\u5168\u91CF\u8FC1\u79FB","\u589E\u91CF\u8FC1\u79FB","\u5168\u91CF\u6821\u9A8C"]}),(0,u.jsxs)(D.A.Group,{children:[(0,u.jsx)(M.Z,{width:"md",name:"dbname",label:"\u4E1A\u52A1 DB \u7528\u6237\u540D"}),(0,u.jsx)(h.Z,{name:"datetime",label:"\u8BB0\u5F55\u4FDD\u5B58\u65F6\u95F4",width:"sm"}),(0,u.jsx)(O.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",options:["\u5B8C\u6574 LOB","\u4E0D\u540C\u6B65 LOB","\u53D7\u9650\u5236 LOB"]})]})]}),(0,u.jsxs)(m.L0.StepForm,{name:"time",title:"\u53D1\u5E03\u5B9E\u9A8C",children:[(0,u.jsx)(O.Z.Group,{name:"checkbox",label:"\u90E8\u7F72\u5355\u5143",rules:[{required:!0}],options:["\u90E8\u7F72\u5355\u51431","\u90E8\u7F72\u5355\u51432","\u90E8\u7F72\u5355\u51433"]}),(0,u.jsx)(_.Z,{label:"\u90E8\u7F72\u5206\u7EC4\u7B56\u7565",name:"remark",rules:[{required:!0}],width:"md",initialValue:"1",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]}),(0,u.jsx)(_.Z,{label:"Pod \u8C03\u5EA6\u7B56\u7565",name:"remark2",width:"md",initialValue:"2",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]})]})]})]})}},37385:function(g,C,e){e.r(C);var B=e(13448),o=e.n(B),F=e(74815),i=e.n(F),E=e(63180),l=e(22795),P=e(1148),m=e(58787),M=e(51729),h=e(91403),D=e(64471),v=e(57448),c=e(1643),O=e(10622),_=e(11527),n=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(r){setTimeout(function(){r(!0)},s)})};C.default=function(){return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(E.L0,{onFinish:function(){var a=i()(o()().mark(function s(r){return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(r),t.next=3,n(1e3);case 3:O.ZP.success("\u63D0\u4EA4\u6210\u529F");case 4:case"end":return t.stop()}},s)}));return function(s){return a.apply(this,arguments)}}(),formProps:{validateMessages:{required:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}},children:[(0,_.jsxs)(E.L0.StepForm,{name:"base",title:"\u7B2C\u4E00\u6B65\u9AA4",onFinish:i()(o()().mark(function a(){return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n(2e3);case 2:return r.abrupt("return",!0);case 3:case"end":return r.stop()}},a)})),children:[(0,_.jsxs)(l.Z,{title:"\u6E90\u548C\u76EE\u6807",bordered:!0,headerBordered:!0,collapsible:!0,style:{marginBlockEnd:16,minWidth:800,maxWidth:"100%"},children:[(0,_.jsx)(P.Z,{name:"name",width:"md",label:"\u8FC1\u79FB\u4EFB\u52A1\u540D\u79F0",tooltip:"\u6700\u957F\u4E3A 24 \u4F4D\uFF0C\u7528\u4E8E\u6807\u5B9A\u7684\u552F\u4E00 id",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",rules:[{required:!0}]}),(0,_.jsxs)(m.A.Group,{title:"\u8282\u70B9",size:8,children:[(0,_.jsx)(M.Z,{width:"sm",name:"source",placeholder:"\u9009\u62E9\u6765\u6E90\u8282\u70B9"}),(0,_.jsx)(M.Z,{width:"sm",name:"target",placeholder:"\u9009\u62E9\u76EE\u6807\u8282\u70B9"})]})]}),(0,_.jsxs)(l.Z,{title:"\u9876\u90E8\u5BF9\u9F50",bordered:!0,headerBordered:!0,collapsible:!0,style:{minWidth:800,marginBlockEnd:16},children:[(0,_.jsx)(h.Z,{name:"xs",label:"XS\u53F7\u8868\u5355",initialValue:9999,tooltip:"\u60AC\u6D6E\u51FA\u73B0\u7684\u6C14\u6CE1\u3002",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",width:"xs"}),(0,_.jsx)(P.Z,{name:"s",label:"S\u53F7\u8868\u5355",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",width:"sm"}),(0,_.jsx)(D.Z,{name:"m",label:"M \u53F7\u8868\u5355"}),(0,_.jsx)(M.Z,{name:"l",label:"L \u53F7\u8868\u5355",fieldProps:{mode:"tags"},width:"lg",initialValue:["\u5434\u5BB6\u8C6A","\u5468\u661F\u661F"],options:["\u5434\u5BB6\u8C6A","\u5468\u661F\u661F","\u9648\u62C9\u98CE"].map(function(a){return{label:a,value:a}})})]})]}),(0,_.jsx)(E.L0.StepForm,{name:"checkbox",title:"\u7B2C\u4E8C\u6B65\u9AA4",children:(0,_.jsxs)(l.Z,{style:{minWidth:800,marginBlockEnd:16,maxWidth:"100%"},children:[(0,_.jsx)(v.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",width:"lg",options:["\u7ED3\u6784\u8FC1\u79FB","\u5168\u91CF\u8FC1\u79FB","\u589E\u91CF\u8FC1\u79FB","\u5168\u91CF\u6821\u9A8C"]}),(0,_.jsxs)(m.A.Group,{children:[(0,_.jsx)(P.Z,{name:"dbname",label:"\u4E1A\u52A1 DB \u7528\u6237\u540D"}),(0,_.jsx)(c.Z,{name:"datetime",label:"\u8BB0\u5F55\u4FDD\u5B58\u65F6\u95F4",width:"sm"})]}),(0,_.jsx)(v.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",options:["\u5B8C\u6574 LOB","\u4E0D\u540C\u6B65 LOB","\u53D7\u9650\u5236 LOB"]})]})}),(0,_.jsx)(E.L0.StepForm,{name:"time",title:"\u7B2C\u4E09\u6B65\u9AA4",children:(0,_.jsxs)(l.Z,{style:{marginBlockEnd:16,minWidth:800,maxWidth:"100%"},children:[(0,_.jsx)(v.Z.Group,{name:"checkbox",label:"\u90E8\u7F72\u5355\u5143",rules:[{required:!0}],options:["\u90E8\u7F72\u5355\u51431","\u90E8\u7F72\u5355\u51432","\u90E8\u7F72\u5355\u51433"]}),(0,_.jsx)(M.Z,{label:"\u90E8\u7F72\u5206\u7EC4\u7B56\u7565",name:"remark",rules:[{required:!0}],width:"md",initialValue:"1",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]}),(0,_.jsx)(M.Z,{label:"Pod \u8C03\u5EA6\u7B56\u7565",name:"remark2",width:"md",initialValue:"2",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]})]})})]})})}},83279:function(g,C,e){e.r(C);var B=e(13448),o=e.n(B),F=e(74815),i=e.n(F),E=e(22795),l=e(63180),P=e(1148),m=e(1643),M=e(64471),h=e(77319),D=e(57448),v=e(58787),c=e(10622),O=e(50959),_=e(11527),n=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(r){setTimeout(function(){r(!0)},s)})};C.default=function(){var a=(0,O.useRef)();return(0,_.jsx)(E.Z,{children:(0,_.jsxs)(l.L0,{stepsProps:{direction:"vertical"},formRef:a,onFinish:i()(o()().mark(function s(){return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,n(1e3);case 2:c.ZP.success("\u63D0\u4EA4\u6210\u529F");case 3:case"end":return u.stop()}},s)})),formProps:{validateMessages:{required:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}},children:[(0,_.jsxs)(l.L0.StepForm,{name:"base",title:"\u521B\u5EFA\u5B9E\u9A8C",stepProps:{description:"\u8FD9\u91CC\u586B\u5165\u7684\u90FD\u662F\u57FA\u672C\u4FE1\u606F"},onFinish:i()(o()().mark(function s(){var r;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log((r=a.current)===null||r===void 0?void 0:r.getFieldsValue()),t.next=3,n(2e3);case 3:return t.abrupt("return",!0);case 4:case"end":return t.stop()}},s)})),children:[(0,_.jsx)(P.Z,{name:"name",label:"\u5B9E\u9A8C\u540D\u79F0",width:"md",tooltip:"\u6700\u957F\u4E3A 24 \u4F4D\uFF0C\u7528\u4E8E\u6807\u5B9A\u7684\u552F\u4E00 id",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",rules:[{required:!0}]}),(0,_.jsx)(m.Z,{name:"date",label:"\u65E5\u671F"}),(0,_.jsx)(M.Z,{name:"dateTime",label:"\u65F6\u95F4\u533A\u95F4"}),(0,_.jsx)(h.Z,{name:"remark",label:"\u5907\u6CE8",width:"lg",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"})]}),(0,_.jsxs)(l.L0.StepForm,{name:"checkbox",title:"\u8BBE\u7F6E\u53C2\u6570",stepProps:{description:"\u8FD9\u91CC\u586B\u5165\u8FD0\u7EF4\u53C2\u6570"},onFinish:i()(o()().mark(function s(){var r;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log((r=a.current)===null||r===void 0?void 0:r.getFieldsValue()),t.abrupt("return",!0);case 2:case"end":return t.stop()}},s)})),children:[(0,_.jsx)(D.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",width:"lg",options:["\u7ED3\u6784\u8FC1\u79FB","\u5168\u91CF\u8FC1\u79FB","\u589E\u91CF\u8FC1\u79FB","\u5168\u91CF\u6821\u9A8C","\u589E\u91CF\u6821\u9A8C","\u5168\u91CF\u66FF\u6362","\u589E\u91CF\u66FF\u6362"]}),(0,_.jsxs)(v.A.Group,{children:[(0,_.jsx)(P.Z,{name:"dbname",label:"\u4E1A\u52A1 DB \u7528\u6237\u540D"}),(0,_.jsx)(m.Z,{name:"datetime",label:"\u8BB0\u5F55\u4FDD\u5B58\u65F6\u95F4",width:"sm"}),(0,_.jsx)(D.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",options:["\u5B8C\u6574 LOB","\u4E0D\u540C\u6B65 LOB","\u53D7\u9650\u5236 LOB"]})]})]}),(0,_.jsxs)(l.L0.StepForm,{name:"step3",title:"\u7B2C\u4E09\u6B65",stepProps:{description:"\u8FD9\u91CC\u586B\u5165\u8FD0\u7EF4\u53C2\u6570"},onFinish:i()(o()().mark(function s(){var r;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log((r=a.current)===null||r===void 0?void 0:r.getFieldsValue()),t.abrupt("return",!0);case 2:case"end":return t.stop()}},s)})),children:[(0,_.jsx)(D.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",width:"lg",options:["\u7ED3\u6784\u8FC1\u79FB","\u5168\u91CF\u8FC1\u79FB","\u5168\u91CF\u6821\u9A8C","\u589E\u91CF\u66FF\u6362"]}),(0,_.jsxs)(v.A.Group,{children:[(0,_.jsx)(P.Z,{name:"dbname",label:"\u4E1A\u52A1 DB \u7528\u6237\u540D"}),(0,_.jsx)(m.Z,{name:"datetime",label:"\u8BB0\u5F55\u4FDD\u5B58\u65F6\u95F4",width:"sm"})]}),(0,_.jsx)(D.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",options:["\u5B8C\u6574 LOB","\u4E0D\u540C\u6B65 LOB","\u53D7\u9650\u5236 LOB"]})]})]})})}},81509:function(g,C,e){e.r(C);var B=e(13448),o=e.n(B),F=e(74815),i=e.n(F),E=e(22795),l=e(63180),P=e(1148),m=e(1643),M=e(64471),h=e(77319),D=e(57448),v=e(58787),c=e(51729),O=e(10622),_=e(50959),n=e(11527),a=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(u){setTimeout(function(){u(!0)},r)})};C.default=function(){var s=(0,_.useRef)();return(0,n.jsx)(E.Z,{children:(0,n.jsxs)(l.L0,{formRef:s,onFinish:i()(o()().mark(function r(){return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(1e3);case 2:O.ZP.success("\u63D0\u4EA4\u6210\u529F");case 3:case"end":return t.stop()}},r)})),formProps:{validateMessages:{required:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}},children:[(0,n.jsxs)(l.L0.StepForm,{name:"base",title:"\u521B\u5EFA\u5B9E\u9A8C",stepProps:{description:"\u8FD9\u91CC\u586B\u5165\u7684\u90FD\u662F\u57FA\u672C\u4FE1\u606F"},onFinish:i()(o()().mark(function r(){var u;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log((u=s.current)===null||u===void 0?void 0:u.getFieldsValue()),d.next=3,a(2e3);case 3:return d.abrupt("return",!0);case 4:case"end":return d.stop()}},r)})),children:[(0,n.jsx)(P.Z,{name:"name",label:"\u5B9E\u9A8C\u540D\u79F0",width:"md",tooltip:"\u6700\u957F\u4E3A 24 \u4F4D\uFF0C\u7528\u4E8E\u6807\u5B9A\u7684\u552F\u4E00 id",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",rules:[{required:!0}]}),(0,n.jsx)(m.Z,{name:"date",label:"\u65E5\u671F"}),(0,n.jsx)(M.Z,{name:"dateTime",label:"\u65F6\u95F4\u533A\u95F4"}),(0,n.jsx)(h.Z,{name:"remark",label:"\u5907\u6CE8",width:"lg",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"})]}),(0,n.jsxs)(l.L0.StepForm,{name:"checkbox",title:"\u8BBE\u7F6E\u53C2\u6570",stepProps:{description:"\u8FD9\u91CC\u586B\u5165\u8FD0\u7EF4\u53C2\u6570"},onFinish:i()(o()().mark(function r(){var u;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log((u=s.current)===null||u===void 0?void 0:u.getFieldsValue()),d.abrupt("return",!0);case 2:case"end":return d.stop()}},r)})),children:[(0,n.jsx)(D.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",width:"lg",options:["\u7ED3\u6784\u8FC1\u79FB","\u5168\u91CF\u8FC1\u79FB","\u589E\u91CF\u8FC1\u79FB","\u5168\u91CF\u6821\u9A8C"]}),(0,n.jsxs)(v.A.Group,{children:[(0,n.jsx)(P.Z,{name:"dbname",label:"\u4E1A\u52A1 DB \u7528\u6237\u540D"}),(0,n.jsx)(m.Z,{name:"datetime",label:"\u8BB0\u5F55\u4FDD\u5B58\u65F6\u95F4",width:"sm"}),(0,n.jsx)(D.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",options:["\u5B8C\u6574 LOB","\u4E0D\u540C\u6B65 LOB","\u53D7\u9650\u5236 LOB"]})]})]}),(0,n.jsxs)(l.L0.StepForm,{name:"time",title:"\u53D1\u5E03\u5B9E\u9A8C",stepProps:{description:"\u8FD9\u91CC\u586B\u5165\u53D1\u5E03\u5224\u65AD"},children:[(0,n.jsx)(D.Z.Group,{name:"checkbox",label:"\u90E8\u7F72\u5355\u5143",rules:[{required:!0}],options:["\u90E8\u7F72\u5355\u51431","\u90E8\u7F72\u5355\u51432","\u90E8\u7F72\u5355\u51433"]}),(0,n.jsx)(c.Z,{label:"\u90E8\u7F72\u5206\u7EC4\u7B56\u7565",name:"remark",rules:[{required:!0}],initialValue:"1",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]}),(0,n.jsx)(c.Z,{label:"Pod \u8C03\u5EA6\u7B56\u7565",name:"remark2",initialValue:"2",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]})]})]})})}},57448:function(g,C,e){var B=e(77117),o=e.n(B),F=e(95530),i=e.n(F),E=e(57247),l=e(74493),P=e(50959),m=e(28617),M=e(35877),h=e(11527),D=["options","fieldProps","proFieldProps","valueEnum"],v=P.forwardRef(function(n,a){var s=n.options,r=n.fieldProps,u=n.proFieldProps,t=n.valueEnum,d=i()(n,D);return(0,h.jsx)(M.Z,o()({ref:a,valueType:"checkbox",valueEnum:(0,E.h)(t,void 0),fieldProps:o()({options:s},r),lightProps:o()({labelFormatter:function(){return(0,h.jsx)(M.Z,o()({ref:a,valueType:"checkbox",mode:"read",valueEnum:(0,E.h)(t,void 0),filedConfig:{customLightMode:!0},fieldProps:o()({options:s},r),proFieldProps:u},d))}},d.lightProps),proFieldProps:u},d))}),c=P.forwardRef(function(n,a){var s=n.fieldProps,r=n.children;return(0,h.jsx)(l.Z,o()(o()({ref:a},s),{},{children:r}))}),O=(0,m.G)(c,{valuePropName:"checked"}),_=O;_.Group=v,C.Z=_},1643:function(g,C,e){e.d(C,{Z:function(){return R}});var B=e(77117),o=e.n(B),F=e(95530),i=e.n(F),E=e(50959),l=e(97332),P=e(35877),m=e(11527),M=["proFieldProps","fieldProps"],h="date",D=E.forwardRef(function(f,j){var W=f.proFieldProps,I=f.fieldProps,K=i()(f,M),Z=(0,E.useContext)(l.Z);return(0,m.jsx)(P.Z,o()({ref:j,valueType:h,fieldProps:o()({getPopupContainer:Z.getPopupContainer},I),proFieldProps:W,filedConfig:{valueType:h,customLightMode:!0}},K))}),v=D,c=["proFieldProps","fieldProps"],O="dateMonth",_=E.forwardRef(function(f,j){var W=f.proFieldProps,I=f.fieldProps,K=i()(f,c),Z=(0,E.useContext)(l.Z);return(0,m.jsx)(P.Z,o()({ref:j,valueType:O,fieldProps:o()({getPopupContainer:Z.getPopupContainer},I),proFieldProps:W,filedConfig:{valueType:O,customLightMode:!0}},K))}),n=_,a=["fieldProps"],s="dateQuarter",r=E.forwardRef(function(f,j){var W=f.fieldProps,I=i()(f,a),K=(0,E.useContext)(l.Z);return(0,m.jsx)(P.Z,o()({ref:j,valueType:s,fieldProps:o()({getPopupContainer:K.getPopupContainer},W),filedConfig:{valueType:s,customLightMode:!0}},I))}),u=r,t=["proFieldProps","fieldProps"],d="dateWeek",p=E.forwardRef(function(f,j){var W=f.proFieldProps,I=f.fieldProps,K=i()(f,t),Z=(0,E.useContext)(l.Z);return(0,m.jsx)(P.Z,o()({ref:j,valueType:d,fieldProps:o()({getPopupContainer:Z.getPopupContainer},I),proFieldProps:W,filedConfig:{valueType:d,customLightMode:!0}},K))}),x=p,A=["proFieldProps","fieldProps"],L="dateYear",U=E.forwardRef(function(f,j){var W=f.proFieldProps,I=f.fieldProps,K=i()(f,A),Z=(0,E.useContext)(l.Z);return(0,m.jsx)(P.Z,o()({ref:j,valueType:L,fieldProps:o()({getPopupContainer:Z.getPopupContainer},I),proFieldProps:W,filedConfig:{valueType:L,customLightMode:!0}},K))}),T=U,b=v;b.Week=x,b.Month=n,b.Quarter=u,b.Year=T,b.displayName="ProFormComponent";var R=b},64471:function(g,C,e){var B=e(77117),o=e.n(B),F=e(95530),i=e.n(F),E=e(79812),l=e(50959),P=e(97332),m=e(35877),M=e(11527),h=["fieldProps","proFieldProps"],D="dateRange",v=l.forwardRef(function(c,O){var _=c.fieldProps,n=c.proFieldProps,a=i()(c,h),s=(0,l.useContext)(P.Z);return(0,M.jsx)(m.Z,o()({ref:O,fieldProps:o()({getPopupContainer:s.getPopupContainer},_),valueType:D,proFieldProps:n,filedConfig:{valueType:D,customLightMode:!0,lightFilterLabelFormatter:function(u){return(0,E.c)(u,(_==null?void 0:_.format)||"YYYY-MM-DD")}}},a))});C.Z=v},29535:function(g,C,e){var B=e(77117),o=e.n(B),F=e(95530),i=e.n(F),E=e(50959),l=e(97332),P=e(35877),m=e(11527),M=["fieldProps","proFieldProps"],h="dateTime",D=E.forwardRef(function(v,c){var O=v.fieldProps,_=v.proFieldProps,n=i()(v,M),a=(0,E.useContext)(l.Z);return(0,m.jsx)(P.Z,o()({ref:c,fieldProps:o()({getPopupContainer:a.getPopupContainer},O),valueType:h,proFieldProps:_,filedConfig:{valueType:h,customLightMode:!0}},n))});C.Z=D},91403:function(g,C,e){var B=e(77117),o=e.n(B),F=e(95530),i=e.n(F),E=e(50959),l=e(35877),P=e(11527),m=["fieldProps","min","proFieldProps","max"],M=function(v,c){var O=v.fieldProps,_=v.min,n=v.proFieldProps,a=v.max,s=i()(v,m);return(0,P.jsx)(l.Z,o()({valueType:"digit",fieldProps:o()({min:_,max:a},O),ref:c,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:n},s))},h=E.forwardRef(M);C.Z=h},51729:function(g,C,e){var B=e(77117),o=e.n(B),F=e(95530),i=e.n(F),E=e(57247),l=e(50959),P=e(97332),m=e(35877),M=e(11527),h=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],D=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],v=function(s,r){var u=s.fieldProps,t=s.children,d=s.params,p=s.proFieldProps,x=s.mode,A=s.valueEnum,L=s.request,U=s.showSearch,T=s.options,b=i()(s,h),R=(0,l.useContext)(P.Z);return(0,M.jsx)(m.Z,o()(o()({valueEnum:(0,E.h)(A),request:L,params:d,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:o()({options:T,mode:x,showSearch:U,getPopupContainer:R.getPopupContainer},u),ref:r,proFieldProps:p},b),{},{children:t}))},c=l.forwardRef(function(a,s){var r=a.fieldProps,u=a.children,t=a.params,d=a.proFieldProps,p=a.mode,x=a.valueEnum,A=a.request,L=a.options,U=i()(a,D),T=o()({options:L,mode:p||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},r),b=(0,l.useContext)(P.Z);return(0,M.jsx)(m.Z,o()(o()({valueEnum:(0,E.h)(x),request:A,params:t,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:o()({getPopupContainer:b.getPopupContainer},T),ref:s,proFieldProps:d},U),{},{children:u}))}),O=l.forwardRef(v),_=c,n=O;n.SearchSelect=_,n.displayName="ProFormComponent",C.Z=n},1148:function(g,C,e){var B=e(28152),o=e.n(B),F=e(77117),i=e.n(F),E=e(95530),l=e.n(E),P=e(96096),m=e(72389),M=e(89557),h=e(71770),D=e(50959),v=e(35877),c=e(11527),O=["fieldProps","proFieldProps"],_=["fieldProps","proFieldProps"],n="text",a=function(d){var p=d.fieldProps,x=d.proFieldProps,A=l()(d,O);return(0,c.jsx)(v.Z,i()({valueType:n,fieldProps:p,filedConfig:{valueType:n},proFieldProps:x},A))},s=function(d){var p=(0,P.Z)(d.open||!1,{value:d.open,onChange:d.onOpenChange}),x=o()(p,2),A=x[0],L=x[1];return(0,c.jsx)(m.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(T){var b,R=T.getFieldValue(d.name||[]);return(0,c.jsx)(M.Z,i()(i()({getPopupContainer:function(j){return j&&j.parentNode?j.parentNode:j},onOpenChange:L,content:(0,c.jsxs)("div",{style:{padding:"4px 0"},children:[(b=d.statusRender)===null||b===void 0?void 0:b.call(d,R),d.strengthText?(0,c.jsx)("div",{style:{marginTop:10},children:(0,c.jsx)("span",{children:d.strengthText})}):null]}),overlayStyle:{width:240},placement:"right"},d.popoverProps),{},{open:A,children:d.children}))}})},r=function(d){var p=d.fieldProps,x=d.proFieldProps,A=l()(d,_),L=(0,D.useState)(!1),U=o()(L,2),T=U[0],b=U[1];return p!=null&&p.statusRender&&A.name?(0,c.jsx)(s,{name:A.name,statusRender:p==null?void 0:p.statusRender,popoverProps:p==null?void 0:p.popoverProps,strengthText:p==null?void 0:p.strengthText,open:T,onOpenChange:b,children:(0,c.jsx)(v.Z,i()({valueType:"password",fieldProps:i()(i()({},(0,h.Z)(p,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(f){var j;p==null||(j=p.onBlur)===null||j===void 0||j.call(p,f),b(!1)},onClick:function(f){var j;p==null||(j=p.onClick)===null||j===void 0||j.call(p,f),b(!0)}}),proFieldProps:x,filedConfig:{valueType:n}},A))}):(0,c.jsx)(v.Z,i()({valueType:"password",fieldProps:p,proFieldProps:x,filedConfig:{valueType:n}},A))},u=a;u.Password=r,u.displayName="ProFormComponent",C.Z=u},77319:function(g,C,e){var B=e(77117),o=e.n(B),F=e(95530),i=e.n(F),E=e(50959),l=e(35877),P=e(11527),m=["fieldProps","proFieldProps"],M=function(D,v){var c=D.fieldProps,O=D.proFieldProps,_=i()(D,m);return(0,P.jsx)(l.Z,o()({ref:v,valueType:"textarea",fieldProps:c,proFieldProps:O},_))};C.Z=E.forwardRef(M)},46285:function(g,C,e){var B=e(43014);function o(){return(0,B.Z)()}C.ZP={useBreakpoint:o}}}]);
