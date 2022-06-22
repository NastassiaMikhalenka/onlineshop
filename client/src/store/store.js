import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {devicesReducer} from './devices/devicesReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    devices: devicesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

