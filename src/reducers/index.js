import { combineReducers } from 'redux';
import AuthReducer from "./AuthReducer";
import SearchReducer from "./SearchReducer";
import FavoritesReducer from "./FavoritesReducer";
import CurrentVideo from "./CurrentVideo";

const rootReducer = combineReducers({
    state: (state = {}) => state,
    auth: AuthReducer,
    search: SearchReducer,
    favorites: FavoritesReducer,
    currentVideo: CurrentVideo
});

export default rootReducer;
