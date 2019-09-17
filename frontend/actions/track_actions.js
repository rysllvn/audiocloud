import * as TrackUtil from '../util/tracks_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';

export const receiveTracks = data => ({
    type: RECEIVE_TRACKS,
    data
});

export const receiveTrack = track => ({
    type: RECEIVE_TRACK,
    track
});

export const getTracks = num => dispatch => (
    TrackUtil.getTracks(num)
        .then(data => dispatch(receiveTracks(data)))
)

export const getUserTracks = userId => dispatch => (
    TrackUtil.getUserTracks(userId)
        .then(data => dispatch(receiveTracks(data)))
);

export const createTrack = track => dispatch => (
    TrackUtil.createTrack(track)
        .then(track => dispatch(receiveTrack(track)))
);