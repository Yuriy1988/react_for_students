import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Link } from 'react-router-dom';
import { onLoginFormChange, onLoginSubmit } from './actions';
import Login from './login/login-component';
import Registration from './registration/registration-component';
import styles from './style.scss';

const Auth = (props) => {
  const { isLoggedIn } = props;
  const loginPath = `${props.match.path}/login`;
  const registerPath = `${props.match.path}/register`;

  if (isLoggedIn) {
    return <Redirect to='/shop' />;
  }

  return (
    <div className={styles.root}>
      <h1>AUTH PAGE</h1>
      <div>
        <Link to={registerPath}>Don't have an account ? REGISTER</Link>
      </div>
      <div>
        <Link to={loginPath}>Have an account ? Go to the LOGIN page</Link>
      </div>

      <Route
        path={loginPath}
        render={() => <Login {...props} />}
      />
      <Route
        path={registerPath}
        render={() => <Registration {...props} />}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = {
  handleLogin: onLoginSubmit,
  handleChange: onLoginFormChange,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
