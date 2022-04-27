import React from 'react';
import Header from './Header';
import Button from './Button';

const Feedback = () => {
  return (
    <>
      <Header text="give feedback" />
      <div className="btn-container">
        <Button text="good" />
        <Button text="neutral" />
        <Button text="bad" />
      </div>
    </>
  );
};

export default Feedback;
