import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeHeader from '../../components/Headers/HomeHeader';
import { validUser } from '../../data/data';
import './Login.css'
import LoginButton from '../../components/ui/Buttons/LoginButton';

const Login = ( {setIsLogged} ) => {

  const navigate = useNavigate() 

  const [user, setUser] = useState();
  
  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (ev) => {
  ev.preventDefault();
  if (user.email === validUser.email && user.password === validUser.password) {
  localStorage.setItem('user', JSON.stringify(user));
  setIsLogged (true);
  navigate('/home')
} else {
    alert('El email o la contraseña son incorrectos')
  }
  }

  
  console.log('user de fuera', user)

const handleLogout = () => {
setIsLogged (false);
};
  
  return (
    <>
<HomeHeader/>
<main>
      <form onSubmit={handleSubmit} noValidate>
        
          <input type="email" name="email" id="email" className="form-input" 
          placeholder="email" required onChange={handleInput} />
       
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