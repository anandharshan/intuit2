import express from 'express';

import { gerOrders, gerOrder, createOrder, updateOrder, deleteOrder } from '../controllers/orders.js';

const router = express.Router();

router.get('/', gerOrders);
router.post('/', createOrder);
router.get('/:id', gerOrder);
router.patch('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router;