import {
    SET_MODAL_STATUS,
    SET_CURRENT_TRACK,
    TOGGLE_PLAY
} from '../actions/ui_actions';

const _defaultState = {
    modal: false,
    currentTrack: 0,
    playing: false
}

const uiReducer = (state = _defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type) {
        case SET_MODAL_STATUS:
            return Object.assign(newState, { modal: action.status });
        case SET_CURRENT_TRACK:
            return Object.assign(newState, {currentTrack: action.trackId});
        case TOGGLE_PLAY:
            if (newState.playing) {
                newState = Object.assign(newState, {playing: false});
            } else {
                newState = Object.assign(newState, {playing: true});
            }
            return newState;
        default:
            return state;
    }
};
  
export default uiReducer;