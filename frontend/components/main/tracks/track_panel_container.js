import { connect } from 'react-redux';
import TrackPanel from './track_panel';
import {setCurrentTrack} from '../../../actions/ui_actions';

const msp = (state, ownProps) => ({
    track: ownProps.track
});

const mdp = dispatch => ({
    setCurrentTrack: id => dispatch(setCurrentTrack(id))
});

export default connect(msp, mdp)(TrackPanel);