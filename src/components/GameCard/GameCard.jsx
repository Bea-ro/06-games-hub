import React from 'react';

const GameCard = ( {game, img, desc} ) => {
  return (
    <div>
<h1>{game}</h1>
<figure>
  <img src={img} alt={game} />
  <p>{desc}</p>
</figure>
</div>
  )
};

export default GameCard;