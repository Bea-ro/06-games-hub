import React, { useState, useEffect } from 'react';
import { alphabet } from '../../data/data';

const HangmanGameboard = ( { word, attemps,setAttemps, setMessage, setDisabled } ) => {

  const [fails, setFails] = useState([])
  const [rights, setRights] = useState([])
  
  console.log(word)
 
  //pte cuadno se aciera la palabra resetear todo como cuando se acaban los intentos
  
  const printRights = ((letter) => {
    const position = word.indexOf(letter)
    setRights([...rights.slice(0, position), letter, ...rights.slice(position)]); //ver las repes
    console.log('en print rights', rights)
   })

 
  const handleLetterSelection = (letter) => {
    if (word.includes(letter)) {      
     console.log('acierto');
     printRights(letter);
    } else {
    const updatedAttemps = attemps - 1
    
    setAttemps(updatedAttemps);
    setFails([...fails, letter]);
    console.log(fails)
    setMessage(`Tienes ${updatedAttemps} intentos`);
    if (updatedAttemps === 0) { 
      setMessage("¡No has tenido suerte! Vuelve a jugar");
      setDisabled(false)
      setFails([])
    }
  }
  console.log('al final del handleSelection', rights)
  };

  return (
<>
    <div>     
  <p>{rights}</p>
  </div>

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
  </>  
  )
}

export default HangmanGameboard