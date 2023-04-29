import React, { useState, useRef, useEffect } from 'react';
import { alphabet } from '../../data/data';

const HangmanGameboard = ( { word, attemps,setAttemps, setMessage, setDisabled } ) => {

  const [fails, setFails] = useState([])
  const [selectedLetter, setSelectedLetter] = useState("")
  const letterRef = useRef()
  
  console.log(word)
 
  const handleLetterSelection = (letter) => {

    
    if (word.includes(selectedLetter)) {
      // word.split('').map((l) => {
      //   if (l === letter) {} 
      // });
      console.log('acierto')
  
    } else {
    const updatedAttemps = attemps - 1
    setAttemps(updatedAttemps);
    setFails([...fails, selectedLetter]);
    setMessage(`Tienes ${updatedAttemps} intentos`);
    if (updatedAttemps === 0) { 
      setMessage("¡No has tenido suerte! Vuelve a jugar");
      setDisabled(false)
      setFails([])
    }
  }

  };


  
  return (
    <div>     
{
  word.split('').map((letter, index) => (
  <p key={index} ref={letterRef} className="hangmancell" hidden={selectedLetter !== letterRef.current?.innerText}>{letter}</p>
  ))
  } 

 <div>
  <p>{fails}</p>
 </div>
  
  <div>
 {
  alphabet.map((letter) => (
<button key={letter} type="button" className="hangman-key" onClick={() => {handleLetterSelection(letter)}}>{letter}</button>
  ))
  } 
  </div>
    
    </div>
  )
}

export default HangmanGameboard