<template>
	<div class="flex justify-center items-center mt-8 lg:mt-14 text-9xl text-title font-rajdhani">
		<IncrementerDigits :digits="0" />
		<span class="bg-background px-2">:</span>
		<IncrementerDigits :digits="0" />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	import IncrementerDigits from '~/components/atom/IncrementerDigits.vue';

	let TIMEOUT_REFERENCE: ReturnType<typeof setTimeout>;

	export default Vue.extend({
		name: 'Incrementer',
		components: { IncrementerDigits },
		data () {
			return {
				isActive: true,
				time: 0,
			};
		},
		methods: {
			runIncrementer (flag: boolean) {
				if (this.isActive && flag) {
					TIMEOUT_REFERENCE = setTimeout(() => {
						this.time += 1;
					}, 1000);
				} else {
					clearTimeout(TIMEOUT_REFERENCE);
				}
			},
		},
		watch: {
			isActive (newValue: boolean) {
				this.runIncrementer(newValue);

				if (!newValue) {
					this.time = 0;
				}
			},
			time (newValue: number) {
				if (newValue > 0) {
					this.runIncrementer(true);
				} else if (newValue === 0) {
					this.$emit('completed');
				}
			},
		},
	});
</script>
