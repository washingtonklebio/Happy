<template>
	<div class="bg-secondary rounded-md flex flex-1 w-full mt-8 lg:mt-0 shadow-sm">
		<Challenge v-if="true" />
		<StartCycle v-else />
		<LevelUpModal />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	import LevelUpModal from '~/components/atom/LevelUpModal.vue';
	import StartCycle from '~/components/molecules/StartCycle.vue';
	import Challenge from '~/components/molecules/Challenge.vue';

	export default Vue.extend({
		components: {
			StartCycle,
			Challenge,
			LevelUpModal,
		},
	});
</script>
