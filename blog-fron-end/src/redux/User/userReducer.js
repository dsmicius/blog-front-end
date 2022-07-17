import { LOGIN } from './userModel';

const defaultState = {
    fullname: '',
    username: '',
    jwtToken: '',
    jwtTokenExpiresIn: 0,
    roles: [],
}

const userReducer = (state= defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return action.user
        default:
            return state
    }
}

export default userReducer;