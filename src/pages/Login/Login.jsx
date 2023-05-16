import React, { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validUser } from '../../data/data';
import './Login.css'
import LoginButton from '../../components/ui/Buttons/LoginButton';
import LoginHeader from '../../components/Headers/LoginHeader';
import { AuthContext } from '../../App';

const Login = (  ) => {

  const {user, setUser, authenticated, setAuthenticated, setIsLogged} = useContext(AuthContext)
  const navigate = useNavigate() 
  
  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (ev) => {
  ev.preventDefault();
  if (user.user === validUser.user && user.password === validUser.password) {
  setAuthenticated(true)
  setIsLogged (true);
  navigate('/home')
} else {
    alert('El email o la contraseña son incorrectos')
  }
  }

useEffect(()=>{
  localStorage.setItem('authenticated', authenticated)
},[authenticated])


  
  return (
    <>
<LoginHeader/>
<main>
      <form onSubmit={handleSubmit} noValidate>
        
          <input type="text" name="user" id="user" className="form-input" 
          placeholder="usuario" required onChange={handleInput} />
       
          <input type="password" name="password" id="password" className="form-input"
          placeholder="contraseña" required onChange={handleInput} />
  
       <LoginButton/>
      </form>
      <p className="register-cta">Regístrate <Link to="/register">{"aquí"}</Link> para poder jugar</p>
      
      </main>
    </>
  )
}

export default Login