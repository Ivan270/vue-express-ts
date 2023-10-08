<template>
	<h1>Task list</h1>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { getTasks } from '../services/TaskService';
	import { Task } from '@/interfaces/Task';

	export default defineComponent({
		data() {
			return {
				tasks: [] as Task[],
			};
		},
		methods: {
			async loadTasks() {
				const res = await getTasks();
				this.tasks = res.data;
			},
		},
		mounted() {
			this.loadTasks();
		},
	});
</script>
