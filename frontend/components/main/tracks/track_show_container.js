import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TrackShow from './track_show';

import { getTrack } from '../../../actions/track_actions';
import { clearComments, createComment } from '../../../actions/comment_actions';
import { getUser } from '../../../actions/user_actions';

const msp = (state, ownProps) => ({
    track: state.entities.tracks[ownProps.match.params.trackId],
    comments: state.entities.comments,
    currentUserId: state.session.id,
});

const mdp = dispatch => ({
    getTrack: trackId => dispatch(getTrack(trackId)),
    getUser: userId => dispatch(getUser(userId)),
    clearComments: () => dispatch(clearComments()),
    createComment: comment => dispatch(createComment(comment)),
});

export default withRouter(connect(msp, mdp)(TrackShow));