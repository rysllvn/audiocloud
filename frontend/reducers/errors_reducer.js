import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import track from './track_errors_reducer';

const errorsReducer = combineReducers({
    session,
    track
});

export default errorsReducer;