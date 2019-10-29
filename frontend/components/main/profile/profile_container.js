import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './profile';
import { getUser, updateUser } from '../../../actions/user_actions';
import { getUserTracks } from '../../../actions/track_actions';
import { selectUserTracks } from '../../../reducers/selectors';

const msp = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUserId: state.session.id,
    tracks: selectUserTracks(state, ownProps.match.params.userId)
});
  
const mdp = dispatch => ({
    getUser: userId => dispatch(getUser(userId)),
    getUserTracks: userId => dispatch(getUserTracks(userId)),
    updateUser: data => dispatch(updateUser(data)),
});
  
export default withRouter(connect(msp,mdp)(Profile));