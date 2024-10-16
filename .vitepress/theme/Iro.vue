<script setup>
import Layout from './Layout.vue';
</script>

<template>
    <ClientOnly>
        <Layout>
            <template v-slot:iro-home-page>
                <slot name="iro-home-page"></slot>
            </template>
            <template v-slot:iro-signature>
                <slot name="iro-signature"></slot>
            </template>
            <template v-slot:iro-not-found>
                <slot name="iro-not-found"></slot>
            </template>
            <template v-slot:iro-page>
                <slot name="iro-page"></slot>
            </template>
            <template v-slot:iro-home>
                <slot name="iro-home"></slot>
            </template>
            <template v-slot:iro-post-list>
                <slot name="iro-post-list"></slot>
            </template>
            <template v-slot:iro-post>
                <slot name="iro-post"></slot>
            </template>
            <template v-slot:iro-other>
                <slot name="iro-other"></slot>
            </template>
            <template v-slot:iro-footer>
                <slot name="iro-footer"></slot>
            </template>
        </Layout>
    </ClientOnly>
</template>
