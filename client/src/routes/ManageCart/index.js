import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { addToCart } from 'actions';

export const ManageCart = () => {
  const { search } = useLocation();

  const { id: productId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const quantity = String(search).split('=')[1] || 1;

    if (productId) dispatch(addToCart(productId, quantity));

    return () => {};
  }, []);

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  return (
    <Container>
      <div>Cart</div>
    </Container>
  );
};
