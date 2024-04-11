/*import React, { useState } from 'react';
import Main from "../components/section/Main";

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invitationCode, setInvitationCode] = useState('');

  // 회원가입 처리 함수
  const handleSubmit = async (event) => {
    event.preventDefault();
    // 회원가입 API 호출
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
    // 회원가입 처리 결과 처리...
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <button type="submit">회원가입</button>
    </form>
  );
}

export default Home;



import React, { useState } from 'react';
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

export default Register;*/