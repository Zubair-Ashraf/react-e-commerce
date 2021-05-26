import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ProductCard } from './components';
import { useQuery } from 'hooks';
import { Api } from 'services';

export const ManageHome = () => {
  const { isLoading, data } = useQuery(Api.products.list);

  if (isLoading) return <span>Loading...</span>;

  return (
    <Container>
      <h3 className='text-uppercase fw-bold'>Latest Products</h3>
      <Row>
        {data.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductCard {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
