import { defineConfigWithTheme } from 'vitepress';
import { ruby } from "@mdit/plugin-ruby";
import iro from './theme/iro';

export default defineConfigWithTheme({
    title: iro.title,
    description: iro.description,
    cleanUrls: true,
    ignoreDeadLinks: true,
    markdown: {
        config: md => {
            md.use(ruby);
        },
        math: true
    },
    lastUpdated: true,
    head: [
        ['link', { rel: 'icon', href: iro.favicon }],
    ],
    lang: 'zh',
});
