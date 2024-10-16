<script setup>
import { data as iro } from '../../iro.data';

const iconUrl = iro.social?.iconUrl ?? 'https://s.nmxc.ltd/sakurairo_vision/@2.6/display_icon/';
const iconPkg = iro.social?.iconPkg ?? 'sakura';

const { iroIconName, iroIconUrl, iroLink, alt } = defineProps({
    iroIconName: String,
    iroIconUrl: String,
    iroLink: String,
    alt: String
});

const url = iroIconName == 'custom' ? iroIconUrl : (new URL(`${iconPkg}/${iroIconName}.png`, iconUrl).href);

</script>

<template>
    <li id="bg-next">
        <a v-if="iroLink" :href="iroLink" target="_blank" :title="alt" rel="external noopener">
            <img :alt="alt" loading="lazy" :src="url">
        </a>
        <img v-else loading="lazy" :src="url" :alt="alt">
    </li>
</template>

<style scoped lang="scss"></style>
