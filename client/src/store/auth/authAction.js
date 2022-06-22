export const setIsLoggedIn = (isAuth) => {
    return {
        type: 'auth/SET_IS_LOGGED_IN',
        payload: {isAuth: isAuth,},
    }
};

export const setIsLoading = (isLoading) => {
    return {
        type: 'auth/SET_IS_LOADING',
        payload: {isLoading: isLoading,},
    }
};

export const setIsError = (isError) => {
    return {
        type: 'auth/SET_IS_ERROR',
        payload: {isError: isError,},
    }
};

export const resetError = () => {
    return {
        type: 'auth/RESET_ERROR',
        payload: {isError: '',},
    }
};