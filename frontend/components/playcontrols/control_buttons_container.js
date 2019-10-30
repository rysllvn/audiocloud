import { connect } from 'react-redux';

import { togglePlay } from '../../actions/ui_actions';
import ControlButtons from './control_buttons';

const mapStateToProps = state => ({
    currentTrack: state.ui.currentTrack,
    playing: state.ui.playing
});

const mapDispatchToProps = dispatch => ({
    togglePlay: () => dispatch(togglePlay()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlButtons);