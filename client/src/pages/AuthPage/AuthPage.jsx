import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {Button, Card, CardActions, CardContent, Grid, TextField, Typography} from '@mui/material';
import {Preloader} from "../../components/loading/loading";
import {resetError} from "../../store/auth/authAction";
import {loginRequest, registerRequest} from "../../store/auth/authThunk";
import {getIsAuth, getIsError, getIsLoading} from "../../store/auth/authSelectors";

const AuthPage = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(getIsAuth);
    const isError = useSelector(getIsError);
    const loading = useSelector(getIsLoading);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistrationForm, setIsRegistrationForm] = useState(false);

    const authHandler = (e) => {
        e.preventDefault();
        if (!isRegistrationForm) {
            dispatch(loginRequest(email, password));
        } else {
            dispatch(registerRequest(email, password));
        }
    };

    const onClickAuthAndRegistration = () => {
        dispatch(resetError());
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
            >
                <form onSubmit={authHandler}>
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
                                           dispatch(resetError())
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
                                           dispatch(resetError())
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
                            <Button color="teal" variant="outlined" type={'submit'} onClick={authHandler}>
                                {isRegistrationForm ? 'CREATE ACCOUNT' : 'SIGN IN'}
                            </Button>
                        </CardActions>
                    </Card>
                </form>
            </Grid>
        </>
    );
};

export default AuthPage;