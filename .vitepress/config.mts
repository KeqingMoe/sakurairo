import { defineConfigWithTheme } from 'vitepress';
import { ruby } from "@mdit/plugin-ruby";
import iro from './theme/config/iro';
import { statSync } from 'fs';

export default defineConfigWithTheme({
    title: iro.title,
    titleTemplate: iro.titleTemplate,
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
    transformPageData(pageData) {
        if (pageData.isNotFound) return;

        pageData.lastUpdated = statSync(pageData.filePath).mtimeMs

        if (!('layout' in pageData.frontmatter)) {
            pageData.frontmatter.layout = 'post'
        }

        const title = '自述文件';
        if (pageData.filePath == 'readme.md') {
            pageData.title = title;
            pageData.frontmatter.title = title;
        }
    },
});
