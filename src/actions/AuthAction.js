import {firebaseAuth} from "../util/firebase";

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = ({email, password}, callback) => {
    return (dispatch) => {
        firebaseAuth.signInWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSuccess(dispatch, user);
                callback({});
            })
            .catch((error) => {
                loginUserFail(dispatch)
                callback({error});
            });
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};

const loginUserFail = (dispatch) => {
    dispatch({type: LOGIN_USER_FAIL});
};

export const registerUser = ({email, password}, callback) => {
    return (dispatch) => {
        firebaseAuth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                registerUserSuccess(dispatch, user);
                callback({});
            })
            .catch((error) => {
                registerUserFail(dispatch);
                callback({error});
            });
    };
};

const registerUserSuccess = (dispatch, user) => {
    dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: user
    });
};

const registerUserFail = (dispatch) => {
    dispatch({type: REGISTER_USER_FAIL});
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    };
};
