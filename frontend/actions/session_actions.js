import * as AjaxUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signup = user => dispatch => (
    AjaxUtil.signup(user)
        .then(
            (response) => dispatch(receiveCurrentUser(response)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
);

export const login = user => dispatch => (
    AjaxUtil.login(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
);

export const logout = () => dispatch => (
    AjaxUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
);