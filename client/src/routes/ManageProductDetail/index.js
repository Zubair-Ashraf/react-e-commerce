import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Image,
  Row,
  Col,
  Button,
  ListGroup,
  Form,
  FormGroup,
} from 'react-bootstrap';
import { RatingBadge, LoaderSection } from 'components';
import { products } from 'actions';

export const ManageProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const { id: productId } = useParams();

  const { push } = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(products.one(productId));

    return () => {};
  }, []);

  const productDetails = useSelector((state) => state.productDetails);

  const { isLoading, product } = productDetails;

  const {
    name,
    image,
    description,
    price,
    rating,
    brand,
    category,
    countInStock,
  } = product;

  const handleQuantityChange = ({ target: { value: quantity } }) =>
    setQuantity(quantity);

  const handleAddToCart = () => push(`/cart/${productId}?qty=${quantity}`);

  if (isLoading) return <LoaderSection />;

  return (
    <Container>
      <Row>
        <Col md={6} className='border border-2 border-muted p-2'>
          <Image src={image} alt={name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h5 className='fw-bold'>{name}</h5>
              <span className='badge bg-primary'>{brand}</span>
              <span className='badge bg-primary ms-2'>{category}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>{description}</p>
              <Row>
                <Col md={9}>
                  <RatingBadge value={rating} />
                  <span className='d-flex align-items-center'>
                    Price: &nbsp; <strong className='fs-4'>${price}</strong>
                  </span>
                </Col>
                {countInStock ? (
                  <Col md={3}>
                    <FormGroup>
                      <Form.Label>
                        <i>Quantity</i>
                      </Form.Label>
                      <select
                        className='form-select'
                        onChange={handleQuantityChange}
                      >
                        {[...Array(countInStock).keys()].map((count, index) => (
                          <option key={index} value={count + 1}>
                            {count + 1}
                          </option>
                        ))}
                      </select>
                    </FormGroup>
                  </Col>
                ) : null}
              </Row>
              <Button
                variant='secondary w-100'
                className='mt-3'
                disabled={countInStock === 0}
                onClick={handleAddToCart}
              >
                <i className='fas fa-shopping-cart' /> &nbsp; Add to cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
