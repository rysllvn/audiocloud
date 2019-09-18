import {
    RECEIVE_TRACK_ERRORS
} from '../actions/track_actions';
  
export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        default:
            return state;
    }
};