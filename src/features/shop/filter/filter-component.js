import React from 'react';

const Filter = (props) => {
  const { handleFilterChange, value } = props;
  return (
    <div>
      <input
        onChange={handleFilterChange}
        value={value}
      />
    </div>
  );
};

export default Filter;
