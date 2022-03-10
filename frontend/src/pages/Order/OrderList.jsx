import React from 'react';
import { OrderPreview } from './OrderPreview';

export function OrderList({ orders }) {
  orders = JSON.parse(JSON.stringify(orders)).reverse();
  return (
      <div className='order-list'>
        {orders.map((order) => (
          <OrderPreview key={order._id} order={order} />
        ))}
      </div>
    
    // <div>
    //   <div className='order-info'>
    //     <div>Guest name</div>
    //     <div>Check In</div>
    //     <div>Check Out</div>
    //     <div>Status</div>
    //     <div>Price</div>
    //     <div>Actions</div>
    //   </div>
    // </div>
  );
}
