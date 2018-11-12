import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav.scss';

const Nav = () => {
  return (
    <Fragment>
      <NavLink
        activeClassName={styles.active}
        className={styles.nav}
        exact
        to='/cart'
      >Go to cart</NavLink>
      <NavLink
        activeClassName={styles.active}
        className={styles.nav}
        exact
        to='/shop/create'
      >Create new Product</NavLink>
      <NavLink
        activeClassName={styles.active}
        exact
        to='/shop'
      >Go to shop</NavLink>
    </Fragment>
  );
};

export default Nav;
