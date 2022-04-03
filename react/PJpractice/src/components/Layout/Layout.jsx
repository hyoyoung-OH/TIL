import React from 'react';
import Header from './Header';
import Main from './Main';

const Layout = () => {
  return (
    <>
      <Header />
      <div class='container'>
        <div class='row'>
          <div class='col=lg-4'></div>
          <div class='col=lg-4'></div>

          <Main />
        </div>
      </div>
    </>
  );
};

export default Layout;
