import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ( {isLogged, children} ) => {

  if (!isLogged) {
    return <Navigate to='/'/>
    }
    return children
    
}

export default RequireAuth
