<script setup>
import { useData } from 'vitepress';
import { inject, provide, ref } from 'vue';

import { data as iro } from '../../iro.data';

import NavHeader from './NavHeader.vue';

const iroDark = inject('iroDark');
const isAtTop = inject('isAtTop');

provide('isAtTop', isAtTop);

const toggleIroOpen = () => {
    const htmlEl = document.getElementsByTagName('html')[0];
    iroNavOpen.value = !iroNavOpen.value;
    htmlEl.classList.toggle('iro-open-nav');
}

const iroNavOpen = inject('iroNavOpen');

</script>

<template>
    <div class="iro-root" :class="{ 'iro-light': !iroDark, 'iro-dark': iroDark }">
        <NavHeader></NavHeader>
        <div class="iro-open-nav iro-no-select" :class="{ 'iro-nav-open': iroNavOpen }" @click="toggleIroOpen">
            <div class="iro-icon-flat iro-no-select" style="padding: 30px;">
                <div class="iro-more-icon"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.iro-root {
    &.iro-light {
        --iro-var-1: var(--iro-theme-skin, #505050);
        --iro-var-2: #FFFFFF;
    }

    &.iro-dark {
        --iro-var-1: var(--iro-theme-skin-dark);
        --iro-var-2: var(--iro-theme-skin-dark);
    }
}

.iro-open-nav {
    transition-duration: .5s;
    height: 50px;
    position: fixed;
    top: 0;
    z-index: 9999;
    background: 0 0;
    display: none;

    @media (max-width:860px) {
        display: block;
    }

    &.iro-open-nav {
        left: 0px;
        transition: all 0.5s ease-in-out;

        &.iro-nav-open {
            left: 250px;

            .iro-more-icon {
                background-color: transparent !important;

                &::before,
                &::after {
                    top: 0 !important;
                    background-color: var(--iro-var-2) !important;
                }

                &::before {
                    transform: rotate(-45deg);
                }

                &::after {
                    transform: rotate(45deg);
                }
            }
        }
    }

    .iro-icon-flat {
        padding: 30px;

        left: 5vw;
        transition-duration: .2s;
        top: 28px;

    }

    .iro-more-icon {

        &,
        &::before,
        &::after {
            background-color: var(--iro-var-1);
            position: absolute;
            width: 20px;
            height: 3px;
        }

        &::before,
        &::after {
            transition-duration: .5s;
            content: "";
            left: 0;
        }

        &::before {
            top: -8px;
        }

        &::after {
            top: +8px;
        }
    }
}
</style>
