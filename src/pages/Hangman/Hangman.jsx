import React, { useState, useRef, createContext } from 'react';
import Title from '../../components/ui/Title/Title';
import Message from '../../components/ui/Message/Message';
import HangmanGameboard from '../../components/Hangman/HangmanGameboard';
import HangmanStart from '../../components/ui/StartButton/HangmanStart';
import BackButton from '../../components/ui/BackButton/BackButton';

export const KeyboardContext = createContext()

const Hangman = ( {game, message, setMessage}) => {
  
  const [word, setWord] = useState('ahorcado')
  const [disabled, setDisabled] = useState(false);
  const [attemps, setAttemps] = useState(10)
  const [fails, setFails] = useState([]);
  const [rights, setRights] = useState([])
  const [solution, setSolution] = useState("") 
  const keyRefs = useRef([])

console.log(word)
  return (
    <div>
            <BackButton/>
      <Title game={game}/>
      <HangmanStart word={word} setWord={setWord} setMessage={setMessage} disabled={disabled} 
      setDisabled={setDisabled} setAttemps={setAttemps}
      setSolution={setSolution} setFails={setFails} setRights={setRights}
      keyRefs={keyRefs}
      />
      <Message message={message}/>
      
      <KeyboardContext.Provider value={{word:word, setSolution:setSolution, keyRefs:keyRefs, 
        setAttemps:setAttemps, setFails:setFails, rights:rights, setRights:setRights}}>
      <HangmanGameboard attemps={attemps} setMessage={setMessage} setDisabled={setDisabled} 
      solution={solution} fails={fails}
      />
       </KeyboardContext.Provider>
    </div>
  )
}

export default Hangman