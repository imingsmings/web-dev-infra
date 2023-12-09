(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{3858:function(t,n){t.exports={content:["section",["p","Modal dialogs."],["h2","When To Use"],["p","When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use ",["code","Modal"]," to create a new floating layer over the current page to get user feedback or display information. Additionally, if you need show a simple confirmation dialog, you can use ",["code","antd.Modal.confirm()"],", and so on."]],meta:{type:"Feedback",category:"Components",title:"Modal",cover:"https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg",filename:"components/modal/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","afterClose"],["td","Specify a function that will be called when modal is closed completely"],["td","function"],["td","-"],["td"]],["tr",["td","bodyStyle"],["td","Body style for modal body element. Such as height, padding etc"],["td","CSSProperties"],["td"],["td"]],["tr",["td","cancelButtonProps"],["td","The cancel button props"],["td",["a",{title:null,href:"/components/button/#API"},"ButtonProps"]],["td","-"],["td"]],["tr",["td","cancelText"],["td","Text of the Cancel button"],["td","ReactNode"],["td",["code","Cancel"]],["td"]],["tr",["td","centered"],["td","Centered Modal"],["td","boolean"],["td","false"],["td"]],["tr",["td","closable"],["td","Whether a close (x) button is visible on top right of the modal dialog or not"],["td","boolean"],["td","true"],["td"]],["tr",["td","closeIcon"],["td","Custom close icon"],["td","ReactNode"],["td","<","CloseOutlined />"],["td"]],["tr",["td","confirmLoading"],["td","Whether to apply loading visual effect for OK button or not"],["td","boolean"],["td","false"],["td"]],["tr",["td","destroyOnClose"],["td","Whether to unmount child components on onClose"],["td","boolean"],["td","false"],["td"]],["tr",["td","focusTriggerAfterClose"],["td","Whether need to focus trigger element after dialog is closed"],["td","boolean"],["td","true"],["td","4.9.0"]],["tr",["td","footer"],["td","Footer content, set as ",["code","footer={null}"]," when you don't need default buttons"],["td","ReactNode"],["td","(OK and Cancel buttons)"],["td"]],["tr",["td","forceRender"],["td","Force render Modal"],["td","boolean"],["td","false"],["td"]],["tr",["td","getContainer"],["td","The mounted node for Modal but still display at fullscreen. To match React 18 concurrent requirement, ",["code","getContainer"]," should always return same dom since ",["code","4.24.x"]],["td","HTMLElement ","|"," () => HTMLElement ","|"," Selectors ","|"," false"],["td","document.body"],["td"]],["tr",["td","keyboard"],["td","Whether support press esc to close"],["td","boolean"],["td","true"],["td"]],["tr",["td","mask"],["td","Whether show mask or not"],["td","boolean"],["td","true"],["td"]],["tr",["td","maskClosable"],["td","Whether to close the modal dialog when the mask (area outside the modal) is clicked"],["td","boolean"],["td","true"],["td"]],["tr",["td","maskStyle"],["td","Style for modal's mask element"],["td","CSSProperties"],["td"],["td"]],["tr",["td","modalRender"],["td","Custom modal content render"],["td","(node: ReactNode) => ReactNode"],["td","-"],["td","4.7.0"]],["tr",["td","okButtonProps"],["td","The ok button props"],["td",["a",{title:null,href:"/components/button/#API"},"ButtonProps"]],["td","-"],["td"]],["tr",["td","okText"],["td","Text of the OK button"],["td","ReactNode"],["td",["code","OK"]],["td"]],["tr",["td","okType"],["td","Button ",["code","type"]," of the OK button"],["td","string"],["td",["code","primary"]],["td"]],["tr",["td","style"],["td","Style of floating layer, typically used at least for adjusting the position"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","title"],["td","The modal dialog's title"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","open"],["td","Whether the modal dialog is visible or not. Use ",["code","visible"]," under 4.23.0 (",["a",{title:null,href:"/docs/react/faq#why-open"},"why?"],")"],["td","boolean"],["td","false"],["td","4.23.0"]],["tr",["td","width"],["td","Width of the modal dialog"],["td","string ","|"," number"],["td","520"],["td"]],["tr",["td","wrapClassName"],["td","The class name of the container of the modal dialog"],["td","string"],["td","-"],["td"]],["tr",["td","zIndex"],["td","The ",["code","z-index"]," of the Modal"],["td","number"],["td","1000"],["td"]],["tr",["td","onCancel"],["td","Specify a function that will be called when a user clicks mask, close button on top right or Cancel button"],["td","function(e)"],["td","-"],["td"]],["tr",["td","onOk"],["td","Specify a function that will be called when a user clicks the OK button"],["td","function(e)"],["td","-"],["td"]]]],["h4","Note"],["ul",["li",["p","The state of Modal will be preserved at it's component lifecycle by default, if you wish to open it with a brand new state everytime, set ",["code","destroyOnClose"]," on it."]],["li",["p","There is a situation that using ",["code","<Modal />"]," with Form, which won't clear fields value when closing Modal even you have set ",["code","destroyOnClose"],". You need ",["code","<Form preserve={false} />"]," in this case."]],["li",["p",["code","Modal.method()"]," RTL mode only supports hooks."]]],["h3","Modal.method()"],["p","There are five ways to display the information based on the content's nature:"],["ul",["li",["p",["code","Modal.info"]]],["li",["p",["code","Modal.success"]]],["li",["p",["code","Modal.error"]]],["li",["p",["code","Modal.warning"]]],["li",["p",["code","Modal.confirm"]]]],["p","The items listed above are all functions, expecting a settings object as parameter. The properties of the object are follows:"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","afterClose"],["td","Specify a function that will be called when modal is closed completely"],["td","function"],["td","-"],["td","4.9.0"]],["tr",["td","autoFocusButton"],["td","Specify which button to autofocus"],["td","null ","|"," ",["code","ok"]," ","|"," ",["code","cancel"]],["td",["code","ok"]],["td"]],["tr",["td","bodyStyle"],["td","Body style for modal body element. Such as height, padding etc"],["td","CSSProperties"],["td"],["td","4.8.0"]],["tr",["td","cancelButtonProps"],["td","The cancel button props"],["td",["a",{title:null,href:"/components/button/#API"},"ButtonProps"]],["td","-"],["td"]],["tr",["td","cancelText"],["td","Text of the Cancel button with Modal.confirm"],["td","string"],["td",["code","Cancel"]],["td"]],["tr",["td","centered"],["td","Centered Modal"],["td","boolean"],["td","false"],["td"]],["tr",["td","className"],["td","The className of container"],["td","string"],["td","-"],["td"]],["tr",["td","closable"],["td","Whether a close (x) button is visible on top right of the confirm dialog or not"],["td","boolean"],["td","false"],["td","4.9.0"]],["tr",["td","closeIcon"],["td","Custom close icon"],["td","ReactNode"],["td","undefined"],["td","4.9.0"]],["tr",["td","content"],["td","Content"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","getContainer"],["td","Return the mount node for Modal"],["td","HTMLElement ","|"," () => HTMLElement ","|"," Selectors ","|"," false"],["td","document.body"],["td"]],["tr",["td","icon"],["td","Custom icon"],["td","ReactNode"],["td","<","QuestionCircle />"],["td"]],["tr",["td","keyboard"],["td","Whether support press esc to close"],["td","boolean"],["td","true"],["td"]],["tr",["td","mask"],["td","Whether show mask or not."],["td","boolean"],["td","true"],["td"]],["tr",["td","maskClosable"],["td","Whether to close the modal dialog when the mask (area outside the modal) is clicked"],["td","boolean"],["td","false"],["td"]],["tr",["td","maskStyle"],["td","Style for modal's mask element"],["td","object"],["td","{}"],["td"]],["tr",["td","okButtonProps"],["td","The ok button props"],["td",["a",{title:null,href:"/components/button/#API"},"ButtonProps"]],["td","-"],["td"]],["tr",["td","okText"],["td","Text of the OK button"],["td","string"],["td",["code","OK"]],["td"]],["tr",["td","okType"],["td","Button ",["code","type"]," of the OK button"],["td","string"],["td",["code","primary"]],["td"]],["tr",["td","style"],["td","Style of floating layer, typically used at least for adjusting the position"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","title"],["td","Title"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","width"],["td","Width of the modal dialog"],["td","string ","|"," number"],["td","416"],["td"]],["tr",["td","wrapClassName"],["td","The class name of the container of the modal dialog"],["td","string"],["td","-"],["td","4.18.0"]],["tr",["td","zIndex"],["td","The ",["code","z-index"]," of the Modal"],["td","number"],["td","1000"],["td"]],["tr",["td","onCancel"],["td","Specify a function that will be called when the user clicks the Cancel button. The parameter of this function is a function whose execution should include closing the dialog. If the function does not take any parameter (",["code","!onCancel.length"],") then modal dialog will be closed unless returned value is ",["code","true"]," (",["code","!!onCancel()"],"). You can also just return a promise and when the promise is resolved, the modal dialog will also be closed"],["td","function(close)"],["td","-"],["td"]],["tr",["td","onOk"],["td","Specify a function that will be called when the user clicks the OK button. The parameter of this function is a function whose execution should include closing the dialog. If the function does not take any parameter (",["code","!onOk.length"],") then modal dialog will be closed unless returned value is ",["code","true"]," (",["code","!!onOk()"],"). You can also just return a promise and when the promise is resolved, the modal dialog will also be closed"],["td","function(close)"],["td","-"],["td"]]]],["p","All the ",["code","Modal.method"],"s will return a reference, and then we can update and close the modal dialog by the reference."],["pre",{lang:"jsx",highlighted:`<span class="token keyword">const</span> modal <span class="token operator">=</span> Modal<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

modal<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token punctuation">:</span> <span class="token string">'Updated title'</span><span class="token punctuation">,</span>
  content<span class="token punctuation">:</span> <span class="token string">'Updated content'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// on 4.8.0 or above, you can pass a function to update modal</span>
modal<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>prevConfig <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>prevConfig<span class="token punctuation">,</span>
  title<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>prevConfig<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> (New)\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

modal<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`const modal = Modal.info();

modal.update({
  title: 'Updated title',
  content: 'Updated content',
});

// on 4.8.0 or above, you can pass a function to update modal
modal.update(prevConfig => ({
  ...prevConfig,
  title: \`\${prevConfig.title} (New)\`,
}));

modal.destroy();`]],["ul",["li",["p",["code","Modal.destroyAll"]]]],["p",["code","Modal.destroyAll()"]," could destroy all confirmation modal dialogs(",["code","Modal.confirm|success|info|error|warning"],"). Usually, you can use it in router change event to destroy confirm modal dialog automatically without use modal reference to close( it's too complex to use for all modal dialogs)"],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> browserHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router'</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// router change</span>
browserHistory<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  Modal<span class="token punctuation">.</span><span class="token function">destroyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`import { browserHistory } from 'react-router';

// router change
browserHistory.listen(() => {
  Modal.destroyAll();
});`]],["h3","Modal.useModal()"],["p","When you need using Context, you can use ",["code","contextHolder"]," which created by ",["code","Modal.useModal"]," to insert into children. Modal created by hooks will get all the context where ",["code","contextHolder"]," are. Created ",["code","modal"]," has the same creating function with ",["code","Modal.method"],"."],["pre",{lang:"jsx",highlighted:`<span class="token keyword">const</span> <span class="token punctuation">[</span>modal<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> Modal<span class="token punctuation">.</span><span class="token function">useModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  modal<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment" spellcheck="true">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>contextHolder<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>`},["code",`const [modal, contextHolder] = Modal.useModal();

React.useEffect(() => {
  modal.confirm({
    // ...
  });
}, []);

return <div>{contextHolder}</div>;`]],["h2","FAQ"],["h3","Why content not update when Modal closed?"],["p","Modal will use memo to avoid content jumping when closed. Also, if you use Form in Modal, you can reset ",["code","initialValues"]," by calling ",["code","resetFields"]," in effect."],["h3","Why I can not access context, redux, ConfigProvider ",["code","locale/prefixCls"]," in Modal.xxx?"],["p","antd will dynamic create React instance by ",["code","ReactDOM.render"]," when call Modal methods. Whose context is different with origin code located context."],["p","When you need context info (like ConfigProvider context), you can use ",["code","Modal.useModal"]," to get ",["code","modal"]," instance and ",["code","contextHolder"]," node. And put it in your children:"],["pre",{lang:"tsx",highlighted:`<span class="token keyword">const</span> <span class="token punctuation">[</span>modal<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> Modal<span class="token punctuation">.</span><span class="token function">useModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token operator">/</span><span class="token operator">/</span> <span class="token keyword">then</span> call modal<span class="token punctuation">.</span>confirm instead of Modal<span class="token punctuation">.</span>confirm

return <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Context1<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token string">"Ant"</span><span class="token operator">></span>
    {<span class="token operator">/</span><span class="token operator">*</span> contextHolder is <span class="token keyword">in</span> Context1<span class="token punctuation">,</span> which means modal will get context of Context1 <span class="token operator">*</span><span class="token operator">/</span>}
    {contextHolder}
    <span class="token operator">&lt;</span>Context2<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token string">"Design"</span><span class="token operator">></span>
      {<span class="token operator">/</span><span class="token operator">*</span> contextHolder is out of Context2<span class="token punctuation">,</span> which means modal will <span class="token operator">not</span> get context of Context2 <span class="token operator">*</span><span class="token operator">/</span>}
    <span class="token operator">&lt;</span><span class="token operator">/</span>Context2<span class="token punctuation">.</span>Provider<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Context1<span class="token punctuation">.</span>Provider<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>`},["code",`const [modal, contextHolder] = Modal.useModal();

// then call modal.confirm instead of Modal.confirm

return (
  <Context1.Provider value="Ant">
    {/* contextHolder is in Context1, which means modal will get context of Context1 */}
    {contextHolder}
    <Context2.Provider value="Design">
      {/* contextHolder is out of Context2, which means modal will not get context of Context2 */}
    </Context2.Provider>
  </Context1.Provider>
);`]],["p",["strong","Note:"]," You must insert ",["code","contextHolder"]," into your children with hooks. You can use origin method if you do not need context connection."],["h3","How to disable motion?"],["p","You can config ",["code",'transitionName=""']," and ",["code",'maskTransitionName=""']," to remove motion class. But you should note that these prop is internal usage which we don't promise exist in next major version."],["h3","How to set static methods prefixCls \uFF1F"],["p","You can config with ",["a",{title:null,href:"/components/config-provider/#ConfigProvider.config()-4.13.0+"},["code","ConfigProvider.config"]]]]}}}]);
