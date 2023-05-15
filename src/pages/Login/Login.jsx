import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import HomeHeader from '../../components/Headers/HomeHeader';

const Login = () => {

    const { login } = useAuth();
  const [user, setUser] = useState('');


  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    login(user)
  }
  
  return (
    <>
<HomeHeader/>
<main>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="email">
          <input type="email" name="email" id="email" required onChange={handleInput} />
        </label>
        <label htmlFor="password">
          <input type="password" name="password" id="password" required onChange={handleInput} />
        </label>
        <button type="submit">Entrar</button>
      </form>
      <Link to="/register">
        {"Regístrate para poder jugar"}
      </Link>
      </main>
    </>
  )
}

export default Login