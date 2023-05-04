import React from 'react'

const SudokuSquare = ( { solution, setSelectedInput, inputRefs } ) => {

const handleInputClick = (index) => {
  // setSelectedInput(e.target);
  // setSelectedInputIndex(inputRefs.indexOf(e.target);
  setSelectedInput(inputRefs[index]);
}


const handleInputChange = () => {
    console.log('ha cambiado el input')
}

  return (
         <div className="sdk-gameboard">
        {
  solution.map((solu, index) => (
    <input key={index} ref={(el) => (inputRefs.current[index] = el)} type="number" className="sdk-cell" value={solu} onClick={()=>{handleInputClick(index)}} onChange={handleInputChange}/>
  ))
  }
    </div>
  )
}

export default SudokuSquare