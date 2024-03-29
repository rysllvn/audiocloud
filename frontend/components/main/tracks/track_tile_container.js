import { connect } from 'react-redux';
import TrackTile from './track_tile';
import { setCurrentTrack, queueSong } from '../../../actions/ui_actions';

const msp = (state, ownProps) => ({
    user: state.entities.users[ownProps.track.user_id]
});

const mdp = dispatch => ({
    setCurrentTrack: id => dispatch(setCurrentTrack(id)),
    queueSong: id => dispatch(queueSong(id)),
});

export default connect(msp, mdp)(TrackTile);