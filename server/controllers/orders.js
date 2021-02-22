import express from 'express';
import mongoose from 'mongoose';

import IntuitOrders from '../models/IntuitOrders.js';

const router = express.Router();

export const gerOrders = async (req, res) => { 
    try {
        const intuitOrders = await IntuitOrders.find();
                
        res.status(200).json(intuitOrders);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const gerOrder = async (req, res) => { 
    const { id } = req.params;

    try {
        const order = await IntuitOrders.findById(id);
        
        res.status(200).json(order);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createOrder = async (req, res) => {
    const { productName, orderQuantity, creator, email, phoneNumber, selectedFile } = req.body;

    const newOrder = new IntuitOrders({ productName, orderQuantity, creator, email, phoneNumber, selectedFile })

    try {
        await newOrder.save();

        res.status(201).json(newOrder );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateOrder = async (req, res) => {
    const { id } = req.params;
    const { productName, orderQuantity, creator, email, phoneNumber, selectedFile } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedOrder = { productName, orderQuantity, creator, email, phoneNumber, selectedFile, _id: id };

    await IntuitOrders.findByIdAndUpdate(id, updatedOrder, { new: true });

    res.json(updatedOrder);
}

export const deleteOrder = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await IntuitOrders.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}


export default router;