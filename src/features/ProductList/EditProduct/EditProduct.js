import React, { Component } from 'react';
import { connect }from 'react-redux';
import { editProduct } from '../productsActions';

const mapStateToProps = (state, ownProps) => ({
  product: state.products.products.find(product => String(product.id) === ownProps.match.params.id),
});

const mapDispatchToProps = {
  editProduct,
};

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.product.name,
      price: props.product.price,
    };
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onPriceChange = (e) => {
    this.setState({
      price: e.target.value,
    });
  };

  onSave = () => {
    const product = { ...this.props.product, ...this.state };
    console.log('product', product);
    this.props.editProduct(product);
  };

  render() {
    const { name, price } = this.state;
    if (!name) return <div> NO product</div>;
    return (
      <div>
        <div>
          <b>Product name: </b>
          <input
            onChange={this.onNameChange}
            value={name}
          />
        </div>
        <div>
          <b>Product price $</b>
          <input
            onChange={this.onPriceChange}
            value={price}
          />
        </div>
        <div>
          <button onClick={this.onSave}>SAVE</button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProduct);
