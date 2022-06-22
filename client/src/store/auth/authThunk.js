import {setIsError, setIsLoading, setIsLoggedIn} from './authAction';
import {authApi} from '../../api/authApi';

export const loginRequest = (email, password) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        authApi.login(email, password)
            .then(() => {
                dispatch(setIsLoggedIn(true));
            })
            .catch(e => {
                dispatch(setIsError(e.response.data.message));
            })
            .finally(() => {
                dispatch(setIsLoading(false));
            })
    }
};

export const registerRequest = (email, password) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        authApi.registration(email, password)
            .then(() => {
                dispatch(setIsLoggedIn(true));
            })
            .catch(e => {
                dispatch(setIsError(e.response.data.message));
            })
            .finally(() => {
                dispatch(setIsLoading(false));
            })
    }
};