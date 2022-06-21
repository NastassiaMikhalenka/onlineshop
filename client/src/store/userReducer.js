import {userApi} from "../api/userApi";


const initialStateLogin = {
    isLoading: false,
    isAuth: false,
    isError: '',
    user: {},
};


export const userReducer = (state = initialStateLogin, action) => {
    switch (action.type) {
        case "login/SET_IS_LOGGED_IN":
            return {
                ...state,
                isAuth: action.payload.isAuth,
            }
        case "login/SET_IS_LOADING":
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        case "login/SET_IS_ERROR":
            return {
                ...state,
                isError: action.payload.isError,
            }

        case "login/RESET_ERROR":
            return {
                ...state,
                isError: action.payload.isError,
            }

        default: {
            return state
        }
    }
};


export const setIsLoggedInAC = (isAuth) => {
    return {
        type: 'login/SET_IS_LOGGED_IN',
        payload: {
            isAuth: isAuth,
        },
    }
};


export const setIsLoadingAC = (isLoading) => {
    return {
        type: 'login/SET_IS_LOADING',
        payload: {
            isLoading: isLoading,
        },
    }
};

export const setIsErrorAC = (isError) => {
    return {
        type: 'login/SET_IS_ERROR',
        payload: {
            isError: isError,
        },
    }
};
export const resetErrorAC = () => {
    return {
        type: 'login/RESET_ERROR',
        payload: {
            isError: '',
        },
    }
};




// thunks
export const loginTC = (email, password) => {
    return (dispatch) => {
        dispatch(setIsLoadingAC(true));
        userApi.login(email, password)
            .then((res) => {
                    dispatch(setIsLoggedInAC(true))
            })
            .catch(e => {
                dispatch(setIsErrorAC(e.response.data.message))
            })
            .finally(() => {
                dispatch(setIsLoadingAC(false));
            })
    }
};


export const registerTC = (email, password) => {
    return (dispatch) => {
        dispatch(setIsLoadingAC(true));
        userApi.registration(email, password)
            .then((res) => {
                dispatch(setIsLoggedInAC(true))
            })
            .catch(e => {
                dispatch(setIsErrorAC(e.response.data.message))
            })
            .finally(() => {
                dispatch(setIsLoadingAC(false));
            })
    }
};
