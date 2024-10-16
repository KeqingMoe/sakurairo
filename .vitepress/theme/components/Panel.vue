<script setup>
import { useData } from 'vitepress';
import { inject, ref } from 'vue';

import { data as iro } from '../iro.data';

const iroDark = inject('iroDark');
const setLight = () => {
    const htmlEl = document.getElementsByTagName('html')[0];
    htmlEl.classList.remove('dark');
    iroDark.value = false;
};
const setDark = () => {
    const htmlEl = document.getElementsByTagName('html')[0];
    htmlEl.classList.add('dark');
    iroDark.value = true;
};
if (iroDark.value) {
    setDark();
} else {
    setLight();
}

const isAtTop = inject('isAtTop');
const iroShow = ref(false);

const toggleShow = () => iroShow.value = !iroShow.value;

</script>

<template>
    <div class="iro-root" :class="{ 'iro-light': !iroDark, 'iro-dark': iroDark }">
        <button class="iro-panel-btn iro-go-top" :class="{ 'iro-hide': isAtTop }" title="回到顶部">
            <fa-i icon="fa-solid fa-caret-up" size="lg"></fa-i>
        </button>
        <button class="iro-panel-btn iro-show-panel" title="控制面板" @click="toggleShow">
            <fa-i icon="fa-solid fa-compass-drafting" size="lg" flip></fa-i>
        </button>

        <div class="iro-panel iro-no-select" :class="{ 'iro-show': iroShow }">
            <div class="iro-theme-ctrl">
                <ul class="iro-list">
                    <li title="浅色模式" @click="setLight">
                        <fa-i icon="fa-regular fa-sun"></fa-i>
                    </li>
                    <li title="深色模式" @click="setDark">
                        <fa-i icon="fa-regular fa-moon"></fa-i>
                    </li>
                </ul>
                <!-- <ul class="iro-list iro-font-btn">
                    <li title="切换到字体 A">
                        <fa-i icon="fa-solid fa-font fa-lg"></fa-i>
                    </li>
                    <li title="切换到字体 B">
                        <fa-i icon="fa-solid fa-bold fa-lg"></fa-i>
                    </li>
                </ul> -->
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.iro-root {
    &.iro-light {
        --iro-var-1: 0 1px 30px -4px #e8e8e8;
        --iro-var-2: rgba(255, 255, 255, 0.65);
        --iro-var-3: 1px solid #FFFFFF;
        --iro-var-4: var(--iro-theme-skin-matching, #F9D938);
        --iro-var-5: 0 1px 20px 10px #e8e8e8;
        --iro-var-6: rgba(255, 255, 255, 0.85);
        --iro-var-7: rgba(255, 255, 255, 0.8);
        --iro-var-8: 1px solid #FFFFFF;
        --iro-var-9: rgba(255, 255, 255, 0.8);
        --iro-var-10: 0 1px 20px 10px #e8e8e8;
    }

    &.iro-dark {
        --iro-var-1: 0 1px 20px 2px rgba(26, 26, 26, 0.8);
        --iro-var-2: rgba(26, 26, 26, 0.6);
        --iro-var-3: 1px solid #7d7d7d30;
        --iro-var-4: var(--iro-theme-skin-dark);
        --iro-var-5: 0 1px 30px -2px var(--iro-theme-skin-dark);
        --iro-var-6: rgba(26, 26, 26, 0.8);
        --iro-var-7: rgba(26, 26, 26, 0.6);
        --iro-var-8: 1.5px solid #7d7d7d30;
        --iro-var-9: rgba(26, 26, 26, 0.8);
        --iro-var-10: 0 1px 30px -2px rgba(26, 26, 26, 0.95);
    }
}

.iro-panel-btn {
    transition: all 0.8s ease;
    border-radius: var(--iro-menu-radius, 10px);
    outline: 0;
    z-index: 10000;
    right: 10px;
    position: fixed;
    color: #7D7D7D;
    box-shadow: var(--iro-var-1);
    background: var(--iro-var-2);
    border: var(--iro-var-3);
    --fa-animation-duration: 3s;

    &:hover {
        color: var(--iro-var-4) !important;
        box-shadow: var(--iro-var-5);
        background: var(--iro-var-6);
    }
}

.iro-go-top {
    bottom: 65px;
    font-size: 16px;
    padding: 6px 16px;
}

.iro-show-panel {
    bottom: 15px;
    padding: 15px;
    animation-duration: 3s;
}

.iro-hide {
    transform: scale(0);
}

.iro-panel {
    position: fixed;
    left: auto;
    bottom: 15px;
    height: auto;
    width: auto;
    padding: 16px;
    padding-bottom: 0;
    border-radius: var(--iro-menu-selection-radius, 15px);
    font-size: larger;
    text-align: center;
    box-shadow: none;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    z-index: 10000;
    transform: translateY(120%);
    transition: transform 0.4s ease-in-out;
    right: 50px;
    max-height: 85%;
}

.iro-show {
    transform: translateY(0);
    transition: transform 0.4s ease-in-out;
}

.iro-theme-ctrl {
    height: auto;
    margin: 0;
    padding: 0;
    text-align: center;
    flex-grow: 1;
    display: flex;
    flex-direction: row-reverse;

}

.iro-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    padding: 5px;
    margin: 5px;
    flex-grow: 1;
    border-radius: var(--iro-menu-selection-radius, 20%);
    max-width: 125px;
    transition: all .8s;
    flex-direction: row;
    box-shadow: var(--iro-var-1);
    background-color: var(--iro-var-7);
    border: var(--iro-var-8);

    &:hover {
        background-color: var(--iro-var-9);
        box-shadow: var(--iro-var-10);
    }

    li {
        display: inline-block;
        margin: 2.5px;
        line-height: 50px;
        width: 50px;
        border-radius: var(--iro-menu-radius, 20%);
        transition: all .8s;
        border: var(--iro-var-3);
        flex-grow: 1;
        box-sizing: border-box;
        box-shadow: var(--iro-var-1);
        background-color: var(--iro-var-9);

        &:hover {
            color: #fff;
            background-color: var(--iro-var-4);
        }
    }
}

.iro-font-btn li {
    font-family: 'Noto Serif SC';
    border-style: none;
    min-height: 30px;
    min-width: 50px;
    color: var(--iro-theme-skin, #505050);
    border-radius: var(--iro-menu-radius, 5px);
}
</style>
