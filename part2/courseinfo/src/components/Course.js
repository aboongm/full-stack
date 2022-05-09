import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
  const { id, name, parts } = course;
  return (
    <>
      <Header name={name} />
      <Content parts={parts} key={id} />
    </>
  );
};

export default Course;
