import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Image, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { RatingBadge } from 'components';
import products from 'constants/products';

export const ManageProduct = () => {
  const { id: productId } = useParams();

  const product = products.find(({ _id }) => _id === productId);

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
              <RatingBadge value={rating} />
              <span className='d-flex align-items-center'>
                Price: &nbsp; <strong className='fs-4'>${price}</strong>
              </span>
              <Button
                variant='secondary w-100'
                className='mt-3'
                disabled={countInStock === 0}
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
