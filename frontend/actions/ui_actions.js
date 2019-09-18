export const SET_MODAL_STATUS = 'SET_MODAL_STATUS';
export const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';

export const setModalStatus = status => ({
    type: SET_MODAL_STATUS,
    status
});

export const setCurrentTrack = trackId => ({
    type: SET_CURRENT_TRACK,
    trackId
});

export const togglePlay = () => ({
    type: TOGGLE_PLAY
});