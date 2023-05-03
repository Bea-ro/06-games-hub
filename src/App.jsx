import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import TicTacToe from './pages/TicTacToe/TicTacToe';
import Hangman from './pages/Hangman/Hangman';
import Sudoku from './pages/Sudoku/Sudoku';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  
  const [message, setMessage] = useState();

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/tres-en-raya" element={<TicTacToe game="Tres en raya" message={message} setMessage={setMessage}/>} />
        <Route path="/ahorcado" element={<Hangman game="Hangman" message={message} setMessage={setMessage}/>} />
        <Route path="/sudoku" element={<Sudoku game="Sudoku"/>} message={message} setMessage={setMessage}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
