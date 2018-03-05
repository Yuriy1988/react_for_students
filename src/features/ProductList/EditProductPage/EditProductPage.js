import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToPrpos = (state, ownProps) => ({
  product: state.products.products.find(p => p.id == ownProps.match.params.id)
});

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { id, name, price, inCart } = props.product;

    this.state = {
      id,
      name,
      price,
      inCart,
    };
  }

  render() {
    const { product } = this.props;

    return (
      <div>
        <div>
          <h1>EDIT PRODUCT PAGE</h1>
        </div>
        <div>
          <b>Product name</b>
          <input value={this.state.name} />
        </div>
        <div>
          <b>Product price $</b>
          <input value={this.state.price} />
        </div>
        <button>Submit</button>
      </div>
    );
  }
}

export default connect(
  mapStateToPrpos
)(ProductDetails);

// export default ProductDetails;
