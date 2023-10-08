import axios from './Axios';
import { AxiosResponse } from 'axios';
import { Task } from '../interfaces/Task';

export const createTask = async (task: Task) => {
	// Axios method, specify api route (remember axiosInstance baseURL) and what you will pass to it
	await axios.post('/tasks', task);
};

export const getTasks = async (): Promise<AxiosResponse<Task[]>> =>
	await axios.get('/tasks');

export const getTask = async (id: string) => {
	await axios.get(`/tasks/${id}`);
};
export const updateTask = async (id: string, task: Task) => {
	await axios.put('/tasks/' + id, task);
};
export const deleteTask = async (id: string) => {
	await axios.delete('/tasks/' + id);
};
