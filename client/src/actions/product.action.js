import { toast as showToast } from 'react-toastify';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from 'constants/types';
import { Api } from 'services';

const list = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await Api.products.list();

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    showToast.error(error || 'Something went wrong');
    // dispatch({ type: PRODUCT_LIST_FAIL, payload: error });
  }
};

export const products = { list };
