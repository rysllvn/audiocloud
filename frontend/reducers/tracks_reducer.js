import { RECEIVE_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from '../actions/track_actions';

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_TRACKS:
      return Object.assign(newState, action.data.tracks);
    case RECEIVE_TRACK:
      newState[action.data.track.id] = action.data.track;
      return newState;
    case REMOVE_TRACK:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default tracksReducer;