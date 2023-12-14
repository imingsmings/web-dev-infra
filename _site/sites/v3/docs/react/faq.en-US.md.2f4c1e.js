(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{1632:function(e,t){e.exports={content:["article",{},["h3","Are you going to provide Sass/Stylus(etc.) style file?"],["p","No plan, but you can convert Less to Sass/Stylus(etc.) with tools that you can find on Google."],["h3",["code","Select Dropdown DatePicker TimePicker Popover Popconfirm"]," disappears when I click another popup component inside it. How do I resolve this?"],["p","This has been fixed since ",["code","3.11.x"],". If you're using an older version, you can use ",["code","<Select getPopupContainer={trigger => trigger.parentNode}>"]," to render a component inside Popover. (Or other ",["code","getXxxxContainer"]," props)"],["p",["a",{title:null,href:"https://ant.design/components/select/#Select-props"},"https://ant.design/components/select/#Select-props"]],["p","related issue: ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/3487"},"#3487"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/3438"},"#3438"]],["h3",["code","Select Dropdown DatePicker TimePicker Popover Popconfirm"]," scrolls with the page?"],["p","Use ",["code","<Select getPopupContainer={trigger => trigger.parentNode}>"]," (",["a",{title:null,href:"https://ant.design/components/select-cn/#Select-props"},"API reference"],") to render a component inside the scroll area. If you need to config this globally in your application, try ",["code","<ConfigProvider getPopupContainer={trigger => trigger.parentNode}>"]," (",["a",{title:null,href:"https://ant.design/components/config-provider-cn/#API"},"API reference"],")"],["p","related issue: ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/3487"},"#3487"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/3438"},"#3438"]],["h3","How do I modify the default theme of Ant Design?"],["p","See: ",["a",{title:null,href:"https://ant.design/docs/react/customize-theme"},"https://ant.design/docs/react/customize-theme"]," ."],["h3","Would you supply other themes?"],["p","No, we follow Ant Design specification. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/1241"},"https://github.com/ant-design/ant-design/issues/1241"]],["h3","How to modify ",["code","Menu"],"/",["code","Button"],"(etc.)'s style?"],["p","You can override its style but we don't recommend doing so. antd is not only a set of React components but also a design specification."],["h3","I just want to use ",["code","Menu"],"/",["code","Button"],"(etc.), but it seems that I have to import the whole of antd and its style."],["p","Try ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"],", or import what you need in this way:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Menu <span class="token keyword">from</span> <span class="token string">\'antd/es/menu\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'antd/es/menu/style/css\'</span><span class="token punctuation">;</span>'},["code","import Menu from 'antd/es/menu';\nimport 'antd/es/menu/style/css';"]],["p","or (ES6 way with tree shaking):"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> Breadcrumb<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>'},["code","import { Menu, Breadcrumb, Icon } from 'antd';"]],["h3","How can I optimize momentjs bundle size with webpack?"],["p","See: ",["a",{title:null,href:"https://github.com/jmblog/how-to-optimize-momentjs-with-webpack"},"https://github.com/jmblog/how-to-optimize-momentjs-with-webpack"]],["h3","How to replace momentjs to Day.js to reduce bundle size？"],["p","We provide ",["code","antd-dayjs-webpack-plugin"]," plugin to replace ",["code","momentjs"]," to ",["code","Day.js"]," directly without changing a line of existing code. More info at ",["a",{title:null,href:"https://github.com/ant-design/antd-dayjs-webpack-plugin"},"antd-dayjs-webpack-plugin"],"."],["h3","It doesn't work when I change ",["code","defaultValue"]," dynamically."],["p","The ",["code","defaultXxxx"]," (like ",["code","defaultValue"],") of ",["code","Input"],"/",["code","Select"],"(etc...) only works on the first render. It is a specification of React. Please read ",["a",{title:null,href:"https://facebook.github.io/react/docs/forms.html#controlled-components"},"React's documentation"],"."],["h3","I set the ",["code","value"]," of ",["code","Input"],"/",["code","Select"],"(etc.), and then it cannot be changed by user's action."],["p","Try ",["code","defaultValue"]," or ",["code","onChange"]," to change ",["code","value"],", and please read ",["a",{title:null,href:"https://facebook.github.io/react/docs/forms.html#controlled-components"},"React's documentation"],"."],["h3","antd overrides my global styles"],["p","Yes, antd is designed to develop a complete background application, we override some global styles for styling convenience, and it can't be removed now. More info at ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/4331"},"https://github.com/ant-design/ant-design/issues/4331"]," ."],["p","Alternatively, follow the instructions in ",["a",{title:null,href:"docs/react/customize-theme#How-to-avoid-modifying-global-styles-?"},"How to avoid modifying global styles?"]],["h3","I cannot install ",["code","antd"]," and ",["code","antd"],"'s dependencies in mainland China."],["p","Long live the Girl Friend Wall! And try ",["a",{title:null,href:"http://npm.taobao.org/"},"cnpm"],"."],["h3","I set ",["code","dependencies.antd"]," as git repository in package.json, but it doesn't work."],["p","Yes, please install ",["code","antd"]," with npm or yarn."],["h3",["code","message"]," and ",["code","notification"]," is lower case, but other components are capitalized. Typo?"],["p","No, as ",["code","message"]," is just a function, not a React Component."],["h3",["code","antd"]," doesn't work well in mobile."],["p","Please check ",["a",{title:null,href:"http://mobile.ant.design"},"And Design Mobile"]," for details. ",["code","antd"]," has not been optimized to do so. You may try ",["a",{title:null,href:"https://github.com/react-component/"},"react-component"],", those repositories which start with 'm-' 'rn-' are designed for mobile."],["h3","Does ",["code","antd"]," supply standalone files like 'React'?"],["p","Yes, you can ",["a",{title:null,href:"https://ant.design/docs/react/install?locale=en-US#Import-in-Browser"},"import ",["code","antd"]," with script tag"],". But we recommend using ",["code","npm"]," to import ",["code","antd"],", it is simple and easy to maintain."],["h3","I can't visit ",["code","icon"]," in my network environment."],["p","You should deploy the iconfont files to your network by following this ",["a",{title:null,href:"https://github.com/ant-design/antd-init/tree/7c1a33cadb98f2fd8688fe527dd7f98215b9bced/examples/local-iconfont"},"example"],". ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/1070"},"#1070"]],["p","After 3.9.x ",["a",{title:null,href:"/components/icon#svg-icons"},"we are using svg icon"],", so you don't need to deploy iconfont locally anymore."],["h3","How do I extend antd's components?"],["p","If you need some features which should not be included in antd, try to extend antd's component with ",["a",{title:null,href:"https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775"},"HOC"],". ",["a",{title:null,href:"https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.eeu8q01s1"},"more"]],["h3","How do I fix dynamic style when open Content Security Policy (CSP)?"],["p","You can configure ",["code","nonce"]," by ",["a",{title:null,href:"/components/config-provider/#Content-Security-Policy"},"ConfigProvider"],"."],["h3","When I set ",["code","mode"]," to DatePicker/RangePicker, I cannot select year or month anymore?"],["p","In a real world development, you may need a YearPicker, MonthRangePicker or WeekRangePicker. You are trying to add ",["code","mode"]," to DatePicker/RangePicker expected to implement those pickers. However, the DatePicker/RangePicker cannot be selected and the panels won't close now."],["ul",["li",["p","Reproduction link: ",["a",{title:null,href:"https://codesandbox.io/s/dank-brook-v1csy"},"https://codesandbox.io/s/dank-brook-v1csy"]]],["li",["p","Same issues：",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/15572"},"#15572"],", ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/16436"},"#16436"],", ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/11938"},"#11938"],", ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/11735"},"#11735"],", ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/11586"},"#11586"],", ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/10425"},"#10425"],", ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/11053"},"#11053"]]]],["p","Like ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/11586#issuecomment-429189877"},"the explaination"]," here, that is because ",["code",'<DatePicker mode="year" />']," do not equal to ",["code","YearPicker"],", ",["code",'<RangePicker mode="month" />']," do not equal to ",["code","MonthRangePicker"]," either. The ",["code","mode"]," property was added to support ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/5190"},"showing time picker panel in DatePicker"]," in antd 3.0, which simply control the displayed panel and won't change the original date picking behavior of ",["code","DatePicker/RangePicker"]," (for instance you still need to click date cell to finish selection in a DatePicker, whatever the ",["code","mode"]," is)."],["h5","Workaround"],["p","You can refer to ",["a",{title:null,href:"https://juejin.im/post/5cf65c366fb9a07eca6968f9"},"this article"]," or ",["a",{title:null,href:"https://www.cnblogs.com/zyl-Tara/p/10197177.html"},"this article"],", using ",["code","mode"]," and ",["code","onPanelChange"]," to encapsulate a ",["code","YearPicker"]," or ",["code","MonthRangePicker"]," for your needs. Or you can wait for our ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/16911"},"antd@4.0"],", in which we are planing to ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/4524#issuecomment-480576884"},"add more XxxPickers"]," for those requirments."],["h3","How to spell Ant Design correctly?"],["ul",["li",["p","✅ ",["strong","Ant Design"],": Capitalized with space, for the design language."]],["li",["p","✅ ",["strong","antd"],": all lowercase, for the React UI library."]],["li",["p","✅ ",["strong","ant.design"],"：For ant.design website url."]]],["p","Here are some typical wrong examples:"],["ul",["li",["p","❌ AntD"]],["li",["p","❌ antD"]],["li",["p","❌ Antd"]],["li",["p","❌ ant design"]],["li",["p","❌ AntDesign"]],["li",["p","❌ antdesign"]],["li",["p","❌ Antdesign"]]],["h3","Do you guys have any channel for donation, like PayPal or Alipay?"],["p",["a",{title:null,href:"https://opencollective.com/ant-design"},"https://opencollective.com/ant-design"]],["hr"],["h2","Errors and Warnings"],["p","Here are some errors & warnings that you may meet while using antd, but most of them are not bugs of antd."],["h3","Adjacent JSX elements must be wrapped in an enclosing tag"],["p","An ",["a",{title:null,href:"http://stackoverflow.com/questions/25034994/how-to-correctly-wrap-few-td-tags-for-jsxtransformer"},"answer from StackOverflow"],", and please read ",["a",{title:null,href:"http://facebook.github.io/react/docs/displaying-data.html#components-are-just-like-functions"},"React's documentation"],"."],["h3","React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components)"],["p","Please make sure that you import ",["code","antd"],"'s components correctly. Read the corresponding documentation of the ",["code","antd"],"'s version which you use, and pay attention to typos."],["h3","rm is not recognized as an internal or external command"],["p","Please read this ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/650#issuecomment-164966511"},"issue"],", or try Linux/Unix."],["h3","Failed propType: Invalid prop ",["code","AAA"]," of type ",["code","BBB"]," supplied to ",["code","CCC"],", expected ",["code","DDD"],". Check the render method of ",["code","EEE"],"."],["p","Please read the corresponding documentation of the ",["code","antd"],"'s version which you use, and make sure that you pass values with correct type to ",["code","antd"],"'s components,"],["h3","Unknown option: xxx/package.json.presets"],["p","An ",["a",{title:null,href:"http://stackoverflow.com/questions/33685365/unknown-option-babelrc-presets"},"answer from Stack Overflow"],"."],["h3","Invariant Violation: findComponentRoot(...): Unable to find element."],["p","You may import React twice. Set React & ReactDOM as external, if you are using webpack, See ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/525"},"#525"],". If you are using others (browserify, etc...), please read its documentation and find options which can set React & ReactDOM as external."]],meta:{order:9,title:"FAQ",filename:"docs/react/faq.en-US.md"},description:["section",["p","Here are the frequently asked questions about Ant Design and antd that you should look up before you ask in the community or create a new issue. We also maintain a ",["a",{title:null,href:"http://u.ant.design/faq"},"FAQ issues label"]," for common github issues."]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Errors-and-Warnings",title:"Errors and Warnings"},"Errors and Warnings"]]]}}}]);