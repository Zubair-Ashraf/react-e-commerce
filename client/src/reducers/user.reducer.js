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

let userInfo = localStorage.getItem('userInfo');

userInfo = userInfo ? JSON.parse(userInfo) : {};

export const userReducer = (state = { userInfo }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
    case USER_REGISTER_REQUEST:
      return { isLoading: true };

    case USER_LOGIN_SUCCESS:
    case USER_REGISTER_SUCCESS:
      return { isLoading: false, userInfo: action.payload };

    case USER_LOGIN_FAIL:
    case USER_REGISTER_FAIL:
      return { isLoading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const changePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CHANGE_PASSWORD_REQUEST:
      return { isLoading: true };

    case USER_CHANGE_PASSWORD_SUCCESS:
      return { isLoading: false, isSuccess: true };

    case USER_CHANGE_PASSWORD_FAIL:
      return { isLoading: false, error: action.payload };

    default:
      return { ...state };
  }
};
