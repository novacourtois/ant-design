(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{1647:function(n,t){n.exports={content:["article",{},["h2","安装和初始化"],["p","请确保电脑上已经安装了最新版的 ",["a",{title:null,href:"https://yarnpkg.com"},"yarn"]," 或者 ",["a",{title:null,href:"https://www.npmjs.com/"},"npm"],"。"],["p","使用 yarn 创建项目。"],["pre",{lang:"bash",highlighted:"$ yarn create react-app antd-demo-ts --typescript"},["code","$ yarn create react-app antd-demo-ts --typescript"]],["p","如果你使用的是 npm（接下来我们都会用 yarn 作为例子，如果你习惯用 npm 也没问题）。"],["pre",{lang:"bash",highlighted:"$ npx create-react-app antd-demo-ts --typescript"},["code","$ npx create-react-app antd-demo-ts --typescript"]],["p","然后我们进入项目并启动。"],["pre",{lang:"bash",highlighted:'$ <span class="token function">cd</span> antd-demo-ts\n$ yarn start'},["code","$ cd antd-demo-ts\n$ yarn start"]],["p","此时浏览器会访问 ",["a",{title:null,href:"http://localhost:3000/"},"http://localhost:3000/"]," ，看到 ",["code","Welcome to React"]," 的界面就算成功了。"],["h2","引入 antd"],["pre",{lang:"bash",highlighted:"$ yarn add antd"},["code","$ yarn add antd"]],["p","修改 ",["code","src/App.tsx"],"，引入 antd 的按钮组件。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'antd/es/button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./App.css\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>'},["code","import React, { Component } from 'react';\nimport Button from 'antd/es/button';\nimport './App.css';\n\nclass App extends Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <Button type=\"primary\">Button</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;"]],["p","修改 ",["code","src/App.css"]," 引入 antd 的样式。"],["pre",{lang:"css",highlighted:'<span class="token atrule"><span class="token rule">@import</span> <span class="token string">\'~antd/dist/antd.css\'</span><span class="token punctuation">;</span></span>\n\n<span class="token selector"><span class="token class">.App</span> </span><span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token number">...</span>'},["code","@import '~antd/dist/antd.css';\n\n.App {\n  text-align: center;\n}\n\n..."]],["p","重新启动 ",["code","yarn start"],"，现在你应该能看到页面上已经有了 antd 的蓝色按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 create-react-app 的",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md"},"官方文档"],"。"],["h2","高级配置"],["p","我们现在已经把组件成功运行起来了，但是在实际开发过程中还有很多问题，例如上面的例子实际上加载了全部的 antd 组件的样式（对前端性能是个隐患）。"],["p","此时我们需要对 create-react-app 的默认配置进行自定义，这里我们使用 ",["a",{title:null,href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired"]," （一个对 create-react-app 进行自定义配置的社区解决方案）。"],["p","引入 react-app-rewired 并修改 package.json 里的启动配置。由于新的 ",["a",{title:null,href:"https://github.com/timarney/react-app-rewired#alternatives"},"react-app-rewired@2.x"]," 版本的关系，你还需要安装 ",["a",{title:null,href:"https://github.com/arackaf/customize-cra"},"customize-cra"],"。"],["pre",{lang:null,highlighted:'$ yarn add react<span class="token operator">-</span>app<span class="token operator">-</span>rewired customize<span class="token operator">-</span>cra'},["code","$ yarn add react-app-rewired customize-cra"]],["pre",{lang:"diff",highlighted:'/* package.json */\n"scripts": {\n<span class="token deleted">-   "start": "react-scripts start",</span>\n<span class="token inserted">+   "start": "react-app-rewired start",</span>\n<span class="token deleted">-   "build": "react-scripts build",</span>\n<span class="token inserted">+   "build": "react-app-rewired build",</span>\n<span class="token deleted">-   "test": "react-scripts test",</span>\n<span class="token inserted">+   "test": "react-app-rewired test",</span>\n}'},["code",'/* package.json */\n"scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build",\n-   "test": "react-scripts test",\n+   "test": "react-app-rewired test",\n}']],["p","然后在项目根目录创建一个 ",["code","config-overrides.js"]," 用于修改默认配置。"],["pre",{lang:"js",highlighted:'module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">override</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// do stuff with the webpack config...</span>\n  <span class="token keyword">return</span> config<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","module.exports = function override(config, env) {\n  // do stuff with the webpack config...\n  return config;\n};"]],["h3","使用 babel-plugin-import"],["p",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," 是一个用于按需加载组件代码和样式的 babel 插件（",["a",{title:null,href:"/docs/react/getting-started#按需加载"},"原理"],"），现在我们尝试安装它并修改 ",["code","config-overrides.js"]," 文件。"],["pre",{lang:"bash",highlighted:"$ yarn add babel-plugin-import"},["code","$ yarn add babel-plugin-import"]],["pre",{lang:"diff",highlighted:'<span class="token inserted">+ const { override, fixBabelImports } = require(\'customize-cra\');</span>\n\n<span class="token deleted">- module.exports = function override(config, env) {</span>\n<span class="token deleted">-   // do stuff with the webpack config...</span>\n<span class="token deleted">-   return config;</span>\n<span class="token deleted">- };</span>\n<span class="token inserted">+ module.exports = override(</span>\n<span class="token inserted">+   fixBabelImports(\'import\', {</span>\n<span class="token inserted">+     libraryName: \'antd\',</span>\n<span class="token inserted">+     libraryDirectory: \'es\',</span>\n<span class="token inserted">+     style: \'css\',</span>\n<span class="token inserted">+   }),</span>\n<span class="token inserted">+ );</span>'},["code","+ const { override, fixBabelImports } = require('customize-cra');\n\n- module.exports = function override(config, env) {\n-   // do stuff with the webpack config...\n-   return config;\n- };\n+ module.exports = override(\n+   fixBabelImports('import', {\n+     libraryName: 'antd',\n+     libraryDirectory: 'es',\n+     style: 'css',\n+   }),\n+ );"]],["p","然后移除前面在 ",["code","src/App.css"]," 里全量添加的 ",["code","@import '~antd/dist/antd.css';"]," 样式代码，并且按下面的格式引入模块。"],["pre",{lang:"diff",highlighted:"  // src/App.tsx\n  import React, { Component } from 'react';\n<span class=\"token deleted\">- import Button from 'antd/es/button';</span>\n<span class=\"token inserted\">+ import { Button } from 'antd';</span>\n  import './App.css';\n\n  class App extends Component {\n    render() {\n      return (\n        &lt;div className=\"App\">\n          &lt;Button type=\"primary\">Button&lt;/Button>\n        &lt;/div>\n      );\n    }\n  }\n\n  export default App;"},["code","  // src/App.tsx\n  import React, { Component } from 'react';\n- import Button from 'antd/es/button';\n+ import { Button } from 'antd';\n  import './App.css';\n\n  class App extends Component {\n    render() {\n      return (\n        <div className=\"App\">\n          <Button type=\"primary\">Button</Button>\n        </div>\n      );\n    }\n  }\n\n  export default App;"]],["p","最后重启 ",["code","yarn start"]," 访问页面，antd 组件的 js 和 css 代码都会按需加载，你在控制台也不会看到这样的",["a",{title:null,href:"https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png"},"警告信息"],"。关于按需加载的原理和其他方式可以阅读",["a",{title:null,href:"/docs/react/getting-started#按需加载"},"这里"],"。"],["h3","自定义主题"],["p","按照 ",["a",{title:null,href:"/docs/react/customize-theme"},"配置主题"]," 的要求，自定义主题需要用到 less 变量覆盖功能。我们可以引入 ",["code","customize-cra"]," 中提供的 less 相关的函数 ",["a",{title:null,href:"https://github.com/arackaf/customize-cra#addlessloaderloaderoptions"},"addLessLoader"]," 来帮助加载 less 样式，同时修改 ",["code","config-overrides.js"]," 文件如下。"],["pre",{lang:"diff",highlighted:"<span class=\"token deleted\">- const { override, fixBabelImports } = require('customize-cra');</span>\n<span class=\"token inserted\">+ const { override, fixBabelImports, addLessLoader } = require('customize-cra');</span>\n\nmodule.exports = override(\n  fixBabelImports('import', {\n    libraryName: 'antd',\n    libraryDirectory: 'es',\n<span class=\"token deleted\">-   style: 'css',</span>\n<span class=\"token inserted\">+   style: true,</span>\n  }),\n<span class=\"token inserted\">+ addLessLoader({</span>\n<span class=\"token inserted\">+   javascriptEnabled: true,</span>\n<span class=\"token inserted\">+   modifyVars: { '@primary-color': '#1DA57A' },</span>\n<span class=\"token inserted\">+ }),</span>\n);"},["code","- const { override, fixBabelImports } = require('customize-cra');\n+ const { override, fixBabelImports, addLessLoader } = require('customize-cra');\n\nmodule.exports = override(\n  fixBabelImports('import', {\n    libraryName: 'antd',\n    libraryDirectory: 'es',\n-   style: 'css',\n+   style: true,\n  }),\n+ addLessLoader({\n+   javascriptEnabled: true,\n+   modifyVars: { '@primary-color': '#1DA57A' },\n+ }),\n);"]],["p","这里利用了 ",["a",{title:null,href:"https://github.com/webpack/less-loader#less-options"},"less-loader"]," 的 ",["code","modifyVars"]," 来进行主题配置，变量和其他配置方式可以参考 ",["a",{title:null,href:"/docs/react/customize-theme"},"配置主题"]," 文档。"],["p","修改后重启 ",["code","yarn start"],"，如果看到一个绿色的按钮就说明配置成功了。"],["blockquote",["p","对于自定义 webpack 配置，你也可以使用 ",["a",{title:null,href:"https://github.com/sharegate/craco"},"craco"]," 和 ",["a",{title:null,href:"https://github.com/FormAPI/craco-antd"},"craco-antd"]," 来实现和 customize-cra 一样的修改 create-react-app 配置的功能。"]],["h2","其他方案"],["p","先按照 ",["a",{title:null,href:"/docs/react/use-with-create-react-app.en-US.md"},"在 create-react-app 中使用"]," 中的说明操作，再配置 TypeScript 开发环境。"],["p","你也可以使用 ",["a",{title:null,href:"https://www.npmjs.com/package/react-scripts-ts-antd"},"react-scripts-ts-antd"],"，其中包括了 ts-import-plugin，react-app-rewired，scss，less 等插件。你可以通过只运行一个命令来创建一个没有任何配置的新项目。"],["ul",["li",["p",["a",{title:null,href:"https://github.com/SZzzzz/react-scripts-ts-antd"},"Create React apps (with Typescript and antd) with no build configuration"]]],["li",["p",["span","react-app-rewire-typescript"]]],["li",["p",["a",{title:null,href:"https://github.com/Brooooooklyn/ts-import-plugin"},"ts-import-plugin"]]],["li",["p",["a",{title:null,href:"https://facebook.github.io/create-react-app/docs/adding-typescript"},"create-react-app Adding TypeScript"]]],["li",["p",["a",{title:null,href:"https://vincenttunru.com/migrate-create-react-app-typescript-to-create-react-app/"},"Migrating from create-react-app-typescript to Create React App"]]]]],meta:{order:4,title:"在 TypeScript 中使用",filename:"docs/react/use-in-typescript.zh-CN.md"},description:["section",["p","使用 ",["code","create-react-app"]," 一步步地创建一个 TypeScript 项目，并引入 antd。"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#安装和初始化",title:"安装和初始化"},"安装和初始化"]],["li",["a",{className:"bisheng-toc-h2",href:"#引入-antd",title:"引入 antd"},"引入 antd"]],["li",["a",{className:"bisheng-toc-h2",href:"#高级配置",title:"高级配置"},"高级配置"]],["li",["a",{className:"bisheng-toc-h2",href:"#其他方案",title:"其他方案"},"其他方案"]]]}}}]);