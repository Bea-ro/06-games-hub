import React, { useState } from 'react';
import Title from '../../components/ui/Title/Title';
import Message from '../../components/ui/Message/Message';
import StartButtom from '../../components/ui/StartButton/StartButton'
import HangmanGameboard from '../../components/Hangman/HangmanGameboard';

const Hangman = ( {game}) => {
  
  const [cells, setCells] = useState();
  const [message, setMessage] = useState();
  const [disabled, setDisabled] = useState(false)

  return (
    <div>
      <Title game={game}/>
      <StartButtom setCells={setCells} setMessage={setMessage} disabled={disabled} setDisabled={setDisabled}/>
      <Message message={message}/>
      <HangmanGameboard cells={cells} setCells={setCells} setMessage={setMessage} setDisabled={setDisabled}/>
    </div>
  )
}

export default Hangman