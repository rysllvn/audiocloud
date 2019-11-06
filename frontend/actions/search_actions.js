import * as SearchUtil from '../util/search_api_util';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveSearch = data => ({
    type: RECEIVE_SEARCH,
    data
});

export const searchBasic = query => dispatch => (
    SearchUtil.searchBasic(query)
        .then(
            results => dispatch(receiveSearch(results))
        )
);