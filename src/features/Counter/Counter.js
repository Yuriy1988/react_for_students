import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button/Button';

import { increment, decrement } from './counterActions';

const mapStateToProps = (state) => ({
  value: state.counter.countValue,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

class Counter extends Component {
  render() {
    return (
      <div>
        <div className='card'>Counter value: {this.props.value}</div>
        <Button onClick={this.props.increment}>Increment</Button>
        <Button onClick={this.props.decrement}>Decrement</Button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
