import { connect } from 'react-redux';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { setModalStatus } from '../../actions/ui_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign in',
        navLink: <Link to="/signup">Create account</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        setModalStatus: status => dispatch(setModalStatus(status))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));