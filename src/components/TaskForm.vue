<template>
	<div class="col-md-4 offset-md-4">
		<form @submit.prevent="saveTask()" class="card card-body">
			<h1 class="text-center">Create Task</h1>
			<input
				autofocus
				class="form-control mb-3"
				type="text"
				placeholder="Write a title"
				v-model="task.title"
			/>
			<textarea
				class="form-control mb-3"
				rows="3"
				placeholder="Write a description"
				v-model="task.description"
			></textarea>
			<button
				:disabled="!task.title || !task.description"
				class="btn btn-primary"
			>
				Save
			</button>
		</form>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { Task } from '../interfaces/Task';
	import { createTask } from '../services/TaskService';

	export default defineComponent({
		data() {
			return {
				// using imported interface
				task: {} as Task,
			};
		},
		methods: {
			async saveTask() {
				const res = await createTask(this.task);
				this.$router.push({ name: 'tasks' });
			},
		},
	});
</script>
