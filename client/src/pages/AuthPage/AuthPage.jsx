import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loginTC, registerTC, resetErrorAC} from "../../store/userReducer";
import {Navigate} from "react-router-dom";
import {Button, Card, CardActions, CardContent, Grid, TextField, Typography} from '@mui/material';


import {createTheme, ThemeProvider} from '@mui/material/styles';
import Preloader from "../../components/loading/loading";

const theme = createTheme({
    palette: {
        teal: {
            main: '#006f74',
            contrastText: '#006f74',
            fontFamily: 'Raleway',
        },
    },
});


export const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isRegistrationForm, setIsRegistrationForm] = useState(false);


    const isAuth = useSelector(state => state.login.isAuth);
    const isError = useSelector(state => state.login.isError);
    const loading = useSelector(state => state.login.isLoading);
    const dispatch = useDispatch();

    const loginHandler = (e) => {
        e.preventDefault()
        if (!isRegistrationForm) {
            dispatch(loginTC(email, password));
        } else {
            dispatch(registerTC(email, password))
        }
    };

    const onClickAuthAndRegistration = () => {
        dispatch(resetErrorAC());
        setEmail('');
        setPassword('');
        setIsRegistrationForm((prev) => !prev);
    };

    if (isAuth) {
        return <Navigate to={'/admin'}/>
    }


    return (
        <>
            {loading && <Preloader/>}
            <ThemeProvider theme={theme}>
                <Grid
                    item
                    xs={8}
                    md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 'calc(100vh - 64px)',
                        backgroundColor: '#fcfeff'
                    }}
                    style={{fontFamily: 'Raleway'}}
                >
                    <form onSubmit={loginHandler}>
                        <Card sx={{borderRadius: '12px'}}>
                            <CardContent>
                                <Typography variant={'h4'} align={'center'} gutterBottom
                                            sx={{fontFamily: 'Raleway', color: '#006f74'}}
                                >
                                    {isRegistrationForm ? 'Registration' : 'Log In'}
                                </Typography>
                                {
                                    isError && <Typography variant={'h4'} align={'center'} gutterBottom
                                                           sx={{
                                                               fontFamily: 'Raleway',
                                                               color: '#d73b3b',
                                                               fontSize: '15px'
                                                           }}
                                    >
                                        {isError}
                                    </Typography>
                                }

                                <TextField fullWidth
                                           sx={{mb: 3}}
                                           color="teal"
                                           type={'email'}
                                           label="Email Address" id="email" variant="standard"
                                           value={email}
                                           onChange={(e) => {
                                               setEmail(e.currentTarget.value);
                                               dispatch(resetErrorAC())
                                           }
                                           }
                                />

                                <TextField fullWidth
                                           sx={{mb: 3}}
                                           color="teal"
                                           type={'password'}
                                           label="Password" id="password" variant="standard"
                                           value={password}
                                           onChange={(e) => {
                                               setPassword(e.currentTarget.value);
                                               dispatch(resetErrorAC())
                                           }
                                           }
                                />

                            </CardContent>
                            <CardActions
                                sx={{
                                    justifyContent: 'space-between',
                                    display: 'flex',
                                    flexDirection: 'column-reverse'
                                }}>
                                <div style={{paddingTop: '50px'}}>
                                    <Typography
                                        style={{fontFamily: 'Raleway'}}
                                        variant={'body2'}
                                        align={'left'}
                                        sx={{display: 'inline-block', mr: 1}}
                                    >
                                        {isRegistrationForm ? 'Already registered with us?' : 'Not registered with us yet?'}
                                    </Typography>
                                    <Typography
                                        variant={'body2'}
                                        color="#006f74"
                                        align={'left'}
                                        style={{fontFamily: 'Raleway'}}
                                        sx={{
                                            display: 'inline-block',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                                cursor: 'pointer',
                                                color: '#006f74'
                                            },
                                            mb: 1, mr: 1

                                        }}
                                        onClick={onClickAuthAndRegistration}
                                    >
                                        {isRegistrationForm ? 'SIGN IN!' : 'REGISTER!'}
                                    </Typography>
                                </div>
                                <Button color="teal" variant="outlined" type={'submit'} onClick={loginHandler}>
                                    {isRegistrationForm ? 'CREATE ACCOUNT' : 'SIGN IN'}
                                </Button>
                            </CardActions>
                        </Card>
                    </form>
                </Grid>
            </ThemeProvider>
        </>
    );
};