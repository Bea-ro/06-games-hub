import React from 'react';
import './Button.css'

const LoginButton = ( {id, text} ) => {
  return (
    <>
         <button type="submit" className="button" id={id}>{text}</button>
    </>
  )
}

export default LoginButton