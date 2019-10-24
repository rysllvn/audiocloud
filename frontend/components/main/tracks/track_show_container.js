import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TrackShow from './track_show';

import { getTrack, deleteTrack } from '../../../actions/track_actions';
import { clearComments, createComment, deleteComment } from '../../../actions/comment_actions';
import { getUser } from '../../../actions/user_actions';
import { setModalStatus } from '../../../actions/ui_actions';


const msp = (state, ownProps) => ({
    track: state.entities.tracks[ownProps.match.params.trackId],
    comments: state.entities.comments,
    currentUserId: state.session.id,
    users: state.entities.users,
});

const mdp = dispatch => ({
    getTrack: trackId => dispatch(getTrack(trackId)),
    getUser: userId => dispatch(getUser(userId)),
    clearComments: () => dispatch(clearComments()),
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: id => dispatch(deleteComment(id)),
    setModalStatus: status => dispatch(setModalStatus(status)),
    deleteTrack: id => dispatch(deleteTrack(id)),
});

export default withRouter(connect(msp, mdp)(TrackShow));