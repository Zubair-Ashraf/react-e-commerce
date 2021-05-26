import { ProductsService } from './products.service';

const Api = {
  products: {
    list: ProductsService.list,
    one: ProductsService.one,
  },
};

export { Api };
