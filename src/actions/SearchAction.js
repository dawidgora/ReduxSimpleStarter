import axios from 'axios';
import _ from 'lodash';

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';

const YT_API_KEY = 'AIzaSyB8OIUG0bKY5SJkICXki94mpCE2VX_ywzA';
const ENDPOINT_URL = 'https://www.googleapis.com/youtube/v3/search';

export const searchVideos = (query, pageToken, callback) => {
    return (dispatch) => {
        let config = {
            method: 'GET',
            params: {
                maxResults: 25,
                part: 'snippet',
                q: query,
                type: 'video',
                key: YT_API_KEY
            }
        };

        if (pageToken) {
            config.params.pageToken = pageToken;
        }

        axios(ENDPOINT_URL, config)
            .then(result => {
                callback(result);
                dispatch({
                    type: SEARCH_SUCCESS,
                    payload: {
                        isNewSearch: !pageToken,
                        nextPageToken: result.data.nextPageToken,
                        videos: _.map(result.data.items, video => {
                            return {
                                id: video.id.videoId,
                                title: video.snippet.title,
                                description: video.snippet.description,
                                thumb: video.snippet.thumbnails.medium.url
                            }
                        })
                    }
                });
            });
    };
};