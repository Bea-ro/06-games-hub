import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import TicTacToe from './pages/TicTacToe/TicTacToe';
import Hangman from './pages/Hangman/Hangman';
import Sudoku from './pages/Sudoku/Sudoku';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import FreeLayout from './Layouts/FreeLayout';
import ProtectedLayout from './Layouts/ProtectedLayout'

function App() {
  
  const [message, setMessage] = useState();

  return (
    <>
        <Routes>
        
        <Route element={<FreeLayout/>}>
        <Route index element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="*" element={<NotFound />} />
        </Route>
        
        <Route element={<ProtectedLayout/>}>
        <Route path="/home" element={<Home />} />
        <Route path="/tres-en-raya" element={<TicTacToe message={message} setMessage={setMessage}/>} />
        <Route path="/ahorcado" element={<Hangman message={message} setMessage={setMessage}/>} />
        <Route path="/sudoku" element={<Sudoku message={message} setMessage={setMessage}/>}/>
        </Route>
      
      </Routes>
      <Footer />
    </>
  );
}

export default App;
