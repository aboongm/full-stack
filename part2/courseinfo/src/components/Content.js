import React from 'react';

const Content = ({ parts }) => {
  return (
    <>
      <ul>
        {parts.map((part) => (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
      <h4>
        total of{' '}
        {parts
          .map((item) => item.exercises)
          .reduce((acc, index) => acc + index, 0)}{' '}
        exercises
      </h4>
    </>
  );
};

export default Content;
