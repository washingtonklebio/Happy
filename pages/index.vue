<template>
	<section class="flex flex-col lg:flex-row flex-1 lg:flex-none lg:mt-16 sm:gap-x-10 md:gap-x-20">
		<div class="flex flex-col w-full lg:w-1/2">
			<Profile id="profile" />
			<CompletedChallenges id="challenges" />
			<Incrementer id="incrementer" @completed="getNewChallenge" />
			<button
				v-if="abandonCycle"
				id="button"
				class="button abandon"
				@click="setAbandonCycle(false)"
			>
				<span>Abandonar ciclo</span>
			</button>
			<button
				v-else-if="startCycle"
				id="button"
				class="button start"
				@click="setStartCycle(true)"
			>
				<span>Iniciar ciclo</span>
			</button>
			<button
				v-else
				id="button"
				class="button completed"
				@click="resetCycle"
			>
				<span>Zerar ciclo</span>
			</button>
		</div>
		<Card id="card" class="w-full lg:w-1/2" />
	</section>
</template>

<script lang='ts'>
	import Vue from 'vue';
	import Profile from '~/components/molecules/Profile.vue';
	import Incrementer from '~/components/molecules/Incrementer.vue';
	import CompletedChallenges from '~/components/atom/CompletedChallenges.vue';
	import { scrollToElement } from '~/utils';

	import Card from '~/components/organisms/Card.vue';

	interface Head {
		title: string;
	}

	export default Vue.extend({
		head (): Head {
			return {
				title: 'Home | Happy',
			};
		},
		components: {
			Profile,
			Incrementer,
			CompletedChallenges,
			Card,
		},
		data () {
			return {
				startCycle: true,
				abandonCycle: false,
				startTime: false,
			};
		},
		methods: {
			getNewChallenge () {
				if (Notification.permission === 'granted') {
					new Audio('/notification.mp3').play();
					new Notification('New Challenge!', {
							body: 'A new challenge has started! Go complete it!',
							icon: '/favicon.png',
					});
				}

				this.$nextTick(() => {
					scrollToElement('#challenge');
				});
			},
			setAbandonCycle () {
				this.abandonCycle = false;
			},
			setStartCycle () {
				this.abandonCycle = true;
				this.startTime = true;
				this.startCycle = false;
			},
			resetCycle () {
				this.abandonCycle = false;
				this.startTime = false;
				this.startCycle = true;
			},
		},
	});
</script>
