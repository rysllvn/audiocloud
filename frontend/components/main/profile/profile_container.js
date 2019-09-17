import { connect } from 'react-redux';
import Profile from './profile';
import { getUser } from '../../../actions/user_actions';
import { getUserTracks } from '../../../actions/track_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId]
});
  
const mdp = dispatch => ({
    getUser: userId => dispatch(getUser(userId)),
    getUserTracks: userId => dispatch(getUserTracks(userId))
});
  
export default withRouter(connect(msp,mdp)(Profile));