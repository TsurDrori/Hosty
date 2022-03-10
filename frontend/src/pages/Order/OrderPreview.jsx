import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateOrderStatus } from '../../store/order.action';
import { stayService } from '../../services/stay.service';
import { utilService } from '../../services/util.service';



export function OrderPreview({ order }) {
  const [option, setOption] = useState();
  const [stay, setStay] = useState(null);
  const [toggleShowMore, setToggleShowMore] = useState(false);
  const [selectColor, setSelectColor] = useState('');


  const dispatch = useDispatch();

  function handleSelectChange(value) {
    setOption(value);
    const orderToUpdate = {
      ...order,
      status: value,
    };


    dispatch(updateOrderStatus(orderToUpdate));
  }

  useEffect(async () => {
    const stay = await stayService.getById(order.stay._id);
    setStay(stay);
    setOption(order.status)
  }, []);

  function getGuestsCount() {
    if (order) {
      const guestsCount = Number(order.guests?.adults) + Number(order.guests?.children) + Number(order.guests?.infants) + Number(order.guests?.pets);
      return guestsCount;
    }
  }

  const onToggleShowMore = () => {
    setToggleShowMore(!toggleShowMore);
  };

  function getDaysCount() {
    let daysCount = 0;
    if (order.startDate && order.endDate) daysCount = utilService.datesToDaysCount(order.startDate, order.endDate)
    return daysCount;
  }


  if (!stay) return <></>;
  return (
    <div className={`order-card ${option}`}>


      <div className={`order-title ${option}`}>
        <div className='order-stay-name'>{order.stay.name}</div>
        <div className='order-days'>{getDaysCount()} day/s</div>
      </div>

      <div className='order-main-details'>
        <div className='total-revenue'>
          <div>Total Revenue: </div>
          <div>${order.totalPrice} </div>
        </div>

        <div className='guests-count'>
          <div> Guests</div>
          <div>{getGuestsCount()}</div>
        </div>

        <div className='dates'>
          <div>{order.startDate}</div>
          <div>{order.endDate}</div>
        </div>
      </div>
      {/* 
      <div className={`transition ${toggleShowMore ? 'show' : ''}`}> */}

      {toggleShowMore &&
        <div className='more-details-container'>

          <div className='order-customer-details-container'>
            <div className='stay-details-title'>The requestors' details </div>
            <div>Contact person: {order.buyer.fullname}</div>
            <div> Adults: {order.guests.adults} </div>
            <div> Children: {order.guests.children} </div>
            <div> Infants: {order.guests.infants} </div>
            <div> Pets: {order.guests.pets} </div>
          </div>

          <div className='stay-details-title'>Stay Details</div>
          <div className='order-stay-details-container'>
            <div className='img-container'>
              <img className='img' src={stay.imgUrls[0]} alt='no image to show' />
            </div>
            <div className='stay-details'>
              <div className='stay-detail'> {stay.type} </div>
              <div className='stay-detail'> ${order.stay.price}/night </div>
              <div className='stay-detail'> Capacity: {stay.capacity}</div>
              <div className='stay-detail'> Address: {stay.loc.address}</div>
              {/* <div className='stay-detail'> Rate: {stay.loc.address}</div> */}
            </div>

          </div>

        </div>
      }

      <div className='buttons-container'>
        <div className='show-Details-button' onClick={onToggleShowMore}>
          {!toggleShowMore && <span>Show Details </span> }
          {toggleShowMore && <span>Hide Details </span> }
        </div>

        <div className='status-button cancel-button' value='cancel' onClick={() => handleSelectChange('cancel')}>Cancel</div>
        <div className='status-button approve-button' value='approve' onClick={() => handleSelectChange('approve')}>Approve</div>
      </div>
      {/* </div> */}

    </div >
  );
}
