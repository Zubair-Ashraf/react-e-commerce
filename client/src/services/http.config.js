import http from 'axios';
import { isEmpty } from 'lodash';
import { toast as showToast } from 'react-toastify';

const axios = http.create({
  baseURL: 'http://localhost:5000',
});

//Request
axios.interceptors.request.use((request) => requestHandler(request));

//Response
axios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => responseError(error)
);

//Request Handler
const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    request.headers['authorization'] = getToken();
  }
  return request;
};

//Response Handler
const responseHandler = (response) => {
  return response;
};

//Response error
const responseError = (error) => {
  if (error.message === 'Network Error') {
    showToast.error('No internet connection');
    return Promise.reject(error);
  }

  if (!isEmpty(error.response && error.response.data.message))
    return Promise.reject(error.response.data.message);
  else return Promise.reject(error.message);
};

//Get authorization token
const getToken = () => {
  let userInfo = localStorage.getItem('userInfo');

  userInfo = userInfo ? JSON.parse(userInfo) : {};

  return userInfo.token;
};

//Check handler enable or not
const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled
    ? false
    : true;
};

export { axios };
