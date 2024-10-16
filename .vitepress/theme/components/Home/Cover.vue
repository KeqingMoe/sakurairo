<script setup>
import { useData } from 'vitepress';
import { computed, inject, ref } from 'vue';
import CoverSocialButton from './CoverSocialButton.vue';

import { data as iro } from '../../iro.data';

const iroDark = inject('iroDark');

const iroBgPageId = ref(0);

const iroRandom = iro.cover.background?.random ?? false;

const isMobile = () => {
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    return flag;
}

const iroBgUrlRaw = isMobile() ? iro.cover.background.mobile : iro.cover.background.desktop;

const iroBgUrl = computed(() => {
    return iroRandom ? iroBgUrlRaw + '?' + iroBgPageId.value : iroBgUrlRaw
});

</script>

<template>
    <div class="iro-header-top iro-root" :class="{ 'iro-light': !iroDark, 'iro-dark': iroDark }">
        <figure class="iro-center-bg" :style="{ 'background-image': 'url(' + iroBgUrl + ')' }">
            <div class="iro-focus-info">
                <div class="iro-favicon">
                    <a href="/">
                        <img alt="avatar" loading="lazy" :src="iro.cover.avatar">
                    </a>
                </div>
                <div class="iro-signature">
                    <slot name="iro-signature">
                        <p>{{ iro.cover.signature }}</p>
                    </slot>
                </div>

                <div class="iro-social">
                    <CoverSocialButton v-if="iroRandom" iro-icon-name="pre" @click="() => { --iroBgPageId; }" alt="上一篇">
                    </CoverSocialButton>

                    <CoverSocialButton v-if="iro.social?.links" v-for="link in iro.social.links"
                        :iro-icon-name="link.icon" :iro-icon-url="link?.iconUrl" :iro-link="link.link" :alt="link.name">
                    </CoverSocialButton>

                    <CoverSocialButton v-if="iroRandom" iro-icon-name="next" @click="() => { ++iroBgPageId; }"
                        alt="下一篇">
                    </CoverSocialButton>
                </div>
            </div>
        </figure>
    </div>
</template>

<style scoped lang="scss">
.iro-root {
    &.iro-light {
        --iro-var-1: var(--iro-theme-skin, #505050);
        --iro-var-2: rgba(255, 255, 255, 0.6);
    }

    &.iro-dark {
        --iro-var-1: #CCCCCC;
        --iro-var-2: rgba(51, 51, 51, 0.8);
    }
}

.iro-header-top {
    border-radius: 0;
    animation: blur .8s;
    position: relative;
    overflow: hidden;
    height: auto;
    transition: all 0.8s ease !important;

    .iro-center-bg {
        margin: 0;
        padding: 0;
        background-position: top center;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-size: cover;
        display: block;
        height: 100vh;

        .iro-focus-info {
            position: relative;
            max-width: 800px;
            padding: 0 10px;
            top: 49.3%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 5;
            transition: .4s ease all;

            .iro-favicon {
                display: grid;
                justify-items: center;
                justify-content: center;
                margin: 0;
                max-height: 130px;

                img {
                    width: 130px;
                    height: 130px;
                    position: relative;
                    padding: 5px;
                    opacity: 1;
                    transform: rotate(0);
                    transition: all 0.8s ease !important;
                    border-radius: 100px;
                    animation: iro-fade-in-down 2s;

                    &:hover {
                        transform: rotate(360deg);
                    }
                }

            }

            .iro-signature {
                width: 65%;
                margin: auto;
                font-size: 16px;
                color: var(--iro-var-1);
                background: var(--iro-var-2);
                padding: 15px;
                margin-top: 22px;
                letter-spacing: 0;
                line-height: 30px;
                border-radius: 15px;
                border: 1px solid var(--iro-var-2);
                box-sizing: initial;
                white-space: nowrap;
                font-weight: var(--global-font-weight);
                backdrop-filter: blur(10px);
                transition: all 0.8s ease !important;
                animation: iro-fade-in-down 2s;

                p {
                    font-size: 16px;
                    animation: iro-fade-in-down 2s;
                    margin: 0;
                    font-family: 'Noto Serif SC';
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    transition: all 0.8s ease !important;

                    &:hover {
                        color: var(--iro-theme-skin-matching, #505050);
                    }
                }
            }

            .iro-social {
                height: 30px;
                margin-top: 28px;
                list-style: none;
                display: inline-block;

                :deep(li) {
                    float: left;
                    margin: 0px 5px;
                }

                :deep(img) {
                    border-radius: 15px;
                    height: 36px;
                    width: 40px;
                    padding: 8px 10px;
                    border: 0.5px solid var(--iro-var-2);
                    background: var(--iro-var-2);
                    transition: all 0.8s ease !important;
                    animation: iro-fade-in-down 2s;
                }
            }
        }
    }
}
</style>
