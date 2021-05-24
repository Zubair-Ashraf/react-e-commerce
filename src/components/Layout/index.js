import React from 'react';
import { Header, Footer } from './components';

export const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
