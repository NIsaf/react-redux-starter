export const INITIATE_AUTHENTICATION = 'INTIATE AUTHENTICATION';
export const SUCCESSFUL_AUTHENTICATION = 'SUCCESSFUL AUTHENTICATION';
export const FAILED_AUTHENTICATION = 'FAILED AUTHENTICATION';
export const LOGOUT = 'LOGOUT';


const initiateAuthentication = () => ({
    type: INITIATE_AUTHENTICATION,
})

const succesfulAuthentication = () => ({
    type: SUCCESSFUL_AUTHENTICATION,
})

const failedAuthentication = () => ({
    type: FAILED_AUTHENTICATION,
})

export const logout = () => ({
    type: LOGOUT,
})

export const authenticate = () => dispatch => {
    dispatch(initiateAuthentication());
    try {
        setTimeout(() => {
            dispatch(succesfulAuthentication());
        }, 1000)
    }
    catch(err){
        dispatch(failedAuthentication());
    }
}