import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { getUserTracks } from '../../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
    userId: ownProps.userId
});

const mapDispatchToProps = dispatch => ({
    getUserTracks: userId => dispatch(getUserTracks(userId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackIndex)