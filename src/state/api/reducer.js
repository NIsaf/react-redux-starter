import {
    START_FETCH,
    FETCH_ERROR,
    FETCH_SUCCESS,
} from './actions'

const initialState = {
    isFetching: false,
    error: null,
    profile: {},
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCH:
            return {
                ...state,
                isFetching: true,
                error: null,
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                isFetching: false,
                error: null,
            }
        case FETCH_ERROR:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
                profile: {},
            }
        default:
            return state;
    }
}

export default reducer;