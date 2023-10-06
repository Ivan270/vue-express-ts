import chalk from 'chalk';
import app from './app';
import { startConnection } from './database';

startConnection();
app.listen(3000);
console.log(chalk.blue.underline.bold('Server running on port 3000'));
