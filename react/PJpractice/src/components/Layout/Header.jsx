import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <div class='container-fluid'>
        <Link to='/' class='navbar-brand'>
          Foodtruck Around Me
        </Link>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarColor03'
          aria-controls='navbarColor03'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <form class='d-flex'>
          <input
            class='form-control me-sm-2'
            type='text'
            placeholder='Search'
          />
          <button class='btn btn-secondary my-2 my-sm-0' type='submit'>
            Search
          </button>
        </form>
        <div class='collapse navbar-collapse' id='navbarColor03'>
          <ul class='navbar-nav me-auto'>
            <li class='nav-item'>
              <Link to='/' class='nav-link active'>
                Home
                <span class='visually-hidden'>(current)</span>
              </Link>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Store
              </a>
            </li>
            <li class='nav-item'>
              <Link to='/cart' class='nav-link'>
                Cart
              </Link>
            </li>
            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle'
                data-bs-toggle='dropdown'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Mypage
              </a>
              <div class='dropdown-menu'>
                <a class='dropdown-item' href='#'>
                  Action
                </a>
                <a class='dropdown-item' href='#'>
                  Another action
                </a>
                <a class='dropdown-item' href='#'>
                  Something else here
                </a>
                <div class='dropdown-divider'></div>
                <a class='dropdown-item' href='#'>
                  Separated link
                </a>
              </div>
            </li>
            <li class='nav-item'>
              <Link to='/login' class='nav-link'>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
