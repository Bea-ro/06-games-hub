import React, { useState, useEffect, createContext } from 'react';
import GameHeader from '../../components/Headers/GameHeader';
import TicTacToeStart from '../../components/ui/Buttons/TicTacToeStart'
import Message from '../../components/ui/Message/Message';
import TicTacToeGameboard from '../../components/TicTacToe/TicTacToeGameboard';
import { emptyGameboard } from '../../data/data';

export const TicTacToeContext = createContext()

const TicTacToe = ( { message, setMessage } ) => {

  const [cells, setCells] = useState(emptyGameboard);
  const [player, setPlayer] = useState();
  const [disabled, setDisabled] = useState(false);
  const [winnerCells, setWinnerCells] = useState()

  useEffect(()=>{setMessage("")},[])
  
  return (
    <>
    <TicTacToeContext.Provider value={{setCells:setCells, player:player, setPlayer:setPlayer, 
      setMessage:setMessage, disabled:disabled, setDisabled:setDisabled,
      setWinnerCells:setWinnerCells}}>
      <GameHeader StartButton={TicTacToeStart} game="Tres en raya"/>
      </TicTacToeContext.Provider>      
    <main> 
      <Message message={message}/>
      <TicTacToeGameboard cells={cells} setCells={setCells} player={player} setPlayer={setPlayer}
      setMessage={setMessage} disabled={disabled} setDisabled={setDisabled}
      winnerCells={winnerCells} setWinnerCells={setWinnerCells}/>
</main>
</>
  )
};

export default TicTacToe;
