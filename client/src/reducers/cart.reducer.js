import { CART_ADD_ITEM } from 'constants/types';

const cartItems = localStorage.getItem('cartItems') || [];

export const cartReducer = (state = { cartItems }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };

    default:
      return state;
  }
};
