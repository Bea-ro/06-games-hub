import React, { useEffect, useContext } from 'react';
import './Button.css';
import { HangmanContext } from '../../../pages/Hangman/Hangman';
import { words } from '../../../data/data';

const HangmanStart = () => {
    
  const {word, keyRefs, setWord, setDisabled, setMessage, setAttemps, disabled, setSolution, setWrongs, setRights} = useContext(HangmanContext)
    
    const startPlay = () => {
      const randomWord = Math.floor(Math.random() * words.length);
      setWord(words[randomWord]);
      setDisabled(true);
      setAttemps(10);
      setMessage(`Tienes 10 intentos`);   
      setWrongs([]); 
      setRights([]);
      setSolution("?")   
      keyRefs.current.forEach((keyRef) => keyRef.disabled = false);        
    };

    useEffect(() => {
     if (word !== "?") {
     setSolution(word.split('').map((l) => "_"))
    }},[word])
    
  return (
    <>
        <button type="button" className="button" id="start" onClick={startPlay} disabled={disabled}>Start</button>
    </>
  )
}

export default HangmanStart