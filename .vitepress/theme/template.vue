<script setup>
import { inject } from 'vue';

import { data as iro } from '指向 iro.data.ts 的相对路径';

const iroDark = inject('iroDark');

</script>

<template>
    <div class="iro-root" :class="{ 'iro-light': !iroDark, 'iro-dark': iroDark }">
    </div>
</template>


<style scoped lang="scss">
.iro-root {
    /*
        --iro-var-: ;
    */
    &.iro-light {
    }

    &.iro-dark {
    }
}
</style>
