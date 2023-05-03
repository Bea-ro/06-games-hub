import React, { useEffect } from 'react';
import './HangmanGameboard.css'
import HangmanKeyboard from './HangmanKeyboard';


const HangmanGameboard = ( { solution, attemps, setMessage, setDisabled, fails } ) => {

  useEffect(() => {
if (solution && attemps !== 0) { 
  if (!solution.includes("_")) {
setMessage('¡Enhorabuena!')
setDisabled(false);
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
 <HangmanKeyboard attemps={attemps} fails={fails} setMessage={setMessage} setDisabled={setDisabled}
 />

  </>  
  )
}

export default HangmanGameboard