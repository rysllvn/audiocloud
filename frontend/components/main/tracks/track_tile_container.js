import TrackTile from './track_tile';
import { connect } from 'react-redux';

const msp = (state, ownProps) => ({
    track: ownProps.track
});

const mdp = dispatch => ({

});

export default connect(msp, mdp)(TrackTile);