import { toast as showToast } from 'react-toastify';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_CHANGE_PASSWORD_REQUEST,
  USER_CHANGE_PASSWORD_SUCCESS,
  USER_CHANGE_PASSWORD_FAIL,
} from 'constants/types';
import { Api } from 'services';

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const { data } = await Api.user.register({ name, email, password });

    dispatch({ type: USER_REGISTER_SUCCESS, payload: { ...data } });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error || 'Something went wrong',
    });

    showToast.error(error || 'Something went wrong');
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const { data } = await Api.user.login({ email, password });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: { ...data } });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error || 'Something went wrong',
    });

    showToast.error(error || 'Something went wrong');
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT });

  localStorage.removeItem('userInfo');
};

export const changePassword =
  (currentPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({ type: USER_CHANGE_PASSWORD_REQUEST });

      const { data } = await Api.user.changePassword({
        currentPassword,
        newPassword,
      });

      dispatch({ type: USER_CHANGE_PASSWORD_SUCCESS });

      dispatch({ type: USER_LOGOUT });

      localStorage.removeItem('userInfo');

      showToast.success(data.message);
    } catch (error) {
      dispatch({
        type: USER_CHANGE_PASSWORD_FAIL,
        payload: error || 'Something went wrong',
      });

      showToast.error(error || 'Something went wrong');
    }
  };
