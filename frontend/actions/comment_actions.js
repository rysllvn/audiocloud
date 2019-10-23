import * as CommentUtil from '../util/comment_api_util';

export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const clearComments = () => ({
    type: CLEAR_COMMENTS,
});

export const clearComment = id => ({
    type: DELETE_COMMENT,
    id
})

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const createComment = comment => dispatch => (
    CommentUtil.postComment(comment)
        .then(
            comment => dispatch(receiveComment(comment))
        )
);

export const deleteComment = id => dispatch => (
    CommentUtil.deleteComment(id)
        .then(
            id => dispatch(clearComment(id))
        )
);