import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button/Button';
import { getCountVolue } from './selectors';

import { increment, decrement } from './counterActions';

const mapStateToProps = (state) => ({
  countValue: getCountVolue(state),
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

class Counter extends Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  render() {
    const { countValue } = this.props;

    return (
      <div>
        <div className='card'>Counter value: {countValue}</div>
        <Button onClick={this.increment}>Increment</Button>
        <Button onClick={this.decrement}>Decrement</Button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
