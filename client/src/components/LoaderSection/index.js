import React from 'react';
import { Spinner } from 'react-bootstrap';

export const LoaderSection = () => {
  return (
    <div className='py-5 text-center'>
      <Spinner animation='border' role='status' />
      <br />
      <span>Loading...</span>
    </div>
  );
};
