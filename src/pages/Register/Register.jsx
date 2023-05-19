import React from 'react';
import '../Login/Login.css';
import { Link } from 'react-router-dom';
import LoginHeader from '../../components/Headers/LoginHeader';
import LoginButton from '../../components/ui/Buttons/LoginButton';


const Register = () => {
 
  return (
    <>
      <LoginHeader />
      <main>
        <form noValidate>
          <input
            type="text"
            name="user"
            id="user"
            className="form-input"
            placeholder="usuario"
            required
          />

          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
            placeholder="contraseña"
            required
          />

          <LoginButton text="Registrar" id="register" />
        </form>
        <p className="register-cta">
          ¿Ya tienes usuario?{' '}
          <Link to="/" className="register-link">
            {'Inicia sesión'}
          </Link>
        </p>
      </main>
    </>
  );
};

export default Register;
