<script setup>
import { useData } from 'vitepress';
import { inject, ref } from 'vue';

import { data as iro } from '../iro.data';

const iroDark = inject('iroDark');

</script>

<template>
    <div class="iro-root" :class="{ 'iro-light': !iroDark, 'iro-dark': iroDark }">
        <footer class="iro-footer" :class="{ 'iro-light': !iroDark, 'iro-dark': iroDark }">
            <div class="iro-header-container">
                <div class="iro-sakura-icon">
                    <img src="/res/iro/sakura_icon.svg" draggable="false" alt="sakura icon">
                </div>
                <p v-if="iro?.footer?.beforeSlot" v-html="iro.footer.content"></p>
                <slot name="iro-footer"></slot>
                <p v-if="!iro?.footer?.beforeSlot" v-html="iro.footer.content"></p>
                <span class="iro-theme-info">
                    <a href="https://github.keqing.moe/keqingmoe/sakurairo">Theme VitePress Sakurairo</a> <a
                        href="https://keqing.moe">by KeqingMoe</a>
                </span>
            </div>
        </footer>
    </div>
</template>

<style scoped lang="scss">
.iro-root {
    &.iro-light {
        --iro-var-1: rgba(255, 255, 255, 0.8);
    }

    &.iro-dark {
        --iro-var-1: rgba(51, 51, 51);
    }
}

.iro-footer {
    position: relative !important;
    padding: max(2%, 45px);
    background: var(--iro-var-1);
    animation: iro-blur .8s;
    transition: all 0.8s ease;
    display: block;

    font-size: 13px;
    font-weight: var(--iro-global-font-weight);

    .iro-sakura-icon {
        width: max-content;
        height: max-content;
        margin: auto;
        margin-bottom: 16px;

        img {
            animation: iro-slow-rotate 10s linear infinite;
        }
    }

    :deep(a) {
        color: #B9B9B9;

        &:hover {
            color: var(--iro-theme-skin-matching, #F9D938);
        }
    }

    :deep(p) {
        color: #666666;
    }
}

.iro-header-container {
    margin: 0 auto;
    max-width: var(--vp-layout-max-width);
    text-align: center;
}

@keyframes iro-blur {
    0% {
        -webkit-filter: blur(10px);
        -moz-filter: blur(10px);
        -ms-filter: blur(10px);
        filter: blur(10px);
    }

    50% {
        -webkit-filter: blur(5px);
        -moz-filter: blur(5px);
        -ms-filter: blur(5px);
        filter: blur(5px);
    }

    100% {
        -webkit-filter: blur(0px);
        -moz-filter: blur(0px);
        -ms-filter: blur(0px);
        filter: blur(0px);
    }
}


@keyframes iro-slow-rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
