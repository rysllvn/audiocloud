import * as TrackUtil from '../util/tracks_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';

export const receiveTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
});

export const getUserTracks = userId => dispatch => (
    TrackUtil.getUserTracks(userId)
        .then(tracks => dispatch(receiveTracks(tracks)))
);