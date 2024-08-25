<script setup>
import { useData } from 'vitepress';

import Cover from './Cover.vue';

</script>

<template>
    <Cover></Cover>
    <slot name="iro-home-page">
        <Content />
    </slot>
</template>

<style scoped lang="scss"></style>
