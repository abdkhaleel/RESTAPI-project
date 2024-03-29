import express from 'express';
import bodyParser from 'body-parser';
import userak from './routes/users.js';


const app = express();
const PORT = 5000;

app.use(bodyParser.json())

app.use('/users', userak)

app.get('/', (req, res) => res.send('Hello from homepage'))

app.listen(PORT, () => console.log(`Server Running on: http://localhost:${PORT}`));