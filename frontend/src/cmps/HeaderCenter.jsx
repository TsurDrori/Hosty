import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

import { GuestsFilter } from './GuestsFilter';
import { Calendar } from './FilterCalendar.jsx';
import { utilService } from '../services/util.service';

import { updateText } from '../store/modal.action'
import { setFilterBy } from '../store/stay.action';

export function HeaderCenter() {
  const [filterByText, setFilterByText] = useState('');
  const filters = useSelector((state) => state.staysModule.filterBy);
  
  const [toggleCal, setToggleCal] = useState(false);
  const [toggleGuests, setToggleGuests] = useState(false);
  const [firstClick, setToggleFirstClick] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    resetFilters()
  }, [])

  const onSetFilter = (filterBy) => {
    history.push('/StaySearch');

    const submittedFilter = {
      ...filters,
      name: filterByText,
    };

    dispatch(setFilterBy(submittedFilter));
    //   setFilter(filterBy)
  };

  const resetFilters = () => {
    const reseatedFilter = {
      ...filters, freeCancel: false, additionalFilters: [], minPrice: 0, maxPrice: Infinity,
      city: '', startDate: null, endDate: null, specialStay: "", name: ''
    }
    dispatch(setFilterBy(reseatedFilter));
  }

  const onToggleCal = () => {
    console.log('executing toggle cal');
    setToggleCal(!toggleCal);
  };
  const onToggleGuests = () => {
    console.log('executing toggle guests');
    setToggleGuests(!toggleGuests);
  };

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
                {' '}
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

        <div className='date-container'>
          <div className='container-border'>
            <ul className='clean-list'>
              <li>Check in</li>
              <li>
                <input onClick={onToggleCal} placeholder='Add dates'></input>
              </li>
            </ul>
          </div>
        </div>

        <div className='date-container'>
          <div className='container-border'>
            <ul className='clean-list'>
              <li>Check out</li>
              <li>
                <input onClick={onToggleCal} placeholder='Add dates'></input>
              </li>
            </ul>
          </div>
        </div>

        <div className='guests-container' onClick={onToggleGuests}>
          <div className='container-border'>
            <ul className='clean-list'>
              <li>Guests</li>
              <li>
                {' '}
                <input placeholder='add guests' type='text' />
              </li>
            </ul>

            <div className='search-button'>
              <SearchIcon onClick={() => onSetFilter({ filterByText })} />
            </div>
          </div>
        </div>
      </div>
      {toggleCal && <div onClick={onToggleCal}
        className='bg'></div>}
        
      {toggleCal && <Calendar onToggleCal={onToggleCal}/>}
    </div>
  )
}
