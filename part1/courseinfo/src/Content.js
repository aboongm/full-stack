import React from 'react';
import Part from './Part';

const Content = (props) => {
  // console.log(props.part[0]);
  return (
    <div>
      <Part part={props.part[0]} />
      <Part part={props.part[1]} />
      <Part part={props.part[2]} />
    </div>
  );
};

export default Content;
