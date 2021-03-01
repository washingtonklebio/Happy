<template>
	<div class="min-h-screen max-w-5xl mx-auto flex flex-col px-5 py-8 md:py-10">
		<ExtraIncomeBar />
		<Nuxt />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import ExtraIncomeBar from '@/components/atom/ExtraIncomeBar.vue';

	export default Vue.extend({
		name: 'Default',
		components: {
			ExtraIncomeBar,
		},
	});
</script>

<style>
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
	}
</style>
