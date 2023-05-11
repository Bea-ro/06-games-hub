import React, { useEffect } from 'react';
import './HangmanGameboard.css'
import HangmanKeyboard from './HangmanKeyboard';


const HangmanGameboard = ( { solution, attemps, setMessage, setDisabled, wrongs } ) => {

  useEffect(() => {
if (solution && attemps !== 0) { 
  if (!solution.includes("_")) {
setMessage('¡Enhorabuena!')
setDisabled(false);
}}
  }, [solution])

  return (
<>
    <div className="word">     
<p>{solution}</p>
  </div>

 <div className="wrongs">
   <p>{wrongs}</p> 
 </div>
 <HangmanKeyboard attemps={attemps} wrongs={wrongs} setMessage={setMessage} setDisabled={setDisabled}
 />

  </>  
  )
}

export default HangmanGameboard