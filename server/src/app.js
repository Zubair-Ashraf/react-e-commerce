import express from 'express';
import cors from 'cors';
// import connections from './connections';
import routes from './api';

// connections();

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api', routes);

export default app;
