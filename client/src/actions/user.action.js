import { toast as showToast } from 'react-toastify';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from 'constants/types';
import { Api } from 'services';

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
