import React, { useContext } from 'react';
import './HangmanKeyboard.css'
import { alphabet } from '../../data/data';
import { HangmanContext } from '../../pages/Hangman/Hangman';

const HangmanKeyboard = ( {attemps, wrongs, setMessage, setDisabled} ) => {
    
    const {word, keyRefs, setSolution, setAttemps, setWrongs, rights, setRights, disabled } = useContext(HangmanContext)

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
          setWrongs([...wrongs, letter]);
          if (updatedAttemps === 0) {
          setMessage(`¡No has tenido suerte! <br> La palabra es "${word}"`) 
          setDisabled(false);
          } else {setMessage(`Tienes ${updatedAttemps} intentos`)}
        }
        };


  return (
    <div className="hangman-keyboard">
        {
  alphabet.map((alphabetLetter, index) => (
<button 
key={alphabetLetter} 
ref={(el) => (keyRefs.current[index] = el)}
type="button" className="key" disabled={!disabled}
onClick={() => {handleLetterSelection(alphabetLetter)}}>{alphabetLetter}</button>
  ))
  } 
    </div>
  )
}

export default HangmanKeyboard