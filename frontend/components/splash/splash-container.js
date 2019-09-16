import { connect } from 'react-redux';
import { setModalStatus } from '../../actions/ui_actions';
import Splash from './splash';

const mapStateToProps = ({ ui: { modal } }) => {
    return {
      modal: modal
    };
  };
  
const mapDispatchToProps = dispatch => ({
    setModalStatus: status => dispatch(setModalStatus(status))
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);