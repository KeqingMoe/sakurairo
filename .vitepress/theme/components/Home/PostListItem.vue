<script setup>
import { inject } from 'vue';

import { data as iro } from '../../iro.data';

const iroDark = inject('iroDark');

const { url, thumb, title, date, description, floatRight } = defineProps({
    url: String,
    thumb: String,
    title: String,
    date: String,
    description: String,
    floatRight: {
        type: Boolean,
        default: false
    }
});

</script>

<template>
    <div>
        <article class="iro-root"
            :class="{ 'iro-light': !iroDark, 'iro-dark': iroDark, 'iro-thumb-float-right': floatRight }" itemscope
            itemtype=" http://schema.org/BlogPosting">
            <div class="iro-thumb" :style="{ float: floatRight }">
                <a :href="url">
                    <img :alt="title" loading="lazy" :src="thumb">
                </a>
            </div>
            <div class="iro-post" :style="{ float: floatRight }">
                <div class="iro-post-content">
                    <div class="iro-post-date">
                        <fa-i icon="fa-regular fa-clock"></fa-i>
                        发布于 {{ date }}
                    </div>
                    <a :href="url" class="iro-post-title">
                        <h3><b>{{ title }}</b></h3>
                    </a>
                    <div class="iro-post-description">
                        {{ description }}
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>


<style scoped lang="scss">
.iro-root {

    /*
        --iro-var-: ;
    */
    &.iro-light {
        --iro-var-1: 0 1px 30px -4px #e8e8e8;
        --iro-var-2: rgba(255, 255, 255, 1);
        --iro-var-3: rgba(255, 255, 255, 0.9);
        --iro-var-4: #504E4E;
        --iro-var-5: #4a49db26;
        --iro-var-6: #4a49db;
        --iro-var-7: #504E4E;
        --iro-var-8: rgba(0, 0, 0, .66);
        --iro-var-9: rgba(255, 255, 255, 1);
        --iro-var-10: 0 1px 20px 10px #e8e8e8;
    }

    &.iro-dark {
        --iro-var-1: 0 1px 35px -8px rgba(26, 26, 26, 0.6);
        --iro-var-2: rgba(51, 51, 51, 1);
        --iro-var-3: rgba(51, 51, 51, var(--iro-dm-bg-transparency, 1));
        --iro-var-4: #888;
        --iro-var-5: #333333;
        --iro-var-6: #888;
        --iro-var-7: #999999;
        --iro-var-8: #999999;
        --iro-var-9: rgba(51, 51, 51, 1);
        --iro-var-10: 0 1px 20px 10px rgba(26, 26, 26, 0.6);
    }
}

article {
    will-change: auto;
    display: block;
    animation: main .6s;
    will-change: transform;
    float: left;
    width: 100%;
    height: 300px;
    position: relative;
    margin: 20px 0 20px;
    border-radius: 10px;
    background-color: var(--iro-var-3);
    box-shadow: var(--iro-var-1);
    opacity: 0;
    content-visibility: auto;
    contain-intrinsic-size: auto none;
    animation: iro-post-list-show .5s;
    opacity: 1;
    transition: all 0.8s ease !important;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 20px;
        z-index: 10;
        background: linear-gradient(to top, var(--iro-var-9), transparent);
    }

    &:hover {
        box-shadow: var(--iro-var-10);
    }
}

.iro-thumb-float-right {
    .iro-thumb {
        float: left;

        a {
            border-radius: 10px 0 0 10px;
        }
    }

    .iro-post {
        float: left;
        text-align: right;
        padding-left: 30px;
        padding-right: 0;
        margin: 20px 10px 10px 0;
    }
}

.iro-thumb {
    width: 55%;
    float: right;

    a {
        height: 300px;
        position: relative;
        display: block;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        border-radius: 0 10px 10px 0;
        color: var(--iro-var-4);

        * {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all .6s;

            &:hover {
                transform: scale(1.1);
            }
        }
    }
}

.iro-post {
    float: right;
    text-align: left;
    position: relative;
    display: block;
    padding-right: 30px;
    padding-left: 0;
    width: 40%;
    margin: 20px 10px 0 10px;
    z-index: 9;
}

.iro-post-date {
    background-color: var(--iro-var-5);
    font-size: 12px;
    width: max-content;
    padding: 4px 10px 4px 10px;
    border-radius: 6px;
    color: var(--iro-var-6);
    white-space: nowrap;
    font-weight: var(--global-font-weight);
    transition: all 0.8s ease !important;
}

.iro-post-title {
    h3 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 20px;
        word-wrap: break-word;
        margin-block-start: 1em;
        margin-block-end: 1em;
        font-weight: bold;
        color: var(--iro-var-7);

        &:hover {
            color: var(--iro-theme-skin-matching, #F9D938);
        }

        &::before {
            display: block;
            content: " ";
            height: 80px;
            margin-top: -80px;
            visibility: hidden;
        }
    }
}

.iro-post-description {
    position: relative;
    width: 100%;
    right: 0;
    margin: 0;
    margin-top: 10px;
    z-index: 50;
    color: var(--iro-var-8);
    transition: all 0.8s ease !important;
}

@keyframes iro-post-list-show {
    0% {
        opacity: 0;
        transform: translateY(80px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
