<template>
	<transition name="slide-fade">
		<div
			v-if="false"
			class="overlay flex justify-center items-center bg-gray-line fixed inset-0"
			@click="setModalState(false)"
		>
			<div
				class="bg-secondary w-full max-w-md p-10 rounded-md shadow-lg text-center relative"
				@click.stop
			>
				<header class="flex justify-center items-center flex-col text-3xl font-semibold text-blue bg-contain">
					<img src="/icons/moeda.svg" class="w-20" alt="">
					<span class="mt-2 mb-2">R$ 3.000,00</span>
				</header>

				<strong class="text-2xl text-text mt-2">
					Parabéns
				</strong>
				<p>
					Você alcançou a sua meta mensal!
				</p>

				<button
					type="button"
					class="absolute right-2 top-2 bg-transparent border-0"
					@click="setModalState(false)"
				>
					<img src="/icons/close.svg" alt="Close Modal">
				</button>
			</div>
		</div>
	</transition>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
	});
</script>

<style scoped>
	.overlay {
		background-color: rgba(0, 0, 0, 0.8);
	}

	header {
		background: url('/icons/levelup.svg') no-repeat center;
	}

	button {
		font-size: 0px;
	}
</style>
