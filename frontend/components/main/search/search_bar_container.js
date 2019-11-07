import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { searchBasic } from '../../../actions/search_actions';
import SearchBar from './search_bar';

const msp = (state, ownProps) => ({
    container: ownProps.container,
});

const mdp = dispatch => ({
    search: query => dispatch(searchBasic(query))
});

export default withRouter(connect(msp, mdp)(SearchBar));