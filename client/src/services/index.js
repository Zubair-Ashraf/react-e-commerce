import { ProductsService } from './products.service';
import { UserService } from './users.service';

const Api = {
  products: {
    list: ProductsService.list,
    one: ProductsService.one,
  },
  user: {
    login: UserService.login,
    register: UserService.register,
  },
};

export { Api };
