import { connect } from 'react-redux';

import PlayControls from './play_controls';

const mapStateToProps = state => ({
    trackId: state.ui.currentTrack,
    tracks: state.entities.tracks
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayControls);