import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

function App() {
    const [theme, setTheme] = useState('light')
    const [games, setGames] = useState([])

    const url = 'https://api.the-odds-api.com/v4/sports/baseball_mlb/odds?apiKey=980b2b89872e4cb9cc002b0442060d1e&regions=us&markets=h2h&dateFormat=iso&oddsFormat=american&bookmakers=fanduel'

    useEffect(() => {
        axios.get(url).then((response) => {
            setGames(response.data)
            console.log(response.data)
        })
    }, [])


    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

        </ThemeProvider>
    );
}

export default App;
