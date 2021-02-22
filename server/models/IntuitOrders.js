import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    productName: String,
    orderQuantity: Number,
    creator: String,
    email: String,
    phoneNumber: Number,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var IntuitOrders = mongoose.model('IntuitOrders', orderSchema);

export default IntuitOrders;