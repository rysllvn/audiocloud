import {
    SET_MODAL_STATUS,
    SET_CURRENT_TRACK,
} from '../actions/ui_actions';

const _defaultState = {
    modal: false,
    currentTrack: 0,
}
  
const uiReducer = (state = _defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type) {
        case SET_MODAL_STATUS:
            return Object.assign(newState, { modal: action.status });
        case SET_CURRENT_TRACK:
            return Object.assign(newState, {currentTrack: action.trackId});
        default:
            return state;
    }
};
  
export default uiReducer;