import './App.css';
import AppRouter from "./routers/routers";
import {NavBar} from "./components/navbar/navBar";
import {authApi} from "./api/authApi";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";
import {setIsLoggedIn} from "./store/auth/authAction";

const theme = createTheme({
    typography: {
        fontFamily: 'Raleway',
    },
    palette: {
        teal: {
            main: '#006f74',
            contrastText: '#006f74',
            fontFamily: 'Raleway',
            indicatorColor: '#006f74',
        },
        tea: {
            main: '#006f74',
            color: 'red',
            contrastText: '#ffffff',
            fontFamily: 'Raleway',
            indicatorColor: '#006f74',
        },
    },
    indicatorColor: {
        teal: {
            color: '#006f74',
        },
    }
});

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        authApi.check().then(data => {
            dispatch(setIsLoggedIn(true));
        })
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <NavBar/>
            <AppRouter/>
        </ThemeProvider>
    );
}

export default App;
