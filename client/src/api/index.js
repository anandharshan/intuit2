import axios from 'axios';

const url = 'http://localhost:5000/orders';

export const fetchOrders = () => axios.get(url);
export const createOrder = (newOrder) => axios.post(url, newOrder);
export const updateOrder = (id, updatedOrder) => axios.patch(`${url}/${id}`, updatedOrder);
export const deleteOrder = (id) => axios.delete(`${url}/${id}`);
