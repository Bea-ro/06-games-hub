import React from 'react';
import './GameCard.css'

const GameCard = ( {game, image, description} ) => {

  return (
    <div className="game-card">
<h1 className="game-name">{game}</h1>
  <img src={image} alt={game} className="game-image" />
<p className="game-description" dangerouslySetInnerHTML={{ __html: description }}></p>
</div>
  )
};

export default GameCard;