import React from 'react';
import BackButton from '../ui/Buttons/BackButton';
import Title from '../ui/Title/Title';

const GameHeader = ( { game, StartButton } ) => {
  return (
      <div className="game-header">
      <BackButton/>
      <Title game={game}/>
      <StartButton/>
      </div>      
  )
}

export default GameHeader