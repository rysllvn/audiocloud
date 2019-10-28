import { connect } from 'react-redux';

import { togglePlay } from '../../actions/ui_actions';
import ToggleMain from './toggle_main';

const mapStateToProps = state => ({
    currentTrack: state.ui.currentTrack,
    playing: state.ui.playing
});

const mapDispatchToProps = dispatch => ({
    togglePlay: () => dispatch(togglePlay()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleMain);