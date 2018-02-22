import React from 'react';

const Input = (props) => {
  const { onChange } = props;

  return (
    <input
      className='form-control'
      onChange={onChange}
    />
  );
};

export default Input;
