import { Iro } from "./types.mts";
import posts from "./posts";

/**
 * VitePress 主题 Sakurairo 的配置文件
 */
export default {
    title: "Sakurairo",
    titleTemplate: "Sakurairo 主题演示站点",
    description: "正在努力移植到 VitePress！",
    favicon: '/res/favicon.png',
    cover: {
        avatar: '/res/avatar.png',
        signature: '心有所向，日复一日，必有精进',
        background: {
            random: true,
            desktop: 'https://t.alcy.cc/fj/',
            mobile: 'https://t.alcy.cc/mp/',
        }
    },
    nav: {
        icon: '/res/icon.png',
        links: [
            { title: '首页', url: '/' },
            { title: '演示页面', url: '/example' },
            { title: '文章演示', url: '/posts/helloworld' },
            { title: '自述文件', url: '/readme' },
            { title: '404 页面演示', url: '/404' },
            { title: '使用文档', url: 'https://docs.keqing.moe/iro/' },
            { title: '源码', url: 'https://github.com/KeqingMoe/sakurairo' },
        ]
    },
    search: {
        path: '/',
        param: 's',
    },
    social: {
        links: [
            {
                icon: 'github',
                link: 'https://github.com/KeqingMoe',
                name: 'GitHub'
            },
            {
                icon: 'tg',
                link: 'https://t.me/keqingmoe',
                name: 'Telegram'
            },
            {
                icon: 'mail',
                link: 'mailto:me@keqing.moe',
                name: 'E-mail'
            },
        ]
    },
    footer: {
        content: '感谢您的使用！'
    },
    style: {
        themeSkin: '#8e78c6',
        themeSkinMatching: '#5892eb',
        themeSkinDark: '#211a39',

        menuRadius: '10px',
        menuSelectionRadius: '10px',
    },
    posts: posts
} satisfies Iro.Config;
