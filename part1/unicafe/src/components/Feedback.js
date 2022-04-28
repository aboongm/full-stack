import React from 'react';
import Header from './Header';
import Button from './Button';

const Feedback = (props) => {
  return (
    <>
      <Header text="give feedback" />
      <div className="btn-container">
        <Button handleClick={props.handleClick} text="good" />
        <Button handleClick={props.handleClick} text="neutral" />
        <Button handleClick={props.handleClick} text="bad" />
      </div>
    </>
  );
};

export default Feedback;
