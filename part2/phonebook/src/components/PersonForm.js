import React from 'react';

const PersonForm = ({
  addNameNumber,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <>
      <form onSubmit={addNameNumber}>
        <div>
          name:{' '}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:{' '}
          <input
            type="text"
            name="number"
            placeholder="Phone Number"
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
