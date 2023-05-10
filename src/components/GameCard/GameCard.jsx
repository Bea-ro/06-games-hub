import React from 'react';
import './GameCard.css'

const GameCard = ( {game, image, description} ) => {
  return (
    <div className="game-card">
<h1 className="game-name">{game}</h1>
<figure className="game-card-figure">
  <img src={image} alt={game} />
  <p className="game-description" dangerouslySetInnerHTML={{ __html: description }}></p>
</figure>
</div>
  )
};

export default GameCard;