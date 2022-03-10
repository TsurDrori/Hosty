import { Component, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateOrder } from '../store/order.action';
import { useLocation } from 'react-router-dom';

export const GuestsFilter = ({ order, stay, handelFilterByChange, onSaveClicked, onToggleGuests }) => {
  const [inDetals, setInDetails] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    const orderToUpdate = { ...order, guests };
    if (handelFilterByChange) handelFilterByChange('guests', guests);
    dispatch(updateOrder(orderToUpdate));
  }, [guests]);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/stay/')) {
      setInDetails(true);
    }
  }, [location]);

  const onHandleGuests = (type, diff) => {
    guests[type] = guests[type] + diff;
    setGuests({ ...guests });
    setDisableBtn(false);
    if (guests.adults + guests.children >= stay.capacity) {
      setDisableBtn(true);
    }
    if (guests.adults + guests.children <= 0) {
      return;
    }

    // this.props.handelFilterByChange('additionalFilter', { ...guests })
  };

  return (
    <section className='guest-menu'>
      <div className='guests-types'>
        <div className='guest-type flex'>
          <div className='gust-info'>
            <h3>Adults</h3>
            <p>Ages 13+</p>
          </div>
          <div className='guest-num flex'>
            <button onClick={() => onHandleGuests('adults', -1)}>-</button>
            {guests.adults}
            <button disabled={disableBtn} onClick={() => onHandleGuests('adults', +1)}>
              +
            </button>
          </div>
        </div>
      </div>

      <div className='guests-types'>
        <div className='guest-type flex'>
          <div className='gust-info'>
            <h3>Children</h3>
            <p>Ages 2–12</p>
          </div>
          <div className='guest-num flex'>
            <button onClick={() => onHandleGuests('children', -1)}>-</button>
            {guests.children}
            <button disabled={disableBtn} onClick={() => onHandleGuests('children', +1)}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className='guests-types'>
        <div className='guest-type flex'>
          <div className='gust-info'>
            <h3>Infants</h3>
            <p>Under 2</p>
          </div>
          <div className='guest-num flex'>
            <button onClick={() => onHandleGuests('infants', -1)}>-</button>
            {guests.infants}
            <button disabled={disableBtn} onClick={() => onHandleGuests('infants', +1)}>
              +
            </button>
          </div>
        </div>
        <div className='guests-types'>
          <div className='guest-type flex'>
            <div className='gust-info'>
              <h3>Pets</h3>
            </div>
            <div className='guest-num flex'>
              <button onClick={() => onHandleGuests('pets', -1)}>-</button>
              {guests.pets}
              <button disabled={disableBtn} onClick={() => onHandleGuests('pets', +1)}>
                +
              </button>
            </div>
          </div>
        </div>
        {/* <button className='clear '>clear</button> */}
        <button className='save-guest' onClick={() => onToggleGuests()}>
          Close
        </button>
      </div>
    </section>
  );
};
