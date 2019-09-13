import { connect } from 'react-redux';
import Profile from './profile';
import { getUser } from '../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
    userId: ownProps.match.params.userId,
});
  
const mapDispatchToProps = dispatch => ({
    getUser: userId => dispatch(getUser(userId))
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)