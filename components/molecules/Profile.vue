<template>
	<div class="flex items-center">
		<img src="https://github.com/washingtonklebio.png" class="mr-6 w-20 h-20 rounded-full">
		<div class="flex flex-col w-full">
			<strong class="text-title text-2xl">Washington Correia</strong>
			<p class="flex items-center">
				<img src="icons/level.svg" class="mr-2">
				<span class="text-base"> R$ 199,00</span>
			</p>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'Profile',
	});
</script>
