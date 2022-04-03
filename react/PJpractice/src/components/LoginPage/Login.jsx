import React from 'react';

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div class='container'>
      <div class='row'>
        <div class='col=lg-4'></div>
        <form>
          <fieldset>
            <legend>Login</legend>
            <div class='form-group row'></div>
            <div class='form-group'>
              <label for='exampleInputEmail1' class='form-label mt-4'>
                Email address
              </label>
              <input
                type='email'
                class='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter email'
                required
              />
            </div>
            <div class='form-group'>
              <label for='exampleInputPassword1' class='form-label mt-4'>
                Password
              </label>
              <input
                type='password'
                class='form-control'
                id='exampleInputPassword1'
                placeholder='Password'
                required
              />
            </div>
          </fieldset>
          <button type='submit' class='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
      <div class='col=lg-4'></div>
    </div>
  );
};

export default Login;
