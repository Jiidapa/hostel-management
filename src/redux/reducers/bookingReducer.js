import { BOOKING } from '../actions/bookingAction';
import { ADD_HOSTEL } from '../actions/registerHostelAction';

const initState = {
    hostels: [],
    available: 0,
    message: ''
}

const bookingReducer = (state = initState, action) => {
    switch (action.type) {
        case BOOKING:
            return {
                hostels: action.payload.hostels,
                available: action.payload.available,
                message: action.payload.message
            }
        case ADD_HOSTEL:
            return {
                hostels: action.payload.hostels                
            }
        default:
            return state;
    }
}

export default bookingReducer 