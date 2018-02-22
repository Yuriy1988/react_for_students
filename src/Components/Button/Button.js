import React from 'react';

const Input = (props) => {
  const { onClick, children, disabled } = props;

  return (
    <button
      className='btn btn-primary m-1'
      disabled={disabled}
      onClick={onClick}
      type='text'
    >{children}</button>
  );
};

export default Input;
