(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1449:function(t,e){t.exports={content:["section",["p","Autocomplete function of input field."],["h2","When To Use"],["p","When there is a need for autocomplete functionality."]],meta:{category:"Components",type:"Data Entry",cols:2,title:"AutoComplete",filename:"components/auto-complete/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#Methods",title:"Methods"},"Methods"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'12345\'</span><span class="token punctuation">,</span> <span class="token string">\'23456\'</span><span class="token punctuation">,</span> <span class="token string">\'34567\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AutoComplete</span> <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dataSource<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>'},["code","const dataSource = ['12345', '23456', '34567'];\n<AutoComplete dataSource={dataSource} />;"]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","allowClear"],["td","Show clear button, effective in multiple mode only."],["td","boolean"],["td","false"],["td"]],["tr",["td","autoFocus"],["td","get focus when component mounted"],["td","boolean"],["td","false"],["td"]],["tr",["td","backfill"],["td","backfill selected item the input when using keyboard"],["td","boolean"],["td","false"],["td"]],["tr",["td","children (for customize input element)"],["td","customize input element"],["td","HTMLInputElement ",["br"],["br"]," HTMLTextAreaElement ",["br"],["br"]," ",["code","React.ReactElement<InputProps>"]],["td",["code","<Input />"]],["td"]],["tr",["td","children (for dataSource)"],["td","Data source to auto complete"],["td",["code","React.ReactElement<OptionProps>"]," ",["br"],["br"]," ",["code","Array<React.ReactElement<OptionProps>>"]],["td","-"],["td"]],["tr",["td","dataSource"],["td","Data source for autocomplete"],["td",["a",{title:null,href:"https://git.io/vMMKF"},"DataSourceItemType"],"[","]"],["td","-"],["td"]],["tr",["td","defaultActiveFirstOption"],["td","Whether active first option by default"],["td","boolean"],["td","true"],["td"]],["tr",["td","defaultValue"],["td","Initial selected option."],["td","string","|","string","[","]"],["td","-"],["td"]],["tr",["td","disabled"],["td","Whether disabled select"],["td","boolean"],["td","false"],["td"]],["tr",["td","filterOption"],["td","If true, filter options by input, if function, filter options against it. The function will receive two arguments, ",["code","inputValue"]," and ",["code","option"],", if the function returns ",["code","true"],", the option will be included in the filtered set; Otherwise, it will be excluded."],["td","boolean or function(inputValue, option)"],["td","true"],["td"]],["tr",["td","optionLabelProp"],["td","Which prop value of option will render as content of select."],["td","string"],["td",["code","children"]],["td"]],["tr",["td","placeholder"],["td","placeholder of input"],["td","string"],["td","-"],["td"]],["tr",["td","value"],["td","selected option"],["td","string","|","string","[","]","|","{ key: string, label: string","|","ReactNode }","|","Array","<","{ key: string, label: string","|","ReactNode }>"],["td","-"],["td"]],["tr",["td","onBlur"],["td","Called when leaving the component."],["td","function()"],["td","-"],["td","3.6.5"]],["tr",["td","onChange"],["td","Called when select an option or input value change, or value of input is changed"],["td","function(value)"],["td","-"],["td"]],["tr",["td","onFocus"],["td","Called when entering the component"],["td","function()"],["td","-"],["td","3.6.5"]],["tr",["td","onSearch"],["td","Called when searching items."],["td","function(value)"],["td","-"],["td"]],["tr",["td","onSelect"],["td","Called when a option is selected. param is option's value and option instance."],["td","function(value, option)"],["td","-"],["td"]],["tr",["td","defaultOpen"],["td","Initial open state of dropdown"],["td","boolean"],["td","-"],["td","3.9.3"]],["tr",["td","open"],["td","Controlled open state of dropdown"],["td","boolean"],["td","-"],["td","3.9.3"]],["tr",["td","onDropdownVisibleChange"],["td","Call when dropdown open"],["td","function(open)"],["td","-"],["td","3.9.3"]]]],["h2","Methods"],["table",["thead",["tr",["th","Name"],["th","Description"],["th","Version"]]],["tbody",["tr",["td","blur()"],["td","remove focus"],["td"]],["tr",["td","focus()"],["td","get focus"],["td"]]]],["h2","FAQ"],["h3","Why text composition system not works well with onSearch in controlled mode?"],["p","Please use ",["code","onChange"]," to manage control state. ",["code","onSearch"]," is used for searching input which is not same as ",["code","onChange"],". Besides, click on the option also not trigger the ",["code","onSearch"]," event."],["p","Related issue: ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/18230"},"#18230"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/17916"},"#17916"]]]}}}]);