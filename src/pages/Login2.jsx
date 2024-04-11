import React, { useState } from 'react';
import Main from "../components/section/Main";
import { useNavigate } from 'react-router-dom'; // useHistory 훅을 임포트합니다.

function Login1() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 관리합니다.
  const Navigate = useNavigate(); // useHistory 훅을 사용합니다.

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('로그인 시도:', email, password);
    // 로그인 성공 로직을 여기에 구현합니다. 
    // 예제에서는 입력된 이메일과 비밀번호를 검사하지 않고, 직접 로그인 성공으로 가정합니다.
    
    // 로그인 성공 상태로 설정
    setIsLoggedIn(true);

    // 로그인 성공 후 메인 페이지로 리디렉션
    Navigate('/'); // '/main'은 메인 페이지의 경로로, 실제 경로에 맞게 변경해야 합니다.
  };

  if (isLoggedIn) {
    return <div>로그인 성공!</div>;
  }

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
