import React, { useState } from 'react';
import Main from "../components/section/Main";
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    user_id: '',
    name: '',
    email: '',
    password: '',
    tel: '',
    dateJoined: new Date().toISOString().slice(0, 19).replace('T', ' '),
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/register', formData);
      console.log(res.data);
      alert('회원가입 성공!');
    } catch (error) {
      console.error(error);
      alert('회원가입 실패');
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
      <h2>회원가입</h2>
      <input type="text" name="user_id" placeholder="User ID" onChange={handleChange} required />
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <input type="text" name="tel" placeholder="Telephone" onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} />
      <button type="submit">가입하기</button>
    </form>
    </div>
  );
}

export default Register;