import React from 'react';
import './Title.css'

const Title = ( {game} ) => {

  return (
    <>
        <h1 className="game-title">{game}</h1>
        </>
  )
}

export default Title