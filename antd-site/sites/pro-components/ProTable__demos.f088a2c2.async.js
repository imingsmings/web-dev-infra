"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[4843],{70075:function(X,j,l){l.r(j);var z=l(77117),p=l.n(z),A=l(13448),D=l.n(A),R=l(74815),Z=l.n(R),I=l(28152),U=l.n(I),L=l(48651),W=l(99720),m=l(22795),S=l(93910),d=l(58787),o=l(42129),c=l(73502),i=l(1148),E=l(51729),b=l(91403),K=l(26031),v=l(17490),F=l(2425),w=l(77319),G=l(51190),y=l(50959),e=l(11527),N=["password","money","textarea","option","date","dateWeek","dateMonth","dateQuarter","dateYear","dateRange","dateTimeRange","dateTime","time","timeRange","text","select","checkbox","rate","radio","radioButton","index","indexBorder","progress","percent","digit","second","avatar","code","switch","fromNow","image","jsonCode"],C=[{title:"Name",dataIndex:"name"},{title:"time",dataIndex:"time",valueType:"date"},{title:"Address",dataIndex:"address",valueType:"select",filters:!0,onFilter:!0,valueEnum:{london:{text:"\u4F26\u6566"},"New York":{text:"\u7EBD\u7EA6"}}},{title:"Action",key:"action",sorter:!0,valueType:"option",render:function(){return[(0,e.jsx)("a",{children:"Delete"},"delete"),(0,e.jsxs)("a",{className:"ant-dropdown-link",children:["More actions ",(0,e.jsx)(L.Z,{})]},"link")]}}],$=function(u){if(u<1)return[];for(var _=[],t=1;t<=u;t+=1)_.push({key:t,name:"John Brown",age:t+10,time:1661136793649+t*1e3,address:t%2===0?"london":"New York",description:"My name is John Brown, I am ".concat(t,"2 years old, living in New York No. ").concat(t," Lake Park.")});return _},B={bordered:!0,loading:!1,columns:C,pagination:{show:!0,pageSize:5,current:1,total:100},size:"small",expandable:!1,headerTitle:"\u9AD8\u7EA7\u8868\u683C",tooltip:"\u9AD8\u7EA7\u8868\u683C tooltip",showHeader:!0,footer:!0,rowSelection:{},scroll:!1,hasData:!0,tableLayout:void 0,toolBarRender:!0,search:{show:!0,span:12,collapseRender:!0,labelWidth:80,filterType:"query",layout:"horizontal"},options:{show:!0,density:!0,fullScreen:!0,setting:!0}},H=function(){var u,_,t,x,g,P,M=(0,y.useRef)(),J=(0,y.useState)(B),O=U()(J,2),a=O[0],Y=O[1],k=(0,W.D)(function(){var s=Z()(D()().mark(function n(r){return D()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:Y(r);case 1:case"end":return f.stop()}},n)}));return function(n){return s.apply(this,arguments)}}(),20),V=(u=a.columns||C)===null||u===void 0?void 0:u.map(function(s){return p()(p()({},s),{},{ellipsis:a.ellipsis})});return(0,e.jsxs)(m.Z,{split:"vertical",bordered:!0,headerBordered:!0,style:{height:"100vh",overflow:"hidden"},children:[(0,e.jsx)(m.Z,{style:{height:"100vh",overflow:"auto"},children:(0,e.jsx)(S.Z,p()(p()({},a),{},{formRef:M,pagination:(_=a.pagination)!==null&&_!==void 0&&_.show?a.pagination:{pageSize:5},search:(t=a.search)!==null&&t!==void 0&&t.show?a.search:{},expandable:a.expandable&&{expandedRowRender:function(n){return(0,e.jsx)("p",{children:n.description})}},options:(x=a.options)!==null&&x!==void 0&&x.show?a.options:!1,toolBarRender:a!=null&&a.toolBarRender?function(){return[(0,e.jsx)(G.ZP,{type:"primary",children:"\u5237\u65B0"},"refresh")]}:!1,footer:a.footer?function(){return"Here is footer"}:!1,headerTitle:a.headerTitle,columns:V,dataSource:$(((g=a.pagination)===null||g===void 0?void 0:g.total)||10),scroll:a.scroll}))}),(0,e.jsx)(d.A,{layout:"inline",initialValues:B,submitter:!1,colon:!1,onValuesChange:function(n,r){return k.run(r)},children:(0,e.jsx)(m.Z,{colSpan:"470px",style:{height:"100vh",overflow:"auto",boxShadow:"2px 0 6px rgba(0, 21, 41, 0.35)",top:0,right:0,width:470},tabs:{items:[{label:"\u57FA\u672C\u914D\u7F6E",key:"tab1",children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(d.A.Group,{title:"\u8868\u683C\u914D\u7F6E",size:0,collapsible:!0,direction:"horizontal",labelLayout:"twoLine",children:[(0,e.jsx)(o.Z,{fieldProps:{size:"small"},label:"\u8FB9\u6846",tooltip:"bordered",name:"bordered"}),(0,e.jsx)(c.Z.Group,{tooltip:'size="middle"',radioType:"button",fieldProps:{size:"small"},label:"\u5C3A\u5BF8",options:[{label:"\u5927",value:"default"},{label:"\u4E2D",value:"middle"},{label:"\u5C0F",value:"small"}],name:"size"}),(0,e.jsx)(o.Z,{fieldProps:{size:"small"},label:"\u52A0\u8F7D\u4E2D",tooltip:"loading",name:"loading"}),(0,e.jsx)(o.Z,{fieldProps:{size:"small"},label:"\u663E\u793A\u6807\u9898",tooltip:"showHeader",name:"showHeader"}),(0,e.jsx)(o.Z,{fieldProps:{size:"small"},label:"\u9875\u811A",tooltip:"footer",name:"footer"}),(0,e.jsx)(o.Z,{fieldProps:{size:"small"},label:"\u652F\u6301\u5C55\u5F00",tooltip:"expandable",name:"expandable"}),(0,e.jsx)(o.Z,{fieldProps:{size:"small"},label:"\u884C\u9009\u62E9",tooltip:"rowSelection",name:"rowSelection"})]}),(0,e.jsxs)(d.A.Group,{size:0,collapsible:!0,direction:"horizontal",labelLayout:"twoLine",tooltip:"toolBarRender={false}",title:"\u5DE5\u5177\u680F",extra:(0,e.jsx)(o.Z,{fieldProps:{size:"small"},noStyle:!0,name:"toolBarRender"}),children:[(0,e.jsx)(i.Z,{fieldProps:{size:"small"},label:"\u8868\u683C\u6807\u9898",name:"headerTitle",tooltip:"headerTitle={false}"}),(0,e.jsx)(i.Z,{fieldProps:{size:"small"},label:"\u8868\u683C\u7684tooltip",name:"tooltip",tooltip:"tooltip={false}"}),(0,e.jsx)(o.Z,{fieldProps:{size:"small"},label:"Icon \u663E\u793A",name:["options","show"],tooltip:"options={false}"}),(0,e.jsx)(o.Z,{fieldProps:{size:"small"},label:"\u5BC6\u5EA6 Icon",name:["options","density"],tooltip:"options={{ density:false }}"}),(0,e.jsx)(o.Z,{fieldProps:{size:"small"},label:"keyWords",name:["options","search"],tooltip:"options={{ search:'keyWords' }}"}),(0,e.jsx)(o.Z,{label:"\u5168\u5C4F Icon",fieldProps:{size:"small"},name:["options","fullScreen"],tooltip:"options={{ fullScreen:false }}"}),(0,e.jsx)(o.Z,{label:"\u5217\u8BBE\u7F6E Icon",fieldProps:{size:"small"},tooltip:"options={{ setting:false }}",name:["options","setting"]})]})]})},{label:"\u8868\u5355\u914D\u7F6E",key:"tab3",children:(0,e.jsxs)(d.A.Group,{title:"\u67E5\u8BE2\u8868\u5355",size:0,collapsible:!0,tooltip:"search={false}",direction:"horizontal",labelLayout:"twoLine",extra:(0,e.jsx)(o.Z,{fieldProps:{size:"small"},noStyle:!0,name:["search","show"]}),children:[(0,e.jsx)(i.Z,{label:"\u67E5\u8BE2\u6309\u94AE\u6587\u6848",fieldProps:{size:"small"},tooltip:'search={{searchText:"\u67E5\u8BE2"}}',name:["search","searchText"]}),(0,e.jsx)(i.Z,{label:"\u91CD\u7F6E\u6309\u94AE\u6587\u6848",fieldProps:{size:"small"},tooltip:'search={{resetText:"\u91CD\u7F6E"}}',name:["search","resetText"]}),(0,e.jsx)(o.Z,{fieldProps:{size:"small"},label:"\u6536\u8D77\u6309\u94AE",tooltip:"search={{collapseRender:false}}",name:["search","collapseRender"]}),(0,e.jsx)(o.Z,{fieldProps:{size:"small"},label:"\u8868\u5355\u6536\u8D77",name:["search","collapsed"],tooltip:"search={{collapsed:false}}"}),(0,e.jsx)(E.Z,{fieldProps:{size:"small"},tooltip:"search={{span:8}}",options:[{label:"24",value:24},{label:"12",value:12},{label:"8",value:8},{label:"6",value:6}],label:"\u8868\u5355\u6805\u683C",name:["search","span"]}),(0,e.jsx)(c.Z.Group,{radioType:"button",fieldProps:{size:"small"},name:["search","layout"],tooltip:'search={{layout:"'.concat((P=a.search)===null||P===void 0?void 0:P.layout,'"}}'),options:[{label:"\u5782\u76F4",value:"vertical"},{label:"\u6C34\u5E73",value:"horizontal"}],label:"\u8868\u5355\u5E03\u5C40"}),(0,e.jsx)(c.Z.Group,{radioType:"button",fieldProps:{size:"small"},name:["search","filterType"],tooltip:'search={{filterType:"light"}}',options:[{label:"\u9ED8\u8BA4",value:"query"},{label:"\u8F7B\u91CF",value:"light"}],label:"\u8868\u5355\u7C7B\u578B"})]})},{label:"\u6570\u636E\u914D\u7F6E",key:"tab2",children:(0,e.jsxs)(d.A.Group,{title:"\u5206\u9875\u5668",size:0,collapsible:!0,tooltip:"pagination={}",direction:"horizontal",labelLayout:"twoLine",extra:(0,e.jsx)(o.Z,{fieldProps:{size:"small"},noStyle:!0,name:["pagination","show"]}),children:[(0,e.jsx)(c.Z.Group,{tooltip:'pagination={size:"middle"}',radioType:"button",fieldProps:{size:"small"},label:"\u5C3A\u5BF8",options:[{label:"\u9ED8\u8BA4",value:"default"},{label:"\u5C0F",value:"small"}],name:["pagination","size"]}),(0,e.jsx)(b.Z,{fieldProps:{size:"small"},label:"\u9875\u7801",tooltip:"pagination={{ current:10 }}",name:["pagination","current"]}),(0,e.jsx)(b.Z,{fieldProps:{size:"small"},label:"\u6BCF\u9875\u6570\u91CF",tooltip:"pagination={{ pageSize:10 }}",name:["pagination","pageSize"]}),(0,e.jsx)(b.Z,{fieldProps:{size:"small"},label:"\u6570\u636E\u603B\u6570",tooltip:"pagination={{ total:100 }}",name:["pagination","total"]})]})},{label:"\u5217\u914D\u7F6E",key:"tab4",children:(0,e.jsxs)(K.u,{name:"columns",itemRender:function(n){var r=n.listDom,h=n.action;return(0,e.jsxs)(m.Z,{bordered:!0,style:{marginBlockEnd:8,position:"relative"},bodyStyle:{padding:8,paddingInlineEnd:16,paddingBlockStart:16},children:[(0,e.jsx)("div",{style:{position:"absolute",top:-4,right:2},children:h}),r]})},children:[(0,e.jsx)(i.Z,{rules:[{required:!0}],name:"title",label:"\u6807\u9898"}),(0,e.jsxs)(v.UW,{style:{marginBlockStart:8},children:[(0,e.jsx)(o.Z,{label:"\u8FC7\u957F\u7701\u7565",name:"ellipsis"}),(0,e.jsx)(o.Z,{label:"\u590D\u5236\u6309\u94AE",name:"copyable"})]}),(0,e.jsxs)(v.UW,{style:{marginBlockStart:8},size:8,children:[(0,e.jsx)(E.Z,{label:"dataIndex",width:"xs",name:"dataIndex",valueEnum:{age:"age",address:"address",name:"name",time:"time",description:"string"}}),(0,e.jsx)(E.Z,{width:"xs",label:"\u503C\u7C7B\u578B",name:"valueType",fieldProps:{onChange:function(){var n;(n=M.current)===null||n===void 0||n.resetFields()}},options:N.map(function(s){return{label:s,value:s}})})]}),(0,e.jsx)(v.UW,{style:{marginBlockStart:8},size:8,children:(0,e.jsx)(i.Z,{width:"xs",label:"\u5217\u63D0\u793A",name:"tooltip"})}),(0,e.jsx)(F.Z,{name:["valueType","valueEnum"],children:function(n){var r=n.valueType,h=n.valueEnum;return r!=="select"?null:(0,e.jsx)(w.Z,{formItemProps:{style:{marginBlockStart:8}},fieldProps:{value:JSON.stringify(h)},normalize:function(Q){return JSON.parse(Q)},label:"\u6570\u636E\u679A\u4E3E",name:"valueEnum"})}})]})}]}})})]})};j.default=H}}]);
