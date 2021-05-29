import { toast as showToast } from 'react-toastify';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
} from 'constants/types';
import { Api } from 'services';

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DETAIL_REQUEST });

    const { data } = await Api.products.one(null, { productId: id });

    dispatch({
      type: CART_ADD_ITEM,
      payload: { ...data, quantity: parseInt(quantity) },
    });

    dispatch({
      type: PRODUCT_DETAIL_SUCCESS,
      payload: { ...data },
    });

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    showToast.error(error || 'Something went wrong');
  }
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: id });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
