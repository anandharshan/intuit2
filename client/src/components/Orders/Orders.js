import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Order from './Order/Order';
import useStyles from './styles';

const Orders = ({ setCurrentId }) => {
  const orders = useSelector((state) => state.orders);
  const classes = useStyles();

  return (
    !orders.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {orders.map((order) => (
          <Grid key={order._id} item xs={12} sm={6} md={6}>
            <Order order={order} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Orders;
