<script setup>
import { computed, inject } from 'vue';

import { data as iro } from '../../iro.data';
import { useData } from 'vitepress';

const iroDark = inject('iroDark');

const { page } = useData();

const date = computed(
    () => new Date(page.value.lastUpdated)
);

</script>

<template>
    <div>
        <div class="iro-blank" style="padding-top: 75px;"></div>
        <div class="iro-root" :class="{ 'iro-light': !iroDark, 'iro-dark': iroDark }">
            <main class="iro-post-main">
                <article>
                    <header class="iro-post-header">
                        <h1 class="iro-post-title">
                            {{ $frontmatter.title ?? '文章' }}
                        </h1>
                        <p class="iro-post-ctime">
                            最后更新时间：
                            <time :datetime="date.toISOString">{{ date.toLocaleString() }}</time>
                        </p>
                        <hr />
                    </header>
                    <div class="iro-post-content">
                        <slot></slot>
                    </div>
                    <div class="iro-post-footer"></div>
                </article>
            </main>
        </div>
    </div>
</template>


<style scoped lang="scss">
.iro-root {
    width: min(860px, 100%);
    padding: 0 20px 80px 20px;
    margin: auto;
    background-color: transparent !important;
    animation: iro-main 1s;

    /*
        --iro-var-: ;
    */
    transition: --iro-var-1 0.8s ease !important;

    &::before {
        content: "";
        display: table;
        table-layout: fixed;
    }

    &.iro-light {
        --iro-var-1: rgba(255, 255, 255, 1);
    }

    &.iro-dark {
        --iro-var-1: rgba(51, 51, 51, 1);
    }
}

.iro-post-main {
    display: block;
    padding: 7.5% 0 0;
    margin-left: 10px;
}

:deep(h1),
:deep(h2),
:deep(h3),
:deep(h4),
:deep(h5),
:deep(h6) {
    margin-left: -10px;
    /* 或者你希望的任何缩进值 */
}

article {
    display: block;
    margin: 0 0 1.5em;
}

.iro-post-header {
    text-align: center;
    margin: auto;
}

.iro-post-title {
    animation: iro-fade-in-down 2s;
    font-size: 24px;
    font-weight: 300;

    &::before {
        display: block;
        content: " ";
        height: 80px;
        margin-top: -80px;
        visibility: hidden;
    }
}

.iro-post-ctime {
    font-size: 12px;
    margin: 0;
    color: #888;
    font-weight: var(--iro-global-font-weight);
    animation: iro-fade-in-down 2s;
}

hr {
    width: 30%;
    height: 0px;
    border: 0;
    margin: 20px auto;
}

.iro-post-content {
    position: relative;
}

@keyframes iro-main {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
