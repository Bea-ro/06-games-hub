import React, { useState, useEffect } from 'react';
import { alphabet } from '../../data/data';
import './HangmanGameboard.css'

const HangmanGameboard = ( { word, attemps,setAttemps, setMessage, setDisabled } ) => {

  const [rights, setRights] = useState([])
  const [fails, setFails] = useState([])
   const [solution, setSolution] = useState("")
   
  console.log(word)

  //deshabilitar botonoes del teclado cuando ya se han pulsado una vez y volverlos a habilitar al acabar partida
    
  
  const handleLetterSelection = (letter) => {
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
      setSolution("")
      setFails([])
    }
  }
  };

  useEffect(() => {
if (solution) { 
  if (!solution.includes("_")) {
alert('Enhorabuena')
setMessage(`Tienes 10 intentos`)
setSolution("");
setDisabled(false)
setFails([]);

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
  alphabet.map((alphabetLetter) => (
<button key={alphabetLetter} type="button" className="hangman-key" onClick={() => {handleLetterSelection(alphabetLetter)}}>{alphabetLetter}</button>
  ))
  } 
  </div>
  </>  
  )
}

export default HangmanGameboard