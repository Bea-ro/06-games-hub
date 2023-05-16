import React from 'react';
import HomeHeader from '../../components/Headers/HomeHeader';

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
        <label htmlFor="email">
          <input type="email" name="email" id="email" required onChange={handleInputRegister} />
        </label>
        <label htmlFor="password">
          <input type="password" name="password" id="password" required onChange={handleInputRegister} />
        </label>
        <button type="submit">Registrar</button>
      </form>
      </main>

    </>
  )
}

export default Register