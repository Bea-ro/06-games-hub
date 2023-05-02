import React, { useState, useEffect } from 'react';
import { alphabet } from '../../data/data';
import './HangmanGameboard.css'

const HangmanGameboard = ( { keyRefs, word, attemps,setAttemps, setMessage, setDisabled, solution, setSolution, fails, setFails } ) => {

  const [rights, setRights] = useState([])
     
  console.log(word)
  
  
  const handleLetterSelection = (letter) => {

  const position = alphabet.indexOf(letter)
  keyRefs.current[position].disabled = true

  

    if (word.includes(letter)) {  
      setSolution(
        word.split('').map((l) => {
          return l === letter? l : (rights.includes(l) ? l :"_")
      })
      )
      setRights([...rights, letter]) 
    } else {
    const updatedAttemps = attemps - 1
    
    setAttemps(updatedAttemps);
    setFails([...fails, letter]);
    setMessage(`Tienes ${updatedAttemps} intentos`);
    if (updatedAttemps === 0) { 
      setMessage("¡No has tenido suerte! Vuelve a jugar");
      setDisabled(false);
      setSolution(word)
    }
  }
  };

  useEffect(() => {
if (solution && attemps !== 0) { 
  if (!solution.includes("_")) {
setMessage('¡Enhorabuena!')
setDisabled(false);

// setInterval (() => {
//   setSolution("");
//   setDisabled(false)
//   setFails([]);
//   keyRefs.current.forEach((keyRef) => keyRef.disabled = false);
//   setMessage('Tienes 10 intentos')    
//   }, 2000)

}}
  }, [solution])

  return (
<>
    <div>     
<p>{solution}</p>
  </div>

 <div>
   <p>{fails}</p> 
 </div>
  
  <div>
 {
  alphabet.map((alphabetLetter, index) => (
<button 
key={alphabetLetter} 
ref={(el) => (keyRefs.current[index] = el)}
type="button" className="hangman-key" onClick={() => {handleLetterSelection(alphabetLetter)}}>{alphabetLetter}</button>
  ))
  } 

 

  </div>
  </>  
  )
}

export default HangmanGameboard