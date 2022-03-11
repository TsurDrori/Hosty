import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

import { GuestsFilter } from './HomeGuestsFilter';
import { Calendar } from './HomeFilterCalendar.jsx';
import { setFilterBy } from '../store/stay.action';

export function HeaderCenter() {
  const [filterByText, setFilterByText] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState('');
  const [toggleGuests, setToggleGuests] = useState(false);
  const [toggleCal, setToggleCal] = useState(false);

  const filters = useSelector((state) => state.staysModule.filterBy);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    resetFilters()
  }, [])

  const onSetFilter = () => {
    history.push('/StaySearch');
    
    const submittedFilter = {
      ...filters,
      name: filterByText,
    };
    
    dispatch(setFilterBy(submittedFilter));
    setToggleGuests(false);
    setToggleCal(false);
  };

  const resetFilters = () => {
    const reseatedFilter = {
      ...filters, freeCancel: false, additionalFilters: [], minPrice: 0, maxPrice: Infinity,
      city: '', startDate: null, endDate: null, specialStay: "", name: ''
    }
    dispatch(setFilterBy(reseatedFilter));
  }

  const onToggleCal = () => {
    setToggleCal(!toggleCal);
  };
  const onToggleGuests = () => {
    setToggleGuests(!toggleGuests);
  };

  const ToggleScreen = () => {
    setToggleGuests(false);
    setToggleCal(false);
  }

  const onSaveCal = (startDate, endDate) => {
    onToggleCal()
    setStartDate(startDate)
    setEndDate(endDate)
  }
  const onSaveGuests = (numOfGuests) => {
    onToggleGuests()
    setGuests(numOfGuests)

  }

  return (
    <div className={`header-center-container`}>
      <div className={`header-center hidden-search`}>

        <input
          className='test-input'
          type='text'
          value={filterByText}
          onChange={(e) => setFilterByText(e.target.value)}
          placeholder='Start your search'
        />
        <div className='small-search-button' onClick={() => onSetFilter(filterByText)}>
          <SearchIcon onClick={() => onSetFilter({ filterByText })} />
        </div>
      </div>

      <div className='header-center header-bar hidden-bar '>
        <div className='location-container'>
          <div className='container-border'>
            <ul className='clean-list'>
              <li>Location</li>
              <li>
                <input
                  placeholder='where are you going'
                  type='text'
                  value={filterByText}
                  onChange={(e) => setFilterByText(e.target.value)}
                />
              </li>
            </ul>
          </div>
        </div>

        <div className='date-container' onClick={onToggleCal} >
          <div className='container-border'>
            <ul className='clean-list'>
              <li>Check in</li>
              <li>
                <input
                  placeholder='Add dates'
                  type='text'
                  readOnly={true}
                  value={startDate} >
                  

                </input>
              </li>
            </ul>
          </div>
        </div>

        <div className='date-container' onClick={onToggleCal}>
          <div className='container-border'>
            <ul className='clean-list'>
              <li>Check out</li>
              <li>
                <input
                  placeholder='Add dates'
                  type='text'
                  readOnly={true}
                  value={endDate}>
                  
                </input>
              </li>
            </ul>
          </div>
        </div>

        <div className='guests-container' >
          <div className='container-border'>
            <ul className='clean-list' onClick={onToggleGuests}>
              <li>Guests</li>
              <li>
                <input
                  placeholder='Add guests'
                  type='text'
                  readOnly={true}
                  value={guests}
                >
                </input>
              </li>
            </ul>

            <div className='search-button'>
              <SearchIcon onClick={() => onSetFilter({ filterByText })} />
            </div>
          </div>
        </div>
      </div>

      {(toggleCal || toggleGuests) && <div onClick={ToggleScreen}
        className='bg'></div>}

      {toggleCal && <Calendar onSaveCal={onSaveCal} />}

      {toggleGuests && <GuestsFilter onSaveGuests={onSaveGuests} />}

    </div>
  )
}
