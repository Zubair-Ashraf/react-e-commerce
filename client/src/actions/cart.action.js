import { toast as showToast } from 'react-toastify';
import { CART_ADD_ITEM } from 'constants/types';
import { Api } from 'services';

export const addToCart = (id) => async (dispatch, state) => {
  try {
    const { cart } = state;

    const { data } = await Api.products.one(null, { productId: id });

    dispatch({ type: CART_ADD_ITEM, payload: data });

    localStorage.setItem('cartItems', JSON.stringify(cart.cartItems));
  } catch (error) {
    showToast.error(error || 'Something went wrong');
  }
};
