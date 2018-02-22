import React, { Component } from 'react';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import styles from './filter.module.scss';

class Filter extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.filter}>
          <div>
            <b>Search by name</b>
            <Input />
          </div>
          <div>
            <Button>Sort by price</Button>
            <Button>Search</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
