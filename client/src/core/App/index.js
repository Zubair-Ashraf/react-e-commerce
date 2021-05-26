import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';
import { Layout } from 'components';
import { useScroll } from 'hooks';
import 'styles/index.css';

const App = () => {
  const { ScrollToTop } = useScroll();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
