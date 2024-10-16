<script setup>
import { inject } from 'vue';

import { data as iro } from '../../iro.data';

const iroDark = inject('iroDark');

import PostListItem from './PostListItem.vue';

const posts = iro.posts;
const bg = iro.cover.background;

for (let i in posts) {
    posts[i].floatRight = (i % 2) == 0;
    if (!('thumb' in posts[i])) {
        let thumb = bg.desktop;
        if (bg.random) {
            thumb += `?${i}`;
        }
        posts[i].thumb = thumb;
    }
}

</script>

<template>
    <div class="iro-root" :class="{ 'iro-light': !iroDark, 'iro-dark': iroDark }">
        <div class="iro-post-list">
            <div>
                <main class="iro-main" role="main">
                    <h1 class="title">
                        <fa-i icon="fa-solid fa-feather"></fa-i>
                        <br>
                        文章
                    </h1>
                    <PostListItem v-for="(post, index) in posts" :title="post.title" :url="post.url" :thumb="post.thumb"
                        :date="post.date" :description="post.description" :float-right="post.floatRight"></PostListItem>
                </main>
                <div class="iro-pagination"></div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.iro-root {

    /*
        --iro-var-: ;
    */
    &.iro-light {
        --iro-var-1: var(--iro-theme-skin, #505050);
    }

    &.iro-dark {
        --iro-var-1: #CCCCCC;
    }
}

.iro-main {
    padding: 7.5% 0 0;
}

.iro-post-list {
    max-width: 820px;
    margin-left: auto;
    margin-right: auto;
}

.title {
    color: var(--iro-var-1);
    font-size: 20px;
    font-weight: var(--iro-global-font-weight, 400);
    padding-bottom: 10px;
    padding-left: 3px;
    padding-right: 3px;
    margin-bottom: 30px;
    transition: all 0.8s ease !important;
    animation: iro-fade-in-down 2s;
    text-align: center;
    line-height: 30px;
}

.iro-pagination {
    width: 100%;
    padding: 20px 0;
    text-align: center;
    margin: 40px 0 80px;
    display: inline-block;
}
</style>
