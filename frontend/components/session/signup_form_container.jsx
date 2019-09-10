import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import { setModalStatus } from '../../actions/ui_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Create account',
        navLink: <Link to="/login">Sign in</Link>,
    };
};

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    setModalStatus: status => dispatch(setModalStatus(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);