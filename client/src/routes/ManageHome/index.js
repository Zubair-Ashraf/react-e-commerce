import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { LoaderSection } from 'components';
import { ProductCard } from './components';
import { products } from 'actions';

export const ManageHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(products.list());

    return () => {};
  }, []);

  const productList = useSelector((state) => state.productList);

  const { isLoading, products: data } = productList;

  if (isLoading) return <LoaderSection />;

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
