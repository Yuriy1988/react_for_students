import React, { Component } from 'react';
import { Redirect } from 'react-router';

class PrivatePage extends Component {
  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn
          ? <h1>Welcome to private page</h1>
          : <Redirect to='/loginFailed' />
        }
      </div>
    );
  }
}

export default PrivatePage;
