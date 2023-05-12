import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import GameCard from '../../components/GameCard/GameCard';
import { games } from '../../data/games-data'
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <>
    <Header/>
    <main className="main-home">
      <ul className="game-cards-container">
        {
        games.map((game) => (
          <li className="game-card-container" key={game.name}>
         <Link to={game.link} className="game-card-link"><GameCard 
         game={game.name} image={game.image} description={game.description}/></Link>
         </li>
        )) 
         }
         </ul>
    </main>
    </>
  )
}

export default Home