<script setup>
import { useData } from 'vitepress';

import Cover from './Cover.vue';
import PostList from './PostList.vue';

</script>

<template>
    <Cover>
        <template v-slot:iro-signature>
            <slot name="iro-signature"></slot>
        </template>
    </Cover>
    <slot name="iro-post-list">
        <PostList></PostList>
    </slot>
    <slot name="iro-home-page">
        <Content />
    </slot>
</template>

<style scoped lang="scss"></style>
