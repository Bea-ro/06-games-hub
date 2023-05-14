import React, { useEffect } from 'react';
import './HangmanGameboard.css'
import HangmanKeyboard from './HangmanKeyboard';


const HangmanGameboard = ( { word, solution, attemps, setMessage, setDisabled, wrongs } ) => {


  useEffect(() => {
if (solution && attemps !== 10) { 
  if (!solution.includes("_")) {
setMessage('¡Enhorabuena crack!')
setDisabled(false)}
}}, [solution])

  
  return (
<div className="hangman-gameboard">
    <div>    
    <p className="letters">{word === "?"? "?": solution}</p>
  </div>

 <div>
   <p className="wrongs">{wrongs}</p> 
 
 </div>
 <HangmanKeyboard attemps={attemps} wrongs={wrongs} setMessage={setMessage} setDisabled={setDisabled}/>
 </div>  
  )
}

export default HangmanGameboard