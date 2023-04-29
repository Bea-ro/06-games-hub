import React, { useState } from 'react';
import Title from '../../components/ui/Title/Title';
import Message from '../../components/ui/Message/Message';
import HangmanGameboard from '../../components/Hangman/HangmanGameboard';
import HangmanStart from '../../components/ui/HangmanStart';

const Hangman = ( {game}) => {
  
  const [word, setWord] = useState("ahorcado")
  const [message, setMessage] = useState();
  const [disabled, setDisabled] = useState(false);
  const [attemps, setAttemps] = useState(10) 

  return (
    <div>
      <Title game={game}/>
      <HangmanStart word={word} setWord={setWord} setMessage={setMessage} disabled={disabled} setDisabled={setDisabled} setAttemps={setAttemps}/>
      <Message message={message}/>
      <HangmanGameboard word={word} attemps={attemps} setAttemps={setAttemps} setMessage={setMessage} setDisabled={setDisabled}/>
    </div>
  )
}

export default Hangman