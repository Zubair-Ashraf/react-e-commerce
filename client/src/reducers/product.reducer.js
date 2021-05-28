import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
} from 'constants/types';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { isLoading: true, products: [] };

    case PRODUCT_LIST_SUCCESS:
      return { isLoading: false, products: action.payload };

    case PRODUCT_LIST_FAIL:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const productDetailReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { ...state, isLoading: true };

    case PRODUCT_DETAIL_SUCCESS:
      return { isLoading: false, product: action.payload };

    case PRODUCT_DETAIL_FAIL:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};
