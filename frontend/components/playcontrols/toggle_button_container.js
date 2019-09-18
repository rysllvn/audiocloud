import { connect } from 'react-redux';

import { togglePlay, setCurrentTrack } from '../../actions/ui_actions';
import ToggleButton from './toggle_button';

const mapStateToProps = state => ({
    currentTrack: state.ui.currentTrack,
    playing: state.ui.playing
});

const mapDispatchToProps = dispatch => ({
    togglePlay: () => dispatch(togglePlay()),
    setCurrentTrack: trackId => dispatch(setCurrentTrack(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton);