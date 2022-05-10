import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
  return (
    <>
      <Header key={course.id} name={course.name} />
      <Content parts={course.parts} />
    </>
  );
};

export default Course;
