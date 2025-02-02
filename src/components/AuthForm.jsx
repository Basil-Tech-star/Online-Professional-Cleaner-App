import React, { useState } from 'react';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ type }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    location: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (type === 'signup') {
        await api.post('/signup', formData);
        alert('User signed up successfully!');
        navigate('/login');
      } else if (type === 'login') {
        const response = await api.post('/login', formData);
        localStorage.setItem('token', response.data.access_token);
        navigate('/cleaners');
      }
    } catch (error) {
      console.error(error);
      alert('Error during authentication');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="phone_number" placeholder="Phone Number" onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">{type === 'signup' ? 'Sign Up' : 'Login'}</button>
    </form>
  );
};

export default AuthForm;
