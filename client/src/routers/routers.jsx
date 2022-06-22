import React from 'react';
import {useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "./constants";
import {getIsAuth} from "../store/auth/authSelectors";

const AppRouter = () => {
    const isAuth = useSelector(getIsAuth);

    return (
        <Routes>
            {publicRoutes.map((current, index) => {
                return <Route key={index} path={current.path} element={current.element}/>;
            })}
            {isAuth &&
            authRoutes.map((current, index) => {
                return <Route key={index} path={current.path} element={current.element}/>;
            })}
            <Route path={'*'} element={<Navigate to="/" replace/>}/>
        </Routes>
    );
};

export default AppRouter;
