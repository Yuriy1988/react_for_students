import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.scss';

const Nav = () => {
  return (
    <Fragment>
      <Link
        activeClassName={styles.active}
        className={styles.nav}
        exact
        to='/cart'
      >Go to cart</Link>
      <Link
        activeClassName={styles.active}
        exact
        to='/shop'
      >Go to shop</Link>
    </Fragment>
  );
};

export default Nav;
