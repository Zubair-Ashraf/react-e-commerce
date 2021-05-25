import React, { Fragment } from 'react';

export const RatingBadge = ({ ...props }) => {
  const { value, text } = props;

  return (
    <Fragment>
      <span className='text-warning'>
        <i
          className={
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span className='text-warning'>
        {' '}
        <i
          className={
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span className='text-warning'>
        {' '}
        <i
          className={
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span className='text-warning'>
        {' '}
        <i
          className={
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span className='text-warning'>
        {' '}
        <i
          className={
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>{' '}
      <span>{text ?? ''}</span>
    </Fragment>
  );
};
