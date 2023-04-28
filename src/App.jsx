import React from 'react';
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
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/tres-en-raya" element={<TicTacToe game="Tres en raya"/>} />
        <Route path="/ahorcado" element={<Hangman game="Hangman"/>} />
        <Route path="/sudoku" element={<Sudoku game="Sudoku"/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
