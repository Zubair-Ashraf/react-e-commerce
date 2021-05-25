import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ProductCard } from './components';
import products from 'constants/products';

export const ManageHome = () => {
  return (
    <Container>
      <h3 className='text-uppercase fw-bold'>Latest Products</h3>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductCard {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
