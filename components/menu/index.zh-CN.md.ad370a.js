(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1542:function(t,n){t.exports={content:["section",["p","为页面和功能提供导航的菜单列表。"],["h2","何时使用"],["p","导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。"],["p","更多布局和导航的使用可以参考：",["a",{title:null,href:"/components/layout"},"通用布局"],"。"]],meta:{category:"Components",cols:1,type:"导航",title:"Menu",subtitle:"导航菜单",filename:"components/menu/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menu</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>菜单项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SubMenu</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>子菜单<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>子菜单项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SubMenu</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>menu</span><span class="token punctuation">></span></span>'},["code",'<menu>\n  <Menu.Item>菜单项</Menu.Item>\n  <SubMenu title="子菜单">\n    <Menu.Item>子菜单项</Menu.Item>\n  </SubMenu>\n</menu>']],["h3","Menu"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","defaultOpenKeys"],["td","初始展开的 SubMenu 菜单项 key 数组"],["td","string","[","]"],["td"],["td"]],["tr",["td","defaultSelectedKeys"],["td","初始选中的菜单项 key 数组"],["td","string","[","]"],["td"],["td"]],["tr",["td","forceSubMenuRender"],["td","在子菜单展示之前就渲染进 DOM"],["td","boolean"],["td","false"],["td"]],["tr",["td","inlineCollapsed"],["td","inline 时菜单是否收起状态"],["td","boolean"],["td","-"],["td"]],["tr",["td","inlineIndent"],["td","inline 模式的菜单缩进宽度"],["td","number"],["td","24"],["td"]],["tr",["td","mode"],["td","菜单类型，现在支持垂直、水平、和内嵌模式三种"],["td","string: ",["code","vertical"]," ",["code","horizontal"]," ",["code","inline"]],["td",["code","vertical"]],["td"]],["tr",["td","multiple"],["td","是否允许多选"],["td","boolean"],["td","false"],["td"]],["tr",["td","openKeys"],["td","当前展开的 SubMenu 菜单项 key 数组"],["td","string","[","]"],["td"],["td"]],["tr",["td","selectable"],["td","是否允许选中"],["td","boolean"],["td","true"],["td"]],["tr",["td","selectedKeys"],["td","当前选中的菜单项 key 数组"],["td","string","[","]"],["td"],["td"]],["tr",["td","style"],["td","根节点样式"],["td","object"],["td"],["td"]],["tr",["td","subMenuCloseDelay"],["td","用户鼠标离开子菜单后关闭延时，单位：秒"],["td","number"],["td","0.1"],["td"]],["tr",["td","subMenuOpenDelay"],["td","用户鼠标进入子菜单后开启延时，单位：秒"],["td","number"],["td","0"],["td"]],["tr",["td","theme"],["td","主题颜色"],["td","string: ",["code","light"]," ",["code","dark"]],["td",["code","light"]],["td"]],["tr",["td","onClick"],["td","点击 MenuItem 调用此函数"],["td","function({ item, key, keyPath, domEvent })"],["td","-"],["td"]],["tr",["td","onDeselect"],["td","取消选中时调用，仅在 multiple 生效"],["td","function({ item, key, keyPath, selectedKeys, domEvent })"],["td","-"],["td"]],["tr",["td","onOpenChange"],["td","SubMenu 展开/关闭的回调"],["td","function(openKeys: string","[","])"],["td","noop"],["td"]],["tr",["td","onSelect"],["td","被选中时调用"],["td","function({ item, key, keyPath, selectedKeys, domEvent })"],["td","无  "],["td"]],["tr",["td","overflowedIndicator"],["td","自定义 Menu 折叠时的图标"],["td","ReactNode"],["td","-"],["td","3.16.0"]]]],["blockquote",["p","More options in ",["a",{title:null,href:"https://github.com/react-component/menu#api"},"rc-menu"]]],["h3","Menu.Item"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","disabled"],["td","是否禁用"],["td","boolean"],["td","false"],["td"]],["tr",["td","key"],["td","item 的唯一标志"],["td","string"],["td"],["td"]],["tr",["td","title"],["td","设置收缩时展示的悬浮标题"],["td","string"],["td"],["td","3.11.0"]]]],["h3","Menu.SubMenu"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","popupClassName"],["td","子菜单样式"],["td","string"],["td"],["td","3.22.0"]],["tr",["td","children"],["td","子菜单的菜单项"],["td","Array","<","MenuItem","|","SubMenu>"],["td"],["td"]],["tr",["td","disabled"],["td","是否禁用"],["td","boolean"],["td","false"],["td"]],["tr",["td","key"],["td","唯一标志"],["td","string"],["td"],["td"]],["tr",["td","title"],["td","子菜单项值"],["td","string","|","ReactNode"],["td"],["td"]],["tr",["td","onTitleClick"],["td","点击子菜单标题"],["td","function({ key, domEvent })"],["td"],["td"]]]],["h3","Menu.ItemGroup"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","children"],["td","分组的菜单项"],["td","MenuItem","[","]"],["td"],["td"]],["tr",["td","title"],["td","分组标题"],["td","string","|","ReactNode"],["td"],["td"]]]],["h3","Menu.Divider"],["p","菜单项分割线，只用在弹出菜单内。"]]}}}]);