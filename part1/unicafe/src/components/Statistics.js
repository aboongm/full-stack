import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = ({ feedback }) => {
  const all = feedback.reduce((acc, index) => acc + index, 0);
  const average = all / feedback.length;
  const positive = feedback[0] / all;
  if (feedback[0] === 0 && feedback[1] === 0 && feedback[2] === 0) {
    return <div>No feedBack given</div>;
  }

  return (
    <>
      <StatisticLine feedback={feedback[0]} text="good" />
      <StatisticLine feedback={feedback[1]} text="neutral" />
      <StatisticLine feedback={feedback[2]} text="bad" />
      <StatisticLine feedback={all} text="all" />
      <StatisticLine feedback={average} text="average" />
      <StatisticLine feedback={positive} text="positive%" />
    </>
  );
};

export default Statistics;
