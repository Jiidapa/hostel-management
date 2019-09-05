import { USER_LOGIN } from '../actions/loginAction';

const initState = {
    users: [],
    message: ''
}

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                users: action.payload.users,
                message: action.payload.message
            }
        default:
            return state;
    }
}

export default loginReducer 