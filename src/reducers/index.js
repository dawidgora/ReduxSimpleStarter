import { combineReducers } from 'redux';
import AuthReducer from "./AuthReducer";

const rootReducer = combineReducers({
    state: (state = {}) => state,
    auth: AuthReducer
});

export default rootReducer;
