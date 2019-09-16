import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
import { setModalStatus } from '../../actions/ui_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors, session }) => {
    return {
        errors: errors.session,
        sessionId: session.id,
        formType: 'Sign in',
        otherForm: 'createAccount',
        otherFormNice: 'Create account here'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        loginUser: user => dispatch(login(user)),
        receiveErrors: errors => dispatch(receiveErrors(errors)),
        setModalStatus: status => dispatch(setModalStatus(status))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));