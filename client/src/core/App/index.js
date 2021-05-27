import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Routes from 'core/Routes';
import { Layout } from 'components';
import { useScroll } from 'hooks';
import store from 'store';
//styles
import 'styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { ScrollToTop } = useScroll();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Provider store={store}>
        <Layout>
          <Routes />
          <ToastContainer hideProgressBar={true} />
        </Layout>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
