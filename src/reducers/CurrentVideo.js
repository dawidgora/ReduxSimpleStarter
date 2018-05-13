import {VIDEO_SELECTED} from "../actions/VideoAction";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) =>  {
    switch (action.type) {
        case VIDEO_SELECTED:
            return {...action.payload};
    }

    return state;
}