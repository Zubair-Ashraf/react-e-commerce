import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from 'core/Routes';
import { Layout } from 'components';
import { useScroll } from 'hooks';
import store from 'store';
//styles
import 'styles/index.css';

const App = () => {
  const { ScrollToTop } = useScroll();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Provider store={store}>
        <Layout>
          <Routes />
        </Layout>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
