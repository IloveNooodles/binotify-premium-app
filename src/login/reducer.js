import { LOGIN_SUCCESS } from './actionTypes'

const initialState  = {
    user: {}
}

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
        }
}
