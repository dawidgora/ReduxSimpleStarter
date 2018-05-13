import {firebaseDatabase} from "../util/firebase";

export const FETCH_FAVORITES = 'FETCH_FAVORITES';

export const addToFavorites = (userUid, video, callback) => {
    return () => {
        const ref = firebaseDatabase.ref('favorites/' + userUid);
        ref.update({
            [video.id]: video
        })
            .then(() => {
                if (callback) {
                    callback({});
                }
            })
            .catch(error => {
                if (callback) {
                    callback({error});
                }
            });
    };
};

export const removeFromFavorites = (userUid, videoId, callback) => {
    return () => {
        const ref = firebaseDatabase.ref('favorites/' + userUid + '/' + videoId);
        ref.remove()
            .then(() => {
                if (callback) {
                    callback({});
                }
            })
            .catch(error => {
                if (callback) {
                    callback({error});
                }
            });
    };
};

let fetchFavoritesInitialized = false;
export const fetchFavorites = (userUid) => {
    if (!fetchFavoritesInitialized) {
        fetchFavoritesInitialized = true;
        return dispatch => {
            firebaseDatabase.ref('favorites/' + userUid).on('value', snapshot => {
                dispatch({
                    type: FETCH_FAVORITES,
                    payload: snapshot.val()
                });
            });
        };
    } else {
        return () => {
        };
    }
};
