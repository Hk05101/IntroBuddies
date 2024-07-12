import express from 'express';
import { getResource } from '../controller/resource.controller.js';

const router = express.Router();

router.get('/', getResource);

export default router;