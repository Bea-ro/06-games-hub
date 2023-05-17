import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ( {children} ) => {

  const isAuthenticated = localStorage.getItem('authenticated') === 'true'

  if (!isAuthenticated) {
    return <Navigate to='/'/>
    }
    return children
    
}

export default RequireAuth
