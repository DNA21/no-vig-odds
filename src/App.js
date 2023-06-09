import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Header from './components/Header';
import Home from './routes/Home';
import MLB from './routes/MLB';
import NFL from './routes/NFL';
import NHL from './routes/NHL';
import NBA from './routes/NBA';
import Footer from './components/Footer';
import NoMatch from './routes/NoMatch';


function App() {
    const [theme, setTheme] = useState('light')
    const [games, setGames] = useState([])

    const apiKey = process.env.REACT_APP_THE_ODDS_API_KEY

    const url = `https://api.the-odds-api.com/v4/sports/baseball_mlb/odds?apiKey=${apiKey}&regions=us&markets=h2h&dateFormat=iso&oddsFormat=american&bookmakers=fanduel`


    useEffect(()=> {
        axios.get(url).then((response) => {
            setGames(response.data)
            console.log(response.data)
            return () => setGames([]);
        })
    }, [])


    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
                <Header theme={theme} setTheme={setTheme} />
                <Routes>
                    <Route path="mlb" element={<MLB games={games} /> } />
                    <Route path='nfl' element={ <NFL /> } />
                    <Route path='nhl' element={ <NHL /> } />
                    <Route path='nba' element={ <NBA /> } />
                    <Route path='/' element={ <Home /> } />
                    <Route path="*" element={<NoMatch /> } />
                </Routes>
                <Footer theme={theme} setTheme={setTheme} />
            </>
        </ThemeProvider>
    );
}

export default App;
