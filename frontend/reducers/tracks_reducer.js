import { RECEIVE_TRACKS } from '../actions/track_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_TRACKS:
      return Object.assign(newState, action.tracks);      
    default:
      return state;
  }
};

export default usersReducer;