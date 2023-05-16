import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css';
import AuthContext from '../../../App';

const LogoutButton = () => {

  const { setIsLogged } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    setIsLogged (false);
    //pte borrar de localStorage
    navigate('/');
    console.log('hace logout')
    };

  return ( 
    <div className="logout-container">
    <button type="button" className="button" id="logout" onClick={handleLogout}>Cerrar sesión</button>
</div>
  )
}

export default LogoutButton