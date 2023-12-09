(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1491:function(t,e){t.exports={content:["section",["p","输入或选择日期的控件。"],["h2","何时使用"],["p","当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。"]],meta:{category:"Components",type:"数据录入",title:"DatePicker",subtitle:"日期选择框",filename:"components/date-picker/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["p","日期类组件包括以下四种形式。"],["ul",["li",["p","DatePicker"]],["li",["p","MonthPicker"]],["li",["p","RangePicker"]],["li",["p","WeekPicker"]]],["h3","国际化配置"],["p","默认配置为 en-US，如果你需要设置其他语言，推荐在入口处使用我们提供的国际化组件，详见：",["a",{title:null,href:"http://ant.design/components/config-provider-cn/"},"ConfigProvider 国际化"],"。"],["p","如有特殊需求（仅修改单一组件的语言），请使用 locale 参数，参考：",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"},"默认配置"],"。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> locale <span class="token keyword">from</span> <span class="token string">\'antd/es/date-picker/locale/zh_CN\'</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>locale<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>'},["code","import locale from 'antd/es/date-picker/locale/zh_CN';\n\n<DatePicker locale={locale} />;"]],["p",["strong","注意："],"DatePicker、MonthPicker、RangePicker、WeekPicker 部分 locale 是从 value 中读取，所以请先正确设置 moment 的 locale。"],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// 默认语言为 en-US，如果你需要设置其他语言，推荐在入口文件全局设置 locale</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'moment/locale/zh-cn\'</span><span class="token punctuation">;</span>\nmoment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">\'zh-cn\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'2015-01-01\'</span><span class="token punctuation">,</span> <span class="token string">\'YYYY-MM-DD\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>'},["code","// 默认语言为 en-US，如果你需要设置其他语言，推荐在入口文件全局设置 locale\nimport moment from 'moment';\nimport 'moment/locale/zh-cn';\nmoment.locale('zh-cn');\n\n<DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />;"]],["h3","共同的 API"],["p","以下 API 为 DatePicker、MonthPicker、RangePicker, WeekPicker 共享的 API。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","allowClear"],["td","是否显示清除按钮"],["td","boolean"],["td","true"],["td"]],["tr",["td","autoFocus"],["td","自动获取焦点"],["td","boolean"],["td","false"],["td"]],["tr",["td","className"],["td","选择器 className"],["td","string"],["td","''"],["td"]],["tr",["td","dateRender"],["td","自定义日期单元格的内容"],["td","function(currentDate: moment, today: moment) => React.ReactNode"],["td","-"],["td"]],["tr",["td","disabled"],["td","禁用"],["td","boolean"],["td","false"],["td"]],["tr",["td","disabledDate"],["td","不可选择的日期"],["td","(currentDate: moment) => boolean"],["td","无"],["td"]],["tr",["td","dropdownClassName"],["td","额外的弹出日历 className"],["td","string"],["td","-"],["td","3.3.0"]],["tr",["td","getCalendarContainer"],["td","定义浮层的容器，默认为 body 上新建 div"],["td","function(trigger)"],["td","无"],["td"]],["tr",["td","locale"],["td","国际化配置"],["td","object"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"},"默认配置"]],["td"]],["tr",["td","mode"],["td","日期面板的状态（",["a",{title:null,href:"/docs/react/faq#当我指定了-DatePicker/RangePicker-的-mode-属性后，点击后无法选择年份/月份？"},"设置后无法选择年份/月份？"],"）"],["td",["code","time|date|month|year|decade"]],["td","'date'"],["td"]],["tr",["td","open"],["td","控制弹层是否展开"],["td","boolean"],["td","-"],["td"]],["tr",["td","placeholder"],["td","输入框提示文字"],["td","string","|","RangePicker","[","]"],["td","-"],["td"]],["tr",["td","popupStyle"],["td","额外的弹出日历样式"],["td","object"],["td","{}"],["td"]],["tr",["td","size"],["td","输入框大小，",["code","large"]," 高度为 40px，",["code","small"]," 为 24px，默认是 32px"],["td","string"],["td","无"],["td"]],["tr",["td","suffixIcon"],["td","自定义的选择框后缀图标"],["td","ReactNode"],["td","-"],["td","3.10.0"]],["tr",["td","style"],["td","自定义输入框样式"],["td","object"],["td","{}"],["td"]],["tr",["td","onOpenChange"],["td","弹出日历和关闭日历的回调"],["td","function(status)"],["td","无"],["td"]],["tr",["td","onPanelChange"],["td","日历面板切换的回调"],["td","function(value, mode)"],["td","-"],["td","3.12.0"]]]],["h3","共同的方法"],["table",["thead",["tr",["th","名称"],["th","描述"],["th","版本"]]],["tbody",["tr",["td","blur()"],["td","移除焦点"],["td"]],["tr",["td","focus()"],["td","获取焦点"],["td"]]]],["h3","DatePicker"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","defaultValue"],["td","默认日期，如果开始时间或结束时间为 ",["code","null"]," 或者 ",["code","undefined"],"，日期范围将是一个开区间"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","无"],["td"]],["tr",["td","defaultPickerValue"],["td","默认面板日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","无"],["td","3.10.8"]],["tr",["td","disabledTime"],["td","不可选择的时间"],["td","function(date)"],["td","无"],["td"]],["tr",["td","format"],["td","设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 ",["a",{title:null,href:"http://momentjs.com/"},"moment.js"]],["td","string ","|"," string[]"],["td",'"YYYY-MM-DD"'],["td"]],["tr",["td","renderExtraFooter"],["td","在面板中添加额外的页脚"],["td","(mode) => React.ReactNode"],["td","-"],["td"]],["tr",["td","showTime"],["td","增加时间选择功能"],["td","Object","|","boolean"],["td",["a",{title:null,href:"/components/time-picker/#API"},"TimePicker Options"]],["td"]],["tr",["td","showTime.defaultValue"],["td","设置用户选择日期时默认的时分秒，",["a",{title:null,href:"#components-date-picker-demo-disabled-date"},"例子"]],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","moment()"],["td"]],["tr",["td","showToday"],["td","是否展示“今天”按钮"],["td","boolean"],["td","true"],["td"]],["tr",["td","value"],["td","日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","无"],["td"]],["tr",["td","onChange"],["td","时间发生变化的回调"],["td","function(date: moment, dateString: string)"],["td","无"],["td"]],["tr",["td","onOk"],["td","点击确定按钮的回调"],["td","function()"],["td","-"],["td"]],["tr",["td","onPanelChange"],["td","日期面板变化时的回调"],["td","function(value, mode)"],["td","-"],["td","3.5.0"]]]],["h3","MonthPicker"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","defaultValue"],["td","默认日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","无"],["td"]],["tr",["td","defaultPickerValue"],["td","默认面板日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","无"],["td","3.10.8"]],["tr",["td","format"],["td","展示的日期格式，配置参考 ",["a",{title:null,href:"http://momentjs.com/"},"moment.js"]],["td","string"],["td",'"YYYY-MM"'],["td"]],["tr",["td","monthCellContentRender"],["td","自定义的月份内容渲染方法"],["td","function(date, locale): ReactNode"],["td","-"],["td"]],["tr",["td","renderExtraFooter"],["td","在面板中添加额外的页脚"],["td","() => React.ReactNode"],["td","-"],["td"]],["tr",["td","value"],["td","日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","无"],["td"]],["tr",["td","onChange"],["td","时间发生变化的回调，发生在用户选择时间时"],["td","function(date: moment, dateString: string)"],["td","-"],["td"]]]],["h3","WeekPicker"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","defaultValue"],["td","默认日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","defaultPickerValue"],["td","默认面板日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","无"],["td","3.10.8"]],["tr",["td","format"],["td","展示的日期格式，配置参考 ",["a",{title:null,href:"http://momentjs.com/"},"moment.js"]],["td","string"],["td",'"YYYY-wo"'],["td"]],["tr",["td","value"],["td","日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","onChange"],["td","时间发生变化的回调，发生在用户选择时间时"],["td","function(date: moment, dateString: string)"],["td","-"],["td"]],["tr",["td","renderExtraFooter"],["td","在面板中添加额外的页脚"],["td","(mode) => React.ReactNode"],["td","-"],["td","3.12.0"]]]],["h3","RangePicker"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","defaultValue"],["td","默认日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","]"],["td","无"],["td"]],["tr",["td","defaultPickerValue"],["td","默认面板日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","]"],["td","无"],["td","3.10.8"]],["tr",["td","disabledTime"],["td","不可选择的时间"],["td","function(dates: ","[","moment, moment","]",", partial: ",["code","'start'|'end'"],")"],["td","无"],["td"]],["tr",["td","format"],["td","展示的日期格式"],["td","string"],["td",'"YYYY-MM-DD HH:mm:ss"'],["td"]],["tr",["td","ranges"],["td","预设时间范围快捷选择"],["td","{ ","[","range: string]: ",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","] } ","|"," { ","[","range: string]: () => ",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","] }"],["td","无"],["td"]],["tr",["td","renderExtraFooter"],["td","在面板中添加额外的页脚"],["td","() => React.ReactNode"],["td","-"],["td"]],["tr",["td","separator"],["td","设置分隔符"],["td","string"],["td","'~'"],["td","3.14.0"]],["tr",["td","showTime"],["td","增加时间选择功能"],["td","Object","|","boolean"],["td",["a",{title:null,href:"/components/time-picker/#API"},"TimePicker Options"]],["td"]],["tr",["td","showTime.defaultValue"],["td","设置用户选择日期时默认的时分秒，",["a",{title:null,href:"#components-date-picker-demo-disabled-date"},"例子"]],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","]"],["td","[","moment(), moment()]"],["td"]],["tr",["td","value"],["td","日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","]"],["td","无"],["td"]],["tr",["td","onCalendarChange"],["td","待选日期发生变化的回调"],["td","function(dates: ","[","moment, moment","]",")"],["td","无"],["td","3.0.0"]],["tr",["td","onChange"],["td","日期范围发生变化的回调"],["td","function(dates: ","[","moment, moment","]",", dateStrings: ","[","string, string","]",")"],["td","无"],["td"]],["tr",["td","onOk"],["td","点击确定按钮的回调"],["td","function(dates: ",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","])"],["td","-"],["td"]]]],["style","\n.code-box-demo .ant-calendar-picker {\n  margin: 0 8px 12px 0;\n}\n"],["h2","FAQ"],["ul",["li",["p",["a",{title:null,href:"/docs/react/faq#当我指定了-DatePicker/RangePicker-的-mode-属性后，点击后无法选择年份/月份？"},"当我指定了 DatePicker/RangePicker 的 mode 属性后，点击后无法选择年份/月份？"]]]]]}}}]);