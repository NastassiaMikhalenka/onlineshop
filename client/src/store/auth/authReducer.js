const initialStateAuth = {
    isLoading: false,
    isAuth: false,
    isError: '',
    user: {},
};

export const authReducer = (state = initialStateAuth, action) => {
    switch (action.type) {
        case 'auth/SET_IS_LOGGED_IN':
            return {...state, isAuth: action.payload.isAuth,};
        case 'auth/SET_IS_LOADING':
            return {...state, isLoading: action.payload.isLoading,};
        case 'auth/SET_IS_ERROR':
            return {...state, isError: action.payload.isError,};
        case 'auth/RESET_ERROR':
            return {...state, isError: action.payload.isError,};
        default: {
            return state;
        }
    }
};