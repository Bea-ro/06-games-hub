import React, { useState, useRef, createContext } from 'react';
import GameHeader from '../../components/Header/GameHeader';
import HangmanStart from '../../components/ui/Buttons/HangmanStart';
import Message from '../../components/ui/Message/Message';
import HangmanGameboard from '../../components/Hangman/HangmanGameboard';

export const HangmanContext = createContext();


const Hangman = ( { message, setMessage}) => {
  
  const [word, setWord] = useState('ahorcado')
  const [disabled, setDisabled] = useState(false);
  const [attemps, setAttemps] = useState(10)
  const [wrongs, setWrongs] = useState([]);
  const [rights, setRights] = useState([])
  const [solution, setSolution] = useState("") 
  const keyRefs = useRef([])

console.log(word)
  return (
    <main>
      <HangmanContext.Provider value={{word:word, setWord:setWord, setMessage:setMessage, disabled:disabled, 
     setDisabled:setDisabled, setAttemps:setAttemps,
     setSolution:setSolution, setWrongs:setWrongs, setRights:setRights,
     keyRefs:keyRefs}}>
     <GameHeader StartButton={HangmanStart} game="Ahorcado"/>    
     </HangmanContext.Provider>
     
      <Message message={message}/>
      
      <HangmanContext.Provider value={{word:word, setSolution:setSolution, keyRefs:keyRefs, 
        setAttemps:setAttemps, setWrongs:setWrongs, rights:rights, setRights:setRights}}>
      <HangmanGameboard attemps={attemps} setMessage={setMessage} setDisabled={setDisabled} 
      solution={solution} wrongs={wrongs}
      />
       </HangmanContext.Provider>
    </main>
  )
}

export default Hangman