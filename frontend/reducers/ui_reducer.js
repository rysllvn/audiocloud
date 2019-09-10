import {
    SET_MODAL_STATUS
} from '../actions/ui_actions';
  
const uiReducer = (state = {modal: false}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case SET_MODAL_STATUS:
            return { modal: action.status };
        default:
            return state;
    }
};
  
export default uiReducer;