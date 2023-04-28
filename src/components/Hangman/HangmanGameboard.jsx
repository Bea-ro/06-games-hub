import React, { useState } from 'react'

const HangmanGameboard = () => {

 const [word, setWord] = useState() //casa

 const checkLetter = (index) => {
  console.log("checkLetter cuando metes una letra")
  // //c0, a1, s2, a3
  // e.target.value === word.forEach((letter) => {
  // })
 }

  return (
    <div> 
     
{
  word.forEach((letter, index) => (
  <input key={index} type="text" value={letter} className="hangmancell" onChange={()=> {checkLetter(index)}}/>
  ))
  }

    </div>
  )
}

export default HangmanGameboard