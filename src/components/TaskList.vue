<template>
	<ul class="list-group">
		<li
			v-for="task in tasks"
			:key="task._id"
			@click="$router.push(`/tasks/${task._id}`)"
		>
			{{ task.title }}
		</li>
	</ul>
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
