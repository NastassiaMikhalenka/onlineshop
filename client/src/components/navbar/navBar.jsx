import React, { useEffect } from 'react';
import {AppBar, Toolbar, Typography, Button, Container, IconButton} from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { logoutUser } from '../../store/userSlice';
import {useDispatch, useSelector} from "react-redux";
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import {setIsLoggedInAC} from "../../store/userReducer";

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.login.isAuth);

    useEffect(() => {
        if (isAuth) {
            navigate('/');
        }
    }, [isAuth]);

    const onClickLogin = () => {
        navigate('/auth');
    };

    const onClickLogout = () => {
        localStorage.removeItem('token')
        dispatch(setIsLoggedInAC(false))
        navigate('/');
    };

    const onClickAdmin = () => {
        navigate('/admin');
    };

    const onClickGoMain = () => {
        navigate('/');
    };

    return (
        <>
            <AppBar position="fixed" style={{ background: '#006f74'}}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: 'Raleway'}}>
                            <Link to={'/'} style={{ color: 'inherit', textDecoration: 'none' }}>
                                The stem
                            </Link>
                        </Typography>
                        {isAuth ? (
                            location.pathname === '/admin' ? (
                                <>
                                    <IconButton
                                        size="large"
                                        onClick={onClickGoMain}
                                        color="inherit"
                                    >
                                        <ShoppingBasketOutlinedIcon />
                                    </IconButton>
                                    <IconButton
                                        size="large"
                                        // aria-label="account of current user"
                                        // aria-controls="menu-appbar"
                                        // aria-haspopup="true"
                                        onClick={onClickLogout}
                                        color="inherit"
                                    >
                                        <LogoutIcon />
                                    </IconButton>
                                </>

                            ) : (
                                <>
                                    <IconButton
                                        size="large"
                                        // aria-label="account of current user"
                                        // aria-controls="menu-appbar"
                                        // aria-haspopup="true"
                                        onClick={onClickAdmin}
                                        color="inherit"
                                    >
                                        <AdminPanelSettingsOutlinedIcon />
                                    </IconButton>
                                    <IconButton
                                        size="large"
                                        // aria-label="account of current user"
                                        // aria-controls="menu-appbar"
                                        // aria-haspopup="true"
                                        onClick={onClickLogout}
                                        color="inherit"
                                    >
                                        <LogoutIcon />
                                    </IconButton>
                                </>
                            )
                        ) : (
                            <>
                                <IconButton
                                    size="large"
                                    // aria-label="account of current user"
                                    // aria-controls="menu-appbar"
                                    // aria-haspopup="true"
                                    onClick={onClickLogin}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </>

                        )}
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar />
        </>
    );
};

export default NavBar;