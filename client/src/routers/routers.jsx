import React from 'react';
import {useSelector} from "react-redux";
import {Navigate, Route, Routes} from 'react-router-dom'
import {DevicePage} from "../pages/DevicePage/DevicePage";
import {MainPage} from "../pages/MainPage/MainPage";
import {BasketPage} from "../pages/BasketPage/BasketPage";
import {AdminPage} from "../pages/AdminPage/AdminPage";
import {AuthPage} from "../pages/AuthPage/AuthPage";


export const ADMIN_ROUTE = '/admin'
export const LOGIN_ROUTE = '/auth'
export const SHOP_ROUTE = '/'
export const BASKET_ROUTE = '/basket'
export const DEVICE_ROUTE = '/device'


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <AdminPage/>
    },
    {
        path: BASKET_ROUTE,
        element: <BasketPage/>
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        element: <MainPage/>
    },
    {
        path: LOGIN_ROUTE,
        element: <AuthPage/>
    },
    {
        path: DEVICE_ROUTE + '/:id',
        element: <DevicePage/>
    },
]


const AppRouter = () => {
    const isAuth = useSelector(state => state.login.isAuth);

    console.log(isAuth)
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
