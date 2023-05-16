import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const BackButton = () => {

  return (
    <>
       <button className="button" id="back"><Link to="/home">Volver</Link></button>
    </>
  )
}

export default BackButton