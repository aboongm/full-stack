import React from 'react';

const StatisticLine = ({ feedback, text }) => {
  return (
    <div>
      {text}: {feedback}
    </div>
  );
};

export default StatisticLine;
