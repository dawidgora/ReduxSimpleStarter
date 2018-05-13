import { combineReducers } from 'redux';
import AuthReducer from "./AuthReducer";
import SearchReducer from "./SearchReducer";
import FavoritesReducer from "./FavoritesReducer";

const rootReducer = combineReducers({
    state: (state = {}) => state,
    auth: AuthReducer,
    search: SearchReducer,
    favorites: FavoritesReducer
});

export default rootReducer;
