import React, { Component } from 'react';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import styles from './filter.module.scss';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  onChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    const { sortByPrice, searchByName } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.filter}>
          <div>
            <b>Search by name</b>
            <Input onChange={this.onChange} />
          </div>
          <div>
            <Button onClick={sortByPrice}>
              Sort by price
            </Button>
            <Button onClick={searchByName.bind(null, this.state.inputValue)}>Search</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
