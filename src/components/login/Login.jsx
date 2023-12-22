import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import classes from './login.module.css'; // Import the CSS file
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/dashboard');
    // try {
    //   const response = await axios.post('http://localhost:5000/login', {
    //     email,
    //     password,
    //   }, {
    //     withCredentials: true,
    //   });

    //   console.log('Login successful!', response.data);
    //   navigate('/dashboard');
    // } catch (error) {
    //   console.error('Login failed:', error.message);
    // }
  };

  return (
    <div className={classes.stanad}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
        <Link
        style={ {textAlign: "right",
        textDecoration: "none",
        color: "#2299ff",}}
         to="/Registration">Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
