import { connect } from 'react-redux';
import Upload from './upload';
import { createTrack } from '../../../actions/track_actions';

// const mapStateToProps = state => ({
//   });
  
const mapDispatchToProps = dispatch => ({
    createTrack: track => dispatch(createTrack(track))
});
  
export default connect(
    null,
    mapDispatchToProps
)(Upload)