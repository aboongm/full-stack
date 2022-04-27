import React from 'react';
import Part from './Part';

const Content = (props) => {
  return (
    <div>
      <Part part={props.part.part1} exercise={props.exercises.exercises1} />
      <Part part={props.part.part2} exercise={props.exercises.exercises2} />
      <Part part={props.part.part3} exercise={props.exercises.exercises3} />
    </div>
  );
};

export default Content;
