import { axios } from './http.config.js';

class Products {
  list = () => axios.get(`/api/products`);
  one = (_, queryParam) => axios.get(`/api/products/${queryParam}`);
}

const ProductsService = new Products();
export { ProductsService };
