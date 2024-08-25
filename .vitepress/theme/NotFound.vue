<script setup>
import { useData } from 'vitepress';
const { theme } = useData();

import { data as iro } from './iro.data';

</script>

<template>
    <div class="iro-container">
        <div class="iro-center">
            <h1 v-html="iro?.error404?.title ?? '404 Not Found'"></h1>
            <p v-html="iro?.error404?.text ?? '这里什么都没有...'"></p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.iro-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 160px;

    .iro-center {
        font-size: 20px;

        h1 {
            font-size: 48px;
            line-height: 48px;
        }
    }
}
</style>
