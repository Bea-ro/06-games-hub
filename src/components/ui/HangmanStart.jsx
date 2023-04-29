import React from 'react';

const StartButton = ( { setWord, setDisabled, setMessage, setAttemps, disabled} ) => {
    
    const words = ["arbol","casa", "mujer", "perro"] //ampliar en data o ver API RAE   
        
    const startPlay = () => {
      const randomWord = Math.floor(Math.random() * words.length);
      setWord(words[randomWord]);
      setDisabled(true);
      setAttemps(10);
      setMessage(`Tienes 10 intentos`);
    };

  return (
    <div>
        <button type="button" onClick={startPlay} disabled={disabled}>Start</button>
    </div>
  )
}

export default StartButton