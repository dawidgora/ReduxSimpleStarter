import {FETCH_FAVORITES} from "../actions/FavoritesAction";

const INITIAL_STATE = {
    videos: []
};

export default (state = INITIAL_STATE, action) =>  {
    switch (action.type) {
        case FETCH_FAVORITES:
            return {videos: {...action.payload}}
    }

    return state;
}