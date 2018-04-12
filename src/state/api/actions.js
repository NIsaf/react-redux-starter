export const START_FETCH = 'START FETCH';
export const FETCH_ERROR = 'FETCH ERROR';
export const FETCH_SUCCESS = 'FETCH SUCCESS';

const startFetch = () => ({
    type: START_FETCH,
})

const fetchSuccess = profile => ({
    type: FETCH_SUCCESS,
    payload: profile,
})

const fetchError = error => ({
    type: FETCH_ERROR,
    payload: error,
})

export const fetchProfile = () => dispatch => {
    dispatch(startFetch());
    try {
        setTimeout(() => {
            dispatch(fetchSuccess({
                username: 'John Smith',
                email: 'johnsmith@aol.com'
            }))
        }, 2000);
    }
    catch(err){
        dispatch(fetchError(err.message));
    }
}