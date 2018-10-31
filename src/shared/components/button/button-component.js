import React from 'react';
import styles from './button.module.scss';

const Button = (props) => {
  const { children, onClick } = props;

  return (
    <button
      className={`btn btn-primary ${styles.button}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
