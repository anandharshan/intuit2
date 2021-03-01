import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createOrder, updateOrder } from '../../actions/orders';

const Form = ({ currentId, setCurrentId }) => {
  const [orderData, setOrderData] = useState({ productName: '', orderQuantity: 0, creator: '', email: '', phoneNumber: '', selectedFile: '' });
  const order = useSelector((state) => (currentId ? state.orders.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (order) setOrderData(order);
  }, [order]);

  const clear = () => {
    setCurrentId(0);
    setOrderData({ productName: '', orderQuantity: 0, creator: '', email: '', phoneNumber: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createOrder(orderData));
      clear();
    } else {
      dispatch(updateOrder(currentId, orderData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${order.productName}"` : 'Creating a Order'}</Typography>
        <TextField name="productName" required variant="outlined" label="Product Name" fullWidth value={orderData.productName} onChange={(e) => setOrderData({ ...orderData, productName: e.target.value })} />
        <TextField name="orderQuantity" required variant="outlined" label="Order Quantity" type="number" fullWidth value={orderData.orderQuantity} onChange={(e) => setOrderData({ ...orderData, orderQuantity: e.target.value })} />
        <TextField name="email" variant="outlined" label="Email" fullWidth value={orderData.email} onChange={(e) => setOrderData({ ...orderData, email: e.target.value })} />
        <TextField name="phoneNumber" variant="outlined" label="Phone Number" type="number" fullWidth rows={4} value={orderData.phoneNumber} onChange={(e) => setOrderData({ ...orderData, phoneNumber: e.target.value })} />
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={orderData.creator} onChange={(e) => setOrderData({ ...orderData, creator: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setOrderData({ ...orderData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit Order</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
