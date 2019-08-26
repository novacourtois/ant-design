(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1477:function(t,e){t.exports={content:["section",["p","Cascade selection box."],["h2","When To Use"],["ul",["li",["p","When you need to select from a set of associated data set. Such as province/city/district, company level, things classification."]],["li",["p","When selecting from a large data set, with multi-stage classification separated for easy selection."]],["li",["p","Chooses cascade items in one float layer for better user experience."]]]],meta:{category:"Components",type:"Data Entry",title:"Cascader",filename:"components/cascader/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#Methods",title:"Methods"},"Methods"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","<Cascader options={options} onChange={onChange} />"]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","allowClear"],["td","whether allow clear"],["td","boolean"],["td","true"],["td"]],["tr",["td","autoFocus"],["td","get focus when component mounted"],["td","boolean"],["td","false"],["td"]],["tr",["td","changeOnSelect"],["td","change value on each selection if set to true, see above demo for details"],["td","boolean"],["td","false"],["td"]],["tr",["td","className"],["td","additional css class"],["td","string"],["td","-"],["td"]],["tr",["td","defaultValue"],["td","initial selected value"],["td","string","[","]"],["td","[","]"],["td"]],["tr",["td","disabled"],["td","whether disabled select"],["td","boolean"],["td","false"],["td"]],["tr",["td","displayRender"],["td","render function of displaying selected options"],["td",["code","(label, selectedOptions) => ReactNode"]],["td",["code","label => label.join(' / ')"]],["td"]],["tr",["td","expandTrigger"],["td","expand current item when click or hover, one of 'click' 'hover'"],["td","string"],["td","'click'"],["td"]],["tr",["td","fieldNames"],["td","custom field name for label and value and children (before 3.7.0 it calls ",["code","filedNames"]," which is typo）)"],["td","object"],["td",["code","{ label: 'label', value: 'value', children: 'children' }"]],["td","3.7.0"]],["tr",["td","getPopupContainer"],["td","Parent Node which the selector should be rendered to. Default to ",["code","body"],". When position issues happen, try to modify it into scrollable content and position it relative.",["a",{title:null,href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},"example"]],["td","Function(triggerNode)"],["td","() => document.body"],["td"]],["tr",["td","loadData"],["td","To load option lazily, and it cannot work with ",["code","showSearch"]],["td",["code","(selectedOptions) => void"]],["td","-"],["td"]],["tr",["td","notFoundContent"],["td","Specify content to show when no result matches."],["td","string"],["td","'Not Found'"],["td"]],["tr",["td","options"],["td","data options of cascade"],["td",["a",{title:null,href:"#Option"},"Option"],"[]"],["td","-"],["td"]],["tr",["td","placeholder"],["td","input placeholder"],["td","string"],["td","'Please select'"],["td"]],["tr",["td","popupClassName"],["td","additional className of popup overlay"],["td","string"],["td","-"],["td"]],["tr",["td","popupPlacement"],["td","use preset popup align config from builtinPlacements：",["code","bottomLeft"]," ",["code","bottomRight"]," ",["code","topLeft"]," ",["code","topRight"]],["td","string"],["td",["code","bottomLeft"]],["td"]],["tr",["td","popupVisible"],["td","set visible of cascader popup"],["td","boolean"],["td","-"],["td"]],["tr",["td","showSearch"],["td","Whether show search input in single mode."],["td","boolean","|","object"],["td","false"],["td"]],["tr",["td","size"],["td","input size, one of ",["code","large"]," ",["code","default"]," ",["code","small"]],["td","string"],["td",["code","default"]],["td"]],["tr",["td","style"],["td","additional style"],["td","string"],["td","-"],["td"]],["tr",["td","suffixIcon"],["td","The custom suffix icon"],["td","ReactNode"],["td","-"],["td","3.10.0"]],["tr",["td","value"],["td","selected value"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","onChange"],["td","callback when finishing cascader select"],["td",["code","(value, selectedOptions) => void"]],["td","-"],["td"]],["tr",["td","onPopupVisibleChange"],["td","callback when popup shown or hidden"],["td",["code","(value) => void"]],["td","-"],["td"]]]],["p","Fields in ",["code","showSearch"],":"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","filter"],["td","The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded."],["td",["code","function(inputValue, path): boolean"]],["td"],["td"]],["tr",["td","limit"],["td","Set the count of filtered items"],["td","number ","|"," false"],["td","50"],["td","3.11.0"]],["tr",["td","matchInputWidth"],["td","Whether the width of result list equals to input's"],["td","boolean"],["td"],["td"]],["tr",["td","render"],["td","Used to render filtered options."],["td",["code","function(inputValue, path): ReactNode"]],["td"],["td"]],["tr",["td","sort"],["td","Used to sort filtered options."],["td",["code","function(a, b, inputValue)"]],["td"],["td"]]]],["h3","Option"],["pre",{lang:"typescript",highlighted:'<span class="token keyword">interface</span> <span class="token class-name">Option</span> <span class="token punctuation">{</span>\n  value<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n  label<span class="token operator">?</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span>\n  disabled<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n  children<span class="token operator">?</span><span class="token punctuation">:</span> Option<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","interface Option {\n  value: string;\n  label?: React.ReactNode;\n  disabled?: boolean;\n  children?: Option[];\n}"]],["h2","Methods"],["table",["thead",["tr",["th","Name"],["th","Description"],["th","Version"]]],["tbody",["tr",["td","blur()"],["td","remove focus"],["td"]],["tr",["td","focus()"],["td","get focus"],["td"]]]],["style","\n.ant-cascader-picker {\n  width: 300px;\n}\n"]]}}}]);