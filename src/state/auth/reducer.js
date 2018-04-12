import {
    SUCCESSFUL_AUTHENTICATION,
    INITIATE_AUTHENTICATION,
    FAILED_AUTHENTICATION,
    LOGOUT,
} from './actions';

const initialState = {
    isAuthenticated: false,
    isAuthenticating: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case INITIATE_AUTHENTICATION:
            return {
                ...state,
                isAuthenticated: false,
                isAuthenticating: true,
            }
        case SUCCESSFUL_AUTHENTICATION:
            return {
                ...state,
                isAuthenticated: true,
                isAuthenticating: false,
            }
        case FAILED_AUTHENTICATION:
            return initialState;
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default reducer;