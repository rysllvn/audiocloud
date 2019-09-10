import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { setModalStatus } from '../../actions/ui_actions';
import Header from './header';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  setModalStatus: status => dispatch(setModalStatus(status))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));