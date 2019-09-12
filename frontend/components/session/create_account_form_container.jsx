import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { signup, receiveErrors } from '../../actions/session_actions';
import { setModalStatus } from '../../actions/ui_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors, session }) => {
    return {
        errors: errors.session,
        sessionId: session.id,
        formType: 'Create account',
        otherForm: 'signIn',
        otherFormNice: 'Just need to sign in?'
    };
};

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    setModalStatus: status => dispatch(setModalStatus(status))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));