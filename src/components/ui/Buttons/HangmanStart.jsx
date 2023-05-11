import React, { useEffect } from 'react';
import './Button.css';

const HangmanStart = ( { word, keyRefs, setWord, setDisabled, setMessage, setAttemps, disabled, setSolution, setWrongs, setRights} ) => {
    
    const words = ["arbol","casa", "mujer", "perro"] //ampliar en data o ver API RAE  
        
    const startPlay = () => {
      const randomWord = Math.floor(Math.random() * words.length);
      setWord(words[randomWord]);
      setDisabled(true);
      setAttemps(10);
      setMessage(`Tienes 10 intentos`);   
      setWrongs([]); 
      setRights([])   
      keyRefs.current.forEach((keyRef) => keyRef.disabled = false);        
    };

    useEffect(() => {
     if (word !== "ahorcado") {
     setSolution(word.split('').map((l) => "_"))
    }},[word])
    
  return (
    <>
        <button type="button" className="button" id="start" onClick={startPlay} disabled={disabled}>Start</button>
    </>
  )
}

export default HangmanStart