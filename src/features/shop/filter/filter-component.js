import React from 'react';
import Button from '../../../shared/components/button/button-component';
import { connect } from 'react-redux';
import styles from './filter.module.scss';

import { searchByName, sortBy } from './actions';

const Filter = (props) => {
  const { handleFilterChange, value, sortBy, products } = props;

  const handleSort = (sortByValue, products) => {
    const ids = [...products]
      .sort((a, b) => a[sortByValue] > b[sortByValue] ? 1 : - 1)
      .map(p => p.name);

    sortBy(ids);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.btnGroup}>
        <Button onClick={handleSort.bind(null, 'name', products)}>Sort by name</Button>
        <Button onClick={handleSort.bind(null, 'price', products)}>Sort by price</Button>
        <Button onClick={handleSort.bind(null, 'inCart', products)}>Sort by q-ty in cart</Button>
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

const mapStateToProps = (state) => ({
  value: state.filter.filterValue,
  products: state.shop.products,
});

const mapDispatchToProps = (dispatch) => ({
  handleFilterChange: (event) => dispatch(searchByName(event.target.value)),
  sortBy: (value) => dispatch(sortBy(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
