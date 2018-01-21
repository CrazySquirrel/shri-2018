import express from 'express';
import index from './controllers';

const pagesRoutes = express.Router();
pagesRoutes.get('/', index);

export { pagesRoutes };