import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import { setModalStatus } from '../../actions/ui_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Create account',
        otherForm: 'signIn',
        otherFormNice: 'Sign in'
    };
};

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    setModalStatus: status => dispatch(setModalStatus(status))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));