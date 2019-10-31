import {
    SET_MODAL_STATUS,
    SET_CURRENT_TRACK,
    TOGGLE_PLAY,
    QUEUE_SONG
} from '../actions/ui_actions';

const _defaultState = {
    modal: false,
    currentTrack: null,
    playing: false,
    queue: []
}

const uiReducer = (state = _defaultState, action) => {
    Object.freeze(state);
    let oldState = Object.assign({}, state)
    switch(action.type) {
        case SET_MODAL_STATUS:
            return Object.assign(oldState, { modal: action.status });
        case SET_CURRENT_TRACK:
            let changes = {
                currentTrack: action.trackId,
                playing: true
            }
            return Object.assign(oldState, changes);
        case TOGGLE_PLAY:
            return Object.assign(oldState, {playing: !oldState.playing});
        case QUEUE_SONG:
            oldState.queue.push(action.trackId);
            return oldState;
        default:
            return state;
    }
};
  
export default uiReducer;