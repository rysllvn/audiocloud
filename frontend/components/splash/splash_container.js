import { connect } from 'react-redux';
import { setModalStatus } from '../../actions/ui_actions';
import Splash from './splash';
import { getTracks } from '../../actions/track_actions';

// { ui: { modal } }

const mapStateToProps = state => {
    return {
      modal: state.ui.modal,
      tracks: state.entities.tracks
    };
};
  
const mapDispatchToProps = dispatch => ({
    setModalStatus: status => dispatch(setModalStatus(status)),
    getTracks: () => dispatch(getTracks())
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);