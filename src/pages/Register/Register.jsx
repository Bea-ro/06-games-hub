import React from 'react';
import HomeHeader from '../../components/Headers/HomeHeader';
import LoginButton from '../../components/ui/Buttons/LoginButton';
import '../Login/Login.css';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleInputRegister = (ev) => {
        const { name, value } = ev.target;
        // setUser({ ...user, [name]: value })
      }
    
      const handleRegister = (ev) => {
        ev.preventDefault();
        // login(user)
      }

  return (
    <>
<HomeHeader/>
<main>
<form onSubmit={handleRegister} noValidate>
        
        <input type="text" name="user" id="user" className="form-input" 
        placeholder="usuario" required onChange={handleInputRegister} />
     
        <input type="password" name="password" id="password" className="form-input"
        placeholder="contraseña" required onChange={handleInputRegister} />

     <LoginButton text="Registrar" id="register"/>
    </form>
    <p className="register-cta">¿Ya tienes usuario? <Link to="/" className="register-link">{"Inicia sesión"}</Link></p>
    
      </main>

    </>
  )
}

export default Register