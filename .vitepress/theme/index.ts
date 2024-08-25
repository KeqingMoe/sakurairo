

import type { Theme } from 'vitepress';
import { h } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons'
library.add(fas,far);

import vitepressNprogress from 'vitepress-plugin-nprogress';
import 'vitepress-plugin-nprogress/lib/css/index.css'

import Layout from './Layout.vue';
import './style.scss';

export default {
    Layout,
    enhanceApp({ app, router, siteData }) {
        app.component('fa-i',FontAwesomeIcon);
        vitepressNprogress({app,router,siteData});
    }
} satisfies Theme;
