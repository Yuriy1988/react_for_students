import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navBar.module.scss';

const NavBar = () => (
  <Fragment>
    <div className={styles.navbar}>
      <NavLink
        activeClassName={styles.active}
        className={styles.link}
        to='/page2'
      >
        Page 2
      </NavLink>
      <NavLink
        activeClassName={styles.active}
        activeStyle={{ fontWeight: 'bold', color: 'red' }}
        className={styles.link}
        to='/page1'
      >Page1</NavLink>
      <NavLink
        activeClassName={styles.active}
        activeStyle={{ fontWeight: 'bold', color: 'red' }}
        className={styles.link}
        to='/private'
      >Private Page</NavLink>
    </div>
  </Fragment>
);

export default NavBar;
