import React from 'react';

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.part.part1.exercises +
        props.part.part2.exercises +
        props.part.part3.exercises}
    </p>
  );
};

export default Total;
