import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./userReducer";
import {devicesReducer} from "./devicesReducer";


const rootReducer = combineReducers({
    login: userReducer,
    devices: devicesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

