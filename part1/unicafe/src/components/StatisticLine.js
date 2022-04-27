import React from 'react';

const StatisticLine = (props) => {
  return (
    <>
      <p>
        {props.text} {props.number}
      </p>
    </>
  );
};

export default StatisticLine;
