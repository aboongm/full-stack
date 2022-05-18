import React from 'react';

const Filter = ({ filterNames, handleFilterName }) => {
  return (
    <>
      <p>
        filter shown with
        <input
          type="text"
          name="search"
          placeholder="search"
          value={filterNames}
          onChange={handleFilterName}
        />
      </p>
    </>
  );
};

export default Filter;
