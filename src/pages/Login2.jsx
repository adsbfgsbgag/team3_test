import React, { useState } from 'react';
import Main from "../components/section/Main";

function Login1() {
  // 로그인 폼의 상태를 관리하는 useState 훅
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 이메일과 비밀번호 입력을 처리하는 핸들러
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 로그인 버튼 클릭 시 실행되는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 로그인 로직을 구현합니다.
    // 예: 백엔드 서버에 로그인 요청을 보내는 코드
    console.log('로그인 시도:', email, password);
    // 로그인 성공 후 처리 로직
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default Login1;
