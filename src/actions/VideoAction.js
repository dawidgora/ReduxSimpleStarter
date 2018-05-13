export const VIDEO_SELECTED = 'VIDEO_SELECTED';

export const selectVideo = video => {
    return {
        type: VIDEO_SELECTED,
        payload: video
    };
};