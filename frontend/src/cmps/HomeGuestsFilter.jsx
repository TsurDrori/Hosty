import { useState } from 'react';


export const GuestsFilter = ({ onSaveGuests }) => {
  const [disableBtn, setDisableBtn] = useState(false);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const onHandleGuests = (type, diff) => {
    guests[type] = guests[type] + diff;
    setGuests({ ...guests });
    setDisableBtn(false);
    if (guests.adults + guests.children <= 0) {
      return;
    }
  };

  const onSave = () => {
    let totalGuests = guests.adults + guests.children + guests.infants + guests.pets
    onSaveGuests(totalGuests)
  }
  return (
    <section className='home-guest-menu'>
      <div className='guests-types'>
        <div className='guest-type flex'>
          <div className='guest-info'>
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
          <div className='guest-info'>
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
          <div className='guest-info'>
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
            <div className='guest-info'>
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
        <button className='save-guest' onClick={onSave}>
          Save
        </button>
      </div>
    </section>
  );
};
