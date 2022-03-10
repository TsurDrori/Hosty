import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadOrders } from '../store/order.action';
import { TripList } from '../cmps/TripList';

export const GuestTrips = () => {
  const user = useSelector((state) => state?.userModule?.user);
  const orders = useSelector((state) => state?.ordersModule?.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadOrders({ userId: user._id }));
  }, []);

  if (!user) return <h1>Please log-in first!</h1>;
  if (!orders) return <h1>an error has accured, please try later</h1>
  if (orders.length === 0) return <h1>No Trips to show</h1>;
  return (
    <section className="trips">
      <h2 className="title">Your Trips</h2>
      <TripList orders={orders} />
    </section>
  );
};
