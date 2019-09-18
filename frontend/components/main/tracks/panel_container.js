import { connect } from 'react-redux';
import Panel from './panel';
import {setCurrentTrack} from '../../../actions/ui_actions';

const msp = (state, ownProps) => ({
    user: state.entities.users[ownProps.track.user_id]
});

const mdp = dispatch => ({
    setCurrentTrack: id => dispatch(setCurrentTrack(id))
});

export default connect(msp, mdp)(Panel);