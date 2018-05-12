import {
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    REGISTER_USER_FAIL,
    REGISTER_USER_SUCCESS
} from "../actions/AuthAction";

const INITIAL_STATE = {
    authObject: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, authObject: action.payload};
        case LOGIN_USER_FAIL:
            return {...state};
        case REGISTER_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, authObject: action.payload};
        case REGISTER_USER_FAIL:
            return {...state};
        case LOGOUT_USER:
            return {...state, ...INITIAL_STATE};
    }

    return state;
};