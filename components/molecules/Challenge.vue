<template>
	<section id="challenge" class="flex flex-col flex-1 justify-center items-center py-6 px-10 md:px-16">
		<header class="w-full pb-6 border-b-2 border-background">
			<h2 class="text-xl text-blue font-semibold text-center">
				Ganhou R$ 30,00
			</h2>
		</header>
		<main class="flex flex-col flex-1 justify-center items-center mt-6">
			<img :src="`icons/dolar.svg`" alt="Body" style="min-height: 70px; max-width: 50%;">
			<h1 class="font-semibold text-3xl text-title mt-6 mb-2">
				Bom trabalho!
			</h1>
			<p class="text-center text-base leading-6">
				Sua renda esta aumentando...
			</p>
		</main>
		<footer class="flex w-full gap-x-2">
			<button kind="challenge" class="button failed" @click="resetChallenges">
				Desistir
			</button>
			<button kind="challenge" class="button succeeded" @click="challengeSucceeded">
				Recuperar
			</button>
		</footer>
	</section>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		methods: {

		},
	});
</script>
