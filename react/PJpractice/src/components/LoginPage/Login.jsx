import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <h1>로그인</h1>
      <form>
        <input name='username' placeholder='아이디' />
        <input name='password' placeholder='비밀번호' type='password' />
        <button>로그인</button>
      </form>

      <Link to='/memberregister'>
        <button>개인 회원가입</button>
      </Link>
      <Link to='/ownerregister'>
        <button>사장님 회원가입</button>
      </Link>
    </>
  );
};

export default Login;
