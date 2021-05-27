import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from 'constants/types';
import { useQuery } from 'hooks';
import { Api } from 'services';

const list = () => async (dispatch) => {
  const { isLoading, data, error } = useQuery(Api.products.list);

  if (isLoading) dispatch({ type: PRODUCT_LIST_REQUEST });

  if (data) dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

  if (error) dispatch({ type: PRODUCT_LIST_FAIL, payload: error });
};

export const products = { list };
