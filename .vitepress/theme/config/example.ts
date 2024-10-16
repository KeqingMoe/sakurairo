import { Iro } from "./types.mts";

/**
 * VitePress 主题 Sakurairo 的配置文件示例
 */
export default {
    title: "Sakurairo",
    titleTemplate: "Sakurairo 主题演示站点",
    description: "Hello world!",
    favicon: '/favicon.png',
    cover: {
        avatar: '/avatar.png',
        signature: '正在努力移植到 VitePress！',
        background: {
            random: true,
            desktop: 'https://t.alcy.cc/fj/',
            mobile: 'https://t.alcy.cc/mp/',
        }
    },
    nav: {
        icon: '/icon.png',
        links: [
            { title: '首页', url: '/' },
            { title: '404 页面演示', url: '/404' },
            { title: '源码', url: 'https://github.com/keqingmoe/sakurairo' },
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
                name: 'GitHub',
            },
            {
                icon: 'tg',
                link: 'https://t.me/keqingmoe',
                name: 'Telegram',
            },
            {
                icon: 'mail',
                link: 'mailto:me@keqing.moe',
                name: 'E-mail',
            },
        ]
    },
    footer: {
        content: 'Hello world!',
        beforeSlot: false,
    },
    error404: {
        title: '404 Not Found',
        text: '这里什么都没有...',
    },
    style: {
        themeSkin: '#8e78c6',
        themeSkinMatching: '#5892eb',
        themeSkinDark: '#211a39',

        menuRadius: '10px',
        menuSelectionRadius: '10px',
    },
    posts:[
        {
            title:'这不是一篇文章',
            url:'/404',
            date:'2024-10-16',
            description:'点进去是 404 页面。'
        }
    ]
} satisfies Iro.Config;
