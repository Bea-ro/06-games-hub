import React from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../../components/GameCard/GameCard';

const Home = () => {
  return (
    <main>
      <ul>
         <li>
         <Link to="tres-en-raya"><GameCard game="Tres en raya" img="#" desc="Un juego para dos..."/></Link>
         </li>
         <li>
         <Link to="ahorcado"><GameCard game="Ahorcado" img="#" desc="Para jugar tú solo palabras..."/></Link>
         </li>
         <li>
         <Link to="sudoku"><GameCard game="Sudoku" img="#" desc="Demuestra tus habilidades..."/></Link>
         </li>
         </ul>
    </main>
  )
}

export default Home