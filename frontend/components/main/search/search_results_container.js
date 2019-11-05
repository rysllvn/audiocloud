import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { searchBasic } from '../../../actions/search_actions';
import SearchResults from './search_results';

const msp = (state, ownProps) => ({

});

const mdp = dispatch => ({
    search: query => dispatch(searchBasic(query))
});

export default connect(msp, mdp)(SearchResults);