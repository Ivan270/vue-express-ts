<template>
	<form @submit.prevent="updateHandler()">
		<input type="text" v-model="currentTask.title" />
		<textarea rows="3" v-model="currentTask.description"></textarea>
		<button type="submit">Update</button>
		<button type="button" @click="deleteHandler()">Delete</button>
	</form>
</template>
<script lang="ts">
	import { defineComponent } from 'vue';
	// import { getTask } from '@/services/TaskService';
	import { Task } from '@/interfaces/Task';
	import { updateTask, deleteTask } from '@/services/TaskService';

	export default defineComponent({
		data() {
			return {
				currentTask: {} as Task,
			};
		},

		methods: {
			async loadTask(id: string) {
				// const res = await getTask(id);
				// console.log(res);
				const res = await fetch(`http://localhost:3000/api/tasks/${id}`);
				const result = await res.json();
				this.currentTask = result;
			},
			async updateHandler() {
				await updateTask(this.currentTask._id, this.currentTask);
				this.$router.push('/');
			},
			async deleteHandler() {
				if (typeof this.$route.params.id === 'string') {
					try {
						const res = await deleteTask(this.$route.params.id);
						console.log(res);
						this.$router.push('/');
					} catch (error) {
						console.log(error);
					}
				}
			},
		},
		mounted() {
			// Shows the data in the route params

			if (typeof this.$route.params.id === 'string') {
				this.loadTask(this.$route.params.id);
			}
		},
	});
</script>
