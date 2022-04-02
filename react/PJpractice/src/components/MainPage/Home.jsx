import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>먼저 보여지는 페이지</p>
      <Link to='/foodtruck'>
        <button>푸드트럭페이지</button>
      </Link>
    </div>
  );
};

export default Home;
