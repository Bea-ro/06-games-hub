import React, { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import RequireAuth from './hooks/requireAuth';
import Home from './pages/Home/Home';
import TicTacToe from './pages/TicTacToe/TicTacToe';
import Hangman from './pages/Hangman/Hangman';
import Sudoku from './pages/Sudoku/Sudoku';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';

export const AuthContext = createContext();

function App() {
  const [message, setMessage] = useState();
  const [completeUser, setCompleteUser] = useState({});

  return (
    <>
      <AuthContext.Provider
        value={{
          completeUser: completeUser,
          setCompleteUser: setCompleteUser
        }}
      >
        <Routes>
          <Route index element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/home/tres-en-raya"
            element={
              <RequireAuth>
                <TicTacToe message={message} setMessage={setMessage} />
              </RequireAuth>
            }
          />
          <Route
            path="/home/ahorcado"
            element={
              <RequireAuth>
                <Hangman message={message} setMessage={setMessage} />
              </RequireAuth>
            }
          />
          <Route
            path="/home/sudoku"
            element={
              <RequireAuth>
                <Sudoku message={message} setMessage={setMessage} />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthContext.Provider>

      <Footer />
    </>
  );
}

export default App;
