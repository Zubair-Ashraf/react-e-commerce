import products from '../../constants/products';

export const getProducts = async (req, res) => {
  res.send(products);
};
