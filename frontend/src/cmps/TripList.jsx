import React from 'react';
import { TripPreview } from './TripPreview';

export function TripList({ orders }) {
  return (
    <div>
      <section className="trip-list">
        {orders.map((order) => (
          <TripPreview key={order._id} order={order} />
        ))}
      </section>
    </div>
  );
}