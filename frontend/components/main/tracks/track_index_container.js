import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { getUserTracks } from '../../../actions/track_actions';
import { setCurrentTrack } from '../../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
    userId: ownProps.userId
});

const mapDispatchToProps = dispatch => ({
    getUserTracks: userId => dispatch(getUserTracks(userId)),
    setCurrentTrack: trackId => dispatch(setCurrentTrack(trackId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackIndex)