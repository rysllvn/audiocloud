import * as SearchUtil from '../util/search_api_util';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveSearch = results => ({
    type: RECEIVE_SEARCH,
    results
});

export const searchBasic = query => dispatch => (
    SearchUtil.searchBasic(query)
        .then(
            results => dispatch(receiveSearch(results))
        )
);