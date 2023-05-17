import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validUser } from '../../data/data';
import './Login.css'
import LoginButton from '../../components/ui/Buttons/LoginButton';
import LoginHeader from '../../components/Headers/LoginHeader';
import { AuthContext } from '../../App';

const Login = () => {

  const {completeUser, setCompleteUser, setIsLogged} = useContext(AuthContext)
  const navigate = useNavigate() 
  
  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setCompleteUser({ ...completeUser, [name]: value })
  }
  

  const handleSubmit = (ev) => {
  ev.preventDefault();
  if (completeUser.user === validUser.user && completeUser.password === validUser.password) {
  localStorage.setItem('authenticated', true)
  setIsLogged (true);
  navigate('/home')
} else {
    alert('El email o la contraseña son incorrectos')
  }
  }
  

  return (
    <>
<LoginHeader/>
<main>
      <form onSubmit={handleSubmit} noValidate>
        
          <input type="text" name="user" id="user" className="form-input" 
          placeholder="usuario" required onChange={handleInput} />
       
          <input type="password" name="password" id="password" className="form-input"
          placeholder="contraseña" required onChange={handleInput} />
  
       <LoginButton text="Entrar" id="login"/>
      </form>
      <p className="register-cta">Regístrate <Link to="/register" className="register-link">{"aquí"}</Link> para poder jugar</p>
      
      </main>
    </>
  )
}

export default Login