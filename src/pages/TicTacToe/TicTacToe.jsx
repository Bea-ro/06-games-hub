import React, { useState } from 'react';
import Title from '../../components/ui/Title/Title';
import Message from '../../components/ui/Message/Message';
import TicTacToeStart from '../../components/ui/Buttons/TicTacToeStart'
import TicTacToeGameboard from '../../components/TicTacToe/TicTacToeGameboard';
import { emptyGameboard } from '../../data/data';
import BackButton from '../../components/ui/Buttons/BackButton';

const TicTacToe = ( {game, message, setMessage} ) => {

  const [cells, setCells] = useState(emptyGameboard);
  const [player, setPlayer] = useState();
  const [disabled, setDisabled] = useState(false);
  const [winnerCells, setWinnerCells] = useState()
  
  return (
    <main>
      <div className="game-header">
      <BackButton/>
      <Title game={game}/>
      <TicTacToeStart setCells={setCells} player={player} setPlayer={setPlayer} 
      setMessage={setMessage} disabled={disabled} setDisabled={setDisabled}
      setWinnerCells={setWinnerCells}/>
      </div>      
      <Message message={message}/>
      
      <TicTacToeGameboard cells={cells} setCells={setCells} player={player} setPlayer={setPlayer}
      setMessage={setMessage} disabled={disabled} setDisabled={setDisabled}
      winnerCells={winnerCells} setWinnerCells={setWinnerCells}/>
</main>
  )
};

export default TicTacToe;
