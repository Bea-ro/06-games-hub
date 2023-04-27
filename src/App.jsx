import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import TicTacToe from './pages/TicTacToe/TicTacToe';
import Hangman from './pages/Hangman/Hangman';
import Sudoku from './pages/Sudoku/Sudoku';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
       <Header/>
      <Routes>
        <Route
          index
          element={
            <TicTacToe/>
          }
        />
        <Route
          path="/tres-en-raya"
          element={
            <TicTacToe/>
          }
        />
        <Route
          path="/ahorcado"
          element={
            <Hangman/>
          }
        />
        <Route
          path="/sudoku"
          element={
            <Sudoku/>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
