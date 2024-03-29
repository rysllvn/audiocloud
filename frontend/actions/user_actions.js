import * as UserUtil from '../util/users_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const getUser = userId => dispatch => (
    UserUtil.getUser(userId)
        .then(
            user => dispatch(receiveUser(user))
        )
);

export const updateUser = data => dispatch => (
    UserUtil.updateUser(data)
);