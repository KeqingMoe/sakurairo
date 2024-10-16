<script setup>
import { useData } from 'vitepress'
import { onMounted, onUnmounted, provide, ref, watch } from 'vue';

import NotFound from './NotFound.vue';
import Footer from './components/Footer.vue';
import Home from './components/Home/Home.vue';
import Nav from './components/Header/Nav.vue';
import Panel from './components/Panel.vue';
import NavMo from './components/Header/NavMo.vue';
import Post from './components/Post/Post.vue'

import { data as iro } from './iro.data';

const { frontmatter, page } = useData();

const iroDark = ref(
    localStorage.getItem('iro-theme') == 'dark'
);
const iroNavOpen = ref(false);
const isAtTop = ref(true);

provide('iroDark', iroDark);
provide('iroNavOpen', iroNavOpen);
provide('isAtTop', isAtTop);

watch(iroDark, iroDark_ => {
    localStorage.setItem('iro-theme', iroDark_ ? 'dark' : 'light');
});

const scrollPercent = ref(0);

const closeNavMo = () => {
    const htmlEl = document.getElementsByTagName('html')[0];
    htmlEl.classList.remove('iro-open-nav');
    iroNavOpen.value = false;
};

const scrollHandle = () => {
    let a = document.documentElement.scrollTop,
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight;
    isAtTop.value = window.scrollY == 0;
    scrollPercent.value = Math.round(a / b * 100);
};
scrollHandle();

onMounted(() => {
    addEventListener('scroll', scrollHandle);
});
onUnmounted(() => {
    removeEventListener('scroll', scrollHandle);
});

const iroStyleConv = str => `--iro-${str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}`;
const root = document.querySelector(':root');
for (let key in iro.style) {
    root.style.setProperty(iroStyleConv(key), iro.style[key]);
}

</script>

<template>
    <div class="iro-container iro-root"
        :class="{ 'iro-nav-open': iroNavOpen, 'iro-light': !iroDark, 'iro-dark': iroDark }">
        <div class="iro-scroll-percent" id="bar" :style="{ width: scrollPercent + '%' }"></div>
        <div class="iro-nav-mo-container" :class="{ 'iro-nav-open': iroNavOpen }">
            <NavMo :iro-nav-open="iroNavOpen"></NavMo>
        </div>
        <Panel></Panel>
        <Nav></Nav>
        <div class="iro-main-container" :class="{ 'iro-nav-open': iroNavOpen }" @click="closeNavMo">
            <div v-if="frontmatter.layout !== false" class="iro-layout" :class="frontmatter.pageClass">
                <slot v-if="page.isNotFound" name="iro-not-found">
                    <NotFound />
                </slot>
                <slot v-else-if="frontmatter.layout == 'page'" name="iro-page">
                    <Content />
                </slot>
                <slot v-else-if="frontmatter.layout == 'home'" name="iro-home">
                    <Home>
                        <template v-slot:iro-home-page>
                            <slot name="iro-home-page"></slot>
                        </template>
                    </Home>
                </slot>
                <slot v-else-if="frontmatter.layout == 'post'" name="iro-post">
                    <Post>
                        <Content class="vp-doc" />
                    </Post>
                </slot>
                <slot v-else name="iro-other">
                    <Content />
                </slot>
            </div>

            <Footer>
                <template v-slot:iro-footer>
                    <slot name="iro-footer"></slot>
                </template>
            </Footer>
        </div>
    </div>
</template>


<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Noto+Serif|Noto+Serif+SC|Noto+Sans+SC|Dela+Gothic+One|Fira+Code&display=swap);

.iro-root {
    color: var(--iro-font-color);
    
    &.iro-light {
        --iro-global-font-weight: 300;
        --iro-font-color: #505050;
        --iro-dm-bg-transparency: 0.8;

        // --iro-var-1: rgb(255, 255, 255, 0.9); 这行必须注释掉，因为我不知道为什么在注释掉下面的那行后这一行会透传到里面去
        @media (max-width:860px) {

            //只能是单独摘出来写在这里了
            .iro-nav-mo-container {
                background-color: rgb(255, 255, 255, 0.9);
            }

        }
    }

    &.iro-dark {
        --iro-font-color: #CCCCCC;
        background-color: rgb(51, 51, 51);

        // --iro-var-1: transparent; 不知道为什么这里必须删掉这一行才能还原原本的色彩
        :deep(img) {
            filter: brightness(0.8);
        }

        :deep(.iro-scroll-percent) {
            background-color: var(--iro-theme-skin-dark);
        }
    }
}

.iro-container {
    transition: all 0.8s ease !important;

    &.iro-nav-open {
        overflow: hidden;
    }
}

.iro-scroll-percent {
    position: fixed;
    top: 0;
    height: 3px;
    background: var(--iro-theme-skin-matching, #F9D938);
    transition-property: width, background-color;
    transition-duration: 1s, 1s;
    z-index: 99999;
}


.iro-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

@media (max-width:860px) {
    .iro-nav-mo-container {
        background-color: var(--iro-var-1);
        width: 250px;
        max-width: 250px !important;
        height: 100%;
        z-index: 9999;
        position: fixed;
        top: 0;
        bottom: 0;
        display: block;
        overflow-x: hidden !important;
        overflow-y: auto;
        transition: all .5s ease-in-out !important;
        left: -250px;

        &.iro-nav-open {
            transform: translateX(250px);
        }
    }

    .iro-main-container {
        transition: all .5s ease-in-out !important;
        position: relative;
        z-index: 2;

        &.iro-nav-open {
            transform: translateX(250px);
            overflow: hidden;

            &::before {
                content: "";
                width: 100%;
                height: 100%;
                position: fixed;
                background-color: rgba(0, 0, 0, 0.4);
                z-index: 99;
            }
        }

    }


}
</style>
