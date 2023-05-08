import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {

  return (
    <div>
       <button className="back-button"><Link to="/" >Volver</Link></button>
    </div>
  )
}

export default BackButton