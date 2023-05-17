import React, { useContext } from 'react';
import './Headers.css';
import LogoutButton from '../ui/Buttons/LogoutButton';
import { AuthContext } from '../../App';

const HomeHeader = () => {

const { completeUser } = useContext(AuthContext)

  return (
    <header>
      <h1>¿A qué jugamos {completeUser?.user}?
        </h1>
      <LogoutButton/>
    </header>
  )
}

export default HomeHeader