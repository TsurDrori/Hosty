import { stayService } from '../services/stay.service.js';

export function loadStays() {
  return (dispatch, getState) => {
    const {
      staysModule: { filterBy },
    } = getState();
    stayService.query(filterBy).then((stays) => {
      const action = { type: 'SET_STAYS', stays };
      dispatch(action);
    });
  };
}

export function setFilterBy(filterBy) {


  return (dispatch, getState) => {
    const action = { type: 'SET_FILTER', filterBy };
    dispatch(action);
    stayService.query(filterBy).then((stays) => {
      const action = { type: 'SET_STAYS', stays };
      dispatch(action);
    });
  };
}
