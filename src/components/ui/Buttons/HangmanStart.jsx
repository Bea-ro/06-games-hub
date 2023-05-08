import React, { useEffect } from 'react';

const HangmanStart = ( { word, keyRefs, setWord, setDisabled, setMessage, setAttemps, disabled, setSolution, setFails, setRights} ) => {
    
    const words = ["arbol","casa", "mujer", "perro"] //ampliar en data o ver API RAE   
        
    const startPlay = () => {
      const randomWord = Math.floor(Math.random() * words.length);
      setWord(words[randomWord]);
      setDisabled(true);
      setAttemps(10);
      setMessage(`Tienes 10 intentos`);   
      setFails([]); 
      setRights([])   
      keyRefs.current.forEach((keyRef) => keyRef.disabled = false);        
    };

    useEffect(() => {
     if (word !== "ahorcado") {
     setSolution(word.split('').map((l) => "_"))
    }},[word])
    
  return (
    <div>
        <button type="button" onClick={startPlay} disabled={disabled}>Start</button>
    </div>
  )
}

export default HangmanStart