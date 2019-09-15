import { connect } from 'react-redux';
import Upload from './upload';

// const mapStateToProps = state => ({
//   });
  
const mapDispatchToProps = dispatch => ({
    // postTrack: track => dispatch(postTrack(track))
});
  
export default connect(
    null,
    mapDispatchToProps
)(Upload)