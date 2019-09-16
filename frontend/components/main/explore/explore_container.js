import { connect } from 'react-redux';
import Explore from './explore';
import { getLatestTracks } from '../../../actions/track_actions';

const msp = state => ({

});

const mdp = dispatch => ({
    getLatestTracks: num => dispatch(getLatestTracks(num))
});

export default connect(
    msp,
    mdp
)(Explore);