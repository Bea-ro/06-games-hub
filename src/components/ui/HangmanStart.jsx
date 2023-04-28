import React, { useState, useEffect } from 'react';

const StartButton = ( { word, setWord, disabled, setDisabled} ) => {
    
    const words = ["arbol","casa"] //ampliar en data o ver API RAE   
    const [inputLenght, setInputLength] = useState()  
    
    const startPlay = () => {
      const randomWord = Math.floor(Math.random() * words.length);
      setWord(words[randomWord]);
      setDisabled(true);
      setInputLength(word.length)
    };

  return (
    <div>
        <button type="button" onClick={startPlay} disabled={disabled}>Start</button>
    </div>
  )
}

export default StartButton