import { Iro } from "./types.mts";

/**
 * VitePress 主题 Sakurairo 的配置文件
 */
export default [
    {
        title: '你好，世界！',
        url: '/posts/helloworld',
        thumb: '/res/posts/helloworld.jpg',
        date: '2024-10-4',
        description: '在这篇文章中，我们深入探讨了“你好，世界！”这一短语的起源、意义以及它的重要性。从最初的 C 语言教科书到今天所有编程语言的入门教程，这个短语已经成为了传统。通过不同编程语言的示例，我们看到了“你好，世界！”的普遍性。这个短语提醒我们，每次我们开始学习新语言时，我们都在向一个充满可能性的新世界问好。'
    }, {
        title: '演示页面',
        url: '/example',
        date: '2024-9-6',
        description: '该页面通过展示 Markdown 格式的不同元素，包括标题、段落、列表、引用、超链接、代码块、表格和 LaTeX 公式，来呈现 Markdown 的多样化内容展示能力。页面涵盖了从一级到六级的标题、列表、引用内容、超链接、代码示例、表格布局、注音符号，以及 LaTeX 公式的渲染。这些丰富的格式和功能，为内容创建提供了强大支持。'
    }, {
        title: '自述文件',
        url: '/readme',
        date: '2024-8-25',
        description: 'Sakurairo 是一个从 WordPress 移植到 VitePress 的主题，它利用 Vue3 提高了二次开发的效率和可复用性。该主题适用于静态站点，响应速度快，易于部署。它提供了快速开始指南，包括安装依赖、开发模式运行、构建和本地部署的命令。用户可以自定义主题，包括基本配置和高级自定义，如插槽使用和内部组件重写。此外，它还支持站内搜索功能，并有详细的发展规划，包括更多样式实现、增强可扩展性、优化项目结构等。项目遵循 GPLv2 开源协议，鼓励社区参与和贡献。'
    }
] satisfies Iro.Post[];