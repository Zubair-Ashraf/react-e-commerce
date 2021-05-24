import React, { Fragment } from 'react';
import { Header, Footer } from './components';

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};
