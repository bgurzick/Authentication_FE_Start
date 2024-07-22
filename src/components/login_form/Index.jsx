import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth/auth_context';


const LoginForm = ({ setNewUser }) => {
  const nav = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(forData);
    console.log
  }

  const handleClick = () => {
    setNewUser(true);
  };

  return (
    <div className='forms'>
      <h2>Login</h2>
      <form autoComplete='off'>
        <label htmlFor='email'>Email: </label>
        <input type='email' id='email' name='email' placeholder='Email' />
        <label htmlFor='password'>Password: </label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          minLength='6'
        />
        <button type='submit' onClick={handleClick}>
          Log In
        </button>
      </form>
      <p>
        Dont have an account? <button onClick={handleClick}>Sign Up</button>
      </p>
    </div>
  );
};

export default LoginForm;
