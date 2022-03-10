import { userService } from '../services/user.service.js';

const initialState = {
    stays: null,
    filterBy: {
        freeCancel: false,
        VerifiedPlace: false,
        entirePlace: false,
        hotelRoom: false,
        privateRoom: false,
        sharedRoom: false,
        additionalFilters: [],
        minPrice: 0,
        maxPrice: Infinity,
        city: '',

        startDate: null,
        endDate: null,

        specialStay: "",
        name: ''

    }
}



export function staysReducer(state = initialState, action) {
    let newState = state;


    switch (action.type) {

        case 'SET_STAYS':
            newState = { ...state, stays: [...action.stays] }
            break;


        case 'SET_FILTER':
            newState = { ...state, filterBy: { ...action.filterBy } }
            break

    }
    return newState;
}
