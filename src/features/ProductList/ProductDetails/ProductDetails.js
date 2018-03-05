import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPrpos = (state, ownProps) => ({
  product: state.products.products.find(p => p.id == ownProps.match.params.id)
});

class ProductDetails extends Component {
  render() {
    const { product } = this.props;

    return (
      <div>
        <div>
          <h1>PRODUCT DETAILS</h1>
        </div>
        <div>
          <b>Product name: {product.name}</b>
        </div>
        <div>
          <b>Product price $: {product.price}</b>
        </div>
        <div>
          <b>In cart {product.inCart}</b>
        </div>
        <button>
          <Link to={`/edit/${product.id}`}>
            EDIT
          </Link>
        </button>
      </div>
    );
  }
}

export default connect(
 mapStateToPrpos
)(ProductDetails);

// export default ProductDetails;
