import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

class PrivateRoute extends Component {
  render() {
    const { isLoggedIn, ...props } = this.props;

    return true
      ? <Route {...props} />
      : <Redirect to='/auth' />;
  }
}

export default connect(
  mapStateToProps
)(PrivateRoute);
