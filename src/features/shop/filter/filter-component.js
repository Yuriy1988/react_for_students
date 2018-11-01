import React from 'react';
import Button from '../../../shared/components/button/button-component';
import { connect } from 'react-redux';
import styles from './filter.module.scss';

import { searchByName, sortBy } from './actions';

const Filter = (props) => {
  const { handleFilterChange, value, sortBy } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.btnGroup}>
        <Button onClick={sortBy.bind(null, 'name')}>Sort by name</Button>
        <Button onClick={sortBy.bind(null, 'price')}>Sort by price</Button>
        <Button onClick={sortBy.bind(null, 'inCart')}>Sort by q-ty in cart</Button>
        <Button onClick={sortBy.bind(null, null)}>Disable sort</Button>
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
});

const mapDispatchToProps = (dispatch) => ({
  handleFilterChange: (event) => dispatch(searchByName(event.target.value)),
  sortBy: (value) => dispatch(sortBy(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
