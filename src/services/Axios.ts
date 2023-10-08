import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
	// Will always make petitions to this base url
	baseURL: 'http://localhost:3000/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default axiosInstance;
