import React, { useState } from 'react';
import Title from '../../components/ui/Title/Title';
import Message from '../../components/ui/Message/Message';
import TicTacToeStart from '../../components/ui/StartButton/TicTacToeStart'
import TicTacToeGameboard from '../../components/TicTacToe/TicTacToeGameboard';
import { emptyGameboard } from '../../data/data';

const TicTacToe = ( {game, message, setMessage} ) => {

  const [cells, setCells] = useState(emptyGameboard);
  const [player, setPlayer] = useState();
  const [disabled, setDisabled] = useState(false)
  
  return (
    <div>
      <Title game={game}/>
      <TicTacToeStart setCells={setCells} player={player} setPlayer={setPlayer} setMessage={setMessage} disabled={disabled} setDisabled={setDisabled}/>
      <Message message={message}/>
      <TicTacToeGameboard cells={cells} setCells={setCells} player={player} setPlayer={setPlayer} setMessage={setMessage} setDisabled={setDisabled}/>
</div>
  )
};

export default TicTacToe;
