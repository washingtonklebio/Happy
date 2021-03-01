<template>
	<header class="pb-10 flex items-center">
		<p class="text-sm">
			R$ 0
		</p>
		<div class="mx-4 lg:mx-6 flex-1 bg-secondary h-1 rounded-md">
			<div class="relative bg-green h-1 rounded-md" :style="{ width: `20%` }">
				<p class="text-sm absolute -right-4 w-max top-2">
					{{ `R$ 50 (20%)` }}
				</p>
			</div>
		</div>
		<p class="text-sm">
			R$ 3.000
		</p>
	</header>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'ExtraIncomeBar',
	});
</script>
