import React, {useEffect} from 'react';
import {AppBar, Toolbar, Typography, Container, IconButton} from '@mui/material';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import {setIsLoggedIn} from "../../store/auth/authAction";
import {getIsAuth} from "../../store/auth/authSelectors";

export const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const isAuth = useSelector(getIsAuth);

    useEffect(() => {
        if (isAuth) {
            navigate('/');
        }
    }, [isAuth]);

    const onClickLogin = () => {
        navigate('/auth');
    };

    const onClickLogout = () => {
        localStorage.removeItem('token');
        dispatch(setIsLoggedIn(false));
        navigate('/');
    };

    const onClickAdmin = () => {
        navigate('/admin');
    };

    const onClickMain = () => {
        navigate('/');
    };

    return (
        <>
            <AppBar position="fixed" style={{background: '#006f74'}}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography variant="h5" component="div" sx={{flexGrow: 1}} style={{fontFamily: 'Raleway'}}>
                            <Link to={'/'} style={{color: 'inherit', textDecoration: 'none'}}>The stem</Link>
                        </Typography>
                        {isAuth ? (
                            location.pathname === '/admin' ? (
                                <>
                                    <IconButton
                                        size="large"
                                        onClick={onClickMain}
                                        color="inherit"
                                    >
                                        <ShoppingBasketOutlinedIcon/>
                                    </IconButton>
                                    <IconButton
                                        size="large"
                                        onClick={onClickLogout}
                                        color="inherit"
                                    >
                                        <LogoutIcon/>
                                    </IconButton>
                                </>
                            ) : (
                                <>
                                    <IconButton
                                        size="large"
                                        onClick={onClickAdmin}
                                        color="inherit"
                                    >
                                        <AdminPanelSettingsOutlinedIcon/>
                                    </IconButton>
                                    <IconButton
                                        size="large"
                                        onClick={onClickLogout}
                                        color="inherit"
                                    >
                                        <LogoutIcon/>
                                    </IconButton>
                                </>
                            )
                        ) : (
                            <>
                                <IconButton
                                    size="large"
                                    onClick={onClickLogin}
                                    color="inherit"
                                >
                                    <AccountCircle/>
                                </IconButton>
                            </>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar/>
        </>
    );
};