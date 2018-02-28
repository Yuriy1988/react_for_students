import React, { Component } from 'react';
import Button from '../../components/Button/Button';

class Counter extends Component {
  render() {
    return (
      <div>
        <div className='card'>Counter value</div>
        <Button>Increment</Button>
        <Button>Decrement</Button>
      </div>
    );
  }
}

export default Counter;
