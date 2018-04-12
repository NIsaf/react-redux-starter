import {
    UPDATE_FORM_FIELD,
    RESET_FORM,
} from './actions';

const initialState = {
    username: '',
    email: '',
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_FORM_FIELD:
            return {
                ...state,
                [action.payload.field]: action.payload.value,
            };
        case RESET_FORM:
            return initialState;
        default:
            return state;
    }
}

export default reducer;