import React, { useEffect, useState } from 'react';
import { stayService } from '../services/stay.service';
import { utilService } from '../services/util.service';

export function TripPreview({ order }) {
  const [stay, setStay] = useState(null);

  useEffect(async () => {
    const stay = await stayService.getById(order.stay._id);
    setStay(stay);
  }, []);

  function getStayName(stay) {
    if (!stay) return;
    const stayName = utilService.capitalizeTheFirstLetterOfEachWord(stay.name);
    return stayName;
  }

  function tripStatusMassage(status) {
    switch (status) {
      case 'pending':
        return `Your trip request to ${getStayName(stay)} is pending the Host approval`;
      case 'approve':
        return `Your trip to ${getStayName(stay)} was approved by the Host`;
      case 'cancel':
        return `ths Host could not accept your trip order to ${getStayName(
          stay
        )}, our apologies for the inconvenience. You are more than welcome to try other venues or contact the host to arrange for an alternative arrangement`;
    }
  }

  if (!stay) return 'loading';
  return (
    <div className='trip-card'>
      <div className='trip-card-container'>
        <div className='trip-img-container'>
          <img className='trip-img' src={stay.imgUrls[0]} alt='no image to show' />
        </div>
        <div className='trip-info-container'>
          <div> Name : {getStayName(stay)} </div>
          <div>
            Between : {order.startDate} - {order.endDate}
          </div>
          <div> Total Price : ${order.totalPrice} </div>
          <div className='contact-button'>contact host</div>
        </div>
      </div>
      <div className='trip-status'>{tripStatusMassage(order.status)}</div>
    </div>
  );
}
