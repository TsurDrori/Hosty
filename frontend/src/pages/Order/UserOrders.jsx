import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadOrders } from '../../store/order.action';
import { loadStays } from '../../store/stay.action';
import { OrderList } from '../Order/OrderList';
import { stayService } from '../../services/stay.service';
import logo from '../../assets/imgs/1181191_airbnb_icon.svg';
import { Link } from 'react-router-dom';
import { CircularIndeterminate } from '../../cmps/Loader.jsx';

export const UserOrders = () => {
  const user = useSelector((state) => state?.userModule?.user);
  const orders = useSelector((state) => state?.ordersModule?.orders);
  // const stays = useSelector((state) => state?.staysModule?.stays);


  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) return;
    dispatch(loadOrders({ hostId: user._id }));
    dispatch(loadStays());
  }, []);

  if (!orders) return <CircularIndeterminate />;
  if (!user) return <h1>Please log-in first!</h1>;
  
  const pendingOrders = orders.filter(order => order.status === 'pending')
  return (
    <div className='orders-main'>
      <div className='orders-header'>
        <div className='pending-orders-count'>Pending Orders: {pendingOrders.length} </div>
      </div>

      <OrderList orders={orders} />
    </div>
  );
};
