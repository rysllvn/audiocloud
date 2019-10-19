import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TrackShow from './track_show';

import { getTrack } from '../../../actions/track_actions';
import { getUser } from '../../../actions/user_actions';

const msp = (state, ownProps) => ({
    trackId: ownProps.match.params.trackId,
    currentUserId: state.session.id,
});

const mdp = dispatch => ({
    getTrack: trackId => dispatch(getTrack(trackId)),
    getUser: userId => dispatch(getUser(userId)),
});

export default withRouter(connect(msp, mdp)(TrackShow));