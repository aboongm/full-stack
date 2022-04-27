import React from 'react';
import Header from './Header';
import StatisticLine from './StatisticLine';

const Statistics = () => {
  return (
    <>
      <Header text="statistics" />
      <StatisticLine text="good" number={6} />
      <StatisticLine text="neutral" number={2} />
      <StatisticLine text="good" number={1} />
      <StatisticLine text="all" number={9} />
      <StatisticLine text="average" number={0.55} />
      <StatisticLine text="positive" number={66.5} />
    </>
  );
};

export default Statistics;
