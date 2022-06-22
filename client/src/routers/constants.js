import AdminPage from "../pages/AdminPage/AdminPage";
import BasketPage from "../pages/BasketPage/BasketPage";
import MainPage from "../pages/MainPage/MainPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import DevicePage from "../pages/DevicePage/DevicePage";

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