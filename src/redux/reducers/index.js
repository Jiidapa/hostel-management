import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import bookingReducer from './bookingReducer';
//list reducer
const rootReducer = combineReducers({
    registerReducer,
    bookingReducer
})

export default rootReducer