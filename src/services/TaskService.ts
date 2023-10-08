import axios from './Axios';
import { Task } from '../interfaces/Task';

export const createTask = async (task: Task) => {
	// Axios method, specify api route (remember axiosInstance baseURL) and what you will pass to it
	await axios.post('/tasks', task);
};

export const getTasks = async () => await axios.get('/tasks');
