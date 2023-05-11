import React, { useState, useRef, createContext } from 'react';
import Title from '../../components/ui/Title/Title';
import Message from '../../components/ui/Message/Message';
import HangmanGameboard from '../../components/Hangman/HangmanGameboard';
import HangmanStart from '../../components/ui/Buttons/HangmanStart';
import BackButton from '../../components/ui/Buttons/BackButton';

export const KeyboardContext = createContext()

const Hangman = ( {game, message, setMessage}) => {
  
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
      <div className="game-header">
      <BackButton/>
      <Title game={game}/>
      <HangmanStart word={word} setWord={setWord} setMessage={setMessage} disabled={disabled} 
      setDisabled={setDisabled} setAttemps={setAttemps}
      setSolution={setSolution} setWrongs={setWrongs} setRights={setRights}
      keyRefs={keyRefs}
      />
      </div>

      <Message message={message}/>
      
      <KeyboardContext.Provider value={{word:word, setSolution:setSolution, keyRefs:keyRefs, 
        setAttemps:setAttemps, setWrongs:setWrongs, rights:rights, setRights:setRights}}>
      <HangmanGameboard attemps={attemps} setMessage={setMessage} setDisabled={setDisabled} 
      solution={solution} wrongs={wrongs}
      />
       </KeyboardContext.Provider>
    </main>
  )
}

export default Hangman