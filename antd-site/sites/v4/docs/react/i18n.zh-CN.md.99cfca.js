(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{3960:function(t,n){t.exports={content:["article",["p",["code","antd"]," \u76EE\u524D\u7684\u9ED8\u8BA4\u6587\u6848\u662F\u82F1\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u65B9\u6848\u3002"],["h2","ConfigProvider"],["p","antd \u63D0\u4F9B\u4E86\u4E00\u4E2A React \u7EC4\u4EF6 ",["a",{title:null,href:"/components/config-provider"},"ConfigProvider"]," \u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u56FD\u9645\u5316\u6587\u6848\u3002"],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">'antd/es/locale/zh_CN'</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ConfigProvider</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>zhCN<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`import zhCN from 'antd/es/locale/zh_CN';

return (
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);`]],["p","\u8BE6\u7EC6\u914D\u7F6E\u89C1\uFF1A",["a",{title:null,href:"/components/config-provider"},"ConfigProvider"],"\u3002"],["p","\u6CE8\u610F\uFF1A",["code","zh_CN"]," \u662F\u6587\u4EF6\u540D\uFF0C\u4EE5\u4E0B\u8868\u683C\u4E5F\u9075\u5FAA\u540C\u6837\u7684\u89C4\u5219\u3002"],["p","\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A"],["table",["thead",["tr",["th","\u8BED\u8A00"],["th","\u6587\u4EF6\u540D"]]],["tbody",["tr",["td","\u963F\u62C9\u4F2F\u8BED"],["td","ar_EG"]],["tr",["td","\u963F\u585E\u62DC\u7586\u8BED"],["td","az_AZ"]],["tr",["td","\u4FDD\u52A0\u5229\u4E9A\u8BED"],["td","bg_BG"]],["tr",["td","\u5B5F\u52A0\u62C9\u8BED\uFF08\u5B5F\u52A0\u62C9\u56FD\uFF09"],["td","bn_BD"]],["tr",["td","\u767D\u4FC4\u7F57\u65AF\u8BED"],["td","by_BY"]],["tr",["td","\u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED"],["td","ca_ES"]],["tr",["td","\u6377\u514B\u8BED"],["td","cs_CZ"]],["tr",["td","\u4E39\u9EA6\u8BED"],["td","da_DK"]],["tr",["td","\u5FB7\u8BED"],["td","de_DE"]],["tr",["td","\u5E0C\u814A\u8BED"],["td","el_GR"]],["tr",["td","\u82F1\u8BED"],["td","en_GB"]],["tr",["td","\u82F1\u8BED\uFF08\u7F8E\u5F0F\uFF09"],["td","en_US"]],["tr",["td","\u897F\u73ED\u7259\u8BED"],["td","es_ES"]],["tr",["td","\u7231\u6C99\u5C3C\u4E9A\u8BED"],["td","et_EE"]],["tr",["td","\u6CE2\u65AF\u8BED"],["td","fa_IR"]],["tr",["td","\u82AC\u5170\u8BED"],["td","fi_FI"]],["tr",["td","\u6CD5\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09"],["td","fr_BE"]],["tr",["td","\u6CD5\u8BED\uFF08\u52A0\u62FF\u5927\uFF09"],["td","fr_CA"]],["tr",["td","\u6CD5\u8BED\uFF08\u6CD5\u56FD\uFF09"],["td","fr_FR"]],["tr",["td","\u7231\u5C14\u5170\u8BED"],["td","ga_IE"]],["tr",["td","\u52A0\u5229\u897F\u4E9A\u8BED\uFF08\u897F\u73ED\u7259\uFF09"],["td","gl_ES"]],["tr",["td","\u5E0C\u4F2F\u6765\u8BED"],["td","he_IL"]],["tr",["td","\u5370\u5730\u8BED"],["td","hi_IN"]],["tr",["td","\u514B\u7F57\u5730\u4E9A\u8BED"],["td","hr_HR"]],["tr",["td","\u5308\u7259\u5229\u8BED"],["td","hu_HU"]],["tr",["td","\u4E9A\u7F8E\u5C3C\u4E9A"],["td","hy_AM"]],["tr",["td","\u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED"],["td","id_ID"]],["tr",["td","\u610F\u5927\u5229\u8BED"],["td","it_IT"]],["tr",["td","\u51B0\u5C9B\u8BED"],["td","is_IS"]],["tr",["td","\u65E5\u8BED"],["td","ja_JP"]],["tr",["td","\u683C\u9C81\u5409\u4E9A\u8BED"],["td","ka_GE"]],["tr",["td","\u9AD8\u68C9\u8BED"],["td","km_KH"]],["tr",["td","\u5317\u5E93\u5C14\u5FB7\u8BED"],["td","kmr_IQ"]],["tr",["td","\u5361\u7EB3\u8FBE\u8BED"],["td","kn_IN"]],["tr",["td","\u54C8\u8428\u514B\u8BED"],["td","kk_KZ"]],["tr",["td","\u97E9\u8BED/\u671D\u9C9C\u8BED"],["td","ko_KR"]],["tr",["td","\u7ACB\u9676\u5B9B\u8BED"],["td","lt_LT"]],["tr",["td","\u62C9\u8131\u7EF4\u4E9A\u8BED"],["td","lv_LV"]],["tr",["td","\u9A6C\u5176\u987F\u8BED"],["td","mk_MK"]],["tr",["td","\u9A6C\u62C9\u96C5\u62C9\u59C6\u8BED"],["td","ml_IN"]],["tr",["td","\u8499\u53E4\u8BED"],["td","mn_MN"]],["tr",["td","\u9A6C\u6765\u8BED (\u9A6C\u6765\u897F\u4E9A)"],["td","ms_MY"]],["tr",["td","\u632A\u5A01\u8BED"],["td","nb_NO"]],["tr",["td","\u5C3C\u6CCA\u5C14\u8BED"],["td","ne_NP"]],["tr",["td","\u8377\u5170\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09"],["td","nl_BE"]],["tr",["td","\u8377\u5170\u8BED"],["td","nl_NL"]],["tr",["td","\u6CE2\u5170\u8BED"],["td","pl_PL"]],["tr",["td","\u8461\u8404\u7259\u8BED(\u5DF4\u897F)"],["td","pt_BR"]],["tr",["td","\u8461\u8404\u7259\u8BED"],["td","pt_PT"]],["tr",["td","\u7F57\u9A6C\u5C3C\u4E9A\u8BED"],["td","ro_RO"]],["tr",["td","\u4FC4\u7F57\u65AF\u8BED"],["td","ru_RU"]],["tr",["td","\u50E7\u4F3D\u7F57\u8BED"],["td","si_LK"]],["tr",["td","\u65AF\u6D1B\u4F10\u514B\u8BED"],["td","sk_SK"]],["tr",["td","\u585E\u5C14\u7EF4\u4E9A\u8BED"],["td","sr_RS"]],["tr",["td","\u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED"],["td","sl_SI"]],["tr",["td","\u745E\u5178\u8BED"],["td","sv_SE"]],["tr",["td","\u6CF0\u7C73\u5C14\u8BED"],["td","ta_IN"]],["tr",["td","\u6CF0\u8BED"],["td","th_TH"]],["tr",["td","\u571F\u8033\u5176\u8BED"],["td","tr_TR"]],["tr",["td","\u571F\u5E93\u66FC"],["td","tk_TK"]],["tr",["td","\u4E4C\u5C14\u90FD\u8BED (\u5DF4\u57FA\u65AF\u5766)"],["td","ur_PK"]],["tr",["td","\u4E4C\u514B\u5170\u8BED"],["td","uk_UA"]],["tr",["td","\u4E4C\u5179\u522B\u514B\u8BED"],["td","uz_UZ"]],["tr",["td","\u8D8A\u5357\u8BED"],["td","vi_VN"]],["tr",["td","\u7B80\u4F53\u4E2D\u6587"],["td","zh_CN"]],["tr",["td","\u7E41\u4F53\u4E2D\u6587\uFF08\u4E2D\u56FD\u9999\u6E2F\uFF09"],["td","zh_HK"]],["tr",["td","\u7E41\u4F53\u4E2D\u6587\uFF08\u4E2D\u56FD\u53F0\u6E7E\uFF09"],["td","zh_TW"]]]],["p","\u5177\u4F53\u7684\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",["a",{title:null,href:"/components/config-provider"},"ConfigProvider \u6587\u6863"],"\u3002"],["h2","\u589E\u52A0\u8BED\u8A00\u5305"],["p","\u5982\u679C\u4F60\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u4F60\u5728 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/locale/en_US.tsx"},"\u82F1\u6587\u8BED\u8A00\u5305"]," \u7684\u57FA\u7840\u4E0A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\uFF0C\u53EF\u4EE5\u53C2\u8003 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/pull/21387"},"\u963F\u585E\u62DC\u7586\u8BED\u7684 PR"],"\u3002"],["p","\u57FA\u672C\u6B65\u9AA4\u5982\u4E0B\uFF1A"],["ol",["li",["p","Fork ",["code","antd"]," \u5E76 git clone \u5230\u672C\u5730\uFF0C\u5207\u6362\u5230 ",["code","feature"]," \u5206\u652F\uFF0C\u6267\u884C\u4E00\u6B21\u62C9\u53D6\u786E\u4FDD\u6700\u65B0\uFF0C\u57FA\u4E8E ",["code","feature"]," \u5206\u652F\u5207\u6362\u4E00\u4E2A\u65B0\u5206\u652F\uFF0C\u4EE5\u4E0B\u5DE5\u4F5C\u5C06\u5728\u65B0\u5206\u652F\u5B8C\u6210\u3002"],["pre",{lang:"bash",highlighted:`<span class="token function">git</span> clone git@github.com:<span class="token operator">&lt;</span>your organization<span class="token operator">></span>/ant-design.git
<span class="token function">cd</span> ant-design/
<span class="token function">git</span> remote add upstream origin git@github.com:ant-design/ant-design.git
<span class="token function">git</span> checkout -b <span class="token operator">&lt;</span>your new branch name<span class="token operator">></span>`},["code",`git clone git@github.com:<your organization>/ant-design.git
cd ant-design/
git remote add upstream origin git@github.com:ant-design/ant-design.git
git checkout -b <your new branch name>`]]],["li",["p","\u4E3A ",["a",{title:null,href:"https://github.com/react-component/picker"},"rc-picker"]," \u6DFB\u52A0\u5BF9\u5E94\u8BED\u8A00\uFF0C\u53C2\u8003 ",["a",{title:null,href:"https://github.com/react-component/picker/blob/master/src/locale/en_US.ts"},"\u8FD9\u4E2A"],"\u3002"]],["li",["p","\u4E3A ",["a",{title:null,href:"https://github.com/react-component/pagination"},"rc-pagination"]," \u6DFB\u52A0\u5BF9\u5E94\u8BED\u8A00\uFF0C\u53C2\u8003 ",["a",{title:null,href:"https://github.com/react-component/pagination/blob/master/src/locale/en_US.js"},"\u8FD9\u4E2A"],"\u3002"]],["li",["p","\u7B49\u5F85 ",["code","rc-picker"]," \u548C ",["code","rc-pagination"]," \u53D1\u5E03\u542B\u4E0A\u8FF0\u5185\u5BB9\u7684\u6700\u4F4E\u7248\u672C\u3002"]],["li",["p","\u53C2\u8003 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/pull/21387"},"\u963F\u585E\u62DC\u7586\u8BED\u7684 PR"]," \u5411 ",["code","antd"]," \u53D1\u8D77 PR\uFF0C\u5B8C\u5584\u5BF9\u5E94\u8BED\u8A00\u7684\u5176\u4ED6\u5185\u5BB9\u548C\u66F4\u65B0 ",["code","rc-picker"]," \u548C ",["code","rc-pagination"]," \u7248\u672C\u3002"]],["li",["p","\u5728 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/locale-provider/__tests__/index.test.js"},"index.test.js"]," \u6DFB\u52A0\u8BE5\u8BED\u8A00\u7684\u6D4B\u8BD5\u7528\u4F8B\u3002"]],["li",["p","\u66F4\u65B0 snapshot\uFF0C\u5728\u8FD9\u4E4B\u524D\u6216\u8BB8\u4F60\u8FD8\u9700\u8981\u5148\u5220\u9664 ",["code","node_modules"]," \u548C lock \u6587\u4EF6 \uFF08",["code","yarn.lock"]," or ",["code","package-lock.json"],"\uFF09 \u5E76\u5168\u65B0\u5B89\u88C5\u3002"],["pre",{lang:"bash",highlighted:'<span class="token function">npm</span> run <span class="token function">test</span> -- components/locale-provider -u'},["code","npm run test -- components/locale-provider -u"]]],["li",["p","\u66F4\u65B0 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/docs/react/i18n.zh-CN.md"},"docs/react/i18n.zh-CN.md"]," \u548C ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/docs/react/i18n.zh-CN.md"},"docs/react/i18n.zh-CN.md"],"\uFF0C\u5C06\u5BF9\u5E94\u8BED\u8A00\u6DFB\u52A0\u5230\u6587\u6863\u5217\u8868\u3002"]],["li",["p","\u89C2\u5BDF CI \u662F\u5426\u901A\u8FC7\uFF0C\u82E5\u672A\u901A\u8FC7\uFF0C\u6839\u636E\u65E5\u5FD7\u8FDB\u884C\u4FEE\u6539\u76F4\u81F3\u901A\u8FC7\u3002"]],["li",["p","\u4E07\u4E8B\u4FF1\u5907\u7B49\u5F85 review \u3002"]]],["h2","i18n \u9879\u76EE\u793A\u4F8B"],["p","\u4F60\u53EF\u4EE5\u53C2\u8003 ",["a",{title:null,href:"https://pro.ant.design/docs/i18n-cn"},"Ant Design Pro \u56FD\u9645\u5316\u6587\u6863"]," \u67E5\u770B\u5B8C\u6574\u7684\u56FD\u9645\u5316\u9879\u76EE\u793A\u4F8B\u3002"]],meta:{order:10,title:"\u56FD\u9645\u5316",filename:"docs/react/i18n.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#ConfigProvider",title:"ConfigProvider"},"ConfigProvider"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u589E\u52A0\u8BED\u8A00\u5305",title:"\u589E\u52A0\u8BED\u8A00\u5305"},"\u589E\u52A0\u8BED\u8A00\u5305"]],["li",["a",{className:"bisheng-toc-h2",href:"#i18n-\u9879\u76EE\u793A\u4F8B",title:"i18n \u9879\u76EE\u793A\u4F8B"},"i18n \u9879\u76EE\u793A\u4F8B"]]]}}}]);
