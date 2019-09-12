import { connect } from 'react-redux';
import React from 'react';
import { setModalStatus } from '../../actions/ui_actions';
import RedirectLogin from './redirect_login';

const mapDispatchToProps = dispatch => ({
    setModalStatus: status => dispatch(setModalStatus(status))
});

export default connect(null, mapDispatchToProps)(RedirectLogin);