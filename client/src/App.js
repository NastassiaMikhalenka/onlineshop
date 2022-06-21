import './App.css';
import AppRouter from "./routers/routers";
import NavBar from "./components/navbar/navBar";
import {userApi} from "./api/userApi";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setIsLoggedInAC} from "./store/userReducer";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";


const theme = createTheme({
    typography: {
        fontFamily: 'Raleway',
    },
    palette: {
        teal: {
            main: '#006f74',
            contrastText: '#006f74',
            fontFamily: 'Raleway',
        },
    },
});


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        userApi.check().then( data => {
            dispatch(setIsLoggedInAC(true))
        })
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <NavBar/>
            <AppRouter/>
        </ThemeProvider>
    );
}

export default App;
