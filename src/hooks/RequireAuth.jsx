import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../App';

const RequireAuth = ( {children} ) => {

  const { authenticated } = useContext(AuthContext)

  if (!authenticated) {
    return <Navigate to='/'/>
    }
    return children
    
}

export default RequireAuth
