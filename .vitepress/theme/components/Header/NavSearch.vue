<script setup>
import { useData } from 'vitepress';
import { inject } from 'vue';

import { data as iro } from '../../iro.data';

const iroDark = inject('iroDark');

const iroShowSearch = inject('iroShowSearch');
const toggleSearch = () => iroShowSearch.value = !iroShowSearch.value;

</script>

<template>
	<div class="iro-root" :class="{ 'iro-light': !iroDark, 'iro-dark': iroDark }">
		<form class="iro-nav-search" :class="{ 'iro-show-search': iroShowSearch }" method="get"
			:action="iro?.search?.path ?? 'search'" role="search">
			<div class="iro-search-form">
				<div class="micro">
					<p class="micro mb-">想要找点什么呢？</p>
					<input class="text-input" type="search" :name="iro?.search?.param ?? 's'" placeholder="搜索"
						required="">
				</div>
			</div>
			<div class="iro-search-close" @click="toggleSearch"></div>
		</form>
	</div>
</template>

<style scoped lang="scss">
.iro-root {
	&.iro-light {
		--iro-var-1: rgba(255, 255, 255, 0.7);
		--iro-var-2: var(--iro-theme-skin) !important;
		--iro-var-3: rgba(255, 255, 255, 0.7);
	}

	&.iro-dark {
		--iro-var-1: rgba(51, 51, 51, 0.9);
		--iro-var-2: #CCCCCC !important;
		--iro-var-3: rgba(51, 51, 51, 0.8);
	}
}

.iro-nav-search {
	transition: opacity .25s ease;
	overflow: hidden;
	z-index: 9999;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	visibility: hidden;
	opacity: 0;
	backdrop-filter: blur(10px);

	&.iro-show-search {
		visibility: visible;
		opacity: 1;
		animation: iro-elastic .5s;
		background-color: var(--iro-var-1);
		background-repeat: no-repeat;
		background-position: bottom right;
	}

	.iro-search-close {
		position: absolute;
		width: 35px;
		height: 35px;
		background: 0 0;
		top: 20px;
		right: 15px;
		cursor: pointer;

		&::before,
		&::after {
			background-color: var(--iro-var-2);
			position: absolute;
			content: "";
			width: 30px;
			height: 2px;
			top: 17px;
			left: 2px;
		}

		&::before {
			transform: rotate(-45deg);
		}

		&::after {
			transform: rotate(45deg);
		}
	}

	.iro-search-form {
		max-width: 640px;
		padding: 0 20px;
		margin: auto;
		text-align: left;
		position: absolute;
		width: 100%;
		left: 0;
		right: 0;
		height: 285px;
		top: 0;
		bottom: 0;

		div {
			position: relative;
			width: 100%;

			p {
				padding-left: 24px;
				position: relative;
				width: 100%;
			}

			input {
				font-size: 1.5rem;
				background: var(--iro-var-3);
				padding: 12px 24px;
				width: 100%;
				outline: 0;
				border-radius: 50px;
				box-sizing: border-box;
				font-weight: var(--iro-global-font-weight);
				transition: all 0.8s ease;
			}
		}
	}
}

@keyframes iro-elastic {
	0% {
		transform: scale(0);
	}

	55% {
		transform: scale(1);
	}

	70% {
		transform: scale(.98);
	}

	100% {
		transform: scale(1);
	}
}
</style>
