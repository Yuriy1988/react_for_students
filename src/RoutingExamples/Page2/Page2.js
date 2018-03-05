import React, { Component } from 'react';

class Page2 extends Component {
  render() {
    return (
      <h1>
        THIS IS PAGE 2
        <br />
        {this.props.test}
      </h1>
    );
  }
}

export default Page2;
