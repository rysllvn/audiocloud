import { connect } from 'react-redux';
import Main from './main';
import { setModalStatus } from '../../actions/ui_actions';

const mapStateToProps = state => {
    return {
      modal: state.ui.modal
    };
  };
  
const mapDispatchToProps = dispatch => ({
    setModalStatus: status => dispatch(setModalStatus(status))
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)