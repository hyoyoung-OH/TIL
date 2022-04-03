import React from 'react';
import classes from './LoginPage.module.css';

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className='Login'>
        <section className={classes.title}>
          <h1>Login</h1>
        </section>
        <section className='EmailAndPw'>
          <div className='email'>
            <div className='form-floating mb-3'>
              <input
                type='email'
                class='form-control'
                id='floatingInput'
                placeholder='name@example.com'
              />
              <label for='floatingInput'>Email address</label>
            </div>
          </div>
          <div class='form-floating'>
            <input
              type='password'
              class='form-control'
              id='floatingPassword'
              placeholder='Password'
            />
            <label for='floatingPassword'>Password</label>
          </div>
          <div className='password'></div>
          <div className='LoginBtn'>
            <div className='d-grid gap-2'>
              <button className='btn btn-lg btn-warning' type='button'>
                Login
              </button>
            </div>
          </div>
        </section>
        <section className='SocialLogin'>
          소셜로그인(구글이랑 네이버 달 예정)
        </section>
        <section className='JoinBtn'>
          <Link to='/memberRegister'>
            <div className='d-grid gap-2'>
              <button className='btn btn-lg btn-warning' type='button'>
                Join - 조인 라우터 달기
              </button>
            </div>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Login;
