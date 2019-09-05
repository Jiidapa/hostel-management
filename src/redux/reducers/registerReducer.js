import { ADD_USER } from '../actions/registerAction';

const initState = {
    users: [],
    message: ''
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: action.payload.users,
                message: action.payload.message
            }
        default:
            return state;
    }
}

export default cartReducer 