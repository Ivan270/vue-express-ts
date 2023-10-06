import { Router } from 'express';
import Task from '../models/Task.model';

const router = Router();

router.get('/tasks', async (req, res) => {
	const tasks = await Task.find();
	res.send(tasks);
});
router.post('/tasks', async (req, res) => {
	const { title, description } = req.body;
	const task = new Task({ title, description });
	await task.save();
	res.json(task);
});
router.get('/tasks/:id', async (req, res) => {
	try {
		let foundTask = await Task.findById(req.params.id);
		if (!foundTask) {
			return res.status(404).json({ message: 'Task not found' });
		}
		res.json(foundTask);
	} catch (error) {
		return res.status(500).send(error);
	}
});
router.delete('/tasks/:id', async (req, res) => {
	try {
		const task = await Task.findByIdAndDelete(req.params.id);
		if (!task) {
			return res.status(404).json({ message: 'Task not found' });
		}
		res.json(task);
	} catch (error) {
		res.status(500).send(error);
	}
});
router.put('/tasks/:id', async (req, res) => {
	try {
		const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
			// con esto devuelve el nuevo objeto y no el anterior
			new: true,
		});
		if (!updatedTask)
			return res.status(404).json({ message: 'Task not found' });
		res.json(updatedTask);
	} catch (error) {
		res.status(500).send(error);
	}
});

export default router;
