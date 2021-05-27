import { Product } from './products.model';
import products from '../../constants/products';

export const getProducts = async (_, res) => {
  const products = await Product.find({});

  res.send(products);
};

export const getProduct = async (req, res) => {
  const productId = req.params.id;

  const product = await Product.findById(productId);

  res.send(product);
};
