import express from 'express';
const router = express.Router();

import { create, redirect } from './controllers/urlController';

router.post('/', create);
router.get('/:routename', redirect);

export default router;