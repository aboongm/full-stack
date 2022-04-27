import React from 'react';

const Content = ({ part, exercises }) => {
  return (
    <div>
      <p>
        {part.part1} {exercises.exercises1}
      </p>
      <p>
        {part.part2} {exercises.exercises2}
      </p>
      <p>
        {part.part3} {exercises.exercises3}
      </p>
    </div>
  );
};

export default Content;
