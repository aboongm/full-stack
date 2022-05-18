import React from 'react';

const Persons = ({ filtered }) => {
  console.log(filtered);
  return (
    <>
      {filtered.map((person, index) => (
        <p key={index}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  );
};

export default Persons;
