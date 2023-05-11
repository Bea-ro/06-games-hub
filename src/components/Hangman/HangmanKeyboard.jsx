import React, { useContext } from 'react';
import './HangmanKeyboard.css'
import { alphabet } from '../../data/data';
import { KeyboardContext } from '../../pages/Hangman/Hangman';

const HangmanKeyboard = ( {attemps, wrongs, setMessage, setDisabled} ) => {
    
    const {word, keyRefs, setSolution, setAttemps, setWrongs, rights, setRights} = useContext(KeyboardContext)

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
          setMessage(`Tienes ${updatedAttemps} intentos`);
          if (updatedAttemps === 0) { 
            setMessage("¡No has tenido suerte! Vuelve a jugar");
            setDisabled(false);
            setSolution(word);
          }
        }
        };


  return (
    <div className="hangman-keyboard">
        {
  alphabet.map((alphabetLetter, index) => (
<button 
key={alphabetLetter} 
ref={(el) => (keyRefs.current[index] = el)}
type="button" className="key" onClick={() => {handleLetterSelection(alphabetLetter)}}>{alphabetLetter}</button>
  ))
  } 
    </div>
  )
}

export default HangmanKeyboard