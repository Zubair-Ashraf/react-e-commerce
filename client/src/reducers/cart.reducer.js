import { CART_ADD_ITEM } from 'constants/types';

let cartItems = localStorage.getItem('cartItems');

cartItems = cartItems ? JSON.parse(cartItems) : [];

export const cartReducer = (state = { cartItems }, action) => {
  const { payload } = action;

  switch (action.type) {
    case CART_ADD_ITEM:
      const exitsItem = state.cartItems.find(({ _id }) => _id === payload._id);

      if (!exitsItem)
        return { ...state, cartItems: [...state.cartItems, payload] };

      const cartItems = state.cartItems.map((item) =>
        item._id === exitsItem._id ? payload : item
      );

      return {
        ...state,
        cartItems,
      };

    default:
      return state;
  }
};
