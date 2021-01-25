import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-wrap py-6">{children}</div>
    </>
  );
};

export default Layout;
