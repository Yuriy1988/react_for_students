import React, { Component } from 'react';

function withBackground(WrappedComponent) {
  return class extends Component {
    state = {
      value: '',
    };

    onChange = (e) => {
      this.setState({
        value: e.target.value,
      });
    };

    render() {
      const { value } = this.state;
      return (
        <div style={{ backgroundColor: value }}>
          <input
            onChange={this.onChange}
            value={this.state.value}
          />
          <WrappedComponent />
        </div>
      );
    }
  };
}

export default withBackground;
