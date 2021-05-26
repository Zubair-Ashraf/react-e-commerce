import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { RatingBadge } from 'components';

export const ProductCard = ({ ...props }) => {
  const { _id, name, rating, numReviews, price, image } = props;

  return (
    <Card className='p-3 my-3 rounded'>
      <Link to={`/product/${_id}`}>
        <Card.Img variant='top' src={image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${_id}`}>
          <Card.Title as='div'>
            <strong>{name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <RatingBadge value={rating} text={`(${numReviews})`} />
        </Card.Text>
        <Card.Text as='h4'>${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
