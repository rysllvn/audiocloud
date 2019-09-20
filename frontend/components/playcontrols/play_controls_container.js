import { connect } from 'react-redux';

import { togglePlay } from '../../actions/ui_actions';

import PlayControls from './play_controls';

const mapStateToProps = state => ({
    currentTrack: state.ui.currentTrack,
    tracks: state.entities.tracks,
    users: state.entities.users,
    playing: state.ui.playing
});

const mapDispatchToProps = dispatch => ({
    togglePlay: () => dispatch(togglePlay())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayControls);