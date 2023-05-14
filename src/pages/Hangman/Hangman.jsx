import React, { useState, useEffect, useRef, createContext } from 'react';
import GameHeader from '../../components/Headers/GameHeader';
import HangmanStart from '../../components/ui/Buttons/HangmanStart';
import Message from '../../components/ui/Message/Message';
import HangmanGameboard from '../../components/Hangman/HangmanGameboard';

export const HangmanContext = createContext();

const Hangman = ( { message, setMessage}) => {
  
  const [word, setWord] = useState('?')
  const [disabled, setDisabled] = useState(false);
  const [attemps, setAttemps] = useState(10)
  const [wrongs, setWrongs] = useState([]);
  const [rights, setRights] = useState([])
  const [solution, setSolution] = useState("") 
  const keyRefs = useRef([])

  useEffect(()=>{setMessage("")},[])

console.log(word)
console.log(solution)

  return (
    <>
    <HangmanContext.Provider value={{word:word, setWord:setWord, setMessage:setMessage, disabled:disabled, 
      setDisabled:setDisabled, setAttemps:setAttemps,
      setSolution:setSolution, setWrongs:setWrongs, setRights:setRights,
      keyRefs:keyRefs}}>
      <GameHeader StartButton={HangmanStart} game="Ahorcado"/>    
      </HangmanContext.Provider>
    <main>
      <Message message={message}/>
      <HangmanContext.Provider value={{word:word, setSolution:setSolution, keyRefs:keyRefs, 
        setAttemps:setAttemps, setWrongs:setWrongs, rights:rights, setRights:setRights, 
        disabled:disabled}}>
      <HangmanGameboard word={word} attemps={attemps} setMessage={setMessage} setDisabled={setDisabled} 
      solution={solution} wrongs={wrongs} 
      />
       </HangmanContext.Provider>
    </main>
    </>
  )
}

export default Hangman