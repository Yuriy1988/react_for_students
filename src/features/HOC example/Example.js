import React from 'react';
import { compose } from 'redux';
import withUserPermission from './withUserPermission';
import withBackground from './withBackground';

const Example = (props) => {
  const { isLoggedIn } = props;

  return (
    <div>
      { isLoggedIn ? 'HELLO USER': 'YOU ARE NOT ALLOWED TO SEE THIS PAGE' }
    </div>
  );
};

export default compose(
  withBackground,
  withUserPermission,
)(Example);
