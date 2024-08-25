# Sakurairo

将 [WordPress 主题 Sakurairo](https://github.com/mirai-mamori/Sakurairo) 移植到 VitePress。

## 特性

- 适用于 VitePress 的静态站点，响应速度远快于 WordPress，可以部署于静态站点托管平台
- 内部使用 Vue3，二次开发效率高、难度低，结构清晰，可复用性高

## 快速开始

先基于本模板存储库创建一个自己的存储库。

安装依赖：

```shell
npm install
```

以开发模式运行：
```shell
npm run dev
```

构建：
```shell
npm run build
```

本地部署：
```shell
npm run preview
```

部署于静态站点托管平台（如 GitHub Pages 或 Cloudflare Pages）的流程与其他 VitePress 项目相同。

## 自定义

### 基本自定义

基本配置存放在 `iro.ts` 中，您可以自由修改。在 `types.mts` 中可以看到 `IroConfig` 的各种属性及其用法。`iro-example.ts` 中把每一个属性都写出来了，可以用作参考，或是直接复制后修改。

在 `config.ts` 中添加 `markdown-it` 插件，默认自带<ruby>注音符号<rt>振假名</rt></ruby>插件。

直接在根目录下创建 `.md` 文件撰写文章，将图片等资源文件放在 `public/` 目录下，如同本存储库演示的一样。

使用了 Font Awesome Icons，并注册了全局组件 `<fa-i>`，使用方式请参考 [官方文档](https://docs.fontawesome.com/web/use-with/vue/style)。

### 高级自定义

可以像扩展 VitePress 默认主题一样扩展 Sakurairo，具体包括：

- 使用插槽：
  - 使用 `iro-home-page` 以自定义首页的封面之后的部分
  - 使用 `iro-signature` 以自定义签名组件
  - 使用 `iro-footer` 以在页脚添加自定义组件
  - 使用 `iro-not-found` 以自定义 404 页面
  - 使用 `iro-post` 以自定义文章页面
  - 使用 `iro-content` 以自定义其他页面
- 重写内部组件：
  - 重写 `Home.vue` 以自定义首页
  - 重写 `Panel.vue` 以自定义右下角小工具面板
  - 重写 `Footer.vue` 以自定义整个页脚
  - 重写 `Cover.vue` 以自定义首页封面
  - 重写 `CoverSocialButton.vue` 以自定义首页社交链接
  - 重写 `NavMo.vue` 以自定义移动端侧边栏
  - 重写 `NavSearch.vue` 以自定义桌面端搜索框
  - 重写 `NavHeader.vue` 以自定义导航栏
  - 重写 `NotFound.vue` 以自定义 404 页面

不过，并不建议您采用重写组件的方式，因为内部组件的名字在未来可能会频繁变动。

由于本项目刚刚立项没多久，目前功能性还差很多没有实现，请耐心等待，或参与贡献。

### 自己编写组件

您可以以 `template.vue` 为模板，它已经预设了处理浅色、深色模式的逻辑，导入 `iro.data.ts` 等功能。也可适当参考我的源代码。

### 站内搜索功能

该功能会在未来的版本中得到支持，但如果您要自己实现该功能，可以按如下的方式实现：

1. 配置 `iro.ts` ，填写 `iro.search` 字段。
2. 自己实现一个位于 ``` `http(s)://您的域名/`${iro.search.path}?${iro.search.param}=搜索内容 ``` （这是一个模板字符串）的搜索页面。

## 发展规划

- 实现更多原版 Sakurairo 的样式。
- 增强可拓展性。
- 优化项目结构和代码组织。
- 发布 npm 包。
- 评论系统。
- 统计功能。
- 辅助配置主题的控制面板或脚本。
- 站内搜索功能。
- 字体自定义。

## 其他信息

本项目受 [WordPress 主题 Sakurairo](https://github.com/mirai-mamori/Sakurairo)。因不满于 WordPress 的高占用，又舍不得 Sakurairo 主题的设计，我决定将其移植到 VitePress 上。

目前，我暂未获得原主题作者的授权，也未联系，如有任何侵权，请联系我。

项目的开发是困难的事情，如果你喜欢（原） Sakurairo 主题，有参与本项目的打算，请发起 Issues 或 PR，或在我的个人主页找到我的联系方式并联系我。
