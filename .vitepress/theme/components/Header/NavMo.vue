<script setup>
import { useData } from 'vitepress';
import { inject } from 'vue';

import { data as iro } from '../../iro.data';

const iroDark = inject('iroDark');

</script>

<template>
    <div class="iro-m-nav iro-root" :class="{ 'iro-light': !iroDark, 'iro-dark': iroDark }">
        <div class="iro-m-avatar">
            <img alt="mobile avatar" :src="iro.cover.avatar">
        </div>
        <div class="iro-m-search" v-if="iro?.search">
            <form class="iro-m-search-form" method="get" :action="iro?.search?.path ?? 'search'" role="search">
                <input class="iro-m-search-input" type="search" :name="iro?.search?.param ?? 's'" placeholder="搜索..."
                    required>
            </form>
        </div>
        <div class="iro-nav-menu" v-if="iro.nav?.links">
            <ul>
                <li v-for="link in iro.nav.links"><a :href="link.url">{{ link.title }}</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
.iro-root {
    &.iro-light {
        --iro-var-1: rgb(255, 255, 255, 0.9);
        --iro-var-2: #666;
        --iro-var-3: 0 1px 30px -4px #e8e8e8;
        --iro-var-4: rgba(255, 255, 255, 0.5);
        --iro-var-5: var(--iro-theme-skin, #505050);
    }

    &.iro-dark {
        --iro-var-1: rgba(26, 26, 26, 0.85);
        --iro-var-2: #CCCCCC;
        --iro-var-3: 0 1px 20px 2px rgb(26, 26, 26, 0.8);
        --iro-var-4: rgba(26, 26, 26, 0.6);
        --iro-var-5: #CCCCCC;
    }
}

.iro-m-nav {
    display: none;
}

@media (max-width:860px) {
    .iro-m-nav {
        background-color: var(--iro-var-1);
        height: 100%;
        display: block;

        .iro-m-avatar {
            position: relative;
            width: 250px;
            max-width: 250px;
            height: auto;
            margin: 0 auto;
            padding: 40px 0 0;
            text-align: center;

            img {
                width: 80px;
                height: 80px;
                max-width: 80px;
                border-radius: 100%;
                margin: auto;
            }
        }
    }

    .iro-m-search {
        .iro-m-search-form {
            position: relative;
            width: 250px;
            max-width: 250px;
            margin: 20px 0px;
            padding: 0px 20px;
        }

        .iro-m-search-input {
            width: 100%;
            border: 0;
            padding: 10px;
            box-shadow: var(--iro-var-3);
            background: var(--iro-var-4);
            border-radius: 10px;
            outline: 0;
            color: var(--iro-var-2);
        }

    }

    .iro-nav-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin: 0;

        ul li {
            transition-duration: .25s;
            display: block;
            padding: 10px 0px;
            color: #fff;
            letter-spacing: .02em;
            text-align: center;

            a {
                color: var(--iro-var-5);
                font-size: 16px;
            }
        }
    }
}
</style>
