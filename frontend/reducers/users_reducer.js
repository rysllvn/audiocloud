import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_TRACKS, RECEIVE_TRACK } from '../actions/track_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_TRACKS: 
      return Object.assign(newState, action.data.users)
    case RECEIVE_TRACK:
      return Object.assign(newState, action.data.users)
    default:
      return state;
  }
};

export default usersReducer;