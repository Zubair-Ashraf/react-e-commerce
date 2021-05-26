import { axios } from './http.config.js';

class Products {
  list = () => axios.get(`/api/products`);
  one = (_, { productId }) => axios.get(`/api/products/${productId}`);
}

const ProductsService = new Products();
export { ProductsService };
