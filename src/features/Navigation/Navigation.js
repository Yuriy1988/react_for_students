import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';

const NavBar = () => (
  <Fragment>
    <div className={styles.navbar}>
      <NavLink
        activeClassName={styles.active}
        className={styles.link}
        to='/'
      >
        Products
      </NavLink>
      <NavLink
        activeClassName={styles.active}
        activeStyle={{ fontWeight: 'bold', color: 'red' }}
        className={styles.link}
        to='/cart'
      >Cart</NavLink>
    </div>
  </Fragment>
);

export default NavBar;
