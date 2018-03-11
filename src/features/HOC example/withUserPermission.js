import React from 'react';
import { connect } from 'react-redux';

function withUserPermission(WrappedComponent) {
  return (
    connect((state) => ({ isLoggedIn: true }))(
      WrappedComponent
    )
  );
}

export default withUserPermission;
