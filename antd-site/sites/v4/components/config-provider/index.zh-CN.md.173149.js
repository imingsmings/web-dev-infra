(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{3804:function(n,t){n.exports={content:["section",["p","\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u7EDF\u4E00\u7684\u5168\u5C40\u5316\u914D\u7F6E\u3002"],["h2","\u4F7F\u7528"],["p","ConfigProvider \u4F7F\u7528 React \u7684 ",["a",{title:null,href:"https://facebook.github.io/react/docs/context.html"},"context"]," \u7279\u6027\uFF0C\u53EA\u9700\u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21\u5373\u53EF\u5168\u5C40\u751F\u6548\u3002"],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// ...</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ConfigProvider</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rtl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`import { ConfigProvider } from 'antd';

// ...

export default () => (
  <ConfigProvider direction="rtl">
    <App />
  </ConfigProvider>
);`]],["h3","Content Security Policy"],["p","\u90E8\u5206\u7EC4\u4EF6\u4E3A\u4E86\u652F\u6301\u6CE2\u7EB9\u6548\u679C\uFF0C\u4F7F\u7528\u4E86\u52A8\u6001\u6837\u5F0F\u3002\u5982\u679C\u5F00\u542F\u4E86 Content Security Policy (CSP)\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 ",["code","csp"]," \u5C5E\u6027\u6765\u8FDB\u884C\u914D\u7F6E\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ConfigProvider</span> <span class="token attr-name">csp</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> nonce<span class="token punctuation">:</span> <span class="token string">'YourNonceCode'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>My Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span>`},["code",`<ConfigProvider csp={{ nonce: 'YourNonceCode' }}>
  <Button>My Button</Button>
</ConfigProvider>`]]],meta:{category:"Components",subtitle:"\u5168\u5C40\u5316\u914D\u7F6E",cols:1,type:"\u5176\u4ED6",title:"ConfigProvider",cover:"https://gw.alipayobjects.com/zos/alicdn/kegYxl1wj/ConfigProvider.svg",filename:"components/config-provider/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F7F\u7528",title:"\u4F7F\u7528"},"\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","autoInsertSpaceInButton"],["td","\u8BBE\u7F6E\u4E3A ",["code","false"]," \u65F6\uFF0C\u79FB\u9664\u6309\u94AE\u4E2D 2 \u4E2A\u6C49\u5B57\u4E4B\u95F4\u7684\u7A7A\u683C"],["td","boolean"],["td","true"],["td"]],["tr",["td","componentDisabled"],["td","\u8BBE\u7F6E antd \u7EC4\u4EF6\u7981\u7528\u72B6\u6001"],["td","boolean"],["td","-"],["td","4.21.0"]],["tr",["td","componentSize"],["td","\u8BBE\u7F6E antd \u7EC4\u4EF6\u5927\u5C0F"],["td",["code","small"]," ","|"," ",["code","middle"]," ","|"," ",["code","large"]],["td","-"],["td"]],["tr",["td","csp"],["td","\u8BBE\u7F6E ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"},"Content Security Policy"]," \u914D\u7F6E"],["td","{ nonce: string }"],["td","-"],["td"]],["tr",["td","direction"],["td","\u8BBE\u7F6E\u6587\u672C\u5C55\u793A\u65B9\u5411\u3002 ",["a",{title:null,href:"#components-config-provider-demo-direction"},"\u793A\u4F8B"]],["td",["code","ltr"]," ","|"," ",["code","rtl"]],["td",["code","ltr"]],["td"]],["tr",["td","dropdownMatchSelectWidth"],["td","\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD\u3002\u9ED8\u8BA4\u5C06\u8BBE\u7F6E ",["code","min-width"],"\uFF0C\u5F53\u503C\u5C0F\u4E8E\u9009\u62E9\u6846\u5BBD\u5EA6\u65F6\u4F1A\u88AB\u5FFD\u7565\u3002",["code","false"]," \u65F6\u4F1A\u5173\u95ED\u865A\u62DF\u6EDA\u52A8"],["td","boolean ","|"," number"],["td","-"],["td","4.3.0"]],["tr",["td","form"],["td","\u8BBE\u7F6E Form \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027"],["td","{ validateMessages?: ",["a",{title:null,href:"/components/form/#validateMessages"},"ValidateMessages"],", requiredMark?: boolean ","|"," ",["code","optional"],", colon?: boolean}"],["td","-"],["td","requiredMark: 4.8.0; colon: 4.18.0"]],["tr",["td","getPopupContainer"],["td","\u5F39\u51FA\u6846\uFF08Select, Tooltip, Menu \u7B49\u7B49\uFF09\u6E32\u67D3\u7236\u8282\u70B9\uFF0C\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\u3002"],["td","function(triggerNode)"],["td","() => document.body"],["td"]],["tr",["td","getTargetContainer"],["td","\u914D\u7F6E Affix\u3001Anchor \u6EDA\u52A8\u76D1\u542C\u5BB9\u5668\u3002"],["td","() => HTMLElement"],["td","() => window"],["td","4.2.0"]],["tr",["td","iconPrefixCls"],["td","\u8BBE\u7F6E\u56FE\u6807\u7EDF\u4E00\u6837\u5F0F\u524D\u7F00\u3002\u6CE8\u610F\uFF1A\u9700\u8981\u914D\u5408 ",["code","less"]," \u53D8\u91CF ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/d943b85a523bdf181dabc12c928226f3b4b893de/components/style/themes/default.less#L106"},"@iconfont-css-prefix"]," \u4F7F\u7528"],["td","string"],["td",["code","anticon"]],["td","4.11.0"]],["tr",["td","input"],["td","\u8BBE\u7F6E Input \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027"],["td","{ autoComplete?: string }"],["td","-"],["td","4.2.0"]],["tr",["td","locale"],["td","\u8BED\u8A00\u5305\u914D\u7F6E\uFF0C\u8BED\u8A00\u5305\u53EF\u5230 ",["a",{title:null,href:"http://unpkg.com/antd/es/locale/"},"antd/es/locale"]," \u76EE\u5F55\u4E0B\u5BFB\u627E"],["td","object"],["td","-"],["td"]],["tr",["td","pageHeader"],["td","\u7EDF\u4E00\u8BBE\u7F6E PageHeader \u7684 ghost\uFF0C\u53C2\u8003 ",["a",{title:null,href:"/components/page-header"},"PageHeader"]],["td","{ ghost: boolean }"],["td","true"],["td"]],["tr",["td","prefixCls"],["td","\u8BBE\u7F6E\u7EDF\u4E00\u6837\u5F0F\u524D\u7F00\u3002\u6CE8\u610F\uFF1A\u9700\u8981\u914D\u5408 ",["code","less"]," \u53D8\u91CF ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/2c6c789e3a9356f96c47aea0083f5a15538315cf/components/style/themes/default.less#L7"},"@ant-prefix"]," \u4F7F\u7528"],["td","string"],["td",["code","ant"]],["td"]],["tr",["td","renderEmpty"],["td","\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7A7A\u72B6\u6001\u3002\u53C2\u8003 ",["a",{title:null,href:"/components/empty/"},"\u7A7A\u72B6\u6001"]],["td","function(componentName: string): ReactNode"],["td","-"],["td"]],["tr",["td","space"],["td","\u8BBE\u7F6E Space \u7684 ",["code","size"],"\uFF0C\u53C2\u8003 ",["a",{title:null,href:"/components/space"},"Space"]],["td","{ size: ",["code","small"]," ","|"," ",["code","middle"]," ","|"," ",["code","large"]," ","|"," ",["code","number"]," }"],["td","-"],["td","4.1.0"]],["tr",["td","virtual"],["td","\u8BBE\u7F6E ",["code","false"]," \u65F6\u5173\u95ED\u865A\u62DF\u6EDA\u52A8"],["td","boolean"],["td","-"],["td","4.3.0"]]]],["h3","ConfigProvider.config() ",["code","4.13.0+"]],["p","\u8BBE\u7F6E ",["code","Modal"],"\u3001",["code","Message"],"\u3001",["code","Notification"]," rootPrefixCls\u3002"],["pre",{lang:"jsx",highlighted:`ConfigProvider<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  prefixCls<span class="token punctuation">:</span> <span class="token string">'ant'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// 4.13.0+</span>
  iconPrefixCls<span class="token punctuation">:</span> <span class="token string">'anticon'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// 4.17.0+</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`ConfigProvider.config({
  prefixCls: 'ant', // 4.13.0+
  iconPrefixCls: 'anticon', // 4.17.0+
});`]],["h2","FAQ"],["h4","\u5982\u4F55\u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF1F"],["p","\u53C2\u8003",["a",{title:null,href:"/docs/react/i18n#%E5%A2%9E%E5%8A%A0%E8%AF%AD%E8%A8%80%E5%8C%85"},"\u300A\u589E\u52A0\u8BED\u8A00\u5305\u300B"],"\u3002"],["h4","\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316 locale \u8BBE\u7F6E\u4E0D\u751F\u6548\uFF1F"],["p","\u53C2\u8003 FAQ ",["a",{title:null,href:"/docs/react/faq#\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316-locale-\u8BBE\u7F6E\u4E0D\u751F\u6548\uFF1F"},"\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316 locale \u8BBE\u7F6E\u4E0D\u751F\u6548\uFF1F"],"\u3002"],["h4","\u914D\u7F6E ",["code","getPopupContainer"]," \u5BFC\u81F4 Modal \u62A5\u9519\uFF1F"],["p","\u76F8\u5173 issue\uFF1A",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/19974"},"https://github.com/ant-design/ant-design/issues/19974"]],["p","\u5F53\u5982\u4E0B\u5168\u5C40\u8BBE\u7F6E ",["code","getPopupContainer"]," \u4E3A\u89E6\u53D1\u8282\u70B9\u7684 parentNode \u65F6\uFF0C\u7531\u4E8E Modal \u7684\u7528\u6CD5\u4E0D\u5B58\u5728 ",["code","triggerNode"],"\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4 ",["code","triggerNode is undefined"]," \u7684\u62A5\u9519\uFF0C\u9700\u8981\u589E\u52A0\u4E00\u4E2A",["a",{title:null,href:"https://github.com/afc163/feedback-antd/commit/3e4d1ad1bc1a38460dc3bf3c56517f737fe7d44a"},"\u5224\u65AD\u6761\u4EF6"],"\u3002"],["pre",{lang:"diff",highlighted:` &lt;ConfigProvider
<span class="token deleted">-  getPopupContainer={triggerNode => triggerNode.parentNode}</span>
<span class="token inserted">+  getPopupContainer={node => {</span>
<span class="token inserted">+    if (node) {</span>
<span class="token inserted">+      return node.parentNode;</span>
<span class="token inserted">+    }</span>
<span class="token inserted">+    return document.body;</span>
<span class="token inserted">+  }}</span>
 >
   &lt;App />
 &lt;/ConfigProvider>`},["code",` <ConfigProvider
-  getPopupContainer={triggerNode => triggerNode.parentNode}
+  getPopupContainer={node => {
+    if (node) {
+      return node.parentNode;
+    }
+    return document.body;
+  }}
 >
   <App />
 </ConfigProvider>`]]]}}}]);
