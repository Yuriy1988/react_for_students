import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProductById } from '../selectors';
import { editProduct } from '../actions';
import styles from './product.module.scss';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.product.name,
    };
  }

  handleEdit = () => {
    this.props.editProduct({
      ...this.props.product,
      ...this.state,
    }).then(() => {
      this.props.history.goBack();
    });
  };


  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };


  render() {
    const { product } = this.props;

    return (
      <Fragment>
        <Link to='/'>Go to product list</Link>
        <div
          className={styles.product}
          style={{ border: '1px solid black' }}
        >
          <h2>Name: <input onChange={this.handleChange} value={this.state.name} /></h2>
          <p>Price: {product.price}</p>
          <p>In Cart: {product.inCart}</p>
          <p>Total price: {product.price * product.inCart}</p>
          <button onClick={this.handleEdit}>Edit product</button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => ({
  product: getProductById(state.shop.products, props.match.params.id),
});

const mapDispatchToProps = {
  editProduct,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
