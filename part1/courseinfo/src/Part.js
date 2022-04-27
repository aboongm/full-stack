import React from 'react';

const Part = (props) => {
  // console.log(props.part);
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  );
};

export default Part;
