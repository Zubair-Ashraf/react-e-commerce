import products from '../../constants/products';

export const getProducts = async (_, res) => {
  res.send(products);
};

export const getProduct = async (req, res) => {
  const productId = req.params.id;

  const product = products.find(({ _id }) => _id === productId);

  res.send(product);
};
