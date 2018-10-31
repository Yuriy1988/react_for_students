import React from 'react';
import Button from '../../../shared/components/button/button-component';
import styles from './filter.module.scss';

const Filter = (props) => {
  const { handleFilterChange, value, handleSort } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.btnGroup}>
        <Button onClick={handleSort.bind(null, 'name')}>Sort by name</Button>
        <Button onClick={handleSort.bind(null, 'price')}>Sort by price</Button>
        <Button onClick={handleSort.bind(null, 'inCart')}>Sort by q-ty in cart</Button>
        <Button onClick={handleSort.bind(null, null)}>Disable sort</Button>
      </div>

      <div>
        <span className={styles.description}>
          Search product by name
        </span>
        <input
          className={styles.input}
          onChange={handleFilterChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default Filter;
