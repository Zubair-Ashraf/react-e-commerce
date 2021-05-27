import { Product } from './products.model';

export const getProducts = async (_, res) => {
  const products = await Product.find({});

  res.send(products);
};

export const getProduct = async (req, res) => {
  const productId = req.params.id;

  const product = await Product.findById(productId);

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  res.send(product);
};
