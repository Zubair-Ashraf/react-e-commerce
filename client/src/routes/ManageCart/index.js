import React, { useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import {
  Container,
  Row,
  Col,
  Table,
  Image,
  ListGroup,
  Button,
} from 'react-bootstrap';
import { LoaderSection } from 'components';
import { addToCart, removeFromCart } from 'actions';

export const ManageCart = () => {
  const { search } = useLocation();

  const { id: productId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const quantity = String(search).split('=')[1] || 1;

    if (productId) dispatch(addToCart(productId, quantity));

    return () => {};
  }, []);

  const state = useSelector((state) => state);

  const { cart, productDetails } = state;

  const { cartItems } = cart;

  const { isLoading } = productDetails;

  const handleRemoveFromCart = (id) => dispatch(removeFromCart(id));

  if (isEmpty(cartItems)) return <EmptyCartSection />;

  if (isLoading) return <LoaderSection />;

  return (
    <Container>
      <Row>
        <Col md={8} className='p-4'>
          <header>
            <h5 className='fw-bold'>Shopping Cart</h5>
          </header>
          <hr />
          <Table responsive>
            <thead>
              <tr>
                <td className='border-0'>
                  <small>Picture</small>
                </td>
                <td className='text-center border-0'>
                  <small>Quantity</small>
                </td>
                <td className='text-center border-0'>
                  <small>Price</small>
                </td>
                <td className='text-center border-0'>
                  <small>Total</small>
                </td>
                <td className='text-center border-0'>&nbsp;</td>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(({ _id, name, brand, image, price, quantity }) => (
                <tr>
                  <td className='d-flex align-items-center py-3'>
                    <Image src={image} fluid rounded width={60} height={60} />
                    <div className='px-3'>
                      <strong>{name}</strong>
                      <br />
                      <small>
                        <span className='badge bg-primary rounded'>
                          {brand}
                        </span>
                      </small>
                    </div>
                  </td>
                  <td className='text-center py-4'>{quantity}</td>
                  <td className='text-center py-4'>
                    {parseFloat(price).toFixed(2)}
                  </td>
                  <td className='text-center py-4'>
                    <b>{parseFloat(quantity * price).toFixed(2)}</b>
                  </td>
                  <td>
                    <i
                      className='fa fa-times text-center py-4 button-icon text-danger'
                      onClick={() => handleRemoveFromCart(_id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Link to='/'>
            <i className='fa fa-arrow-left me-2' />
            Continue Shopping
          </Link>
        </Col>
        <Col md={4} className='p-4 rounded-3' style={{ background: '#f7f7f9' }}>
          <header>
            <h5 className='fw-bold'>Order Summary</h5>
          </header>
          <hr />
          <ListGroup>
            <ListGroup.Item className='d-flex justify-content-between'>
              <strong>Total Items</strong>
              <span>
                {cartItems.reduce(
                  (acc, item) => parseInt(acc) + parseInt(item.quantity),
                  0
                )}
              </span>
            </ListGroup.Item>
            <ListGroup.Item className='d-flex justify-content-between'>
              <strong>Total Price</strong>
              <span>
                {cartItems.reduce(
                  (acc, item) =>
                    parseInt(acc) +
                    parseInt(item.quantity) * parseInt(item.price),
                  0
                )}
              </span>
            </ListGroup.Item>
          </ListGroup>
          <Button variant='secondary' className='mt-3 w-100'>
            Proceed To Checkout
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

const EmptyCartSection = () => {
  return (
    <Container>
      <div className='text-center py-5'>
        <Image
          src='/images/empty_cart.svg'
          width={180}
          alt='empty-cart'
          className='mb-4'
        />
        <h6>You haven't added anything to your cart!</h6>
        <Link to='/'>
          <Button size='sm' className='px-3'>
            Browse now
          </Button>
        </Link>
      </div>
    </Container>
  );
};
