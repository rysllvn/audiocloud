import { RECEIVE_TRACKS, RECEIVE_TRACK } from '../actions/track_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_TRACKS:
      return Object.assign(newState, action.data.tracks);
    case RECEIVE_TRACK:
      newState[action.data.track.id] = action.data.track;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;