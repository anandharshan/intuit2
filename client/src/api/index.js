import axios from 'axios';

const url = 'http://localhost:5000/orders';

export const fetchOrders = () => axios.get(url);
export const createOrder = (newOrder) => axios.post(url, newOrder);
export const updateOrder = (id, updatedOrder) => axios.patch(`${url}/${id}`, updatedOrder);
export const deleteOrder = (id) => axios.delete(`${url}/${id}`);

export const signIn = (formData) => axios.post('/user/signin', formData);
export const signUp = (formData) => axios.post('/user/signup', formData);
