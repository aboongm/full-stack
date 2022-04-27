import React from 'react';

const Total = ({ exercises }) => {
  return (
    <p>
      Number of exercises{' '}
      {exercises.exercises1 + exercises.exercises2 + exercises.exercises3}
    </p>
  );
};

export default Total;
