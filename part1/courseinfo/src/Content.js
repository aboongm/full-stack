import React from 'react';
import Part from './Part';

const Content = (props) => {
  // console.log(props);
  return (
    <div>
      <Part part={props.part.part1} />
      <Part part={props.part.part2} />
      <Part part={props.part.part3} />
    </div>
  );
};

export default Content;
