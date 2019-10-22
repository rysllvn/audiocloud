import { RECEIVE_TRACK } from '../actions/track_actions';
import { CLEAR_COMMENTS, RECEIVE_COMMENT } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_TRACK:
            return Object.assign(newState, action.data.comments);
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment;
            return newState;
        case CLEAR_COMMENTS:
            return {};
        default:
            return state;
    }
};

export default commentsReducer;