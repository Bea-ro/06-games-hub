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
import RequireAuth from './hooks/requireAuth';

function App() {
  
  const [message, setMessage] = useState();
  const [isLogged, setIsLogged] = useState (false);
 
  console.log(isLogged)
  return (
    <>
        <Routes>
        
        <Route index element={<Login setIsLogged={setIsLogged}/>} />
        <Route path='/register' element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<RequireAuth isLogged={isLogged}><Home /></RequireAuth>} />
        <Route path="/home/tres-en-raya" element={<RequireAuth isLogged={isLogged}><TicTacToe message={message} setMessage={setMessage}/></RequireAuth>} />
        <Route path="/home/ahorcado" element={<RequireAuth isLogged={isLogged}><Hangman message={message} setMessage={setMessage}/></RequireAuth>} />
        <Route path="/home/sudoku" element={<RequireAuth isLogged={isLogged}><Sudoku message={message} setMessage={setMessage}/></RequireAuth>}/>
        
      
      </Routes>
      <Footer />
    </>
  );
}

export default App;
