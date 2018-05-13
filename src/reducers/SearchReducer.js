import {SEARCH_SUCCESS} from "../actions/SearchAction";

const INITIAL_STATE = {
    nextPageToken: null,
    videos: []
};

export default (state = INITIAL_STATE, action) =>  {
    switch (action.type) {
        case SEARCH_SUCCESS:
            if (action.payload.isNewSearch) {
                return {...action.payload}
            }
            return {
                nextPageToken: action.payload.nextPageToken,
                videos: [...state.videos, ...action.payload.videos]
            };
    }

    return state;
}