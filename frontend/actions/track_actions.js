import * as TrackUtil from '../util/tracks_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';
export const REMOVE_TRACK = 'REMOVE_TRACK';

export const receiveTracks = data => ({
    type: RECEIVE_TRACKS,
    data
});

export const receiveTrack = data => ({
    type: RECEIVE_TRACK,
    data
});

export const receiveTrackErrors = errors => ({
    type: RECEIVE_TRACK_ERRORS,
    errors
});

export const removeTrack = id => ({
    type: REMOVE_TRACK,
    id
})

export const getTrack = id => dispatch => (
    TrackUtil.getTrack(id)
        .then(data => dispatch(receiveTrack(data)))
);

export const getTracks = num => dispatch => (
    TrackUtil.getTracks(num)
        .then(data => dispatch(receiveTracks(data)))
);

export const getUserTracks = userId => dispatch => (
    TrackUtil.getUserTracks(userId)
        .then(data => dispatch(receiveTracks(data)))
);

export const createTrack = track => dispatch => (
    TrackUtil.createTrack(track)
        .then(
            track => dispatch(receiveTrack(track)),
            errors => dispatch(receiveTrackErrors(errors.responseJSON))
        )
);

export const deleteTrack = id => dispatch => (
    TrackUtil.deleteTrack(id)
        .then(
            id => dispatch(removeTrack(id)),
        )
);