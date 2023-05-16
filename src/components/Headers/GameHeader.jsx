import React from 'react';
import './Headers.css';
import BackButton from '../ui/Buttons/BackButton';
import Title from '../ui/Title/Title';
import LogoutButton from '../ui/Buttons/LogoutButton';

const GameHeader = ( { game, StartButton } ) => {
  return (
      <header className="game-header">
      <BackButton/>
      <Title game={game}/>
      <StartButton/>
      <LogoutButton/>
      </header>      
  )
}

export default GameHeader