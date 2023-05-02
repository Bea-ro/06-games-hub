import React, { useState, useRef } from 'react';
import Title from '../../components/ui/Title/Title';
import Message from '../../components/ui/Message/Message';
import HangmanGameboard from '../../components/Hangman/HangmanGameboard';
import HangmanStart from '../../components/ui/HangmanStart';

const Hangman = ( {game}) => {
  
  const [word, setWord] = useState()
  const [message, setMessage] = useState();
  const [disabled, setDisabled] = useState(false);
  const [attemps, setAttemps] = useState(10)
  const [fails, setFails] = useState([])
  const [solution, setSolution] = useState("") 
  const keyRefs = useRef([])

  return (
    <div>
      <Title game={game}/>
      <HangmanStart word={word} setWord={setWord} setMessage={setMessage} disabled={disabled} 
      setDisabled={setDisabled} setAttemps={setAttemps}
      setSolution={setSolution} setFails={setFails}
      keyRefs={keyRefs}
      />
      <Message message={message}/>
      <HangmanGameboard word={word} attemps={attemps} setAttemps={setAttemps} 
      setMessage={setMessage} setDisabled={setDisabled} 
      solution={solution} fails={fails}
      setSolution={setSolution} setFails={setFails}
      keyRefs={keyRefs}
      />
    </div>
  )
}

export default Hangman