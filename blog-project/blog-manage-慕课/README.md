# 基于`create-react-app`脚手架搭建的 PC 项目

> 为方便后续基于`craete-react-app`脚手架套用，故不`eject`弹出
> 整套 `PC` 后台基于 `Antd` 编写

## 技术栈

> react react-redux less axios

## 项目配置

### 集成`Antd`

> [Antd 在 create-react-app 中的使用](https://ant.design/docs/react/use-with-create-react-app-cn)
>
> > `react-app-rewired`是`react`社区开源的一个修改`CRA`配置的工具，例如扩展`Create React App`的`Webpack`配置，而`customize-cra`提供了一组用于自定义利用`react-app-rewired`核心功能的`Create React App v2`配置, 可以通过`config-overrides.js`文件来对`webpack`配置进行扩展
> >
> > 基于`customize-cra`的 UI 组件库的按需引用，主题色配置，`alias`便捷路径配置
> > [customize-cra 文档](https://www.npmjs.com/package/customize-cra)

### `eslint`和`Prettier`配置

> [掘金配置参考文章]("https://juejin.im/post/5d7b9863e51d456212049214") >
> [Eslint 和 Prettier 结合使用官方文档]("https://prettier.io/docs/en/integrating-with-linters.html") > `Prettier` 自动格式化，在 `VSCODE` 的配置中，设置`editor.formatOnSave` 改为 `true`

### `CSS`样式初始化配置

> `Normalize.css` 是一个可以定制的`CSS`文件，它让不同的浏览器在渲染网页元素的时候形式更统一。
> [引用 NPM 包 normalize.css]("https://www.npmjs.com/package/normalize.css")

### 代理跨域配置

> [官方文档配置]("https://create-react-app.dev/docs/proxying-api-requests-in-development/#docsNav")

### 项目文件结构配置

- assets

> 存放静态文件

- components

> 存放公共组件

- http

> 封装`axios`以及`api`统一处理

- pages

> UI 页面编写处

- routes

> 路由配置

- style

> 样式处理

- utils

> 工具函数处理
