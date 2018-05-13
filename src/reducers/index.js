import { combineReducers } from 'redux';
import AuthReducer from "./AuthReducer";
import SearchReducer from "./SearchReducer";

const rootReducer = combineReducers({
    state: (state = {}) => state,
    auth: AuthReducer,
    search: SearchReducer
});

export default rootReducer;
