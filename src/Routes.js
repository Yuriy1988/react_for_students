import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Page1 from './RoutingExamples/Page1/Page1';
import Page2 from './RoutingExamples/Page2/Page2';
import PrivatePage from './RoutingExamples/PrivatePage/PrivatePage';
import LoginFailed from './RoutingExamples/LoginFailed/LoginFailed';

class Routes extends Component {
  state = {
    isLoggedIn: false,
  };

  handleLogIn = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
        <button onClick={this.handleLogIn}>
          {isLoggedIn ? 'Log out' : 'Log in'}
        </button>
        <Switch>
          <Route
            component={Page1}
            path='/page1'
          />
          <Route
            component={Page2}
            path='/page2'
          />
          <Route
            exact
            path='/private'
            render={() => <PrivatePage isLoggedIn={isLoggedIn} />}
          />
          <Route
            component={LoginFailed}
            path='/loginFailed'
          />
          <Route
            path='/'
            render={() => <Page2 test='HOME PAGE' />}
          />
        </Switch>
      </div>
    );
  }
}

export default Routes;
