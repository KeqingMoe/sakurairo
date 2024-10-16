<script setup>
import { useData } from 'vitepress';
import { inject, provide, ref } from 'vue';

import NavSearch from './NavSearch.vue';

import { data as iro } from '../../iro.data';

const iroDark = inject('iroDark');
const isAtTop = inject('isAtTop');
const iroNavOpen = inject('iroNavOpen');

const iroShowSearch = ref(false);
provide('iroShowSearch', iroShowSearch);
const toggleSearch = () => iroShowSearch.value = !iroShowSearch.value;

</script>

<template>
    <header class="iro-header iro-no-select iro-root"
        :class="{ 'iro-yya': !isAtTop, 'iro-nav-open': iroNavOpen, 'iro-light': !iroDark, 'iro-dark': iroDark }"
        role="banner">
        <div class="iro-header-container">
            <div class="iro-site-branding">
                <div class="iro-site-icon">
                    <a href="/"><img :src="iro.nav.icon"></a>
                </div>
            </div>
            <div class="iro-search-box" @click="toggleSearch">
                <fa-i icon="fa-solid fa-magnifying-glass" v-if="iro?.search" />
            </div>
            <nav class="iro-links" v-if="iro.nav?.links">
                <ul>
                    <li v-for="link in iro.nav.links"><a :href="link.url">{{ link.title }}</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <NavSearch></NavSearch>
</template>

<style scoped lang="scss">
.iro-root {
    &.iro-light {
        --iro-var-1: rgba(255, 255, 255, 0.9);
        --iro-var-2: rgba(255, 255, 255, 0.7);
        --iro-var-3: #FFFFFF;
        --iro-var-4: var(--iro-theme-skin);
    }

    &.iro-dark {
        --iro-var-1: #333333;
        --iro-var-2: rgba(38, 38, 38, 0.8);
        --iro-var-3: #7d7d7d30;
        --iro-var-4: #CCCCCC;
    }
}

.iro-header {
    width: 95%;
    height: 60px;
    transition: all 1s ease !important;
    position: fixed;
    left: 2.5%;
    top: 2.5%;
    z-index: 999;
    border-radius: 20px;
    word-break: keep-all;
    border: 1.5px solid transparent;

    @media (max-width: 860px) {
        background: 0 0;
        width: 100%;
        top: 0;
        left: 0;
        border-radius: 0;

        &.iro-nav-open {
            opacity: 0;
        }
    }

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
        background-color: var(--iro-var-1) !important;
    }

    // WP 版 Sakuriaro 的背景色对浅色与深色模式采用了不同的处理逻辑，这里统一为浅色模式的逻辑
    &.iro-yya {
        transition: all 1s ease;
        border-radius: 15px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);

        background: var(--iro-var-2);
        border-bottom: 1.5px solid var(--iro-var-3);
        width: 100%;
        left: 0;
        top: 0;
        border-radius: 0;
    }

}

.iro-header-container {
    width: 100%;
    display: block;
    margin: 0 auto;
    padding: 0 20px;

    nav {
        position: relative;
        float: right;
        animation: iro-anim-search-box .2s;
        display: block;
        margin: 7.5px 0 0 0;
        font-size: 16px;
        font-weight: var(--global-font-weight);

        @media (max-width: 860px) {
            display: none;
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            display: inline-block;
            animation: iro-anim-fade-in-left 1s;
            max-width: 76vw;

            li {
                float: left;
                margin-left: 28px;
                position: relative;
                transition: all 1s ease;

                a {
                    padding: 10px 0;
                    display: inline-block;
                    color: var(--iro-var-4);

                    &:hover {
                        color: var(--iro-theme-skin-matching, #F9D938);
                    }

                    &::after {
                        content: "";
                        display: block;
                        position: absolute;
                        bottom: -5px;
                        height: 4px;
                        background-color: var(--iro-theme-skin-matching, #F9D938);
                        width: 100%;
                        border-radius: 30px;
                        max-width: 0;
                        transition: max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    &:hover::after {
                        max-width: 100%;
                    }
                }
            }
        }
    }
}

.iro-site-branding {
    animation: iro-anim-top 1s;
    float: left;
    position: relative;
    height: 60px;
    line-height: 60px;
    margin-left: -6px;

    @media (max-width: 860px) {
        float: right;
        height: 50px;
        line-height: 43px;
        margin-right: -30px;
        margin-top: -10px;
    }


    a {
        color: #464646;
        font-weight: 400;
        line-height: 40px;
        white-space: nowrap;
        font-family: 'Noto Serif SC';
    }

    img {
        height: 40px;
        margin-left: 10px;
        margin-top: 10px;
        opacity: .75;
        transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;

        @media (max-width: 860px) {
            height: 40px;
            line-height: 40px;
            vertical-align: middle;
            margin-right: 15px;
            margin-top: 20px;
        }
    }
}

.iro-site-icon {
    margin: 0;

    @media (max-width: 860px) {
        font-size: 20px;
        margin-right: 10px;
    }
}

.iro-search-box {
    color: var(--iro-theme-skin, #505050);
    cursor: pointer;
    transition: all .3s ease-in-out;
    font-weight: var(--iro-global-font-weight);
    animation: iro-anim-search-box 1s;
    border: 2px solid transparent;
    float: right;
    height: auto;
    font-size: 18px;
    width: auto;
    margin: 10px 0;
    border-radius: 10px;
    padding: 5px 9px;
    margin-left: 15px;

    @media (max-width: 860px) {
        display: none;
    }

    &:hover {
        color: var(--iro-theme-skin-matching);
        transition: all .3s ease-in-out;
        border: 2px solid var(--iro-theme-skin-matching);
    }

    fa-i {
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        line-height: 1;
        text-rendering: auto;
    }
}

@keyframes iro-anim-top {
    0% {
        opacity: 0;
        transform: translateX(-30px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes iro-anim-search-box {
    0% {
        opacity: 0;
        transform: translateX(30px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes iro-anim-fade-in-left {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }

    50% {
        transform: translateX(100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0%);
        opacity: 1;
    }
}
</style>
