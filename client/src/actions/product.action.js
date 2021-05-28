import { toast as showToast } from 'react-toastify';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
} from 'constants/types';
import { Api } from 'services';

const list = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await Api.products.list();

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    showToast.error(error || 'Something went wrong');
  }
};

const one = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAIL_REQUEST });

    const { data } = await Api.products.one(null, { productId: id });

    dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    showToast.error(error || 'Something went wrong');
  }
};

export const products = { list, one };
