import { connect } from 'react-redux';
import Explore from './explore';
import { getTracks } from '../../../actions/track_actions';

const msp = state => ({

});

const mdp = dispatch => ({
    getTracks: () => dispatch(getTracks())
});

export default connect(
    msp,
    mdp
)(Explore);